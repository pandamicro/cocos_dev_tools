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