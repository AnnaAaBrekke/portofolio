(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) e(u);
  new MutationObserver((u) => {
    for (const n of u)
      if (n.type === "childList")
        for (const i of n.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && e(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(u) {
    const n = {};
    return (
      u.integrity && (n.integrity = u.integrity),
      u.referrerPolicy && (n.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function e(u) {
    if (u.ep) return;
    u.ep = !0;
    const n = a(u);
    fetch(u.href, n);
  }
})();
function Ls(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var Ks = { exports: {} },
  yn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $1 = Symbol.for("react.transitional.element"),
  W1 = Symbol.for("react.fragment");
function Js(l, t, a) {
  var e = null;
  if (
    (a !== void 0 && (e = "" + a),
    t.key !== void 0 && (e = "" + t.key),
    "key" in t)
  ) {
    a = {};
    for (var u in t) u !== "key" && (a[u] = t[u]);
  } else a = t;
  return (
    (t = a.ref),
    { $$typeof: $1, type: l, key: e, ref: t !== void 0 ? t : null, props: a }
  );
}
yn.Fragment = W1;
yn.jsx = Js;
yn.jsxs = Js;
Ks.exports = yn;
var S = Ks.exports,
  ws = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hc = Symbol.for("react.transitional.element"),
  F1 = Symbol.for("react.portal"),
  P1 = Symbol.for("react.fragment"),
  I1 = Symbol.for("react.strict_mode"),
  ld = Symbol.for("react.profiler"),
  td = Symbol.for("react.consumer"),
  ad = Symbol.for("react.context"),
  ed = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  nd = Symbol.for("react.memo"),
  ks = Symbol.for("react.lazy"),
  mf = Symbol.iterator;
function id(l) {
  return l === null || typeof l != "object"
    ? null
    : ((l = (mf && l[mf]) || l["@@iterator"]),
      typeof l == "function" ? l : null);
}
var $s = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ws = Object.assign,
  Fs = {};
function $a(l, t, a) {
  (this.props = l),
    (this.context = t),
    (this.refs = Fs),
    (this.updater = a || $s);
}
$a.prototype.isReactComponent = {};
$a.prototype.setState = function (l, t) {
  if (typeof l != "object" && typeof l != "function" && l != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, l, t, "setState");
};
$a.prototype.forceUpdate = function (l) {
  this.updater.enqueueForceUpdate(this, l, "forceUpdate");
};
function Ps() {}
Ps.prototype = $a.prototype;
function mc(l, t, a) {
  (this.props = l),
    (this.context = t),
    (this.refs = Fs),
    (this.updater = a || $s);
}
var vc = (mc.prototype = new Ps());
vc.constructor = mc;
Ws(vc, $a.prototype);
vc.isPureReactComponent = !0;
var vf = Array.isArray,
  w = { H: null, A: null, T: null, S: null, V: null },
  Is = Object.prototype.hasOwnProperty;
function yc(l, t, a, e, u, n) {
  return (
    (a = n.ref),
    { $$typeof: hc, type: l, key: t, ref: a !== void 0 ? a : null, props: n }
  );
}
function cd(l, t) {
  return yc(l.type, t, void 0, void 0, void 0, l.props);
}
function gc(l) {
  return typeof l == "object" && l !== null && l.$$typeof === hc;
}
function fd(l) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    l.replace(/[=:]/g, function (a) {
      return t[a];
    })
  );
}
var yf = /\/+/g;
function qn(l, t) {
  return typeof l == "object" && l !== null && l.key != null
    ? fd("" + l.key)
    : t.toString(36);
}
function gf() {}
function sd(l) {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      switch (
        (typeof l.status == "string"
          ? l.then(gf, gf)
          : ((l.status = "pending"),
            l.then(
              function (t) {
                l.status === "pending" &&
                  ((l.status = "fulfilled"), (l.value = t));
              },
              function (t) {
                l.status === "pending" &&
                  ((l.status = "rejected"), (l.reason = t));
              }
            )),
        l.status)
      ) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
      }
  }
  throw l;
}
function ma(l, t, a, e, u) {
  var n = typeof l;
  (n === "undefined" || n === "boolean") && (l = null);
  var i = !1;
  if (l === null) i = !0;
  else
    switch (n) {
      case "bigint":
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (l.$$typeof) {
          case hc:
          case F1:
            i = !0;
            break;
          case ks:
            return (i = l._init), ma(i(l._payload), t, a, e, u);
        }
    }
  if (i)
    return (
      (u = u(l)),
      (i = e === "" ? "." + qn(l, 0) : e),
      vf(u)
        ? ((a = ""),
          i != null && (a = i.replace(yf, "$&/") + "/"),
          ma(u, t, a, "", function (d) {
            return d;
          }))
        : u != null &&
          (gc(u) &&
            (u = cd(
              u,
              a +
                (u.key == null || (l && l.key === u.key)
                  ? ""
                  : ("" + u.key).replace(yf, "$&/") + "/") +
                i
            )),
          t.push(u)),
      1
    );
  i = 0;
  var c = e === "" ? "." : e + ":";
  if (vf(l))
    for (var f = 0; f < l.length; f++)
      (e = l[f]), (n = c + qn(e, f)), (i += ma(e, t, a, n, u));
  else if (((f = id(l)), typeof f == "function"))
    for (l = f.call(l), f = 0; !(e = l.next()).done; )
      (e = e.value), (n = c + qn(e, f++)), (i += ma(e, t, a, n, u));
  else if (n === "object") {
    if (typeof l.then == "function") return ma(sd(l), t, a, e, u);
    throw (
      ((t = String(l)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(l).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  }
  return i;
}
function fu(l, t, a) {
  if (l == null) return l;
  var e = [],
    u = 0;
  return (
    ma(l, e, "", "", function (n) {
      return t.call(a, n, u++);
    }),
    e
  );
}
function od(l) {
  if (l._status === -1) {
    var t = l._result;
    (t = t()),
      t.then(
        function (a) {
          (l._status === 0 || l._status === -1) &&
            ((l._status = 1), (l._result = a));
        },
        function (a) {
          (l._status === 0 || l._status === -1) &&
            ((l._status = 2), (l._result = a));
        }
      ),
      l._status === -1 && ((l._status = 0), (l._result = t));
  }
  if (l._status === 1) return l._result.default;
  throw l._result;
}
var bf =
  typeof reportError == "function"
    ? reportError
    : function (l) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof l == "object" && l !== null && typeof l.message == "string"
                ? String(l.message)
                : String(l),
            error: l,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", l);
          return;
        }
        console.error(l);
      };
function dd() {}
M.Children = {
  map: fu,
  forEach: function (l, t, a) {
    fu(
      l,
      function () {
        t.apply(this, arguments);
      },
      a
    );
  },
  count: function (l) {
    var t = 0;
    return (
      fu(l, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (l) {
    return (
      fu(l, function (t) {
        return t;
      }) || []
    );
  },
  only: function (l) {
    if (!gc(l))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return l;
  },
};
M.Component = $a;
M.Fragment = P1;
M.Profiler = ld;
M.PureComponent = mc;
M.StrictMode = I1;
M.Suspense = ud;
M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w;
M.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (l) {
    return w.H.useMemoCache(l);
  },
};
M.cache = function (l) {
  return function () {
    return l.apply(null, arguments);
  };
};
M.cloneElement = function (l, t, a) {
  if (l == null)
    throw Error(
      "The argument must be a React element, but you passed " + l + "."
    );
  var e = Ws({}, l.props),
    u = l.key,
    n = void 0;
  if (t != null)
    for (i in (t.ref !== void 0 && (n = void 0),
    t.key !== void 0 && (u = "" + t.key),
    t))
      !Is.call(t, i) ||
        i === "key" ||
        i === "__self" ||
        i === "__source" ||
        (i === "ref" && t.ref === void 0) ||
        (e[i] = t[i]);
  var i = arguments.length - 2;
  if (i === 1) e.children = a;
  else if (1 < i) {
    for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2];
    e.children = c;
  }
  return yc(l.type, u, void 0, void 0, n, e);
};
M.createContext = function (l) {
  return (
    (l = {
      $$typeof: ad,
      _currentValue: l,
      _currentValue2: l,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (l.Provider = l),
    (l.Consumer = { $$typeof: td, _context: l }),
    l
  );
};
M.createElement = function (l, t, a) {
  var e,
    u = {},
    n = null;
  if (t != null)
    for (e in (t.key !== void 0 && (n = "" + t.key), t))
      Is.call(t, e) &&
        e !== "key" &&
        e !== "__self" &&
        e !== "__source" &&
        (u[e] = t[e]);
  var i = arguments.length - 2;
  if (i === 1) u.children = a;
  else if (1 < i) {
    for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2];
    u.children = c;
  }
  if (l && l.defaultProps)
    for (e in ((i = l.defaultProps), i)) u[e] === void 0 && (u[e] = i[e]);
  return yc(l, n, void 0, void 0, null, u);
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (l) {
  return { $$typeof: ed, render: l };
};
M.isValidElement = gc;
M.lazy = function (l) {
  return { $$typeof: ks, _payload: { _status: -1, _result: l }, _init: od };
};
M.memo = function (l, t) {
  return { $$typeof: nd, type: l, compare: t === void 0 ? null : t };
};
M.startTransition = function (l) {
  var t = w.T,
    a = {};
  w.T = a;
  try {
    var e = l(),
      u = w.S;
    u !== null && u(a, e),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        e.then(dd, bf);
  } catch (n) {
    bf(n);
  } finally {
    w.T = t;
  }
};
M.unstable_useCacheRefresh = function () {
  return w.H.useCacheRefresh();
};
M.use = function (l) {
  return w.H.use(l);
};
M.useActionState = function (l, t, a) {
  return w.H.useActionState(l, t, a);
};
M.useCallback = function (l, t) {
  return w.H.useCallback(l, t);
};
M.useContext = function (l) {
  return w.H.useContext(l);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (l, t) {
  return w.H.useDeferredValue(l, t);
};
M.useEffect = function (l, t, a) {
  var e = w.H;
  if (typeof a == "function")
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return e.useEffect(l, t);
};
M.useId = function () {
  return w.H.useId();
};
M.useImperativeHandle = function (l, t, a) {
  return w.H.useImperativeHandle(l, t, a);
};
M.useInsertionEffect = function (l, t) {
  return w.H.useInsertionEffect(l, t);
};
M.useLayoutEffect = function (l, t) {
  return w.H.useLayoutEffect(l, t);
};
M.useMemo = function (l, t) {
  return w.H.useMemo(l, t);
};
M.useOptimistic = function (l, t) {
  return w.H.useOptimistic(l, t);
};
M.useReducer = function (l, t, a) {
  return w.H.useReducer(l, t, a);
};
M.useRef = function (l) {
  return w.H.useRef(l);
};
M.useState = function (l) {
  return w.H.useState(l);
};
M.useSyncExternalStore = function (l, t, a) {
  return w.H.useSyncExternalStore(l, t, a);
};
M.useTransition = function () {
  return w.H.useTransition();
};
M.version = "19.1.0";
ws.exports = M;
var gn = ws.exports;
const Ut = Ls(gn);
var lo = { exports: {} },
  bn = {},
  to = { exports: {} },
  ao = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (l) {
  function t(A, U) {
    var N = A.length;
    A.push(U);
    l: for (; 0 < N; ) {
      var I = (N - 1) >>> 1,
        cl = A[I];
      if (0 < u(cl, U)) (A[I] = U), (A[N] = cl), (N = I);
      else break l;
    }
  }
  function a(A) {
    return A.length === 0 ? null : A[0];
  }
  function e(A) {
    if (A.length === 0) return null;
    var U = A[0],
      N = A.pop();
    if (N !== U) {
      A[0] = N;
      l: for (var I = 0, cl = A.length, nu = cl >>> 1; I < nu; ) {
        var iu = 2 * (I + 1) - 1,
          Yn = A[iu],
          Jt = iu + 1,
          cu = A[Jt];
        if (0 > u(Yn, N))
          Jt < cl && 0 > u(cu, Yn)
            ? ((A[I] = cu), (A[Jt] = N), (I = Jt))
            : ((A[I] = Yn), (A[iu] = N), (I = iu));
        else if (Jt < cl && 0 > u(cu, N)) (A[I] = cu), (A[Jt] = N), (I = Jt);
        else break l;
      }
    }
    return U;
  }
  function u(A, U) {
    var N = A.sortIndex - U.sortIndex;
    return N !== 0 ? N : A.id - U.id;
  }
  if (
    ((l.unstable_now = void 0),
    typeof performance == "object" && typeof performance.now == "function")
  ) {
    var n = performance;
    l.unstable_now = function () {
      return n.now();
    };
  } else {
    var i = Date,
      c = i.now();
    l.unstable_now = function () {
      return i.now() - c;
    };
  }
  var f = [],
    d = [],
    y = 1,
    v = null,
    r = 3,
    m = !1,
    z = !1,
    T = !1,
    Y = !1,
    o = typeof setTimeout == "function" ? setTimeout : null,
    s = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  function g(A) {
    for (var U = a(d); U !== null; ) {
      if (U.callback === null) e(d);
      else if (U.startTime <= A)
        e(d), (U.sortIndex = U.expirationTime), t(f, U);
      else break;
      U = a(d);
    }
  }
  function p(A) {
    if (((T = !1), g(A), !z))
      if (a(f) !== null) (z = !0), _ || ((_ = !0), gt());
      else {
        var U = a(d);
        U !== null && Bn(p, U.startTime - A);
      }
  }
  var _ = !1,
    E = -1,
    O = 5,
    P = -1;
  function H() {
    return Y ? !0 : !(l.unstable_now() - P < O);
  }
  function Hl() {
    if (((Y = !1), _)) {
      var A = l.unstable_now();
      P = A;
      var U = !0;
      try {
        l: {
          (z = !1), T && ((T = !1), s(E), (E = -1)), (m = !0);
          var N = r;
          try {
            t: {
              for (
                g(A), v = a(f);
                v !== null && !(v.expirationTime > A && H());

              ) {
                var I = v.callback;
                if (typeof I == "function") {
                  (v.callback = null), (r = v.priorityLevel);
                  var cl = I(v.expirationTime <= A);
                  if (((A = l.unstable_now()), typeof cl == "function")) {
                    (v.callback = cl), g(A), (U = !0);
                    break t;
                  }
                  v === a(f) && e(f), g(A);
                } else e(f);
                v = a(f);
              }
              if (v !== null) U = !0;
              else {
                var nu = a(d);
                nu !== null && Bn(p, nu.startTime - A), (U = !1);
              }
            }
            break l;
          } finally {
            (v = null), (r = N), (m = !1);
          }
          U = void 0;
        }
      } finally {
        U ? gt() : (_ = !1);
      }
    }
  }
  var gt;
  if (typeof h == "function")
    gt = function () {
      h(Hl);
    };
  else if (typeof MessageChannel < "u") {
    var hf = new MessageChannel(),
      k1 = hf.port2;
    (hf.port1.onmessage = Hl),
      (gt = function () {
        k1.postMessage(null);
      });
  } else
    gt = function () {
      o(Hl, 0);
    };
  function Bn(A, U) {
    E = o(function () {
      A(l.unstable_now());
    }, U);
  }
  (l.unstable_IdlePriority = 5),
    (l.unstable_ImmediatePriority = 1),
    (l.unstable_LowPriority = 4),
    (l.unstable_NormalPriority = 3),
    (l.unstable_Profiling = null),
    (l.unstable_UserBlockingPriority = 2),
    (l.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (l.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (l.unstable_getCurrentPriorityLevel = function () {
      return r;
    }),
    (l.unstable_next = function (A) {
      switch (r) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = r;
      }
      var N = r;
      r = U;
      try {
        return A();
      } finally {
        r = N;
      }
    }),
    (l.unstable_requestPaint = function () {
      Y = !0;
    }),
    (l.unstable_runWithPriority = function (A, U) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var N = r;
      r = A;
      try {
        return U();
      } finally {
        r = N;
      }
    }),
    (l.unstable_scheduleCallback = function (A, U, N) {
      var I = l.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? I + N : I))
          : (N = I),
        A)
      ) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return (
        (cl = N + cl),
        (A = {
          id: y++,
          callback: U,
          priorityLevel: A,
          startTime: N,
          expirationTime: cl,
          sortIndex: -1,
        }),
        N > I
          ? ((A.sortIndex = N),
            t(d, A),
            a(f) === null &&
              A === a(d) &&
              (T ? (s(E), (E = -1)) : (T = !0), Bn(p, N - I)))
          : ((A.sortIndex = cl),
            t(f, A),
            z || m || ((z = !0), _ || ((_ = !0), gt()))),
        A
      );
    }),
    (l.unstable_shouldYield = H),
    (l.unstable_wrapCallback = function (A) {
      var U = r;
      return function () {
        var N = r;
        r = U;
        try {
          return A.apply(this, arguments);
        } finally {
          r = N;
        }
      };
    });
})(ao);
to.exports = ao;
var rd = to.exports,
  eo = { exports: {} },
  Sl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd = gn;
function uo(l) {
  var t = "https://react.dev/errors/" + l;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++)
      t += "&args[]=" + encodeURIComponent(arguments[a]);
  }
  return (
    "Minified React error #" +
    l +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function bt() {}
var bl = {
    d: {
      f: bt,
      r: function () {
        throw Error(uo(522));
      },
      D: bt,
      C: bt,
      L: bt,
      m: bt,
      X: bt,
      S: bt,
      M: bt,
    },
    p: 0,
    findDOMNode: null,
  },
  md = Symbol.for("react.portal");
function vd(l, t, a) {
  var e = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: md,
    key: e == null ? null : "" + e,
    children: l,
    containerInfo: t,
    implementation: a,
  };
}
var me = hd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Sn(l, t) {
  if (l === "font") return "";
  if (typeof t == "string") return t === "use-credentials" ? t : "";
}
Sl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = bl;
Sl.createPortal = function (l, t) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
    throw Error(uo(299));
  return vd(l, t, null, a);
};
Sl.flushSync = function (l) {
  var t = me.T,
    a = bl.p;
  try {
    if (((me.T = null), (bl.p = 2), l)) return l();
  } finally {
    (me.T = t), (bl.p = a), bl.d.f();
  }
};
Sl.preconnect = function (l, t) {
  typeof l == "string" &&
    (t
      ? ((t = t.crossOrigin),
        (t =
          typeof t == "string" ? (t === "use-credentials" ? t : "") : void 0))
      : (t = null),
    bl.d.C(l, t));
};
Sl.prefetchDNS = function (l) {
  typeof l == "string" && bl.d.D(l);
};
Sl.preinit = function (l, t) {
  if (typeof l == "string" && t && typeof t.as == "string") {
    var a = t.as,
      e = Sn(a, t.crossOrigin),
      u = typeof t.integrity == "string" ? t.integrity : void 0,
      n = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
    a === "style"
      ? bl.d.S(l, typeof t.precedence == "string" ? t.precedence : void 0, {
          crossOrigin: e,
          integrity: u,
          fetchPriority: n,
        })
      : a === "script" &&
        bl.d.X(l, {
          crossOrigin: e,
          integrity: u,
          fetchPriority: n,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        });
  }
};
Sl.preinitModule = function (l, t) {
  if (typeof l == "string")
    if (typeof t == "object" && t !== null) {
      if (t.as == null || t.as === "script") {
        var a = Sn(t.as, t.crossOrigin);
        bl.d.M(l, {
          crossOrigin: a,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        });
      }
    } else t == null && bl.d.M(l);
};
Sl.preload = function (l, t) {
  if (
    typeof l == "string" &&
    typeof t == "object" &&
    t !== null &&
    typeof t.as == "string"
  ) {
    var a = t.as,
      e = Sn(a, t.crossOrigin);
    bl.d.L(l, a, {
      crossOrigin: e,
      integrity: typeof t.integrity == "string" ? t.integrity : void 0,
      nonce: typeof t.nonce == "string" ? t.nonce : void 0,
      type: typeof t.type == "string" ? t.type : void 0,
      fetchPriority:
        typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
      referrerPolicy:
        typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
      imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
      imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
      media: typeof t.media == "string" ? t.media : void 0,
    });
  }
};
Sl.preloadModule = function (l, t) {
  if (typeof l == "string")
    if (t) {
      var a = Sn(t.as, t.crossOrigin);
      bl.d.m(l, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
        crossOrigin: a,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
      });
    } else bl.d.m(l);
};
Sl.requestFormReset = function (l) {
  bl.d.r(l);
};
Sl.unstable_batchedUpdates = function (l, t) {
  return l(t);
};
Sl.useFormState = function (l, t, a) {
  return me.H.useFormState(l, t, a);
};
Sl.useFormStatus = function () {
  return me.H.useHostTransitionStatus();
};
Sl.version = "19.1.0";
function no() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(no);
    } catch (l) {
      console.error(l);
    }
}
no(), (eo.exports = Sl);
var yd = eo.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var il = rd,
  io = gn,
  gd = yd;
function b(l) {
  var t = "https://react.dev/errors/" + l;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++)
      t += "&args[]=" + encodeURIComponent(arguments[a]);
  }
  return (
    "Minified React error #" +
    l +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function co(l) {
  return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
}
function Ve(l) {
  var t = l,
    a = l;
  if (l.alternate) for (; t.return; ) t = t.return;
  else {
    l = t;
    do (t = l), t.flags & 4098 && (a = t.return), (l = t.return);
    while (l);
  }
  return t.tag === 3 ? a : null;
}
function fo(l) {
  if (l.tag === 13) {
    var t = l.memoizedState;
    if (
      (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Sf(l) {
  if (Ve(l) !== l) throw Error(b(188));
}
function bd(l) {
  var t = l.alternate;
  if (!t) {
    if (((t = Ve(l)), t === null)) throw Error(b(188));
    return t !== l ? null : l;
  }
  for (var a = l, e = t; ; ) {
    var u = a.return;
    if (u === null) break;
    var n = u.alternate;
    if (n === null) {
      if (((e = u.return), e !== null)) {
        a = e;
        continue;
      }
      break;
    }
    if (u.child === n.child) {
      for (n = u.child; n; ) {
        if (n === a) return Sf(u), l;
        if (n === e) return Sf(u), t;
        n = n.sibling;
      }
      throw Error(b(188));
    }
    if (a.return !== e.return) (a = u), (e = n);
    else {
      for (var i = !1, c = u.child; c; ) {
        if (c === a) {
          (i = !0), (a = u), (e = n);
          break;
        }
        if (c === e) {
          (i = !0), (e = u), (a = n);
          break;
        }
        c = c.sibling;
      }
      if (!i) {
        for (c = n.child; c; ) {
          if (c === a) {
            (i = !0), (a = n), (e = u);
            break;
          }
          if (c === e) {
            (i = !0), (e = n), (a = u);
            break;
          }
          c = c.sibling;
        }
        if (!i) throw Error(b(189));
      }
    }
    if (a.alternate !== e) throw Error(b(190));
  }
  if (a.tag !== 3) throw Error(b(188));
  return a.stateNode.current === a ? l : t;
}
function so(l) {
  var t = l.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return l;
  for (l = l.child; l !== null; ) {
    if (((t = so(l)), t !== null)) return t;
    l = l.sibling;
  }
  return null;
}
var K = Object.assign,
  Sd = Symbol.for("react.element"),
  su = Symbol.for("react.transitional.element"),
  oe = Symbol.for("react.portal"),
  ba = Symbol.for("react.fragment"),
  oo = Symbol.for("react.strict_mode"),
  bi = Symbol.for("react.profiler"),
  pd = Symbol.for("react.provider"),
  ro = Symbol.for("react.consumer"),
  nt = Symbol.for("react.context"),
  bc = Symbol.for("react.forward_ref"),
  Si = Symbol.for("react.suspense"),
  pi = Symbol.for("react.suspense_list"),
  Sc = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  Ai = Symbol.for("react.activity"),
  Ad = Symbol.for("react.memo_cache_sentinel"),
  pf = Symbol.iterator;
function ae(l) {
  return l === null || typeof l != "object"
    ? null
    : ((l = (pf && l[pf]) || l["@@iterator"]),
      typeof l == "function" ? l : null);
}
var Ed = Symbol.for("react.client.reference");
function Ei(l) {
  if (l == null) return null;
  if (typeof l == "function")
    return l.$$typeof === Ed ? null : l.displayName || l.name || null;
  if (typeof l == "string") return l;
  switch (l) {
    case ba:
      return "Fragment";
    case bi:
      return "Profiler";
    case oo:
      return "StrictMode";
    case Si:
      return "Suspense";
    case pi:
      return "SuspenseList";
    case Ai:
      return "Activity";
  }
  if (typeof l == "object")
    switch (l.$$typeof) {
      case oe:
        return "Portal";
      case nt:
        return (l.displayName || "Context") + ".Provider";
      case ro:
        return (l._context.displayName || "Context") + ".Consumer";
      case bc:
        var t = l.render;
        return (
          (l = l.displayName),
          l ||
            ((l = t.displayName || t.name || ""),
            (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
          l
        );
      case Sc:
        return (
          (t = l.displayName || null), t !== null ? t : Ei(l.type) || "Memo"
        );
      case At:
        (t = l._payload), (l = l._init);
        try {
          return Ei(l(t));
        } catch {}
    }
  return null;
}
var de = Array.isArray,
  x = io.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  G = gd.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Ft = { pending: !1, data: null, method: null, action: null },
  Ti = [],
  Sa = -1;
function Il(l) {
  return { current: l };
}
function dl(l) {
  0 > Sa || ((l.current = Ti[Sa]), (Ti[Sa] = null), Sa--);
}
function k(l, t) {
  Sa++, (Ti[Sa] = l.current), (l.current = t);
}
var Wl = Il(null),
  De = Il(null),
  jt = Il(null),
  qu = Il(null);
function Gu(l, t) {
  switch ((k(jt, t), k(De, l), k(Wl, null), t.nodeType)) {
    case 9:
    case 11:
      l = (l = t.documentElement) && (l = l.namespaceURI) ? Os(l) : 0;
      break;
    default:
      if (((l = t.tagName), (t = t.namespaceURI))) (t = Os(t)), (l = D1(t, l));
      else
        switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
  }
  dl(Wl), k(Wl, l);
}
function Ga() {
  dl(Wl), dl(De), dl(jt);
}
function zi(l) {
  l.memoizedState !== null && k(qu, l);
  var t = Wl.current,
    a = D1(t, l.type);
  t !== a && (k(De, l), k(Wl, a));
}
function Cu(l) {
  De.current === l && (dl(Wl), dl(De)),
    qu.current === l && (dl(qu), (Ce._currentValue = Ft));
}
var Oi = Object.prototype.hasOwnProperty,
  pc = il.unstable_scheduleCallback,
  Gn = il.unstable_cancelCallback,
  Td = il.unstable_shouldYield,
  zd = il.unstable_requestPaint,
  Fl = il.unstable_now,
  Od = il.unstable_getCurrentPriorityLevel,
  ho = il.unstable_ImmediatePriority,
  mo = il.unstable_UserBlockingPriority,
  Xu = il.unstable_NormalPriority,
  xd = il.unstable_LowPriority,
  vo = il.unstable_IdlePriority,
  _d = il.log,
  Md = il.unstable_setDisableYieldValue,
  Le = null,
  Dl = null;
function _t(l) {
  if (
    (typeof _d == "function" && Md(l),
    Dl && typeof Dl.setStrictMode == "function")
  )
    try {
      Dl.setStrictMode(Le, l);
    } catch {}
}
var Nl = Math.clz32 ? Math.clz32 : Ud,
  Dd = Math.log,
  Nd = Math.LN2;
function Ud(l) {
  return (l >>>= 0), l === 0 ? 32 : (31 - ((Dd(l) / Nd) | 0)) | 0;
}
var ou = 256,
  du = 4194304;
function kt(l) {
  var t = l & 42;
  if (t !== 0) return t;
  switch (l & -l) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return l & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return l & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return l;
  }
}
function pn(l, t, a) {
  var e = l.pendingLanes;
  if (e === 0) return 0;
  var u = 0,
    n = l.suspendedLanes,
    i = l.pingedLanes;
  l = l.warmLanes;
  var c = e & 134217727;
  return (
    c !== 0
      ? ((e = c & ~n),
        e !== 0
          ? (u = kt(e))
          : ((i &= c),
            i !== 0
              ? (u = kt(i))
              : a || ((a = c & ~l), a !== 0 && (u = kt(a)))))
      : ((c = e & ~n),
        c !== 0
          ? (u = kt(c))
          : i !== 0
            ? (u = kt(i))
            : a || ((a = e & ~l), a !== 0 && (u = kt(a)))),
    u === 0
      ? 0
      : t !== 0 &&
          t !== u &&
          !(t & n) &&
          ((n = u & -u),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : u
  );
}
function Ke(l, t) {
  return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
}
function jd(l, t) {
  switch (l) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return t + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function yo() {
  var l = ou;
  return (ou <<= 1), !(ou & 4194048) && (ou = 256), l;
}
function go() {
  var l = du;
  return (du <<= 1), !(du & 62914560) && (du = 4194304), l;
}
function Cn(l) {
  for (var t = [], a = 0; 31 > a; a++) t.push(l);
  return t;
}
function Je(l, t) {
  (l.pendingLanes |= t),
    t !== 268435456 &&
      ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
}
function Rd(l, t, a, e, u, n) {
  var i = l.pendingLanes;
  (l.pendingLanes = a),
    (l.suspendedLanes = 0),
    (l.pingedLanes = 0),
    (l.warmLanes = 0),
    (l.expiredLanes &= a),
    (l.entangledLanes &= a),
    (l.errorRecoveryDisabledLanes &= a),
    (l.shellSuspendCounter = 0);
  var c = l.entanglements,
    f = l.expirationTimes,
    d = l.hiddenUpdates;
  for (a = i & ~a; 0 < a; ) {
    var y = 31 - Nl(a),
      v = 1 << y;
    (c[y] = 0), (f[y] = -1);
    var r = d[y];
    if (r !== null)
      for (d[y] = null, y = 0; y < r.length; y++) {
        var m = r[y];
        m !== null && (m.lane &= -536870913);
      }
    a &= ~v;
  }
  e !== 0 && bo(l, e, 0),
    n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
}
function bo(l, t, a) {
  (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
  var e = 31 - Nl(t);
  (l.entangledLanes |= t),
    (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 4194090));
}
function So(l, t) {
  var a = (l.entangledLanes |= t);
  for (l = l.entanglements; a; ) {
    var e = 31 - Nl(a),
      u = 1 << e;
    (u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u);
  }
}
function Ac(l) {
  switch (l) {
    case 2:
      l = 1;
      break;
    case 8:
      l = 4;
      break;
    case 32:
      l = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      l = 128;
      break;
    case 268435456:
      l = 134217728;
      break;
    default:
      l = 0;
  }
  return l;
}
function Ec(l) {
  return (l &= -l), 2 < l ? (8 < l ? (l & 134217727 ? 32 : 268435456) : 8) : 2;
}
function po() {
  var l = G.p;
  return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : C1(l.type));
}
function Hd(l, t) {
  var a = G.p;
  try {
    return (G.p = l), t();
  } finally {
    G.p = a;
  }
}
var Vt = Math.random().toString(36).slice(2),
  vl = "__reactFiber$" + Vt,
  Tl = "__reactProps$" + Vt,
  Wa = "__reactContainer$" + Vt,
  xi = "__reactEvents$" + Vt,
  Bd = "__reactListeners$" + Vt,
  Yd = "__reactHandles$" + Vt,
  Af = "__reactResources$" + Vt,
  we = "__reactMarker$" + Vt;
function Tc(l) {
  delete l[vl], delete l[Tl], delete l[xi], delete l[Bd], delete l[Yd];
}
function pa(l) {
  var t = l[vl];
  if (t) return t;
  for (var a = l.parentNode; a; ) {
    if ((t = a[Wa] || a[vl])) {
      if (
        ((a = t.alternate),
        t.child !== null || (a !== null && a.child !== null))
      )
        for (l = Ms(l); l !== null; ) {
          if ((a = l[vl])) return a;
          l = Ms(l);
        }
      return t;
    }
    (l = a), (a = l.parentNode);
  }
  return null;
}
function Fa(l) {
  if ((l = l[vl] || l[Wa])) {
    var t = l.tag;
    if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
      return l;
  }
  return null;
}
function re(l) {
  var t = l.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
  throw Error(b(33));
}
function Na(l) {
  var t = l[Af];
  return (
    t ||
      (t = l[Af] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    t
  );
}
function sl(l) {
  l[we] = !0;
}
var Ao = new Set(),
  Eo = {};
function fa(l, t) {
  Ca(l, t), Ca(l + "Capture", t);
}
function Ca(l, t) {
  for (Eo[l] = t, l = 0; l < t.length; l++) Ao.add(t[l]);
}
var qd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  Ef = {},
  Tf = {};
function Gd(l) {
  return Oi.call(Tf, l)
    ? !0
    : Oi.call(Ef, l)
      ? !1
      : qd.test(l)
        ? (Tf[l] = !0)
        : ((Ef[l] = !0), !1);
}
function zu(l, t, a) {
  if (Gd(t))
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var e = t.toLowerCase().slice(0, 5);
          if (e !== "data-" && e !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
}
function ru(l, t, a) {
  if (a === null) l.removeAttribute(t);
  else {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        l.removeAttribute(t);
        return;
    }
    l.setAttribute(t, "" + a);
  }
}
function tt(l, t, a, e) {
  if (e === null) l.removeAttribute(a);
  else {
    switch (typeof e) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        l.removeAttribute(a);
        return;
    }
    l.setAttributeNS(t, a, "" + e);
  }
}
var Xn, zf;
function va(l) {
  if (Xn === void 0)
    try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      (Xn = (t && t[1]) || ""),
        (zf =
          -1 <
          a.stack.indexOf(`
    at`)
            ? " (<anonymous>)"
            : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
    }
  return (
    `
` +
    Xn +
    l +
    zf
  );
}
var Qn = !1;
function Zn(l, t) {
  if (!l || Qn) return "";
  Qn = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var e = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var v = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(v.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(v, []);
              } catch (m) {
                var r = m;
              }
              Reflect.construct(l, [], v);
            } else {
              try {
                v.call();
              } catch (m) {
                r = m;
              }
              l.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (m) {
              r = m;
            }
            (v = l()) &&
              typeof v.catch == "function" &&
              v.catch(function () {});
          }
        } catch (m) {
          if (m && r && typeof m.stack == "string") return [m.stack, r.stack];
        }
        return [null, null];
      },
    };
    e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var u = Object.getOwnPropertyDescriptor(
      e.DetermineComponentFrameRoot,
      "name"
    );
    u &&
      u.configurable &&
      Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    var n = e.DetermineComponentFrameRoot(),
      i = n[0],
      c = n[1];
    if (i && c) {
      var f = i.split(`
`),
        d = c.split(`
`);
      for (
        u = e = 0;
        e < f.length && !f[e].includes("DetermineComponentFrameRoot");

      )
        e++;
      for (; u < d.length && !d[u].includes("DetermineComponentFrameRoot"); )
        u++;
      if (e === f.length || u === d.length)
        for (
          e = f.length - 1, u = d.length - 1;
          1 <= e && 0 <= u && f[e] !== d[u];

        )
          u--;
      for (; 1 <= e && 0 <= u; e--, u--)
        if (f[e] !== d[u]) {
          if (e !== 1 || u !== 1)
            do
              if ((e--, u--, 0 > u || f[e] !== d[u])) {
                var y =
                  `
` + f[e].replace(" at new ", " at ");
                return (
                  l.displayName &&
                    y.includes("<anonymous>") &&
                    (y = y.replace("<anonymous>", l.displayName)),
                  y
                );
              }
            while (1 <= e && 0 <= u);
          break;
        }
    }
  } finally {
    (Qn = !1), (Error.prepareStackTrace = a);
  }
  return (a = l ? l.displayName || l.name : "") ? va(a) : "";
}
function Cd(l) {
  switch (l.tag) {
    case 26:
    case 27:
    case 5:
      return va(l.type);
    case 16:
      return va("Lazy");
    case 13:
      return va("Suspense");
    case 19:
      return va("SuspenseList");
    case 0:
    case 15:
      return Zn(l.type, !1);
    case 11:
      return Zn(l.type.render, !1);
    case 1:
      return Zn(l.type, !0);
    case 31:
      return va("Activity");
    default:
      return "";
  }
}
function Of(l) {
  try {
    var t = "";
    do (t += Cd(l)), (l = l.return);
    while (l);
    return t;
  } catch (a) {
    return (
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack
    );
  }
}
function Yl(l) {
  switch (typeof l) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return l;
    case "object":
      return l;
    default:
      return "";
  }
}
function To(l) {
  var t = l.type;
  return (
    (l = l.nodeName) &&
    l.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xd(l) {
  var t = To(l) ? "checked" : "value",
    a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
    e = "" + l[t];
  if (
    !l.hasOwnProperty(t) &&
    typeof a < "u" &&
    typeof a.get == "function" &&
    typeof a.set == "function"
  ) {
    var u = a.get,
      n = a.set;
    return (
      Object.defineProperty(l, t, {
        configurable: !0,
        get: function () {
          return u.call(this);
        },
        set: function (i) {
          (e = "" + i), n.call(this, i);
        },
      }),
      Object.defineProperty(l, t, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return e;
        },
        setValue: function (i) {
          e = "" + i;
        },
        stopTracking: function () {
          (l._valueTracker = null), delete l[t];
        },
      }
    );
  }
}
function Qu(l) {
  l._valueTracker || (l._valueTracker = Xd(l));
}
function zo(l) {
  if (!l) return !1;
  var t = l._valueTracker;
  if (!t) return !0;
  var a = t.getValue(),
    e = "";
  return (
    l && (e = To(l) ? (l.checked ? "true" : "false") : l.value),
    (l = e),
    l !== a ? (t.setValue(l), !0) : !1
  );
}
function Zu(l) {
  if (((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u"))
    return null;
  try {
    return l.activeElement || l.body;
  } catch {
    return l.body;
  }
}
var Qd = /[\n"\\]/g;
function Cl(l) {
  return l.replace(Qd, function (t) {
    return "\\" + t.charCodeAt(0).toString(16) + " ";
  });
}
function _i(l, t, a, e, u, n, i, c) {
  (l.name = ""),
    i != null &&
    typeof i != "function" &&
    typeof i != "symbol" &&
    typeof i != "boolean"
      ? (l.type = i)
      : l.removeAttribute("type"),
    t != null
      ? i === "number"
        ? ((t === 0 && l.value === "") || l.value != t) &&
          (l.value = "" + Yl(t))
        : l.value !== "" + Yl(t) && (l.value = "" + Yl(t))
      : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
    t != null
      ? Mi(l, i, Yl(t))
      : a != null
        ? Mi(l, i, Yl(a))
        : e != null && l.removeAttribute("value"),
    u == null && n != null && (l.defaultChecked = !!n),
    u != null &&
      (l.checked = u && typeof u != "function" && typeof u != "symbol"),
    c != null &&
    typeof c != "function" &&
    typeof c != "symbol" &&
    typeof c != "boolean"
      ? (l.name = "" + Yl(c))
      : l.removeAttribute("name");
}
function Oo(l, t, a, e, u, n, i, c) {
  if (
    (n != null &&
      typeof n != "function" &&
      typeof n != "symbol" &&
      typeof n != "boolean" &&
      (l.type = n),
    t != null || a != null)
  ) {
    if (!((n !== "submit" && n !== "reset") || t != null)) return;
    (a = a != null ? "" + Yl(a) : ""),
      (t = t != null ? "" + Yl(t) : a),
      c || t === l.value || (l.value = t),
      (l.defaultValue = t);
  }
  (e = e ?? u),
    (e = typeof e != "function" && typeof e != "symbol" && !!e),
    (l.checked = c ? l.checked : !!e),
    (l.defaultChecked = !!e),
    i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean" &&
      (l.name = i);
}
function Mi(l, t, a) {
  (t === "number" && Zu(l.ownerDocument) === l) ||
    l.defaultValue === "" + a ||
    (l.defaultValue = "" + a);
}
function Ua(l, t, a, e) {
  if (((l = l.options), t)) {
    t = {};
    for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
    for (a = 0; a < l.length; a++)
      (u = t.hasOwnProperty("$" + l[a].value)),
        l[a].selected !== u && (l[a].selected = u),
        u && e && (l[a].defaultSelected = !0);
  } else {
    for (a = "" + Yl(a), t = null, u = 0; u < l.length; u++) {
      if (l[u].value === a) {
        (l[u].selected = !0), e && (l[u].defaultSelected = !0);
        return;
      }
      t !== null || l[u].disabled || (t = l[u]);
    }
    t !== null && (t.selected = !0);
  }
}
function xo(l, t, a) {
  if (
    t != null &&
    ((t = "" + Yl(t)), t !== l.value && (l.value = t), a == null)
  ) {
    l.defaultValue !== t && (l.defaultValue = t);
    return;
  }
  l.defaultValue = a != null ? "" + Yl(a) : "";
}
function _o(l, t, a, e) {
  if (t == null) {
    if (e != null) {
      if (a != null) throw Error(b(92));
      if (de(e)) {
        if (1 < e.length) throw Error(b(93));
        e = e[0];
      }
      a = e;
    }
    a == null && (a = ""), (t = a);
  }
  (a = Yl(t)),
    (l.defaultValue = a),
    (e = l.textContent),
    e === a && e !== "" && e !== null && (l.value = e);
}
function Xa(l, t) {
  if (t) {
    var a = l.firstChild;
    if (a && a === l.lastChild && a.nodeType === 3) {
      a.nodeValue = t;
      return;
    }
  }
  l.textContent = t;
}
var Zd = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function xf(l, t, a) {
  var e = t.indexOf("--") === 0;
  a == null || typeof a == "boolean" || a === ""
    ? e
      ? l.setProperty(t, "")
      : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
    : e
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || Zd.has(t)
        ? t === "float"
          ? (l.cssFloat = a)
          : (l[t] = ("" + a).trim())
        : (l[t] = a + "px");
}
function Mo(l, t, a) {
  if (t != null && typeof t != "object") throw Error(b(62));
  if (((l = l.style), a != null)) {
    for (var e in a)
      !a.hasOwnProperty(e) ||
        (t != null && t.hasOwnProperty(e)) ||
        (e.indexOf("--") === 0
          ? l.setProperty(e, "")
          : e === "float"
            ? (l.cssFloat = "")
            : (l[e] = ""));
    for (var u in t)
      (e = t[u]), t.hasOwnProperty(u) && a[u] !== e && xf(l, u, e);
  } else for (var n in t) t.hasOwnProperty(n) && xf(l, n, t[n]);
}
function zc(l) {
  if (l.indexOf("-") === -1) return !1;
  switch (l) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vd = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
  Ld =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Ou(l) {
  return Ld.test("" + l)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : l;
}
var Di = null;
function Oc(l) {
  return (
    (l = l.target || l.srcElement || window),
    l.correspondingUseElement && (l = l.correspondingUseElement),
    l.nodeType === 3 ? l.parentNode : l
  );
}
var Aa = null,
  ja = null;
function _f(l) {
  var t = Fa(l);
  if (t && (l = t.stateNode)) {
    var a = l[Tl] || null;
    l: switch (((l = t.stateNode), t.type)) {
      case "input":
        if (
          (_i(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ),
          (t = a.name),
          a.type === "radio" && t != null)
        ) {
          for (a = l; a.parentNode; ) a = a.parentNode;
          for (
            a = a.querySelectorAll(
              'input[name="' + Cl("" + t) + '"][type="radio"]'
            ),
              t = 0;
            t < a.length;
            t++
          ) {
            var e = a[t];
            if (e !== l && e.form === l.form) {
              var u = e[Tl] || null;
              if (!u) throw Error(b(90));
              _i(
                e,
                u.value,
                u.defaultValue,
                u.defaultValue,
                u.checked,
                u.defaultChecked,
                u.type,
                u.name
              );
            }
          }
          for (t = 0; t < a.length; t++) (e = a[t]), e.form === l.form && zo(e);
        }
        break l;
      case "textarea":
        xo(l, a.value, a.defaultValue);
        break l;
      case "select":
        (t = a.value), t != null && Ua(l, !!a.multiple, t, !1);
    }
  }
}
var Vn = !1;
function Do(l, t, a) {
  if (Vn) return l(t, a);
  Vn = !0;
  try {
    var e = l(t);
    return e;
  } finally {
    if (
      ((Vn = !1),
      (Aa !== null || ja !== null) &&
        (Nn(), Aa && ((t = Aa), (l = ja), (ja = Aa = null), _f(t), l)))
    )
      for (t = 0; t < l.length; t++) _f(l[t]);
  }
}
function Ne(l, t) {
  var a = l.stateNode;
  if (a === null) return null;
  var e = a[Tl] || null;
  if (e === null) return null;
  a = e[t];
  l: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (e = !e.disabled) ||
        ((l = l.type),
        (e = !(
          l === "button" ||
          l === "input" ||
          l === "select" ||
          l === "textarea"
        ))),
        (l = !e);
      break l;
    default:
      l = !1;
  }
  if (l) return null;
  if (a && typeof a != "function") throw Error(b(231, t, typeof a));
  return a;
}
var rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ni = !1;
if (rt)
  try {
    var ee = {};
    Object.defineProperty(ee, "passive", {
      get: function () {
        Ni = !0;
      },
    }),
      window.addEventListener("test", ee, ee),
      window.removeEventListener("test", ee, ee);
  } catch {
    Ni = !1;
  }
var Mt = null,
  xc = null,
  xu = null;
function No() {
  if (xu) return xu;
  var l,
    t = xc,
    a = t.length,
    e,
    u = "value" in Mt ? Mt.value : Mt.textContent,
    n = u.length;
  for (l = 0; l < a && t[l] === u[l]; l++);
  var i = a - l;
  for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
  return (xu = u.slice(l, 1 < e ? 1 - e : void 0));
}
function _u(l) {
  var t = l.keyCode;
  return (
    "charCode" in l
      ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
      : (l = t),
    l === 10 && (l = 13),
    32 <= l || l === 13 ? l : 0
  );
}
function hu() {
  return !0;
}
function Mf() {
  return !1;
}
function zl(l) {
  function t(a, e, u, n, i) {
    (this._reactName = a),
      (this._targetInst = u),
      (this.type = e),
      (this.nativeEvent = n),
      (this.target = i),
      (this.currentTarget = null);
    for (var c in l)
      l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
    return (
      (this.isDefaultPrevented = (
        n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
      )
        ? hu
        : Mf),
      (this.isPropagationStopped = Mf),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : typeof a.returnValue != "unknown" && (a.returnValue = !1),
          (this.isDefaultPrevented = hu));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
          (this.isPropagationStopped = hu));
      },
      persist: function () {},
      isPersistent: hu,
    }),
    t
  );
}
var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  An = zl(sa),
  ke = K({}, sa, { view: 0, detail: 0 }),
  Kd = zl(ke),
  Ln,
  Kn,
  ue,
  En = K({}, ke, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _c,
    button: 0,
    buttons: 0,
    relatedTarget: function (l) {
      return l.relatedTarget === void 0
        ? l.fromElement === l.srcElement
          ? l.toElement
          : l.fromElement
        : l.relatedTarget;
    },
    movementX: function (l) {
      return "movementX" in l
        ? l.movementX
        : (l !== ue &&
            (ue && l.type === "mousemove"
              ? ((Ln = l.screenX - ue.screenX), (Kn = l.screenY - ue.screenY))
              : (Kn = Ln = 0),
            (ue = l)),
          Ln);
    },
    movementY: function (l) {
      return "movementY" in l ? l.movementY : Kn;
    },
  }),
  Df = zl(En),
  Jd = K({}, En, { dataTransfer: 0 }),
  wd = zl(Jd),
  kd = K({}, ke, { relatedTarget: 0 }),
  Jn = zl(kd),
  $d = K({}, sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = zl($d),
  Fd = K({}, sa, {
    clipboardData: function (l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    },
  }),
  Pd = zl(Fd),
  Id = K({}, sa, { data: 0 }),
  Nf = zl(Id),
  lr = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  tr = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ar = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function er(l) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(l) : (l = ar[l]) ? !!t[l] : !1;
}
function _c() {
  return er;
}
var ur = K({}, ke, {
    key: function (l) {
      if (l.key) {
        var t = lr[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress"
        ? ((l = _u(l)), l === 13 ? "Enter" : String.fromCharCode(l))
        : l.type === "keydown" || l.type === "keyup"
          ? tr[l.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _c,
    charCode: function (l) {
      return l.type === "keypress" ? _u(l) : 0;
    },
    keyCode: function (l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function (l) {
      return l.type === "keypress"
        ? _u(l)
        : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
    },
  }),
  nr = zl(ur),
  ir = K({}, En, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uf = zl(ir),
  cr = K({}, ke, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _c,
  }),
  fr = zl(cr),
  sr = K({}, sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  or = zl(sr),
  dr = K({}, En, {
    deltaX: function (l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function (l) {
      return "deltaY" in l
        ? l.deltaY
        : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
            ? -l.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  rr = zl(dr),
  hr = K({}, sa, { newState: 0, oldState: 0 }),
  mr = zl(hr),
  vr = [9, 13, 27, 32],
  Mc = rt && "CompositionEvent" in window,
  ve = null;
rt && "documentMode" in document && (ve = document.documentMode);
var yr = rt && "TextEvent" in window && !ve,
  Uo = rt && (!Mc || (ve && 8 < ve && 11 >= ve)),
  jf = " ",
  Rf = !1;
function jo(l, t) {
  switch (l) {
    case "keyup":
      return vr.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ro(l) {
  return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
}
var Ea = !1;
function gr(l, t) {
  switch (l) {
    case "compositionend":
      return Ro(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rf = !0), jf);
    case "textInput":
      return (l = t.data), l === jf && Rf ? null : l;
    default:
      return null;
  }
}
function br(l, t) {
  if (Ea)
    return l === "compositionend" || (!Mc && jo(l, t))
      ? ((l = No()), (xu = xc = Mt = null), (Ea = !1), l)
      : null;
  switch (l) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Uo && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sr = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hf(l) {
  var t = l && l.nodeName && l.nodeName.toLowerCase();
  return t === "input" ? !!Sr[l.type] : t === "textarea";
}
function Ho(l, t, a, e) {
  Aa ? (ja ? ja.push(e) : (ja = [e])) : (Aa = e),
    (t = cn(t, "onChange")),
    0 < t.length &&
      ((a = new An("onChange", "change", null, a, e)),
      l.push({ event: a, listeners: t }));
}
var ye = null,
  Ue = null;
function pr(l) {
  x1(l, 0);
}
function Tn(l) {
  var t = re(l);
  if (zo(t)) return l;
}
function Bf(l, t) {
  if (l === "change") return t;
}
var Bo = !1;
if (rt) {
  var wn;
  if (rt) {
    var kn = "oninput" in document;
    if (!kn) {
      var Yf = document.createElement("div");
      Yf.setAttribute("oninput", "return;"),
        (kn = typeof Yf.oninput == "function");
    }
    wn = kn;
  } else wn = !1;
  Bo = wn && (!document.documentMode || 9 < document.documentMode);
}
function qf() {
  ye && (ye.detachEvent("onpropertychange", Yo), (Ue = ye = null));
}
function Yo(l) {
  if (l.propertyName === "value" && Tn(Ue)) {
    var t = [];
    Ho(t, Ue, l, Oc(l)), Do(pr, t);
  }
}
function Ar(l, t, a) {
  l === "focusin"
    ? (qf(), (ye = t), (Ue = a), ye.attachEvent("onpropertychange", Yo))
    : l === "focusout" && qf();
}
function Er(l) {
  if (l === "selectionchange" || l === "keyup" || l === "keydown")
    return Tn(Ue);
}
function Tr(l, t) {
  if (l === "click") return Tn(t);
}
function zr(l, t) {
  if (l === "input" || l === "change") return Tn(t);
}
function Or(l, t) {
  return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
}
var Rl = typeof Object.is == "function" ? Object.is : Or;
function je(l, t) {
  if (Rl(l, t)) return !0;
  if (typeof l != "object" || l === null || typeof t != "object" || t === null)
    return !1;
  var a = Object.keys(l),
    e = Object.keys(t);
  if (a.length !== e.length) return !1;
  for (e = 0; e < a.length; e++) {
    var u = a[e];
    if (!Oi.call(t, u) || !Rl(l[u], t[u])) return !1;
  }
  return !0;
}
function Gf(l) {
  for (; l && l.firstChild; ) l = l.firstChild;
  return l;
}
function Cf(l, t) {
  var a = Gf(l);
  l = 0;
  for (var e; a; ) {
    if (a.nodeType === 3) {
      if (((e = l + a.textContent.length), l <= t && e >= t))
        return { node: a, offset: t - l };
      l = e;
    }
    l: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break l;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = Gf(a);
  }
}
function qo(l, t) {
  return l && t
    ? l === t
      ? !0
      : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qo(l, t.parentNode)
          : "contains" in l
            ? l.contains(t)
            : l.compareDocumentPosition
              ? !!(l.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Go(l) {
  l =
    l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null
      ? l.ownerDocument.defaultView
      : window;
  for (var t = Zu(l.document); t instanceof l.HTMLIFrameElement; ) {
    try {
      var a = typeof t.contentWindow.location.href == "string";
    } catch {
      a = !1;
    }
    if (a) l = t.contentWindow;
    else break;
    t = Zu(l.document);
  }
  return t;
}
function Dc(l) {
  var t = l && l.nodeName && l.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (l.type === "text" ||
        l.type === "search" ||
        l.type === "tel" ||
        l.type === "url" ||
        l.type === "password")) ||
      t === "textarea" ||
      l.contentEditable === "true")
  );
}
var xr = rt && "documentMode" in document && 11 >= document.documentMode,
  Ta = null,
  Ui = null,
  ge = null,
  ji = !1;
function Xf(l, t, a) {
  var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  ji ||
    Ta == null ||
    Ta !== Zu(e) ||
    ((e = Ta),
    "selectionStart" in e && Dc(e)
      ? (e = { start: e.selectionStart, end: e.selectionEnd })
      : ((e = (
          (e.ownerDocument && e.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (e = {
          anchorNode: e.anchorNode,
          anchorOffset: e.anchorOffset,
          focusNode: e.focusNode,
          focusOffset: e.focusOffset,
        })),
    (ge && je(ge, e)) ||
      ((ge = e),
      (e = cn(Ui, "onSelect")),
      0 < e.length &&
        ((t = new An("onSelect", "select", null, t, a)),
        l.push({ event: t, listeners: e }),
        (t.target = Ta))));
}
function wt(l, t) {
  var a = {};
  return (
    (a[l.toLowerCase()] = t.toLowerCase()),
    (a["Webkit" + l] = "webkit" + t),
    (a["Moz" + l] = "moz" + t),
    a
  );
}
var za = {
    animationend: wt("Animation", "AnimationEnd"),
    animationiteration: wt("Animation", "AnimationIteration"),
    animationstart: wt("Animation", "AnimationStart"),
    transitionrun: wt("Transition", "TransitionRun"),
    transitionstart: wt("Transition", "TransitionStart"),
    transitioncancel: wt("Transition", "TransitionCancel"),
    transitionend: wt("Transition", "TransitionEnd"),
  },
  $n = {},
  Co = {};
rt &&
  ((Co = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete za.animationend.animation,
    delete za.animationiteration.animation,
    delete za.animationstart.animation),
  "TransitionEvent" in window || delete za.transitionend.transition);
function oa(l) {
  if ($n[l]) return $n[l];
  if (!za[l]) return l;
  var t = za[l],
    a;
  for (a in t) if (t.hasOwnProperty(a) && a in Co) return ($n[l] = t[a]);
  return l;
}
var Xo = oa("animationend"),
  Qo = oa("animationiteration"),
  Zo = oa("animationstart"),
  _r = oa("transitionrun"),
  Mr = oa("transitionstart"),
  Dr = oa("transitioncancel"),
  Vo = oa("transitionend"),
  Lo = new Map(),
  Ri =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
Ri.push("scrollEnd");
function Jl(l, t) {
  Lo.set(l, t), fa(t, [l]);
}
var Qf = new WeakMap();
function Xl(l, t) {
  if (typeof l == "object" && l !== null) {
    var a = Qf.get(l);
    return a !== void 0
      ? a
      : ((t = { value: l, source: t, stack: Of(t) }), Qf.set(l, t), t);
  }
  return { value: l, source: t, stack: Of(t) };
}
var Bl = [],
  Oa = 0,
  Nc = 0;
function zn() {
  for (var l = Oa, t = (Nc = Oa = 0); t < l; ) {
    var a = Bl[t];
    Bl[t++] = null;
    var e = Bl[t];
    Bl[t++] = null;
    var u = Bl[t];
    Bl[t++] = null;
    var n = Bl[t];
    if (((Bl[t++] = null), e !== null && u !== null)) {
      var i = e.pending;
      i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
        (e.pending = u);
    }
    n !== 0 && Ko(a, u, n);
  }
}
function On(l, t, a, e) {
  (Bl[Oa++] = l),
    (Bl[Oa++] = t),
    (Bl[Oa++] = a),
    (Bl[Oa++] = e),
    (Nc |= e),
    (l.lanes |= e),
    (l = l.alternate),
    l !== null && (l.lanes |= e);
}
function Uc(l, t, a, e) {
  return On(l, t, a, e), Vu(l);
}
function Pa(l, t) {
  return On(l, null, null, t), Vu(l);
}
function Ko(l, t, a) {
  l.lanes |= a;
  var e = l.alternate;
  e !== null && (e.lanes |= a);
  for (var u = !1, n = l.return; n !== null; )
    (n.childLanes |= a),
      (e = n.alternate),
      e !== null && (e.childLanes |= a),
      n.tag === 22 &&
        ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
      (l = n),
      (n = n.return);
  return l.tag === 3
    ? ((n = l.stateNode),
      u &&
        t !== null &&
        ((u = 31 - Nl(a)),
        (l = n.hiddenUpdates),
        (e = l[u]),
        e === null ? (l[u] = [t]) : e.push(t),
        (t.lane = a | 536870912)),
      n)
    : null;
}
function Vu(l) {
  if (50 < _e) throw ((_e = 0), (lc = null), Error(b(185)));
  for (var t = l.return; t !== null; ) (l = t), (t = l.return);
  return l.tag === 3 ? l.stateNode : null;
}
var xa = {};
function Nr(l, t, a, e) {
  (this.tag = l),
    (this.key = a),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = e),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ml(l, t, a, e) {
  return new Nr(l, t, a, e);
}
function jc(l) {
  return (l = l.prototype), !(!l || !l.isReactComponent);
}
function ot(l, t) {
  var a = l.alternate;
  return (
    a === null
      ? ((a = Ml(l.tag, t, l.key, l.mode)),
        (a.elementType = l.elementType),
        (a.type = l.type),
        (a.stateNode = l.stateNode),
        (a.alternate = l),
        (l.alternate = a))
      : ((a.pendingProps = t),
        (a.type = l.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
    (a.flags = l.flags & 65011712),
    (a.childLanes = l.childLanes),
    (a.lanes = l.lanes),
    (a.child = l.child),
    (a.memoizedProps = l.memoizedProps),
    (a.memoizedState = l.memoizedState),
    (a.updateQueue = l.updateQueue),
    (t = l.dependencies),
    (a.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (a.sibling = l.sibling),
    (a.index = l.index),
    (a.ref = l.ref),
    (a.refCleanup = l.refCleanup),
    a
  );
}
function Jo(l, t) {
  l.flags &= 65011714;
  var a = l.alternate;
  return (
    a === null
      ? ((l.childLanes = 0),
        (l.lanes = t),
        (l.child = null),
        (l.subtreeFlags = 0),
        (l.memoizedProps = null),
        (l.memoizedState = null),
        (l.updateQueue = null),
        (l.dependencies = null),
        (l.stateNode = null))
      : ((l.childLanes = a.childLanes),
        (l.lanes = a.lanes),
        (l.child = a.child),
        (l.subtreeFlags = 0),
        (l.deletions = null),
        (l.memoizedProps = a.memoizedProps),
        (l.memoizedState = a.memoizedState),
        (l.updateQueue = a.updateQueue),
        (l.type = a.type),
        (t = a.dependencies),
        (l.dependencies =
          t === null
            ? null
            : { lanes: t.lanes, firstContext: t.firstContext })),
    l
  );
}
function Mu(l, t, a, e, u, n) {
  var i = 0;
  if (((e = l), typeof l == "function")) jc(l) && (i = 1);
  else if (typeof l == "string")
    i = jh(l, a, Wl.current)
      ? 26
      : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
  else
    l: switch (l) {
      case Ai:
        return (l = Ml(31, a, t, u)), (l.elementType = Ai), (l.lanes = n), l;
      case ba:
        return Pt(a.children, u, n, t);
      case oo:
        (i = 8), (u |= 24);
        break;
      case bi:
        return (
          (l = Ml(12, a, t, u | 2)), (l.elementType = bi), (l.lanes = n), l
        );
      case Si:
        return (l = Ml(13, a, t, u)), (l.elementType = Si), (l.lanes = n), l;
      case pi:
        return (l = Ml(19, a, t, u)), (l.elementType = pi), (l.lanes = n), l;
      default:
        if (typeof l == "object" && l !== null)
          switch (l.$$typeof) {
            case pd:
            case nt:
              i = 10;
              break l;
            case ro:
              i = 9;
              break l;
            case bc:
              i = 11;
              break l;
            case Sc:
              i = 14;
              break l;
            case At:
              (i = 16), (e = null);
              break l;
          }
        (i = 29),
          (a = Error(b(130, l === null ? "null" : typeof l, ""))),
          (e = null);
    }
  return (
    (t = Ml(i, a, t, u)), (t.elementType = l), (t.type = e), (t.lanes = n), t
  );
}
function Pt(l, t, a, e) {
  return (l = Ml(7, l, e, t)), (l.lanes = a), l;
}
function Wn(l, t, a) {
  return (l = Ml(6, l, null, t)), (l.lanes = a), l;
}
function Fn(l, t, a) {
  return (
    (t = Ml(4, l.children !== null ? l.children : [], l.key, t)),
    (t.lanes = a),
    (t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation,
    }),
    t
  );
}
var _a = [],
  Ma = 0,
  Lu = null,
  Ku = 0,
  ql = [],
  Gl = 0,
  It = null,
  it = 1,
  ct = "";
function $t(l, t) {
  (_a[Ma++] = Ku), (_a[Ma++] = Lu), (Lu = l), (Ku = t);
}
function wo(l, t, a) {
  (ql[Gl++] = it), (ql[Gl++] = ct), (ql[Gl++] = It), (It = l);
  var e = it;
  l = ct;
  var u = 32 - Nl(e) - 1;
  (e &= ~(1 << u)), (a += 1);
  var n = 32 - Nl(t) + u;
  if (30 < n) {
    var i = u - (u % 5);
    (n = (e & ((1 << i) - 1)).toString(32)),
      (e >>= i),
      (u -= i),
      (it = (1 << (32 - Nl(t) + u)) | (a << u) | e),
      (ct = n + l);
  } else (it = (1 << n) | (a << u) | e), (ct = l);
}
function Rc(l) {
  l.return !== null && ($t(l, 1), wo(l, 1, 0));
}
function Hc(l) {
  for (; l === Lu; )
    (Lu = _a[--Ma]), (_a[Ma] = null), (Ku = _a[--Ma]), (_a[Ma] = null);
  for (; l === It; )
    (It = ql[--Gl]),
      (ql[Gl] = null),
      (ct = ql[--Gl]),
      (ql[Gl] = null),
      (it = ql[--Gl]),
      (ql[Gl] = null);
}
var gl = null,
  W = null,
  q = !1,
  la = null,
  kl = !1,
  Hi = Error(b(519));
function ua(l) {
  var t = Error(b(418, ""));
  throw (Re(Xl(t, l)), Hi);
}
function Zf(l) {
  var t = l.stateNode,
    a = l.type,
    e = l.memoizedProps;
  switch (((t[vl] = l), (t[Tl] = e), a)) {
    case "dialog":
      j("cancel", t), j("close", t);
      break;
    case "iframe":
    case "object":
    case "embed":
      j("load", t);
      break;
    case "video":
    case "audio":
      for (a = 0; a < Ye.length; a++) j(Ye[a], t);
      break;
    case "source":
      j("error", t);
      break;
    case "img":
    case "image":
    case "link":
      j("error", t), j("load", t);
      break;
    case "details":
      j("toggle", t);
      break;
    case "input":
      j("invalid", t),
        Oo(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        ),
        Qu(t);
      break;
    case "select":
      j("invalid", t);
      break;
    case "textarea":
      j("invalid", t), _o(t, e.value, e.defaultValue, e.children), Qu(t);
  }
  (a = e.children),
    (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
    t.textContent === "" + a ||
    e.suppressHydrationWarning === !0 ||
    M1(t.textContent, a)
      ? (e.popover != null && (j("beforetoggle", t), j("toggle", t)),
        e.onScroll != null && j("scroll", t),
        e.onScrollEnd != null && j("scrollend", t),
        e.onClick != null && (t.onclick = Rn),
        (t = !0))
      : (t = !1),
    t || ua(l);
}
function Vf(l) {
  for (gl = l.return; gl; )
    switch (gl.tag) {
      case 5:
      case 13:
        kl = !1;
        return;
      case 27:
      case 3:
        kl = !0;
        return;
      default:
        gl = gl.return;
    }
}
function ne(l) {
  if (l !== gl) return !1;
  if (!q) return Vf(l), (q = !0), !1;
  var t = l.tag,
    a;
  if (
    ((a = t !== 3 && t !== 27) &&
      ((a = t === 5) &&
        ((a = l.type),
        (a = !(a !== "form" && a !== "button") || ic(l.type, l.memoizedProps))),
      (a = !a)),
    a && W && ua(l),
    Vf(l),
    t === 13)
  ) {
    if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
      throw Error(b(317));
    l: {
      for (l = l.nextSibling, t = 0; l; ) {
        if (l.nodeType === 8)
          if (((a = l.data), a === "/$")) {
            if (t === 0) {
              W = Kl(l.nextSibling);
              break l;
            }
            t--;
          } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
        l = l.nextSibling;
      }
      W = null;
    }
  } else
    t === 27
      ? ((t = W), Lt(l.type) ? ((l = sc), (sc = null), (W = l)) : (W = t))
      : (W = gl ? Kl(l.stateNode.nextSibling) : null);
  return !0;
}
function $e() {
  (W = gl = null), (q = !1);
}
function Lf() {
  var l = la;
  return (
    l !== null && (El === null ? (El = l) : El.push.apply(El, l), (la = null)),
    l
  );
}
function Re(l) {
  la === null ? (la = [l]) : la.push(l);
}
var Bi = Il(null),
  da = null,
  ft = null;
function Tt(l, t, a) {
  k(Bi, t._currentValue), (t._currentValue = a);
}
function dt(l) {
  (l._currentValue = Bi.current), dl(Bi);
}
function Yi(l, t, a) {
  for (; l !== null; ) {
    var e = l.alternate;
    if (
      ((l.childLanes & t) !== t
        ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
        : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
      l === a)
    )
      break;
    l = l.return;
  }
}
function qi(l, t, a, e) {
  var u = l.child;
  for (u !== null && (u.return = l); u !== null; ) {
    var n = u.dependencies;
    if (n !== null) {
      var i = u.child;
      n = n.firstContext;
      l: for (; n !== null; ) {
        var c = n;
        n = u;
        for (var f = 0; f < t.length; f++)
          if (c.context === t[f]) {
            (n.lanes |= a),
              (c = n.alternate),
              c !== null && (c.lanes |= a),
              Yi(n.return, a, l),
              e || (i = null);
            break l;
          }
        n = c.next;
      }
    } else if (u.tag === 18) {
      if (((i = u.return), i === null)) throw Error(b(341));
      (i.lanes |= a),
        (n = i.alternate),
        n !== null && (n.lanes |= a),
        Yi(i, a, l),
        (i = null);
    } else i = u.child;
    if (i !== null) i.return = u;
    else
      for (i = u; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (((u = i.sibling), u !== null)) {
          (u.return = i.return), (i = u);
          break;
        }
        i = i.return;
      }
    u = i;
  }
}
function We(l, t, a, e) {
  l = null;
  for (var u = t, n = !1; u !== null; ) {
    if (!n) {
      if (u.flags & 524288) n = !0;
      else if (u.flags & 262144) break;
    }
    if (u.tag === 10) {
      var i = u.alternate;
      if (i === null) throw Error(b(387));
      if (((i = i.memoizedProps), i !== null)) {
        var c = u.type;
        Rl(u.pendingProps.value, i.value) ||
          (l !== null ? l.push(c) : (l = [c]));
      }
    } else if (u === qu.current) {
      if (((i = u.alternate), i === null)) throw Error(b(387));
      i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
        (l !== null ? l.push(Ce) : (l = [Ce]));
    }
    u = u.return;
  }
  l !== null && qi(t, l, a, e), (t.flags |= 262144);
}
function Ju(l) {
  for (l = l.firstContext; l !== null; ) {
    if (!Rl(l.context._currentValue, l.memoizedValue)) return !0;
    l = l.next;
  }
  return !1;
}
function na(l) {
  (da = l),
    (ft = null),
    (l = l.dependencies),
    l !== null && (l.firstContext = null);
}
function yl(l) {
  return ko(da, l);
}
function mu(l, t) {
  return da === null && na(l), ko(l, t);
}
function ko(l, t) {
  var a = t._currentValue;
  if (((t = { context: t, memoizedValue: a, next: null }), ft === null)) {
    if (l === null) throw Error(b(308));
    (ft = t),
      (l.dependencies = { lanes: 0, firstContext: t }),
      (l.flags |= 524288);
  } else ft = ft.next = t;
  return a;
}
var Ur =
    typeof AbortController < "u"
      ? AbortController
      : function () {
          var l = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (a, e) {
                l.push(e);
              },
            });
          this.abort = function () {
            (t.aborted = !0),
              l.forEach(function (a) {
                return a();
              });
          };
        },
  jr = il.unstable_scheduleCallback,
  Rr = il.unstable_NormalPriority,
  ul = {
    $$typeof: nt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function Bc() {
  return { controller: new Ur(), data: new Map(), refCount: 0 };
}
function Fe(l) {
  l.refCount--,
    l.refCount === 0 &&
      jr(Rr, function () {
        l.controller.abort();
      });
}
var be = null,
  Gi = 0,
  Qa = 0,
  Ra = null;
function Hr(l, t) {
  if (be === null) {
    var a = (be = []);
    (Gi = 0),
      (Qa = uf()),
      (Ra = {
        status: "pending",
        value: void 0,
        then: function (e) {
          a.push(e);
        },
      });
  }
  return Gi++, t.then(Kf, Kf), t;
}
function Kf() {
  if (--Gi === 0 && be !== null) {
    Ra !== null && (Ra.status = "fulfilled");
    var l = be;
    (be = null), (Qa = 0), (Ra = null);
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
}
function Br(l, t) {
  var a = [],
    e = {
      status: "pending",
      value: null,
      reason: null,
      then: function (u) {
        a.push(u);
      },
    };
  return (
    l.then(
      function () {
        (e.status = "fulfilled"), (e.value = t);
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function (u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ),
    e
  );
}
var Jf = x.S;
x.S = function (l, t) {
  typeof t == "object" && t !== null && typeof t.then == "function" && Hr(l, t),
    Jf !== null && Jf(l, t);
};
var ta = Il(null);
function Yc() {
  var l = ta.current;
  return l !== null ? l : L.pooledCache;
}
function Du(l, t) {
  t === null ? k(ta, ta.current) : k(ta, t.pool);
}
function $o() {
  var l = Yc();
  return l === null ? null : { parent: ul._currentValue, pool: l };
}
var Pe = Error(b(460)),
  Wo = Error(b(474)),
  xn = Error(b(542)),
  Ci = { then: function () {} };
function wf(l) {
  return (l = l.status), l === "fulfilled" || l === "rejected";
}
function vu() {}
function Fo(l, t, a) {
  switch (
    ((a = l[a]),
    a === void 0 ? l.push(t) : a !== t && (t.then(vu, vu), (t = a)),
    t.status)
  ) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw ((l = t.reason), $f(l), l);
    default:
      if (typeof t.status == "string") t.then(vu, vu);
      else {
        if (((l = L), l !== null && 100 < l.shellSuspendCounter))
          throw Error(b(482));
        (l = t),
          (l.status = "pending"),
          l.then(
            function (e) {
              if (t.status === "pending") {
                var u = t;
                (u.status = "fulfilled"), (u.value = e);
              }
            },
            function (e) {
              if (t.status === "pending") {
                var u = t;
                (u.status = "rejected"), (u.reason = e);
              }
            }
          );
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((l = t.reason), $f(l), l);
      }
      throw ((Se = t), Pe);
  }
}
var Se = null;
function kf() {
  if (Se === null) throw Error(b(459));
  var l = Se;
  return (Se = null), l;
}
function $f(l) {
  if (l === Pe || l === xn) throw Error(b(483));
}
var Et = !1;
function qc(l) {
  l.updateQueue = {
    baseState: l.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function Xi(l, t) {
  (l = l.updateQueue),
    t.updateQueue === l &&
      (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null,
      });
}
function Rt(l) {
  return { lane: l, tag: 0, payload: null, callback: null, next: null };
}
function Ht(l, t, a) {
  var e = l.updateQueue;
  if (e === null) return null;
  if (((e = e.shared), X & 2)) {
    var u = e.pending;
    return (
      u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (e.pending = t),
      (t = Vu(l)),
      Ko(l, null, a),
      t
    );
  }
  return On(l, e, t, a), Vu(l);
}
function pe(l, t, a) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
  ) {
    var e = t.lanes;
    (e &= l.pendingLanes), (a |= e), (t.lanes = a), So(l, a);
  }
}
function Pn(l, t) {
  var a = l.updateQueue,
    e = l.alternate;
  if (e !== null && ((e = e.updateQueue), a === e)) {
    var u = null,
      n = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var i = {
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: null,
          next: null,
        };
        n === null ? (u = n = i) : (n = n.next = i), (a = a.next);
      } while (a !== null);
      n === null ? (u = n = t) : (n = n.next = t);
    } else u = n = t;
    (a = {
      baseState: e.baseState,
      firstBaseUpdate: u,
      lastBaseUpdate: n,
      shared: e.shared,
      callbacks: e.callbacks,
    }),
      (l.updateQueue = a);
    return;
  }
  (l = a.lastBaseUpdate),
    l === null ? (a.firstBaseUpdate = t) : (l.next = t),
    (a.lastBaseUpdate = t);
}
var Qi = !1;
function Ae() {
  if (Qi) {
    var l = Ra;
    if (l !== null) throw l;
  }
}
function Ee(l, t, a, e) {
  Qi = !1;
  var u = l.updateQueue;
  Et = !1;
  var n = u.firstBaseUpdate,
    i = u.lastBaseUpdate,
    c = u.shared.pending;
  if (c !== null) {
    u.shared.pending = null;
    var f = c,
      d = f.next;
    (f.next = null), i === null ? (n = d) : (i.next = d), (i = f);
    var y = l.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (c = y.lastBaseUpdate),
      c !== i &&
        (c === null ? (y.firstBaseUpdate = d) : (c.next = d),
        (y.lastBaseUpdate = f)));
  }
  if (n !== null) {
    var v = u.baseState;
    (i = 0), (y = d = f = null), (c = n);
    do {
      var r = c.lane & -536870913,
        m = r !== c.lane;
      if (m ? (B & r) === r : (e & r) === r) {
        r !== 0 && r === Qa && (Qi = !0),
          y !== null &&
            (y = y.next =
              {
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: null,
                next: null,
              });
        l: {
          var z = l,
            T = c;
          r = t;
          var Y = a;
          switch (T.tag) {
            case 1:
              if (((z = T.payload), typeof z == "function")) {
                v = z.call(Y, v, r);
                break l;
              }
              v = z;
              break l;
            case 3:
              z.flags = (z.flags & -65537) | 128;
            case 0:
              if (
                ((z = T.payload),
                (r = typeof z == "function" ? z.call(Y, v, r) : z),
                r == null)
              )
                break l;
              v = K({}, v, r);
              break l;
            case 2:
              Et = !0;
          }
        }
        (r = c.callback),
          r !== null &&
            ((l.flags |= 64),
            m && (l.flags |= 8192),
            (m = u.callbacks),
            m === null ? (u.callbacks = [r]) : m.push(r));
      } else
        (m = {
          lane: r,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          y === null ? ((d = y = m), (f = v)) : (y = y.next = m),
          (i |= r);
      if (((c = c.next), c === null)) {
        if (((c = u.shared.pending), c === null)) break;
        (m = c),
          (c = m.next),
          (m.next = null),
          (u.lastBaseUpdate = m),
          (u.shared.pending = null);
      }
    } while (!0);
    y === null && (f = v),
      (u.baseState = f),
      (u.firstBaseUpdate = d),
      (u.lastBaseUpdate = y),
      n === null && (u.shared.lanes = 0),
      (Zt |= i),
      (l.lanes = i),
      (l.memoizedState = v);
  }
}
function Po(l, t) {
  if (typeof l != "function") throw Error(b(191, l));
  l.call(t);
}
function Io(l, t) {
  var a = l.callbacks;
  if (a !== null)
    for (l.callbacks = null, l = 0; l < a.length; l++) Po(a[l], t);
}
var Za = Il(null),
  wu = Il(0);
function Wf(l, t) {
  (l = vt), k(wu, l), k(Za, t), (vt = l | t.baseLanes);
}
function Zi() {
  k(wu, vt), k(Za, Za.current);
}
function Gc() {
  (vt = wu.current), dl(Za), dl(wu);
}
var Xt = 0,
  D = null,
  Z = null,
  al = null,
  ku = !1,
  Ha = !1,
  ia = !1,
  $u = 0,
  He = 0,
  Ba = null,
  Yr = 0;
function ll() {
  throw Error(b(321));
}
function Cc(l, t) {
  if (t === null) return !1;
  for (var a = 0; a < t.length && a < l.length; a++)
    if (!Rl(l[a], t[a])) return !1;
  return !0;
}
function Xc(l, t, a, e, u, n) {
  return (
    (Xt = n),
    (D = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (x.H = l === null || l.memoizedState === null ? N0 : U0),
    (ia = !1),
    (n = a(e, u)),
    (ia = !1),
    Ha && (n = t0(t, a, e, u)),
    l0(l),
    n
  );
}
function l0(l) {
  x.H = Wu;
  var t = Z !== null && Z.next !== null;
  if (((Xt = 0), (al = Z = D = null), (ku = !1), (He = 0), (Ba = null), t))
    throw Error(b(300));
  l === null || ol || ((l = l.dependencies), l !== null && Ju(l) && (ol = !0));
}
function t0(l, t, a, e) {
  D = l;
  var u = 0;
  do {
    if ((Ha && (Ba = null), (He = 0), (Ha = !1), 25 <= u)) throw Error(b(301));
    if (((u += 1), (al = Z = null), l.updateQueue != null)) {
      var n = l.updateQueue;
      (n.lastEffect = null),
        (n.events = null),
        (n.stores = null),
        n.memoCache != null && (n.memoCache.index = 0);
    }
    (x.H = Vr), (n = t(a, e));
  } while (Ha);
  return n;
}
function qr() {
  var l = x.H,
    t = l.useState()[0];
  return (
    (t = typeof t.then == "function" ? Ie(t) : t),
    (l = l.useState()[0]),
    (Z !== null ? Z.memoizedState : null) !== l && (D.flags |= 1024),
    t
  );
}
function Qc() {
  var l = $u !== 0;
  return ($u = 0), l;
}
function Zc(l, t, a) {
  (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
}
function Vc(l) {
  if (ku) {
    for (l = l.memoizedState; l !== null; ) {
      var t = l.queue;
      t !== null && (t.pending = null), (l = l.next);
    }
    ku = !1;
  }
  (Xt = 0), (al = Z = D = null), (Ha = !1), (He = $u = 0), (Ba = null);
}
function pl() {
  var l = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return al === null ? (D.memoizedState = al = l) : (al = al.next = l), al;
}
function el() {
  if (Z === null) {
    var l = D.alternate;
    l = l !== null ? l.memoizedState : null;
  } else l = Z.next;
  var t = al === null ? D.memoizedState : al.next;
  if (t !== null) (al = t), (Z = l);
  else {
    if (l === null) throw D.alternate === null ? Error(b(467)) : Error(b(310));
    (Z = l),
      (l = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      al === null ? (D.memoizedState = al = l) : (al = al.next = l);
  }
  return al;
}
function Lc() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function Ie(l) {
  var t = He;
  return (
    (He += 1),
    Ba === null && (Ba = []),
    (l = Fo(Ba, l, t)),
    (t = D),
    (al === null ? t.memoizedState : al.next) === null &&
      ((t = t.alternate),
      (x.H = t === null || t.memoizedState === null ? N0 : U0)),
    l
  );
}
function _n(l) {
  if (l !== null && typeof l == "object") {
    if (typeof l.then == "function") return Ie(l);
    if (l.$$typeof === nt) return yl(l);
  }
  throw Error(b(438, String(l)));
}
function Kc(l) {
  var t = null,
    a = D.updateQueue;
  if ((a !== null && (t = a.memoCache), t == null)) {
    var e = D.alternate;
    e !== null &&
      ((e = e.updateQueue),
      e !== null &&
        ((e = e.memoCache),
        e != null &&
          (t = {
            data: e.data.map(function (u) {
              return u.slice();
            }),
            index: 0,
          })));
  }
  if (
    (t == null && (t = { data: [], index: 0 }),
    a === null && ((a = Lc()), (D.updateQueue = a)),
    (a.memoCache = t),
    (a = t.data[t.index]),
    a === void 0)
  )
    for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Ad;
  return t.index++, a;
}
function ht(l, t) {
  return typeof t == "function" ? t(l) : t;
}
function Nu(l) {
  var t = el();
  return Jc(t, Z, l);
}
function Jc(l, t, a) {
  var e = l.queue;
  if (e === null) throw Error(b(311));
  e.lastRenderedReducer = a;
  var u = l.baseQueue,
    n = e.pending;
  if (n !== null) {
    if (u !== null) {
      var i = u.next;
      (u.next = n.next), (n.next = i);
    }
    (t.baseQueue = u = n), (e.pending = null);
  }
  if (((n = l.baseState), u === null)) l.memoizedState = n;
  else {
    t = u.next;
    var c = (i = null),
      f = null,
      d = t,
      y = !1;
    do {
      var v = d.lane & -536870913;
      if (v !== d.lane ? (B & v) === v : (Xt & v) === v) {
        var r = d.revertLane;
        if (r === 0)
          f !== null &&
            (f = f.next =
              {
                lane: 0,
                revertLane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null,
              }),
            v === Qa && (y = !0);
        else if ((Xt & r) === r) {
          (d = d.next), r === Qa && (y = !0);
          continue;
        } else
          (v = {
            lane: 0,
            revertLane: d.revertLane,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null,
          }),
            f === null ? ((c = f = v), (i = n)) : (f = f.next = v),
            (D.lanes |= r),
            (Zt |= r);
        (v = d.action),
          ia && a(n, v),
          (n = d.hasEagerState ? d.eagerState : a(n, v));
      } else
        (r = {
          lane: v,
          revertLane: d.revertLane,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        }),
          f === null ? ((c = f = r), (i = n)) : (f = f.next = r),
          (D.lanes |= v),
          (Zt |= v);
      d = d.next;
    } while (d !== null && d !== t);
    if (
      (f === null ? (i = n) : (f.next = c),
      !Rl(n, l.memoizedState) && ((ol = !0), y && ((a = Ra), a !== null)))
    )
      throw a;
    (l.memoizedState = n),
      (l.baseState = i),
      (l.baseQueue = f),
      (e.lastRenderedState = n);
  }
  return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
}
function In(l) {
  var t = el(),
    a = t.queue;
  if (a === null) throw Error(b(311));
  a.lastRenderedReducer = l;
  var e = a.dispatch,
    u = a.pending,
    n = t.memoizedState;
  if (u !== null) {
    a.pending = null;
    var i = (u = u.next);
    do (n = l(n, i.action)), (i = i.next);
    while (i !== u);
    Rl(n, t.memoizedState) || (ol = !0),
      (t.memoizedState = n),
      t.baseQueue === null && (t.baseState = n),
      (a.lastRenderedState = n);
  }
  return [n, e];
}
function a0(l, t, a) {
  var e = D,
    u = el(),
    n = q;
  if (n) {
    if (a === void 0) throw Error(b(407));
    a = a();
  } else a = t();
  var i = !Rl((Z || u).memoizedState, a);
  i && ((u.memoizedState = a), (ol = !0)), (u = u.queue);
  var c = n0.bind(null, e, u, l);
  if (
    (lu(2048, 8, c, [l]),
    u.getSnapshot !== t || i || (al !== null && al.memoizedState.tag & 1))
  ) {
    if (
      ((e.flags |= 2048),
      Va(9, Mn(), u0.bind(null, e, u, a, t), null),
      L === null)
    )
      throw Error(b(349));
    n || Xt & 124 || e0(e, t, a);
  }
  return a;
}
function e0(l, t, a) {
  (l.flags |= 16384),
    (l = { getSnapshot: t, value: a }),
    (t = D.updateQueue),
    t === null
      ? ((t = Lc()), (D.updateQueue = t), (t.stores = [l]))
      : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
}
function u0(l, t, a, e) {
  (t.value = a), (t.getSnapshot = e), i0(t) && c0(l);
}
function n0(l, t, a) {
  return a(function () {
    i0(t) && c0(l);
  });
}
function i0(l) {
  var t = l.getSnapshot;
  l = l.value;
  try {
    var a = t();
    return !Rl(l, a);
  } catch {
    return !0;
  }
}
function c0(l) {
  var t = Pa(l, 2);
  t !== null && jl(t, l, 2);
}
function Vi(l) {
  var t = pl();
  if (typeof l == "function") {
    var a = l;
    if (((l = a()), ia)) {
      _t(!0);
      try {
        a();
      } finally {
        _t(!1);
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = l),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ht,
      lastRenderedState: l,
    }),
    t
  );
}
function f0(l, t, a, e) {
  return (l.baseState = a), Jc(l, Z, typeof e == "function" ? e : ht);
}
function Gr(l, t, a, e, u) {
  if (Dn(l)) throw Error(b(485));
  if (((l = t.action), l !== null)) {
    var n = {
      payload: u,
      action: l,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (i) {
        n.listeners.push(i);
      },
    };
    x.T !== null ? a(!0) : (n.isTransition = !1),
      e(n),
      (a = t.pending),
      a === null
        ? ((n.next = t.pending = n), s0(t, n))
        : ((n.next = a.next), (t.pending = a.next = n));
  }
}
function s0(l, t) {
  var a = t.action,
    e = t.payload,
    u = l.state;
  if (t.isTransition) {
    var n = x.T,
      i = {};
    x.T = i;
    try {
      var c = a(u, e),
        f = x.S;
      f !== null && f(i, c), Ff(l, t, c);
    } catch (d) {
      Li(l, t, d);
    } finally {
      x.T = n;
    }
  } else
    try {
      (n = a(u, e)), Ff(l, t, n);
    } catch (d) {
      Li(l, t, d);
    }
}
function Ff(l, t, a) {
  a !== null && typeof a == "object" && typeof a.then == "function"
    ? a.then(
        function (e) {
          Pf(l, t, e);
        },
        function (e) {
          return Li(l, t, e);
        }
      )
    : Pf(l, t, a);
}
function Pf(l, t, a) {
  (t.status = "fulfilled"),
    (t.value = a),
    o0(t),
    (l.state = a),
    (t = l.pending),
    t !== null &&
      ((a = t.next),
      a === t ? (l.pending = null) : ((a = a.next), (t.next = a), s0(l, a)));
}
function Li(l, t, a) {
  var e = l.pending;
  if (((l.pending = null), e !== null)) {
    e = e.next;
    do (t.status = "rejected"), (t.reason = a), o0(t), (t = t.next);
    while (t !== e);
  }
  l.action = null;
}
function o0(l) {
  l = l.listeners;
  for (var t = 0; t < l.length; t++) (0, l[t])();
}
function d0(l, t) {
  return t;
}
function If(l, t) {
  if (q) {
    var a = L.formState;
    if (a !== null) {
      l: {
        var e = D;
        if (q) {
          if (W) {
            t: {
              for (var u = W, n = kl; u.nodeType !== 8; ) {
                if (!n) {
                  u = null;
                  break t;
                }
                if (((u = Kl(u.nextSibling)), u === null)) {
                  u = null;
                  break t;
                }
              }
              (n = u.data), (u = n === "F!" || n === "F" ? u : null);
            }
            if (u) {
              (W = Kl(u.nextSibling)), (e = u.data === "F!");
              break l;
            }
          }
          ua(e);
        }
        e = !1;
      }
      e && (t = a[0]);
    }
  }
  return (
    (a = pl()),
    (a.memoizedState = a.baseState = t),
    (e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: d0,
      lastRenderedState: t,
    }),
    (a.queue = e),
    (a = _0.bind(null, D, e)),
    (e.dispatch = a),
    (e = Vi(!1)),
    (n = Wc.bind(null, D, !1, e.queue)),
    (e = pl()),
    (u = { state: t, dispatch: null, action: l, pending: null }),
    (e.queue = u),
    (a = Gr.bind(null, D, u, n, a)),
    (u.dispatch = a),
    (e.memoizedState = l),
    [t, a, !1]
  );
}
function ls(l) {
  var t = el();
  return r0(t, Z, l);
}
function r0(l, t, a) {
  if (
    ((t = Jc(l, t, d0)[0]),
    (l = Nu(ht)[0]),
    typeof t == "object" && t !== null && typeof t.then == "function")
  )
    try {
      var e = Ie(t);
    } catch (i) {
      throw i === Pe ? xn : i;
    }
  else e = t;
  t = el();
  var u = t.queue,
    n = u.dispatch;
  return (
    a !== t.memoizedState &&
      ((D.flags |= 2048), Va(9, Mn(), Cr.bind(null, u, a), null)),
    [e, n, l]
  );
}
function Cr(l, t) {
  l.action = t;
}
function ts(l) {
  var t = el(),
    a = Z;
  if (a !== null) return r0(t, a, l);
  el(), (t = t.memoizedState), (a = el());
  var e = a.queue.dispatch;
  return (a.memoizedState = l), [t, e, !1];
}
function Va(l, t, a, e) {
  return (
    (l = { tag: l, create: a, deps: e, inst: t, next: null }),
    (t = D.updateQueue),
    t === null && ((t = Lc()), (D.updateQueue = t)),
    (a = t.lastEffect),
    a === null
      ? (t.lastEffect = l.next = l)
      : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
    l
  );
}
function Mn() {
  return { destroy: void 0, resource: void 0 };
}
function h0() {
  return el().memoizedState;
}
function Uu(l, t, a, e) {
  var u = pl();
  (e = e === void 0 ? null : e),
    (D.flags |= l),
    (u.memoizedState = Va(1 | t, Mn(), a, e));
}
function lu(l, t, a, e) {
  var u = el();
  e = e === void 0 ? null : e;
  var n = u.memoizedState.inst;
  Z !== null && e !== null && Cc(e, Z.memoizedState.deps)
    ? (u.memoizedState = Va(t, n, a, e))
    : ((D.flags |= l), (u.memoizedState = Va(1 | t, n, a, e)));
}
function as(l, t) {
  Uu(8390656, 8, l, t);
}
function m0(l, t) {
  lu(2048, 8, l, t);
}
function v0(l, t) {
  return lu(4, 2, l, t);
}
function y0(l, t) {
  return lu(4, 4, l, t);
}
function g0(l, t) {
  if (typeof t == "function") {
    l = l();
    var a = t(l);
    return function () {
      typeof a == "function" ? a() : t(null);
    };
  }
  if (t != null)
    return (
      (l = l()),
      (t.current = l),
      function () {
        t.current = null;
      }
    );
}
function b0(l, t, a) {
  (a = a != null ? a.concat([l]) : null), lu(4, 4, g0.bind(null, t, l), a);
}
function wc() {}
function S0(l, t) {
  var a = el();
  t = t === void 0 ? null : t;
  var e = a.memoizedState;
  return t !== null && Cc(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
}
function p0(l, t) {
  var a = el();
  t = t === void 0 ? null : t;
  var e = a.memoizedState;
  if (t !== null && Cc(t, e[1])) return e[0];
  if (((e = l()), ia)) {
    _t(!0);
    try {
      l();
    } finally {
      _t(!1);
    }
  }
  return (a.memoizedState = [e, t]), e;
}
function kc(l, t, a) {
  return a === void 0 || Xt & 1073741824
    ? (l.memoizedState = t)
    : ((l.memoizedState = a), (l = o1()), (D.lanes |= l), (Zt |= l), a);
}
function A0(l, t, a, e) {
  return Rl(a, t)
    ? a
    : Za.current !== null
      ? ((l = kc(l, a, e)), Rl(l, t) || (ol = !0), l)
      : Xt & 42
        ? ((l = o1()), (D.lanes |= l), (Zt |= l), t)
        : ((ol = !0), (l.memoizedState = a));
}
function E0(l, t, a, e, u) {
  var n = G.p;
  G.p = n !== 0 && 8 > n ? n : 8;
  var i = x.T,
    c = {};
  (x.T = c), Wc(l, !1, t, a);
  try {
    var f = u(),
      d = x.S;
    if (
      (d !== null && d(c, f),
      f !== null && typeof f == "object" && typeof f.then == "function")
    ) {
      var y = Br(f, e);
      Te(l, t, y, Ul(l));
    } else Te(l, t, e, Ul(l));
  } catch (v) {
    Te(l, t, { then: function () {}, status: "rejected", reason: v }, Ul());
  } finally {
    (G.p = n), (x.T = i);
  }
}
function Xr() {}
function Ki(l, t, a, e) {
  if (l.tag !== 5) throw Error(b(476));
  var u = T0(l).queue;
  E0(
    l,
    u,
    t,
    Ft,
    a === null
      ? Xr
      : function () {
          return z0(l), a(e);
        }
  );
}
function T0(l) {
  var t = l.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: Ft,
    baseState: Ft,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ht,
      lastRenderedState: Ft,
    },
    next: null,
  };
  var a = {};
  return (
    (t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ht,
        lastRenderedState: a,
      },
      next: null,
    }),
    (l.memoizedState = t),
    (l = l.alternate),
    l !== null && (l.memoizedState = t),
    t
  );
}
function z0(l) {
  var t = T0(l).next.queue;
  Te(l, t, {}, Ul());
}
function $c() {
  return yl(Ce);
}
function O0() {
  return el().memoizedState;
}
function x0() {
  return el().memoizedState;
}
function Qr(l) {
  for (var t = l.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var a = Ul();
        l = Rt(a);
        var e = Ht(t, l, a);
        e !== null && (jl(e, t, a), pe(e, t, a)),
          (t = { cache: Bc() }),
          (l.payload = t);
        return;
    }
    t = t.return;
  }
}
function Zr(l, t, a) {
  var e = Ul();
  (a = {
    lane: e,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    Dn(l)
      ? M0(t, a)
      : ((a = Uc(l, t, a, e)), a !== null && (jl(a, l, e), D0(a, t, e)));
}
function _0(l, t, a) {
  var e = Ul();
  Te(l, t, a, e);
}
function Te(l, t, a, e) {
  var u = {
    lane: e,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (Dn(l)) M0(t, u);
  else {
    var n = l.alternate;
    if (
      l.lanes === 0 &&
      (n === null || n.lanes === 0) &&
      ((n = t.lastRenderedReducer), n !== null)
    )
      try {
        var i = t.lastRenderedState,
          c = n(i, a);
        if (((u.hasEagerState = !0), (u.eagerState = c), Rl(c, i)))
          return On(l, t, u, 0), L === null && zn(), !1;
      } catch {
      } finally {
      }
    if (((a = Uc(l, t, u, e)), a !== null)) return jl(a, l, e), D0(a, t, e), !0;
  }
  return !1;
}
function Wc(l, t, a, e) {
  if (
    ((e = {
      lane: 2,
      revertLane: uf(),
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dn(l))
  ) {
    if (t) throw Error(b(479));
  } else (t = Uc(l, a, e, 2)), t !== null && jl(t, l, 2);
}
function Dn(l) {
  var t = l.alternate;
  return l === D || (t !== null && t === D);
}
function M0(l, t) {
  Ha = ku = !0;
  var a = l.pending;
  a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
    (l.pending = t);
}
function D0(l, t, a) {
  if (a & 4194048) {
    var e = t.lanes;
    (e &= l.pendingLanes), (a |= e), (t.lanes = a), So(l, a);
  }
}
var Wu = {
    readContext: yl,
    use: _n,
    useCallback: ll,
    useContext: ll,
    useEffect: ll,
    useImperativeHandle: ll,
    useLayoutEffect: ll,
    useInsertionEffect: ll,
    useMemo: ll,
    useReducer: ll,
    useRef: ll,
    useState: ll,
    useDebugValue: ll,
    useDeferredValue: ll,
    useTransition: ll,
    useSyncExternalStore: ll,
    useId: ll,
    useHostTransitionStatus: ll,
    useFormState: ll,
    useActionState: ll,
    useOptimistic: ll,
    useMemoCache: ll,
    useCacheRefresh: ll,
  },
  N0 = {
    readContext: yl,
    use: _n,
    useCallback: function (l, t) {
      return (pl().memoizedState = [l, t === void 0 ? null : t]), l;
    },
    useContext: yl,
    useEffect: as,
    useImperativeHandle: function (l, t, a) {
      (a = a != null ? a.concat([l]) : null),
        Uu(4194308, 4, g0.bind(null, t, l), a);
    },
    useLayoutEffect: function (l, t) {
      return Uu(4194308, 4, l, t);
    },
    useInsertionEffect: function (l, t) {
      Uu(4, 2, l, t);
    },
    useMemo: function (l, t) {
      var a = pl();
      t = t === void 0 ? null : t;
      var e = l();
      if (ia) {
        _t(!0);
        try {
          l();
        } finally {
          _t(!1);
        }
      }
      return (a.memoizedState = [e, t]), e;
    },
    useReducer: function (l, t, a) {
      var e = pl();
      if (a !== void 0) {
        var u = a(t);
        if (ia) {
          _t(!0);
          try {
            a(t);
          } finally {
            _t(!1);
          }
        }
      } else u = t;
      return (
        (e.memoizedState = e.baseState = u),
        (l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: u,
        }),
        (e.queue = l),
        (l = l.dispatch = Zr.bind(null, D, l)),
        [e.memoizedState, l]
      );
    },
    useRef: function (l) {
      var t = pl();
      return (l = { current: l }), (t.memoizedState = l);
    },
    useState: function (l) {
      l = Vi(l);
      var t = l.queue,
        a = _0.bind(null, D, t);
      return (t.dispatch = a), [l.memoizedState, a];
    },
    useDebugValue: wc,
    useDeferredValue: function (l, t) {
      var a = pl();
      return kc(a, l, t);
    },
    useTransition: function () {
      var l = Vi(!1);
      return (
        (l = E0.bind(null, D, l.queue, !0, !1)),
        (pl().memoizedState = l),
        [!1, l]
      );
    },
    useSyncExternalStore: function (l, t, a) {
      var e = D,
        u = pl();
      if (q) {
        if (a === void 0) throw Error(b(407));
        a = a();
      } else {
        if (((a = t()), L === null)) throw Error(b(349));
        B & 124 || e0(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return (
        (u.queue = n),
        as(n0.bind(null, e, n, l), [l]),
        (e.flags |= 2048),
        Va(9, Mn(), u0.bind(null, e, n, a, t), null),
        a
      );
    },
    useId: function () {
      var l = pl(),
        t = L.identifierPrefix;
      if (q) {
        var a = ct,
          e = it;
        (a = (e & ~(1 << (32 - Nl(e) - 1))).toString(32) + a),
          (t = "«" + t + "R" + a),
          (a = $u++),
          0 < a && (t += "H" + a.toString(32)),
          (t += "»");
      } else (a = Yr++), (t = "«" + t + "r" + a.toString(32) + "»");
      return (l.memoizedState = t);
    },
    useHostTransitionStatus: $c,
    useFormState: If,
    useActionState: If,
    useOptimistic: function (l) {
      var t = pl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = Wc.bind(null, D, !0, a)), (a.dispatch = t), [l, t]
      );
    },
    useMemoCache: Kc,
    useCacheRefresh: function () {
      return (pl().memoizedState = Qr.bind(null, D));
    },
  },
  U0 = {
    readContext: yl,
    use: _n,
    useCallback: S0,
    useContext: yl,
    useEffect: m0,
    useImperativeHandle: b0,
    useInsertionEffect: v0,
    useLayoutEffect: y0,
    useMemo: p0,
    useReducer: Nu,
    useRef: h0,
    useState: function () {
      return Nu(ht);
    },
    useDebugValue: wc,
    useDeferredValue: function (l, t) {
      var a = el();
      return A0(a, Z.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Nu(ht)[0],
        t = el().memoizedState;
      return [typeof l == "boolean" ? l : Ie(l), t];
    },
    useSyncExternalStore: a0,
    useId: O0,
    useHostTransitionStatus: $c,
    useFormState: ls,
    useActionState: ls,
    useOptimistic: function (l, t) {
      var a = el();
      return f0(a, Z, l, t);
    },
    useMemoCache: Kc,
    useCacheRefresh: x0,
  },
  Vr = {
    readContext: yl,
    use: _n,
    useCallback: S0,
    useContext: yl,
    useEffect: m0,
    useImperativeHandle: b0,
    useInsertionEffect: v0,
    useLayoutEffect: y0,
    useMemo: p0,
    useReducer: In,
    useRef: h0,
    useState: function () {
      return In(ht);
    },
    useDebugValue: wc,
    useDeferredValue: function (l, t) {
      var a = el();
      return Z === null ? kc(a, l, t) : A0(a, Z.memoizedState, l, t);
    },
    useTransition: function () {
      var l = In(ht)[0],
        t = el().memoizedState;
      return [typeof l == "boolean" ? l : Ie(l), t];
    },
    useSyncExternalStore: a0,
    useId: O0,
    useHostTransitionStatus: $c,
    useFormState: ts,
    useActionState: ts,
    useOptimistic: function (l, t) {
      var a = el();
      return Z !== null
        ? f0(a, Z, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Kc,
    useCacheRefresh: x0,
  },
  Ya = null,
  Be = 0;
function yu(l) {
  var t = Be;
  return (Be += 1), Ya === null && (Ya = []), Fo(Ya, l, t);
}
function ie(l, t) {
  (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
}
function gu(l, t) {
  throw t.$$typeof === Sd
    ? Error(b(525))
    : ((l = Object.prototype.toString.call(t)),
      Error(
        b(
          31,
          l === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : l
        )
      ));
}
function es(l) {
  var t = l._init;
  return t(l._payload);
}
function j0(l) {
  function t(o, s) {
    if (l) {
      var h = o.deletions;
      h === null ? ((o.deletions = [s]), (o.flags |= 16)) : h.push(s);
    }
  }
  function a(o, s) {
    if (!l) return null;
    for (; s !== null; ) t(o, s), (s = s.sibling);
    return null;
  }
  function e(o) {
    for (var s = new Map(); o !== null; )
      o.key !== null ? s.set(o.key, o) : s.set(o.index, o), (o = o.sibling);
    return s;
  }
  function u(o, s) {
    return (o = ot(o, s)), (o.index = 0), (o.sibling = null), o;
  }
  function n(o, s, h) {
    return (
      (o.index = h),
      l
        ? ((h = o.alternate),
          h !== null
            ? ((h = h.index), h < s ? ((o.flags |= 67108866), s) : h)
            : ((o.flags |= 67108866), s))
        : ((o.flags |= 1048576), s)
    );
  }
  function i(o) {
    return l && o.alternate === null && (o.flags |= 67108866), o;
  }
  function c(o, s, h, g) {
    return s === null || s.tag !== 6
      ? ((s = Wn(h, o.mode, g)), (s.return = o), s)
      : ((s = u(s, h)), (s.return = o), s);
  }
  function f(o, s, h, g) {
    var p = h.type;
    return p === ba
      ? y(o, s, h.props.children, g, h.key)
      : s !== null &&
          (s.elementType === p ||
            (typeof p == "object" &&
              p !== null &&
              p.$$typeof === At &&
              es(p) === s.type))
        ? ((s = u(s, h.props)), ie(s, h), (s.return = o), s)
        : ((s = Mu(h.type, h.key, h.props, null, o.mode, g)),
          ie(s, h),
          (s.return = o),
          s);
  }
  function d(o, s, h, g) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== h.containerInfo ||
      s.stateNode.implementation !== h.implementation
      ? ((s = Fn(h, o.mode, g)), (s.return = o), s)
      : ((s = u(s, h.children || [])), (s.return = o), s);
  }
  function y(o, s, h, g, p) {
    return s === null || s.tag !== 7
      ? ((s = Pt(h, o.mode, g, p)), (s.return = o), s)
      : ((s = u(s, h)), (s.return = o), s);
  }
  function v(o, s, h) {
    if (
      (typeof s == "string" && s !== "") ||
      typeof s == "number" ||
      typeof s == "bigint"
    )
      return (s = Wn("" + s, o.mode, h)), (s.return = o), s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case su:
          return (
            (h = Mu(s.type, s.key, s.props, null, o.mode, h)),
            ie(h, s),
            (h.return = o),
            h
          );
        case oe:
          return (s = Fn(s, o.mode, h)), (s.return = o), s;
        case At:
          var g = s._init;
          return (s = g(s._payload)), v(o, s, h);
      }
      if (de(s) || ae(s))
        return (s = Pt(s, o.mode, h, null)), (s.return = o), s;
      if (typeof s.then == "function") return v(o, yu(s), h);
      if (s.$$typeof === nt) return v(o, mu(o, s), h);
      gu(o, s);
    }
    return null;
  }
  function r(o, s, h, g) {
    var p = s !== null ? s.key : null;
    if (
      (typeof h == "string" && h !== "") ||
      typeof h == "number" ||
      typeof h == "bigint"
    )
      return p !== null ? null : c(o, s, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case su:
          return h.key === p ? f(o, s, h, g) : null;
        case oe:
          return h.key === p ? d(o, s, h, g) : null;
        case At:
          return (p = h._init), (h = p(h._payload)), r(o, s, h, g);
      }
      if (de(h) || ae(h)) return p !== null ? null : y(o, s, h, g, null);
      if (typeof h.then == "function") return r(o, s, yu(h), g);
      if (h.$$typeof === nt) return r(o, s, mu(o, h), g);
      gu(o, h);
    }
    return null;
  }
  function m(o, s, h, g, p) {
    if (
      (typeof g == "string" && g !== "") ||
      typeof g == "number" ||
      typeof g == "bigint"
    )
      return (o = o.get(h) || null), c(s, o, "" + g, p);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case su:
          return (o = o.get(g.key === null ? h : g.key) || null), f(s, o, g, p);
        case oe:
          return (o = o.get(g.key === null ? h : g.key) || null), d(s, o, g, p);
        case At:
          var _ = g._init;
          return (g = _(g._payload)), m(o, s, h, g, p);
      }
      if (de(g) || ae(g)) return (o = o.get(h) || null), y(s, o, g, p, null);
      if (typeof g.then == "function") return m(o, s, h, yu(g), p);
      if (g.$$typeof === nt) return m(o, s, h, mu(s, g), p);
      gu(s, g);
    }
    return null;
  }
  function z(o, s, h, g) {
    for (
      var p = null, _ = null, E = s, O = (s = 0), P = null;
      E !== null && O < h.length;
      O++
    ) {
      E.index > O ? ((P = E), (E = null)) : (P = E.sibling);
      var H = r(o, E, h[O], g);
      if (H === null) {
        E === null && (E = P);
        break;
      }
      l && E && H.alternate === null && t(o, E),
        (s = n(H, s, O)),
        _ === null ? (p = H) : (_.sibling = H),
        (_ = H),
        (E = P);
    }
    if (O === h.length) return a(o, E), q && $t(o, O), p;
    if (E === null) {
      for (; O < h.length; O++)
        (E = v(o, h[O], g)),
          E !== null &&
            ((s = n(E, s, O)), _ === null ? (p = E) : (_.sibling = E), (_ = E));
      return q && $t(o, O), p;
    }
    for (E = e(E); O < h.length; O++)
      (P = m(E, o, O, h[O], g)),
        P !== null &&
          (l && P.alternate !== null && E.delete(P.key === null ? O : P.key),
          (s = n(P, s, O)),
          _ === null ? (p = P) : (_.sibling = P),
          (_ = P));
    return (
      l &&
        E.forEach(function (Hl) {
          return t(o, Hl);
        }),
      q && $t(o, O),
      p
    );
  }
  function T(o, s, h, g) {
    if (h == null) throw Error(b(151));
    for (
      var p = null, _ = null, E = s, O = (s = 0), P = null, H = h.next();
      E !== null && !H.done;
      O++, H = h.next()
    ) {
      E.index > O ? ((P = E), (E = null)) : (P = E.sibling);
      var Hl = r(o, E, H.value, g);
      if (Hl === null) {
        E === null && (E = P);
        break;
      }
      l && E && Hl.alternate === null && t(o, E),
        (s = n(Hl, s, O)),
        _ === null ? (p = Hl) : (_.sibling = Hl),
        (_ = Hl),
        (E = P);
    }
    if (H.done) return a(o, E), q && $t(o, O), p;
    if (E === null) {
      for (; !H.done; O++, H = h.next())
        (H = v(o, H.value, g)),
          H !== null &&
            ((s = n(H, s, O)), _ === null ? (p = H) : (_.sibling = H), (_ = H));
      return q && $t(o, O), p;
    }
    for (E = e(E); !H.done; O++, H = h.next())
      (H = m(E, o, O, H.value, g)),
        H !== null &&
          (l && H.alternate !== null && E.delete(H.key === null ? O : H.key),
          (s = n(H, s, O)),
          _ === null ? (p = H) : (_.sibling = H),
          (_ = H));
    return (
      l &&
        E.forEach(function (gt) {
          return t(o, gt);
        }),
      q && $t(o, O),
      p
    );
  }
  function Y(o, s, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === ba &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case su:
          l: {
            for (var p = h.key; s !== null; ) {
              if (s.key === p) {
                if (((p = h.type), p === ba)) {
                  if (s.tag === 7) {
                    a(o, s.sibling),
                      (g = u(s, h.props.children)),
                      (g.return = o),
                      (o = g);
                    break l;
                  }
                } else if (
                  s.elementType === p ||
                  (typeof p == "object" &&
                    p !== null &&
                    p.$$typeof === At &&
                    es(p) === s.type)
                ) {
                  a(o, s.sibling),
                    (g = u(s, h.props)),
                    ie(g, h),
                    (g.return = o),
                    (o = g);
                  break l;
                }
                a(o, s);
                break;
              } else t(o, s);
              s = s.sibling;
            }
            h.type === ba
              ? ((g = Pt(h.props.children, o.mode, g, h.key)),
                (g.return = o),
                (o = g))
              : ((g = Mu(h.type, h.key, h.props, null, o.mode, g)),
                ie(g, h),
                (g.return = o),
                (o = g));
          }
          return i(o);
        case oe:
          l: {
            for (p = h.key; s !== null; ) {
              if (s.key === p)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === h.containerInfo &&
                  s.stateNode.implementation === h.implementation
                ) {
                  a(o, s.sibling),
                    (g = u(s, h.children || [])),
                    (g.return = o),
                    (o = g);
                  break l;
                } else {
                  a(o, s);
                  break;
                }
              else t(o, s);
              s = s.sibling;
            }
            (g = Fn(h, o.mode, g)), (g.return = o), (o = g);
          }
          return i(o);
        case At:
          return (p = h._init), (h = p(h._payload)), Y(o, s, h, g);
      }
      if (de(h)) return z(o, s, h, g);
      if (ae(h)) {
        if (((p = ae(h)), typeof p != "function")) throw Error(b(150));
        return (h = p.call(h)), T(o, s, h, g);
      }
      if (typeof h.then == "function") return Y(o, s, yu(h), g);
      if (h.$$typeof === nt) return Y(o, s, mu(o, h), g);
      gu(o, h);
    }
    return (typeof h == "string" && h !== "") ||
      typeof h == "number" ||
      typeof h == "bigint"
      ? ((h = "" + h),
        s !== null && s.tag === 6
          ? (a(o, s.sibling), (g = u(s, h)), (g.return = o), (o = g))
          : (a(o, s), (g = Wn(h, o.mode, g)), (g.return = o), (o = g)),
        i(o))
      : a(o, s);
  }
  return function (o, s, h, g) {
    try {
      Be = 0;
      var p = Y(o, s, h, g);
      return (Ya = null), p;
    } catch (E) {
      if (E === Pe || E === xn) throw E;
      var _ = Ml(29, E, null, o.mode);
      return (_.lanes = g), (_.return = o), _;
    } finally {
    }
  };
}
var La = j0(!0),
  R0 = j0(!1),
  Zl = Il(null),
  Pl = null;
function zt(l) {
  var t = l.alternate;
  k(nl, nl.current & 1),
    k(Zl, l),
    Pl === null &&
      (t === null || Za.current !== null || t.memoizedState !== null) &&
      (Pl = l);
}
function H0(l) {
  if (l.tag === 22) {
    if ((k(nl, nl.current), k(Zl, l), Pl === null)) {
      var t = l.alternate;
      t !== null && t.memoizedState !== null && (Pl = l);
    }
  } else Ot();
}
function Ot() {
  k(nl, nl.current), k(Zl, Zl.current);
}
function st(l) {
  dl(Zl), Pl === l && (Pl = null), dl(nl);
}
var nl = Il(0);
function Fu(l) {
  for (var t = l; t !== null; ) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (
        a !== null &&
        ((a = a.dehydrated), a === null || a.data === "$?" || fc(a))
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === l) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === l) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
function li(l, t, a, e) {
  (t = l.memoizedState),
    (a = a(e, t)),
    (a = a == null ? t : K({}, t, a)),
    (l.memoizedState = a),
    l.lanes === 0 && (l.updateQueue.baseState = a);
}
var Ji = {
  enqueueSetState: function (l, t, a) {
    l = l._reactInternals;
    var e = Ul(),
      u = Rt(e);
    (u.payload = t),
      a != null && (u.callback = a),
      (t = Ht(l, u, e)),
      t !== null && (jl(t, l, e), pe(t, l, e));
  },
  enqueueReplaceState: function (l, t, a) {
    l = l._reactInternals;
    var e = Ul(),
      u = Rt(e);
    (u.tag = 1),
      (u.payload = t),
      a != null && (u.callback = a),
      (t = Ht(l, u, e)),
      t !== null && (jl(t, l, e), pe(t, l, e));
  },
  enqueueForceUpdate: function (l, t) {
    l = l._reactInternals;
    var a = Ul(),
      e = Rt(a);
    (e.tag = 2),
      t != null && (e.callback = t),
      (t = Ht(l, e, a)),
      t !== null && (jl(t, l, a), pe(t, l, a));
  },
};
function us(l, t, a, e, u, n, i) {
  return (
    (l = l.stateNode),
    typeof l.shouldComponentUpdate == "function"
      ? l.shouldComponentUpdate(e, n, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !je(a, e) || !je(u, n)
        : !0
  );
}
function ns(l, t, a, e) {
  (l = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(a, e),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(a, e),
    t.state !== l && Ji.enqueueReplaceState(t, t.state, null);
}
function ca(l, t) {
  var a = t;
  if ("ref" in t) {
    a = {};
    for (var e in t) e !== "ref" && (a[e] = t[e]);
  }
  if ((l = l.defaultProps)) {
    a === t && (a = K({}, a));
    for (var u in l) a[u] === void 0 && (a[u] = l[u]);
  }
  return a;
}
var Pu =
  typeof reportError == "function"
    ? reportError
    : function (l) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof l == "object" && l !== null && typeof l.message == "string"
                ? String(l.message)
                : String(l),
            error: l,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", l);
          return;
        }
        console.error(l);
      };
function B0(l) {
  Pu(l);
}
function Y0(l) {
  console.error(l);
}
function q0(l) {
  Pu(l);
}
function Iu(l, t) {
  try {
    var a = l.onUncaughtError;
    a(t.value, { componentStack: t.stack });
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function is(l, t, a) {
  try {
    var e = l.onCaughtError;
    e(a.value, {
      componentStack: a.stack,
      errorBoundary: t.tag === 1 ? t.stateNode : null,
    });
  } catch (u) {
    setTimeout(function () {
      throw u;
    });
  }
}
function wi(l, t, a) {
  return (
    (a = Rt(a)),
    (a.tag = 3),
    (a.payload = { element: null }),
    (a.callback = function () {
      Iu(l, t);
    }),
    a
  );
}
function G0(l) {
  return (l = Rt(l)), (l.tag = 3), l;
}
function C0(l, t, a, e) {
  var u = a.type.getDerivedStateFromError;
  if (typeof u == "function") {
    var n = e.value;
    (l.payload = function () {
      return u(n);
    }),
      (l.callback = function () {
        is(t, a, e);
      });
  }
  var i = a.stateNode;
  i !== null &&
    typeof i.componentDidCatch == "function" &&
    (l.callback = function () {
      is(t, a, e),
        typeof u != "function" &&
          (Bt === null ? (Bt = new Set([this])) : Bt.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, { componentStack: c !== null ? c : "" });
    });
}
function Lr(l, t, a, e, u) {
  if (
    ((a.flags |= 32768),
    e !== null && typeof e == "object" && typeof e.then == "function")
  ) {
    if (
      ((t = a.alternate),
      t !== null && We(t, a, u, !0),
      (a = Zl.current),
      a !== null)
    ) {
      switch (a.tag) {
        case 13:
          return (
            Pl === null ? tc() : a.alternate === null && F === 0 && (F = 3),
            (a.flags &= -257),
            (a.flags |= 65536),
            (a.lanes = u),
            e === Ci
              ? (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                di(l, e, u)),
            !1
          );
        case 22:
          return (
            (a.flags |= 65536),
            e === Ci
              ? (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null
                  ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([e]),
                    }),
                    (a.updateQueue = t))
                  : ((a = t.retryQueue),
                    a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                di(l, e, u)),
            !1
          );
      }
      throw Error(b(435, a.tag));
    }
    return di(l, e, u), tc(), !1;
  }
  if (q)
    return (
      (t = Zl.current),
      t !== null
        ? (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = u),
          e !== Hi && ((l = Error(b(422), { cause: e })), Re(Xl(l, a))))
        : (e !== Hi && ((t = Error(b(423), { cause: e })), Re(Xl(t, a))),
          (l = l.current.alternate),
          (l.flags |= 65536),
          (u &= -u),
          (l.lanes |= u),
          (e = Xl(e, a)),
          (u = wi(l.stateNode, e, u)),
          Pn(l, u),
          F !== 4 && (F = 2)),
      !1
    );
  var n = Error(b(520), { cause: e });
  if (
    ((n = Xl(n, a)),
    xe === null ? (xe = [n]) : xe.push(n),
    F !== 4 && (F = 2),
    t === null)
  )
    return !0;
  (e = Xl(e, a)), (a = t);
  do {
    switch (a.tag) {
      case 3:
        return (
          (a.flags |= 65536),
          (l = u & -u),
          (a.lanes |= l),
          (l = wi(a.stateNode, e, l)),
          Pn(a, l),
          !1
        );
      case 1:
        if (
          ((t = a.type),
          (n = a.stateNode),
          (a.flags & 128) === 0 &&
            (typeof t.getDerivedStateFromError == "function" ||
              (n !== null &&
                typeof n.componentDidCatch == "function" &&
                (Bt === null || !Bt.has(n)))))
        )
          return (
            (a.flags |= 65536),
            (u &= -u),
            (a.lanes |= u),
            (u = G0(u)),
            C0(u, l, a, e),
            Pn(a, u),
            !1
          );
    }
    a = a.return;
  } while (a !== null);
  return !1;
}
var X0 = Error(b(461)),
  ol = !1;
function rl(l, t, a, e) {
  t.child = l === null ? R0(t, null, a, e) : La(t, l.child, a, e);
}
function cs(l, t, a, e, u) {
  a = a.render;
  var n = t.ref;
  if ("ref" in e) {
    var i = {};
    for (var c in e) c !== "ref" && (i[c] = e[c]);
  } else i = e;
  return (
    na(t),
    (e = Xc(l, t, a, i, n, u)),
    (c = Qc()),
    l !== null && !ol
      ? (Zc(l, t, u), mt(l, t, u))
      : (q && c && Rc(t), (t.flags |= 1), rl(l, t, e, u), t.child)
  );
}
function fs(l, t, a, e, u) {
  if (l === null) {
    var n = a.type;
    return typeof n == "function" &&
      !jc(n) &&
      n.defaultProps === void 0 &&
      a.compare === null
      ? ((t.tag = 15), (t.type = n), Q0(l, t, n, e, u))
      : ((l = Mu(a.type, null, e, t, t.mode, u)),
        (l.ref = t.ref),
        (l.return = t),
        (t.child = l));
  }
  if (((n = l.child), !Fc(l, u))) {
    var i = n.memoizedProps;
    if (
      ((a = a.compare), (a = a !== null ? a : je), a(i, e) && l.ref === t.ref)
    )
      return mt(l, t, u);
  }
  return (
    (t.flags |= 1),
    (l = ot(n, e)),
    (l.ref = t.ref),
    (l.return = t),
    (t.child = l)
  );
}
function Q0(l, t, a, e, u) {
  if (l !== null) {
    var n = l.memoizedProps;
    if (je(n, e) && l.ref === t.ref)
      if (((ol = !1), (t.pendingProps = e = n), Fc(l, u)))
        l.flags & 131072 && (ol = !0);
      else return (t.lanes = l.lanes), mt(l, t, u);
  }
  return ki(l, t, a, e, u);
}
function Z0(l, t, a) {
  var e = t.pendingProps,
    u = e.children,
    n = l !== null ? l.memoizedState : null;
  if (e.mode === "hidden") {
    if (t.flags & 128) {
      if (((e = n !== null ? n.baseLanes | a : a), l !== null)) {
        for (u = t.child = l.child, n = 0; u !== null; )
          (n = n | u.lanes | u.childLanes), (u = u.sibling);
        t.childLanes = n & ~e;
      } else (t.childLanes = 0), (t.child = null);
      return ss(l, t, e, a);
    }
    if (a & 536870912)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        l !== null && Du(t, n !== null ? n.cachePool : null),
        n !== null ? Wf(t, n) : Zi(),
        H0(t);
    else
      return (
        (t.lanes = t.childLanes = 536870912),
        ss(l, t, n !== null ? n.baseLanes | a : a, a)
      );
  } else
    n !== null
      ? (Du(t, n.cachePool), Wf(t, n), Ot(), (t.memoizedState = null))
      : (l !== null && Du(t, null), Zi(), Ot());
  return rl(l, t, u, a), t.child;
}
function ss(l, t, a, e) {
  var u = Yc();
  return (
    (u = u === null ? null : { parent: ul._currentValue, pool: u }),
    (t.memoizedState = { baseLanes: a, cachePool: u }),
    l !== null && Du(t, null),
    Zi(),
    H0(t),
    l !== null && We(l, t, e, !0),
    null
  );
}
function ju(l, t) {
  var a = t.ref;
  if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
  else {
    if (typeof a != "function" && typeof a != "object") throw Error(b(284));
    (l === null || l.ref !== a) && (t.flags |= 4194816);
  }
}
function ki(l, t, a, e, u) {
  return (
    na(t),
    (a = Xc(l, t, a, e, void 0, u)),
    (e = Qc()),
    l !== null && !ol
      ? (Zc(l, t, u), mt(l, t, u))
      : (q && e && Rc(t), (t.flags |= 1), rl(l, t, a, u), t.child)
  );
}
function os(l, t, a, e, u, n) {
  return (
    na(t),
    (t.updateQueue = null),
    (a = t0(t, e, a, u)),
    l0(l),
    (e = Qc()),
    l !== null && !ol
      ? (Zc(l, t, n), mt(l, t, n))
      : (q && e && Rc(t), (t.flags |= 1), rl(l, t, a, n), t.child)
  );
}
function ds(l, t, a, e, u) {
  if ((na(t), t.stateNode === null)) {
    var n = xa,
      i = a.contextType;
    typeof i == "object" && i !== null && (n = yl(i)),
      (n = new a(e, n)),
      (t.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Ji),
      (t.stateNode = n),
      (n._reactInternals = t),
      (n = t.stateNode),
      (n.props = e),
      (n.state = t.memoizedState),
      (n.refs = {}),
      qc(t),
      (i = a.contextType),
      (n.context = typeof i == "object" && i !== null ? yl(i) : xa),
      (n.state = t.memoizedState),
      (i = a.getDerivedStateFromProps),
      typeof i == "function" && (li(t, a, i, e), (n.state = t.memoizedState)),
      typeof a.getDerivedStateFromProps == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function" ||
        (typeof n.UNSAFE_componentWillMount != "function" &&
          typeof n.componentWillMount != "function") ||
        ((i = n.state),
        typeof n.componentWillMount == "function" && n.componentWillMount(),
        typeof n.UNSAFE_componentWillMount == "function" &&
          n.UNSAFE_componentWillMount(),
        i !== n.state && Ji.enqueueReplaceState(n, n.state, null),
        Ee(t, e, n, u),
        Ae(),
        (n.state = t.memoizedState)),
      typeof n.componentDidMount == "function" && (t.flags |= 4194308),
      (e = !0);
  } else if (l === null) {
    n = t.stateNode;
    var c = t.memoizedProps,
      f = ca(a, c);
    n.props = f;
    var d = n.context,
      y = a.contextType;
    (i = xa), typeof y == "object" && y !== null && (i = yl(y));
    var v = a.getDerivedStateFromProps;
    (y =
      typeof v == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
      (c = t.pendingProps !== c),
      y ||
        (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
          typeof n.componentWillReceiveProps != "function") ||
        ((c || d !== i) && ns(t, n, e, i)),
      (Et = !1);
    var r = t.memoizedState;
    (n.state = r),
      Ee(t, e, n, u),
      Ae(),
      (d = t.memoizedState),
      c || r !== d || Et
        ? (typeof v == "function" && (li(t, a, v, e), (d = t.memoizedState)),
          (f = Et || us(t, a, f, e, r, d, i))
            ? (y ||
                (typeof n.UNSAFE_componentWillMount != "function" &&
                  typeof n.componentWillMount != "function") ||
                (typeof n.componentWillMount == "function" &&
                  n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" &&
                  n.UNSAFE_componentWillMount()),
              typeof n.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = e),
              (t.memoizedState = d)),
          (n.props = e),
          (n.state = d),
          (n.context = i),
          (e = f))
        : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
          (e = !1));
  } else {
    (n = t.stateNode),
      Xi(l, t),
      (i = t.memoizedProps),
      (y = ca(a, i)),
      (n.props = y),
      (v = t.pendingProps),
      (r = n.context),
      (d = a.contextType),
      (f = xa),
      typeof d == "object" && d !== null && (f = yl(d)),
      (c = a.getDerivedStateFromProps),
      (d =
        typeof c == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function") ||
        (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
          typeof n.componentWillReceiveProps != "function") ||
        ((i !== v || r !== f) && ns(t, n, e, f)),
      (Et = !1),
      (r = t.memoizedState),
      (n.state = r),
      Ee(t, e, n, u),
      Ae();
    var m = t.memoizedState;
    i !== v ||
    r !== m ||
    Et ||
    (l !== null && l.dependencies !== null && Ju(l.dependencies))
      ? (typeof c == "function" && (li(t, a, c, e), (m = t.memoizedState)),
        (y =
          Et ||
          us(t, a, y, e, r, m, f) ||
          (l !== null && l.dependencies !== null && Ju(l.dependencies)))
          ? (d ||
              (typeof n.UNSAFE_componentWillUpdate != "function" &&
                typeof n.componentWillUpdate != "function") ||
              (typeof n.componentWillUpdate == "function" &&
                n.componentWillUpdate(e, m, f),
              typeof n.UNSAFE_componentWillUpdate == "function" &&
                n.UNSAFE_componentWillUpdate(e, m, f)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof n.componentDidUpdate != "function" ||
              (i === l.memoizedProps && r === l.memoizedState) ||
              (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" ||
              (i === l.memoizedProps && r === l.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = e),
            (t.memoizedState = m)),
        (n.props = e),
        (n.state = m),
        (n.context = f),
        (e = y))
      : (typeof n.componentDidUpdate != "function" ||
          (i === l.memoizedProps && r === l.memoizedState) ||
          (t.flags |= 4),
        typeof n.getSnapshotBeforeUpdate != "function" ||
          (i === l.memoizedProps && r === l.memoizedState) ||
          (t.flags |= 1024),
        (e = !1));
  }
  return (
    (n = e),
    ju(l, t),
    (e = (t.flags & 128) !== 0),
    n || e
      ? ((n = t.stateNode),
        (a =
          e && typeof a.getDerivedStateFromError != "function"
            ? null
            : n.render()),
        (t.flags |= 1),
        l !== null && e
          ? ((t.child = La(t, l.child, null, u)), (t.child = La(t, null, a, u)))
          : rl(l, t, a, u),
        (t.memoizedState = n.state),
        (l = t.child))
      : (l = mt(l, t, u)),
    l
  );
}
function rs(l, t, a, e) {
  return $e(), (t.flags |= 256), rl(l, t, a, e), t.child;
}
var ti = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function ai(l) {
  return { baseLanes: l, cachePool: $o() };
}
function ei(l, t, a) {
  return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= Ql), l;
}
function V0(l, t, a) {
  var e = t.pendingProps,
    u = !1,
    n = (t.flags & 128) !== 0,
    i;
  if (
    ((i = n) ||
      (i =
        l !== null && l.memoizedState === null ? !1 : (nl.current & 2) !== 0),
    i && ((u = !0), (t.flags &= -129)),
    (i = (t.flags & 32) !== 0),
    (t.flags &= -33),
    l === null)
  ) {
    if (q) {
      if ((u ? zt(t) : Ot(), q)) {
        var c = W,
          f;
        if ((f = c)) {
          l: {
            for (f = c, c = kl; f.nodeType !== 8; ) {
              if (!c) {
                c = null;
                break l;
              }
              if (((f = Kl(f.nextSibling)), f === null)) {
                c = null;
                break l;
              }
            }
            c = f;
          }
          c !== null
            ? ((t.memoizedState = {
                dehydrated: c,
                treeContext: It !== null ? { id: it, overflow: ct } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (f = Ml(18, null, null, 0)),
              (f.stateNode = c),
              (f.return = t),
              (t.child = f),
              (gl = t),
              (W = null),
              (f = !0))
            : (f = !1);
        }
        f || ua(t);
      }
      if (
        ((c = t.memoizedState), c !== null && ((c = c.dehydrated), c !== null))
      )
        return fc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      st(t);
    }
    return (
      (c = e.children),
      (e = e.fallback),
      u
        ? (Ot(),
          (u = t.mode),
          (c = ln({ mode: "hidden", children: c }, u)),
          (e = Pt(e, u, a, null)),
          (c.return = t),
          (e.return = t),
          (c.sibling = e),
          (t.child = c),
          (u = t.child),
          (u.memoizedState = ai(a)),
          (u.childLanes = ei(l, i, a)),
          (t.memoizedState = ti),
          e)
        : (zt(t), $i(t, c))
    );
  }
  if (((f = l.memoizedState), f !== null && ((c = f.dehydrated), c !== null))) {
    if (n)
      t.flags & 256
        ? (zt(t), (t.flags &= -257), (t = ui(l, t, a)))
        : t.memoizedState !== null
          ? (Ot(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (Ot(),
            (u = e.fallback),
            (c = t.mode),
            (e = ln({ mode: "visible", children: e.children }, c)),
            (u = Pt(u, c, a, null)),
            (u.flags |= 2),
            (e.return = t),
            (u.return = t),
            (e.sibling = u),
            (t.child = e),
            La(t, l.child, null, a),
            (e = t.child),
            (e.memoizedState = ai(a)),
            (e.childLanes = ei(l, i, a)),
            (t.memoizedState = ti),
            (t = u));
    else if ((zt(t), fc(c))) {
      if (((i = c.nextSibling && c.nextSibling.dataset), i)) var d = i.dgst;
      (i = d),
        (e = Error(b(419))),
        (e.stack = ""),
        (e.digest = i),
        Re({ value: e, source: null, stack: null }),
        (t = ui(l, t, a));
    } else if (
      (ol || We(l, t, a, !1), (i = (a & l.childLanes) !== 0), ol || i)
    ) {
      if (
        ((i = L),
        i !== null &&
          ((e = a & -a),
          (e = e & 42 ? 1 : Ac(e)),
          (e = e & (i.suspendedLanes | a) ? 0 : e),
          e !== 0 && e !== f.retryLane))
      )
        throw ((f.retryLane = e), Pa(l, e), jl(i, l, e), X0);
      c.data === "$?" || tc(), (t = ui(l, t, a));
    } else
      c.data === "$?"
        ? ((t.flags |= 192), (t.child = l.child), (t = null))
        : ((l = f.treeContext),
          (W = Kl(c.nextSibling)),
          (gl = t),
          (q = !0),
          (la = null),
          (kl = !1),
          l !== null &&
            ((ql[Gl++] = it),
            (ql[Gl++] = ct),
            (ql[Gl++] = It),
            (it = l.id),
            (ct = l.overflow),
            (It = t)),
          (t = $i(t, e.children)),
          (t.flags |= 4096));
    return t;
  }
  return u
    ? (Ot(),
      (u = e.fallback),
      (c = t.mode),
      (f = l.child),
      (d = f.sibling),
      (e = ot(f, { mode: "hidden", children: e.children })),
      (e.subtreeFlags = f.subtreeFlags & 65011712),
      d !== null ? (u = ot(d, u)) : ((u = Pt(u, c, a, null)), (u.flags |= 2)),
      (u.return = t),
      (e.return = t),
      (e.sibling = u),
      (t.child = e),
      (e = u),
      (u = t.child),
      (c = l.child.memoizedState),
      c === null
        ? (c = ai(a))
        : ((f = c.cachePool),
          f !== null
            ? ((d = ul._currentValue),
              (f = f.parent !== d ? { parent: d, pool: d } : f))
            : (f = $o()),
          (c = { baseLanes: c.baseLanes | a, cachePool: f })),
      (u.memoizedState = c),
      (u.childLanes = ei(l, i, a)),
      (t.memoizedState = ti),
      e)
    : (zt(t),
      (a = l.child),
      (l = a.sibling),
      (a = ot(a, { mode: "visible", children: e.children })),
      (a.return = t),
      (a.sibling = null),
      l !== null &&
        ((i = t.deletions),
        i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
      (t.child = a),
      (t.memoizedState = null),
      a);
}
function $i(l, t) {
  return (
    (t = ln({ mode: "visible", children: t }, l.mode)),
    (t.return = l),
    (l.child = t)
  );
}
function ln(l, t) {
  return (
    (l = Ml(22, l, null, t)),
    (l.lanes = 0),
    (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
    }),
    l
  );
}
function ui(l, t, a) {
  return (
    La(t, l.child, null, a),
    (l = $i(t, t.pendingProps.children)),
    (l.flags |= 2),
    (t.memoizedState = null),
    l
  );
}
function hs(l, t, a) {
  l.lanes |= t;
  var e = l.alternate;
  e !== null && (e.lanes |= t), Yi(l.return, t, a);
}
function ni(l, t, a, e, u) {
  var n = l.memoizedState;
  n === null
    ? (l.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: e,
        tail: a,
        tailMode: u,
      })
    : ((n.isBackwards = t),
      (n.rendering = null),
      (n.renderingStartTime = 0),
      (n.last = e),
      (n.tail = a),
      (n.tailMode = u));
}
function L0(l, t, a) {
  var e = t.pendingProps,
    u = e.revealOrder,
    n = e.tail;
  if ((rl(l, t, e.children, a), (e = nl.current), e & 2))
    (e = (e & 1) | 2), (t.flags |= 128);
  else {
    if (l !== null && l.flags & 128)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && hs(l, a, t);
        else if (l.tag === 19) hs(l, a, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    e &= 1;
  }
  switch ((k(nl, e), u)) {
    case "forwards":
      for (a = t.child, u = null; a !== null; )
        (l = a.alternate),
          l !== null && Fu(l) === null && (u = a),
          (a = a.sibling);
      (a = u),
        a === null
          ? ((u = t.child), (t.child = null))
          : ((u = a.sibling), (a.sibling = null)),
        ni(t, !1, u, a, n);
      break;
    case "backwards":
      for (a = null, u = t.child, t.child = null; u !== null; ) {
        if (((l = u.alternate), l !== null && Fu(l) === null)) {
          t.child = u;
          break;
        }
        (l = u.sibling), (u.sibling = a), (a = u), (u = l);
      }
      ni(t, !0, a, null, n);
      break;
    case "together":
      ni(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function mt(l, t, a) {
  if (
    (l !== null && (t.dependencies = l.dependencies),
    (Zt |= t.lanes),
    !(a & t.childLanes))
  )
    if (l !== null) {
      if ((We(l, t, a, !1), (a & t.childLanes) === 0)) return null;
    } else return null;
  if (l !== null && t.child !== l.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      l = t.child, a = ot(l, l.pendingProps), t.child = a, a.return = t;
      l.sibling !== null;

    )
      (l = l.sibling), (a = a.sibling = ot(l, l.pendingProps)), (a.return = t);
    a.sibling = null;
  }
  return t.child;
}
function Fc(l, t) {
  return l.lanes & t ? !0 : ((l = l.dependencies), !!(l !== null && Ju(l)));
}
function Kr(l, t, a) {
  switch (t.tag) {
    case 3:
      Gu(t, t.stateNode.containerInfo), Tt(t, ul, l.memoizedState.cache), $e();
      break;
    case 27:
    case 5:
      zi(t);
      break;
    case 4:
      Gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      Tt(t, t.type, t.memoizedProps.value);
      break;
    case 13:
      var e = t.memoizedState;
      if (e !== null)
        return e.dehydrated !== null
          ? (zt(t), (t.flags |= 128), null)
          : a & t.child.childLanes
            ? V0(l, t, a)
            : (zt(t), (l = mt(l, t, a)), l !== null ? l.sibling : null);
      zt(t);
      break;
    case 19:
      var u = (l.flags & 128) !== 0;
      if (
        ((e = (a & t.childLanes) !== 0),
        e || (We(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
        u)
      ) {
        if (e) return L0(l, t, a);
        t.flags |= 128;
      }
      if (
        ((u = t.memoizedState),
        u !== null &&
          ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
        k(nl, nl.current),
        e)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Z0(l, t, a);
    case 24:
      Tt(t, ul, l.memoizedState.cache);
  }
  return mt(l, t, a);
}
function K0(l, t, a) {
  if (l !== null)
    if (l.memoizedProps !== t.pendingProps) ol = !0;
    else {
      if (!Fc(l, a) && !(t.flags & 128)) return (ol = !1), Kr(l, t, a);
      ol = !!(l.flags & 131072);
    }
  else (ol = !1), q && t.flags & 1048576 && wo(t, Ku, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      l: {
        l = t.pendingProps;
        var e = t.elementType,
          u = e._init;
        if (((e = u(e._payload)), (t.type = e), typeof e == "function"))
          jc(e)
            ? ((l = ca(e, l)), (t.tag = 1), (t = ds(null, t, e, l, a)))
            : ((t.tag = 0), (t = ki(null, t, e, l, a)));
        else {
          if (e != null) {
            if (((u = e.$$typeof), u === bc)) {
              (t.tag = 11), (t = cs(null, t, e, l, a));
              break l;
            } else if (u === Sc) {
              (t.tag = 14), (t = fs(null, t, e, l, a));
              break l;
            }
          }
          throw ((t = Ei(e) || e), Error(b(306, t, "")));
        }
      }
      return t;
    case 0:
      return ki(l, t, t.type, t.pendingProps, a);
    case 1:
      return (e = t.type), (u = ca(e, t.pendingProps)), ds(l, t, e, u, a);
    case 3:
      l: {
        if ((Gu(t, t.stateNode.containerInfo), l === null)) throw Error(b(387));
        e = t.pendingProps;
        var n = t.memoizedState;
        (u = n.element), Xi(l, t), Ee(t, e, null, a);
        var i = t.memoizedState;
        if (
          ((e = i.cache),
          Tt(t, ul, e),
          e !== n.cache && qi(t, [ul], a, !0),
          Ae(),
          (e = i.element),
          n.isDehydrated)
        )
          if (
            ((n = { element: e, isDehydrated: !1, cache: i.cache }),
            (t.updateQueue.baseState = n),
            (t.memoizedState = n),
            t.flags & 256)
          ) {
            t = rs(l, t, e, a);
            break l;
          } else if (e !== u) {
            (u = Xl(Error(b(424)), t)), Re(u), (t = rs(l, t, e, a));
            break l;
          } else {
            switch (((l = t.stateNode.containerInfo), l.nodeType)) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (
              W = Kl(l.firstChild),
                gl = t,
                q = !0,
                la = null,
                kl = !0,
                a = R0(t, null, e, a),
                t.child = a;
              a;

            )
              (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          }
        else {
          if (($e(), e === u)) {
            t = mt(l, t, a);
            break l;
          }
          rl(l, t, e, a);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        ju(l, t),
        l === null
          ? (a = Ns(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = a)
            : q ||
              ((a = t.type),
              (l = t.pendingProps),
              (e = fn(jt.current).createElement(a)),
              (e[vl] = t),
              (e[Tl] = l),
              ml(e, a, l),
              sl(e),
              (t.stateNode = e))
          : (t.memoizedState = Ns(
              t.type,
              l.memoizedProps,
              t.pendingProps,
              l.memoizedState
            )),
        null
      );
    case 27:
      return (
        zi(t),
        l === null &&
          q &&
          ((e = t.stateNode = U1(t.type, t.pendingProps, jt.current)),
          (gl = t),
          (kl = !0),
          (u = W),
          Lt(t.type) ? ((sc = u), (W = Kl(e.firstChild))) : (W = u)),
        rl(l, t, t.pendingProps.children, a),
        ju(l, t),
        l === null && (t.flags |= 4194304),
        t.child
      );
    case 5:
      return (
        l === null &&
          q &&
          ((u = e = W) &&
            ((e = Sh(e, t.type, t.pendingProps, kl)),
            e !== null
              ? ((t.stateNode = e),
                (gl = t),
                (W = Kl(e.firstChild)),
                (kl = !1),
                (u = !0))
              : (u = !1)),
          u || ua(t)),
        zi(t),
        (u = t.type),
        (n = t.pendingProps),
        (i = l !== null ? l.memoizedProps : null),
        (e = n.children),
        ic(u, n) ? (e = null) : i !== null && ic(u, i) && (t.flags |= 32),
        t.memoizedState !== null &&
          ((u = Xc(l, t, qr, null, null, a)), (Ce._currentValue = u)),
        ju(l, t),
        rl(l, t, e, a),
        t.child
      );
    case 6:
      return (
        l === null &&
          q &&
          ((l = a = W) &&
            ((a = ph(a, t.pendingProps, kl)),
            a !== null
              ? ((t.stateNode = a), (gl = t), (W = null), (l = !0))
              : (l = !1)),
          l || ua(t)),
        null
      );
    case 13:
      return V0(l, t, a);
    case 4:
      return (
        Gu(t, t.stateNode.containerInfo),
        (e = t.pendingProps),
        l === null ? (t.child = La(t, null, e, a)) : rl(l, t, e, a),
        t.child
      );
    case 11:
      return cs(l, t, t.type, t.pendingProps, a);
    case 7:
      return rl(l, t, t.pendingProps, a), t.child;
    case 8:
      return rl(l, t, t.pendingProps.children, a), t.child;
    case 12:
      return rl(l, t, t.pendingProps.children, a), t.child;
    case 10:
      return (
        (e = t.pendingProps),
        Tt(t, t.type, e.value),
        rl(l, t, e.children, a),
        t.child
      );
    case 9:
      return (
        (u = t.type._context),
        (e = t.pendingProps.children),
        na(t),
        (u = yl(u)),
        (e = e(u)),
        (t.flags |= 1),
        rl(l, t, e, a),
        t.child
      );
    case 14:
      return fs(l, t, t.type, t.pendingProps, a);
    case 15:
      return Q0(l, t, t.type, t.pendingProps, a);
    case 19:
      return L0(l, t, a);
    case 31:
      return (
        (e = t.pendingProps),
        (a = t.mode),
        (e = { mode: e.mode, children: e.children }),
        l === null
          ? ((a = ln(e, a)),
            (a.ref = t.ref),
            (t.child = a),
            (a.return = t),
            (t = a))
          : ((a = ot(l.child, e)),
            (a.ref = t.ref),
            (t.child = a),
            (a.return = t),
            (t = a)),
        t
      );
    case 22:
      return Z0(l, t, a);
    case 24:
      return (
        na(t),
        (e = yl(ul)),
        l === null
          ? ((u = Yc()),
            u === null &&
              ((u = L),
              (n = Bc()),
              (u.pooledCache = n),
              n.refCount++,
              n !== null && (u.pooledCacheLanes |= a),
              (u = n)),
            (t.memoizedState = { parent: e, cache: u }),
            qc(t),
            Tt(t, ul, u))
          : (l.lanes & a && (Xi(l, t), Ee(t, null, null, a), Ae()),
            (u = l.memoizedState),
            (n = t.memoizedState),
            u.parent !== e
              ? ((u = { parent: e, cache: e }),
                (t.memoizedState = u),
                t.lanes === 0 &&
                  (t.memoizedState = t.updateQueue.baseState = u),
                Tt(t, ul, e))
              : ((e = n.cache),
                Tt(t, ul, e),
                e !== u.cache && qi(t, [ul], a, !0))),
        rl(l, t, t.pendingProps.children, a),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(b(156, t.tag));
}
function at(l) {
  l.flags |= 4;
}
function ms(l, t) {
  if (t.type !== "stylesheet" || t.state.loading & 4) l.flags &= -16777217;
  else if (((l.flags |= 16777216), !H1(t))) {
    if (
      ((t = Zl.current),
      t !== null &&
        ((B & 4194048) === B
          ? Pl !== null
          : ((B & 62914560) !== B && !(B & 536870912)) || t !== Pl))
    )
      throw ((Se = Ci), Wo);
    l.flags |= 8192;
  }
}
function bu(l, t) {
  t !== null && (l.flags |= 4),
    l.flags & 16384 &&
      ((t = l.tag !== 22 ? go() : 536870912), (l.lanes |= t), (Ka |= t));
}
function ce(l, t) {
  if (!q)
    switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; )
          t.alternate !== null && (a = t), (t = t.sibling);
        a === null ? (l.tail = null) : (a.sibling = null);
        break;
      case "collapsed":
        a = l.tail;
        for (var e = null; a !== null; )
          a.alternate !== null && (e = a), (a = a.sibling);
        e === null
          ? t || l.tail === null
            ? (l.tail = null)
            : (l.tail.sibling = null)
          : (e.sibling = null);
    }
}
function $(l) {
  var t = l.alternate !== null && l.alternate.child === l.child,
    a = 0,
    e = 0;
  if (t)
    for (var u = l.child; u !== null; )
      (a |= u.lanes | u.childLanes),
        (e |= u.subtreeFlags & 65011712),
        (e |= u.flags & 65011712),
        (u.return = l),
        (u = u.sibling);
  else
    for (u = l.child; u !== null; )
      (a |= u.lanes | u.childLanes),
        (e |= u.subtreeFlags),
        (e |= u.flags),
        (u.return = l),
        (u = u.sibling);
  return (l.subtreeFlags |= e), (l.childLanes = a), t;
}
function Jr(l, t, a) {
  var e = t.pendingProps;
  switch ((Hc(t), t.tag)) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $(t), null;
    case 1:
      return $(t), null;
    case 3:
      return (
        (a = t.stateNode),
        (e = null),
        l !== null && (e = l.memoizedState.cache),
        t.memoizedState.cache !== e && (t.flags |= 2048),
        dt(ul),
        Ga(),
        a.pendingContext &&
          ((a.context = a.pendingContext), (a.pendingContext = null)),
        (l === null || l.child === null) &&
          (ne(t)
            ? at(t)
            : l === null ||
              (l.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lf())),
        $(t),
        null
      );
    case 26:
      return (
        (a = t.memoizedState),
        l === null
          ? (at(t),
            a !== null ? ($(t), ms(t, a)) : ($(t), (t.flags &= -16777217)))
          : a
            ? a !== l.memoizedState
              ? (at(t), $(t), ms(t, a))
              : ($(t), (t.flags &= -16777217))
            : (l.memoizedProps !== e && at(t), $(t), (t.flags &= -16777217)),
        null
      );
    case 27:
      Cu(t), (a = jt.current);
      var u = t.type;
      if (l !== null && t.stateNode != null) l.memoizedProps !== e && at(t);
      else {
        if (!e) {
          if (t.stateNode === null) throw Error(b(166));
          return $(t), null;
        }
        (l = Wl.current),
          ne(t) ? Zf(t) : ((l = U1(u, e, a)), (t.stateNode = l), at(t));
      }
      return $(t), null;
    case 5:
      if ((Cu(t), (a = t.type), l !== null && t.stateNode != null))
        l.memoizedProps !== e && at(t);
      else {
        if (!e) {
          if (t.stateNode === null) throw Error(b(166));
          return $(t), null;
        }
        if (((l = Wl.current), ne(t))) Zf(t);
        else {
          switch (((u = fn(jt.current)), l)) {
            case 1:
              l = u.createElementNS("http://www.w3.org/2000/svg", a);
              break;
            case 2:
              l = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
              break;
            default:
              switch (a) {
                case "svg":
                  l = u.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case "math":
                  l = u.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    a
                  );
                  break;
                case "script":
                  (l = u.createElement("div")),
                    (l.innerHTML = "<script></script>"),
                    (l = l.removeChild(l.firstChild));
                  break;
                case "select":
                  (l =
                    typeof e.is == "string"
                      ? u.createElement("select", { is: e.is })
                      : u.createElement("select")),
                    e.multiple
                      ? (l.multiple = !0)
                      : e.size && (l.size = e.size);
                  break;
                default:
                  l =
                    typeof e.is == "string"
                      ? u.createElement(a, { is: e.is })
                      : u.createElement(a);
              }
          }
          (l[vl] = t), (l[Tl] = e);
          l: for (u = t.child; u !== null; ) {
            if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
              (u.child.return = u), (u = u.child);
              continue;
            }
            if (u === t) break l;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === t) break l;
              u = u.return;
            }
            (u.sibling.return = u.return), (u = u.sibling);
          }
          t.stateNode = l;
          l: switch ((ml(l, a, e), a)) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              l = !!e.autoFocus;
              break l;
            case "img":
              l = !0;
              break l;
            default:
              l = !1;
          }
          l && at(t);
        }
      }
      return $(t), (t.flags &= -16777217), null;
    case 6:
      if (l && t.stateNode != null) l.memoizedProps !== e && at(t);
      else {
        if (typeof e != "string" && t.stateNode === null) throw Error(b(166));
        if (((l = jt.current), ne(t))) {
          if (
            ((l = t.stateNode),
            (a = t.memoizedProps),
            (e = null),
            (u = gl),
            u !== null)
          )
            switch (u.tag) {
              case 27:
              case 5:
                e = u.memoizedProps;
            }
          (l[vl] = t),
            (l = !!(
              l.nodeValue === a ||
              (e !== null && e.suppressHydrationWarning === !0) ||
              M1(l.nodeValue, a)
            )),
            l || ua(t);
        } else (l = fn(l).createTextNode(e)), (l[vl] = t), (t.stateNode = l);
      }
      return $(t), null;
    case 13:
      if (
        ((e = t.memoizedState),
        l === null ||
          (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
      ) {
        if (((u = ne(t)), e !== null && e.dehydrated !== null)) {
          if (l === null) {
            if (!u) throw Error(b(318));
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(b(317));
            u[vl] = t;
          } else
            $e(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $(t), (u = !1);
        } else
          (u = Lf()),
            l !== null &&
              l.memoizedState !== null &&
              (l.memoizedState.hydrationErrors = u),
            (u = !0);
        if (!u) return t.flags & 256 ? (st(t), t) : (st(t), null);
      }
      if ((st(t), t.flags & 128)) return (t.lanes = a), t;
      if (((a = e !== null), (l = l !== null && l.memoizedState !== null), a)) {
        (e = t.child),
          (u = null),
          e.alternate !== null &&
            e.alternate.memoizedState !== null &&
            e.alternate.memoizedState.cachePool !== null &&
            (u = e.alternate.memoizedState.cachePool.pool);
        var n = null;
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
          n !== u && (e.flags |= 2048);
      }
      return (
        a !== l && a && (t.child.flags |= 8192),
        bu(t, t.updateQueue),
        $(t),
        null
      );
    case 4:
      return Ga(), l === null && nf(t.stateNode.containerInfo), $(t), null;
    case 10:
      return dt(t.type), $(t), null;
    case 19:
      if ((dl(nl), (u = t.memoizedState), u === null)) return $(t), null;
      if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
        if (e) ce(u, !1);
        else {
          if (F !== 0 || (l !== null && l.flags & 128))
            for (l = t.child; l !== null; ) {
              if (((n = Fu(l)), n !== null)) {
                for (
                  t.flags |= 128,
                    ce(u, !1),
                    l = n.updateQueue,
                    t.updateQueue = l,
                    bu(t, l),
                    t.subtreeFlags = 0,
                    l = a,
                    a = t.child;
                  a !== null;

                )
                  Jo(a, l), (a = a.sibling);
                return k(nl, (nl.current & 1) | 2), t.child;
              }
              l = l.sibling;
            }
          u.tail !== null &&
            Fl() > an &&
            ((t.flags |= 128), (e = !0), ce(u, !1), (t.lanes = 4194304));
        }
      else {
        if (!e)
          if (((l = Fu(n)), l !== null)) {
            if (
              ((t.flags |= 128),
              (e = !0),
              (l = l.updateQueue),
              (t.updateQueue = l),
              bu(t, l),
              ce(u, !0),
              u.tail === null && u.tailMode === "hidden" && !n.alternate && !q)
            )
              return $(t), null;
          } else
            2 * Fl() - u.renderingStartTime > an &&
              a !== 536870912 &&
              ((t.flags |= 128), (e = !0), ce(u, !1), (t.lanes = 4194304));
        u.isBackwards
          ? ((n.sibling = t.child), (t.child = n))
          : ((l = u.last),
            l !== null ? (l.sibling = n) : (t.child = n),
            (u.last = n));
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = Fl()),
          (t.sibling = null),
          (l = nl.current),
          k(nl, e ? (l & 1) | 2 : l & 1),
          t)
        : ($(t), null);
    case 22:
    case 23:
      return (
        st(t),
        Gc(),
        (e = t.memoizedState !== null),
        l !== null
          ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
          : e && (t.flags |= 8192),
        e
          ? a & 536870912 &&
            !(t.flags & 128) &&
            ($(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $(t),
        (a = t.updateQueue),
        a !== null && bu(t, a.retryQueue),
        (a = null),
        l !== null &&
          l.memoizedState !== null &&
          l.memoizedState.cachePool !== null &&
          (a = l.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== a && (t.flags |= 2048),
        l !== null && dl(ta),
        null
      );
    case 24:
      return (
        (a = null),
        l !== null && (a = l.memoizedState.cache),
        t.memoizedState.cache !== a && (t.flags |= 2048),
        dt(ul),
        $(t),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(b(156, t.tag));
}
function wr(l, t) {
  switch ((Hc(t), t.tag)) {
    case 1:
      return (
        (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
      );
    case 3:
      return (
        dt(ul),
        Ga(),
        (l = t.flags),
        l & 65536 && !(l & 128) ? ((t.flags = (l & -65537) | 128), t) : null
      );
    case 26:
    case 27:
    case 5:
      return Cu(t), null;
    case 13:
      if ((st(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        $e();
      }
      return (
        (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
      );
    case 19:
      return dl(nl), null;
    case 4:
      return Ga(), null;
    case 10:
      return dt(t.type), null;
    case 22:
    case 23:
      return (
        st(t),
        Gc(),
        l !== null && dl(ta),
        (l = t.flags),
        l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
      );
    case 24:
      return dt(ul), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function J0(l, t) {
  switch ((Hc(t), t.tag)) {
    case 3:
      dt(ul), Ga();
      break;
    case 26:
    case 27:
    case 5:
      Cu(t);
      break;
    case 4:
      Ga();
      break;
    case 13:
      st(t);
      break;
    case 19:
      dl(nl);
      break;
    case 10:
      dt(t.type);
      break;
    case 22:
    case 23:
      st(t), Gc(), l !== null && dl(ta);
      break;
    case 24:
      dt(ul);
  }
}
function tu(l, t) {
  try {
    var a = t.updateQueue,
      e = a !== null ? a.lastEffect : null;
    if (e !== null) {
      var u = e.next;
      a = u;
      do {
        if ((a.tag & l) === l) {
          e = void 0;
          var n = a.create,
            i = a.inst;
          (e = n()), (i.destroy = e);
        }
        a = a.next;
      } while (a !== u);
    }
  } catch (c) {
    V(t, t.return, c);
  }
}
function Qt(l, t, a) {
  try {
    var e = t.updateQueue,
      u = e !== null ? e.lastEffect : null;
    if (u !== null) {
      var n = u.next;
      e = n;
      do {
        if ((e.tag & l) === l) {
          var i = e.inst,
            c = i.destroy;
          if (c !== void 0) {
            (i.destroy = void 0), (u = t);
            var f = a,
              d = c;
            try {
              d();
            } catch (y) {
              V(u, f, y);
            }
          }
        }
        e = e.next;
      } while (e !== n);
    }
  } catch (y) {
    V(t, t.return, y);
  }
}
function w0(l) {
  var t = l.updateQueue;
  if (t !== null) {
    var a = l.stateNode;
    try {
      Io(t, a);
    } catch (e) {
      V(l, l.return, e);
    }
  }
}
function k0(l, t, a) {
  (a.props = ca(l.type, l.memoizedProps)), (a.state = l.memoizedState);
  try {
    a.componentWillUnmount();
  } catch (e) {
    V(l, t, e);
  }
}
function ze(l, t) {
  try {
    var a = l.ref;
    if (a !== null) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          var e = l.stateNode;
          break;
        case 30:
          e = l.stateNode;
          break;
        default:
          e = l.stateNode;
      }
      typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
    }
  } catch (u) {
    V(l, t, u);
  }
}
function $l(l, t) {
  var a = l.ref,
    e = l.refCleanup;
  if (a !== null)
    if (typeof e == "function")
      try {
        e();
      } catch (u) {
        V(l, t, u);
      } finally {
        (l.refCleanup = null),
          (l = l.alternate),
          l != null && (l.refCleanup = null);
      }
    else if (typeof a == "function")
      try {
        a(null);
      } catch (u) {
        V(l, t, u);
      }
    else a.current = null;
}
function $0(l) {
  var t = l.type,
    a = l.memoizedProps,
    e = l.stateNode;
  try {
    l: switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        a.autoFocus && e.focus();
        break l;
      case "img":
        a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
    }
  } catch (u) {
    V(l, l.return, u);
  }
}
function ii(l, t, a) {
  try {
    var e = l.stateNode;
    mh(e, l.type, a, t), (e[Tl] = t);
  } catch (u) {
    V(l, l.return, u);
  }
}
function W0(l) {
  return (
    l.tag === 5 ||
    l.tag === 3 ||
    l.tag === 26 ||
    (l.tag === 27 && Lt(l.type)) ||
    l.tag === 4
  );
}
function ci(l) {
  l: for (;;) {
    for (; l.sibling === null; ) {
      if (l.return === null || W0(l.return)) return null;
      l = l.return;
    }
    for (
      l.sibling.return = l.return, l = l.sibling;
      l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

    ) {
      if (
        (l.tag === 27 && Lt(l.type)) ||
        l.flags & 2 ||
        l.child === null ||
        l.tag === 4
      )
        continue l;
      (l.child.return = l), (l = l.child);
    }
    if (!(l.flags & 2)) return l.stateNode;
  }
}
function Wi(l, t, a) {
  var e = l.tag;
  if (e === 5 || e === 6)
    (l = l.stateNode),
      t
        ? (a.nodeType === 9
            ? a.body
            : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
          ).insertBefore(l, t)
        : ((t =
            a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
          t.appendChild(l),
          (a = a._reactRootContainer),
          a != null || t.onclick !== null || (t.onclick = Rn));
  else if (
    e !== 4 &&
    (e === 27 && Lt(l.type) && ((a = l.stateNode), (t = null)),
    (l = l.child),
    l !== null)
  )
    for (Wi(l, t, a), l = l.sibling; l !== null; ) Wi(l, t, a), (l = l.sibling);
}
function tn(l, t, a) {
  var e = l.tag;
  if (e === 5 || e === 6)
    (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
  else if (
    e !== 4 &&
    (e === 27 && Lt(l.type) && (a = l.stateNode), (l = l.child), l !== null)
  )
    for (tn(l, t, a), l = l.sibling; l !== null; ) tn(l, t, a), (l = l.sibling);
}
function F0(l) {
  var t = l.stateNode,
    a = l.memoizedProps;
  try {
    for (var e = l.type, u = t.attributes; u.length; )
      t.removeAttributeNode(u[0]);
    ml(t, e, a), (t[vl] = l), (t[Tl] = a);
  } catch (n) {
    V(l, l.return, n);
  }
}
var ut = !1,
  tl = !1,
  fi = !1,
  vs = typeof WeakSet == "function" ? WeakSet : Set,
  fl = null;
function kr(l, t) {
  if (((l = l.containerInfo), (uc = rn), (l = Go(l)), Dc(l))) {
    if ("selectionStart" in l)
      var a = { start: l.selectionStart, end: l.selectionEnd };
    else
      l: {
        a = ((a = l.ownerDocument) && a.defaultView) || window;
        var e = a.getSelection && a.getSelection();
        if (e && e.rangeCount !== 0) {
          a = e.anchorNode;
          var u = e.anchorOffset,
            n = e.focusNode;
          e = e.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var i = 0,
            c = -1,
            f = -1,
            d = 0,
            y = 0,
            v = l,
            r = null;
          t: for (;;) {
            for (
              var m;
              v !== a || (u !== 0 && v.nodeType !== 3) || (c = i + u),
                v !== n || (e !== 0 && v.nodeType !== 3) || (f = i + e),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (m = v.firstChild) !== null;

            )
              (r = v), (v = m);
            for (;;) {
              if (v === l) break t;
              if (
                (r === a && ++d === u && (c = i),
                r === n && ++y === e && (f = i),
                (m = v.nextSibling) !== null)
              )
                break;
              (v = r), (r = v.parentNode);
            }
            v = m;
          }
          a = c === -1 || f === -1 ? null : { start: c, end: f };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (
    nc = { focusedElem: l, selectionRange: a }, rn = !1, fl = t;
    fl !== null;

  )
    if (((t = fl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null))
      (l.return = t), (fl = l);
    else
      for (; fl !== null; ) {
        switch (((t = fl), (n = t.alternate), (l = t.flags), t.tag)) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (l & 1024 && n !== null) {
              (l = void 0),
                (a = t),
                (u = n.memoizedProps),
                (n = n.memoizedState),
                (e = a.stateNode);
              try {
                var z = ca(a.type, u, a.elementType === a.type);
                (l = e.getSnapshotBeforeUpdate(z, n)),
                  (e.__reactInternalSnapshotBeforeUpdate = l);
              } catch (T) {
                V(a, a.return, T);
              }
            }
            break;
          case 3:
            if (l & 1024) {
              if (((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9))
                cc(l);
              else if (a === 1)
                switch (l.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    cc(l);
                    break;
                  default:
                    l.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (l & 1024) throw Error(b(163));
        }
        if (((l = t.sibling), l !== null)) {
          (l.return = t.return), (fl = l);
          break;
        }
        fl = t.return;
      }
}
function P0(l, t, a) {
  var e = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 15:
      St(l, a), e & 4 && tu(5, a);
      break;
    case 1:
      if ((St(l, a), e & 4))
        if (((l = a.stateNode), t === null))
          try {
            l.componentDidMount();
          } catch (i) {
            V(a, a.return, i);
          }
        else {
          var u = ca(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            V(a, a.return, i);
          }
        }
      e & 64 && w0(a), e & 512 && ze(a, a.return);
      break;
    case 3:
      if ((St(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
        if (((t = null), a.child !== null))
          switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
        try {
          Io(l, t);
        } catch (i) {
          V(a, a.return, i);
        }
      }
      break;
    case 27:
      t === null && e & 4 && F0(a);
    case 26:
    case 5:
      St(l, a), t === null && e & 4 && $0(a), e & 512 && ze(a, a.return);
      break;
    case 12:
      St(l, a);
      break;
    case 13:
      St(l, a),
        e & 4 && t1(l, a),
        e & 64 &&
          ((l = a.memoizedState),
          l !== null &&
            ((l = l.dehydrated),
            l !== null && ((a = eh.bind(null, a)), Ah(l, a))));
      break;
    case 22:
      if (((e = a.memoizedState !== null || ut), !e)) {
        (t = (t !== null && t.memoizedState !== null) || tl), (u = ut);
        var n = tl;
        (ut = e),
          (tl = t) && !n ? pt(l, a, (a.subtreeFlags & 8772) !== 0) : St(l, a),
          (ut = u),
          (tl = n);
      }
      break;
    case 30:
      break;
    default:
      St(l, a);
  }
}
function I0(l) {
  var t = l.alternate;
  t !== null && ((l.alternate = null), I0(t)),
    (l.child = null),
    (l.deletions = null),
    (l.sibling = null),
    l.tag === 5 && ((t = l.stateNode), t !== null && Tc(t)),
    (l.stateNode = null),
    (l.return = null),
    (l.dependencies = null),
    (l.memoizedProps = null),
    (l.memoizedState = null),
    (l.pendingProps = null),
    (l.stateNode = null),
    (l.updateQueue = null);
}
var J = null,
  Al = !1;
function et(l, t, a) {
  for (a = a.child; a !== null; ) l1(l, t, a), (a = a.sibling);
}
function l1(l, t, a) {
  if (Dl && typeof Dl.onCommitFiberUnmount == "function")
    try {
      Dl.onCommitFiberUnmount(Le, a);
    } catch {}
  switch (a.tag) {
    case 26:
      tl || $l(a, t),
        et(l, t, a),
        a.memoizedState
          ? a.memoizedState.count--
          : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
      break;
    case 27:
      tl || $l(a, t);
      var e = J,
        u = Al;
      Lt(a.type) && ((J = a.stateNode), (Al = !1)),
        et(l, t, a),
        Me(a.stateNode),
        (J = e),
        (Al = u);
      break;
    case 5:
      tl || $l(a, t);
    case 6:
      if (
        ((e = J),
        (u = Al),
        (J = null),
        et(l, t, a),
        (J = e),
        (Al = u),
        J !== null)
      )
        if (Al)
          try {
            (J.nodeType === 9
              ? J.body
              : J.nodeName === "HTML"
                ? J.ownerDocument.body
                : J
            ).removeChild(a.stateNode);
          } catch (n) {
            V(a, t, n);
          }
        else
          try {
            J.removeChild(a.stateNode);
          } catch (n) {
            V(a, t, n);
          }
      break;
    case 18:
      J !== null &&
        (Al
          ? ((l = J),
            _s(
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
              a.stateNode
            ),
            Ze(l))
          : _s(J, a.stateNode));
      break;
    case 4:
      (e = J),
        (u = Al),
        (J = a.stateNode.containerInfo),
        (Al = !0),
        et(l, t, a),
        (J = e),
        (Al = u);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      tl || Qt(2, a, t), tl || Qt(4, a, t), et(l, t, a);
      break;
    case 1:
      tl ||
        ($l(a, t),
        (e = a.stateNode),
        typeof e.componentWillUnmount == "function" && k0(a, t, e)),
        et(l, t, a);
      break;
    case 21:
      et(l, t, a);
      break;
    case 22:
      (tl = (e = tl) || a.memoizedState !== null), et(l, t, a), (tl = e);
      break;
    default:
      et(l, t, a);
  }
}
function t1(l, t) {
  if (
    t.memoizedState === null &&
    ((l = t.alternate),
    l !== null &&
      ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
  )
    try {
      Ze(l);
    } catch (a) {
      V(t, t.return, a);
    }
}
function $r(l) {
  switch (l.tag) {
    case 13:
    case 19:
      var t = l.stateNode;
      return t === null && (t = l.stateNode = new vs()), t;
    case 22:
      return (
        (l = l.stateNode),
        (t = l._retryCache),
        t === null && (t = l._retryCache = new vs()),
        t
      );
    default:
      throw Error(b(435, l.tag));
  }
}
function si(l, t) {
  var a = $r(l);
  t.forEach(function (e) {
    var u = uh.bind(null, l, e);
    a.has(e) || (a.add(e), e.then(u, u));
  });
}
function Ol(l, t) {
  var a = t.deletions;
  if (a !== null)
    for (var e = 0; e < a.length; e++) {
      var u = a[e],
        n = l,
        i = t,
        c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (Lt(c.type)) {
              (J = c.stateNode), (Al = !1);
              break l;
            }
            break;
          case 5:
            (J = c.stateNode), (Al = !1);
            break l;
          case 3:
          case 4:
            (J = c.stateNode.containerInfo), (Al = !0);
            break l;
        }
        c = c.return;
      }
      if (J === null) throw Error(b(160));
      l1(n, i, u),
        (J = null),
        (Al = !1),
        (n = u.alternate),
        n !== null && (n.return = null),
        (u.return = null);
    }
  if (t.subtreeFlags & 13878)
    for (t = t.child; t !== null; ) a1(t, l), (t = t.sibling);
}
var Ll = null;
function a1(l, t) {
  var a = l.alternate,
    e = l.flags;
  switch (l.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      Ol(t, l),
        xl(l),
        e & 4 && (Qt(3, l, l.return), tu(3, l), Qt(5, l, l.return));
      break;
    case 1:
      Ol(t, l),
        xl(l),
        e & 512 && (tl || a === null || $l(a, a.return)),
        e & 64 &&
          ut &&
          ((l = l.updateQueue),
          l !== null &&
            ((e = l.callbacks),
            e !== null &&
              ((a = l.shared.hiddenCallbacks),
              (l.shared.hiddenCallbacks = a === null ? e : a.concat(e)))));
      break;
    case 26:
      var u = Ll;
      if (
        (Ol(t, l),
        xl(l),
        e & 512 && (tl || a === null || $l(a, a.return)),
        e & 4)
      ) {
        var n = a !== null ? a.memoizedState : null;
        if (((e = l.memoizedState), a === null))
          if (e === null)
            if (l.stateNode === null) {
              l: {
                (e = l.type), (a = l.memoizedProps), (u = u.ownerDocument || u);
                t: switch (e) {
                  case "title":
                    (n = u.getElementsByTagName("title")[0]),
                      (!n ||
                        n[we] ||
                        n[vl] ||
                        n.namespaceURI === "http://www.w3.org/2000/svg" ||
                        n.hasAttribute("itemprop")) &&
                        ((n = u.createElement(e)),
                        u.head.insertBefore(
                          n,
                          u.querySelector("head > title")
                        )),
                      ml(n, e, a),
                      (n[vl] = l),
                      sl(n),
                      (e = n);
                    break l;
                  case "link":
                    var i = js("link", "href", u).get(e + (a.href || ""));
                    if (i) {
                      for (var c = 0; c < i.length; c++)
                        if (
                          ((n = i[c]),
                          n.getAttribute("href") ===
                            (a.href == null || a.href === "" ? null : a.href) &&
                            n.getAttribute("rel") ===
                              (a.rel == null ? null : a.rel) &&
                            n.getAttribute("title") ===
                              (a.title == null ? null : a.title) &&
                            n.getAttribute("crossorigin") ===
                              (a.crossOrigin == null ? null : a.crossOrigin))
                        ) {
                          i.splice(c, 1);
                          break t;
                        }
                    }
                    (n = u.createElement(e)),
                      ml(n, e, a),
                      u.head.appendChild(n);
                    break;
                  case "meta":
                    if (
                      (i = js("meta", "content", u).get(e + (a.content || "")))
                    ) {
                      for (c = 0; c < i.length; c++)
                        if (
                          ((n = i[c]),
                          n.getAttribute("content") ===
                            (a.content == null ? null : "" + a.content) &&
                            n.getAttribute("name") ===
                              (a.name == null ? null : a.name) &&
                            n.getAttribute("property") ===
                              (a.property == null ? null : a.property) &&
                            n.getAttribute("http-equiv") ===
                              (a.httpEquiv == null ? null : a.httpEquiv) &&
                            n.getAttribute("charset") ===
                              (a.charSet == null ? null : a.charSet))
                        ) {
                          i.splice(c, 1);
                          break t;
                        }
                    }
                    (n = u.createElement(e)),
                      ml(n, e, a),
                      u.head.appendChild(n);
                    break;
                  default:
                    throw Error(b(468, e));
                }
                (n[vl] = l), sl(n), (e = n);
              }
              l.stateNode = e;
            } else Rs(u, l.type, l.stateNode);
          else l.stateNode = Us(u, e, l.memoizedProps);
        else
          n !== e
            ? (n === null
                ? a.stateNode !== null &&
                  ((a = a.stateNode), a.parentNode.removeChild(a))
                : n.count--,
              e === null
                ? Rs(u, l.type, l.stateNode)
                : Us(u, e, l.memoizedProps))
            : e === null &&
              l.stateNode !== null &&
              ii(l, l.memoizedProps, a.memoizedProps);
      }
      break;
    case 27:
      Ol(t, l),
        xl(l),
        e & 512 && (tl || a === null || $l(a, a.return)),
        a !== null && e & 4 && ii(l, l.memoizedProps, a.memoizedProps);
      break;
    case 5:
      if (
        (Ol(t, l),
        xl(l),
        e & 512 && (tl || a === null || $l(a, a.return)),
        l.flags & 32)
      ) {
        u = l.stateNode;
        try {
          Xa(u, "");
        } catch (m) {
          V(l, l.return, m);
        }
      }
      e & 4 &&
        l.stateNode != null &&
        ((u = l.memoizedProps), ii(l, u, a !== null ? a.memoizedProps : u)),
        e & 1024 && (fi = !0);
      break;
    case 6:
      if ((Ol(t, l), xl(l), e & 4)) {
        if (l.stateNode === null) throw Error(b(162));
        (e = l.memoizedProps), (a = l.stateNode);
        try {
          a.nodeValue = e;
        } catch (m) {
          V(l, l.return, m);
        }
      }
      break;
    case 3:
      if (
        ((Bu = null),
        (u = Ll),
        (Ll = sn(t.containerInfo)),
        Ol(t, l),
        (Ll = u),
        xl(l),
        e & 4 && a !== null && a.memoizedState.isDehydrated)
      )
        try {
          Ze(t.containerInfo);
        } catch (m) {
          V(l, l.return, m);
        }
      fi && ((fi = !1), e1(l));
      break;
    case 4:
      (e = Ll), (Ll = sn(l.stateNode.containerInfo)), Ol(t, l), xl(l), (Ll = e);
      break;
    case 12:
      Ol(t, l), xl(l);
      break;
    case 13:
      Ol(t, l),
        xl(l),
        l.child.flags & 8192 &&
          (l.memoizedState !== null) !=
            (a !== null && a.memoizedState !== null) &&
          (af = Fl()),
        e & 4 &&
          ((e = l.updateQueue),
          e !== null && ((l.updateQueue = null), si(l, e)));
      break;
    case 22:
      u = l.memoizedState !== null;
      var f = a !== null && a.memoizedState !== null,
        d = ut,
        y = tl;
      if (
        ((ut = d || u),
        (tl = y || f),
        Ol(t, l),
        (tl = y),
        (ut = d),
        xl(l),
        e & 8192)
      )
        l: for (
          t = l.stateNode,
            t._visibility = u ? t._visibility & -2 : t._visibility | 1,
            u && (a === null || f || ut || tl || Wt(l)),
            a = null,
            t = l;
          ;

        ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              f = a = t;
              try {
                if (((n = f.stateNode), u))
                  (i = n.style),
                    typeof i.setProperty == "function"
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none");
                else {
                  c = f.stateNode;
                  var v = f.memoizedProps.style,
                    r =
                      v != null && v.hasOwnProperty("display")
                        ? v.display
                        : null;
                  c.style.display =
                    r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                }
              } catch (m) {
                V(f, f.return, m);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              f = t;
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                V(f, f.return, m);
              }
            }
          } else if (
            ((t.tag !== 22 && t.tag !== 23) ||
              t.memoizedState === null ||
              t === l) &&
            t.child !== null
          ) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), (t = t.return);
          }
          a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling);
        }
      e & 4 &&
        ((e = l.updateQueue),
        e !== null &&
          ((a = e.retryQueue),
          a !== null && ((e.retryQueue = null), si(l, a))));
      break;
    case 19:
      Ol(t, l),
        xl(l),
        e & 4 &&
          ((e = l.updateQueue),
          e !== null && ((l.updateQueue = null), si(l, e)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      Ol(t, l), xl(l);
  }
}
function xl(l) {
  var t = l.flags;
  if (t & 2) {
    try {
      for (var a, e = l.return; e !== null; ) {
        if (W0(e)) {
          a = e;
          break;
        }
        e = e.return;
      }
      if (a == null) throw Error(b(160));
      switch (a.tag) {
        case 27:
          var u = a.stateNode,
            n = ci(l);
          tn(l, n, u);
          break;
        case 5:
          var i = a.stateNode;
          a.flags & 32 && (Xa(i, ""), (a.flags &= -33));
          var c = ci(l);
          tn(l, c, i);
          break;
        case 3:
        case 4:
          var f = a.stateNode.containerInfo,
            d = ci(l);
          Wi(l, d, f);
          break;
        default:
          throw Error(b(161));
      }
    } catch (y) {
      V(l, l.return, y);
    }
    l.flags &= -3;
  }
  t & 4096 && (l.flags &= -4097);
}
function e1(l) {
  if (l.subtreeFlags & 1024)
    for (l = l.child; l !== null; ) {
      var t = l;
      e1(t),
        t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
        (l = l.sibling);
    }
}
function St(l, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; ) P0(l, t.alternate, t), (t = t.sibling);
}
function Wt(l) {
  for (l = l.child; l !== null; ) {
    var t = l;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(4, t, t.return), Wt(t);
        break;
      case 1:
        $l(t, t.return);
        var a = t.stateNode;
        typeof a.componentWillUnmount == "function" && k0(t, t.return, a),
          Wt(t);
        break;
      case 27:
        Me(t.stateNode);
      case 26:
      case 5:
        $l(t, t.return), Wt(t);
        break;
      case 22:
        t.memoizedState === null && Wt(t);
        break;
      case 30:
        Wt(t);
        break;
      default:
        Wt(t);
    }
    l = l.sibling;
  }
}
function pt(l, t, a) {
  for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var e = t.alternate,
      u = l,
      n = t,
      i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        pt(u, n, a), tu(4, n);
        break;
      case 1:
        if (
          (pt(u, n, a),
          (e = n),
          (u = e.stateNode),
          typeof u.componentDidMount == "function")
        )
          try {
            u.componentDidMount();
          } catch (d) {
            V(e, e.return, d);
          }
        if (((e = n), (u = e.updateQueue), u !== null)) {
          var c = e.stateNode;
          try {
            var f = u.shared.hiddenCallbacks;
            if (f !== null)
              for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                Po(f[u], c);
          } catch (d) {
            V(e, e.return, d);
          }
        }
        a && i & 64 && w0(n), ze(n, n.return);
        break;
      case 27:
        F0(n);
      case 26:
      case 5:
        pt(u, n, a), a && e === null && i & 4 && $0(n), ze(n, n.return);
        break;
      case 12:
        pt(u, n, a);
        break;
      case 13:
        pt(u, n, a), a && i & 4 && t1(u, n);
        break;
      case 22:
        n.memoizedState === null && pt(u, n, a), ze(n, n.return);
        break;
      case 30:
        break;
      default:
        pt(u, n, a);
    }
    t = t.sibling;
  }
}
function Pc(l, t) {
  var a = null;
  l !== null &&
    l.memoizedState !== null &&
    l.memoizedState.cachePool !== null &&
    (a = l.memoizedState.cachePool.pool),
    (l = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
    l !== a && (l != null && l.refCount++, a != null && Fe(a));
}
function Ic(l, t) {
  (l = null),
    t.alternate !== null && (l = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache),
    t !== l && (t.refCount++, l != null && Fe(l));
}
function wl(l, t, a, e) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) u1(l, t, a, e), (t = t.sibling);
}
function u1(l, t, a, e) {
  var u = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      wl(l, t, a, e), u & 2048 && tu(9, t);
      break;
    case 1:
      wl(l, t, a, e);
      break;
    case 3:
      wl(l, t, a, e),
        u & 2048 &&
          ((l = null),
          t.alternate !== null && (l = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== l && (t.refCount++, l != null && Fe(l)));
      break;
    case 12:
      if (u & 2048) {
        wl(l, t, a, e), (l = t.stateNode);
        try {
          var n = t.memoizedProps,
            i = n.id,
            c = n.onPostCommit;
          typeof c == "function" &&
            c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
        } catch (f) {
          V(t, t.return, f);
        }
      } else wl(l, t, a, e);
      break;
    case 13:
      wl(l, t, a, e);
      break;
    case 23:
      break;
    case 22:
      (n = t.stateNode),
        (i = t.alternate),
        t.memoizedState !== null
          ? n._visibility & 2
            ? wl(l, t, a, e)
            : Oe(l, t)
          : n._visibility & 2
            ? wl(l, t, a, e)
            : ((n._visibility |= 2),
              ya(l, t, a, e, (t.subtreeFlags & 10256) !== 0)),
        u & 2048 && Pc(i, t);
      break;
    case 24:
      wl(l, t, a, e), u & 2048 && Ic(t.alternate, t);
      break;
    default:
      wl(l, t, a, e);
  }
}
function ya(l, t, a, e, u) {
  for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
    var n = l,
      i = t,
      c = a,
      f = e,
      d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        ya(n, i, c, f, u), tu(8, i);
        break;
      case 23:
        break;
      case 22:
        var y = i.stateNode;
        i.memoizedState !== null
          ? y._visibility & 2
            ? ya(n, i, c, f, u)
            : Oe(n, i)
          : ((y._visibility |= 2), ya(n, i, c, f, u)),
          u && d & 2048 && Pc(i.alternate, i);
        break;
      case 24:
        ya(n, i, c, f, u), u && d & 2048 && Ic(i.alternate, i);
        break;
      default:
        ya(n, i, c, f, u);
    }
    t = t.sibling;
  }
}
function Oe(l, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var a = l,
        e = t,
        u = e.flags;
      switch (e.tag) {
        case 22:
          Oe(a, e), u & 2048 && Pc(e.alternate, e);
          break;
        case 24:
          Oe(a, e), u & 2048 && Ic(e.alternate, e);
          break;
        default:
          Oe(a, e);
      }
      t = t.sibling;
    }
}
var he = 8192;
function ra(l) {
  if (l.subtreeFlags & he)
    for (l = l.child; l !== null; ) n1(l), (l = l.sibling);
}
function n1(l) {
  switch (l.tag) {
    case 26:
      ra(l),
        l.flags & he &&
          l.memoizedState !== null &&
          Hh(Ll, l.memoizedState, l.memoizedProps);
      break;
    case 5:
      ra(l);
      break;
    case 3:
    case 4:
      var t = Ll;
      (Ll = sn(l.stateNode.containerInfo)), ra(l), (Ll = t);
      break;
    case 22:
      l.memoizedState === null &&
        ((t = l.alternate),
        t !== null && t.memoizedState !== null
          ? ((t = he), (he = 16777216), ra(l), (he = t))
          : ra(l));
      break;
    default:
      ra(l);
  }
}
function i1(l) {
  var t = l.alternate;
  if (t !== null && ((l = t.child), l !== null)) {
    t.child = null;
    do (t = l.sibling), (l.sibling = null), (l = t);
    while (l !== null);
  }
}
function fe(l) {
  var t = l.deletions;
  if (l.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var e = t[a];
        (fl = e), f1(e, l);
      }
    i1(l);
  }
  if (l.subtreeFlags & 10256)
    for (l = l.child; l !== null; ) c1(l), (l = l.sibling);
}
function c1(l) {
  switch (l.tag) {
    case 0:
    case 11:
    case 15:
      fe(l), l.flags & 2048 && Qt(9, l, l.return);
      break;
    case 3:
      fe(l);
      break;
    case 12:
      fe(l);
      break;
    case 22:
      var t = l.stateNode;
      l.memoizedState !== null &&
      t._visibility & 2 &&
      (l.return === null || l.return.tag !== 13)
        ? ((t._visibility &= -3), Ru(l))
        : fe(l);
      break;
    default:
      fe(l);
  }
}
function Ru(l) {
  var t = l.deletions;
  if (l.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var e = t[a];
        (fl = e), f1(e, l);
      }
    i1(l);
  }
  for (l = l.child; l !== null; ) {
    switch (((t = l), t.tag)) {
      case 0:
      case 11:
      case 15:
        Qt(8, t, t.return), Ru(t);
        break;
      case 22:
        (a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), Ru(t));
        break;
      default:
        Ru(t);
    }
    l = l.sibling;
  }
}
function f1(l, t) {
  for (; fl !== null; ) {
    var a = fl;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Qt(8, a, t);
        break;
      case 23:
      case 22:
        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
          var e = a.memoizedState.cachePool.pool;
          e != null && e.refCount++;
        }
        break;
      case 24:
        Fe(a.memoizedState.cache);
    }
    if (((e = a.child), e !== null)) (e.return = a), (fl = e);
    else
      l: for (a = l; fl !== null; ) {
        e = fl;
        var u = e.sibling,
          n = e.return;
        if ((I0(e), e === a)) {
          fl = null;
          break l;
        }
        if (u !== null) {
          (u.return = n), (fl = u);
          break l;
        }
        fl = n;
      }
  }
}
var Wr = {
    getCacheForType: function (l) {
      var t = yl(ul),
        a = t.data.get(l);
      return a === void 0 && ((a = l()), t.data.set(l, a)), a;
    },
  },
  Fr = typeof WeakMap == "function" ? WeakMap : Map,
  X = 0,
  L = null,
  R = null,
  B = 0,
  C = 0,
  _l = null,
  Dt = !1,
  Ia = !1,
  lf = !1,
  vt = 0,
  F = 0,
  Zt = 0,
  aa = 0,
  tf = 0,
  Ql = 0,
  Ka = 0,
  xe = null,
  El = null,
  Fi = !1,
  af = 0,
  an = 1 / 0,
  en = null,
  Bt = null,
  hl = 0,
  Yt = null,
  Ja = null,
  qa = 0,
  Pi = 0,
  Ii = null,
  s1 = null,
  _e = 0,
  lc = null;
function Ul() {
  if (X & 2 && B !== 0) return B & -B;
  if (x.T !== null) {
    var l = Qa;
    return l !== 0 ? l : uf();
  }
  return po();
}
function o1() {
  Ql === 0 && (Ql = !(B & 536870912) || q ? yo() : 536870912);
  var l = Zl.current;
  return l !== null && (l.flags |= 32), Ql;
}
function jl(l, t, a) {
  ((l === L && (C === 2 || C === 9)) || l.cancelPendingCommit !== null) &&
    (wa(l, 0), Nt(l, B, Ql, !1)),
    Je(l, a),
    (!(X & 2) || l !== L) &&
      (l === L && (!(X & 2) && (aa |= a), F === 4 && Nt(l, B, Ql, !1)), lt(l));
}
function d1(l, t, a) {
  if (X & 6) throw Error(b(327));
  var e = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Ke(l, t),
    u = e ? lh(l, t) : oi(l, t, !0),
    n = e;
  do {
    if (u === 0) {
      Ia && !e && Nt(l, t, 0, !1);
      break;
    } else {
      if (((a = l.current.alternate), n && !Pr(a))) {
        (u = oi(l, t, !1)), (n = !1);
        continue;
      }
      if (u === 2) {
        if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
        else
          (i = l.pendingLanes & -536870913),
            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
        if (i !== 0) {
          t = i;
          l: {
            var c = l;
            u = xe;
            var f = c.current.memoizedState.isDehydrated;
            if ((f && (wa(c, i).flags |= 256), (i = oi(c, i, !1)), i !== 2)) {
              if (lf && !f) {
                (c.errorRecoveryDisabledLanes |= n), (aa |= n), (u = 4);
                break l;
              }
              (n = El),
                (El = u),
                n !== null && (El === null ? (El = n) : El.push.apply(El, n));
            }
            u = i;
          }
          if (((n = !1), u !== 2)) continue;
        }
      }
      if (u === 1) {
        wa(l, 0), Nt(l, t, 0, !0);
        break;
      }
      l: {
        switch (((e = l), (n = u), n)) {
          case 0:
          case 1:
            throw Error(b(345));
          case 4:
            if ((t & 4194048) !== t) break;
          case 6:
            Nt(e, t, Ql, !Dt);
            break l;
          case 2:
            El = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(b(329));
        }
        if ((t & 62914560) === t && ((u = af + 300 - Fl()), 10 < u)) {
          if ((Nt(e, t, Ql, !Dt), pn(e, 0, !0) !== 0)) break l;
          e.timeoutHandle = N1(
            ys.bind(null, e, a, El, en, Fi, t, Ql, aa, Ka, Dt, n, 2, -0, 0),
            u
          );
          break l;
        }
        ys(e, a, El, en, Fi, t, Ql, aa, Ka, Dt, n, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  lt(l);
}
function ys(l, t, a, e, u, n, i, c, f, d, y, v, r, m) {
  if (
    ((l.timeoutHandle = -1),
    (v = t.subtreeFlags),
    (v & 8192 || (v & 16785408) === 16785408) &&
      ((Ge = { stylesheets: null, count: 0, unsuspend: Rh }),
      n1(t),
      (v = Bh()),
      v !== null))
  ) {
    (l.cancelPendingCommit = v(
      bs.bind(null, l, t, n, a, e, u, i, c, f, y, 1, r, m)
    )),
      Nt(l, n, i, !d);
    return;
  }
  bs(l, t, n, a, e, u, i, c, f);
}
function Pr(l) {
  for (var t = l; ; ) {
    var a = t.tag;
    if (
      (a === 0 || a === 11 || a === 15) &&
      t.flags & 16384 &&
      ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
    )
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = u.getSnapshot;
        u = u.value;
        try {
          if (!Rl(n(), u)) return !1;
        } catch {
          return !1;
        }
      }
    if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
      (a.return = t), (t = a);
    else {
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nt(l, t, a, e) {
  (t &= ~tf),
    (t &= ~aa),
    (l.suspendedLanes |= t),
    (l.pingedLanes &= ~t),
    e && (l.warmLanes |= t),
    (e = l.expirationTimes);
  for (var u = t; 0 < u; ) {
    var n = 31 - Nl(u),
      i = 1 << n;
    (e[n] = -1), (u &= ~i);
  }
  a !== 0 && bo(l, a, t);
}
function Nn() {
  return X & 6 ? !0 : (au(0), !1);
}
function ef() {
  if (R !== null) {
    if (C === 0) var l = R.return;
    else (l = R), (ft = da = null), Vc(l), (Ya = null), (Be = 0), (l = R);
    for (; l !== null; ) J0(l.alternate, l), (l = l.return);
    R = null;
  }
}
function wa(l, t) {
  var a = l.timeoutHandle;
  a !== -1 && ((l.timeoutHandle = -1), yh(a)),
    (a = l.cancelPendingCommit),
    a !== null && ((l.cancelPendingCommit = null), a()),
    ef(),
    (L = l),
    (R = a = ot(l.current, null)),
    (B = t),
    (C = 0),
    (_l = null),
    (Dt = !1),
    (Ia = Ke(l, t)),
    (lf = !1),
    (Ka = Ql = tf = aa = Zt = F = 0),
    (El = xe = null),
    (Fi = !1),
    t & 8 && (t |= t & 32);
  var e = l.entangledLanes;
  if (e !== 0)
    for (l = l.entanglements, e &= t; 0 < e; ) {
      var u = 31 - Nl(e),
        n = 1 << u;
      (t |= l[u]), (e &= ~n);
    }
  return (vt = t), zn(), a;
}
function r1(l, t) {
  (D = null),
    (x.H = Wu),
    t === Pe || t === xn
      ? ((t = kf()), (C = 3))
      : t === Wo
        ? ((t = kf()), (C = 4))
        : (C =
            t === X0
              ? 8
              : t !== null &&
                  typeof t == "object" &&
                  typeof t.then == "function"
                ? 6
                : 1),
    (_l = t),
    R === null && ((F = 1), Iu(l, Xl(t, l.current)));
}
function h1() {
  var l = x.H;
  return (x.H = Wu), l === null ? Wu : l;
}
function m1() {
  var l = x.A;
  return (x.A = Wr), l;
}
function tc() {
  (F = 4),
    Dt || ((B & 4194048) !== B && Zl.current !== null) || (Ia = !0),
    (!(Zt & 134217727) && !(aa & 134217727)) || L === null || Nt(L, B, Ql, !1);
}
function oi(l, t, a) {
  var e = X;
  X |= 2;
  var u = h1(),
    n = m1();
  (L !== l || B !== t) && ((en = null), wa(l, t)), (t = !1);
  var i = F;
  l: do
    try {
      if (C !== 0 && R !== null) {
        var c = R,
          f = _l;
        switch (C) {
          case 8:
            ef(), (i = 6);
            break l;
          case 3:
          case 2:
          case 9:
          case 6:
            Zl.current === null && (t = !0);
            var d = C;
            if (((C = 0), (_l = null), Da(l, c, f, d), a && Ia)) {
              i = 0;
              break l;
            }
            break;
          default:
            (d = C), (C = 0), (_l = null), Da(l, c, f, d);
        }
      }
      Ir(), (i = F);
      break;
    } catch (y) {
      r1(l, y);
    }
  while (!0);
  return (
    t && l.shellSuspendCounter++,
    (ft = da = null),
    (X = e),
    (x.H = u),
    (x.A = n),
    R === null && ((L = null), (B = 0), zn()),
    i
  );
}
function Ir() {
  for (; R !== null; ) v1(R);
}
function lh(l, t) {
  var a = X;
  X |= 2;
  var e = h1(),
    u = m1();
  L !== l || B !== t
    ? ((en = null), (an = Fl() + 500), wa(l, t))
    : (Ia = Ke(l, t));
  l: do
    try {
      if (C !== 0 && R !== null) {
        t = R;
        var n = _l;
        t: switch (C) {
          case 1:
            (C = 0), (_l = null), Da(l, t, n, 1);
            break;
          case 2:
          case 9:
            if (wf(n)) {
              (C = 0), (_l = null), gs(t);
              break;
            }
            (t = function () {
              (C !== 2 && C !== 9) || L !== l || (C = 7), lt(l);
            }),
              n.then(t, t);
            break l;
          case 3:
            C = 7;
            break l;
          case 4:
            C = 5;
            break l;
          case 7:
            wf(n)
              ? ((C = 0), (_l = null), gs(t))
              : ((C = 0), (_l = null), Da(l, t, n, 7));
            break;
          case 5:
            var i = null;
            switch (R.tag) {
              case 26:
                i = R.memoizedState;
              case 5:
              case 27:
                var c = R;
                if (!i || H1(i)) {
                  (C = 0), (_l = null);
                  var f = c.sibling;
                  if (f !== null) R = f;
                  else {
                    var d = c.return;
                    d !== null ? ((R = d), Un(d)) : (R = null);
                  }
                  break t;
                }
            }
            (C = 0), (_l = null), Da(l, t, n, 5);
            break;
          case 6:
            (C = 0), (_l = null), Da(l, t, n, 6);
            break;
          case 8:
            ef(), (F = 6);
            break l;
          default:
            throw Error(b(462));
        }
      }
      th();
      break;
    } catch (y) {
      r1(l, y);
    }
  while (!0);
  return (
    (ft = da = null),
    (x.H = e),
    (x.A = u),
    (X = a),
    R !== null ? 0 : ((L = null), (B = 0), zn(), F)
  );
}
function th() {
  for (; R !== null && !Td(); ) v1(R);
}
function v1(l) {
  var t = K0(l.alternate, l, vt);
  (l.memoizedProps = l.pendingProps), t === null ? Un(l) : (R = t);
}
function gs(l) {
  var t = l,
    a = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = os(a, t, t.pendingProps, t.type, void 0, B);
      break;
    case 11:
      t = os(a, t, t.pendingProps, t.type.render, t.ref, B);
      break;
    case 5:
      Vc(t);
    default:
      J0(a, t), (t = R = Jo(t, vt)), (t = K0(a, t, vt));
  }
  (l.memoizedProps = l.pendingProps), t === null ? Un(l) : (R = t);
}
function Da(l, t, a, e) {
  (ft = da = null), Vc(t), (Ya = null), (Be = 0);
  var u = t.return;
  try {
    if (Lr(l, u, t, a, B)) {
      (F = 1), Iu(l, Xl(a, l.current)), (R = null);
      return;
    }
  } catch (n) {
    if (u !== null) throw ((R = u), n);
    (F = 1), Iu(l, Xl(a, l.current)), (R = null);
    return;
  }
  t.flags & 32768
    ? (q || e === 1
        ? (l = !0)
        : Ia || B & 536870912
          ? (l = !1)
          : ((Dt = l = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = Zl.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
      y1(t, l))
    : Un(t);
}
function Un(l) {
  var t = l;
  do {
    if (t.flags & 32768) {
      y1(t, Dt);
      return;
    }
    l = t.return;
    var a = Jr(t.alternate, t, vt);
    if (a !== null) {
      R = a;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      R = t;
      return;
    }
    R = t = l;
  } while (t !== null);
  F === 0 && (F = 5);
}
function y1(l, t) {
  do {
    var a = wr(l.alternate, l);
    if (a !== null) {
      (a.flags &= 32767), (R = a);
      return;
    }
    if (
      ((a = l.return),
      a !== null &&
        ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
      !t && ((l = l.sibling), l !== null))
    ) {
      R = l;
      return;
    }
    R = l = a;
  } while (l !== null);
  (F = 6), (R = null);
}
function bs(l, t, a, e, u, n, i, c, f) {
  l.cancelPendingCommit = null;
  do jn();
  while (hl !== 0);
  if (X & 6) throw Error(b(327));
  if (t !== null) {
    if (t === l.current) throw Error(b(177));
    if (
      ((n = t.lanes | t.childLanes),
      (n |= Nc),
      Rd(l, a, n, i, c, f),
      l === L && ((R = L = null), (B = 0)),
      (Ja = t),
      (Yt = l),
      (qa = a),
      (Pi = n),
      (Ii = u),
      (s1 = e),
      t.subtreeFlags & 10256 || t.flags & 10256
        ? ((l.callbackNode = null),
          (l.callbackPriority = 0),
          nh(Xu, function () {
            return A1(), null;
          }))
        : ((l.callbackNode = null), (l.callbackPriority = 0)),
      (e = (t.flags & 13878) !== 0),
      t.subtreeFlags & 13878 || e)
    ) {
      (e = x.T), (x.T = null), (u = G.p), (G.p = 2), (i = X), (X |= 4);
      try {
        kr(l, t, a);
      } finally {
        (X = i), (G.p = u), (x.T = e);
      }
    }
    (hl = 1), g1(), b1(), S1();
  }
}
function g1() {
  if (hl === 1) {
    hl = 0;
    var l = Yt,
      t = Ja,
      a = (t.flags & 13878) !== 0;
    if (t.subtreeFlags & 13878 || a) {
      (a = x.T), (x.T = null);
      var e = G.p;
      G.p = 2;
      var u = X;
      X |= 4;
      try {
        a1(t, l);
        var n = nc,
          i = Go(l.containerInfo),
          c = n.focusedElem,
          f = n.selectionRange;
        if (
          i !== c &&
          c &&
          c.ownerDocument &&
          qo(c.ownerDocument.documentElement, c)
        ) {
          if (f !== null && Dc(c)) {
            var d = f.start,
              y = f.end;
            if ((y === void 0 && (y = d), "selectionStart" in c))
              (c.selectionStart = d),
                (c.selectionEnd = Math.min(y, c.value.length));
            else {
              var v = c.ownerDocument || document,
                r = (v && v.defaultView) || window;
              if (r.getSelection) {
                var m = r.getSelection(),
                  z = c.textContent.length,
                  T = Math.min(f.start, z),
                  Y = f.end === void 0 ? T : Math.min(f.end, z);
                !m.extend && T > Y && ((i = Y), (Y = T), (T = i));
                var o = Cf(c, T),
                  s = Cf(c, Y);
                if (
                  o &&
                  s &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== o.node ||
                    m.anchorOffset !== o.offset ||
                    m.focusNode !== s.node ||
                    m.focusOffset !== s.offset)
                ) {
                  var h = v.createRange();
                  h.setStart(o.node, o.offset),
                    m.removeAllRanges(),
                    T > Y
                      ? (m.addRange(h), m.extend(s.node, s.offset))
                      : (h.setEnd(s.node, s.offset), m.addRange(h));
                }
              }
            }
          }
          for (v = [], m = c; (m = m.parentNode); )
            m.nodeType === 1 &&
              v.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
          for (
            typeof c.focus == "function" && c.focus(), c = 0;
            c < v.length;
            c++
          ) {
            var g = v[c];
            (g.element.scrollLeft = g.left), (g.element.scrollTop = g.top);
          }
        }
        (rn = !!uc), (nc = uc = null);
      } finally {
        (X = u), (G.p = e), (x.T = a);
      }
    }
    (l.current = t), (hl = 2);
  }
}
function b1() {
  if (hl === 2) {
    hl = 0;
    var l = Yt,
      t = Ja,
      a = (t.flags & 8772) !== 0;
    if (t.subtreeFlags & 8772 || a) {
      (a = x.T), (x.T = null);
      var e = G.p;
      G.p = 2;
      var u = X;
      X |= 4;
      try {
        P0(l, t.alternate, t);
      } finally {
        (X = u), (G.p = e), (x.T = a);
      }
    }
    hl = 3;
  }
}
function S1() {
  if (hl === 4 || hl === 3) {
    (hl = 0), zd();
    var l = Yt,
      t = Ja,
      a = qa,
      e = s1;
    t.subtreeFlags & 10256 || t.flags & 10256
      ? (hl = 5)
      : ((hl = 0), (Ja = Yt = null), p1(l, l.pendingLanes));
    var u = l.pendingLanes;
    if (
      (u === 0 && (Bt = null),
      Ec(a),
      (t = t.stateNode),
      Dl && typeof Dl.onCommitFiberRoot == "function")
    )
      try {
        Dl.onCommitFiberRoot(Le, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
    if (e !== null) {
      (t = x.T), (u = G.p), (G.p = 2), (x.T = null);
      try {
        for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
          var c = e[i];
          n(c.value, { componentStack: c.stack });
        }
      } finally {
        (x.T = t), (G.p = u);
      }
    }
    qa & 3 && jn(),
      lt(l),
      (u = l.pendingLanes),
      a & 4194090 && u & 42
        ? l === lc
          ? _e++
          : ((_e = 0), (lc = l))
        : (_e = 0),
      au(0);
  }
}
function p1(l, t) {
  (l.pooledCacheLanes &= t) === 0 &&
    ((t = l.pooledCache), t != null && ((l.pooledCache = null), Fe(t)));
}
function jn(l) {
  return g1(), b1(), S1(), A1();
}
function A1() {
  if (hl !== 5) return !1;
  var l = Yt,
    t = Pi;
  Pi = 0;
  var a = Ec(qa),
    e = x.T,
    u = G.p;
  try {
    (G.p = 32 > a ? 32 : a), (x.T = null), (a = Ii), (Ii = null);
    var n = Yt,
      i = qa;
    if (((hl = 0), (Ja = Yt = null), (qa = 0), X & 6)) throw Error(b(331));
    var c = X;
    if (
      ((X |= 4),
      c1(n.current),
      u1(n, n.current, i, a),
      (X = c),
      au(0, !1),
      Dl && typeof Dl.onPostCommitFiberRoot == "function")
    )
      try {
        Dl.onPostCommitFiberRoot(Le, n);
      } catch {}
    return !0;
  } finally {
    (G.p = u), (x.T = e), p1(l, t);
  }
}
function Ss(l, t, a) {
  (t = Xl(a, t)),
    (t = wi(l.stateNode, t, 2)),
    (l = Ht(l, t, 2)),
    l !== null && (Je(l, 2), lt(l));
}
function V(l, t, a) {
  if (l.tag === 3) Ss(l, l, a);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ss(t, l, a);
        break;
      } else if (t.tag === 1) {
        var e = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof e.componentDidCatch == "function" &&
            (Bt === null || !Bt.has(e)))
        ) {
          (l = Xl(a, l)),
            (a = G0(2)),
            (e = Ht(t, a, 2)),
            e !== null && (C0(a, e, t, l), Je(e, 2), lt(e));
          break;
        }
      }
      t = t.return;
    }
}
function di(l, t, a) {
  var e = l.pingCache;
  if (e === null) {
    e = l.pingCache = new Fr();
    var u = new Set();
    e.set(t, u);
  } else (u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u));
  u.has(a) || ((lf = !0), u.add(a), (l = ah.bind(null, l, t, a)), t.then(l, l));
}
function ah(l, t, a) {
  var e = l.pingCache;
  e !== null && e.delete(t),
    (l.pingedLanes |= l.suspendedLanes & a),
    (l.warmLanes &= ~a),
    L === l &&
      (B & a) === a &&
      (F === 4 || (F === 3 && (B & 62914560) === B && 300 > Fl() - af)
        ? !(X & 2) && wa(l, 0)
        : (tf |= a),
      Ka === B && (Ka = 0)),
    lt(l);
}
function E1(l, t) {
  t === 0 && (t = go()), (l = Pa(l, t)), l !== null && (Je(l, t), lt(l));
}
function eh(l) {
  var t = l.memoizedState,
    a = 0;
  t !== null && (a = t.retryLane), E1(l, a);
}
function uh(l, t) {
  var a = 0;
  switch (l.tag) {
    case 13:
      var e = l.stateNode,
        u = l.memoizedState;
      u !== null && (a = u.retryLane);
      break;
    case 19:
      e = l.stateNode;
      break;
    case 22:
      e = l.stateNode._retryCache;
      break;
    default:
      throw Error(b(314));
  }
  e !== null && e.delete(t), E1(l, a);
}
function nh(l, t) {
  return pc(l, t);
}
var un = null,
  ga = null,
  ac = !1,
  nn = !1,
  ri = !1,
  ea = 0;
function lt(l) {
  l !== ga &&
    l.next === null &&
    (ga === null ? (un = ga = l) : (ga = ga.next = l)),
    (nn = !0),
    ac || ((ac = !0), ch());
}
function au(l, t) {
  if (!ri && nn) {
    ri = !0;
    do
      for (var a = !1, e = un; e !== null; ) {
        if (l !== 0) {
          var u = e.pendingLanes;
          if (u === 0) var n = 0;
          else {
            var i = e.suspendedLanes,
              c = e.pingedLanes;
            (n = (1 << (31 - Nl(42 | l) + 1)) - 1),
              (n &= u & ~(i & ~c)),
              (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
          }
          n !== 0 && ((a = !0), ps(e, n));
        } else
          (n = B),
            (n = pn(
              e,
              e === L ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            )),
            !(n & 3) || Ke(e, n) || ((a = !0), ps(e, n));
        e = e.next;
      }
    while (a);
    ri = !1;
  }
}
function ih() {
  T1();
}
function T1() {
  nn = ac = !1;
  var l = 0;
  ea !== 0 && (vh() && (l = ea), (ea = 0));
  for (var t = Fl(), a = null, e = un; e !== null; ) {
    var u = e.next,
      n = z1(e, t);
    n === 0
      ? ((e.next = null),
        a === null ? (un = u) : (a.next = u),
        u === null && (ga = a))
      : ((a = e), (l !== 0 || n & 3) && (nn = !0)),
      (e = u);
  }
  au(l);
}
function z1(l, t) {
  for (
    var a = l.suspendedLanes,
      e = l.pingedLanes,
      u = l.expirationTimes,
      n = l.pendingLanes & -62914561;
    0 < n;

  ) {
    var i = 31 - Nl(n),
      c = 1 << i,
      f = u[i];
    f === -1
      ? (!(c & a) || c & e) && (u[i] = jd(c, t))
      : f <= t && (l.expiredLanes |= c),
      (n &= ~c);
  }
  if (
    ((t = L),
    (a = B),
    (a = pn(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    )),
    (e = l.callbackNode),
    a === 0 ||
      (l === t && (C === 2 || C === 9)) ||
      l.cancelPendingCommit !== null)
  )
    return (
      e !== null && e !== null && Gn(e),
      (l.callbackNode = null),
      (l.callbackPriority = 0)
    );
  if (!(a & 3) || Ke(l, a)) {
    if (((t = a & -a), t === l.callbackPriority)) return t;
    switch ((e !== null && Gn(e), Ec(a))) {
      case 2:
      case 8:
        a = mo;
        break;
      case 32:
        a = Xu;
        break;
      case 268435456:
        a = vo;
        break;
      default:
        a = Xu;
    }
    return (
      (e = O1.bind(null, l)),
      (a = pc(a, e)),
      (l.callbackPriority = t),
      (l.callbackNode = a),
      t
    );
  }
  return (
    e !== null && e !== null && Gn(e),
    (l.callbackPriority = 2),
    (l.callbackNode = null),
    2
  );
}
function O1(l, t) {
  if (hl !== 0 && hl !== 5)
    return (l.callbackNode = null), (l.callbackPriority = 0), null;
  var a = l.callbackNode;
  if (jn() && l.callbackNode !== a) return null;
  var e = B;
  return (
    (e = pn(
      l,
      l === L ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    )),
    e === 0
      ? null
      : (d1(l, e, t),
        z1(l, Fl()),
        l.callbackNode != null && l.callbackNode === a
          ? O1.bind(null, l)
          : null)
  );
}
function ps(l, t) {
  if (jn()) return null;
  d1(l, t, !0);
}
function ch() {
  gh(function () {
    X & 6 ? pc(ho, ih) : T1();
  });
}
function uf() {
  return ea === 0 && (ea = yo()), ea;
}
function As(l) {
  return l == null || typeof l == "symbol" || typeof l == "boolean"
    ? null
    : typeof l == "function"
      ? l
      : Ou("" + l);
}
function Es(l, t) {
  var a = t.ownerDocument.createElement("input");
  return (
    (a.name = t.name),
    (a.value = t.value),
    l.id && a.setAttribute("form", l.id),
    t.parentNode.insertBefore(a, t),
    (l = new FormData(l)),
    a.parentNode.removeChild(a),
    l
  );
}
function fh(l, t, a, e, u) {
  if (t === "submit" && a && a.stateNode === u) {
    var n = As((u[Tl] || null).action),
      i = e.submitter;
    i &&
      ((t = (t = i[Tl] || null)
        ? As(t.formAction)
        : i.getAttribute("formAction")),
      t !== null && ((n = t), (i = null)));
    var c = new An("action", "action", null, e, u);
    l.push({
      event: c,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (e.defaultPrevented) {
              if (ea !== 0) {
                var f = i ? Es(u, i) : new FormData(u);
                Ki(
                  a,
                  { pending: !0, data: f, method: u.method, action: n },
                  null,
                  f
                );
              }
            } else
              typeof n == "function" &&
                (c.preventDefault(),
                (f = i ? Es(u, i) : new FormData(u)),
                Ki(
                  a,
                  { pending: !0, data: f, method: u.method, action: n },
                  n,
                  f
                ));
          },
          currentTarget: u,
        },
      ],
    });
  }
}
for (var hi = 0; hi < Ri.length; hi++) {
  var mi = Ri[hi],
    sh = mi.toLowerCase(),
    oh = mi[0].toUpperCase() + mi.slice(1);
  Jl(sh, "on" + oh);
}
Jl(Xo, "onAnimationEnd");
Jl(Qo, "onAnimationIteration");
Jl(Zo, "onAnimationStart");
Jl("dblclick", "onDoubleClick");
Jl("focusin", "onFocus");
Jl("focusout", "onBlur");
Jl(_r, "onTransitionRun");
Jl(Mr, "onTransitionStart");
Jl(Dr, "onTransitionCancel");
Jl(Vo, "onTransitionEnd");
Ca("onMouseEnter", ["mouseout", "mouseover"]);
Ca("onMouseLeave", ["mouseout", "mouseover"]);
Ca("onPointerEnter", ["pointerout", "pointerover"]);
Ca("onPointerLeave", ["pointerout", "pointerover"]);
fa(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
fa(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ye =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(Ye)
  );
function x1(l, t) {
  t = (t & 4) !== 0;
  for (var a = 0; a < l.length; a++) {
    var e = l[a],
      u = e.event;
    e = e.listeners;
    l: {
      var n = void 0;
      if (t)
        for (var i = e.length - 1; 0 <= i; i--) {
          var c = e[i],
            f = c.instance,
            d = c.currentTarget;
          if (((c = c.listener), f !== n && u.isPropagationStopped())) break l;
          (n = c), (u.currentTarget = d);
          try {
            n(u);
          } catch (y) {
            Pu(y);
          }
          (u.currentTarget = null), (n = f);
        }
      else
        for (i = 0; i < e.length; i++) {
          if (
            ((c = e[i]),
            (f = c.instance),
            (d = c.currentTarget),
            (c = c.listener),
            f !== n && u.isPropagationStopped())
          )
            break l;
          (n = c), (u.currentTarget = d);
          try {
            n(u);
          } catch (y) {
            Pu(y);
          }
          (u.currentTarget = null), (n = f);
        }
    }
  }
}
function j(l, t) {
  var a = t[xi];
  a === void 0 && (a = t[xi] = new Set());
  var e = l + "__bubble";
  a.has(e) || (_1(t, l, 2, !1), a.add(e));
}
function vi(l, t, a) {
  var e = 0;
  t && (e |= 4), _1(a, l, e, t);
}
var Su = "_reactListening" + Math.random().toString(36).slice(2);
function nf(l) {
  if (!l[Su]) {
    (l[Su] = !0),
      Ao.forEach(function (a) {
        a !== "selectionchange" && (dh.has(a) || vi(a, !1, l), vi(a, !0, l));
      });
    var t = l.nodeType === 9 ? l : l.ownerDocument;
    t === null || t[Su] || ((t[Su] = !0), vi("selectionchange", !1, t));
  }
}
function _1(l, t, a, e) {
  switch (C1(t)) {
    case 2:
      var u = Gh;
      break;
    case 8:
      u = Ch;
      break;
    default:
      u = of;
  }
  (a = u.bind(null, t, a, l)),
    (u = void 0),
    !Ni ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (u = !0),
    e
      ? u !== void 0
        ? l.addEventListener(t, a, { capture: !0, passive: u })
        : l.addEventListener(t, a, !0)
      : u !== void 0
        ? l.addEventListener(t, a, { passive: u })
        : l.addEventListener(t, a, !1);
}
function yi(l, t, a, e, u) {
  var n = e;
  if (!(t & 1) && !(t & 2) && e !== null)
    l: for (;;) {
      if (e === null) return;
      var i = e.tag;
      if (i === 3 || i === 4) {
        var c = e.stateNode.containerInfo;
        if (c === u) break;
        if (i === 4)
          for (i = e.return; i !== null; ) {
            var f = i.tag;
            if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
            i = i.return;
          }
        for (; c !== null; ) {
          if (((i = pa(c)), i === null)) return;
          if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
            e = n = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      e = e.return;
    }
  Do(function () {
    var d = n,
      y = Oc(a),
      v = [];
    l: {
      var r = Lo.get(l);
      if (r !== void 0) {
        var m = An,
          z = l;
        switch (l) {
          case "keypress":
            if (_u(a) === 0) break l;
          case "keydown":
          case "keyup":
            m = nr;
            break;
          case "focusin":
            (z = "focus"), (m = Jn);
            break;
          case "focusout":
            (z = "blur"), (m = Jn);
            break;
          case "beforeblur":
          case "afterblur":
            m = Jn;
            break;
          case "click":
            if (a.button === 2) break l;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = wd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = fr;
            break;
          case Xo:
          case Qo:
          case Zo:
            m = Wd;
            break;
          case Vo:
            m = or;
            break;
          case "scroll":
          case "scrollend":
            m = Kd;
            break;
          case "wheel":
            m = rr;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Uf;
            break;
          case "toggle":
          case "beforetoggle":
            m = mr;
        }
        var T = (t & 4) !== 0,
          Y = !T && (l === "scroll" || l === "scrollend"),
          o = T ? (r !== null ? r + "Capture" : null) : r;
        T = [];
        for (var s = d, h; s !== null; ) {
          var g = s;
          if (
            ((h = g.stateNode),
            (g = g.tag),
            (g !== 5 && g !== 26 && g !== 27) ||
              h === null ||
              o === null ||
              ((g = Ne(s, o)), g != null && T.push(qe(s, g, h))),
            Y)
          )
            break;
          s = s.return;
        }
        0 < T.length &&
          ((r = new m(r, z, null, a, y)), v.push({ event: r, listeners: T }));
      }
    }
    if (!(t & 7)) {
      l: {
        if (
          ((r = l === "mouseover" || l === "pointerover"),
          (m = l === "mouseout" || l === "pointerout"),
          r &&
            a !== Di &&
            (z = a.relatedTarget || a.fromElement) &&
            (pa(z) || z[Wa]))
        )
          break l;
        if (
          (m || r) &&
          ((r =
            y.window === y
              ? y
              : (r = y.ownerDocument)
                ? r.defaultView || r.parentWindow
                : window),
          m
            ? ((z = a.relatedTarget || a.toElement),
              (m = d),
              (z = z ? pa(z) : null),
              z !== null &&
                ((Y = Ve(z)),
                (T = z.tag),
                z !== Y || (T !== 5 && T !== 27 && T !== 6)) &&
                (z = null))
            : ((m = null), (z = d)),
          m !== z)
        ) {
          if (
            ((T = Df),
            (g = "onMouseLeave"),
            (o = "onMouseEnter"),
            (s = "mouse"),
            (l === "pointerout" || l === "pointerover") &&
              ((T = Uf),
              (g = "onPointerLeave"),
              (o = "onPointerEnter"),
              (s = "pointer")),
            (Y = m == null ? r : re(m)),
            (h = z == null ? r : re(z)),
            (r = new T(g, s + "leave", m, a, y)),
            (r.target = Y),
            (r.relatedTarget = h),
            (g = null),
            pa(y) === d &&
              ((T = new T(o, s + "enter", z, a, y)),
              (T.target = h),
              (T.relatedTarget = Y),
              (g = T)),
            (Y = g),
            m && z)
          )
            t: {
              for (T = m, o = z, s = 0, h = T; h; h = ha(h)) s++;
              for (h = 0, g = o; g; g = ha(g)) h++;
              for (; 0 < s - h; ) (T = ha(T)), s--;
              for (; 0 < h - s; ) (o = ha(o)), h--;
              for (; s--; ) {
                if (T === o || (o !== null && T === o.alternate)) break t;
                (T = ha(T)), (o = ha(o));
              }
              T = null;
            }
          else T = null;
          m !== null && Ts(v, r, m, T, !1),
            z !== null && Y !== null && Ts(v, Y, z, T, !0);
        }
      }
      l: {
        if (
          ((r = d ? re(d) : window),
          (m = r.nodeName && r.nodeName.toLowerCase()),
          m === "select" || (m === "input" && r.type === "file"))
        )
          var p = Bf;
        else if (Hf(r))
          if (Bo) p = zr;
          else {
            p = Er;
            var _ = Ar;
          }
        else
          (m = r.nodeName),
            !m ||
            m.toLowerCase() !== "input" ||
            (r.type !== "checkbox" && r.type !== "radio")
              ? d && zc(d.elementType) && (p = Bf)
              : (p = Tr);
        if (p && (p = p(l, d))) {
          Ho(v, p, a, y);
          break l;
        }
        _ && _(l, r, d),
          l === "focusout" &&
            d &&
            r.type === "number" &&
            d.memoizedProps.value != null &&
            Mi(r, "number", r.value);
      }
      switch (((_ = d ? re(d) : window), l)) {
        case "focusin":
          (Hf(_) || _.contentEditable === "true") &&
            ((Ta = _), (Ui = d), (ge = null));
          break;
        case "focusout":
          ge = Ui = Ta = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ji = !1), Xf(v, a, y);
          break;
        case "selectionchange":
          if (xr) break;
        case "keydown":
        case "keyup":
          Xf(v, a, y);
      }
      var E;
      if (Mc)
        l: {
          switch (l) {
            case "compositionstart":
              var O = "onCompositionStart";
              break l;
            case "compositionend":
              O = "onCompositionEnd";
              break l;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break l;
          }
          O = void 0;
        }
      else
        Ea
          ? jo(l, a) && (O = "onCompositionEnd")
          : l === "keydown" && a.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Uo &&
          a.locale !== "ko" &&
          (Ea || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Ea && (E = No())
            : ((Mt = y),
              (xc = "value" in Mt ? Mt.value : Mt.textContent),
              (Ea = !0))),
        (_ = cn(d, O)),
        0 < _.length &&
          ((O = new Nf(O, l, null, a, y)),
          v.push({ event: O, listeners: _ }),
          E ? (O.data = E) : ((E = Ro(a)), E !== null && (O.data = E)))),
        (E = yr ? gr(l, a) : br(l, a)) &&
          ((O = cn(d, "onBeforeInput")),
          0 < O.length &&
            ((_ = new Nf("onBeforeInput", "beforeinput", null, a, y)),
            v.push({ event: _, listeners: O }),
            (_.data = E))),
        fh(v, l, d, a, y);
    }
    x1(v, t);
  });
}
function qe(l, t, a) {
  return { instance: l, listener: t, currentTarget: a };
}
function cn(l, t) {
  for (var a = t + "Capture", e = []; l !== null; ) {
    var u = l,
      n = u.stateNode;
    if (
      ((u = u.tag),
      (u !== 5 && u !== 26 && u !== 27) ||
        n === null ||
        ((u = Ne(l, a)),
        u != null && e.unshift(qe(l, u, n)),
        (u = Ne(l, t)),
        u != null && e.push(qe(l, u, n))),
      l.tag === 3)
    )
      return e;
    l = l.return;
  }
  return [];
}
function ha(l) {
  if (l === null) return null;
  do l = l.return;
  while (l && l.tag !== 5 && l.tag !== 27);
  return l || null;
}
function Ts(l, t, a, e, u) {
  for (var n = t._reactName, i = []; a !== null && a !== e; ) {
    var c = a,
      f = c.alternate,
      d = c.stateNode;
    if (((c = c.tag), f !== null && f === e)) break;
    (c !== 5 && c !== 26 && c !== 27) ||
      d === null ||
      ((f = d),
      u
        ? ((d = Ne(a, n)), d != null && i.unshift(qe(a, d, f)))
        : u || ((d = Ne(a, n)), d != null && i.push(qe(a, d, f)))),
      (a = a.return);
  }
  i.length !== 0 && l.push({ event: t, listeners: i });
}
var rh = /\r\n?/g,
  hh = /\u0000|\uFFFD/g;
function zs(l) {
  return (typeof l == "string" ? l : "" + l)
    .replace(
      rh,
      `
`
    )
    .replace(hh, "");
}
function M1(l, t) {
  return (t = zs(t)), zs(l) === t;
}
function Rn() {}
function Q(l, t, a, e, u, n) {
  switch (a) {
    case "children":
      typeof e == "string"
        ? t === "body" || (t === "textarea" && e === "") || Xa(l, e)
        : (typeof e == "number" || typeof e == "bigint") &&
          t !== "body" &&
          Xa(l, "" + e);
      break;
    case "className":
      ru(l, "class", e);
      break;
    case "tabIndex":
      ru(l, "tabindex", e);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      ru(l, a, e);
      break;
    case "style":
      Mo(l, e, n);
      break;
    case "data":
      if (t !== "object") {
        ru(l, "data", e);
        break;
      }
    case "src":
    case "href":
      if (e === "" && (t !== "a" || a !== "href")) {
        l.removeAttribute(a);
        break;
      }
      if (
        e == null ||
        typeof e == "function" ||
        typeof e == "symbol" ||
        typeof e == "boolean"
      ) {
        l.removeAttribute(a);
        break;
      }
      (e = Ou("" + e)), l.setAttribute(a, e);
      break;
    case "action":
    case "formAction":
      if (typeof e == "function") {
        l.setAttribute(
          a,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof n == "function" &&
          (a === "formAction"
            ? (t !== "input" && Q(l, t, "name", u.name, u, null),
              Q(l, t, "formEncType", u.formEncType, u, null),
              Q(l, t, "formMethod", u.formMethod, u, null),
              Q(l, t, "formTarget", u.formTarget, u, null))
            : (Q(l, t, "encType", u.encType, u, null),
              Q(l, t, "method", u.method, u, null),
              Q(l, t, "target", u.target, u, null)));
      if (e == null || typeof e == "symbol" || typeof e == "boolean") {
        l.removeAttribute(a);
        break;
      }
      (e = Ou("" + e)), l.setAttribute(a, e);
      break;
    case "onClick":
      e != null && (l.onclick = Rn);
      break;
    case "onScroll":
      e != null && j("scroll", l);
      break;
    case "onScrollEnd":
      e != null && j("scrollend", l);
      break;
    case "dangerouslySetInnerHTML":
      if (e != null) {
        if (typeof e != "object" || !("__html" in e)) throw Error(b(61));
        if (((a = e.__html), a != null)) {
          if (u.children != null) throw Error(b(60));
          l.innerHTML = a;
        }
      }
      break;
    case "multiple":
      l.multiple = e && typeof e != "function" && typeof e != "symbol";
      break;
    case "muted":
      l.muted = e && typeof e != "function" && typeof e != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        e == null ||
        typeof e == "function" ||
        typeof e == "boolean" ||
        typeof e == "symbol"
      ) {
        l.removeAttribute("xlink:href");
        break;
      }
      (a = Ou("" + e)),
        l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      e != null && typeof e != "function" && typeof e != "symbol"
        ? l.setAttribute(a, "" + e)
        : l.removeAttribute(a);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      e && typeof e != "function" && typeof e != "symbol"
        ? l.setAttribute(a, "")
        : l.removeAttribute(a);
      break;
    case "capture":
    case "download":
      e === !0
        ? l.setAttribute(a, "")
        : e !== !1 &&
            e != null &&
            typeof e != "function" &&
            typeof e != "symbol"
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      e != null &&
      typeof e != "function" &&
      typeof e != "symbol" &&
      !isNaN(e) &&
      1 <= e
        ? l.setAttribute(a, e)
        : l.removeAttribute(a);
      break;
    case "rowSpan":
    case "start":
      e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
        ? l.removeAttribute(a)
        : l.setAttribute(a, e);
      break;
    case "popover":
      j("beforetoggle", l), j("toggle", l), zu(l, "popover", e);
      break;
    case "xlinkActuate":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
      break;
    case "xlinkArcrole":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
      break;
    case "xlinkRole":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
      break;
    case "xlinkShow":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
      break;
    case "xlinkTitle":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
      break;
    case "xlinkType":
      tt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
      break;
    case "xmlBase":
      tt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
      break;
    case "xmlLang":
      tt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
      break;
    case "xmlSpace":
      tt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
      break;
    case "is":
      zu(l, "is", e);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < a.length) ||
        (a[0] !== "o" && a[0] !== "O") ||
        (a[1] !== "n" && a[1] !== "N")) &&
        ((a = Vd.get(a) || a), zu(l, a, e));
  }
}
function ec(l, t, a, e, u, n) {
  switch (a) {
    case "style":
      Mo(l, e, n);
      break;
    case "dangerouslySetInnerHTML":
      if (e != null) {
        if (typeof e != "object" || !("__html" in e)) throw Error(b(61));
        if (((a = e.__html), a != null)) {
          if (u.children != null) throw Error(b(60));
          l.innerHTML = a;
        }
      }
      break;
    case "children":
      typeof e == "string"
        ? Xa(l, e)
        : (typeof e == "number" || typeof e == "bigint") && Xa(l, "" + e);
      break;
    case "onScroll":
      e != null && j("scroll", l);
      break;
    case "onScrollEnd":
      e != null && j("scrollend", l);
      break;
    case "onClick":
      e != null && (l.onclick = Rn);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!Eo.hasOwnProperty(a))
        l: {
          if (
            a[0] === "o" &&
            a[1] === "n" &&
            ((u = a.endsWith("Capture")),
            (t = a.slice(2, u ? a.length - 7 : void 0)),
            (n = l[Tl] || null),
            (n = n != null ? n[a] : null),
            typeof n == "function" && l.removeEventListener(t, n, u),
            typeof e == "function")
          ) {
            typeof n != "function" &&
              n !== null &&
              (a in l
                ? (l[a] = null)
                : l.hasAttribute(a) && l.removeAttribute(a)),
              l.addEventListener(t, e, u);
            break l;
          }
          a in l ? (l[a] = e) : e === !0 ? l.setAttribute(a, "") : zu(l, a, e);
        }
  }
}
function ml(l, t, a) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      j("error", l), j("load", l);
      var e = !1,
        u = !1,
        n;
      for (n in a)
        if (a.hasOwnProperty(n)) {
          var i = a[n];
          if (i != null)
            switch (n) {
              case "src":
                e = !0;
                break;
              case "srcSet":
                u = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, t));
              default:
                Q(l, t, n, i, a, null);
            }
        }
      u && Q(l, t, "srcSet", a.srcSet, a, null),
        e && Q(l, t, "src", a.src, a, null);
      return;
    case "input":
      j("invalid", l);
      var c = (n = i = u = null),
        f = null,
        d = null;
      for (e in a)
        if (a.hasOwnProperty(e)) {
          var y = a[e];
          if (y != null)
            switch (e) {
              case "name":
                u = y;
                break;
              case "type":
                i = y;
                break;
              case "checked":
                f = y;
                break;
              case "defaultChecked":
                d = y;
                break;
              case "value":
                n = y;
                break;
              case "defaultValue":
                c = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(b(137, t));
                break;
              default:
                Q(l, t, e, y, a, null);
            }
        }
      Oo(l, n, c, f, d, i, u, !1), Qu(l);
      return;
    case "select":
      j("invalid", l), (e = i = n = null);
      for (u in a)
        if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
          switch (u) {
            case "value":
              n = c;
              break;
            case "defaultValue":
              i = c;
              break;
            case "multiple":
              e = c;
            default:
              Q(l, t, u, c, a, null);
          }
      (t = n),
        (a = i),
        (l.multiple = !!e),
        t != null ? Ua(l, !!e, t, !1) : a != null && Ua(l, !!e, a, !0);
      return;
    case "textarea":
      j("invalid", l), (n = u = e = null);
      for (i in a)
        if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
          switch (i) {
            case "value":
              e = c;
              break;
            case "defaultValue":
              u = c;
              break;
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(b(91));
              break;
            default:
              Q(l, t, i, c, a, null);
          }
      _o(l, e, u, n), Qu(l);
      return;
    case "option":
      for (f in a)
        if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
          switch (f) {
            case "selected":
              l.selected = e && typeof e != "function" && typeof e != "symbol";
              break;
            default:
              Q(l, t, f, e, a, null);
          }
      return;
    case "dialog":
      j("beforetoggle", l), j("toggle", l), j("cancel", l), j("close", l);
      break;
    case "iframe":
    case "object":
      j("load", l);
      break;
    case "video":
    case "audio":
      for (e = 0; e < Ye.length; e++) j(Ye[e], l);
      break;
    case "image":
      j("error", l), j("load", l);
      break;
    case "details":
      j("toggle", l);
      break;
    case "embed":
    case "source":
    case "link":
      j("error", l), j("load", l);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (d in a)
        if (a.hasOwnProperty(d) && ((e = a[d]), e != null))
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b(137, t));
            default:
              Q(l, t, d, e, a, null);
          }
      return;
    default:
      if (zc(t)) {
        for (y in a)
          a.hasOwnProperty(y) &&
            ((e = a[y]), e !== void 0 && ec(l, t, y, e, a, void 0));
        return;
      }
  }
  for (c in a)
    a.hasOwnProperty(c) && ((e = a[c]), e != null && Q(l, t, c, e, a, null));
}
function mh(l, t, a, e) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var u = null,
        n = null,
        i = null,
        c = null,
        f = null,
        d = null,
        y = null;
      for (m in a) {
        var v = a[m];
        if (a.hasOwnProperty(m) && v != null)
          switch (m) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = v;
            default:
              e.hasOwnProperty(m) || Q(l, t, m, null, e, v);
          }
      }
      for (var r in e) {
        var m = e[r];
        if (((v = a[r]), e.hasOwnProperty(r) && (m != null || v != null)))
          switch (r) {
            case "type":
              n = m;
              break;
            case "name":
              u = m;
              break;
            case "checked":
              d = m;
              break;
            case "defaultChecked":
              y = m;
              break;
            case "value":
              i = m;
              break;
            case "defaultValue":
              c = m;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (m != null) throw Error(b(137, t));
              break;
            default:
              m !== v && Q(l, t, r, m, e, v);
          }
      }
      _i(l, i, c, f, d, y, n, u);
      return;
    case "select":
      m = i = c = r = null;
      for (n in a)
        if (((f = a[n]), a.hasOwnProperty(n) && f != null))
          switch (n) {
            case "value":
              break;
            case "multiple":
              m = f;
            default:
              e.hasOwnProperty(n) || Q(l, t, n, null, e, f);
          }
      for (u in e)
        if (
          ((n = e[u]),
          (f = a[u]),
          e.hasOwnProperty(u) && (n != null || f != null))
        )
          switch (u) {
            case "value":
              r = n;
              break;
            case "defaultValue":
              c = n;
              break;
            case "multiple":
              i = n;
            default:
              n !== f && Q(l, t, u, n, e, f);
          }
      (t = c),
        (a = i),
        (e = m),
        r != null
          ? Ua(l, !!a, r, !1)
          : !!e != !!a &&
            (t != null ? Ua(l, !!a, t, !0) : Ua(l, !!a, a ? [] : "", !1));
      return;
    case "textarea":
      m = r = null;
      for (c in a)
        if (
          ((u = a[c]), a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
        )
          switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              Q(l, t, c, null, e, u);
          }
      for (i in e)
        if (
          ((u = e[i]),
          (n = a[i]),
          e.hasOwnProperty(i) && (u != null || n != null))
        )
          switch (i) {
            case "value":
              r = u;
              break;
            case "defaultValue":
              m = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(b(91));
              break;
            default:
              u !== n && Q(l, t, i, u, e, n);
          }
      xo(l, r, m);
      return;
    case "option":
      for (var z in a)
        if (
          ((r = a[z]), a.hasOwnProperty(z) && r != null && !e.hasOwnProperty(z))
        )
          switch (z) {
            case "selected":
              l.selected = !1;
              break;
            default:
              Q(l, t, z, null, e, r);
          }
      for (f in e)
        if (
          ((r = e[f]),
          (m = a[f]),
          e.hasOwnProperty(f) && r !== m && (r != null || m != null))
        )
          switch (f) {
            case "selected":
              l.selected = r && typeof r != "function" && typeof r != "symbol";
              break;
            default:
              Q(l, t, f, r, e, m);
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var T in a)
        (r = a[T]),
          a.hasOwnProperty(T) &&
            r != null &&
            !e.hasOwnProperty(T) &&
            Q(l, t, T, null, e, r);
      for (d in e)
        if (
          ((r = e[d]),
          (m = a[d]),
          e.hasOwnProperty(d) && r !== m && (r != null || m != null))
        )
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(b(137, t));
              break;
            default:
              Q(l, t, d, r, e, m);
          }
      return;
    default:
      if (zc(t)) {
        for (var Y in a)
          (r = a[Y]),
            a.hasOwnProperty(Y) &&
              r !== void 0 &&
              !e.hasOwnProperty(Y) &&
              ec(l, t, Y, void 0, e, r);
        for (y in e)
          (r = e[y]),
            (m = a[y]),
            !e.hasOwnProperty(y) ||
              r === m ||
              (r === void 0 && m === void 0) ||
              ec(l, t, y, r, e, m);
        return;
      }
  }
  for (var o in a)
    (r = a[o]),
      a.hasOwnProperty(o) &&
        r != null &&
        !e.hasOwnProperty(o) &&
        Q(l, t, o, null, e, r);
  for (v in e)
    (r = e[v]),
      (m = a[v]),
      !e.hasOwnProperty(v) ||
        r === m ||
        (r == null && m == null) ||
        Q(l, t, v, r, e, m);
}
var uc = null,
  nc = null;
function fn(l) {
  return l.nodeType === 9 ? l : l.ownerDocument;
}
function Os(l) {
  switch (l) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function D1(l, t) {
  if (l === 0)
    switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return l === 1 && t === "foreignObject" ? 0 : l;
}
function ic(l, t) {
  return (
    l === "textarea" ||
    l === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    typeof t.children == "bigint" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gi = null;
function vh() {
  var l = window.event;
  return l && l.type === "popstate"
    ? l === gi
      ? !1
      : ((gi = l), !0)
    : ((gi = null), !1);
}
var N1 = typeof setTimeout == "function" ? setTimeout : void 0,
  yh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xs = typeof Promise == "function" ? Promise : void 0,
  gh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xs < "u"
        ? function (l) {
            return xs.resolve(null).then(l).catch(bh);
          }
        : N1;
function bh(l) {
  setTimeout(function () {
    throw l;
  });
}
function Lt(l) {
  return l === "head";
}
function _s(l, t) {
  var a = t,
    e = 0,
    u = 0;
  do {
    var n = a.nextSibling;
    if ((l.removeChild(a), n && n.nodeType === 8))
      if (((a = n.data), a === "/$")) {
        if (0 < e && 8 > e) {
          a = e;
          var i = l.ownerDocument;
          if ((a & 1 && Me(i.documentElement), a & 2 && Me(i.body), a & 4))
            for (a = i.head, Me(a), i = a.firstChild; i; ) {
              var c = i.nextSibling,
                f = i.nodeName;
              i[we] ||
                f === "SCRIPT" ||
                f === "STYLE" ||
                (f === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                a.removeChild(i),
                (i = c);
            }
        }
        if (u === 0) {
          l.removeChild(n), Ze(t);
          return;
        }
        u--;
      } else
        a === "$" || a === "$?" || a === "$!"
          ? u++
          : (e = a.charCodeAt(0) - 48);
    else e = 0;
    a = n;
  } while (a);
  Ze(t);
}
function cc(l) {
  var t = l.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var a = t;
    switch (((t = t.nextSibling), a.nodeName)) {
      case "HTML":
      case "HEAD":
      case "BODY":
        cc(a), Tc(a);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (a.rel.toLowerCase() === "stylesheet") continue;
    }
    l.removeChild(a);
  }
}
function Sh(l, t, a, e) {
  for (; l.nodeType === 1; ) {
    var u = a;
    if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
    } else if (e) {
      if (!l[we])
        switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (
              ((n = l.getAttribute("rel")),
              n === "stylesheet" && l.hasAttribute("data-precedence"))
            )
              break;
            if (
              n !== u.rel ||
              l.getAttribute("href") !==
                (u.href == null || u.href === "" ? null : u.href) ||
              l.getAttribute("crossorigin") !==
                (u.crossOrigin == null ? null : u.crossOrigin) ||
              l.getAttribute("title") !== (u.title == null ? null : u.title)
            )
              break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (
              ((n = l.getAttribute("src")),
              (n !== (u.src == null ? null : u.src) ||
                l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin)) &&
                n &&
                l.hasAttribute("async") &&
                !l.hasAttribute("itemprop"))
            )
              break;
            return l;
          default:
            return l;
        }
    } else if (t === "input" && l.type === "hidden") {
      var n = u.name == null ? null : "" + u.name;
      if (u.type === "hidden" && l.getAttribute("name") === n) return l;
    } else return l;
    if (((l = Kl(l.nextSibling)), l === null)) break;
  }
  return null;
}
function ph(l, t, a) {
  if (t === "") return null;
  for (; l.nodeType !== 3; )
    if (
      ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
        !a) ||
      ((l = Kl(l.nextSibling)), l === null)
    )
      return null;
  return l;
}
function fc(l) {
  return (
    l.data === "$!" ||
    (l.data === "$?" && l.ownerDocument.readyState === "complete")
  );
}
function Ah(l, t) {
  var a = l.ownerDocument;
  if (l.data !== "$?" || a.readyState === "complete") t();
  else {
    var e = function () {
      t(), a.removeEventListener("DOMContentLoaded", e);
    };
    a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
  }
}
function Kl(l) {
  for (; l != null; l = l.nextSibling) {
    var t = l.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (
        ((t = l.data),
        t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
      )
        break;
      if (t === "/$") return null;
    }
  }
  return l;
}
var sc = null;
function Ms(l) {
  l = l.previousSibling;
  for (var t = 0; l; ) {
    if (l.nodeType === 8) {
      var a = l.data;
      if (a === "$" || a === "$!" || a === "$?") {
        if (t === 0) return l;
        t--;
      } else a === "/$" && t++;
    }
    l = l.previousSibling;
  }
  return null;
}
function U1(l, t, a) {
  switch (((t = fn(a)), l)) {
    case "html":
      if (((l = t.documentElement), !l)) throw Error(b(452));
      return l;
    case "head":
      if (((l = t.head), !l)) throw Error(b(453));
      return l;
    case "body":
      if (((l = t.body), !l)) throw Error(b(454));
      return l;
    default:
      throw Error(b(451));
  }
}
function Me(l) {
  for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
  Tc(l);
}
var Vl = new Map(),
  Ds = new Set();
function sn(l) {
  return typeof l.getRootNode == "function"
    ? l.getRootNode()
    : l.nodeType === 9
      ? l
      : l.ownerDocument;
}
var yt = G.d;
G.d = { f: Eh, r: Th, D: zh, C: Oh, L: xh, m: _h, X: Dh, S: Mh, M: Nh };
function Eh() {
  var l = yt.f(),
    t = Nn();
  return l || t;
}
function Th(l) {
  var t = Fa(l);
  t !== null && t.tag === 5 && t.type === "form" ? z0(t) : yt.r(l);
}
var le = typeof document > "u" ? null : document;
function j1(l, t, a) {
  var e = le;
  if (e && typeof t == "string" && t) {
    var u = Cl(t);
    (u = 'link[rel="' + l + '"][href="' + u + '"]'),
      typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
      Ds.has(u) ||
        (Ds.add(u),
        (l = { rel: l, crossOrigin: a, href: t }),
        e.querySelector(u) === null &&
          ((t = e.createElement("link")),
          ml(t, "link", l),
          sl(t),
          e.head.appendChild(t)));
  }
}
function zh(l) {
  yt.D(l), j1("dns-prefetch", l, null);
}
function Oh(l, t) {
  yt.C(l, t), j1("preconnect", l, t);
}
function xh(l, t, a) {
  yt.L(l, t, a);
  var e = le;
  if (e && l && t) {
    var u = 'link[rel="preload"][as="' + Cl(t) + '"]';
    t === "image" && a && a.imageSrcSet
      ? ((u += '[imagesrcset="' + Cl(a.imageSrcSet) + '"]'),
        typeof a.imageSizes == "string" &&
          (u += '[imagesizes="' + Cl(a.imageSizes) + '"]'))
      : (u += '[href="' + Cl(l) + '"]');
    var n = u;
    switch (t) {
      case "style":
        n = ka(l);
        break;
      case "script":
        n = te(l);
    }
    Vl.has(n) ||
      ((l = K(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t,
        },
        a
      )),
      Vl.set(n, l),
      e.querySelector(u) !== null ||
        (t === "style" && e.querySelector(eu(n))) ||
        (t === "script" && e.querySelector(uu(n))) ||
        ((t = e.createElement("link")),
        ml(t, "link", l),
        sl(t),
        e.head.appendChild(t)));
  }
}
function _h(l, t) {
  yt.m(l, t);
  var a = le;
  if (a && l) {
    var e = t && typeof t.as == "string" ? t.as : "script",
      u = 'link[rel="modulepreload"][as="' + Cl(e) + '"][href="' + Cl(l) + '"]',
      n = u;
    switch (e) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        n = te(l);
    }
    if (
      !Vl.has(n) &&
      ((l = K({ rel: "modulepreload", href: l }, t)),
      Vl.set(n, l),
      a.querySelector(u) === null)
    ) {
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (a.querySelector(uu(n))) return;
      }
      (e = a.createElement("link")),
        ml(e, "link", l),
        sl(e),
        a.head.appendChild(e);
    }
  }
}
function Mh(l, t, a) {
  yt.S(l, t, a);
  var e = le;
  if (e && l) {
    var u = Na(e).hoistableStyles,
      n = ka(l);
    t = t || "default";
    var i = u.get(n);
    if (!i) {
      var c = { loading: 0, preload: null };
      if ((i = e.querySelector(eu(n)))) c.loading = 5;
      else {
        (l = K({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
          (a = Vl.get(n)) && cf(l, a);
        var f = (i = e.createElement("link"));
        sl(f),
          ml(f, "link", l),
          (f._p = new Promise(function (d, y) {
            (f.onload = d), (f.onerror = y);
          })),
          f.addEventListener("load", function () {
            c.loading |= 1;
          }),
          f.addEventListener("error", function () {
            c.loading |= 2;
          }),
          (c.loading |= 4),
          Hu(i, t, e);
      }
      (i = { type: "stylesheet", instance: i, count: 1, state: c }),
        u.set(n, i);
    }
  }
}
function Dh(l, t) {
  yt.X(l, t);
  var a = le;
  if (a && l) {
    var e = Na(a).hoistableScripts,
      u = te(l),
      n = e.get(u);
    n ||
      ((n = a.querySelector(uu(u))),
      n ||
        ((l = K({ src: l, async: !0 }, t)),
        (t = Vl.get(u)) && ff(l, t),
        (n = a.createElement("script")),
        sl(n),
        ml(n, "link", l),
        a.head.appendChild(n)),
      (n = { type: "script", instance: n, count: 1, state: null }),
      e.set(u, n));
  }
}
function Nh(l, t) {
  yt.M(l, t);
  var a = le;
  if (a && l) {
    var e = Na(a).hoistableScripts,
      u = te(l),
      n = e.get(u);
    n ||
      ((n = a.querySelector(uu(u))),
      n ||
        ((l = K({ src: l, async: !0, type: "module" }, t)),
        (t = Vl.get(u)) && ff(l, t),
        (n = a.createElement("script")),
        sl(n),
        ml(n, "link", l),
        a.head.appendChild(n)),
      (n = { type: "script", instance: n, count: 1, state: null }),
      e.set(u, n));
  }
}
function Ns(l, t, a, e) {
  var u = (u = jt.current) ? sn(u) : null;
  if (!u) throw Error(b(446));
  switch (l) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof a.precedence == "string" && typeof a.href == "string"
        ? ((t = ka(a.href)),
          (a = Na(u).hoistableStyles),
          (e = a.get(t)),
          e ||
            ((e = { type: "style", instance: null, count: 0, state: null }),
            a.set(t, e)),
          e)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        a.rel === "stylesheet" &&
        typeof a.href == "string" &&
        typeof a.precedence == "string"
      ) {
        l = ka(a.href);
        var n = Na(u).hoistableStyles,
          i = n.get(l);
        if (
          (i ||
            ((u = u.ownerDocument || u),
            (i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            n.set(l, i),
            (n = u.querySelector(eu(l))) &&
              !n._p &&
              ((i.instance = n), (i.state.loading = 5)),
            Vl.has(l) ||
              ((a = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy,
              }),
              Vl.set(l, a),
              n || Uh(u, l, a, i.state))),
          t && e === null)
        )
          throw Error(b(528, ""));
        return i;
      }
      if (t && e !== null) throw Error(b(529, ""));
      return null;
    case "script":
      return (
        (t = a.async),
        (a = a.src),
        typeof a == "string" &&
        t &&
        typeof t != "function" &&
        typeof t != "symbol"
          ? ((t = te(a)),
            (a = Na(u).hoistableScripts),
            (e = a.get(t)),
            e ||
              ((e = { type: "script", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(b(444, l));
  }
}
function ka(l) {
  return 'href="' + Cl(l) + '"';
}
function eu(l) {
  return 'link[rel="stylesheet"][' + l + "]";
}
function R1(l) {
  return K({}, l, { "data-precedence": l.precedence, precedence: null });
}
function Uh(l, t, a, e) {
  l.querySelector('link[rel="preload"][as="style"][' + t + "]")
    ? (e.loading = 1)
    : ((t = l.createElement("link")),
      (e.preload = t),
      t.addEventListener("load", function () {
        return (e.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (e.loading |= 2);
      }),
      ml(t, "link", a),
      sl(t),
      l.head.appendChild(t));
}
function te(l) {
  return '[src="' + Cl(l) + '"]';
}
function uu(l) {
  return "script[async]" + l;
}
function Us(l, t, a) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case "style":
        var e = l.querySelector('style[data-href~="' + Cl(a.href) + '"]');
        if (e) return (t.instance = e), sl(e), e;
        var u = K({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null,
        });
        return (
          (e = (l.ownerDocument || l).createElement("style")),
          sl(e),
          ml(e, "style", u),
          Hu(e, a.precedence, l),
          (t.instance = e)
        );
      case "stylesheet":
        u = ka(a.href);
        var n = l.querySelector(eu(u));
        if (n) return (t.state.loading |= 4), (t.instance = n), sl(n), n;
        (e = R1(a)),
          (u = Vl.get(u)) && cf(e, u),
          (n = (l.ownerDocument || l).createElement("link")),
          sl(n);
        var i = n;
        return (
          (i._p = new Promise(function (c, f) {
            (i.onload = c), (i.onerror = f);
          })),
          ml(n, "link", e),
          (t.state.loading |= 4),
          Hu(n, a.precedence, l),
          (t.instance = n)
        );
      case "script":
        return (
          (n = te(a.src)),
          (u = l.querySelector(uu(n)))
            ? ((t.instance = u), sl(u), u)
            : ((e = a),
              (u = Vl.get(n)) && ((e = K({}, a)), ff(e, u)),
              (l = l.ownerDocument || l),
              (u = l.createElement("script")),
              sl(u),
              ml(u, "link", e),
              l.head.appendChild(u),
              (t.instance = u))
        );
      case "void":
        return null;
      default:
        throw Error(b(443, t.type));
    }
  else
    t.type === "stylesheet" &&
      !(t.state.loading & 4) &&
      ((e = t.instance), (t.state.loading |= 4), Hu(e, a.precedence, l));
  return t.instance;
}
function Hu(l, t, a) {
  for (
    var e = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      u = e.length ? e[e.length - 1] : null,
      n = u,
      i = 0;
    i < e.length;
    i++
  ) {
    var c = e[i];
    if (c.dataset.precedence === t) n = c;
    else if (n !== u) break;
  }
  n
    ? n.parentNode.insertBefore(l, n.nextSibling)
    : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
}
function cf(l, t) {
  l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
    l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
    l.title == null && (l.title = t.title);
}
function ff(l, t) {
  l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
    l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
    l.integrity == null && (l.integrity = t.integrity);
}
var Bu = null;
function js(l, t, a) {
  if (Bu === null) {
    var e = new Map(),
      u = (Bu = new Map());
    u.set(a, e);
  } else (u = Bu), (e = u.get(a)), e || ((e = new Map()), u.set(a, e));
  if (e.has(l)) return e;
  for (
    e.set(l, null), a = a.getElementsByTagName(l), u = 0;
    u < a.length;
    u++
  ) {
    var n = a[u];
    if (
      !(
        n[we] ||
        n[vl] ||
        (l === "link" && n.getAttribute("rel") === "stylesheet")
      ) &&
      n.namespaceURI !== "http://www.w3.org/2000/svg"
    ) {
      var i = n.getAttribute(t) || "";
      i = l + i;
      var c = e.get(i);
      c ? c.push(n) : e.set(i, [n]);
    }
  }
  return e;
}
function Rs(l, t, a) {
  (l = l.ownerDocument || l),
    l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
}
function jh(l, t, a) {
  if (a === 1 || t.itemProp != null) return !1;
  switch (l) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        typeof t.precedence != "string" ||
        typeof t.href != "string" ||
        t.href === ""
      )
        break;
      return !0;
    case "link":
      if (
        typeof t.rel != "string" ||
        typeof t.href != "string" ||
        t.href === "" ||
        t.onLoad ||
        t.onError
      )
        break;
      switch (t.rel) {
        case "stylesheet":
          return (l = t.disabled), typeof t.precedence == "string" && l == null;
        default:
          return !0;
      }
    case "script":
      if (
        t.async &&
        typeof t.async != "function" &&
        typeof t.async != "symbol" &&
        !t.onLoad &&
        !t.onError &&
        t.src &&
        typeof t.src == "string"
      )
        return !0;
  }
  return !1;
}
function H1(l) {
  return !(l.type === "stylesheet" && !(l.state.loading & 3));
}
var Ge = null;
function Rh() {}
function Hh(l, t, a) {
  if (Ge === null) throw Error(b(475));
  var e = Ge;
  if (
    t.type === "stylesheet" &&
    (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
    !(t.state.loading & 4)
  ) {
    if (t.instance === null) {
      var u = ka(a.href),
        n = l.querySelector(eu(u));
      if (n) {
        (l = n._p),
          l !== null &&
            typeof l == "object" &&
            typeof l.then == "function" &&
            (e.count++, (e = on.bind(e)), l.then(e, e)),
          (t.state.loading |= 4),
          (t.instance = n),
          sl(n);
        return;
      }
      (n = l.ownerDocument || l),
        (a = R1(a)),
        (u = Vl.get(u)) && cf(a, u),
        (n = n.createElement("link")),
        sl(n);
      var i = n;
      (i._p = new Promise(function (c, f) {
        (i.onload = c), (i.onerror = f);
      })),
        ml(n, "link", a),
        (t.instance = n);
    }
    e.stylesheets === null && (e.stylesheets = new Map()),
      e.stylesheets.set(t, l),
      (l = t.state.preload) &&
        !(t.state.loading & 3) &&
        (e.count++,
        (t = on.bind(e)),
        l.addEventListener("load", t),
        l.addEventListener("error", t));
  }
}
function Bh() {
  if (Ge === null) throw Error(b(475));
  var l = Ge;
  return (
    l.stylesheets && l.count === 0 && oc(l, l.stylesheets),
    0 < l.count
      ? function (t) {
          var a = setTimeout(function () {
            if ((l.stylesheets && oc(l, l.stylesheets), l.unsuspend)) {
              var e = l.unsuspend;
              (l.unsuspend = null), e();
            }
          }, 6e4);
          return (
            (l.unsuspend = t),
            function () {
              (l.unsuspend = null), clearTimeout(a);
            }
          );
        }
      : null
  );
}
function on() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) oc(this, this.stylesheets);
    else if (this.unsuspend) {
      var l = this.unsuspend;
      (this.unsuspend = null), l();
    }
  }
}
var dn = null;
function oc(l, t) {
  (l.stylesheets = null),
    l.unsuspend !== null &&
      (l.count++, (dn = new Map()), t.forEach(Yh, l), (dn = null), on.call(l));
}
function Yh(l, t) {
  if (!(t.state.loading & 4)) {
    var a = dn.get(l);
    if (a) var e = a.get(null);
    else {
      (a = new Map()), dn.set(l, a);
      for (
        var u = l.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          n = 0;
        n < u.length;
        n++
      ) {
        var i = u[n];
        (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
          (a.set(i.dataset.precedence, i), (e = i));
      }
      e && a.set(null, e);
    }
    (u = t.instance),
      (i = u.getAttribute("data-precedence")),
      (n = a.get(i) || e),
      n === e && a.set(null, u),
      a.set(i, u),
      this.count++,
      (e = on.bind(this)),
      u.addEventListener("load", e),
      u.addEventListener("error", e),
      n
        ? n.parentNode.insertBefore(u, n.nextSibling)
        : ((l = l.nodeType === 9 ? l.head : l),
          l.insertBefore(u, l.firstChild)),
      (t.state.loading |= 4);
  }
}
var Ce = {
  $$typeof: nt,
  Provider: null,
  Consumer: null,
  _currentValue: Ft,
  _currentValue2: Ft,
  _threadCount: 0,
};
function qh(l, t, a, e, u, n, i, c) {
  (this.tag = 1),
    (this.containerInfo = l),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = Cn(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cn(0)),
    (this.hiddenUpdates = Cn(null)),
    (this.identifierPrefix = e),
    (this.onUncaughtError = u),
    (this.onCaughtError = n),
    (this.onRecoverableError = i),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = c),
    (this.incompleteTransitions = new Map());
}
function B1(l, t, a, e, u, n, i, c, f, d, y, v) {
  return (
    (l = new qh(l, t, a, i, c, f, d, v)),
    (t = 1),
    n === !0 && (t |= 24),
    (n = Ml(3, null, null, t)),
    (l.current = n),
    (n.stateNode = l),
    (t = Bc()),
    t.refCount++,
    (l.pooledCache = t),
    t.refCount++,
    (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
    qc(n),
    l
  );
}
function Y1(l) {
  return l ? ((l = xa), l) : xa;
}
function q1(l, t, a, e, u, n) {
  (u = Y1(u)),
    e.context === null ? (e.context = u) : (e.pendingContext = u),
    (e = Rt(t)),
    (e.payload = { element: a }),
    (n = n === void 0 ? null : n),
    n !== null && (e.callback = n),
    (a = Ht(l, e, t)),
    a !== null && (jl(a, l, t), pe(a, l, t));
}
function Hs(l, t) {
  if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
    var a = l.retryLane;
    l.retryLane = a !== 0 && a < t ? a : t;
  }
}
function sf(l, t) {
  Hs(l, t), (l = l.alternate) && Hs(l, t);
}
function G1(l) {
  if (l.tag === 13) {
    var t = Pa(l, 67108864);
    t !== null && jl(t, l, 67108864), sf(l, 67108864);
  }
}
var rn = !0;
function Gh(l, t, a, e) {
  var u = x.T;
  x.T = null;
  var n = G.p;
  try {
    (G.p = 2), of(l, t, a, e);
  } finally {
    (G.p = n), (x.T = u);
  }
}
function Ch(l, t, a, e) {
  var u = x.T;
  x.T = null;
  var n = G.p;
  try {
    (G.p = 8), of(l, t, a, e);
  } finally {
    (G.p = n), (x.T = u);
  }
}
function of(l, t, a, e) {
  if (rn) {
    var u = dc(e);
    if (u === null) yi(l, t, e, hn, a), Bs(l, e);
    else if (Qh(u, l, t, a, e)) e.stopPropagation();
    else if ((Bs(l, e), t & 4 && -1 < Xh.indexOf(l))) {
      for (; u !== null; ) {
        var n = Fa(u);
        if (n !== null)
          switch (n.tag) {
            case 3:
              if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                var i = kt(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << (31 - Nl(i));
                    (c.entanglements[1] |= f), (i &= ~f);
                  }
                  lt(n), !(X & 6) && ((an = Fl() + 500), au(0));
                }
              }
              break;
            case 13:
              (c = Pa(n, 2)), c !== null && jl(c, n, 2), Nn(), sf(n, 2);
          }
        if (((n = dc(e)), n === null && yi(l, t, e, hn, a), n === u)) break;
        u = n;
      }
      u !== null && e.stopPropagation();
    } else yi(l, t, e, null, a);
  }
}
function dc(l) {
  return (l = Oc(l)), df(l);
}
var hn = null;
function df(l) {
  if (((hn = null), (l = pa(l)), l !== null)) {
    var t = Ve(l);
    if (t === null) l = null;
    else {
      var a = t.tag;
      if (a === 13) {
        if (((l = fo(t)), l !== null)) return l;
        l = null;
      } else if (a === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        l = null;
      } else t !== l && (l = null);
    }
  }
  return (hn = l), null;
}
function C1(l) {
  switch (l) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (Od()) {
        case ho:
          return 2;
        case mo:
          return 8;
        case Xu:
        case xd:
          return 32;
        case vo:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var rc = !1,
  qt = null,
  Gt = null,
  Ct = null,
  Xe = new Map(),
  Qe = new Map(),
  xt = [],
  Xh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function Bs(l, t) {
  switch (l) {
    case "focusin":
    case "focusout":
      qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Xe.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qe.delete(t.pointerId);
  }
}
function se(l, t, a, e, u, n) {
  return l === null || l.nativeEvent !== n
    ? ((l = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: e,
        nativeEvent: n,
        targetContainers: [u],
      }),
      t !== null && ((t = Fa(t)), t !== null && G1(t)),
      l)
    : ((l.eventSystemFlags |= e),
      (t = l.targetContainers),
      u !== null && t.indexOf(u) === -1 && t.push(u),
      l);
}
function Qh(l, t, a, e, u) {
  switch (t) {
    case "focusin":
      return (qt = se(qt, l, t, a, e, u)), !0;
    case "dragenter":
      return (Gt = se(Gt, l, t, a, e, u)), !0;
    case "mouseover":
      return (Ct = se(Ct, l, t, a, e, u)), !0;
    case "pointerover":
      var n = u.pointerId;
      return Xe.set(n, se(Xe.get(n) || null, l, t, a, e, u)), !0;
    case "gotpointercapture":
      return (
        (n = u.pointerId), Qe.set(n, se(Qe.get(n) || null, l, t, a, e, u)), !0
      );
  }
  return !1;
}
function X1(l) {
  var t = pa(l.target);
  if (t !== null) {
    var a = Ve(t);
    if (a !== null) {
      if (((t = a.tag), t === 13)) {
        if (((t = fo(a)), t !== null)) {
          (l.blockedOn = t),
            Hd(l.priority, function () {
              if (a.tag === 13) {
                var e = Ul();
                e = Ac(e);
                var u = Pa(a, e);
                u !== null && jl(u, a, e), sf(a, e);
              }
            });
          return;
        }
      } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  l.blockedOn = null;
}
function Yu(l) {
  if (l.blockedOn !== null) return !1;
  for (var t = l.targetContainers; 0 < t.length; ) {
    var a = dc(l.nativeEvent);
    if (a === null) {
      a = l.nativeEvent;
      var e = new a.constructor(a.type, a);
      (Di = e), a.target.dispatchEvent(e), (Di = null);
    } else return (t = Fa(a)), t !== null && G1(t), (l.blockedOn = a), !1;
    t.shift();
  }
  return !0;
}
function Ys(l, t, a) {
  Yu(l) && a.delete(t);
}
function Zh() {
  (rc = !1),
    qt !== null && Yu(qt) && (qt = null),
    Gt !== null && Yu(Gt) && (Gt = null),
    Ct !== null && Yu(Ct) && (Ct = null),
    Xe.forEach(Ys),
    Qe.forEach(Ys);
}
function pu(l, t) {
  l.blockedOn === t &&
    ((l.blockedOn = null),
    rc ||
      ((rc = !0),
      il.unstable_scheduleCallback(il.unstable_NormalPriority, Zh)));
}
var Au = null;
function qs(l) {
  Au !== l &&
    ((Au = l),
    il.unstable_scheduleCallback(il.unstable_NormalPriority, function () {
      Au === l && (Au = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t],
          e = l[t + 1],
          u = l[t + 2];
        if (typeof e != "function") {
          if (df(e || a) === null) continue;
          break;
        }
        var n = Fa(a);
        n !== null &&
          (l.splice(t, 3),
          (t -= 3),
          Ki(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
      }
    }));
}
function Ze(l) {
  function t(f) {
    return pu(f, l);
  }
  qt !== null && pu(qt, l),
    Gt !== null && pu(Gt, l),
    Ct !== null && pu(Ct, l),
    Xe.forEach(t),
    Qe.forEach(t);
  for (var a = 0; a < xt.length; a++) {
    var e = xt[a];
    e.blockedOn === l && (e.blockedOn = null);
  }
  for (; 0 < xt.length && ((a = xt[0]), a.blockedOn === null); )
    X1(a), a.blockedOn === null && xt.shift();
  if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
    for (e = 0; e < a.length; e += 3) {
      var u = a[e],
        n = a[e + 1],
        i = u[Tl] || null;
      if (typeof n == "function") i || qs(a);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (((u = n), (i = n[Tl] || null))) c = i.formAction;
          else if (df(u) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
          qs(a);
      }
    }
}
function rf(l) {
  this._internalRoot = l;
}
Hn.prototype.render = rf.prototype.render = function (l) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  var a = t.current,
    e = Ul();
  q1(a, e, l, t, null, null);
};
Hn.prototype.unmount = rf.prototype.unmount = function () {
  var l = this._internalRoot;
  if (l !== null) {
    this._internalRoot = null;
    var t = l.containerInfo;
    q1(l.current, 2, null, l, null, null), Nn(), (t[Wa] = null);
  }
};
function Hn(l) {
  this._internalRoot = l;
}
Hn.prototype.unstable_scheduleHydration = function (l) {
  if (l) {
    var t = po();
    l = { blockedOn: null, target: l, priority: t };
    for (var a = 0; a < xt.length && t !== 0 && t < xt[a].priority; a++);
    xt.splice(a, 0, l), a === 0 && X1(l);
  }
};
var Gs = io.version;
if (Gs !== "19.1.0") throw Error(b(527, Gs, "19.1.0"));
G.findDOMNode = function (l) {
  var t = l._reactInternals;
  if (t === void 0)
    throw typeof l.render == "function"
      ? Error(b(188))
      : ((l = Object.keys(l).join(",")), Error(b(268, l)));
  return (
    (l = bd(t)),
    (l = l !== null ? so(l) : null),
    (l = l === null ? null : l.stateNode),
    l
  );
};
var Vh = {
  bundleType: 0,
  version: "19.1.0",
  rendererPackageName: "react-dom",
  currentDispatcherRef: x,
  reconcilerVersion: "19.1.0",
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Eu.isDisabled && Eu.supportsFiber)
    try {
      (Le = Eu.inject(Vh)), (Dl = Eu);
    } catch {}
}
bn.createRoot = function (l, t) {
  if (!co(l)) throw Error(b(299));
  var a = !1,
    e = "",
    u = B0,
    n = Y0,
    i = q0,
    c = null;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (a = !0),
      t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
      t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
      t.onCaughtError !== void 0 && (n = t.onCaughtError),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
      t.unstable_transitionCallbacks !== void 0 &&
        (c = t.unstable_transitionCallbacks)),
    (t = B1(l, 1, !1, null, null, a, e, u, n, i, c, null)),
    (l[Wa] = t.current),
    nf(l),
    new rf(t)
  );
};
bn.hydrateRoot = function (l, t, a) {
  if (!co(l)) throw Error(b(299));
  var e = !1,
    u = "",
    n = B0,
    i = Y0,
    c = q0,
    f = null,
    d = null;
  return (
    a != null &&
      (a.unstable_strictMode === !0 && (e = !0),
      a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
      a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
      a.onCaughtError !== void 0 && (i = a.onCaughtError),
      a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
      a.unstable_transitionCallbacks !== void 0 &&
        (f = a.unstable_transitionCallbacks),
      a.formState !== void 0 && (d = a.formState)),
    (t = B1(l, 1, !0, t, a ?? null, e, u, n, i, c, f, d)),
    (t.context = Y1(null)),
    (a = t.current),
    (e = Ul()),
    (e = Ac(e)),
    (u = Rt(e)),
    (u.callback = null),
    Ht(a, u, e),
    (a = e),
    (t.current.lanes = a),
    Je(t, a),
    lt(t),
    (l[Wa] = t.current),
    nf(l),
    new Hn(t)
  );
};
bn.version = "19.1.0";
function Q1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q1);
    } catch (l) {
      console.error(l);
    }
}
Q1(), (lo.exports = bn);
var Lh = lo.exports;
const Kh = Ls(Lh),
  Jh = () =>
    S.jsx("header", {
      className:
        "bg-gradient-to-r from-secondary via-button to-primary text-text-secondary shadow-md",
      children: S.jsx("nav", {
        className:
          "max-w-7xl mx-auto px-2 py-4 flex items-center justify-between",
        children: S.jsx("ul", {
          className:
            "flex gap-5 md:gap-8 text-sm md:text-base font-medium tracking-wide",
          children: [
            { label: "My Journey", href: "#timeline" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Media", href: "#media" },
            { label: "Contact", href: "#contact" },
          ].map((l) =>
            S.jsx(
              "li",
              {
                children: S.jsxs("a", {
                  href: l.href,
                  className:
                    "relative inline-block text-text-secondary hover:text-tertiary transition duration-200",
                  children: [
                    S.jsx("span", {
                      className: "relative z-10",
                      children: l.label,
                    }),
                    S.jsx("span", {
                      className:
                        "absolute left-0 -bottom-0.5 w-0 h-[2px] bg-tertiary transition-all duration-300 group-hover:w-full",
                    }),
                  ],
                }),
              },
              l.href
            )
          ),
        }),
      }),
    });
var Z1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Cs = Ut.createContext && Ut.createContext(Z1),
  wh = ["attr", "size", "title"];
function kh(l, t) {
  if (l == null) return {};
  var a = $h(l, t),
    e,
    u;
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(l);
    for (u = 0; u < n.length; u++)
      (e = n[u]),
        !(t.indexOf(e) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(l, e) &&
          (a[e] = l[e]);
  }
  return a;
}
function $h(l, t) {
  if (l == null) return {};
  var a = {};
  for (var e in l)
    if (Object.prototype.hasOwnProperty.call(l, e)) {
      if (t.indexOf(e) >= 0) continue;
      a[e] = l[e];
    }
  return a;
}
function mn() {
  return (
    (mn = Object.assign
      ? Object.assign.bind()
      : function (l) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var e in a)
              Object.prototype.hasOwnProperty.call(a, e) && (l[e] = a[e]);
          }
          return l;
        }),
    mn.apply(this, arguments)
  );
}
function Xs(l, t) {
  var a = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(l);
    t &&
      (e = e.filter(function (u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })),
      a.push.apply(a, e);
  }
  return a;
}
function vn(l) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xs(Object(a), !0).forEach(function (e) {
          Wh(l, e, a[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
        : Xs(Object(a)).forEach(function (e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
          });
  }
  return l;
}
function Wh(l, t, a) {
  return (
    (t = Fh(t)),
    t in l
      ? Object.defineProperty(l, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (l[t] = a),
    l
  );
}
function Fh(l) {
  var t = Ph(l, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ph(l, t) {
  if (typeof l != "object" || !l) return l;
  var a = l[Symbol.toPrimitive];
  if (a !== void 0) {
    var e = a.call(l, t || "default");
    if (typeof e != "object") return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(l);
}
function V1(l) {
  return (
    l &&
    l.map((t, a) =>
      Ut.createElement(t.tag, vn({ key: a }, t.attr), V1(t.child))
    )
  );
}
function Kt(l) {
  return (t) =>
    Ut.createElement(Ih, mn({ attr: vn({}, l.attr) }, t), V1(l.child));
}
function Ih(l) {
  var t = (a) => {
    var { attr: e, size: u, title: n } = l,
      i = kh(l, wh),
      c = u || a.size || "1em",
      f;
    return (
      a.className && (f = a.className),
      l.className && (f = (f ? f + " " : "") + l.className),
      Ut.createElement(
        "svg",
        mn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          e,
          i,
          {
            className: f,
            style: vn(vn({ color: l.color || a.color }, a.style), l.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        n && Ut.createElement("title", null, n),
        l.children
      )
    );
  };
  return Cs !== void 0
    ? Ut.createElement(Cs.Consumer, null, (a) => t(a))
    : t(Z1);
}
function lm(l) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" }, child: [] }],
  })(l);
}
function tm(l) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" }, child: [] },
      {
        tag: "line",
        attr: { x1: "2", y1: "12", x2: "22", y2: "12" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        },
        child: [],
      },
    ],
  })(l);
}
function L1(l) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        },
        child: [],
      },
      { tag: "polyline", attr: { points: "22,6 12,13 2,6" }, child: [] },
    ],
  })(l);
}
function am(l) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
        child: [],
      },
      { tag: "circle", attr: { cx: "12", cy: "10", r: "3" }, child: [] },
    ],
  })(l);
}
function em(l) {
  return Kt({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "18", y1: "6", x2: "6", y2: "18" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "6", y1: "6", x2: "18", y2: "18" },
        child: [],
      },
    ],
  })(l);
}
function K1(l) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(l);
}
function J1(l) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(l);
}
function w1(l) {
  return Kt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(l);
}
function um() {
  const [l, t] = gn.useState(!1),
    a = () => t((u) => !u),
    e = () => t(!1);
  return S.jsxs(S.Fragment, {
    children: [
      S.jsxs("div", {
        className:
          "fixed top-2 right-4 flex items-center gap-2 cursor-pointer z-50",
        onClick: a,
        children: [
          S.jsx("img", {
            src: "/images/profile.JPG",
            alt: "Profile thumbnail",
            className:
              "w-10 h-10 rounded-full object-cover border-2 border-white shadow",
          }),
          l
            ? S.jsx(em, {
                className: "text-text hover:text-primary text-xl transition",
              })
            : S.jsx(lm, {
                className: "text-text hover:text-primary text-xl transition",
              }),
        ],
      }),
      l &&
        S.jsx("div", {
          className: "fixed inset-0 z-30 bg-black/50",
          onClick: e,
          children: S.jsxs("aside", {
            className:
              "fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl z-40 overflow-y-auto",
            onClick: (u) => u.stopPropagation(),
            children: [
              S.jsxs("div", {
                className: "text-center mt-6",
                children: [
                  S.jsx("img", {
                    src: "/images/profile.JPG",
                    alt: "Profile",
                    className:
                      "w-32 h-36 rounded-full mx-auto mb-4 border-2 border-gray-300 shadow",
                  }),
                  S.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "Anna Aasprong Brekke",
                  }),
                  S.jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "26 years",
                  }),
                  S.jsxs("p", {
                    className:
                      "text-sm text-gray-500 flex justify-center items-center gap-2 mt-1",
                    children: [
                      S.jsx(am, { className: "text-primary" }),
                      "Drammen, Norway",
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "mt-6 space-y-2 text-center text-sm",
                children: [
                  S.jsx(Qs, { language: "Norwegian", rating: "★★★★★" }),
                  S.jsx(Qs, { language: "English", rating: "★★★★☆" }),
                ],
              }),
              S.jsxs("div", {
                className: "mt-8 space-y-4 text-sm text-center",
                children: [
                  S.jsx(Tu, {
                    icon: S.jsx(L1, {}),
                    href: "mailto:annabrekke98@gmail.com",
                    children: "annabrekke98@gmail.com",
                  }),
                  S.jsx(Tu, {
                    icon: S.jsx(w1, {}),
                    href: "https://www.linkedin.com/in/anna-aasprong-brekke-a571132b0/",
                    children: "LinkedIn",
                  }),
                  S.jsx(Tu, {
                    icon: S.jsx(J1, {}),
                    href: "https://www.instagram.com/annabrekke/",
                    children: "Instagram",
                  }),
                  S.jsx(Tu, {
                    icon: S.jsx(K1, {}),
                    href: "https://github.com/AnnaAaBrekke",
                    children: "GitHub",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function Tu({ href: l, icon: t, children: a }) {
  return S.jsxs("a", {
    href: l,
    target: "_blank",
    rel: "noopener noreferrer",
    className:
      "block text-gray-600 hover:underline hover:text-black transition flex items-center justify-center gap-2",
    children: [t, a],
  });
}
function Qs({ language: l, rating: t }) {
  return S.jsxs("p", {
    children: [
      S.jsx(tm, { className: "inline text-primary mr-1" }),
      l,
      ": ",
      S.jsx("span", { className: "text-secondary", children: t }),
    ],
  });
}
const nm = ({ title: l, description: t, delay: a }) =>
    S.jsxs("div", {
      className:
        "relative bg-tertiary p-6 rounded-2xl shadow-md transition-transform duration-500 transform hover:scale-105 hover:shadow-xl group overflow-hidden animate-fade-up",
      style: { animationDelay: `${a}ms`, animationFillMode: "both" },
      children: [
        S.jsx("p", {
          className: "text-primary font-semibold text-lg mb-2",
          children: l,
        }),
        S.jsx("div", {
          className:
            "absolute inset-0 bg-primary bg-opacity-90 text-text-secondary flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm leading-relaxed text-center",
          children: S.jsx("p", { children: t }),
        }),
      ],
    }),
  im = () => {
    const l = [
      {
        title: "Frontend Developer",
        description:
          "Graduated from Noroff College with a degree in Frontend Development.",
      },
      {
        title: "Master’s in Education",
        description:
          "Graduated from USN. Master’s thesis focused on algorithm awareness in Social Studies.",
      },
      {
        title: "Handball Captain",
        description:
          "Captain at Nordstrand Damer Elite, competing in Norway’s first division.",
      },
      {
        title: "High School Teacher",
        description: "Teaching at Lier Videregående Skole since 2022.",
      },
      {
        title: "Media Creator",
        description:
          "Passionate about photography, video editing, and AI-generated images.",
      },
    ];
    return S.jsxs("section", {
      id: "intro",
      className:
        "relative text-center mb-4 overflow-hidden bg-gradient-to-br from-secondary to-button text-text-secondary p-10 rounded-3xl shadow-2xl",
      children: [
        S.jsx("h1", {
          className: "text-4xl lg:text-5xl font-bold mb-10 tracking-tight",
          children: "Anna Aasprong Brekke",
        }),
        S.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
          children: l.map((t, a) =>
            S.jsx(
              nm,
              { title: t.title, description: t.description, delay: a * 100 },
              a
            )
          ),
        }),
      ],
    });
  },
  Zs = ({ title: l, entries: t }) =>
    S.jsxs("div", {
      className: "mb-16",
      children: [
        S.jsx("h3", { className: "timeline-header", children: l }),
        S.jsx("div", {
          className:
            "relative lg:flex lg:flex-wrap lg:gap-8 lg:items-start border-l lg:border-l-0 lg:border-t border-border",
          children: t.map(({ institution: a, description: e }, u) =>
            S.jsxs(
              "div",
              {
                className: "timeline-marker",
                children: [
                  S.jsx("span", { className: "timeline-bullet" }),
                  S.jsx("h4", { className: "timeline-title", children: a }),
                  S.jsx("p", { className: "timeline-p", children: e }),
                ],
              },
              u
            )
          ),
        }),
      ],
    }),
  cm = () => {
    const l = [
        {
          institution: "Noroff College",
          description: "Frontend Developer | Aug 2023 - Jun 2025",
        },
        {
          institution: "Universitetet i Sørøst-Norge",
          description:
            "Master's Degree in Primary School Education | Aug 2018 - Jun 2023",
        },
        {
          institution: "Drammen Toppidrett VGs",
          description: "High School | Aug 2015 - Jun 2018",
        },
      ],
      t = [
        {
          institution: "Lier Videregående skole",
          description: "Teacher in High School | Jan 2022 - Present",
        },
        {
          institution: "Åskollen Barneskole",
          description: "Teaching Assistant | Jan 2017 – Jun 2022",
        },
        {
          institution: "Drammen kommune: Sommerskole",
          description: "Activity Leader | Jun 2019 - Aug 2021",
        },
        {
          institution: "Digitale Læringsverkstedet",
          description: "Student Assistant | Aug 2019 - Nov 2019",
        },
        {
          institution: "Torshov Sport",
          description: "Sales Associate | Mar 2016 - Aug 2018",
        },
      ];
    return S.jsxs("section", {
      id: "timeline",
      className: "p-8",
      children: [
        S.jsx(Zs, { title: "Education", entries: l }),
        S.jsx(Zs, { title: "Work Experience", entries: t }),
      ],
    });
  },
  fm = ({ title: l, description: t, images: a, repo: e, live: u }) =>
    S.jsxs("div", {
      className:
        "bg-white border border-border rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300",
      children: [
        S.jsx("h3", {
          className: "text-xl font-semibold text-text mb-4",
          children: l,
        }),
        S.jsx("div", {
          className: "flex flex-wrap gap-3 justify-center mb-4",
          children: a.map((n, i) =>
            S.jsx(
              "img",
              {
                src: n,
                alt: `${l} Screenshot ${i + 1}`,
                className: "w-[47%] h-auto rounded-lg object-cover shadow-sm",
                loading: "lazy",
              },
              i
            )
          ),
        }),
        S.jsx("p", {
          className:
            "text-sm p-2 text-center font-medium text-text-accent leading-relaxed",
          children: t,
        }),
        S.jsxs("div", {
          className: "flex gap-4 mt-6",
          children: [
            S.jsx("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "github-repo",
              children: "GitHub Repo",
            }),
            S.jsx("a", {
              href: u,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "live-site",
              children: "Live Site",
            }),
          ],
        }),
      ],
    }),
  sm = () => {
    const l = [
      {
        title: "Holidaze",
        images: ["Soon to Come", "Soon to Come"],
        description:
          '"Holidaze" is a modern, responsive accommodation booking application.',
        repo: "Soon to Come",
        live: "Soon to Come",
      },
      {
        title: "Shopsy",
        images: [
          "/images/Screenshots/shopsy-home.png",
          "/images/Screenshots/shopsy-product.png",
        ],
        description:
          '"Shopsy" is a modern e-commerce platform built with React, Vite, Zustand for state management, and Styled Components.',
        repo: "https://github.com/AnnaAaBrekke/ecom-store.git",
        live: "https://shopsy-ecomstore.netlify.app/",
      },
      {
        title: "BidVault",
        images: [
          "/images/Screenshots/WelcomeToBidVault.png",
          "/images/Screenshots/HomeBidVault.png",
        ],
        description:
          '"BidVault" is an online auction site styled with Tailwind CSS and SASS.',
        repo: "https://github.com/AnnaAaBrekke/BidVault.git",
        live: "https://bidvault.netlify.app/welcome",
      },
      {
        title: "Wherever Forever",
        images: [
          "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.03.54.png",
          "/images/Screenshots/Skjermbilde 2024-06-06 kl. 14.05.00.png",
        ],
        description:
          '"Wherever Forever" is a digitized travel blog based on Serena’s handwritten diaries.',
        repo: "https://github.com/NoroffFEU/AnnaAaBrekke-FED1-PE1.git",
        live: "https://norofffeu.github.io/AnnaAaBrekke-FED1-PE1/",
      },
      {
        title: "Social Media App",
        images: [
          "/images/Screenshots/some-landing.png",
          "/images/Screenshots/some-home.png",
        ],
        description:
          '"Social Media App" includes CRUD posts, follow features, comments, and emoji reactions.',
        repo: "https://github.com/NoroffFEU/fed2-js2-ca-AnnaAaBrekke",
        live: "https://socialm-aaab.netlify.app/auth/",
      },
      {
        title: "Futures Museum",
        images: [
          "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.36.27.png",
          "/images/Screenshots/Skjermbilde 2024-06-02 kl. 15.35.22.png",
        ],
        description:
          '"Futures Museum" is a responsive site for a science museum aimed at families and kids.',
        repo: "https://github.com/AnnaAaBrekke/ScienceMuseum-SemesterProject.git",
        live: "https://annaaabrekke.github.io/ScienceMuseum-SemesterProject/",
      },
    ];
    return S.jsxs("section", {
      id: "projects",
      className: "mb-24 px-4 md:px-6",
      children: [
        S.jsx("h2", {
          className:
            "section-header text-3xl md:text-4xl font-bold text-center text-primary mb-10",
          children: "Projects",
        }),
        S.jsx("div", {
          className: "grid gap-10 sm:grid-cols-1 md:grid-cols-2",
          children: l.map((t, a) => S.jsx(fm, { ...t }, a)),
        }),
      ],
    });
  },
  om = [
    {
      icon: S.jsx(L1, {}),
      label: "annabrekke98@gmail.com",
      href: "mailto:annabrekke98@gmail.com",
      className: "text-link",
    },
    {
      icon: S.jsx(w1, {}),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anna-aasprong-brekke-a571132b0/",
      className: "text-link",
    },
    {
      icon: S.jsx(J1, {}),
      label: "Instagram",
      href: "https://www.instagram.com/annabrekke/",
      className: "text-pink-600",
    },
    {
      icon: S.jsx(K1, {}),
      label: "GitHub",
      href: "https://github.com/AnnaAaBrekke",
      className: "text-text",
    },
  ],
  dm = () =>
    S.jsxs("section", {
      id: "contact",
      className: "text-center mb-16 px-4",
      children: [
        S.jsx("div", {
          className: "w-full max-w-3xl mx-auto border-t border-border mb-10",
        }),
        S.jsx("h2", {
          className: "section-header mb-6",
          children: "Contact Me",
        }),
        S.jsx("div", {
          className: "flex flex-col items-center gap-4",
          children: om.map(({ icon: l, label: t, href: a, className: e }) =>
            S.jsxs(
              "a",
              {
                href: a,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `flex items-center gap-2 ${e} hover:underline transition`,
                children: [l, t],
              },
              t
            )
          ),
        }),
      ],
    }),
  rm = () =>
    S.jsx("footer", {
      id: "footer",
      className: "bg-text text-text-secondary py-6 text-center",
      children: S.jsx("p", {
        className: "px-2",
        children: "© 2025 Anna Aasprong Brekke",
      }),
    }),
  hm = [
    {
      src: "/images/Captured_img/11EF4863-EA93-486D-8BB9-B891E70205F2.JPG",
      alt: "Beach scene at dusk with fairy lights on a tree.",
    },
    {
      src: "/images/Captured_img/1E3DFB52-1DBE-4236-896E-188F3D40FCDD.JPG",
      alt: "Tropical beach with palm trees, bamboo chair, and string lights.",
    },
    {
      src: "/images/Captured_img/23FE8233-0CB6-4A63-AB88-231BA2BEEE0A.JPG",
      alt: "Night ocean view with full moon and palm trees.",
    },
    {
      src: "/images/Captured_img/IMG_1645.jpeg",
      alt: "Sunset beach scene with vibrant orange sky and lone walker.",
    },
    {
      src: "/images/Captured_img/B5F2582A-37A7-4283-87B0-0E0EDC6114A3.JPG",
      alt: "View from above clouds with bright sun and dramatic sky.",
    },
    {
      src: "/images/Captured_img/FullSizeRender_VSCO.JPG",
      alt: "Beach with rocky outcrop, shallow water, and small dog.",
    },
    {
      src: "/images/Captured_img/IMG_3202.JPG",
      alt: "Tranquil beach with calm water, rocks, and distant hills.",
    },
    {
      src: "/images/Captured_img/IMG_1062.JPG",
      alt: "Stunning sunset over a harbor with boats and darkened sky.",
    },
    {
      src: "/images/Captured_img/IMG_0990.jpeg",
      alt: "Beach with tall palm tree, fence, and blue sky.",
    },
  ],
  mm = [
    {
      src: "/images/AI_created/sunflower_girl.jpeg",
      alt: "Young woman standing in a sunflower field with a serene expression.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/field-bicycle.png",
      alt: "Woman sitting with a bicycle in a field of wildflowers at sunset.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/453568_kv2MAL8vkL6JvR3NXIugTBgxcoQOkrvrIC7mWEkD.jpeg",
      alt: "Two girls reading a magical book in a cozy library setting.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/garden-rob-2.jpeg",
      alt: "Small robot in a colorful garden with pink flowers.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/bubbly_happy.jpeg",
      alt: "Cute animated character inside a large, transparent bubble.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/cutie-rob.jpeg",
      alt: "Adorable toy-like robot with a helmet in a playful environment.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/453568_8sapqKAt134OBrsixoFyi1wRYSNW8C41BibqSdg7.jpeg",
      alt: "Group of teenagers illuminated by neon lights, all focused on their phones.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/453568_sSEOE6X4clUTnHuhQM8MLx6M1TC0q3TX6l57FOYd.jpeg",
      alt: "Profile of a young man with colorful bokeh lights in the background.",
      link: "https://wirestock.io/annaaab",
    },
    {
      src: "/images/AI_created/453568_92QCfTEYO6UFhfHA7HLXNH6QKXRBS9V1pR4OgbeW.jpeg",
      alt: "Pink room with vibrant geometric shapes and smooth textures.",
      link: "https://wirestock.io/annaaab",
    },
  ],
  Vs = ({ id: l, title: t, images: a, isLinked: e = !1 }) =>
    S.jsxs("section", {
      id: l,
      className: "mb-16 p-2",
      children: [
        S.jsx("h2", { className: "section-header", id: "media", children: t }),
        S.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2",
          children: a.map((u, n) =>
            e
              ? S.jsx(
                  "a",
                  {
                    href: u.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: S.jsx("img", {
                      src: u.src,
                      alt: u.alt,
                      className: "ai-photo",
                    }),
                  },
                  n
                )
              : S.jsx(
                  "img",
                  { src: u.src, alt: u.alt, className: "captured-photo" },
                  n
                )
          ),
        }),
      ],
    }),
  vm = [
    { name: "JavaScript", icon: "js" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "React", icon: "react" },
    { name: "Vite", icon: "vite" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Cypress", icon: "cypress" },
    { name: "Jest", icon: "jest" },
    { name: "Figma", icon: "figma" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "NPM", icon: "npm" },
    { name: "VS Code", icon: "vscode" },
  ],
  ym = () =>
    S.jsxs("section", {
      id: "skills",
      className:
        "mb-24 px-6 md:px-12 py-12 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/10 shadow-lg",
      children: [
        S.jsx("h2", {
          className:
            "section-header text-center text-xl md:text-3xl mb-10 font-bold text-primary animate-fade-up",
          children: "Tools & Technologies",
        }),
        S.jsx("div", {
          className: "overflow-x-auto scrollbar-hide",
          children: S.jsx("div", {
            className: "flex gap-6 px-2 md:px-6 pb-2",
            children: vm.map(({ name: l, icon: t }) =>
              S.jsxs(
                "div",
                {
                  className:
                    "flex-shrink-0 w-24 h-24 bg-white/50 backdrop-blur border border-border rounded-xl shadow-md text-center p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white",
                  children: [
                    S.jsx("img", {
                      src: `https://skillicons.dev/icons?i=${t}`,
                      alt: l,
                      title: l,
                      className:
                        "w-10 h-10 mx-auto mb-2 transition-transform group-hover:rotate-3",
                    }),
                    S.jsx("p", {
                      className: "text-xs font-medium text-text-accent",
                      children: l,
                    }),
                  ],
                },
                t
              )
            ),
          }),
        }),
      ],
    });
function gm() {
  return S.jsxs("div", {
    className: "bg-gray-100 font-sora text-text",
    children: [
      S.jsx(Jh, {}),
      S.jsx(um, {}),
      S.jsxs("main", {
        className: "flex-1 p-6 lg:pr-40",
        children: [
          S.jsx(im, {}),
          S.jsx(cm, {}),
          S.jsx(sm, {}),
          S.jsx(ym, {}),
          S.jsx(Vs, { id: "media", title: "My Captured Photos", images: hm }),
          S.jsx(Vs, {
            id: "AIimg",
            title: "AI-Created Images",
            images: mm,
            isLinked: !0,
          }),
          S.jsx(dm, {}),
        ],
      }),
      S.jsx(rm, {}),
    ],
  });
}
Kh.createRoot(document.getElementById("root")).render(
  S.jsx(Ut.StrictMode, { children: S.jsx(gm, {}) })
);
