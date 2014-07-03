(function() {
    var pipePage = new PipePage;
    pipePage.onMessage = function(message){
        try{
            var f = eval(message.id);
            f.apply(this, message.data);
        }catch(e){ console.log(e) }
    };
    
    // ----------------
    
    var at, tt;
    at.clear = function(){ pipePage.send({id:'at.clear', data:arguments}) }
    tt.update = function(){ pipePage.send({id:'tt.update', data:arguments}) }
    
    var ie = new InspectElement();
    ie.on_update = function(sc, scene_data){
        at.clear();
        tt.update(scene_data);
    };
    ie.start();
    
})();