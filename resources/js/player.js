!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("SLDP", [], t) : "object" == typeof exports ? exports.SLDP = t() : e.SLDP = t()
}(this, (function () {
    return function (e) {
        function t(t) {
            for (var i, r, a = t[0], s = t[1], o = 0, c = []; o < a.length; o++) r = a[o], Object.prototype.hasOwnProperty.call(n, r) && n[r] && c.push(n[r][0]), n[r] = 0;
            for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
            for (u && u(t); c.length;) c.shift()()
        }

        var i = {}, n = {2: 0};

        function r(t) {
            if (i[t]) return i[t].exports;
            var n = i[t] = {i: t, l: !1, exports: {}};
            return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }

        r.e = function (e) {
            var t = [], i = n[e];
            if (0 !== i) if (i) t.push(i[2]); else {
                var a = new Promise((function (t, r) {
                    i = n[e] = [t, r]
                }));
                t.push(i[2] = a);
                var s, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, r.nc && o.setAttribute("nonce", r.nc), o.src = function (e) {
                    return r.p + "sldp-" + ({0: "cea608-captions", 1: "opus-decoder"}[e] || e) + ".package.min.js"
                }(e);
                var u = new Error;
                s = function (t) {
                    o.onerror = o.onload = null, clearTimeout(c);
                    var i = n[e];
                    if (0 !== i) {
                        if (i) {
                            var r = t && ("load" === t.type ? "missing" : t.type), a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", u.name = "ChunkLoadError", u.type = r, u.request = a, i[1](u)
                        }
                        n[e] = void 0
                    }
                };
                var c = setTimeout((function () {
                    s({type: "timeout", target: o})
                }), 12e4);
                o.onerror = o.onload = s, document.head.appendChild(o)
            }
            return Promise.all(t)
        }, r.m = e, r.c = i, r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: i})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
                return e[t]
            }.bind(null, n));
            return i
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r.oe = function (e) {
            throw console.error(e), e
        };
        var a = this.webpackJsonpSLDP = this.webpackJsonpSLDP || [], s = a.push.bind(a);
        a.push = t, a = a.slice();
        for (var o = 0; o < a.length; o++) t(a[o]);
        var u = s;
        return r(r.s = 241)
    }([function (e, t, i) {
        var n = i(2), r = i(10), a = i(14).f;
        n({target: "Object", stat: !0, forced: Object.defineProperty !== a, sham: !r}, {defineProperty: a})
    }, function (e, t, i) {
        var n = i(65), r = i(171);
        e.exports = function (e) {
            if ("Function" === n(e)) return r(e)
        }
    }, function (e, t, i) {
        var n = i(4), r = i(73).f, a = i(35), s = i(19), o = i(140), u = i(177), c = i(143);
        e.exports = function (e, t) {
            var i, l, h, f, d, p = e.target, v = e.global, m = e.stat;
            if (i = v ? n : m ? n[p] || o(p, {}) : (n[p] || {}).prototype) for (l in t) {
                if (f = t[l], h = e.dontCallGetSet ? (d = r(i, l)) && d.value : i[l], !c(v ? l : p + (m ? "." : "#") + l, e.forced) && void 0 !== h) {
                    if (typeof f == typeof h) continue;
                    u(f, h)
                }
                (e.sham || h && h.sham) && a(f, "sham", !0), s(i, l, f, e)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t, i) {
        (function (t) {
            var i = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function () {
                return this
            }() || Function("return this")()
        }).call(this, i(238))
    }, function (e, t, i) {
        var n = i(4), r = i(85), a = i(11), s = i(113), o = i(83), u = i(173), c = r("wks"), l = n.Symbol,
            h = l && l.for, f = u ? l : l && l.withoutSetter || s;
        e.exports = function (e) {
            if (!a(c, e) || !o && "string" != typeof c[e]) {
                var t = "Symbol." + e;
                o && a(l, e) ? c[e] = l[e] : c[e] = u && h ? h(t) : f(t)
            }
            return c[e]
        }
    }, function (e, t, i) {
        var n = i(172), r = n.all;
        e.exports = n.IS_HTMLDDA ? function (e) {
            return "function" == typeof e || e === r
        } : function (e) {
            return "function" == typeof e
        }
    }, function (e, t, i) {
        "use strict";
        var n, r, a, s = i(161), o = i(10), u = i(4), c = i(6), l = i(12), h = i(11), f = i(37), d = i(75), p = i(35),
            v = i(19), m = i(14).f, g = i(34), y = i(103), _ = i(76), b = i(5), A = i(113), w = i(26), S = w.enforce,
            k = w.get, C = u.Int8Array, T = C && C.prototype, x = u.Uint8ClampedArray, P = x && x.prototype,
            E = C && y(C), B = T && y(T), M = Object.prototype, R = u.TypeError, I = b("toStringTag"),
            F = A("TYPED_ARRAY_TAG"), L = s && !!_ && "Opera" !== f(u.opera), O = !1, D = {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8
            }, j = {BigInt64Array: 8, BigUint64Array: 8}, U = function (e) {
                var t = y(e);
                if (l(t)) {
                    var i = k(t);
                    return i && h(i, "TypedArrayConstructor") ? i.TypedArrayConstructor : U(t)
                }
            }, V = function (e) {
                if (!l(e)) return !1;
                var t = f(e);
                return h(D, t) || h(j, t)
            };
        for (n in D) (a = (r = u[n]) && r.prototype) ? S(a).TypedArrayConstructor = r : L = !1;
        for (n in j) (a = (r = u[n]) && r.prototype) && (S(a).TypedArrayConstructor = r);
        if ((!L || !c(E) || E === Function.prototype) && (E = function () {
            throw R("Incorrect invocation")
        }, L)) for (n in D) u[n] && _(u[n], E);
        if ((!L || !B || B === M) && (B = E.prototype, L)) for (n in D) u[n] && _(u[n].prototype, B);
        if (L && y(P) !== B && _(P, B), o && !h(B, I)) for (n in O = !0, m(B, I, {
            get: function () {
                return l(this) ? this[F] : void 0
            }
        }), D) u[n] && p(u[n], F, n);
        e.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: L, TYPED_ARRAY_TAG: O && F, aTypedArray: function (e) {
                if (V(e)) return e;
                throw R("Target is not a typed array")
            }, aTypedArrayConstructor: function (e) {
                if (c(e) && (!_ || g(E, e))) return e;
                throw R(d(e) + " is not a typed array constructor")
            }, exportTypedArrayMethod: function (e, t, i, n) {
                if (o) {
                    if (i) for (var r in D) {
                        var a = u[r];
                        if (a && h(a.prototype, e)) try {
                            delete a.prototype[e]
                        } catch (i) {
                            try {
                                a.prototype[e] = t
                            } catch (e) {
                            }
                        }
                    }
                    B[e] && !i || v(B, e, i ? t : L && T[e] || t, n)
                }
            }, exportTypedArrayStaticMethod: function (e, t, i) {
                var n, r;
                if (o) {
                    if (_) {
                        if (i) for (n in D) if ((r = u[n]) && h(r, e)) try {
                            delete r[e]
                        } catch (e) {
                        }
                        if (E[e] && !i) return;
                        try {
                            return v(E, e, i ? t : L && E[e] || t)
                        } catch (e) {
                        }
                    }
                    for (n in D) !(r = u[n]) || r[e] && !i || v(r, e, t)
                }
            }, getTypedArrayConstructor: U, isView: function (e) {
                if (!l(e)) return !1;
                var t = f(e);
                return "DataView" === t || h(D, t) || h(j, t)
            }, isTypedArray: V, TypedArray: E, TypedArrayPrototype: B
        }
    }, function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(221), i(89), i(0);
        var r, a, s, o = (r = "warn", a = [], s = function () {
            function e(t, i) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.div = !1, this.id = t, this.prefix = i, this.lf = "log"
            }

            var t, i;
            return t = e, (i = [{
                key: "setDiv", value: function (e) {
                    "string" == typeof e && (this.div = document.getElementById(e))
                }
            }, {
                key: "setId", value: function (e) {
                    null == this.id ? this.id = e : console.error("Attempt to reset Logger id", this.id, e)
                }
            }, {
                key: "setPrefix", value: function (e) {
                    this.prefix = e
                }
            }, {
                key: "error", value: function () {
                    this.lf = "error", this._log.apply(this, arguments)
                }
            }, {
                key: "warn", value: function () {
                    "warn" != r && "debug" != r || (this.lf = "warn", this._log.apply(this, arguments))
                }
            }, {
                key: "debug", value: function () {
                    "debug" == r && (this.lf = "log", this._log.apply(this, arguments))
                }
            }, {
                key: "_log", value: function () {
                    var e = Date.now(), t = e % 1e3;
                    t < 10 ? t = "00" + t : t < 100 && (t = "0" + t);
                    var i = (e = e / 1e3 >>> 0) % 86400, n = i / 3600 >>> 0;
                    n < 10 && (n = "0" + n);
                    var r = (i -= 3600 * n) / 60 >>> 0;
                    r < 10 && (r = "0" + r), (i -= 60 * r) < 10 && (i = "0" + i), arguments[0] = "[" + n + ":" + r + ":" + i + "." + t + "][" + this.id + "][" + this.prefix + "]: " + arguments[0], console[this.lf].apply(console, arguments);
                    var s = this.div ? this.div : a[this.id];
                    if (s) {
                        for (var o = "", u = 0; u < arguments.length; u++) o.length > 0 && (o += " "), o += arguments[u];
                        var c = document.createElement("div");
                        s.appendChild(c), c.appendChild(document.createTextNode(o)), 3e4 < s.children.length && s.removeChild(s.children[0]), s.scrollTop = s.scrollHeight
                    }
                }
            }]) && n(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), {
            create: function (e, t) {
                return new s(e, t)
            }, setLevel: function (e) {
                r = e
            }, setDiv: function (e, t) {
                "string" == typeof t && (a[e] = document.getElementById(t))
            }
        });
        t.default = o
    }, function (e, t, i) {
        var n = i(90), r = Function.prototype.call;
        e.exports = n ? r.bind(r) : function () {
            return r.apply(r, arguments)
        }
    }, function (e, t, i) {
        var n = i(3);
        e.exports = !n((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }))
    }, function (e, t, i) {
        var n = i(1), r = i(18), a = n({}.hasOwnProperty);
        e.exports = Object.hasOwn || function (e, t) {
            return a(r(e), t)
        }
    }, function (e, t, i) {
        var n = i(6), r = i(172), a = r.all;
        e.exports = r.IS_HTMLDDA ? function (e) {
            return "object" == typeof e ? null !== e : n(e) || e === a
        } : function (e) {
            return "object" == typeof e ? null !== e : n(e)
        }
    }, function (e, t, i) {
        var n = i(12), r = String, a = TypeError;
        e.exports = function (e) {
            if (n(e)) return e;
            throw a(r(e) + " is not an object")
        }
    }, function (e, t, i) {
        var n = i(10), r = i(174), a = i(175), s = i(13), o = i(92), u = TypeError, c = Object.defineProperty,
            l = Object.getOwnPropertyDescriptor;
        t.f = n ? a ? function (e, t, i) {
            if (s(e), t = o(t), s(i), "function" == typeof e && "prototype" === t && "value" in i && "writable" in i && !i.writable) {
                var n = l(e, t);
                n && n.writable && (e[t] = i.value, i = {
                    configurable: "configurable" in i ? i.configurable : n.configurable,
                    enumerable: "enumerable" in i ? i.enumerable : n.enumerable,
                    writable: !1
                })
            }
            return c(e, t, i)
        } : c : function (e, t, i) {
            if (s(e), t = o(t), s(i), r) try {
                return c(e, t, i)
            } catch (e) {
            }
            if ("get" in i || "set" in i) throw u("Accessors not supported");
            return "value" in i && (e[t] = i.value), e
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(29), r = i(198), a = i(100), s = i(26), o = i(14).f, u = i(191), c = i(195), l = i(25), h = i(10),
            f = s.set, d = s.getterFor("Array Iterator");
        e.exports = u(Array, "Array", (function (e, t) {
            f(this, {type: "Array Iterator", target: n(e), index: 0, kind: t})
        }), (function () {
            var e = d(this), t = e.target, i = e.kind, n = e.index++;
            return !t || n >= t.length ? (e.target = void 0, c(void 0, !0)) : c("keys" == i ? n : "values" == i ? t[n] : [n, t[n]], !1)
        }), "values");
        var p = a.Arguments = a.Array;
        if (r("keys"), r("values"), r("entries"), !l && h && "values" !== p.name) try {
            o(p, "name", {value: "values"})
        } catch (e) {
        }
    }, function (e, t, i) {
        var n = i(147), r = i(19), a = i(271);
        n || r(Object.prototype, "toString", a, {unsafe: !0})
    }, function (e, t, i) {
        var n = i(37), r = String;
        e.exports = function (e) {
            if ("Symbol" === n(e)) throw TypeError("Cannot convert a Symbol value to a string");
            return r(e)
        }
    }, function (e, t, i) {
        var n = i(66), r = Object;
        e.exports = function (e) {
            return r(n(e))
        }
    }, function (e, t, i) {
        var n = i(6), r = i(14), a = i(176), s = i(140);
        e.exports = function (e, t, i, o) {
            o || (o = {});
            var u = o.enumerable, c = void 0 !== o.name ? o.name : t;
            if (n(i) && a(i, c, o), o.global) u ? e[t] = i : s(t, i); else {
                try {
                    o.unsafe ? e[t] && (u = !0) : delete e[t]
                } catch (e) {
                }
                u ? e[t] = i : r.f(e, t, {
                    value: i,
                    enumerable: !1,
                    configurable: !o.nonConfigurable,
                    writable: !o.nonWritable
                })
            }
            return e
        }
    }, function (e, t, i) {
        var n = i(36);
        e.exports = function (e) {
            return n(e.length)
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(3), a = i(88), s = i(12), o = i(18), u = i(20), c = i(210), l = i(102), h = i(151),
            f = i(125), d = i(5), p = i(84), v = d("isConcatSpreadable"), m = p >= 51 || !r((function () {
                var e = [];
                return e[v] = !1, e.concat()[0] !== e
            })), g = f("concat"), y = function (e) {
                if (!s(e)) return !1;
                var t = e[v];
                return void 0 !== t ? !!t : a(e)
            };
        n({target: "Array", proto: !0, arity: 1, forced: !m || !g}, {
            concat: function (e) {
                var t, i, n, r, a, s = o(this), f = h(s, 0), d = 0;
                for (t = -1, n = arguments.length; t < n; t++) if (y(a = -1 === t ? s : arguments[t])) for (r = u(a), c(d + r), i = 0; i < r; i++, d++) i in a && l(f, d, a[i]); else c(d + 1), l(f, d++, a);
                return f.length = d, f
            }
        })
    }, function (e, t, i) {
        var n = i(4), r = i(6);
        e.exports = function (e, t) {
            return arguments.length < 2 ? (i = n[e], r(i) ? i : void 0) : n[e] && n[e][t];
            var i
        }
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.instanceHolder = function (e) {
            var t;
            return {
                getInstance: function () {
                    return t || ((t = new e).constructor = null), t
                }
            }
        }, t.multiInstanceHolder = function (e) {
            var t = {};
            return {
                getInstance: function (i) {
                    return t[i] || (t[i] = new e(i), t[i].constructor = null), t[i]
                }
            }
        }
    }, function (e, t, i) {
        var n = i(6), r = i(75), a = TypeError;
        e.exports = function (e) {
            if (n(e)) return e;
            throw a(r(e) + " is not a function")
        }
    }, function (e, t) {
        e.exports = !1
    }, function (e, t, i) {
        var n, r, a, s = i(243), o = i(4), u = i(12), c = i(35), l = i(11), h = i(139), f = i(115), d = i(116),
            p = o.TypeError, v = o.WeakMap;
        if (s || h.state) {
            var m = h.state || (h.state = new v);
            m.get = m.get, m.has = m.has, m.set = m.set, n = function (e, t) {
                if (m.has(e)) throw p("Object already initialized");
                return t.facade = e, m.set(e, t), t
            }, r = function (e) {
                return m.get(e) || {}
            }, a = function (e) {
                return m.has(e)
            }
        } else {
            var g = f("state");
            d[g] = !0, n = function (e, t) {
                if (l(e, g)) throw p("Object already initialized");
                return t.facade = e, c(e, g, t), t
            }, r = function (e) {
                return l(e, g) ? e[g] : {}
            }, a = function (e) {
                return l(e, g)
            }
        }
        e.exports = {
            set: n, get: r, has: a, enforce: function (e) {
                return a(e) ? r(e) : n(e, {})
            }, getterFor: function (e) {
                return function (t) {
                    var i;
                    if (!u(t) || (i = r(t)).type !== e) throw p("Incompatible receiver, " + e + " required");
                    return i
                }
            }
        }
    }, function (e, t, i) {
        var n = i(245);
        e.exports = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : n(t)
        }
    }, function (e, t, i) {
        var n = i(70), r = i(1), a = i(91), s = i(18), o = i(20), u = i(151), c = r([].push), l = function (e) {
            var t = 1 == e, i = 2 == e, r = 3 == e, l = 4 == e, h = 6 == e, f = 7 == e, d = 5 == e || h;
            return function (p, v, m, g) {
                for (var y, _, b = s(p), A = a(b), w = n(v, m), S = o(A), k = 0, C = g || u, T = t ? C(p, S) : i || f ? C(p, 0) : void 0; S > k; k++) if ((d || k in A) && (_ = w(y = A[k], k, b), e)) if (t) T[k] = _; else if (_) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return k;
                    case 2:
                        c(T, y)
                } else switch (e) {
                    case 4:
                        return !1;
                    case 7:
                        c(T, y)
                }
                return h ? -1 : r || l ? l : T
            }
        };
        e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6),
            filterReject: l(7)
        }
    }, function (e, t, i) {
        var n = i(91), r = i(66);
        e.exports = function (e) {
            return n(r(e))
        }
    }, function (e, t, i) {
        var n = i(14).f, r = i(11), a = i(5)("toStringTag");
        e.exports = function (e, t, i) {
            e && !i && (e = e.prototype), e && !r(e, a) && n(e, a, {configurable: !0, value: t})
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(152).charAt, r = i(17), a = i(26), s = i(191), o = i(195), u = a.set,
            c = a.getterFor("String Iterator");
        s(String, "String", (function (e) {
            u(this, {type: "String Iterator", string: r(e), index: 0})
        }), (function () {
            var e, t = c(this), i = t.string, r = t.index;
            return r >= i.length ? o(void 0, !0) : (e = n(i, r), t.index += e.length, o(e, !1))
        }))
    }, function (e, t, i) {
        var n = i(4), r = i(196), a = i(197), s = i(15), o = i(35), u = i(5), c = u("iterator"), l = u("toStringTag"),
            h = s.values, f = function (e, t) {
                if (e) {
                    if (e[c] !== h) try {
                        o(e, c, h)
                    } catch (t) {
                        e[c] = h
                    }
                    if (e[l] || o(e, l, t), r[t]) for (var i in s) if (e[i] !== s[i]) try {
                        o(e, i, s[i])
                    } catch (t) {
                        e[i] = s[i]
                    }
                }
            };
        for (var d in r) f(n[d] && n[d].prototype, d);
        f(a, "DOMTokenList")
    }, function (e, t, i) {
        var n = i(10), r = i(86).EXISTS, a = i(1), s = i(14).f, o = Function.prototype, u = a(o.toString),
            c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = a(c.exec);
        n && !r && s(o, "name", {
            configurable: !0, get: function () {
                try {
                    return l(c, u(this))[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }, function (e, t, i) {
        var n = i(1);
        e.exports = n({}.isPrototypeOf)
    }, function (e, t, i) {
        var n = i(10), r = i(14), a = i(74);
        e.exports = n ? function (e, t, i) {
            return r.f(e, t, a(1, i))
        } : function (e, t, i) {
            return e[t] = i, e
        }
    }, function (e, t, i) {
        var n = i(27), r = Math.min;
        e.exports = function (e) {
            return e > 0 ? r(n(e), 9007199254740991) : 0
        }
    }, function (e, t, i) {
        var n = i(147), r = i(6), a = i(65), s = i(5)("toStringTag"), o = Object, u = "Arguments" == a(function () {
            return arguments
        }());
        e.exports = n ? a : function (e) {
            var t, i, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (i = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = o(e), s)) ? i : u ? a(t) : "Object" == (n = a(t)) && r(t.callee) ? "Arguments" : n
        }
    }, function (e, t, i) {
        var n, r = i(13), a = i(188), s = i(142), o = i(116), u = i(181), c = i(114), l = i(115)("IE_PROTO"),
            h = function () {
            }, f = function (e) {
                return "<script>" + e + "<\/script>"
            }, d = function (e) {
                e.write(f("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }, p = function () {
                try {
                    n = new ActiveXObject("htmlfile")
                } catch (e) {
                }
                var e, t;
                p = "undefined" != typeof document ? document.domain && n ? d(n) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F) : d(n);
                for (var i = s.length; i--;) delete p.prototype[s[i]];
                return p()
            };
        o[l] = !0, e.exports = Object.create || function (e, t) {
            var i;
            return null !== e ? (h.prototype = r(e), i = new h, h.prototype = null, i[l] = e) : i = p(), void 0 === t ? i : a.f(i, t)
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(3), s = i(126), o = i(13), u = i(68), c = i(36), l = i(145), h = s.ArrayBuffer,
            f = s.DataView, d = f.prototype, p = r(h.prototype.slice), v = r(d.getUint8), m = r(d.setUint8);
        n({
            target: "ArrayBuffer", proto: !0, unsafe: !0, forced: a((function () {
                return !new h(2).slice(1, void 0).byteLength
            }))
        }, {
            slice: function (e, t) {
                if (p && void 0 === t) return p(o(this), e);
                for (var i = o(this).byteLength, n = u(e, i), r = u(void 0 === t ? i : t, i), a = new (l(this, h))(c(r - n)), s = new f(this), d = new f(a), g = 0; n < r;) m(d, g++, v(s, n++));
                return a
            }
        })
    }, function (e, t, i) {
        i(272)("Uint8", (function (e) {
            return function (t, i, n) {
                return e(this, t, i, n)
            }
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(1), r = i(7), a = n(i(278)), s = r.aTypedArray;
        (0, r.exportTypedArrayMethod)("copyWithin", (function (e, t) {
            return a(s(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).every, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("every", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(202), a = i(204), s = i(37), o = i(9), u = i(1), c = i(3), l = n.aTypedArray,
            h = n.exportTypedArrayMethod, f = u("".slice);
        h("fill", (function (e) {
            var t = arguments.length;
            l(this);
            var i = "Big" === f(s(this), 0, 3) ? a(e) : +e;
            return o(r, this, i, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0)
        }), c((function () {
            var e = 0;
            return new Int8Array(2).fill({
                valueOf: function () {
                    return e++
                }
            }), 1 !== e
        })))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).filter, a = i(279), s = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("filter", (function (e) {
            var t = r(s(this), e, arguments.length > 1 ? arguments[1] : void 0);
            return a(this, t)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).find, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("find", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).findIndex, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("findIndex", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).forEach, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("forEach", (function (e) {
            r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(94).includes, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("includes", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(94).indexOf, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("indexOf", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(4), r = i(3), a = i(1), s = i(7), o = i(15), u = i(5)("iterator"), c = n.Uint8Array, l = a(o.values),
            h = a(o.keys), f = a(o.entries), d = s.aTypedArray, p = s.exportTypedArrayMethod, v = c && c.prototype,
            m = !r((function () {
                v[u].call([1])
            })), g = !!v && v.values && v[u] === v.values && "values" === v.values.name, y = function () {
                return l(d(this))
            };
        p("entries", (function () {
            return f(d(this))
        }), m), p("keys", (function () {
            return h(d(this))
        }), m), p("values", y, m || !g, {name: "values"}), p(u, y, m || !g, {name: "values"})
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(1), a = n.aTypedArray, s = n.exportTypedArrayMethod, o = r([].join);
        s("join", (function (e) {
            return o(a(this), e)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(69), a = i(179), s = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("lastIndexOf", (function (e) {
            var t = arguments.length;
            return r(a, s(this), t > 1 ? [e, arguments[1]] : [e])
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).map, a = i(127), s = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("map", (function (e) {
            return r(s(this), e, arguments.length > 1 ? arguments[1] : void 0, (function (e, t) {
                return new (a(e))(t)
            }))
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(206).left, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("reduce", (function (e) {
            var t = arguments.length;
            return r(a(this), e, t, t > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(206).right, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("reduceRight", (function (e) {
            var t = arguments.length;
            return r(a(this), e, t, t > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = n.aTypedArray, a = n.exportTypedArrayMethod, s = Math.floor;
        a("reverse", (function () {
            for (var e, t = r(this).length, i = s(t / 2), n = 0; n < i;) e = this[n], this[n++] = this[--t], this[t] = e;
            return this
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(4), r = i(9), a = i(7), s = i(20), o = i(203), u = i(18), c = i(3), l = n.RangeError, h = n.Int8Array,
            f = h && h.prototype, d = f && f.set, p = a.aTypedArray, v = a.exportTypedArrayMethod, m = !c((function () {
                var e = new Uint8ClampedArray(2);
                return r(d, e, {length: 1, 0: 3}, 1), 3 !== e[1]
            })), g = m && a.NATIVE_ARRAY_BUFFER_VIEWS && c((function () {
                var e = new h(2);
                return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
            }));
        v("set", (function (e) {
            p(this);
            var t = o(arguments.length > 1 ? arguments[1] : void 0, 1), i = u(e);
            if (m) return r(d, this, i, t);
            var n = this.length, a = s(i), c = 0;
            if (a + t > n) throw l("Wrong length");
            for (; c < a;) this[t + c] = i[c++]
        }), !m || g)
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(127), a = i(3), s = i(77), o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("slice", (function (e, t) {
            for (var i = s(o(this), e, t), n = r(this), a = 0, u = i.length, c = new n(u); u > a;) c[a] = i[a++];
            return c
        }), a((function () {
            new Int8Array(1).slice()
        })))
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(28).some, a = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("some", (function (e) {
            return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0)
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(4), r = i(1), a = i(3), s = i(24), o = i(163), u = i(7), c = i(207), l = i(208), h = i(84),
            f = i(209), d = u.aTypedArray, p = u.exportTypedArrayMethod, v = n.Uint16Array,
            m = v && r(v.prototype.sort), g = !(!m || a((function () {
                m(new v(2), null)
            })) && a((function () {
                m(new v(2), {})
            }))), y = !!m && !a((function () {
                if (h) return h < 74;
                if (c) return c < 67;
                if (l) return !0;
                if (f) return f < 602;
                var e, t, i = new v(516), n = Array(516);
                for (e = 0; e < 516; e++) t = e % 4, i[e] = 515 - e, n[e] = e - 2 * t + 3;
                for (m(i, (function (e, t) {
                    return (e / 4 | 0) - (t / 4 | 0)
                })), e = 0; e < 516; e++) if (i[e] !== n[e]) return !0
            }));
        p("sort", (function (e) {
            return void 0 !== e && s(e), y ? m(this, e) : o(d(this), function (e) {
                return function (t, i) {
                    return void 0 !== e ? +e(t, i) || 0 : i != i ? -1 : t != t ? 1 : 0 === t && 0 === i ? 1 / t > 0 && 1 / i < 0 ? 1 : -1 : t > i
                }
            }(e))
        }), !y || g)
    }, function (e, t, i) {
        "use strict";
        var n = i(7), r = i(36), a = i(68), s = i(127), o = n.aTypedArray;
        (0, n.exportTypedArrayMethod)("subarray", (function (e, t) {
            var i = o(this), n = i.length, u = a(e, n);
            return new (s(i))(i.buffer, i.byteOffset + u * i.BYTES_PER_ELEMENT, r((void 0 === t ? n : a(t, n)) - u))
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(4), r = i(69), a = i(7), s = i(3), o = i(77), u = n.Int8Array, c = a.aTypedArray,
            l = a.exportTypedArrayMethod, h = [].toLocaleString, f = !!u && s((function () {
                h.call(new u(1))
            }));
        l("toLocaleString", (function () {
            return r(h, f ? o(c(this)) : c(this), o(arguments))
        }), s((function () {
            return [1, 2].toLocaleString() != new u([1, 2]).toLocaleString()
        })) || !s((function () {
            u.prototype.toLocaleString.call([1, 2])
        })))
    }, function (e, t, i) {
        "use strict";
        var n = i(7).exportTypedArrayMethod, r = i(3), a = i(4), s = i(1), o = a.Uint8Array, u = o && o.prototype || {},
            c = [].toString, l = s([].join);
        r((function () {
            c.call({})
        })) && (c = function () {
            return l(this)
        });
        var h = u.toString != c;
        n("toString", c, h)
    }, function (e, t, i) {
        i(289), i(290)
    }, function (e, t, i) {
        var n = i(171), r = n({}.toString), a = n("".slice);
        e.exports = function (e) {
            return a(r(e), 8, -1)
        }
    }, function (e, t, i) {
        var n = i(81), r = TypeError;
        e.exports = function (e) {
            if (n(e)) throw r("Can't call method on " + e);
            return e
        }
    }, function (e, t, i) {
        var n = i(22);
        e.exports = n("navigator", "userAgent") || ""
    }, function (e, t, i) {
        var n = i(27), r = Math.max, a = Math.min;
        e.exports = function (e, t) {
            var i = n(e);
            return i < 0 ? r(i + t, 0) : a(i, t)
        }
    }, function (e, t, i) {
        var n = i(90), r = Function.prototype, a = r.apply, s = r.call;
        e.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(a) : function () {
            return s.apply(a, arguments)
        })
    }, function (e, t, i) {
        var n = i(1), r = i(24), a = i(90), s = n(n.bind);
        e.exports = function (e, t) {
            return r(e), void 0 === t ? e : a ? s(e, t) : function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, i) {
        var n = i(2), r = i(216);
        n({target: "Function", proto: !0, forced: Function.bind !== r}, {bind: r})
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(91), s = i(29), o = i(95), u = r([].join), c = a != Object, l = o("join", ",");
        n({target: "Array", proto: !0, forced: c || !l}, {
            join: function (e) {
                return u(s(this), void 0 === e ? "," : e)
            }
        })
    }, function (e, t, i) {
        var n = i(10), r = i(9), a = i(137), s = i(74), o = i(29), u = i(92), c = i(11), l = i(174),
            h = Object.getOwnPropertyDescriptor;
        t.f = n ? h : function (e, t) {
            if (e = o(e), t = u(t), l) try {
                return h(e, t)
            } catch (e) {
            }
            if (c(e, t)) return s(!r(a.f, e, t), e[t])
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, function (e, t) {
        var i = String;
        e.exports = function (e) {
            try {
                return i(e)
            } catch (e) {
                return "Object"
            }
        }
    }, function (e, t, i) {
        var n = i(1), r = i(13), a = i(248);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1, i = {};
            try {
                (e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(i, []), t = i instanceof Array
            } catch (e) {
            }
            return function (i, n) {
                return r(i), a(n), t ? e(i, n) : i.__proto__ = n, i
            }
        }() : void 0)
    }, function (e, t, i) {
        var n = i(1);
        e.exports = n([].slice)
    }, function (e, t, i) {
        i(261), i(266), i(267), i(268), i(269)
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(10), a = i(4), s = i(1), o = i(11), u = i(6), c = i(34), l = i(17), h = i(14).f, f = i(177),
            d = a.Symbol, p = d && d.prototype;
        if (r && u(d) && (!("description" in p) || void 0 !== d().description)) {
            var v = {}, m = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                    t = c(p, this) ? new d(e) : void 0 === e ? d() : d(e);
                return "" === e && (v[t] = !0), t
            };
            f(m, d), m.prototype = p, p.constructor = m;
            var g = "Symbol(test)" == String(d("test")), y = s(p.valueOf), _ = s(p.toString),
                b = /^Symbol\((.*)\)[^)]+$/, A = s("".replace), w = s("".slice);
            h(p, "description", {
                configurable: !0, get: function () {
                    var e = y(this);
                    if (o(v, e)) return "";
                    var t = _(e), i = g ? w(t, 7, -1) : A(t, b, "$1");
                    return "" === i ? void 0 : i
                }
            }), n({global: !0, constructor: !0, forced: !0}, {Symbol: m})
        }
    }, function (e, t, i) {
        i(124)("iterator")
    }, function (e, t) {
        e.exports = function (e) {
            return null == e
        }
    }, function (e, t, i) {
        var n = i(22), r = i(6), a = i(34), s = i(173), o = Object;
        e.exports = s ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            var t = n("Symbol");
            return r(t) && a(t.prototype, o(e))
        }
    }, function (e, t, i) {
        var n = i(84), r = i(3);
        e.exports = !!Object.getOwnPropertySymbols && !r((function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
        }))
    }, function (e, t, i) {
        var n, r, a = i(4), s = i(67), o = a.process, u = a.Deno, c = o && o.versions || u && u.version, l = c && c.v8;
        l && (r = (n = l.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !r && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (r = +n[1]), e.exports = r
    }, function (e, t, i) {
        var n = i(25), r = i(139);
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.26.0",
            mode: n ? "pure" : "global",
            copyright: "В© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }, function (e, t, i) {
        var n = i(10), r = i(11), a = Function.prototype, s = n && Object.getOwnPropertyDescriptor, o = r(a, "name"),
            u = o && "something" === function () {
            }.name, c = o && (!n || n && s(a, "name").configurable);
        e.exports = {EXISTS: o, PROPER: u, CONFIGURABLE: c}
    }, function (e, t, i) {
        var n = i(178), r = i(142).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return n(e, r)
        }
    }, function (e, t, i) {
        var n = i(65);
        e.exports = Array.isArray || function (e) {
            return "Array" == n(e)
        }
    }, function (e, t, i) {
        var n = i(1), r = i(19), a = Date.prototype, s = n(a.toString), o = n(a.getTime);
        "Invalid Date" != String(new Date(NaN)) && r(a, "toString", (function () {
            var e = o(this);
            return e == e ? s(this) : "Invalid Date"
        }))
    }, function (e, t, i) {
        var n = i(3);
        e.exports = !n((function () {
            var e = function () {
            }.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }))
    }, function (e, t, i) {
        var n = i(1), r = i(3), a = i(65), s = Object, o = n("".split);
        e.exports = r((function () {
            return !s("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == a(e) ? o(e, "") : s(e)
        } : s
    }, function (e, t, i) {
        var n = i(138), r = i(82);
        e.exports = function (e) {
            var t = n(e, "string");
            return r(t) ? t : t + ""
        }
    }, function (e, t, i) {
        var n = i(24), r = i(81);
        e.exports = function (e, t) {
            var i = e[t];
            return r(i) ? void 0 : n(i)
        }
    }, function (e, t, i) {
        var n = i(29), r = i(68), a = i(20), s = function (e) {
            return function (t, i, s) {
                var o, u = n(t), c = a(u), l = r(s, c);
                if (e && i != i) {
                    for (; c > l;) if ((o = u[l++]) != o) return !0
                } else for (; c > l; l++) if ((e || l in u) && u[l] === i) return e || l || 0;
                return !e && -1
            }
        };
        e.exports = {includes: s(!0), indexOf: s(!1)}
    }, function (e, t, i) {
        "use strict";
        var n = i(3);
        e.exports = function (e, t) {
            var i = [][e];
            return !!i && n((function () {
                i.call(null, t || function () {
                    return 1
                }, 1)
            }))
        }
    }, function (e, t, i) {
        var n = i(34), r = TypeError;
        e.exports = function (e, t) {
            if (n(t, e)) return e;
            throw r("Incorrect invocation")
        }
    }, function (e, t, i) {
        var n = i(4);
        e.exports = n.Promise
    }, function (e, t, i) {
        var n = i(4), r = i(97), a = i(6), s = i(143), o = i(141), u = i(5), c = i(254), l = i(183), h = i(25),
            f = i(84), d = r && r.prototype, p = u("species"), v = !1, m = a(n.PromiseRejectionEvent),
            g = s("Promise", (function () {
                var e = o(r), t = e !== String(r);
                if (!t && 66 === f) return !0;
                if (h && (!d.catch || !d.finally)) return !0;
                if (!f || f < 51 || !/native code/.test(e)) {
                    var i = new r((function (e) {
                        e(1)
                    })), n = function (e) {
                        e((function () {
                        }), (function () {
                        }))
                    };
                    if ((i.constructor = {})[p] = n, !(v = i.then((function () {
                    })) instanceof n)) return !0
                }
                return !t && (c || l) && !m
            }));
        e.exports = {CONSTRUCTOR: g, REJECTION_EVENT: m, SUBCLASSING: v}
    }, function (e, t, i) {
        "use strict";
        var n = i(24), r = TypeError;
        e.exports.f = function (e) {
            return new function (e) {
                var t, i;
                this.promise = new e((function (e, n) {
                    if (void 0 !== t || void 0 !== i) throw r("Bad Promise constructor");
                    t = e, i = n
                })), this.resolve = n(t), this.reject = n(i)
            }(e)
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, i) {
        var n = i(37), r = i(93), a = i(81), s = i(100), o = i(5)("iterator");
        e.exports = function (e) {
            if (!a(e)) return r(e, o) || r(e, "@@iterator") || s[n(e)]
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(92), r = i(14), a = i(74);
        e.exports = function (e, t, i) {
            var s = n(t);
            s in e ? r.f(e, s, a(0, i)) : e[s] = i
        }
    }, function (e, t, i) {
        var n = i(11), r = i(6), a = i(18), s = i(115), o = i(194), u = s("IE_PROTO"), c = Object, l = c.prototype;
        e.exports = o ? c.getPrototypeOf : function (e) {
            var t = a(e);
            if (n(t, u)) return t[u];
            var i = t.constructor;
            return r(i) && t instanceof i ? i.prototype : t instanceof c ? l : null
        }
    }, function (e, t, i) {
        i(2)({target: "Object", stat: !0, sham: !i(10)}, {create: i(38)})
    }, function (e, t, i) {
        var n = i(2), r = i(3), a = i(18), s = i(103), o = i(194);
        n({
            target: "Object", stat: !0, forced: r((function () {
                s(1)
            })), sham: !o
        }, {
            getPrototypeOf: function (e) {
                return s(a(e))
            }
        })
    }, function (e, t, i) {
        i(2)({target: "Object", stat: !0}, {setPrototypeOf: i(76)})
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(94).indexOf, s = i(95), o = r([].indexOf), u = !!o && 1 / o([1], 1, -0) < 0,
            c = s("indexOf");
        n({target: "Array", proto: !0, forced: u || !c}, {
            indexOf: function (e) {
                var t = arguments.length > 1 ? arguments[1] : void 0;
                return u ? o(this, e, t) || 0 : a(this, e, t)
            }
        })
    }, function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(89), i(16), i(135), i(107), i(131), i(0);
        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, i;
            return t = e, i = [{
                key: "truncateDecimals", value: function (e, t, i) {
                    void 0 === t && (t = 3), i < 0 && (e -= .001);
                    var n = e.toString(), r = n.indexOf("."), a = -1 === r ? n.length : r + t + 1, s = n.substr(0, a),
                        o = isNaN(s) ? 0 : s;
                    return parseFloat(o)
                }
            }, {
                key: "getElementCoordinates", value: function (e) {
                    if (!e) return {};
                    var t = e.getBoundingClientRect();
                    return {top: t.top + pageYOffset, left: t.left + pageXOffset, right: t.right + pageXOffset}
                }
            }, {
                key: "getElementSize", value: function (e) {
                    var t = e.getBoundingClientRect();
                    return [t.width, t.height]
                }
            }], null && n(t.prototype, null), i && n(t, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = r
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n = o(i(8)), r = o(i(166)), a = i(23), s = o(i(108));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var c = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._id = t, this._logger = n.default.create(t, "PlaybackService"), this._detector = r.default.getInstance()
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e) {
                    this._mediaElement = e, this._isPlaying = !1, this._isPaused = !1, this._mobilePlaybackActivated = !1
                }
            }, {
                key: "unset", value: function () {
                    this._mediaElement = void 0
                }
            }, {
                key: "resetPosition", value: function () {
                    this._mediaElement && 0 !== this._mediaElement.currentTime && (this._mediaElement.currentTime = 0), this._isPaused = !1, this._isPlaying = !1, this._pauseTime = void 0
                }
            }, {
                key: "getCurrentTime", value: function () {
                    return this._mediaElement ? this._mediaElement.currentTime : 0
                }
            }, {
                key: "getPauseTime", value: function () {
                    if (this._isPaused) return this._pauseTime
                }
            }, {
                key: "getPlaybackRate", value: function () {
                    return this._mediaElement ? this._mediaElement.playbackRate : 0
                }
            }, {
                key: "setPlaybackRate", value: function (e) {
                    if (this._mediaElement) if (this._logger.debug("setPlaybackRate", e, this._mediaElement.currentTime, this._mediaElement.readyState), this._mediaElement.readyState <= 2) {
                        var t = this;
                        this._rateBeforePlay = e, this._mediaElement.addEventListener("canplay", (function e() {
                            t._logger.debug("onCanPlay"), t._mediaElement && (t._mediaElement.removeEventListener("canplay", e), t._rateBeforePlay && (t.setPlaybackRate(t._rateBeforePlay), t._rateBeforePlay = void 0))
                        }))
                    } else this._mediaElement.playbackRate !== e && (this._mediaElement.playbackRate = e)
                }
            }, {
                key: "onPlayFailed", set: function (e) {
                    this._onPlayFailedCallback = e
                }
            }, {
                key: "handlePlay", value: function (e) {
                    var t;
                    if (this._mediaElement && !this._isPlaying && (this._isPlaying = !0, this._isPaused = !1, this.playMedia({gesture: e}), this._pauseTime)) {
                        var i = performance.now(), n = i - this._pauseTime + .1;
                        this._logger.debug("Play at: " + this._timeStr(i)), this._logger.debug("Going to seek by ".concat(n / 1e3, " seconds.")), t = s.default.truncateDecimals(this._mediaElement.currentTime + n / 1e3)
                    }
                    return t
                }
            }, {
                key: "handlePause", value: function () {
                    if (this._mediaElement && !this._isPaused && this._isPlaying) return this._isPaused = !0, this._isPlaying = !1, this._pauseTime = performance.now(), this._mediaElement.src && this._mediaElement.pause(), this._logger.debug("Paused at: " + this._timeStr(this._pauseTime)), !0
                }
            }, {
                key: "handleLeavePip", value: function () {
                    this._mediaElement && this._mediaElement.paused && !this._isPaused && this.playMedia({})
                }
            }, {
                key: "isPaused", value: function () {
                    return !!this._mediaElement && this._isPaused
                }
            }, {
                key: "playMedia", value: function (e) {
                    if (this._mediaElement.src) {
                        var t = this._mediaElement.play();
                        if (void 0 !== t) {
                            var i = !e.recover, n = this;
                            t.then((function () {
                                n._isPlaying = !0
                            })).catch((function (e) {
                                i && n._onPlayFailedCallback()
                            }))
                        } else this._detector.isMobile() && !this._mobilePlaybackActivated && (e.gesture ? this._mobilePlaybackActivated = !0 : e.recover || this._onPlayFailedCallback())
                    } else this._isPlaying = !0
                }
            }, {
                key: "checkSafariPaused", value: function () {
                    this._detector.isBrowser("Safari") && this._isPlaying && !this._isPaused && this._mediaElement.paused && (this._logger.warn("Force Safari to play from onProgress"), this.playMedia({}))
                }
            }, {
                key: "_timeStr", value: function (e) {
                    return performance.timing.navigationStart + e
                }
            }]) && u(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), l = (0, a.multiInstanceHolder)(c);
        t.default = l
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(136), i(0);
        var n = i(23);

        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var a = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._instId = t
            }

            var t, n;
            return t = e, (n = [{
                key: "setScriptPath", value: function (e) {
                    this._scriptPath = e
                }
            }, {
                key: "translateToScriptPath", value: function (e) {
                    return this._scriptPath ? this._scriptPath + this._extractFilenameFrom(e) : e
                }
            }, {
                key: "runWebpackImportUnderScriptPath", value: function (e) {
                    var t = i.p;
                    i.p = this._scriptPath, e(), i.p = t
                }
            }, {
                key: "notAvailableError", value: function (e, t) {
                    var i = this._extractFilenameFrom(t);
                    return "".concat(e, " file is not found. It should be placed in the same path as SLDP Player itself. ") + "Please download it from the following path: https://softvelum.com/player/releases/".concat(i)
                }
            }, {
                key: "_extractFilenameFrom", value: function (e) {
                    return e && e.length > 0 ? e.substr(e.lastIndexOf("/") + 1) : e
                }
            }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), s = (0, n.multiInstanceHolder)(a);
        t.default = s
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n}, a = i(23);

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var o = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._id = t, this._logger = r.default.create(t, "AudioContextProvider")
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function () {
                    var e = window.AudioContext || window.webkitAudioContext;
                    if (!e) return !1;
                    if (this._audioCtx) this._suspended && (this._logger.debug("Trying to resume suspended audio context"), this._audioCtx.resume()); else if (this._audioCtx = new e({sampleRate: 48e3}), "suspended" !== this._audioCtx.state) this._suspended = !1; else {
                        this._callbacks = [];
                        var t = this;
                        this._audioCtx.onstatechange = function () {
                            if (t._logger.debug("onstatechange", t._audioCtx.state, t._suspended), t._suspended && "running" === t._audioCtx.state) {
                                t._logger.debug("Audio context switched to running"), t._audioCtx.onstatechange = void 0, t._suspended = !1;
                                for (var e = 0; e < t._callbacks.length; e++) t._callbacks[e](t._audioCtx);
                                this._callbacks = void 0
                            }
                        }, this._logger.debug("Audio context is created, but it's suspended"), this._suspended = !0, this._audioCtx.resume()
                    }
                }
            }, {
                key: "onContextRunning", value: function (e) {
                    this._callbacks ? this._callbacks.push(e) : this._logger.error("onContextRunning callbacks are not defined")
                }
            }, {
                key: "isSuspended", value: function () {
                    return this._suspended
                }
            }, {
                key: "setChannelCount", value: function (e) {
                    this._audioCtx && (this._audioCtx.destination.channelCount = e)
                }
            }, {
                key: "get", value: function () {
                    return this._audioCtx
                }
            }]) && s(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), u = (0, a.multiInstanceHolder)(o);
        t.default = u
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(18), a = i(68), s = i(27), o = i(20), u = i(282), c = i(210), l = i(151), h = i(102),
            f = i(162), d = i(125)("splice"), p = Math.max, v = Math.min;
        n({target: "Array", proto: !0, forced: !d}, {
            splice: function (e, t) {
                var i, n, d, m, g, y, _ = r(this), b = o(_), A = a(e, b), w = arguments.length;
                for (0 === w ? i = n = 0 : 1 === w ? (i = 0, n = b - A) : (i = w - 2, n = v(p(s(t), 0), b - A)), c(b + i - n), d = l(_, n), m = 0; m < n; m++) (g = A + m) in _ && h(d, m, _[g]);
                if (d.length = n, i < n) {
                    for (m = A; m < b - n; m++) y = m + i, (g = m + n) in _ ? _[y] = _[g] : f(_, y);
                    for (m = b; m > b - n + i; m--) f(_, m - 1)
                } else if (i > n) for (m = b - n; m > A; m--) y = m + i - 1, (g = m + n - 1) in _ ? _[y] = _[g] : f(_, y);
                for (m = 0; m < i; m++) _[m + A] = arguments[m + 2];
                return u(_, b - n + i), d
            }
        })
    }, function (e, t, i) {
        var n = i(1), r = 0, a = Math.random(), s = n(1..toString);
        e.exports = function (e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++r + a, 36)
        }
    }, function (e, t, i) {
        var n = i(4), r = i(12), a = n.document, s = r(a) && r(a.createElement);
        e.exports = function (e) {
            return s ? a.createElement(e) : {}
        }
    }, function (e, t, i) {
        var n = i(85), r = i(113), a = n("keys");
        e.exports = function (e) {
            return a[e] || (a[e] = r(e))
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t, i) {
        i(247), i(255), i(256), i(257), i(258), i(259)
    }, function (e, t, i) {
        var n = i(65), r = i(4);
        e.exports = "process" == n(r.process)
    }, function (e, t, i) {
        var n = i(1), r = i(3), a = i(6), s = i(37), o = i(22), u = i(141), c = function () {
            }, l = [], h = o("Reflect", "construct"), f = /^\s*(?:class|function)\b/, d = n(f.exec), p = !f.exec(c),
            v = function (e) {
                if (!a(e)) return !1;
                try {
                    return h(c, l, e), !0
                } catch (e) {
                    return !1
                }
            }, m = function (e) {
                if (!a(e)) return !1;
                switch (s(e)) {
                    case"AsyncFunction":
                    case"GeneratorFunction":
                    case"AsyncGeneratorFunction":
                        return !1
                }
                try {
                    return p || !!d(f, u(e))
                } catch (e) {
                    return !0
                }
            };
        m.sham = !0, e.exports = !h || r((function () {
            var e;
            return v(v.call) || !v(Object) || !v((function () {
                e = !0
            })) || e
        })) ? m : v
    }, function (e, t) {
        var i = TypeError;
        e.exports = function (e, t) {
            if (e < t) throw i("Not enough arguments");
            return e
        }
    }, function (e, t, i) {
        var n = i(9), r = i(24), a = i(13), s = i(75), o = i(101), u = TypeError;
        e.exports = function (e, t) {
            var i = arguments.length < 2 ? o(e) : t;
            if (r(i)) return a(n(i, e));
            throw u(s(e) + " is not iterable")
        }
    }, function (e, t, i) {
        var n = i(68), r = i(20), a = i(102), s = Array, o = Math.max;
        e.exports = function (e, t, i) {
            for (var u = r(e), c = n(t, u), l = n(void 0 === i ? u : i, u), h = s(o(l - c, 0)), f = 0; c < l; c++, f++) a(h, f, e[c]);
            return h.length = f, h
        }
    }, function (e, t, i) {
        var n = i(263), r = i(11), a = i(189), s = i(14).f;
        e.exports = function (e) {
            var t = n.Symbol || (n.Symbol = {});
            r(t, e) || s(t, e, {value: a.f(e)})
        }
    }, function (e, t, i) {
        var n = i(3), r = i(5), a = i(84), s = r("species");
        e.exports = function (e) {
            return a >= 51 || !n((function () {
                var t = [];
                return (t.constructor = {})[s] = function () {
                    return {foo: 1}
                }, 1 !== t[e](Boolean).foo
            }))
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(4), r = i(1), a = i(10), s = i(161), o = i(86), u = i(35), c = i(200), l = i(3), h = i(96), f = i(27),
            d = i(36), p = i(201), v = i(270), m = i(103), g = i(76), y = i(87).f, _ = i(14).f, b = i(202), A = i(123),
            w = i(30), S = i(26), k = o.PROPER, C = o.CONFIGURABLE, T = S.get, x = S.set, P = n.ArrayBuffer, E = P,
            B = E && E.prototype, M = n.DataView, R = M && M.prototype, I = Object.prototype, F = n.Array,
            L = n.RangeError, O = r(b), D = r([].reverse), j = v.pack, U = v.unpack, V = function (e) {
                return [255 & e]
            }, N = function (e) {
                return [255 & e, e >> 8 & 255]
            }, W = function (e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            }, H = function (e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            }, z = function (e) {
                return j(e, 23, 4)
            }, q = function (e) {
                return j(e, 52, 8)
            }, G = function (e, t) {
                _(e.prototype, t, {
                    get: function () {
                        return T(this)[t]
                    }
                })
            }, Q = function (e, t, i, n) {
                var r = p(i), a = T(e);
                if (r + t > a.byteLength) throw L("Wrong index");
                var s = T(a.buffer).bytes, o = r + a.byteOffset, u = A(s, o, o + t);
                return n ? u : D(u)
            }, Y = function (e, t, i, n, r, a) {
                var s = p(i), o = T(e);
                if (s + t > o.byteLength) throw L("Wrong index");
                for (var u = T(o.buffer).bytes, c = s + o.byteOffset, l = n(+r), h = 0; h < t; h++) u[c + h] = l[a ? h : t - h - 1]
            };
        if (s) {
            var K = k && "ArrayBuffer" !== P.name;
            if (l((function () {
                P(1)
            })) && l((function () {
                new P(-1)
            })) && !l((function () {
                return new P, new P(1.5), new P(NaN), 1 != P.length || K && !C
            }))) K && C && u(P, "name", "ArrayBuffer"); else {
                (E = function (e) {
                    return h(this, B), new P(p(e))
                }).prototype = B;
                for (var J, X = y(P), Z = 0; X.length > Z;) (J = X[Z++]) in E || u(E, J, P[J]);
                B.constructor = E
            }
            g && m(R) !== I && g(R, I);
            var $ = new M(new E(2)), ee = r(R.setInt8);
            $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || c(R, {
                setInt8: function (e, t) {
                    ee(this, e, t << 24 >> 24)
                }, setUint8: function (e, t) {
                    ee(this, e, t << 24 >> 24)
                }
            }, {unsafe: !0})
        } else B = (E = function (e) {
            h(this, B);
            var t = p(e);
            x(this, {bytes: O(F(t), 0), byteLength: t}), a || (this.byteLength = t)
        }).prototype, R = (M = function (e, t, i) {
            h(this, R), h(e, B);
            var n = T(e).byteLength, r = f(t);
            if (r < 0 || r > n) throw L("Wrong offset");
            if (r + (i = void 0 === i ? n - r : d(i)) > n) throw L("Wrong length");
            x(this, {
                buffer: e,
                byteLength: i,
                byteOffset: r
            }), a || (this.buffer = e, this.byteLength = i, this.byteOffset = r)
        }).prototype, a && (G(E, "byteLength"), G(M, "buffer"), G(M, "byteLength"), G(M, "byteOffset")), c(R, {
            getInt8: function (e) {
                return Q(this, 1, e)[0] << 24 >> 24
            }, getUint8: function (e) {
                return Q(this, 1, e)[0]
            }, getInt16: function (e) {
                var t = Q(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                return (t[1] << 8 | t[0]) << 16 >> 16
            }, getUint16: function (e) {
                var t = Q(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                return t[1] << 8 | t[0]
            }, getInt32: function (e) {
                return H(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
            }, getUint32: function (e) {
                return H(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
            }, getFloat32: function (e) {
                return U(Q(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
            }, getFloat64: function (e) {
                return U(Q(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
            }, setInt8: function (e, t) {
                Y(this, 1, e, V, t)
            }, setUint8: function (e, t) {
                Y(this, 1, e, V, t)
            }, setInt16: function (e, t) {
                Y(this, 2, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
            }, setUint16: function (e, t) {
                Y(this, 2, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
            }, setInt32: function (e, t) {
                Y(this, 4, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            }, setUint32: function (e, t) {
                Y(this, 4, e, W, t, arguments.length > 2 ? arguments[2] : void 0)
            }, setFloat32: function (e, t) {
                Y(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
            }, setFloat64: function (e, t) {
                Y(this, 8, e, q, t, arguments.length > 2 ? arguments[2] : void 0)
            }
        });
        w(E, "ArrayBuffer"), w(M, "DataView"), e.exports = {ArrayBuffer: E, DataView: M}
    }, function (e, t, i) {
        var n = i(7), r = i(145), a = n.aTypedArrayConstructor, s = n.getTypedArrayConstructor;
        e.exports = function (e) {
            return a(r(e, s(e)))
        }
    }, function (e, t, i) {
        var n = i(2), r = i(281);
        n({global: !0, forced: parseInt != r}, {parseInt: r})
    }, function (e, t, i) {
        var n = i(1), r = i(66), a = i(17), s = i(130), o = n("".replace), u = "[" + s + "]",
            c = RegExp("^" + u + u + "*"), l = RegExp(u + u + "*$"), h = function (e) {
                return function (t) {
                    var i = a(r(t));
                    return 1 & e && (i = o(i, c, "")), 2 & e && (i = o(i, l, "")), i
                }
            };
        e.exports = {start: h(1), end: h(2), trim: h(3)}
    }, function (e, t) {
        e.exports = "\t\n\v\f\r В бљЂвЂЂвЂЃвЂ‚вЂѓвЂ„вЂ…вЂ†вЂ‡вЂ€вЂ‰вЂЉвЂЇвЃџгЂЂ\u2028\u2029\ufeff"
    }, function (e, t, i) {
        var n = i(2), r = i(288);
        n({global: !0, forced: parseFloat != r}, {parseFloat: r})
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(72);
        var n = new function () {
            var e = {};
            this.init = function (t, i) {
                if (i) for (var n in e[t] = {}, i) {
                    var r = document.getElementById(i[n]);
                    r && (e[t][n] = r)
                }
            }, this.display = function (t, i, n) {
                if (e[t]) {
                    var r = e[t][i];
                    r && (n instanceof Array && (n = n.join(", ")), r.innerHTML = n)
                }
            }
        };
        t.default = n
    }, function (e, t, i) {
        i(312)
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = function (e) {
            this.offset = void 0 === e ? 0 : e
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(86).PROPER, r = i(19), a = i(13), s = i(17), o = i(3), u = i(291), c = RegExp.prototype.toString,
            l = o((function () {
                return "/a/b" != c.call({source: "a", flags: "b"})
            })), h = n && "toString" != c.name;
        (l || h) && r(RegExp.prototype, "toString", (function () {
            var e = a(this);
            return "/" + s(e.source) + "/" + s(u(e))
        }), {unsafe: !0})
    }, function (e, t, i) {
        var n = i(2), r = i(179);
        n({target: "Array", proto: !0, forced: r !== [].lastIndexOf}, {lastIndexOf: r})
    }, function (e, t, i) {
        "use strict";
        var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, a = r && !n.call({1: 2}, 1);
        t.f = a ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
        } : n
    }, function (e, t, i) {
        var n = i(9), r = i(12), a = i(82), s = i(93), o = i(242), u = i(5), c = TypeError, l = u("toPrimitive");
        e.exports = function (e, t) {
            if (!r(e) || a(e)) return e;
            var i, u = s(e, l);
            if (u) {
                if (void 0 === t && (t = "default"), i = n(u, e, t), !r(i) || a(i)) return i;
                throw c("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"), o(e, t)
        }
    }, function (e, t, i) {
        var n = i(4), r = i(140), a = n["__core-js_shared__"] || r("__core-js_shared__", {});
        e.exports = a
    }, function (e, t, i) {
        var n = i(4), r = Object.defineProperty;
        e.exports = function (e, t) {
            try {
                r(n, e, {value: t, configurable: !0, writable: !0})
            } catch (i) {
                n[e] = t
            }
            return t
        }
    }, function (e, t, i) {
        var n = i(1), r = i(6), a = i(139), s = n(Function.toString);
        r(a.inspectSource) || (a.inspectSource = function (e) {
            return s(e)
        }), e.exports = a.inspectSource
    }, function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function (e, t, i) {
        var n = i(3), r = i(6), a = /#|\.prototype\./, s = function (e, t) {
            var i = u[o(e)];
            return i == l || i != c && (r(t) ? n(t) : !!t)
        }, o = s.normalize = function (e) {
            return String(e).replace(a, ".").toLowerCase()
        }, u = s.data = {}, c = s.NATIVE = "N", l = s.POLYFILL = "P";
        e.exports = s
    }, function (e, t, i) {
        "use strict";
        var n = i(22), r = i(14), a = i(5), s = i(10), o = a("species");
        e.exports = function (e) {
            var t = n(e), i = r.f;
            s && t && !t[o] && i(t, o, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (e, t, i) {
        var n = i(13), r = i(146), a = i(81), s = i(5)("species");
        e.exports = function (e, t) {
            var i, o = n(e).constructor;
            return void 0 === o || a(i = n(o)[s]) ? t : r(i)
        }
    }, function (e, t, i) {
        var n = i(120), r = i(75), a = TypeError;
        e.exports = function (e) {
            if (n(e)) return e;
            throw a(r(e) + " is not a constructor")
        }
    }, function (e, t, i) {
        var n = {};
        n[i(5)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return {error: !1, value: e()}
            } catch (e) {
                return {error: !0, value: e}
            }
        }
    }, function (e, t, i) {
        var n = i(5), r = i(100), a = n("iterator"), s = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || s[a] === e)
        }
    }, function (e, t, i) {
        var n = i(178), r = i(142);
        e.exports = Object.keys || function (e) {
            return n(e, r)
        }
    }, function (e, t, i) {
        var n = i(265);
        e.exports = function (e, t) {
            return new (n(e))(0 === t ? 0 : t)
        }
    }, function (e, t, i) {
        var n = i(1), r = i(27), a = i(17), s = i(66), o = n("".charAt), u = n("".charCodeAt), c = n("".slice),
            l = function (e) {
                return function (t, i) {
                    var n, l, h = a(s(t)), f = r(i), d = h.length;
                    return f < 0 || f >= d ? e ? "" : void 0 : (n = u(h, f)) < 55296 || n > 56319 || f + 1 === d || (l = u(h, f + 1)) < 56320 || l > 57343 ? e ? o(h, f) : n : e ? c(h, f, f + 2) : l - 56320 + (n - 55296 << 10) + 65536
                }
            };
        e.exports = {codeAt: l(!1), charAt: l(!0)}
    }, function (e, t, i) {
        i(124)("asyncIterator")
    }, function (e, t, i) {
        var n = i(22), r = i(124), a = i(30);
        r("toStringTag"), a(n("Symbol"), "Symbol")
    }, function (e, t, i) {
        var n = i(4);
        i(30)(n.JSON, "JSON", !0)
    }, function (e, t, i) {
        i(30)(Math, "Math", !0)
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(199);
        n({target: "Array", proto: !0, forced: [].forEach != r}, {forEach: r})
    }, function (e, t, i) {
        var n = i(4), r = i(196), a = i(197), s = i(199), o = i(35), u = function (e) {
            if (e && e.forEach !== s) try {
                o(e, "forEach", s)
            } catch (t) {
                e.forEach = s
            }
        };
        for (var c in r) r[c] && u(n[c] && n[c].prototype);
        u(a)
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(88), s = r([].reverse), o = [1, 2];
        n({target: "Array", proto: !0, forced: String(o) === String(o.reverse())}, {
            reverse: function () {
                return a(this) && (this.length = this.length), s(this)
            }
        })
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(88), a = i(120), s = i(12), o = i(68), u = i(20), c = i(29), l = i(102), h = i(5),
            f = i(125), d = i(77), p = f("slice"), v = h("species"), m = Array, g = Math.max;
        n({target: "Array", proto: !0, forced: !p}, {
            slice: function (e, t) {
                var i, n, h, f = c(this), p = u(f), y = o(e, p), _ = o(void 0 === t ? p : t, p);
                if (r(f) && (i = f.constructor, (a(i) && (i === m || r(i.prototype)) || s(i) && null === (i = i[v])) && (i = void 0), i === m || void 0 === i)) return d(f, y, _);
                for (n = new (void 0 === i ? m : i)(g(_ - y, 0)), h = 0; y < _; y++, h++) y in f && l(n, h, f[y]);
                return n.length = h, n
            }
        })
    }, function (e, t) {
        e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    }, function (e, t, i) {
        "use strict";
        var n = i(75), r = TypeError;
        e.exports = function (e, t) {
            if (!delete e[t]) throw r("Cannot delete property " + n(t) + " of " + n(e))
        }
    }, function (e, t, i) {
        var n = i(123), r = Math.floor, a = function (e, t) {
            var i = e.length, u = r(i / 2);
            return i < 8 ? s(e, t) : o(e, a(n(e, 0, u), t), a(n(e, u), t), t)
        }, s = function (e, t) {
            for (var i, n, r = e.length, a = 1; a < r;) {
                for (n = a, i = e[a]; n && t(e[n - 1], i) > 0;) e[n] = e[--n];
                n !== a++ && (e[n] = i)
            }
            return e
        }, o = function (e, t, i, n) {
            for (var r = t.length, a = i.length, s = 0, o = 0; s < r || o < a;) e[s + o] = s < r && o < a ? n(t[s], i[o]) <= 0 ? t[s++] : i[o++] : s < r ? t[s++] : i[o++];
            return e
        };
        e.exports = a
    }, function (e, t, i) {
        "use strict";
        var n = i(13);
        e.exports = function () {
            var e = n(this), t = "";
            return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(0);
        var n = u(i(294)), r = u(i(308)), a = u(i(109)), s = i(23), o = u(i(8));

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function c(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function l(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        var h = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), l(this, "_onMediaReady", function (e) {
                    this._onMediaReadyCallback()
                }.bind(this)), l(this, "_onProgress", function (e, t, i) {
                    this._onProgressCallback(t, i)
                }.bind(this)), l(this, "_onCrash", function (e, t) {
                    this._onCrashCallback(t)
                }.bind(this)), l(this, "_onWaitUpdate", function (e, t, i) {
                    this._onWaitUpdateCallback(t, i)
                }.bind(this)), l(this, "_onPlayStarted", function (e) {
                    this._onPlayStartedCallback()
                }.bind(this)), l(this, "_onLatencyCalc", function (e, t) {
                    return this._onLatencyCalcCallback(t)
                }.bind(this)), l(this, "_onLatencySeek", function (e, t, i) {
                    this._onLatencySeekCallback(t, i)
                }.bind(this)), l(this, "_onLowBuffer", function (e) {
                    this._onLowBufferCallback()
                }.bind(this)), l(this, "_getAvgVBufLvl", function (e) {
                    return this._getAvgVBufLvlCallback()
                }.bind(this)), this._id = t, this._apiNames = ["_mse", "_wapi"], this._codec2Api = {}, this._lowBufferValues = {}, this._stored = {}, this._logger = o.default.create(t, "MediaService"), this._playbackService = a.default.getInstance(t)
            }

            var t, i;
            return t = e, (i = [{
                key: "isMediaSourceSupported", value: function () {
                    return void 0 !== window.MediaSource
                }
            }, {
                key: "isWebAudioSupported", value: function () {
                    return void 0 !== window.AudioContext || void 0 !== window.webkitAudioContext
                }
            }, {
                key: "isWebAudioAvailable", value: function () {
                    return window.isSecureContext && void 0 !== window.AudioWorkletNode
                }
            }, {
                key: "isCodecSupportedByMediaSource", value: function (e, t) {
                    return !!this.isMediaSourceSupported() && n.default.isCodecSupported(e, t)
                }
            }, {
                key: "isCodecSupported", value: function (e, t) {
                    var i = this.isCodecSupportedByMediaSource(e, t);
                    return !i && "audio" === e && this._opusDecoderEnabled && !this._mse && this.isWebAudioSupported() && this.isWebAudioAvailable() && (i = r.default.isCodecSupported(e, t)), i
                }
            }, {
                key: "setOpusDecoderEnabled", value: function (e) {
                    this._opusDecoderEnabled = !!e
                }
            }, {
                key: "setupMediaApi", value: function (e, t) {
                    if (this.isMediaSourceSupported() && n.default.isCodecSupported(e, t)) return this._mse || (this._mse = n.default.create(this._id)), this._setMseCallbacks(), void (this._codec2Api[e + t] = this._mse);
                    this.isWebAudioSupported() && this.isWebAudioAvailable() && r.default.isCodecSupported(e, t) && (this._wapi || (this._wapi = r.default.create(this._id)), this._setWapiCallbacks(), this._codec2Api[e + t] = this._wapi)
                }
            }, {
                key: "init", value: function (e, t) {
                    for (var i = this._forAllApis((function (i) {
                        return i.init(e, t)
                    })), n = 0; n < this._apiNames.length; n++) if (this[this._apiNames[n]] && !i[n]) return !1;
                    return this._initialized || (this._setStoredParams(), this._initialized = !0), !0
                }
            }, {
                key: "createSourceBuffer", value: function (e, t, i, n) {
                    return this._forApi(e, t, (function (r) {
                        return r.createSourceBuffer(e, t, i, n)
                    }))
                }
            }, {
                key: "clear", value: function () {
                    this._forAllApis((function (e) {
                        return e.clear()
                    })), this._playbackService.unset(), this._codec2Api = {}, this._mse = void 0, this._wapi = void 0, this._initialized = !1
                }
            }, {
                key: "setLatencyTolerance", value: function (e, t, i) {
                    this._initialized ? this._forAllApis((function (n) {
                        return n.setLatencyTolerance(e, t, i)
                    })) : (this._stored.tolerance = e, this._stored.buffering = t, this._stored.zapping = i)
                }
            }, {
                key: "toggleBufferLineUp", value: function (e) {
                    this._initialized ? this._mse && this._mse.toggleBufferLineUp(e) : this._stored.bufferLineUp = e
                }
            }, {
                key: "setSyncParams", value: function (e, t) {
                    this._forAllApis((function (i) {
                        return i.setSyncParams(e, t)
                    }))
                }
            }, {
                key: "startLogging", value: function (e, t, i) {
                    this._forApi(e, t, (function (e) {
                        return e.startLogging(i)
                    }))
                }
            }, {
                key: "setCurrentBufferLevel", value: function (e, t, i) {
                    this._forApi(e, t, (function (t) {
                        return t.setCurrentBufferLevel(e, i)
                    }))
                }
            }, {
                key: "setLowBufferBorder", value: function (e, t) {
                    this._lowBufferValues[t] = e + .06;
                    var i = 0;
                    for (var n in this._lowBufferValues) this._lowBufferValues[n] > i && (i = this._lowBufferValues[n]);
                    this._forAllApis((function (e) {
                        return e.setLowBufferBorder(i)
                    }))
                }
            }, {
                key: "setPositionControl", value: function () {
                    this._mse && this._mse.setPositionControl()
                }
            }, {
                key: "setTransitOn", value: function () {
                    this._mse && this._mse.setTransitOn()
                }
            }, {
                key: "setTransitOff", value: function () {
                    this._mse && this._mse.setTransitOff()
                }
            }, {
                key: "handlePlay", value: function (e) {
                    var t = this._playbackService.handlePlay(e);
                    t && this._forAllApis((function (e) {
                        return e.resumeTo(t)
                    }))
                }
            }, {
                key: "handlePause", value: function () {
                    this._playbackService.handlePause() && this._forAllApis((function (e) {
                        return e.handlePause()
                    }))
                }
            }, {
                key: "handlePlayEvent", value: function () {
                    this._forAllApis((function (e) {
                        return e.handlePlayEvent()
                    }))
                }
            }, {
                key: "handlePauseEvent", value: function () {
                    this._forAllApis((function (e) {
                        return e.handlePauseEvent()
                    }))
                }
            }, {
                key: "handleEnterPip", value: function () {
                }
            }, {
                key: "handleLeavePip", value: function () {
                    this._playbackService.handleLeavePip()
                }
            }, {
                key: "startPlayback", value: function (e) {
                    this._forAllApis((function (t) {
                        return t.startPlayback(e)
                    }))
                }
            }, {
                key: "continue", value: function () {
                    this._forAllApis((function (e) {
                        return e.continue()
                    }))
                }
            }, {
                key: "wait", value: function () {
                    this._forAllApis((function (e) {
                        return e.wait()
                    }))
                }
            }, {
                key: "isSeeking", value: function () {
                    return this._mse && this._mse.isSeeking() || this._wapi && this._wapi.isSeeking()
                }
            }, {
                key: "resetPosition", value: function () {
                    this._forAllApis((function (e) {
                        return e.resetPosition()
                    }))
                }
            }, {
                key: "callbacks", set: function (e) {
                    for (var t in e) this["_" + t + "Callback"] = e[t]
                }
            }, {
                key: "setVolume", value: function (e) {
                    this._initialized ? this._forAllApis((function (t) {
                        return t.setVolume(e)
                    })) : this._stored.volume = e
                }
            }, {
                key: "getVolume", value: function () {
                    if (this._initialized) {
                        if (this._mse) return this._mse.getVolume();
                        if (this._wapi) return this._wapi.getVolume()
                    }
                    return void 0 === this._stored.volume ? 1 : this._stored.volume
                }
            }, {
                key: "setMuted", value: function (e) {
                    this._initialized ? this._forAllApis((function (t) {
                        return t.setMuted(e)
                    })) : this._stored.muted = e
                }
            }, {
                key: "isMuted", value: function () {
                    return this._initialized ? this._mse && this._mse.isMuted() || this._wapi && this._wapi.isMuted() : !!this._stored.muted
                }
            }, {
                key: "_setMseCallbacks", value: function () {
                    this._mse && this._mse.callbacks({
                        onProgress: this._onProgress,
                        onMediaReady: this._onMediaReady,
                        onCrash: this._onCrash,
                        onWaitUpdate: this._onWaitUpdate,
                        onPlayStarted: this._onPlayStarted,
                        onLatencyCalc: this._onLatencyCalc,
                        onLatencySeek: this._onLatencySeek,
                        onLowBuffer: this._onLowBuffer,
                        getAvgVBufLvl: this._getAvgVBufLvl
                    })
                }
            }, {
                key: "_setWapiCallbacks", value: function () {
                    this._wapi && (this._wapi.callbacks = {
                        onProgress: this._onProgress,
                        onMediaReady: this._onMediaReady,
                        onCrash: this._onCrash,
                        onWaitUpdate: this._onWaitUpdate,
                        onPlayStarted: this._onPlayStarted,
                        onLatencyCalc: this._onLatencyCalc,
                        onLatencySeek: this._onLatencySeek,
                        onLowBuffer: this._onLowBuffer
                    })
                }
            }, {
                key: "_setStoredParams", value: function () {
                    var e = this;
                    this._forAllApis((function (t) {
                        t.setLatencyTolerance(e._stored.tolerance, e._stored.buffering, e._stored.zapping), t.toggleBufferLineUp(e._stored.bufferLineUp), void 0 !== e._stored.volume && t.setVolume(e._stored.volume), void 0 !== e._stored.muted && t.setMuted(e._stored.muted)
                    })), this._stored.volume = void 0, this._stored.muted = void 0
                }
            }, {
                key: "_forAllApis", value: function (e) {
                    for (var t = [], i = 0; i < this._apiNames.length; i++) {
                        var n = this[this._apiNames[i]];
                        n && (t[i] = e(n))
                    }
                    return t
                }
            }, {
                key: "_forApi", value: function (e, t, i) {
                    var n = this._codec2Api[e + t];
                    if (n) return i(n);
                    this._logger.error("media API is not found for", e, t, this._codec2Api)
                }
            }]) && c(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), f = (0, s.multiInstanceHolder)(h);
        t.default = f
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(167), i(307), i(89), i(16), i(135), i(107), i(21), i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n}, a = i(23);

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var o = function () {
            function e() {
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._logger = r.default.create("", "PlatformDetector"), void 0 !== window) if (window.navigator || navigator) {
                    this.nav = window.navigator || navigator, this.userAgent = (this.nav.userAgent || "").toLowerCase(), this._isFirefox = "undefined" != typeof InstallTrigger, this._isOpera = null !== this.userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
                    var t = (this.nav && this.nav.vendor || "").toLowerCase(),
                        i = /google inc/.test(t) ? this.userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
                    this._isChrome = null !== i && !this._isOpera, this._isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(), this._isSafari || this._isChrome || (this._isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1), this._isIE = !!document.documentMode, this._isEdge = !this._isIE && !!window.StyleMedia, this._iPadOS13 = this._isIOS13("iPad"), this._isMobile = /android|webos|iphone|ipad|ipod|opera mini/i.test(this.userAgent) || this._iPadOS13, this._isIOS = /ipad|iphone|ipod/.test(this.userAgent) && !window.MSStream || this._iPadOS13
                } else this._logger.error("navigator is not defined"); else this._logger.error("window is undefined")
            }

            var t, i;
            return t = e, (i = [{
                key: "isMobile", value: function () {
                    return this._isMobile
                }
            }, {
                key: "isIOS", value: function () {
                    return this._isIOS
                }
            }, {
                key: "isBrowser", value: function (e) {
                    switch (e) {
                        case"Firefox":
                            return this._isFirefox;
                        case"Chrome":
                            return this._isChrome;
                        case"Safari":
                            return this._isSafari;
                        case"Edge":
                            return this._isEdge;
                        case"IE":
                            return this._isIE;
                        case"Microsoft":
                            return this._isIE || this._isEdge;
                        default:
                            return this._logger.debug("Unknown browser name", e), null
                    }
                }
            }, {
                key: "logData", value: function () {
                    this._logger.debug("Firefox - ".concat(this._isFirefox, ", Chrome - ").concat(this._isChrome, ", Safari - ").concat(this._isSafari, ", IE - ").concat(this._isIE, ", Edge - ").concat(this._isEdge, ", Mobile - ").concat(this._isMobile, ", iOS - ").concat(this._isIOS, ", iPadOS - ").concat(this._iPadOS13))
                }
            }, {
                key: "_isIOS13", value: function (e) {
                    return this.nav && this.nav.platform && (-1 !== this.nav.platform.indexOf(e) || "MacIntel" === this.nav.platform && this.nav.maxTouchPoints > 1 && !window.MSStream)
                }
            }]) && s(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), u = (0, a.instanceHolder)(o);
        t.default = u
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(168);
        n({target: "RegExp", proto: !0, forced: /./.exec !== r}, {exec: r})
    }, function (e, t, i) {
        "use strict";
        var n, r, a = i(9), s = i(1), o = i(17), u = i(164), c = i(304), l = i(85), h = i(38), f = i(26).get,
            d = i(305), p = i(306), v = l("native-string-replace", String.prototype.replace), m = RegExp.prototype.exec,
            g = m, y = s("".charAt), _ = s("".indexOf), b = s("".replace), A = s("".slice),
            w = (r = /b*/g, a(m, n = /a/, "a"), a(m, r, "a"), 0 !== n.lastIndex || 0 !== r.lastIndex),
            S = c.BROKEN_CARET, k = void 0 !== /()??/.exec("")[1];
        (w || k || S || d || p) && (g = function (e) {
            var t, i, n, r, s, c, l, d = this, p = f(d), C = o(e), T = p.raw;
            if (T) return T.lastIndex = d.lastIndex, t = a(g, T, C), d.lastIndex = T.lastIndex, t;
            var x = p.groups, P = S && d.sticky, E = a(u, d), B = d.source, M = 0, R = C;
            if (P && (E = b(E, "y", ""), -1 === _(E, "g") && (E += "g"), R = A(C, d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== y(C, d.lastIndex - 1)) && (B = "(?: " + B + ")", R = " " + R, M++), i = new RegExp("^(?:" + B + ")", E)), k && (i = new RegExp("^" + B + "$(?!\\s)", E)), w && (n = d.lastIndex), r = a(m, P ? i : d, R), P ? r ? (r.input = A(r.input, M), r[0] = A(r[0], M), r.index = d.lastIndex, d.lastIndex += r[0].length) : d.lastIndex = 0 : w && r && (d.lastIndex = d.global ? r.index + r[0].length : n), k && r && r.length > 1 && a(v, r[0], i, (function () {
                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (r[s] = void 0)
            })), r && x) for (r.groups = c = h(null), s = 0; s < x.length; s++) c[(l = x[s])[0]] = r[l[1]];
            return r
        }), e.exports = g
    }, function (e, t, i) {
        var n = i(4), r = i(10), a = i(218), s = i(164), o = i(3), u = n.RegExp, c = u.prototype;
        r && o((function () {
            var e = !0;
            try {
                u(".", "d")
            } catch (t) {
                e = !1
            }
            var t = {}, i = "", n = e ? "dgimsy" : "gimsy", r = function (e, n) {
                Object.defineProperty(t, e, {
                    get: function () {
                        return i += n, !0
                    }
                })
            }, a = {dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y"};
            for (var s in e && (a.hasIndices = "d"), a) r(s, a[s]);
            return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== n || i !== n
        })) && a(c, "flags", {configurable: !0, get: s})
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(129).trim;
        n({target: "String", proto: !0, forced: i(321)("trim")}, {
            trim: function () {
                return r(this)
            }
        })
    }, function (e, t, i) {
        var n = i(90), r = Function.prototype, a = r.call, s = n && r.bind.bind(a, a);
        e.exports = n ? s : function (e) {
            return function () {
                return a.apply(e, arguments)
            }
        }
    }, function (e, t) {
        var i = "object" == typeof document && document.all, n = void 0 === i && void 0 !== i;
        e.exports = {all: i, IS_HTMLDDA: n}
    }, function (e, t, i) {
        var n = i(83);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function (e, t, i) {
        var n = i(10), r = i(3), a = i(114);
        e.exports = !n && !r((function () {
            return 7 != Object.defineProperty(a("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (e, t, i) {
        var n = i(10), r = i(3);
        e.exports = n && r((function () {
            return 42 != Object.defineProperty((function () {
            }), "prototype", {value: 42, writable: !1}).prototype
        }))
    }, function (e, t, i) {
        var n = i(3), r = i(6), a = i(11), s = i(10), o = i(86).CONFIGURABLE, u = i(141), c = i(26), l = c.enforce,
            h = c.get, f = Object.defineProperty, d = s && !n((function () {
                return 8 !== f((function () {
                }), "length", {value: 8}).length
            })), p = String(String).split("String"), v = e.exports = function (e, t, i) {
                "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!a(e, "name") || o && e.name !== t) && (s ? f(e, "name", {
                    value: t,
                    configurable: !0
                }) : e.name = t), d && i && a(i, "arity") && e.length !== i.arity && f(e, "length", {value: i.arity});
                try {
                    i && a(i, "constructor") && i.constructor ? s && f(e, "prototype", {writable: !1}) : e.prototype && (e.prototype = void 0)
                } catch (e) {
                }
                var n = l(e);
                return a(n, "source") || (n.source = p.join("string" == typeof t ? t : "")), e
            };
        Function.prototype.toString = v((function () {
            return r(this) && h(this).source || u(this)
        }), "toString")
    }, function (e, t, i) {
        var n = i(11), r = i(244), a = i(73), s = i(14);
        e.exports = function (e, t, i) {
            for (var o = r(t), u = s.f, c = a.f, l = 0; l < o.length; l++) {
                var h = o[l];
                n(e, h) || i && n(i, h) || u(e, h, c(t, h))
            }
        }
    }, function (e, t, i) {
        var n = i(1), r = i(11), a = i(29), s = i(94).indexOf, o = i(116), u = n([].push);
        e.exports = function (e, t) {
            var i, n = a(e), c = 0, l = [];
            for (i in n) !r(o, i) && r(n, i) && u(l, i);
            for (; t.length > c;) r(n, i = t[c++]) && (~s(l, i) || u(l, i));
            return l
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(69), r = i(29), a = i(27), s = i(20), o = i(95), u = Math.min, c = [].lastIndexOf,
            l = !!c && 1 / [1].lastIndexOf(1, -0) < 0, h = o("lastIndexOf"), f = l || !h;
        e.exports = f ? function (e) {
            if (l) return n(c, this, arguments) || 0;
            var t = r(this), i = s(t), o = i - 1;
            for (arguments.length > 1 && (o = u(o, a(arguments[1]))), o < 0 && (o = i + o); o >= 0; o--) if (o in t && t[o] === e) return o || 0;
            return -1
        } : c
    }, function (e, t, i) {
        var n, r, a, s, o = i(4), u = i(69), c = i(70), l = i(6), h = i(11), f = i(3), d = i(181), p = i(77),
            v = i(114), m = i(121), g = i(182), y = i(119), _ = o.setImmediate, b = o.clearImmediate, A = o.process,
            w = o.Dispatch, S = o.Function, k = o.MessageChannel, C = o.String, T = 0, x = {};
        try {
            n = o.location
        } catch (e) {
        }
        var P = function (e) {
            if (h(x, e)) {
                var t = x[e];
                delete x[e], t()
            }
        }, E = function (e) {
            return function () {
                P(e)
            }
        }, B = function (e) {
            P(e.data)
        }, M = function (e) {
            o.postMessage(C(e), n.protocol + "//" + n.host)
        };
        _ && b || (_ = function (e) {
            m(arguments.length, 1);
            var t = l(e) ? e : S(e), i = p(arguments, 1);
            return x[++T] = function () {
                u(t, void 0, i)
            }, r(T), T
        }, b = function (e) {
            delete x[e]
        }, y ? r = function (e) {
            A.nextTick(E(e))
        } : w && w.now ? r = function (e) {
            w.now(E(e))
        } : k && !g ? (s = (a = new k).port2, a.port1.onmessage = B, r = c(s.postMessage, s)) : o.addEventListener && l(o.postMessage) && !o.importScripts && n && "file:" !== n.protocol && !f(M) ? (r = M, o.addEventListener("message", B, !1)) : r = "onreadystatechange" in v("script") ? function (e) {
            d.appendChild(v("script")).onreadystatechange = function () {
                d.removeChild(this), P(e)
            }
        } : function (e) {
            setTimeout(E(e), 0)
        }), e.exports = {set: _, clear: b}
    }, function (e, t, i) {
        var n = i(22);
        e.exports = n("document", "documentElement")
    }, function (e, t, i) {
        var n = i(67);
        e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
    }, function (e, t) {
        e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
    }, function (e, t, i) {
        var n = i(70), r = i(9), a = i(13), s = i(75), o = i(149), u = i(20), c = i(34), l = i(122), h = i(101),
            f = i(185), d = TypeError, p = function (e, t) {
                this.stopped = e, this.result = t
            }, v = p.prototype;
        e.exports = function (e, t, i) {
            var m, g, y, _, b, A, w, S = i && i.that, k = !(!i || !i.AS_ENTRIES), C = !(!i || !i.IS_RECORD),
                T = !(!i || !i.IS_ITERATOR), x = !(!i || !i.INTERRUPTED), P = n(t, S), E = function (e) {
                    return m && f(m, "normal", e), new p(!0, e)
                }, B = function (e) {
                    return k ? (a(e), x ? P(e[0], e[1], E) : P(e[0], e[1])) : x ? P(e, E) : P(e)
                };
            if (C) m = e.iterator; else if (T) m = e; else {
                if (!(g = h(e))) throw d(s(e) + " is not iterable");
                if (o(g)) {
                    for (y = 0, _ = u(e); _ > y; y++) if ((b = B(e[y])) && c(v, b)) return b;
                    return new p(!1)
                }
                m = l(e, g)
            }
            for (A = C ? e.next : m.next; !(w = r(A, m)).done;) {
                try {
                    b = B(w.value)
                } catch (e) {
                    f(m, "throw", e)
                }
                if ("object" == typeof b && b && c(v, b)) return b
            }
            return new p(!1)
        }
    }, function (e, t, i) {
        var n = i(9), r = i(13), a = i(93);
        e.exports = function (e, t, i) {
            var s, o;
            r(e);
            try {
                if (!(s = a(e, "return"))) {
                    if ("throw" === t) throw i;
                    return i
                }
                s = n(s, e)
            } catch (e) {
                o = !0, s = e
            }
            if ("throw" === t) throw i;
            if (o) throw s;
            return r(s), i
        }
    }, function (e, t, i) {
        var n = i(97), r = i(187), a = i(98).CONSTRUCTOR;
        e.exports = a || !r((function (e) {
            n.all(e).then(void 0, (function () {
            }))
        }))
    }, function (e, t, i) {
        var n = i(5)("iterator"), r = !1;
        try {
            var a = 0, s = {
                next: function () {
                    return {done: !!a++}
                }, return: function () {
                    r = !0
                }
            };
            s[n] = function () {
                return this
            }, Array.from(s, (function () {
                throw 2
            }))
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !r) return !1;
            var i = !1;
            try {
                var a = {};
                a[n] = function () {
                    return {
                        next: function () {
                            return {done: i = !0}
                        }
                    }
                }, e(a)
            } catch (e) {
            }
            return i
        }
    }, function (e, t, i) {
        var n = i(10), r = i(175), a = i(14), s = i(13), o = i(29), u = i(150);
        t.f = n && !r ? Object.defineProperties : function (e, t) {
            s(e);
            for (var i, n = o(t), r = u(t), c = r.length, l = 0; c > l;) a.f(e, i = r[l++], n[i]);
            return e
        }
    }, function (e, t, i) {
        var n = i(5);
        t.f = n
    }, function (e, t, i) {
        var n = i(83);
        e.exports = n && !!Symbol.for && !!Symbol.keyFor
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(9), a = i(25), s = i(86), o = i(6), u = i(192), c = i(103), l = i(76), h = i(30), f = i(35),
            d = i(19), p = i(5), v = i(100), m = i(193), g = s.PROPER, y = s.CONFIGURABLE, _ = m.IteratorPrototype,
            b = m.BUGGY_SAFARI_ITERATORS, A = p("iterator"), w = function () {
                return this
            };
        e.exports = function (e, t, i, s, p, m, S) {
            u(i, t, s);
            var k, C, T, x = function (e) {
                    if (e === p && R) return R;
                    if (!b && e in B) return B[e];
                    switch (e) {
                        case"keys":
                        case"values":
                        case"entries":
                            return function () {
                                return new i(this, e)
                            }
                    }
                    return function () {
                        return new i(this)
                    }
                }, P = t + " Iterator", E = !1, B = e.prototype, M = B[A] || B["@@iterator"] || p && B[p],
                R = !b && M || x(p), I = "Array" == t && B.entries || M;
            if (I && (k = c(I.call(new e))) !== Object.prototype && k.next && (a || c(k) === _ || (l ? l(k, _) : o(k[A]) || d(k, A, w)), h(k, P, !0, !0), a && (v[P] = w)), g && "values" == p && M && "values" !== M.name && (!a && y ? f(B, "name", "values") : (E = !0, R = function () {
                return r(M, this)
            })), p) if (C = {
                values: x("values"),
                keys: m ? R : x("keys"),
                entries: x("entries")
            }, S) for (T in C) !b && !E && T in B || d(B, T, C[T]); else n({target: t, proto: !0, forced: b || E}, C);
            return a && !S || B[A] === R || d(B, A, R, {name: p}), v[t] = R, C
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(193).IteratorPrototype, r = i(38), a = i(74), s = i(30), o = i(100), u = function () {
            return this
        };
        e.exports = function (e, t, i, c) {
            var l = t + " Iterator";
            return e.prototype = r(n, {next: a(+!c, i)}), s(e, l, !1, !0), o[l] = u, e
        }
    }, function (e, t, i) {
        "use strict";
        var n, r, a, s = i(3), o = i(6), u = i(12), c = i(38), l = i(103), h = i(19), f = i(5), d = i(25),
            p = f("iterator"), v = !1;
        [].keys && ("next" in (a = [].keys()) ? (r = l(l(a))) !== Object.prototype && (n = r) : v = !0), !u(n) || s((function () {
            var e = {};
            return n[p].call(e) !== e
        })) ? n = {} : d && (n = c(n)), o(n[p]) || h(n, p, (function () {
            return this
        })), e.exports = {IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: v}
    }, function (e, t, i) {
        var n = i(3);
        e.exports = !n((function () {
            function e() {
            }

            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }))
    }, function (e, t) {
        e.exports = function (e, t) {
            return {value: e, done: t}
        }
    }, function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function (e, t, i) {
        var n = i(114)("span").classList, r = n && n.constructor && n.constructor.prototype;
        e.exports = r === Object.prototype ? void 0 : r
    }, function (e, t, i) {
        var n = i(5), r = i(38), a = i(14).f, s = n("unscopables"), o = Array.prototype;
        null == o[s] && a(o, s, {configurable: !0, value: r(null)}), e.exports = function (e) {
            o[s][e] = !0
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(28).forEach, r = i(95)("forEach");
        e.exports = r ? [].forEach : function (e) {
            return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }, function (e, t, i) {
        var n = i(19);
        e.exports = function (e, t, i) {
            for (var r in t) n(e, r, t[r], i);
            return e
        }
    }, function (e, t, i) {
        var n = i(27), r = i(36), a = RangeError;
        e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = n(e), i = r(t);
            if (t !== i) throw a("Wrong length or index");
            return i
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(18), r = i(68), a = i(20);
        e.exports = function (e) {
            for (var t = n(this), i = a(t), s = arguments.length, o = r(s > 1 ? arguments[1] : void 0, i), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? i : r(u, i); c > o;) t[o++] = e;
            return t
        }
    }, function (e, t, i) {
        var n = i(275), r = RangeError;
        e.exports = function (e, t) {
            var i = n(e);
            if (i % t) throw r("Wrong offset");
            return i
        }
    }, function (e, t, i) {
        var n = i(138), r = TypeError;
        e.exports = function (e) {
            var t = n(e, "number");
            if ("number" == typeof t) throw r("Can't convert number to bigint");
            return BigInt(t)
        }
    }, function (e, t, i) {
        var n = i(6), r = i(12), a = i(76);
        e.exports = function (e, t, i) {
            var s, o;
            return a && n(s = t.constructor) && s !== i && r(o = s.prototype) && o !== i.prototype && a(e, o), e
        }
    }, function (e, t, i) {
        var n = i(24), r = i(18), a = i(91), s = i(20), o = TypeError, u = function (e) {
            return function (t, i, u, c) {
                n(i);
                var l = r(t), h = a(l), f = s(l), d = e ? f - 1 : 0, p = e ? -1 : 1;
                if (u < 2) for (; ;) {
                    if (d in h) {
                        c = h[d], d += p;
                        break
                    }
                    if (d += p, e ? d < 0 : f <= d) throw o("Reduce of empty array with no initial value")
                }
                for (; e ? d >= 0 : f > d; d += p) d in h && (c = i(c, h[d], d, l));
                return c
            }
        };
        e.exports = {left: u(!1), right: u(!0)}
    }, function (e, t, i) {
        var n = i(67).match(/firefox\/(\d+)/i);
        e.exports = !!n && +n[1]
    }, function (e, t, i) {
        var n = i(67);
        e.exports = /MSIE|Trident/.test(n)
    }, function (e, t, i) {
        var n = i(67).match(/AppleWebKit\/(\d+)\./);
        e.exports = !!n && +n[1]
    }, function (e, t) {
        var i = TypeError;
        e.exports = function (e) {
            if (e > 9007199254740991) throw i("Maximum allowed index exceeded");
            return e
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(10), r = i(1), a = i(9), s = i(3), o = i(150), u = i(117), c = i(137), l = i(18), h = i(91),
            f = Object.assign, d = Object.defineProperty, p = r([].concat);
        e.exports = !f || s((function () {
            if (n && 1 !== f({b: 1}, f(d({}, "a", {
                enumerable: !0, get: function () {
                    d(this, "b", {value: 3, enumerable: !1})
                }
            }), {b: 2})).b) return !0;
            var e = {}, t = {}, i = Symbol();
            return e[i] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
                t[e] = e
            })), 7 != f({}, e)[i] || "abcdefghijklmnopqrst" != o(f({}, t)).join("")
        })) ? function (e, t) {
            for (var i = l(e), r = arguments.length, s = 1, f = u.f, d = c.f; r > s;) for (var v, m = h(arguments[s++]), g = f ? p(o(m), f(m)) : o(m), y = g.length, _ = 0; y > _;) v = g[_++], n && !a(d, m, v) || (i[v] = m[v]);
            return i
        } : f
    }, function (e, t, i) {
        var n = i(4), r = i(69), a = i(6), s = i(67), o = i(77), u = i(121), c = /MSIE .\./.test(s), l = n.Function,
            h = function (e) {
                return c ? function (t, i) {
                    var n = u(arguments.length, 1) > 2, s = a(t) ? t : l(t), c = n ? o(arguments, 2) : void 0;
                    return e(n ? function () {
                        r(s, this, c)
                    } : s, i)
                } : e
            };
        e.exports = {setTimeout: h(n.setTimeout), setInterval: h(n.setInterval)}
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(94).includes, a = i(3), s = i(198);
        n({
            target: "Array", proto: !0, forced: a((function () {
                return !Array(1).includes()
            }))
        }, {
            includes: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), s("includes")
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(27), s = i(215), o = i(293), u = i(3), c = RangeError, l = String, h = Math.floor,
            f = r(o), d = r("".slice), p = r(1..toFixed), v = function (e, t, i) {
                return 0 === t ? i : t % 2 == 1 ? v(e, t - 1, i * e) : v(e * e, t / 2, i)
            }, m = function (e, t, i) {
                for (var n = -1, r = i; ++n < 6;) r += t * e[n], e[n] = r % 1e7, r = h(r / 1e7)
            }, g = function (e, t) {
                for (var i = 6, n = 0; --i >= 0;) n += e[i], e[i] = h(n / t), n = n % t * 1e7
            }, y = function (e) {
                for (var t = 6, i = ""; --t >= 0;) if ("" !== i || 0 === t || 0 !== e[t]) {
                    var n = l(e[t]);
                    i = "" === i ? n : i + f("0", 7 - n.length) + n
                }
                return i
            };
        n({
            target: "Number", proto: !0, forced: u((function () {
                return "0.000" !== p(8e-5, 3) || "1" !== p(.9, 0) || "1.25" !== p(1.255, 2) || "1000000000000000128" !== p(0xde0b6b3a7640080, 0)
            })) || !u((function () {
                p({})
            }))
        }, {
            toFixed: function (e) {
                var t, i, n, r, o = s(this), u = a(e), h = [0, 0, 0, 0, 0, 0], p = "", _ = "0";
                if (u < 0 || u > 20) throw c("Incorrect fraction digits");
                if (o != o) return "NaN";
                if (o <= -1e21 || o >= 1e21) return l(o);
                if (o < 0 && (p = "-", o = -o), o > 1e-21) if (i = (t = function (e) {
                    for (var t = 0, i = e; i >= 4096;) t += 12, i /= 4096;
                    for (; i >= 2;) t += 1, i /= 2;
                    return t
                }(o * v(2, 69, 1)) - 69) < 0 ? o * v(2, -t, 1) : o / v(2, t, 1), i *= 4503599627370496, (t = 52 - t) > 0) {
                    for (m(h, 0, i), n = u; n >= 7;) m(h, 1e7, 0), n -= 7;
                    for (m(h, v(10, n, 1), 0), n = t - 1; n >= 23;) g(h, 1 << 23), n -= 23;
                    g(h, 1 << n), m(h, 1, 1), g(h, 2), _ = y(h)
                } else m(h, 0, i), m(h, 1 << -t, 0), _ = y(h) + f("0", u);
                return u > 0 ? p + ((r = _.length) <= u ? "0." + f("0", u - r) + _ : d(_, 0, r - u) + "." + d(_, r - u)) : p + _
            }
        })
    }, function (e, t, i) {
        var n = i(1);
        e.exports = n(1..valueOf)
    }, function (e, t, i) {
        "use strict";
        var n = i(1), r = i(24), a = i(12), s = i(11), o = i(77), u = i(90), c = Function, l = n([].concat),
            h = n([].join), f = {};
        e.exports = u ? c.bind : function (e) {
            var t = r(this), i = t.prototype, n = o(arguments, 1), u = function () {
                var i = l(n, o(arguments));
                return this instanceof u ? function (e, t, i) {
                    if (!s(f, t)) {
                        for (var n = [], r = 0; r < t; r++) n[r] = "a[" + r + "]";
                        f[t] = c("C,a", "return new C(" + h(n, ",") + ")")
                    }
                    return f[t](e, i)
                }(t, i.length, i) : t.apply(e, i)
            };
            return a(i) && (u.prototype = i), u
        }
    }, function (e, t, i) {
        var n = i(3), r = i(5), a = i(25), s = r("iterator");
        e.exports = !n((function () {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, i = "";
            return e.pathname = "c%20d", t.forEach((function (e, n) {
                t.delete("b"), i += n + e
            })), a && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://С‚РµСЃС‚").host || "#%D0%B1" !== new URL("http://a#Р±").hash || "a1c3" !== i || "x" !== new URL("http://x", void 0).host
        }))
    }, function (e, t, i) {
        var n = i(176), r = i(14);
        e.exports = function (e, t, i) {
            return i.get && n(i.get, t, {getter: !0}), i.set && n(i.set, t, {setter: !0}), r.f(e, t, i)
        }
    }, function (e, t, i) {
        "use strict";
        i(15);
        var n = i(2), r = i(4), a = i(9), s = i(1), o = i(10), u = i(217), c = i(19), l = i(200), h = i(30), f = i(192),
            d = i(26), p = i(96), v = i(6), m = i(11), g = i(70), y = i(37), _ = i(13), b = i(12), A = i(17), w = i(38),
            S = i(74), k = i(122), C = i(101), T = i(121), x = i(5), P = i(163), E = x("iterator"), B = d.set,
            M = d.getterFor("URLSearchParams"), R = d.getterFor("URLSearchParamsIterator"),
            I = Object.getOwnPropertyDescriptor, F = function (e) {
                if (!o) return r[e];
                var t = I(r, e);
                return t && t.value
            }, L = F("fetch"), O = F("Request"), D = F("Headers"), j = O && O.prototype, U = D && D.prototype, V = r.RegExp,
            N = r.TypeError, W = r.decodeURIComponent, H = r.encodeURIComponent, z = s("".charAt), q = s([].join),
            G = s([].push), Q = s("".replace), Y = s([].shift), K = s([].splice), J = s("".split), X = s("".slice),
            Z = /\+/g, $ = Array(4), ee = function (e) {
                return $[e - 1] || ($[e - 1] = V("((?:%[\\da-f]{2}){" + e + "})", "gi"))
            }, te = function (e) {
                try {
                    return W(e)
                } catch (t) {
                    return e
                }
            }, ie = function (e) {
                var t = Q(e, Z, " "), i = 4;
                try {
                    return W(t)
                } catch (e) {
                    for (; i;) t = Q(t, ee(i--), te);
                    return t
                }
            }, ne = /[!'()~]|%20/g, re = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
            ae = function (e) {
                return re[e]
            }, se = function (e) {
                return Q(H(e), ne, ae)
            }, oe = f((function (e, t) {
                B(this, {type: "URLSearchParamsIterator", iterator: k(M(e).entries), kind: t})
            }), "Iterator", (function () {
                var e = R(this), t = e.kind, i = e.iterator.next(), n = i.value;
                return i.done || (i.value = "keys" === t ? n.key : "values" === t ? n.value : [n.key, n.value]), i
            }), !0), ue = function (e) {
                this.entries = [], this.url = null, void 0 !== e && (b(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === z(e, 0) ? X(e, 1) : e : A(e)))
            };
        ue.prototype = {
            type: "URLSearchParams", bindURL: function (e) {
                this.url = e, this.update()
            }, parseObject: function (e) {
                var t, i, n, r, s, o, u, c = C(e);
                if (c) for (i = (t = k(e, c)).next; !(n = a(i, t)).done;) {
                    if (s = (r = k(_(n.value))).next, (o = a(s, r)).done || (u = a(s, r)).done || !a(s, r).done) throw N("Expected sequence with length 2");
                    G(this.entries, {key: A(o.value), value: A(u.value)})
                } else for (var l in e) m(e, l) && G(this.entries, {key: l, value: A(e[l])})
            }, parseQuery: function (e) {
                if (e) for (var t, i, n = J(e, "&"), r = 0; r < n.length;) (t = n[r++]).length && (i = J(t, "="), G(this.entries, {
                    key: ie(Y(i)),
                    value: ie(q(i, "="))
                }))
            }, serialize: function () {
                for (var e, t = this.entries, i = [], n = 0; n < t.length;) e = t[n++], G(i, se(e.key) + "=" + se(e.value));
                return q(i, "&")
            }, update: function () {
                this.entries.length = 0, this.parseQuery(this.url.query)
            }, updateURL: function () {
                this.url && this.url.update()
            }
        };
        var ce = function () {
            p(this, le);
            var e = arguments.length > 0 ? arguments[0] : void 0;
            B(this, new ue(e))
        }, le = ce.prototype;
        if (l(le, {
            append: function (e, t) {
                T(arguments.length, 2);
                var i = M(this);
                G(i.entries, {key: A(e), value: A(t)}), i.updateURL()
            }, delete: function (e) {
                T(arguments.length, 1);
                for (var t = M(this), i = t.entries, n = A(e), r = 0; r < i.length;) i[r].key === n ? K(i, r, 1) : r++;
                t.updateURL()
            }, get: function (e) {
                T(arguments.length, 1);
                for (var t = M(this).entries, i = A(e), n = 0; n < t.length; n++) if (t[n].key === i) return t[n].value;
                return null
            }, getAll: function (e) {
                T(arguments.length, 1);
                for (var t = M(this).entries, i = A(e), n = [], r = 0; r < t.length; r++) t[r].key === i && G(n, t[r].value);
                return n
            }, has: function (e) {
                T(arguments.length, 1);
                for (var t = M(this).entries, i = A(e), n = 0; n < t.length;) if (t[n++].key === i) return !0;
                return !1
            }, set: function (e, t) {
                T(arguments.length, 1);
                for (var i, n = M(this), r = n.entries, a = !1, s = A(e), o = A(t), u = 0; u < r.length; u++) (i = r[u]).key === s && (a ? K(r, u--, 1) : (a = !0, i.value = o));
                a || G(r, {key: s, value: o}), n.updateURL()
            }, sort: function () {
                var e = M(this);
                P(e.entries, (function (e, t) {
                    return e.key > t.key ? 1 : -1
                })), e.updateURL()
            }, forEach: function (e) {
                for (var t, i = M(this).entries, n = g(e, arguments.length > 1 ? arguments[1] : void 0), r = 0; r < i.length;) n((t = i[r++]).value, t.key, this)
            }, keys: function () {
                return new oe(this, "keys")
            }, values: function () {
                return new oe(this, "values")
            }, entries: function () {
                return new oe(this, "entries")
            }
        }, {enumerable: !0}), c(le, E, le.entries, {name: "entries"}), c(le, "toString", (function () {
            return M(this).serialize()
        }), {enumerable: !0}), h(ce, "URLSearchParams"), n({
            global: !0,
            constructor: !0,
            forced: !u
        }, {URLSearchParams: ce}), !u && v(D)) {
            var he = s(U.has), fe = s(U.set), de = function (e) {
                if (b(e)) {
                    var t, i = e.body;
                    if ("URLSearchParams" === y(i)) return t = e.headers ? new D(e.headers) : new D, he(t, "content-type") || fe(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), w(e, {
                        body: S(0, A(i)),
                        headers: S(0, t)
                    })
                }
                return e
            };
            if (v(L) && n({global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0}, {
                fetch: function (e) {
                    return L(e, arguments.length > 1 ? de(arguments[1]) : {})
                }
            }), v(O)) {
                var pe = function (e) {
                    return p(this, j), new O(e, arguments.length > 1 ? de(arguments[1]) : {})
                };
                j.constructor = pe, pe.prototype = j, n({
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                }, {Request: pe})
            }
        }
        e.exports = {URLSearchParams: ce, getState: M}
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(1), a = i(24), s = i(18), o = i(20), u = i(162), c = i(17), l = i(3), h = i(163), f = i(95),
            d = i(207), p = i(208), v = i(84), m = i(209), g = [], y = r(g.sort), _ = r(g.push), b = l((function () {
                g.sort(void 0)
            })), A = l((function () {
                g.sort(null)
            })), w = f("sort"), S = !l((function () {
                if (v) return v < 70;
                if (!(d && d > 3)) {
                    if (p) return !0;
                    if (m) return m < 603;
                    var e, t, i, n, r = "";
                    for (e = 65; e < 76; e++) {
                        switch (t = String.fromCharCode(e), e) {
                            case 66:
                            case 69:
                            case 70:
                            case 72:
                                i = 3;
                                break;
                            case 68:
                            case 71:
                                i = 4;
                                break;
                            default:
                                i = 2
                        }
                        for (n = 0; n < 47; n++) g.push({k: t + n, v: i})
                    }
                    for (g.sort((function (e, t) {
                        return t.v - e.v
                    })), n = 0; n < g.length; n++) t = g[n].k.charAt(0), r.charAt(r.length - 1) !== t && (r += t);
                    return "DGBEFHACIJK" !== r
                }
            }));
        n({target: "Array", proto: !0, forced: b || !A || !w || !S}, {
            sort: function (e) {
                void 0 !== e && a(e);
                var t = s(this);
                if (S) return void 0 === e ? y(t) : y(t, e);
                var i, n, r = [], l = o(t);
                for (n = 0; n < l; n++) n in t && _(r, t[n]);
                for (h(r, function (e) {
                    return function (t, i) {
                        return void 0 === i ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, i) || 0 : c(t) > c(i) ? 1 : -1
                    }
                }(e)), i = o(r), n = 0; n < i;) t[n] = r[n++];
                for (; n < l;) u(t, n++);
                return t
            }
        })
    }, function (e, t, i) {
        var n = i(2), r = i(1), a = Date, s = r(a.prototype.getTime);
        n({target: "Date", stat: !0}, {
            now: function () {
                return s(new a)
            }
        })
    }, function (e, t, i) {
        "use strict";
        i(167);
        var n = i(1), r = i(19), a = i(168), s = i(3), o = i(5), u = i(35), c = o("species"), l = RegExp.prototype;
        e.exports = function (e, t, i, h) {
            var f = o(e), d = !s((function () {
                var t = {};
                return t[f] = function () {
                    return 7
                }, 7 != ""[e](t)
            })), p = d && !s((function () {
                var t = !1, i = /a/;
                return "split" === e && ((i = {}).constructor = {}, i.constructor[c] = function () {
                    return i
                }, i.flags = "", i[f] = /./[f]), i.exec = function () {
                    return t = !0, null
                }, i[f](""), !t
            }));
            if (!d || !p || i) {
                var v = n(/./[f]), m = t(f, ""[e], (function (e, t, i, r, s) {
                    var o = n(e), u = t.exec;
                    return u === a || u === l.exec ? d && !s ? {done: !0, value: v(t, i, r)} : {
                        done: !0,
                        value: o(i, t, r)
                    } : {done: !1}
                }));
                r(String.prototype, e, m[0]), r(l, f, m[1])
            }
            h && u(l[f], "sham", !0)
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(152).charAt;
        e.exports = function (e, t, i) {
            return t + (i ? n(e, t).length : 1)
        }
    }, function (e, t, i) {
        var n = i(9), r = i(13), a = i(6), s = i(65), o = i(168), u = TypeError;
        e.exports = function (e, t) {
            var i = e.exec;
            if (a(i)) {
                var c = n(i, e, t);
                return null !== c && r(c), c
            }
            if ("RegExp" === s(e)) return n(o, e, t);
            throw u("RegExp#exec called on incompatible receiver")
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        t.default = function (e) {
            var t = r.default.create(e, "RingBuffer"), i = function () {
                function e(i) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), i <= 0 && t.error("invalid size in constructor " + i), this.buffer = [], this.size = i, this.start = 0
                }

                var i, n;
                return i = e, (n = [{
                    key: "push", value: function (e) {
                        this.buffer.length == this.size ? (this.buffer[this.start++] = e, this.start == this.size && (this.start = 0)) : this.buffer.push(e)
                    }
                }, {
                    key: "get", value: function (e) {
                        var i;
                        if (e >= 0 && e < this.buffer.length) {
                            var n = this.start + e;
                            n >= this.buffer.length && (n -= this.buffer.length), i = this.buffer[n]
                        } else if (e < 0 && -1 * e <= this.buffer.length) {
                            var r = this.start + e;
                            r < 0 && (r += this.buffer.length), i = this.buffer[r]
                        } else t.error("attempt to read from invalid index " + e);
                        return i
                    }
                }, {
                    key: "join", value: function (e) {
                        var t = "";
                        this.buffer.length > 0 && (t += this.buffer[this.start]);
                        for (var i = 1; i < this.buffer.length; i++) {
                            var n = this.start + i;
                            n >= this.buffer.length && (n -= this.buffer.length), t += e + this.buffer[n]
                        }
                        return t
                    }
                }, {
                    key: "mean", value: function () {
                        for (var e = 0, t = 0; t < this.buffer.length; t++) e += this.buffer[t];
                        return 0 === e ? e : e / this.buffer.length
                    }
                }, {
                    key: "clear", value: function () {
                        this.buffer = [], this.start = 0
                    }
                }, {
                    key: "drop", value: function () {
                        this.buffer = [], this.size = 0, this.start = 0
                    }
                }, {
                    key: "length", value: function () {
                        return this.buffer.length
                    }
                }]) && a(i.prototype, n), Object.defineProperty(i, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e) {
                    return new i(e)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n = i(23), r = s(i(8)), a = s(i(111));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var u = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._id = t, this._logger = r.default.create(t, "AudioGraphController")
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e, t) {
                    this._audioCtx || (this._audioCtx = a.default.getInstance(this._id).get(), this._source = this._audioCtx.createMediaElementSource(e), this._source.channelCount = t, this._source.connect(this._audioCtx.destination))
                }
            }, {
                key: "addMediaSourceChain", value: function (e, t) {
                    if (!this._mediaSourceChain) {
                        var i, n, r = [this._audioCtx.destination];
                        for (this._vumeterChain && (r = this._vumeterChain[0]), i = 0; i < r.length; i++) this._source.disconnect("dest" === r[i] ? this._audioCtx.destination : r[i]);
                        for (i = 0; i < e.length; i++) this._source.connect(e[i]);
                        for (i = 0; i < t.length; i++) for (n = 0; n < r.length; n++) t[i].connect("dest" === r[n] ? this._audioCtx.destination : r[n]);
                        this._mediaSourceChain = [e, t]
                    }
                }
            }, {
                key: "removeMediaSourceChain", value: function () {
                    if (this._mediaSourceChain) {
                        var e, t, i = [this._audioCtx.destination];
                        this._vumeterChain && (i = this._vumeterChain[0]);
                        var n = this._mediaSourceChain[0];
                        for (e = 0; e < n.length; e++) this._source.disconnect(n[e]);
                        var r = this._mediaSourceChain[1];
                        for (e = 0; e < r.length; e++) for (t = 0; t < i.length; t++) r[e].disconnect("dest" === i[t] ? this._audioCtx.destination : i[t]);
                        for (e = 0; e < i.length; e++) this._source.connect("dest" === i[e] ? this._audioCtx.destination : i[e]);
                        this._mediaSourceChain = void 0
                    }
                }
            }, {
                key: "addVumeterChain", value: function (e, t) {
                    if (!this._vumeterChain) {
                        var i, n, r = [this._source];
                        if (this._mediaSourceChain) {
                            var a = this._mediaSourceChain[1];
                            for (i = 0; i < a.length; i++) a[i].disconnect(this._audioCtx.destination);
                            r = a
                        } else this._source.disconnect(this._audioCtx.destination);
                        for (i = 0; i < r.length; i++) for (n = 0; n < e.length; n++) r[i].connect("dest" === e[n] ? this._audioCtx.destination : e[n]);
                        for (i = 0; i < t.length; i++) t[i].connect(this._audioCtx.destination);
                        this._vumeterChain = [e, t]
                    }
                }
            }, {
                key: "removeVumeterChain", value: function () {
                    if (this._vumeterChain) {
                        var e, t, i = [this._source];
                        this._mediaSourceChain && (i = this._mediaSourceChain[1]);
                        var n = this._vumeterChain[0];
                        for (e = 0; e < i.length; e++) {
                            for (t = 0; t < n.length; t++) i[e].disconnect(n[t]);
                            i[e].connect(this._audioCtx.destination)
                        }
                        var r = this._vumeterChain[1];
                        for (e = 0; e < r.length; e++) r[e].disconnect(this._audioCtx.destination);
                        this._vumeterChain = void 0
                    }
                }
            }]) && o(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), c = (0, n.multiInstanceHolder)(u);
        t.default = c
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(21), i(15), i(39), i(16), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(169), i(33), i(32);
        var n = a(i(310)), r = a(i(8));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = function (e) {
            var t = r.default.create(e, "BoxComposer");

            function i(e) {
                var i = [], r = 1, a = [], s = !!e.fragmentFullGop;

                function o(e, i) {
                    switch (e.codecData = i.codecData, e.type) {
                        case"video":
                            !function (e, i) {
                                var n = i.codec.substring(0, 4);
                                switch (n) {
                                    case"AVC1":
                                    case"AVC2":
                                    case"HVC1":
                                    case"HEV1":
                                        e.codec = n;
                                        break;
                                    default:
                                        t.error("Unknown video codec " + i.codec + ". Trying to substitute with AVC1"), e.codec = "AVC1"
                                }
                            }(e, i);
                            break;
                        case"audio":
                            !function (e, i) {
                                switch (i.codec) {
                                    case"MP4A.40.34":
                                        e.codec = "MP3", function (e) {
                                            if (e.codecData) {
                                                var i = e.codecData;
                                                if (255 == (255 & i[0]) && 224 == (224 & i[1])) {
                                                    var n = i[1] >> 3 & 3;
                                                    1 == n && (n = 0);
                                                    var r = i[1] >> 1 & 3;
                                                    if (0 != r) {
                                                        e.samplesPerFrame = [[0, 576, 1152, 384], [0, 0, 0, 0], [0, 576, 1152, 384], [0, 1152, 1152, 384]][n][r];
                                                        var a = i[2] >> 4 & 21;
                                                        e.bitrate = [[[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 8192, 8192, 32768], [0, 0, 0, 0], [0, 8192, 8192, 32768], [0, 32768, 32768, 32768]], [[0, 16384, 16384, 49152], [0, 0, 0, 0], [0, 16384, 16384, 49152], [0, 40960, 49152, 65536]], [[0, 24576, 24576, 57344], [0, 0, 0, 0], [0, 24576, 24576, 57344], [0, 49152, 57344, 98304]], [[0, 32768, 32768, 65536], [0, 0, 0, 0], [0, 32768, 32768, 65536], [0, 57344, 65536, 131072]], [[0, 40960, 40960, 81920], [0, 0, 0, 0], [0, 40960, 40960, 81920], [0, 65536, 81920, 163840]], [[0, 49152, 49152, 98304], [0, 0, 0, 0], [0, 49152, 49152, 98304], [0, 81920, 98304, 196608]], [[0, 57344, 57344, 114688], [0, 0, 0, 0], [0, 57344, 57344, 114688], [0, 98304, 114688, 229376]], [[0, 65536, 65536, 131072], [0, 0, 0, 0], [0, 65536, 65536, 131072], [0, 114688, 131072, 262144]], [[0, 81920, 81920, 147456], [0, 0, 0, 0], [0, 81920, 81920, 147456], [0, 131072, 163840, 294912]], [[0, 98304, 98304, 163840], [0, 0, 0, 0], [0, 98304, 98304, 163840], [0, 163840, 196608, 327680]], [[0, 114688, 114688, 180224], [0, 0, 0, 0], [0, 114688, 114688, 180224], [0, 196608, 229376, 360448]], [[0, 131072, 131072, 196608], [0, 0, 0, 0], [0, 131072, 131072, 196608], [0, 229376, 262144, 393216]], [[0, 147456, 147456, 229376], [0, 0, 0, 0], [0, 147456, 147456, 229376], [0, 262144, 327680, 425984]], [[0, 163840, 163840, 262144], [0, 0, 0, 0], [0, 163840, 163840, 262144], [0, 327680, 393216, 458752]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]][a][n][r];
                                                        var s = i[2] >> 2 & 3;
                                                        e.samplingRate = [[11025, 0, 22050, 44100], [12e3, 0, 24e3, 48e3], [8e3, 0, 16e3, 32e3], [0, 0, 0, 0]][s][n];
                                                        var o, u, c = i[3] >> 6 & 3;
                                                        switch (e.audioChannels = 3 == c ? 1 : 2, e.silence = void 0, e.audioChannels) {
                                                            case 2:
                                                                switch (u = (o = [255, 251, null, 100, null, 143, 240, 0, 0, 105, 0, 0, 0, 8, 0, 0, 13, 32, 0, 0, 1, 0, 0, 1, 164, 0, 0, 0, 32, 0, 0, 52, 128, 0, 0, 4]).length, e.samplingRate) {
                                                                    case 48e3:
                                                                        o[2] = 148, o[4] = 81, u += 348;
                                                                        break;
                                                                    case 44100:
                                                                        o[2] = 146, o[4] = 64, u += 382;
                                                                        break;
                                                                    case 32e3:
                                                                        o[2] = 120, o[4] = 57, u += 396;
                                                                        break;
                                                                    default:
                                                                        return void t.error("sampling rate " + e.samplingRate + " is not supported")
                                                                }
                                                                break;
                                                            case 1:
                                                                switch (u = (o = [255, 251, null, 196, null, null, 192, 0, 1, 164, 0, 0, 0, 32, 0, 0, 52, 128, 0, 0, 4]).length, e.samplingRate) {
                                                                    case 48e3:
                                                                        o[2] = 84, o[4] = 170, o[5] = 3, u += 171;
                                                                        break;
                                                                    case 44100:
                                                                        o[2] = 82, o[4] = 161, o[5] = 131, u += 188;
                                                                        break;
                                                                    case 32e3:
                                                                        o[2] = 56, o[4] = 158, o[5] = 3, u += 195;
                                                                        break;
                                                                    default:
                                                                        return void t.error("sampling rate " + e.samplingRate + " is not supported")
                                                                }
                                                        }
                                                        if (u) {
                                                            e.silence = new Uint8Array(u);
                                                            var l = 0;
                                                            for (l = 0; l < o.length; l++) e.silence[l] = o[l];
                                                            for (l = o.length; l < u; l++) e.silence[l] = 85;
                                                            t.debug("MP3 track codec data", e.samplingRate, e.samplesPerFrame, e.audioChannels)
                                                        }
                                                    }
                                                }
                                            }
                                        }(e);
                                        break;
                                    default:
                                        e.codec = "AAC", function (e) {
                                            if (e.codecData) {
                                                var i, n = [1024, 960], r = e.codecData, a = r[0] >> 3;
                                                switch (i = 31 == a ? r[1] >> 1 & 15 : (7 & r[0]) << 1 | r[1] >> 7, e.bitrate = 0, 15 == i ? 31 == a ? (e.samplingRate = ((1 & r[1]) << 7 | r[2] >> 1) << 16 | ((1 & r[2]) << 7 | r[3] >> 1) << 8 | (1 & r[3]) << 7 | r[4] >> 1, e.audioChannels = (1 & r[4]) << 3 | r[5] >> 5, e.samplesPerFrame = n[(16 & r[5]) >> 4]) : (e.samplingRate = ((127 & r[1]) << 1 | r[2] >> 7) << 16 | ((127 & r[2]) << 1 | r[3] >> 7) << 8 | (127 & r[3]) << 1 | r[4] >> 7, e.audioChannels = (120 & r[4]) >> 3, e.samplesPerFrame = n[(4 & r[4]) >> 2]) : (e.samplingRate = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350][i], 31 == a ? (e.audioChannels = (1 & r[1]) << 3 | r[2] >> 5, e.samplesPerFrame = n[(16 & r[2]) >> 4]) : (e.audioChannels = (120 & r[1]) >> 3, e.samplesPerFrame = n[(4 & r[1]) >> 2])), e.audioChannels) {
                                                    case 8:
                                                        e.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 4, 162, 0, 140, 17, 129, 132, 96, 0, 28]);
                                                        break;
                                                    case 6:
                                                        e.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 12, 35, 0, 0, 224]);
                                                        break;
                                                    case 5:
                                                        e.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 35, 16, 4, 96, 140, 28]);
                                                        break;
                                                    case 4:
                                                        e.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 3, 24, 32, 7]);
                                                        break;
                                                    case 3:
                                                        e.silence = new Uint8Array([1, 24, 32, 1, 8, 128, 35, 4, 96, 224]);
                                                        break;
                                                    case 2:
                                                        e.silence = new Uint8Array([33, 16, 4, 96, 140, 28]);
                                                        break;
                                                    default:
                                                        e.silence = new Uint8Array([1, 24, 32, 7])
                                                }
                                                t.debug("AAC track codec data, AOT: " + a + " sRate: " + e.samplingRate + " sPerFrame: " + e.samplesPerFrame + " chCount: " + e.audioChannels)
                                            }
                                        }(e)
                                }
                                e.tsPerFrame = e.samplesPerFrame / e.samplingRate * e.timescale
                            }(e, i)
                    }
                }

                function u(e, i, n) {
                    var r = n.prevSamplCntTs + i.samplesPerFrame, a = n.nextSamplCntTs - r;
                    if (a >= i.samplesPerFrame && a <= 10 * i.samplingRate) {
                        t.debug("recover audio gap effShift = ".concat(a, ", prevTs = ").concat(n.prevTs, ", prevSamplCntTs = ").concat(n.prevSamplCntTs, ", nextSamplCntTs = ").concat(n.nextSamplCntTs));
                        for (var s = Math.floor(a / i.samplesPerFrame), o = n.prevTs, u = 0; u < s; u++) {
                            o += i.tsPerFrame;
                            var c = {
                                data: n.data,
                                sap: !0,
                                ts: o,
                                offset: 0,
                                samplCntTs: r,
                                samplCntDur: i.samplesPerFrame
                            };
                            e.push(c), r += i.samplesPerFrame
                        }
                        t.warn("adding dummy frames", e.length - 1, r, n.nextSamplCntTs)
                    }
                    return r
                }

                function c(e, t) {
                    return t < 0 || t > 10 * e.timescale
                }

                function l(e, i, n) {
                    var r = !1;
                    if (e.isAudio && e.lastSilenceSampleTs > 0 && null !== n) {
                        var a = e.lastSilenceSampleTs - i;
                        a >= 0 ? a < 5 * e.timescale && (t.debug("Ignore real frames after mute", i, e.lastSilenceSampleTs), r = !0) : e.lastSilenceSampleTs = 0
                    }
                    return r
                }

                function h(e, i, n, r, o) {
                    if (l(e, r, n)) return [];
                    var h = [], f = !1, d = e.lastSample, p = r - d.rawts;
                    c(e, p) ? (t.debug("Incorrect DTS difference (".concat(p, ") between previous (ts: ").concat(d.rawts, ", offset: ").concat(d.offset, ", sap: ").concat(d.sap, ") and current frame (ts: ").concat(r, ", offset: ").concat(o, ", sap: ").concat(i, ")")), p = e.lastSampleDuration) : 0 !== p || e.isAudio || d.offset !== o ? s && !i && (f = !0) : (t.debug("Keep zero duration video sample"), f = !0);
                    var v = r;
                    if (r = d.ts + p, p > 0 && (e.lastSampleDuration = p), d.duration = p, l(e, r, n)) return [];
                    e.isAudio && e.alignBase && (e.prevSample && (u(h, e, {
                        prevTs: e.prevSample.ts,
                        prevSamplCntTs: e.prevSample.samplCntTs,
                        nextSamplCntTs: d.samplCntTs,
                        data: e.silence ? e.silence : d.data
                    }), e.prevSample = void 0), e.alignBase = void 0), h.push(d);
                    var m = 0;
                    e.isAudio && (m = u(h, e, {
                        prevTs: d.ts,
                        prevSamplCntTs: d.samplCntTs,
                        nextSamplCntTs: e.sampleCountFromTs(r),
                        data: e.silence ? e.silence : d.data
                    }), d.samplCntDur = e.samplesPerFrame);
                    var g = n;
                    if (null === g && e.isAudio && (g = e.silence, e.lastSilenceSampleTs = r), e.lastSample = {
                        data: g,
                        sap: i,
                        ts: r,
                        rawts: v,
                        offset: o,
                        samplCntTs: m
                    }, f || a.length > 0) {
                        for (var y = 0; y < h.length; y++) a.push(h[y]);
                        f ? h = [] : (h = a, a = [])
                    }
                    return h
                }

                function f(e) {
                    for (var n, r = 0; r < i.length; r++) if (i[r].id == e) {
                        n = i[r];
                        break
                    }
                    return void 0 === n && t.error("track ID " + e + " is not found!"), n
                }

                function d(e, t) {
                    var i = n.default.createFullBox("tkhd", t);
                    switch (i.flags = 7, i.creation_time = 0, i.modification_time = 0, i.track_ID = e.id, i.reserved1 = 0, i.duration = 0, i.reserved2 = [0, 0], i.layer = 0, i.alternate_group = 0, i.reserved3 = 0, i.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], e.type) {
                        case"video":
                            i.volume = 0, i.width = e.width, i.height = e.height, i.flags |= 8;
                            break;
                        case"audio":
                            i.volume = 1, i.width = 0, i.height = 0
                    }
                    return i
                }

                function p(e) {
                    return e.isAudio ? e.samplingRate : e.timescale
                }

                function v(e, t) {
                    var i = n.default.createFullBox("mdhd", t);
                    return i.creation_time = 0, i.modification_time = 0, i.duration = 0, i.language = "und", i.pre_defined = 0, i.timescale = p(e), i
                }

                function m(e, t) {
                    var i = n.default.createFullBox("hdlr", t);
                    switch (i.pre_defined = 0, e.type) {
                        case"video":
                            i.handler_type = "vide", i.name = "VideoHandler";
                            break;
                        case"audio":
                            i.handler_type = "soun", i.name = "AudioHandler"
                    }
                    return i.reserved = [0, 0, 0], i
                }

                function g(e) {
                    var t = n.default.createFullBox("vmhd", e);
                    return t.flags = 1, t.graphicsmode = 0, t.opcolor = [0, 0, 0], t
                }

                function y(e) {
                    var t = n.default.createFullBox("smhd", e);
                    return t.balance = 0, t.reserved = 0, t
                }

                function _(e) {
                    var t = n.default.createFullBox("dref", e);
                    t.entry_count = 1, t.entries = [];
                    var i = n.default.createFullBox("url ", t, -1);
                    return i.location = "", i.flags = 1, t.entries.push(i), t
                }

                function b(e, t) {
                    var i = n.default.createFullBox("trex", t);
                    return i.track_ID = e.id, i.default_sample_description_index = 1, i.default_sample_duration = 0, i.default_sample_size = 0, i.default_sample_flags = e.isAudio ? 0 : 65536, i
                }

                function A(e, i) {
                    var r = n.default.createFullBox("stsd", i);
                    return r.entry_count = 1, r.entries = [], r.entries.push(function (e, i) {
                        switch (e.codec) {
                            case"AVC1":
                            case"AVC2":
                                return e.seBox = e.codec.toLowerCase(), e.configName = "avcC", e.compressorname = "AVC Coding", w(e, i);
                            case"HVC1":
                            case"HEV1":
                                return e.seBox = e.codec.toLowerCase(), e.configName = "hvcC", e.compressorname = "SHVC Coding", w(e, i);
                            case"AAC":
                                return function (e, t) {
                                    var i = n.default.createBox("mp4a", t, -1);
                                    return i.reserved1 = [0, 0, 0, 0, 0, 0], i.data_reference_index = 1, i.reserved2 = [0, 0], i.channelcount = e.audioChannels, i.samplesize = 16, i.pre_defined = 0, i.reserved_3 = 0, i.samplerate = e.samplingRate << 16, i.esds = "AAC" == e.codec ? function (e) {
                                        var t = 37 + e.codecData.byteLength, i = new Uint8Array(t), n = 0;
                                        return i[n++] = (4278190080 & t) >> 24, i[n++] = (16711680 & t) >> 16, i[n++] = (65280 & t) >> 8, i[n++] = 255 & t, i.set([101, 115, 100, 115], n), n += 4, i.set([0, 0, 0, 0], n), n += 4, i[n++] = 3, i[n++] = 23 + e.codecData.byteLength, i[n++] = (65280 & e.id) >> 8, i[n++] = 255 & e.id, i[n++] = 0, i[n++] = 4, i[n++] = 15 + e.codecData.byteLength, i[n++] = 64, i[n] = 20, i[n] |= 0, i[n++] |= 1, i[n++] = 255, i[n++] = 255, i[n++] = 255, i.set([0, 0, 0, 0, 0, 0, 0, 0], n), n += 8, i[n++] = 5, i[n++] = e.codecData.byteLength, i.set(e.codecData, n), n += e.codecData.byteLength, i[n++] = 6, i[n++] = 1, i[n] = 2, i
                                    }(e) : function (e) {
                                        var t = new Uint8Array(35), i = 0;
                                        return t[i++] = 0, t[i++] = 0, t[i++] = 0, t[i++] = 35, t.set([101, 115, 100, 115], i), i += 4, t.set([0, 0, 0, 0], i), i += 4, t[i++] = 3, t[i++] = 21, t[i++] = (65280 & e.id) >> 8, t[i++] = 255 & e.id, t[i++] = 0, t[i++] = 4, t[i++] = 13, t[i++] = 107, t[i] = 20, t[i] |= 0, t[i++] |= 1, t[i++] = 255, t[i++] = 255, t[i++] = 255, t[i++] = (4278190080 & e.bitrate) >> 24, t[i++] = (16711680 & e.bitrate) >> 16, t[i++] = (65280 & e.bitrate) >> 8, t[i++] = 255 & e.bitrate, t[i++] = (4278190080 & e.bitrate) >> 24, t[i++] = (16711680 & e.bitrate) >> 16, t[i++] = (65280 & e.bitrate) >> 8, t[i++] = 255 & e.bitrate, t[i++] = 6, t[i++] = 1, t[i] = 2, t
                                    }(e), i
                                }(e, i);
                            case"MP3":
                                return function (e, t) {
                                    var i = n.default.createBox(".mp3", t, -1);
                                    i.reserved1 = [0, 0, 0, 0, 0, 0], i.data_reference_index = 1, i.reserved2 = [0, 0], i.channelcount = e.audioChannels, i.samplesize = 16, i.pre_defined = 0, i.reserved_3 = 0, i.samplerate = e.samplingRate << 16, i.entry_count = 1, i.entries = [];
                                    var r = n.default.createBox("btrt", i, -1);
                                    return r.bufferSizeDB = 4294967295, r.maxBitrate = e.bitrate, r.avgBitrate = e.bitrate, i.entries.push(r), i
                                }(e, i);
                            default:
                                t.error("Unsupported codec: ", e.codec)
                        }
                    }(e, r)), r
                }

                function w(e, i) {
                    var r = n.default.createBox(e.seBox, i, -1);
                    r.reserved1 = [0, 0, 0, 0, 0, 0], r.data_reference_index = 1, r.pre_defined1 = 0, r.reserved2 = 0, r.pre_defined2 = [0, 0, 0], r.width = e.width, r.height = e.height, r.horizresolution = 72, r.vertresolution = 72, r.reserved3 = 0, r.frame_count = 1, r.compressorname = [e.compressorname.length];
                    for (var a = 0; a < 31; a++) r.compressorname[a + 1] = a < e.compressorname.length ? 127 & e.compressorname.charCodeAt(a) : 0;
                    return r.depth = 24, r.pre_defined3 = 65535, r.config = function (e) {
                        if (e.codecData) {
                            var i = e.codecData.byteLength + 8, n = new Uint8Array(i), r = 0;
                            n[r++] = (4278190080 & i) >> 24, n[r++] = (16711680 & i) >> 16, n[r++] = (65280 & i) >> 8, n[r++] = 255 & i;
                            for (var a = 0; a < e.configName.length; a++) n[r++] = 127 & e.configName.charCodeAt(a);
                            return n.set(e.codecData, r), n
                        }
                        t.error("No codec data specified!")
                    }(e), r
                }

                this.reset = function () {
                    i = [], r = 1, a = []
                }, this.free = function () {
                }, this.isReady = function () {
                    return !0
                }, this.addTrack = function (e, n) {
                    var a = {
                        id: r,
                        type: e,
                        isAudio: "audio" == e,
                        curSeqNumber: 0,
                        lastSampleDuration: 0,
                        lastSilenceSampleTs: 0,
                        sampleCountFromTs: function (e) {
                            return Math.floor(this.samplingRate / this.timescale * e + .5)
                        }
                    };
                    return t.setPrefix("BoxComposer " + e), n && ("video" == e && (a.width = "width" in n ? n.width : 0, a.height = "height" in n ? n.height : 0), a.timescale = "timescale" in n ? n.timescale : 1e3, "codec" in n && (n.codec = n.codec.toUpperCase()), "codecData" in n && o(a, n)), i.push(a), r++, a
                }, this.setTrackParams = function (e, i) {
                    var n = f(e);
                    return n && ("codec" in i && (i.codec = i.codec.toUpperCase()), "width" in i && (n.width = i.width), "height" in i && (n.height = i.height), "timescale" in i && (n.timescale = i.timescale), "codecData" in i && (a = [], n.lastSample = void 0, o(n, i)), "sequenceNumber" in i && (n.curSeqNumber = i.sequenceNumber), "alignBase" in i && (n.alignBase = i.alignBase), "syncBase" in i && (n.syncBase = i.syncBase), t.debug("setTrackParams: ", e, i)), n
                }, this.getTrackSampleDuration = function (e, t) {
                    var i, n = f(e);
                    return n && (i = n.tsPerFrame), i
                }, this.getTrackAudioInfo = function (e) {
                    var t, i = f(e);
                    return i && (t = {samplingRate: i.samplingRate, channels: i.audioChannels}), t
                }, this.isTrackSilent = function (e) {
                    var t, i = f(e);
                    return i && i.isAudio && (t = i.lastSilenceSampleTs > 0), t
                }, this.setBaseSample = function (e, i, n, r) {
                    var a = f(e);
                    if (a) {
                        var s = n;
                        if (a.syncBase) {
                            if (a.syncSample) {
                                var o = n - a.syncSample.rawts;
                                c(o) && (t.debug("setBaseSample discontinuity: " + o, n, a.syncSample.ts, a.syncSample.rawts, a.lastSampleDuration), o = a.lastSampleDuration), n = a.syncSample.ts + o, a.syncSample = void 0
                            }
                            a.syncBase = void 0
                        }
                        var u = i, l = 0;
                        a.isAudio && (a.lastSilenceSampleTs = 0, null === u && (u = a.silence, a.lastSilenceSampleTs = n), l = a.sampleCountFromTs(n)), a.lastSample = {
                            data: u,
                            sap: !0,
                            ts: n,
                            rawts: s,
                            offset: r,
                            samplCntTs: l,
                            samplCntDur: a.samplesPerFrame
                        }, t.debug("setBaseSample: ", n, r, a.lastSample.samplCntTs, a.lastSample.samplCntDur)
                    } else t.error("setBaseSample: track " + e + " not found!!!")
                }, this.getRealTs = function (e, i) {
                    var n = i, r = f(e);
                    if (r) {
                        if (r.lastSample) {
                            var a = r.lastSample.ts - r.lastSample.rawts;
                            0 !== a && (a > 0 && i < r.lastSample.ts || i >= r.lastSample.rawts) && (n = i + a)
                        }
                    } else t.error("getRealTs: track ".concat(e, " not found"));
                    return n
                }, this.initSegment = function () {
                    var e = n.default.createFile();
                    return function (e) {
                        var t = n.default.createBox("ftyp", e);
                        t.major_brand = "isom", t.minor_version = 1, t.compatible_brands = [], t.compatible_brands[0] = "isom", t.compatible_brands[1] = "avc1", t.compatible_brands[2] = "dash"
                    }(e), function (e) {
                        var t = n.default.createBox("moov", e);
                        !function (e) {
                            var t = n.default.createFullBox("mvhd", e);
                            t.creation_time = 0, t.modification_time = 0, t.timescale = 1e3, t.duration = 0, t.rate = 1, t.volume = 1, t.reserved1 = 0, t.reserved2 = [0, 0], t.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 16384], t.pre_defined = [0, 0, 0, 0, 0, 0], t.next_track_ID = r
                        }(t);
                        var a = n.default.createBox("mvex", t);
                        !function (e) {
                            n.default.createFullBox("mehd", e).fragment_duration = 0
                        }(a);
                        for (var s = 0; s < i.length; s++) {
                            var o = i[s], u = n.default.createBox("trak", t);
                            d(o, u);
                            var c = n.default.createBox("mdia", u);
                            v(o, c), m(o, c);
                            var l = n.default.createBox("minf", c);
                            switch (o.type) {
                                case"video":
                                    g(l);
                                    break;
                                case"audio":
                                    y(l)
                            }
                            _(n.default.createBox("dinf", l));
                            var h = n.default.createBox("stbl", l);
                            n.default.createFullBox("stts", h)._data = [0, 0, 0, 0, 0, 0, 0, 0], n.default.createFullBox("ctts", h)._data = [0, 0, 0, 0, 0, 0, 0, 0], n.default.createFullBox("stsc", h)._data = [0, 0, 0, 0, 0, 0, 0, 0], n.default.createFullBox("stco", h)._data = [0, 0, 0, 0, 0, 0, 0, 0], n.default.createFullBox("stsz", h)._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], A(o, h), b(o, a)
                        }
                    }(e), e.write()
                }, this.mediaSegment = function (e, i, r) {
                    var s, o = f(e), u = [], c = [];
                    if (o) {
                        for (var l = [], d = 0; d < i.length; d++) if (o.lastSample) for (var v = h(o, i[d].sap, i[d].data, i[d].ts, i[d].offset), m = 0; m < v.length; m++) l.push(v[m]), u.push(v[m].ts), c.push(v[m].sap); else t.error("mediaSegment is executed while no base sample is set. Compelled setting of base sample: ", i[d].sap, i[d].ts, i[d].offset), i[d].sap && this.setBaseSample(e, i[d].data, i[d].ts, i[d].offset);
                        if (r && void 0 !== o.lastSample) {
                            for (var g = 0; g < a.length; g++) l.push(a[g]), u.push(a[g].ts), c.push(a[g].sap);
                            a = [], o.lastSample.duration = o.lastSampleDuration, t.debug("Push last sample, ts = ".concat(o.lastSample.ts, ", duration = ").concat(o.lastSample.duration)), l.push(o.lastSample), u.push(o.lastSample.ts), c.push(o.lastSample.sap), o.alignBase && (o.prevSample = {
                                ts: o.lastSample.ts,
                                samplCntTs: o.lastSample.samplCntTs
                            }), o.syncBase && (o.syncSample = {
                                ts: o.lastSample.ts,
                                rawts: o.lastSample.rawts
                            }), o.lastSample = void 0
                        }
                        if (l.length > 0) {
                            var y = n.default.createFile(), _ = function (e, t, i) {
                                var r = n.default.createBox("sidx", e);
                                r.flags = 0, r.version = 1, r.reference_ID = t.id, r.timescale = p(t), r.first_offset = 0, r.reserved = 0, r.earliest_presentation_time = t.isAudio ? i[0].samplCntTs : i[0].ts + i[0].offset, r.reference_count = 1;
                                for (var a = !1, s = 0, o = 0, u = 0, c = 0, l = 0; l < i.length; l++) s += i[l].data.byteLength, !a && i[l].sap && (a = !0, c = o), o += i[l].duration, u += i[l].samplCntDur;
                                return r.references = [{
                                    reference_type: 0,
                                    referenced_size: s,
                                    subsegment_duration: t.isAudio ? u : o,
                                    starts_with_SAP: i[0].sap ? 1 : 0,
                                    SAP_type: a ? 1 : 0,
                                    SAP_delta_time: c
                                }], r
                            }(y, o, l), b = function (e, t, i) {
                                var r = n.default.createBox("moof", e);
                                n.default.createFullBox("mfhd", r).sequence_number = t.curSeqNumber++;
                                var a = n.default.createBox("traf", r), s = n.default.createFullBox("tfhd", a);
                                s.track_ID = t.id, s.flags = 131072;
                                var o = n.default.createFullBox("tfdt", a, s);
                                o.version = 1, o.flags = 0;
                                var u = n.default.createFullBox("trun", a, o);
                                if (u.sample_count = i.length, u.samples = [], t.isAudio) {
                                    o.baseMediaDecodeTime = i[0].samplCntTs, u.flags = 769;
                                    for (var c = 0; c < i.length; c++) u.samples.push({
                                        sample_duration: i[c].samplCntDur,
                                        sample_size: i[c].data.byteLength
                                    })
                                } else {
                                    o.baseMediaDecodeTime = i[0].ts, u.flags = 2821, u.first_sample_flags = 0;
                                    for (var l = 0; l < i.length; l++) u.samples.push({
                                        sample_duration: i[l].duration,
                                        sample_size: i[l].data.byteLength,
                                        sample_composition_time_offset: i[l].offset
                                    })
                                }
                                return u.data_offset = r.getLength() + 8, r
                            }(y, o, l);
                            n.default.createBox("mdat", y).data = function (e, t) {
                                var i;
                                if (e.length > 1) {
                                    i = new Uint8Array(t);
                                    for (var n = 0, r = 0; r < e.length; r++) i.set(e[r].data, n), n += e[r].data.length
                                } else i = e[0].data;
                                return i
                            }(l, _.references[0].referenced_size), _.references[0].referenced_size += 8 + b.getLength(), s = {
                                ts: u,
                                sap: c,
                                sn: o ? o.curSeqNumber - 1 : void 0,
                                data: y.write()
                            }
                        }
                    }
                    return s
                }
            }

            return {
                create: function (e) {
                    return new i(e)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(112), i(78), i(79), i(16), i(80), i(15), i(31), i(32);
        var r = {
            appendBox: function (e, t, i) {
                if (t._root = e._root ? e._root : e, t._parent = e, -1 !== i) if (null != i) {
                    var r, a = -1;
                    if ("number" == typeof i) a = i; else {
                        if ("string" == typeof i) r = i; else {
                            if ("object" !== n(i) || !i.type) return void e.boxes.push(t);
                            r = i.type
                        }
                        for (var s = 0; s < e.boxes.length; s++) if (r === e.boxes[s].type) {
                            a = s + 1;
                            break
                        }
                    }
                    e.boxes.splice(a, 0, t)
                } else e.boxes.push(t)
            }
        };
        t.default = r
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(21), i(170), i(33), i(64), i(0);
        var n = i(23), r = u(i(230)), a = u(i(231)), s = u(i(109)), o = u(i(8));

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function c(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var l = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._captions = {}, this._renderer = r.default.getInstance(t), this._captionManager = a.default.getInstance(t), this._playbackService = s.default.getInstance(t), this._logger = o.default.create(t, "Caption Presenter")
            }

            var t, i;
            return t = e, (i = [{
                key: "start", value: function () {
                    this._enabled || (this._enabled = !0, this._renderable && (this._captions[this._activeCaptionId] = [], this._createDispatchTimer()))
                }
            }, {
                key: "stop", value: function () {
                    this._enabled = !1, this._dispatchTimer && (clearTimeout(this._dispatchTimer), this._dispatchTimer = void 0)
                }
            }, {
                key: "deinit", value: function () {
                    this.stop(), this._captions = {}
                }
            }, {
                key: "setRenderable", value: function (e) {
                    this._renderable = e
                }
            }, {
                key: "setCallback", value: function (e, t) {
                    "onCaptionsArrived" === e && (this._onCaptionsArrived = t)
                }
            }, {
                key: "setCaptionReportInterface", value: function (e) {
                    this._captionReport = e
                }
            }, {
                key: "setActiveCaptionId", value: function (e) {
                    this._activeCaptionId !== e && (this._activeCaptionId && (this._captions[this._activeCaptionId] = []), this._activeCaptionId = e, this._activeCaptionId ? this._enabled || this.start() : this.stop())
                }
            }, {
                key: "activateCaptionTrack", value: function (e) {
                    this._captionReport.captionArrived(e)
                }
            }, {
                key: "addCaptions", value: function (e, t, i) {
                    if (this._enabled && e === this._activeCaptionId) {
                        var n = this._renderer.createCaptionRegionsFromScreen(i);
                        if (this._onCaptionsArrived && this._onCaptionsArrived(this._buildSdkCaptionsArrayFrom(n, t)), this._renderable) {
                            this._captions[e] || (this._captions[e] = []);
                            var r = this._renderer.createHTMLCaptionsFromRegions(n, t, -1);
                            this._captions[e] = this._captions[e].concat(r), this._dispatchCaptions()
                        }
                    }
                }
            }, {
                key: "updateCaptions", value: function (e, t, i, n, r) {
                    if (this._enabled && this._renderable && e === this._activeCaptionId) {
                        var a = this._captions[this._activeCaptionId];
                        if (a && 0 !== a.length) {
                            r && this._onCaptionsArrived && this._onCaptionsArrived(this._buildEmptySdkCaptionsArray(i));
                            for (var s = 0; s < a.length; s++) -1 === a[s].end && (a[s].start !== t && this._logger.debug("Orphan caption detected", n.getDisplayText()), a[s].end = i)
                        }
                    }
                }
            }, {
                key: "_buildSdkCaptionsArrayFrom", value: function (e, t) {
                    for (var i = [], n = 0; n < e.length; n++) {
                        for (var r = {
                            time: t,
                            x: e[n].x,
                            y1: e[n].y1,
                            y2: e[n].y2,
                            regions: []
                        }, a = 0; a < e[n].p.length; a++) {
                            for (var s = {spans: []}, o = e[n].p[a].spans, u = 0; u < o.length; u++) s.spans.push({
                                row: o[u].row,
                                content: o[u].line.trim(),
                                style: this._renderer.getRegionSpanStyle(o[u].name)
                            });
                            r.regions.push(s)
                        }
                        i.push(r)
                    }
                    return i
                }
            }, {
                key: "_buildEmptySdkCaptionsArray", value: function (e) {
                    return [{time: e, x: 0, y1: 0, y2: 0, regions: []}]
                }
            }, {
                key: "_createDispatchTimer", value: function () {
                    var e = this;
                    this._dispatchTimer = setTimeout((function () {
                        this._dispatchTimer = void 0, e._enabled && (e._dispatchCaptions(), e._createDispatchTimer())
                    }), 50)
                }
            }, {
                key: "_dispatchCaptions", value: function () {
                    var e = this._captions[this._activeCaptionId];
                    if (e && 0 !== e.length) {
                        for (var t = this._playbackService.getCurrentTime(), i = [], n = 0; n < e.length; n++) {
                            if (t >= e[n].start && !e[n].added) this._captionManager.addActiveCaption(e[n].capHTMLElement), e[n].added = !0; else if (-1 !== e[n].end && e[n].end <= t) {
                                e[n].added && this._captionManager.removeActiveCaption(e[n].capHTMLElement);
                                continue
                            }
                            i.push(e[n])
                        }
                        this._captions[this._activeCaptionId] = i
                    }
                }
            }]) && c(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), h = (0, n.multiInstanceHolder)(l);
        t.default = h
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(72), i(21), i(170), i(33), i(167), i(322), i(0);
        var n = i(23), r = i(237);

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var s = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._instanceId = t, this._captionId = 0, this._nrRows = r.NR_ROWS, this._nrCols = r.NR_COLS
            }

            var t, i;
            return t = e, (i = [{
                key: "getDimensions", value: function () {
                    return [this._nrRows, this._nrCols]
                }
            }, {
                key: "createCaptionsWrapper", value: function () {
                    var e = document.createElement("div");
                    return e.className = "sldp_text_tracks_wrp_" + this._instanceId, e.style.cssText = ["position: absolute; display: flex;", "pointer-events: none; overflow: hidden;", "top: 10%; bottom: 10%; left: 0px;", "width: 100%; line-height: 1.3em; z-index: 5;"].join(""), e
                }
            }, {
                key: "createCaptionTrackWrapper", value: function (e) {
                    var t = document.createElement("div");
                    return t.className = "sldp_text_captions_wrp_".concat(this._instanceId, "_").concat(e), t.style.cssText = ["position: absolute; overflow: hidden; pointer-events: none; visibility: visible;", 'font-family: "Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace;', "width: 80%; height: 100%; left: 10%;"].join(""), t
                }
            }, {
                key: "createCaptionRegionsFromScreen", value: function (e) {
                    var t, i = !1, n = -1, r = {spans: []}, a = "style_cea608_white_black";
                    for (this._styleStates = {}, this._curRegion = null, this._regions = [], t = 0; t < this._nrRows; t++) {
                        var s = e.rows[t];
                        if (s.isEmpty()) i = !1, n = -1, this._curRegion && (this._appendCurrRegion(t - 1, r), r = {spans: []}, this._curRegion = null); else {
                            var o = this._getIndent(s.chars);
                            null === this._curRegion && (this._curRegion = {
                                x: o,
                                y1: t,
                                y2: t,
                                p: []
                            }), o !== n && i && (this._appendCurrRegion(t - 1, r), r = {spans: []}, this._curRegion = {
                                x: o,
                                y1: t,
                                y2: t,
                                p: []
                            });
                            for (var u = "", c = void 0, l = 0; l < s.chars.length; ++l) {
                                var h = s.chars[l], f = h.penState;
                                if (!c || !f.equals(c)) {
                                    u.trim().length > 0 && (r.spans.push({name: a, line: u, row: t}), u = "");
                                    var d = "style_cea608_" + f.foreground + "_" + f.background;
                                    f.underline && (d += "_underline"), f.italics && (d += "_italics"), this._styleStates[d] || (this._styleStates[d] = JSON.parse(JSON.stringify(f))), c = f, a = d
                                }
                                u += h.uchar
                            }
                            u.trim().length > 0 && r.spans.push({name: a, line: u, row: t}), i = !0, n = o
                        }
                    }
                    return this._curRegion && (this._appendCurrRegion(t - 1, r), this._curRegion = null), this._regions
                }
            }, {
                key: "createHTMLCaptionsFromRegions", value: function (e, t, i) {
                    for (var n = [], r = 0; r < e.length; ++r) {
                        var a = document.createElement("div");
                        a.id = "sub_cea608_" + this._captionId++;
                        var s = this._getRegionProperties(e[r]);
                        a.style.cssText = ["position: absolute;", "margin: 0;", "display: flex;", "box-sizing: border-box;", "pointer-events: none;", s].join("");
                        var o = document.createElement("div");
                        o.className = "caption-paragraph", o.style.cssText = this._getStyle();
                        var u = document.createElement("div");
                        u.className = "cueUniWrapper", u.style.cssText = "unicode-bidi: normal; direction: ltr;";
                        for (var c = 0; c < e[r].p.length; c++) for (var l = e[r].p[c], h = 0, f = 0; f < l.spans.length; f++) {
                            var d = l.spans[f];
                            if (d.line.length > 0) {
                                if (0 !== f && h != d.row) {
                                    var p = document.createElement("br");
                                    p.className = "lineBreak", u.appendChild(p)
                                }
                                var v = !1;
                                h === d.row && (v = !0), h = d.row;
                                var m = this._styleStates[d.name], g = document.createElement("span");
                                g.className = "caption-span " + d.name + " customSpanColor", g.style.cssText = this._getStyle(m), 0 !== f && v ? f === l.spans.length - 1 ? g.textContent = this._rtrim(d.line) : g.textContent = d.line : l.spans.length > 1 && f < l.spans.length - 1 && d.row === l.spans[f + 1].row ? g.textContent = this._ltrim(d.line) : g.textContent = d.line.trim(), u.appendChild(g)
                            }
                        }
                        o.appendChild(u), a.appendChild(o), n.push({start: t, end: i, capHTMLElement: a})
                    }
                    return n
                }
            }, {
                key: "getRegionSpanStyle", value: function (e) {
                    return this._styleStates[e] || {}
                }
            }, {
                key: "_appendCurrRegion", value: function (e, t) {
                    this._curRegion.p.push(t), this._curRegion.y2 = e, this._curRegion.name = "region_" + this._curRegion.x + "_" + this._curRegion.y1 + "_" + this._curRegion.y2, this._regions.push(this._curRegion)
                }
            }, {
                key: "_getIndent", value: function (e) {
                    for (var t = 0, i = 0; i < e.length && /\s/.test(e[i].uchar); i++) t++;
                    return t
                }
            }, {
                key: "_getRegionProperties", value: function (e) {
                    return ["left: ".concat(3.125 * e.x, "%;"), "top: ".concat(6.66 * e.y1, "%;"), "width: ".concat(100 - 3.125 * e.x, "%;"), "height: ".concat(6.66 * (e.y2 - e.y1 + 1), "%;"), "align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;", "letter-spacing: calc(1em - 1ch)"].join("")
                }
            }, {
                key: "_createRGB", value: function (e) {
                    switch (e) {
                        case"red":
                            e = "rgb(255, 0, 0)";
                            break;
                        case"green":
                            e = "rgb(0, 255, 0)";
                            break;
                        case"blue":
                            e = "rgb(0, 0, 255)";
                            break;
                        case"cyan":
                            e = "rgb(0, 255, 255)";
                            break;
                        case"magenta":
                            e = "rgb(255, 0, 255)";
                            break;
                        case"yellow":
                            e = "rgb(255, 255, 0)";
                            break;
                        case"white":
                            e = "rgb(255, 255, 255)";
                            break;
                        case"black":
                            e = "rgb(0, 0, 0)"
                    }
                    return e
                }
            }, {
                key: "_getStyle", value: function (e) {
                    var t;
                    return e ? (t = ["color: ".concat(e.foreground ? this._createRGB(e.foreground) : "rgb(255, 255, 255)", ";"), "font-style: ".concat(e.italics ? "italic" : "normal", ";"), "text-decoration: ".concat(e.underline ? "underline" : "none", ";"), "background-color: ".concat(e.background ? this._createRGB(e.background) : "transparent", ";")], e.flash && (t = t.concat(["animation-name: flasher;", "animation-duration: 1s;", "animation-timing-function: linear;", "animation-iteration-count: infinite;"]))) : t = ["color: rgb(255, 255, 255); justify-content: flex-start; text-align: left;", "font-style: normal; line-height: normal; font-weight: normal;", "text-decoration: none; width: 100%; display: flex;"], t.join("")
                }
            }, {
                key: "_ltrim", value: function (e) {
                    return e.replace(/^\s+/g, "")
                }
            }, {
                key: "_rtrim", value: function (e) {
                    return e.replace(/\s+$/g, "")
                }
            }]) && a(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), o = (0, n.multiInstanceHolder)(s);
        t.default = o
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = i(23), a = (n = i(230)) && n.__esModule ? n : {default: n};

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var o = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._instanceId = t, this._captions = {}, this._captionRenderer = a.default.getInstance(t)
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e) {
                    var t = this;
                    e && !this._captionsWrp && (this._captionsWrp = this._captionRenderer.createCaptionsWrapper(), e.appendChild(this._captionsWrp), this._container = e, this._resizeObserver = new ResizeObserver((function () {
                        t._setCaptionsFontSize()
                    })), this._resizeObserver.observe(this._captionsWrp))
                }
            }, {
                key: "setCaptionTrack", value: function (e) {
                    this._clearActiveCaptions(!0), this._container && e && (this._captions[e] ? this._captions[e].style.visibility = "visible" : (this._captions[e] = this._captionRenderer.createCaptionTrackWrapper(e), this._captionsWrp.appendChild(this._captions[e]))), this._activeCaptionId = e, this._setCaptionsFontSize()
                }
            }, {
                key: "clear", value: function () {
                    this._clearActiveCaptions()
                }
            }, {
                key: "deinit", value: function () {
                    this._container && (this._resizeObserver.unobserve(this._captionsWrp), this._container.removeChild(this._captionsWrp), this._captionsWrp = void 0, this._container = void 0, this._clearActiveCaptions(!0), this._captions = {})
                }
            }, {
                key: "addActiveCaption", value: function (e) {
                    this._captions[this._activeCaptionId].appendChild(e)
                }
            }, {
                key: "removeActiveCaption", value: function (e) {
                    this._captions[this._activeCaptionId].removeChild(e)
                }
            }, {
                key: "_setCaptionsFontSize", value: function () {
                    if (this._activeCaptionId) {
                        var e = this._captions[this._activeCaptionId];
                        if (e) {
                            var t = this._captionRenderer.getDimensions();
                            if (t[0] > 0 && t[1] > 0) {
                                var i = e.getBoundingClientRect(), n = Math.min(i.height / t[0], i.width / t[1]);
                                e.style.fontSize = "".concat(n, "px")
                            }
                        }
                    }
                }
            }, {
                key: "_clearActiveCaptions", value: function (e) {
                    if (this._activeCaptionId) {
                        var t = this._captions[this._activeCaptionId];
                        if (t) for (e && (t.style.visibility = "hidden"); t.firstChild;) t.removeChild(t.firstChild)
                    }
                }
            }]) && s(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), u = (0, r.multiInstanceHolder)(o);
        t.default = u
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.TRANSITION_MODE = t.TRACK_STATE = void 0, t.TRACK_STATE = {
            OPEN: 0,
            BUFFER: 1,
            ACTIVE: 2,
            BACKUP: 3,
            CLOSED: 4
        }, t.TRANSITION_MODE = {ABRUPT: 0, SMOOTH: 1}
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var s = {
            liveFrameTypes: {
                WEB_AAC_SEQUENCE_HEADER: 0,
                WEB_AAC_FRAME: 1,
                WEB_AVC_SEQUENCE_HEADER: 2,
                WEB_AVC_KEY_FRAME: 3,
                WEB_AVC_FRAME: 4,
                WEB_HEVC_SEQUENCE_HEADER: 5,
                WEB_HEVC_KEY_FRAME: 6,
                WEB_HEVC_FRAME: 7,
                WEB_VP6_KEY_FRAME: 8,
                WEB_VP6_FRAME: 9,
                WEB_VP8_KEY_FRAME: 10,
                WEB_VP8_FRAME: 11,
                WEB_VP9_KEY_FRAME: 12,
                WEB_VP9_FRAME: 13,
                WEB_MP3: 14,
                WEB_OPUS_FRAME: 15
            },
            closeCodes: {
                1e3: "CLOSE_NORMAL",
                1001: "CLOSE_GOING_AWAY",
                1002: "CLOSE_PROTOCOL_ERROR",
                1003: "CLOSE_UNSUPPORTED",
                1005: "CLOSE_NO_STATUS",
                1006: "CLOSE_ABNORMAL",
                1007: "Unsupported Data",
                1008: "Policy Violation",
                1009: "CLOSE_TOO_LARGE",
                1010: "Missing Extension",
                1011: "Internal Error",
                1012: "Service Restart",
                1013: "Try Again Later",
                1015: "TLS Handshake"
            }
        };
        t.default = function (e) {
            var t = r.default.create(e, "WSUtils"), i = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.closeCodes = s.closeCodes, this.liveFrameTypes = s.liveFrameTypes, this.int32pow = Math.pow(2, 32)
                }

                var i, n;
                return i = e, (n = [{
                    key: "readValue", value: function (e, i, n) {
                        var r = n / 4, a = r >>> 0, s = [0, 0], o = r === a ? a - 1 : a;
                        if (o > 2) return t.error("[WS]: Attempt to read more than 64 bits!"), null;
                        for (var u = o; u >= 0; u--) for (var c = 0; c < 4; c++) s[u] |= e[i + 4 * (o - u) + c] << 8 * (3 - c);
                        return s[1] &= 2097151, s[1] * this.int32pow + (s[0] >>> 0)
                    }
                }]) && a(i.prototype, n), Object.defineProperty(i, "prototype", {writable: !1}), e
            }();
            return {
                create: function () {
                    return new i
                }
            }
        }
    }, function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(33), i(0);
        var r = function () {
            function e(t, i, n) {
                var r, a, s;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), r = this, a = "_captBtnClick", s = function (e) {
                    this._captListDlg ? (this._captListDlg.remove(), delete this._captListDlg, this._uiControl.showControlsForPeriod(2)) : (this._uiControl.closeCtrlDialogs(), this._captListDlg = document.createElement("ul"), this._captListDlg.className = "sldp_capt_dialog sldp_ctrl_dialog", this._updateCaptionListDialog(), this._playerWrp.insertBefore(this._captListDlg, this._btnHolder), this._uiControl.showControlsForPeriod("infinite")), e.stopPropagation()
                }.bind(this), a in r ? Object.defineProperty(r, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = s, i && n && !this._btnHolder && (this._captBtn = document.createElement("div"), this._captBtn.className = "sldp_captions_btn sldp_btn sldp-icon-cc", this._captBtn.style.display = "none", this._captBtn.onclick = this._captBtnClick, this._btnHolder = i, this._btnHolder.insertBefore(this._captBtn, n), this._playerWrp = t), this._captions = []
            }

            var t, i;
            return t = e, (i = [{
                key: "setUIControlInterface", value: function (e) {
                    this._uiControl = e
                }
            }, {
                key: "setUserActionReportInterface", value: function (e) {
                    this._userActionReport = e
                }
            }, {
                key: "setCaptions", value: function (e) {
                    this._captions = e
                }
            }, {
                key: "setActiveIdx", value: function (e) {
                    this._activeIdx = e, this.refresh()
                }
            }, {
                key: "getCaptionTitle", value: function (e) {
                    var t = this._captions[e].name || "CC".concat(e + 1);
                    return this._captions[e].lang && (t += " (".concat(this._captions[e].lang, ")")), t
                }
            }, {
                key: "isVisible", value: function () {
                    return !!this._captListDlg
                }
            }, {
                key: "refresh", value: function () {
                    this._captBtn && (this._captBtn.style.display = this._captions.length > 0 ? "block" : "none"), this._captListDlg && this._updateCaptionListDialog()
                }
            }, {
                key: "closeDialog", value: function () {
                    this._captListDlg && (this._captListDlg.remove(), delete this._captListDlg)
                }
            }, {
                key: "destroy", value: function () {
                    this._captBtn = void 0, this._btnHolder = void 0, this._captListDlg = void 0, this._playerWrp = void 0, this._uiControl = void 0, this._captions = void 0
                }
            }, {
                key: "_updateCaptionListDialog", value: function () {
                    for (var e = this; this._captListDlg.firstChild;) this._captListDlg.removeChild(this._captListDlg.firstChild);
                    for (var t = function (t) {
                        if (!e._captions[t]) return "continue";
                        var i = e.getCaptionTitle(t), n = document.createElement("li");
                        e._activeIdx === t && (i = "&#10003 " + i), n.innerHTML = i, n.onclick = function (e) {
                            if (this._userActionReport) {
                                var i = t === this._activeIdx ? -1 : t;
                                this._userActionReport.selectCaption(i)
                            }
                            e.stopPropagation()
                        }.bind(e), e._captListDlg.appendChild(n)
                    }, i = 0; i < this._captions.length; i++) t(i)
                }
            }]) && n(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = r
    }, function (e, t, i) {
        var n = i(2), r = i(22), a = i(69), s = i(216), o = i(146), u = i(13), c = i(12), l = i(38), h = i(3),
            f = r("Reflect", "construct"), d = Object.prototype, p = [].push, v = h((function () {
                function e() {
                }

                return !(f((function () {
                }), [], e) instanceof e)
            })), m = !h((function () {
                f((function () {
                }))
            })), g = v || m;
        n({target: "Reflect", stat: !0, forced: g, sham: g}, {
            construct: function (e, t) {
                o(e), u(t);
                var i = arguments.length < 3 ? e : o(arguments[2]);
                if (m && !v) return f(e, t, i);
                if (e == i) {
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3])
                    }
                    var n = [null];
                    return a(p, n, t), new (a(s, e, n))
                }
                var r = i.prototype, h = l(c(r) ? r : d), g = a(e, h, t);
                return c(g) ? g : h
            }
        })
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(21), i(343), i(0);
        var n = o(i(345)), r = o(i(111)), a = o(i(226)), s = o(i(8));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var c = function () {
            function e(t, i, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.dbRange = t || 100, this.dbMult = 20, this.bufSize = 2048, this.rate = i || 6, this.logger = s.default.create(n, "VU meter"), this.instId = n
            }

            var t, i;
            return t = e, (i = [{
                key: "start", value: function (e, t) {
                    this.samplingRate = t ? t.samplingRate : void 0, this.channels = t && t.channels || 2, this.logger.debug("Start VU meter, channel count: ".concat(this.channels, ", sampling rate: ").concat(this.samplingRate)), this.mediaElement = e, this.context && "suspended" === this.context.state && (this.suspended = !0), this._setupMeter()
                }
            }, {
                key: "stop", value: function (e) {
                    this.logger.debug("Stop VU meter", e), this._removeMeter(), this._initValues(), this.ui && this.ui.destroy(e)
                }
            }, {
                key: "setup", value: function () {
                    return this._setupMeter()
                }
            }, {
                key: "refreshUI", value: function (e) {
                    this.ui && this.ui.refresh(e && e.channels || 2)
                }
            }, {
                key: "onPlay", value: function () {
                    this.context && (this.logger.debug("onPlay event, resume context"), this.context.resume())
                }
            }, {
                key: "setCallback", value: function (e) {
                    this.callback = e
                }
            }, {
                key: "setFatalErrorCallback", value: function (e) {
                    this.fatalErrorCallback = e
                }
            }, {
                key: "setUI", value: function (e) {
                    var t = document.getElementById(e);
                    t && (this.ui = new n.default(t, this.dbRange))
                }
            }, {
                key: "isActivated", value: function () {
                    return void 0 !== this.context && "running" === this.context.state
                }
            }, {
                key: "_setupMeter", value: function () {
                    var e = this._enableSource();
                    return e && (this._createMeter(), this.logger.debug("meter created", this.context.state), this.rate && this.samplingRate && this._setupRateControl(), this.ui && this.ui.create(this.channels)), e
                }
            }, {
                key: "_initValues", value: function () {
                    this.suspended = !1, this.rateControl = !1, this.channelValues = [], this.channelDecibels = []
                }
            }, {
                key: "_enableSource", value: function () {
                    if (void 0 === this.context) {
                        var e = r.default.getInstance(this.instId);
                        if (this.context = e.get(), this.context) if (this.audGraphCtrl = a.default.getInstance(this.instId), "suspended" !== this.context.state) this.audGraphCtrl.init(this.mediaElement, this.channels), this.suspended = !1; else {
                            var t = this;
                            e.onContextRunning((function (e) {
                                t.logger.debug("Audio context switched its state to running, setup VU meter"), t.audGraphCtrl.init(t.mediaElement, t.channels), t.suspended = !1, t._setupMeter(), t.onActivated && (t.onActivated(), t.onActivated = void 0)
                            })), this.logger.debug("Audio context is created, but it's suspended"), this.suspended = !0, this.context.resume()
                        }
                    } else this.suspended && (this.logger.debug("Trying to resume suspended audio context"), this.context.resume());
                    return this.isActivated()
                }
            }, {
                key: "_dbFromVal", value: function (e) {
                    var t = -this.dbRange;
                    return e > 0 && (t = this.dbMult * Math.log10(e)) < -this.dbRange && (t = -this.dbRange), t
                }
            }]) && u(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = c
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.specialCea608CharsCodes = t.NR_ROWS = t.NR_COLS = void 0, t.NR_ROWS = 15, t.NR_COLS = 32, t.specialCea608CharsCodes = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            128: 174,
            129: 176,
            130: 189,
            131: 191,
            132: 8482,
            133: 162,
            134: 163,
            135: 9834,
            136: 224,
            137: 32,
            138: 232,
            139: 226,
            140: 234,
            141: 238,
            142: 244,
            143: 251,
            144: 193,
            145: 201,
            146: 211,
            147: 218,
            148: 220,
            149: 252,
            150: 8216,
            151: 161,
            152: 42,
            153: 8217,
            154: 9473,
            155: 169,
            156: 8480,
            157: 8226,
            158: 8220,
            159: 8221,
            160: 192,
            161: 194,
            162: 199,
            163: 200,
            164: 202,
            165: 203,
            166: 235,
            167: 206,
            168: 207,
            169: 239,
            170: 212,
            171: 217,
            172: 249,
            173: 219,
            174: 171,
            175: 187,
            176: 195,
            177: 227,
            178: 205,
            179: 204,
            180: 236,
            181: 210,
            182: 242,
            183: 213,
            184: 245,
            185: 123,
            186: 125,
            187: 92,
            188: 94,
            189: 95,
            190: 124,
            191: 8764,
            192: 196,
            193: 228,
            194: 214,
            195: 246,
            196: 223,
            197: 165,
            198: 164,
            199: 9475,
            200: 197,
            201: 229,
            202: 216,
            203: 248,
            204: 9487,
            205: 9491,
            206: 9495,
            207: 9499
        }
    }, function (e, t) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (i = window)
        }
        e.exports = i
    }, , , function (e, t, i) {
        "use strict";
        i(136);
        var n, r = s(i(246)), a = s(i(110));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        i(348), s(i(349)), document.currentScript && (n = document.currentScript.src.substr(0, document.currentScript.src.lastIndexOf("/") + 1)), e.exports = {
            init: function (e) {
                var t;
                t = e && e.instance_name ? e.instance_name : "SLDP_" + (Math.floor(1e3 * Math.random()) + 1), a.default.getInstance(t).setScriptPath(n);
                var i = new r.default(t);
                return i.initialize(e), i
            }, VERSION: "v2.24.0", COMMITHASH: "1d0d87c9b6a0d26dcf2c2e59112f99cbb4610832"
        }
    }, function (e, t, i) {
        var n = i(9), r = i(6), a = i(12), s = TypeError;
        e.exports = function (e, t) {
            var i, o;
            if ("string" === t && r(i = e.toString) && !a(o = n(i, e))) return o;
            if (r(i = e.valueOf) && !a(o = n(i, e))) return o;
            if ("string" !== t && r(i = e.toString) && !a(o = n(i, e))) return o;
            throw s("Can't convert object to primitive value")
        }
    }, function (e, t, i) {
        var n = i(4), r = i(6), a = n.WeakMap;
        e.exports = r(a) && /native code/.test(String(a))
    }, function (e, t, i) {
        var n = i(22), r = i(1), a = i(87), s = i(117), o = i(13), u = r([].concat);
        e.exports = n("Reflect", "ownKeys") || function (e) {
            var t = a.f(o(e)), i = s.f;
            return i ? u(t, i(e)) : t
        }
    }, function (e, t) {
        var i = Math.ceil, n = Math.floor;
        e.exports = Math.trunc || function (e) {
            var t = +e;
            return (t > 0 ? n : i)(t)
        }
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(118), i(0), i(78), i(79), i(80), i(31), i(32), i(153), i(154), i(155), i(156), i(104), i(105), i(157), i(158), i(106), i(159), i(160), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(39), i(16), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(128), i(21), i(112), i(136), i(107), i(283), i(284), i(131), i(64), i(89), i(135), i(33);
        var r = y(i(292)), a = y(i(324)), s = y(i(165)), o = y(i(109)), u = y(i(326)), c = y(i(331)), l = y(i(334)),
            h = y(i(336)), f = y(i(8)), d = y(i(132)), p = y(i(166)), v = y(i(111)), m = y(i(338)), g = y(i(341));

        function y(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function _() {
            _ = function () {
                return e
            };
            var e = {}, t = Object.prototype, i = t.hasOwnProperty, r = Object.defineProperty || function (e, t, i) {
                    e[t] = i.value
                }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator",
                o = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";

            function c(e, t, i) {
                return Object.defineProperty(e, t, {value: i, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                c({}, "")
            } catch (e) {
                c = function (e, t, i) {
                    return e[t] = i
                }
            }

            function l(e, t, i, n) {
                var a = t && t.prototype instanceof d ? t : d, s = Object.create(a.prototype), o = new T(n || []);
                return r(s, "_invoke", {
                    value: function (e, t, i) {
                        var n = "suspendedStart";
                        return function (r, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw a;
                                return {value: void 0, done: !0}
                            }
                            for (i.method = r, i.arg = a; ;) {
                                var s = i.delegate;
                                if (s) {
                                    var o = S(s, i);
                                    if (o) {
                                        if (o === f) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                    if ("suspendedStart" === n) throw n = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                n = "executing";
                                var u = h(e, t, i);
                                if ("normal" === u.type) {
                                    if (n = i.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                    return {value: u.arg, done: i.done}
                                }
                                "throw" === u.type && (n = "completed", i.method = "throw", i.arg = u.arg)
                            }
                        }
                    }(e, i, o)
                }), s
            }

            function h(e, t, i) {
                try {
                    return {type: "normal", arg: e.call(t, i)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            e.wrap = l;
            var f = {};

            function d() {
            }

            function p() {
            }

            function v() {
            }

            var m = {};
            c(m, s, (function () {
                return this
            }));
            var g = Object.getPrototypeOf, y = g && g(g(x([])));
            y && y !== t && i.call(y, s) && (m = y);
            var b = v.prototype = d.prototype = Object.create(m);

            function A(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    c(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function w(e, t) {
                var a;
                r(this, "_invoke", {
                    value: function (r, s) {
                        function o() {
                            return new t((function (a, o) {
                                !function r(a, s, o, u) {
                                    var c = h(e[a], e, s);
                                    if ("throw" !== c.type) {
                                        var l = c.arg, f = l.value;
                                        return f && "object" == n(f) && i.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                            r("next", e, o, u)
                                        }), (function (e) {
                                            r("throw", e, o, u)
                                        })) : t.resolve(f).then((function (e) {
                                            l.value = e, o(l)
                                        }), (function (e) {
                                            return r("throw", e, o, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(r, s, a, o)
                            }))
                        }

                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function S(e, t) {
                var i = e.iterator[t.method];
                if (void 0 === i) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return f;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return f
                }
                var n = h(i, e.iterator, t.arg);
                if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                var r = n.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function k(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function C(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(k, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (; ++n < e.length;) if (i.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return r.next = r
                    }
                }
                return {next: P}
            }

            function P() {
                return {value: void 0, done: !0}
            }

            return p.prototype = v, r(b, "constructor", {value: v, configurable: !0}), r(v, "constructor", {
                value: p,
                configurable: !0
            }), p.displayName = c(v, u, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, c(e, u, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, A(w.prototype), c(w.prototype, o, (function () {
                return this
            })), e.AsyncIterator = w, e.async = function (t, i, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new w(l(t, i, n, r), a);
                return e.isGeneratorFunction(i) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, A(b), c(b, u, "Generator"), c(b, s, (function () {
                return this
            })), c(b, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), i = [];
                for (var n in t) i.push(n);
                return i.reverse(), function e() {
                    for (; i.length;) {
                        var n = i.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = x, T.prototype = {
                constructor: T, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e) for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(i, n) {
                        return s.type = "throw", s.arg = e, t.next = i, n && (t.method = "next", t.arg = void 0), !!n
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r], s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var o = i.call(a, "catchLoc"), u = i.call(a, "finallyLoc");
                            if (o && u) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (o) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), C(i), f
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.tryLoc === e) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                C(i)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, i) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }

        function b(e, t, i, n, r, a, s) {
            try {
                var o = e[a](s), u = o.value
            } catch (e) {
                return void i(e)
            }
            o.done ? t(u) : Promise.resolve(u).then(n, r)
        }

        var A = 0, w = 1, S = 2, k = 3, C = 4, T = 5, x = 6, P = 7, E = 8, B = 9, M = new Uint8Array([17, 144]);
        t.default = function (e) {
            var t = f.default.create(e, "Director"), i = new c.default(e), n = new r.default(e),
                y = new l.default(e).create(), R = [], I = A, F = new a.default(e).create(y),
                L = s.default.getInstance(e), O = [], D = {}, j = {}, U = 0, V = !1, N = 0, W = !1, H = {}, z = 0,
                q = !1, G = [], Q = p.default.getInstance(), Y = new h.default(e), K = o.default.getInstance(e);
            K.onPlayFailed = function () {
                J && (J.triggerPause(!0), J.onPlaybackStarted()), oe = setTimeout(Ne, 2e3)
            };
            var J, X, Z, $, ee, te, ie, ne, re, ae, se, oe, ue, ce, le, he, fe, de, pe, ve,
                me = m.default.getInstance(e);

            function ge() {
                (J = new u.default($, e)).onPlay = Me, J.onPause = Ue, J.onPlayEvent = Re, J.onPauseEvent = Ve, J.onVolumeSet = Le, J.onUserAction = Fe, J.onQualityChange = He, J.onResize = Oe, J.onEnterPip = De, J.onLeavePip = je, J.qualities = []
            }

            function ye() {
                t.error("VU meter fatal error"), "AudioWorklet" === $.vu_meter.api && ($.vu_meter.api = "ScriptProcessor", _e(), J.destroy(), ge(), ut(!0))
            }

            function _e() {
                $.vu_meter && $.vu_meter.mode && $.vu_meter.type && void 0 !== (X = new g.default(e).create($.vu_meter)) && ($.vu_meter.container && X.setUI($.vu_meter.container), $.vu_meter.initialized = !0, X.setFatalErrorCallback(ye))
            }

            function be() {
                te = void 0, ie = void 0, ne = void 0, ae = void 0, re = void 0, se = void 0
            }

            function Ae() {
                L.callbacks = {
                    onProgress: et,
                    onMediaReady: ht,
                    onCrash: ut,
                    onWaitUpdate: at,
                    onPlayStarted: Ie,
                    onLatencyCalc: tt,
                    onLatencySeek: it,
                    onLowBuffer: nt,
                    getAvgVBufLvl: st
                }
            }

            function we() {
                F.callbacks = {
                    onStatusReceived: lt,
                    onInitSegmentReceived: _t,
                    onDataReceived: wt,
                    onConnectionClosed: ct
                }
            }

            function Se(e) {
                le && le.stop(e), F.close(), we();
                for (var t = 0; t < R.length; t++) R[t].close();
                R = [], xe(), Ce(), be()
            }

            function ke() {
                J.removePip((function () {
                    me.stop(), Te(), L.clear(), Ae(), K.init(J.mediaElement), y.setMediaElement(J.mediaElement), setTimeout(Be, 0)
                }))
            }

            function Ce() {
                ue && (clearTimeout(ue), ue = void 0), N = 0
            }

            function Te(e) {
                X && X.stop(e)
            }

            function xe() {
                void 0 !== oe && (clearTimeout(oe), oe = void 0)
            }

            function Pe() {
                Ee() && (I = k)
            }

            function Ee() {
                var e = !1, i = $.stream_url;
                return i && i.length > 0 ? (e = F.open(i), setTimeout((function () {
                    e.streamURL
                }), 0)) : t.error("_requestCurrentStream attempt to open empty url", ee, $.stream_url), e
            }

            function Be() {
                switch (t.debug("Media service initialized", I), I) {
                    case S:
                        J.canPlay = !0, I = w;
                        break;
                    case w:
                        $.stream_url && ($.autoplay || V) ? (Pe(), V = !1) : J.canPlay = !0;
                        break;
                    case P:
                        Ee(), N = 1;
                        break;
                    case E:
                        for (var e = 0; e < R.length; e++) R[e].isActual() && R[e].setupMediaService();
                        var i = !1;
                        L.init(J.mediaElement, (function () {
                            if (!i) {
                                for (var e = !1, t = 0; t < R.length; t++) R[t].isActual() && (R[t].attachToMediaService(), R[t].recover(), R[t].inTransition() && (e = !0));
                                ie && ie.suspendMuteable(), I = e ? C : T, J.clearMediaElement(), L.startPlayback({recover: !0}), Xe(), i = !0
                            }
                        }))
                }
            }

            function Me(e) {
                switch (e && ve && ve.init(), I) {
                    case w:
                        Pe();
                        break;
                    case B:
                        ke(), I = w, V = !0;
                        break;
                    case A:
                        break;
                    default:
                        xe(), Ce(), q && te && (le.start(), L.toggleBufferLineUp(q)), L.handlePlay(e), X && X.onPlay()
                }
            }

            function Re() {
                L.handlePlayEvent()
            }

            function Ie() {
                J && J.onPlaybackStarted()
            }

            function Fe() {
                return k !== I && C !== I
            }

            function Le(e) {
            }

            function Oe() {
                I >= C && (Xe(), $.adaptive_bitrate && Y.onSizeUpdate(J.getSize()))
            }

            function De() {
                t.debug("enter PIP"), L.handleEnterPip()
            }

            function je() {
                t.debug("leave PIP"), L.handleLeavePip()
            }

            function Ue() {
                C < I && (Ce(), le && le.stop(), L.handlePause(), $.pause_timeout >= 0 && (oe = setTimeout(Ne, 1e3 * $.pause_timeout)))
            }

            function Ve() {
                L.handlePauseEvent()
            }

            function Ne() {
                We()
            }

            function We() {
                Se(), L.resetPosition(), me.stop(), Te(), I = B
            }

            function He(e, i) {
                var n = !1;
                if (qe() || K.isPaused()) return t.warn("Quality change is not available at the moment"), n;
                if (C < I) {
                    var r, a, s = "Auto" == e;
                    (s || void 0 !== j[e]) && (s || (null == i && (i = 0), a = j[e][i], r = O[a].stream), t.debug("Switch quality to ", e, r), s ? (q = !0, Ze(), le.start(), L.toggleBufferLineUp(q)) : void 0 !== a && (q = !1, le && le.stop(), L.toggleBufferLineUp(q), ze(a)), n = !0)
                }
                return n
            }

            function ze(e, i) {
                if (e != ne) {
                    if (te && !K.isPaused() && P != I) {
                        var n = O[e];
                        if (x === I) for (var r = 0; r < R.length; r++) R[r].activate();
                        te.inTransition(!0);
                        var a = n.stream_info, s = {width: a.width, height: a.height, bandwidth: a.bandwidth};
                        if (te.setTransitionParams({
                            id: U,
                            codec: a.vcodec,
                            timescale: a.vtimescale,
                            name: n.stream,
                            streamOptions: s
                        }), te.isTransitionSupported()) {
                            xe(), Ce(), t.debug("[Director] Change quality, send Play for " + n.stream + ", sn #" + U);
                            var o = {stream: n.stream, sn: U, type: "video", offset: "0"};
                            de > 0 && (o.steady = !0), pt([o]), U++, ae = e, te.startTransition(i), I = C
                        } else t.error("Transition isn't supported to ", n)
                    }
                } else Ze()
            }

            function qe() {
                return void 0 !== ae || void 0 !== se
            }

            function Ge() {
                return L.isSeeking()
            }

            function Qe() {
                var e = {};
                if (void 0 !== ne) {
                    e = {
                        vid: te.id(),
                        idx: ne,
                        bandwidth: O[ne].stream_info.bandwidth,
                        rendition: O[ne].stream_info.height
                    };
                    for (var t = 0, i = 0; i < G.length; i++) if (G[i].idx == ne) {
                        t = i;
                        break
                    }
                    e.orderedIdx = t, void 0 !== re && (e.aid = ie.id())
                }
                return e
            }

            function Ye(e) {
                var i;
                t.debug("Send cancel ", e.id()), i = [e.id().toString()], F.send({command: "Cancel", streams: i})
            }

            function Ke(e, i) {
                t.debug("probe stream " + e.streamName() + ", sn: " + e.id() + ", offset: " + te.sapOffset() + ", duration: " + i), pt([{
                    stream: e.streamName(),
                    sn: e.id(),
                    type: "video",
                    offset: te.sapOffset().toString(),
                    duration: i
                }])
            }

            function Je(e) {
                if (e.isVideo() && void 0 !== ae) {
                    ne = ae, ae = void 0;
                    var t = Ze();
                    Xe(), q && le.restart(!0), ie && ie.suspendMuteable(), t.rendition, t.name, J.refresh()
                } else e.isAudio() && void 0 !== se && (re = se, se = void 0)
            }

            function Xe() {
                J.adjustHeight()
            }

            function Ze() {
                var e;
                if (void 0 !== ne && O[ne]) {
                    var t = O[ne].stream_info.height + "p";
                    $.initial_resolution = t;
                    var i = O[ne].stream_info.renditionIdx;
                    if ($.initial_idx = i, G.length > 1) if (le) if (q) {
                        var n = "Auto " + t;
                        J.quality_ar[0].name = n, J.currentQuality = {name: n}
                    } else J.quality_ar[0].name = "Auto", J.currentQuality = {
                        name: t,
                        idx: i
                    }; else J.currentQuality = {name: t, idx: i};
                    e = {name: O[ne].stream, rendition: t}
                }
                return e
            }

            function $e() {
                ce && (clearTimeout(ce), ce = void 0)
            }

            function et(e, t) {
                if (T == I) {
                    for (var i = 0; i < R.length; i++) if (R[i].isActual()) {
                        var n = R[i].bufferStatus(e);
                        if (n.low) {
                            $e(), ce = setTimeout((function () {
                                L.wait(), ce = void 0
                            }), 1e3 * n.lvl + 50), R[i].buffer(), I = x;
                            break
                        }
                        $e()
                    }
                    t > 200 && ut(!0)
                }
            }

            function tt(e) {
                var t = (R.length > 1 ? te : R[0]).latency(e);
                return t > 0 ? t : 0
            }

            function it(e, t) {
            }

            function nt() {
            }

            function rt(e, t) {
            }

            function at(e, t) {
                for (var i = 0; i < R.length; i++) R[i].isActual() && R[i].updateBufferedState(e, t)
            }

            function st() {
                var e = 0;
                if (te) {
                    var t = y.getMetrics(te.id());
                    t && (e = t.avgBufLevel())
                }
                return e
            }

            function ot() {
                E !== I && w !== I && ut(!0)
            }

            function ut(e) {
                t.debug("onSourceBufferCrash", e), I = E, Z = void 0;
                var i = !0;
                if (!e) {
                    for (var n = [], r = 0; r < R.length; r++) if (n.push(R[r].backup()), !R[r].isRecoverable()) {
                        i = !1;
                        break
                    }
                    i && n.length > 1 && void 0 !== n[0] && void 0 !== n[1] && Math.abs(n[0] - n[1]) > 100 && (i = !1)
                }
                i && !e ? (xe(), Ce()) : (Se(), V = !0, I = w), ke()
            }

            function ct() {
                switch (t.debug("onConnectionClosed, state ", I), le && le.stop(), K.isPaused() && We(), I) {
                    case x:
                        $e(), L.continue();
                    case C:
                        if (e = !1, C === I && te && G.length > 1 && ne >= 0 && (e = G[0].idx !== ne && te.isStarving()), e) return W = !0, void ut(!0);
                        !function () {
                            for (var e = 0; e < R.length; e++) R[e].flush()
                        }();
                    case T:
                        Q.isBrowser("Firefox") ? (Se({hard: !0}), ke()) : (Ee(), N = 1), I = P;
                        break;
                    case P:
                        N >= $.reconnects || 0 == N ? (We(), J.showNotPlaying()) : null == ue && (ue = setTimeout((function () {
                            t.debug("do reconnect"), N++, ue = void 0, Ee()
                        }), N < 5 ? 1e3 : 5e3));
                        break;
                    case B:
                    case S:
                        break;
                    case k:
                        L.isMediaSourceSupported() ? J.showNotPlaying() : (t.error("MediaSource is not supported"), J.showNotSupported(Q.isIOS()));
                    default:
                        I = w
                }
                var e
            }

            function lt(e, i, n) {
                t.debug("onStatusReceived state=".concat(I), i, n), O = e;
                var r = function () {
                    var e = void 0, i = [], n = [];
                    D = {}, j = {}, G = [], le && le.stop();
                    for (var r = 0; r < O.length; r++) {
                        D[O[r].stream] = r;
                        var a = O[r].stream_info;
                        a.vtimescale && (a.vtimescale = parseInt(a.vtimescale)), a.atimescale && (a.atimescale = parseInt(a.atimescale));
                        var s = {name: O[r].stream, bandwidth: a.bandwidth ? a.bandwidth : 0};
                        if (a.resolution && a.vcodec) {
                            var o = a.resolution.split("x");
                            if (a.width = parseInt(o[0]), a.height = parseInt(o[1]), s.width = a.width, s.height = a.height, s.vcodec = a.vcodec, L.isCodecSupported("video", a.vcodec)) {
                                s.video = "supported";
                                var u = o[1] + "p";
                                j[u] || (j[u] = []), j[u].push(r), a.renditionIdx = j[u].length - 1, u != $.initial_resolution || null != $.initial_idx && $.initial_idx != a.renditionIdx || (e = r), a.bwStr = a.bandwidth, a.bandwidth && (a.bandwidth = parseInt(a.bandwidth) / 1024);
                                var c = 0;
                                for (c = 0; c < G.length; c++) {
                                    var l = O[G[c].idx].stream_info;
                                    if (l.height > o[1] || l.height == o[1] && l.bandwidth > a.bandwidth) break
                                }
                                i.splice(c, 0, {name: u, idx: a.renditionIdx}), G.splice(c, 0, {
                                    idx: r,
                                    bandwidth: a.bandwidth,
                                    rendition: o[1]
                                })
                            } else s.video = "not supported"
                        }
                        a.acodec && (s.acodec = a.acodec, s.audio = L.isCodecSupported("audio", a.acodec) ? "supported" : "not supported"), n.push(s)
                    }
                    return le && i.length > 1 && i.splice(0, 0, {name: "Auto"}), t.debug("Player renditions:", i), t.debug("Ordered streams:", G), J.qualities = i, $.adaptive_bitrate && Y.init(O, G, $.adaptive_bitrate, J.getSize()), {
                        renditionProperties: n,
                        initialIdx: e
                    }
                }(), a = (r.renditionProperties, r.initialIdx);
                P == I && L.resetPosition();
                var s = !!$.audio_only, o = !!$.video_only;
                if (W) G.length > 0 && (a = G[0].idx, W = !1); else for (var u = 0; u < R.length; u++) {
                    var c;
                    c = R[u].inTransition() ? D[R[u].getTransitionStreamName()] : D[R[u].getStreamName()], R[u].isVideo() ? (ne = c, ae = void 0, void 0 !== c && O[c].stream_info.vcodec ? (P == I && R[u].reset(), s = !0) : O.length > 0 && R[u].inTransition(!0)) : R[u].isAudio() ? (re = c, se = void 0, void 0 !== c && O[c].stream_info.acodec ? (P == I && R[u].reset(), o = !0) : O.length > 0 && R[u].inTransition(!0)) : t.error("Got track of type other than video or audio!")
                }
                if (void 0 !== a && (s || (s = gt(O[a], a)), o || (o = yt(O[a], a))), !s) for (var l = 0; l < O.length && !(s = gt(O[l], l)); l++) ;
                if (!o) for (var h = 0; h < O.length && !(o = yt(O[h], h)); h++) ;
                for (var f = 0; f < R.length; f++) if (R[f].inTransition() && !R[f].isTransitionSupported()) return t.debug("onStatusReceived: Media source already contains given source buffer, it can not be filled, reload player..."), void ut(!0);
                Ze(), function (e, i) {
                    pe = [];
                    for (var n = !1, r = ("offset" in $ ? $.offset.toString() : "0"), a = 0; a < R.length; a++) {
                        var s = {type: R[a].type(), offset: r};
                        $.sync_buffer > 0 && (e && i ? s.steady = !0 : n || (n = !0, t.error('Playback synchronization is set up but target Nimble Streamer doesn\'t have "sldp_add_steady_timestamps" config parameter set up. Add sldp_add_steady_timestamps = true to /etc/nimble/nimble.conf file and restart Nimble Streamer.'))), R[a].inTransition() ? (s.stream = R[a].getTransitionStreamName(), s.sn = R[a].transitionStreamId()) : R[a].isOpen() && (s.stream = R[a].getStreamName(), s.sn = R[a].id()), pe.push(s)
                    }
                }(n, i), s && !$.audio_only || o && !$.video_only ? pe.length > 0 && (Z = void 0, o || J.setMuted(), $.sync_buffer > 0 && n && i ? (fe = performance.now(), de = parseInt(i), F.acceptSteadyTimestamps(!0)) : (fe = de = void 0, L.setSyncParams(void 0, void 0), F.acceptSteadyTimestamps(!1)), I = C, L.init(J.mediaElement) || J && (J.triggerPause(!0), Se(), ke(), J.onPlaybackFinished(), I = S)) : (Se({hard: !0}), me.stop(), Te())
            }

            function ht() {
                return ft.apply(this, arguments)
            }

            function ft() {
                var e;
                return e = _().mark((function e() {
                    return _().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (te && !te.isAttachedToMedia() && te.attachToMediaService(), ie && !ie.isAttachedToMedia() && ie.attachToMediaService(), z = 0, pt(pe), F.setDtsEqPtsMode(!!$.dts_eq_pts), dt(pe), !ie) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 9, ie.postInit();
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })), (ft = function () {
                    var t = this, i = arguments;
                    return new Promise((function (n, r) {
                        var a = e.apply(t, i);

                        function s(e) {
                            b(a, n, r, s, o, "next", e)
                        }

                        function o(e) {
                            b(a, n, r, s, o, "throw", e)
                        }

                        s(void 0)
                    }))
                }).apply(this, arguments)
            }

            function dt(e) {
                t.debug("[Director] Request streams:");
                for (var i = 0; i < e.length; i++) {
                    var n = "Stream #" + i + ": " + e[i].stream + ", sn: " + e[i].sn + ", offset: " + e[i].offset;
                    e[i].steady && (n += ", steady: true"), t.debug(n)
                }
            }

            function pt(e) {
                F.send({command: "Play", streams: e})
            }

            function vt(e) {
                for (var t, i = 0; i < R.length; i++) if (e == R[i].id()) {
                    t = R[i];
                    break
                }
                return t
            }

            function mt(e) {
                for (var t, i = 0; i < R.length; i++) if (R[i].inTransition() && e == R[i].transitionStreamId()) {
                    t = R[i];
                    break
                }
                return t
            }

            function gt(e, i) {
                var r = !1, a = e.stream, s = e.stream_info;
                if (s.vcodec && s.width && s.height) {
                    var o = {
                        width: s.width,
                        height: s.height,
                        bandwidth: s.bandwidth,
                        buffering: $.buffering,
                        captions: $.captions
                    };
                    "key_frame_alignment" in $ && (o.sapAlignment = $.key_frame_alignment), "fmp4_full_gop" in $ && (o.fragmentFullGop = $.fmp4_full_gop), te ? te.inTransition() && (te.setTransitionParams({
                        id: U,
                        codec: s.vcodec,
                        timescale: s.vtimescale,
                        name: a,
                        streamOptions: o
                    }), te.isTransitionSupported() && (U++, ae = i, ne = void 0, te.startTransition(), r = !0)) : L.isCodecSupported("video", s.vcodec) ? ((te = n.create(U, "video", s.vcodec, s.vtimescale, "video_stream_id", a, o, y)).setupMediaService(), R.push(te), U++, ne = i, ae = void 0, r = !0) : t.error("Video codec is not supported: ", s.vcodec)
                } else {
                    var u = s.vcodec ? "resolution" : "video codec";
                    t.warn("Error: no valid " + u + " specified")
                }
                return r
            }

            function yt(e, i) {
                var r = !1, a = e.stream, s = e.stream_info;
                if (s.acodec) {
                    var o = {buffering: $.buffering};
                    ie ? ie.inTransition() && (ie.setTransitionParams({
                        id: U,
                        codec: s.acodec,
                        timescale: s.atimescale,
                        name: a,
                        streamOptions: o
                    }), ie.isTransitionSupported() && (U++, se = i, re = void 0, ie.startTransition(), r = !0)) : L.isCodecSupported("audio", s.acodec) ? ((ie = n.create(U, "audio", s.acodec, s.atimescale, "audio_stream_id", a, o, y)).setupMediaService(), R.push(ie), U++, re = i, se = void 0, r = !0) : t.error("Audio codec is not supported: ", s.acodec)
                }
                return r
            }

            function _t(e, i) {
                if (t.debug("onInitSegmentReceived", e, I), C == I) {
                    var n = vt(e);
                    n && n.isActual() ? n.isInited() ? n.isInitSegmentNew(i) && (n.processInitSegment(i), n.setBufferDelay()) : (n.initPresentation(i), n.onBaseDecodeTimeReady(bt), n.onSourceReady(At)) : (n = mt(e)) && n.isActual() && (n.isTransitionInited() ? n.isTransitionInitNew(i) && n.processTransitionInitSegment(i) : (n.initTransition(i), n.onCancelStream(Ye), n.onTransitionCompleted(Je)))
                } else if (le && le.isProbing(e)) le.onProbeInitReceived(); else if (T == I || x == I || E == I) {
                    var r = vt(e);
                    r && r.isActual() && (E == I ? r.populateInitDataBuffer(i) : r.isInitSegmentNew(i) && (r.processInitSegment(i), r.setBufferDelay()))
                }
            }

            function bt(e, t) {
                (!Z || t > Z) && (Z = t);
                var i = !0;
                if (E != I) for (var n = 0; n < R.length; n++) if (R[n].isOpen() || R[n].inTransition()) {
                    i = !1;
                    break
                }
                if (i) for (var r = 0; r < R.length; r++) (R[r].isBuffering() || R[r].isBackingUp()) && R[r].setBaseDecodeTime(Z)
            }

            function At() {
                for (var e = !0, t = 0; t < R.length; t++) if (R[t].isBuffering() || R[t].inTransition()) {
                    e = !1;
                    break
                }
                e && (C == I ? (I = T, J.clearMediaElement(), L.startPlayback(), Xe(), q && te && (le.start(), L.toggleBufferLineUp(q))) : x == I ? (I = T, $e(), L.continue()) : he && (q = !0, he = !1, le.start(), le.setBuffering($.buffering), L.toggleBufferLineUp(q)), function () {
                    if (X) {
                        var e = ie ? ie.getAudioInfo() : void 0;
                        X.start(J.mediaElement, e), J.setVUMeterHandler(X)
                    }
                }(), te && $.screenshots && (me.setMediaElement(J.mediaElement), me.setRate($.screenshots.rate), H.onScreenshotReady && me.onScreenshotReady(rt), me.start()))
            }

            function wt(e, i, n, r, a, s) {
                if (C == I || T == I || x == I) {
                    var o = vt(e);
                    if (o && o.isActual()) {
                        de && 0 === z && i && (void 0 === te || o.isVideo()) && (z = (s - de) / 1e3 - (r + a) / o.timescale() * 1e3, L.setSyncParams(z + fe, $.sync_buffer));
                        var u = o.processFrame(i, n, r, a);
                        if (u.done) {
                            if ($.muteable && o.isVideo() && ie && ie.isMuteable()) {
                                var c = y.getMetrics(ie.id());
                                c && !c.hasLatest500msecBytesArrived() && (ie.isInited() || (t.debug("Audio is muted on start, push synthetic init segment"), ie.initPresentation(M, !0), ie.onBaseDecodeTimeReady(bt), ie.onSourceReady(At)), ie.processMute(r, o))
                            }
                        } else u.errors >= 10 && ot()
                    } else le && le.isProbing(e) ? le.onProbeDataReceived(i, n.byteLength, r) : (o = mt(e)) && o.isActual() && (o.processTransitionFrame(i, n, r, a).done || ot())
                } else if (E == I) {
                    var l = vt(e);
                    l && l.populateStartupBuffer(i, n, r, a)
                }
            }

            this.initialize = function (n) {
                var r;
                !function (i) {
                    var n, r = "error", a = !1;
                    i && (void 0 !== i.log_level && (r = i.log_level), void 0 !== i.log_div && (a = i.log_div), void 0 !== i.inform_ids && (n = i.inform_ids)), f.default.setLevel(r), f.default.setDiv(e, a), d.default.init(e, n), t.debug("SLDP Player v2.24.0")
                }(n), function (e) {
                    var i = {
                        autoplay: !0,
                        controls: !0,
                        buffering: 1e3,
                        reconnects: 10,
                        adaptive_bitrate: {},
                        muteable: !1,
                        fullscreen: !1,
                        muted: !1,
                        opus_decoder: !1,
                        captions: !1,
                        screenshots: !1,
                        ios_failback_scheme: "sldp",
                        ios_failback_secure_scheme: "sldps",
                        ios_failback_app_url: "https://itunes.apple.com/us/app/sldp-player/id1238237026"
                    };
                    t.debug("Parameters: ", JSON.stringify(e)), ($ = Object.assign({}, i, e)).mobile = Q.isMobile(), function () {
                        if (void 0 !== $.width) if ("parent" == $.width) $.width = "100%"; else {
                            var e = parseInt($.width);
                            isNaN(e) || ($.width = e)
                        }
                        if (void 0 !== $.height) if ("parent" == $.height) $.height = "100%"; else {
                            var t = parseInt($.height);
                            isNaN(t) || ($.height = t)
                        }
                    }(), $.adaptive_bitrate instanceof Object ? ($.adaptive_bitrate.initial_rendition && ($.adaptive_bitrate.initial_rendition.endsWith("p") ? ($.initial_resolution = $.adaptive_bitrate.initial_rendition, $.adaptive_bitrate.initial_height = parseInt($.adaptive_bitrate.initial_rendition) || void 0) : t.error("Parameter adaptive_bitrate.initial_rendition is ignored. It must be a name of a rendition, i. e. '240p', '480p' or '720p'")), $.adaptive_bitrate.max_rendition && ($.adaptive_bitrate.max_rendition.endsWith("p") ? ($.adaptive_bitrate.max_height = parseInt($.adaptive_bitrate.max_rendition) || void 0, $.adaptive_bitrate.initial_height > $.adaptive_bitrate.max_height && (t.error("Parameter adaptive_bitrate.max_rendition is ignored. It must be greater or equal to adaptive_bitrate.initial_rendition"), $.adaptive_bitrate.max_height = void 0, $.adaptive_bitrate.max_rendition = void 0)) : t.error("Parameter adaptive_bitrate.max_rendition is ignored. It must be a name of a rendition, i. e. '240p', '480p' or '720p'")), $.adaptive_bitrate.size_constrained = !!$.adaptive_bitrate.size_constrained) : !0 === $.adaptive_bitrate && ($.adaptive_bitrate = {}), void 0 !== $.pause_timeout && ($.pause_timeout = parseInt($.pause_timeout), isNaN($.pause_timeout) && ($.pause_timeout = void 0)), $.latency_tolerance > 0 && $.latency_tolerance <= $.buffering && ($.latency_tolerance = $.buffering + 100), "seek" === $.latency_adjust_method ? $.zapping = !1 : "fast-forward" === $.latency_adjust_method && ($.zapping = !0), void 0 !== $.sync_buffer && ($.sync_buffer = parseInt($.sync_buffer), isNaN($.sync_buffer) ? $.sync_buffer = null : ($.sync_buffer < 500 && ($.sync_buffer = 500), $.latency_tolerance && (t.warn('Playback synchronization is set up. "latency_tolerance" parameter doesn\'t take any effect and is omitted.'), $.latency_tolerance = 0), $.offset && t.warn('Playback synchronization is set up. "offset" parameter doesn\'t have any effect and is omitted.'), $.buffering = $.sync_buffer - 50, $.offset = $.sync_buffer)), $.vu_meter instanceof Object && ($.vu_meter.db_range = parseInt($.vu_meter.db_range), isNaN($.vu_meter.db_range) && ($.vu_meter.db_range = void 0), $.vu_meter.rate = parseFloat($.vu_meter.rate), isNaN($.vu_meter.rate) ? $.vu_meter.rate = void 0 : $.vu_meter.rate < .001 && ($.vu_meter.rate = .001), void 0 === $.vu_meter.mode && void 0 !== $.vu_meter.container && ($.vu_meter.mode = "peak"), void 0 !== $.vu_meter.mode && void 0 === $.vu_meter.container && ($.vu_meter.mode = void 0, t.warn("VU meter container is not specified, VU meter can't be created")), void 0 === $.vu_meter.type && ($.vu_meter.type = "output"), "input" !== $.vu_meter.type && "output" !== $.vu_meter.type && (t.warn('VU meter type "' + $.vu_meter.type + "\" is not recognized, VU meter can't be created"), $.vu_meter.type = void 0), void 0 === $.vu_meter.api && ($.vu_meter.api = "ScriptProcessor"), Q.isBrowser("Safari") && "input" === $.vu_meter.type && (t.warn('VU meter type is changed to "output" for Safari browser, because known bug (https://feedbackassistant.apple.com/feedback/9764540) breaks volume control for "input" type.'), $.vu_meter.type = "output")), $.captions = !1, $.screenshots = !1, $.screenshots && (!0 === $.screenshots || $.screenshots instanceof Object ? (!0 === $.screenshots && ($.screenshots = {}), void 0 === $.screenshots.rate ? $.screenshots.rate = -1 : $.screenshots.rate < 0 && ($.screenshots.rate = 0)) : $.screenshots = !1)
                }(n), _e(), ge(), Q.logData(), $.video_only || (ve = v.default.getInstance(e)).init(), I = w, $.adaptive_bitrate && (q = !0, le || ((le = i.create(Y, y, $.sync_buffer > 0 ? $.sync_buffer - 100 : $.buffering)).callbacks = {
                    switchRendition: ze,
                    isInProgress: qe,
                    isSeeking: Ge,
                    getCurStream: Qe,
                    probeStream: Ke,
                    cancelStream: Ye
                }), L.toggleBufferLineUp(q)), L.setOpusDecoderEnabled($.opus_decoder), Ae(), we(), r = "latency_tolerance" in $ ? $.latency_tolerance : 0, L.setLatencyTolerance(r / 1e3, $.buffering / 1e3, $.zapping), y.setMediaElement(J.mediaElement), Be()
            }, this.tgAudio = function () {
                F.stop_audio = !F.stop_audio
            }, this.destroy = function (e) {
                !function (e) {
                    le && le.stop({hard: !0}), F.close(), J && J.removePip((function () {
                        me.stop(), Te(!0), J.destroy(), J = void 0, L.clear(), e && e()
                    })), xe(), Ce();
                    for (var t = 0; t < R.length; t++) R[t].close();
                    R = [], be(), $ = void 0
                }(e)
            }, this.refreshVUMeterUI = function () {
                X && X.refreshUI(ie ? ie.getAudioInfo() : void 0)
            }
        }
    }, function (e, t, i) {
        "use strict";
        var n, r, a, s = i(2), o = i(25), u = i(119), c = i(4), l = i(9), h = i(19), f = i(76), d = i(30), p = i(144),
            v = i(24), m = i(6), g = i(12), y = i(96), _ = i(145), b = i(180).set, A = i(249), w = i(252), S = i(148),
            k = i(253), C = i(26), T = i(97), x = i(98), P = i(99), E = x.CONSTRUCTOR, B = x.REJECTION_EVENT,
            M = x.SUBCLASSING, R = C.getterFor("Promise"), I = C.set, F = T && T.prototype, L = T, O = F,
            D = c.TypeError, j = c.document, U = c.process, V = P.f, N = V,
            W = !!(j && j.createEvent && c.dispatchEvent), H = function (e) {
                var t;
                return !(!g(e) || !m(t = e.then)) && t
            }, z = function (e, t) {
                var i, n, r, a = t.value, s = 1 == t.state, o = s ? e.ok : e.fail, u = e.resolve, c = e.reject,
                    h = e.domain;
                try {
                    o ? (s || (2 === t.rejection && K(t), t.rejection = 1), !0 === o ? i = a : (h && h.enter(), i = o(a), h && (h.exit(), r = !0)), i === e.promise ? c(D("Promise-chain cycle")) : (n = H(i)) ? l(n, i, u, c) : u(i)) : c(a)
                } catch (e) {
                    h && !r && h.exit(), c(e)
                }
            }, q = function (e, t) {
                e.notified || (e.notified = !0, A((function () {
                    for (var i, n = e.reactions; i = n.get();) z(i, e);
                    e.notified = !1, t && !e.rejection && Q(e)
                })))
            }, G = function (e, t, i) {
                var n, r;
                W ? ((n = j.createEvent("Event")).promise = t, n.reason = i, n.initEvent(e, !1, !0), c.dispatchEvent(n)) : n = {
                    promise: t,
                    reason: i
                }, !B && (r = c["on" + e]) ? r(n) : "unhandledrejection" === e && w("Unhandled promise rejection", i)
            }, Q = function (e) {
                l(b, c, (function () {
                    var t, i = e.facade, n = e.value;
                    if (Y(e) && (t = S((function () {
                        u ? U.emit("unhandledRejection", n, i) : G("unhandledrejection", i, n)
                    })), e.rejection = u || Y(e) ? 2 : 1, t.error)) throw t.value
                }))
            }, Y = function (e) {
                return 1 !== e.rejection && !e.parent
            }, K = function (e) {
                l(b, c, (function () {
                    var t = e.facade;
                    u ? U.emit("rejectionHandled", t) : G("rejectionhandled", t, e.value)
                }))
            }, J = function (e, t, i) {
                return function (n) {
                    e(t, n, i)
                }
            }, X = function (e, t, i) {
                e.done || (e.done = !0, i && (e = i), e.value = t, e.state = 2, q(e, !0))
            }, Z = function (e, t, i) {
                if (!e.done) {
                    e.done = !0, i && (e = i);
                    try {
                        if (e.facade === t) throw D("Promise can't be resolved itself");
                        var n = H(t);
                        n ? A((function () {
                            var i = {done: !1};
                            try {
                                l(n, t, J(Z, i, e), J(X, i, e))
                            } catch (t) {
                                X(i, t, e)
                            }
                        })) : (e.value = t, e.state = 1, q(e, !1))
                    } catch (t) {
                        X({done: !1}, t, e)
                    }
                }
            };
        if (E && (O = (L = function (e) {
            y(this, O), v(e), l(n, this);
            var t = R(this);
            try {
                e(J(Z, t), J(X, t))
            } catch (e) {
                X(t, e)
            }
        }).prototype, (n = function (e) {
            I(this, {
                type: "Promise",
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new k,
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = h(O, "then", (function (e, t) {
            var i = R(this), n = V(_(this, L));
            return i.parent = !0, n.ok = !m(e) || e, n.fail = m(t) && t, n.domain = u ? U.domain : void 0, 0 == i.state ? i.reactions.add(n) : A((function () {
                z(n, i)
            })), n.promise
        })), r = function () {
            var e = new n, t = R(e);
            this.promise = e, this.resolve = J(Z, t), this.reject = J(X, t)
        }, P.f = V = function (e) {
            return e === L || void 0 === e ? new r(e) : N(e)
        }, !o && m(T) && F !== Object.prototype)) {
            a = F.then, M || h(F, "then", (function (e, t) {
                var i = this;
                return new L((function (e, t) {
                    l(a, i, e, t)
                })).then(e, t)
            }), {unsafe: !0});
            try {
                delete F.constructor
            } catch (e) {
            }
            f && f(F, O)
        }
        s({global: !0, constructor: !0, wrap: !0, forced: E}, {Promise: L}), d(L, "Promise", !1, !0), p("Promise")
    }, function (e, t, i) {
        var n = i(6), r = String, a = TypeError;
        e.exports = function (e) {
            if ("object" == typeof e || n(e)) return e;
            throw a("Can't set " + r(e) + " as a prototype")
        }
    }, function (e, t, i) {
        var n, r, a, s, o, u, c, l, h = i(4), f = i(70), d = i(73).f, p = i(180).set, v = i(182), m = i(250),
            g = i(251), y = i(119), _ = h.MutationObserver || h.WebKitMutationObserver, b = h.document, A = h.process,
            w = h.Promise, S = d(h, "queueMicrotask"), k = S && S.value;
        k || (n = function () {
            var e, t;
            for (y && (e = A.domain) && e.exit(); r;) {
                t = r.fn, r = r.next;
                try {
                    t()
                } catch (e) {
                    throw r ? s() : a = void 0, e
                }
            }
            a = void 0, e && e.enter()
        }, v || y || g || !_ || !b ? !m && w && w.resolve ? ((c = w.resolve(void 0)).constructor = w, l = f(c.then, c), s = function () {
            l(n)
        }) : y ? s = function () {
            A.nextTick(n)
        } : (p = f(p, h), s = function () {
            p(n)
        }) : (o = !0, u = b.createTextNode(""), new _(n).observe(u, {characterData: !0}), s = function () {
            u.data = o = !o
        })), e.exports = k || function (e) {
            var t = {fn: e, next: void 0};
            a && (a.next = t), r || (r = t, s()), a = t
        }
    }, function (e, t, i) {
        var n = i(67), r = i(4);
        e.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== r.Pebble
    }, function (e, t, i) {
        var n = i(67);
        e.exports = /web0s(?!.*chrome)/i.test(n)
    }, function (e, t, i) {
        var n = i(4);
        e.exports = function (e, t) {
            var i = n.console;
            i && i.error && (1 == arguments.length ? i.error(e) : i.error(e, t))
        }
    }, function (e, t) {
        var i = function () {
            this.head = null, this.tail = null
        };
        i.prototype = {
            add: function (e) {
                var t = {item: e, next: null};
                this.head ? this.tail.next = t : this.head = t, this.tail = t
            }, get: function () {
                var e = this.head;
                if (e) return this.head = e.next, this.tail === e && (this.tail = null), e.item
            }
        }, e.exports = i
    }, function (e, t, i) {
        var n = i(183), r = i(119);
        e.exports = !n && !r && "object" == typeof window && "object" == typeof document
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(9), a = i(24), s = i(99), o = i(148), u = i(184);
        n({target: "Promise", stat: !0, forced: i(186)}, {
            all: function (e) {
                var t = this, i = s.f(t), n = i.resolve, c = i.reject, l = o((function () {
                    var i = a(t.resolve), s = [], o = 0, l = 1;
                    u(e, (function (e) {
                        var a = o++, u = !1;
                        l++, r(i, t, e).then((function (e) {
                            u || (u = !0, s[a] = e, --l || n(s))
                        }), c)
                    })), --l || n(s)
                }));
                return l.error && c(l.value), i.promise
            }
        })
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(25), a = i(98).CONSTRUCTOR, s = i(97), o = i(22), u = i(6), c = i(19), l = s && s.prototype;
        if (n({target: "Promise", proto: !0, forced: a, real: !0}, {
            catch: function (e) {
                return this.then(void 0, e)
            }
        }), !r && u(s)) {
            var h = o("Promise").prototype.catch;
            l.catch !== h && c(l, "catch", h, {unsafe: !0})
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(9), a = i(24), s = i(99), o = i(148), u = i(184);
        n({target: "Promise", stat: !0, forced: i(186)}, {
            race: function (e) {
                var t = this, i = s.f(t), n = i.reject, c = o((function () {
                    var s = a(t.resolve);
                    u(e, (function (e) {
                        r(s, t, e).then(i.resolve, n)
                    }))
                }));
                return c.error && n(c.value), i.promise
            }
        })
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(9), a = i(99);
        n({target: "Promise", stat: !0, forced: i(98).CONSTRUCTOR}, {
            reject: function (e) {
                var t = a.f(this);
                return r(t.reject, void 0, e), t.promise
            }
        })
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(22), a = i(25), s = i(97), o = i(98).CONSTRUCTOR, u = i(260), c = r("Promise"), l = a && !o;
        n({target: "Promise", stat: !0, forced: a || o}, {
            resolve: function (e) {
                return u(l && this === c ? s : this, e)
            }
        })
    }, function (e, t, i) {
        var n = i(13), r = i(12), a = i(99);
        e.exports = function (e, t) {
            if (n(e), r(t) && t.constructor === e) return t;
            var i = a.f(e);
            return (0, i.resolve)(t), i.promise
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(4), a = i(9), s = i(1), o = i(25), u = i(10), c = i(83), l = i(3), h = i(11), f = i(34),
            d = i(13), p = i(29), v = i(92), m = i(17), g = i(74), y = i(38), _ = i(150), b = i(87), A = i(262),
            w = i(117), S = i(73), k = i(14), C = i(188), T = i(137), x = i(19), P = i(85), E = i(115), B = i(116),
            M = i(113), R = i(5), I = i(189), F = i(124), L = i(264), O = i(30), D = i(26), j = i(28).forEach,
            U = E("hidden"), V = D.set, N = D.getterFor("Symbol"), W = Object.prototype, H = r.Symbol,
            z = H && H.prototype, q = r.TypeError, G = r.QObject, Q = S.f, Y = k.f, K = A.f, J = T.f, X = s([].push),
            Z = P("symbols"), $ = P("op-symbols"), ee = P("wks"), te = !G || !G.prototype || !G.prototype.findChild,
            ie = u && l((function () {
                return 7 != y(Y({}, "a", {
                    get: function () {
                        return Y(this, "a", {value: 7}).a
                    }
                })).a
            })) ? function (e, t, i) {
                var n = Q(W, t);
                n && delete W[t], Y(e, t, i), n && e !== W && Y(W, t, n)
            } : Y, ne = function (e, t) {
                var i = Z[e] = y(z);
                return V(i, {type: "Symbol", tag: e, description: t}), u || (i.description = t), i
            }, re = function (e, t, i) {
                e === W && re($, t, i), d(e);
                var n = v(t);
                return d(i), h(Z, n) ? (i.enumerable ? (h(e, U) && e[U][n] && (e[U][n] = !1), i = y(i, {enumerable: g(0, !1)})) : (h(e, U) || Y(e, U, g(1, {})), e[U][n] = !0), ie(e, n, i)) : Y(e, n, i)
            }, ae = function (e, t) {
                d(e);
                var i = p(t), n = _(i).concat(ce(i));
                return j(n, (function (t) {
                    u && !a(se, i, t) || re(e, t, i[t])
                })), e
            }, se = function (e) {
                var t = v(e), i = a(J, this, t);
                return !(this === W && h(Z, t) && !h($, t)) && (!(i || !h(this, t) || !h(Z, t) || h(this, U) && this[U][t]) || i)
            }, oe = function (e, t) {
                var i = p(e), n = v(t);
                if (i !== W || !h(Z, n) || h($, n)) {
                    var r = Q(i, n);
                    return !r || !h(Z, n) || h(i, U) && i[U][n] || (r.enumerable = !0), r
                }
            }, ue = function (e) {
                var t = K(p(e)), i = [];
                return j(t, (function (e) {
                    h(Z, e) || h(B, e) || X(i, e)
                })), i
            }, ce = function (e) {
                var t = e === W, i = K(t ? $ : p(e)), n = [];
                return j(i, (function (e) {
                    !h(Z, e) || t && !h(W, e) || X(n, Z[e])
                })), n
            };
        c || (x(z = (H = function () {
            if (f(z, this)) throw q("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0, t = M(e), i = function (e) {
                this === W && a(i, $, e), h(this, U) && h(this[U], t) && (this[U][t] = !1), ie(this, t, g(1, e))
            };
            return u && te && ie(W, t, {configurable: !0, set: i}), ne(t, e)
        }).prototype, "toString", (function () {
            return N(this).tag
        })), x(H, "withoutSetter", (function (e) {
            return ne(M(e), e)
        })), T.f = se, k.f = re, C.f = ae, S.f = oe, b.f = A.f = ue, w.f = ce, I.f = function (e) {
            return ne(R(e), e)
        }, u && (Y(z, "description", {
            configurable: !0, get: function () {
                return N(this).description
            }
        }), o || x(W, "propertyIsEnumerable", se, {unsafe: !0}))), n({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        }, {Symbol: H}), j(_(ee), (function (e) {
            F(e)
        })), n({target: "Symbol", stat: !0, forced: !c}, {
            useSetter: function () {
                te = !0
            }, useSimple: function () {
                te = !1
            }
        }), n({target: "Object", stat: !0, forced: !c, sham: !u}, {
            create: function (e, t) {
                return void 0 === t ? y(e) : ae(y(e), t)
            }, defineProperty: re, defineProperties: ae, getOwnPropertyDescriptor: oe
        }), n({target: "Object", stat: !0, forced: !c}, {getOwnPropertyNames: ue}), L(), O(H, "Symbol"), B[U] = !0
    }, function (e, t, i) {
        var n = i(65), r = i(29), a = i(87).f, s = i(123),
            o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return o && "Window" == n(e) ? function (e) {
                try {
                    return a(e)
                } catch (e) {
                    return s(o)
                }
            }(e) : a(r(e))
        }
    }, function (e, t, i) {
        var n = i(4);
        e.exports = n
    }, function (e, t, i) {
        var n = i(9), r = i(22), a = i(5), s = i(19);
        e.exports = function () {
            var e = r("Symbol"), t = e && e.prototype, i = t && t.valueOf, o = a("toPrimitive");
            t && !t[o] && s(t, o, (function (e) {
                return n(i, this)
            }), {arity: 1})
        }
    }, function (e, t, i) {
        var n = i(88), r = i(120), a = i(12), s = i(5)("species"), o = Array;
        e.exports = function (e) {
            var t;
            return n(e) && (t = e.constructor, (r(t) && (t === o || n(t.prototype)) || a(t) && null === (t = t[s])) && (t = void 0)), void 0 === t ? o : t
        }
    }, function (e, t, i) {
        var n = i(2), r = i(22), a = i(11), s = i(17), o = i(85), u = i(190), c = o("string-to-symbol-registry"),
            l = o("symbol-to-string-registry");
        n({target: "Symbol", stat: !0, forced: !u}, {
            for: function (e) {
                var t = s(e);
                if (a(c, t)) return c[t];
                var i = r("Symbol")(t);
                return c[t] = i, l[i] = t, i
            }
        })
    }, function (e, t, i) {
        var n = i(2), r = i(11), a = i(82), s = i(75), o = i(85), u = i(190), c = o("symbol-to-string-registry");
        n({target: "Symbol", stat: !0, forced: !u}, {
            keyFor: function (e) {
                if (!a(e)) throw TypeError(s(e) + " is not a symbol");
                if (r(c, e)) return c[e]
            }
        })
    }, function (e, t, i) {
        var n = i(2), r = i(22), a = i(69), s = i(9), o = i(1), u = i(3), c = i(88), l = i(6), h = i(12), f = i(82),
            d = i(77), p = i(83), v = r("JSON", "stringify"), m = o(/./.exec), g = o("".charAt), y = o("".charCodeAt),
            _ = o("".replace), b = o(1..toString), A = /[\uD800-\uDFFF]/g, w = /^[\uD800-\uDBFF]$/,
            S = /^[\uDC00-\uDFFF]$/, k = !p || u((function () {
                var e = r("Symbol")();
                return "[null]" != v([e]) || "{}" != v({a: e}) || "{}" != v(Object(e))
            })), C = u((function () {
                return '"\\udf06\\ud834"' !== v("\udf06\ud834") || '"\\udead"' !== v("\udead")
            })), T = function (e, t) {
                var i = d(arguments), n = t;
                if ((h(t) || void 0 !== e) && !f(e)) return c(t) || (t = function (e, t) {
                    if (l(n) && (t = s(n, this, e, t)), !f(t)) return t
                }), i[1] = t, a(v, null, i)
            }, x = function (e, t, i) {
                var n = g(i, t - 1), r = g(i, t + 1);
                return m(w, e) && !m(S, r) || m(S, e) && !m(w, n) ? "\\u" + b(y(e, 0), 16) : e
            };
        v && n({target: "JSON", stat: !0, arity: 3, forced: k || C}, {
            stringify: function (e, t, i) {
                var n = d(arguments), r = a(k ? T : v, null, n);
                return C && "string" == typeof r ? _(r, A, x) : r
            }
        })
    }, function (e, t, i) {
        var n = i(2), r = i(83), a = i(3), s = i(117), o = i(18);
        n({
            target: "Object", stat: !0, forced: !r || a((function () {
                s.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (e) {
                var t = s.f;
                return t ? t(o(e)) : []
            }
        })
    }, function (e, t) {
        var i = Array, n = Math.abs, r = Math.pow, a = Math.floor, s = Math.log, o = Math.LN2;
        e.exports = {
            pack: function (e, t, u) {
                var c, l, h, f = i(u), d = 8 * u - t - 1, p = (1 << d) - 1, v = p >> 1,
                    m = 23 === t ? r(2, -24) - r(2, -77) : 0, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, y = 0;
                for ((e = n(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, c = p) : (c = a(s(e) / o), e * (h = r(2, -c)) < 1 && (c--, h *= 2), (e += c + v >= 1 ? m / h : m * r(2, 1 - v)) * h >= 2 && (c++, h /= 2), c + v >= p ? (l = 0, c = p) : c + v >= 1 ? (l = (e * h - 1) * r(2, t), c += v) : (l = e * r(2, v - 1) * r(2, t), c = 0)); t >= 8;) f[y++] = 255 & l, l /= 256, t -= 8;
                for (c = c << t | l, d += t; d > 0;) f[y++] = 255 & c, c /= 256, d -= 8;
                return f[--y] |= 128 * g, f
            }, unpack: function (e, t) {
                var i, n = e.length, a = 8 * n - t - 1, s = (1 << a) - 1, o = s >> 1, u = a - 7, c = n - 1, l = e[c--],
                    h = 127 & l;
                for (l >>= 7; u > 0;) h = 256 * h + e[c--], u -= 8;
                for (i = h & (1 << -u) - 1, h >>= -u, u += t; u > 0;) i = 256 * i + e[c--], u -= 8;
                if (0 === h) h = 1 - o; else {
                    if (h === s) return i ? NaN : l ? -1 / 0 : 1 / 0;
                    i += r(2, t), h -= o
                }
                return (l ? -1 : 1) * i * r(2, h - t)
            }
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(147), r = i(37);
        e.exports = n ? {}.toString : function () {
            return "[object " + r(this) + "]"
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(4), a = i(9), s = i(10), o = i(273), u = i(7), c = i(126), l = i(96), h = i(74), f = i(35),
            d = i(274), p = i(36), v = i(201), m = i(203), g = i(92), y = i(11), _ = i(37), b = i(12), A = i(82),
            w = i(38), S = i(34), k = i(76), C = i(87).f, T = i(276), x = i(28).forEach, P = i(144), E = i(14),
            B = i(73), M = i(26), R = i(205), I = M.get, F = M.set, L = M.enforce, O = E.f, D = B.f, j = Math.round,
            U = r.RangeError, V = c.ArrayBuffer, N = V.prototype, W = c.DataView, H = u.NATIVE_ARRAY_BUFFER_VIEWS,
            z = u.TYPED_ARRAY_TAG, q = u.TypedArray, G = u.TypedArrayPrototype, Q = u.aTypedArrayConstructor,
            Y = u.isTypedArray, K = function (e, t) {
                Q(e);
                for (var i = 0, n = t.length, r = new e(n); n > i;) r[i] = t[i++];
                return r
            }, J = function (e, t) {
                O(e, t, {
                    get: function () {
                        return I(this)[t]
                    }
                })
            }, X = function (e) {
                var t;
                return S(N, e) || "ArrayBuffer" == (t = _(e)) || "SharedArrayBuffer" == t
            }, Z = function (e, t) {
                return Y(e) && !A(t) && t in e && d(+t) && t >= 0
            }, $ = function (e, t) {
                return t = g(t), Z(e, t) ? h(2, e[t]) : D(e, t)
            }, ee = function (e, t, i) {
                return t = g(t), !(Z(e, t) && b(i) && y(i, "value")) || y(i, "get") || y(i, "set") || i.configurable || y(i, "writable") && !i.writable || y(i, "enumerable") && !i.enumerable ? O(e, t, i) : (e[t] = i.value, e)
            };
        s ? (H || (B.f = $, E.f = ee, J(G, "buffer"), J(G, "byteOffset"), J(G, "byteLength"), J(G, "length")), n({
            target: "Object",
            stat: !0,
            forced: !H
        }, {getOwnPropertyDescriptor: $, defineProperty: ee}), e.exports = function (e, t, i) {
            var s = e.match(/\d+$/)[0] / 8, u = e + (i ? "Clamped" : "") + "Array", c = "get" + e, h = "set" + e,
                d = r[u], g = d, y = g && g.prototype, _ = {}, A = function (e, t) {
                    O(e, t, {
                        get: function () {
                            return function (e, t) {
                                var i = I(e);
                                return i.view[c](t * s + i.byteOffset, !0)
                            }(this, t)
                        }, set: function (e) {
                            return function (e, t, n) {
                                var r = I(e);
                                i && (n = (n = j(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), r.view[h](t * s + r.byteOffset, n, !0)
                            }(this, t, e)
                        }, enumerable: !0
                    })
                };
            H ? o && (g = t((function (e, t, i, n) {
                return l(e, y), R(b(t) ? X(t) ? void 0 !== n ? new d(t, m(i, s), n) : void 0 !== i ? new d(t, m(i, s)) : new d(t) : Y(t) ? K(g, t) : a(T, g, t) : new d(v(t)), e, g)
            })), k && k(g, q), x(C(d), (function (e) {
                e in g || f(g, e, d[e])
            })), g.prototype = y) : (g = t((function (e, t, i, n) {
                l(e, y);
                var r, o, u, c = 0, h = 0;
                if (b(t)) {
                    if (!X(t)) return Y(t) ? K(g, t) : a(T, g, t);
                    r = t, h = m(i, s);
                    var f = t.byteLength;
                    if (void 0 === n) {
                        if (f % s) throw U("Wrong length");
                        if ((o = f - h) < 0) throw U("Wrong length")
                    } else if ((o = p(n) * s) + h > f) throw U("Wrong length");
                    u = o / s
                } else u = v(t), r = new V(o = u * s);
                for (F(e, {buffer: r, byteOffset: h, byteLength: o, length: u, view: new W(r)}); c < u;) A(e, c++)
            })), k && k(g, q), y = g.prototype = w(G)), y.constructor !== g && f(y, "constructor", g), L(y).TypedArrayConstructor = g, z && f(y, z, u);
            var S = g != d;
            _[u] = g, n({
                global: !0,
                constructor: !0,
                forced: S,
                sham: !H
            }, _), "BYTES_PER_ELEMENT" in g || f(g, "BYTES_PER_ELEMENT", s), "BYTES_PER_ELEMENT" in y || f(y, "BYTES_PER_ELEMENT", s), P(u)
        }) : e.exports = function () {
        }
    }, function (e, t, i) {
        var n = i(4), r = i(3), a = i(187), s = i(7).NATIVE_ARRAY_BUFFER_VIEWS, o = n.ArrayBuffer, u = n.Int8Array;
        e.exports = !s || !r((function () {
            u(1)
        })) || !r((function () {
            new u(-1)
        })) || !a((function (e) {
            new u, new u(null), new u(1.5), new u(e)
        }), !0) || r((function () {
            return 1 !== new u(new o(2), 1, void 0).length
        }))
    }, function (e, t, i) {
        var n = i(12), r = Math.floor;
        e.exports = Number.isInteger || function (e) {
            return !n(e) && isFinite(e) && r(e) === e
        }
    }, function (e, t, i) {
        var n = i(27), r = RangeError;
        e.exports = function (e) {
            var t = n(e);
            if (t < 0) throw r("The argument can't be less than 0");
            return t
        }
    }, function (e, t, i) {
        var n = i(70), r = i(9), a = i(146), s = i(18), o = i(20), u = i(122), c = i(101), l = i(149), h = i(277),
            f = i(7).aTypedArrayConstructor, d = i(204);
        e.exports = function (e) {
            var t, i, p, v, m, g, y, _, b = a(this), A = s(e), w = arguments.length, S = w > 1 ? arguments[1] : void 0,
                k = void 0 !== S, C = c(A);
            if (C && !l(C)) for (_ = (y = u(A, C)).next, A = []; !(g = r(_, y)).done;) A.push(g.value);
            for (k && w > 2 && (S = n(S, arguments[2])), i = o(A), p = new (f(b))(i), v = h(p), t = 0; i > t; t++) m = k ? S(A[t], t) : A[t], p[t] = v ? d(m) : +m;
            return p
        }
    }, function (e, t, i) {
        var n = i(37), r = i(1)("".slice);
        e.exports = function (e) {
            return "Big" === r(n(e), 0, 3)
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(18), r = i(68), a = i(20), s = i(162), o = Math.min;
        e.exports = [].copyWithin || function (e, t) {
            var i = n(this), u = a(i), c = r(e, u), l = r(t, u), h = arguments.length > 2 ? arguments[2] : void 0,
                f = o((void 0 === h ? u : r(h, u)) - l, u - c), d = 1;
            for (l < c && c < l + f && (d = -1, l += f - 1, c += f - 1); f-- > 0;) l in i ? i[c] = i[l] : s(i, c), c += d, l += d;
            return i
        }
    }, function (e, t, i) {
        var n = i(280), r = i(127);
        e.exports = function (e, t) {
            return n(r(e), t)
        }
    }, function (e, t, i) {
        var n = i(20);
        e.exports = function (e, t) {
            for (var i = 0, r = n(t), a = new e(r); r > i;) a[i] = t[i++];
            return a
        }
    }, function (e, t, i) {
        var n = i(4), r = i(3), a = i(1), s = i(17), o = i(129).trim, u = i(130), c = n.parseInt, l = n.Symbol,
            h = l && l.iterator, f = /^[+-]?0x/i, d = a(f.exec),
            p = 8 !== c(u + "08") || 22 !== c(u + "0x16") || h && !r((function () {
                c(Object(h))
            }));
        e.exports = p ? function (e, t) {
            var i = o(s(e));
            return c(i, t >>> 0 || (d(f, i) ? 16 : 10))
        } : c
    }, function (e, t, i) {
        "use strict";
        var n = i(10), r = i(88), a = TypeError, s = Object.getOwnPropertyDescriptor, o = n && !function () {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], "length", {writable: !1}).length = 1
            } catch (e) {
                return e instanceof TypeError
            }
        }();
        e.exports = o ? function (e, t) {
            if (r(e) && !s(e, "length").writable) throw a("Cannot set read only .length");
            return e.length = t
        } : function (e, t) {
            return e.length = t
        }
    }, function (e, t, i) {
        var n = i(2), r = i(211);
        n({target: "Object", stat: !0, arity: 2, forced: Object.assign !== r}, {assign: r})
    }, function (e, t, i) {
        "use strict";
        var n, r = i(2), a = i(1), s = i(73).f, o = i(36), u = i(17), c = i(285), l = i(66), h = i(287), f = i(25),
            d = a("".endsWith), p = a("".slice), v = Math.min, m = h("endsWith");
        r({
            target: "String",
            proto: !0,
            forced: !(!f && !m && (n = s(String.prototype, "endsWith"), n && !n.writable) || m)
        }, {
            endsWith: function (e) {
                var t = u(l(this));
                c(e);
                var i = arguments.length > 1 ? arguments[1] : void 0, n = t.length, r = void 0 === i ? n : v(o(i), n),
                    a = u(e);
                return d ? d(t, a, r) : p(t, r - a.length, r) === a
            }
        })
    }, function (e, t, i) {
        var n = i(286), r = TypeError;
        e.exports = function (e) {
            if (n(e)) throw r("The method doesn't accept regular expressions");
            return e
        }
    }, function (e, t, i) {
        var n = i(12), r = i(65), a = i(5)("match");
        e.exports = function (e) {
            var t;
            return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == r(e))
        }
    }, function (e, t, i) {
        var n = i(5)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (i) {
                try {
                    return t[n] = !1, "/./"[e](t)
                } catch (e) {
                }
            }
            return !1
        }
    }, function (e, t, i) {
        var n = i(4), r = i(3), a = i(1), s = i(17), o = i(129).trim, u = i(130), c = a("".charAt), l = n.parseFloat,
            h = n.Symbol, f = h && h.iterator, d = 1 / l(u + "-0") != -1 / 0 || f && !r((function () {
                l(Object(f))
            }));
        e.exports = d ? function (e) {
            var t = o(s(e)), i = l(t);
            return 0 === i && "-" == c(t, 0) ? -0 : i
        } : l
    }, function (e, t, i) {
        var n = i(2), r = i(4), a = i(212).setInterval;
        n({global: !0, bind: !0, forced: r.setInterval !== a}, {setInterval: a})
    }, function (e, t, i) {
        var n = i(2), r = i(4), a = i(212).setTimeout;
        n({global: !0, bind: !0, forced: r.setTimeout !== a}, {setTimeout: a})
    }, function (e, t, i) {
        var n = i(9), r = i(11), a = i(34), s = i(164), o = RegExp.prototype;
        e.exports = function (e) {
            var t = e.flags;
            return void 0 !== t || "flags" in o || r(e, "flags") || !a(o, e) ? t : n(s, e)
        }
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(16), i(118), i(0), i(78), i(79), i(80), i(15), i(31), i(32), i(153), i(154), i(155), i(156), i(104), i(105), i(157), i(158), i(106), i(159), i(160), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(128), i(213), i(33), i(214), i(21), i(112), i(64);
        var r = f(i(165)), a = f(i(111)), s = f(i(227)), o = f(i(315)), u = f(i(319)),
            c = (f(i(320)), f(i(229)), i(232)), l = f(i(8)), h = f(i(132));

        function f(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function d() {
            d = function () {
                return e
            };
            var e = {}, t = Object.prototype, i = t.hasOwnProperty, r = Object.defineProperty || function (e, t, i) {
                    e[t] = i.value
                }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator",
                o = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";

            function c(e, t, i) {
                return Object.defineProperty(e, t, {value: i, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                c({}, "")
            } catch (e) {
                c = function (e, t, i) {
                    return e[t] = i
                }
            }

            function l(e, t, i, n) {
                var a = t && t.prototype instanceof p ? t : p, s = Object.create(a.prototype), o = new T(n || []);
                return r(s, "_invoke", {
                    value: function (e, t, i) {
                        var n = "suspendedStart";
                        return function (r, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw a;
                                return {value: void 0, done: !0}
                            }
                            for (i.method = r, i.arg = a; ;) {
                                var s = i.delegate;
                                if (s) {
                                    var o = S(s, i);
                                    if (o) {
                                        if (o === f) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                    if ("suspendedStart" === n) throw n = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                n = "executing";
                                var u = h(e, t, i);
                                if ("normal" === u.type) {
                                    if (n = i.done ? "completed" : "suspendedYield", u.arg === f) continue;
                                    return {value: u.arg, done: i.done}
                                }
                                "throw" === u.type && (n = "completed", i.method = "throw", i.arg = u.arg)
                            }
                        }
                    }(e, i, o)
                }), s
            }

            function h(e, t, i) {
                try {
                    return {type: "normal", arg: e.call(t, i)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            e.wrap = l;
            var f = {};

            function p() {
            }

            function v() {
            }

            function m() {
            }

            var g = {};
            c(g, s, (function () {
                return this
            }));
            var y = Object.getPrototypeOf, _ = y && y(y(x([])));
            _ && _ !== t && i.call(_, s) && (g = _);
            var b = m.prototype = p.prototype = Object.create(g);

            function A(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    c(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function w(e, t) {
                var a;
                r(this, "_invoke", {
                    value: function (r, s) {
                        function o() {
                            return new t((function (a, o) {
                                !function r(a, s, o, u) {
                                    var c = h(e[a], e, s);
                                    if ("throw" !== c.type) {
                                        var l = c.arg, f = l.value;
                                        return f && "object" == n(f) && i.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                            r("next", e, o, u)
                                        }), (function (e) {
                                            r("throw", e, o, u)
                                        })) : t.resolve(f).then((function (e) {
                                            l.value = e, o(l)
                                        }), (function (e) {
                                            return r("throw", e, o, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(r, s, a, o)
                            }))
                        }

                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function S(e, t) {
                var i = e.iterator[t.method];
                if (void 0 === i) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return f;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return f
                }
                var n = h(i, e.iterator, t.arg);
                if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, f;
                var r = n.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
            }

            function k(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function C(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(k, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (; ++n < e.length;) if (i.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return r.next = r
                    }
                }
                return {next: P}
            }

            function P() {
                return {value: void 0, done: !0}
            }

            return v.prototype = m, r(b, "constructor", {value: m, configurable: !0}), r(m, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = c(m, u, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, u, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, A(w.prototype), c(w.prototype, o, (function () {
                return this
            })), e.AsyncIterator = w, e.async = function (t, i, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new w(l(t, i, n, r), a);
                return e.isGeneratorFunction(i) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, A(b), c(b, u, "Generator"), c(b, s, (function () {
                return this
            })), c(b, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), i = [];
                for (var n in t) i.push(n);
                return i.reverse(), function e() {
                    for (; i.length;) {
                        var n = i.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = x, T.prototype = {
                constructor: T, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e) for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(i, n) {
                        return s.type = "throw", s.arg = e, t.next = i, n && (t.method = "next", t.arg = void 0), !!n
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r], s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var o = i.call(a, "catchLoc"), u = i.call(a, "finallyLoc");
                            if (o && u) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (o) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, f) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), C(i), f
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.tryLoc === e) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                C(i)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, i) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = void 0), f
                }
            }, e
        }

        function p(e, t, i, n, r, a, s) {
            try {
                var o = e[a](s), u = o.value
            } catch (e) {
                return void i(e)
            }
            o.done ? t(u) : Promise.resolve(u).then(n, r)
        }

        t.default = function (e) {
            var t, i, n;

            function f(f, v, m, g, y, _, b, A) {
                var w, S, k, C, T, x, P, E, B, M, R, I, F, L, O, D, j, U, V, N, W,
                    H = l.default.create(e, "Track " + v), z = f % parseInt("F0", 16), q = r.default.getInstance(e),
                    G = a.default.getInstance(e),
                    Q = (V = v, "vp8" === (N = m) || "vp9" === N ? "webm" : "opus" === N ? q.isCodecSupportedByMediaSource(V, N) ? "webm" : "pcm" : "mp4"),
                    Y = he(Q), K = c.TRACK_STATE.OPEN, J = b.buffering, X = J * g / 1e3, Z = J >= 1e3 ? .2 : J / 5e3,
                    $ = J, ee = [], te = [], ie = !1, ne = !1, re = 0, ae = !!b.sapAlignment, se = !1, oe = {}, ue = !1,
                    ce = [], le = !1;

                function he(r) {
                    switch (r) {
                        case"mp4":
                            return t || (t = new s.default(e)), t.create({fragmentFullGop: b.fragmentFullGop});
                        case"webm":
                            return i || (i = new o.default(e)), i.create();
                        case"pcm":
                            return n || (n = new u.default(e)), n.create();
                        default:
                            return H.error("_buildComposer container not supported"), null
                    }
                }

                function fe() {
                    void 0 !== U && (clearTimeout(U), U = void 0)
                }

                function de(e) {
                    e.data && (j = e.data, Y.setTrackParams(w, {
                        codec: m,
                        codecData: e.data
                    }), C.pushInit(Y.initSegment()))
                }

                function pe(e, t) {
                    var i = !1;
                    if ("mp4" == Q) if (t) if (i = !0, e) {
                        var n = t.byteLength;
                        if (n == e.byteLength) {
                            i = !1;
                            for (var r = 0; r < n; r++) if (t[r] !== e[r]) {
                                i = !0;
                                break
                            }
                        }
                    } else H.debug("isInitSegmentNew: current init segment data is empty"), i = !0; else H.error("isInitSegmentNew: received empty codecData");
                    return i
                }

                function ve() {
                    return S + 1
                }

                function me(e) {
                    void 0 === e && (e = 1e3), $ = J = e, X = J * g / 1e3, Z = J >= 1e3 ? .2 : J / 5e3, q.setLowBufferBorder(Z, v[0])
                }

                function ge() {
                    for (var e = 0; e < ee.length; e++) {
                        var t = ee[e];
                        we(t.sap, t.data, t.ts, t.offset)
                    }
                    ee = [], te = [], ne = !1
                }

                function ye(e, t) {
                    H.debug("flush all", e);
                    var i = 0, n = [];
                    for (i = 0; i < ce.length; i++) (void 0 === e || ce[i].ts < e) && n.push(ce[i]);
                    for (ce = [], i = 0; i < ee.length; i++) (void 0 === e || ee[i].ts < e) && n.push(ee[i]);
                    if (ee = [], te = [], ie) {
                        var r = n.length;
                        for (i = 0; i < r; i++) _e(n[i], e);
                        t || _e(null, e)
                    }
                    C && C.filterOut(e)
                }

                function _e(e, t) {
                    var i, n, r, a = e ? Y.mediaSegment(w, [e]) : Y.mediaSegment(w, [], !0);
                    a && (null == t || a.ts[0] < t) && (C.pushSegment(a.data, a.ts, a.sap), i = a.ts[0], n = a.sn, r = a.sap[0], T = i, R = n, r && (E = i))
                }

                function be(e) {
                    ee.length >= 2 && void 0 !== L && void 0 !== w && (K = c.TRACK_STATE.BUFFER, L(e, ee[0].ts / g), H.debug("process open state, base ts=".concat(ee[0].ts)))
                }

                function Ae(e) {
                    var t = (e - T) / g, i = Math.min(S / g, .0715);
                    return [t > 0 && t <= i, t, i]
                }

                function we(e, t, i, n) {
                    if (ie) !function (e, t, i, n) {
                        var r;
                        if (ue) {
                            if (Se(ce, t, i, n, e), ce[ce.length - 1].ts - ce[0].ts >= $ * g / 1e3) {
                                var a = ce.splice(0, 1);
                                r = {data: a[0].data, ts: a[0].ts, offset: a[0].offset, sap: a[0].sap}
                            }
                        } else r = {data: t, ts: i, offset: n, sap: e};
                        x = i, P = n, r && _e(r)
                    }(e, t, i, n); else if (e) {
                        if (le && c.TRACK_STATE.CLOSED !== K) {
                            var r = {codec: m};
                            j && (r.codecData = j), Y.setTrackParams(w, r), C.pushInit(Y.initSegment(), Ae(i)[0]), le = !1
                        }
                        !function (e, t, i) {
                            Y.setBaseSample(w, e, t, i), H.debug("process first frame", T, x, t), T = void 0, E = void 0, x = t, P = i, ie = !0
                        }(t, i, n)
                    }
                }

                function Se(e, t, i, n, r) {
                    e.push({data: t, ts: i, offset: n, sap: r})
                }

                A.add(z, v, g), this.setupMediaService = function () {
                    q.setupMediaApi(v, m), q.setLowBufferBorder(Z, v[0])
                }, this.attachToMediaService = function () {
                    (C = q.createSourceBuffer(v, m, g, y)).removeAll()
                }, this.isAttachedToMedia = function () {
                    return void 0 !== C
                }, this.setupCaptions = function () {
                }, this.id = function () {
                    return z
                }, this.timescale = function () {
                    return g
                }, this.getBufferedStart = function () {
                    var e;
                    return ee.length > 0 && (e = ee[0].ts), e
                }, this.getAudioInfo = function () {
                    return Y.getTrackAudioInfo(w)
                }, this.inTransition = function (e) {
                    return void 0 !== e && (se = e, oe = {}), se
                }, this.setTransitionParams = function (e) {
                    (oe = e).container = ["vp8", "vp9", "opus"].includes(oe.codec) ? "webm" : "mp4"
                }, this.isTransitionSupported = function () {
                    var e = !1;
                    return oe && oe.container == Q && (e = q.isCodecSupported(v, oe.codec)), e || H.error("transition is not supported: ", m), e
                }, this.startTransition = function (e) {
                    oe.mode = void 0 !== e ? e : c.TRANSITION_MODE.SMOOTH, oe.initSegment = void 0, oe.startupBuffer = [], oe.initDataBuffer = [], oe.curStreamCancelled = !1, oe.newSapTimes = [], oe.curSapTimes = [], ue = !0, A.add(oe.id, v, g), q.setTransitOn(), H.debug("transit started", oe.id)
                }, this.setSapAlignment = function (e) {
                    ae = e
                }, this.setBuffering = function (e) {
                    me(e)
                }, this.getStreamName = function () {
                    return _
                }, this.getTransitionStreamName = function () {
                    return oe.name
                }, this.transitionStreamId = function () {
                    return oe.id
                }, this.type = function () {
                    return v
                }, this.latency = function (e) {
                    var t, i = A.getMetrics(z);
                    return i && (t = performance.now() / 1e3 - e - i.latencySubt), t
                }, this.isVideo = function () {
                    return "video" == v
                }, this.isAudio = function () {
                    return "audio" == v
                }, this.isActual = function () {
                    return c.TRACK_STATE.CLOSED != K
                }, this.isInited = function () {
                    return void 0 !== w
                }, this.isTransitionInited = function () {
                    return void 0 !== oe.cTrackId
                }, this.isOpen = function () {
                    return c.TRACK_STATE.OPEN == K
                }, this.isBuffering = function () {
                    return c.TRACK_STATE.BUFFER == K
                }, this.isBackingUp = function () {
                    return c.TRACK_STATE.BACKUP == K
                }, this.isStarving = function () {
                    var e = !1;
                    if (c.TRACK_STATE.BUFFER == K || c.TRACK_STATE.OPEN == K) {
                        var t = A.getMetrics(z).avgBandwidth(), i = A.getMetrics(z).avgRate();
                        e = t > 0 && 1.5 * t < i, H.debug("video is " + (e ? "starving" : "not starving"), t, i)
                    }
                    return e
                }, this.sapOffset = function () {
                    var e = 1e3 * (1 + (x - E) / g);
                    return e < 4e3 && (e += 1e4), isNaN(e) ? 1e4 : e
                }, this.reset = function () {
                    H.debug("reset " + _), K = c.TRACK_STATE.OPEN, C && C.removeAll(), Y.reset(), w = void 0, ee = [], te = [], ce = [], S = void 0, ie = !1, ne = !1, k = void 0, se = void 0, re = 0, A.remove(z), ue && (A.remove(oe.id), z = oe.id, b = oe.streamOptions, _ = oe.name), A.add(z, v, g), ue = !1, oe = {}, I = void 0, T = void 0, x = void 0, P = void 0, E = void 0, B = void 0, M = void 0, me(void 0 !== b.buffering ? b.buffering : J), le = !1, j = void 0, fe()
                }, this.close = function () {
                    K = c.TRACK_STATE.CLOSED, C && (C.closed = !0), Y.free(), Y = void 0, ee = [], te = [], A.remove(z), void 0 !== oe.id && A.remove(oe.id), fe()
                }, this.backup = function () {
                    var e;
                    return C.closed = !0, this.isTransitionInited() ? (H.debug("backup track, transition is inited"), oe.curStreamCancelled || (O(this), oe.curStreamCancelled = !0), I = {bufferLength: C.getBufferingLength()}, this.completeTransition(), ee.length > 0 && (e = ee[0].ts / g)) : (I = C.getSegments(), H.debug("backup track", I.segments.length, I.start), I.init && I.segments && I.segments.length > I.start && (K = c.TRACK_STATE.BACKUP, e = I.segments[I.start].ts / g, L(this, e))), e
                }, this.recover = function () {
                    if (I) if (K = c.TRACK_STATE.ACTIVE, I.init) {
                        H.debug("recover track");
                        var e = 0, t = 0, i = I.segments.length;
                        for (e = I.start; e < i; e++) if (I.segments[e].init) I.init = I.segments[e].data; else {
                            if (!(I.segments[e].ts <= k)) break;
                            I.segments[e].sap && (t = e)
                        }
                        for (C.pushInit(I.init), e = t; e < i; e++) {
                            var n = I.segments[e];
                            n.init ? C.pushInit(n.data) : C.pushSegment(n.data, [n.ts], [n.sap])
                        }
                        (i - t - 1 > 0 || ee.length > 0) && (H.debug("recover sapSet = true", i, t, ee.length), ie = !0), ye(void 0, !0)
                    } else void 0 !== I.bufferLength && (H.debug("recover track from transition"), q.setTransitOn(), C.setBufferingLength(I.bufferLength), this.applyTransition(!0))
                }, this.populateInitDataBuffer = function (e) {
                    te.push({idx: ee.length, data: e}), H.debug("Recover populateInitDataBuffer", e.byteLength)
                }, this.populateStartupBuffer = function (e, t, i, n) {
                    Se(ee, t, i, n, e), x = i, P = n, H.debug("Recover populateStartupBuffer", e, t.byteLength, i, n)
                }, this.isRecoverable = function () {
                    return I && (void 0 !== I.init || void 0 !== I.bufferLength)
                }, this.flush = function () {
                    ye()
                }, this.buffer = function () {
                    K = c.TRACK_STATE.BUFFER, H.debug("buffering...")
                }, this.setBufferDelay = function () {
                    ne = !0
                }, this.activate = function () {
                    c.TRACK_STATE.BUFFER === K && (ge(), K = c.TRACK_STATE.ACTIVE, F())
                }, this.bufferStatus = function (t) {
                    var i = {lvl: void 0, low: !1};
                    if (c.TRACK_STATE.ACTIVE == K) {
                        var n = 0;
                        i.lvl = 0, x && (n = Y.getRealTs(w, x + P) / g, i.lvl = n - t, i.lvl < 0 && (i.lvl = 0)), q.setCurrentBufferLevel(v, m, i.lvl), h.default.display(e, v + "-buffer", i.lvl.toFixed(4)), le || (i.lvl < Z && (H.debug("bufferStatus low buffer ", t, x + P), A.reportLowBuffer(z), i.low = !0), A.reportBufLevel(z, i.lvl, n))
                    }
                    return i
                }, this.updateBufferedState = function (t, i) {
                    if (c.TRACK_STATE.BUFFER == K) {
                        var n = 0, r = 0, a = 0;
                        B && ((r = (n = Y.getRealTs(w, B + M) / g) - i) < 0 && (r = 0), (a = n - t) < 0 && (a = 0)), q.setCurrentBufferLevel(v, m, r), h.default.display(e, v + "-buffer", r.toFixed(4)), H.debug("updateBufferedState: buf lvl " + a + ", real buf lvl " + r, t, i), le || ne || (a < Z && (H.debug("updateBufferedState: low buffer"), A.reportLowBuffer(z)), A.reportBufLevel(z, a, n))
                    }
                }, this.setBaseDecodeTime = function (e) {
                    k = Math.floor(e * g + .5)
                }, this.onBaseDecodeTimeReady = function (e) {
                    L = e
                }, this.onSourceReady = function (e) {
                    F = e
                }, this.onCancelStream = function (e) {
                    O = e
                }, this.onTransitionCompleted = function (e) {
                    D = e
                }, this.initPresentation = function (e) {
                    var t = {timescale: g};
                    if ("mp4" == Q && (t.codecData = e, j = e), t.codec = m, "video" === v && (t.width = b.width, t.height = b.height), w = Y.addTrack(v, t).id, "audio" === v) {
                        var i = this.getAudioInfo();
                        i && G.setChannelCount(i.channels)
                    }
                    C.pushInit(Y.initSegment()), H.debug("init segment pushed, codec = ".concat(t.codec, ", timescale = ").concat(t.timescale))
                }, this.isInitSegmentNew = function (e) {
                    return "audio" == v || pe(j, e)
                }, this.isTransitionInitNew = function (e) {
                    return "audio" == v || pe(oe.initSegmentData, e)
                }, this.processInitSegment = function (e) {
                    var t = {syncBase: !0};
                    "audio" == v && (t.alignBase = !0), Y.setTrackParams(w, t), ye(), ie = !1, le = !0, j = "mp4" == Q ? e : void 0, H.debug("new init segment processed")
                }, this.initTransition = function (e) {
                    var t = {timescale: g};
                    t.codec = oe.codec, oe.composer = he(oe.container), "mp4" == oe.container && (oe.initSegmentData = e, t.codecData = e), "video" == v && (t.width = oe.streamOptions.width, t.height = oe.streamOptions.height), oe.cTrackId = oe.composer.addTrack(v, t).id, oe.initSegment = oe.composer.initSegment(), oe.initDataBuffer = [], H.debug("transit stream init segment pushed")
                }, this.processTransitionInitSegment = function (e) {
                    oe.initDataBuffer.push({idx: oe.startupBuffer.length, data: e})
                }, this.processMute = function (e, t) {
                    if (void 0 !== w) {
                        var i;
                        switch (K) {
                            case c.TRACK_STATE.OPEN:
                            case c.TRACK_STATE.BUFFER:
                                i = 0 == ee.length ? void 0 !== (i = t.getBufferedStart()) ? g / t.timescale() * i : void 0 !== x ? x : g / t.timescale() * e - X : ee[ee.length - 1].ts;
                                break;
                            case c.TRACK_STATE.ACTIVE:
                                i = x;
                                break;
                            default:
                                H.error("processMute unexpected track state", K)
                        }
                        if (void 0 !== i) {
                            var n = g / t.timescale() * e, r = n - i;
                            if (r >= X / 2) {
                                r > 2 * X && (n = i + (r = 2 * X)), n -= X / 10;
                                var a = Y.getTrackSampleDuration(w), s = i + a;
                                for (H.debug("processMute filling gap", i, n); s <= n;) this.processFrame(!0, null, Math.floor(s), 0), s += a
                            }
                        }
                    }
                }, this.processFrame = function (e, t, i, n) {
                    var r = {done: !0};
                    if (B = i, M = n, ue) {
                        if (oe.curStreamCancelled) return r;
                        if (H.debug("processFrame transition, current frame ts=".concat(i, ", offset=").concat(n, ", sap=").concat(e)), e && oe.curSapTimes.push(i), oe.curStreamLastBufferedTs = i, function (e, t) {
                            var i = !1, n = oe.newSapTimes.length;
                            if (c.TRANSITION_MODE.ABRUPT == oe.mode) i = !0; else if (n > 0) if (ae) t && (e >= oe.newSapTimes[0] || e >= oe.newSapTimes[n - 1]) && (i = !0); else if (e >= oe.newSapTimes[0] + $ * g / 1e3 * 2) H.debug("Cancel current stream, because current timestamp is twice ahead possible buffer of new stream", e, oe.newSapTimes[0]), i = !0; else for (var r = oe.newSapTimes.length - 1; r >= 0; r--) {
                                if (Math.abs(e - oe.newSapTimes[r]) < ve()) {
                                    H.debug("Cancel current stream. Timestamp " + e + " is near new stream key frame " + oe.newSapTimes[r]), i = !0;
                                    break
                                }
                                if (e > oe.newSapTimes[r]) break
                            }
                            return i
                        }(i, e)) return H.debug("processFrame cancel current rendition", oe.curStreamLastBufferedTs, e), O && O(this), oe.curStreamCancelled = !0, Se(ee, t, i, n, e), r
                    }
                    switch (K) {
                        case c.TRACK_STATE.OPEN:
                            (ee.length > 0 || e) && (Se(ee, t, i, n, e), be(this));
                            break;
                        case c.TRACK_STATE.BUFFER:
                            var a = !1;
                            if (Se(ee, t, i, n, e), !Y.isReady()) break;
                            var s = ee.length;
                            if (void 0 === S) {
                                if (void 0 !== k && s > 3) {
                                    var o = ee[s - 1], u = o.ts - k - X;
                                    if (u >= 0) {
                                        H.debug("finished buffering, have " + s + " samples"), function () {
                                            S = 0;
                                            var e = 0, t = {};
                                            for (e = 1; e < ee.length; e++) {
                                                var i = ee[e].ts - ee[e - 1].ts;
                                                t[i] = t[i] > 0 ? t[i] + 1 : 1
                                            }
                                            var n = 0;
                                            for (e in t) if (t[e] > n) {
                                                var r = parseInt(e);
                                                r > 0 && (S = r, n = t[e])
                                            }
                                            H.debug("max sample duration calculated: ", S, JSON.stringify(t))
                                        }(), A.setRateAdditive(z, S), q.startLogging(v, m, C.streamId), C.setBufferingLength(s), ie = !1;
                                        for (var l, h = 0, f = 0; f < s && ee[f].ts <= k; f++) ee[f].sap && (h = f);
                                        H.debug("base decode time:", k), H.debug("1 ts last ts", ee[0].ts, ee[0].sap, ee[s - 1].ts), H.debug("buffer size: " + s + " first sap: " + h);
                                        var d = 0;
                                        for (d = 0; d < te.length && te[d].idx <= h; d++) l = te.shift(), d--;
                                        for (l && de(l), d = h; d < ee.length; d++) {
                                            te.length > 0 && d == te[0].idx && de(te.shift());
                                            var p = ee[d];
                                            we(p.sap, p.data, p.ts, p.offset)
                                        }
                                        te.length > 0 && de(te[0]), ee = [], te = [], a = !0
                                    } else -1 * u > 10 * X && (H.error("sample is far away from expected", o.ts, k + X), r.done = !1, re++)
                                }
                            } else {
                                var y = ee[s - 1].ts - ee[0].ts;
                                y > 0 ? a = y >= X : y < 0 && (a = s >= X / S + 1), a && ge()
                            }
                            a && c.TRACK_STATE.CLOSED !== K && (K = c.TRACK_STATE.ACTIVE, F(), H.debug("track is ready for playback"));
                            break;
                        case c.TRACK_STATE.ACTIVE:
                            we(e, t, i, n)
                    }
                    return r.done ? re = 0 : r.errors = re, r
                }, this.processTransitionFrame = function (e, t, i, n) {
                    var r = {done: !0};
                    if (e) oe.newSapTimes.push(i); else if (0 == oe.newSapTimes.length) return r;
                    var a = oe.startupBuffer.length;
                    if (a > 0) {
                        null == oe.lastSampleDuration && (oe.lastSampleDuration = void 0 !== S ? S : 0);
                        var s = oe.startupBuffer[a - 1], o = i - s.ts;
                        o < 0 ? n >= -1 * o ? (n += o, o = 0) : o = oe.lastSampleDuration : o > 2 * g && (o = oe.lastSampleDuration), i = s.ts + o, oe.lastSampleDuration = o
                    }
                    if (Se(oe.startupBuffer, t, i, n, e), function (e, t) {
                        var i = !1, n = $ * g / 1e3, r = oe.curSapTimes.length, a = oe.newSapTimes.length,
                            s = e - oe.startupBuffer[0].ts;
                        if (ae && c.TRANSITION_MODE.ABRUPT != oe.mode) {
                            if (s >= n) if (r > 0) {
                                for (var o = 0, u = 0; u < r; u++) if (!(oe.curSapTimes[u] < oe.newSapTimes[o] || oe.curSapTimes[u] <= T)) {
                                    for (var l = o; l < a && (o = l, !(oe.newSapTimes[l] > oe.curSapTimes[u])); l++) oe.newSapTimes[l] == oe.curSapTimes[u] && (H.debug("Switch to new stream because of SAP alignment"), i = !0);
                                    if (i) break
                                }
                            } else a > 0 && (H.debug("No current stream frames, switch to new stream"), i = !0);
                            !i && r >= 1 && a >= 2 && (oe.newSapTimes[a - 1] > oe.curSapTimes[0] || oe.newSapTimes[a - 1] >= oe.curSapTimes[r - 1]) && (H.debug("Switch to new stream SAP alignment does not work!"), i = !0)
                        } else if (s >= 2 * n && (e >= oe.curStreamLastBufferedTs || null == oe.curStreamLastBufferedTs)) H.debug("Switch to new stream because transition buffer is twice filled"), i = !0; else if (s >= n) if (oe.curStreamCancelled && (e >= oe.curStreamLastBufferedTs || null == oe.curStreamLastBufferedTs)) H.debug("Switch to new stream because buffer is filled and current stream is cancelled"), i = !0; else {
                            for (var h = oe.newSapTimes.length - 1; h >= 0; h--) {
                                if (Math.abs(oe.curStreamLastBufferedTs - oe.newSapTimes[h]) < ve()) {
                                    H.debug("Switch to new stream, because new key frame " + oe.newSapTimes[h] + " is near to current latest timestamp " + oe.curStreamLastBufferedTs), i = !0;
                                    break
                                }
                                if (oe.curStreamLastBufferedTs > oe.newSapTimes[h]) break
                            }
                            !i && e + 2 * n < oe.curStreamLastBufferedTs && s >= 10 * g && (H.error("Error: new stream is " + (oe.curStreamLastBufferedTs - e) / g + " seconds behind previous stream. Halting."), i = !0)
                        }
                        return i
                    }(i)) {
                        oe.curStreamCancelled || (H.debug("processTransitionFrame cancel current rendition"), O(this), oe.curStreamCancelled = !0);
                        var u = x;
                        oe.curStreamLastBufferedTs && oe.curStreamLastBufferedTs > u && (u = oe.curStreamLastBufferedTs);
                        var l = oe.newSapTimes[0], h = 0, f = Math.abs(oe.newSapTimes[0] - u);
                        for (h = oe.newSapTimes.length - 1; h >= 1; h--) {
                            var d = Math.abs(oe.newSapTimes[h] - u);
                            d < f && (f = d, l = oe.newSapTimes[h])
                        }
                        for (ye(l), h = 0; h < oe.startupBuffer.length && !(oe.startupBuffer[h].ts >= l); h++) ;
                        if (h > 0) {
                            var p;
                            oe.startupBuffer.splice(0, h);
                            for (var v = 0; v < oe.initDataBuffer.length; v++) oe.initDataBuffer[v].idx <= h ? (p = oe.initDataBuffer.shift(), v--) : oe.initDataBuffer[v].idx -= h;
                            p && (oe.composer.setTrackParams(oe.cTrackId, {
                                codec: oe.codec,
                                codecData: p.data
                            }), oe.initSegment = oe.composer.initSegment())
                        }
                        var m = Ae(l);
                        if (C.pushInit(oe.initSegment, m[0]), ue) {
                            var y = m[1];
                            H.debug("transit buffer length = ".concat(oe.startupBuffer.length)), H.debug("===== Rendition switch GAP ===== ".concat(1e3 * y, " msec, allowance = ").concat(1e3 * m[2])), this.completeTransition(), this.applyTransition(), -y > 10 && (r.done = !1, H.error("Correct rendition switch isn't possible, gap is too big (".concat(y, "s). Reloading stream.")))
                        }
                    }
                    return r
                }, this.completeTransition = function () {
                    if (ee = oe.startupBuffer, oe.startupBuffer = [], oe.composer.setTrackParams(oe.cTrackId, {sequenceNumber: R + 1}), A.remove(z), z = oe.id, b = oe.streamOptions, _ = oe.name, w = oe.cTrackId, m = oe.codec, Q = oe.container, g = oe.timescale, ie = !1, k = void 0, S = void 0, se = !1, ue = !1, re = 0, Y.free(), Y = oe.composer, q.setupMediaApi(v, m), oe.buffering && (J = oe.buffering), me(J), j = oe.initSegmentData, te = oe.initDataBuffer, oe = {}, le = !1, T = void 0, E = void 0, B = void 0, M = void 0, ee.length > 0) {
                        var e = ee[ee.length - 1];
                        x = e.ts, P = e.offset
                    }
                }, this.applyTransition = function (e) {
                    if (e && j && de(j), D(this), K = c.TRACK_STATE.OPEN, be(this), ee.length >= 2) {
                        var t = ee.splice(ee.length - 1, 1)[0];
                        this.processFrame(t.sap, t.data, t.ts, t.offset)
                    }
                    q.setPositionControl(), q.setTransitOff()
                }, this.suspendMuteable = function () {
                    "audio" === v && (Y.isTrackSilent(w) || (fe(), U = setTimeout((function () {
                        U = void 0
                    }), 5e3)))
                }, this.isMuteable = function () {
                    return void 0 === U
                }, this.postInit = (W = d().mark((function e() {
                    return d().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ("audio" !== v || "pcm" !== Y) {
                                    e.next = 3;
                                    break
                                }
                                return e.next = 3, Y.postInit();
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })), function () {
                    var e = this, t = arguments;
                    return new Promise((function (i, n) {
                        var r = W.apply(e, t);

                        function a(e) {
                            p(r, i, n, a, s, "next", e)
                        }

                        function s(e) {
                            p(r, i, n, a, s, "throw", e)
                        }

                        a(void 0)
                    }))
                })
            }

            return {
                create: function (e, t, i, n, r, a, s, o, u) {
                    return new f(e, t, i, n, r, a, s, o, u)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(27), r = i(17), a = i(66), s = RangeError;
        e.exports = function (e) {
            var t = r(a(this)), i = "", o = n(e);
            if (o < 0 || o == 1 / 0) throw s("Wrong number of repetitions");
            for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (i += t);
            return i
        }
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(64), i(15), i(16), i(31), i(32), i(295), i(300), i(112), i(72), i(220), i(21), i(214), i(213);
        var n = h(i(301)), r = h(i(302)), a = h(i(109)), s = h(i(225)), o = h(i(166)), u = h(i(108)), c = h(i(8)),
            l = h(i(132));

        function h(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var f = function () {
            var e = o.default.getInstance();

            function t(t) {
                var o, h, f, d, p, v, m, g, y, _, b, A, w, S, k, C, T, x, P, E, B, M = c.default.create(t, "MSE"),
                    R = [], I = !1, F = {}, L = !1, O = !1, D = !1, j = {value: 0, count: 0, time: 0},
                    U = {frames: 0, count: 0, time: 0, seekCount: 0}, V = !1, N = -1, W = 0, H = 0, z = 0, q = 0,
                    G = new s.default(t).create(10), Q = !1, Y = [], K = 0, J = !1, X = 0, Z = {
                        timeShift: 0,
                        bufferSize: 0,
                        start: void 0,
                        integralDist: 0,
                        lastZapTime: 0,
                        PERIOD: 4e3,
                        SYNC_BORDER: e.isIOS() ? .052 : .04
                    }, $ = {
                        enter: void 0,
                        exit: void 0,
                        time: void 0,
                        bufTime: void 0,
                        background: !1,
                        stopBuffer: !1,
                        vThreshold: 1200,
                        aThreshold: 3600,
                        ready: !1,
                        seekTo: void 0,
                        seekInd: void 0,
                        audioOnly: !1,
                        initStart: !1
                    }, ee = {activated: !1, from: void 0, to: void 0}, te = a.default.getInstance(t), ie = new n.default,
                    ne = new r.default(t);

                function re() {
                    if (null == $.enter && ($.enter = performance.now(), $.initStart = !I), null == $.time && h) {
                        $.time = h.currentTime;
                        var e = h.buffered.length;
                        e > 0 && ($.bufTime = h.buffered.end(e - 1) - h.currentTime)
                    }
                    $.exit = void 0, $.ready = !1
                }

                function ae() {
                    $.stopBuffer = !1, $.audioOnly = !1, $.forcePlay = !1, $.bufTime = void 0, $.seekInd = void 0, $.seekTo = void 0, $.enter = void 0, $.time = void 0, $.exit = void 0, $.ready = !1
                }

                function se() {
                    ee.activated = !1, ee.from = void 0, ee.to = void 0, ee.aTime = void 0, ee.lastCurTime = void 0
                }

                function oe() {
                    void 0 !== g && (clearTimeout(g), g = void 0)
                }

                function ue() {
                    void 0 !== y && (clearTimeout(y), y = void 0)
                }

                function ce() {
                    void 0 !== m && (clearTimeout(m), m = void 0)
                }

                function le() {
                    ce(), m = setTimeout(he, 5e3)
                }

                function he() {
                    M.error("error seek timeout!"), O = !1, m = void 0, w("mse", e.isBrowser("Firefox"))
                }

                function fe(e, t) {
                    var i;
                    void 0 === t && (t = ge());
                    for (var n = 0; n < t.length; n++) if (e < t[n][1] && t[n][1] - t[n][0] >= K) {
                        i = e >= t[n][0] ? t[n][1] - e >= K / 2 ? e : t[n][1] - K / 2 : t[n][0];
                        break
                    }
                    return void 0 === i && (i = t[t.length - 1][1] - K) < t[t.length - 1][0] && (i = t[t.length - 1][0]), de(i), i
                }

                function de(e) {
                    return O || h.currentTime == e || (e = u.default.truncateDecimals(e, 4), M.debug("seek to ".concat(e)), h.currentTime = e, O = !0), e
                }

                function pe(e) {
                    var t = h.currentTime;
                    if (O) return t;
                    var i = e - t, n = i + 1;
                    if (0 == h.currentTime) t = de(e); else {
                        var r;
                        if (i > 0) n = i > 2 ? 3 : .25 * Math.ceil(n / .25), r = u.default.truncateDecimals(i / (n - 1)); else if (n < 0) r = -i, n = 0; else {
                            var a = Math.floor(n / .25);
                            0 === a && (a = 1), n = .25 * a, r = Math.abs(u.default.truncateDecimals(i / (n - 1)))
                        }
                        M.debug("zapping with rate", n, r, i, n > 1 ? (n - 1) * r : (1 - n) * r), te.setPlaybackRate(n), Ae(!0), ne.reset(te, e), ie.start((function () {
                            Se(!0)
                        }), 1e3 * r), t = e
                    }
                    return t
                }

                function ve() {
                    if (h && h.buffered.length > 0) {
                        for (var e = 0; e < R.length; e++) R[e].buffered.length > 0 && M.debug(R[e].streamId + ": " + R[e].buffered.start(0), R[e].buffered.end(0));
                        try {
                            (function () {
                                var e = h.currentTime, t = !1, i = ge(), n = i.length;
                                if (n > 0) {
                                    if (e < i[0][0]) M.debug("Current position (".concat(e, ") is behind the start of the first buffered range (").concat(i[0][0], "). Seek to the start.")), e = i[0][0], t = !0; else for (var r = 1; r < n; r++) if (e >= i[r - 1][1] && e < i[r][0] && i[r][1] - i[r][0] >= K) {
                                        e = i[r][0], M.debug("Current position is between " + (r - 1) + " and " + r + " . Seek to the start of " + r), t = !0;
                                        break
                                    }
                                    if (t) de(e), oe(); else if (!Q) if (j.value == h.currentTime && j.value !== F.playbackTime) {
                                        j.count += 1;
                                        var a = (performance.now() - j.time) / 1e3;
                                        if (j.count > 10 && a > 2) {
                                            var s = h.currentTime + a, o = Te(s);
                                            void 0 === o && (o = s), M.debug("Stuck on ".concat(j.value, ". Seek to ").concat(o)), fe(o, i), oe(), t = !0
                                        }
                                    } else j.time = performance.now(), j.value = h.currentTime, j.count = 1
                                }
                                return t
                            })() && me(), $.background && null == $.enter && re(), I = !0
                        } catch (e) {
                            M.debug("seek to buffered start failed: ", e)
                        }
                    }
                }

                function me() {
                    F.playbackTime = h.currentTime
                }

                function ge() {
                    var e = [], t = R.length;
                    if (t > 1) {
                        for (var i = [], n = 0; n < t; n++) for (var r = 0; r < R[n].buffered.length; r++) i.push([R[n].buffered.start(r), 0]), i.push([R[n].buffered.end(r), 1]);
                        i.sort((function (e, t) {
                            return e[0] - t[0]
                        }));
                        for (var a = 0, s = 0; s < i.length; s++) 0 == i[s][1] ? t == ++a && e.push([i[s][0], void 0]) : t - 1 == --a && (e[e.length - 1][1] = i[s][0])
                    } else if (t > 0) for (var o = 0; o < R[0].buffered.length; o++) e.push([R[0].buffered.start(o), R[0].buffered.end(o)]);
                    return e
                }

                function ye(e) {
                    var t = 0;
                    return Y.length > 0 && (t = Y[0], e && 2 == Y.length && Y[1] < t && (t = Y[1])), t
                }

                function _e() {
                    var e = h.currentTime, t = te.getPauseTime();
                    if (t && (e += (performance.now() - t) / 1e3), void 0 === p || e - p > 30) for (var i = 0; i < R.length; i++) {
                        var n = R[i];
                        if (n.buffered.length > 0) {
                            var r = e - 30;
                            r - n.buffered.start(0) > 60 && (n.removeRange(0, Math.floor(r + .5)), p = e)
                        }
                    }
                }

                function be() {
                    Ae()
                }

                function Ae(e) {
                    I && (M.debug("Seek start"), O = !0, e || le())
                }

                function we() {
                    Se()
                }

                function Se(e) {
                    if (M.debug("Seek end"), setTimeout((function () {
                        O = !1
                    }), 1e3), !e && (ce(), $.forcePlay)) {
                        var t = h.play();
                        void 0 !== t && t.catch((function (e) {
                            M.error("_onSeekEnd play() error:", e)
                        })), $.forcePlay = !1
                    }
                }

                function ke(e) {
                    var t = function t() {
                        if (!L) {
                            for (var i = 0; i < R.length; i++) R[i].removeEventListener("updateend", t);
                            e()
                        }
                    };
                    if (L) for (var i = 0; i < R.length; i++) R[i].addEventListener("updateend", t); else e()
                }

                function Ce() {
                    var e = R.length;
                    if (e > 0) {
                        for (var i = 0; i < e; i++) if (R[i].closed) return;
                        if (I) {
                            if (te.isPaused()) _e(); else if (!$.background) {
                                var n = h.currentTime;
                                if (D) {
                                    M.debug("onProgress: is currently paused");
                                    var r = n + (performance.now() - v) / 1e3;
                                    S("mse", r, n)
                                } else {
                                    var a = C("mse", n);
                                    if (l.default.display(t, "latency", a.toFixed(4)), A("mse", n, a), O || L || h.ended || null != $.exit) M.debug("onProgress skip, seekInProgress = ".concat(O, ", removeInProgress = ").concat(L, ", ended = ").concat(h.ended)); else {
                                        var s = ge();
                                        if (s.length > 0) {
                                            var o = f ? f.buffered : h.buffered, u = o.length, c = !1;
                                            if (ee.activated && (ee.from > n && (n > ee.lastCurTime ? ee.lastCurTime = n : n == ee.lastCurTime && (ee.from = ee.lastCurTime)), void 0 !== ee.to)) {
                                                var d = o.start(u - 1);
                                                M.debug("onProgress initswitch data to = ".concat(ee.to, ", curTime = ").concat(n, ", bufRangeStart = ").concat(d, ", videoBufEnd = ").concat(o.end(u - 1))), d != ee.to && d >= n && (d < ee.to ? ee.to - d < 2 && (ee.to = d) : (d - ee.to < 2 || u > 1 && o.end(u - 2) - ee.to < H) && (ee.to = d));
                                                var p = ee.to - n;
                                                ee.from <= n && (ee.to <= o.end(u - 1) - .9 * H || p < .1) && (p > 0 && (ee.to == d ? (M.debug("initswitch seek to range start " + d + " from " + n, o.start(u - 1), o.end(u - 1)), de(d)) : (M.debug("initswitch seek to " + ee.to + " from " + n, o.start(u - 1), o.end(u - 1)), fe(ee.to, s)), c = !0), se())
                                            }
                                            if (!c && null == ee.to) {
                                                var m = ye(!0);
                                                if (null == y && !Q) {
                                                    var g = performance.now();
                                                    if (N > 0) {
                                                        if (m > N + .1 && m > H + .1) {
                                                            var _ = n + m - H - .1;
                                                            if (null == E || E < _ - 5) {
                                                                if (g - W > 3e3) {
                                                                    var b = B ? _ - .05 : function (e) {
                                                                        if (void 0 === f) return e;
                                                                        for (var t, i = G.length() - 1; i >= 0; i--) {
                                                                            var n = G.get(i);
                                                                            if (n < h.currentTime + .021 || n < e - z) break;
                                                                            if (n < e + q) {
                                                                                t = n, M.debug("Found keyframe around ".concat(n));
                                                                                break
                                                                            }
                                                                        }
                                                                        return t
                                                                    }(_);
                                                                    b && (M.debug("Adjust latency", b, m, b - n), E = B ? pe(_) : fe(b, s), T("mse", n, E), W = g)
                                                                }
                                                            } else M.debug("Latency is not adjusted, try next time");
                                                            c = !0
                                                        }
                                                    } else Z.bufferSize > 0 && (c = function (e, t, i) {
                                                        var n = !1, r = performance.now();
                                                        if (r - Z.lastZapTime > Z.PERIOD) {
                                                            var a = (r - Z.timeShift - Z.bufferSize) / 1e3;
                                                            if (a > e) {
                                                                var s = Math.min(H, .5), o = e + ye() - s,
                                                                    u = t.end(t.length - 1) - s;
                                                                o > u && (o = u), o <= e ? a = e : o < a && (a = o)
                                                            }
                                                            var c = a - e, l = Math.abs(c), h = !1;
                                                            if (l > .1 ? h = !0 : l > Z.SYNC_BORDER && (Z.integralDist += c, M.debug("Integral distance for zapping", Z.integralDist, l), void 0 === Z.start && (Z.start = r), r - Z.start > 15e3 ? (Z.start = r, Z.integralDist = c) : Math.abs(Z.integralDist) >= 4 && l >= .02 && (h = !0, M.debug("zapping by integral decision", Z.integralDist))), h) {
                                                                if (Z.integralDist = 0, Z.start = void 0, l > 3) {
                                                                    var f = Te(a, !1, .5);
                                                                    null == f && (f = a), fe(f, i)
                                                                } else Z.lastZapTime = r, pe(a);
                                                                n = !0
                                                            }
                                                        }
                                                        return n
                                                    }(n, o, s));
                                                    if (!c && !Z.bufferSize && J && g - X > 4e3) {
                                                        var w = P("mse");
                                                        if (w > 0) {
                                                            var k = H - w, x = H - ye();
                                                            if (k > .14 && x > .12) {
                                                                var j = Math.min(k, x);
                                                                M.debug("Realign avg buffer level by ", x, H), pe(n - j + .05), X = g, c = !0
                                                            }
                                                        }
                                                    }
                                                }
                                                if (!c && null == ee.to && (E = void 0, f && h.getVideoPlaybackQuality && !Q)) {
                                                    var V = h.getVideoPlaybackQuality().totalVideoFrames;
                                                    if (V == U.frames && 0 !== U.time && F.playbackTime !== n) {
                                                        if (0 == U.seekCount) {
                                                            U.count++;
                                                            var Y = (performance.now() - U.time) / 1e3;
                                                            if (U.count > 10 && Y > 3 && (Y >= m && (Y = m - .1), Y > 0)) {
                                                                var K = n + Y, ie = Te(K);
                                                                void 0 === ie && (ie = K), M.debug("Decoder freeze on ".concat(U.frames, ". Seek to ").concat(ie, ".")), fe(ie, s), U.seekCount++, c = !0
                                                            }
                                                        }
                                                    } else U.time = performance.now(), U.frames = V, U.count = 1, U.seekCount = 0
                                                }
                                            }
                                            c || _e(), te.checkSafariPaused()
                                        }
                                    }
                                }
                            }
                        } else ke((function () {
                            ve()
                        }))
                    }
                }

                function Te(e, t, i) {
                    if (void 0 === f) return e;
                    var n = void 0 === i ? 0 : e - i;
                    void 0 === t && (t = !0);
                    for (var r, a = t ? h.currentTime + .021 : n, s = G.length() - 1; s >= 0; s--) {
                        var o = G.get(s);
                        if (o < a || o < n) break;
                        if (o < e + .1) {
                            r = o, M.debug("Found nearest keyframe ".concat(o));
                            break
                        }
                    }
                    return r
                }

                ie.setController(ne), document.addEventListener("visibilitychange", (function () {
                    h && h.currentTime > 0 && (document.hidden ? (re(), ie.interrupt()) : $.background && (te.isPaused() ? ae() : function () {
                        var e = performance.now();
                        if ($.stopBuffer) $.ready = !0; else if (!$.ready && h && h.buffered.length > 0) {
                            if ((e - $.enter) / 1e3 > 2 * (h.currentTime - $.time)) h.buffered.end(h.buffered.length - 1) - h.currentTime > $.bufTime && ($.ready = !0)
                        }
                        $.ready ? ($.exit = e, $.audioOnly = null == f && void 0 !== d) : ae()
                    }()), $.background = document.hidden)
                })), this.startLogging = function (e) {
                    V = !1, void 0 === _ && (_ = {}), void 0 === _[e] && (_[e] = {
                        times: [],
                        prevTime: 0,
                        sumTime: 0,
                        stamps: [],
                        gaps: [],
                        thresh: 60,
                        avg: void 0
                    })
                }, this.setPositionControl = function () {
                    oe(), g = setTimeout((function () {
                        oe()
                    }), 3e4)
                }, this.setTransitOn = function () {
                    Q = !0
                }, this.setTransitOff = function () {
                    Q = !1, N > 0 && (ue(), y = setTimeout((function () {
                        ue()
                    }), 5e3))
                }, this.setLatencyTolerance = function (t, i, n) {
                    (N = t) > 0 && N < 3.5 && e.isBrowser("Microsoft") && (N = 3.5), B = !!n, H = i, z = Math.min(.2 * i, .5), q = Math.min(.1 * i, .3)
                }, this.toggleBufferLineUp = function (e) {
                    J = !!e
                }, this.setLowBufferBorder = function (e) {
                    K = e
                }, this.setCurrentBufferLevel = function (e, t) {
                    2 == R.length ? Y["v" == e[0] ? 0 : 1] = t : Y[0] = t
                }, this.init = function (e, t) {
                    return b ? ((o = new MediaSource).addEventListener("sourceopen", t || b), (h = e).addEventListener("progress", Ce), h.addEventListener("timeupdate", Ce), h.addEventListener("seeking", be), h.addEventListener("seeked", we), h.src = URL.createObjectURL(o), te.init(h), !h.getVideoPlaybackQuality && "webkitDecodedFrameCount" in h && (h.getVideoPlaybackQuality = function () {
                        return {
                            droppedVideoFrames: this.webkitDroppedFrameCount,
                            totalVideoFrames: this.webkitDecodedFrameCount
                        }
                    }), !0) : (M.error("Error: necessary callbacks are not defined."), !1)
                }, this.createSourceBuffer = function (t, n, r, a) {
                    var s = o.addSourceBuffer(i(t, n));

                    function u(e, t) {
                        e.updating ? e.addEventListener("updateend", (function i() {
                            e.updating || (e.removeEventListener("updateend", i), t())
                        })) : t()
                    }

                    return s.mode = "segments", s.initSegment = void 0, s.segments = [], s.initPositions = [], s.sapPositions = [], s.appendedCount = 0, s.bufferLength = 0, s.fBufferLength = 0, s.timescale = r, s.isVideo = "video" == t, s.isVideo ? f = s : d = s, s.filterOut = function (e) {
                        if (void 0 !== e) for (var t = this.segments.length, i = 0; i < t; i++) if (this.segments[i].ts >= e) {
                            var n = t - i;
                            this.segments.splice(i, n), this.adjustPositions(i, !0), i < this.appendedCount && (this.appendedCount = i);
                            break
                        }
                    }, s.getBufferingLength = function () {
                        return this.bufferLength
                    }, s.setBufferingLength = function (e) {
                        this.bufferLength = e, this.fBufferLength = e
                    }, s.pushInit = function (e, t) {
                        var i = {init: !0, data: e};
                        if (this.isVideo && !t) {
                            var n, r = this.segments.length;
                            r > 0 && (this.segments[r - 1].ts ? n = this.segments[r - 1].ts : r > 1 && this.segments[r - 2].ts && (n = this.segments[r - 2].ts), void 0 !== n && (ee.from = n / this.timescale, ee.activated = !0, M.debug("initswitch set from = ".concat(ee.from))))
                        }
                        this.segments.push(i), this.initPositions.push(this.segments.length - 1), this.appendNextSegment()
                    }, s.pushSegment = function (e, t, i) {
                        var n = this.isVideo ? $.vThreshold : $.aThreshold;
                        if ($.background && !$.stopBuffer && this.segments.length > n && (M.debug("Throttle segments buffer", n), $.stopBuffer = !0), !$.background || !$.stopBuffer) {
                            var r = {data: e, ts: t[0], sap: i[0]};
                            $.ready && (this.isVideo || $.audioOnly) && r.sap && (r.starter = !0, $.ready = !1), this.segments.push(r), this.isVideo && r.sap && this.sapPositions.push(this.segments.length - 1), this.appendNextSegment()
                        }
                        V && this.log(t)
                    }, s.appendNextSegment = function () {
                        var e = this;
                        u(e, (function () {
                            e.closed || e.appendSegment()
                        }))
                    }, s.appendSegment = function () {
                        if (this.appendedCount < this.segments.length) {
                            var e = this.segments[this.appendedCount];
                            !function (e, t) {
                                var i = !0;
                                try {
                                    e.appendBuffer(t)
                                } catch (t) {
                                    var n = e.isVideo ? "Video frame " : "Audio frame ";
                                    M.error(n + "append exception!", t), i = !1
                                }
                                return i
                            }(this, e.data) ? (M.debug("Append " + (e.init ? "init " : "") + "segment error, reloading"), w("mse")) : (this.appendedCount++, e.init ? this.onInitAppended(e) : (this.processThrottling(e), this.onSegmentAppended(e)))
                        }
                    }, s.onInitAppended = function (e) {
                        this.initSegment = e.data, this.appendedCount > 1 && (this.segments.splice(0, this.appendedCount - 1), this.adjustPositions(this.appendedCount - 1), this.appendedCount = 1)
                    }, s.processThrottling = function (t) {
                        if (t.starter) $.seekTo = this.buffered.end(this.buffered.length - 1), $.seekInd = $.seekTo + H; else if ($.seekInd) {
                            var i = this.isVideo || $.audioOnly, n = this.buffered.end(this.buffered.length - 1);
                            if (i && n >= $.seekInd) {
                                var r = !0;
                                if (2 == R.length) {
                                    for (var a = 0, s = 0, o = 0; o < R.length; o++) if (!R[o].isVideo) {
                                        var u = R[o].buffered.length;
                                        a = R[o].buffered.start(u - 1), s = R[o].buffered.end(u - 1);
                                        break
                                    }
                                    $.seekTo < a && ($.seekTo = a, $.seekInd = $.seekTo + H), ($.seekInd > s || $.seekInd > n) && (r = !1)
                                }
                                r && (M.debug("Recover from throttling, jump to", $.seekTo), B ? pe($.seekTo) : de($.seekTo), ae(), e.isMobile() && ($.forcePlay = !0), $.initStart && (me(), $.initStart = !1))
                            }
                        }
                    }, s.onSegmentAppended = function (e) {
                        if (ee.activated && !ee.to && void 0 !== ee.from) {
                            var t = e.ts / this.timescale;
                            if (t >= ee.from) if (this.isVideo) {
                                ee.to = t, ee.lastCurTime = h.currentTime;
                                var i = this.buffered.length > 0 ? this.buffered.end(this.buffered.length - 1) : 0,
                                    n = ee.lastCurTime - i;
                                n > .02 && (void 0 !== ee.aTime ? ee.to = ee.aTime : d && d.buffered.length > 0 && (ee.to = d.buffered.end(d.buffered.length - 1)), (n = ee.to - ee.lastCurTime) > 0 && n < .5 && (M.debug("onSegmentAppended failsafe seek to next interval time ".concat(ee.to)), de(ee.to), se()))
                            } else void 0 === ee.aTime && (ee.aTime = t)
                        }
                        if (this.isVideo && e.sap) {
                            var r = e.ts / this.timescale;
                            G.push(r)
                        }
                        if (this.segments.length > this.bufferLength) if (this.isVideo) {
                            var a = 0;
                            this.sapPositions.length > 1 && this.sapPositions[1] <= this.appendedCount && this.sapPositions[1] <= this.segments.length - this.bufferLength && (a = this.sapPositions[1]), a > 0 && (this.segments.splice(0, a), this.appendedCount -= a, this.adjustPositions(a)), this.onVideoSegmentPushed(this.appendedCount)
                        } else {
                            var s = this.segments.length - this.bufferLength;
                            s > this.appendedCount && (s = this.appendedCount), 1 == s ? this.segments.shift() : this.segments.splice(0, s), this.appendedCount -= s, this.adjustInitPositions(s)
                        }
                    }, s.adjustPositions = function (e, t) {
                        var i = 0;
                        if (t) {
                            for (i = this.sapPositions.length - 1; i >= 0 && !(this.sapPositions[i] < e); i--) ;
                            this.sapPositions.length = i + 1
                        } else for (i = 0; i < this.sapPositions.length; i++) this.sapPositions[i] >= e ? this.sapPositions[i] -= e : (this.sapPositions.shift(), i--);
                        this.adjustInitPositions(e, t)
                    }, s.adjustInitPositions = function (e, t) {
                        var i = 0;
                        if (t) {
                            for (i = this.initPositions.length - 1; i >= 0 && !(this.initPositions[i] < e); i--) ;
                            this.initPositions.length = i + 1
                        } else for (i = 0; i < this.initPositions.length; i++) this.initPositions[i] >= e ? this.initPositions[i] -= e : (this.initPositions.shift(), i--)
                    }, s.isVideo && (s.onVideoSegmentPushed = function (e) {
                        d && (d.bufferLength = Math.floor(d.bufLenRatio * e + .5))
                    }), s.getSegments = function () {
                        for (var e, t = 0; t < this.initPositions.length; t++) if ((e = this.initPositions[t]) == this.appendedCount) t + 1 == this.initPositions.length && (e = void 0, this.initSegment = void 0); else if (e > this.appendedCount) break;
                        var i = 0;
                        if (void 0 !== e) if (this.initSegment = this.segments[e].data, this.isVideo) {
                            for (var n = 0; n < this.sapPositions.length; n++) if (this.sapPositions[n] > e) {
                                i = this.sapPositions[n];
                                break
                            }
                        } else i = e + 1;
                        return {init: this.initSegment, segments: this.segments, start: i}
                    }, s.removeAll = function () {
                        this.abort(), this.initSegment = void 0, this.segments = [], this.sapPositions = [], this.initPositions = [], this.appendedCount = 0, this.buffered.length > 0 && this.removeRange(this.buffered.start(0), this.buffered.end(this.buffered.length - 1))
                    }, s.removeRange = function (e, t) {
                        var i = this;
                        u(i, (function () {
                            M.debug("Remove outdated range", e, t, h.currentTime, i.buffered.length), L = !0, i.remove(e, t), u(i, (function () {
                                L = !1
                            }))
                        }))
                    }, V && (s.log = function (e) {
                        for (var t = _[this.streamId], i = 0; i < e.length; i++) {
                            var n = t.stamps.length > 0 ? e[i] - t.stamps[t.stamps.length - 1] : 0, r = 0;
                            if (t.times.length > 0) {
                                var a = performance.now();
                                r = a - t.prevTime, t.prevTime = a
                            } else t.prevTime = performance.now();
                            if (void 0 === t.avg) for (var s = 1; s < t.stamps.length; s++) {
                                var o = t.stamps[s] - t.stamps[s - 1];
                                if (o > 0) {
                                    t.avg = o;
                                    break
                                }
                            }
                            if (t.stamps.length == t.thresh) {
                                if (M.debug(this.streamId + " processed " + t.thresh + " frames"), 0 == t.gaps.length) t.sumTime > t.avg * t.thresh * 1.1 && (M.debug("frames come slow", t.sumTime, t.avg * t.thresh), M.debug("intervals: [" + t.times.join(", ") + "]")); else {
                                    for (var u = [], c = 0; c < t.gaps.length; c++) u.push("{val: " + t.gaps[c].val + ", idx: " + t.gaps[c].idx + "}");
                                    M.debug("Gaps: [" + u.join(", ") + "], avgDuration " + t.avg), M.debug("Stamps: [" + t.stamps.join(", ") + "]"), t.sumTime > t.avg * t.thresh * 1.1 && M.debug("Frames come slow!!!", t.sumTime, t.avg * t.thresh), M.debug("Intervals: [" + t.times.join(", ") + "]")
                                }
                                t.times = [], t.sumTime = 0, t.stamps = [], t.gaps = []
                            }
                            t.times.push(r), t.sumTime += r, t.stamps.push(e[i]), Math.abs(n - t.avg) > 1 && t.gaps.push({
                                val: n,
                                idx: t.stamps.length - 1
                            })
                        }
                    }), s.addEventListener("error", (function (e) {
                        M.error("SourceBuffer Error", e, this.streamId)
                    })), s.streamId = a, R.push(s), s
                }, this.startPlayback = function (e) {
                    M.debug("startPlayback, buffered ranges count ", h.buffered.length), h.buffered.length > 0 && M.debug("video element buffer", h.buffered.start(0), h.buffered.end(0)), d && f && (d.bufLenRatio = 2 * d.fBufferLength / f.fBufferLength), (0 == h.currentTime || te.isPaused()) && te.playMedia(e || {})
                }, this.setSyncParams = function (t, i) {
                    Z.timeShift = t, Z.bufferSize = i, Z.integralDist = 0, Z.start = void 0, Z.lastZapTime = e.isBrowser("Safari") ? performance.now() : 0, M.debug("setSyncParams", t, i)
                }, this.continue = function () {
                    h.buffered.length > 0 && M.debug("video element buffer", h.buffered.start(0), h.buffered.end(0)), te.setPlaybackRate(1), O && le(), U.count = 0, U.time = performance.now(), v = void 0, D = !1
                }, this.wait = function () {
                    ie.interrupt(), te.setPlaybackRate(0), ce(), v = performance.now(), D = !0, x("mse")
                }, this.callbacks = function (e) {
                    b = e.onMediaReady, A = e.onProgress, w = e.onCrash, S = e.onWaitUpdate, k = e.onPlayStarted, C = e.onLatencyCalc, T = e.onLatencySeek, x = e.onLowBuffer, P = e.getAvgVBufLvl
                }, this.resetPosition = function () {
                    M.debug("reset position"), ce(), oe(), ue(), te.resetPosition(), I = !1, F = {}, j = {
                        value: 0,
                        count: 0,
                        time: 0
                    }, U = {
                        frames: 0,
                        count: 0,
                        time: 0,
                        seekCount: 0
                    }, p = void 0, v = void 0, E = void 0, D = !1, L = !1, O = !1, Q = !1, X = 0, W = 0, Y = [], G.clear();
                    for (var e = 0; e < R.length; e++) R[e].initSegment = void 0, R[e].segments = [], R[e].sapPositions = [], R[e].initPositions = [], R[e].appendedCount = 0, R[e].bufferLength = 0, R[e].fBufferLength = 0;
                    se(), ae()
                }, this.resumeTo = function (e) {
                    var t = Te(e, !0, .5);
                    void 0 === t && (t = e), fe(t)
                }, this.handlePause = function () {
                    ie.stop() && (O = !1), ce()
                }, this.isSeeking = function () {
                    return !!h && (O || $.background || void 0 !== $.seekTo || void 0 !== ee.to)
                }, this.handlePlayEvent = function () {
                    I || ke((function () {
                        ve(), k("mse")
                    }))
                }, this.handlePauseEvent = function () {
                }, this.clear = function () {
                    if (!e.isBrowser("Safari")) for (var t = 0; t < R.length; t++) try {
                        o.removeSourceBuffer(R[t])
                    } catch (e) {
                        M.error("Failed to remove source buffer:", e)
                    }
                    ie.stop(), this.resetPosition(), R = [], f = void 0, d = void 0, h && (h.removeEventListener("progress", Ce), h.removeEventListener("timeupdate", Ce), h.removeEventListener("seeking", be), h.removeEventListener("seeked", we), URL.revokeObjectURL(h.src), h.removeAttribute("src"), h.load(), h = void 0), o && (o.removeEventListener("sourceopen", b), o = void 0), b = void 0, A = void 0, w = void 0, M.debug("clear source buffers and video element")
                }, this.setVolume = function (e) {
                    h && (h.volume = e)
                }, this.getVolume = function () {
                    return h ? h.volume : 0
                }, this.setMuted = function (e) {
                    h && (h.muted = e)
                }, this.isMuted = function () {
                    return !!h && h.muted
                }
            }

            function i(t, i) {
                var n = ["vp8", "vp9", "opus"].includes(i) ? "webm" : "mp4";
                return e.isBrowser("Firefox") && "mp4a.40.34" == i ? t + "/" + n + '; codecs="mp3"' : t + "/" + n + '; codecs="' + i + '"'
            }

            return {
                create: function (e) {
                    return new t(e)
                }, isCodecSupported: function (t, n) {
                    return (!e.isBrowser("Microsoft") || "mp4a.40.34" != n && "mp4a.6B" != n && "mp4a.6B" != n) && MediaSource.isTypeSupported(i(t, n))
                }
            }
        }();
        t.default = f
    }, function (e, t, i) {
        i(296)
    }, function (e, t, i) {
        "use strict";
        i(31);
        var n, r = i(2), a = i(10), s = i(217), o = i(4), u = i(70), c = i(1), l = i(19), h = i(218), f = i(96),
            d = i(11), p = i(211), v = i(297), m = i(123), g = i(152).codeAt, y = i(299), _ = i(17), b = i(30),
            A = i(121), w = i(219), S = i(26), k = S.set, C = S.getterFor("URL"), T = w.URLSearchParams, x = w.getState,
            P = o.URL, E = o.TypeError, B = o.parseInt, M = Math.floor, R = Math.pow, I = c("".charAt), F = c(/./.exec),
            L = c([].join), O = c(1..toString), D = c([].pop), j = c([].push), U = c("".replace), V = c([].shift),
            N = c("".split), W = c("".slice), H = c("".toLowerCase), z = c([].unshift), q = /[a-z]/i, G = /[\d+-.a-z]/i,
            Q = /\d/, Y = /^0x/i, K = /^[0-7]+$/, J = /^\d+$/, X = /^[\da-f]+$/i, Z = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
            $ = /[\0\t\n\r #/:<>?@[\\\]^|]/, ee = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, te = /[\t\n\r]/g,
            ie = function (e) {
                var t, i, n, r;
                if ("number" == typeof e) {
                    for (t = [], i = 0; i < 4; i++) z(t, e % 256), e = M(e / 256);
                    return L(t, ".")
                }
                if ("object" == typeof e) {
                    for (t = "", n = function (e) {
                        for (var t = null, i = 1, n = null, r = 0, a = 0; a < 8; a++) 0 !== e[a] ? (r > i && (t = n, i = r), n = null, r = 0) : (null === n && (n = a), ++r);
                        return r > i && (t = n, i = r), t
                    }(e), i = 0; i < 8; i++) r && 0 === e[i] || (r && (r = !1), n === i ? (t += i ? ":" : "::", r = !0) : (t += O(e[i], 16), i < 7 && (t += ":")));
                    return "[" + t + "]"
                }
                return e
            }, ne = {}, re = p({}, ne, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
            ae = p({}, re, {"#": 1, "?": 1, "{": 1, "}": 1}),
            se = p({}, ae, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
            oe = function (e, t) {
                var i = g(e, 0);
                return i > 32 && i < 127 && !d(t, e) ? e : encodeURIComponent(e)
            }, ue = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, ce = function (e, t) {
                var i;
                return 2 == e.length && F(q, I(e, 0)) && (":" == (i = I(e, 1)) || !t && "|" == i)
            }, le = function (e) {
                var t;
                return e.length > 1 && ce(W(e, 0, 2)) && (2 == e.length || "/" === (t = I(e, 2)) || "\\" === t || "?" === t || "#" === t)
            }, he = function (e) {
                return "." === e || "%2e" === H(e)
            }, fe = {}, de = {}, pe = {}, ve = {}, me = {}, ge = {}, ye = {}, _e = {}, be = {}, Ae = {}, we = {}, Se = {},
            ke = {}, Ce = {}, Te = {}, xe = {}, Pe = {}, Ee = {}, Be = {}, Me = {}, Re = {}, Ie = function (e, t, i) {
                var n, r, a, s = _(e);
                if (t) {
                    if (r = this.parse(s)) throw E(r);
                    this.searchParams = null
                } else {
                    if (void 0 !== i && (n = new Ie(i, !0)), r = this.parse(s, null, n)) throw E(r);
                    (a = x(new T)).bindURL(this), this.searchParams = a
                }
            };
        Ie.prototype = {
            type: "URL", parse: function (e, t, i) {
                var r, a, s, o, u, c = this, l = t || fe, h = 0, f = "", p = !1, g = !1, y = !1;
                for (e = _(e), t || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, e = U(e, ee, "")), e = U(e, te, ""), r = v(e); h <= r.length;) {
                    switch (a = r[h], l) {
                        case fe:
                            if (!a || !F(q, a)) {
                                if (t) return "Invalid scheme";
                                l = pe;
                                continue
                            }
                            f += H(a), l = de;
                            break;
                        case de:
                            if (a && (F(G, a) || "+" == a || "-" == a || "." == a)) f += H(a); else {
                                if (":" != a) {
                                    if (t) return "Invalid scheme";
                                    f = "", l = pe, h = 0;
                                    continue
                                }
                                if (t && (c.isSpecial() != d(ue, f) || "file" == f && (c.includesCredentials() || null !== c.port) || "file" == c.scheme && !c.host)) return;
                                if (c.scheme = f, t) return void (c.isSpecial() && ue[c.scheme] == c.port && (c.port = null));
                                f = "", "file" == c.scheme ? l = Ce : c.isSpecial() && i && i.scheme == c.scheme ? l = ve : c.isSpecial() ? l = _e : "/" == r[h + 1] ? (l = me, h++) : (c.cannotBeABaseURL = !0, j(c.path, ""), l = Be)
                            }
                            break;
                        case pe:
                            if (!i || i.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                            if (i.cannotBeABaseURL && "#" == a) {
                                c.scheme = i.scheme, c.path = m(i.path), c.query = i.query, c.fragment = "", c.cannotBeABaseURL = !0, l = Re;
                                break
                            }
                            l = "file" == i.scheme ? Ce : ge;
                            continue;
                        case ve:
                            if ("/" != a || "/" != r[h + 1]) {
                                l = ge;
                                continue
                            }
                            l = be, h++;
                            break;
                        case me:
                            if ("/" == a) {
                                l = Ae;
                                break
                            }
                            l = Ee;
                            continue;
                        case ge:
                            if (c.scheme = i.scheme, a == n) c.username = i.username, c.password = i.password, c.host = i.host, c.port = i.port, c.path = m(i.path), c.query = i.query; else if ("/" == a || "\\" == a && c.isSpecial()) l = ye; else if ("?" == a) c.username = i.username, c.password = i.password, c.host = i.host, c.port = i.port, c.path = m(i.path), c.query = "", l = Me; else {
                                if ("#" != a) {
                                    c.username = i.username, c.password = i.password, c.host = i.host, c.port = i.port, c.path = m(i.path), c.path.length--, l = Ee;
                                    continue
                                }
                                c.username = i.username, c.password = i.password, c.host = i.host, c.port = i.port, c.path = m(i.path), c.query = i.query, c.fragment = "", l = Re
                            }
                            break;
                        case ye:
                            if (!c.isSpecial() || "/" != a && "\\" != a) {
                                if ("/" != a) {
                                    c.username = i.username, c.password = i.password, c.host = i.host, c.port = i.port, l = Ee;
                                    continue
                                }
                                l = Ae
                            } else l = be;
                            break;
                        case _e:
                            if (l = be, "/" != a || "/" != I(f, h + 1)) continue;
                            h++;
                            break;
                        case be:
                            if ("/" != a && "\\" != a) {
                                l = Ae;
                                continue
                            }
                            break;
                        case Ae:
                            if ("@" == a) {
                                p && (f = "%40" + f), p = !0, s = v(f);
                                for (var b = 0; b < s.length; b++) {
                                    var A = s[b];
                                    if (":" != A || y) {
                                        var w = oe(A, se);
                                        y ? c.password += w : c.username += w
                                    } else y = !0
                                }
                                f = ""
                            } else if (a == n || "/" == a || "?" == a || "#" == a || "\\" == a && c.isSpecial()) {
                                if (p && "" == f) return "Invalid authority";
                                h -= v(f).length + 1, f = "", l = we
                            } else f += a;
                            break;
                        case we:
                        case Se:
                            if (t && "file" == c.scheme) {
                                l = xe;
                                continue
                            }
                            if (":" != a || g) {
                                if (a == n || "/" == a || "?" == a || "#" == a || "\\" == a && c.isSpecial()) {
                                    if (c.isSpecial() && "" == f) return "Invalid host";
                                    if (t && "" == f && (c.includesCredentials() || null !== c.port)) return;
                                    if (o = c.parseHost(f)) return o;
                                    if (f = "", l = Pe, t) return;
                                    continue
                                }
                                "[" == a ? g = !0 : "]" == a && (g = !1), f += a
                            } else {
                                if ("" == f) return "Invalid host";
                                if (o = c.parseHost(f)) return o;
                                if (f = "", l = ke, t == Se) return
                            }
                            break;
                        case ke:
                            if (!F(Q, a)) {
                                if (a == n || "/" == a || "?" == a || "#" == a || "\\" == a && c.isSpecial() || t) {
                                    if ("" != f) {
                                        var S = B(f, 10);
                                        if (S > 65535) return "Invalid port";
                                        c.port = c.isSpecial() && S === ue[c.scheme] ? null : S, f = ""
                                    }
                                    if (t) return;
                                    l = Pe;
                                    continue
                                }
                                return "Invalid port"
                            }
                            f += a;
                            break;
                        case Ce:
                            if (c.scheme = "file", "/" == a || "\\" == a) l = Te; else {
                                if (!i || "file" != i.scheme) {
                                    l = Ee;
                                    continue
                                }
                                if (a == n) c.host = i.host, c.path = m(i.path), c.query = i.query; else if ("?" == a) c.host = i.host, c.path = m(i.path), c.query = "", l = Me; else {
                                    if ("#" != a) {
                                        le(L(m(r, h), "")) || (c.host = i.host, c.path = m(i.path), c.shortenPath()), l = Ee;
                                        continue
                                    }
                                    c.host = i.host, c.path = m(i.path), c.query = i.query, c.fragment = "", l = Re
                                }
                            }
                            break;
                        case Te:
                            if ("/" == a || "\\" == a) {
                                l = xe;
                                break
                            }
                            i && "file" == i.scheme && !le(L(m(r, h), "")) && (ce(i.path[0], !0) ? j(c.path, i.path[0]) : c.host = i.host), l = Ee;
                            continue;
                        case xe:
                            if (a == n || "/" == a || "\\" == a || "?" == a || "#" == a) {
                                if (!t && ce(f)) l = Ee; else if ("" == f) {
                                    if (c.host = "", t) return;
                                    l = Pe
                                } else {
                                    if (o = c.parseHost(f)) return o;
                                    if ("localhost" == c.host && (c.host = ""), t) return;
                                    f = "", l = Pe
                                }
                                continue
                            }
                            f += a;
                            break;
                        case Pe:
                            if (c.isSpecial()) {
                                if (l = Ee, "/" != a && "\\" != a) continue
                            } else if (t || "?" != a) if (t || "#" != a) {
                                if (a != n && (l = Ee, "/" != a)) continue
                            } else c.fragment = "", l = Re; else c.query = "", l = Me;
                            break;
                        case Ee:
                            if (a == n || "/" == a || "\\" == a && c.isSpecial() || !t && ("?" == a || "#" == a)) {
                                if (".." === (u = H(u = f)) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (c.shortenPath(), "/" == a || "\\" == a && c.isSpecial() || j(c.path, "")) : he(f) ? "/" == a || "\\" == a && c.isSpecial() || j(c.path, "") : ("file" == c.scheme && !c.path.length && ce(f) && (c.host && (c.host = ""), f = I(f, 0) + ":"), j(c.path, f)), f = "", "file" == c.scheme && (a == n || "?" == a || "#" == a)) for (; c.path.length > 1 && "" === c.path[0];) V(c.path);
                                "?" == a ? (c.query = "", l = Me) : "#" == a && (c.fragment = "", l = Re)
                            } else f += oe(a, ae);
                            break;
                        case Be:
                            "?" == a ? (c.query = "", l = Me) : "#" == a ? (c.fragment = "", l = Re) : a != n && (c.path[0] += oe(a, ne));
                            break;
                        case Me:
                            t || "#" != a ? a != n && ("'" == a && c.isSpecial() ? c.query += "%27" : c.query += "#" == a ? "%23" : oe(a, ne)) : (c.fragment = "", l = Re);
                            break;
                        case Re:
                            a != n && (c.fragment += oe(a, re))
                    }
                    h++
                }
            }, parseHost: function (e) {
                var t, i, n;
                if ("[" == I(e, 0)) {
                    if ("]" != I(e, e.length - 1)) return "Invalid host";
                    if (!(t = function (e) {
                        var t, i, n, r, a, s, o, u = [0, 0, 0, 0, 0, 0, 0, 0], c = 0, l = null, h = 0, f = function () {
                            return I(e, h)
                        };
                        if (":" == f()) {
                            if (":" != I(e, 1)) return;
                            h += 2, l = ++c
                        }
                        for (; f();) {
                            if (8 == c) return;
                            if (":" != f()) {
                                for (t = i = 0; i < 4 && F(X, f());) t = 16 * t + B(f(), 16), h++, i++;
                                if ("." == f()) {
                                    if (0 == i) return;
                                    if (h -= i, c > 6) return;
                                    for (n = 0; f();) {
                                        if (r = null, n > 0) {
                                            if (!("." == f() && n < 4)) return;
                                            h++
                                        }
                                        if (!F(Q, f())) return;
                                        for (; F(Q, f());) {
                                            if (a = B(f(), 10), null === r) r = a; else {
                                                if (0 == r) return;
                                                r = 10 * r + a
                                            }
                                            if (r > 255) return;
                                            h++
                                        }
                                        u[c] = 256 * u[c] + r, 2 != ++n && 4 != n || c++
                                    }
                                    if (4 != n) return;
                                    break
                                }
                                if (":" == f()) {
                                    if (h++, !f()) return
                                } else if (f()) return;
                                u[c++] = t
                            } else {
                                if (null !== l) return;
                                h++, l = ++c
                            }
                        }
                        if (null !== l) for (s = c - l, c = 7; 0 != c && s > 0;) o = u[c], u[c--] = u[l + s - 1], u[l + --s] = o; else if (8 != c) return;
                        return u
                    }(W(e, 1, -1)))) return "Invalid host";
                    this.host = t
                } else if (this.isSpecial()) {
                    if (e = y(e), F(Z, e)) return "Invalid host";
                    if (null === (t = function (e) {
                        var t, i, n, r, a, s, o, u = N(e, ".");
                        if (u.length && "" == u[u.length - 1] && u.length--, (t = u.length) > 4) return e;
                        for (i = [], n = 0; n < t; n++) {
                            if ("" == (r = u[n])) return e;
                            if (a = 10, r.length > 1 && "0" == I(r, 0) && (a = F(Y, r) ? 16 : 8, r = W(r, 8 == a ? 1 : 2)), "" === r) s = 0; else {
                                if (!F(10 == a ? J : 8 == a ? K : X, r)) return e;
                                s = B(r, a)
                            }
                            j(i, s)
                        }
                        for (n = 0; n < t; n++) if (s = i[n], n == t - 1) {
                            if (s >= R(256, 5 - t)) return null
                        } else if (s > 255) return null;
                        for (o = D(i), n = 0; n < i.length; n++) o += i[n] * R(256, 3 - n);
                        return o
                    }(e))) return "Invalid host";
                    this.host = t
                } else {
                    if (F($, e)) return "Invalid host";
                    for (t = "", i = v(e), n = 0; n < i.length; n++) t += oe(i[n], ne);
                    this.host = t
                }
            }, cannotHaveUsernamePasswordPort: function () {
                return !this.host || this.cannotBeABaseURL || "file" == this.scheme
            }, includesCredentials: function () {
                return "" != this.username || "" != this.password
            }, isSpecial: function () {
                return d(ue, this.scheme)
            }, shortenPath: function () {
                var e = this.path, t = e.length;
                !t || "file" == this.scheme && 1 == t && ce(e[0], !0) || e.length--
            }, serialize: function () {
                var e = this, t = e.scheme, i = e.username, n = e.password, r = e.host, a = e.port, s = e.path,
                    o = e.query, u = e.fragment, c = t + ":";
                return null !== r ? (c += "//", e.includesCredentials() && (c += i + (n ? ":" + n : "") + "@"), c += ie(r), null !== a && (c += ":" + a)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + L(s, "/") : "", null !== o && (c += "?" + o), null !== u && (c += "#" + u), c
            }, setHref: function (e) {
                var t = this.parse(e);
                if (t) throw E(t);
                this.searchParams.update()
            }, getOrigin: function () {
                var e = this.scheme, t = this.port;
                if ("blob" == e) try {
                    return new Fe(e.path[0]).origin
                } catch (e) {
                    return "null"
                }
                return "file" != e && this.isSpecial() ? e + "://" + ie(this.host) + (null !== t ? ":" + t : "") : "null"
            }, getProtocol: function () {
                return this.scheme + ":"
            }, setProtocol: function (e) {
                this.parse(_(e) + ":", fe)
            }, getUsername: function () {
                return this.username
            }, setUsername: function (e) {
                var t = v(_(e));
                if (!this.cannotHaveUsernamePasswordPort()) {
                    this.username = "";
                    for (var i = 0; i < t.length; i++) this.username += oe(t[i], se)
                }
            }, getPassword: function () {
                return this.password
            }, setPassword: function (e) {
                var t = v(_(e));
                if (!this.cannotHaveUsernamePasswordPort()) {
                    this.password = "";
                    for (var i = 0; i < t.length; i++) this.password += oe(t[i], se)
                }
            }, getHost: function () {
                var e = this.host, t = this.port;
                return null === e ? "" : null === t ? ie(e) : ie(e) + ":" + t
            }, setHost: function (e) {
                this.cannotBeABaseURL || this.parse(e, we)
            }, getHostname: function () {
                var e = this.host;
                return null === e ? "" : ie(e)
            }, setHostname: function (e) {
                this.cannotBeABaseURL || this.parse(e, Se)
            }, getPort: function () {
                var e = this.port;
                return null === e ? "" : _(e)
            }, setPort: function (e) {
                this.cannotHaveUsernamePasswordPort() || ("" == (e = _(e)) ? this.port = null : this.parse(e, ke))
            }, getPathname: function () {
                var e = this.path;
                return this.cannotBeABaseURL ? e[0] : e.length ? "/" + L(e, "/") : ""
            }, setPathname: function (e) {
                this.cannotBeABaseURL || (this.path = [], this.parse(e, Pe))
            }, getSearch: function () {
                var e = this.query;
                return e ? "?" + e : ""
            }, setSearch: function (e) {
                "" == (e = _(e)) ? this.query = null : ("?" == I(e, 0) && (e = W(e, 1)), this.query = "", this.parse(e, Me)), this.searchParams.update()
            }, getSearchParams: function () {
                return this.searchParams.facade
            }, getHash: function () {
                var e = this.fragment;
                return e ? "#" + e : ""
            }, setHash: function (e) {
                "" != (e = _(e)) ? ("#" == I(e, 0) && (e = W(e, 1)), this.fragment = "", this.parse(e, Re)) : this.fragment = null
            }, update: function () {
                this.query = this.searchParams.serialize() || null
            }
        };
        var Fe = function (e) {
            var t = f(this, Le), i = A(arguments.length, 1) > 1 ? arguments[1] : void 0, n = k(t, new Ie(e, !1, i));
            a || (t.href = n.serialize(), t.origin = n.getOrigin(), t.protocol = n.getProtocol(), t.username = n.getUsername(), t.password = n.getPassword(), t.host = n.getHost(), t.hostname = n.getHostname(), t.port = n.getPort(), t.pathname = n.getPathname(), t.search = n.getSearch(), t.searchParams = n.getSearchParams(), t.hash = n.getHash())
        }, Le = Fe.prototype, Oe = function (e, t) {
            return {
                get: function () {
                    return C(this)[e]()
                }, set: t && function (e) {
                    return C(this)[t](e)
                }, configurable: !0, enumerable: !0
            }
        };
        if (a && (h(Le, "href", Oe("serialize", "setHref")), h(Le, "origin", Oe("getOrigin")), h(Le, "protocol", Oe("getProtocol", "setProtocol")), h(Le, "username", Oe("getUsername", "setUsername")), h(Le, "password", Oe("getPassword", "setPassword")), h(Le, "host", Oe("getHost", "setHost")), h(Le, "hostname", Oe("getHostname", "setHostname")), h(Le, "port", Oe("getPort", "setPort")), h(Le, "pathname", Oe("getPathname", "setPathname")), h(Le, "search", Oe("getSearch", "setSearch")), h(Le, "searchParams", Oe("getSearchParams")), h(Le, "hash", Oe("getHash", "setHash"))), l(Le, "toJSON", (function () {
            return C(this).serialize()
        }), {enumerable: !0}), l(Le, "toString", (function () {
            return C(this).serialize()
        }), {enumerable: !0}), P) {
            var De = P.createObjectURL, je = P.revokeObjectURL;
            De && l(Fe, "createObjectURL", u(De, P)), je && l(Fe, "revokeObjectURL", u(je, P))
        }
        b(Fe, "URL"), r({global: !0, constructor: !0, forced: !s, sham: !a}, {URL: Fe})
    }, function (e, t, i) {
        "use strict";
        var n = i(70), r = i(9), a = i(18), s = i(298), o = i(149), u = i(120), c = i(20), l = i(102), h = i(122),
            f = i(101), d = Array;
        e.exports = function (e) {
            var t = a(e), i = u(this), p = arguments.length, v = p > 1 ? arguments[1] : void 0, m = void 0 !== v;
            m && (v = n(v, p > 2 ? arguments[2] : void 0));
            var g, y, _, b, A, w, S = f(t), k = 0;
            if (!S || this === d && o(S)) for (g = c(t), y = i ? new this(g) : d(g); g > k; k++) w = m ? v(t[k], k) : t[k], l(y, k, w); else for (A = (b = h(t, S)).next, y = i ? new this : []; !(_ = r(A, b)).done; k++) w = m ? s(b, v, [_.value, k], !0) : _.value, l(y, k, w);
            return y.length = k, y
        }
    }, function (e, t, i) {
        var n = i(13), r = i(185);
        e.exports = function (e, t, i, a) {
            try {
                return a ? t(n(i)[0], i[1]) : t(i)
            } catch (t) {
                r(e, "throw", t)
            }
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(1), r = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g,
            s = "Overflow: input needs wider integers to process", o = RangeError, u = n(a.exec), c = Math.floor,
            l = String.fromCharCode, h = n("".charCodeAt), f = n([].join), d = n([].push), p = n("".replace),
            v = n("".split), m = n("".toLowerCase), g = function (e) {
                return e + 22 + 75 * (e < 26)
            }, y = function (e, t, i) {
                var n = 0;
                for (e = i ? c(e / 700) : e >> 1, e += c(e / t); e > 455;) e = c(e / 35), n += 36;
                return c(n + 36 * e / (e + 38))
            }, _ = function (e) {
                var t, i, n = [], r = (e = function (e) {
                    for (var t = [], i = 0, n = e.length; i < n;) {
                        var r = h(e, i++);
                        if (r >= 55296 && r <= 56319 && i < n) {
                            var a = h(e, i++);
                            56320 == (64512 & a) ? d(t, ((1023 & r) << 10) + (1023 & a) + 65536) : (d(t, r), i--)
                        } else d(t, r)
                    }
                    return t
                }(e)).length, a = 128, u = 0, p = 72;
                for (t = 0; t < e.length; t++) (i = e[t]) < 128 && d(n, l(i));
                var v = n.length, m = v;
                for (v && d(n, "-"); m < r;) {
                    var _ = 2147483647;
                    for (t = 0; t < e.length; t++) (i = e[t]) >= a && i < _ && (_ = i);
                    var b = m + 1;
                    if (_ - a > c((2147483647 - u) / b)) throw o(s);
                    for (u += (_ - a) * b, a = _, t = 0; t < e.length; t++) {
                        if ((i = e[t]) < a && ++u > 2147483647) throw o(s);
                        if (i == a) {
                            for (var A = u, w = 36; ;) {
                                var S = w <= p ? 1 : w >= p + 26 ? 26 : w - p;
                                if (A < S) break;
                                var k = A - S, C = 36 - S;
                                d(n, l(g(S + k % C))), A = c(k / C), w += 36
                            }
                            d(n, l(g(A))), p = y(u, b, m == v), u = 0, m++
                        }
                    }
                    u++, a++
                }
                return f(n, "")
            };
        e.exports = function (e) {
            var t, i, n = [], s = v(p(m(e), a, "."), ".");
            for (t = 0; t < s.length; t++) i = s[t], d(n, u(r, i) ? "xn--" + _(i) : i);
            return f(n, ".")
        }
    }, function (e, t, i) {
        i(219)
    }, function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(64), i(0);
        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.defaultFraction = 100, this.timeout = this.fraction = this.defaultFraction, this.leeway = 8
            }

            var t, i;
            return t = e, (i = [{
                key: "setController", value: function (e) {
                    this.ctrl = e, this.ctrl.setFraction(this.defaultFraction)
                }
            }, {
                key: "start", value: function (e, t) {
                    if (!this.timer) {
                        this.onFinish = e, this.pos = this.startPos = performance.now(), this.timeout = this.defaultFraction, this.end = this.startPos + t;
                        var i = this;
                        this.timeout = this._fractionForInterval(t), this.timer = setTimeout((function e() {
                            i.pos = performance.now();
                            var t = i.ctrl ? i.ctrl.onProgress((i.pos - i.startPos) / 1e3) : Math.floor(i.end - i.pos);
                            i._shouldProceed(t) ? (i.timeout = i._fractionForInterval(t), i.timer = setTimeout(e, i.timeout)) : (i.timer = void 0, i.onFinish())
                        }), this.timeout)
                    }
                }
            }, {
                key: "interrupt", value: function () {
                    this.timer && (this.stop(), this.onFinish())
                }
            }, {
                key: "stop", value: function () {
                    this.timer && (clearTimeout(this.timer), this.timer = void 0), this.timeout = this.defaultFraction
                }
            }, {
                key: "_shouldProceed", value: function (e) {
                    return this.ctrl ? !this.ctrl.isFinished() : e > this.leeway
                }
            }, {
                key: "_fractionForInterval", value: function (e) {
                    var t = this.ctrl ? this.ctrl.getFraction() : this.fraction;
                    return e < t && (t = e), t
                }
            }]) && n(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = r
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(21), i(72), i(303), i(131), i(0);
        var n = s(i(8)), r = s(i(132)), a = s(i(108));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var u = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.logger = n.default.create(t, "Zap Controller"), this.instanceId = t, this.leeway = .003
            }

            var t, i;
            return t = e, (i = [{
                key: "reset", value: function (e, t) {
                    this.playbackService = e, this.targetTime = t, this.direction = t - e.getCurrentTime() > 0 ? 0 : 1, this.distRaise = 0, this.finished = !1, this.overrun = !1, this.state = 1, this._readDefaultMomentums(), r.default.display(this.instanceId, "momentum", this.momentums)
                }
            }, {
                key: "onProgress", value: function (e) {
                    this.rate = this.playbackService.getPlaybackRate();
                    var t = this.dist;
                    this.dist = this.targetTime + e - this.playbackService.getCurrentTime(), void 0 === t && (t = this.dist), this.effDist = this.dist + this.momentums[this.direction], this._calcZapDuration();
                    var i = this._getDirectedDistance(this.effDist);
                    if (1 === this.state) {
                        if (this._checkDistIsRaising(t)) return this.logger.debug("Terminate zapping for next time. Lack of playback rate control."), this.playbackService.setPlaybackRate(1), this.finished = !0, 0;
                        this._updateFraction(), this._updateRate(i), i > .3 && this.distRaise >= 5 && (this._calcZapRate(), this._calcZapDuration(), this.playbackService.setPlaybackRate(this.rate)), this._shouldStabilize(i) && (this.stblDist = this.dist, this.playbackService.setPlaybackRate(1), this.state = 2, this.stblStartTime = performance.now(), this.fraction = 100, this.duration = .1)
                    } else if (2 === this.state && performance.now() - this.stblStartTime > 500) if (Math.abs(this.dist) < .035) this.logger.debug("Finish zapping, dist = ".concat(this.dist, ", momentums = [").concat(this.momentums.join(", "), "]")), this.finished = !0, this._storeDefaultMomentums(); else {
                        var n = this.dist - this.stblDist - this.momentums[this.direction];
                        this.momentums[this.direction] += n, this.momentums[this.direction] < -.5 && (this.momentums[this.direction] = -.5), this.momentums[this.direction] > .5 && (this.momentums[this.direction] = .5), r.default.display(this.instanceId, "momentum", this.momentums), this.direction = this.dist > 0 ? 0 : 1, this.effDist = this.dist + this.momentums[this.direction], this._calcZapRate(), this._calcZapDuration(), this.playbackService.setPlaybackRate(this.rate), this._updateFraction(), this.state = 1, this.dist = void 0, this.distRaise = 0
                    }
                    return 1e3 * this.duration
                }
            }, {
                key: "setFraction", value: function (e) {
                    this.fraction = e
                }
            }, {
                key: "getFraction", value: function () {
                    return this.fraction
                }
            }, {
                key: "isFinished", value: function () {
                    return this.finished
                }
            }, {
                key: "_updateRate", value: function (e) {
                    this._isForward() ? e < .05 && this.rate > 1.1 && (this.rate = 1.1, this.playbackService.setPlaybackRate(this.rate)) : e < .05 && this.rate < .9 && (this.rate = .9, this.playbackService.setPlaybackRate(this.rate))
                }
            }, {
                key: "_checkDistIsRaising", value: function (e) {
                    var t = this._getDirectedDistance(this.dist), i = t - this._getDirectedDistance(e) >= .001;
                    return i ? (0 === this.distRaise && (this.raisedDist = t), this.distRaise++, (i = this.distRaise > 20 && t - this.raisedDist >= 3 || this.distRaise > 200) && (this.distRaise = 0)) : this.distRaise > 0 && this.distRaise--, i
                }
            }, {
                key: "_calcDistWithMomentum", value: function () {
                    return this.dist + this.momentums[this.direction]
                }
            }, {
                key: "_calcZapDuration", value: function () {
                    1 !== this.rate ? (this.duration = Math.abs(a.default.truncateDecimals(this.effDist / (this.rate - 1))), this.duration < 0 && this.logger.error("_calcZapDuration is negative", this.effDist, this.rate)) : this.duration = 1e3
                }
            }, {
                key: "_isForward", value: function () {
                    return 0 === this.direction
                }
            }, {
                key: "_calcZapRate", value: function () {
                    var e = this._isForward();
                    if (e && this.effDist > 0 && this.effDist < .1) this.rate = 1.1; else if (!e && this.effDist < 0 && this.effDist > -.1) this.rate = .9; else {
                        if (this.rate = this.effDist + 1, this.effDist > 0) this.rate = this.effDist > 2 ? 3 : .1 * Math.ceil(this.rate / .1); else if (this.rate < 0) this.rate = 0; else {
                            var t = Math.floor(this.rate / .1);
                            0 === t && (t = 1), this.rate = .1 * t
                        }
                        e && this.rate < 1 && this.logger.debug("Slow rate on forward", this.effDist, this.rate), !e && this.rate > 1 && this.logger.debug("Fast rate on backward", this.effDist, this.rate)
                    }
                }
            }, {
                key: "_shouldStabilize", value: function (e) {
                    return e < this.leeway
                }
            }, {
                key: "_getDirectedDistance", value: function (e) {
                    return this._isForward() ? e : -e
                }
            }, {
                key: "_updateFraction", value: function () {
                    var e = this._getDirectedDistance(this.effDist);
                    this.fraction = e < 0 ? 5 : e < .1 ? 10 : e < .3 ? 20 : 100
                }
            }, {
                key: "_readDefaultMomentums", value: function () {
                    if (this.momentums = [0, 0], "localStorage" in window) try {
                        var e = window.localStorage.getItem("sldp_player_momentums");
                        e && (this.momentums = e.split(",").map((function (e) {
                            var t = parseFloat(e);
                            return isNaN(t) ? 0 : t
                        })))
                    } catch (e) {
                        this.logger.warn("Error getting default momentums from local storage", e)
                    }
                    r.default.display(this.instanceId, "momentum", this.momentums)
                }
            }, {
                key: "_storeDefaultMomentums", value: function () {
                    if ("localStorage" in window) try {
                        window.localStorage.setItem("sldp_player_momentums", this.momentums.join(","))
                    } catch (e) {
                        this.logger.warn("Error setting default momentum to local storage", e)
                    }
                }
            }]) && o(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = u
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(28).map;
        n({target: "Array", proto: !0, forced: !i(125)("map")}, {
            map: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (e, t, i) {
        var n = i(3), r = i(4).RegExp, a = n((function () {
            var e = r("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        })), s = a || n((function () {
            return !r("a", "y").sticky
        })), o = a || n((function () {
            var e = r("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        }));
        e.exports = {BROKEN_CARET: o, MISSED_STICKY: s, UNSUPPORTED_Y: a}
    }, function (e, t, i) {
        var n = i(3), r = i(4).RegExp;
        e.exports = n((function () {
            var e = r(".", "s");
            return !(e.dotAll && e.exec("\n") && "s" === e.flags)
        }))
    }, function (e, t, i) {
        var n = i(3), r = i(4).RegExp;
        e.exports = n((function () {
            var e = r("(?<a>b)", "g");
            return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
        }))
    }, function (e, t, i) {
        "use strict";
        var n = i(9), r = i(222), a = i(13), s = i(81), o = i(36), u = i(17), c = i(66), l = i(93), h = i(223),
            f = i(224);
        r("match", (function (e, t, i) {
            return [function (t) {
                var i = c(this), r = s(t) ? void 0 : l(t, e);
                return r ? n(r, t, i) : new RegExp(t)[e](u(i))
            }, function (e) {
                var n = a(this), r = u(e), s = i(t, n, r);
                if (s.done) return s.value;
                if (!n.global) return f(n, r);
                var c = n.unicode;
                n.lastIndex = 0;
                for (var l, d = [], p = 0; null !== (l = f(n, r));) {
                    var v = u(l[0]);
                    d[p] = v, "" === v && (n.lastIndex = h(r, o(n.lastIndex), c)), p++
                }
                return 0 === p ? null : d
            }]
        }))
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n = c(i(110)), r = c(i(8)), a = c(i(109)), s = c(i(111)), o = c(i(226)), u = c(i(309));

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function l(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function h(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        var f, d = (f = function () {
            function e(t) {
                var i = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), h(this, "_onWorkletModuleNotFound", (function (e) {
                    i._workletUrl === u.default ? i._onWorkletModuleError(error) : i._audioCtx.audioWorklet.addModule(u.default).then(i._onWorkletModuleAdded).catch(i._onWorkletModuleError)
                })), h(this, "_onWorkletModuleError", (function (e) {
                    i._logger.error(i._spProvider.notAvailableError("Opus decoder worklet", u.default)), i.clear()
                })), h(this, "_onWorkletModuleAdded", (function () {
                    i._pcmFeeder = new AudioWorkletNode(i._audioCtx, "pcm-feed-processor", {outputChannelCount: [2]}), i._pcmFeeder.channelCount = 2, i._gainer = i._audioCtx.createGain(), i._gainer.gain.value = void 0 !== i._curVolume ? i._curVolume : 1, i._pcmFeeder.connect(i._gainer), i._audGraphCtrl.addMediaSourceChain([i._pcmFeeder], [i._gainer]), i._audioCtx.resume(), i._initCallback()
                })), this._logger = r.default.create(t, "WebAudio"), this._syncParams = {}, this._id = t, this._playbackService = a.default.getInstance(t), this._spProvider = n.default.getInstance(t)
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e, t) {
                    return this._mediaElement = e, this._playbackService.init(e), this._audCtxProvider = s.default.getInstance(this._id), this._audioCtx = this._audCtxProvider.get(), "running" !== this._audioCtx.state ? (this._logger.warn("Audio context state is ".concat(this._audioCtx.state, ', but should be "running"')), !1) : (this._audGraphCtrl = o.default.getInstance(this._id), this._audGraphCtrl.init(e, 2), this._initCallback = t || this._onMediaReadyCallback, this._workletUrl = this._spProvider.translateToScriptPath(u.default), this._audioCtx.audioWorklet.addModule(this._workletUrl).then(this._onWorkletModuleAdded).catch(this._onWorkletModuleNotFound), !0)
                }
            }, {
                key: "clear", value: function () {
                    this.resetPosition(), this._mediaElement = void 0
                }
            }, {
                key: "resetPosition", value: function () {
                    this._playStarted = !1, this._pcmFeeder && (this._curVolume = void 0, this._pcmFeeder.port.postMessage({cmd: "stop"}), this._audGraphCtrl.removeMediaSourceChain(), this._pcmFeeder.disconnect(this._gainer), this._pcmFeeder = void 0, this._gainer = void 0)
                }
            }, {
                key: "setLowBufferBorder", value: function (e) {
                    this._lowBufferBorder = e
                }
            }, {
                key: "setLatencyTolerance", value: function (e, t, i) {
                    this._latencyTolerance = e, this._latencyAdjustZap = !!i, this._bufferToKeep = t, this._bckAllowance = Math.min(.2 * t, .5), this._fwdAllowance = Math.min(.1 * t, .3)
                }
            }, {
                key: "toggleBufferLineUp", value: function (e) {
                    this._bufLineUpEnabled = !!e
                }
            }, {
                key: "setCurrentBufferLevel", value: function (e, t) {
                    this._curBufferLevel = t
                }
            }, {
                key: "callbacks", set: function (e) {
                    this._onMediaReadyCallback = e.onMediaReady, this._onProgressCallback = e.onProgress, this._onCrashCallback = e.onCrash, this._onWaitStatusCallback = e.onWaitUpdate, this._onPlayStartedCallback = e.onPlayStarted, this._onLatencyCalcCallback = e.onLatencyCalc, this._onLatencySeekCallback = e.onLatencySeek, this._onLowBufferCallback = e.onLowBuffer
                }
            }, {
                key: "createSourceBuffer", value: function (e, t, i, n) {
                    return {
                        wapi: this, removeAll: function () {
                        }, getBufferingLength: function () {
                            return this.bufferLength
                        }, setBufferingLength: function (e) {
                            this.bufferLength = e, this.fBufferLength = e
                        }, pushInit: function (e, t) {
                        }, pushSegment: function (e, t, i) {
                            var n = this;
                            e.then((function (e) {
                                var i = e.channelData;
                                if (e.samplesDecoded, e.sampleRate, n.wapi._pcmFeeder) {
                                    for (var r = [], a = 0; a < i.length; a++) r.push(i[a].buffer);
                                    n.wapi._pcmFeeder.port.postMessage([i, t[0]], r)
                                }
                            }))
                        }, filterOut: function (e) {
                        }, getSegments: function () {
                            return {segments: [], start: 0}
                        }
                    }
                }
            }, {
                key: "setSyncParams", value: function (e, t) {
                    this._syncParams.timeShift = e, this._syncParams.bufferSize = t, this._syncParams.integralDist = 0, this._syncParams.start = void 0, this._logger.debug("setSyncParams", e, t)
                }
            }, {
                key: "startLogging", value: function () {
                }
            }, {
                key: "startPlayback", value: function (e) {
                    this._logger.debug("startPlayback, buffered ranges count ", this._mediaElement.buffered.length), this._mediaElement.buffered.length > 0 && this._logger.debug("video element buffer", this._mediaElement.buffered.start(0), this._mediaElement.buffered.end(0)), (0 == this._mediaElement.currentTime || this._playbackService.isPaused()) && this._playbackService.playMedia(e || {})
                }
            }, {
                key: "handlePlayEvent", value: function () {
                    this._playStarted || (this._playStarted = !0, this._onPlayStartedCallback("wapi"))
                }
            }, {
                key: "handlePauseEvent", value: function () {
                    this._logger.debug("handlePauseEvent")
                }
            }, {
                key: "resumeTo", value: function (e) {
                    this._pcmFeeder.port.postMessage({cmd: "play", val: e}), this._logger.debug("resumeTo", e)
                }
            }, {
                key: "handlePause", value: function () {
                    this._pcmFeeder.port.postMessage({cmd: "pause"}), this._logger.debug("handlePause")
                }
            }, {
                key: "isSeeking", value: function () {
                    return !!this._mediaElement && this._seekInProgress
                }
            }, {
                key: "setVolume", value: function (e) {
                    this._curVolume = e, this._gainer && this._gainer.gain.setValueAtTime(e, this._audioCtx.currentTime)
                }
            }, {
                key: "getVolume", value: function () {
                    return this._curVolume || 1
                }
            }, {
                key: "setMuted", value: function (e) {
                    this._curMuted = e, this.setVolume(e ? 0 : this._curVolume)
                }
            }, {
                key: "isMuted", value: function () {
                    return this._curMuted
                }
            }]) && l(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), {
            create: function (e) {
                return new f(e)
            }, isCodecSupported: function (e, t) {
                return "audio" === e && "opus" === t
            }
        });
        t.default = d
    }, function (e, t, i) {
        "use strict";
        e.exports = i.p + "opus-v2.24.0.worklet.min.js"
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(169);
        var n = a(i(311)), r = a(i(314));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = {
            createFile: function () {
                return new r.default
            }, createBox: function (e, t, i) {
                var r = n.default.create(e);
                return t && t.append(r, i), r
            }, createFullBox: function (e, t, i) {
                var n = s.createBox(e, t, i);
                return n.version = 0, n.flags = 0, n
            }
        }, o = s;
        t.default = o
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(169), i(107), i(39), i(133), i(16), i(15), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(33);
        var n = s(i(313)), r = s(i(134)), a = s(i(228));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = function () {
            this._cursor = new r.default, this.int32pow = Math.pow(2, 32)
        };
        o.create = function (e) {
            var t = new o;
            return t.type = e, t.boxes = [], t
        }, o.prototype._boxContainers = ["dinf", "mdia", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak"], o.prototype._boxProcessors = {}, o.prototype._writeFieldArray = function (e, t, i) {
            for (var n = 0; n < i.length; n++) this._writeField(e, t, i[n])
        }, o.prototype._writeFullBox = function () {
            this._writeField("uint", 8, this.version), this._writeField("uint", 24, this.flags)
        }, o.prototype._procEntries = function (e, t, i) {
            for (var n = 0; n < t; n++) i.call(this, this[e][n])
        }, o.prototype._procSubBoxes = function (e, t) {
            for (var i = 0; i < t; i++) this._rawo ? this[e][i].write() : this.size += this[e][i].getLength()
        }, o.prototype.append = function (e, t) {
            a.default.appendBox(this, e, t)
        }, o.prototype.getLength = function () {
            if (this._rawo = null, this.size = 0, this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type)) for (var e = 0; e < this.boxes.length; e++) this.size += this.boxes[e].getLength();
            return this._data && this._writeData(this._data), this.size
        }, o.prototype.write = function () {
            if (this._cursor.offset = this._parent._cursor.offset, 0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size), this._writeField("uint", 32, this.size), this._writeField("string", 4, this.type), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type)) for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write();
            return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size
        }, o.prototype._writeInt = function (e, t) {
            if (this._rawo) {
                var i = this._cursor.offset - this._rawo.byteOffset;
                switch (e) {
                    case 8:
                        this._rawo.setInt8(i, t);
                        break;
                    case 16:
                        this._rawo.setInt16(i, t);
                        break;
                    case 32:
                        this._rawo.setInt32(i, t);
                        break;
                    case 64:
                        var n = Math.floor(t / this.int32pow), r = t - n * this.int32pow;
                        this._rawo.setUint32(i, n), this._rawo.setUint32(i + 4, r)
                }
                this._cursor.offset += e >> 3
            } else this.size += e >> 3
        }, o.prototype._writeUint = function (e, t) {
            if (this._rawo) {
                var i, n, r = this._cursor.offset - this._rawo.byteOffset;
                switch (e) {
                    case 8:
                        this._rawo.setUint8(r, t);
                        break;
                    case 16:
                        this._rawo.setUint16(r, t);
                        break;
                    case 24:
                        i = (16776960 & t) >> 8, n = 255 & t, this._rawo.setUint16(r, i), this._rawo.setUint8(r + 2, n);
                        break;
                    case 32:
                        this._rawo.setUint32(r, t);
                        break;
                    case 64:
                        n = t - (i = Math.floor(t / this.int32pow)) * this.int32pow, this._rawo.setUint32(r, i), this._rawo.setUint32(r + 4, n)
                }
                this._cursor.offset += e >> 3
            } else this.size += e >> 3
        }, o.prototype._writeString = function (e, t) {
            for (var i = 0; i < e; i++) this._writeUint(8, t.charCodeAt(i))
        }, o.prototype._writeTerminatedString = function (e) {
            if (0 !== e.length) {
                for (var t = 0; t < e.length; t++) this._writeUint(8, e.charCodeAt(t));
                this._writeUint(8, 0)
            }
        }, o.prototype._writeTemplate = function (e, t) {
            var i = Math.floor(t), n = (t - i) * Math.pow(2, e / 2);
            this._writeUint(e / 2, i), this._writeUint(e / 2, n)
        }, o.prototype._writeData = function (e) {
            if (e) if (this._rawo) {
                if (e instanceof Uint8Array) this._root.bytes.set(e, this._cursor.offset), this._cursor.offset += e.length; else if (e instanceof Array) {
                    for (var t = this._cursor.offset - this._rawo.byteOffset, i = 0; i < e.length; i++) this._rawo.setInt8(t + i, e[i]);
                    this._cursor.offset += e.length
                }
            } else this.size += e.length
        }, o.prototype._writeUTF8String = function (e) {
            var t = n.default.utf8ToByteArray(e);
            if (this._rawo) for (var i = new DataView(this._rawo.buffer, this._cursor.offset, t.length), r = 0; r < t.length; r++) i.setUint8(r, t[r]); else this.size += t.length
        }, o.prototype._writeField = function (e, t, i) {
            switch (e) {
                case"uint":
                    this._writeUint(t, i);
                    break;
                case"int":
                    this._writeInt(t, i);
                    break;
                case"template":
                    this._writeTemplate(t, i);
                    break;
                case"string":
                    -1 == t ? this._writeTerminatedString(i) : this._writeString(t, i);
                    break;
                case"data":
                    this._writeData(i);
                    break;
                case"utf8":
                    this._writeUTF8String(i)
            }
        }, o.prototype._boxProcessors.avc1 = o.prototype._boxProcessors.avc2 = o.prototype._boxProcessors.avc3 = o.prototype._boxProcessors.avc4 = o.prototype._boxProcessors.hvc1 = o.prototype._boxProcessors.hev1 = o.prototype._boxProcessors.encv = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeField("uint", 16, this.pre_defined1), this._writeField("uint", 16, this.reserved2), this._writeFieldArray("uint", 32, this.pre_defined2), this._writeField("uint", 16, this.width), this._writeField("uint", 16, this.height), this._writeField("template", 32, this.horizresolution), this._writeField("template", 32, this.vertresolution), this._writeField("uint", 32, this.reserved3), this._writeField("uint", 16, this.frame_count), this._writeFieldArray("uint", 8, this.compressorname), this._writeField("uint", 16, this.depth), this._writeField("int", 16, this.pre_defined3), this._writeField("data", -1, this.config), this._procSubBoxes("entries", this.entry_count)
        }, o.prototype._boxProcessors.dref = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count)
        }, o.prototype._boxProcessors.pasp = function () {
            this._writeField("uint", 32, this.hSpacing), this._writeField("uint", 32, this.vSpacing)
        }, o.prototype._boxProcessors.styp = o.prototype._boxProcessors.ftyp = function () {
            this._writeField("string", 4, this.major_brand), this._writeField("uint", 32, this.minor_version), this._writeFieldArray("string", 4, this.compatible_brands)
        }, o.prototype._boxProcessors.sidx = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.reference_ID), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.earliest_presentation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.first_offset), this._writeField("uint", 16, this.reserved), this._writeField("uint", 16, this.reference_count), this._procEntries("references", this.reference_count, (function (e) {
                e.reference = (1 & e.reference_type) << 31, e.reference |= 2147483647 & e.referenced_size, e.sap = (1 & e.starts_with_SAP) << 31, e.sap |= (3 & e.SAP_type) << 28, e.sap |= 268435455 & e.SAP_delta_time, this._writeField("uint", 32, e.reference), this._writeField("uint", 32, e.subsegment_duration), this._writeField("uint", 32, e.sap)
            }))
        }, o.prototype._boxProcessors.hdlr = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.pre_defined), this._writeField("string", 4, this.handler_type), this._writeFieldArray("uint", 32, this.reserved), this._writeField("string", -1, this.name)
        }, o.prototype._boxProcessors.mdat = function () {
            this._writeField("data", -1, this.data)
        }, o.prototype._boxProcessors.mdhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), "string" == typeof this.language && (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._writeField("uint", 16, this.language), this._writeField("uint", 16, this.pre_defined)
        }, o.prototype._boxProcessors.mehd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.fragment_duration)
        }, o.prototype._boxProcessors.mfhd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.sequence_number)
        }, o.prototype._boxProcessors.mp4a = o.prototype._boxProcessors.enca = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._writeField("data", -1, this.esds)
        }, o.prototype._boxProcessors[".mp3"] = function () {
            this._writeFieldArray("uint", 8, this.reserved1), this._writeField("uint", 16, this.data_reference_index), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.channelcount), this._writeField("uint", 16, this.samplesize), this._writeField("uint", 16, this.pre_defined), this._writeField("uint", 16, this.reserved3), this._writeField("uint", 32, this.samplerate), this._procSubBoxes("entries", this.entry_count)
        }, o.prototype._boxProcessors.btrt = function () {
            this._writeField("uint", 32, this.bufferSizeDB), this._writeField("uint", 32, this.maxBitrate), this._writeField("uint", 32, this.avgBitrate)
        }, o.prototype._boxProcessors.mvhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.timescale), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeField("template", 32, this.rate), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved1), this._writeFieldArray("uint", 32, this.reserved2), this._writeFieldArray("template", 32, this.matrix), this._writeFieldArray("uint", 32, this.pre_defined), this._writeField("uint", 32, this.next_track_ID)
        }, o.prototype._boxProcessors.smhd = function () {
            this._writeFullBox(), this._writeField("uint", 16, this.balance), this._writeField("uint", 16, this.reserved)
        }, o.prototype._boxProcessors.stsd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.entry_count), this._procSubBoxes("entries", this.entry_count)
        }, o.prototype._boxProcessors.tfdt = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.baseMediaDecodeTime)
        }, o.prototype._boxProcessors.tfhd = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.track_ID), 1 & this.flags && this._writeField("uint", 64, this.base_data_offset), 2 & this.flags && this._writeField("uint", 32, this.sample_description_offset), 8 & this.flags && this._writeField("uint", 32, this.default_sample_duration), 16 & this.flags && this._writeField("uint", 32, this.default_sample_size), 32 & this.flags && this._writeField("uint", 32, this.default_sample_flags)
        }, o.prototype._boxProcessors.tkhd = function () {
            this._writeFullBox(), this._writeField("uint", 1 == this.version ? 64 : 32, this.creation_time), this._writeField("uint", 1 == this.version ? 64 : 32, this.modification_time), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.reserved1), this._writeField("uint", 1 == this.version ? 64 : 32, this.duration), this._writeFieldArray("uint", 32, this.reserved2), this._writeField("uint", 16, this.layer), this._writeField("uint", 16, this.alternate_group), this._writeField("template", 16, this.volume), this._writeField("uint", 16, this.reserved3), this._writeFieldArray("template", 32, this.matrix), this._writeField("template", 32, this.width), this._writeField("template", 32, this.height)
        }, o.prototype._boxProcessors.trex = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.track_ID), this._writeField("uint", 32, this.default_sample_description_index), this._writeField("uint", 32, this.default_sample_duration), this._writeField("uint", 32, this.default_sample_size), this._writeField("uint", 32, this.default_sample_flags)
        }, o.prototype._boxProcessors.trun = function () {
            this._writeFullBox(), this._writeField("uint", 32, this.sample_count), 1 & this.flags && this._writeField("int", 32, this.data_offset), 4 & this.flags && this._writeField("uint", 32, this.first_sample_flags), this._procEntries("samples", this.sample_count, (function (e) {
                256 & this.flags && this._writeField("uint", 32, e.sample_duration), 512 & this.flags && this._writeField("uint", 32, e.sample_size), 1024 & this.flags && this._writeField("uint", 32, e.sample_flags), 2048 & this.flags && this._writeField(1 === this.version ? "int" : "uint", 32, e.sample_composition_time_offset)
            }))
        }, o.prototype._boxProcessors["url "] = o.prototype._boxProcessors["urn "] = function () {
            this._writeFullBox(), "urn " === this.type && this._writeField("string", -1, this.name), this._writeField("string", -1, this.location)
        }, o.prototype._boxProcessors.vmhd = function () {
            this._writeFullBox(), this._writeField("uint", 16, this.graphicsmode), this._writeFieldArray("uint", 16, this.opcolor)
        };
        var u = o;
        t.default = u
    }, function (e, t, i) {
        var n = i(2), r = i(126);
        n({global: !0, constructor: !0, forced: !i(161)}, {DataView: r.DataView})
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(72);
        var n = {
            dataViewToString: function (e, t) {
                var i = t || "utf-8";
                if ("undefined" != typeof TextDecoder) return new TextDecoder(i).decode(e);
                var n = [], r = 0;
                if ("utf-8" === i) for (; r < e.byteLength;) {
                    var a = e.getUint8(r++);
                    a < 128 || (a < 224 ? (a = (31 & a) << 6, a |= 63 & e.getUint8(r++)) : a < 240 ? (a = (15 & a) << 12, a |= (63 & e.getUint8(r++)) << 6, a |= 63 & e.getUint8(r++)) : (a = (7 & a) << 18, a |= (63 & e.getUint8(r++)) << 12, a |= (63 & e.getUint8(r++)) << 6, a |= 63 & e.getUint8(r++))), n.push(String.fromCharCode(a))
                } else for (; r < e.byteLength;) n.push(String.fromCharCode(e.getUint8(r++)));
                return n.join("")
            }, utf8ToByteArray: function (e) {
                var t, i;
                if ("undefined" != typeof TextEncoder) t = (new TextEncoder).encode(e); else for (t = [], i = 0; i < e.length; ++i) {
                    var n = e.charCodeAt(i);
                    n < 128 ? t.push(n) : n < 2048 ? (t.push(192 | n >> 6), t.push(128 | 63 & n)) : n < 65536 ? (t.push(224 | n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n)) : (t.push(240 | n >> 18), t.push(128 | 63 & n >> 12), t.push(128 | 63 & n >> 6), t.push(128 | 63 & n))
                }
                return t
            }
        };
        t.default = n
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(39), i(16), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(133);
        var n = a(i(134)), r = a(i(228));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = function () {
            this._cursor = new n.default, this.boxes = []
        };
        s.prototype.write = function () {
            var e = 0, t = 0;
            for (t = 0; t < this.boxes.length; t++) e += this.boxes[t].getLength();
            var i = new Uint8Array(e);
            for (this._rawo = new DataView(i.buffer), this.bytes = i, this._cursor.offset = 0, t = 0; t < this.boxes.length; t++) this.boxes[t].write();
            return i.buffer
        }, s.prototype.append = function (e, t) {
            r.default.appendBox(this, e, t)
        };
        var o = s;
        t.default = o
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(39), i(16), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(21);
        var n = a(i(316)), r = a(i(8));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = function (e) {
            var t = r.default.create(e, "WebmComposer");

            function i() {
                var e = [], i = 1;

                function r(e, i, n) {
                    var r = n.prevSamplCntTs + i.samplesPerFrame, a = n.nextSamplCntTs - r;
                    if (a >= i.samplesPerFrame && a <= 10 * i.samplingRate) {
                        t.debug("recover audio gap effShift = ".concat(a, ", prevTs = ").concat(n.prevTs, ", prevSamplCntTs = ").concat(n.prevSamplCntTs, ", nextSamplCntTs = ").concat(n.nextSamplCntTs));
                        for (var s = Math.floor(a / i.samplesPerFrame), o = n.prevTs, u = 0; u < s; u++) {
                            o += i.tsPerFrame;
                            var c = {
                                data: n.data,
                                sap: !0,
                                ts: o,
                                msTs: i.millisecondsFromTs(o),
                                msDuration: i.msPerFrame,
                                samplCntTs: r,
                                samplCntDur: i.samplesPerFrame
                            };
                            e.push(c), r += i.samplesPerFrame
                        }
                        t.warn("adding dummy frames", e.length - 1, r, n.nextSamplCntTs)
                    }
                    return r
                }

                function a(e, t) {
                    return t < 0 || t > 10 * e.timescale
                }

                function s(e, i, n) {
                    var r = !1;
                    if (e.isAudio && e.lastSilenceSampleTs > 0 && null !== n) {
                        var a = e.lastSilenceSampleTs - i;
                        a >= 0 ? a < 5 * e.timescale && (t.debug("Ignore real frames after mute", i, e.lastSilenceSampleTs), r = !0) : e.lastSilenceSampleTs = 0
                    }
                    return r
                }

                function o(e, i, n, o) {
                    if (s(e, o, n)) return [];
                    var u = [], c = e.lastSample, l = o - c.rawts;
                    a(e, l) && (t.debug("Incorrect DTS difference (".concat(l, ") between previous (ts: ").concat(c.rawts, ", sap: ").concat(c.sap, ") and current frame (ts: ").concat(o, ", sap: ").concat(i, ")")), l = e.lastSampleDuration);
                    var h = o;
                    if (o = c.ts + l, l > 0 && (e.lastSampleDuration = l), c.duration = l, c.msDuration = e.millisecondsFromTs(l), s(e, o, n)) return [];
                    e.isAudio && (void 0 === e.samplesPerFrame && function (e, t) {
                        t > 0 && (e.tsPerFrame = t, e.msPerFrame = 1e3 * t / e.timescale, e.samplesPerFrame = e.samplingRate * t / e.timescale)
                    }(e, l), e.alignBase && (e.prevSample && (r(u, e, {
                        prevTs: e.prevSample.ts,
                        prevSamplCntTs: e.prevSample.samplCntTs,
                        nextSamplCntTs: c.samplCntTs,
                        data: e.silence ? e.silence : c.data
                    }), e.prevSample = void 0), e.alignBase = void 0)), u.push(c);
                    var f = 0;
                    e.isAudio && (f = r(u, e, {
                        prevTs: c.ts,
                        prevSamplCntTs: c.samplCntTs,
                        nextSamplCntTs: e.sampleCountFromTs(o),
                        data: e.silence ? e.silence : c.data
                    }), c.samplCntDur = e.samplesPerFrame);
                    var d = n;
                    return null === d && e.isAudio && (d = e.silence, e.lastSilenceSampleTs = o), e.lastSample = {
                        data: d,
                        sap: i,
                        ts: o,
                        rawts: h,
                        samplCntTs: f,
                        msTs: e.millisecondsFromTs(o)
                    }, u
                }

                function u(e) {
                    var i;
                    switch (e.codec) {
                        case"OPUS":
                            i = function (e) {
                                var t = new Uint8Array(19);
                                t.set([79, 112, 117, 115, 72, 101, 97, 100], 0);
                                var i = 8;
                                return t[i++] = 1, t[i++] = e.channels, t[i++] = 255 & e.preSkipSamples, t[i++] = (65280 & e.preSkipSamples) >> 8, t[i++] = 255 & e.samplingRate, t[i++] = (65280 & e.samplingRate) >> 8, t[i++] = (16711680 & e.samplingRate) >> 16, t[i++] = (4278190080 & e.samplingRate) >> 24, t[i++] = 0, t[i++] = 0, t[18] = 0, t
                            }(e);
                            break;
                        default:
                            t.error("Audio header generation is not supported for codec", e.codec)
                    }
                    return i
                }

                function c(e, t, i) {
                    var r = n.default.createElement("Cluster", e);
                    n.default.createElement("Timecode", r, i.msTs);
                    var a = n.default.createElement("SimpleBlock", r);
                    a.sap = i.sap, a.timecode = 0, a.trackNumber = t.id, a.frame = i.data
                }

                function l(i) {
                    for (var n, r = 0; r < e.length; r++) if (e[r].id == i) {
                        n = e[r];
                        break
                    }
                    return void 0 === n && t.error("track ID " + i + " is not found!"), n
                }

                this.reset = function () {
                    e = [], i = 1
                }, this.free = function () {
                }, this.isReady = function () {
                    return !0
                }, this.addTrack = function (n, r) {
                    var a = {
                        id: i,
                        type: n,
                        isAudio: "audio" === n,
                        curSeqNumber: 0,
                        lastSampleDuration: 0,
                        lastSilenceSampleTs: 0,
                        sampleCountFromTs: function (e) {
                            return Math.floor(this.samplingRate / this.timescale * e + .5)
                        },
                        millisecondsFromTs: function (e) {
                            return Math.floor(1e3 * e / this.timescale + .5)
                        }
                    };
                    if (t.setPrefix("WebmComposer " + n), r) switch (a.timescale = r.timescale, n) {
                        case"video":
                            a.codec = r.codec ? r.codec.toUpperCase() : "VP8", a.width = r.width || 0, a.height = r.height || 0;
                            break;
                        case"audio":
                            a.codec = r.codec.toUpperCase(), a.samplingRate = 48e3, a.channels = 2, a.preSkipSamples = 3840, a.seekPreRollNanoSec = 8e7, a.silence = new Uint8Array([252, 255, 254])
                    }
                    return e.push(a), i++, a
                }, this.setTrackParams = function (e, i) {
                    var n = l(e);
                    return n && ("codec" in i && (i.codec = i.codec.toUpperCase()), "width" in i && (n.width = i.width), "height" in i && (n.height = i.height), "timescale" in i && (n.timescale = i.timescale), "sequenceNumber" in i && (n.curSeqNumber = i.sequenceNumber), "alignBase" in i && (n.alignBase = i.alignBase), "syncBase" in i && (n.syncBase = i.syncBase), t.debug("setTrackParams: ", e, i)), n
                }, this.getTrackSampleDuration = function (e, t) {
                    var i, n = l(e);
                    return n && (i = n.tsPerFrame), i
                }, this.getTrackAudioInfo = function (e) {
                    var t, i = l(e);
                    return i && (t = {samplingRate: i.samplingRate, channels: i.channels}), t
                }, this.isTrackSilent = function (e) {
                    var t, i = l(e);
                    return i && i.isAudio && (t = i.lastSilenceSampleTs > 0), t
                }, this.setBaseSample = function (e, i, n) {
                    var r = l(e);
                    if (r) {
                        var s = n;
                        if (r.syncBase) {
                            if (r.syncSample) {
                                var o = n - r.syncSample.rawts;
                                a(o) && (t.debug("setBaseSample discontinuity: " + o, n, r.syncSample.ts, r.syncSample.rawts, r.lastSampleDuration), o = r.lastSampleDuration), n = r.syncSample.ts + o, r.syncSample = void 0
                            }
                            r.syncBase = void 0
                        }
                        var u = i, c = 0;
                        r.isAudio && (r.lastSilenceSampleTs = 0, null === u && (u = r.silence, r.lastSilenceSampleTs = n), c = r.sampleCountFromTs(n)), r.lastSample = {
                            data: u,
                            sap: !0,
                            ts: n,
                            rawts: s,
                            samplCntTs: c,
                            msTs: r.millisecondsFromTs(n)
                        }, t.debug("setBaseSample: ", r.type, n)
                    } else t.error("setBaseSample: track " + e + " not found!!!")
                }, this.getRealTs = function (e, i) {
                    var n = i, r = l(e);
                    if (r) {
                        if (r.lastSample) {
                            var a = r.lastSample.ts - r.lastSample.rawts;
                            0 !== a && (a > 0 && i < r.lastSample.ts || i >= r.lastSample.rawts) && (n = i + a)
                        }
                    } else t.error("getRealTs: track ".concat(e, " not found"));
                    return n
                }, this.initSegment = function () {
                    var t = n.default.createFile();
                    !function (e) {
                        var t = n.default.createElement("EBML", e);
                        n.default.createElement("EBMLVersion", t, 1), n.default.createElement("EBMLReadVersion", t, 1), n.default.createElement("EBMLMaxIDLength", t, 4), n.default.createElement("EBMLMaxSizeLength", t, 8), n.default.createElement("DocType", t, "webm"), n.default.createElement("DocTypeVersion", t, 4), n.default.createElement("DocTypeReadVersion", t, 2)
                    }(t);
                    var i = function (e) {
                        var t = n.default.createElement("Segment", e);
                        return t._unbound = !0, t
                    }(t);
                    return function (e) {
                        var t = n.default.createElement("SegmentInfo", e);
                        n.default.createElement("TimecodeScale", t, 1e6), n.default.createElement("MuxingApp", t, "sldp-player"), n.default.createElement("WritingApp", t, "sldp-player")
                    }(i), function (t) {
                        for (var i = n.default.createElement("Tracks", t), r = 0; r < e.length; r++) {
                            var a = "video" == e[r].type, s = n.default.createElement("TrackEntry", i);
                            if (n.default.createElement("TrackNumber", s, e[r].id), n.default.createElement("TrackUID", s, e[r].id), n.default.createElement("FlagLacing", s, 0), n.default.createElement("Language", s, "und"), n.default.createElement("CodecName", s, e[r].codec), n.default.createElement("TrackType", s, a ? 1 : 2), n.default.createElement("CodecID", s, a ? "V_" + e[r].codec : "A_" + e[r].codec), a) {
                                var o = n.default.createElement("Video", s);
                                n.default.createElement("PixelWidth", o, e[r].width), n.default.createElement("PixelHeight", o, e[r].height)
                            } else {
                                n.default.createElement("SeekPreRoll", s, e[r].seekPreRollNanoSec), n.default.createElement("CodecPrivate", s, u(e[r]));
                                var c = n.default.createElement("Audio", s);
                                n.default.createElement("SamplingFrequency", c).frequency = e[r].samplingRate, n.default.createElement("Channels", c, e[r].channels)
                            }
                        }
                    }(i), t.write()
                }, this.mediaSegment = function (e, i, r) {
                    var a, s = l(e), u = [], h = [];
                    if (s) {
                        for (var f = [], d = 0; d < i.length; d++) if (s.lastSample) for (var p = o(s, i[d].sap, i[d].data, i[d].ts), v = 0; v < p.length; v++) f.push(p[v]), u.push(p[v].ts), h.push(p[v].sap); else t.error("mediaSegment is executed while no base sample is set. Compelled setting of base sample: ", i[d].sap, i[d].ts), i[d].sap && this.setBaseSample(e, i[d].data, i[d].ts);
                        if (r && void 0 !== s.lastSample && (s.lastSample.duration = s.lastSampleDuration, t.debug("Push last sample, ts = ".concat(s.lastSample.ts, ", duration = ").concat(s.lastSample.duration)), f.push(s.lastSample), u.push(s.lastSample.ts), h.push(s.lastSample.sap), s.alignBase && (s.prevSample = {
                            ts: s.lastSample.ts,
                            samplCntTs: s.lastSample.samplCntTs
                        }), s.syncBase && (s.syncSample = {
                            ts: s.lastSample.ts,
                            rawts: s.lastSample.rawts
                        }), s.lastSample = void 0), f.length > 0) {
                            for (var m = n.default.createFile(), g = 0; g < f.length; g++) c(m, s, f[g]);
                            s.curSeqNumber++, a = {ts: u, sap: h, sn: s ? s.curSeqNumber - 1 : void 0, data: m.write()}
                        }
                    }
                    return a
                }
            }

            return {
                create: function () {
                    return new i
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = a(i(317)), r = a(i(318));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = {
            createFile: function () {
                return new r.default
            }, createElement: function (e, t, i) {
                var r = n.default.create(e, i);
                return t && (r._root = t._root ? t._root : t, r._parent = t, t.elements.push(r)), r
            }
        };
        t.default = s
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(39), i(133), i(16), i(15), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63);
        var n, r = (n = i(134)) && n.__esModule ? n : {default: n}, a = 281474976710656, s = {
            EBML: 440786851,
            EBMLVersion: 17030,
            EBMLReadVersion: 17143,
            EBMLMaxIDLength: 17138,
            EBMLMaxSizeLength: 17139,
            DocType: 17026,
            DocTypeVersion: 17031,
            DocTypeReadVersion: 17029,
            Segment: 408125543,
            SegmentInfo: 357149030,
            TimecodeScale: 2807729,
            MuxingApp: 19840,
            WritingApp: 22337,
            Duration: 17545,
            Tracks: 374648427,
            TrackEntry: 174,
            TrackNumber: 215,
            TrackUID: 29637,
            FlagLacing: 156,
            Language: 2274716,
            CodecID: 134,
            CodecName: 2459272,
            TrackType: 131,
            SeekPreRoll: 22203,
            Video: 224,
            PixelWidth: 176,
            PixelHeight: 186,
            Cluster: 524531317,
            Timecode: 231,
            SimpleBlock: 163,
            Audio: 225,
            SamplingFrequency: 181,
            Channels: 159,
            CodecPrivate: 25506
        }, o = function () {
            this._cursor = new r.default
        };
        o.create = function (e, t) {
            var i = new o;
            return i.id = s[e], i.elements = [], void 0 !== t && (i._data = t), i
        }, o.prototype._elemProcessors = {}, o.prototype.getLength = function () {
            this._rawo = null, this.size = 0, this._idLength = this._measureUint(this.id);
            for (var e = 0; e < this.elements.length; e++) this.size += this.elements[e].getLength();
            return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._unbound ? this._sizeLength = 1 : this._sizeLength = this._measureVarInt(this.size), this.size + this._idLength + this._sizeLength
        }, o.prototype.write = function () {
            this._cursor.offset = this._parent._cursor.offset;
            var e = this._idLength + this._sizeLength + this.size;
            0 === this.size ? this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset) : this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, e), this._writeField("uint", this.id, this._idLength), this._unbound ? this._writeField("uint", 255, 1) : this._writeField("vint", this.size, this._sizeLength);
            for (var t = 0; t < this.elements.length; t++) this.elements[t].write();
            return this._elemProcessors[this.id] && this._elemProcessors[this.id].call(this), void 0 !== this._data && this._processData(this._data), this._parent._cursor.offset += e, e
        }, o.prototype._setU8 = function (e) {
            this._rawo.setUint8(this._viewOffset, e), this._viewOffset++
        }, o.prototype._setFloat32 = function (e) {
            this._rawo.setFloat32(this._viewOffset, e, !1), this._viewOffset += 4
        }, o.prototype._setFloat64 = function (e) {
            this._rawo.setFloat64(this._viewOffset, e, !1), this._viewOffset += 8
        }, o.prototype._writeData = function (e) {
            if (e) if (this._rawo) {
                if (e instanceof Uint8Array) this._root.bytes.set(e, this._cursor.offset), this._cursor.offset += e.length; else if (e instanceof Array) {
                    this._cursor.offset, this._rawo.byteOffset;
                    for (var t = 0; t < e.length; t++) this._setU8(e[t]);
                    this._cursor.offset += e.length
                }
            } else this.size += e.length
        }, o.prototype._writeString = function (e) {
            if (this._rawo) {
                this._viewOffset = this._cursor.offset - this._rawo.byteOffset;
                for (var t = 0; t < e.length; t++) this._setU8(e.charCodeAt(t));
                this._cursor.offset += e.length
            } else this.size += e.length
        }, o.prototype._writeVarInt = function (e, t) {
            if (void 0 === t && (t = this._measureVarInt(e)), this._rawo) {
                switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, t) {
                    case 1:
                        this._setU8(128 | e);
                        break;
                    case 2:
                        this._setU8(64 | e >> 8);
                        break;
                    case 3:
                        this._setU8(32 | e >> 16);
                        break;
                    case 4:
                        this._setU8(16 | e >> 24);
                        break;
                    case 5:
                        this._setU8(8 | Math.floor(e / 4294967296));
                        break;
                    case 6:
                        this._setU8(4 | Math.floor(e / 1099511627776));
                        break;
                    case 7:
                        this._setU8(2 | Math.floor(e / a));
                        break;
                    case 8:
                        this._setU8(1)
                }
                switch (t) {
                    case 8:
                        this._setU8(Math.floor(e / a));
                    case 7:
                        this._setU8(Math.floor(e / 1099511627776));
                    case 6:
                        this._setU8(Math.floor(e / 4294967296));
                    case 5:
                        this._setU8(e >> 24);
                    case 4:
                        this._setU8(e >> 16);
                    case 3:
                        this._setU8(e >> 8);
                    case 2:
                        this._setU8(e)
                }
                this._cursor.offset += t
            } else this.size += t
        }, o.prototype._writeFloat = function (e, t) {
            if (4 !== t && 8 !== t) throw new RuntimeException("Bad float size", t);
            this._rawo ? (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, 4 === t ? this._setFloat32(e) : this._setFloat64(e), this._cursor.offset += t) : this.size += t
        }, o.prototype._writeUint = function (e, t) {
            if (void 0 === t && (t = this._measureUint(e)), this._rawo) {
                switch (this._viewOffset = this._cursor.offset - this._rawo.byteOffset, t) {
                    case 8:
                        this._setU8(e / 72057594037927940 >>> 0);
                    case 7:
                        this._setU8(e / a >>> 0);
                    case 6:
                        this._setU8(e / 1099511627776 >>> 0);
                    case 5:
                        this._setU8(e / 4294967296 >>> 0);
                    case 4:
                        this._setU8(e >> 24);
                    case 3:
                        this._setU8(e >> 16);
                    case 2:
                        this._setU8(e >> 8);
                    case 1:
                        this._setU8(e);
                        break;
                    default:
                        throw new RuntimeException("Bad UINT size", t)
                }
                this._cursor.offset += t
            } else this.size += t
        }, o.prototype._measureVarInt = function (e) {
            if (e < 127) return 1;
            if (e < 16383) return 2;
            if (e < 2097151) return 3;
            if (e < 268435455) return 4;
            if (e < 34359738367) return 5;
            if (e < 4398046511103) return 6;
            if (e < 562949953421311) return 7;
            if (e < 72057594037927940) return 8;
            throw new RuntimeException("EBML VINT size not supported", e)
        }, o.prototype._measureUint = function (e) {
            return e < 256 ? 1 : e < 65536 ? 2 : e < 16777216 ? 3 : e < 4294967296 ? 4 : e < 1099511627776 ? 5 : e < a ? 6 : e < 72057594037927940 ? 7 : 8
        }, o.prototype._writeField = function (e, t, i) {
            switch (e) {
                case"float":
                    this._writeFloat(t, i);
                    break;
                case"uint":
                    this._writeUint(t, i);
                    break;
                case"vint":
                    this._writeVarInt(t, i);
                    break;
                case"string":
                    this._writeString(t, i);
                    break;
                case"data":
                    this._writeData(t)
            }
        }, o.prototype._processData = function (e) {
            "number" == typeof e ? this._writeField("uint", e) : "string" == typeof e ? this._writeField("string", e) : this._writeField("data", e)
        }, o.prototype._elemProcessors[s.SimpleBlock] = function () {
            this._writeField("vint", this.trackNumber), this._writeField("uint", this.timecode, 2);
            var e = this.sap ? 128 : 0;
            this._writeField("uint", e, 1), this._writeField("data", this.frame)
        }, o.prototype._elemProcessors[s.SamplingFrequency] = function () {
            this._writeField("float", this.frequency, 4)
        };
        var u = o;
        t.default = u
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(39), i(16), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(133);
        var n, r = (n = i(134)) && n.__esModule ? n : {default: n}, a = function () {
            this._cursor = new r.default, this.elements = []
        };
        a.prototype.write = function () {
            var e = 0, t = 0;
            for (t = 0; t < this.elements.length; t++) e += this.elements[t].getLength();
            var i = new Uint8Array(e);
            for (this._rawo = new DataView(i.buffer), this.bytes = i, this._cursor.offset = 0, t = 0; t < this.elements.length; t++) this.elements[t].write();
            return i.buffer
        };
        var s = a;
        t.default = s
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(78), i(79), i(80), i(153), i(154), i(155), i(156), i(104), i(105), i(157), i(158), i(33), i(106), i(159), i(160), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(16), i(118), i(31), i(32), i(39), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(21), i(0);
        var r = s(i(110)), a = s(i(8));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o() {
            o = function () {
                return e
            };
            var e = {}, t = Object.prototype, i = t.hasOwnProperty, r = Object.defineProperty || function (e, t, i) {
                    e[t] = i.value
                }, a = "function" == typeof Symbol ? Symbol : {}, s = a.iterator || "@@iterator",
                u = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";

            function l(e, t, i) {
                return Object.defineProperty(e, t, {value: i, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                l({}, "")
            } catch (e) {
                l = function (e, t, i) {
                    return e[t] = i
                }
            }

            function h(e, t, i, n) {
                var a = t && t.prototype instanceof p ? t : p, s = Object.create(a.prototype), o = new T(n || []);
                return r(s, "_invoke", {
                    value: function (e, t, i) {
                        var n = "suspendedStart";
                        return function (r, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw a;
                                return {value: void 0, done: !0}
                            }
                            for (i.method = r, i.arg = a; ;) {
                                var s = i.delegate;
                                if (s) {
                                    var o = S(s, i);
                                    if (o) {
                                        if (o === d) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                    if ("suspendedStart" === n) throw n = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                n = "executing";
                                var u = f(e, t, i);
                                if ("normal" === u.type) {
                                    if (n = i.done ? "completed" : "suspendedYield", u.arg === d) continue;
                                    return {value: u.arg, done: i.done}
                                }
                                "throw" === u.type && (n = "completed", i.method = "throw", i.arg = u.arg)
                            }
                        }
                    }(e, i, o)
                }), s
            }

            function f(e, t, i) {
                try {
                    return {type: "normal", arg: e.call(t, i)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            e.wrap = h;
            var d = {};

            function p() {
            }

            function v() {
            }

            function m() {
            }

            var g = {};
            l(g, s, (function () {
                return this
            }));
            var y = Object.getPrototypeOf, _ = y && y(y(x([])));
            _ && _ !== t && i.call(_, s) && (g = _);
            var b = m.prototype = p.prototype = Object.create(g);

            function A(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    l(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function w(e, t) {
                var a;
                r(this, "_invoke", {
                    value: function (r, s) {
                        function o() {
                            return new t((function (a, o) {
                                !function r(a, s, o, u) {
                                    var c = f(e[a], e, s);
                                    if ("throw" !== c.type) {
                                        var l = c.arg, h = l.value;
                                        return h && "object" == n(h) && i.call(h, "__await") ? t.resolve(h.__await).then((function (e) {
                                            r("next", e, o, u)
                                        }), (function (e) {
                                            r("throw", e, o, u)
                                        })) : t.resolve(h).then((function (e) {
                                            l.value = e, o(l)
                                        }), (function (e) {
                                            return r("throw", e, o, u)
                                        }))
                                    }
                                    u(c.arg)
                                }(r, s, a, o)
                            }))
                        }

                        return a = a ? a.then(o, o) : o()
                    }
                })
            }

            function S(e, t) {
                var i = e.iterator[t.method];
                if (void 0 === i) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return d;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var n = f(i, e.iterator, t.arg);
                if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, d;
                var r = n.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
            }

            function k(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function C(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function T(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(k, this), this.reset(!0)
            }

            function x(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, r = function t() {
                            for (; ++n < e.length;) if (i.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return r.next = r
                    }
                }
                return {next: P}
            }

            function P() {
                return {value: void 0, done: !0}
            }

            return v.prototype = m, r(b, "constructor", {value: m, configurable: !0}), r(m, "constructor", {
                value: v,
                configurable: !0
            }), v.displayName = l(m, c, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, A(w.prototype), l(w.prototype, u, (function () {
                return this
            })), e.AsyncIterator = w, e.async = function (t, i, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new w(h(t, i, n, r), a);
                return e.isGeneratorFunction(i) ? s : s.next().then((function (e) {
                    return e.done ? e.value : s.next()
                }))
            }, A(b), l(b, c, "Generator"), l(b, s, (function () {
                return this
            })), l(b, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), i = [];
                for (var n in t) i.push(n);
                return i.reverse(), function e() {
                    for (; i.length;) {
                        var n = i.pop();
                        if (n in t) return e.value = n, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = x, T.prototype = {
                constructor: T, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e) for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(i, n) {
                        return s.type = "throw", s.arg = e, t.next = i, n && (t.method = "next", t.arg = void 0), !!n
                    }

                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r], s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var o = i.call(a, "catchLoc"), u = i.call(a, "finallyLoc");
                            if (o && u) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (o) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(s)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), C(i), d
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.tryLoc === e) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                C(i)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, i) {
                    return this.delegate = {
                        iterator: x(e),
                        resultName: t,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, e
        }

        function u(e, t, i, n, r, a, s) {
            try {
                var o = e[a](s), u = o.value
            } catch (e) {
                return void i(e)
            }
            o.done ? t(u) : Promise.resolve(u).then(n, r)
        }

        function c(e) {
            return function () {
                var t = this, i = arguments;
                return new Promise((function (n, r) {
                    var a = e.apply(t, i);

                    function s(e) {
                        u(a, n, r, s, o, "next", e)
                    }

                    function o(e) {
                        u(a, n, r, s, o, "throw", e)
                    }

                    s(void 0)
                }))
            }
        }

        function l(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function h(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        t.default = function (e) {
            var t = new a.default.create(e, "OpusPcmComposer"), n = function () {
                function e(n) {
                    var a, s = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h(this, "_onModuleAdded", (a = c(o().mark((function e(i) {
                        var n;
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.OpusDecoderWebWorker, t.debug("Opus decoder module is loaded"), s._decoder = new n, e.next = 5, s._decoder.ready;
                                case 5:
                                    s._ready = !0;
                                case 6:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function (e) {
                        return a.apply(this, arguments)
                    })), h(this, "_onModuleNotFound", (function (e) {
                        t.debug("Opus decoder module is not found", e.request), s._modUrl = e.request;
                        var n = s;
                        s._spProvider.runWebpackImportUnderScriptPath((function () {
                            i.e(1).then(i.bind(null, 240)).then(n._onModuleAdded).catch(n._onModuleError)
                        }))
                    })), h(this, "_onModuleError", (function (e) {
                        t.error(s._spProvider.notAvailableError("Opus decoder", s._modUrl))
                    })), this._ready = !1, this.reset(), this._spProvider = r.default.getInstance(n), i.e(1).then(i.bind(null, 240)).then(this._onModuleAdded).catch(this._onModuleNotFound)
                }

                var n, a, s;
                return n = e, (a = [{
                    key: "reset", value: function () {
                        this._tracks = [], this._nextTrackID = 1
                    }
                }, {
                    key: "free", value: function () {
                        this._ready && (this._decoder.free(), this._ready = !1)
                    }
                }, {
                    key: "postInit", value: (s = c(o().mark((function e() {
                        return o().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this._ready || !this._run) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this._decoder.reset();
                                case 3:
                                    this._run = !0;
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "isReady", value: function () {
                        return this._ready
                    }
                }, {
                    key: "addTrack", value: function (e, t) {
                        var i = {
                            id: this._nextTrackID,
                            curSeqNumber: 0,
                            lastSampleDuration: 0,
                            lastSilenceSampleTs: 0,
                            sampleCountFromTs: function (e) {
                                return Math.floor(this.samplingRate / this.timescale * e + .5)
                            },
                            millisecondsFromTs: function (e) {
                                return Math.floor(1e3 * e / this.timescale + .5)
                            }
                        };
                        return t && (i.timescale = t.timescale, i.codec = t.codec.toUpperCase(), i.samplingRate = 48e3, i.channels = 2, i.silence = new Uint8Array([252, 255, 254])), this._tracks.push(i), this._nextTrackID++, i
                    }
                }, {
                    key: "setTrackParams", value: function (e, i) {
                        var n = this._findTrackById(e);
                        return n && ("codec" in i && (i.codec = i.codec.toUpperCase()), "timescale" in i && (n.timescale = i.timescale), "sequenceNumber" in i && (n.curSeqNumber = i.sequenceNumber), "alignBase" in i && (n.alignBase = i.alignBase), "syncBase" in i && (n.syncBase = i.syncBase), t.debug("setTrackParams: ", e, i)), n
                    }
                }, {
                    key: "getTrackSampleDuration", value: function (e, t) {
                        var i = this._findTrackById(e);
                        if (i) return i.tsPerFrame
                    }
                }, {
                    key: "getTrackAudioInfo", value: function (e) {
                        var t = this._findTrackById(e);
                        if (t) return {samplingRate: t.samplingRate, channels: t.channels}
                    }
                }, {
                    key: "isTrackSilent", value: function (e) {
                        var t = this._findTrackById(e);
                        if (t) return t.lastSilenceSampleTs > 0
                    }
                }, {
                    key: "setBaseSample", value: function (e, i, n) {
                        var r = this._findTrackById(e);
                        if (r) {
                            var a = n;
                            if (r.syncBase) {
                                if (r.syncSample) {
                                    var s = n - r.syncSample.rawts;
                                    this._tsDiscontinuity(s) && (t.debug("setBaseSample discontinuity: " + s, n, r.syncSample.ts, r.syncSample.rawts, r.lastSampleDuration), s = r.lastSampleDuration), n = r.syncSample.ts + s, r.syncSample = void 0
                                }
                                r.syncBase = void 0
                            }
                            var o = i;
                            r.lastSilenceSampleTs = 0, null === o && (o = r.silence, r.lastSilenceSampleTs = n), r.lastSample = {
                                data: o,
                                sap: !0,
                                ts: n,
                                rawts: a,
                                samplCntTs: r.sampleCountFromTs(n),
                                msTs: r.millisecondsFromTs(n)
                            }, t.debug("setBaseSample: ", r.type, n)
                        } else t.error("setBaseSample: track " + e + " not found!!!")
                    }
                }, {
                    key: "getRealTs", value: function (e, i) {
                        var n = i, r = this._findTrackById(e);
                        if (r) {
                            if (r.lastSample) {
                                var a = r.lastSample.ts - r.lastSample.rawts;
                                0 !== a && (a > 0 && i < r.lastSample.ts || i >= r.lastSample.rawts) && (n = i + a)
                            }
                        } else t.error("getRealTs: track ".concat(e, " not found"));
                        return n
                    }
                }, {
                    key: "initSegment", value: function () {
                        return null
                    }
                }, {
                    key: "mediaSegment", value: function (e, i, n) {
                        var r, a = this._findTrackById(e), s = [], o = [];
                        if (a) {
                            for (var u = [], c = 0; c < i.length; c++) if (a.lastSample) for (var l = this._processSample(a, i[c].sap, i[c].data, i[c].ts), h = 0; h < l.length; h++) u.push(l[h].data), s.push(l[h].ts), o.push(l[h].sap); else t.error("mediaSegment is executed while no base sample is set. Compelled setting of base sample: ", i[c].sap, i[c].ts), i[c].sap && this.setBaseSample(e, i[c].data, i[c].ts);
                            n && void 0 !== a.lastSample && (a.lastSample.duration = a.lastSampleDuration, t.debug("Push last sample, ts = ".concat(a.lastSample.ts, ", duration = ").concat(a.lastSample.duration)), u.push(a.lastSample.data), s.push(a.lastSample.ts), o.push(a.lastSample.sap), a.alignBase && (a.prevSample = {
                                ts: a.lastSample.ts,
                                samplCntTs: a.lastSample.samplCntTs
                            }), a.syncBase && (a.syncSample = {
                                ts: a.lastSample.ts,
                                rawts: a.lastSample.rawts
                            }), a.lastSample = void 0), u.length > 0 && (a.curSeqNumber++, r = {
                                ts: s,
                                sap: o,
                                sn: a ? a.curSeqNumber - 1 : void 0,
                                data: this._decoder.decodeFrames(u)
                            })
                        }
                        return r
                    }
                }, {
                    key: "_setAudioSampleParamsFor", value: function (e, t) {
                        t > 0 && (e.tsPerFrame = t, e.msPerFrame = 1e3 * t / e.timescale, e.samplesPerFrame = e.samplingRate * t / e.timescale)
                    }
                }, {
                    key: "_recoverAudioGapIfExists", value: function (e, i, n) {
                        var r = n.prevSamplCntTs + i.samplesPerFrame, a = n.nextSamplCntTs - r;
                        if (a >= i.samplesPerFrame && a <= 10 * i.samplingRate) {
                            t.debug("recover audio gap effShift = ".concat(a, ", prevTs = ").concat(n.prevTs, ", prevSamplCntTs = ").concat(n.prevSamplCntTs, ", nextSamplCntTs = ").concat(n.nextSamplCntTs));
                            for (var s = Math.floor(a / i.samplesPerFrame), o = n.prevTs, u = 0; u < s; u++) {
                                o += i.tsPerFrame;
                                var c = {
                                    data: n.data,
                                    sap: !0,
                                    ts: o,
                                    msTs: i.millisecondsFromTs(o),
                                    msDuration: i.msPerFrame,
                                    samplCntTs: r,
                                    samplCntDur: i.samplesPerFrame
                                };
                                e.push(c), r += i.samplesPerFrame
                            }
                            t.warn("adding dummy frames", e.length - 1, r, n.nextSamplCntTs)
                        }
                        return r
                    }
                }, {
                    key: "_tsDiscontinuity", value: function (e, t) {
                        return t < 0 || t > 10 * e.timescale
                    }
                }, {
                    key: "_checkIgnoreRealSamples", value: function (e, i, n) {
                        var r = !1;
                        if (e.lastSilenceSampleTs > 0 && null !== n) {
                            var a = e.lastSilenceSampleTs - i;
                            a >= 0 ? a < 5 * e.timescale && (t.debug("Ignore real frames after mute", i, e.lastSilenceSampleTs), r = !0) : e.lastSilenceSampleTs = 0
                        }
                        return r
                    }
                }, {
                    key: "_processSample", value: function (e, i, n, r) {
                        if (this._checkIgnoreRealSamples(e, r, n)) return [];
                        var a = [], s = e.lastSample, o = r - s.rawts;
                        this._tsDiscontinuity(e, o) && (t.debug("Incorrect DTS difference (".concat(o, ") between previous (ts: ").concat(s.rawts, ", sap: ").concat(s.sap, ") and current frame (ts: ").concat(r, ", sap: ").concat(i, ")")), o = e.lastSampleDuration);
                        var u = r;
                        if (r = s.ts + o, o > 0 && (e.lastSampleDuration = o), s.duration = o, s.msDuration = e.millisecondsFromTs(o), this._checkIgnoreRealSamples(e, r, n)) return [];
                        void 0 === e.samplesPerFrame && this._setAudioSampleParamsFor(e, o), e.alignBase && (e.prevSample && (this._recoverAudioGapIfExists(a, e, {
                            prevTs: e.prevSample.ts,
                            prevSamplCntTs: e.prevSample.samplCntTs,
                            nextSamplCntTs: s.samplCntTs,
                            data: e.silence ? e.silence : s.data
                        }), e.prevSample = void 0), e.alignBase = void 0), a.push(s);
                        var c = this._recoverAudioGapIfExists(a, e, {
                            prevTs: s.ts,
                            prevSamplCntTs: s.samplCntTs,
                            nextSamplCntTs: e.sampleCountFromTs(r),
                            data: e.silence ? e.silence : s.data
                        });
                        s.samplCntDur = e.samplesPerFrame;
                        var l = n;
                        return null === l && (l = e.silence, e.lastSilenceSampleTs = r), e.lastSample = {
                            data: l,
                            sap: i,
                            ts: r,
                            rawts: u,
                            samplCntTs: c,
                            msTs: e.millisecondsFromTs(r)
                        }, a
                    }
                }, {
                    key: "_findTrackById", value: function (e) {
                        for (var i, n = 0; n < this._tracks.length; n++) if (this._tracks[n].id == e) {
                            i = this._tracks[n];
                            break
                        }
                        return void 0 === i && t.error("track ID ".concat(e, " is not found")), i
                    }
                }]) && l(n.prototype, a), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function () {
                    return new n
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(15), i(16), i(118), i(31), i(32), i(220), i(0);
        var n = i(23), r = s(i(110)), a = (s(i(108)), s(i(8)));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function u(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        var c = function () {
            function e(t) {
                var n = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), u(this, "_onModuleAdded", (function (e) {
                    var t = e.default;
                    n._logger.debug("CEA608 module is loaded"), n._handlers.push(new t(n._instId, n._captionPresenter))
                })), u(this, "_onModuleNotFound", (function (e) {
                    n._logger.debug("CEA608 module not found", e.request), n._modUrl = e.request;
                    var t = n;
                    n._spProvider.runWebpackImportUnderScriptPath((function () {
                        i.e(0).then(i.t.bind(null, 239, 7)).then(t._onModuleAdded).catch(t._onModuleError)
                    }))
                })), u(this, "_onModuleError", (function (e) {
                    n._logger.error(n._spProvider.notAvailableError("CEA608 captions decoder", n._modUrl))
                })), this._instId = t, this._handlers = [], this._spProvider = r.default.getInstance(t), this._logger = a.default.create(t, "SEI Processor"), this._ordered = [], this._mGopEndTime = 0
            }

            var t, n;
            return t = e, (n = [{
                key: "addCea608CaptionsHandler", value: function (e) {
                    this._captionPresenter = e, i.e(0).then(i.t.bind(null, 239, 7)).then(this._onModuleAdded).catch(this._onModuleNotFound)
                }
            }, {
                key: "handleFrame", value: function (e, t) {
                    if (0 !== this._handlers.length) {
                        if (e > this._mGopEndTime) {
                            this._ordered.sort((function (e, t) {
                                return e.pTime - t.pTime
                            }));
                            for (var i = 0; i < this._ordered.length; i++) this._process(this._ordered[i].pTime, this._ordered[i].frame);
                            this._ordered = [], this._mGopEndTime = e
                        }
                        this._ordered.push({pTime: e, frame: t})
                    }
                }
            }, {
                key: "_process", value: function (e, t) {
                    for (var i = 0; i < t.byteLength - 4;) {
                        var n = t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3];
                        if (6 == (31 & t[i += 4])) for (var r = i + 1; r < i + n - 1;) {
                            for (var a = 0, s = 255; 255 === s;) a += s = t[r], r++;
                            var o = 0;
                            for (s = 255; 255 === s;) o += s = t[r], r++;
                            for (var u = 0; u < this._handlers.length; u++) if (this._handlers[u].isMatching(a, o, t, r)) {
                                this._handlers[u].handleUnit(e, t, [r, o]);
                                break
                            }
                            r += o
                        }
                        i += n
                    }
                }
            }, {
                key: "reset", value: function () {
                    for (var e = 0; e < this._handlers.length; e++) this._handlers[e].reset();
                    this._ordered = [], this._mGopEndTime = 0
                }
            }]) && o(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), l = (0, n.multiInstanceHolder)(c);
        t.default = l
    }, function (e, t, i) {
        var n = i(86).PROPER, r = i(3), a = i(130);
        e.exports = function (e) {
            return r((function () {
                return !!a[e]() || "вЂ‹В…б Ћ" !== "вЂ‹В…б Ћ"[e]() || n && a[e].name !== e
            }))
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(69), r = i(9), a = i(1), s = i(222), o = i(3), u = i(13), c = i(6), l = i(81), h = i(27), f = i(36),
            d = i(17), p = i(66), v = i(223), m = i(93), g = i(323), y = i(224), _ = i(5)("replace"), b = Math.max,
            A = Math.min, w = a([].concat), S = a([].push), k = a("".indexOf), C = a("".slice),
            T = "$0" === "a".replace(/./, "$0"), x = !!/./[_] && "" === /./[_]("a", "$0");
        s("replace", (function (e, t, i) {
            var a = x ? "$" : "$0";
            return [function (e, i) {
                var n = p(this), a = l(e) ? void 0 : m(e, _);
                return a ? r(a, e, n, i) : r(t, d(n), e, i)
            }, function (e, r) {
                var s = u(this), o = d(e);
                if ("string" == typeof r && -1 === k(r, a) && -1 === k(r, "$<")) {
                    var l = i(t, s, o, r);
                    if (l.done) return l.value
                }
                var p = c(r);
                p || (r = d(r));
                var m = s.global;
                if (m) {
                    var _ = s.unicode;
                    s.lastIndex = 0
                }
                for (var T = []; ;) {
                    var x = y(s, o);
                    if (null === x) break;
                    if (S(T, x), !m) break;
                    "" === d(x[0]) && (s.lastIndex = v(o, f(s.lastIndex), _))
                }
                for (var P, E = "", B = 0, M = 0; M < T.length; M++) {
                    for (var R = d((x = T[M])[0]), I = b(A(h(x.index), o.length), 0), F = [], L = 1; L < x.length; L++) S(F, void 0 === (P = x[L]) ? P : String(P));
                    var O = x.groups;
                    if (p) {
                        var D = w([R], F, I, o);
                        void 0 !== O && S(D, O);
                        var j = d(n(r, void 0, D))
                    } else j = g(R, o, I, F, O, r);
                    I >= B && (E += C(o, B, I) + j, B = I + R.length)
                }
                return E + C(o, B)
            }]
        }), !!o((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {a: "7"}, e
            }, "7" !== "".replace(e, "$<a>")
        })) || !T || x)
    }, function (e, t, i) {
        var n = i(1), r = i(18), a = Math.floor, s = n("".charAt), o = n("".replace), u = n("".slice),
            c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, l = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, i, n, h, f) {
            var d = i + e.length, p = n.length, v = l;
            return void 0 !== h && (h = r(h), v = c), o(f, v, (function (r, o) {
                var c;
                switch (s(o, 0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return u(t, 0, i);
                    case"'":
                        return u(t, d);
                    case"<":
                        c = h[u(o, 1, -1)];
                        break;
                    default:
                        var l = +o;
                        if (0 === l) return r;
                        if (l > p) {
                            var f = a(l / 10);
                            return 0 === f ? r : f <= p ? void 0 === n[f - 1] ? s(o, 1) : n[f - 1] + s(o, 1) : r
                        }
                        c = n[l - 1]
                }
                return void 0 === c ? "" : c
            }))
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(325), i(39), i(16), i(15), i(40), i(41), i(42), i(43), i(44), i(45), i(46), i(47), i(48), i(49), i(50), i(51), i(52), i(53), i(54), i(55), i(56), i(57), i(58), i(59), i(60), i(61), i(62), i(63), i(21), i(72), i(0);
        var n = a(i(233)), r = a(i(8));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        t.default = function (e) {
            var t = r.default.create(e, "WS"), i = new n.default(e).create(), a = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.metricsManager = t, this.stop_audio = !1, this.curSocketId = 0, this.isLogging = !1, this.useSteady = !1, this.dtsEqPts = !1, this.loggerData = {
                        video: {
                            frames: [],
                            prevTime: 0,
                            sumTimes: 0,
                            times: [],
                            thresh: 60,
                            avg: void 0
                        }, audio: {frames: [], prevTime: 0, sumTimes: 0, times: [], thresh: 60, avg: void 0}
                    }
                }

                var n, r;
                return n = e, (r = [{
                    key: "open", value: function (e) {
                        try {
                            var n = e.substring(0, 5);
                            if ("ws://" != n && "wss:/" != n && (e = "ws://" + e), void 0 !== this.socket) throw t.error("attempt to open socket when socket exists!", this.socket, e), "Socket open error";
                            this.socket = new WebSocket(e, ["sldp.softvelum.com"])
                        } catch (e) {
                            return t.error("" + e.message), !1
                        }

                        function r(e, t) {
                            e.isLogging && void 0 === e.loggerData[t] && (e.loggerData[t] = {
                                frames: [],
                                prevTime: 0,
                                sumTimes: 0,
                                times: [],
                                thresh: 60,
                                avg: void 0
                            })
                        }

                        return this.socket.binaryType = "arraybuffer", this.socket.sampleCounter = 0, this.socket.transport = this, this.socket.socketId = ++this.curSocketId, this.socket.streamURL = e, this.socket.onopen = function () {
                            t.debug("Connection established.")
                        }, this.socket.onclose = function (e) {
                            e.wasClean ? t.debug("Connection closed clean") : (t.debug("Connection dropped", this), this.socketId == this.transport.curSocketId && (3 == this.readyState && (this.transport.socket = void 0), this.transport.onConnectionClosedCallback && this.transport.onConnectionClosedCallback()));
                            var n = i.closeCodes[e.code] || "";
                            t.debug("Close code " + e.code + "(" + n + ") reason: " + e.reason)
                        }, this.socket.onmessage = function (e) {
                            if (e.data instanceof ArrayBuffer) {
                                var n, a = new Uint8Array(e.data), s = a[0], o = a[1], u = 0, c = 10, l = a.byteLength;
                                switch (o) {
                                    case i.liveFrameTypes.WEB_AAC_SEQUENCE_HEADER:
                                    case i.liveFrameTypes.WEB_AVC_SEQUENCE_HEADER:
                                    case i.liveFrameTypes.WEB_HEVC_SEQUENCE_HEADER:
                                        if (t.debug("".concat(0 === o ? "audio" : "video", " init segment, trackId: ").concat(s)), this.transport.onInitSegmentReceivedCallback) {
                                            var h = a.subarray(2, l);
                                            this.transport.onInitSegmentReceivedCallback(s, h), this.transport.metricsManager.run(s), r(this.transport, s)
                                        }
                                        break;
                                    case i.liveFrameTypes.WEB_MP3:
                                        if (this.transport.metricsManager.isReadyToStart(s)) {
                                            var f = a.subarray(10, 14);
                                            this.transport.onInitSegmentReceivedCallback(s, f), this.transport.metricsManager.run(s), r(this.transport, s)
                                        }
                                    case i.liveFrameTypes.WEB_AAC_FRAME:
                                        if (this.transport.onDataReceivedCallback && 0 == this.transport.stop_audio) {
                                            n = i.readValue(a, 2, 8), this.transport.useSteady && (u = i.readValue(a, c, 8), c += 8);
                                            var d = a.subarray(c, l);
                                            this.transport.onDataReceivedCallback(s, !0, d, n, 0, u)
                                        }
                                        break;
                                    case i.liveFrameTypes.WEB_AVC_KEY_FRAME:
                                    case i.liveFrameTypes.WEB_AVC_FRAME:
                                    case i.liveFrameTypes.WEB_HEVC_KEY_FRAME:
                                    case i.liveFrameTypes.WEB_HEVC_FRAME:
                                        if (this.transport.onDataReceivedCallback) {
                                            n = i.readValue(a, 2, 8), this.transport.useSteady && (u = i.readValue(a, c, 8), c += 8);
                                            var p = i.readValue(a, c, 4);
                                            this.transport.dtsEqPts && (n += p, p = 0);
                                            var v = a.subarray(c + 4, l),
                                                m = i.liveFrameTypes.WEB_AVC_KEY_FRAME == o || i.liveFrameTypes.WEB_HEVC_KEY_FRAME == o;
                                            this.transport.onDataReceivedCallback(s, m, v, n, p, u), n += p
                                        }
                                        break;
                                    case i.liveFrameTypes.WEB_VP8_KEY_FRAME:
                                    case i.liveFrameTypes.WEB_VP9_KEY_FRAME:
                                    case i.liveFrameTypes.WEB_OPUS_FRAME:
                                        this.transport.metricsManager.isReadyToStart(s) && (this.transport.onInitSegmentReceivedCallback(s, null), this.transport.metricsManager.run(s), r(this.transport, s));
                                    case i.liveFrameTypes.WEB_VP8_FRAME:
                                    case i.liveFrameTypes.WEB_VP9_FRAME:
                                        if (this.transport.onDataReceivedCallback) {
                                            n = i.readValue(a, 2, 8), this.transport.useSteady && (u = i.readValue(a, c, 8), c += 8);
                                            var g = a.subarray(c, l),
                                                y = i.liveFrameTypes.WEB_VP8_KEY_FRAME == o || i.liveFrameTypes.WEB_VP9_KEY_FRAME == o || i.liveFrameTypes.WEB_OPUS_FRAME == o;
                                            this.transport.onDataReceivedCallback(s, y, g, n, 0, u)
                                        }
                                        break;
                                    default:
                                        t.error("Unknown type of frame received ", o)
                                }
                                this.transport.metricsManager.reportBandwidth(s, l, n), 0 == this.sampleCounter & 1023 && t.debug("sampleCounter", this.sampleCounter), this.sampleCounter += 1
                            } else {
                                t.debug("Command received", e.data);
                                var _ = JSON.parse(e.data);
                                "status" == _.command && this.transport.onStatusReceivedCallback && this.transport.onStatusReceivedCallback(_.info, _.steady, _.system)
                            }
                        }, this.socket.onerror = function (e) {
                            t.error("Error happened:", e)
                        }, this.socket
                    }
                }, {
                    key: "send", value: function (e) {
                        this.socket && this.socket.send(JSON.stringify(e))
                    }
                }, {
                    key: "close", value: function () {
                        t.debug("socket close ", this.socket), this.socket && (this.socket.close(1e3), this.socket = void 0), this.onStatusReceivedCallback = void 0, this.onInitSegmentReceivedCallback = void 0, this.onDataReceivedCallback = void 0, this.onConnectionClosedCallback = void 0
                    }
                }, {
                    key: "acceptSteadyTimestamps", value: function (e) {
                        this.useSteady = e
                    }
                }, {
                    key: "setDtsEqPtsMode", value: function (e) {
                        this.dtsEqPts = e
                    }
                }, {
                    key: "callbacks", set: function (e) {
                        this.onStatusReceivedCallback = e.onStatusReceived, this.onInitSegmentReceivedCallback = e.onInitSegmentReceived, this.onDataReceivedCallback = e.onDataReceived, this.onConnectionClosedCallback = e.onConnectionClosed
                    }
                }]) && s(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e) {
                    return new a(e)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        var n = i(2), r = i(4), a = i(126), s = i(144), o = a.ArrayBuffer;
        n({global: !0, constructor: !0, forced: r.ArrayBuffer !== o}, {ArrayBuffer: o}), s("ArrayBuffer")
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(64), i(107), i(128), i(33), i(131), i(0);
        var n = o(i(327)), r = o(i(329)), a = o(i(108)), s = o(i(8));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        o(i(330)), o(i(234));
        var l = function () {
            function e(t, i) {
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), c(this, "_handleClicks", function (e) {
                    if (this.doubleClickHandler) {
                        this.clicks++;
                        var t = this;
                        1 == this.clicks && setTimeout((function () {
                            1 == t.clicks ? t.singleClickHandler && t.singleClickHandler(e) : t.doubleClickHandler && t.doubleClickHandler(e), t.clicks = 0
                        }), 300)
                    } else this.singleClickHandler && this.singleClickHandler(e)
                }.bind(this)), c(this, "_handleEnterPip", function (e) {
                    e.pictureInPictureWindow, this.pipMode = !0, this._onEnterPip && this._onEnterPip()
                }.bind(this)), c(this, "_handleLeavePip", function (e) {
                    this.pipMode = !1, this._onLeavePip && this._onLeavePip()
                }.bind(this)), c(this, "_mediaElementClick", function (e) {
                    var t = !1;
                    this.mobileCtrl ? e.target != this.mobileCtrl && e.target != this.mobileCtrlBtn || (this.mobileCtrlVisible ? t = !0 : this.showControlsForPeriod(4)) : e.target == this.mediaElement && (t = !0), t && this._playPauseBtnClick(e)
                }.bind(this)), c(this, "_playPauseBtnClick", function (e) {
                    this._isUserActionAcceptable() && (this.playPauseButton.classList.contains("sldp-icon-play") ? (this.mediaElement && this.hackPlayByPauseOnClick && (this.mediaElement.pause(), this.hackPlayByPauseOnClick = !1), this._handlePlay(!0)) : this._handlePause()), e.stopPropagation()
                }.bind(this)), c(this, "_handlePlayEvent", function (e) {
                    this.deactivated || (this.pipMode ? this._handlePlay() : this._onPlayEventCallback && this._onPlayEventCallback())
                }.bind(this)), c(this, "_handlePauseEvent", function (e) {
                    this.deactivated || (this.pipMode ? this._handlePause() : this._onPauseEventCallback && this._onPauseEventCallback())
                }.bind(this)), c(this, "_configBtnClick", function (e) {
                    this.cfgDialog ? (this.cfgDialog.remove(), delete this.cfgDialog, this.showControlsForPeriod(2)) : (this.closeCtrlDialogs(), this.cfgDialog = document.createElement("ul"), this.cfgDialog.className = "sldp_cfg_dialog sldp_ctrl_dialog", this._updateCfgDialog(), this.playerWrapper.insertBefore(this.cfgDialog, this.controlBar), this.showControlsForPeriod("infinite")), e.stopPropagation()
                }.bind(this)), c(this, "_volumeBtnClick", function (e) {
                    var t = 0;
                    e.currentTarget.classList.contains("sldp-icon-volume-medium") ? this.mediaElement.prev_volume = this.volumeController.volume : (null == this.mediaElement.prev_volume && (0 != this.volumeController.volume ? this.mediaElement.prev_volume = this.volumeController.volume : this.mediaElement.prev_volume = 1), t = 100 * this.mediaElement.prev_volume), this._adjustVolume(t), this.showControlsForPeriod(2), e.stopPropagation()
                }.bind(this)), c(this, "_expandBtnClick", function (e) {
                    var t, i = this, n = this.playerWrapper;
                    if (this._isFullscreenMode()) document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(); else {
                        var r = !0;
                        n.requestFullscreen ? t = n.requestFullscreen() : n.mozRequestFullScreen ? t = n.mozRequestFullScreen() : n.webkitRequestFullscreen ? t = n.webkitRequestFullscreen() : n.msRequestFullscreen ? t = n.msRequestFullscreen() : this.mediaElement.webkitEnterFullScreen ? (r = !1, this.mediaElement.webkitEnterFullScreen()) : r = !1, r && (this.fullscreenReq = !0, t && t.catch((function () {
                            i.fullscreenReq = !1
                        })))
                    }
                    e && e.stopPropagation()
                }.bind(this)), c(this, "_orientationchangeHandler", function (e) {
                    this._isFullscreenMode() && this._updatePlayerFullscreen()
                }.bind(this)), c(this, "_fullscreenchangeHandler", function (e) {
                    this._isPlayerElement(e.target) && (this.fullscreenReq = !1, this._isFullscreenMode() ? (this._stashCurrentSize(), this._updatePlayerFullscreen()) : (this._applyCurrentSize(), this._resizeHandler()))
                }.bind(this)), c(this, "_fullscreenErrorHandler", function (e) {
                    this.fullscreenReq = !1
                }.bind(this)), c(this, "_webkitendfullscreenHandler", function (e) {
                    var t = this;
                    setTimeout((function () {
                        t.mediaElement.play(), t._handlePlay()
                    }), 500)
                }.bind(this)), c(this, "_resizeHandler", function (e) {
                    this._onResize && this._onResize(), this._updateLoadingIndicator()
                }.bind(this)), this.instId = i, this.settings = t, this.logger = s.default.create(i, "UI"), this.settings.video_element = void 0, this.settings.ar = void 0, this.pipMode = !1, this.orientMq = window.matchMedia("(orientation: portrait)"), this.fullscreenReq = !1, this.can_play = this.settings.autoplay, this.hackPlayByPauseOnClick = !this.settings.autoplay, this.settings.video_element) this.mediaElement = document.getElementById(this.settings.video_element), this.storageId = this.settings.video_element, this.quality_ar = [], this.settings.controls = !1, this.volumeController = new r.default(this.instId, this.settings.vu_meter), this.volumeController.muted = !!this.settings.muted, this._createResizeHandler(), this._createPipHandlers(), this._createPlayPauseHandlers(); else {
                    if (this.container = document.getElementById(this.settings.container), !this.container) return void this.logger.error("Container element is not found. Aborting UI setup.");
                    a.default.getElementCoordinates(this.container), this.storageId = this.settings.container, this.quality_ar = [], this.css = new n.default, this._createPlayerWrapper();
                    var o = this.settings.audio_only ? "audio" : "video";
                    this.mediaElement = document.createElement(o), this.volumeController = new r.default(this.instId, this.settings.vu_meter), this.volumeController.muted = !!this.settings.muted, this._setSplashScreen(), this.settings.audio_only || null != this.settings.height && (this.mediaElement.style.height = "100%", "number" == typeof this.settings.height ? this.playerWrapper.style.height = "".concat(t.height, "px") : this.playerWrapper.style.height = this.settings.height), void 0 !== this.settings.width && (this.mediaElement.style.width = "100%", "number" == typeof this.settings.width ? this.playerWrapper.style.width = "".concat(t.width, "px") : this.playerWrapper.style.width = this.settings.width), this.playerWrapper.appendChild(this.mediaElement), this._createHandlers(), this.settings.controls && (this._createControls(), this.settings.audio_only && this.settings.audio_title && this._addMessage(this.settings.audio_title), this._createLoadingIndicator()), this.settings.fullscreen && !this.settings.audio_only && this._expandBtnClick()
                }
                this._nullifyContainerLineHeight()
            }

            var t, i;
            return t = e, (i = [{
                key: "removePip", value: function (e) {
                    var t = this;
                    this.pipMode ? (this.deactivated = !0, document.exitPictureInPicture().then((function () {
                        t.pipMode = !1, e()
                    }))) : e()
                }
            }, {
                key: "destroy", value: function () {
                    if (this._revertContainerLineHeight(), this.container) {
                        for (this._removeHandlers(); this.container.firstChild;) this.container.removeChild(this.container.firstChild);
                        this.playPauseButton = void 0, this.playerWrapper = void 0, this.mobileCtrlBtn = void 0, this.mobileCtrl = void 0, this.css.destroy()
                    } else this._removeResizeHandler(), this._removePipHandlers(), this.mediaElement = void 0;
                    this.volumeController.destroy(), this.volumeController = void 0, this.quality_ar = [], this.stashed = !1
                }
            }, {
                key: "showNotSupported", value: function (e) {
                    if (this._removeSplashScreen(), this.container ? (this._removeHandlers(), this.settings.controls && (this._removePlayerControls(), this.mobileCtrl && (e ? this.mobileCtrl.style.display = "none" : (this.mobileCtrl.style.opacity = "0", this.mobileCtrlVisible = !1)))) : (this._removeResizeHandler(), this._removePipHandlers()), e) {
                        this.settings.video_element || (this.mediaElement.style.display = "none"), this._addMessage("In order to play this media you will need an application from App Store", '<a href="' + this.settings.ios_failback_app_url + '" style="vertical-align: middle;display:inline-block;overflow:hidden;background:url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg) no-repeat;width:202px;height:60px;background-size: 202px 60px;margin-right: 10px;"></a>');
                        var t = this.settings.stream_url;
                        if (t && t.length > 0) {
                            var i = t.substring(0, 5), n = t.indexOf("?") > 0;
                            "ws://" == i ? t = this.settings.ios_failback_scheme + "://" + t.substring(5) : "wss:/" == i && (t = this.settings.ios_failback_secure_scheme + "://" + t.substring(6)), this.settings.sync_buffer > 0 && (t += (n ? "&" : "?") + "steady=true&buffering=" + this.settings.sync_buffer), setTimeout((function () {
                                window.location = t
                            }), 100)
                        }
                    } else this._addMessage("MediaSource is not supported in current browser")
                }
            }, {
                key: "showNotPlaying", value: function () {
                    this._removeSplashScreen(), this.settings.controls && this._togglePlayButton(!0), this._addMessage("No playable sources found"), this.showControlsForPeriod("infinite")
                }
            }, {
                key: "clearMediaElement", value: function () {
                    this.settings.audio_only || (this._finishLoadingIndicator(), this._removeSplashScreen(), this._removeMessage())
                }
            }, {
                key: "onPlaybackStarted", value: function () {
                    this._removeSplashScreen()
                }
            }, {
                key: "onPlaybackFinished", value: function () {
                    this._setSplashScreen()
                }
            }, {
                key: "adjustHeight", value: function () {
                    this.mediaElement && this.playerWrapper && !this.fullscreenReq && this.container.offsetHeight > 0 && (this._isFullscreenMode() ? this._updateFullscreenWrapperSize() : "100%" === this.settings.height && (this.playerWrapper.style.height = "".concat(this.container.offsetHeight, "px")))
                }
            }, {
                key: "adjustX", value: function (e, t, i, n) {
                }
            }, {
                key: "adjustY", value: function (e, t, i) {
                }
            }, {
                key: "refresh", value: function () {
                    if (this.cfgDialog) {
                        for (; this.cfgDialog.firstChild;) this.cfgDialog.removeChild(this.cfgDialog.firstChild);
                        this._updateCfgDialog()
                    }
                }
            }, {
                key: "getSize", value: function () {
                    return a.default.getElementSize(this.mediaElement)
                }
            }, {
                key: "triggerPlay", value: function () {
                    return this._handlePlay()
                }
            }, {
                key: "triggerPause", value: function (e) {
                    this._handlePause(e)
                }
            }, {
                key: "triggerVolume", value: function (e) {
                    this.volumeController && (e > 100 ? e = 100 : e < 0 && (e = 0), this._adjustVolume(e))
                }
            }, {
                key: "getVolume", value: function () {
                    if (this.volumeController) return 100 * this.volumeController.volume
                }
            }, {
                key: "setMuted", value: function () {
                    this.volumeController && (this.volumeController.muted = !0, this._adjustVolume(100 * this.volumeController.volume, !0))
                }
            }, {
                key: "setVUMeterHandler", value: function (e) {
                    this.volumeController && this.volumeController.setVUMeter(e)
                }
            }, {
                key: "unmuteVUMeter", value: function () {
                    this.volumeController && this.volumeController.activateVUMeter()
                }
            }, {
                key: "getCaptionController", value: function () {
                    return this.captionController
                }
            }, {
                key: "_nullifyContainerLineHeight", value: function () {
                    if (!this.settings.audio_only) {
                        var e = this.settings.video_element ? this.mediaElement.parentElement : this.container;
                        e && (this.prevParentLineHeight = e.style.lineHeight, e.style.lineHeight = 0)
                    }
                }
            }, {
                key: "_revertContainerLineHeight", value: function () {
                    if (!this.settings.audio_only) {
                        var e = this.settings.video_element ? this.mediaElement.parentElement : this.container;
                        e && (e.style.lineHeight = this.prevParentLineHeight || "")
                    }
                }
            }, {
                key: "_getContainerWidth", value: function () {
                    return this.container ? this.container.offsetWidth : this.mediaElement.parentElement.offsetWidth
                }
            }, {
                key: "_getContainerHeight", value: function () {
                    return this.container ? this.container.offsetHeight : this.mediaElement.parentElement.offsetHeight
                }
            }, {
                key: "_stashCurrentSize", value: function () {
                    this.stashed || (this.mediaElement.pw_width_prev = this.playerWrapper.style.width, this.mediaElement.pw_height_prev = this.playerWrapper.style.height, this.mediaElement.v_width_prev = this.mediaElement.style.width, this.mediaElement.v_height_prev = this.mediaElement.style.height, this.settings.ar || (this.mediaElement.v_margin_prev = this.mediaElement.style.margin, this.mediaElement.style.margin = ""), this.stashed = !0)
                }
            }, {
                key: "_applyCurrentSize", value: function () {
                    this.stashed && (this.mediaElement.style.width = this.mediaElement.v_width_prev, this.mediaElement.style.height = this.mediaElement.v_height_prev, this.playerWrapper.style.width = this.mediaElement.pw_width_prev, this.playerWrapper.style.height = this.mediaElement.pw_height_prev, this.settings.ar || (this.mediaElement.style.margin = this.mediaElement.v_margin_prev), this.stashedContWidth = this.currentContWidth, this.stashedContHeight = this.currentContHeight, this.stashed = !1)
                }
            }, {
                key: "_getScreenSize", value: function () {
                    var e = this.orientMq.matches, t = [screen.width, screen.height];
                    return (e && screen.width > screen.height || !e && screen.width < screen.height) && (t[0] = screen.height, t[1] = screen.width), t
                }
            }, {
                key: "_processContainerSize", value: function () {
                    if (this.cW = this.settings.width, this.cH = this.settings.height, this._isFullscreenMode()) {
                        var e = this._getScreenSize();
                        this.cW = e[0], this.cH = e[1], this._stashCurrentSize()
                    } else {
                        if (this.stashed) return !1;
                        "100%" === this.settings.width && (this.stashedContWidth ? (this.cW = this.stashedContWidth, this.stashedContWidth = void 0) : (this.cW = this._getContainerWidth(), this.cW || (this.cW = this.playerWrapper ? this.playerWrapper.offsetWidth : this.mediaElement.offsetWidth), this.currentContWidth = this.cW)), "100%" === this.settings.height && (this.stashedContHeight ? (this.cH = this.stashedContHeight, this.stashedContHeight = void 0) : (this.cH = this._getContainerHeight(), this.cH || (this.cH = this.playerWrapper ? this.playerWrapper.offsetHeight : this.mediaElement.offsetHeight), this.currentContHeight = this.cH)), this.settings.width || this.settings.height || (this.cW = this.mediaElement.offsetWidth)
                    }
                    return !0
                }
            }, {
                key: "_createPlayerWrapper", value: function () {
                    var e = document.createElement("div");
                    if (e.className = this.settings.audio_only ? "sldp_player_wrp sldp_player_wrp_audio" : "sldp_player_wrp sldp_player_wrp_video", this.settings.controls && !this.settings.audio_only) {
                        if (this.settings.autoplay && this.hideControlsAfterPeriod(2), this.settings.mobile) {
                            this.mobileCtrl = document.createElement("div"), this.mobileCtrl.className = "sldp_mobile_ctrl", this.mobileCtrlBtn = document.createElement("div");
                            var t = this.settings.autoplay ? "sldp-icon-pause-o" : "sldp-icon-play-o";
                            this.mobileCtrlBtn.className = "sldp_mobile_ctrl_icon " + t, this.mobileCtrl.appendChild(this.mobileCtrlBtn), this.mobileCtrlVisible = !0, e.appendChild(this.mobileCtrl)
                        }
                        e.onmousemove = function (e) {
                            this.mobileCtrl || this.settings.audio_only || (this.mouseClientX = e.clientX, this.mouseClientY = e.clientY, this.showControlsForPeriod(2))
                        }.bind(this), e.onmouseout = function () {
                            this.mobileCtrl || this.settings.audio_only || (this.mouseClientX = this.mouseClientY = void 0, this._hideControls())
                        }.bind(this)
                    }
                    this.container.appendChild(e), this.playerWrapper = e
                }
            }, {
                key: "_hideControls", value: function () {
                    if (this.controlBar && !this.settings.audio_only && this.playPauseButton && this.playPauseButton.classList.contains("sldp-icon-pause")) {
                        var e = !1;
                        if (!this.mobileCtrl && void 0 !== this.mouseClientX && void 0 !== this.mouseClientY) {
                            var t = this.controlBar.getBoundingClientRect();
                            t.left < this.mouseClientX && this.mouseClientX < t.right && t.top < this.mouseClientY && this.mouseClientY < t.bottom && (e = !0)
                        }
                        e ? this.hideControlsAfterPeriod(4) : this.cfgDialog || this.captionList && this.captionList.isVisible() || (this.controlBar.style.opacity = "0", this.mobileCtrl && (this.mobileCtrl.style.opacity = "0", this.mobileCtrlVisible = !1))
                    }
                }
            }, {
                key: "closeCtrlDialogs", value: function () {
                    this.cfgDialog && (this.cfgDialog.remove(), delete this.cfgDialog), this.captionList && this.captionList.isVisible() && this.captionList.closeDialog()
                }
            }, {
                key: "hideControlsAfterPeriod", value: function (e) {
                    this.settings.controls && (this.control_hide_delay && (clearTimeout(this.control_hide_delay), this.control_hide_delay = void 0), this.settings.audio_only || (this.control_hide_delay = setTimeout(function () {
                        this._hideControls()
                    }.bind(this), 1e3 * e)))
                }
            }, {
                key: "_showControls", value: function () {
                    this.controlBar && (this.controlBar.style.opacity = "1", this.mobileCtrl && (this.mobileCtrl.style.opacity = "1", this.mobileCtrlVisible = !0))
                }
            }, {
                key: "showControlsForPeriod", value: function (e) {
                    this.settings.controls && (this._showControls(), this.control_hide_delay && (clearTimeout(this.control_hide_delay), this.control_hide_delay = void 0), "infinite" === e || this.settings.audio_only || (this.control_hide_delay = setTimeout(function () {
                        this._hideControls()
                    }.bind(this), 1e3 * e)))
                }
            }, {
                key: "_addMessage", value: function (e, t) {
                    if (this.container) {
                        this._removeMessage();
                        var i = document.createElement("div");
                        i.className = "sldp_message_wrp";
                        var n = document.createElement("div");
                        if (this.settings.audio_only ? (i.className = this.settings.controls ? "sldp_message_wrp" : "sldp_message_wrp sldp_message_wrp_audio_noctrl", n.className = "sldp_message") : (i.className = "sldp_message_wrp sldp_message_wrp_video", n.className = "sldp_message sldp_message_pad"), n.innerHTML = e, t) {
                            var r = document.createElement("div");
                            r.className = "ios_button", r.innerHTML = t, n.appendChild(r)
                        }
                        i.appendChild(n), this.playerWrapper.appendChild(i)
                    }
                }
            }, {
                key: "_removeMessage", value: function () {
                    if (this.container) {
                        var e = this.playerWrapper.getElementsByClassName("sldp_message_wrp")[0];
                        e && this.playerWrapper.removeChild(e)
                    }
                }
            }, {
                key: "_createControls", value: function () {
                    var e = document.createElement("div");
                    if (e.className = this.settings.audio_only ? "sldp_cbar sldp_cbar_audio" : "sldp_cbar sldp_cbar_video", !this.settings.audio_only) {
                        var t = document.createElement("div");
                        t.className = "sldp_expand_btn", t.classList.add("sldp_btn"), t.classList.add("sldp-icon-enlarge"), t.onclick = this._expandBtnClick, e.appendChild(t), this.expand_button = t;
                        var i = document.createElement("div");
                        i.className = "sldp_config_btn", i.classList.add("sldp_btn"), i.classList.add("sldp-icon-cog"), i.onclick = this._configBtnClick, e.appendChild(i), this.config_button = i
                    }
                    var n = document.createElement("div");
                    n.className = "sldp_play_pause_btn", n.classList.add("sldp_btn"), n.classList.add(this.settings.autoplay ? "sldp-icon-pause" : "sldp-icon-play"), n.onclick = this._playPauseBtnClick, e.appendChild(n);
                    var r = document.createElement("div");
                    r.className = "sldp_volume_wrp " + (this.settings.mobile ? "sldp_volume_mobile" : "sldp_volume_desktop"), this.settings.mobile || this.settings.audio_only || (r.onmouseover = function (e) {
                        this.volume_slider && (this.volume_slider.style.display = "block")
                    }.bind(this), r.onmouseout = function (e) {
                        this.volume_slider && (this.volume_slider.style.display = "none")
                    }.bind(this)), e.appendChild(r);
                    var a = document.createElement("div");
                    a.className = "sldp_volume_btn", a.classList.add("sldp_btn"), a.classList.add("sldp-icon-volume-medium"), a.onclick = this._volumeBtnClick, r.appendChild(a), this.playerWrapper.appendChild(e), this.volume_button = a, this.volume_wrapper = r, this.playPauseButton = n, this.controlBar = e, this.settings.mobile || this._create_volume_slider(), this._setStoredVolume()
                }
            }, {
                key: "_create_volume_slider", value: function () {
                    var e = document.createElement("div");
                    e.className = "sldp_volume_slider_wrp";
                    var t = document.createElement("div");
                    t.className = "sldp_volume_slider", this.thumb = document.createElement("div"), this.thumb.className = "sldp_volume_thumb", t.appendChild(this.thumb), e.appendChild(t), e.onmousedown = function (e) {
                        this.mediaElement.prev_volume = this.volumeController.volume;
                        var i = a.default.getElementCoordinates(t), n = a.default.getElementCoordinates(this.thumb),
                            r = e.pageX - (n.right - n.left) / 2 - i.left;
                        r < 0 ? r = 0 : r > 100 && (r = 100), this._adjustVolume(r), e.stopPropagation()
                    }.bind(this), this.thumb.onmousedown = function (e) {
                        this.mediaElement.prev_volume = this.volumeController.volume;
                        var i = a.default.getElementCoordinates(this.thumb), n = e.pageX - i.left,
                            r = a.default.getElementCoordinates(t);
                        return document.onmousemove = function (e) {
                            var i = e.pageX - n - r.left;
                            i < 0 ? i = 0 : i > 100 && (i = 100);
                            var a = t.offsetWidth - this.thumb.offsetWidth;
                            0 == a && (a = 100), i > a && (i = a), this._adjustVolume(i)
                        }.bind(this), document.onmouseup = function (e) {
                            document.onmousemove = document.onmouseup = null
                        }, e.stopPropagation(), !1
                    }.bind(this), this.thumb.ondragstart = function () {
                        return !1
                    }, this.volume_wrapper.appendChild(e), this.volume_slider = t, this.settings.audio_only || (this.volume_slider.style.display = "none")
                }
            }, {
                key: "_setStoredVolume", value: function () {
                    var e = 100;
                    if ("localStorage" in window) {
                        try {
                            e = parseInt(window.localStorage.getItem("sldp_player_volume_" + this.storageId))
                        } catch (e) {
                            this.logger.warn("Error getting last volume from local storage", e)
                        }
                        isNaN(e) && (e = 100)
                    }
                    this._adjustVolume(e, !0)
                }
            }, {
                key: "_adjustVolume", value: function (e, t) {
                    this.thumb && (t && this.volumeController.muted ? this.thumb.style.left = "0px" : this.thumb.style.left = e + "px");
                    var i = e / 100;
                    if (this.volumeController.volume !== i && (this.volumeController.volume = i, !t && this._onVolumeSet && this._onVolumeSet(e)), 0 == e || t && this.volumeController.muted ? (this.volumeController.muted = !0, this.volume_button && (this.volume_button.classList.remove("sldp-icon-volume-medium"), this.volume_button.classList.add("sldp-icon-volume-mute"))) : (this.volumeController.muted = !1, this.volume_button && (this.volume_button.classList.remove("sldp-icon-volume-mute"), this.volume_button.classList.add("sldp-icon-volume-medium"))), this.settings.controls && "localStorage" in window) try {
                        window.localStorage.setItem("sldp_player_volume_" + this.storageId, e)
                    } catch (e) {
                        this.logger.warn("Error setting current volume to localStorage", e)
                    }
                }
            }, {
                key: "_setSplashScreen", value: function () {
                    this.container && this.settings.splash_screen && (this.mediaElement.style["background-image"] = "url('".concat(this.settings.splash_screen, "')"), this.mediaElement.style["background-size"] = "cover")
                }
            }, {
                key: "_removeSplashScreen", value: function () {
                    this.container && this.settings.splash_screen && (this.mediaElement.style["background-image"] = "", this.mediaElement.style["background-size"] = "", this.mediaElement.style.background = "#000")
                }
            }, {
                key: "_removePlayerControls", value: function () {
                    var e = this.playerWrapper.getElementsByClassName("sldp_cbar")[0];
                    e && this.playerWrapper.removeChild(e);
                    var t = this.playerWrapper.getElementsByClassName("sldp_indicator")[0];
                    t && this.playerWrapper.removeChild(t)
                }
            }, {
                key: "_handlePlay", value: function (e) {
                    var t = !1;
                    return this.can_play && (this.settings.audio_only && this.settings.audio_title ? this._addMessage(this.settings.audio_title) : this._removeMessage(), this._togglePlayButton(!1), this._onPlayCallback && (this._onPlayCallback(e), this.showControlsForPeriod(.5), t = !0)), t
                }
            }, {
                key: "_handlePause", value: function (e) {
                    this._togglePlayButton(!0), !e && this._onPauseCallback && this._onPauseCallback(), this.showControlsForPeriod("infinite")
                }
            }, {
                key: "_togglePlayClass", value: function (e, t, i, n) {
                    if (e) {
                        var r = t ? n : i, a = t ? i : n;
                        e.classList.remove(r), e.classList.add(a)
                    }
                }
            }, {
                key: "_togglePlayButton", value: function (e) {
                    this._togglePlayClass(this.playPauseButton, e, "sldp-icon-play", "sldp-icon-pause"), this._togglePlayClass(this.mobileCtrlBtn, e, "sldp-icon-play-o", "sldp-icon-pause-o")
                }
            }, {
                key: "_updateCfgDialog", value: function () {
                    for (var e = this, t = function (t) {
                        var i = e.quality_ar[t].name, n = e.quality_ar[t].idx, r = document.createElement("li");
                        i == e.cur_quality.name && n == e.cur_quality.idx && (i = "&#10003 " + i), r.innerHTML = i, r.onclick = function (e) {
                            this._onQualityChangeCallback && (this._onQualityChangeCallback(i, n), this.cfgDialog.remove(), delete this.cfgDialog, this.hideControlsAfterPeriod(.5)), e.stopPropagation()
                        }.bind(e), e.cfgDialog.appendChild(r)
                    }, i = 0; i < this.quality_ar.length; i++) t(i)
                }
            }, {
                key: "_isFullscreenMode", value: function () {
                    var e = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                    return this._isPlayerElement(e)
                }
            }, {
                key: "_updateFullscreenWrapperSize", value: function () {
                    this.mediaElement.style.width = "100vw", this.mediaElement.style.height = "100vh", this.playerWrapper.style.width = "100vw", this.playerWrapper.style.height = "100vh"
                }
            }, {
                key: "_isPlayerElement", value: function (e) {
                    if (e) {
                        var t = e.parentElement;
                        return t && this.container && t.id === this.container.id
                    }
                    return !1
                }
            }, {
                key: "_updatePlayerFullscreen", value: function () {
                    this._updateFullscreenWrapperSize(), this._resizeHandler()
                }
            }, {
                key: "_createHandlers", value: function () {
                    this.clicks = 0, this.singleClickHandler = this.settings.controls ? this._mediaElementClick : void 0, this.doubleClickHandler = void 0, this.settings.audio_only || (this.settings.mobile || (this.doubleClickHandler = this._expandBtnClick), this._createFullscreenHandler(), this._createResizeHandler(), this._createPipHandlers(), this._createOrientationChangeHandler()), this._createClicksHandler(), this._createPlayPauseHandlers(), this._createWebkitendfullscreenHandler()
                }
            }, {
                key: "_removeHandlers", value: function () {
                    this.settings.audio_only || (this._removeFullscreenHandler(), this._removeResizeHandler(), this._removePipHandlers(), this._removeOrientationChangeHandler()), this.singleClickHandler = void 0, this.doubleClickHandler = void 0, this._removeClicksHandler(), this._removeWebkitendfullscreenHandler()
                }
            }, {
                key: "_createClicksHandler", value: function () {
                    this.playerWrapper.addEventListener("click", this._handleClicks, !1)
                }
            }, {
                key: "_removeClicksHandler", value: function () {
                    this.playerWrapper.removeEventListener("click", this._handleClicks)
                }
            }, {
                key: "_createPlayPauseHandlers", value: function () {
                    this.mediaElement.addEventListener("play", this._handlePlayEvent, !1), this.mediaElement.addEventListener("pause", this._handlePauseEvent, !1)
                }
            }, {
                key: "_removePlayPauseHandlers", value: function () {
                    this.mediaElement.removeEventListener("play", this._handlePlayEvent), this.mediaElement.removeEventListener("pause", this._handlePauseEvent)
                }
            }, {
                key: "_createResizeHandler", value: function () {
                    window.addEventListener("resize", this._resizeHandler, !1)
                }
            }, {
                key: "_removeResizeHandler", value: function () {
                    window.removeEventListener("resize", this._resizeHandler)
                }
            }, {
                key: "_createPipHandlers", value: function () {
                    window.addEventListener("enterpictureinpicture", this._handleEnterPip, !1), window.addEventListener("leavepictureinpicture", this._handleLeavePip, !1)
                }
            }, {
                key: "_removePipHandlers", value: function () {
                    window.removeEventListener("enterpictureinpicture", this._handleEnterPip), window.removeEventListener("leavepictureinpicture", this._handleLeavePip), this.pipMode && (document.exitPictureInPicture(), this.pipMode = !1)
                }
            }, {
                key: "_createOrientationChangeHandler", value: function () {
                    window.addEventListener("orientationchange", this._orientationchangeHandler, !1)
                }
            }, {
                key: "_removeOrientationChangeHandler", value: function () {
                    window.removeEventListener("orientationchange", this._orientationchangeHandler)
                }
            }, {
                key: "_createFullscreenHandler", value: function () {
                    document.addEventListener("webkitfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("mozfullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("fullscreenchange", this._fullscreenchangeHandler, !1), document.addEventListener("MSFullscreenChange", this._fullscreenchangeHandler, !1), document.addEventListener("webkitfullscreenerror", this._fullscreenErrorHandler, !1), document.addEventListener("fullscreenerror", this._fullscreenErrorHandler, !1)
                }
            }, {
                key: "_removeFullscreenHandler", value: function () {
                    document.removeEventListener("webkitfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("mozfullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("fullscreenchange", this._fullscreenchangeHandler), document.removeEventListener("MSFullscreenChange", this._fullscreenchangeHandler), document.removeEventListener("webkitfullscreenerror", this._fullscreenErrorHandler), document.removeEventListener("fullscreenerror", this._fullscreenErrorHandler)
                }
            }, {
                key: "_createWebkitendfullscreenHandler", value: function () {
                    this.mediaElement.addEventListener("webkitendfullscreen", this._webkitendfullscreenHandler, !1)
                }
            }, {
                key: "_removeWebkitendfullscreenHandler", value: function () {
                    this.mediaElement.removeEventListener("webkitendfullscreen", this._webkitendfullscreenHandler)
                }
            }, {
                key: "_finishLoadingIndicator", value: function () {
                    this.indicator && this.indicator.quickRelease()
                }
            }, {
                key: "_updateLoadingIndicator", value: function () {
                    this.indicator && this.indicator.updatePosition()
                }
            }, {
                key: "_createLoadingIndicator", value: function () {
                    var e = document.createElement("div");
                    e.className = "sldp_indicator", this.playerWrapper.appendChild(e), this.indicator = {
                        ui: this,
                        fps: 60,
                        element: e,
                        counter: 0,
                        percentage: 100,
                        fullWidth: 1,
                        releaseDuration: .5,
                        start: function () {
                            this.interval && clearInterval(this.interval), this.counter = 0, this.percentage = 0, this.element.style.opacity = 1, this.fullWidth = this.ui.playerWrapper.offsetWidth, this.interval = setInterval(this.onInterval.bind(this), 1e3 / this.fps)
                        },
                        release: function () {
                            this.interval && clearInterval(this.interval), this.counter = 0, this.percentagePerFrame = (100 - this.percentage) / (this.releaseDuration * this.fps), this.opacityPerFrame = 1 / (this.releaseDuration * this.fps), this.interval = setInterval(this.onReleaseInterval.bind(this), 1e3 / this.fps)
                        },
                        quickRelease: function () {
                            if (this.percentage < 100) {
                                var e = .1;
                                45 < this.percentage && (e = (100 - this.percentage) / (this.percentagePerFrame * this.fps)), e >= .1 && (e = this.releaseDuration, this.releaseDuration = .1, this.release(), this.releaseDuration = e)
                            }
                        },
                        onInterval: function () {
                            this.counter += 1, this.percentage = 8 * Math.log(this.counter), this.adjustElementWidth(), 45 < this.percentage && this.release()
                        },
                        onReleaseInterval: function () {
                            this.percentage += this.percentagePerFrame, 100 <= this.percentage && (this.percentage = 100, clearInterval(this.interval)), this.adjustElementWidth();
                            var e = parseFloat(this.element.style.opacity) || 1;
                            this.element.style.opacity = "" + (e - this.opacityPerFrame)
                        },
                        adjustElementWidth: function () {
                            this.element.style.width = parseInt(.01 * this.fullWidth * this.percentage) + "px"
                        },
                        updatePosition: function () {
                            this.percentage < 100 && (this.fullWidth = this.ui.playerWrapper.offsetWidth, this.adjustElementWidth())
                        }
                    }, this.settings.autoplay && this.indicator.start()
                }
            }, {
                key: "qualities", set: function (e) {
                    this.quality_ar = e, this.cur_quality = e[0]
                }
            }, {
                key: "currentQuality", set: function (e) {
                    this.cur_quality = e
                }
            }, {
                key: "onPlay", set: function (e) {
                    this._onPlayCallback = e
                }
            }, {
                key: "onPlayEvent", set: function (e) {
                    this._onPlayEventCallback = e
                }
            }, {
                key: "onPause", set: function (e) {
                    this._onPauseCallback = e
                }
            }, {
                key: "onPauseEvent", set: function (e) {
                    this._onPauseEventCallback = e
                }
            }, {
                key: "canPlay", set: function (e) {
                    this.can_play = !!e
                }
            }, {
                key: "onQualityChange", set: function (e) {
                    this._onQualityChangeCallback = e
                }
            }, {
                key: "onUserAction", set: function (e) {
                    this._isUserActionAcceptable = e
                }
            }, {
                key: "onVolumeSet", set: function (e) {
                    this._onVolumeSet = e
                }
            }, {
                key: "onResize", set: function (e) {
                    this._onResize = e
                }
            }, {
                key: "onEnterPip", set: function (e) {
                    this._onEnterPip = e
                }
            }, {
                key: "onLeavePip", set: function (e) {
                    this._onLeavePip = e
                }
            }]) && u(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = l
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = (n = i(328)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var s = "\n@font-face {\n  font-family: 'glyphs';\n  src:url(data:font/opentype;base64,".concat(r.default, ');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="sldp-icon-"], [class*=" sldp-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'glyphs\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.sldp-icon-enlarge:before {\n  content: "\\e98b";\n}\n.sldp-icon-cog:before {\n  content: "\\e994";\n}\n.sldp-icon-play-o:before {\n  content: "\\ea15";\n}\n.sldp-icon-pause-o:before {\n  content: "\\ea16";\n}\n.sldp-icon-play:before {\n  content: "\\ea1c";\n}\n.sldp-icon-pause:before {\n  content: "\\ea1d";\n}\n.sldp-icon-volume-medium:before {\n  content: "\\ea27";\n}\n.sldp-icon-volume-mute:before {\n  content: "\\ea2a";\n}\n.sldp-icon-cc:before {\n  content: "\\e900";\n}\n.sldp_player_wrp {\n  background-color: #000;\n  position: relative;\n}\n.sldp_player_wrp_video {\n  display: inline-block;\n}\n.sldp_player_wrp_audio {\n  display: flex;\n  height: 42px;\n}\n.sldp_cbar {\n  display: block;\n  padding: 5px;\n  padding-left: 5px;\n  overflow: hidden;\n  z-index: 10;\n}\n.sldp_cbar_video {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  transition: opacity 0.5s linear;\n  background-color: rgba(0,0,0,0.7);\n}\n.sldp_cbar_audio {\n  position: relative;\n  margin: auto 6px auto 12px;\n  background-color: rgba(0,0,0,0.4);\n}\n.sldp_mobile_ctrl {\n  position: absolute;\n  transition: opacity 0.5s linear;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  z-index: 5;\n  color: #008ee8;\n}\n.sldp_mobile_ctrl_icon {\n  margin: auto;\n  font-size: 5rem;\n  opacity: 0.7;\n}\n.sldp_message_wrp {\n  height: 100%;\n  color: white;\n  display: flex;\n  z-index: 1;\n}\n.sldp_message_wrp_video {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n}\n.sldp_message_wrp_audio_noctrl {\n  padding-left: 20px;\n}\n.sldp_message {\n  display: inline-block;\n  margin: auto;\n  background: #000;\n  font-family: Helvetica, Arial, sans-serif;\n  line-height: 22px;\n}\n.sldp_message_pad {\n  padding: 12px 20px;\n  align-self: center;\n}\n.ios_button {\n  text-align: center;\n  margin: 10px 0px;\n}\n.sldp_btn {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-right: 10px;\n  color: #008ee8;\n  font-size: 18px;\n\n  -o-transition:.5s;\n  -ms-transition:.5s;\n  -moz-transition:.5s;\n  -webkit-transition:.5s;\n  transition:.5s;\n}\n.sldp_btn:hover {\n  color: #ff8814;\n}\n.sldp_play_pause_btn {\n  float: left;\n}\n.sldp_expand_btn {\n  float: right;\n  font-size: 16px;\n}\n.sldp_volume_btn {\n  float: left;\n}\n.sldp_config_btn {\n  float: right;\n}\n.sldp_captions_btn {\n  float: right;\n  font-size: 1.3rem;\n}\n.sldp_config_btn:hover {\n  transform: rotate(-30deg);\n}\n.sldp_cfg_dialog, .sldp_capt_dialog {\n  background: black;\n  position: absolute;\n  bottom: 30px;\n  padding: 0;\n  margin: 0;\n  font-family: Arial;\n  font-size: 14px;\n  color: white;\n  z-index: 10;\n}\n.sldp_cfg_dialog {\n  right: 25px;\n  width: 100px;\n}\n.sldp_capt_dialog {\n  right: 50px;\n}\n.sldp_cfg_dialog li, .sldp_capt_dialog li {\n  list-style: none;\n  text-align: center;\n  line-height: 24px;\n  cursor: pointer;\n}\n.sldp_capt_dialog li {\n  padding: 0 15px;\n}\n.sldp_cfg_dialog li:hover, .sldp_capt_dialog li:hover {\n  background-color: grey;\n}\n.sldp_volume_wrp {\n  overflow: hidden;\n}\n.sldp_volume_desktop {\n  width: 150px;\n}\n.sldp_volume_mobile {\n  width: 20px;\n}\n.sldp_volume_slider_wrp {\n  float: left;\n  height: 20px;\n  cursor: pointer;\n}\n.sldp_volume_slider {\n  border-radius: 1px;\n  background: #008ee8;\n  width: 112px;\n  height: 3px;\n  margin-top: 9px;\n}\n.sldp_volume_thumb {\n  background: #008ee8;\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  position: relative;\n  left: 100px;\n  top: -4px;\n  cursor: pointer;\n}\n.sldp_volume_thumb:hover {\n  background: #ff8814;\n}\n.sldp_indicator {\n  height: 4px;\n  background-color: #008ee8;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@keyframes flasher {  \n  0% { opacity: 1.0; }\n  50% { opacity: 0.0; }\n  100% { opacity: 1.0; }\n}\n'),
            o = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), document.getElementById("sldp_player_stylesheet") || (this.style = document.createElement("style"), this.style.setAttribute("id", "sldp_player_stylesheet"), this.style.styleSheet ? this.style.styleSheet.cssText = s : this.style.appendChild(document.createTextNode(s)), document.getElementsByTagName("head")[0].appendChild(this.style))
                }

                var t, i;
                return t = e, (i = [{
                    key: "destroy", value: function () {
                        this.style && this.style.parentNode.removeChild(this.style)
                    }
                }]) && a(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
            }();
        t.default = o
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, t.default = "d09GRgABAAAAAAngAAsAAAAACZQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHIWNtYXAAAAFoAAAAhAAAAITVOJDJZ2FzcAAAAewAAAAIAAAACAAAABBnbHlmAAAB9AAABXgAAAV4ltUZZGhlYWQAAAdsAAAANgAAADYhySHZaGhlYQAAB6QAAAAkAAAAJAfCA85obXR4AAAHyAAAADQAAAA0KgABqGxvY2EAAAf8AAAAHAAAABwGWgfsbWF4cAAACBgAAAAgAAAAIAATAGFuYW1lAAAIOAAAAYYAAAGGmUoJ+3Bvc3QAAAnAAAAAIAAAACAAAwAAAAMDzQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6ioDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAGgAAAAWABAAAwAGAAEAIOkA6YvplOoW6h3qJ+oq//3//wAAAAAAIOkA6YvplOoV6hzqJ+oq//3//wAB/+MXBBZ6FnIV8hXtFeQV4gADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABQBWAFUDqgMBAAMABwALAA8AIwAAATUhFQU1IxUjNSEVERUzNQEyFxYVERQHBiMhIicmNRE0NzYzA1b+VAGsrFT+VKwCACIZGRkZIv1UIhkZGRkiAVVWVqpWVlZWAQBWVgFWGhoi/gAiGhoaGiICACIaGgACAAD/wAQAA8AABgANAAABEScHJzcnAwcXIREXNwQAoMBgwKCgwKD+YKDAA8D+YKDAYMCg/WDAoAGgoMAAAAAAAgAS/8AD7gPAAEIAXgAAASYnJjY3NjcnDgEjIicuAScmNSMUBgcGBw4BJyYnBx4BFxYXFgYHBgcXPgEzMhceARcWFTM0Njc2Nz4BFxYXNy4BJwUiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYDphQFBBMYFyNlFTIbKCMkNQ8PyQ0NFR8fSCcmI2UWJQ0UBAUUFxcjZRUyGigkIzUPEMkNDRQfH0kmJiRkFSUN/lorJiU5EBAQEDklJisrJiU5EBAQEDklJgFeIyYmSR8fFK8NDg8QNSQjKRkyFyMXFxMEBRSuDSQXIyYmSCAfFK4MDg8QNSMkKBkxFyMXFxMEBRSvDCQXbRAQOSUmKysmJTkQEBAQOSUmKysmJTkQEAAAAwAA/8AEAAPAABsANwA6AAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBgMNAQIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTEzWAYD+gAPAKCiLXl1qal1eiygoKCiLXl1qal1eiygo/GAhIHFMTFZWTExxICEhIHFMTFZWTExxICECgODgAAAEAAD/wAQAA8AAGwA3ADsAPwAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYBMxEjATMRIwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTEz+6oCAAQCAgAPAKCiLXl1qal1eiygoKCiLXl1qal1eiygo/GAhIHFMTFZWTExxICEhIHFMTFZWTExxICECYP6AAYD+gAAAAAABAMAAQANAA0AAAgAAEwkBwAKA/YADQP6A/oAAAgCAAEADgANAAAMABwAAEyERIQEhESGAAUD+wAHAAUD+wANA/QADAP0AAAADAAAAAANwA34AJQBCAF0AACUiJicmNDc2NzY0JyYnJjQ3NjIXFhceARcWFRQHDgEHBgcOASMxJyImJyY0NzY3NjQnJicmNDc2MhcWFxYUBwYHDgEHIiYvASMiJjURNDY7ATc+ARceARURFAYHDgEC0AoRBw4OMRgZGRgxDg4OJw4fGBcgCQgICSAXGB8HEQmrCRIHDg4eEA8PEB4ODg4oDiwXFhYXLAcSjgYMBfZzDRMTDXP2BxMJCQsLCQMGgAcIDicOMj0+gj0+Mg4nDg8PHiMkTSoqKysqKk0kIx4IB1sHBw4oDh4nJlAmJx4OKA4ODiw5OHQ4OSwHB9sFBPcTDQFADRP3BgQDBBAK/MAKEAQBAQACAAAAAAPAA34ADwAqAAABFSMnByM1Nyc1Mxc3MxUHASImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BA8BVa2tVa2tVa2tVa/5LBgwF9nMNExMNc/YHEwkJCwsJAwYBVVVra1Vra1Vra1Vr/kAFBPcTDQFADRP3BgQDBBAK/MAKEAQBAQABAAAAAQAAYWwe/V8PPPUACwQAAAAAAN9U7q4AAAAA31TurgAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAANBAAAAAAAAAAAAAAAAgAAAAQAAFYEAAAABAAAEgQAAAAEAAAABAAAwAQAAIAEAAAABAAAAAAAAAAACgAUAB4AWAB4AQgBZgHMAdoB8AJ6ArwAAQAAAA0AXwAFAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n, r = (n = i(165)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var s = function () {
            function e(t, i) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), i && i.initialized && "input" === i.type && (this.vuInput = !0, this.curVolume = 1, this.curMuted = !1), this.mediaService = r.default.getInstance(t)
            }

            var t, i;
            return t = e, (i = [{
                key: "destroy", value: function () {
                    this.vuMeter = void 0
                }
            }, {
                key: "setVUMeter", value: function (e) {
                    var t = this;
                    this.vuInput ? (this.vuMeter = e, this.vuMeter.isActivated() ? this.onVUMeterActivated() : this.vuMeter.onActivated = function () {
                        return t.onVUMeterActivated()
                    }) : e.isActivated() || (this.suspendedMeter = e)
                }
            }, {
                key: "activateVUMeter", value: function () {
                    this.vuInput ? this.vuMeter && this.vuMeter.setVolume(this.curMuted ? 0 : this.curVolume) : this.suspendedMeter && this.suspendedMeter.setup() && (this.suspendedMeter = void 0)
                }
            }, {
                key: "volume", get: function () {
                    var e = 0;
                    return this.vuInput ? this.curMuted || (e = this.curVolume) : this.mediaService.isMuted() || (e = this.mediaService.getVolume()), e
                }, set: function (e) {
                    this.vuInput ? (this.curVolume = e, this.vuMeter ? this.curMuted || this.vuMeter.setVolume(e) : this.mediaService.setVolume(e)) : (this.suspendedMeter && this.suspendedMeter.setup() && (this.suspendedMeter = void 0), this.mediaService.setVolume(e))
                }
            }, {
                key: "muted", get: function () {
                    return this.vuInput ? this.curMuted : this.mediaService.isMuted()
                }, set: function (e) {
                    this.vuInput ? this.curMuted !== e && (this.curMuted = e, this.vuMeter ? this.vuMeter.setVolume(this.curMuted ? 0 : this.curVolume) : this.mediaService.setMuted(e)) : (this.suspendedMeter && !e && this.suspendedMeter.setup() && (this.suspendedMeter = void 0), this.mediaService.setMuted(e))
                }
            }, {
                key: "onVUMeterActivated", value: function () {
                    this.mediaService.setVolume(1), this.vuMeter.setVolume(this.curMuted ? 0 : this.curVolume), this.mediaService.setMuted(!1)
                }
            }]) && a(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = s
    }, function (e, t, i) {
        "use strict";
        i(78), i(79), i(16), i(80), i(15), i(31), i(32), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(33), i(0);
        var n = i(23), r = s(i(229)), a = s(i(231));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        s(i(234));
        var c = ["CC1", "CC2", "CC3", "CC4"], l = {CC1: 0, CC2: 1, CC3: 2, CC4: 3, OFF: -1}, h = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._captions = [], this._captionProps = [], this._activeIdx = -1, this._captionPresenter = r.default.getInstance(t), this._captionPresenter.setCaptionReportInterface(this), this._captionManager = a.default.getInstance(t)
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e, t) {
                    if ("object" === o(t)) for (var i in t) {
                        var n = l[i];
                        n >= 0 && (this._captionProps[n] = t[i], t[i].default && (this._activeIdx = n))
                    }
                    this._captionManager.init(e), this._captionManager.setCaptionTrack(c[this._activeIdx]), this._captionPresenter.setRenderable(!!e), this._activeIdx >= 0 && (this._captionPresenter.start(), this._captionPresenter.setActiveCaptionId(c[this._activeIdx]))
                }
            }, {
                key: "setCaptionListInterface", value: function (e) {
                    this._captionList = e, this._captionList.setCaptions(this._captions), this._captionList.setUserActionReportInterface(this), this._activeIdx >= 0 && this._captionList.setActiveIdx(this._activeIdx)
                }
            }, {
                key: "deinit", value: function () {
                    this._captionList && (this._captionList.destroy(), this._captionList = void 0), this._captionPresenter.deinit()
                }
            }, {
                key: "resume", value: function () {
                    this._captionManager.clear(), this._captionPresenter.start()
                }
            }, {
                key: "pause", value: function () {
                    this._captionPresenter.stop()
                }
            }, {
                key: "clear", value: function () {
                    this._captionManager.clear()
                }
            }, {
                key: "selectCaption", value: function (e) {
                    return !(!this._captions[e] && -1 !== e || this._activeIdx === e || (this._activeIdx = e, this._captionManager.setCaptionTrack(c[this._activeIdx]), this._captionPresenter.setActiveCaptionId(c[this._activeIdx]), this._captionList.setActiveIdx(e), 0))
                }
            }, {
                key: "captionArrived", value: function (e) {
                    var t = l[e];
                    this._captions[t] || (this._captions[t] = {}, this._captionProps[t] && this._captionProps[t].name && (this._captions[t].name = this._captionProps[t].name), this._captionProps[t] && this._captionProps[t].lang && (this._captions[t].lang = this._captionProps[t].lang), this._captions[t].title = this._captionList.getCaptionTitle(t), this._captionList.refresh())
                }
            }, {
                key: "setCaptionTrack", value: function (e) {
                    return this.selectCaption(l[e])
                }
            }, {
                key: "getCurrentCaptionTrack", value: function () {
                    var e = {};
                    return this._activeIdx >= 0 && (e[c[this._activeIdx]] = this._captions[this._activeIdx]), e
                }
            }, {
                key: "getCaptionTracks", value: function () {
                    for (var e = {}, t = 0; t < this._captions.length; t++) this._captions[t] && (e[c[t]] = this._captions[t]);
                    return e
                }
            }]) && u(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), f = (0, n.multiInstanceHolder)(h);
        t.default = f
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(21), i(64), i(0);
        var n = s(i(332)), r = i(232), a = s(i(8));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function u(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        t.default = function (e) {
            var t = a.default.create(e, "ABR controller"), i = new n.default(e), s = function () {
                function e(n, a, s) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), u(this, "_watchDog", function () {
                        if (this.abrLadder.isRunning()) {
                            var e = this.abrLadder.calculateCurVideoStreamMetric("latestBufLevel");
                            e < this.stepDownBufferLevel && (t.debug("_watchDog interrupts abr ladder because current buffer level " + e + " < " + this.stepDownBufferLevel), this.abrLadder.finish(), this._increasePhases())
                        }
                    }.bind(this)), u(this, "_evalHandler", function () {
                        if (!this.isSwitchInProgressCallback() && !this.isSeekInProgressCallback()) {
                            var e = this.abrLadder.calculateCurStreamMetric("latestLowBufferCount"),
                                i = this.abrLadder.calculateCurVideoStreamMetric("avg3secBufLevel");
                            if (this.playbackStalled(i, e)) t.debug("evalHandler: playback stalled! Switch to lowest rendition."), this.abrLadder.cancel(), this._switchRendition(0, r.TRANSITION_MODE.ABRUPT), this._increasePhases(), this.phaseCount = 0; else {
                                if (t.debug("phase ".concat(this.phaseCount, " max ").concat(this.maxPhases)), this.phaseCount >= 3) {
                                    var n = this.abrLadder.calculateCurStreamMetric("latestBandwidth"),
                                        a = this.abrLadder.calculateCurStreamMetric("latestRate");
                                    if (n += this.abrLadder.calculateProbeStreamMetric("latestBandwidth"), t.debug("eval: current buf: ".concat(i, ", step down buf: ").concat(this.stepDownBufferLevel, ", current bw: ").concat(n, ", current rate: ").concat(a)), i < this.stepDownBufferLevel) {
                                        if (this.abrLadder.cancel(), a > n) {
                                            var s = this.abrLadder.findRelevantStream(n, a);
                                            s !== this.curStream.orderedIdx && (t.debug("evalHandler: step down to ".concat(this.renditionProvider.getRenditionName(s))), this._switchRendition(s), this._increasePhases(), this.phaseCount = 0)
                                        }
                                    } else {
                                        var o = !this._isCurRenditionTop() && !this.abrLadder.isRunning();
                                        o && this.phaseCount >= this.maxPhases && n > 0 && i > this.safeRunBufferLevel && 0 == e ? (this.abrLadder.run(), this.phaseCount = 0) : o && t.debug("ABR ladder isn't run: phaseCount = ".concat(this.phaseCount, ", curBandwidth = ").concat(n, ", ") + "curLevel = ".concat(i, ", safeLevel = ").concat(this.safeRunBufferLevel, ", lowBufCount = ").concat(e))
                                    }
                                }
                                !this.abrLadder.isRunning() && this.phaseCount < this.maxPhases && this.phaseCount++
                            }
                        }
                    }.bind(this)), u(this, "_trialComplete", function () {
                        if (t.debug("trial complete for ".concat(this.curStream ? this.curStream.rendition : "unknown")), this.curStream) {
                            var e = this.trials[this.curStream.orderedIdx];
                            e.timer = null, e.required > 1 && e.required--
                        }
                    }.bind(this)), u(this, "_onLadderResult", function (e) {
                        if (t.debug("ladder result: ".concat(this.renditionProvider.getRenditionName(e), ", idx: ").concat(e, ", cur stream: ").concat(this.curStream.rendition + "p", ", idx: ").concat(this.curStream.orderedIdx)), this.curStream.orderedIdx !== e) this._switchRendition(e); else {
                            for (var i in this.trials) this.trials[i].runs = 0;
                            this._increasePhases()
                        }
                        this.phaseCount = 0
                    }.bind(this)), this.trials = {}, this.maxPhases = 3, this.trialsActive = !1, this.abrLadder = i.create(n, a, s), this.renditionProvider = n, this._setBufferingTime(s)
                }

                var n, a;
                return n = e, (a = [{
                    key: "start", value: function () {
                        this.curStream = this.getCurStreamCallback(), this.renditionProvider.getStreamsCount() > 1 && (t.debug("start"), this._initTrials(), this.phaseCount = 0, this.trials[this.curStream.orderedIdx].timer = setTimeout(this._trialComplete, 6e4), this._clearEvalTimer(), this._clearWatchTimer(), this._clearRestartTimer(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.watchTimer = setInterval(this._watchDog, 100), this.abrLadder.init(this.curStream), this.abrLadder.callbacks = {
                            onStartProbe: this.probeStartCallback,
                            onCancelProbe: this.probeCancelCallback,
                            onResult: this._onLadderResult
                        })
                    }
                }, {
                    key: "restart", value: function (e) {
                        if (e) {
                            this._clearEvalTimer(), this._clearWatchTimer();
                            var t = this;
                            this.restartTimer = setTimeout((function () {
                                t.restartTimer = void 0, t.start()
                            }), 5e3)
                        } else this.start()
                    }
                }, {
                    key: "playbackStalled", value: function (e, i) {
                        return i > 0 && t.debug("Low buffer count: ".concat(i, ", current buffer level: ").concat(e)), i >= 10 || e <= .1
                    }
                }, {
                    key: "scheduleInstantEvaluation", value: function () {
                        this._clearEvalTimer(), this._clearWatchTimer(), this._evalHandler(), this.evalTimer = setInterval(this._evalHandler, 1e3), this.watchTimer = setInterval(this._watchDog, 100)
                    }
                }, {
                    key: "setBuffering", value: function (e) {
                        this.abrLadder.setBuffering(e), this._setBufferingTime(e)
                    }
                }, {
                    key: "_setBufferingTime", value: function (e) {
                        this.bufferingTime = e, this.stepDownBufferLevel = this.bufferingTime > 700 ? .5 * this.bufferingTime / 1e3 : .6 * this.bufferingTime / 1e3, this.safeRunBufferLevel = this.bufferingTime > 700 ? .65 * this.bufferingTime / 1e3 : .75 * this.bufferingTime / 1e3
                    }
                }, {
                    key: "_increasePhases", value: function () {
                        this.maxPhases < 30 && (this.maxPhases++, t.debug("Increase maxPhases", this.maxPhases))
                    }
                }, {
                    key: "_isCurRenditionTop", value: function () {
                        return this.renditionProvider.isTopAvailable(this.curStream.orderedIdx)
                    }
                }, {
                    key: "_initTrials", value: function () {
                        var e = !1, t = this.renditionProvider.getAllRenditions();
                        if (this.trialsActive) for (var i = 0; i < t.length; i++) {
                            if (this.trials[i]) {
                                var n = this.trials[i].idx;
                                n === t[i].idx && this.trials[i].stream === this.renditionProvider.getStream(n).stream && (e = !0)
                            }
                            if (!e) break
                        }
                        if (e) this._resetTrials(); else {
                            this.trials = {}, this.trialsActive = !0;
                            for (var r = 0; r < t.length; r++) this.trials[r] = {
                                idx: t[r].idx,
                                stream: this.renditionProvider.getStream(t[r].idx).stream,
                                runs: 0,
                                required: 1,
                                timer: null
                            }
                        }
                    }
                }, {
                    key: "_switchRendition", value: function (e, i) {
                        if (e !== this.curStream.orderedIdx) {
                            var n = e > this.curStream.orderedIdx;
                            if (n) this.trials[e].runs++; else {
                                var r = this.trials[this.curStream.orderedIdx];
                                r.timer && (r.required += 2, r.required > 15 && (r.required = 15), this._clearTrialTimer(this.curStream.orderedIdx), t.debug("Increase trial for ".concat(this.curStream.rendition + "p", ", idx ").concat(r.idx, " to ").concat(r.required)))
                            }
                            (!n || this.trials[e].runs >= this.trials[e].required) && this.switchRenditionCallback(this.renditionProvider.getRendition(e).idx, i)
                        }
                    }
                }, {
                    key: "stop", value: function (e) {
                        t.debug("stop!"), this.curStream = void 0, this.phaseCount = 0, this._resetTrials(), e && e.hard && (this.trials = {}), this._clearEvalTimer(), this._clearWatchTimer(), this.abrLadder.clear()
                    }
                }, {
                    key: "_clearEvalTimer", value: function () {
                        void 0 !== this.evalTimer && (clearInterval(this.evalTimer), this.evalTimer = void 0)
                    }
                }, {
                    key: "_clearWatchTimer", value: function () {
                        void 0 !== this.watchTimer && (clearInterval(this.watchTimer), this.watchTimer = void 0)
                    }
                }, {
                    key: "_clearRestartTimer", value: function () {
                        void 0 !== this.restartTimer && (clearTimeout(this.restartTimer), this.restartTimer = void 0)
                    }
                }, {
                    key: "_resetTrials", value: function () {
                        for (var e in this.trials) this.trials[e].runs = 0, this._clearTrialTimer(e)
                    }
                }, {
                    key: "_clearTrialTimer", value: function (e) {
                        null !== this.trials[e].timer && (clearTimeout(this.trials[e].timer), this.trials[e].timer = null)
                    }
                }, {
                    key: "isProbing", value: function (e) {
                        var t = !1, i = this.abrLadder.getProber();
                        return i && i.id() === e && (t = i.isEnabled()), t
                    }
                }, {
                    key: "onProbeInitReceived", value: function () {
                        this.abrLadder.getProber().receiveInit()
                    }
                }, {
                    key: "onProbeDataReceived", value: function (e, t, i) {
                        this.abrLadder.getProber().receiveFrame(e, t, i)
                    }
                }, {
                    key: "callbacks", set: function (e) {
                        this.switchRenditionCallback = e.switchRendition, this.isSwitchInProgressCallback = e.isInProgress, this.isSeekInProgressCallback = e.isSeeking, this.getCurStreamCallback = e.getCurStream, this.probeStartCallback = e.probeStream, this.probeCancelCallback = e.cancelStream
                    }
                }]) && o(n.prototype, a), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e, t, i) {
                    return new s(e, t, i)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(21), i(0);
        var n = a(i(8)), r = a(i(333));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function o(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        var u = 3e3;
        t.default = function (e) {
            var t = n.default.create(e, "ABR"), i = new r.default(e), a = function () {
                function e(i, n, r) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), o(this, "onProbeFinished", function () {
                        this.runsCount++, this.calculateCurStreamMetric("stopCustom");
                        var e = this.calculateCurStreamMetric("customRangeBandwidth");
                        t.debug("finished probe: cur bandwidth ".concat(e));
                        var i = this.metricsManager.getMetrics(this.prober.id()),
                            n = Math.max(i.avgBandwidth(), i.latestBandwidth()), r = i.avgRate();
                        e += n, t.debug("finished probe: previous bw ".concat(this.curBandwidth, ", current bw ").concat(e)), t.debug("finished probe: prober bw ".concat(n, ", prober rate ").concat(r));
                        var a = this.prober.period;
                        this.destroyProber(), this.running = !1;
                        var s = this.calculateCurVideoStreamMetric("latestBufLevel"),
                            o = 1e3 * s >= this.enoughBufferToContinue, c = this.calculateCurStreamMetric("avgRate"),
                            l = this.curStream.bandwidth > 0 ? c / this.curStream.bandwidth : 1;
                        if (t.debug("finished probe: ".concat(o ? "enough buffer" : "NOT ENOUGH BUFFER", ", period: ").concat(a, ", buf level: ").concat(1e3 * s, ", min required buf: ").concat(this.enoughBufferToContinue, ", bwCorrector: ").concat(l)), o && a >= u) {
                            this.curBandwidth = e;
                            for (var h = this.renditionProvider.getActualRenditions(), f = this.curStreamIdx + 1; f < h.length; f++) {
                                var d = h[f].bandwidth * l;
                                if (t.debug("finished probe: examine higher rendition ".concat(f, ", req bandwidth: ").concat(d, ", cur bandwidth: ").concat(this.curBandwidth), h[f]), this.curBandwidth < 1.2 * d) {
                                    t.debug("finished probe: not enough bandwdith, stop! ".concat(this.curBandwidth, " < ").concat(1.2 * d));
                                    break
                                }
                                this.curStreamIdx++
                            }
                            this.doRun()
                        } else o ? (e < this.curBandwidth && (e /= l), this.curBandwidth = Math.max(e, this.curBandwidth), t.debug("finished probe: recalculate bw ".concat(this.curBandwidth, ", run again")), this.doRun()) : (t.debug("finished probe: return result ".concat(this.renditionProvider.getRenditionName(this.curStreamIdx)), this.curStreamIdx), this.onResultCallback(this.curStreamIdx))
                    }.bind(this)), o(this, "onInitReceived", function () {
                        this.calculateCurStreamMetric("startCustom")
                    }.bind(this)), this.running = !1, this.nextProberId = 0, this.runsCount = 0, this.metricsManager = n, this.renditionProvider = i, this.setBuffering(r)
                }

                var n, r;
                return n = e, (r = [{
                    key: "init", value: function (e) {
                        this.curStream = e
                    }
                }, {
                    key: "clear", value: function () {
                        t.debug("clear"), this.cancel(), this.curStream = void 0
                    }
                }, {
                    key: "cancel", value: function () {
                        this.running && (t.debug("cancel"), this.running = !1, this.prober.stop()), this.destroyProber()
                    }
                }, {
                    key: "destroyProber", value: function () {
                        this.prober && (this.prober.destroy(), this.prober = void 0)
                    }
                }, {
                    key: "run", value: function () {
                        this.curBandwidth = this.calculateCurStreamMetric("avgBandwidth"), this.curStreamIdx = this.curStream.orderedIdx, this.runsCount = 0, this.doRun()
                    }
                }, {
                    key: "finish", value: function () {
                        t.debug("finish current stream ".concat(this.curStreamIdx)), this.cancel(), this.onResultCallback(this.curStreamIdx)
                    }
                }, {
                    key: "setBuffering", value: function (e) {
                        this.bufferingTime = e, this.minBufferingTime = e > 1e3 ? 600 : e / 2, this.enoughBufferToContinue = e > 1e3 ? 1e3 : .8 * e
                    }
                }, {
                    key: "doRun", value: function () {
                        var e = this.curStream ? this.curStream.rendition + "p" : "";
                        if (t.debug("doRun: cur rendition: ".concat(e, ", idx: ").concat(this.curStreamIdx, ", bandwdith: ").concat(this.curBandwidth)), this.curBandwidth > 0) {
                            var n = this.renditionProvider.getActualRenditions();
                            if (this.nextStreamIdx = this.curStreamIdx + 1, this.nextStreamIdx < n.length) {
                                var r = this.calculateCurStreamMetric("avgRate");
                                this.bwCorrector = this.curStream.bandwidth > 0 ? r / this.curStream.bandwidth : 1, t.debug("doRun bw corrector: ".concat(this.bwCorrector, ", bandwidth ").concat(this.curBandwidth, ", rate ").concat(r));
                                var a = n[this.nextStreamIdx], s = r + a.bandwidth * this.bwCorrector, o = 0,
                                    c = 1e3 * this.calculateCurVideoStreamMetric("avg3secBufLevel");
                                t.debug("doRun probe fullRate ".concat(s, ", curVBufTime ").concat(c)), this.curBandwidth < s && (o = this.curBandwidth * (c - this.minBufferingTime) / (s - this.curBandwidth), (o = Math.floor(o + .5)) < 100 && (o = 100)), (0 == o || o > u) && (o = u), 0 === this.runsCount && o > 600 && (o = 600), t.debug("doRun probe during ".concat(o));
                                var l = this.renditionProvider.getStream(a.idx);
                                this.prober = i.create(this.nextProberId++, l.stream, l.stream_info.vtimescale, o, this.metricsManager), this.prober.callbacks = {
                                    onStartProbe: this.startProbeCallback,
                                    onCancelProbe: this.cancelProbeCallback,
                                    onInitReceived: this.onInitReceived,
                                    onProbeFinished: this.onProbeFinished
                                }, this.running = !0, this.prober.start()
                            } else this.onResultCallback(this.curStreamIdx)
                        }
                    }
                }, {
                    key: "calculateCurVideoStreamMetric", value: function (e) {
                        return this.metricsManager.getMetrics(this.curStream.vid)[e]()
                    }
                }, {
                    key: "calculateCurStreamMetric", value: function (e) {
                        var t = this.metricsManager.getMetrics(this.curStream.vid)[e]();
                        if (!(t < 0) && t >= 0 || (t = 0), void 0 !== this.curStream.aid) {
                            var i = this.metricsManager.getMetrics(this.curStream.aid)[e]();
                            i > 0 && (t += i)
                        }
                        return t
                    }
                }, {
                    key: "calculateProbeStreamMetric", value: function (e) {
                        var t = 0;
                        return void 0 !== this.prober && (t = this.metricsManager.getMetrics(this.prober.id())[e]()), t
                    }
                }, {
                    key: "findRelevantStream", value: function (e, i) {
                        for (var n = 0, r = this.curStream.bandwidth > 0 ? i / this.curStream.bandwidth : 1, a = this.curStream.orderedIdx - 1; a >= 0; a--) if (this.renditionProvider.isRenditionActual(a) && e >= 1.1 * this.renditionProvider.getRendition(a).bandwidth * r) {
                            n = a;
                            break
                        }
                        return t.debug("findRelevantStream: found index ".concat(this.curStream.orderedIdx)), n
                    }
                }, {
                    key: "getProber", value: function () {
                        return this.prober
                    }
                }, {
                    key: "isRunning", value: function () {
                        return this.running
                    }
                }, {
                    key: "callbacks", set: function (e) {
                        this.startProbeCallback = e.onStartProbe, this.cancelProbeCallback = e.onCancelProbe, this.onResultCallback = e.onResult
                    }
                }]) && s(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e, t, i) {
                    return new a(e, t, i)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(128), i(64), i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        t.default = function (e) {
            var t = r.default.create(e, "Prober"), i = function () {
                function e(i, n, r, a, s) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.enabled = !1, this.period = a, this.stream = n, this.timescale = r, this.streamId = parseInt("F0", 16) + i % 16, this.metricsManager = s, this.metricsManager.add(this.streamId, "probe", r), t.debug("constructor: " + n + ", timescale: " + r + ", period: " + a)
                }

                var i, n;
                return i = e, (n = [{
                    key: "destroy", value: function () {
                        this.metricsManager.remove(this.streamId), this._clearBufCheckInterval()
                    }
                }, {
                    key: "id", value: function () {
                        return this.streamId
                    }
                }, {
                    key: "streamName", value: function () {
                        return this.stream
                    }
                }, {
                    key: "start", value: function () {
                        this.enabled = !0, this.durations = [], this.firstTimestamp = void 0, this.lastTimestamp = void 0, this.expectedEndTimestamp = void 0, this.startProbeCallback(this, this.period + 1)
                    }
                }, {
                    key: "isEnabled", value: function () {
                        return this.enabled
                    }
                }, {
                    key: "stop", value: function () {
                        this.isEnabled() && (this.enabled = !1, this.cancelProbeCallback(this), this.metricsManager.stop(this.streamId), this._clearBufCheckInterval())
                    }
                }, {
                    key: "receiveInit", value: function () {
                        if (!this.bufCheckInterval && (this.initTime = performance.now(), this.initReceivedCallback(), this.period >= 1e3)) {
                            var e = this;
                            this.bufCheckInterval = setInterval((function () {
                                e.firstTimestamp ? (e.lastTimestamp - e.firstTimestamp) / e.timescale - (performance.now() - e.initTime) / 1e3 <= 0 && e.metricsManager.reportLowBuffer(e.streamId) : e.metricsManager.reportLowBuffer(e.streamId)
                            }), 500)
                        }
                    }
                }, {
                    key: "receiveFrame", value: function (e, i, n) {
                        void 0 === this.firstTimestamp ? (t.debug("receiveFrame: firstTimestamp " + n), this.firstTimestamp = n, this.expectedEndTimestamp = this.period * this.timescale / 1e3 + n) : this.durations.push(n - this.lastTimestamp), this.lastTimestamp = n;
                        var r = this._findDuration();
                        this.metricsManager.setRateAdditive(this.streamId, r), n + r > this.expectedEndTimestamp && (t.debug("receiveFrame: lastTimestamp " + n), (n - this.firstTimestamp) / this.timescale - (performance.now() - this.initTime) / 1e3 <= 0 && this.metricsManager.reportLowBuffer(this.streamId), this.stop(), this.probeFinishedCallback())
                    }
                }, {
                    key: "_findDuration", value: function () {
                        var e = 0, t = 0, i = {};
                        for (t = 0; t < this.durations.length; t++) {
                            var n = this.durations[t];
                            i[n] = i[n] > 0 ? i[n] + 1 : 1
                        }
                        var r = 0;
                        for (t in i) if (i[t] > r) {
                            var a = parseInt(t);
                            a > 0 && (e = a, r = i[t])
                        }
                        return e
                    }
                }, {
                    key: "_clearBufCheckInterval", value: function () {
                        this.bufCheckInterval && (clearInterval(this.bufCheckInterval), this.bufCheckInterval = void 0)
                    }
                }, {
                    key: "callbacks", set: function (e) {
                        this.startProbeCallback = e.onStartProbe, this.cancelProbeCallback = e.onCancelProbe, this.initReceivedCallback = e.onInitReceived, this.probeFinishedCallback = e.onProbeFinished
                    }
                }]) && a(i.prototype, n), Object.defineProperty(i, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e, t, n, r, a) {
                    return new i(e, t, n, r, a)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n = a(i(8)), r = a(i(335));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        t.default = function (e) {
            var t = n.default.create(e, "MetricsManager"), i = new r.default(e), a = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.metricsList = {}
                }

                var n, r;
                return n = e, (r = [{
                    key: "add", value: function (e, n, r) {
                        void 0 !== this.metricsList[e] && t.error("metric for track ID " + e + " already exists");
                        var a = i.create(e, n, r);
                        return this.mediaElement && a.setMediaElement(this.mediaElement), this.metricsList[e] = a, a
                    }
                }, {
                    key: "remove", value: function (e) {
                        var i = this.metricsList[e];
                        return i ? i.destroy() : t.error("remove: " + e + " not found"), this.metricsList[e] = void 0, i
                    }
                }, {
                    key: "isReadyToStart", value: function (e) {
                        return this.metricsList[e] && this.metricsList[e].isReady()
                    }
                }, {
                    key: "run", value: function (e) {
                        this.metricsList[e] ? this.metricsList[e].start() : t.warn("run: " + e + " not found")
                    }
                }, {
                    key: "stop", value: function (e) {
                        this.metricsList[e] ? this.metricsList[e].stop() : t.error("stop: no metric found for " + e + " track")
                    }
                }, {
                    key: "reportBandwidth", value: function (e, t, i) {
                        this.metricsList[e] && this.metricsList[e].reportBandwidth(t, i)
                    }
                }, {
                    key: "reportLowBuffer", value: function (e) {
                        this.metricsList[e] ? this.metricsList[e].reportLowBuffer() : t.error("report low buffer: No metric found for " + e + " track")
                    }
                }, {
                    key: "reportBufLevel", value: function (e, i, n) {
                        this.metricsList[e] ? this.metricsList[e].reportBufLevel(i, n) : t.error("report buffer level: No metric found for " + e + " track")
                    }
                }, {
                    key: "setRateAdditive", value: function (e, i) {
                        this.metricsList[e] ? this.metricsList[e].setRateAdditive(i) : t.error("setRateAdditive: No metrics found for " + e + " track")
                    }
                }, {
                    key: "getMetrics", value: function (e) {
                        if (this.metricsList[e]) return this.metricsList[e];
                        t.error("get metric: No metric found for " + e + " track")
                    }
                }, {
                    key: "setMediaElement", value: function (e) {
                        for (var t in this.mediaElement = e, this.metricsList) this.metricsList[t] && this.metricsList[t].setMediaElement(e)
                    }
                }]) && s(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function () {
                    return new a
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(71), i(64), i(0);
        var n = a(i(225)), r = a(i(8));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        t.default = function (e) {
            var t = r.default.create(e, "Metrics"), i = new n.default(e), a = function () {
                function e(t, n, r) {
                    var a, s, o;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), a = this, s = "_interval500msecHandler", o = function () {
                        if (this.isStarted()) {
                            this.timerCounter++;
                            var e, t = performance.now();
                            this._updateRate500msec(t), this.buf500msCnt > 0 && (e = this.buf500msSum / this.buf500msCnt, this.buf500msSum = this.buf500msCnt = 0, this.buf500msec.push(e)), 2 === this.timerCounter && (this._updateBwRate1sec(t), this.buf1secCnt > 0 && (e = this.buf1secSum / this.buf1secCnt, this.buf1secSum = this.buf1secCnt = 0, this.buf1sec.push(e)), this.lb1sec.push(this.lowBuf1sec), this.lowBuf1sec = 0, this.timerCounter = 0)
                        }
                    }.bind(this), s in a ? Object.defineProperty(a, s, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a[s] = o, this.id = t, this.type = n, this.timescale = r, this.pickCustom = !1, this.bytesCustom = 0, this.framesCount = 0, this.bytesTotal = 0, this.bytes1sec = 0, this.lastBytes = 0, this.bytes500msec = 0, this.rate500msec = 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufferLevel = 0, this.bufferEnd = 0, this.bw1sec = i.create(6), this.rate1sec = i.create(6), this.lb1sec = i.create(6), this.buf1sec = i.create(6), this.buf500msec = i.create(6), this.buf1secSum = 0, this.buf1secCnt = 0, this.buf500msSum = 0, this.buf500msCnt = 0, this.timerCounter = 0, this.rateAdditive = 0
                }

                var n, r;
                return n = e, (r = [{
                    key: "clearCounters", value: function () {
                        this.bytesCustom = 0, this.customStart = void 0, this.customEnd = void 0, this.rateCustomTs1 = void 0, this.rateCustomTs2 = void 0, this.stopTime = void 0, this.bwTime1 = void 0, this.bwTime2 = void 0, this.effBwTime1 = void 0, this.lastRepTime = void 0, this.latencySubt = void 0, this.framesCount = 0, this.bytesTotal = 0, this.bytes1sec = 0, this.lastBytes = 0, this.bytes500msec = 0, this.rate500msec = 0, this.rate500msecTs1 = void 0, this.rate500msecTs2 = void 0, this.rate1secTs1 = void 0, this.rate1secTs2 = void 0, this.rateTotalTs1 = void 0, this.rateTotalTs2 = void 0, this.lowBufTotal = 0, this.lowBuf1sec = 0, this.bufferLevel = 0, this.bufferEnd = 0, this.buf1secSum = 0, this.buf1secCnt = 0, this.buf500msSum = 0, this.buf500msCnt = 0, this.timerCounter = 0, this.rateAdditive = 0
                    }
                }, {
                    key: "destroy", value: function () {
                        this._clear500msecInterval(), this.mediaElement = void 0, this.bw1sec.clear(), this.rate1sec.clear(), this.lb1sec.clear(), this.buf1sec.clear(), this.buf500msec.clear()
                    }
                }, {
                    key: "stop", value: function () {
                        this.enabled = !1, this.stopTime = this.lastRepTime, this._clear500msecInterval()
                    }
                }, {
                    key: "start", value: function () {
                        this.enabled || (this.enabled = !0, this.clearCounters(), this.startTime = void 0, this.interval500msec = setInterval(this._interval500msecHandler, 500))
                    }
                }, {
                    key: "isStarted", value: function () {
                        return this.enabled
                    }
                }, {
                    key: "isReady", value: function () {
                        return void 0 === this.enabled
                    }
                }, {
                    key: "startCustom", value: function () {
                        this.pickCustom || (this.pickCustom = !0, this.customStart = void 0, this.customStop = void 0, this.bytesCustom = 0, this.rateCustomTs1 = void 0, this.rateCustomTs2 = void 0)
                    }
                }, {
                    key: "stopCustom", value: function () {
                        this.pickCustom && (this.pickCustom = !1, this.customStop = this.lastRepTime)
                    }
                }, {
                    key: "customRangeBandwidth", value: function () {
                        var e = 0;
                        if (this.customStart) {
                            this.customStart === this.customStop && (this.customStop = performance.now());
                            var t = this.customStop - this.customStart;
                            t > 0 && (e = 1e3 * this.bytesCustom / (128 * t))
                        }
                        return e
                    }
                }, {
                    key: "customRangeRate", value: function () {
                        var e = 0, t = this.rateCustomTs2 - this.rateCustomTs1 + this.rateAdditive;
                        return t > 0 && (e = this.timescale * this.bytesCustom / (128 * t)), e
                    }
                }, {
                    key: "reportBandwidth", value: function (e, t) {
                        if (this.isStarted()) {
                            var i = performance.now();
                            if (void 0 !== t) {
                                var n = i / 1e3 - t / this.timescale;
                                (null == this.latencySubt || n < this.latencySubt) && (this.latencySubt = n), this.framesCount++, void 0 === this.rate500msecTs1 && (this.rate500msecTs1 = t), this.rate500msecTs2 = t, void 0 === this.rate1secTs1 && (this.rate1secTs1 = t), this.rate1secTs2 = t, void 0 === this.rateTotalTs1 && (this.rateTotalTs1 = t), this.rateTotalTs2 = t, void 0 === this.startTime && (this.startTime = i), void 0 === this.bwTime1 && (this.bwTime1 = i, this.effBwTime1 = i), this.bwTime2 = i
                            }
                            this.lastRepTime = i, this.lastBytes = e, this.bytes500msec += e, this.bytes1sec += e, this.bytesTotal += e, this.pickCustom && (void 0 === this.customStart && (this.customStart = i), this.bytesCustom += e, void 0 !== t && (void 0 === this.rateCustomTs1 && (this.rateCustomTs1 = t), this.rateCustomTs2 = t))
                        }
                    }
                }, {
                    key: "reportLowBuffer", value: function () {
                        this.isStarted() && (this.lowBufTotal++, this.lowBuf1sec++)
                    }
                }, {
                    key: "reportBufLevel", value: function (e, t) {
                        this.isStarted() && (e < 0 && (e = 0), this.bufferLevel = e, this.bufferEnd = t, this.buf500msSum += e, this.buf500msCnt += 1, this.buf1secSum += e, this.buf1secCnt += 1)
                    }
                }, {
                    key: "setRateAdditive", value: function (e) {
                        this.rateAdditive = e
                    }
                }, {
                    key: "setMediaElement", value: function (e) {
                        this.mediaElement = e
                    }
                }, {
                    key: "avgBandwidth", value: function (e) {
                        var t, i = 0;
                        (e || (t = void 0 !== this.stopTime ? this.stopTime : this.lastRepTime) === this.startTime) && (t = performance.now());
                        var n = t - this.startTime;
                        return n > 0 && (i = 1e3 * this.bytesTotal / (128 * n)), i
                    }
                }, {
                    key: "avgRate", value: function () {
                        var e = 0, t = this.rateTotalTs2 - this.rateTotalTs1 + this.rateAdditive;
                        return t > 0 && (e = this.timescale * this.bytesTotal / (128 * t)), e
                    }
                }, {
                    key: "curRate1sec", value: function () {
                        var e = 0, t = this.rate1secTs2 - this.rate1secTs1 + this.rateAdditive;
                        return t > 0 && (e = this.timescale * this.bytes1sec / (128 * t)), e
                    }
                }, {
                    key: "curRate500msec", value: function () {
                        var e = 0, t = this.rate500msecTs2 - this.rate500msecTs1 + this.rateAdditive;
                        return t > 0 && (e = this.timescale * this.bytes500msec / (128 * t)), e
                    }
                }, {
                    key: "curBw1sec", value: function () {
                        var e = 0;
                        if (this.bwTime1) {
                            var t = void 0 !== this.stopTime ? this.stopTime : this.bwTime2;
                            t === this.bwTime1 && (t = performance.now());
                            var i = t - this.effBwTime1;
                            i > 0 && (e = 1e3 * this.bytes1sec / (128 * i))
                        }
                        return e
                    }
                }, {
                    key: "latestBandwidth", value: function () {
                        var e = this.curBw1sec();
                        if (this.bw1sec.length() > 0) {
                            var t = this.bw1sec.get(-1);
                            e = 0 === e ? t : (e + t) / 2
                        }
                        return e
                    }
                }, {
                    key: "latestRate", value: function () {
                        var e = this.curRate1sec();
                        if (this.rate1sec.length() > 0) {
                            var t = this.rate1sec.get(-1);
                            e = 0 == e ? t : (e + t) / 2
                        }
                        return e
                    }
                }, {
                    key: "hasLatest500msecBytesArrived", value: function () {
                        return this.bytes500msec > 0 || this.rate500msec > 0
                    }
                }, {
                    key: "latestLowBufferCount", value: function () {
                        for (var e = this.lowBuf1sec, t = 0; t < 2; t++) this.lb1sec.length() > t && (e += this.lb1sec.get(-1 * (t + 1)));
                        return e
                    }
                }, {
                    key: "currentBufLevel", value: function () {
                        if (this.mediaElement) {
                            var e = this.bufferEnd - this.mediaElement.currentTime;
                            return e < 0 && (e = 0), e
                        }
                        return t.error("currentBufLevel: video element is not set"), this.bufferLevel || 0
                    }
                }, {
                    key: "latestBufLevel", value: function () {
                        var e = this.bufferLevel || 0;
                        return this.buf1secCnt > 0 && (e = this.buf1secSum / this.buf1secCnt), e
                    }
                }, {
                    key: "avgBufLevel", value: function () {
                        return this.buf1sec.mean() || this.bufferLevel
                    }
                }, {
                    key: "avg3secBufLevel", value: function () {
                        return this.buf500msec.mean() || this.bufferLevel
                    }
                }, {
                    key: "_updateRate500msec", value: function (e) {
                        this.rate500msec = this.curRate500msec(), void 0 !== this.bwTime2 && e - this.bwTime2 <= 500 ? (this.rate500msecTs1 = this.rate500msecTs2, this.bytes500msec = this.lastBytes) : (this.rate500msecTs1 = void 0, this.bytes500msec = 0), this.rate500msecTs2 = this.rate500msecTs1
                    }
                }, {
                    key: "_updateBwRate1sec", value: function (e) {
                        var t = this.curBw1sec();
                        this.bw1sec.push(t), this.rate1sec.push(this.curRate1sec()), void 0 !== this.bwTime2 && e - this.bwTime2 <= 1e3 ? (this.rate1secTs1 = this.rate1secTs2, this.bwTime1 = this.bwTime2, this.effBwTime1 = this.bwTime2 - 7.8125 * this.lastBytes / t, this.bytes1sec = this.lastBytes) : (this.rate1secTs1 = void 0, this.bwTime1 = void 0, this.effBwTime1 = void 0, this.bytes1sec = 0), this.rate1secTs2 = this.rate1secTs1, this.bwTime2 = this.bwTime1
                    }
                }, {
                    key: "_clear500msecInterval", value: function () {
                        this.interval500msec && (clearInterval(this.interval500msec), this.interval500msec = void 0), this.timerCounter = 0
                    }
                }]) && s(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
            }();
            return {
                create: function (e, t, i) {
                    return new a(e, t, i)
                }
            }
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(337), i(0);
        var n, r = (n = i(8)) && n.__esModule ? n : {default: n};

        function a(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        var s = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.instanceId = t, this.logger = r.default.create(t, "Rendition Provider")
            }

            var t, i;
            return t = e, (i = [{
                key: "init", value: function (e, t, i, n) {
                    this.streams = e, this.renditions = t, this.maxHeight = i.max_height || Number.MAX_VALUE, this.constrained = !!i.size_constrained, this._filterRenditions(n)
                }
            }, {
                key: "getStream", value: function (e) {
                    return this.streams[e]
                }
            }, {
                key: "getStreamsCount", value: function () {
                    return this.streams.length
                }
            }, {
                key: "getRendition", value: function (e) {
                    return e >= this.actualRenditions.length && this.logger.error("Irrelevant rendition = {idx} is requested"), this.renditions[e]
                }
            }, {
                key: "getRenditionName", value: function (e) {
                    return this.getRendition(e).rendition + "p"
                }
            }, {
                key: "getAllRenditions", value: function () {
                    return this.renditions
                }
            }, {
                key: "getActualRenditions", value: function () {
                    return this.actualRenditions
                }
            }, {
                key: "isTopAvailable", value: function (e) {
                    return e >= this.actualRenditions.length - 1
                }
            }, {
                key: "isRenditionActual", value: function (e) {
                    return e < this.actualRenditions.length
                }
            }, {
                key: "onSizeUpdate", value: function (e) {
                    this.constrained && this._filterRenditions(e)
                }
            }, {
                key: "_filterRenditions", value: function (e) {
                    this.actualRenditions = [];
                    for (var t = 0; t < this.renditions.length; t++) {
                        var i = this.streams[this.renditions[t].idx];
                        if (i.stream_info && i.stream_info.height <= this.maxHeight) {
                            if (this.constrained && (i.stream_info.width >= 1.05 * e[0] || i.stream_info.height >= 1.05 * e[1])) break;
                            this.actualRenditions.push(this.renditions[t])
                        }
                    }
                }
            }]) && a(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = s
    }, function (e, t, i) {
        "use strict";
        var n = i(10), r = i(4), a = i(1), s = i(143), o = i(19), u = i(11), c = i(205), l = i(34), h = i(82),
            f = i(138), d = i(3), p = i(87).f, v = i(73).f, m = i(14).f, g = i(215), y = i(129).trim, _ = r.Number,
            b = _.prototype, A = r.TypeError, w = a("".slice), S = a("".charCodeAt), k = function (e) {
                var t, i, n, r, a, s, o, u, c = f(e, "number");
                if (h(c)) throw A("Cannot convert a Symbol value to a number");
                if ("string" == typeof c && c.length > 2) if (c = y(c), 43 === (t = S(c, 0)) || 45 === t) {
                    if (88 === (i = S(c, 2)) || 120 === i) return NaN
                } else if (48 === t) {
                    switch (S(c, 1)) {
                        case 66:
                        case 98:
                            n = 2, r = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8, r = 55;
                            break;
                        default:
                            return +c
                    }
                    for (s = (a = w(c, 2)).length, o = 0; o < s; o++) if ((u = S(a, o)) < 48 || u > r) return NaN;
                    return parseInt(a, n)
                }
                return +c
            };
        if (s("Number", !_(" 0o1") || !_("0b1") || _("+0x1"))) {
            for (var C, T = function (e) {
                var t = arguments.length < 1 ? 0 : _(function (e) {
                    var t = f(e, "number");
                    return "bigint" == typeof t ? t : k(t)
                }(e)), i = this;
                return l(b, i) && d((function () {
                    g(i)
                })) ? c(Object(t), i, T) : t
            }, x = n ? p(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), P = 0; x.length > P; P++) u(_, C = x[P]) && !u(T, C) && m(T, C, v(_, C));
            T.prototype = b, b.constructor = T, o(r, "Number", T, {constructor: !0})
        }
    }, function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var n = i(23), r = a(i(339));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        a(i(8));
        var o = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }

            var t, i;
            return t = e, (i = [{
                key: "setMediaElement", value: function (e) {
                    this._mediaElement = e
                }
            }, {
                key: "setRate", value: function (e) {
                    e >= 0 ? (this._rate = e, e > 0 && (this._ival = 1e3 / e, this._maxi = Math.max(1e3, 2 * this._ival), this._strt = void 0)) : this._rate = -1
                }
            }, {
                key: "onScreenshotReady", value: function (e) {
                    this._onScreenshotReadyCallback = e
                }
            }, {
                key: "_onScreenshotReady", value: function (e, t) {
                    this._onScreenshotReadyCallback && this._onScreenshotReadyCallback(e, Math.round(1e3 * t))
                }
            }, {
                key: "start", value: function () {
                    this._enabled || (this._enabled = !0, this._init(), this._requestNextFrame())
                }
            }, {
                key: "stop", value: function () {
                    this._enabled && (this._enabled = !1, this._strt = void 0, this._deinit())
                }
            }, {
                key: "_deinit", value: function () {
                    this._handleBitmap && (this._handleBitmap = void 0, this._worker ? (this._worker.onmessage = void 0, this._worker = void 0) : (this._canvas = void 0, this._canvasCtx = void 0))
                }
            }, {
                key: "_init", value: function () {
                    if (!this._handleBitmap) if ("OffscreenCanvas" in window) {
                        var e = this;
                        this._worker = new r.default, this._worker.onmessage = function (t) {
                            e._onScreenshotReady(t.data.data, t.data.pts)
                        }, this._handleBitmap = this._handleBitmapWithWorker
                    } else this._handleBitmap = this._handleBitmapWithCanvas, this._canvas = document.createElement("canvas"), this._canvasCtx = this._canvas.getContext("2d", {willReadFrequently: !0})
                }
            }, {
                key: "_handleFrame", value: function (e) {
                    if (!(0 === this._rate || e.presentedFrames <= 1)) {
                        var t = this._rate < 0;
                        if (!t) {
                            var i = performance.now();
                            if (void 0 === this._strt) this._strt = i, t = !0; else {
                                var n = i - this._strt;
                                n > this._maxi ? (this._strt = i - this._ival, t = !0) : n >= this._ival && (this._strt += this._ival, t = !0)
                            }
                        }
                        if (t) {
                            var r = this, a = e.mediaTime;
                            createImageBitmap(this._mediaElement).then((function (e) {
                                r._handleBitmap && r._handleBitmap(e, a)
                            }))
                        }
                    }
                }
            }, {
                key: "_handleBitmapWithWorker", value: function (e, t) {
                    this._worker.postMessage({bmp: e, pts: t}, [e])
                }
            }, {
                key: "_handleBitmapWithCanvas", value: function (e, t) {
                    this._canvas.width = e.width, this._canvas.height = e.height, this._canvasCtx.drawImage(e, 0, 0), this._onScreenshotReady(this._canvasCtx.getImageData(0, 0, e.width, e.height), t), e.close()
                }
            }, {
                key: "_requestNextFrame", value: function () {
                    if (this._enabled && this._mediaElement) {
                        var e = this;
                        this._mediaElement.requestVideoFrameCallback((function (t, i) {
                            e._handleFrame(i), e._requestNextFrame()
                        }))
                    }
                }
            }]) && s(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), u = (0, n.multiInstanceHolder)(o);
        t.default = u
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            return (0, r.default)('!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=null,r=null;addEventListener("message",e=>{const t=e.data.bmp;null===n?(n=new OffscreenCanvas(t.width,t.height),r=n.getContext("2d",{willReadFrequently:!0})):(n.width=t.width,n.height=t.height),r.drawImage(t,0,0),postMessage({data:r.getImageData(0,0,t.width,t.height),pts:e.data.pts}),t.close()})}]);', "Worker", void 0, void 0)
        };
        var n, r = (n = i(340)) && n.__esModule ? n : {default: n}
    }, function (e, t, i) {
        "use strict";
        e.exports = function (e, t, i, n) {
            var r = self || window;
            try {
                try {
                    var a;
                    try {
                        a = new r.Blob([e])
                    } catch (t) {
                        (a = new (r.BlobBuilder || r.WebKitBlobBuilder || r.MozBlobBuilder || r.MSBlobBuilder)).append(e), a = a.getBlob()
                    }
                    var s = r.URL || r.webkitURL, o = s.createObjectURL(a), u = new r[t](o, i);
                    return s.revokeObjectURL(o), u
                } catch (n) {
                    return new r[t]("data:application/javascript,".concat(encodeURIComponent(e)), i)
                }
            } catch (e) {
                if (!n) throw Error("Inline worker is not supported");
                return new r[t](n, i)
            }
        }
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = a(i(342)), r = a(i(346));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = function (e) {
            return {
                create: function (t) {
                    var i;
                    switch (t.mode) {
                        case"peak":
                        case"rms":
                        case"avg":
                            var a = !1;
                            window.isSecureContext && (a = void 0 !== window.AudioWorkletNode && "audioworklet" === t.api.toLowerCase()), i = a ? new r.default(t, e) : new n.default(t, e)
                    }
                    return i
                }
            }
        }
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(16), i(235), i(104), i(0), i(78), i(79), i(80), i(15), i(31), i(32), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(106), i(71), i(105);
        var r, a = (r = i(236)) && r.__esModule ? r : {default: r};

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function o(e, t) {
            return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function u(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var i, r = c(e);
                if (t) {
                    var a = c(this).constructor;
                    i = Reflect.construct(r, arguments, a)
                } else i = r.apply(this, arguments);
                return function (e, t) {
                    if (t && ("object" === n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, i)
            }
        }

        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var l = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && o(e, t)
            }(r, a.default);
            var t, i, n = u(r);

            function r(e, t) {
                var i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), (i = n.call(this, e.db_range, e.rate, t)).mode = e.mode, i.type = e.type, i.calcChannelValueFor = {
                    peak: i._calcChannelValuePeak,
                    avg: i._calcChannelValueAvg,
                    rms: i._calcChannelValueRms
                }[i.mode], i.channelData = [], i.logger.debug("ScriptProcessor VU meter constructor: ", i.mode, i.type, i.dbRange, i.rate), i
            }

            return t = r, (i = [{
                key: "setVolume", value: function (e) {
                    if (this.gainer) {
                        var t = this.context.currentTime;
                        this.gainer.gain.setValueAtTime(e, t)
                    } else this.suspended && (this.logger.debug("Setup suspended VU meter"), this._setupMeter(), this.onActivated && this.isActivated() && (this.onActivated(), this.onActivated = void 0))
                }
            }, {
                key: "_createMeter", value: function () {
                    var e = this;
                    void 0 === this.meter && (this.logger.debug("Create ScriptProcessor meter"), this._initValues(), this.meter = this.context.createScriptProcessor(this.bufSize, this.channels, this.channels), "input" === this.type ? (this.gainer = this.context.createGain(), this.gainer.gain.value = 1, this.meter.connect(this.gainer), this.audGraphCtrl.addVumeterChain([this.meter, this.gainer], [this.gainer])) : this.audGraphCtrl.addVumeterChain([this.meter, "dest"], [this.meter]), this.meter.onaudioprocess = function (t) {
                        return e._updateMeter(t)
                    })
                }
            }, {
                key: "_removeMeter", value: function () {
                    if (this.meter) {
                        this.logger.debug("Remove meter");
                        try {
                            this.audGraphCtrl.removeVumeterChain(), "input" === this.type && (this.meter.disconnect(this.gainer), this.gainer = void 0), this.meter.onaudioprocess = void 0, this.meter = void 0
                        } catch (e) {
                            this.gainer = void 0, this.meter = void 0, this.logger.warn("Exception caught: ", e)
                        }
                    }
                }
            }, {
                key: "_gcd", value: function (e, t) {
                    return t ? this._gcd(t, e % t) : e
                }
            }, {
                key: "_setupRateControl", value: function () {
                    if (!this.rateControl) {
                        var e = {}, t = this._gcd(this.samplingRate, this.bufSize);
                        if (this.rate < t / this.bufSize) {
                            t = this.rate * this.bufSize;
                            for (var i = 0; t >>= 1;) i++;
                            t = Math.pow(2, i)
                        }
                        var n = this.bufSize / t;
                        e.max = this.samplingRate / t, e.exp = n * this.rate + .5 >>> 0, e.exp >= e.max ? e = !1 : (e.add = e.max / e.exp, e.tgt = e.cur = 0, e.cnt = -2), this.rateControl = e
                    }
                }
            }, {
                key: "_calcChannelValueAvg", value: function (e) {
                    for (var t = this.channelData[e].length, i = 0; i < t; i++) this.channelValues[e] += Math.abs(this.channelData[e][i]);
                    this.channelValues[e] /= t
                }
            }, {
                key: "_calcChannelValueRms", value: function (e) {
                    for (var t = this.channelData[e].length, i = 0; i < t; i++) this.channelValues[e] += this.channelData[e][i] * this.channelData[e][i];
                    this.channelValues[e] = Math.sqrt(this.channelValues[e] / t)
                }
            }, {
                key: "_calcChannelValuePeak", value: function (e) {
                    for (var t = this.channelData[e].length, i = 0; i < t; i++) {
                        var n = Math.abs(this.channelData[e][i]);
                        n > this.channelValues[e] && (this.channelValues[e] = n)
                    }
                }
            }, {
                key: "_updateMeter", value: function (e) {
                    if (this.rateControl) {
                        var t = this.rateControl;
                        if (t.cnt++, t.tgt !== t.cnt) return;
                        t.cur + .1 >= t.max ? (t.cur = t.add, t.tgt = t.add >>> 0, t.cnt = 0) : (t.cur += t.add, t.tgt = t.cur >>> 0)
                    }
                    var i = e.inputBuffer;
                    this.channelData.length = 0;
                    for (var n = 0; n < this.channels; n++) this.channelData[n] = i.getChannelData(n), this.channelValues[n] = 0, this.calcChannelValueFor(n), this.channelDecibels[n] = this._dbFromVal(this.channelValues[n]);
                    this.ui && this.ui.update(this.channelDecibels), this.callback && this.callback(this.channelValues, this.channelDecibels)
                }
            }]) && s(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), r
        }();
        t.default = l
    }, function (e, t, i) {
        i(2)({target: "Math", stat: !0}, {log10: i(344)})
    }, function (e, t) {
        var i = Math.log, n = Math.LOG10E;
        e.exports = Math.log10 || function (e) {
            return i(e) * n
        }
    }, function (e, t, i) {
        "use strict";

        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(72), i(0);
        var r = function () {
            function e(t, i) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t, this.vertical = !0, this.borderSize = 2, this.fontSize = 10, this.backgroundColor = "black", this.tickColor = "#ddd", this.gradient = ["red 1%", "#ff0 16%", "lime 45%", "#080 100%"], this.dbRange = i, this.dbTickSize = 10, this.levelTransition = "0.1s", this._createBasicView()
            }

            var t, i;
            return t = e, (i = [{
                key: "create", value: function (e) {
                    if (!this.fullValue) {
                        void 0 === this.meter && this._createBasicView(), this.channels = e, this._createGradient();
                        var t = this.meterWidth / this.channels;
                        this.vertical || (t = this.meterHeight / this.channels);
                        var i = this.tickWidth;
                        this.vertical || (i = this.meterTop);
                        for (var n = 0; n < this.channels; n++) this._createChannelLevel(2 * this.borderSize, this.meterTop, i, !1), this.channelLevels[n] = this._createChannelLevel(t, this.meterTop, i, this.levelTransition), i += t, this.levelValues[n] = this._calcLevel(-this.dbRange);
                        this.fullValue = !0, this._drawMeter()
                    }
                }
            }, {
                key: "refresh", value: function (e) {
                    if (this.container.clientWidth !== this.elementWidth || this.container.clientHeight !== this.elementHeight) {
                        var t = this.fullValue;
                        this.destroy(!0), t ? this.create(e) : this._createBasicView()
                    }
                }
            }, {
                key: "destroy", value: function (e) {
                    if (this.meter) {
                        if (this.fullValue) {
                            for (var t = 0; t < this.fullValueItems.length; t++) this.meter.removeChild(this.fullValueItems[t]);
                            this.fullValueItems = [], this.channelLevels = [], this.fullValue = !1
                        }
                        e && (this.container.removeChild(this.meter), this.meter = void 0)
                    }
                }
            }, {
                key: "update", value: function (e) {
                    if (this.meter) for (var t = 0; t < this.channels; t++) this.levelValues[t] = this._calcLevel(e[t])
                }
            }, {
                key: "_calcLevel", value: function (e) {
                    var t = this.vertical ? this.meterHeight : this.meterWidth, i = Math.floor(e * t / -this.dbRange);
                    return i < 0 ? i = 0 : i > t && (i = t), i
                }
            }, {
                key: "_setParams", value: function () {
                    this.tickWidth = 2 * this.fontSize, this.elementWidth = this.container.clientWidth, this.elementHeight = this.container.clientHeight, this.elementWidth > this.elementHeight && (this.vertical = !1), this.meterTop = this.vertical ? this.borderSize : 1.5 * this.fontSize + this.borderSize, this.meterHeight = this.elementHeight - this.meterTop - this.borderSize, this.meterWidth = this.elementWidth - this.tickWidth - this.borderSize, this.fullValueItems = [], this.channelLevels = [], this.levelValues = []
                }
            }, {
                key: "_createBasicView", value: function () {
                    this._setParams(), this._createMeterDiv(), this._createTicks(), this.fullValue = !1
                }
            }, {
                key: "_removePlaceholder", value: function () {
                    this.placeholder && (this.container.removeChild(this.meter), this.meter = void 0, this.placeholder = !1)
                }
            }, {
                key: "_createMeterDiv", value: function () {
                    this.meter = document.createElement("div"), this.meter.style.position = "relative", this.meter.style.width = this.elementWidth + "px", this.meter.style.height = this.elementHeight + "px", this.meter.style.backgroundColor = this.backgroundColor, this.container.appendChild(this.meter)
                }
            }, {
                key: "_createTicks", value: function () {
                    var e = this.dbRange / this.dbTickSize >>> 0, t = 0;
                    if (this.vertical) for (var i = this.fontSize + this.borderSize, n = 0; n < e; n++) {
                        var r = document.createElement("div");
                        this.meter.appendChild(r), r.style.width = this.tickWidth + "px", r.style.textAlign = "right", r.style.color = this.tickColor, r.style.fontSize = this.fontSize + "px", r.style.position = "absolute", r.style.top = i + "px", r.textContent = t + "", t -= this.dbTickSize, i += this.meterHeight / e
                    } else {
                        this.tickWidth = this.meterWidth / e;
                        for (var a = 2 * this.fontSize, s = 0; s < e; s++) {
                            var o = document.createElement("div");
                            this.meter.appendChild(o), o.style.width = this.tickWidth + "px", o.style.textAlign = "right", o.style.color = this.tickColor, o.style.fontSize = this.fontSize + "px", o.style.position = "absolute", o.style.top = "5px", o.style.right = a + "px", o.textContent = t + "", t -= this.dbTickSize, a += this.tickWidth
                        }
                    }
                }
            }, {
                key: "_createGradient", value: function () {
                    var e, t = document.createElement("div");
                    this.meter.appendChild(t), t.style.width = this.meterWidth + "px", t.style.height = this.meterHeight + "px", t.style.position = "absolute", t.style.top = this.meterTop + "px", this.vertical ? (t.style.left = this.tickWidth + "px", e = "linear-gradient(to bottom, " + this.gradient.join(", ") + ")") : (t.style.left = this.borderSize + "px", e = "linear-gradient(to left, " + this.gradient.join(", ") + ")"), t.style.backgroundImage = e, this.fullValueItems.push(t)
                }
            }, {
                key: "_createChannelLevel", value: function (e, t, i, n) {
                    var r = document.createElement("div");
                    return this.meter.appendChild(r), r.style.position = "absolute", this.vertical ? (r.style.width = e + "px", r.style.height = this.meterHeight + "px", r.style.top = t + "px", r.style.left = i + "px") : (r.style.width = this.meterWidth + "px", r.style.height = e + "px", r.style.top = i + "px", r.style.right = 2 * this.fontSize + "px"), r.style.backgroundColor = this.backgroundColor, n && (this.vertical ? r.style.transition = "height " + this.levelTransition : r.style.transition = "width " + this.levelTransition), this.fullValueItems.push(r), r
                }
            }, {
                key: "_drawMeter", value: function () {
                    var e = this;
                    if (this.fullValue) {
                        for (var t = 0; t < this.channels; t++) this.vertical ? this.channelLevels[t].style.height = this.levelValues[t] + "px" : this.channelLevels[t].style.width = this.levelValues[t] + "px";
                        window.requestAnimationFrame((function () {
                            return e._drawMeter()
                        }))
                    }
                }
            }]) && n(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();
        t.default = r
    }, function (e, t, i) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        i(106), i(71), i(105), i(16), i(235), i(104), i(78), i(79), i(80), i(15), i(31), i(32), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0, i(0);
        var r = o(i(110)), a = o(i(236)), s = o(i(347));

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function c(e, t) {
            return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function l(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var i, r = f(e);
                if (t) {
                    var a = f(this).constructor;
                    i = Reflect.construct(r, arguments, a)
                } else i = r.apply(this, arguments);
                return function (e, t) {
                    if (t && ("object" === n(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return h(e)
                }(this, i)
            }
        }

        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function d(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        var p = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && c(e, t)
            }(o, a.default);
            var t, i, n = l(o);

            function o(e, t) {
                var i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), d(h(i = n.call(this, e.db_range, e.rate, t)), "_onWorkletModuleAdded", (function () {
                    i.logger.debug("AudioWorlet module loaded", i.procUrl), i.meter = new AudioWorkletNode(i.context, "vu-audio-processor", {
                        processorOptions: {
                            channels: i.channels,
                            dbRange: i.dbRange,
                            dbMult: i.dbMult,
                            mode: i.mode
                        }
                    }), i.meter.port.postMessage({cmd: "init"}), "input" === i.type ? (i.gainer = i.context.createGain(), i.gainer.gain.value = void 0 !== i.curVolume ? i.curVolume : 1, i.meter.connect(i.gainer), i.audGraphCtrl.addVumeterChain([i.meter], [i.gainer])) : i.audGraphCtrl.addVumeterChain([i.meter], [i.meter]), i._setupRateControl(), i.meter.port.onmessage = function (e) {
                        return i._updateMeter(e)
                    }
                })), d(h(i), "_onWorkletModuleNotFound", (function (e) {
                    i.procUrl === s.default ? i._onWorkletModuleError(e) : i.context.audioWorklet.addModule(s.default).then(i._onWorkletModuleAdded).catch(i._onWorkletModuleError)
                })), d(h(i), "_onWorkletModuleError", (function (e) {
                    i.logger.error(i._spProvider.notAvailableError("AudioWorkletProcessor", s.default)), i.stop(!0), i.context = void 0, i.fatalErrorCallback && i.fatalErrorCallback()
                })), i.mode = e.mode, i.type = e.type, i._spProvider = r.default.getInstance(t), i.logger.debug("AudioWorklet VU meter constructor: ", i.mode, i.type, i.dbRange, i.rate), i
            }

            return t = o, (i = [{
                key: "setVolume", value: function (e) {
                    this.curVolume = e, this.gainer ? this.gainer.gain.setValueAtTime(e, this.context.currentTime) : this.suspended && (this.logger.debug("Setup suspended VU meter"), this._setupMeter(), this.onActivated && this.isActivated() && (this.onActivated(), this.onActivated = void 0))
                }
            }, {
                key: "_createMeter", value: function () {
                    void 0 === this.meter && (this.logger.debug("Create AudioWorklet meter"), this._initValues(), this.procUrl = this._spProvider.translateToScriptPath(s.default), this.context.audioWorklet.addModule(this.procUrl).then(this._onWorkletModuleAdded).catch(this._onWorkletModuleNotFound))
                }
            }, {
                key: "_removeMeter", value: function () {
                    if (this.meter) {
                        this.logger.debug("Remove meter");
                        try {
                            this.meter.port.postMessage({cmd: "stop"}), this.audGraphCtrl.removeVumeterChain(), "input" === this.type && (this.meter.disconnect(this.gainer), this.gainer = void 0), this.meter = void 0, this.curVolume = void 0
                        } catch (e) {
                            this.curVolume = void 0, this.gainer = void 0, this.meter = void 0, this.logger.warn("Exception caught: ", e)
                        }
                    }
                }
            }, {
                key: "_setupRateControl", value: function () {
                    this.meter && this.meter.port.postMessage({cmd: "rate", rate: this.rate, sRate: this.samplingRate})
                }
            }, {
                key: "_updateMeter", value: function (e) {
                    for (var t = 0; t < this.channels; t++) this.channelValues[t] = e.data[0][t], this.channelDecibels[t] = e.data[1][t];
                    this.ui && this.ui.update(this.channelDecibels), this.callback && this.callback(this.channelValues, this.channelDecibels)
                }
            }]) && u(t.prototype, i), Object.defineProperty(t, "prototype", {writable: !1}), o
        }();
        t.default = p
    }, function (e, t, i) {
        "use strict";
        e.exports = i.p + "vumeter-v2.24.0.worklet.min.js"
    }, function (e, t, i) {
        "use strict";
        i(221), i(89), !("requestVideoFrameCallback" in HTMLVideoElement.prototype) && "getVideoPlaybackQuality" in HTMLVideoElement.prototype && (HTMLVideoElement.prototype._rvfcpolyfillmap = {}, HTMLVideoElement.prototype.requestVideoFrameCallback = function (e) {
            var t = this, i = this.getVideoPlaybackQuality(),
                n = this.mozPresentedFrames || this.mozPaintedFrames || i.totalVideoFrames - i.droppedVideoFrames,
                r = Date.now(), a = performance.now();
            return this._rvfcpolyfillmap[r] = requestAnimationFrame((function (i) {
                return function i(a, s) {
                    var o = t.getVideoPlaybackQuality(),
                        u = t.mozPresentedFrames || t.mozPaintedFrames || o.totalVideoFrames - o.droppedVideoFrames;
                    if (u > n) {
                        var c = s - a;
                        e(s, {
                            mediaTime: Math.max(0, t.currentTime || 0) + c / 1e3,
                            presentedFrames: u
                        }), delete t._rvfcpolyfillmap[r]
                    } else t._rvfcpolyfillmap[r] = requestAnimationFrame((function (e) {
                        return i(s, e)
                    }))
                }(a, i)
            })), r
        }, HTMLVideoElement.prototype.cancelVideoFrameCallback = function (e) {
            cancelAnimationFrame(this._rvfcpolyfillmap[e]), delete this._rvfcpolyfillmap[e]
        })
    }, function (e, t, i) {
        "use strict";
        i(0), Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var n = a(i(227)), r = a(i(233));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = {
            name: "SLDP Player",
            composer: new n.default("test").create({}),
            WSUtils: new r.default("test").create()
        };
        t.default = s
    }])
}));
