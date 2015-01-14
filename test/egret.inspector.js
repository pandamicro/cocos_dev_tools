var __extends = this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e)
        e.hasOwnProperty(i) && (t[i] = e[i]);
    n.prototype = e.prototype, t.prototype = new n
}, egret;
!function(t) {
    var e;
    !function(e) {
        var n = function() {
            function t() {
                var t = this;
                this.events = {}, this.on = function(e, n) {
                    return e in t.events || (t.events[e] = []), t.events[e].push(n), t
                }, this.trigger = function(e, n) {
                    var i = t.events[e];
                    if (i)
                        for (var o = 0; o < i.length; o++)
                            "function" == typeof i[o] && i[o](n)
                }
            }
            return t.prototype.removeAllEvents = function() {
                this.events = {}
            }, t
        }();
        e.EventBase = n;
        var i = function(e) {
            function n() {
                e.apply(this, arguments), this._children = [], this._props = [], this.parentHash = -1, this.show = !1, this.visible = !0, this.type = null, this.memberName = null, this.selected = !1, this.expandable = !1, this.isGetter = !1, this.isSetter = !1, this.icon = "-", this.dirty = !1, this.hasChildren = !1
            }
            return __extends(n, e), n.prototype.updateIcon = function() {
                this.icon = 0 == this.hasChildren ? "&nbsp;" : this.show ? "-" : "+"
            }, n.prototype.recover = function() {
                this.show && this.hasChildren && (this.children != this._children || this.props != this._props) && (this.children = null, this.props = null, this.showChildren())
            }, n.prototype.showChildren = function() {
                this.hasChildren && (this.show = !0, this.children || (this.children = this._children, this.props = this._props, this.trigger(n.ChildrenChange)), this.updateIcon(), this.trigger(n.Show))
            }, n.prototype.toggle = function() {
                return this.children || this.show ? (this.show = !this.show, this.updateIcon(), void this.trigger(n.Show)) : void this.showChildren()
            }, n.prototype.parseChildren = function() {
                n.parseChildren(this.raw, this), n.parseProps(this.raw, this)
            }, n.prototype.reset = function(t) {
                void 0 === t && (t = !0), this._children.forEach(function(t) {
                    return t.reset()
                }), this._props.forEach(function(t) {
                    return t.reset()
                }), this._children = [], this._props = [], this.children = null, this.props = null, this.show = !1, t && (n.hash2Node[this.rawHash] = void 0, n.hash2DisplayObject[this.rawHash] = void 0)
            }, Object.defineProperty(n.prototype, "raw", {get: function() {
                    return n.hash2DisplayObject[this.rawHash]
                },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "parent", {get: function() {
                    return -1 == this.parentHash ? null : n.hash2Node[this.parentHash]
                },enumerable: !0,configurable: !0}), n.getValue = function(t, e) {
                if (null == t)
                    return String(t);
                var n = typeof t, i = null;
                switch (e.type = n, n) {
                    case "string":
                        i = JSON.stringify(t);
                        break;
                    case "number":
                        return i = t;
                    case "array":
                        i = String(t), e.expandable = !0;
                        break;
                    case "object":
                        i = t.constructor.name || t.__class__ || "object", e.expandable = !0;
                        break;
                    case "function":
                        i = String(t), e.name += "()";
                        break;
                    default:
                        i = String(t)
                }
                return i
            }, n.prototype.naviToDisplayObject = function(t) {
                n.isLinked(t) || (n.linkToIt(t), this.dirty = !0), this.naviToNode(t.hashCode)
            }, n.prototype.naviToNode = function(t, e) {
                void 0 === e && (e = !1);
                for (var i = n.getByHash(t), o = [], r = i.parent; null != r; )
                    o.push(r), r = r.parent;
                for (var s = o.length - 1; s >= 0; s--)
                    o[s].showChildren();
                i.showUp()
            }, n.prototype.showUp = function() {
                n.selected && (n.selected.selected = !1, n.selected.trigger(n.UnSelected)), this.selected = !0, n.selected = this, this.trigger(n.OnSelected)
            }, n.prototype.find = function(t, e) {
                if (this.rawHash == t)
                    return e.push(this), !0;
                if (!this.hasChildren)
                    return !1;
                e.push(this);
                var n = this._props.filter(function(n) {
                    return n.find(t, e)
                }), i = n.length > 0;
                return i || (n = this._children.filter(function(n) {
                    return n.find(t, e)
                }), i = n.length > 0), i ? !0 : (e.pop(), !1)
            }, n.prototype.parseRawProps = function(t, e, i) {
                return void 0 === e && (e = new n), n.parseRawProps(this.raw, t, e, i)
            }, n.parseRawProps = function(e, i, o, r) {
                if (void 0 === o && (o = new n), void 0 === r && (r = {showPrivate: !0,showMethods: !1}), !(0 > i) && "object" == typeof e) {
                    var s = [];
                    for (var h in e)
                        if (r.showPrivate !== !1 || 0 != String(h).indexOf("_")) {
                            var a = new n;
                            a.name = h;
                            var c = null, l = null, p = e;
                            for (l = Object.getOwnPropertyDescriptor(e, h); null == l && p; )
                                p = p.__proto__, l = Object.getOwnPropertyDescriptor(p, h);
                            l && (a.isGetter = void 0 != l.get, a.isSetter = a.isGetter && void 0 != l.set);
                            try {
                                c = e[h]
                            } catch (d) {
                                c = "faild to get value"
                            }
                            ("function" != typeof c || 1 == r.showMethods) && (n.parseRawProps(c, i - 1, a), a.value = n.getValue(c, a), s.push(a))
                        }
                    return s.sort(function(t, e) {
                        var n = t.name, i = e.name;
                        return n > i ? 1 : n == i ? 0 : -1
                    }), o.name = t.getQualifiedClassName(e), o._props = s, o
                }
            }, n.parseRawProp = function(t, e, i, o) {
                return void 0 === o && (o = new n), o.name = t, n.parseRawProps(e, i - 1, o), o.value = n.getValue(e, o), o
            }, n.prototype.toString = function() {
                return this.name
            }, n.linkToIt = function(t, e) {
                void 0 === e && (e = null);
                var i = n.hash2Node[t.hashCode], o = void 0 != i;
                if (o ? (i.reset(!1), n.parseChildren(t, i, 0), n.parseProps(t, i)) : i = n.parseNode(t), i.showChildren(), e)
                    for (var r = 0; r < i._children.length; r++)
                        i._children[r].rawHash == e.rawHash && (i._children[r] = e);
                return o || !t.parent ? i : n.linkToIt(t.parent, i)
            }, n.unLinkIt = function(t) {
                var e = n.hash2Node[t.hashCode], i = e.parent, o = i._children.indexOf(e);
                i._children.splice(o, 1)
            }, n.isLinked = function(t) {
                return void 0 != n.hash2Node[t.hashCode]
            }, n.parseChildren = function(e, i, o) {
                if (void 0 === o && (o = 0), e instanceof t.DisplayObjectContainer) {
                    var r = e;
                    if (!r._children || 0 == r._children.length)
                        return void (i.hasChildren = !1);
                    i.hasChildren = !0, i._children = e._children.map(function(t) {
                        var e = n.parseNode(t, new n, !1, o);
                        return e
                    })
                }
            }, n.parseProps = function(t, e) {
                return
            }, n.parseNode = function(e, i, o, r) {
                if (void 0 === i && (i = new n), void 0 === o && (o = !1), void 0 === r && (r = 1), 0 > r)
                    return null;
                o && n.clear(), n.hash2Node[e.hashCode] = i, n.hash2DisplayObject[e.hashCode] = e;
                var s = t.getQualifiedClassName(e);
                return i.name = s, i.type = s, i.visible = e.visible, i.rawHash = e.hashCode, i.hasChildren = e instanceof t.DisplayObjectContainer && e._children && e._children.length > 0, e._parent && (i.parentHash = e._parent.hashCode), r > 0 && (n.parseChildren(e, i, r - 1), n.parseProps(e, i)), i.updateIcon(), i
            }, n.parseRawObject = function(t, e) {
                return void 0 === e && (e = new n), n.parseRawProps(t, 0, e)
            }, n.getByHash = function(t) {
                return n.hash2Node[t]
            }, n.clear = function() {
                n.hash2Node = {}, n.hash2DisplayObject = {}
            }, n.clone = function(t, e, i) {
                void 0 === e && (e = !1), i = i || new n;
                var o = Object.getOwnPropertyNames(t);
                return o.forEach(function(e) {
                    "events" != e && "_children" != e && "_props" != e && (i[e] = t[e])
                }), n.hash2Node[i.rawHash] = i, t._children.length > 0 && (i._children = t._children.map(function(t) {
                    return n.clone(t, !1, n.getByHash(t.rawHash))
                })), i.recover(), e && i.trigger(n.Changed), i
            }, n.Show = "show", n.UnSelected = "unselected", n.OnSelected = "selected", n.ChildrenChange = "childrenchange", n.Changed = "changed", n.hash2Node = {}, n.hash2DisplayObject = {}, n.ignore = {_parent: 1,parent: 1,_stage: 1,stage: 1,_eventTarget: 1,_children: 1,_owner: 1,_rendererOwner: 1}, n.selected = null, n
        }(n);
        e.TreeNode = i;
        var o = function() {
            function t() {
                this.dirtyCount = [], this.dirtyKey = {}, this.init = !1
            }
            return t.prototype.push = function(t) {
                for (; null != t; ) {
                    if (t.hashCode in this.dirtyKey) {
                        this.dirtyCount[this.dirtyKey[t.hashCode]] += 1;
                        break
                    }
                    if (0 == this.init) {
                        var e = 0;
                        0 == this.dirtyCount.length && (e = 1), this.dirtyCount.push(e), this.dirtyKey[t.hashCode] = this.dirtyCount.length - 1
                    }
                    t = t.parent
                }
                this.init = !0
            }, t.prototype.getRootHash = function() {
                for (var t = this.dirtyCount.length; t >= 0 && !(this.dirtyCount[t] > 0); t--)
                    ;
                for (var e in this.dirtyKey)
                    if (this.dirtyKey[e] == t)
                        return e
            }, t.prototype.reset = function() {
                this.dirtyCount = [], this.dirtyKey = {}, this.init = !1
            }, t
        }();
        e.TreeDirtyCache = o
    }(e = t.devtool || (t.devtool = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        function e(t) {
            var e = {};
            if (!t)
                return e;
            0 == t.indexOf("?") && (t = t.substr(1));
            var n = t.split("&");
            return n.forEach(function(t) {
                if ("?" != t && t) {
                    var n = t.split("=");
                    e[n[0]] = n.length > 1 ? n[1] : null
                }
            }), e
        }
        var n = function() {
            function t() {
            }
            return t.after = function(e, n, i) {
                t.funcs[n] || (t.funcs[n] = window.setTimeout(function() {
                    t.funcs[n] = null, console.log(n), i()
                }, e))
            }, t.funcs = {}, t
        }();
        t.RunIt = n;
        var i = function(t) {
            function e(e) {
                var n = this;
                t.call(this), this.el = e, this.lastX = 0, this.lastY = 0, this.isMouseDown = !1, this.monitorY = !0, this.begin = function(t) {
                    n.lastX = t.screenX, n.lastY = t.screenY, n.isMouseDown = !0, n.el.mousemove(n.move).mouseup(n.end), document.documentElement.addEventListener("mousemove", n.move), document.documentElement.addEventListener("mouseup", n.end), document.body.style["-webkit-user-select"] = "none"
                }, this.move = function(t) {
                    if (0 != n.isMouseDown) {
                        var e = t.screenY - n.lastY, i = t.screenX - n.lastX;
                        n.lastX = t.screenX, n.lastY = t.screenY, n.trigger("move", n.monitorY ? e : i)
                    }
                }, this.end = function() {
                    n.isMouseDown = !1, document.documentElement.removeEventListener("mousemove", n.move), document.documentElement.removeEventListener("mouseup", n.end), document.body.style["-webkit-user-select"] = ""
                }, window.addEventListener("resize", function() {
                    n.trigger("move", 0)
                }), e.mousedown(this.begin)
            }
            return __extends(e, t), e
        }(t.EventBase);
        t.PanelHandle = i;
        var o = function() {
            function t() {
                var t = this;
                this.controlHeight = 30, this.nodesHeight = 300, this.propsHeight = 300, this.nodesWidth = 300, this.propsWidth = 300, this.width = 300, window.addEventListener("resize", function() {
                    t.resize(0, 0)
                }), this.resize(0, 0)
            }
            return t.prototype.resize = function(t) {
                var e = window.innerHeight, n = window.innerWidth;
                this.nodesHeight = this.propsHeight = e, this.propsWidth -= t, this.nodesWidth = n - this.propsWidth - 10
            }, t.prototype.setWidth = function(t) {
                this.width -= t
            }, t
        }();
        t.Layout = o, t.parseParam = e
    }(e = t.devtool || (t.devtool = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t(t) {
                this.callbacks = {}, this.namedCallbacks = {}, this.key = null, this._getDevToolKey(), this._connect(t)
            }
            return t.prototype._connect = function() {
            }, t.prototype.post = function(t, e, n) {
                void 0 === e && (e = null);
                var i = e;
                n && (i = (performance.now() + 100 * Math.random()).toString(), this.callbacks[i] = n);
                var o = {id: i,data: t,key: this.key};
                return this._doPost(o), this
            }, t.prototype._doPost = function(t) {
                this.port.postMessage(t)
            }, t.prototype.on = function(t, e) {
                return this.namedCallbacks[t] || (this.namedCallbacks[t] = []), this.namedCallbacks[t].push(e), this
            }, t.prototype.remove = function(t, e) {
                var n = this.namedCallbacks[t];
                if (n) {
                    var i = n.indexOf(e);
                    if (0 > i)
                        return;
                    n.splice(i, 1)
                }
                return this
            }, t.prototype._parseMsgData = function() {
                return null
            }, t.prototype._onMessage = function(t) {
                var e = this, n = this._parseMsgData(t);
                console.log(n);
                var i = n.id, o = n.data.name, r = this.callbacks[i];
                r && (r(n.data), delete this.callbacks[i]);
                var s = this.namedCallbacks[o];
                s && s.forEach(function(t) {
                    var o = t(n.data, function(t) {
                        i && e.post(t, i)
                    });
                    i && o && e.post(o, i)
                })
            }, t.prototype._getDevToolKey = function() {
                var t = this;
                chrome && chrome.tabs ? chrome.tabs.getCurrent(function(e) {
                    var n = e.windowId + ":" + e.id + ":" + e.url;
                    t.key = btoa(n)
                }) : this.key = chrome && chrome.devtools && chrome.devtools.inspectedWindow ? btoa("for" + String(chrome.devtools.inspectedWindow.tabId)) : window.devtoolTabKey || btoa(location.href)
            }, t
        }();
        t.PortBase = e
    }(e = t.devtool || (t.devtool = {}))
}(egret || (egret = {}));
var t = null, egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return __extends(e, t), e.prototype._connect = function() {
                var t = this, e = chrome.runtime.connect();
                e.onMessage.addListener(function(e) {
                    return t._onMessage(e)
                }), this.port = e
            }, e.prototype._doPost = function(t) {
                this.port.postMessage(t)
            }, e.prototype._parseMsgData = function(t) {
                return t
            }, e
        }(t.PortBase);
        t.ChromePort = e;
        var n = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return __extends(e, t), e.prototype._connect = function() {
                var t = this, e = chrome.runtime.connect();
                e.onMessage.addListener(function(e) {
                    return t._onMessage(e)
                }), this.port = e, window.addEventListener("message", function(e) {
                    return t._onWindowMessage(e.data)
                })
            }, e.prototype._doPost = function(t) {
                this.port.postMessage(t)
            }, e.prototype._parseMsgData = function(t) {
                return t
            }, e.prototype._onMessage = function(e) {
                e.toContent ? t.prototype._onMessage.call(this, e) : window.postMessage(e, "*")
            }, e.prototype._onWindowMessage = function(t) {
                if ("stage" == t.from) {
                    var e = JSON.parse(t.data);
                    this.post(e, t.id)
                }
            }, e
        }(t.PortBase);
        t.ContentPort = n;
        var i = function(t) {
            function e(e) {
                t.call(this, e)
            }
            return __extends(e, t), e.prototype._connect = function() {
                var t = this;
                window.addEventListener("message", function(e) {
                    return t._onMessage(e)
                })
            }, e.prototype._doPost = function(t) {
                window.postMessage({from: "stage",id: t.id,data: JSON.stringify(t.data)}, "*")
            }, e.prototype._parseMsgData = function(t) {
                return t.data
            }, e.prototype._onMessage = function(e) {
                var n = this._parseMsgData(e);
                return "stage" == n.from ? !1 : void t.prototype._onMessage.call(this, e)
            }, e
        }(t.PortBase);
        t.StagePort = i;
        var o = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return __extends(e, t), e.prototype._connect = function(t) {
                var e = this, n = new WebSocket("ws://127.0.0.1:" + (window.devtoolPort || window.localStorage.getItem("port") || 3001));
                n.addEventListener("message", this._onMessage), n.addEventListener("open", function() {
                    return t(e)
                })
            }, e.prototype._doPost = function(t) {
                var e = this.port;
                e.send(JSON.stringify(t))
            }, e.prototype._parseMsgData = function(t) {
                return JSON.parse(t.data)
            }, e
        }(t.PortBase);
        t.WsPort = o
    }(e = t.devtool || (t.devtool = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = ["x", "y", "width", "height", "measuredWidth", "measuredHeight", "layoutBoundsWidth", "layoutBoundsHeight", "preferredWidth", "preferredHeight", "left", "right", "top", "bottom", "percentWidth", "percentHeight", "verticalCenter", "horizontalCenter", "explicitWidth", "explicitHeight", "includeInLayout", "preferredX", "preferredY", "layoutBoundsX", "layoutBoundsY", "maxWidth", "minWidth", "skin", "skinName", "source", "content", "maxHeight", "minHeight", "visible", "alpha", "parent"], n = function(t) {
            function e() {
                t.apply(this, arguments)
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "height", {set: function(t) {
                    this.container.height(t)
                },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "width", {set: function(t) {
                    this.container.width(t)
                },enumerable: !0,configurable: !0}), Object.defineProperty(e.prototype, "data", {get: function() {
                    return this._data
                },set: function(t) {
                    this._data = t, this.trigger("datachange")
                },enumerable: !0,configurable: !0}), e.prototype.init = function() {
            }, e.prototype.showChildren = function() {
            }, e
        }(t.EventBase), i = function(e) {
            function n() {
                e.apply(this, arguments), this.chkPreventTouch = $("#chkPreventTouch"), this.chkHighlightHover = $("#chkHighlightHover"), this.chkHighlightClick = $("#chkHighlightClick"), this.btnRefresh = $("#refresh"), this._highlightHover = !1, this._highlightClick = !0, this._preventTouch = !1
            }
            return __extends(n, e), Object.defineProperty(n.prototype, "highlightHover", {set: function(t) {
                    this._highlightHover = t, t != this.chkHighlightHover.is("checked") && this.chkHighlightHover.attr("checked", t), window.localStorage.setItem("highlightHover", String(t)), this.port.post({name: "highlightHover",data: t})
                },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "highlightClick", {set: function(t) {
                    this._highlightClick = t, t != this.chkHighlightClick.is(":checked") && this.chkHighlightClick.attr("checked", t), window.localStorage.setItem("highlightClick", String(t)), this.port.post({name: "highlightClick",data: t})
                },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "preventTouch", {set: function(t) {
                    this._preventTouch = t, t != this.chkPreventTouch.is(":checked") && this.chkPreventTouch.attr("checked", t), window.localStorage.setItem("preventTouch", String(t)), this.port.post({name: "preventTouch",data: this._preventTouch})
                },enumerable: !0,configurable: !0}), n.prototype.init = function() {
                var t = this;
                e.prototype.init.call(this), this.container = $("#nodes"), this.itemTmpl = this.container.html(), this.container.html(""), this.on("datachange", function() {
                    return t.showChildren()
                }), this.chkPreventTouch.change(function() {
                    return t._onChkPreventTouchChange()
                }), this.highlightClick = "true" == (window.localStorage.getItem("highlightClick") || "true"), this.highlightHover = "true" == (window.localStorage.getItem("highlightHover") || "false"), this.preventTouch = "true" == (window.localStorage.getItem("preventTouch") || "false"), this.chkHighlightClick.change(function() {
                    return t._onChkHighlightClickChange()
                }), this.chkHighlightHover.change(function() {
                    return t._onChkHighlightHoverChange()
                }), this.btnRefresh.click(function() {
                    return t.refresh()
                })
            }, n.prototype.showChildren = function() {
                this.container.html(""), this.container.append(this.bindNode(this._data))
            }, n.prototype.bindNode = function(e) {
                var n = this;
                e.removeAllEvents();
                var i = this, o = i.itemTmpl.replace("{name}", e.name).replace("{memberName}", e.memberName).replace("{icon}", e.icon), r = $(o), s = r.find(".memberName"), h = r.find(".toggle");
                h.attr("checked", e.visible), h.click(function() {
                    var t = h.is(":checked");
                    e.visible = t, n.mainPanel.port.post({name: "applyChange",hash: e.rawHash,expression: "['visible']",value: t}, null, function(t) {
                        console.log(t)
                    })
                });
                var a = r.find(".icon"), c = r.find(".children"), l = r.find(".parent"), p = r.find(".children-array"), d = r.find(".props-array"), u = function() {
                    if (e.hasChildren && 0 != e.show) {
                        p.html(""), d.html("");
                        var t = e._children.map(function(t) {
                            return i.bindNode(t)
                        }), n = e._props.map(function(t) {
                            return i.bindNode(t)
                        });
                        p.append(t), d.append(n)
                    }
                };
                return u(), null == e.memberName && s.remove(), e.on("show", function() {
                    0 == e._children.length ? n.port.post({name: "expandTree",hashCode: e.rawHash}, null, function(n) {
                        t.TreeNode.clone(n, !1, e), e.show = !0, u(), e.showChildren()
                    }) : (c.toggle(e.show), a.html(e.icon))
                }), e.on(t.TreeNode.ChildrenChange, u), e.on(t.TreeNode.Changed, function() {
                    return u()
                }), e.on(t.TreeNode.OnSelected, function() {
                    l.addClass("selected");
                    var t = n.container.height(), e = n.container.offset().top, i = l.offset().top - e;
                    if (i > t || 0 > i) {
                        var o = n.container.scrollTop() + i;
                        n.container.scrollTop(o)
                    }
                }).on(t.TreeNode.UnSelected, function() {
                    l.removeClass("selected")
                }), l.click(function() {
                    return i.showItInGame(e)
                }), l.mouseenter(function() {
                    return i.showItInGame(e, !0)
                }), a.click(function() {
                    return e.toggle(), !1
                }), r
            }, n.prototype.showGameSelection = function(e, n) {
                if (n) {
                    var i = t.TreeNode.getByHash(n.rawHash);
                    t.TreeNode.clone(n, !0, i)
                }
                this._data.naviToNode(e)
            }, n.prototype.showItInGame = function(t, e) {
                void 0 === e && (e = !1), e || (this.mainPanel.propsPanel.selectedHash = t.rawHash, t.showUp()), (!e || e && this._highlightHover) && this.transTreeSelection(t.rawHash, e)
            }, n.prototype.transTreeSelection = function(t, e) {
                void 0 === e && (e = !1), this.mainPanel.port.post({name: "showTreeSelection",data: t,isHover: e})
            }, n.prototype.refresh = function() {
                var e = this;
                this.port.post({name: "refresh"}, null, function(n) {
                    t.TreeNode.clear();
                    var i = t.TreeNode.clone(n.tree, !1);
                    e.data = i, e.data.naviToNode(n.hash)
                })
            }, n.prototype._onChkPreventTouchChange = function() {
                this.preventTouch = this.chkPreventTouch.is(":checked")
            }, n.prototype._onChkHighlightClickChange = function() {
                this.highlightClick = this.chkHighlightClick.is(":checked")
            }, n.prototype._onChkHighlightHoverChange = function() {
                this.highlightHover = this.chkHighlightHover.is(":checked")
            }, n
        }(n), o = function(t) {
            function n() {
                var e = this;
                t.apply(this, arguments), this._showMethods = !1, this._showPrivate = !0, this.onShowPrivateChanged = function() {
                    e.showPrivate = e.chkShowPrivate.is(":checked")
                }, this.onShowMethodsChanged = function() {
                    e.showMethods = e.chkShowMethods.is(":checked")
                }
            }
            return __extends(n, t), Object.defineProperty(n.prototype, "showMethods", {set: function(t) {
                    this._showMethods = t, t != this.chkShowMethods.is(":checked") && this.chkShowMethods.attr("checked", t), window.localStorage.setItem("showMethods", String(t)), this.port.post({name: "showMethodsChanged",showMethods: this._showMethods,hash: this.selectedHash})
                },enumerable: !0,configurable: !0}), Object.defineProperty(n.prototype, "showPrivate", {set: function(t) {
                    this._showPrivate = t, t != this.chkShowPrivate.is(":checked") && this.chkShowPrivate.attr("checked", t), window.localStorage.setItem("showPrivate", String(t)), this.port.post({name: "showPrivateChanged",showPrivate: this._showPrivate,hash: this.selectedHash})
                },enumerable: !0,configurable: !0}), n.prototype.init = function() {
                var e = this;
                t.prototype.init.call(this), this.container = $("#props"), this.title = this.container.find(".title"), this.properties = this.container.find(".properties"), this.chkShowMethods = this.container.find("#showMethods"), this.chkShowPrivate = this.container.find("#showPrivate"), this.itemTmpl = this.properties.html(), this.properties.html(""), this.on("datachange", function() {
                    return e.showChildren()
                }), this.showPrivate = "true" == (window.localStorage.getItem("showPrivate") || "true"), this.showMethods = "true" == (window.localStorage.getItem("showMethods") || "false"), this.chkShowPrivate.click(this.onShowPrivateChanged), this.chkShowMethods.click(this.onShowMethodsChanged)
            }, n.prototype.showChildren = function(t, n) {
                var i = this;
                void 0 === t && (t = this._data), void 0 === n && (n = this.properties);
                var o = t;
                this.title.text(o.name), n.html(""), o._props = o._props.sort(function(t, n) {
                    var i = e.indexOf(t.name), o = e.indexOf(n.name);
                    return i >= 0 && o >= 0 ? i > o ? 1 : -1 : i >= 0 ? -1 : o >= 0 ? 1 : t.name > n.name ? 1 : -1
                });
                var r = n.data("expression") || "", s = o._props.map(function(t) {
                    return i.showProperty(t, r + "['" + t.name + "']")
                });
                n.append(s)
            }, n.prototype.showProperty = function(t, e, n) {
                void 0 === n && (n = this._initPropElement(t));
                var i = t.name, o = t.value;
                if (i.toLowerCase().indexOf("color") >= 0 && "number" == typeof o) {
                    for (o = o.toString(16); o.length < 6; )
                        o = "0" + o;
                    o = "0x" + o, t.value = o
                }
                "function" == t.type && (o = "function(){...}");
                var r = n.children(".value");
                return r.text(o), r.attr("title", t.value), this._initValueActions(t, n, e), t.expandable && this._initChildrenActions(t, n, e), n
            }, n.prototype._initPropElement = function(t) {
                var e = this.itemTmpl.replace("{icon}", t.expandable ? "+" : " ").replace("{name}", t.name), n = $(e);
                return t.isGetter && 0 == t.isSetter && n.addClass("noSetter"), n
            }, n.prototype._initValueActions = function(t, e, n) {
                var i = this, o = e.children(".value");
                o.data("expression", n), o.dblclick(function() {
                    if (!(t.expandable || t.isGetter && 0 == t.isSetter)) {
                        var e = $('<input type="text" value="" />');
                        e.width(o.width() + 10), e.val(t.value), o.text("").append(e), e.focus().select();
                        var r = function() {
                            var r = e.val();
                            e.remove(), "" == r && (r = String(t.value)), o.text(r), r != String(t.value) && i.applyChange(n, r, function(e) {
                                e = JSON.stringify(e), t.value = e, o.text(e)
                            })
                        };
                        e.blur(r).keypress(function(t) {
                            13 == t.keyCode && r()
                        })
                    }
                })
            }, n.prototype._initChildrenActions = function(t, e, n) {
                var i = this, o = e.children(".icon");
                o.data("expanded", !1), e.addClass("expandable"), e.data("expression", n).children("span").click(function() {
                    var t = o.data("expanded");
                    if (t) {
                        var n = e.children("ul");
                        n.remove(), o.text("+")
                    } else {
                        var n = $("<ul/>").data("expression", e.data("expression"));
                        n.click(function() {
                            return !1
                        }), e.append(n), i.expand(e.data("expression"), n), o.text("-")
                    }
                    return o.data("expanded", !t), !1
                })
            }, n.prototype.expand = function(t, e) {
                var n = this;
                this.mainPanel.port.post({name: "expand",hash: this.selectedHash,expression: t}, null, function(t) {
                    n.showChildren(t, e)
                })
            }, n.prototype.invokeGetter = function(t, e, n) {
                var i = this;
                this.mainPanel.port.post({name: "invokeGetter",hash: this.selectedHash,expression: e,propName: t}, null, function(t) {
                    i.showProperty(t, e, n)
                })
            }, n.prototype.applyChange = function(t, e, n) {
                this.mainPanel.port.post({name: "applyChange",hash: this.selectedHash,expression: t,value: e}, null, function(t) {
                    t.success && n && n(t.result)
                })
            }, n.prototype.showGameSelection = function(t, e) {
                this._data = e, this.selectedHash = t, this.showChildren()
            }, n
        }(n), r = function(t) {
            function e() {
                t.apply(this, arguments), this.maxBarCount = 60, this._fpsList = [], this._fps = 0
            }
            return __extends(e, t), Object.defineProperty(e.prototype, "fps", {get: function() {
                    return this._fps
                },set: function(t) {
                    this._fps = t, this._fpsList.push(t), this._fpsList.length > this.maxBarCount && this._fpsList.shift(), this.trigger("fps")
                },enumerable: !0,configurable: !0}), e.prototype.init = function() {
                var t = this;
                this.container = $("#profile"), this.fpsTag = $("#fps"), this.chartCtx = document.getElementById("fpsChart").getContext("2d"), this.on("fps", function() {
                    t.fpsTag.text(t._fps), t.drawChart()
                })
            }, e.prototype.drawChart = function() {
                var t = this._fpsList.length, e = this.chartCtx.canvas.width, n = this.chartCtx.canvas.height, i = Math.round(e / this.maxBarCount), o = Math.min.apply(Math, this._fpsList);
                o = Math.min(o, 20), this.chartCtx.clearRect(0, 0, e, n);
                for (var r = 0; t > r; r++) {
                    var s = this._fpsList[r] - o, h = s / (70 - o) * n, a = i * r, c = n - h, l = h / n * 200;
                    l = Math.round(l), l = Math.max(l, 1);
                    var p = 200 - l;
                    this.chartCtx.fillStyle = "rgb(" + p + "," + l + ",0)", this.chartCtx.fillRect(a, c, i - 1, h)
                }
            }, e
        }(n), s = function(e) {
            function n() {
                e.apply(this, arguments), this.treePanel = new i, this.propsPanel = new o, this.profilePanel = new r, this.changeLayout = function(t) {
                    var e = $(".left").width(), n = $(window).width();
                    e += t, e = Math.max(e, 300);
                    var i = n - $(".handle-v").outerWidth() - e;
                    $(".left").width(e), $(".right").width(i), $("#props .header").width(i);
                    var o = $("#profile").height(), r = $(window).innerHeight(), s = $("#control").outerHeight();
                    $(".nodes").outerHeight(r - o - s)
                }
            }
            return __extends(n, e), n.prototype.init = function() {
                var e = this, n = new t.PanelHandle($(".handle-v"));
                n.monitorY = !1, n.on("move", this.changeLayout), this.changeLayout(0), this._getTargetKey(function(n) {
                    var i = new t.ChromePort;
                    i.post({name: "init",from: "view",targetKey: n}), i.on("ready", function() {
                        return e.sendOptions()
                    }), i.on("updateTree", function(n) {
                        var i = n.data;
                        if (e.treePanel.data) {
                            var o = t.TreeNode.getByHash(i.rawHash);
                            t.TreeNode.clone(i, !0, o), e.treePanel.data = e.treePanel.data
                        } else
                            e.treePanel.data = t.TreeNode.clone(i)
                    }), i.on("updateSelection", function(t) {
                        return e.showGameSelection(t.data.hash, t.data.props, t.data.treeChange)
                    }), i.on("fps", function(t) {
                        return e.profilePanel.fps = t.data
                    }), e.port = i, e.treePanel.mainPanel = e, e.propsPanel.mainPanel = e, e.profilePanel.mainPanel = e, e.treePanel.port = i, e.propsPanel.port = i, e.profilePanel.port = i, e.treePanel.init(), e.propsPanel.init(), e.profilePanel.init(), e.sendOptions()
                })
            }, n.prototype._getTargetKey = function(e) {
                if (chrome && chrome.devtools && chrome.devtools.inspectedWindow)
                    chrome.devtools.inspectedWindow.eval('window["devtoolTabKey"]', function(t) {
                        return e(t)
                    });
                else {
                    var n = t.parseParam(location.search), i = n.key;
                    e(i)
                }
            }, n.prototype.sendOptions = function() {
                this.port.post({name: "initOptions",highlightClick: this.treePanel._highlightClick,highlightHover: this.treePanel._highlightHover,preventTouch: this.treePanel._preventTouch,showMethods: this.propsPanel._showMethods,showPrivate: this.propsPanel._showPrivate})
            }, n.prototype.showGameSelection = function(t, e, n) {
                this.treePanel.showGameSelection(t, n), this.propsPanel.showGameSelection(t, e)
            }, n
        }(t.EventBase);
        $(function() {
            var t = new s;
            t.init(), window.mainPanel = t
        })
    }(e = t.devtool || (t.devtool = {}))
}(egret || (egret = {}));
