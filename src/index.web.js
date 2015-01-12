(function(){
    if (typeof window.cc.DrawNode == 'undefined'){
       // load cc.DrawNode
    
cc.DrawNodeCanvas = cc.Node.extend({_buffer: null,_blendFunc: null,_lineWidth: 1,_drawColor: null,_className: "DrawNodeCanvas",ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._buffer = [];
        this._drawColor = cc.color(255, 255, 255, 255);
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        this.init()
    },getBlendFunc: function() {
        return this._blendFunc
    },setBlendFunc: function(a, c) {
        void 0 === c ? (this._blendFunc.src = a.src, this._blendFunc.dst = a.dst) : (this._blendFunc.src = a, this._blendFunc.dst = c)
    },setLineWidth: function(a) {
        this._lineWidth = 
        a
    },getLineWidth: function() {
        return this._lineWidth
    },setDrawColor: function(a) {
        var c = this._drawColor;
        c.r = a.r;
        c.g = a.g;
        c.b = a.b;
        c.a = null == a.a ? 255 : a.a
    },getDrawColor: function() {
        return cc.color(this._drawColor.r, this._drawColor.g, this._drawColor.b, this._drawColor.a)
    },drawRect: function(a, c, d, e, f) {
        e = e || this._lineWidth;
        f = f || this.getDrawColor();
        null == f.a && (f.a = 255);
        a = [a, cc.p(c.x, a.y), c, cc.p(a.x, c.y)];
        c = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        c.verts = a;
        c.lineWidth = e;
        c.lineColor = f;
        c.isClosePolygon = !0;
        c.isStroke = 
        !0;
        c.lineCap = "butt";
        if (c.fillColor = d)
            null == d.a && (d.a = 255), c.isFill = !0;
        this._buffer.push(c)
    },drawCircle: function(a, c, d, e, f, g, h) {
        g = g || this._lineWidth;
        h = h || this.getDrawColor();
        null == h.a && (h.a = 255);
        for (var k = 2 * Math.PI / e, m = [], n = 0; n <= e; n++) {
            var p = n * k, q = c * Math.cos(p + d) + a.x, p = c * Math.sin(p + d) + a.y;
            m.push(cc.p(q, p))
        }
        f && m.push(cc.p(a.x, a.y));
        a = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        a.verts = m;
        a.lineWidth = g;
        a.lineColor = h;
        a.isClosePolygon = !0;
        a.isStroke = !0;
        this._buffer.push(a)
    },drawQuadBezier: function(a, 
    c, d, e, f, g) {
        f = f || this._lineWidth;
        g = g || this.getDrawColor();
        null == g.a && (g.a = 255);
        for (var h = [], k = 0, m = 0; m < e; m++) {
            var n = Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * c.x + k * k * d.x, p = Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * c.y + k * k * d.y;
            h.push(cc.p(n, p));
            k += 1 / e
        }
        h.push(cc.p(d.x, d.y));
        a = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        a.verts = h;
        a.lineWidth = f;
        a.lineColor = g;
        a.isStroke = !0;
        a.lineCap = "round";
        this._buffer.push(a)
    },drawCubicBezier: function(a, c, d, e, f, g, h) {
        g = g || this._lineWidth;
        h = h || this.getDrawColor();
        null == h.a && (h.a = 255);
        for (var k = 
        [], m = 0, n = 0; n < f; n++) {
            var p = Math.pow(1 - m, 3) * a.x + 3 * Math.pow(1 - m, 2) * m * c.x + 3 * (1 - m) * m * m * d.x + m * m * m * e.x, q = Math.pow(1 - m, 3) * a.y + 3 * Math.pow(1 - m, 2) * m * c.y + 3 * (1 - m) * m * m * d.y + m * m * m * e.y;
            k.push(cc.p(p, q));
            m += 1 / f
        }
        k.push(cc.p(e.x, e.y));
        a = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        a.verts = k;
        a.lineWidth = g;
        a.lineColor = h;
        a.isStroke = !0;
        a.lineCap = "round";
        this._buffer.push(a)
    },drawCatmullRom: function(a, c, d, e) {
        this.drawCardinalSpline(a, 0.5, c, d, e)
    },drawCardinalSpline: function(a, c, d, e, f) {
        e = e || this._lineWidth;
        f = f || this.getDrawColor();
        null == f.a && (f.a = 255);
        for (var g = [], h, k, m = 1 / a.length, n = 0; n < d + 1; n++)
            k = n / d, 1 == k ? (h = a.length - 1, k = 1) : (h = 0 | k / m, k = (k - m * h) / m), h = cc.cardinalSplineAt(cc.getControlPointAt(a, h - 1), cc.getControlPointAt(a, h - 0), cc.getControlPointAt(a, h + 1), cc.getControlPointAt(a, h + 2), c, k), g.push(h);
        a = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        a.verts = g;
        a.lineWidth = e;
        a.lineColor = f;
        a.isStroke = !0;
        a.lineCap = "round";
        this._buffer.push(a)
    },drawDot: function(a, c, d) {
        d = d || this.getDrawColor();
        null == d.a && (d.a = 255);
        var e = new cc._DrawNodeElement(cc.DrawNode.TYPE_DOT);
        e.verts = [a];
        e.lineWidth = c;
        e.fillColor = d;
        this._buffer.push(e)
    },drawDots: function(a, c, d) {
        if (a && 0 != a.length) {
            d = d || this.getDrawColor();
            null == d.a && (d.a = 255);
            for (var e = 0, f = a.length; e < f; e++)
                this.drawDot(a[e], c, d)
        }
    },drawSegment: function(a, c, d, e) {
        d = d || this._lineWidth;
        e = e || this.getDrawColor();
        null == e.a && (e.a = 255);
        var f = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        f.verts = [a, c];
        f.lineWidth = 2 * d;
        f.lineColor = e;
        f.isStroke = !0;
        f.lineCap = "round";
        this._buffer.push(f)
    },drawPoly_: function(a, c, d, e) {
        d = d || this._lineWidth;
        e = e || this.getDrawColor();
        null == e.a && (e.a = 255);
        var f = new cc._DrawNodeElement(cc.DrawNode.TYPE_POLY);
        f.verts = a;
        f.fillColor = c;
        f.lineWidth = d;
        f.lineColor = e;
        f.isClosePolygon = !0;
        f.isStroke = !0;
        f.lineCap = "round";
        c && (f.isFill = !0);
        this._buffer.push(f)
    },drawPoly: function(a, c, d, e) {
        for (var f = [], g = 0; g < a.length; g++)
            f.push(cc.p(a[g].x, a[g].y));
        return this.drawPoly_(f, c, d, e)
    },draw: function(a) {
        a = a || cc._renderContext;
        this._blendFunc && (this._blendFunc.src == cc.SRC_ALPHA && this._blendFunc.dst == cc.ONE) && (a.globalCompositeOperation = 
        "lighter");
        for (var c = 0; c < this._buffer.length; c++) {
            var d = this._buffer[c];
            switch (d.type) {
                case cc.DrawNode.TYPE_DOT:
                    this._drawDot(a, d);
                    break;
                case cc.DrawNode.TYPE_SEGMENT:
                    this._drawSegment(a, d);
                    break;
                case cc.DrawNode.TYPE_POLY:
                    this._drawPoly(a, d)
            }
        }
    },_drawDot: function(a, c) {
        var d = c.fillColor, e = c.verts[0], f = c.lineWidth, g = cc.view.getScaleX(), h = cc.view.getScaleY();
        a.fillStyle = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + "," + d.a / 255 + ")";
        a.beginPath();
        a.arc(e.x * g, -e.y * h, f * g, 0, 2 * Math.PI, !1);
        a.closePath();
        a.fill()
    },
    _drawSegment: function(a, c) {
        var d = c.lineColor, e = c.verts[0], f = c.verts[1], g = c.lineWidth, h = c.lineCap, k = cc.view.getScaleX(), m = cc.view.getScaleY();
        a.strokeStyle = "rgba(" + (0 | d.r) + "," + (0 | d.g) + "," + (0 | d.b) + "," + d.a / 255 + ")";
        a.lineWidth = g * k;
        a.beginPath();
        a.lineCap = h;
        a.moveTo(e.x * k, -e.y * m);
        a.lineTo(f.x * k, -f.y * m);
        a.stroke()
    },_drawPoly: function(a, c) {
        var d = c.verts, e = c.lineCap, f = c.fillColor, g = c.lineWidth, h = c.lineColor, k = c.isClosePolygon, m = c.isFill, n = c.isStroke;
        if (null != d) {
            var p = d[0], q = cc.view.getScaleX(), t = cc.view.getScaleY();
            a.lineCap = e;
            f && (a.fillStyle = "rgba(" + (0 | f.r) + "," + (0 | f.g) + "," + (0 | f.b) + "," + f.a / 255 + ")");
            g && (a.lineWidth = g * q);
            h && (a.strokeStyle = "rgba(" + (0 | h.r) + "," + (0 | h.g) + "," + (0 | h.b) + "," + h.a / 255 + ")");
            a.beginPath();
            a.moveTo(p.x * q, -p.y * t);
            e = 1;
            for (f = d.length; e < f; e++)
                a.lineTo(d[e].x * q, -d[e].y * t);
            k && a.closePath();
            m && a.fill();
            n && a.stroke()
        }
    },clear: function() {
        this._buffer.length = 0
    }});
cc.DrawNodeWebGL = cc.Node.extend({_bufferCapacity: 0,_buffer: null,_trianglesArrayBuffer: null,_trianglesWebBuffer: null,_trianglesReader: null,_lineWidth: 1,_drawColor: null,_blendFunc: null,_dirty: !1,_className: "DrawNodeWebGL",getBlendFunc: function() {
        return this._blendFunc
    },setBlendFunc: function(a, c) {
        void 0 === c ? (this._blendFunc.src = a.src, this._blendFunc.dst = a.dst) : (this._blendFunc.src = a, this._blendFunc.dst = c)
    },ctor: function() {
        cc.Node.prototype.ctor.call(this);
        this._buffer = [];
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, 
        cc.BLEND_DST);
        this._drawColor = cc.color(255, 255, 255, 255);
        this.init()
    },init: function() {
        return cc.Node.prototype.init.call(this) ? (this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_LENGTHTEXTURECOLOR), this._ensureCapacity(64), this._trianglesWebBuffer = cc._renderContext.createBuffer(), this._dirty = !0) : !1
    },setLineWidth: function(a) {
        this._lineWidth = a
    },getLineWidth: function() {
        return this._lineWidth
    },setDrawColor: function(a) {
        var c = this._drawColor;
        c.r = a.r;
        c.g = a.g;
        c.b = a.b;
        c.a = a.a
    },getDrawColor: function() {
        return cc.color(this._drawColor.r, 
        this._drawColor.g, this._drawColor.b, this._drawColor.a)
    },drawRect: function(a, c, d, e, f) {
        e = e || this._lineWidth;
        f = f || this.getDrawColor();
        null == f.a && (f.a = 255);
        a = [a, cc.p(c.x, a.y), c, cc.p(a.x, c.y)];
        null == d ? this._drawSegments(a, e, f, !0) : this.drawPoly(a, d, e, f)
    },drawCircle: function(a, c, d, e, f, g, h) {
        g = g || this._lineWidth;
        h = h || this.getDrawColor();
        null == h.a && (h.a = 255);
        var k = 2 * Math.PI / e, m = [], n;
        for (n = 0; n <= e; n++) {
            var p = n * k, q = c * Math.cos(p + d) + a.x, p = c * Math.sin(p + d) + a.y;
            m.push(cc.p(q, p))
        }
        f && m.push(cc.p(a.x, a.y));
        g *= 0.5;
        n = 0;
        for (a = m.length; n < a - 1; n++)
            this.drawSegment(m[n], m[n + 1], g, h)
    },drawQuadBezier: function(a, c, d, e, f, g) {
        f = f || this._lineWidth;
        g = g || this.getDrawColor();
        null == g.a && (g.a = 255);
        for (var h = [], k = 0, m = 0; m < e; m++) {
            var n = Math.pow(1 - k, 2) * a.x + 2 * (1 - k) * k * c.x + k * k * d.x, p = Math.pow(1 - k, 2) * a.y + 2 * (1 - k) * k * c.y + k * k * d.y;
            h.push(cc.p(n, p));
            k += 1 / e
        }
        h.push(cc.p(d.x, d.y));
        this._drawSegments(h, f, g, !1)
    },drawCubicBezier: function(a, c, d, e, f, g, h) {
        g = g || this._lineWidth;
        h = h || this.getDrawColor();
        null == h.a && (h.a = 255);
        for (var k = [], m = 0, n = 0; n < f; n++) {
            var p = 
            Math.pow(1 - m, 3) * a.x + 3 * Math.pow(1 - m, 2) * m * c.x + 3 * (1 - m) * m * m * d.x + m * m * m * e.x, q = Math.pow(1 - m, 3) * a.y + 3 * Math.pow(1 - m, 2) * m * c.y + 3 * (1 - m) * m * m * d.y + m * m * m * e.y;
            k.push(cc.p(p, q));
            m += 1 / f
        }
        k.push(cc.p(e.x, e.y));
        this._drawSegments(k, g, h, !1)
    },drawCatmullRom: function(a, c, d, e) {
        this.drawCardinalSpline(a, 0.5, c, d, e)
    },drawCardinalSpline: function(a, c, d, e, f) {
        e = e || this._lineWidth;
        f = f || this.getDrawColor();
        null == f.a && (f.a = 255);
        for (var g = [], h, k, m = 1 / a.length, n = 0; n < d + 1; n++)
            k = n / d, 1 == k ? (h = a.length - 1, k = 1) : (h = 0 | k / m, k = (k - m * h) / m), h = cc.cardinalSplineAt(cc.getControlPointAt(a, 
            h - 1), cc.getControlPointAt(a, h - 0), cc.getControlPointAt(a, h + 1), cc.getControlPointAt(a, h + 2), c, k), g.push(h);
        e *= 0.5;
        a = 0;
        for (c = g.length; a < c - 1; a++)
            this.drawSegment(g[a], g[a + 1], e, f)
    },_render: function() {
        var a = cc._renderContext;
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
        a.bindBuffer(a.ARRAY_BUFFER, this._trianglesWebBuffer);
        this._dirty && (a.bufferData(a.ARRAY_BUFFER, this._trianglesArrayBuffer, a.STREAM_DRAW), this._dirty = !1);
        var c = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 
        2, a.FLOAT, !1, c, 0);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, a.UNSIGNED_BYTE, !0, c, 8);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, a.FLOAT, !1, c, 12);
        a.drawArrays(a.TRIANGLES, 0, 3 * this._buffer.length);
        cc.incrementGLDraws(1)
    },_ensureCapacity: function(a) {
        var c = this._buffer;
        if (c.length + a > this._bufferCapacity) {
            var d = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT;
            this._bufferCapacity += Math.max(this._bufferCapacity, a);
            if (null == c || 0 === c.length)
                this._buffer = [], this._trianglesArrayBuffer = new ArrayBuffer(d * 
                this._bufferCapacity), this._trianglesReader = new Uint8Array(this._trianglesArrayBuffer);
            else {
                a = [];
                for (var e = new ArrayBuffer(d * this._bufferCapacity), f = 0; f < c.length; f++)
                    a[f] = new cc.V2F_C4B_T2F_Triangle(c[f].a, c[f].b, c[f].c, e, f * d);
                this._trianglesReader = new Uint8Array(e);
                this._trianglesArrayBuffer = e;
                this._buffer = a
            }
        }
    },draw: function() {
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst);
        this._shaderProgram.use();
        this._shaderProgram.setUniformsForBuiltins();
        this._render()
    },drawDot: function(a, c, d) {
        d = d || 
        this.getDrawColor();
        null == d.a && (d.a = 255);
        var e = {r: 0 | d.r,g: 0 | d.g,b: 0 | d.b,a: 0 | d.a};
        d = {vertices: {x: a.x - c,y: a.y - c},colors: e,texCoords: {u: -1,v: -1}};
        var f = {vertices: {x: a.x - c,y: a.y + c},colors: e,texCoords: {u: -1,v: 1}}, g = {vertices: {x: a.x + c,y: a.y + c},colors: e,texCoords: {u: 1,v: 1}};
        a = {vertices: {x: a.x + c,y: a.y - c},colors: e,texCoords: {u: 1,v: -1}};
        this._ensureCapacity(6);
        this._buffer.push(new cc.V2F_C4B_T2F_Triangle(d, f, g, this._trianglesArrayBuffer, this._buffer.length * cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT));
        this._buffer.push(new cc.V2F_C4B_T2F_Triangle(d, 
        g, a, this._trianglesArrayBuffer, this._buffer.length * cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT));
        this._dirty = !0
    },drawDots: function(a, c, d) {
        if (a && 0 != a.length) {
            d = d || this.getDrawColor();
            null == d.a && (d.a = 255);
            for (var e = 0, f = a.length; e < f; e++)
                this.drawDot(a[e], c, d)
        }
    },drawSegment: function(a, c, d, e) {
        e = e || this.getDrawColor();
        null == e.a && (e.a = 255);
        d = d || 0.5 * this._lineWidth;
        this._ensureCapacity(18);
        e = {r: 0 | e.r,g: 0 | e.g,b: 0 | e.b,a: 0 | e.a};
        var f = cc.__v2f(a), g = cc.__v2f(c);
        c = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(g, f)));
        a = cc.v2fperp(c);
        var h = cc.v2fmult(c, d), k = cc.v2fmult(a, d);
        d = cc.v2fsub(g, cc.v2fadd(h, k));
        var m = cc.v2fadd(g, cc.v2fsub(h, k)), n = cc.v2fsub(g, h), g = cc.v2fadd(g, h), p = cc.v2fsub(f, h), q = cc.v2fadd(f, h), t = cc.v2fsub(f, cc.v2fsub(h, k)), f = cc.v2fadd(f, cc.v2fadd(h, k)), h = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT, k = this._trianglesArrayBuffer, r = this._buffer;
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: d,colors: e,texCoords: cc.__t(cc.v2fneg(cc.v2fadd(c, a)))}, {vertices: m,colors: e,texCoords: cc.__t(cc.v2fsub(c, a))}, {vertices: n,colors: e,texCoords: cc.__t(cc.v2fneg(c))}, 
        k, r.length * h));
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: g,colors: e,texCoords: cc.__t(c)}, {vertices: m,colors: e,texCoords: cc.__t(cc.v2fsub(c, a))}, {vertices: n,colors: e,texCoords: cc.__t(cc.v2fneg(c))}, k, r.length * h));
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: g,colors: e,texCoords: cc.__t(c)}, {vertices: p,colors: e,texCoords: cc.__t(cc.v2fneg(c))}, {vertices: n,colors: e,texCoords: cc.__t(cc.v2fneg(c))}, k, r.length * h));
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: g,colors: e,texCoords: cc.__t(c)}, {vertices: p,
            colors: e,texCoords: cc.__t(cc.v2fneg(c))}, {vertices: q,colors: e,texCoords: cc.__t(c)}, k, r.length * h));
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: t,colors: e,texCoords: cc.__t(cc.v2fsub(a, c))}, {vertices: p,colors: e,texCoords: cc.__t(cc.v2fneg(c))}, {vertices: q,colors: e,texCoords: cc.__t(c)}, k, r.length * h));
        r.push(new cc.V2F_C4B_T2F_Triangle({vertices: t,colors: e,texCoords: cc.__t(cc.v2fsub(a, c))}, {vertices: f,colors: e,texCoords: cc.__t(cc.v2fadd(c, a))}, {vertices: q,colors: e,texCoords: cc.__t(c)}, k, r.length * h));
        this._dirty = 
        !0
    },drawPoly: function(a, c, d, e) {
        if (null == c)
            this._drawSegments(a, d, e, !0);
        else {
            null == c.a && (c.a = 255);
            null == e.a && (e.a = 255);
            d = d || this._lineWidth;
            d *= 0.5;
            c = {r: 0 | c.r,g: 0 | c.g,b: 0 | c.b,a: 0 | c.a};
            e = {r: 0 | e.r,g: 0 | e.g,b: 0 | e.b,a: 0 | e.a};
            var f = [], g, h, k, m, n = a.length;
            for (g = 0; g < n; g++) {
                h = cc.__v2f(a[(g - 1 + n) % n]);
                k = cc.__v2f(a[g]);
                m = cc.__v2f(a[(g + 1) % n]);
                var p = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(k, h)));
                k = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(m, k)));
                p = cc.v2fmult(cc.v2fadd(p, k), 1 / (cc.v2fdot(p, k) + 1));
                f[g] = {offset: p,n: k}
            }
            p = 0 < d;
            this._ensureCapacity(3 * 
            (3 * n - 2));
            var q = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT, t = this._trianglesArrayBuffer, r = this._buffer, s = !1 == p ? 0.5 : 0;
            for (g = 0; g < n - 2; g++)
                h = cc.v2fsub(cc.__v2f(a[0]), cc.v2fmult(f[0].offset, s)), k = cc.v2fsub(cc.__v2f(a[g + 1]), cc.v2fmult(f[g + 1].offset, s)), m = cc.v2fsub(cc.__v2f(a[g + 2]), cc.v2fmult(f[g + 2].offset, s)), r.push(new cc.V2F_C4B_T2F_Triangle({vertices: h,colors: c,texCoords: cc.__t(cc.v2fzero())}, {vertices: k,colors: c,texCoords: cc.__t(cc.v2fzero())}, {vertices: m,colors: c,texCoords: cc.__t(cc.v2fzero())}, t, r.length * 
                q));
            for (g = 0; g < n; g++) {
                s = (g + 1) % n;
                h = cc.__v2f(a[g]);
                k = cc.__v2f(a[s]);
                m = f[g].n;
                var u = f[g].offset, v = f[s].offset, s = p ? cc.v2fsub(h, cc.v2fmult(u, d)) : cc.v2fsub(h, cc.v2fmult(u, 0.5)), w = p ? cc.v2fsub(k, cc.v2fmult(v, d)) : cc.v2fsub(k, cc.v2fmult(v, 0.5));
                h = p ? cc.v2fadd(h, cc.v2fmult(u, d)) : cc.v2fadd(h, cc.v2fmult(u, 0.5));
                k = p ? cc.v2fadd(k, cc.v2fmult(v, d)) : cc.v2fadd(k, cc.v2fmult(v, 0.5));
                p ? (r.push(new cc.V2F_C4B_T2F_Triangle({vertices: s,colors: e,texCoords: cc.__t(cc.v2fneg(m))}, {vertices: w,colors: e,texCoords: cc.__t(cc.v2fneg(m))}, 
                {vertices: k,colors: e,texCoords: cc.__t(m)}, t, r.length * q)), r.push(new cc.V2F_C4B_T2F_Triangle({vertices: s,colors: e,texCoords: cc.__t(cc.v2fneg(m))}, {vertices: h,colors: e,texCoords: cc.__t(m)}, {vertices: k,colors: e,texCoords: cc.__t(m)}, t, r.length * q))) : (r.push(new cc.V2F_C4B_T2F_Triangle({vertices: s,colors: c,texCoords: cc.__t(cc.v2fzero())}, {vertices: w,colors: c,texCoords: cc.__t(cc.v2fzero())}, {vertices: k,colors: c,texCoords: cc.__t(m)}, t, r.length * q)), r.push(new cc.V2F_C4B_T2F_Triangle({vertices: s,colors: c,texCoords: cc.__t(cc.v2fzero())}, 
                {vertices: h,colors: c,texCoords: cc.__t(m)}, {vertices: k,colors: c,texCoords: cc.__t(m)}, t, r.length * q)))
            }
            this._dirty = !0
        }
    },_drawSegments: function(a, c, d, e) {
        c = c || this._lineWidth;
        d = d || this._drawColor;
        null == d.a && (d.a = 255);
        c *= 0.5;
        if (!(0 >= c)) {
            d = {r: 0 | d.r,g: 0 | d.g,b: 0 | d.b,a: 0 | d.a};
            var f = [], g, h, k, m, n = a.length;
            for (g = 0; g < n; g++) {
                h = cc.__v2f(a[(g - 1 + n) % n]);
                k = cc.__v2f(a[g]);
                m = cc.__v2f(a[(g + 1) % n]);
                var p = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(k, h)));
                k = cc.v2fnormalize(cc.v2fperp(cc.v2fsub(m, k)));
                m = cc.v2fmult(cc.v2fadd(p, k), 
                1 / (cc.v2fdot(p, k) + 1));
                f[g] = {offset: m,n: k}
            }
            this._ensureCapacity(3 * (3 * n - 2));
            m = cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT;
            var p = this._trianglesArrayBuffer, q = this._buffer;
            e = e ? n : n - 1;
            for (g = 0; g < e; g++) {
                var t = (g + 1) % n;
                h = cc.__v2f(a[g]);
                k = cc.__v2f(a[t]);
                var r = f[g].n, s = f[g].offset, u = f[t].offset, t = cc.v2fsub(h, cc.v2fmult(s, c)), v = cc.v2fsub(k, cc.v2fmult(u, c));
                h = cc.v2fadd(h, cc.v2fmult(s, c));
                k = cc.v2fadd(k, cc.v2fmult(u, c));
                q.push(new cc.V2F_C4B_T2F_Triangle({vertices: t,colors: d,texCoords: cc.__t(cc.v2fneg(r))}, {vertices: v,
                    colors: d,texCoords: cc.__t(cc.v2fneg(r))}, {vertices: k,colors: d,texCoords: cc.__t(r)}, p, q.length * m));
                q.push(new cc.V2F_C4B_T2F_Triangle({vertices: t,colors: d,texCoords: cc.__t(cc.v2fneg(r))}, {vertices: h,colors: d,texCoords: cc.__t(r)}, {vertices: k,colors: d,texCoords: cc.__t(r)}, p, q.length * m))
            }
            this._dirty = !0
        }
    },clear: function() {
        this._buffer.length = 0;
        this._dirty = !0
    }});
cc.DrawNode = cc._renderType == cc._RENDER_TYPE_WEBGL ? cc.DrawNodeWebGL : cc.DrawNodeCanvas;
cc.DrawNode.create = function() {
    return new cc.DrawNode
};
cc._DrawNodeElement = function(a, c, d, e, f, g, h, k, m) {
    this.type = a;
    this.verts = c || null;
    this.fillColor = d || null;
    this.lineWidth = e || 0;
    this.lineColor = f || null;
    this.lineCap = g || "butt";
    this.isClosePolygon = h || !1;
    this.isFill = k || !1;
    this.isStroke = m || !1
};
cc.DrawNode.TYPE_DOT = 0;
cc.DrawNode.TYPE_SEGMENT = 1;
cc.DrawNode.TYPE_POLY = 2;

    
    
    }
})();


(function(){
    var tmpl = '\
            <style>\
                .tl-ui-tabs{ background:whitesmoke }\
                .tl-ui-tabs a{ font:bold 14px "Helvetica Neue", Helvetica, Arial, sans-serif; line-height:30px; padding:0px 10px; color:#666; text-decoration:none; display:block; float:left }\
            </style>\
            <div class="tl-ui-tabs clear" style="background:whitesmoke;border-top:1px solid silver;border-bottom:1px solid lightgray">\
                <a id="btn_elem" title="Update elements" href="javascript:void(0)">Elements</a>\
                <a id="btn_dock" title="Dock to left/top/right/bottom" style="float:right" href="javascript:void(0)">Dock</a>\
            </div>\
            <div class="clear" style="position:relative;height:200px;right:0px;left:0px;z-index:9999;background-color:rgba(255,255,255,.2);">\
                <div id="left" class="tl-ui-scroll" style="width:70%;height:100%;float:left;"></div>\
                <div id="right" class="tl-ui-scroll" style="width:30%;height:100%;float:left;box-shadow:inset 1px 0px 0px silver;"></div>\
            </div>\
    ';
    
    var el = document.createElement('div');
    el.style.backgroundColor = '#fff';
    el.innerHTML = tmpl;
    document.body.appendChild(el);
    document.body.style.overflow = 'auto';
    window.scrollTo(0,document.body.clientHeight);
    
    var left = document.getElementById('left'),
        right = document.getElementById('right'),
        btn_elem = document.getElementById('btn_elem'),
        btn_dock = document.getElementById('btn_dock');
        
    // update tree
    btn_elem.onclick = function(){
        try{ window._cocos_devtools.ie.on_update(null, window._cocos_devtools.ie.get_node_children()) }catch(e){ }
    };
    
    btn_dock.onclick = function(){
        btn_dock.dock = btn_dock.dock || 0;
        btn_dock.dock ++;
        if (btn_dock.dock == 4){
            btn_dock.dock = 0;
        }
        
        if (btn_dock.dock == 0){
            change_dock('bottom');
            localStorage.setItem('change_dock','bottom');
        }else if (btn_dock.dock == 1){
            change_dock('left');
            localStorage.setItem('change_dock','left');
        }else if (btn_dock.dock == 2){
            change_dock('top');
            localStorage.setItem('change_dock','top');
        }else if (btn_dock.dock == 3){
            change_dock('right');
            localStorage.setItem('change_dock','right');
        }
    };
    
    function change_dock(mode){
        if (mode == 'bottom'){
            el.style.position = 'static';
            el.style.width = 'auto';
            el.style.height = 'auto';
            el.style.top = 'auto';
            el.style.right = 'auto';
            
            left.style.width = '70%';
            left.style.height = '100%';
            left.style.float = 'left';
            
            right.style.width = '30%';
            right.style.height = '100%';
            right.style.float = 'left';
            
            el.children[2].style.height = '200px';
            el.parentNode.appendChild(el);
            window.scrollTo(0,document.body.clientHeight);
        }else if(mode == 'left'){
            el.style.position = 'absolute';
            el.style.width = '25%';
            el.style.height = '100%';
            el.style.top = '0px';
            el.style.right = 'auto';
            
            left.style.width = '100%';
            left.style.height = '60%';
            left.style.float = 'none';
            
            right.style.width = '100%';
            right.style.height = '40%';
            right.style.float = 'none';
            
            el.children[2].style.height = '90%';
            el.parentNode.appendChild(el);
        }else if (mode == 'top'){
            el.style.position = 'static';
            el.style.width = 'auto';
            el.style.height = 'auto';
            el.style.top = 'auto';
            el.style.right = 'auto';
            
            left.style.width = '70%';
            left.style.height = '100%';
            left.style.float = 'left';
            
            right.style.width = '30%';
            right.style.height = '100%';
            right.style.float = 'left';
            
            el.children[2].style.height = '200px';
            el.parentNode.insertBefore(el,el.parentNode.children[0]);
            window.scrollTo(0,0);
        }else if(mode == 'right'){
            el.style.position = 'absolute';
            el.style.width = '25%';
            el.style.height = '100%';
            el.style.top = '0px';
            el.style.right = '0px';
            
            left.style.width = '100%';
            left.style.height = '60%';
            left.style.float = 'none';
            
            right.style.width = '100%';
            right.style.height = '40%';
            right.style.float = 'none';
            
            el.children[2].style.height = '90%';
            el.parentNode.appendChild(el);
        }
    }
    
    // remember dock 
    if (localStorage.getItem('change_dock')){
        var d = localStorage.getItem('change_dock') || 'bottom';
        change_dock(d);
        btn_dock.dock = {'bottom':0,'left':1,'top':2,'right':3}[d];
    }
})();

(function(_this){
        // ui
        var tt, at, ie;
        tt = new _this['tl.ui.TreeList'](document.getElementById('left'));
        tt.on_hover = function(nd){
            nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
        };
        tt.on_out = function(){
            ie && ie.draw_rect(null, tt.selected ? tt.selected.id : null);
        };
        tt.on_select = function(nd){
            nd && nd.__data && at && at.update(nd.__data.attr);
            nd && nd.__data && ie && ie.draw_rect(nd.__data.id, tt.selected ? tt.selected.id : null);
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
        
        at = new _this['tl.ui.AttrTable'](document.getElementById('right'));
        at.on_change = function(nd, attr, value){
            if (tt.selected){
                var attr_obj = {};// write an object for set attribute
                attr_obj[attr] = value;
                //tt.selected.__data.attr[attr] = value; // set the tree data
                tt.selected.__data.attr[attr].value = value; // set the tree data
                ie.modify_node(tt.selected.__data.id, attr_obj); // set the canvas
            }
        };
        
        ie = new InspectElement();
        
        
        
        ie.on_update = function(sc, scene_data){
            ie.draw_rect(null,null);
            at.clear();
            tt.update(scene_data);
            //console.log('update',scene_data);
        };
        ie.on_addChild = function(node, node_data){
            //console.log('addChild',node,node_data,node_data.parentId);
            tt.insert(node_data, node_data.parentId);
        };
        ie.on_removeChild = function(node, node_data){
            //console.log('removeChild',node,node_data,node_data.parentId);
            tt.remove(node_data, node_data.parentId);
        };
        ie.start();
        
        // load data first time
        ie.on_update(null, ie.get_node_children());
        
        // get global
        var _cd = _this._cocos_devtools || {};
        _cd.COCOS_DEVTOOLS_WEB = function(){ console.log('COCOS_DEVTOOLS_WEB') };
        _cd.tt = tt, _cd.at = at, _cd.ie = ie;
        
        _this._cocos_devtools = _cd;
})(this);