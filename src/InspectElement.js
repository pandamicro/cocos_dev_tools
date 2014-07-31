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
            
            function set_attr(to, from, name, type, init_value){
                if (init_value && from[name] == null){
                    to[name] = init_value;
                }else{
                    to[name] = from[name];
                }
                //console.log('set_attr', name, from[name]);
            }
            
            function get_base_url(){
                var p = location.pathname.split('/');
                p.pop();
                return location.protocol + '//' + location.host + p.join('/');
            }
            
            function create_item_data(node){
                if (!node) return {
                    data: {id:null},
                    node: {__instanceId:null}
                };
                
                var parent = node.getParent() || {};
                var data = {
                    id: node.__instanceId || null,
                    parentId: parent.__instanceId || null,
                    /*node.getBoundingBoxToWorld(),/*data: node,*/
                    attr: {
                        __instanceId: node.__instanceId || null,
                        tag: node.tag,
                        x: node.x, y: node.y, width: node.width, height: node.height,
                        visible: node.visible, zIndex: node.zIndex
                    },
                    className: node._className || null
                };
                
                // anchorX
                // anchorY
                // rotation
                // rotationX
                // rotationY
                // scale
                // scaleX
                // scaleY
                // skewX
                // skewY
                
                // in chrome
                //if (node._className == 'LabelTTF'){
                //    data.text = node.getString();
                //}
                // in plugin or webpage
                data.text = node._className || null;
                node.opacity != undefined && (data.attr.opacity = node.opacity);
                node.color != undefined && (data.attr.color = node.color);
                
                //console.log('node.texture:::', node && node.texture);
                node.texture && typeof node.texture == 'object' && node.texture != null && node.texture.url && (data.attr.texture = base_url + '/' + node.texture.url);
                
                //set_attr('string'.data.attr,node,'string');
                
                if (node._className == 'LabelTTF' || node._className == 'TextFieldTTF'){
                    set_attr(data.attr, node, 'string');
                    set_attr(data.attr, node, 'fontName');
                    set_attr(data.attr, node, 'fontSize');
                    
                    set_attr(data.attr, node, 'fillStyle');
                    set_attr(data.attr, node, 'lineWidth');
                    set_attr(data.attr, node, 'shadowBlur');
                    set_attr(data.attr, node, 'shadowOffsetX');
                    set_attr(data.attr, node, 'shadowOffsetY');
                    set_attr(data.attr, node, 'shadowOpacity');
                    set_attr(data.attr, node, 'strokeStyle');
                    set_attr(data.attr, node, 'textAlign');
                    set_attr(data.attr, node, 'verticalAlign');
                }
                
                if (node._className == 'LabelAtlas'){
                    set_attr(data.attr, node, 'string');
                }
                
                if (node._className == 'LayerGradient'){
                    //set_attr(data.attr, node, 'compresseInterpolation');
                    set_attr(data.attr, node, 'endColor');
                    set_attr(data.attr, node, 'endOpacity');
                    set_attr(data.attr, node, 'startColor');
                    set_attr(data.attr, node, 'startOpacity');
                    //set_attr(data.attr, node, 'vector');
                }
                
                if (node._className == 'ScrollView'){
                    set_attr(data.attr, node, 'bounceable');
                    set_attr(data.attr, node, 'clippingToBounds');
                    set_attr(data.attr, node, 'direction');
                }
                
                
                if (node._className == 'ParticleSystem' || 
                    node._className == 'ParticleBatchNode' || 
                    node._className == 'ParticleExplosion' || 
                    node._className == 'ParticleFire' || 
                    node._className == 'ParticleFireworks' || 
                    node._className == 'ParticleFlower' || 
                    node._className == 'ParticleGalaxy' || 
                    node._className == 'ParticleMeteor' || 
                    node._className == 'ParticleRain' || 
                    node._className == 'ParticleSmoke' || 
                    node._className == 'ParticleSnow' || 
                    node._className == 'ParticleSpiral' || 
                    node._className == 'ParticleSun'){
                        set_attr(data.attr, node, 'angle');
                        set_attr(data.attr, node, 'angleVar');
                        set_attr(data.attr, node, 'atlasIndex');
                        // {Boolean} autoRemoveOnFinish
                        set_attr(data.attr, node, 'duration');
                        set_attr(data.attr, node, 'emissionRate');
                        set_attr(data.attr, node, 'emitterMode');
                        set_attr(data.attr, node, 'endColor');
                        set_attr(data.attr, node, 'endColorVar');
                        // {Number} endRadius
                        // {Number} endRadiusVar
                        // {Number} endSize
                        // {Number} endSizeVar
                        // {Number} endSpin
                        // {Number} endSpinVar
                        // {cc.Point} gravity
                        set_attr(data.attr, node, 'life');
                        set_attr(data.attr, node, 'lifeVar');
                        // {Boolean} opacityModifyRGB
                        // {Number} particleCount
                        // {Number} positionType
                        // {cc.Point} posVar
                        // {Number} rotatePerS
                        // {Number} rotatePerSVar
                        // {Boolean} rotationIsDir
                        // {Number} shapeType
                        // {cc.Point} sourcePos
                        set_attr(data.attr, node, 'speed');
                        set_attr(data.attr, node, 'speedVar');
                        set_attr(data.attr, node, 'startColor');
                        set_attr(data.attr, node, 'startColorVar');
                        // {Number} startRadius
                        // {Number} startRadiusVar
                        // {Number} startSize
                        // {Number} startSizeVar
                        // {Number} startSpin
                        // {Number} startSpinVar
                        // {Number} tangentialAccel
                        // {Number} tangentialAccelVar
                        set_attr(data.attr, node, 'totalParticles');
                }
                
                // ccui
                // Widget Button
                if (node._className == 'Widget' || 
                node._className == 'CheckBox' || 
                node._className == 'Layout' || 
                node._className == 'LoadingBar' || 
                node._className == 'Slider' || 
                node._className == 'TextField' || node._className == 'Text'){
                    set_attr(data.attr, node, 'actionTag');
                    set_attr(data.attr, node, 'bright');
                    set_attr(data.attr, node, 'enabled');
                    set_attr(data.attr, node, 'focused');
                    set_attr(data.attr, node, 'heightPercent');
                    set_attr(data.attr, node, 'name');
                    set_attr(data.attr, node, 'sizeType');
                    set_attr(data.attr, node, 'touchEnabled');
                    set_attr(data.attr, node, 'updateEnabled');
                    set_attr(data.attr, node, 'widthPercent');
                    set_attr(data.attr, node, 'xPercent');
                    set_attr(data.attr, node, 'yPercent');
                }
                
                if (node._className == 'Button'){
                    set_attr(data.attr, node, 'pressedActionEnabled');
                    set_attr(data.attr, node, 'titleFont');
                    set_attr(data.attr, node, 'titleColor');
                    set_attr(data.attr, node, 'titleFontName');
                    set_attr(data.attr, node, 'titleFontSize');
                    set_attr(data.attr, node, 'titleText');
                }
                
                if (node._className == 'CheckBox'){
                    //set_attr();
                    set_attr(data.attr, node, 'selected');
                }
                
                if (node._className == 'Layout'){
                    set_attr(data.attr, node, 'clippingEnabled', null, false);
                    //set_attr(data.attr, node, 'clippingType');
                    //set_attr(data.attr, node, 'layoutType');
                }
                
                if (node._className == 'LoadingBar'){
                    set_attr(data.attr, node, 'direction');
                    set_attr(data.attr, node, 'percent');
                }
                if (node._className == 'Slider'){
                    set_attr(data.attr, node, 'percent');
                }

                if (node._className == 'TextField' || node._className == 'Text'){
                    set_attr(data.attr, node, 'font');
                    set_attr(data.attr, node, 'fontName');
                    set_attr(data.attr, node, 'fontSize');
                    //set_attr(data.attr, node, 'maxLength', null, 0);
                    //set_attr(data.attr, node, 'maxLengthEnabled', null, false);
                    set_attr(data.attr, node, 'passwordEnabled', null, false);
                    //set_attr(data.attr, node, 'placeHolder');
                    set_attr(data.attr, node, 'string');
                }
                
                /*
                for (var i in node){
                    //i = String(i).match(/get([A-Z]\S*)/), attr_name = i && i[1] || '';
                    if (String(i).substr(0,1) != '_' && typeof node[i] != 'function'){
                        !data.attr[i] && (data.attr[i] = node[i]);
                    }
                }
                */
                
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
                        
                        //me.on_update && me.on_update(sc, scene_data, scene_hash);
                        me.on_update && me.on_update(sc, tree_data, scene_hash);
                    };
                    
                    cc.Node.prototype._addChild = cc.Node.prototype.addChild;
                    cc.Node.prototype.addChild = function(child, localZOrder, tag){
                        cc.Node.prototype._addChild.apply(this, [child, localZOrder, tag]);
                        var a = create_item_data(child),
                            data = a.data,
                            node = a.node;    
                        scene_hash[node.__instanceId] = node;
                        me.on_addChild && me.on_addChild(node, data);
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