(function(global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['InspectElement'] = factory({}); // <script>
    }
}(this, function(exports) {
    var InspectElement = function() {
        'use strict';
        var me = this;
        var scene, scene_data = [],
            scene_hash = {};
        var scenedraw, scenedraw_nodes = {
                node: null,
                selected_node: null
            },
            SCENEDRAW_NAME = 'INSPECT_ELEMENT_DRAWING';
        var base_url = get_base_url();

        function get_selected() {
            return scenedraw_nodes.selected_node;
        }
        me.get_selected = get_selected;

        // to public
        // me.scene_data = scene_data, me.scene_hash = scene_hash;

        function set_attr(to, from, name, type, readonly, value, desc) {
            try {
                if (name == 'glServerState') return;
                if (type == 'point') return;
                if (type == 'size') return;

                to[name] = {
                    type: type,
                    readonly: readonly,
                    //value: from[name],//,//from[name] == null ? from[name] : value
                    desc: desc || name
                };

                if (type == 'image') {
                    from[name] && from[name].url && (to[name].value = base_url + '/' + cc.loader.resPath + '/' + from[name].url);
                } else if (type == 'color') {
                    var value = from[name];
                    var r = 255,
                        g = 255,
                        b = 255,
                        a = 255;
                    // 为兼容cocos2d某个版本的webgl下,color,无rgb属性的bug
                    if (value.r) { // 正常的color能取到rgb
                        r = (value.r || value.red), g = (value.g || value.green), b = (value.b || value.blue);
                    } else if (value._aU8) { // 非正常的color
                        r = value._rU8[0], g = value._gU8[0], b = value._bU8[0];
                    }
                    to[name].value = {
                        r: r,
                        g: g,
                        b: b,
                        a: a
                    };
                } else {
                    to[name].value = from[name];
                }
            } catch (e) {}
        }

        function get_base_url() {
            var p = location.pathname.split('/');
            p.pop();
            return location.protocol + '//' + location.host + p.join('/');
        }

        function serialize_item_data(node) {
            //console.log('serialize_item_data',node);
            if (!node) return {
                data: {
                    id: null
                },
                node: {
                    __instanceId: null
                }
            };
            var parent = node.getParent && node.getParent() || {};
            var data = {
                id: node.__instanceId || null,
                parentId: parent.__instanceId || null,
                // attr: {
                // __instanceId: node.__instanceId || null,
                // tag: node.tag,
                // x: node.x, y: node.y, width: node.width, height: node.height,
                // visible: node.visible, zIndex: node.zIndex
                // },
                attr: {},
                className: node._className || null
            };
            set_attr(data.attr, node, '__instanceId', 'string', true);

            var attr_hash = InspectElementConfig[node._className] || {};
            for (var attr_name in attr_hash) {
                set_attr(data.attr, node, attr_name, attr_hash[attr_name].type, attr_hash[attr_name].readonly, attr_hash[attr_name].value, attr_hash[attr_name].desc);
            }

            if (node.getChildren().length > 0) {
                // add a place-holder,and tell someone "i have a child"
                data.nodes = [];
                data.nodes.length = node.getChildren().length;
                //d.nodes = [{id:null}];
            }

            // in chrome
            //if (node._className == 'LabelTTF'){
            //    data.text = node.getString();
            //}
            // in plugin or webpage
            //data.name = node.constructor.name || null;

            // find var name form parent
            for (var i in parent) {
                try {
                    if (parent[i] && parent[i].__instanceId && parent[i].__instanceId == node.__instanceId) {
                        data.name = i;
                        break;
                    }
                } catch (e) {
                    continue
                }
            }
            // find var name form grandpa
            // if (!data.name){
            // var grandpa = parent && parent.getParent && parent.getParent() || {};
            // for (var i in grandpa){
            // try{
            // if (grandpa[i] && grandpa[i].__instanceId && grandpa[i].__instanceId == node.__instanceId) {
            // data.name = i;
            // break;
            // }
            // }catch(e){ continue }
            // }
            // }

            data.text = node._className || null;
            return {
                data: data,
                node: node
            };
        }

        function getChildren(node) {
            //node._children getChildren
        }

        function get_node_children(node, fn) {
            var tree_children = [];
            // get root
            if (node == null) {
                try {
                    tree_children = cc.director.getRunningScene().getChildren();
                } catch (e) {
                    console.log('error', e, tree_children);
                    return [];
                }
            }
            // get node's children
            if (node instanceof cc.Node) tree_children = node.getChildren();
            // get by id
            if (typeof node == 'number' || typeof node == 'string') {
                if (scene_hash[node]) {
                    tree_children = scene_hash[node].getChildren() || [];
                } else {
                    return [];
                }
            }

            if (tree_children.length == 0) return [];

            var a, d, node, tree_data = [];
            for (var i = 0, j = tree_children.length; i < j; i++) {
                if (tree_children[i].getTag() != SCENEDRAW_NAME) {
                    a = serialize_item_data(tree_children[i]),
                        d = a.data,
                        node = a.node;

                    tree_data.push(d);
                    /*
                    if (node.getChildren().length > 0) {
                        // add a place-holder,and tell someone "i have a child"
                        d.nodes = []; d.nodes.length = node.getChildren().length;
                        //d.nodes = [{id:null}];
                        tree_data.push(d);
                    }else{
                        tree_data.push(d);
                    }
                    */
                    // get hash
                    scene_hash[node.__instanceId] = node;
                }
            }

            if (!scenedraw) {
                create_scenedraw(cc.director.getRunningScene());
            }

            fn && fn(tree_data);
            return tree_data;
        }
        me.get_node_children = get_node_children;

        function get_hierarchy(sc) {
            if (!sc) {
                if (cc.director) {
                    scene = cc.director.getRunningScene();
                } else {
                    console.log("please wait for the engine power on");
                    return;
                }
            } else {
                scene = sc;
            }

            // scenedraw && scenedraw.clear && scenedraw.clear();
            var sceneChildren = scene.getChildren();

            function find(tree_children, tree_data) {
                var a, d, node;
                for (var i = 0, j = tree_children.length; i < j; i++) {
                    a = serialize_item_data(tree_children[i]),
                        d = a.data,
                        node = a.node;

                    if (node.getChildren().length > 0) {
                        d.nodes = [];
                        tree_data.push(d);
                        find(node.getChildren && node.getChildren(), d.nodes);
                    } else {
                        tree_data.push(d);
                    }
                    // get hash
                    scene_hash[node.__instanceId] = node;
                }
            }
            // reset scene_data
            scene_data = [], scene_hash = {};
            find(sceneChildren, scene_data);

            // is added ?
            if (!scenedraw) {
                create_scenedraw(scene);
            }
            return scene_data;
        }
        me.get_hierarchy = get_hierarchy;


        function begin_inspect(sc) {
            try {
                if (document.getElementById('cocos2d_inspect_layer')) return;
                var pos = {
                        x: 0,
                        y: 0
                    },
                    inspect_node;

                function find(tree_children) {
                    var node, result = null,
                        box;
                    for (var i = tree_children.length - 1; i >= 0; i--) {
                        node = tree_children[i];
                        box = node.getBoundingBoxToWorld();

                        // if hittest
                        if (node.visible &&
                            pos.x >= box.x &&
                            pos.y >= box.y &&
                            pos.x <= box.x + box.width &&
                            pos.y <= box.y + box.height
                        ) {
                            result = node;
                            break;
                        }
                    }
                    if (result != null) {
                        if (result.getLocalZOrder() < 0) return result;

                        if (result.getChildren().length > 0) {
                            var r = find(result.getChildren());
                            if (r != null) return r;
                        }
                    }
                    return result;
                }

                function find_fullpath(node) {
                    var path = [serialize_item_data(node).data]; // default is me
                    function f(n) {
                        if (n && n.getParent && n.getParent() != null && !(n.getParent() instanceof cc.Scene)) {
                            path.push(serialize_item_data(n.getParent()).data);
                            f(n.getParent());
                        }
                    }
                    f(node);
                    return path.reverse(); // the order is [root, ... grandpa, papa, me]
                }

                var el = document.createElement('DIV');
                el.id = 'cocos2d_inspect_layer';
                el.style.position = 'absolute';
                el.style.zIndex = '10';
                el.style.width = '100%';
                el.style.height = '100%';
                el.style.top = '0px';
                el.innerHTML = '<style>\
                    @-webkit-keyframes inspect_pulse_glow {\
                        0% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                        50% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(255,238,128,1);\
                        }\
                        100% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                    }\
                    @keyframes inspect_pulse_glow {\
                        0% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                        50% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(255,238,128,1);\
                        }\
                        100% {\
                            box-shadow: inset 0px 0px 0px 4px rgba(102,170,238,.8);\
                        }\
                    }\
                    .inspect_pulse_glow {\
                        -webkit-animation-duration: 1500ms;\
                        -moz-animation-duration: 1500ms;\
                        animation-duration: 1500ms;\
                        -webkit-animation-iteration-count: infinite;\
                        -moz-animation-iteration-count: infinite;\
                        animation-iteration-count: infinite;\
                        -webkit-animation-name: inspect_pulse_glow;\
                        animation-name: inspect_pulse_glow\
                    }\
                    </style>';
                //el.style.boxShadow = 'inset 0px 0px 0px 10px rgba(51,128,224,.5)';
                el.className = 'inspect_pulse_glow';
                cc.container.style.outline = 'rgba(51,128,224,.5) solid 2px';
                cc.container.style.boxShadow = '0px 0px 20px 10px rgba(51,128,224,.5)';

                el.onmousemove = function(e) {
                    //console.log(e.x - cc.container.offsetLeft, e.y - cc.container.offsetTop);
                    var layerX = (e.layerX == null) ? (e.x - cc.container.offsetLeft + window.scrollX) : e.layerX,
                        layerY = (e.layerY == null) ? (e.y - cc.container.offsetTop + window.scrollY) : e.layerY;

                    pos = {
                        x: Math.round(layerX / cc.view.getScaleX()),
                        y: Math.round((cc.container.clientHeight - layerY) / cc.view.getScaleY())
                    };

                    inspect_node = find(cc.director.getRunningScene().getChildren());
                    draw_rect(inspect_node, scenedraw_nodes.selected_node);
                };
                el.onclick = function(e) {
                    end_inspect();
                    me.on_inspect_node && me.on_inspect_node(
                        serialize_item_data(inspect_node).data, // current node
                        find_fullpath(inspect_node) // find full path
                    );
                };
                el.onblurclick = function(e) {
                    if (e.target.name == 'btn-insp') return;
                    if (e.target.id == 'cocos2d_inspect_layer') return;
                    end_inspect();
                };
                cc.container.appendChild(el);
                document.body.addEventListener('click', el.onblurclick);

            } catch (e) {
                console.log(e)
            }
        }
        me.begin_inspect = begin_inspect;

        function end_inspect() {
            try {
                var el = document.getElementById('cocos2d_inspect_layer');
                document.body.removeEventListener('click', el.onblurclick);
                el.onmousemove = el.onclick = el.onblurclick = null;
                cc.container.style.outline = '';
                cc.container.style.boxShadow = '';
                cc.container.removeChild(el);
                el = null;

            } catch (e) {
                console.log(e)
            }
        }
        me.end_inspect = end_inspect;

        function create_scenedraw(sc) {
            var last_scenedraw = sc.getChildByTag(SCENEDRAW_NAME);
            if (last_scenedraw) {
                //scenedraw = last_scenedraw;
                //clear_rect();
                //return;
                last_scenedraw.getParent().removeChild(last_scenedraw);
            }
            scenedraw = null;
            scenedraw = cc.DrawNode.create();
            scenedraw.setTag(SCENEDRAW_NAME);
            sc.addChild(scenedraw, 1000000); // top level
        }

        function compare_hierarchy() {

        }

        function clear_rect() {
            scenedraw && scenedraw.clear && scenedraw.clear()
        }
        me.clear_rect = clear_rect;

        function draw_rect(node, selected_node) {
            (typeof node == 'number' || typeof node == 'string') && (node = scene_hash[node]);
            (typeof selected_node == 'number' || typeof selected_node == 'string') && (selected_node = scene_hash[selected_node]);
            clear_rect();
            var box, left, top, right, bottom;
            scenedraw_nodes.node = node;
            scenedraw_nodes.selected_node = selected_node;

            if (node instanceof cc.Node && scenedraw) {
                box = node.getBoundingBoxToWorld();
                left = box.x, top = box.y, right = box.x + (box.width || 2), bottom = box.y + (box.height || 2);
                scenedraw.drawRect(cc.p(left, top), cc.p(right, bottom), cc.color(102, 170, 238, 60), 2, cc.color(102, 170, 238, 255));
            }
            //console.log('selected_node', selected_node, scene_hash[selected_node], selected_node instanceof cc.Node && scenedraw)
            if (selected_node instanceof cc.Node && scenedraw) {
                box = selected_node.getBoundingBoxToWorld();
                left = box.x, top = box.y, right = box.x + (box.width || 2), bottom = box.y + (box.height || 2);
                // cc.color(0,0,0,1) 这地方很诡异，如果alpha设置成0，在某些场景下会画出黑色实心矩形
                // 目前真相不明，暂时设置为1，可以保证开启画一个内部透明的矩形。
                scenedraw.drawRect(cc.p(left, top), cc.p(right, bottom), cc.color(0, 0, 0, 1), 2, cc.color(238, 204, 102, 240));
            }
        }
        me.draw_rect = draw_rect;

        function modify_node(node, attr) {
            if (typeof node == 'number' || typeof node == 'string') node = scene_hash[node];
            if (node instanceof cc.Node) {
                attr = attr || {};
                // set common
                for (var i in attr) node[i] = attr[i];
            }
        }
        me.modify_node = modify_node;

        function send_hierarchy(id) {
            get_hierarchy();
            /*
            websocket.send(JSON.stringify({
                method: 'DOM.refresh',
                params: scene_data,
                id: id
            }));*/
        }

        // cc hacks: redraw the hierarchy when scene is updated

        var tk, tk_update, // ticker
            delay = 10, // interval delay is 10ms
            timeout = 0, // init value
            timeout_max = 10 * 1000; // 10s
        me.start = function() {
            tk = setInterval(function() {
                timeout += delay;
                if (timeout > timeout_max) {
                    clearInterval(tk);
                    tk = null;
                    console.log('timeout: cocos2d engine is not be loaded.');
                    return;
                }

                if (document && !document.getElementsByTagName('canvas').length) return; // no canvas
                //alert(cc.director._runScene)
                if (typeof cc != "object" || !cc.director) {
                    //if (!cc || !cc.director){
                    return; // no cc
                }

                // is injected ?
                if (cc.director._runScene) {
                    me.on_start && me.on_start();
                    clearInterval(tk);
                    return;
                }

                console.log('cc is done!', cc);
                /*
                function on_update(sc){
                    get_hierarchy();
                    create_scenedraw(sc);

                    me.on_update && me.on_update(sc, scene_data, scene_hash);
                    /*
                    websocket.send(JSON.stringify({
                        method: 'DOM.documentUpdated'
                    }));*/

                //    console.log(sc)
                //};

                // cc.loader._getRes = cc.loader.getRes;
                /*cc.loader.getRes = function(a){
                    //cc.loader._getRes.apply(cc.loader,Array.prototype.slice.call(arguments))
                    console.log(a)
                    return cc.loader.cache[a]||cc.loader.cache[cc.loader._aliases[a]]
                };
                */
                cc.director._runScene = cc.director.runScene;
                cc.director.runScene = function(sc) {
                    cc.director._runScene(sc);

                    //hack code: delay 200ms wait for rendering on next frame.
                    setTimeout(function() {

                        //get_hierarchy(sc);
                        scene_data = [], scene_hash = {};
                        var tree_data = get_node_children(sc);
                        create_scenedraw(sc);

                        //console.log(sc._className, sc, sc._children[0]._className, sc.childrenCount, tree_data, scene_hash);
                        me.on_update && me.on_update(sc, tree_data, scene_hash);

                    }, 200);
                };

                cc.director._pushScene = cc.director.pushScene;
                cc.director.pushScene = function(sc) {
                    cc.director._pushScene(sc);

                    //hack code: delay 200ms wait for rendering on next frame.
                    setTimeout(function() {

                        scene_data = [], scene_hash = {};
                        var tree_data = get_node_children(sc);
                        create_scenedraw(sc);

                        me.on_update && me.on_update(sc, tree_data, scene_hash);

                    }, 200);
                };

                cc.director._popScene = cc.director.popScene;
                cc.director.popScene = function() {
                    cc.director._popScene();

                    //wait for animation
                    setTimeout(function() {
                        create_scenedraw(cc.director.getRunningScene());
                        me.on_start && me.on_start();

                    }, 1000);
                };

                cc.Node.prototype._addChild = cc.Node.prototype.addChild;
                cc.Node.prototype.addChild = function(child, localZOrder, tag) {
                    cc.Node.prototype._addChild.apply(this, [child, localZOrder, tag]);
                    //try{
                    var a = serialize_item_data(child),
                        data = a.data,
                        node = a.node,
                        is_root = false;
                    if (cc.director.getRunningScene() && cc.director.getRunningScene().__instanceId == data.parentId) {
                        is_root = true;
                    }
                    scene_hash[node.__instanceId] = node;
                    me.on_addChild && me.on_addChild(node, data, is_root);
                    //}catch(e){}
                    //console.log('parentId', child.getParent().__instanceId)
                };

                cc.Node.prototype._removeChild = cc.Node.prototype.removeChild;
                cc.Node.prototype.removeChild = function(child, cleanup) {
                    var parent,
                        data = {},
                        is_root = false;
                    try {
                        if (child == null || child.__instanceId == null) return;

                        scene_hash[child.__instanceId] = null;
                        delete scene_hash[child.__instanceId];
                        parent = child.getParent() || {};
                        data = {
                            id: child.__instanceId,
                            parentId: parent.__instanceId || null
                        };
                        if (cc.director.getRunningScene() && cc.director.getRunningScene().__instanceId == data.parentId) {
                            is_root = true;
                        }
                    } catch (e) {}

                    cc.Node.prototype._removeChild.apply(this, [child, cleanup]);
                    me.on_removeChild && me.on_removeChild(child, data, is_root);
                };

                tk_update = setInterval(function() {
                    draw_rect(scenedraw_nodes.node, scenedraw_nodes.selected_node)
                }, 80);

                me.on_start && me.on_start();
                clearInterval(tk);
            }, delay);
        };

        me.end = function() {
            clearInterval(tk);
            clearInterval(tk_update);
        };

    };

    return InspectElement;
}));
