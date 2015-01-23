(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['tl.ui.ScaleProfiles'] = factory({}); // <script>
    }
}(this, function (exports) {
    exports = function(root) {
        /*t.apply(this, arguments), */
        this.element = document.createElement('DIV');
        this.element.className = 'tl-ui-scaleprofiles';
        this.element.style.position = 'relative';
        var SPEED_CONFIG = [
            0, .05, .1, .25, .5, .75,
            1,
            1.5, 2, 3, 4, 8, 16, 32
        ];
        
        add_css('\
            .tl-ui-scaleprofiles input[type="range"]{\
              -webkit-appearance:none;\
              height:28px;\
              background: linear-gradient(to right, #eee 0%, #eee 100%);\
              background-size:100% 4px;\
              background-position:center;\
              background-repeat:no-repeat;\
              overflow:hidden;\
              padding-right:1px;padding-left:.5px;\
              margin:0px;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb{\
              -webkit-appearance:none;\
              width:20px;\
              height:20px;\
              border-radius: 100%;\
              background:#fff;\
              position:relative;\
              z-index:3;\
              box-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 1px 3px 5px rgba(0, 0, 0, 0.25);\
              cursor: pointer;\
            }\
            .tl-ui-scaleprofiles input[type="range"]::-webkit-slider-thumb:after{\
              content:" ";\
              width:2000px;\
              height:4px;\
              position:absolute;\
              z-index:1;\
              right:20px;\
              top:8px;\
              background: rgba(51,128,224,0.8);\
              /*background: #ff5b32;\
              background: linear-gradient(to right, #f088fc 1%, #AC6CFF 70%);*/\
            }\
        ');
        
        function add_css(v){
            var d = document, b = d.createElement("style"), s = d.styleSheets;
            for (var i in s) { if (s[i].textContent == v) return; }
            b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
        }
        
        
        var me = this;
        this.element.innerHTML = '\
            <fieldset style="border:1px solid #ccc;margin:10px;border-radius:4px;text-align:center;font:normal 14px arial;">\
                <legend>' +(typeof I18n && I18n('Set speed:'))+ ' <b>1x</b></legend>\
                <input type="range" class="speed-range" name="set-speed" min="0" max="' +(SPEED_CONFIG.length-1)+ '" style="width:80%;outline:none;" value="6" />\
            </fieldset>';
        this.element.style.color = '#333';
        
        this.element.addEventListener('mousemove', function(e){
            var nd_dom = e.target;
            if (nd_dom.type == 'range' && nd_dom.name == 'set-speed'){
                nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value]+ 'x';
            }
        });
        this.element.addEventListener('change', function(e){
            var nd_dom = e.target;
            e.stopPropagation();
            e.preventDefault();
            
            if (nd_dom.type == 'range' && nd_dom.name == 'set-speed'){
                nd_dom.parentNode.children[0].children[0].innerHTML = SPEED_CONFIG[nd_dom.value]+ 'x';
                me.on_change && me.on_change('speed', SPEED_CONFIG[nd_dom.value]);
            }
        });
        
        root.appendChild(this.element);
    }
    
    // exports.prototype.on_change = function(t){
    
    // };
    
    return exports;        
}));