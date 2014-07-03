(function() {
    var pipePage = new PipePage;
    pipePage.onMessage = function(message){
        try{
            var f = eval(message.id);
            f.apply(this, message.data);
        }catch(e){ console.log(e) }
    };
    window.pipePage = pipePage;
    
    // ----------------
    
    var at = {}, tt = {};
    at.clear = function(){ pipePage.send({id:'at.clear', data:Array.prototype.slice.call(arguments)}) }
    tt.clear = function(){ pipePage.send({id:'tt.clear', data:Array.prototype.slice.call(arguments)}) }
    tt.update = function(){ pipePage.send({id:'tt.update', data:Array.prototype.slice.call(arguments)}) }
    
    var ie = new InspectElement();
    ie.on_update = function(sc, scene_data){
        at.clear();
        tt.update(scene_data);
    };
    ie.start();
    
    // init
    tt.update(ie.get_hierarchy());
    window.onbeforeunload = function(){
        //console.log(999999999999999999);
        tt.clear();
        at.clear();
        //return false;
    };
})();