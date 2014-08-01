    var pipeDevtool = new PipeDevtool();
    pipeDevtool.init();
    pipeDevtool.onMessage = function(message){
        try{
            var f = eval(message.id);
            f.apply(this, message.data);
        }catch(e){ console.log(e) }
    };
    
    // ----------------
    
    var global = this;
    var tt, at, ie = {};
    
    // InspectElement Proxy
    ie.draw_rect = function(){ pipeDevtool.send({id:'ie.draw_rect', data:Array.prototype.slice.call(arguments)}); }
    ie.clear_rect = function(){ pipeDevtool.send({id:'ie.clear_rect', data:Array.prototype.slice.call(arguments)}); }
    ie.modify_node = function(){ pipeDevtool.send({id:'ie.modify_node', data:Array.prototype.slice.call(arguments)}); }
    ie.get_node_children = function(arg,fn){ pipeDevtool.send({id:'ie.get_node_children', data:[arg]},fn); }
    
    /*
    tt = new global['tl.ui.TreeList'](document.getElementById('left'));
    tt.on_hover = tt.on_select = function(nd){
        nd && nd.__data && ie && ie.draw_rect(nd.__data.id);
    };
    tt.on_out = function(){
        ie && ie.clear_rect();
    };
    tt.on_select = function(nd){
        nd && nd.__data && at && at.update(nd.__data.attr);
    };
    
    at = new global['tl.ui.AttrTable'](document.getElementById('right'));
    at.on_change = function(nd, attr, value){
        if (tt.selected){
            var attr_obj = {};// write an object for set attribute
            attr_obj[attr] = value;
            tt.selected.__data.attr[attr] = value; // set the tree data
            ie.modify_node(tt.selected.__data.id, attr_obj); // set the canvas
        }
    };
    */
    
        tt = new global['tl.ui.TreeList'](document.getElementById('left'));
        tt.on_hover = function(nd){
            nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
        };
        tt.on_out = function(){
            ie && ie.draw_rect(null, tt.selected ? tt.selected.id : null);
        };
        tt.on_select = function(nd){
            nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
            nd && nd.__data && at && at.update(nd.__data.attr);
        };
        tt.on_before_toggle = function(nd, next){
            // clear current node's children
            tt.clear_children(nd);
            // get new data, and set to the node's __data, it's will re-load data as tree when next expanded
            nd.__is_not_inited = true;
            ie.get_node_children(nd.id, function(v){
                nd.__data.nodes = v;
                next();
            });
        };
        tt.on_after_toggle = function(nd){
            if (nd.children.length < 2){ // index 0 is <b>title</b>
                nd.className = 'nd';
            }
        };
        tt.on_remove = function(nd){
            // remove an arrow when a node is void.
            var p = document.getElementById(nd.parentId);// find parent
            if (p){
                p.__data.nodes = p.__data.nodes || [];
                if (p.__is_not_inited){
                    p.__data.nodes.pop();
                }else{ // find by id
                    for (var i=0,j=p.__data.nodes.length; i<j; i++){
                        if (p.__data.nodes[i] && p.__data.nodes[i].id == nd.id){
                            p.__data.nodes.slice(i,1);
                            break;
                        }
                    }
                }
                //console.log(p.children, p.__data.nodes)
                if (p.className == 'nd c' && p.__data.nodes.length == 0){ // index 0 is <b>title</b>
                    p.className = 'nd';
                } 
                else if (p.className == 'nd e' && p.children.length < 2){
                    p.className = 'nd';
                }
            }
            if(nd.id == tt.selected.id){ at.clear() }
        };
        tt.on_insert = function(nd){
            // show an arrow when a collapsed node is void.
            var p = document.getElementById(nd.parentId);// find parent
            if (p){
                p.__data.nodes = p.__data.nodes || [];
                if (p.__data.nodes.length == 0) p.__is_not_inited = true;
                if (p.className == 'nd'){
                    p.className = 'nd c';
                }
                p.__data.nodes.push(nd); // add a place-holder
            }
        };
        
        at = new global['tl.ui.AttrTable'](document.getElementById('right'));
        at.on_change = function(nd, attr, value){
            if (tt.selected){
                var attr_obj = {};// write an object for set attribute
                attr_obj[attr] = value;
                //tt.selected.__data.attr[attr] = value; // set the tree data
                tt.selected.__data.attr[attr].value = value; // set the tree data
                ie.modify_node(tt.selected.__data.id, attr_obj); // set the canvas
            }
        };
        
        
    var tk = setInterval(function(){
        chrome.devtools.inspectedWindow.eval('typeof pipePage == "object"', function(v){
            if (!v){
            //console.log('inspectedWindow::::::', iii);
                pipeDevtool.inject(pipeDevtool.inject_script);
            }
        });
    },100);