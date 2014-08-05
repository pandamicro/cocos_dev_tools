(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['InspectElement'] = factory({}); // <script>
    }
}(this, function (exports) {
        var InspectElement = function(){
            'use strict';
            var me = this;
            var scene, scene_data = [], scene_hash = {};
            var scenedraw, scenedraw_nodes = {node:null, selected_node:null}, SCENEDRAW_NAME = 'INSPECT_ELEMENT_DRAWING';
            var base_url = get_base_url();
            
            // to public
            // me.scene_data = scene_data, me.scene_hash = scene_hash;
            
            function set_attr(to, from, name, type, readonly, value, desc){
                try{
                if (name == 'glServerState') return;
                if (type == 'point') return;
                if (type == 'size') return;
                
                to[name] = {
                    type: type,
                    readonly: readonly,
                    //value: from[name],//,//from[name] == null ? from[name] : value
                    desc: desc || name
                };
                
                if (type == 'image'){
                    from[name] && from[name].url && (to[name].value = base_url + '/' + from[name].url);
                }else if(type == 'color'){
                    var value = from[name];
                    var r=255,g=255,b=255,a=255;
                    // 为兼容cocos2d某个版本的webgl下,color,无rgb属性的bug
                    if (value.r){ // 正常的color能取到rgb
                        r = (value.r||value.red), g = (value.g || value.green), b = (value.b || value.blue);
                    }else if (value._aU8){ // 非正常的color
                        r = value._rU8[0],g = value._gU8[0],b = value._bU8[0];
                    }
                    to[name].value = {r:r,g:g,b:b,a:a};
                }else{
                    to[name].value = from[name];
                }
                }catch(e){}
            }
            
            function get_base_url(){
                var p = location.pathname.split('/');
                p.pop();
                return location.protocol + '//' + location.host + p.join('/');
            }
            
            function create_item_data(node){
                //console.log('create_item_data',node);
                if (!node) return {
                    data: {id:null},
                    node: {__instanceId:null}
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
                for (var attr_name in attr_hash){
                    set_attr(data.attr, node, attr_name, attr_hash[attr_name].type, attr_hash[attr_name].readonly, attr_hash[attr_name].value, attr_hash[attr_name].desc);
                }
                
                // in chrome
                //if (node._className == 'LabelTTF'){
                //    data.text = node.getString();
                //}
                // in plugin or webpage
                data.text = node._className || null;
                return {
                    data: data,
                    node: node
                };
            }
            
            function getChildren(node){
                //node._children getChildren
            }
            
            function get_node_children(node, fn){
                var tree_children = []
                // get root
                if (node == null){
                    try{
                        tree_children = cc.director.getRunningScene().getChildren();
                    }catch(e){ console.log('error', e, tree_children); return [] }
                }
                // get node's children
                if (node instanceof cc.Node) tree_children = node.getChildren();
                // get by id
                if (typeof node == 'number' || typeof node == 'string'){
                    if (scene_hash[node]){
                        tree_children = scene_hash[node].getChildren() || [];
                    }else{
                        return [];
                    }
                }
                
                if (tree_children.length == 0) return [];
                
                var a, d, node, tree_data = [];
                for (var i=0, j=tree_children.length; i<j; i++) {
                    if (tree_children[i].getTag() != SCENEDRAW_NAME){
                        a = create_item_data(tree_children[i]),
                        d = a.data,
                        node = a.node;
                        
                        if (node.getChildren().length > 0) {
                            // add a place-holder,and tell someone "i have a child" 
                            d.nodes = []; d.nodes.length = node.getChildren().length;
                            //d.nodes = [{id:null}]; 
                            tree_data.push(d);
                        }else{
                            tree_data.push(d);
                        }
                        // get hash
                        scene_hash[node.__instanceId] = node;
                    }
                }
                
                if (!scenedraw){
                    create_scenedraw(cc.director.getRunningScene());
                }
                
                fn && fn(tree_data);
                return tree_data;
            }
            me.get_node_children = get_node_children;
            
            function get_hierarchy(sc){
                if (!sc){
                    if(cc.director){
                        scene = cc.director.getRunningScene();
                    }else{
                        console.log("please wait for the engine power on");
                        return;
                    }
                }else{
                    scene = sc;
                }
                
                // scenedraw && scenedraw.clear && scenedraw.clear();
                var sceneChildren = scene.getChildren();
                function find(tree_children, tree_data){
                    var a, d, node;
                    for (var i=0, j=tree_children.length; i<j; i++) {
                        a = create_item_data(tree_children[i]),
                        d = a.data,
                        node = a.node;
                        
                        if (node.getChildren().length > 0) {
                            d.nodes = [];
                            tree_data.push(d);
                            find(node.getChildren && node.getChildren(), d.nodes);
                        }else{
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
                if (!scenedraw){
                    create_scenedraw(scene);
                }
                return scene_data;
            }
            me.get_hierarchy = get_hierarchy;
            
            function create_scenedraw(sc){
                var last_scenedraw = sc.getChildByTag(SCENEDRAW_NAME);
                if (last_scenedraw){
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
            
            function compare_hierarchy(){
                
            }
            
            function clear_rect(){
                scenedraw && scenedraw.clear && scenedraw.clear()
            }
            me.clear_rect = clear_rect;
            
            function draw_rect(node, selected_node){
                (typeof node == 'number' || typeof node == 'string') && (node = scene_hash[node]);
                (typeof selected_node == 'number' || typeof selected_node == 'string') && (selected_node = scene_hash[selected_node]);
                clear_rect();
                var box,left,top,right,bottom;
                scenedraw_nodes.node = node;
                scenedraw_nodes.selected_node = selected_node;
                
                if (node instanceof cc.Node && scenedraw){
                    box = node.getBoundingBoxToWorld();
                    left = box.x, top = box.y, right = box.x+(box.width||2), bottom = box.y+(box.height||2);
                    scenedraw.drawRect(cc.p(left,top), cc.p(right,bottom), cc.color(102,170,238,60), 2, cc.color(102,170,238,255));
                }
                //console.log('selected_node', selected_node, scene_hash[selected_node], selected_node instanceof cc.Node && scenedraw)
                if (selected_node instanceof cc.Node && scenedraw){
                    box = selected_node.getBoundingBoxToWorld();
                    left = box.x, top = box.y, right = box.x+(box.width||2), bottom = box.y+(box.height||2);
                    // cc.color(0,0,0,1) 这地方很诡异，如果alpha设置成0，在某些场景下会画出黑色实心矩形
                    // 目前真相不明，暂时设置为1，可以保证开启画一个内部透明的矩形。
                    scenedraw.drawRect(cc.p(left,top), cc.p(right,bottom), cc.color(0,0,0,1), 2, cc.color(238,204,102,240));
                }
            }
            me.draw_rect = draw_rect;
            
            function modify_node(node, attr){
                if (typeof node == 'number' || typeof node == 'string') node = scene_hash[node];  
                if (node instanceof cc.Node){
                    attr = attr || {};
                    // set common
                    for (var i in attr) node[i] = attr[i];
                }
            }
            me.modify_node = modify_node;
            
            function send_hierarchy(id){
                get_hierarchy();
                /*
                websocket.send(JSON.stringify({
                    method: 'DOM.refresh',
                    params: scene_data,
                    id: id
                }));*/
            }
            
            // cc hacks: redraw the hierarchy when scene is updated
            
            var tk, tk_update,// ticker
                delay = 10, // interval delay is 10ms
                timeout = 0, // init value
                timeout_max = 10 * 1000; // 10s
            me.start = function(){
                tk = setInterval(function(){
                    timeout += delay;
                    if (timeout > timeout_max){
                        clearInterval(tk);
                        tk = null;
                        console.log('timeout: cocos2d engine is not be loaded.');
                        return;
                    }
                    
                    if (document && !document.getElementsByTagName('canvas').length) return; // no canvas
                    //alert(cc.director._runScene)
                    if (typeof cc != "object" || !cc.director){
                    //if (!cc || !cc.director){
                        return; // no cc
                    }
                    
                    // is injected ?
                    if (cc.director._runScene){
                        me.on_start && me.on_start();
                        clearInterval(tk);
                        return;
                    }
                    
                    console.log('cc is done!',cc);
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
                    cc.loader.getRes = function(a){
                        //cc.loader._getRes.apply(cc.loader,Array.prototype.slice.call(arguments))
                        console.log(a)
                        return cc.loader.cache[a]||cc.loader.cache[cc.loader._aliases[a]]
                    };
                    
                    cc.director._runScene = cc.director.runScene;
                    cc.director.runScene = function(sc){
                        cc.director._runScene(sc);
                        
                        //get_hierarchy(sc);
                        scene_data = [], scene_hash = {};
                        var tree_data = get_node_children(sc);
                        create_scenedraw(sc);
                        
                        me.on_update && me.on_update(sc, tree_data, scene_hash);
                    };
                    
                    cc.director._pushScene = cc.director.pushScene;
                    cc.director.pushScene = function(sc){
                        cc.director._pushScene(sc);
                        
                        scene_data = [], scene_hash = {};
                        var tree_data = get_node_children(sc);
                        create_scenedraw(sc);
                        
                        me.on_update && me.on_update(sc, tree_data, scene_hash);
                    };

                    cc.director._popScene = cc.director.popScene;
                    cc.director.popScene = function(){
                        cc.director._popScene();
                        
                        //wait for animation
                        setTimeout(function() {
                            create_scenedraw(cc.director.getRunningScene());
                            me.on_start && me.on_start();

                        },1000);
                    };

                    cc.Node.prototype._addChild = cc.Node.prototype.addChild;
                    cc.Node.prototype.addChild = function(child, localZOrder, tag){
                        cc.Node.prototype._addChild.apply(this, [child, localZOrder, tag]);
                        //try{
                        var a = create_item_data(child),
                            data = a.data,
                            node = a.node;    
                        scene_hash[node.__instanceId] = node;
                        me.on_addChild && me.on_addChild(node, data);
                        //}catch(e){}
                        //console.log('parentId', child.getParent().__instanceId)
                    };
                    
                    cc.Node.prototype._removeChild = cc.Node.prototype.removeChild;
                    cc.Node.prototype.removeChild = function(child, cleanup){
                        var parent,data={};
                        try{
                            if (child.__instanceId == null) return;
                            scene_hash[child.__instanceId] = null;
                            delete scene_hash[child.__instanceId];
                            parent = child.getParent() || {};
                            data = {id: child.__instanceId, parentId: parent.__instanceId || null};
                        }catch(e){}
                        
                        cc.Node.prototype._removeChild.apply(this, [child, cleanup]);
                        me.on_removeChild && me.on_removeChild(child, data);
                    };
                    
                    tk_update = setInterval(function(){
                        draw_rect(scenedraw_nodes.node, scenedraw_nodes.selected_node)
                    },80);
                    
                    me.on_start && me.on_start();
                    clearInterval(tk);
                },delay);
            };
            
            me.end = function(){
                clearInterval(tk);
                clearInterval(tk_update);
            };
        
        };
        
        return InspectElement;
}));