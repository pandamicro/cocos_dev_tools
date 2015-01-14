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
        this._MAX = 60, this._fps_data = [11,22,33,44,55,66], this._fps = 0;
        this.element = document.createElement('CANVAS');
        this.element.width = (w || 200), this.element.height = (h || 100);
        this.ctx = /*document.getElementById("fpsChart")*/ this.element.getContext("2d");
        this.fps && this.fps(0);
        
        root = root || document.body;
        root.appendChild(this.element);
    }
    
    exports.prototype.fps = function(t){
        if (t == undefined){
            return this._fps
        }else{
            this._fps = t, this._fps_data.push(t), this._fps_data.length > this._MAX && this._fps_data.shift(), this.draw_cc(), this.on_fps && this.on_fps()
        }
    };
    
    exports.prototype.draw_cc = function() {
        var t = this._fps_data.length, c = this.ctx, e = c.canvas.width, n = c.canvas.height, i = Math.round(e / this._MAX), o = Math.min.apply(Math, this._fps_data);
        o = Math.min(o, 20), c.clearRect(0, 0, e, n);
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 0;
        for (var r = 0; t > r; r++) {
            var s = this._fps_data[r] - o, h = s / (70 - o) * n, a = i * r, v = n - h, l = h / n * 200;
            l = Math.round(l), l = Math.max(l, 1);
            var p = 255 - l;
            c.fillStyle = "rgb(" + p + "," + l + ",0)", c.fillRect(a, v, i, h)
        }
        c.shadowColor = "#fff";
        c.shadowOffsetX = c.shadowOffsetY = c.shadowBlur = 1;
        c.font = "bold 12px arial";
        c.fillStyle = "#000";
        c.fillText(this._fps,10,10);
    };
    
    return exports;        
}));