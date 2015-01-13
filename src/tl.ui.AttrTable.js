(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['tl.ui.AttrTable'] = factory({}); // <script>
    }
}(this, function (exports) {
        //var AttrTable = function(root){
        exports = function(root){
            'use strict';
            var me = this;
            me.element = null;
            
            (function init(){
                add_css('\
            .clear:after{ content: ".";clear: both;display: block;height: 0;visibility: hidden;font-size: 0;line-height: 0; }\
            .tl-ui-scroll{overflow-y:overlay;} .tl-ui-scroll::-webkit-scrollbar {height:12px;overflow:visible;width:8px;background-color:transparent} .tl-ui-scroll::-webkit-scrollbar-thumb {border-radius:8px;background-color:rgba(0,0,0,0.2);}\
            @-moz-document url-prefix() { .tl-ui-scroll{overflow-y:scroll} }\
            \
            /* attribute table css */\
            .tl-ui-attr {display:block; position: relative;}\
            /*.tl-ui-attr:focus{ outline: 0px !important; }*/\
            .tl-ui-attr-i {border-bottom:1px solid gainsboro}\
            .tl-ui-attr label {text-indent:10px; display: inline-block; width: 40%; color:#666; font: 100 12px Consolas, Lucida Console, monospace; vertical-align:middle; pointer-events:none;}\
            .tl-ui-attr input, .tl-ui-attr textarea{ vertical-align:middle; display: inline-block; font:100 12px Consolas, Lucida Console, monospace; padding:0; margin:0px 0px}\
            .tl-ui-attr-i[readonly="true"], .tl-ui-attr [readonly="true"]{ opacity:.5 }\
            \
            .tl-ui-attr input[type="text"], .tl-ui-attr input[type="number"], .tl-ui-attr input[type="image"],\
            .tl-ui-attr textarea{ line-height:20px; width:59%; border:none; }\
            \
            .tl-ui-attr input[type="number"]{ color:rgb(28, 0, 207); }\
            .tl-ui-attr input[type="text"],.tl-ui-attr textarea{ color:rgb(196, 26, 22); }\
            .tl-ui-attr input[type="image"]{ border:none; height:40px; width:40px; }\
            .tl-ui-attr a.image{ border:none; display: inline-block; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC); }\
            \
            .tl-ui-attr input[type="checkbox"]{ height:14px; width:14px; margin:2px 0;}\
            /*.tl-ui-attr input[type="checkbox"]{ border-radius:20px; background:gainsboro; width:48px; height:20px; -webkit-appearance:none; vertical-align: middle; transition: all .4s ease; }\
            .tl-ui-attr input[type="checkbox"]:checked{ background: limegreen; }\
            .tl-ui-attr input[type="checkbox"]:before{ border-radius:20px; transition: all .2s ease;content: " "; position: relative; display: block; background: white; width: 16px; height: 16px; top:2px; left:30px; z-index:1; }\
            .tl-ui-attr input[type="checkbox"]:checked:before{top:2px;left:2px;}*/\
            \
            .tl-ui-attr input[type="color"]{ border:none; background:transparent; margin:0px; width:48px;height:20px; }\
                ');
                
                var el = document.createElement('DIV');
                el.className = 'tl-ui-attr';
                (root || document.body).appendChild(el);
                me.element = el;
                
                el.addEventListener('click', function(e){
                    var nd_dom = e.target;
                    //e.stopPropagation();
                    //e.preventDefault();
                    
                    if (nd_dom.getAttribute('readonly')) return;
                    
                    if (nd_dom.tagName == 'INPUT' && nd_dom.type == 'number'){
                        me.element.parentNode.style.overflowY = 'hidden';
                    }else{
                        me.element.parentNode.style.overflowY = 'overlay';
                    }
                });
                
                el.addEventListener('mousewheel', function(e){
                    var nd_dom = e.target;
                    
                    if (nd_dom.getAttribute('readonly')) return;
                    
                    if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                        on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                    }
                });
                
                el.addEventListener('change', function(e){
                    var nd_dom = e.target;
                    e.stopPropagation();
                    e.preventDefault();
                    
                    if (nd_dom.getAttribute('readonly')) return;
                    
                    if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                        on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                    }
                });
                
                el.addEventListener('keydown', function(e){ me.disable_change = false });
                el.addEventListener('mousedown', function(e){ me.disable_change = false });
                
                el.addEventListener('keyup', function(e){
                    var nd_dom = e.target;
                    e.stopPropagation();
                    e.preventDefault();
                    
                    if (nd_dom.getAttribute('readonly')) return;
                    
                    if (nd_dom.tagName == 'INPUT' || nd_dom.tagName == 'TEXTAREA'){
                        on_change(nd_dom, nd_dom.attr, get_value(nd_dom));
                    }
                });
                
            })();
            
            function add_css(v){
                var d = document, b = d.createElement("style"), s = d.styleSheets;
                for (var i in s) { if (s[i].textContent == v) return; }
                b.appendChild(d.createTextNode(v)), d.head.appendChild(b);
            }
            
            function on_change(nd_dom,attr,value){
                if (me.disable_change) return;
                me.on_change && me.on_change(nd_dom,attr,value);
            }
            
            function rgb2hex(red, green, blue){
                //var decColor = red + 256 * green + 65536 * blue;
                //return '#' + decColor.toString(16);
                return '#' + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);
            }
            function hex2rgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }
            
            function get_value(nd_dom){
                if (nd_dom.type == 'number'){
                    return Number(nd_dom.value);
                }else if(nd_dom.type == 'color'){
                    var color = hex2rgb(nd_dom.value);
                    nd_dom.title = ['R:'+color.r,'G:'+color.g,'B:'+color.b].join();
                    return color;
                }else if(nd_dom.type == 'checkbox'){
                    return Boolean(nd_dom.checked);
                }
                return nd_dom.value;
            }
            
            function create_item(attr, data){
                var el = document.createElement('DIV');
                el.className = 'tl-ui-attr-i';
                el.innerHTML = '<label>' +attr+ ':</label>';
                el.title = data.desc||attr;
                
                var o = document.createElement('input');
                data = data || {};
                var value = data.value;
                if (data.type == 'color'){
                    o.type = 'color';
                    value = value || {};
                    if (typeof value == 'object'){  // convert to hex color, et. #336699
                        var r = value.r, g = value.g, b = value.b;
                        value = rgb2hex(r,g,b);
                        o.title = ['R:'+r,'G:'+g,'B:'+b].join();
                    }
                }else if (data.type == 'image'){
                    o.type = 'image';
                    o.title = value;
                    o.src = value;
                    o.setAttribute('attr', attr);
                    
                    var img = new Image(), max_h = 100, max_w = 100,
                        _o = o, a = document.createElement('A');
                    img.onload = function(){
                        var scale = 1;
                        if (img.width > img.height){
                            scale = max_w / img.width;
                            img.width = max_w;
                            img.height = img.height * scale;
                        }else{
                            scale = max_h / img.height;
                            img.width = img.width * scale;
                            img.height = max_h;
                        }
                        _o.style.width = img.width + 'px', _o.style.height = img.height + 'px';
                        img.onload = null, img = null;
                    };
                    img.src = value;
                    
                    a.href = value, a.target = '_blank', a.className = 'image', a.appendChild(_o);
                    o = a; // reset o
                }else if (data.type == 'boolean'){
                    o.type = 'checkbox';
                    o.checked = value;
                }else if (data.type == 'number'){
                    o.type = 'number';
                    o.step = 'any';
                }else if ({'string':1,'text':1,'title':1}[attr]){
                    o = document.createElement('textarea');
                    o.attr = attr;
                    o.setAttribute('attr', attr);
                    o.innerHTML = value;
                }else{ // string
                    o.type = 'text';
                }
                
                o.onblur = function(){ me.element.parentNode.style.overflowY = 'overlay' };
                o.attr = attr;
                o.setAttribute('attr',attr);
                o.value = value;
                if (data.readonly) el.setAttribute('readonly',true), o.setAttribute('readonly',true), o.setAttribute('disabled',true);
                
                el.appendChild(o);
                me.element.appendChild(el);
            }
            
            function clear(el){
                el = el || me.element;
                el.innerHTML = '';  // clear
            }
            me.clear = clear;
            
            function update(d){
                // Object.prototype.toString.call([]) == "[object Array]"
                me.disable_change = true; // avoid the on_change event was triggered when reset element
                me.element.innerHTML = '';
                for (var attr in d){
                    create_item(attr, d[attr]);
                }
                me.disable_change = false;
            }
            me.update = update;
        };
        
        return exports;        
}));