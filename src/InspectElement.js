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
            var scenedraw;
            
            // to public
            // me.scene_data = scene_data, me.scene_hash = scene_hash;
            
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
                    var a, node;
                    for (var i=0, j=tree_children.length; i<j; i++) {
                        node = tree_children[i];
                        a = {
                            id: node.__instanceId,
                            parentId: node.getParent().__instanceId,
                            /*node.getBoundingBoxToWorld(),/*data: node,*/
                            attr: {
                                tag: node.tag,
                                x: node.x, y: node.y, width: node.width, height: node.height,
                                visible: node.visible, zIndex: node.zIndex
                            },
                            className: node._className
                        };
                        
                        
                        // in chrome
                        //if (node._className == 'LabelTTF'){
                        //    a.text = node.getString();
                        //}
                        // in plugin or webpage
                        a.text = node._className;
                        node.opacity != undefined && (a.attr.opacity = node.opacity);
                        node.color != undefined && (a.attr.color = node.color);
                        var href = location.href.split('/');
                        href.pop();
                        node.texture && node.texture.url && (a.attr.texture = href.join('/') + '/' + node.texture.url);
                        
                        if (node._className == 'LabelTTF'){
                            a.attr.string = node.getString();
                            a.attr.fontName = node.fontName;
                            a.attr.fontSize = node.fontSize;
                            
                            a.attr.fillStyle = node.fillStyle;
                            a.attr.lineWidth = node.lineWidth;
                            a.attr.shadowBlur = node.shadowBlur;
                            a.attr.shadowOffsetX = node.shadowOffsetX;
                            a.attr.shadowOffsetY = node.shadowOffsetY;
                            a.attr.shadowOpacity = node.shadowOpacity;
                            a.attr.strokeStyle = node.strokeStyle;
                            a.attr.textAlign = node.textAlign;
                            a.attr.verticalAlign = node.verticalAlign;
                        }
                        
                        if (node.getChildren().length > 0) {
                            a.nodes = [];
                            tree_data.push(a);
                            find(node.getChildren && node.getChildren(), a.nodes);
                        }else{
                            tree_data.push(a);
                        }
                        // get hash
                        scene_hash[node.__instanceId] = node;
                    }
                }
                
                
                // reset scene_data
                scene_data = [], scene_hash = {};
                find(sceneChildren, scene_data);
                
                // var bb = convert(scene_data);
                // console.log('bb::::', bb);
                
                //console.log(scene_data);
                
                // is added ?
                if (!scenedraw){
                    create_scenedraw(scene);
                }
                
                return scene_data;
            
            }
            me.get_hierarchy = get_hierarchy;
            
            function create_scenedraw(sc){
                scenedraw = null;
                scenedraw = cc.DrawNode.create();
                scenedraw.setTag('INSPECT_ELEMENT_DRAWING');
                sc.addChild(scenedraw, 1000000);
            }
            
            function compare_hierarchy(){
                
            }
            
            function clear_rect(){
                scenedraw && scenedraw.clear && scenedraw.clear()
            }
            me.clear_rect = clear_rect;
            
            function draw_rect(node){
                if (typeof node == 'number'){
                    node = scene_hash[node];
                }
                if (node instanceof cc.Node){
                    scenedraw.clear();
                    var box = node.getBoundingBoxToWorld();
                    scenedraw.drawRect(cc.p(box.x,box.y), cc.p(box.x+box.width,box.y+box.height), cc.color(102,170,238,60), 1, cc.color(102,170,238,255));
                }
            }
            me.draw_rect = draw_rect;
            
            function modify_node(node, attr){
                if (typeof node == 'number') node = scene_hash[node];  
                if (node instanceof cc.Node){
                    attr = attr || {};
                    // set common
                    for (var i in attr) node[i] = attr[i];
                    //window.cccc = node;
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
            
            var tk, // ticker
                _delay = 10, // interval delay is 10ms
                _timeout = 0, // init value
                _timeout_max = 10 * 1000; // 10s
            me.start = function(){
                tk = setInterval(function(){
                    _timeout += _delay;
                    if (_timeout > _timeout_max){
                        clearInterval(tk);
                        tk = null;
                        console.log('timeout: cocos2d engine is not be loaded.');
                        return;
                    }
                    if (!document.getElementsByTagName('canvas').length) return; // no canvas
                    if (!cc || !cc.director) return; // no cc
                    
                    console.log('cc',cc);
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
                    
                    cc.director._runScene = cc.director.runScene;
                    cc.director.runScene = function(sc){
                        cc.director._runScene(sc);
                        
                        get_hierarchy(sc);
                        create_scenedraw(sc);
                        
                        me.on_update && me.on_update(sc, scene_data, scene_hash);
                    };
                    
                    clearInterval(tk);
                },_delay);
            };
        
        };
        
        return InspectElement;
}));