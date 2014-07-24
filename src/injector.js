(function() {
    var pipePage = new PipePage;
    pipePage.onMessage = function(message){
        //console.log('receive :', message);
        try{
            var f = eval(message.id);
            return f.apply(this, message.data);
        }catch(e){ console.log(e) }
    };
    window.pipePage = pipePage;
    
    // ----------------
    
    var ie = {}, at = {}, tt = {};
    at.clear = function(){ pipePage.send({id:'at.clear', data:Array.prototype.slice.call(arguments)}) }
    tt.clear = function(){ pipePage.send({id:'tt.clear', data:Array.prototype.slice.call(arguments)}) }
    tt.update = function(){ pipePage.send({id:'tt.update', data:Array.prototype.slice.call(arguments)}) }
    tt.insert = function(){ pipePage.send({id:'tt.insert', data:Array.prototype.slice.call(arguments)}) }
    tt.remove = function(){ pipePage.send({id:'tt.remove', data:Array.prototype.slice.call(arguments)}) }
    
    var ie = new InspectElement();
    ie.on_update = function(sc, scene_data){
        ie.draw_rect(null,null);
        at.clear();
        tt.update(scene_data);
    };
    ie.on_addChild = function(node, node_data){
        //console.log('addChild',node,node_data,node_data.parentId);
        tt.insert(node_data, node_data.parentId);
    };
    ie.on_removeChild = function(node, node_data){
        //console.log('removeChild',node,node_data,node_data.parentId);
        tt.remove(node_data, node_data.parentId);
    };
    ie.on_start = function(){
        // init
        // the chrome extension mode will init when the first time
        ie.get_node_children(null, function(v){
        //console.log('vvvvvvvvv',v)
            ie.draw_rect(null,null);
            tt.update(v);
        });
    };
    
    ie.start();
    window.ie = ie;

    //tt.update(ie.get_hierarchy());
    //window.onbeforeunload = function(){
        //console.log(999999999999999999);
    //    tt.clear();
    //    at.clear();
        //return false;
    //};
    
})();