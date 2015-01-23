(function (global, factory) {
    if (typeof exports === "object" && exports) {
        factory(exports); // CommonJS
    } else if (typeof define === "function" && define.amd) {
        define(['exports'], factory); // AMD
    } else {
        global['tl.ui.ChartFPS'] = factory({}); // <script>
    }
}(this, function (exports) {
    exports = function(w, h, root) {
        /*t.apply(this, arguments), */
        this.element = document.createElement('DIV');
        this.element.className = 'tl-ui-chartfps';
        this.element.style.color = '#333';
        this.element.style.position = 'relative';
        this.fps_txt = document.createElement('DIV');
        this.fps_txt.style.position = 'absolute', this.fps_txt.style.zIndex = 9, this.fps_txt.style.font = 'normal 18px arial';
        this.cvs = document.createElement('CANVAS');
        this.cvs.width = (this.element.clientWidth || 1000), this.cvs.height = (this.element.clientHeight || 100),
        this.cvs.style.width = "100%", this.cvs.style.height = this.cvs.height + 'px',
        this.MAX_FPS = 80, this.MAX_LINES = Math.round(this.cvs.width/10), this._fps_data = [], this._fps = 0;
        
        this.ctx = /*document.getElementById("fpsChart")*/ this.cvs.getContext("2d");
        this.ctx.webkitImageSmoothingEnabled = false; this.ctx.mozImageSmoothingEnabled = false;
        this.fps && this.fps(0);
        
        root = root || document.body;
        this.element.appendChild(this.fps_txt);
        this.element.appendChild(this.cvs);
        root.appendChild(this.element);
    }
    
    exports.prototype.fps = function(t){
        if (t == undefined){
            return this._fps
        }else{
            this._fps = t, this._fps_data.push(t), this._fps_data.length > this.MAX_LINES && this._fps_data.shift(), this.draw_cc(), this.on_fps && this.on_fps()
        }
    };
    
    exports.prototype.draw_cc = function() {
        var t = this._fps_data.length, c = this.ctx, w = c.canvas.width, h = c.canvas.height, i = Math.round(w / this.MAX_LINES), o = Math.min.apply(Math, this._fps_data);
        o = Math.min(o, 20), c.clearRect(0, 0, w, h);
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 0;
        for (var r = 0; r < t; r++) {
            var s = this._fps_data[r],
                percent = Math.min(s / this.MAX_FPS , this.MAX_FPS), // MAX fps = 80
                red = Math.round((1 - percent)*200),
                green = Math.round(percent*255);
            
            c.fillStyle = "rgba(" +[red,Math.round(green*.6),green,.8].join()+ ")", c.fillRect(r * i, Math.round((1 - percent)*h), i /*- 1*/, Math.round(percent * h));
        }
        for (var r = 1; r <= 4; r++) {
            c.fillStyle = "rgba(0,0,0,.2)", c.fillRect(0, Math.round((r/4)*h)-1, w, 1);
        }
        
        this.fps_txt.innerHTML = 'FPS:' + this._fps;
        /*
        c.shadowColor = "#fff";
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 1;
        c.font = "bold 12px arial";
        c.fillStyle = "#000";
        c.fillText(this._fps,10,10);*/
    };
    
    return exports;        
}));