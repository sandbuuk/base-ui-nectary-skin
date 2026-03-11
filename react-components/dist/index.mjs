import { jsxs as L, jsx as l, Fragment as Ne } from "react/jsx-runtime";
import We, { forwardRef as R, useMemo as J, useState as U, useEffect as X, useCallback as f, useRef as Y, useId as eo, isValidElement as oo, cloneElement as ho, createContext as be, useContext as ue, Children as Ze, useImperativeHandle as Fe, useReducer as Tn, useLayoutEffect as _o } from "react";
import { createPortal as $e } from "react-dom";
function Uo(o) {
  var e, n, t = "";
  if (typeof o == "string" || typeof o == "number") t += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var a = o.length;
    for (e = 0; e < a; e++) o[e] && (n = Uo(o[e])) && (t && (t += " "), t += n);
  } else for (n in o) o[n] && (t && (t += " "), t += n);
  return t;
}
function Ho() {
  for (var o, e, n = 0, t = "", a = arguments.length; n < a; n++) (o = arguments[n]) && (e = Uo(o)) && (t && (t += " "), t += e);
  return t;
}
const po = "-", Sn = (o) => {
  const e = An(o), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: t
  } = o;
  return {
    getClassGroupId: (s) => {
      const r = s.split(po);
      return r[0] === "" && r.length !== 1 && r.shift(), Bo(r, e) || En(s);
    },
    getConflictingClassGroupIds: (s, r) => {
      const m = n[s] || [];
      return r && t[s] ? [...m, ...t[s]] : m;
    }
  };
}, Bo = (o, e) => {
  var s;
  if (o.length === 0)
    return e.classGroupId;
  const n = o[0], t = e.nextPart.get(n), a = t ? Bo(o.slice(1), t) : void 0;
  if (a)
    return a;
  if (e.validators.length === 0)
    return;
  const i = o.join(po);
  return (s = e.validators.find(({
    validator: r
  }) => r(i))) == null ? void 0 : s.classGroupId;
}, zo = /^\[(.+)\]$/, En = (o) => {
  if (zo.test(o)) {
    const e = zo.exec(o)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, An = (o) => {
  const {
    theme: e,
    prefix: n
  } = o, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ln(Object.entries(o.classGroups), n).forEach(([i, s]) => {
    bo(s, t, i, e);
  }), t;
}, bo = (o, e, n, t) => {
  o.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? e : Io(e, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (On(a)) {
        bo(a(t), e, n, t);
        return;
      }
      e.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([i, s]) => {
      bo(s, Io(e, i), n, t);
    });
  });
}, Io = (o, e) => {
  let n = o;
  return e.split(po).forEach((t) => {
    n.nextPart.has(t) || n.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(t);
  }), n;
}, On = (o) => o.isThemeGetter, Ln = (o, e) => e ? o.map(([n, t]) => {
  const a = t.map((i) => typeof i == "string" ? e + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, r]) => [e + s, r])) : i);
  return [n, a];
}) : o, Pn = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const a = (i, s) => {
    n.set(i, s), e++, e > o && (e = 0, t = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = n.get(i);
      if (s !== void 0)
        return s;
      if ((s = t.get(i)) !== void 0)
        return a(i, s), s;
    },
    set(i, s) {
      n.has(i) ? n.set(i, s) : a(i, s);
    }
  };
}, Go = "!", Rn = (o) => {
  const {
    separator: e,
    experimentalParseClassName: n
  } = o, t = e.length === 1, a = e[0], i = e.length, s = (r) => {
    const m = [];
    let c = 0, b = 0, h;
    for (let N = 0; N < r.length; N++) {
      let I = r[N];
      if (c === 0) {
        if (I === a && (t || r.slice(N, N + i) === e)) {
          m.push(r.slice(b, N)), b = N + i;
          continue;
        }
        if (I === "/") {
          h = N;
          continue;
        }
      }
      I === "[" ? c++ : I === "]" && c--;
    }
    const d = m.length === 0 ? r : r.substring(b), u = d.startsWith(Go), g = u ? d.substring(1) : d, v = h && h > b ? h - b : void 0;
    return {
      modifiers: m,
      hasImportantModifier: u,
      baseClassName: g,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (r) => n({
    className: r,
    parseClassName: s
  }) : s;
}, Fn = (o) => {
  if (o.length <= 1)
    return o;
  const e = [];
  let n = [];
  return o.forEach((t) => {
    t[0] === "[" ? (e.push(...n.sort(), t), n = []) : n.push(t);
  }), e.push(...n.sort()), e;
}, $n = (o) => ({
  cache: Pn(o.cacheSize),
  parseClassName: Rn(o),
  ...Sn(o)
}), _n = /\s+/, Un = (o, e) => {
  const {
    parseClassName: n,
    getClassGroupId: t,
    getConflictingClassGroupIds: a
  } = e, i = [], s = o.trim().split(_n);
  let r = "";
  for (let m = s.length - 1; m >= 0; m -= 1) {
    const c = s[m], {
      modifiers: b,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: u
    } = n(c);
    let g = !!u, v = t(g ? d.substring(0, u) : d);
    if (!v) {
      if (!g) {
        r = c + (r.length > 0 ? " " + r : r);
        continue;
      }
      if (v = t(d), !v) {
        r = c + (r.length > 0 ? " " + r : r);
        continue;
      }
      g = !1;
    }
    const N = Fn(b).join(":"), I = h ? N + Go : N, V = I + v;
    if (i.includes(V))
      continue;
    i.push(V);
    const z = a(v, g);
    for (let y = 0; y < z.length; ++y) {
      const w = z[y];
      i.push(I + w);
    }
    r = c + (r.length > 0 ? " " + r : r);
  }
  return r;
};
function Hn() {
  let o = 0, e, n, t = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (n = Wo(e)) && (t && (t += " "), t += n);
  return t;
}
const Wo = (o) => {
  if (typeof o == "string")
    return o;
  let e, n = "";
  for (let t = 0; t < o.length; t++)
    o[t] && (e = Wo(o[t])) && (n && (n += " "), n += e);
  return n;
};
function Bn(o, ...e) {
  let n, t, a, i = s;
  function s(m) {
    const c = e.reduce((b, h) => h(b), o());
    return n = $n(c), t = n.cache.get, a = n.cache.set, i = r, r(m);
  }
  function r(m) {
    const c = t(m);
    if (c)
      return c;
    const b = Un(m, n);
    return a(m, b), b;
  }
  return function() {
    return i(Hn.apply(null, arguments));
  };
}
const te = (o) => {
  const e = (n) => n[o] || [];
  return e.isThemeGetter = !0, e;
}, Zo = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gn = /^\d+\/\d+$/, Wn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Kn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (o) => Me(o) || Wn.has(o) || Gn.test(o), ve = (o) => Se(o, "length", at), Me = (o) => !!o && !Number.isNaN(Number(o)), ao = (o) => Se(o, "number", Me), Ae = (o) => !!o && Number.isInteger(Number(o)), Xn = (o) => o.endsWith("%") && Me(o.slice(0, -1)), K = (o) => Zo.test(o), we = (o) => Zn.test(o), Qn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), et = (o) => Se(o, Qn, qo), ot = (o) => Se(o, "position", qo), nt = /* @__PURE__ */ new Set(["image", "url"]), tt = (o) => Se(o, nt, st), it = (o) => Se(o, "", lt), Oe = () => !0, Se = (o, e, n) => {
  const t = Zo.exec(o);
  return t ? t[1] ? typeof e == "string" ? t[1] === e : e.has(t[1]) : n(t[2]) : !1;
}, at = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qn.test(o) && !Yn.test(o)
), qo = () => !1, lt = (o) => Kn.test(o), st = (o) => Jn.test(o), rt = () => {
  const o = te("colors"), e = te("spacing"), n = te("blur"), t = te("brightness"), a = te("borderColor"), i = te("borderRadius"), s = te("borderSpacing"), r = te("borderWidth"), m = te("contrast"), c = te("grayscale"), b = te("hueRotate"), h = te("invert"), d = te("gap"), u = te("gradientColorStops"), g = te("gradientColorStopPositions"), v = te("inset"), N = te("margin"), I = te("opacity"), V = te("padding"), z = te("saturate"), y = te("scale"), w = te("sepia"), j = te("skew"), k = te("space"), M = te("translate"), T = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", K, e], D = () => [K, e], x = () => ["", ke, ve], E = () => ["auto", Me, K], S = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], F = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Z = () => ["", "0", K], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Me, K];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Oe],
      spacing: [ke, ve],
      blur: ["none", "", we, K],
      brightness: A(),
      borderColor: [o],
      borderRadius: ["none", "", "full", we, K],
      borderSpacing: D(),
      borderWidth: x(),
      contrast: A(),
      grayscale: Z(),
      hueRotate: A(),
      invert: Z(),
      gap: D(),
      gradientColorStops: [o],
      gradientColorStopPositions: [Xn, ve],
      inset: B(),
      margin: B(),
      opacity: A(),
      padding: D(),
      saturate: A(),
      scale: A(),
      sepia: Z(),
      skew: A(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", K]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [we]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...S(), K]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ae, K]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ae, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Oe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ae, K]
        }, K]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": E()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": E()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Oe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ae, K]
        }, K]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": E()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": E()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", K]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...H(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [V]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [V]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [V]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [V]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [V]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [V]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [V]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [V]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [V]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [N]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [N]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [N]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [N]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [N]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [N]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [N]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [N]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [N]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [K, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [K, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [we]
        }, we]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [K, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [K, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [K, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [K, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", we, ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ao]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Oe]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Me, ao]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ke, K]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", K]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [I]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [I]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...F(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ke, ve]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ke, K]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", K]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [I]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...S(), ot]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", et]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, tt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [u]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [u]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [u]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [r]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [r]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [r]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [r]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [r]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [r]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [r]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [r]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [r]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [I]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...F(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [r]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [r]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [I]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...F()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ke, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ke, ve]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: x()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [I]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ke, ve]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", we, it]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Oe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [t]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", we, K]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [t]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: A()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: A()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", K]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ae, K]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [j]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [j]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", K]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ke, ve, ao]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, mt = /* @__PURE__ */ Bn(rt);
function p(...o) {
  return mt(Ho(o));
}
const Co = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, Mo = Ho, C = (o, e) => (n) => {
  var t;
  if ((e == null ? void 0 : e.variants) == null) return Mo(o, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: a, defaultVariants: i } = e, s = Object.keys(a).map((c) => {
    const b = n == null ? void 0 : n[c], h = i == null ? void 0 : i[c];
    if (b === null) return null;
    const d = Co(b) || Co(h);
    return a[c][d];
  }), r = n && Object.entries(n).reduce((c, b) => {
    let [h, d] = b;
    return d === void 0 || (c[h] = d), c;
  }, {}), m = e == null || (t = e.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((c, b) => {
    let { class: h, className: d, ...u } = b;
    return Object.entries(u).every((g) => {
      let [v, N] = g;
      return Array.isArray(N) ? N.includes({
        ...i,
        ...r
      }[v]) : {
        ...i,
        ...r
      }[v] === N;
    }) ? [
      ...c,
      h,
      d
    ] : c;
  }, []);
  return Mo(o, s, m, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, ct = C(
  // Base styles
  "block animate-spin",
  {
    variants: {
      size: {
        s: "w-4 h-4",
        m: "w-6 h-6",
        l: "w-[50px] h-[50px]"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), go = R(
  ({ className: o, size: e = "m", ...n }, t) => {
    const i = {
      s: {
        viewBox: "0 0 16 16",
        center: 8,
        radius: 6,
        strokeWidth: 2,
        path: "M14 8a6 6 0 0 0-6-6"
      },
      m: {
        viewBox: "0 0 24 24",
        center: 12,
        radius: 9,
        strokeWidth: 4,
        path: "M21 12a9 9 0 0 0-9-9"
      },
      l: {
        viewBox: "0 0 50 50",
        center: 25,
        radius: 22,
        strokeWidth: 6,
        path: "M25 3a22 22 0 0 1 22 22"
      }
    }[e ?? "m"];
    return /* @__PURE__ */ L(
      "svg",
      {
        ref: t,
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true",
        "aria-label": "Loading",
        fill: "none",
        className: p(ct({ size: e }), o),
        viewBox: i.viewBox,
        ...n,
        children: [
          /* @__PURE__ */ l(
            "circle",
            {
              cx: i.center,
              cy: i.center,
              r: i.radius,
              strokeWidth: i.strokeWidth,
              className: "stroke-current opacity-30"
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: i.path,
              strokeWidth: i.strokeWidth,
              strokeLinecap: "round",
              className: "stroke-current"
            }
          )
        ]
      }
    );
  }
);
go.displayName = "Spinner";
const dt = C(
  // Base styles matching template.html #icon styles
  [
    "inline-block",
    "leading-none",
    "whitespace-nowrap",
    "select-none",
    "antialiased"
  ].join(" "),
  {
    variants: {
      size: {
        xs: "w-4 h-4 text-[16px]",
        sm: "w-5 h-5 text-[20px]",
        md: "w-6 h-6 text-[24px]",
        lg: "w-8 h-8 text-[32px]",
        xl: "w-10 h-10 text-[40px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), bt = (o, e) => e === "1" ? "var(--sinch-comp-icon-font-family)" : /^(fa-|(?!fa-))[0-9a-d]/i.test(o) ? "var(--sinch-comp-icon-font-family-zero-to-d)" : /^(fa-|(?!fa-))[e-o]/i.test(o) ? "var(--sinch-comp-icon-font-family-e-to-o)" : /^(fa-|(?!fa-))[p-z]/i.test(o) ? "var(--sinch-comp-icon-font-family-p-to-z)" : "var(--sinch-comp-icon-font-family)", oe = R(
  ({ className: o, name: e, iconsVersion: n = "1", size: t = "md", style: a, ...i }, s) => {
    const r = J(
      () => bt(e, n),
      [e, n]
    );
    return /* @__PURE__ */ l(
      "span",
      {
        ref: s,
        role: "img",
        "aria-label": e,
        className: p(dt({ size: t }), o),
        style: {
          fontFamily: r,
          fontWeight: "var(--sinch-comp-icon-font-weight)",
          fontFeatureSettings: "var(--sinch-comp-icon-font-feature-settings)",
          color: "var(--sinch-global-color-icon, var(--sinch-sys-color-text-default))",
          ...a
        },
        ...i,
        children: e
      }
    );
  }
);
oe.displayName = "Icon";
const ut = C(
  // Base styles - uses design system font and color tokens
  "text-foreground [font:var(--sinch-sys-font-body-m)]",
  {
    variants: {
      /**
       * Text size type
       */
      type: {
        m: "[font:var(--sinch-sys-font-body-m)]",
        s: "[font:var(--sinch-sys-font-body-s)]",
        xs: "[font:var(--sinch-sys-font-body-xs)]",
        xxs: "[font:var(--sinch-sys-font-body-xxs)]"
      },
      /**
       * Display mode - block (default) or inline
       */
      inline: {
        true: "inline",
        false: "block"
      },
      /**
       * Emphasized text (bolder weight) - only available for 'm' and 's' sizes
       */
      emphasized: {
        true: "",
        false: ""
      },
      /**
       * Truncate text with ellipsis
       */
      ellipsis: {
        true: "overflow-hidden text-ellipsis whitespace-nowrap",
        false: ""
      }
    },
    compoundVariants: [
      // Emphasized variants - only apply emphasized font for m and s sizes
      {
        type: "m",
        emphasized: !0,
        className: "[font:var(--sinch-sys-font-body-emphasize)]"
      },
      {
        type: "s",
        emphasized: !0,
        className: "[font:var(--sinch-sys-font-body-emphasize-s)]"
      }
    ],
    defaultVariants: {
      type: "m",
      inline: !1,
      emphasized: !1,
      ellipsis: !1
    }
  }
), no = R(
  ({
    className: o,
    children: e,
    type: n = "m",
    inline: t = !1,
    emphasized: a = !1,
    ellipsis: i = !1,
    as: s,
    ...r
  }, m) => /* @__PURE__ */ l(
    s ?? (t ? "span" : "p"),
    {
      ref: m,
      className: p(
        ut({ type: n, inline: t, emphasized: a, ellipsis: i }),
        o
      ),
      ...r,
      children: e
    }
  )
);
no.displayName = "Text";
const ht = C(
  // Base styles
  [
    "relative flex flex-row items-center box-border w-full",
    "bg-[var(--sinch-comp-input-color-default-background-initial)]"
  ],
  {
    variants: {
      size: {
        s: [
          "h-[var(--sinch-comp-input-size-container-s)]",
          "rounded-[var(--sinch-comp-input-shape-radius-size-s)]"
        ],
        m: [
          "h-[var(--sinch-comp-input-size-container-m)]",
          "rounded-[var(--sinch-comp-input-shape-radius-size-m)]"
        ],
        l: [
          "h-[var(--sinch-comp-input-size-container-l)]",
          "rounded-[var(--sinch-comp-input-shape-radius-size-l)]"
        ]
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), pt = C(
  // Base styles for the input element
  [
    "w-full h-full px-3 box-border",
    "bg-transparent outline-none border-none",
    "[font:var(--sinch-comp-input-font-input)]",
    "text-[var(--sinch-comp-input-color-default-text-initial)]",
    "placeholder:[font:var(--sinch-comp-input-font-placeholder)]",
    "placeholder:text-[var(--sinch-comp-input-color-default-text-placeholder)]",
    "placeholder:opacity-100",
    "disabled:text-[var(--sinch-comp-input-color-disabled-text-initial)]"
  ],
  {
    variants: {
      hasIcon: {
        true: "pl-[calc(var(--sinch-local-icon-size)+20px)]",
        false: "pl-3"
      }
    },
    defaultVariants: {
      hasIcon: !1
    }
  }
), gt = C(
  // Base styles for the border overlay
  [
    "absolute inset-0 pointer-events-none",
    "border border-[var(--sinch-comp-input-color-default-border-initial)]",
    "transition-colors"
  ],
  {
    variants: {
      size: {
        s: "rounded-[var(--sinch-comp-input-shape-radius-size-s)]",
        m: "rounded-[var(--sinch-comp-input-shape-radius-size-m)]",
        l: "rounded-[var(--sinch-comp-input-shape-radius-size-l)]"
      },
      isFocused: {
        true: "border-[var(--sinch-comp-input-color-default-border-focus)] border-2",
        false: ""
      },
      isInvalid: {
        true: "border-[var(--sinch-comp-input-color-invalid-border-initial)]",
        false: ""
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-input-color-disabled-border-initial)]",
        false: ""
      }
    },
    compoundVariants: [
      // Focus takes precedence over invalid
      {
        isFocused: !0,
        isInvalid: !0,
        className: "border-[var(--sinch-comp-input-color-default-border-focus)]"
      },
      // Disabled takes precedence over everything
      {
        isDisabled: !0,
        className: "border-[var(--sinch-comp-input-color-disabled-border-initial)]"
      }
    ],
    defaultVariants: {
      size: "m",
      isFocused: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), ko = R(
  ({
    className: o,
    type: e = "text",
    value: n,
    defaultValue: t,
    placeholder: a,
    size: i = "m",
    invalid: s = !1,
    disabled: r = !1,
    readOnly: m = !1,
    required: c = !1,
    autoComplete: b,
    maxLength: h,
    min: d,
    max: u,
    step: g,
    "aria-label": v,
    icon: N,
    leftAddon: I,
    rightAddon: V,
    onChange: z,
    onFocus: y,
    onBlur: w,
    onKeyDown: j,
    ...k
  }, M) => {
    const [T, P] = U(t ?? ""), [B, D] = U(!1);
    X(() => {
      process.env.NODE_ENV !== "production" && !v && !k["aria-labelledby"] && !k.id && console.warn(
        "Input: Must have an `aria-label`, `aria-labelledby`, or an associated `<label>` (via matching `id`) for accessibility."
      );
    }, [v, k["aria-labelledby"], k.id]);
    const x = n !== void 0, E = x ? n : T, S = N !== void 0, F = {
      s: "var(--sinch-comp-input-size-icon-s)",
      m: "var(--sinch-comp-input-size-icon-m)",
      l: "var(--sinch-comp-input-size-icon-l)"
    }[i], $ = f(
      (_) => {
        const A = _.target.value;
        x || P(A), z == null || z(A);
      },
      [x, z]
    ), H = f(
      (_) => {
        D(!0), y == null || y(_);
      },
      [y]
    ), Z = f(
      (_) => {
        D(!1), w == null || w(_);
      },
      [w]
    );
    return /* @__PURE__ */ L(
      "div",
      {
        className: p(ht({ size: i }), o),
        style: {
          "--sinch-local-icon-size": F
        },
        children: [
          I && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 pl-1", children: I }),
          S && /* @__PURE__ */ l("div", { className: "relative h-full", children: /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "absolute flex items-center left-3 top-0 bottom-0 pointer-events-none",
                r ? "[--sinch-global-color-icon:var(--sinch-comp-input-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-input-color-default-icon-initial)]"
              ),
              style: {
                width: F
              },
              children: N
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "relative flex-1 min-w-0 self-stretch", children: /* @__PURE__ */ l(
            "input",
            {
              ref: M,
              type: e,
              value: E,
              placeholder: a,
              disabled: r,
              readOnly: m,
              required: c,
              autoComplete: b,
              maxLength: h,
              min: d,
              max: u,
              step: g,
              "aria-label": v,
              "aria-invalid": s,
              className: p(pt({ hasIcon: S })),
              onChange: $,
              onFocus: H,
              onBlur: Z,
              onKeyDown: j,
              ...k
            }
          ) }),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                gt({
                  size: i,
                  isFocused: B,
                  isInvalid: s && !B,
                  isDisabled: r
                })
              )
            }
          ),
          V && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 pr-1", children: V })
        ]
      }
    );
  }
);
ko.displayName = "Input";
const kt = C(
  // Base styles
  [
    "relative inline-flex items-center justify-center",
    "font-sans select-none cursor-pointer",
    "transition-all duration-150",
    "outline-none",
    "border border-solid",
    // Focus ring
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--sinch-comp-button-color-primary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-primary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-primary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-primary-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-primary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-primary-hover)]",
          "active:bg-[var(--sinch-comp-button-color-primary-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-primary-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-primary-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-primary-default-outline-focus)]"
        ],
        secondary: [
          "bg-[var(--sinch-comp-button-color-secondary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-secondary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-secondary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-secondary-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-secondary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-secondary-hover)]",
          "active:bg-[var(--sinch-comp-button-color-secondary-default-background-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-secondary-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-secondary-default-outline-focus)]"
        ],
        "subtle-primary": [
          "bg-[var(--sinch-comp-button-color-subtle-primary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-subtle-primary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-subtle-primary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-subtle-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-subtle-primary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-subtle-hover)]",
          "active:bg-[var(--sinch-comp-button-color-subtle-primary-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-subtle-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-subtle-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-subtle-primary-default-outline-focus)]"
        ],
        "subtle-secondary": [
          "bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-subtle-secondary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-subtle-secondary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-subtle-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-subtle-hover)]",
          "active:bg-[var(--sinch-comp-button-color-subtle-secondary-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-subtle-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-subtle-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-subtle-secondary-default-outline-focus)]"
        ],
        "cta-primary": [
          "bg-[var(--sinch-comp-button-color-cta-primary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-cta-primary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-cta-primary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-cta-primary-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-cta-primary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-cta-primary-hover)]",
          "active:bg-[var(--sinch-comp-button-color-cta-primary-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-cta-primary-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-cta-primary-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-cta-primary-default-outline-focus)]"
        ],
        "cta-secondary": [
          "bg-[var(--sinch-comp-button-color-cta-secondary-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-cta-secondary-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-cta-secondary-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-cta-secondary-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-cta-secondary-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-cta-secondary-hover)]",
          "active:bg-[var(--sinch-comp-button-color-cta-secondary-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-cta-secondary-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-cta-secondary-focus)]",
          "focus-visible:ring-[var(--sinch-comp-button-color-cta-secondary-default-outline-focus)]"
        ],
        destructive: [
          "bg-[var(--sinch-comp-button-color-danger-default-background-initial)]",
          "border-[var(--sinch-comp-button-color-danger-default-border-initial)]",
          "text-[var(--sinch-comp-button-color-danger-default-text-initial)]",
          "shadow-[var(--sinch-comp-button-shadow-danger-initial)]",
          "hover:bg-[var(--sinch-comp-button-color-danger-default-background-hover)]",
          "hover:shadow-[var(--sinch-comp-button-shadow-danger-hover)]",
          "active:bg-[var(--sinch-comp-button-color-danger-default-background-active)]",
          "active:shadow-[var(--sinch-comp-button-shadow-danger-active)]",
          "focus-visible:shadow-[var(--sinch-comp-button-shadow-danger-focus)]"
        ]
      },
      size: {
        xs: [
          "h-[var(--sinch-comp-button-size-container-xs)]",
          "px-2",
          "text-[length:var(--sinch-comp-button-font-size-s-text)]",
          "gap-2",
          "rounded-[var(--sinch-comp-button-shape-radius-size-xs)]"
        ],
        s: [
          "h-[var(--sinch-comp-button-size-container-s)]",
          "px-3",
          "text-[length:var(--sinch-comp-button-font-size-s-text)]",
          "gap-2",
          "rounded-[var(--sinch-comp-button-shape-radius-size-s)]"
        ],
        m: [
          "h-[var(--sinch-comp-button-size-container-m)]",
          "px-4",
          "text-[length:var(--sinch-comp-button-font-size-m-text)]",
          "gap-3",
          "rounded-[var(--sinch-comp-button-shape-radius-size-m)]"
        ],
        l: [
          "h-[var(--sinch-comp-button-size-container-l)]",
          "px-4",
          "text-[length:var(--sinch-comp-button-font-size-l-text)]",
          "gap-3",
          "rounded-[var(--sinch-comp-button-shape-radius-size-l)]"
        ]
      },
      iconOnly: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      // Icon-only button padding adjustments
      { iconOnly: !0, size: "xs", className: "px-1" },
      { iconOnly: !0, size: "s", className: "px-1" },
      { iconOnly: !0, size: "m", className: "px-2" },
      { iconOnly: !0, size: "l", className: "px-2" }
    ],
    defaultVariants: {
      variant: "secondary",
      size: "m",
      iconOnly: !1
    }
  }
), ft = {
  primary: [
    "bg-[var(--sinch-comp-button-color-primary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-primary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-primary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-primary-disabled)]"
  ].join(" "),
  secondary: [
    "bg-[var(--sinch-comp-button-color-secondary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-secondary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-secondary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-secondary-disabled)]"
  ].join(" "),
  "subtle-primary": [
    "bg-[var(--sinch-comp-button-color-subtle-primary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-subtle-primary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-subtle-primary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-subtle-disabled)]"
  ].join(" "),
  "subtle-secondary": [
    "bg-[var(--sinch-comp-button-color-subtle-secondary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-subtle-secondary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-subtle-secondary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-subtle-disabled)]"
  ].join(" "),
  "cta-primary": [
    "bg-[var(--sinch-comp-button-color-cta-primary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-cta-primary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-cta-primary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-cta-primary-disabled)]"
  ].join(" "),
  "cta-secondary": [
    "bg-[var(--sinch-comp-button-color-cta-secondary-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-cta-secondary-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-cta-secondary-disabled-text-initial)]",
    "shadow-[var(--sinch-comp-button-shadow-cta-secondary-disabled)]"
  ].join(" "),
  destructive: [
    "bg-[var(--sinch-comp-button-color-danger-disabled-background-initial)]",
    "border-[var(--sinch-comp-button-color-danger-disabled-border-initial)]",
    "text-[var(--sinch-comp-button-color-danger-disabled-text-initial)]"
  ].join(" ")
}, jt = {
  "subtle-primary": "bg-[var(--sinch-comp-button-color-subtle-primary-toggled-background-initial)]",
  "subtle-secondary": "bg-[var(--sinch-comp-button-color-subtle-secondary-toggled-background-initial)]"
}, re = R(
  ({
    className: o,
    variant: e = "secondary",
    size: n = "m",
    text: t,
    icon: a,
    leftIcon: i,
    rightIcon: s,
    loading: r = !1,
    toggled: m = !1,
    disabled: c = !1,
    formType: b = "button",
    children: h,
    ...d
  }, u) => {
    const g = t !== void 0 || h !== void 0, v = !g && a !== void 0;
    X(() => {
      process.env.NODE_ENV !== "production" && v && !d["aria-label"] && !d["aria-labelledby"] && console.warn(
        "Button: Icon-only buttons must have an `aria-label` or `aria-labelledby` for accessibility."
      );
    }, [v, d["aria-label"], d["aria-labelledby"]]);
    const N = c || r, I = v && e === "secondary" ? "subtle-secondary" : e, V = p(
      kt({ variant: I, size: n, iconOnly: v }),
      // Disabled styles
      N && [
        "cursor-not-allowed",
        "pointer-events-none",
        ft[I]
      ],
      // Toggled state (only for subtle variants when not disabled)
      !N && m && jt[I],
      o
    );
    return /* @__PURE__ */ L(
      "button",
      {
        ref: u,
        type: b,
        disabled: N,
        "aria-pressed": m ? "true" : void 0,
        "aria-busy": r ? "true" : void 0,
        className: V,
        ...d,
        children: [
          r ? /* @__PURE__ */ l(go, { size: n === "l" ? "m" : "s", className: "shrink-0" }) : i && /* @__PURE__ */ l("span", { className: "shrink-0", children: i }),
          v && !r && /* @__PURE__ */ l("span", { className: "shrink-0", children: a }),
          g && /* @__PURE__ */ l("span", { className: "truncate", children: t ?? h }),
          s && !r && /* @__PURE__ */ l("span", { className: "shrink-0", children: s })
        ]
      }
    );
  }
);
re.displayName = "Button";
const vt = C(
  // Base styles for the badge indicator
  [
    "absolute",
    "pointer-events-none",
    "rounded-[var(--sinch-comp-badge-shape-radius)]",
    "p-px",
    "bg-[var(--sinch-comp-badge-color-border)]"
  ],
  {
    variants: {
      size: {
        l: "left-[calc(100%-10px)] -top-2.5",
        m: "left-[calc(100%-8px)] -top-2",
        s: "left-[calc(100%-4px)] -top-1"
      },
      mode: {
        square: "",
        circle: ""
      }
    },
    compoundVariants: [
      // Circle mode adjusts positioning
      {
        mode: "circle",
        size: "l",
        className: "left-[calc(85%-10px)] top-[calc(15%-10px)]"
      },
      {
        mode: "circle",
        size: "m",
        className: "left-[calc(85%-7px)] top-[calc(15%-7px)]"
      },
      {
        mode: "circle",
        size: "s",
        className: "left-[calc(85%-4px)] top-[calc(15%-4px)]"
      }
    ],
    defaultVariants: {
      size: "m",
      mode: "square"
    }
  }
), wt = C(
  // Base styles for the inner badge circle
  [
    "box-border",
    "rounded-[var(--sinch-comp-badge-shape-radius)]",
    "bg-[var(--sinch-comp-badge-color-background)]",
    "text-[var(--sinch-comp-badge-color-text)]",
    "flex",
    "items-center",
    "justify-center"
  ],
  {
    variants: {
      size: {
        l: "w-5 h-5",
        m: "w-3.5 h-3.5",
        s: "w-2 h-2"
      },
      long: {
        true: "w-fit",
        false: ""
      }
    },
    compoundVariants: [
      {
        size: "l",
        long: !0,
        className: "px-[5px]"
      },
      {
        size: "m",
        long: !0,
        className: "px-[3px]"
      },
      {
        size: "s",
        long: !0,
        className: "px-0"
      }
    ],
    defaultVariants: {
      size: "m",
      long: !1
    }
  }
), xt = C(
  // Base styles for the text
  [
    "block",
    "w-full",
    "h-full",
    "text-center"
  ],
  {
    variants: {
      size: {
        l: "font-[var(--sinch-comp-badge-font-size-l)] leading-5",
        m: "font-[var(--sinch-comp-badge-font-size-m)] leading-[14px]",
        s: "hidden"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), yt = R(
  ({ className: o, children: e, text: n, size: t = "m", mode: a = "square", hidden: i = !1, ...s }, r) => {
    const m = n !== void 0 && n.length > 1;
    return /* @__PURE__ */ L(
      "div",
      {
        ref: r,
        className: p("relative inline-flex flex-col", o),
        ...s,
        children: [
          e,
          !i && /* @__PURE__ */ l("div", { className: p(vt({ size: t, mode: a })), children: /* @__PURE__ */ l("div", { className: p(wt({ size: t, long: m })), children: /* @__PURE__ */ l("span", { className: p(xt({ size: t })), children: n }) }) })
        ]
      }
    );
  }
);
yt.displayName = "Badge";
const Nt = C(
  // Base styles
  [
    "inline-block",
    "align-middle",
    "outline-none"
  ],
  {
    variants: {
      size: {
        s: "",
        m: "",
        l: ""
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), Vt = C(
  // Base wrapper styles
  [
    "relative",
    "rounded-[var(--sinch-comp-avatar-shape-radius)]"
  ],
  {
    variants: {
      size: {
        s: "w-[var(--sinch-comp-avatar-size-s)] h-[var(--sinch-comp-avatar-size-s)]",
        m: "w-[var(--sinch-comp-avatar-size-m)] h-[var(--sinch-comp-avatar-size-m)]",
        l: "w-[var(--sinch-comp-avatar-size-l)] h-[var(--sinch-comp-avatar-size-l)]"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), zt = C(
  // Base text styles
  [
    "block",
    "w-full",
    "h-full",
    "uppercase",
    "text-center"
  ],
  {
    variants: {
      size: {
        s: "font-[var(--sinch-comp-avatar-container-font-size-s-text)] leading-[calc(var(--sinch-comp-avatar-size-s)-2px)]",
        m: "font-[var(--sinch-comp-avatar-container-font-size-m-text)] leading-[calc(var(--sinch-comp-avatar-size-m)-2px)]",
        l: "font-[var(--sinch-comp-avatar-container-font-size-l-text)] leading-[calc(var(--sinch-comp-avatar-size-l)-2px)]"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), It = C(
  // Base status styles
  [
    "w-2",
    "h-2",
    "rounded-full"
  ],
  {
    variants: {
      status: {
        online: "bg-[var(--sinch-comp-avatar-status-color-online-default-background)]",
        away: "bg-[var(--sinch-comp-avatar-status-color-away-default-background)]",
        busy: "bg-[var(--sinch-comp-avatar-status-color-busy-default-background)]",
        offline: "bg-[var(--sinch-comp-avatar-status-color-offline-default-background)]"
      }
    }
  }
), Ct = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-0 top-0 w-full h-full fill-[var(--sinch-comp-avatar-container-color-default-foreground)]",
    viewBox: "0 0 40 40",
    fill: "none",
    children: /* @__PURE__ */ l("path", { d: "M29.451 15.785a9.451 9.451 0 1 1-18.902 0 9.452 9.452 0 0 1 18.902 0ZM4.734 40.5c.119-7.085 5.899-12.792 13.012-12.792h4.508c7.113 0 12.893 5.707 13.012 12.792H4.734Z" })
  }
), Mt = R(
  ({
    className: o,
    src: e,
    alt: n = "",
    color: t,
    size: a = "m",
    status: i,
    onImageError: s,
    style: r,
    ...m
  }, c) => {
    const [b, h] = U(!1), d = f(
      (N) => {
        h(!0), s == null || s(N);
      },
      [s]
    ), u = e !== void 0 && e !== "" && !b, g = n !== void 0 && n !== "", v = J(() => t === void 0 ? {} : {
      backgroundColor: `var(--sinch-comp-avatar-container-color-${t}-background)`,
      color: `var(--sinch-comp-avatar-container-color-${t}-foreground)`
    }, [t]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: p(Nt({ size: a }), o),
        style: r,
        ...m,
        children: /* @__PURE__ */ L("div", { className: p(Vt({ size: a })), children: [
          /* @__PURE__ */ L(
            "div",
            {
              className: p(
                "relative",
                "w-[calc(100%-2px)]",
                "h-[calc(100%-2px)]",
                "left-[1px]",
                "top-[1px]",
                "rounded-full",
                "bg-[var(--sinch-comp-avatar-container-color-default-background)]",
                "text-[var(--sinch-comp-avatar-container-color-default-foreground)]",
                // Mask for smooth edges
                "[mask:linear-gradient(#fff,#000)]"
              ),
              style: v,
              children: [
                !u && g && /* @__PURE__ */ l("span", { className: p(zt({ size: a })), children: n }),
                u && /* @__PURE__ */ l(
                  "img",
                  {
                    src: e,
                    alt: n,
                    onError: d,
                    className: "absolute left-0 top-0 w-full h-full object-contain"
                  }
                ),
                !u && !g && /* @__PURE__ */ l(Ct, {})
              ]
            }
          ),
          i !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "absolute",
                "left-[calc(85%-5px)]",
                "top-[calc(85%-5px)]",
                "w-[10px]",
                "h-[10px]",
                "p-[1px]",
                "box-border",
                "rounded-full",
                "bg-[var(--sinch-comp-avatar-status-color-border)]",
                "pointer-events-none"
              ),
              children: /* @__PURE__ */ l("div", { className: p(It({ status: i })) })
            }
          )
        ] })
      }
    );
  }
);
Mt.displayName = "Avatar";
const Do = C(
  // Base styles for the anchor element
  [
    "font-[var(--sinch-comp-link-default-font-initial)]",
    "rounded-[0.5em]",
    "whitespace-nowrap",
    "transition-colors",
    "outline-none",
    "focus-visible:outline-2",
    "focus-visible:outline-[var(--sinch-comp-link-color-default-outline-focus)]",
    "focus-visible:outline-offset-2"
  ],
  {
    variants: {
      standalone: {
        true: [
          "block",
          "w-fit",
          "font-[var(--sinch-comp-link-standalone-font-initial)]",
          "no-underline"
        ],
        false: [
          "inline",
          "[text-decoration:var(--sinch-comp-link-default-text-decoration-initial)]",
          "text-[var(--sinch-comp-link-color-default-text-initial)]",
          "hover:[text-decoration:var(--sinch-comp-link-default-text-decoration-hover)]",
          "hover:text-[var(--sinch-comp-link-color-default-text-hover)]"
        ]
      },
      disabled: {
        true: [
          "text-[var(--sinch-comp-link-color-disabled-text-initial)]",
          "pointer-events-none",
          "cursor-default",
          "[text-decoration:var(--sinch-comp-link-default-text-decoration-disabled)]"
        ],
        false: []
      }
    },
    compoundVariants: [
      // Standalone + not disabled: apply text colors
      {
        standalone: !0,
        disabled: !1,
        className: [
          "text-[var(--sinch-comp-link-color-default-text-initial)]",
          "hover:text-[var(--sinch-comp-link-color-default-text-hover)]"
        ]
      }
    ],
    defaultVariants: {
      standalone: !1,
      disabled: !1
    }
  }
), Dt = R(
  ({
    className: o,
    text: e,
    href: n,
    useHistory: t = !1,
    disabled: a = !1,
    external: i = !1,
    standalone: s = !1,
    preventDefault: r,
    onClick: m,
    children: c,
    ...b
  }, h) => {
    const d = r ?? t, u = (N) => {
      d && (N.preventDefault(), t && history.pushState({}, "", n)), m == null || m(N);
    }, g = a ? "[--sinch-global-color-icon:var(--sinch-comp-link-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-initial)] hover:[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-hover)]", v = /* @__PURE__ */ L(Ne, { children: [
      /* @__PURE__ */ l("span", { className: "whitespace-[var(--sinch-global-text-white-space,normal)]", children: e ?? c }),
      s && i && /* @__PURE__ */ L(Ne, { children: [
        /* @__PURE__ */ l("span", { children: " " }),
        /* @__PURE__ */ l(
          oe,
          {
            name: "fa-arrow-up-right",
            iconsVersion: "2",
            className: "inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
          }
        )
      ] }),
      s && !i && /* @__PURE__ */ L(Ne, { children: [
        /* @__PURE__ */ l("span", { children: " " }),
        /* @__PURE__ */ l(
          oe,
          {
            name: "fa-arrow-right",
            iconsVersion: "2",
            className: "inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
          }
        )
      ] }),
      !s && i && /* @__PURE__ */ l(
        oe,
        {
          name: "fa-arrow-up-right",
          iconsVersion: "2",
          className: "inline-block ml-1 align-[-0.2em] h-[1em] [--sinch-global-size-icon:1em]"
        }
      )
    ] });
    if (a) {
      const { href: N, target: I, rel: V, onClick: z, ...y } = b;
      return /* @__PURE__ */ l(
        "span",
        {
          ref: h,
          role: "link",
          "aria-disabled": "true",
          className: p(
            Do({ standalone: s, disabled: a }),
            g,
            o
          ),
          ...y,
          children: v
        }
      );
    }
    return /* @__PURE__ */ l(
      "a",
      {
        ref: h,
        href: n,
        target: i ? "_blank" : void 0,
        rel: i ? "noopener noreferrer" : void 0,
        referrerPolicy: "no-referrer",
        onClick: u,
        className: p(
          Do({ standalone: s, disabled: a }),
          g,
          o
        ),
        ...b,
        children: v
      }
    );
  }
);
Dt.displayName = "Link";
const Tt = C(
  // Base styles
  [
    "inline-flex items-center",
    "gap-1",
    "select-none",
    "box-border",
    "bg-[var(--sinch-comp-tag-color-default-background)]",
    "text-[color:var(--sinch-comp-tag-color-default-foreground)]",
    "rounded-[var(--sinch-comp-tag-shape-radius)]"
  ],
  {
    variants: {
      size: {
        m: [
          "h-[var(--sinch-comp-tag-size-container-m)]",
          "px-[9px]",
          "[font:var(--sinch-comp-tag-font-size-m-label)]"
        ],
        s: [
          "h-[var(--sinch-comp-tag-size-container-s)]",
          "px-2",
          "[font:var(--sinch-comp-tag-font-size-s-label)]"
        ]
      },
      ellipsis: {
        true: "inline",
        false: "inline-flex"
      }
    },
    defaultVariants: {
      size: "m",
      ellipsis: !1
    }
  }
), St = R(
  ({
    className: o,
    text: e,
    color: n,
    small: t = !1,
    size: a,
    ellipsis: i = !1,
    icon: s,
    children: r,
    style: m,
    ...c
  }, b) => {
    const h = t ? "s" : a ?? "m", d = {};
    n !== void 0 && n !== "default" && (d.backgroundColor = `var(--sinch-comp-tag-color-${n}-background)`, d.color = `var(--sinch-comp-tag-color-${n}-foreground)`, d["--sinch-global-color-icon"] = `var(--sinch-comp-tag-color-${n}-foreground)`);
    const u = h === "s" ? "var(--sinch-comp-tag-size-icon-s)" : "var(--sinch-comp-tag-size-icon-m)";
    return d["--sinch-global-size-icon"] = u, /* @__PURE__ */ L(
      "div",
      {
        ref: b,
        className: p(
          Tt({ size: h, ellipsis: i }),
          o
        ),
        style: { ...d, ...m },
        ...c,
        children: [
          s && /* @__PURE__ */ l("span", { className: "-ml-1", children: s }),
          /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-1",
                i && "overflow-hidden text-ellipsis whitespace-nowrap"
              ),
              children: e ?? r
            }
          )
        ]
      }
    );
  }
);
St.displayName = "Tag";
const Et = C(
  // Base styles
  [
    "flex",
    "flex-row",
    "gap-2",
    "items-center",
    "py-2",
    "px-4",
    "w-full",
    "min-h-[48px]",
    "box-border"
  ],
  {
    variants: {
      type: {
        info: "bg-[var(--sinch-comp-alert-color-info-default-background)]",
        warn: "bg-[var(--sinch-comp-alert-color-warning-default-background)]",
        error: "bg-[var(--sinch-comp-alert-color-error-default-background)]"
      }
    },
    defaultVariants: {
      type: "info"
    }
  }
), At = {
  info: "var(--sinch-comp-alert-color-info-default-icon)",
  warn: "var(--sinch-comp-alert-color-warning-default-icon)",
  error: "var(--sinch-comp-alert-color-error-default-icon)"
}, Ot = {
  info: "var(--sinch-comp-alert-color-info-default-text)",
  warn: "var(--sinch-comp-alert-color-warning-default-text)",
  error: "var(--sinch-comp-alert-color-error-default-text)"
}, Lt = {
  info: "circle-info",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, Pt = R(
  ({ className: o, type: e = "info", text: n, action: t, close: a, children: i, ...s }, r) => {
    const m = Lt[e], c = At[e], b = Ot[e];
    return /* @__PURE__ */ L(
      "div",
      {
        ref: r,
        role: "alert",
        className: p(Et({ type: e }), o),
        ...s,
        children: [
          /* @__PURE__ */ l(
            oe,
            {
              name: m,
              iconsVersion: "2",
              size: "md",
              style: { color: c }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: "flex flex-col gap-2 flex-1 min-w-0 font-[var(--sinch-comp-alert-font-body)]",
              style: { color: b },
              children: n ?? i
            }
          ),
          t,
          a
        ]
      }
    );
  }
);
Pt.displayName = "Alert";
const Rt = C(
  // Base styles for the toggle wrapper
  [
    "inline-flex items-center gap-2 outline-none",
    "cursor-pointer select-none"
  ],
  {
    variants: {
      small: {
        true: "[--sinch-local-size:var(--sinch-comp-toggle-size-container-s,16px)] [--sinch-local-width:var(--sinch-comp-toggle-size-track-s,32px)] [--sinch-local-knob-size:var(--sinch-comp-toggle-size-knob-s,12px)] [--sinch-local-translate:var(--sinch-comp-toggle-size-translate-s,16px)]",
        false: "[--sinch-local-size:var(--sinch-comp-toggle-size-container-m,20px)] [--sinch-local-width:var(--sinch-comp-toggle-size-track-m,40px)] [--sinch-local-knob-size:var(--sinch-comp-toggle-size-knob-m,16px)] [--sinch-local-translate:var(--sinch-comp-toggle-size-translate-m,20px)]"
      },
      disabled: {
        true: "cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      small: !1,
      disabled: !1
    }
  }
), Ft = C(
  // Base styles for the knob container (the track)
  [
    "relative",
    "w-[var(--sinch-local-width)] h-[var(--sinch-local-size)]",
    "rounded-[calc(var(--sinch-local-size)*0.5)]",
    "transition-colors duration-150 ease-in-out",
    "pointer-events-none"
  ],
  {
    variants: {
      checked: {
        true: "bg-[var(--sinch-comp-toggle-color-checked-background-initial)]",
        false: "bg-[var(--sinch-comp-toggle-color-default-background-initial)]"
      },
      disabled: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        checked: !1,
        disabled: !0,
        className: "bg-[var(--sinch-comp-toggle-color-disabled-background-initial)]"
      },
      {
        checked: !0,
        disabled: !0,
        className: "bg-[var(--sinch-comp-toggle-color-checked-disabled-background-initial)]"
      }
    ],
    defaultVariants: {
      checked: !1,
      disabled: !1
    }
  }
), $t = C(
  // Base styles for the knob (the circle)
  [
    "relative",
    "w-[var(--sinch-local-knob-size)] h-[var(--sinch-local-knob-size)]",
    "left-[2px] top-[2px]",
    "rounded-full",
    "bg-[var(--sinch-comp-toggle-color-default-knob-background-initial)]",
    "transition-transform duration-150 ease-in-out",
    "will-change-transform"
  ],
  {
    variants: {
      checked: {
        true: "translate-x-[var(--sinch-local-translate)]",
        false: "translate-x-0"
      },
      disabled: {
        true: "shadow-[var(--sinch-comp-toggle-shadow-knob-disabled)]",
        false: "shadow-[var(--sinch-comp-toggle-shadow-knob-default)]"
      }
    },
    defaultVariants: {
      checked: !1,
      disabled: !1
    }
  }
), _t = C(
  // Base styles for the label
  [
    "flex-1 min-w-0",
    "self-center",
    "overflow-hidden whitespace-nowrap text-ellipsis"
  ],
  {
    variants: {
      small: {
        true: "font-[var(--sinch-comp-toggle-font-size-s-label)]",
        false: "font-[var(--sinch-comp-toggle-font-size-m-label)]"
      },
      disabled: {
        true: "text-[var(--sinch-comp-toggle-color-disabled-label-initial)]",
        false: "text-[var(--sinch-comp-toggle-color-default-label-initial)]"
      }
    },
    defaultVariants: {
      small: !1,
      disabled: !1
    }
  }
), Ut = R(
  ({
    className: o,
    checked: e,
    defaultChecked: n = !1,
    small: t = !1,
    labeled: a = !1,
    disabled: i = !1,
    text: s,
    "aria-label": r,
    onChange: m,
    onFocus: c,
    onBlur: b,
    onKeyDown: h,
    onClick: d,
    ...u
  }, g) => {
    const [v, N] = U(n), [I, V] = U(!1), z = e !== void 0, y = z ? e : v, w = f(
      (T) => {
        if (i)
          return;
        const P = !y;
        z || N(P), m == null || m(P), d == null || d(T);
      },
      [i, y, z, m, d]
    ), j = f(
      (T) => {
        if ((T.code === "Space" || T.code === "Enter") && (T.preventDefault(), !i)) {
          const P = !y;
          z || N(P), m == null || m(P);
        }
        h == null || h(T);
      },
      [i, y, z, m, h]
    ), k = f(
      (T) => {
        V(!0), c == null || c(T);
      },
      [c]
    ), M = f(
      (T) => {
        V(!1), b == null || b(T);
      },
      [b]
    );
    return /* @__PURE__ */ L(
      "div",
      {
        ref: g,
        role: "checkbox",
        "aria-checked": y,
        "aria-disabled": i,
        "aria-label": r,
        "data-value": String(y),
        tabIndex: i ? -1 : 0,
        className: p(Rt({ small: t, disabled: i }), o),
        onClick: w,
        onKeyDown: j,
        onFocus: k,
        onBlur: M,
        ...u,
        children: [
          /* @__PURE__ */ L("div", { className: p(Ft({ checked: y, disabled: i })), children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  "absolute -inset-[3px] pointer-events-none",
                  "border-2 border-[var(--sinch-comp-toggle-color-default-outline-focus)]",
                  "rounded-full",
                  "transition-opacity duration-100",
                  I ? "opacity-100" : "opacity-0"
                )
              }
            ),
            /* @__PURE__ */ l("div", { className: p($t({ checked: y, disabled: i })), children: a && !t && /* @__PURE__ */ L(Ne, { children: [
              /* @__PURE__ */ l(
                "span",
                {
                  className: p(
                    "absolute top-0 right-full px-[1px]",
                    "font-[var(--sinch-comp-toggle-font-size-m-inside-text)]",
                    "text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]",
                    "uppercase select-none",
                    "transition-opacity duration-150 ease-in-out",
                    y ? "opacity-100" : "opacity-0"
                  ),
                  children: "on"
                }
              ),
              /* @__PURE__ */ l(
                "span",
                {
                  className: p(
                    "absolute top-0 left-full px-[1px]",
                    "font-[var(--sinch-comp-toggle-font-size-m-inside-text)]",
                    "text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]",
                    "uppercase select-none",
                    "transition-opacity duration-150 ease-in-out",
                    y ? "opacity-0" : "opacity-100"
                  ),
                  children: "off"
                }
              )
            ] }) })
          ] }),
          s && /* @__PURE__ */ l("span", { className: p(_t({ small: t, disabled: i })), children: s })
        ]
      }
    );
  }
);
Ut.displayName = "Toggle";
const Ht = C(
  // Base styles
  [
    "inline-flex items-center",
    "gap-1",
    "select-none",
    "box-border",
    "cursor-pointer",
    "outline-none",
    "bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]",
    "text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]",
    "rounded-[var(--sinch-comp-chip-shape-radius)]",
    // Focus ring
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--sinch-comp-chip-color-outiline-focus)]",
    "focus-visible:ring-offset-2"
  ],
  {
    variants: {
      size: {
        m: [
          "h-[var(--sinch-comp-chip-size-container-m)]",
          "pl-[9px] pr-[5px]",
          "[font:var(--sinch-comp-chip-font-size-m-label)]"
        ],
        s: [
          "h-[var(--sinch-comp-chip-size-container-s)]",
          "pl-[7px] pr-[3px]",
          "[font:var(--sinch-comp-chip-font-size-s-label)]"
        ]
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), Bt = ({ size: o }) => /* @__PURE__ */ l(
  "svg",
  {
    width: o === "s" ? 12 : 16,
    height: o === "s" ? 12 : 16,
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.354-9.354a.5.5 0 0 1 0 .708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293l1.646-1.647a.5.5 0 0 1 .708 0Z"
      }
    )
  }
), Gt = R(
  ({
    className: o,
    text: e,
    color: n,
    small: t = !1,
    size: a,
    icon: i,
    rightIcon: s,
    onClick: r,
    onFocus: m,
    onBlur: c,
    onKeyDown: b,
    style: h,
    ...d
  }, u) => {
    const g = t ? "s" : a ?? "m", v = {};
    n !== void 0 && n !== "neutral" && (v.backgroundColor = `var(--sinch-comp-chip-color-${n}-default-background-initial)`, v.color = `var(--sinch-comp-chip-color-${n}-default-foreground-initial)`, v["--sinch-global-color-icon"] = `var(--sinch-comp-chip-color-${n}-default-foreground-initial)`);
    const N = g === "s" ? "var(--sinch-comp-chip-size-icon-s)" : "var(--sinch-comp-chip-size-icon-m)";
    v["--sinch-global-size-icon"] = N;
    const I = f((V) => {
      V.code === "Space" && (V.preventDefault(), V.currentTarget.click()), b == null || b(V);
    }, [b]);
    return /* @__PURE__ */ L(
      "div",
      {
        ref: u,
        role: "button",
        tabIndex: 0,
        "aria-label": e,
        className: p(
          Ht({ size: g }),
          o
        ),
        style: { ...v, ...h },
        onClick: r,
        onFocus: m,
        onBlur: c,
        onKeyDown: I,
        ...d,
        children: [
          i && /* @__PURE__ */ l("span", { className: "-ml-1", children: i }),
          /* @__PURE__ */ l(
            "span",
            {
              className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap",
              children: e
            }
          ),
          /* @__PURE__ */ l("span", { "aria-label": `Delete ${e}`, children: s ?? /* @__PURE__ */ l(Bt, { size: g }) })
        ]
      }
    );
  }
);
Gt.displayName = "Chip";
const Wt = C(
  // Base styles
  [
    "inline-flex flex-row items-start box-border w-auto min-h-[24px]",
    "outline-none cursor-pointer select-none"
  ],
  {
    variants: {
      isDisabled: {
        true: "cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      isDisabled: !1
    }
  }
), Zt = C(
  // Base styles for the checkbox box
  [
    "relative w-[18px] h-[18px] mt-[3px] flex-shrink-0",
    "rounded-[var(--sinch-comp-checkbox-shape-radius)]",
    "border border-solid transition-colors duration-100",
    "box-border"
  ],
  {
    variants: {
      isChecked: {
        true: [
          "bg-[var(--sinch-comp-checkbox-color-checked-background-initial)]",
          "border-[var(--sinch-comp-checkbox-color-checked-border-initial)]"
        ],
        false: [
          "bg-[var(--sinch-comp-checkbox-color-default-background-initial)]",
          "border-[var(--sinch-comp-checkbox-color-default-border-initial)]"
        ]
      },
      isInvalid: {
        true: [
          "bg-[var(--sinch-comp-checkbox-color-invalid-background-initial)]",
          "border-[var(--sinch-comp-checkbox-color-invalid-border-initial)]"
        ],
        false: ""
      },
      isDisabled: {
        true: [
          "bg-[var(--sinch-comp-checkbox-color-disabled-background-initial)]",
          "border-[var(--sinch-comp-checkbox-color-disabled-border-initial)]"
        ],
        false: ""
      }
    },
    compoundVariants: [
      // Checked + Disabled
      {
        isChecked: !0,
        isDisabled: !0,
        className: [
          "bg-[var(--sinch-comp-checkbox-color-checked-disabled-background-initial)]",
          "border-[var(--sinch-comp-checkbox-color-checked-disabled-border-initial)]"
        ]
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), qt = C(
  // Focus ring styles
  [
    "absolute inset-[-2px] pointer-events-none",
    "border-2 border-[var(--sinch-comp-checkbox-color-default-outline-focus)]",
    "rounded-[calc(var(--sinch-comp-checkbox-shape-radius)+2px)]",
    "transition-opacity duration-100 opacity-0"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1
    }
  }
), Yt = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l("path", { d: "M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17Z" })
  }
), Kt = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l("path", { d: "M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z" })
  }
), Jt = R(
  ({
    className: o,
    name: e,
    value: n = "",
    checked: t,
    defaultChecked: a = !1,
    indeterminate: i = !1,
    disabled: s = !1,
    invalid: r = !1,
    text: m,
    "aria-label": c,
    onChange: b,
    onFocus: h,
    onBlur: d,
    onKeyDown: u,
    ...g
  }, v) => {
    const [N, I] = U(a), [V, z] = U(!1), y = Y(null), w = t !== void 0, j = w ? t : N;
    X(() => {
      v != null && (typeof v == "function" ? v(y.current) : v.current = y.current);
    }, [v]);
    const k = f(() => {
      if (s)
        return;
      const x = !j;
      w || I(x), b == null || b(x);
    }, [s, j, w, b]), M = f(
      (x) => {
        x.code === "Space" && (x.preventDefault(), k()), u == null || u(x);
      },
      [k, u]
    ), T = f(
      (x) => {
        z(!0), h == null || h(x);
      },
      [h]
    ), P = f(
      (x) => {
        z(!1), d == null || d(x);
      },
      [d]
    ), B = () => s ? "" : j && !r ? [
      "hover:bg-[var(--sinch-comp-checkbox-color-checked-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-checked-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-checked-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-checked-border-active)]"
    ].join(" ") : r ? [
      "hover:bg-[var(--sinch-comp-checkbox-color-invalid-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-invalid-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-invalid-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-invalid-border-active)]"
    ].join(" ") : [
      "hover:bg-[var(--sinch-comp-checkbox-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-default-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-default-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-default-border-active)]"
    ].join(" "), D = () => s ? "text-[var(--sinch-comp-checkbox-color-disabled-text-initial)]" : r ? "text-[var(--sinch-comp-checkbox-color-invalid-text-initial)]" : "text-[var(--sinch-comp-checkbox-color-default-text-initial)]";
    return /* @__PURE__ */ L(
      "div",
      {
        ref: y,
        role: "checkbox",
        "aria-checked": j && i ? "mixed" : j,
        "aria-disabled": s,
        "aria-invalid": r,
        "aria-label": c ?? m,
        tabIndex: s ? -1 : 0,
        "data-name": e,
        "data-value": j ? n.length > 0 ? n : "on" : "",
        className: p(
          Wt({ isDisabled: s }),
          o
        ),
        onClick: k,
        onKeyDown: M,
        onFocus: T,
        onBlur: P,
        ...g,
        children: [
          /* @__PURE__ */ L("div", { className: "relative w-[18px] h-[18px] mt-[3px] flex-shrink-0", children: [
            /* @__PURE__ */ l("div", { className: p(qt({ isFocused: V })) }),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  Zt({
                    isChecked: j,
                    isInvalid: r && !j,
                    isDisabled: s
                  }),
                  B()
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  "transition-opacity duration-100",
                  j && !i ? "opacity-100" : "opacity-0"
                ),
                children: /* @__PURE__ */ l(Yt, {})
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  "transition-opacity duration-100",
                  j && i ? "opacity-100" : "opacity-0"
                ),
                children: /* @__PURE__ */ l(Kt, {})
              }
            )
          ] }),
          m && /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-1 self-center pl-2",
                "font-[var(--sinch-comp-checkbox-font-label)]",
                D(),
                s ? "cursor-default" : "cursor-pointer"
              ),
              children: m
            }
          )
        ]
      }
    );
  }
);
Jt.displayName = "Checkbox";
const Xt = C(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), Qt = C(
  "flex items-center h-6",
  {
    variants: {},
    defaultVariants: {}
  }
), ei = C(
  "h-2 rounded-full flex-1 min-w-0 bg-[var(--sinch-comp-progress-color-default-background-initial)]",
  {
    variants: {},
    defaultVariants: {}
  }
), oi = C(
  "h-2 rounded-full bg-[var(--sinch-comp-progress-color-default-bar-initial)] transition-[width] duration-200",
  {
    variants: {},
    defaultVariants: {}
  }
), ni = C(
  "w-[46px] text-sm text-[var(--sinch-comp-progress-color-default-text-initial)]",
  {
    variants: {
      visible: {
        true: "block",
        false: "hidden"
      }
    },
    defaultVariants: {
      visible: !1
    }
  }
), ti = R(
  ({ className: o, value: e = 0, detailed: n = !1, ...t }, a) => {
    const i = Math.min(100, Math.max(0, e)), s = J(() => Intl.NumberFormat(
      typeof navigator < "u" ? navigator.language : "en-US",
      { style: "percent" }
    ).format(i / 100), [i]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        role: "progressbar",
        "aria-valuenow": i,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: p(Xt(), o),
        ...t,
        children: /* @__PURE__ */ L("div", { className: Qt(), children: [
          /* @__PURE__ */ l("span", { className: ni({ visible: n }), children: s }),
          /* @__PURE__ */ l("div", { className: ei(), children: /* @__PURE__ */ l(
            "div",
            {
              className: oi(),
              style: { width: `${i}%` }
            }
          ) })
        ] })
      }
    );
  }
);
ti.displayName = "Progress";
const ii = C(
  // Base styles - uses design system font and color tokens
  [
    "block",
    "text-foreground",
    "[font:var(--sinch-sys-font-desktop-title-m)]",
    "[letter-spacing:-0.02em]"
  ],
  {
    variants: {
      /**
       * Title size type
       */
      type: {
        xl: "[font:var(--sinch-sys-font-desktop-title-xl)]",
        l: "[font:var(--sinch-sys-font-desktop-title-l)]",
        m: "[font:var(--sinch-sys-font-desktop-title-m)]",
        s: "[font:var(--sinch-sys-font-desktop-title-s)]",
        xs: "[font:var(--sinch-sys-font-desktop-title-xs)]"
      },
      /**
       * Truncate text with ellipsis
       */
      ellipsis: {
        true: "overflow-hidden text-ellipsis whitespace-nowrap",
        false: ""
      }
    },
    defaultVariants: {
      type: "m",
      ellipsis: !1
    }
  }
), ai = {
  xl: "1",
  l: "2",
  m: "3",
  s: "4",
  xs: "5"
}, li = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
}, fo = R(
  ({
    className: o,
    children: e,
    type: n = "m",
    level: t,
    ellipsis: a = !1,
    as: i,
    ...s
  }, r) => {
    const m = t ?? ai[n], c = i ?? li[m];
    return /* @__PURE__ */ l(
      c,
      {
        ref: r,
        role: "heading",
        "aria-level": parseInt(m, 10),
        className: p(ii({ type: n, ellipsis: a }), o),
        ...s,
        children: e
      }
    );
  }
);
fo.displayName = "Title";
const si = 1e3, ri = 250, mi = 100, ci = C(
  // Base styles for the tooltip content
  [
    "absolute",
    "z-50",
    "max-w-[300px]",
    "px-1.5",
    "py-0.5",
    "rounded-[var(--sinch-comp-tooltip-shape-radius,4px)]",
    "bg-[var(--sinch-comp-tooltip-color-background)]",
    "text-[var(--sinch-comp-tooltip-color-text)]",
    "font-[var(--sinch-comp-tooltip-font-body)]",
    "text-sm",
    "pointer-events-none",
    "transition-opacity",
    "duration-100",
    "drop-shadow-[var(--sinch-comp-tooltip-shadow)]",
    "break-words"
  ],
  {
    variants: {
      orientation: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
        "top-left": "bottom-full right-0 mb-2",
        "top-right": "bottom-full left-0 mb-2",
        "bottom-left": "top-full right-0 mt-2",
        "bottom-right": "top-full left-0 mt-2"
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0"
      }
    },
    defaultVariants: {
      orientation: "top",
      textAlign: "left",
      visible: !1
    }
  }
), di = C(
  // Base styles for the arrow tip
  [
    "absolute",
    "w-2",
    "h-1",
    "fill-[var(--sinch-comp-tooltip-color-background)]",
    "pointer-events-none"
  ],
  {
    variants: {
      orientation: {
        top: "top-full left-1/2 -translate-x-1/2",
        bottom: "bottom-full left-1/2 -translate-x-1/2 rotate-180",
        left: "left-full top-1/2 -translate-y-1/2 -rotate-90",
        right: "right-full top-1/2 -translate-y-1/2 rotate-90",
        "top-left": "top-full right-4",
        "top-right": "top-full left-4",
        "bottom-left": "bottom-full right-4 rotate-180",
        "bottom-right": "bottom-full left-4 rotate-180"
      }
    },
    defaultVariants: {
      orientation: "top"
    }
  }
), to = R(
  ({
    className: o,
    children: e,
    text: n,
    orientation: t = "top",
    textAlign: a = "left",
    type: i = "slow",
    isOpen: s,
    onShow: r,
    onHide: m,
    ...c
  }, b) => {
    const [h, d] = U(!1), [u, g] = U(!1), v = Y(null), N = Y(null), I = `tooltip-${eo()}`, V = s !== void 0, z = V ? s : h;
    X(() => () => {
      v.current !== null && window.clearTimeout(v.current), N.current !== null && window.clearTimeout(N.current);
    }, []), X(() => {
      z ? (requestAnimationFrame(() => {
        g(!0);
      }), r == null || r()) : (g(!1), N.current = window.setTimeout(() => {
        m == null || m();
      }, mi));
    }, [z, r, m]);
    const y = f(() => {
      if (V || n.length === 0)
        return;
      N.current !== null && (window.clearTimeout(N.current), N.current = null);
      const D = i === "fast" ? ri : si;
      v.current = window.setTimeout(() => {
        d(!0);
      }, D);
    }, [V, i, n]), w = f(() => {
      V || (v.current !== null && (window.clearTimeout(v.current), v.current = null), d(!1));
    }, [V]), j = f(() => {
      V || (v.current !== null && (window.clearTimeout(v.current), v.current = null), d(!1));
    }, [V]);
    if (n.length === 0)
      return e;
    const k = f(() => {
      V || n.length === 0 || d(!0);
    }, [V, n]), M = f(() => {
      V || d(!1);
    }, [V]), T = f(
      (D) => {
        D.key === "Escape" && !V && d(!1);
      },
      [V]
    ), P = e.props, B = oo(e) ? ho(e, {
      "aria-describedby": z ? I : void 0,
      tabIndex: (P == null ? void 0 : P.tabIndex) ?? 0,
      onMouseEnter: (D) => {
        var x, E;
        y(), (E = (x = e.props) == null ? void 0 : x.onMouseEnter) == null || E.call(x, D);
      },
      onMouseLeave: (D) => {
        var x, E;
        w(), (E = (x = e.props) == null ? void 0 : x.onMouseLeave) == null || E.call(x, D);
      },
      onMouseDown: (D) => {
        var x, E;
        j(), (E = (x = e.props) == null ? void 0 : x.onMouseDown) == null || E.call(x, D);
      },
      onFocus: (D) => {
        var x, E;
        k(), (E = (x = e.props) == null ? void 0 : x.onFocus) == null || E.call(x, D);
      },
      onBlur: (D) => {
        var x, E;
        M(), (E = (x = e.props) == null ? void 0 : x.onBlur) == null || E.call(x, D);
      },
      onKeyDown: (D) => {
        var x, E;
        T(D), (E = (x = e.props) == null ? void 0 : x.onKeyDown) == null || E.call(x, D);
      }
    }) : e;
    return /* @__PURE__ */ L(
      "div",
      {
        ref: b,
        className: p("relative inline-flex", o),
        ...c,
        children: [
          B,
          (z || u) && /* @__PURE__ */ L(
            "div",
            {
              id: I,
              role: "tooltip",
              className: p(
                ci({
                  orientation: t,
                  textAlign: a,
                  visible: u
                })
              ),
              children: [
                n,
                /* @__PURE__ */ l(
                  "svg",
                  {
                    className: p(di({ orientation: t })),
                    viewBox: "0 0 8 4",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ l("path", { d: "m4 4 4-4h-8l4 4Z" })
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
to.displayName = "Tooltip";
const bi = C(
  // Base styles - inline code styling with monospace font
  [
    "inline",
    "font-mono",
    "px-[0.25em]",
    "border",
    "rounded-[var(--sinch-comp-code-tag-shape-radius)]",
    "text-[var(--sinch-comp-code-tag-color-default-text-initial)]",
    "border-[var(--sinch-comp-code-tag-color-default-border-initial)]",
    "bg-[var(--sinch-comp-code-tag-color-default-background-initial)]"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), ui = R(
  ({ className: o, text: e, children: n, ...t }, a) => /* @__PURE__ */ l(
    "code",
    {
      ref: a,
      className: p(bi(), o),
      ...t,
      children: e ?? n
    }
  )
);
ui.displayName = "CodeTag";
const hi = C(
  // Base styles for wrapper
  [
    "flex",
    "flex-row",
    "items-start",
    "p-4",
    "w-full",
    "box-border",
    "rounded-[var(--sinch-comp-inline-alert-shape-radius)]"
  ],
  {
    variants: {
      type: {
        info: "bg-[var(--sinch-comp-inline-alert-color-info-default-background)]",
        success: "bg-[var(--sinch-comp-inline-alert-color-success-default-background)]",
        warn: "bg-[var(--sinch-comp-inline-alert-color-warning-default-background)]",
        error: "bg-[var(--sinch-comp-inline-alert-color-error-default-background)]"
      }
    },
    defaultVariants: {
      type: "info"
    }
  }
), pi = {
  info: "var(--sinch-comp-inline-alert-color-info-default-icon)",
  success: "var(--sinch-comp-inline-alert-color-success-default-icon)",
  warn: "var(--sinch-comp-inline-alert-color-warning-default-icon)",
  error: "var(--sinch-comp-inline-alert-color-error-default-icon)"
}, gi = {
  info: "var(--sinch-comp-inline-alert-color-info-default-text)",
  success: "var(--sinch-comp-inline-alert-color-success-default-text)",
  warn: "var(--sinch-comp-inline-alert-color-warning-default-text)",
  error: "var(--sinch-comp-inline-alert-color-error-default-text)"
}, ki = {
  info: "circle-info",
  success: "circle-check",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, fi = R(
  ({
    className: o,
    type: e = "info",
    text: n,
    caption: t,
    icon: a,
    action: i,
    close: s,
    children: r,
    ...m
  }, c) => {
    const b = a ?? ki[e], h = pi[e], d = gi[e];
    return /* @__PURE__ */ L(
      "div",
      {
        ref: c,
        role: "alert",
        "aria-atomic": "true",
        "aria-live": "polite",
        className: p(hi({ type: e }), o),
        ...m,
        children: [
          /* @__PURE__ */ l(
            oe,
            {
              name: b,
              iconsVersion: "2",
              size: "md",
              style: { color: h }
            }
          ),
          /* @__PURE__ */ L("div", { className: "flex flex-col items-start ml-2 min-w-0 flex-1", children: [
            t && /* @__PURE__ */ l(
              "div",
              {
                className: "self-stretch font-[var(--sinch-comp-inline-alert-font-title)]",
                style: { color: d },
                children: t
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  "flex flex-col gap-2 self-stretch font-[var(--sinch-comp-inline-alert-font-body)]",
                  t && "mt-1"
                ),
                style: { color: d },
                children: n ?? r
              }
            ),
            i && /* @__PURE__ */ l("div", { className: "w-full flex mt-4 min-w-0 gap-4", children: i })
          ] }),
          s && /* @__PURE__ */ l("div", { className: "ml-4", children: s })
        ]
      }
    );
  }
);
fi.displayName = "InlineAlert";
const ji = C(
  // Base styles
  [
    "relative flex flex-col box-border w-full",
    "bg-[var(--sinch-comp-textarea-color-default-background-initial)]",
    "rounded-[var(--sinch-comp-textarea-shape-radius)]",
    "pr-0.5 overflow-hidden"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), vi = C(
  // Base styles for the textarea element
  [
    "w-full px-3 py-2 box-border",
    "bg-transparent outline-none border-none",
    "resize-none",
    "whitespace-pre-wrap break-words",
    "font-[var(--sinch-comp-textarea-font-input)]",
    "text-[var(--sinch-comp-textarea-color-default-text-initial)]",
    "placeholder:text-[var(--sinch-comp-textarea-color-default-text-placeholder)]",
    "placeholder:opacity-100",
    "disabled:text-[var(--sinch-comp-textarea-color-disabled-text-initial)]"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), wi = C(
  // Base styles for the border overlay
  [
    "absolute inset-0 pointer-events-none",
    "border border-[var(--sinch-comp-textarea-color-default-border-initial)]",
    "rounded-[var(--sinch-comp-textarea-shape-radius)]",
    "transition-colors"
  ],
  {
    variants: {
      isFocused: {
        true: "border-[var(--sinch-comp-textarea-color-default-border-focus)] border-2",
        false: ""
      },
      isInvalid: {
        true: "border-[var(--sinch-comp-textarea-color-invalid-border-initial)]",
        false: ""
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-textarea-color-disabled-border-initial)]",
        false: ""
      }
    },
    compoundVariants: [
      // Focus takes precedence over invalid
      {
        isFocused: !0,
        isInvalid: !0,
        className: "border-[var(--sinch-comp-textarea-color-default-border-focus)]"
      },
      // Disabled takes precedence over everything
      {
        isDisabled: !0,
        className: "border-[var(--sinch-comp-textarea-color-disabled-border-initial)]"
      }
    ],
    defaultVariants: {
      isFocused: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), xi = R(
  ({
    className: o,
    value: e,
    defaultValue: n,
    placeholder: t,
    invalid: a = !1,
    disabled: i = !1,
    readOnly: s = !1,
    required: r = !1,
    rows: m,
    minRows: c,
    maxRows: b,
    resizable: h = !1,
    "aria-label": d,
    bottomContent: u,
    onChange: g,
    onFocus: v,
    onBlur: N,
    onKeyDown: I,
    ...V
  }, z) => {
    const [y, w] = U(n ?? ""), [j, k] = U(!1), M = Y(null), T = f(
      (_) => {
        M.current = _, typeof z == "function" ? z(_) : z !== null && (z.current = _);
      },
      [z]
    ), P = Y({ startY: 0, startHeight: 0 }), [B, D] = U(null), x = e !== void 0, E = x ? e : y;
    X(() => {
      const _ = M.current;
      if (_ === null || h)
        return;
      _.style.height = "auto";
      let A = 0, ne = 1 / 0;
      if (c !== void 0 && c > 0) {
        const he = _.rows;
        _.rows = c, A = _.scrollHeight, _.rows = he;
      }
      if (b !== void 0 && b > 0) {
        const he = _.rows;
        _.rows = b, ne = _.scrollHeight, _.rows = he;
      }
      const G = _.scrollHeight, me = Math.min(Math.max(G, A), ne);
      _.style.height = `${me}px`;
    }, [E, c, b, h]), X(() => {
      const _ = M.current;
      _ === null || B === null || (_.style.height = `${B}px`);
    }, [B]);
    const S = f(
      (_) => {
        const A = _.target.value;
        x || w(A), g == null || g(A);
      },
      [x, g]
    ), F = f(
      (_) => {
        k(!0), v == null || v(_);
      },
      [v]
    ), $ = f(
      (_) => {
        k(!1), N == null || N(_);
      },
      [N]
    ), H = f(
      (_) => {
        _.preventDefault();
        const A = M.current;
        if (A === null)
          return;
        P.current = {
          startY: _.clientY,
          startHeight: A.getBoundingClientRect().height
        };
        const ne = (me) => {
          const he = me.clientY - P.current.startY, O = Math.max(0, P.current.startHeight + he);
          D(O);
        }, G = () => {
          document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", G);
        };
        document.addEventListener("mousemove", ne), document.addEventListener("mouseup", G);
      },
      []
    ), Z = u !== void 0 || h;
    return /* @__PURE__ */ L("div", { className: p(ji({}), o), children: [
      /* @__PURE__ */ l(
        "textarea",
        {
          ref: T,
          value: E,
          placeholder: t,
          disabled: i,
          readOnly: s,
          required: r,
          rows: m,
          "aria-label": d,
          "aria-invalid": a,
          "aria-multiline": "true",
          className: p(vi({})),
          onChange: S,
          onFocus: F,
          onBlur: $,
          onKeyDown: I,
          ...V
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: p(
            wi({
              isFocused: j,
              isInvalid: a && !j,
              isDisabled: i
            })
          )
        }
      ),
      Z && /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "flex flex-row items-center gap-2 px-1 pt-3 pb-1",
            h && "pr-[calc(var(--sinch-comp-textarea-size-resize-handle)+4px)]"
          ),
          children: u
        }
      ),
      h && /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "absolute bottom-0 right-0 cursor-ns-resize",
            "w-[var(--sinch-comp-textarea-size-resize-handle)]",
            "h-[var(--sinch-comp-textarea-size-resize-handle)]"
          ),
          onMouseDown: H,
          "aria-hidden": "true",
          children: /* @__PURE__ */ l(
            "svg",
            {
              className: "block pointer-events-none fill-[var(--sinch-comp-textarea-color-default-border-initial)]",
              width: "16",
              height: "16",
              children: /* @__PURE__ */ l("path", { d: "m14.833 4.724-9.61 9.61-.942-.944 9.61-9.609.942.943ZM15.443 10 10.5 14.943 9.557 14 14.5 9.057l.943.943Z" })
            }
          )
        }
      )
    ] });
  }
);
xi.displayName = "Textarea";
const Yo = be(null), yi = () => {
  const o = ue(Yo);
  if (o === null)
    throw new Error("RadioOption must be used within a Radio component");
  return o;
}, Ni = C(
  // Base styles
  "flex box-border w-full",
  {
    variants: {
      direction: {
        column: "flex-col gap-[var(--sinch-comp-radio-gap,8px)]",
        row: "flex-row gap-[var(--sinch-comp-radio-gap,8px)]"
      }
    },
    defaultVariants: {
      direction: "column"
    }
  }
), Ko = R(
  ({
    className: o,
    direction: e = "column",
    name: n,
    value: t,
    defaultValue: a = "",
    invalid: i = !1,
    "aria-label": s,
    onChange: r,
    children: m,
    ...c
  }, b) => {
    const [h, d] = U(a), u = Y(/* @__PURE__ */ new Map()), g = t !== void 0, v = g ? t : h, N = f(
      (j) => {
        g || d(j), r == null || r(j);
      },
      [g, r]
    ), I = f(
      (j, k) => {
        u.current.set(j, k);
      },
      []
    ), V = f((j) => {
      u.current.delete(j);
    }, []), z = f(() => Array.from(u.current.entries()).filter(([, j]) => j.getAttribute("aria-disabled") !== "true").map(([j, k]) => ({ value: j, element: k })), []), y = f(() => {
      const j = z();
      if (j.length === 0)
        return;
      const k = j.findIndex((P) => P.value === v), M = k < 0 ? 0 : (k + 1) % j.length, T = j[M];
      T.element.focus(), N(T.value);
    }, [v, z, N]), w = f(() => {
      const j = z();
      if (j.length === 0)
        return;
      const k = j.findIndex((P) => P.value === v), M = k < 0 ? j.length - 1 : (k - 1 + j.length) % j.length, T = j[M];
      T.element.focus(), N(T.value);
    }, [v, z, N]);
    return /* @__PURE__ */ l(
      Yo.Provider,
      {
        value: {
          name: n,
          value: v,
          invalid: i,
          onChange: N,
          registerOption: I,
          unregisterOption: V,
          focusNextOption: y,
          focusPrevOption: w
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: b,
            role: "radiogroup",
            "aria-label": s,
            "aria-invalid": i || void 0,
            "data-name": n,
            "data-value": v,
            className: p(Ni({ direction: e }), o),
            ...c,
            children: m
          }
        )
      }
    );
  }
);
Ko.displayName = "Radio";
const Vi = C(
  // Base styles
  [
    "flex flex-row box-border w-full min-h-[24px]",
    "outline-none cursor-pointer select-none"
  ],
  {
    variants: {
      isDisabled: {
        true: "cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      isDisabled: !1
    }
  }
), zi = C(
  // Base styles for the radio circle
  [
    "relative w-[18px] h-[18px]",
    "rounded-full",
    "border border-solid transition-colors duration-100",
    "box-border"
  ],
  {
    variants: {
      isChecked: {
        true: [
          "bg-[var(--sinch-comp-radio-color-default-background-initial)]",
          "border-[var(--sinch-comp-radio-color-checked-border-initial)]"
        ],
        false: [
          "bg-[var(--sinch-comp-radio-color-default-background-initial)]",
          "border-[var(--sinch-comp-radio-color-default-border-initial)]"
        ]
      },
      isInvalid: {
        true: "border-[var(--sinch-comp-radio-color-invalid-border-initial)]",
        false: ""
      },
      isDisabled: {
        true: [
          "bg-[var(--sinch-comp-radio-color-disabled-background-initial)]",
          "border-[var(--sinch-comp-radio-color-disabled-border-initial)]"
        ],
        false: ""
      }
    },
    compoundVariants: [
      // Checked + Disabled
      {
        isChecked: !0,
        isDisabled: !0,
        className: [
          "border-[var(--sinch-comp-radio-color-checked-disabled-border-initial)]"
        ]
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), Ii = C(
  // Focus ring styles
  [
    "absolute inset-[-2px] pointer-events-none",
    "border-2 border-[var(--sinch-comp-radio-color-default-outline-focus)]",
    "rounded-full",
    "transition-opacity duration-100 opacity-0"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1
    }
  }
), Ci = C(
  // Knob (inner circle) styles
  [
    "absolute w-[10px] h-[10px]",
    "inset-0 m-auto",
    "rounded-full",
    "transition-opacity duration-100",
    "pointer-events-none",
    "bg-[var(--sinch-comp-radio-color-checked-knob-initial)]"
  ],
  {
    variants: {
      isVisible: {
        true: "opacity-100",
        false: "opacity-0"
      },
      isDisabled: {
        true: "bg-[var(--sinch-comp-radio-color-checked-disabled-knob-initial)]",
        false: ""
      }
    },
    defaultVariants: {
      isVisible: !1,
      isDisabled: !1
    }
  }
), Jo = R(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    text: t,
    "aria-label": a,
    "aria-labelledby": i,
    onKeyDown: s,
    ...r
  }, m) => {
    const c = yi(), [b, h] = U(!1), d = Y(null), u = c.value === e, g = c.invalid, v = f(
      (k) => {
        d.current = k, k !== null ? c.registerOption(e, k) : c.unregisterOption(e), m !== null && (typeof m == "function" ? m(k) : m.current = k);
      },
      [c, m, e]
    ), N = f(() => {
      n || c.onChange(e);
    }, [c, n, e]), I = f(
      (k) => {
        switch (k.code) {
          case "ArrowUp":
          case "ArrowLeft":
            k.preventDefault(), c.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            k.preventDefault(), c.focusNextOption();
            break;
          case "Space":
            k.preventDefault(), n || c.onChange(e);
            break;
        }
        s == null || s(k);
      },
      [c, n, s, e]
    ), V = f(() => {
      h(!0);
    }, []), z = f(() => {
      h(!1);
    }, []), y = () => n ? "" : u && !g ? [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-checked-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-checked-border-active)]"
    ].join(" ") : g ? [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-invalid-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-invalid-border-active)]"
    ].join(" ") : [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-default-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-default-border-active)]"
    ].join(" "), w = () => n || !u ? "" : [
      "group-hover:bg-[var(--sinch-comp-radio-color-checked-knob-hover)]",
      "group-active:bg-[var(--sinch-comp-radio-color-checked-knob-active)]"
    ].join(" "), j = () => n && u ? "text-[var(--sinch-comp-radio-color-checked-disabled-label-initial)]" : n ? "text-[var(--sinch-comp-radio-color-disabled-label-initial)]" : g ? "text-[var(--sinch-comp-radio-color-invalid-label-initial)]" : "text-[var(--sinch-comp-radio-color-default-label-initial)]";
    return /* @__PURE__ */ L(
      "div",
      {
        ref: v,
        role: "radio",
        "aria-checked": u,
        "aria-disabled": n,
        "aria-label": a ?? t,
        "aria-labelledby": i,
        tabIndex: n ? -1 : 0,
        className: p(
          Vi({ isDisabled: n }),
          "group",
          o
        ),
        onClick: N,
        onKeyDown: I,
        onFocus: V,
        onBlur: z,
        ...r,
        children: [
          /* @__PURE__ */ L("div", { className: "relative w-[18px] h-[18px] mt-[3px] flex-shrink-0 self-start", children: [
            /* @__PURE__ */ l("div", { className: p(Ii({ isFocused: b })) }),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  zi({
                    isChecked: u,
                    isInvalid: g && !u,
                    isDisabled: n
                  }),
                  y()
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  Ci({
                    isVisible: u,
                    isDisabled: n
                  }),
                  w()
                )
              }
            )
          ] }),
          t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-1 self-center pl-2",
                "font-[var(--sinch-comp-radio-font-label)]",
                j(),
                n ? "cursor-default" : "cursor-pointer"
              ),
              children: t
            }
          )
        ]
      }
    );
  }
);
Jo.displayName = "RadioOption";
const pr = Object.assign(Ko, {
  Option: Jo
}), Mi = C(
  // Base styles
  "block w-full",
  {
    variants: {
      disabled: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      disabled: !1
    }
  }
), Di = C(
  // Label text styles
  [
    "font-[var(--sinch-comp-field-font-label)]",
    "overflow-hidden text-ellipsis whitespace-nowrap"
  ],
  {
    variants: {
      disabled: {
        true: "text-[var(--sinch-comp-field-color-disabled-label-initial)]",
        false: "text-[var(--sinch-comp-field-color-default-label-initial)]"
      }
    },
    defaultVariants: {
      disabled: !1
    }
  }
), Ti = C(
  // Optional text styles
  [
    "font-[var(--sinch-comp-field-font-optional)]",
    "overflow-hidden text-ellipsis whitespace-nowrap",
    "flex-1 text-right"
  ],
  {
    variants: {
      disabled: {
        true: "text-[var(--sinch-comp-field-color-disabled-optional-initial)]",
        false: "text-[var(--sinch-comp-field-color-default-optional-initial)]"
      }
    },
    defaultVariants: {
      disabled: !1
    }
  }
), Si = C(
  // Additional text styles
  [
    "font-[var(--sinch-comp-field-font-additional)]",
    "overflow-hidden text-ellipsis whitespace-nowrap",
    "flex-1 text-right leading-5 mt-0.5"
  ],
  {
    variants: {
      disabled: {
        true: "text-[var(--sinch-comp-field-color-disabled-additional-initial)]",
        false: "text-[var(--sinch-comp-field-color-default-additional-initial)]"
      }
    },
    defaultVariants: {
      disabled: !1
    }
  }
), Ei = [
  "font-[var(--sinch-comp-field-font-invalid)]",
  "text-[var(--sinch-comp-field-color-invalid-text-initial)]",
  "overflow-hidden text-ellipsis whitespace-nowrap",
  "leading-5 mt-0.5"
], Ai = R(
  ({
    className: o,
    label: e,
    optionalText: n,
    additionalText: t,
    invalidText: a,
    disabled: i = !1,
    tooltip: s,
    children: r,
    htmlFor: m,
    ...c
  }, b) => {
    const h = eo(), d = m ?? h, u = Y(null), g = e !== void 0 || n !== void 0, v = f(() => {
      const N = u.current;
      if (N !== null) {
        const I = N.querySelector(
          'input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        I == null || I.focus();
      }
    }, []);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: b,
        className: p(Mi({ disabled: i }), o),
        ...c,
        children: /* @__PURE__ */ L("div", { className: "flex flex-col w-full", children: [
          g && /* @__PURE__ */ L("div", { className: "flex items-baseline h-6 mb-0.5", children: [
            e !== void 0 && /* @__PURE__ */ l(
              "label",
              {
                htmlFor: d,
                className: p(Di({ disabled: i }), "cursor-pointer"),
                onClick: v,
                children: e
              }
            ),
            s !== void 0 && /* @__PURE__ */ l("div", { className: "self-center mx-2 flex", children: s }),
            n !== void 0 && /* @__PURE__ */ l("span", { className: p(Ti({ disabled: i })), children: n })
          ] }),
          /* @__PURE__ */ l("div", { ref: u, children: r }),
          (a !== void 0 || t !== void 0) && /* @__PURE__ */ L("div", { className: "flex items-baseline", children: [
            a !== void 0 && /* @__PURE__ */ l("div", { className: p(Ei), children: a }),
            t !== void 0 && /* @__PURE__ */ l("div", { className: p(Si({ disabled: i })), children: t })
          ] })
        ] })
      }
    );
  }
);
Ai.displayName = "Field";
const Oi = C(
  // Base styles matching template.html #image styles
  [
    "inline-block",
    "pointer-events-none",
    "object-contain"
  ].join(" "),
  {
    variants: {
      size: {
        xs: "w-4 h-4",
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Li = R(
  ({ className: o, code: e, size: n = "md", flagUrlTemplate: t, alt: a, loading: i = "lazy", style: s, ...r }, m) => {
    const c = J(() => e === "" || e === null || e === void 0 ? "" : t !== void 0 && t !== "" ? t.replace("%s", e) : "", [e, t]);
    return c === "" ? null : /* @__PURE__ */ l(
      "img",
      {
        ref: m,
        src: c,
        alt: a ?? e,
        loading: i,
        className: p(Oi({ size: n }), o),
        style: {
          width: "var(--sinch-global-size-icon)",
          height: "var(--sinch-global-size-icon)",
          ...s
        },
        ...r
      }
    );
  }
);
Li.displayName = "Flag";
const ye = 7, Ce = Math.floor(ye / 2), To = 0, uo = ye - 1, Xo = 1, qe = uo - 1, Pi = (o, e, n) => o === Xo && e > Ce || o === qe && e <= n - qe, Ri = C([
  "flex",
  "justify-center",
  "items-center",
  "gap-2",
  "h-6"
]), lo = C(
  [
    // Reset and base
    "relative",
    "flex",
    "justify-center",
    "items-center",
    "min-w-6",
    "h-6",
    "cursor-pointer",
    "rounded-[var(--sinch-comp-pagination-shape-radius)]",
    "select-none",
    "outline-none",
    // Focus ring
    "focus-visible:before:content-['']",
    "focus-visible:before:absolute",
    "focus-visible:before:inset-[-3px]",
    "focus-visible:before:border-2",
    "focus-visible:before:border-solid",
    "focus-visible:before:border-[var(--sinch-comp-pagination-color-default-outline-focus)]",
    "focus-visible:before:rounded-[calc(var(--sinch-comp-pagination-shape-radius)+3px)]",
    "focus-visible:before:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        arrow: [
          "text-[var(--sinch-comp-pagination-color-default-icon-default)]",
          "enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]",
          "disabled:text-[var(--sinch-comp-pagination-color-disabled-icon-initial)]",
          "disabled:cursor-default"
        ],
        page: [
          "px-1",
          "font-[var(--sinch-comp-pagination-font-default-page-number)]",
          "text-[var(--sinch-comp-pagination-color-default-text-initial)]",
          "bg-[var(--sinch-comp-pagination-color-default-background-initial)]",
          "enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]"
        ],
        pageActive: [
          "px-1",
          "font-[var(--sinch-comp-pagination-font-checked-page-number)]",
          "text-[var(--sinch-comp-pagination-color-default-text-initial)]",
          "bg-[var(--sinch-comp-pagination-color-checked-background-initial)]",
          "pointer-events-none",
          "cursor-default"
        ]
      }
    },
    defaultVariants: {
      variant: "page"
    }
  }
), Fi = R(
  ({ className: o, value: e, max: n, onChange: t, ariaLabel: a = "Pagination", ...i }, s) => {
    const r = e - 1, m = Math.max(0, n), c = J(() => Math.min(
      Math.max(0, r - Ce),
      Math.max(0, m - ye)
    ), [r, m]), b = J(() => Array.from({ length: ye }, (V, z) => {
      let y = !1;
      r < 3 ? y = r === z : r >= m - Ce ? y = z + c === r : y = z === Ce;
      const w = z === To ? 1 : z === uo ? m : z + 1 + c, j = m > ye && Pi(z, r, m);
      return {
        index: z,
        pageNumber: w,
        isActive: y,
        isEllipsis: j,
        isHidden: z >= m
      };
    }), [r, m, c]), h = f(
      (V) => Math.max(0, Math.min(m - 1, V)) + 1,
      [m]
    ), d = f(
      (V) => {
        let z;
        V === To ? z = 0 : V === uo ? z = m - 1 : V === Xo && m > ye && r > Ce ? z = Math.floor(r / 2) : V === qe && m > ye && r <= m - qe ? z = Math.floor((m - r) / 2 + r) : z = V + Math.min(
          Math.max(0, r - Ce),
          Math.max(0, m - ye)
        ), t == null || t(h(z));
      },
      [r, m, t, h]
    ), u = f(() => {
      t == null || t(h(Math.max(r - 1, 0)));
    }, [r, t, h]), g = f(() => {
      t == null || t(h(Math.min(r + 1, m - 1)));
    }, [r, m, t, h]), v = r < 0 || r >= m, N = v || r === 0, I = v || r === m - 1;
    return /* @__PURE__ */ l(
      "nav",
      {
        ref: s,
        "aria-label": a,
        className: p("inline-block align-middle outline-none", o),
        ...i,
        children: /* @__PURE__ */ L("div", { className: Ri(), children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": "Go back",
              disabled: N,
              onClick: u,
              className: lo({ variant: "arrow" }),
              children: /* @__PURE__ */ l(oe, { name: "fa-angle-left", iconsVersion: "2", size: "md" })
            }
          ),
          b.map((V) => V.isHidden ? null : /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": `Go to page ${V.pageNumber}`,
              "aria-current": V.isActive ? "page" : void 0,
              "aria-hidden": V.isEllipsis ? !0 : void 0,
              disabled: V.isEllipsis,
              onClick: () => d(V.index),
              className: lo({
                variant: V.isActive ? "pageActive" : "page"
              }),
              children: V.isEllipsis ? "..." : /* @__PURE__ */ l("span", { children: V.pageNumber })
            },
            V.index
          )),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": "Go forward",
              disabled: I,
              onClick: g,
              className: lo({ variant: "arrow" }),
              children: /* @__PURE__ */ l(oe, { name: "fa-angle-right", iconsVersion: "2", size: "md" })
            }
          )
        ] })
      }
    );
  }
);
Fi.displayName = "Pagination";
const $i = R(
  ({
    className: o,
    text: e,
    orientation: n = "top",
    textAlign: t,
    width: a,
    isOpen: i,
    onShow: s,
    onHide: r,
    style: m,
    ...c
  }, b) => {
    const h = a !== void 0 ? { "--sinch-global-size-icon": `${a}px` } : { "--sinch-global-size-icon": "18px" };
    return /* @__PURE__ */ l(
      to,
      {
        ref: b,
        text: e,
        orientation: n,
        textAlign: t,
        type: "fast",
        isOpen: i,
        onShow: s,
        onHide: r,
        className: p("inline-flex", o),
        style: m,
        ...c,
        children: /* @__PURE__ */ l(
          oe,
          {
            name: "circle-question",
            iconsVersion: "2",
            className: "text-foreground-muted cursor-help",
            style: h
          }
        )
      }
    );
  }
);
$i.displayName = "HelpTooltip";
const _i = [
  "grid",
  // XL breakpoint (default): 12 columns
  "grid-cols-[repeat(var(--sinch-comp-grid-columns-xl),minmax(0,1fr))]",
  "gap-[var(--sinch-comp-grid-gutter-xl)]",
  "p-[var(--sinch-comp-grid-margin-xl)]",
  // L breakpoint (max-width: 1439px)
  "max-[1439px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-l),minmax(0,1fr))]",
  "max-[1439px]:gap-[var(--sinch-comp-grid-gutter-l)]",
  "max-[1439px]:p-[var(--sinch-comp-grid-margin-l)]",
  // M breakpoint (max-width: 1023px)
  "max-[1023px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-m),minmax(0,1fr))]",
  "max-[1023px]:gap-[var(--sinch-comp-grid-gutter-m)]",
  "max-[1023px]:p-[var(--sinch-comp-grid-margin-m)]",
  // S breakpoint (max-width: 767px)
  "max-[767px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-s),minmax(0,1fr))]",
  "max-[767px]:gap-[var(--sinch-comp-grid-gutter-s)]",
  "max-[767px]:p-[var(--sinch-comp-grid-margin-s)]"
].join(" "), Ui = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      className: p(_i, o),
      ...n,
      children: e
    }
  )
);
Ui.displayName = "Grid";
const Hi = R(
  ({ className: o, s: e, m: n, l: t, xl: a, children: i, ...s }, r) => {
    const m = J(() => {
      const c = ["block"];
      return a !== void 0 ? c.push(`col-span-${a}`) : c.push("col-span-12"), t !== void 0 ? c.push(`max-[1439px]:col-span-${t}`) : c.push("max-[1439px]:col-span-12"), n !== void 0 ? c.push(`max-[1023px]:col-span-${n}`) : c.push("max-[1023px]:col-span-8"), e !== void 0 ? c.push(`max-[767px]:col-span-${e}`) : c.push("max-[767px]:col-span-4"), c.join(" ");
    }, [e, n, t, a]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        className: p(m, o),
        ...s,
        children: i
      }
    );
  }
);
Hi.displayName = "GridItem";
const Bi = C(
  // Base styles
  "relative block overflow-hidden",
  {
    variants: {
      card: {
        true: [
          "p-4",
          "bg-surface-primary",
          "rounded-lg",
          "border",
          "border-border-subtle"
        ],
        false: ""
      }
    },
    defaultVariants: {
      card: !1
    }
  }
), Gi = R(
  ({ className: o, card: e = !1, children: n, ...t }, a) => /* @__PURE__ */ l(
    "div",
    {
      ref: a,
      className: p(Bi({ card: e }), o),
      role: "status",
      "aria-label": "Loading",
      ...t,
      children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-4", children: n })
    }
  )
);
Gi.displayName = "Skeleton";
const Wi = C(
  // Base styles - shimmer animation
  [
    "relative",
    "block",
    "overflow-hidden",
    "bg-border-subtle",
    // Shimmer overlay
    "before:absolute",
    "before:inset-0",
    "before:translate-x-[-100%]",
    "before:animate-[shimmer_2s_infinite]",
    "before:bg-gradient-to-r",
    "before:from-transparent",
    "before:via-surface-tertiary",
    "before:to-transparent"
  ],
  {
    variants: {
      size: {
        xs: "h-xs rounded-xs",
        sm: "h-sm rounded-sm",
        md: "h-md rounded-md",
        lg: "h-lg rounded-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Zi = R(
  ({ className: o, size: e = "md", width: n, style: t, ...a }, i) => {
    const s = n !== void 0 ? { ...t, width: typeof n == "number" ? `${n}px` : n } : t;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        className: p(Wi({ size: e }), o),
        style: s,
        "aria-hidden": "true",
        ...a
      }
    );
  }
);
Zi.displayName = "SkeletonItem";
const qi = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      role: "list",
      className: p(
        // Base styles
        "block h-full",
        o
      ),
      ...n,
      children: /* @__PURE__ */ l("div", { className: "flex h-full w-full flex-col overflow-y-auto", children: e })
    }
  )
);
qi.displayName = "List";
const Yi = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      role: "listitem",
      className: p(
        // Base styles
        "block outline-none",
        o
      ),
      ...n,
      children: /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "box-border h-full w-full overflow-hidden",
            "py-2",
            // Background colors using component tokens
            "bg-[var(--sinch-comp-list-color-default-background-initial)]",
            "hover:bg-[var(--sinch-comp-list-color-default-background-hover)]",
            // Border - applied to all items, last:border-b-0 removes from last
            "border-b border-[var(--sinch-comp-list-color-default-border-initial)]",
            "last:border-b-0"
          ),
          children: e
        }
      )
    }
  )
);
Yi.displayName = "ListItem";
const Ki = /\uFE0F/g, Ji = "‍", Xi = (o) => o.indexOf(Ji) < 0 ? o.replace(Ki, "") : o;
function Qi(o) {
  const e = [];
  let n = 0, t = 0, a = 0;
  for (; a < o.length; )
    n = o.charCodeAt(a++), t !== 0 ? (e.push((65536 + (t - 55296 << 10) + (n - 56320)).toString(16)), t = 0) : n > 55296 && n <= 56319 ? t = n : e.push(n.toString(16));
  return e;
}
const ea = (o, e) => {
  if (e == null || e.length === 0 || o === null || o === void 0)
    return "";
  let n = Qi(Xi(e)).join("-");
  return n === "1f441-fe0f-200d-1f5e8-fe0f" && (n = "1f441-200d-1f5e8"), o.replace("%s", n);
}, oa = C(
  // Base styles - display:contents to not affect layout
  "contents",
  {
    variants: {
      size: {
        xs: "[--emoji-size:16px]",
        sm: "[--emoji-size:20px]",
        md: "[--emoji-size:24px]",
        lg: "[--emoji-size:32px]",
        xl: "[--emoji-size:48px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Qo = R(
  ({ className: o, char: e, baseUrl: n, size: t, verticalAlign: a, customSize: i, style: s, ...r }, m) => {
    const c = J(() => ea(n, e), [n, e]), b = i ?? "var(--emoji-size, 24px)";
    return /* @__PURE__ */ l(
      "span",
      {
        ref: m,
        className: p(oa({ size: t }), o),
        style: s,
        ...r,
        children: c !== "" && /* @__PURE__ */ l(
          "img",
          {
            src: c,
            alt: e,
            loading: "lazy",
            style: {
              width: b,
              height: b,
              verticalAlign: a ?? "initial",
              pointerEvents: "none"
            }
          }
        )
      }
    );
  }
);
Qo.displayName = "Emoji";
const en = be(null);
function na() {
  return ue(en);
}
const ta = C(
  // Base styles - flex container
  "inline-flex",
  {
    variants: {},
    defaultVariants: {}
  }
), ia = R(
  ({ className: o, children: e, size: n = "m", variant: t = "secondary", ...a }, i) => {
    const s = Ze.count(e);
    return /* @__PURE__ */ l(en.Provider, { value: { size: n, variant: t, itemCount: s }, children: /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        role: "group",
        className: p(ta(), o),
        ...a,
        children: Ze.map(e, (r, m) => oo(r) ? ho(r, {
          _index: m
        }) : r)
      }
    ) });
  }
);
ia.displayName = "ButtonGroup";
function aa(o) {
  return {
    primary: "var(--sinch-comp-button-color-primary-default-text-initial)",
    secondary: "var(--sinch-comp-button-color-secondary-default-text-initial)",
    "subtle-primary": "var(--sinch-comp-button-color-subtle-primary-default-text-initial)",
    "subtle-secondary": "var(--sinch-comp-button-color-subtle-secondary-default-text-initial)",
    "cta-primary": "var(--sinch-comp-button-color-cta-primary-default-text-initial)",
    "cta-secondary": "var(--sinch-comp-button-color-cta-secondary-default-text-initial)",
    destructive: "var(--sinch-comp-button-color-danger-default-text-initial)"
  }[o];
}
function la(o) {
  return {
    xs: "var(--sinch-comp-button-shape-radius-size-xs)",
    s: "var(--sinch-comp-button-shape-radius-size-s)",
    m: "var(--sinch-comp-button-shape-radius-size-m)",
    l: "var(--sinch-comp-button-shape-radius-size-l)"
  }[o];
}
const sa = C(
  // Base styles - relative position for the divider
  "relative flex",
  {
    variants: {},
    defaultVariants: {}
  }
), ra = R(
  ({ className: o, _index: e = 0, style: n, ...t }, a) => {
    const i = na(), s = (i == null ? void 0 : i.size) ?? "m", r = (i == null ? void 0 : i.variant) ?? "secondary", m = (i == null ? void 0 : i.itemCount) ?? 1, c = e === 0, b = e === m - 1, h = !c && !b, d = la(s), u = aa(r), g = {
      ...n,
      // Set CSS custom properties for the divider
      "--button-group-item-divider-color": u
    };
    return /* @__PURE__ */ l(
      "div",
      {
        className: p(
          sa(),
          // Add divider pseudo-element for non-first items
          !c && [
            "before:absolute before:left-0 before:top-[10%] before:bottom-[10%]",
            "before:w-px before:-translate-x-[0.5px]",
            "before:bg-[var(--button-group-item-divider-color)]",
            "before:opacity-30 before:pointer-events-none before:z-10"
          ],
          o
        ),
        style: g,
        children: /* @__PURE__ */ l(
          re,
          {
            ref: a,
            variant: r,
            size: s,
            className: p(
              // Override border radius based on position
              "!rounded-none",
              c && "!rounded-l-[var(--button-group-item-radius)]",
              b && "!rounded-r-[var(--button-group-item-radius)]",
              // Remove inner borders for connected appearance
              !c && "!border-l-0",
              !b && "!border-r-0",
              h && "!border-l-0 !border-r-0"
            ),
            style: {
              "--button-group-item-radius": d
            },
            ...t
          }
        )
      }
    );
  }
);
ra.displayName = "ButtonGroupItem";
const on = be({}), ma = C(
  // Base styles for the outer container
  "flex",
  {
    variants: {},
    defaultVariants: {}
  }
), ca = C(
  // Base styles for the inner card
  [
    "flex",
    "flex-col",
    "flex-1",
    "overflow-hidden",
    "transition-all",
    "duration-150",
    "rounded-[var(--sinch-comp-card-v2-shape-radius)]",
    "border",
    "border-[var(--sinch-comp-card-v2-color-default-border-initial)]",
    "bg-[var(--sinch-comp-card-v2-color-default-background-initial)]",
    "shadow-[var(--sinch-comp-card-v2-shadow-initial)]"
  ],
  {
    variants: {
      clickable: {
        true: "cursor-pointer",
        false: ""
      },
      selected: {
        true: [
          "bg-[var(--sinch-comp-card-v2-color-selected-background-initial)]",
          "border-[var(--sinch-comp-card-v2-color-selected-border-initial)]",
          "cursor-pointer"
        ],
        false: ""
      },
      disabled: {
        true: [
          "shadow-[var(--sinch-comp-card-v2-shadow-disabled)]",
          "bg-[var(--sinch-comp-card-v2-color-default-background-disabled)]",
          "border-[var(--sinch-comp-card-v2-color-default-border-disabled)]",
          "cursor-not-allowed"
        ],
        false: ""
      }
    },
    compoundVariants: [
      // Clickable + not disabled - hover states
      {
        clickable: !0,
        disabled: !1,
        className: [
          "hover:bg-[var(--sinch-comp-card-v2-color-default-background-hover)]",
          "hover:border-[var(--sinch-comp-card-v2-color-default-border-hover)]",
          "hover:shadow-[var(--sinch-comp-card-v2-shadow-hover)]",
          "active:bg-[var(--sinch-comp-card-v2-color-default-background-active)]",
          "active:border-[var(--sinch-comp-card-v2-color-default-border-active)]",
          "active:shadow-[var(--sinch-comp-card-v2-shadow-active)]"
        ]
      },
      // Selected + not disabled - hover/active states
      {
        selected: !0,
        disabled: !1,
        className: [
          "hover:bg-[var(--sinch-comp-card-v2-color-selected-background-hover)]",
          "hover:border-[var(--sinch-comp-card-v2-color-selected-border-hover)]",
          "active:bg-[var(--sinch-comp-card-v2-color-selected-background-active)]",
          "active:border-[var(--sinch-comp-card-v2-color-selected-border-active)]"
        ]
      },
      // Selected + disabled
      {
        selected: !0,
        disabled: !0,
        className: [
          "bg-[var(--sinch-comp-card-v2-color-selected-background-disabled)]",
          "border-[var(--sinch-comp-card-v2-color-selected-border-disabled)]"
        ]
      }
    ],
    defaultVariants: {
      clickable: !1,
      selected: !1,
      disabled: !1
    }
  }
), da = R(
  ({
    className: o,
    disabled: e = !1,
    selected: n = !1,
    clickable: t,
    onClick: a,
    media: i,
    title: s,
    content: r,
    footer: m,
    children: c,
    ...b
  }, h) => {
    const d = t ?? !!a, u = (y) => {
      if (e) {
        y.stopPropagation(), y.preventDefault();
        return;
      }
      a == null || a(y);
    }, g = d ? "button" : void 0, v = d ? 0 : void 0, N = !!i, I = !!s, V = !!r || !!c, z = !!m;
    return /* @__PURE__ */ l(on.Provider, { value: { disabled: e, selected: n }, children: /* @__PURE__ */ l(
      "div",
      {
        ref: h,
        className: p(ma(), o),
        ...b,
        children: /* @__PURE__ */ L(
          "div",
          {
            role: g,
            tabIndex: v,
            className: p(
              ca({ clickable: d, selected: n, disabled: e })
            ),
            onClick: d ? u : void 0,
            onKeyDown: d ? (y) => {
              (y.key === "Enter" || y.key === " ") && (y.preventDefault(), u(y));
            } : void 0,
            children: [
              N && /* @__PURE__ */ l("div", { className: "block overflow-hidden", children: i }),
              /* @__PURE__ */ L("div", { className: "flex flex-col flex-1 self-stretch gap-2 p-4", children: [
                I && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 self-stretch", children: s }),
                V && /* @__PURE__ */ l("div", { className: "flex gap-[10px] self-stretch", children: /* @__PURE__ */ l(
                  "div",
                  {
                    className: p(
                      "max-w-full font-[var(--sinch-comp-card-v2-font-description)]",
                      !e && !n && "text-[var(--sinch-comp-card-v2-color-default-description-initial)]",
                      n && !e && "text-[var(--sinch-comp-card-v2-color-selected-description-initial)]",
                      e && !n && "text-[var(--sinch-comp-card-v2-color-default-description-disabled)]",
                      e && n && "text-[var(--sinch-comp-card-v2-color-selected-description-disabled)]"
                    ),
                    children: r ?? c
                  }
                ) }),
                z && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-4 self-stretch mt-auto", children: m })
              ] })
            ]
          }
        )
      }
    ) });
  }
);
da.displayName = "Card";
const ba = R(
  ({
    className: o,
    text: e,
    orientation: n = "horizontal",
    ellipsis: t = !1,
    icon: a,
    children: i,
    ...s
  }, r) => {
    const { disabled: m, selected: c } = ue(on), b = n === "vertical", h = () => m && c ? "var(--sinch-comp-card-v2-color-selected-icon-disabled)" : m ? "var(--sinch-comp-card-v2-color-default-icon-disabled)" : c ? "var(--sinch-comp-card-v2-color-selected-icon-initial)" : "var(--sinch-comp-card-v2-color-default-icon-initial)", d = () => m && c ? "var(--sinch-comp-card-v2-color-selected-title-disabled)" : m ? "var(--sinch-comp-card-v2-color-default-title-disabled)" : "var(--sinch-comp-card-v2-color-default-title-initial)";
    return /* @__PURE__ */ L(
      "div",
      {
        ref: r,
        className: p(
          "flex items-center",
          b ? "flex-col items-start" : "flex-row",
          o
        ),
        ...s,
        children: [
          a && /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "flex",
                b ? "mb-2" : "mr-2"
              ),
              style: {
                "--sinch-global-color-icon": h(),
                "--sinch-global-size-icon": "var(--sinch-comp-card-v2-size-icon)"
              },
              children: a
            }
          ),
          /* @__PURE__ */ l(
            no,
            {
              type: "m",
              ellipsis: t,
              className: "max-w-full font-[var(--sinch-comp-card-v2-font-title)]",
              style: { color: d() },
              children: e ?? i
            }
          )
        ]
      }
    );
  }
);
ba.displayName = "CardTitle";
const ua = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      className: p("block", o),
      ...n,
      children: /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "h-full",
            "py-5",
            "box-border",
            "bg-[var(--sinch-comp-card-color-default-background-initial)]",
            "rounded-[var(--sinch-comp-card-shape-radius)]",
            "border",
            "border-[var(--sinch-comp-card-color-default-border-initial)]"
          ),
          children: /* @__PURE__ */ l("div", { className: "overflow-auto h-full box-border px-6 py-1", children: e })
        }
      )
    }
  )
);
ua.displayName = "CardContainer";
const nn = be(null), ha = () => {
  const o = ue(nn);
  if (o === null)
    throw new Error("AccordionItem must be used within an Accordion component");
  return o;
}, pa = C(
  // Base styles
  "flex flex-col box-border w-full h-full",
  {
    variants: {},
    defaultVariants: {}
  }
);
function ga(o) {
  return o.length === 0 ? /* @__PURE__ */ new Set() : new Set(o.split(",").map((e) => e.trim()).filter((e) => e.length > 0));
}
function ka(o) {
  return Array.from(o).join(",");
}
const tn = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    multiple: t = !1,
    onChange: a,
    children: i,
    ...s
  }, r) => {
    const [m, c] = U(n), b = e !== void 0, d = ga(b ? e : m), u = f(
      (g) => {
        let v;
        t ? (v = new Set(d), v.has(g) ? v.delete(g) : v.add(g)) : d.has(g) ? v = /* @__PURE__ */ new Set() : v = /* @__PURE__ */ new Set([g]);
        const N = ka(v);
        b || c(N), a == null || a(N);
      },
      [d, b, t, a]
    );
    return /* @__PURE__ */ l(
      nn.Provider,
      {
        value: {
          expandedItems: d,
          multiple: t,
          toggleItem: u
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: r,
            className: p(pa(), o),
            ...s,
            children: i
          }
        )
      }
    );
  }
);
tn.displayName = "Accordion";
const fa = C(
  // Base styles
  "block outline-none min-h-[48px]",
  {
    variants: {},
    defaultVariants: {}
  }
), ja = C(
  // Wrapper styles
  [
    "flex flex-col relative w-full h-full box-border overflow-hidden",
    "border-b border-[var(--sinch-comp-accordion-color-default-border-initial)]",
    "last:border-b-0"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), va = C(
  // Button styles
  [
    "flex relative items-center gap-2 box-border w-full h-[48px]",
    "px-2 pl-2 pr-1",
    "cursor-pointer",
    "outline-none",
    "bg-transparent border-none",
    "text-left"
  ],
  {
    variants: {
      isDisabled: {
        true: "cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      isDisabled: !1
    }
  }
), wa = C(
  // Status indicator styles
  "w-2 h-2 rounded-full",
  {
    variants: {
      status: {
        success: "bg-[var(--sinch-comp-accordion-color-default-status-success)]",
        warn: "bg-[var(--sinch-comp-accordion-color-default-status-warning)]",
        error: "bg-[var(--sinch-comp-accordion-color-default-status-error)]",
        info: "bg-[var(--sinch-comp-accordion-color-default-status-info)]"
      }
    },
    defaultVariants: {}
  }
), xa = C(
  // Focus ring styles
  [
    "absolute inset-0 pointer-events-none",
    "border-2 border-[var(--sinch-comp-accordion-color-default-outline-focus)]",
    "transition-opacity duration-100 opacity-0"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1
    }
  }
), an = R(
  ({
    className: o,
    value: e,
    label: n,
    optionalText: t,
    status: a,
    disabled: i = !1,
    icon: s,
    children: r,
    ...m
  }, c) => {
    const b = ha(), [h, d] = U(!1), u = Y(null), g = eo(), v = `accordion-content-${g}`, N = `accordion-button-${g}`, I = b.expandedItems.has(e), V = f(() => {
      i || b.toggleItem(e);
    }, [b, i, e]), z = f(
      (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), i || b.toggleItem(e));
      },
      [b, i, e]
    ), y = f(() => {
      d(!0);
    }, []), w = f(() => {
      d(!1);
    }, []), j = () => i ? "text-[var(--sinch-comp-accordion-color-disabled-icon-initial)]" : "text-[var(--sinch-comp-accordion-color-default-icon-initial)]", k = () => i ? "text-[var(--sinch-comp-accordion-color-disabled-title-initial)]" : "text-[var(--sinch-comp-accordion-color-default-title-initial)]", M = () => i ? "text-[var(--sinch-comp-accordion-color-disabled-optional-text-initial)]" : "text-[var(--sinch-comp-accordion-color-default-optional-text-initial)]";
    return /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: p(fa(), o),
        ...m,
        children: /* @__PURE__ */ L("div", { className: p(ja()), children: [
          /* @__PURE__ */ L(
            "button",
            {
              ref: u,
              id: N,
              type: "button",
              "aria-controls": v,
              "aria-expanded": I,
              disabled: i,
              className: p(va({ isDisabled: i })),
              onClick: V,
              onKeyDown: z,
              onFocus: y,
              onBlur: w,
              children: [
                /* @__PURE__ */ l("div", { className: p(xa({ isFocused: h })) }),
                a !== void 0 && /* @__PURE__ */ l("div", { className: "w-[18px] h-6 py-2 pl-0.5 pr-2 box-border", children: /* @__PURE__ */ l("div", { className: p(wa({ status: a })) }) }),
                s !== void 0 && /* @__PURE__ */ l("span", { className: p("pointer-events-none", j()), children: s }),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: p(
                      "flex-1 min-w-0 truncate pointer-events-none",
                      "font-[var(--sinch-comp-accordion-font-title)]",
                      k()
                    ),
                    children: n
                  }
                ),
                t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
                  "span",
                  {
                    className: p(
                      "pointer-events-none",
                      "font-[var(--sinch-comp-accordion-font-optional-text)]",
                      M()
                    ),
                    children: t
                  }
                ),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: p(
                      "pointer-events-none transition-transform duration-[250ms] ease-in-out",
                      j(),
                      I && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l(oe, { name: "fa-chevron-down", iconsVersion: "2" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              id: v,
              role: "region",
              "aria-labelledby": N,
              className: p(
                "grid transition-[grid-template-rows,opacity] duration-[250ms] ease-in-out",
                I ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              ),
              children: /* @__PURE__ */ l("div", { className: "overflow-hidden", children: /* @__PURE__ */ l("div", { className: "px-2 pb-3", children: r }) })
            }
          )
        ] })
      }
    );
  }
);
an.displayName = "AccordionItem";
const gr = Object.assign(tn, {
  Item: an
}), ln = be(null), ya = () => {
  const o = ue(ln);
  if (o === null)
    throw new Error("ProgressStepperItem must be used within a ProgressStepper component");
  return o;
}, Na = C(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), Va = C(
  "flex w-full",
  {
    variants: {},
    defaultVariants: {}
  }
), sn = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    progressValue: t = "",
    "aria-label": a,
    onChange: i,
    children: s,
    ...r
  }, m) => {
    const [c, b] = U(n), h = Y(/* @__PURE__ */ new Map()), d = e !== void 0, u = d ? e : c, g = J(() => {
      const k = [];
      return Ze.forEach(s, (M) => {
        if (oo(M) && typeof M.props == "object" && M.props !== null) {
          const T = M.props;
          typeof T.value == "string" && k.push(T.value);
        }
      }), k;
    }, [s]), v = f(
      (k) => {
        d || b(k), i == null || i(k);
      },
      [d, i]
    ), N = f(
      (k, M) => {
        h.current.set(k, M);
      },
      []
    ), I = f((k) => {
      h.current.delete(k);
    }, []), V = f((k) => {
      const M = g.indexOf(t), T = g.indexOf(k);
      return M < 0 || M < T ? "inactive" : M > T ? "complete" : "incomplete";
    }, [g, t]), z = f((k) => V(k) !== "inactive", [V]), y = f(() => g.filter((k) => z(k)).map((k) => ({
      value: k,
      element: h.current.get(k)
    })).filter((k) => k.element !== void 0), [g, z]), w = f(() => {
      const k = y();
      if (k.length === 0)
        return;
      const M = k.findIndex((B) => B.value === u), T = M < 0 ? 0 : (M + 1) % k.length;
      k[T].element.focus();
    }, [u, y]), j = f(() => {
      const k = y();
      if (k.length === 0)
        return;
      const M = k.findIndex((B) => B.value === u), T = M < 0 ? k.length - 1 : (M - 1 + k.length) % k.length;
      k[T].element.focus();
    }, [u, y]);
    return /* @__PURE__ */ l(
      ln.Provider,
      {
        value: {
          value: u,
          progressValue: t,
          itemValues: g,
          onChange: v,
          registerItem: N,
          unregisterItem: I,
          focusNextItem: w,
          focusPrevItem: j
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: m,
            role: "tablist",
            "aria-label": a,
            "data-value": u,
            "data-progress-value": t,
            className: p(Na(), o),
            ...r,
            children: /* @__PURE__ */ l("div", { className: Va(), children: s })
          }
        )
      }
    );
  }
);
sn.displayName = "ProgressStepper";
const za = C(
  // Base styles
  "flex-1 min-w-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), Ia = C(
  // Base styles
  [
    "relative flex flex-col gap-1 w-full h-full",
    "p-[8px_4px_4px] box-border",
    "rounded-[var(--sinch-comp-progress-stepper-step-shape-radius)]",
    "transition-colors"
  ],
  {
    variants: {
      status: {
        inactive: "cursor-not-allowed",
        incomplete: "cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-background-hover)]",
        complete: "cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-complete-background-hover)]"
      },
      invalid: {
        true: "hover:bg-[var(--sinch-comp-progress-stepper-step-color-invalid-background-hover)]",
        false: ""
      }
    },
    defaultVariants: {
      status: "inactive",
      invalid: !1
    }
  }
), Ca = C(
  [
    "absolute inset-[-2px] pointer-events-none",
    "border-2 border-[var(--sinch-comp-progress-stepper-step-color-outline-focus)]",
    "rounded-[calc(var(--sinch-comp-progress-stepper-step-shape-radius)+2px)]",
    "transition-opacity opacity-0"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1
    }
  }
), Ma = C(
  "h-2 rounded transition-colors",
  {
    variants: {
      status: {
        inactive: "bg-[var(--sinch-comp-progress-stepper-step-color-inactive-progress-background)]",
        incomplete: "bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-background)]",
        complete: "bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-background)]"
      },
      invalid: {
        true: "bg-[var(--sinch-comp-progress-stepper-step-color-invalid-progress-background)]",
        false: ""
      }
    },
    defaultVariants: {
      status: "inactive",
      invalid: !1
    }
  }
), Da = C(
  "w-2 h-2 rounded transition-[width,opacity]",
  {
    variants: {
      status: {
        inactive: "opacity-0",
        incomplete: "bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-bar)] opacity-100",
        complete: "bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-bar)] w-full opacity-100"
      },
      invalid: {
        true: "opacity-0",
        false: ""
      }
    },
    defaultVariants: {
      status: "inactive",
      invalid: !1
    }
  }
), Ta = (o, e, n) => n ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-invalid-label-default)]" : o === "incomplete" && e ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-current-label-default)]" : o === "complete" && e ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-current-label-default)]" : o === "incomplete" ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-label-default)]" : o === "complete" ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-label-default)]" : "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-inactive-label-default)]", Sa = (o, e, n) => n && e ? "[font:var(--sinch-comp-progress-stepper-step-font-invalid-current-label)]" : n ? "[font:var(--sinch-comp-progress-stepper-step-font-invalid-label)]" : o === "incomplete" && e ? "[font:var(--sinch-comp-progress-stepper-step-font-incomplete-current-label)]" : o === "complete" && e ? "[font:var(--sinch-comp-progress-stepper-step-font-complete-current-label)]" : o === "incomplete" ? "[font:var(--sinch-comp-progress-stepper-step-font-incomplete-label)]" : o === "complete" ? "[font:var(--sinch-comp-progress-stepper-step-font-complete-label)]" : "[font:var(--sinch-comp-progress-stepper-step-font-inactive-label)]", Ea = (o, e, n) => {
  const t = n.indexOf(e), a = n.indexOf(o);
  return t < 0 || t < a ? "inactive" : t > a ? "complete" : "incomplete";
}, rn = R(
  ({
    className: o,
    value: e,
    text: n,
    invalid: t = !1,
    onKeyDown: a,
    ...i
  }, s) => {
    const r = ya(), [m, c] = U(!1), b = Y(null), h = r.value === e, d = Ea(e, r.progressValue, r.itemValues), u = d !== "inactive", g = f(
      (z) => {
        b.current = z, z !== null ? r.registerItem(e, z) : r.unregisterItem(e), s !== null && (typeof s == "function" ? s(z) : s.current = z);
      },
      [r, s, e]
    ), v = f(() => {
      u && r.onChange(e);
    }, [r, u, e]), N = f(
      (z) => {
        switch (z.code) {
          case "Enter":
          case "Space":
            z.preventDefault(), u && r.onChange(e);
            break;
          case "ArrowRight":
            z.preventDefault(), r.focusNextItem();
            break;
          case "ArrowLeft":
            z.preventDefault(), r.focusPrevItem();
            break;
        }
        a == null || a(z);
      },
      [r, u, a, e]
    ), I = f(() => {
      c(!0);
    }, []), V = f(() => {
      c(!1);
    }, []);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: g,
        role: "tab",
        "aria-selected": h,
        "aria-invalid": t || void 0,
        tabIndex: u ? 0 : -1,
        "data-status": d,
        "data-checked": h || void 0,
        "data-value": e,
        className: p(za(), o),
        onClick: v,
        onKeyDown: N,
        onFocus: I,
        onBlur: V,
        ...i,
        children: /* @__PURE__ */ L("div", { className: p(Ia({ status: d, invalid: t })), children: [
          /* @__PURE__ */ l("div", { className: p(Ma({ status: d, invalid: t })), children: /* @__PURE__ */ l("div", { className: p(Da({ status: d, invalid: t })) }) }),
          /* @__PURE__ */ L("div", { className: "relative", children: [
            /* @__PURE__ */ l(
              oe,
              {
                name: "triangle-exclamation",
                iconsVersion: "2",
                size: "xs",
                "aria-hidden": !0,
                className: p(
                  "absolute left-0 top-0 pointer-events-none transition-opacity",
                  "[--sinch-global-color-icon:var(--sinch-comp-progress-stepper-step-color-invalid-icon-default)]",
                  t ? "opacity-100" : "opacity-0"
                )
              }
            ),
            /* @__PURE__ */ l(
              "span",
              {
                className: p(
                  "flex-shrink min-w-0 transition-transform pr-6",
                  "text-[color:var(--sinch-global-color-text)]",
                  Ta(d, h, t),
                  Sa(d, h, t),
                  t ? "translate-x-6" : "translate-x-0"
                ),
                children: n
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: p(Ca({ isFocused: m })) })
        ] })
      }
    );
  }
);
rn.displayName = "ProgressStepperItem";
const kr = Object.assign(sn, {
  Item: rn
}), Aa = C(
  // Base styles matching template.html #wrapper styles
  [
    "flex",
    "flex-row",
    "items-start",
    "py-3",
    "px-4",
    "box-border",
    "min-h-[48px]",
    "min-w-[148px]",
    "rounded-[var(--sinch-comp-file-status-shape-radius)]"
  ],
  {
    variants: {
      type: {
        pending: "bg-[var(--sinch-comp-file-status-color-pending-background)]",
        loading: "bg-[var(--sinch-comp-file-status-color-loading-background)]",
        progress: "bg-[var(--sinch-comp-file-status-color-progress-background)]",
        success: "bg-[var(--sinch-comp-file-status-color-success-background)]",
        error: "bg-[var(--sinch-comp-file-status-color-error-background)]"
      }
    },
    defaultVariants: {
      type: "pending"
    }
  }
), Oa = {
  pending: "var(--sinch-comp-file-status-color-pending-icon)",
  loading: "var(--sinch-comp-file-status-color-loading-icon)",
  progress: "var(--sinch-comp-file-status-color-progress-icon)",
  success: "var(--sinch-comp-file-status-color-success-icon)",
  error: "var(--sinch-comp-file-status-color-error-icon)"
}, La = {
  pending: "var(--sinch-comp-file-status-color-pending-text)",
  loading: "var(--sinch-comp-file-status-color-loading-text)",
  progress: "var(--sinch-comp-file-status-color-progress-text)",
  success: "var(--sinch-comp-file-status-color-success-text)",
  error: "var(--sinch-comp-file-status-color-error-text)"
}, Pa = {
  pending: "fa-clipboard-question",
  loading: null,
  // Uses Spinner instead
  progress: "fa-file-lines",
  success: "circle-check",
  error: "octagon-exclamation"
}, Ra = R(
  ({ className: o, type: e = "pending", filename: n, content: t, action: a, ...i }, s) => {
    const r = Oa[e], m = La[e], c = Pa[e], b = t != null;
    return /* @__PURE__ */ L(
      "div",
      {
        ref: s,
        className: p(Aa({ type: e }), o),
        ...i,
        children: [
          e === "loading" ? /* @__PURE__ */ l(go, { size: "m", style: { color: r } }) : /* @__PURE__ */ l(
            oe,
            {
              name: c,
              iconsVersion: "2",
              size: "md",
              style: { color: r }
            }
          ),
          /* @__PURE__ */ L("div", { className: "flex flex-col gap-2 flex-1 min-w-0 min-h-[24px] ml-4", children: [
            /* @__PURE__ */ l(
              no,
              {
                type: "m",
                ellipsis: !0,
                emphasized: b,
                style: { color: m },
                children: n
              }
            ),
            t
          ] }),
          a && /* @__PURE__ */ l("div", { className: "flex gap-1 h-8 -mt-1 -mb-1", children: a })
        ]
      }
    );
  }
);
Ra.displayName = "FileStatus";
const Fa = R(
  ({ events: o, className: e, children: n, ...t }, a) => {
    const i = Y(null), s = f(
      (r) => {
        i.current = r, typeof a == "function" ? a(r) : a !== null && (a.current = r);
      },
      [a]
    );
    return X(() => {
      const r = i.current;
      if (r === null) return;
      const m = (c) => {
        c.stopPropagation();
      };
      for (const c of o)
        r.addEventListener(c, m);
      return () => {
        for (const c of o)
          r.removeEventListener(c, m);
      };
    }, [o]), /* @__PURE__ */ l(
      "div",
      {
        ref: s,
        className: p("contents", e),
        ...t,
        children: n
      }
    );
  }
);
Fa.displayName = "StopEvents";
const mn = be(null), cn = () => {
  const o = ue(mn);
  if (o === null)
    throw new Error("TabsOption must be used within a Tabs component");
  return o;
}, $a = C(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), _a = C(
  // Wrapper styles
  [
    "flex",
    "w-full",
    "h-[40px]",
    "border-b",
    "border-[var(--sinch-comp-tab-color-default-border-initial)]",
    "box-border"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), jo = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    "aria-label": t,
    onChange: a,
    children: i,
    ...s
  }, r) => {
    const [m, c] = U(n), b = Y(/* @__PURE__ */ new Map()), h = Y([]), d = e !== void 0, u = d ? e : m, g = f(
      (y) => {
        d || c(y), a == null || a(y);
      },
      [d, a]
    ), v = f(
      (y, w) => {
        b.current.has(y) || h.current.push(y), b.current.set(y, w);
      },
      []
    ), N = f((y) => {
      b.current.delete(y), h.current = h.current.filter((w) => w !== y);
    }, []), I = f(() => h.current.map((y) => ({ value: y, element: b.current.get(y) })).filter(
      (y) => y.element !== void 0 && !y.element.disabled
    ), []), V = f(() => {
      const y = I();
      if (y.length === 0)
        return;
      const w = y.findIndex((M) => M.value === u), j = w < 0 ? 0 : (w + 1) % y.length, k = y[j];
      k.element.focus(), g(k.value);
    }, [u, I, g]), z = f(() => {
      const y = I();
      if (y.length === 0)
        return;
      const w = y.findIndex((M) => M.value === u), j = w < 0 ? y.length - 1 : (w - 1 + y.length) % y.length, k = y[j];
      k.element.focus(), g(k.value);
    }, [u, I, g]);
    return /* @__PURE__ */ l(
      mn.Provider,
      {
        value: {
          value: u,
          onChange: g,
          registerOption: v,
          unregisterOption: N,
          focusNextOption: V,
          focusPrevOption: z
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: r,
            role: "tablist",
            "aria-label": t,
            "data-value": u,
            className: p($a(), o),
            ...s,
            children: /* @__PURE__ */ l("div", { className: p(_a()), children: i })
          }
        )
      }
    );
  }
);
jo.displayName = "Tabs";
const Ua = C(
  // Base styles for the button
  [
    "relative",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "w-full",
    "px-4",
    "py-3",
    "box-border",
    "cursor-pointer",
    "rounded-tl-[var(--sinch-comp-tab-shape-radius)]",
    "rounded-tr-[var(--sinch-comp-tab-shape-radius)]",
    "h-[39px]",
    "border-0",
    "outline-none",
    "transition-colors",
    "duration-100",
    // Reset button styles
    "appearance-none",
    "font-inherit",
    "bg-[var(--sinch-comp-tab-color-default-background-initial)]",
    "text-[var(--sinch-comp-tab-color-default-text-initial)]"
  ],
  {
    variants: {
      isChecked: {
        true: "text-[var(--sinch-comp-tab-color-checked-text-initial)]",
        false: ""
      },
      isDisabled: {
        true: [
          "cursor-default",
          "pointer-events-none",
          "text-[var(--sinch-comp-tab-color-disabled-text-initial)]"
        ],
        false: ""
      }
    },
    compoundVariants: [],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1
    }
  }
), dn = R(
  ({
    className: o,
    value: e,
    text: n,
    disabled: t = !1,
    icon: a,
    onKeyDown: i,
    ...s
  }, r) => {
    const m = cn(), c = Y(null), b = m.value === e, h = f(
      (N) => {
        c.current = N, N !== null ? m.registerOption(e, N) : m.unregisterOption(e), r !== null && (typeof r == "function" ? r(N) : r.current = N);
      },
      [m, r, e]
    ), d = f(() => {
      t || m.onChange(e);
    }, [m, t, e]), u = f(
      (N) => {
        switch (N.code) {
          case "ArrowLeft":
            N.preventDefault(), m.focusPrevOption();
            break;
          case "ArrowRight":
            N.preventDefault(), m.focusNextOption();
            break;
          case "Home":
            N.preventDefault(), m.focusPrevOption();
            break;
          case "End":
            N.preventDefault(), m.focusNextOption();
            break;
        }
        i == null || i(N);
      },
      [m, i]
    ), g = () => t ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]" : b ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]", v = () => t ? "" : "hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]";
    return /* @__PURE__ */ L(
      "button",
      {
        ref: h,
        type: "button",
        role: "tab",
        "aria-selected": b,
        disabled: t,
        tabIndex: t ? -1 : 0,
        className: p(
          Ua({ isChecked: b, isDisabled: t }),
          v(),
          g(),
          // Focus outline - positioned with pseudo-element
          'focus-visible:after:content-[""]',
          "focus-visible:after:absolute",
          "focus-visible:after:inset-0",
          "focus-visible:after:-bottom-[3px]",
          "focus-visible:after:border-2",
          "focus-visible:after:border-[var(--sinch-comp-tab-color-default-outline-focus)]",
          "focus-visible:after:rounded-tl-[var(--sinch-comp-tab-shape-radius)]",
          "focus-visible:after:rounded-tr-[var(--sinch-comp-tab-shape-radius)]",
          "focus-visible:after:pointer-events-none",
          // Checked underline - positioned with pseudo-element
          b && [
            'before:content-[""]',
            "before:absolute",
            "before:left-0",
            "before:right-0",
            "before:-bottom-px",
            "before:pointer-events-none",
            "before:border-t-2",
            "before:border-[var(--sinch-comp-tab-color-checked-border-initial)]"
          ],
          o
        ),
        onClick: d,
        onKeyDown: u,
        ...s,
        children: [
          a !== void 0 && /* @__PURE__ */ l("span", { className: "flex-shrink-0", children: a }),
          /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-shrink-1",
                "flex-basis-auto",
                "min-w-0",
                "font-[var(--sinch-comp-tab-font-label)]",
                "truncate"
              ),
              children: n
            }
          )
        ]
      }
    );
  }
);
dn.displayName = "TabsOption";
const Ha = C(
  // Base styles for the icon-only button
  [
    "relative",
    "flex",
    "flex-col",
    "px-4",
    "pt-3",
    "pb-0",
    "box-border",
    "cursor-pointer",
    "rounded-tl-[var(--sinch-comp-tab-shape-radius)]",
    "rounded-tr-[var(--sinch-comp-tab-shape-radius)]",
    "h-[39px]",
    "border-0",
    "outline-none",
    "transition-colors",
    "duration-100",
    // Reset button styles
    "appearance-none",
    "font-inherit",
    "bg-[var(--sinch-comp-tab-color-default-background-initial)]"
  ],
  {
    variants: {
      isChecked: {
        true: "",
        false: ""
      },
      isDisabled: {
        true: [
          "cursor-default",
          "pointer-events-none"
        ],
        false: ""
      }
    },
    compoundVariants: [],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1
    }
  }
), vo = R(
  ({
    className: o,
    value: e,
    "aria-label": n,
    disabled: t = !1,
    icon: a,
    onKeyDown: i,
    ...s
  }, r) => {
    const m = cn(), c = Y(null), b = m.value === e, h = f(
      (I) => {
        c.current = I, I !== null ? m.registerOption(e, I) : m.unregisterOption(e), r !== null && (typeof r == "function" ? r(I) : r.current = I);
      },
      [m, r, e]
    ), d = f(() => {
      t || m.onChange(e);
    }, [m, t, e]), u = f(
      (I) => {
        switch (I.code) {
          case "ArrowLeft":
            I.preventDefault(), m.focusPrevOption();
            break;
          case "ArrowRight":
            I.preventDefault(), m.focusNextOption();
            break;
          case "Home":
            I.preventDefault(), m.focusPrevOption();
            break;
          case "End":
            I.preventDefault(), m.focusNextOption();
            break;
        }
        i == null || i(I);
      },
      [m, i]
    ), g = () => t ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]" : b ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]", v = () => t ? "" : "hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]", N = /* @__PURE__ */ l(
      "button",
      {
        ref: h,
        type: "button",
        role: "tab",
        "aria-selected": b,
        "aria-label": n,
        disabled: t,
        tabIndex: t ? -1 : 0,
        className: p(
          Ha({ isChecked: b, isDisabled: t }),
          v(),
          g(),
          // Icon size
          "[--sinch-global-size-icon:var(--sinch-comp-tab-size-icon)]",
          // Focus outline - positioned with pseudo-element
          'focus-visible:after:content-[""]',
          "focus-visible:after:absolute",
          "focus-visible:after:inset-0",
          "focus-visible:after:-bottom-[3px]",
          "focus-visible:after:border-2",
          "focus-visible:after:border-[var(--sinch-comp-tab-color-default-outline-focus)]",
          "focus-visible:after:rounded-tl-[var(--sinch-comp-tab-shape-radius)]",
          "focus-visible:after:rounded-tr-[var(--sinch-comp-tab-shape-radius)]",
          "focus-visible:after:pointer-events-none",
          // Checked underline - positioned with pseudo-element
          b && [
            'before:content-[""]',
            "before:absolute",
            "before:left-0",
            "before:right-0",
            "before:-bottom-px",
            "before:pointer-events-none",
            "before:border-t-2",
            "before:border-[var(--sinch-comp-tab-color-checked-border-initial)]"
          ],
          o
        ),
        onClick: d,
        onKeyDown: u,
        ...s,
        children: a
      }
    );
    return /* @__PURE__ */ l(to, { text: n, orientation: "top", type: "fast", children: N });
  }
);
vo.displayName = "TabsIconOption";
const fr = Object.assign(jo, {
  Option: dn,
  IconOption: vo
}), bn = be(null), Ba = () => {
  const o = ue(bn);
  if (o === null)
    throw new Error("SegmentedControlOption must be used within a SegmentedControl component");
  return o;
}, Ga = C(
  // Base styles
  "flex flex-row w-full box-border relative z-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), wo = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    "aria-label": t,
    onChange: a,
    children: i,
    ...s
  }, r) => {
    const [m, c] = U(n), b = Y(/* @__PURE__ */ new Map()), h = e !== void 0, d = h ? e : m, u = f(
      (z) => {
        h || c(z), a == null || a(z);
      },
      [h, a]
    ), g = f(
      (z, y) => {
        b.current.set(z, y);
      },
      []
    ), v = f((z) => {
      b.current.delete(z);
    }, []), N = f(() => Array.from(b.current.entries()).filter(([, z]) => z.getAttribute("aria-disabled") !== "true").map(([z, y]) => ({ value: z, element: y })), []), I = f(() => {
      const z = N();
      if (z.length === 0)
        return;
      const y = z.findIndex((k) => k.value === d), w = y < 0 ? 0 : (y + 1) % z.length;
      z[w].element.focus();
    }, [d, N]), V = f(() => {
      const z = N();
      if (z.length === 0)
        return;
      const y = z.findIndex((k) => k.value === d), w = y < 0 ? z.length - 1 : (y - 1 + z.length) % z.length;
      z[w].element.focus();
    }, [d, N]);
    return /* @__PURE__ */ l(
      bn.Provider,
      {
        value: {
          value: d,
          onChange: u,
          registerOption: g,
          unregisterOption: v,
          focusNextOption: I,
          focusPrevOption: V
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: r,
            role: "tablist",
            "aria-label": t,
            "aria-orientation": "horizontal",
            "data-value": d,
            className: p(Ga(), o),
            ...s,
            children: i
          }
        )
      }
    );
  }
);
wo.displayName = "SegmentedControl";
const Wa = C(
  // Base styles
  [
    "relative flex flex-row items-center gap-3",
    "w-full h-8 px-4 box-border",
    "outline-none cursor-pointer select-none",
    "transition-colors duration-100"
  ],
  {
    variants: {
      isChecked: {
        true: [
          "text-[var(--sinch-comp-segmented-control-color-checked-text-initial)]",
          "bg-[var(--sinch-comp-segmented-control-color-checked-background-initial)]"
        ],
        false: [
          "text-[var(--sinch-comp-segmented-control-color-default-text-initial)]",
          "bg-[var(--sinch-comp-segmented-control-color-default-background-initial)]"
        ]
      },
      isDisabled: {
        true: [
          "text-[var(--sinch-comp-segmented-control-color-disabled-text-initial)]",
          "bg-[var(--sinch-comp-segmented-control-color-disabled-background-initial)]",
          "cursor-default"
        ],
        false: ""
      },
      isFirst: {
        true: "rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      },
      isLast: {
        true: "rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      }
    },
    compoundVariants: [
      // Hover state (only when not disabled and not checked)
      {
        isChecked: !1,
        isDisabled: !1,
        className: "hover:bg-[var(--sinch-comp-segmented-control-color-default-background-hover)]"
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), Za = C(
  // Base border styles
  [
    "absolute inset-0 pointer-events-none box-border",
    "border border-solid",
    "transition-all duration-100"
  ],
  {
    variants: {
      isChecked: {
        true: [
          "border-2",
          "border-[var(--sinch-comp-segmented-control-color-checked-border-initial)]"
        ],
        false: "border-[var(--sinch-comp-segmented-control-color-default-border-initial)]"
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-segmented-control-color-disabled-border-initial)]",
        false: ""
      },
      isFirst: {
        true: "rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: "border-l-0"
      },
      isLast: {
        true: "rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      }
    },
    compoundVariants: [
      // Checked and not first - offset left by 1px
      {
        isChecked: !0,
        isFirst: !1,
        className: "-left-px"
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), qa = C(
  // Focus ring styles
  [
    "absolute pointer-events-none box-border",
    "border-2 border-[var(--sinch-comp-segmented-control-color-default-outline-focus)]",
    "transition-opacity duration-100 opacity-0",
    "z-[1]",
    // Focus ring offset: border-width (2px) + gap (1px) = 3px
    "[--sinch-local-focus-offset:var(--sinch-comp-segmented-control-size-focus-offset,3px)]",
    "inset-[calc(var(--sinch-local-focus-offset)*-1)]"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      },
      isFirst: {
        true: "rounded-l-[calc(var(--sinch-comp-segmented-control-shape-radius)+var(--sinch-local-focus-offset))]",
        false: "-left-[calc(var(--sinch-local-focus-offset)+1px)]"
      },
      isLast: {
        true: "rounded-r-[calc(var(--sinch-comp-segmented-control-shape-radius)+var(--sinch-local-focus-offset))]",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), Ye = R(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    text: t,
    "aria-label": a,
    icon: i,
    isFirst: s = !1,
    isLast: r = !1,
    onKeyDown: m,
    ...c
  }, b) => {
    const h = Ba(), [d, u] = U(!1), g = Y(null), v = h.value === e, N = f(
      (w) => {
        g.current = w, w !== null ? h.registerOption(e, w) : h.unregisterOption(e), b !== null && (typeof b == "function" ? b(w) : b.current = w);
      },
      [h, b, e]
    ), I = f(() => {
      n || h.onChange(e);
    }, [h, n, e]), V = f(
      (w) => {
        switch (w.code) {
          case "ArrowUp":
          case "ArrowLeft":
            w.preventDefault(), h.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            w.preventDefault(), h.focusNextOption();
            break;
          case "Space":
          case "Enter":
            w.preventDefault(), n || h.onChange(e);
            break;
        }
        m == null || m(w);
      },
      [h, n, m, e]
    ), z = f(() => {
      u(!0);
    }, []), y = f(() => {
      u(!1);
    }, []);
    return /* @__PURE__ */ L(
      "div",
      {
        ref: N,
        role: "tab",
        "aria-selected": v,
        "aria-disabled": n,
        "aria-label": a ?? t,
        tabIndex: n ? -1 : 0,
        "data-checked": v || void 0,
        className: p(
          Wa({
            isChecked: v,
            isDisabled: n,
            isFirst: s,
            isLast: r
          }),
          o
        ),
        onClick: I,
        onKeyDown: V,
        onFocus: z,
        onBlur: y,
        ...c,
        children: [
          i !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: "block pointer-events-none",
              style: {
                color: n ? "var(--sinch-comp-segmented-control-color-disabled-icon-initial)" : v ? "var(--sinch-comp-segmented-control-color-checked-icon-initial)" : "var(--sinch-comp-segmented-control-color-default-icon-initial)"
              },
              children: i
            }
          ),
          t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-shrink overflow-hidden whitespace-nowrap text-ellipsis pointer-events-none",
                "font-[var(--sinch-comp-segmented-control-font-label)]"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                Za({
                  isChecked: v,
                  isDisabled: n,
                  isFirst: s,
                  isLast: r
                })
              )
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                qa({
                  isFocused: d,
                  isFirst: s,
                  isLast: r
                })
              )
            }
          )
        ]
      }
    );
  }
);
Ye.displayName = "SegmentedControlOption";
const jr = Object.assign(wo, {
  Option: Ye
}), un = be(null), Ya = () => {
  const o = ue(un);
  if (o === null)
    throw new Error("SegmentedIconControlOption must be used within a SegmentedIconControl component");
  return o;
}, Ke = (o) => o === "" ? [] : o.split(",").filter(Boolean), Ka = (o, e, n) => {
  const t = Ke(o);
  if (n)
    t.includes(e) || t.push(e);
  else {
    const a = t.indexOf(e);
    a !== -1 && t.splice(a, 1);
  }
  return t.join(",");
}, Ja = (o) => Ke(o)[0] ?? "", Xa = C(
  // Base styles
  "flex flex-row w-full box-border relative z-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), hn = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    multiple: t = !1,
    "aria-label": a,
    onChange: i,
    children: s,
    ...r
  }, m) => {
    const [c, b] = U(n), h = Y(/* @__PURE__ */ new Map()), d = e !== void 0, u = d ? e : c, g = t ? Ke(u) : [Ja(u)], v = f(
      (w) => {
        let j;
        if (t) {
          const k = Ke(u).includes(w);
          j = Ka(u, w, !k);
        } else
          j = w;
        d || b(j), i == null || i(j);
      },
      [u, d, t, i]
    ), N = f(
      (w, j) => {
        h.current.set(w, j);
      },
      []
    ), I = f((w) => {
      h.current.delete(w);
    }, []), V = f(() => Array.from(h.current.entries()).filter(([, w]) => w.getAttribute("aria-disabled") !== "true").map(([w, j]) => ({ value: w, element: j })), []), z = f(() => {
      const w = V();
      if (w.length === 0)
        return;
      const j = document.activeElement, k = w.findIndex((P) => P.element === j), M = k < 0 ? 0 : (k + 1) % w.length;
      w[M].element.focus();
    }, [V]), y = f(() => {
      const w = V();
      if (w.length === 0)
        return;
      const j = document.activeElement, k = w.findIndex((P) => P.element === j), M = k < 0 ? w.length - 1 : (k - 1 + w.length) % w.length;
      w[M].element.focus();
    }, [V]);
    return /* @__PURE__ */ l(
      un.Provider,
      {
        value: {
          value: g,
          multiple: t,
          onChange: v,
          registerOption: N,
          unregisterOption: I,
          focusNextOption: z,
          focusPrevOption: y
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: m,
            role: "tablist",
            "aria-label": a,
            "aria-orientation": "horizontal",
            "data-value": u,
            "data-multiple": t || void 0,
            className: p(Xa(), o),
            ...r,
            children: s
          }
        )
      }
    );
  }
);
hn.displayName = "SegmentedIconControl";
const Qa = C(
  // Base styles - 56x32px icon-only option
  [
    "relative flex items-center justify-center",
    "w-14 h-8 px-4 box-border",
    "outline-none cursor-pointer select-none",
    "transition-colors duration-100"
  ],
  {
    variants: {
      isChecked: {
        true: "bg-[var(--sinch-comp-segmented-control-color-checked-background-initial)]",
        false: "bg-[var(--sinch-comp-segmented-control-color-default-background-initial)]"
      },
      isDisabled: {
        true: [
          "bg-[var(--sinch-comp-segmented-control-color-disabled-background-initial)]",
          "cursor-default"
        ],
        false: ""
      },
      isFirst: {
        true: "rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      },
      isLast: {
        true: "rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      }
    },
    compoundVariants: [
      // Hover state (only when not disabled and not checked)
      {
        isChecked: !1,
        isDisabled: !1,
        className: "hover:bg-[var(--sinch-comp-segmented-control-color-default-background-hover)]"
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), el = C(
  // Base border styles
  [
    "absolute inset-0 pointer-events-none box-border",
    "border border-solid",
    "transition-all duration-100"
  ],
  {
    variants: {
      isChecked: {
        true: [
          "border-2",
          "border-[var(--sinch-comp-segmented-control-color-checked-border-initial)]"
        ],
        false: "border-[var(--sinch-comp-segmented-control-color-default-border-initial)]"
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-segmented-control-color-disabled-border-initial)]",
        false: ""
      },
      isFirst: {
        true: "rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: "border-l-0"
      },
      isLast: {
        true: "rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",
        false: ""
      }
    },
    compoundVariants: [
      // Checked and not first - offset left by 1px
      {
        isChecked: !0,
        isFirst: !1,
        className: "-left-px"
      }
    ],
    defaultVariants: {
      isChecked: !1,
      isDisabled: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), ol = C(
  // Focus ring styles
  [
    "absolute pointer-events-none box-border",
    "border-2 border-[var(--sinch-comp-segmented-control-color-default-outline-focus)]",
    "transition-opacity duration-100 opacity-0",
    "z-[1]",
    // Positioned with inset -3px
    "inset-[-3px]"
  ],
  {
    variants: {
      isFocused: {
        true: "opacity-100",
        false: ""
      },
      isFirst: {
        true: "rounded-l-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]",
        false: "-left-[4px]"
      },
      isLast: {
        true: "rounded-r-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]",
        false: ""
      }
    },
    defaultVariants: {
      isFocused: !1,
      isFirst: !1,
      isLast: !1
    }
  }
), pn = R(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    "aria-label": t,
    icon: a,
    isFirst: i = !1,
    isLast: s = !1,
    onKeyDown: r,
    ...m
  }, c) => {
    const b = Ya(), [h, d] = U(!1), u = Y(null), g = b.value.includes(e), v = f(
      (w) => {
        u.current = w, w !== null ? b.registerOption(e, w) : b.unregisterOption(e), c !== null && (typeof c == "function" ? c(w) : c.current = w);
      },
      [b, c, e]
    ), N = f(() => {
      n || b.onChange(e);
    }, [b, n, e]), I = f(
      (w) => {
        switch (w.code) {
          case "ArrowUp":
          case "ArrowLeft":
            w.preventDefault(), b.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            w.preventDefault(), b.focusNextOption();
            break;
          case "Space":
          case "Enter":
            w.preventDefault(), n || b.onChange(e);
            break;
        }
        r == null || r(w);
      },
      [b, n, r, e]
    ), V = f(() => {
      d(!0);
    }, []), z = f(() => {
      d(!1);
    }, []), y = n ? "var(--sinch-comp-segmented-control-color-disabled-icon-initial)" : g ? "var(--sinch-comp-segmented-control-color-checked-icon-initial)" : "var(--sinch-comp-segmented-control-color-default-icon-initial)";
    return /* @__PURE__ */ L(
      "div",
      {
        ref: v,
        role: "tab",
        "aria-selected": g,
        "aria-disabled": n,
        "aria-label": t,
        tabIndex: n ? -1 : 0,
        "data-checked": g || void 0,
        className: p(
          Qa({
            isChecked: g,
            isDisabled: n,
            isFirst: i,
            isLast: s
          }),
          o
        ),
        onClick: N,
        onKeyDown: I,
        onFocus: V,
        onBlur: z,
        ...m,
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: "block pointer-events-none",
              style: {
                color: y,
                // Icon size from component tokens
                fontSize: "var(--sinch-comp-segmented-control-size-icon, 24px)"
              },
              children: a
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                el({
                  isChecked: g,
                  isDisabled: n,
                  isFirst: i,
                  isLast: s
                })
              )
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                ol({
                  isFocused: h,
                  isFirst: i,
                  isLast: s
                })
              )
            }
          )
        ]
      }
    );
  }
);
pn.displayName = "SegmentedIconControlOption";
const vr = Object.assign(hn, {
  Option: pn
}), nl = (o, e) => {
  if (e === null)
    return !0;
  const n = e.split(/\s*,\s*/);
  return o.every((t) => n.some((a) => a.startsWith(".") ? t.name.endsWith(a) : a === "image/*" ? t.type.startsWith("image/") : a === "video/*" ? t.type.startsWith("video/") : a === "audio/*" ? t.type.startsWith("audio/") : a === t.type));
}, tl = (o, e) => {
  if (e === null)
    return !0;
  const n = e.split(/\s*,\s*/);
  return o.every((t) => n.some((a) => a === "image/*" ? t.type.startsWith("image/") : a === "video/*" ? t.type.startsWith("video/") : a === "audio/*" ? t.type.startsWith("audio/") : a === t.type));
}, So = (o, e) => e === null || e <= 0 ? !0 : o.every((n) => n.size <= e), il = C(
  // Base styles
  [
    "relative flex flex-row flex-wrap justify-center content-center gap-2",
    "min-h-[148px] min-w-[148px] box-border p-4",
    "rounded-[var(--sinch-comp-file-drop-shape-radius)]",
    "bg-[var(--sinch-comp-file-drop-color-default-background-initial)]"
  ],
  {
    variants: {
      isInvalid: {
        true: "bg-[var(--sinch-comp-file-drop-color-invalid-background-initial)]",
        false: ""
      },
      isDisabled: {
        true: "bg-[var(--sinch-comp-file-drop-color-disabled-background-initial)]",
        false: ""
      },
      isDragging: {
        true: "",
        false: ""
      },
      isDragValid: {
        true: "bg-[var(--sinch-comp-file-drop-color-default-background-active)]",
        false: ""
      },
      isDragInvalid: {
        true: "bg-[var(--sinch-comp-file-drop-color-invalid-background-active)]",
        false: ""
      }
    },
    defaultVariants: {
      isInvalid: !1,
      isDisabled: !1,
      isDragging: !1,
      isDragValid: !1,
      isDragInvalid: !1
    }
  }
), al = C(
  // Base border styles (dashed border pseudo-element)
  [
    "absolute inset-0 pointer-events-none",
    "border border-dashed border-[var(--sinch-comp-file-drop-color-default-border-initial)]",
    "rounded-[var(--sinch-comp-file-drop-shape-radius)]",
    "transition-colors"
  ],
  {
    variants: {
      isInvalid: {
        true: "border-[var(--sinch-comp-file-drop-color-invalid-border-initial)]",
        false: ""
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-file-drop-color-disabled-border-initial)]",
        false: ""
      },
      isDragging: {
        true: "pointer-events-auto",
        false: ""
      },
      isDragValid: {
        true: "border-[var(--sinch-comp-file-drop-color-default-border-active)] border-2 border-solid",
        false: ""
      },
      isDragInvalid: {
        true: "border-[var(--sinch-comp-file-drop-color-invalid-border-active)] border-2 border-solid",
        false: ""
      }
    },
    defaultVariants: {
      isInvalid: !1,
      isDisabled: !1,
      isDragging: !1,
      isDragValid: !1,
      isDragInvalid: !1
    }
  }
), ll = C(
  // Base placeholder styles
  [
    "self-center text-center",
    "font-[var(--sinch-comp-file-drop-font-placeholder)]",
    "text-[var(--sinch-comp-file-drop-color-default-placeholder-initial)]"
  ],
  {
    variants: {
      isDisabled: {
        true: "text-[var(--sinch-comp-file-drop-color-disabled-placeholder-initial)]",
        false: ""
      },
      isDragValid: {
        true: "text-[var(--sinch-comp-file-drop-color-default-placeholder-active)]",
        false: ""
      },
      isDragInvalid: {
        true: "text-[var(--sinch-comp-file-drop-color-invalid-placeholder-active)]",
        false: ""
      }
    },
    defaultVariants: {
      isDisabled: !1,
      isDragValid: !1,
      isDragInvalid: !1
    }
  }
), sl = R(
  ({
    className: o,
    multiple: e = !1,
    accept: n,
    maxSize: t,
    disabled: a = !1,
    invalid: i = !1,
    placeholder: s,
    buttonText: r = "Choose file",
    onChange: m,
    onInvalid: c,
    children: b,
    ...h
  }, d) => {
    const u = Y(null), [g, v] = U(!1), [N, I] = U(!1), V = g && !N, z = f(
      (T) => {
        var D;
        if (T.stopPropagation(), T.preventDefault(), a)
          return;
        const P = (D = T.dataTransfer) == null ? void 0 : D.items;
        let B = !1;
        if (P !== void 0 && P.length > 0) {
          const x = Array.from(P);
          B = tl(x, n ?? null);
        }
        v(!0), I(B);
      },
      [a, n]
    ), y = f(
      (T) => {
        T.stopPropagation(), T.preventDefault(), v(!1), I(!1);
      },
      []
    ), w = f(
      (T) => {
        T.stopPropagation(), T.preventDefault();
      },
      []
    ), j = f(
      (T) => {
        if (T.stopPropagation(), T.preventDefault(), v(!1), I(!1), a)
          return;
        const P = T.dataTransfer;
        if (P === null || P.files.length === 0)
          return;
        if (!e && P.files.length > 1) {
          c == null || c("multiple");
          return;
        }
        const B = Array.from(P.files);
        if (!nl(B, n ?? null)) {
          c == null || c("accept");
          return;
        }
        if (!So(B, t ?? null)) {
          c == null || c("size");
          return;
        }
        m == null || m(B);
      },
      [a, e, n, t, m, c]
    ), k = f(
      (T) => {
        const P = T.target.files;
        if (P === null || P.length === 0)
          return;
        const B = Array.from(P);
        if (!So(B, t ?? null)) {
          c == null || c("size"), T.target.value = "";
          return;
        }
        m == null || m(B), T.target.value = "";
      },
      [t, m, c]
    ), M = f(() => {
      var T;
      a || (T = u.current) == null || T.click();
    }, [a]);
    return /* @__PURE__ */ L(
      "div",
      {
        ref: d,
        className: p(
          il({
            isInvalid: i,
            isDisabled: a,
            isDragging: g,
            isDragValid: g && N,
            isDragInvalid: g && V
          }),
          o
        ),
        onDragEnter: z,
        onDragLeave: y,
        onDragOver: w,
        onDrop: j,
        ...h,
        children: [
          s !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: p(
                ll({
                  isDisabled: a,
                  isDragValid: g && N,
                  isDragInvalid: g && V
                })
              ),
              "aria-hidden": "true",
              children: s
            }
          ),
          /* @__PURE__ */ l(
            "input",
            {
              ref: u,
              type: "file",
              className: "sr-only",
              multiple: e,
              accept: n,
              disabled: a,
              onChange: k,
              "aria-label": "File input"
            }
          ),
          b !== void 0 ? /* @__PURE__ */ l("div", { onClick: M, children: b }) : /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: M,
              disabled: a,
              className: p(
                "inline-flex items-center justify-center",
                "px-4 py-2 rounded-md",
                "bg-surface-primary border border-border",
                "text-foreground font-sans text-sm",
                "hover:bg-surface-primary-hover",
                "disabled:opacity-[var(--sinch-sys-opacity-disabled,0.5)] disabled:cursor-not-allowed"
              ),
              children: r
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                al({
                  isInvalid: i,
                  isDisabled: a,
                  isDragging: g,
                  isDragValid: g && N,
                  isDragInvalid: g && V
                })
              )
            }
          )
        ]
      }
    );
  }
);
sl.displayName = "FileDrop";
const rl = (o, e) => e == null || e <= 0 ? !0 : o.every((n) => n.size <= e), ml = R(
  ({
    className: o,
    children: e,
    multiple: n,
    accept: t,
    maxSize: a,
    onChange: i,
    onInvalid: s,
    ...r
  }, m) => {
    const c = Y(null), b = f(() => {
      var d;
      (d = c.current) == null || d.click();
    }, []), h = f(
      (d) => {
        const u = d.target.files;
        if (u === null)
          return;
        const g = Array.from(u);
        if (d.target.value = "", !rl(g, a)) {
          s == null || s("size");
          return;
        }
        i == null || i(g);
      },
      [a, i, s]
    );
    return /* @__PURE__ */ L(
      "div",
      {
        ref: m,
        className: p("inline-block", o),
        ...r,
        children: [
          /* @__PURE__ */ l(
            "input",
            {
              ref: c,
              type: "file",
              className: "hidden",
              multiple: n,
              accept: t,
              onChange: h
            }
          ),
          /* @__PURE__ */ l("div", { onClick: b, className: "cursor-pointer", children: e })
        ]
      }
    );
  }
);
ml.displayName = "FilePicker";
function _e(o) {
  X(() => {
    if (!o)
      return;
    const e = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = e;
    };
  }, [o]);
}
const cl = C(
  // Base styles
  [
    "fixed",
    "m-0",
    "grid",
    "grid-rows-[auto_1fr_auto]",
    "p-[var(--sinch-comp-sheet-size-padding,24px)]",
    "gap-[var(--sinch-comp-sheet-size-gap,16px)]",
    "box-border",
    "bg-[var(--sinch-comp-sheet-color-background,var(--sinch-sys-color-surface-primary-default,white))]",
    "border-none",
    "outline-none",
    "transition-[transform,opacity]",
    "duration-[var(--sinch-comp-sheet-animation-duration,300ms)]",
    "ease-[var(--sinch-comp-sheet-animation-easing,cubic-bezier(0.25,1,0.5,1))]",
    "motion-reduce:duration-[0.01ms]"
  ],
  {
    variants: {
      placement: {
        right: [
          "top-0",
          "right-0",
          "ml-auto",
          "h-dvh",
          "max-w-[var(--sinch-comp-sheet-size-max-horizontal,480px)]",
          "max-sm:max-w-[100dvw]"
        ],
        left: [
          "top-0",
          "left-0",
          "mr-auto",
          "h-dvh",
          "max-w-[var(--sinch-comp-sheet-size-max-horizontal,480px)]",
          "max-sm:max-w-[100dvw]"
        ],
        top: [
          "top-0",
          "left-0",
          "right-0",
          "w-full",
          "max-h-[var(--sinch-comp-sheet-size-max-vertical,480px)]"
        ],
        bottom: [
          "bottom-0",
          "left-0",
          "right-0",
          "w-full",
          "mt-auto",
          "max-h-[var(--sinch-comp-sheet-size-max-vertical,480px)]"
        ]
      },
      overlay: {
        modal: "opacity-0",
        push: "opacity-[var(--sinch-sys-opacity-disabled,0.5)]"
      },
      open: {
        true: "translate-x-0 translate-y-0 opacity-100",
        false: ""
      }
    },
    compoundVariants: [
      // Closed state transforms based on placement
      { placement: "right", open: !1, className: "translate-x-full" },
      { placement: "left", open: !1, className: "-translate-x-full" },
      { placement: "top", open: !1, className: "-translate-y-full" },
      { placement: "bottom", open: !1, className: "translate-y-full" }
    ],
    defaultVariants: {
      placement: "right",
      overlay: "modal",
      open: !1
    }
  }
), dl = C(
  [
    "fixed",
    "inset-0",
    "z-40",
    "bg-gradient-to-b",
    "from-[var(--sinch-comp-sheet-color-backdrop-from,var(--sinch-sys-color-backdrop))]",
    "to-[var(--sinch-comp-sheet-color-backdrop-to,var(--sinch-sys-color-backdrop))]",
    "backdrop-blur-[var(--sinch-comp-sheet-size-backdrop-blur,0)]",
    "transition-opacity",
    "duration-[var(--sinch-comp-sheet-animation-duration,300ms)]",
    "ease-[var(--sinch-comp-sheet-animation-easing,cubic-bezier(0.25,1,0.5,1))]"
  ],
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      }
    },
    defaultVariants: {
      visible: !1
    }
  }
), bl = R(
  ({
    className: o,
    children: e,
    open: n = !1,
    placement: t = "right",
    overlay: a = "modal",
    onClose: i,
    onOpenChange: s,
    onSheetAnimationStart: r,
    onSheetAnimationEnd: m,
    title: c,
    footer: b,
    container: h,
    id: d,
    style: u,
    "data-testid": g,
    "aria-label": v,
    "aria-labelledby": N
  }, I) => {
    const V = Y(null), [z, y] = U(!1), [w, j] = U(!1), k = Y(null);
    Fe(I, () => V.current), X(() => {
      if (process.env.NODE_ENV !== "production" && n && !c) {
        const D = V.current;
        D && !D.getAttribute("aria-label") && !D.getAttribute("aria-labelledby") && console.warn(
          "Sheet: Missing accessible label. Provide a `title` prop, or pass `aria-label` / `aria-labelledby` for screen readers."
        );
      }
    }, [n, c]), _e(z && a === "modal"), X(() => {
      n ? (k.current = document.activeElement, y(!0), requestAnimationFrame(() => {
        j(!0);
      })) : z && j(!1);
    }, [n, a, z]), X(() => {
      if (!n) return;
      const D = (x) => {
        x.key === "Escape" && (x.preventDefault(), x.stopPropagation(), i == null || i("escape"), s == null || s(!1));
      };
      return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
    }, [n, i, s]);
    const M = f(() => {
      var D, x;
      return {
        action: w ? "expand" : "collapse",
        width: ((D = V.current) == null ? void 0 : D.offsetWidth) ?? 0,
        height: ((x = V.current) == null ? void 0 : x.offsetHeight) ?? 0,
        duration: V.current && getComputedStyle(V.current).getPropertyValue("--sinch-comp-sheet-animation-duration") || "300ms",
        easing: V.current && getComputedStyle(V.current).getPropertyValue("--sinch-comp-sheet-animation-easing") || "cubic-bezier(0.25, 1, 0.5, 1)"
      };
    }, [w]);
    X(() => {
      const D = V.current;
      if (!D || !r) return;
      const x = (E) => {
        E.propertyName === "transform" && r(M());
      };
      return D.addEventListener("transitionstart", x), () => D.removeEventListener("transitionstart", x);
    }, [r, M]);
    const T = f(
      (D) => {
        var x;
        D.propertyName === "transform" && (m == null || m(M()), w || (y(!1), (x = k.current) == null || x.focus()));
      },
      [w, m, M]
    ), P = f(
      (D) => {
        D.target === D.currentTarget && (i == null || i("backdrop"), s == null || s(!1));
      },
      [i, s]
    );
    if (X(() => {
      if (!n || a !== "modal" || !V.current) return;
      const x = V.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), E = x[0], S = x[x.length - 1];
      E == null || E.focus();
      const F = ($) => {
        $.key === "Tab" && ($.shiftKey ? document.activeElement === E && ($.preventDefault(), S == null || S.focus()) : document.activeElement === S && ($.preventDefault(), E == null || E.focus()));
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [n, a]), !z && !n) return null;
    const B = /* @__PURE__ */ L(Ne, { children: [
      a === "modal" && /* @__PURE__ */ l(
        "div",
        {
          className: p(dl({ visible: w })),
          onClick: P,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ L(
        "div",
        {
          ref: V,
          role: "dialog",
          "aria-modal": a === "modal",
          "aria-label": c ? void 0 : v,
          "aria-labelledby": c ? "sheet-title" : N,
          "aria-describedby": "sheet-content",
          id: d,
          style: u,
          "data-testid": g,
          className: p(
            "z-50",
            cl({
              placement: t,
              overlay: a,
              open: w
            }),
            o
          ),
          onTransitionEnd: T,
          children: [
            c && /* @__PURE__ */ l(
              "div",
              {
                id: "sheet-title",
                className: p(
                  (e || b) && "border-b border-[var(--sinch-sys-color-border-default,#e5e7eb)]"
                ),
                children: c
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                id: "sheet-content",
                className: "min-h-0 flex-1 overflow-auto overscroll-contain",
                children: e
              }
            ),
            b && /* @__PURE__ */ l("div", { className: "flex flex-row justify-end gap-4 border-t border-[var(--sinch-sys-color-border-default,#e5e7eb)] pt-4 px-4 pb-4", children: b })
          ]
        }
      )
    ] });
    return $e(B, h ?? document.body);
  }
);
bl.displayName = "Sheet";
const ul = C(
  // Base styles
  ["contents"]
), hl = R(
  ({
    className: o,
    title: e,
    description: n,
    onClose: t,
    closeAriaLabel: a = "Close",
    icon: i,
    hideCloseButton: s = !1,
    ...r
  }, m) => {
    const c = f(() => {
      t == null || t();
    }, [t]);
    return /* @__PURE__ */ L("div", { ref: m, className: p(ul(), o), ...r, children: [
      /* @__PURE__ */ L("div", { className: "flex flex-row items-center gap-2 mt-2", children: [
        i && /* @__PURE__ */ l("span", { className: "shrink-0", children: i }),
        /* @__PURE__ */ l(
          fo,
          {
            type: "m",
            level: "3",
            className: "text-[var(--sinch-comp-sheet-color-title)] [font:var(--sinch-comp-sheet-font-title)]",
            children: e
          }
        ),
        !s && /* @__PURE__ */ l(
          re,
          {
            size: "s",
            "aria-label": a,
            onClick: c,
            className: "ml-auto",
            icon: /* @__PURE__ */ l(oe, { name: "fa-xmark", iconsVersion: "2", size: "sm" })
          }
        )
      ] }),
      n && /* @__PURE__ */ l("p", { className: "text-[var(--sinch-comp-sheet-color-description)] [font:var(--sinch-comp-sheet-font-description)] m-0", children: n })
    ] });
  }
);
hl.displayName = "SheetTitle";
const pl = 5e3, Ue = 250, gl = C(
  // Base styles
  [
    "flex",
    "flex-row",
    "items-center",
    "gap-3",
    "w-[328px]",
    "max-w-[90vw]",
    "p-4",
    "box-border",
    "rounded-[var(--sinch-comp-toast-shape-radius)]",
    "shadow-[var(--sinch-comp-toast-shadow)]"
  ],
  {
    variants: {
      type: {
        success: "bg-[var(--sinch-comp-toast-color-success-default-background)]",
        warn: "bg-[var(--sinch-comp-toast-color-warning-default-background)]",
        error: "bg-[var(--sinch-comp-toast-color-error-default-background)]",
        info: "bg-[var(--sinch-comp-toast-color-info-default-background)]"
      }
    },
    defaultVariants: {
      type: "info"
    }
  }
), kl = {
  success: "var(--sinch-comp-toast-color-success-default-icon)",
  warn: "var(--sinch-comp-toast-color-warning-default-icon)",
  error: "var(--sinch-comp-toast-color-error-default-icon)",
  info: "var(--sinch-comp-toast-color-info-default-icon)"
}, fl = {
  success: "var(--sinch-comp-toast-color-success-default-text)",
  warn: "var(--sinch-comp-toast-color-warning-default-text)",
  error: "var(--sinch-comp-toast-color-error-default-text)",
  info: "var(--sinch-comp-toast-color-info-default-text)"
}, jl = {
  info: "circle-info",
  success: "circle-check",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, gn = R(
  ({
    className: o,
    type: e = "info",
    text: n,
    persistent: t = !1,
    onTimeout: a,
    action: i,
    close: s,
    children: r,
    ...m
  }, c) => {
    const b = Y(null);
    X(() => {
      if (t) {
        b.current !== null && (window.clearTimeout(b.current), b.current = null);
        return;
      }
      return b.current = window.setTimeout(() => {
        a == null || a(), b.current = null;
      }, pl), () => {
        b.current !== null && (window.clearTimeout(b.current), b.current = null);
      };
    }, [t, a]);
    const h = jl[e], d = kl[e], u = fl[e];
    return /* @__PURE__ */ L(
      "div",
      {
        ref: c,
        role: "alert",
        "aria-atomic": "true",
        className: p(gl({ type: e }), o),
        ...m,
        children: [
          /* @__PURE__ */ l(
            oe,
            {
              name: h,
              iconsVersion: "2",
              className: "shrink-0",
              style: { color: d }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: "flex-1 min-w-0 break-words font-[var(--sinch-comp-toast-font-body)]",
              style: { color: u },
              children: n ?? r
            }
          ),
          i,
          s
        ]
      }
    );
  }
);
gn.displayName = "Toast";
function vl(o, e) {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...o,
        toasts: [...o.toasts, e.payload]
      };
    case "REMOVE_TOAST":
      return {
        ...o,
        toasts: o.toasts.filter((n) => n.id !== e.payload.id)
      };
    case "CLEAR_ALL":
      return {
        ...o,
        toasts: []
      };
    default:
      return o;
  }
}
const kn = be(null);
function wr({
  children: o,
  origin: e = "bottom-right",
  reduceMotion: n = !1
}) {
  const [t, a] = Tn(vl, { toasts: [] }), i = f((c) => {
    const b = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    return a({ type: "ADD_TOAST", payload: { ...c, id: b } }), b;
  }, []), s = f((c) => {
    a({ type: "REMOVE_TOAST", payload: { id: c } });
  }, []), r = f(() => {
    a({ type: "CLEAR_ALL" });
  }, []), m = J(
    () => ({
      toasts: t.toasts,
      addToast: i,
      removeToast: s,
      clearAll: r
    }),
    [t.toasts, i, s, r]
  );
  return /* @__PURE__ */ L(kn.Provider, { value: m, children: [
    o,
    /* @__PURE__ */ l(xl, { origin: e, reduceMotion: n })
  ] });
}
function wl() {
  const o = ue(kn);
  if (o === null)
    throw new Error("useToast must be used within a ToastProvider");
  return o;
}
function xl({ origin: o, reduceMotion: e }) {
  const { toasts: n, removeToast: t } = wl(), a = J(() => n.some(
    (s) => s.type === "error" || s.type === "warn"
  ) ? "assertive" : "polite", [n]);
  return /* @__PURE__ */ l(
    "div",
    {
      className: p(
        "fixed z-50 right-4 flex flex-col gap-4",
        o === "top-right" ? "top-4 flex-col-reverse" : "bottom-4"
      ),
      "aria-live": a,
      children: n.map((i) => /* @__PURE__ */ l(
        yl,
        {
          toast: i,
          onRemove: () => t(i.id),
          reduceMotion: e
        },
        i.id
      ))
    }
  );
}
function yl({ toast: o, onRemove: e, reduceMotion: n }) {
  const [t, a] = U(!0), [i, s] = U(!1), r = Y(null);
  X(() => {
    if (n) {
      a(!1);
      return;
    }
    const b = setTimeout(() => {
      a(!1);
    }, Ue);
    return () => clearTimeout(b);
  }, [n]);
  const m = f(() => {
    if (n) {
      e();
      return;
    }
    s(!0), setTimeout(() => {
      e();
    }, Ue);
  }, [e, n]), c = f(() => {
    if (n) {
      e();
      return;
    }
    s(!0), setTimeout(() => {
      e();
    }, Ue);
  }, [e, n]);
  return /* @__PURE__ */ l(
    "div",
    {
      ref: r,
      className: p(
        "transition-all",
        !n && "duration-250 ease-out",
        t && "opacity-0 translate-y-2",
        i && "opacity-0 -translate-y-2",
        !t && !i && "opacity-100 translate-y-0"
      ),
      style: {
        transitionDuration: n ? "0ms" : `${Ue}ms`
      },
      children: /* @__PURE__ */ l(
        gn,
        {
          type: o.type,
          text: o.text,
          persistent: o.persistent,
          onTimeout: m,
          action: o.action,
          close: o.close !== void 0 ? /* @__PURE__ */ l("div", { onClick: c, children: o.close }) : void 0
        }
      )
    }
  );
}
const Nl = R(
  ({ className: o, origin: e = "bottom-right", children: n, ...t }, a) => {
    const [i, s] = U([]), r = J(() => {
      const c = [];
      return We.Children.forEach(n, (b) => {
        We.isValidElement(b) && c.push(b);
      }), c;
    }, [n]);
    X(() => {
      s(r);
    }, [r]);
    const m = J(() => i.some((b) => {
      var d;
      const h = (d = b.props) == null ? void 0 : d.type;
      return h === "error" || h === "warn";
    }) ? "assertive" : "polite", [i]);
    return /* @__PURE__ */ L("div", { ref: a, className: p("block", o), ...t, children: [
      /* @__PURE__ */ l("div", { className: "w-0 h-0 overflow-hidden invisible", children: n }),
      /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "fixed z-50 right-4 flex flex-col",
            e === "top-right" ? "top-4 flex-col-reverse" : "bottom-0"
          ),
          "aria-live": m,
          children: i.map((c, b) => /* @__PURE__ */ l("div", { className: "mb-4", children: c }, c.key ?? b))
        }
      )
    ] });
  }
);
Nl.displayName = "ToastManager";
const xr = {
  success: (o, e) => ({
    type: "success",
    text: o,
    ...e
  }),
  error: (o, e) => ({
    type: "error",
    text: o,
    ...e
  }),
  warn: (o, e) => ({
    type: "warn",
    text: o,
    ...e
  }),
  info: (o, e) => ({
    type: "info",
    text: o,
    ...e
  })
}, He = 16, Vl = C(
  "relative w-fit min-w-full",
  {
    variants: {
      orientation: {
        top: "pb-1",
        bottom: "pt-1",
        left: "pr-1",
        right: "pl-1",
        "top-left": "pb-1",
        "top-right": "pb-1",
        "bottom-left": "pt-1",
        "bottom-right": "pt-1"
      },
      tip: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      // With tip, increase padding
      { orientation: "top", tip: !0, className: "pb-3" },
      { orientation: "bottom", tip: !0, className: "pt-3" },
      { orientation: "left", tip: !0, className: "pr-3" },
      { orientation: "right", tip: !0, className: "pl-3" },
      { orientation: "top-left", tip: !0, className: "pb-3" },
      { orientation: "top-right", tip: !0, className: "pb-3" },
      { orientation: "bottom-left", tip: !0, className: "pt-3" },
      { orientation: "bottom-right", tip: !0, className: "pt-3" }
    ],
    defaultVariants: {
      orientation: "bottom-left",
      tip: !1
    }
  }
), zl = C(
  [
    "bg-[var(--sinch-comp-popover-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]",
    "border",
    "border-[var(--sinch-comp-popover-color-default-border-initial,var(--sinch-sys-color-border-default))]",
    "rounded-[var(--sinch-comp-popover-shape-radius,8px)]",
    "shadow-[var(--sinch-comp-popover-shadow,var(--sinch-sys-shadow-overlay-sm))]",
    "overflow-hidden"
  ],
  {
    variants: {
      tip: {
        true: "shadow-none",
        false: ""
      }
    },
    defaultVariants: {
      tip: !1
    }
  }
), Il = C(
  [
    "absolute",
    "w-4",
    "h-[9px]",
    "fill-[var(--sinch-comp-popover-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]",
    "stroke-[var(--sinch-comp-popover-color-default-border-initial,var(--sinch-sys-color-border-default))]",
    "[stroke-linecap:square]",
    "pointer-events-none"
  ],
  {
    variants: {
      orientation: {
        bottom: "top-3 left-1/2 -translate-x-1/2 rotate-180",
        "bottom-left": "top-3 left-1/2 -translate-x-1/2 rotate-180",
        "bottom-right": "top-3 left-1/2 -translate-x-1/2 rotate-180",
        top: "bottom-3 left-1/2 -translate-x-1/2",
        "top-left": "bottom-3 left-1/2 -translate-x-1/2",
        "top-right": "bottom-3 left-1/2 -translate-x-1/2",
        left: "right-3 top-1/2 -translate-y-1/2 -rotate-90",
        right: "left-3 top-1/2 -translate-y-1/2 rotate-90"
      },
      hidden: {
        true: "hidden",
        false: "block"
      }
    },
    defaultVariants: {
      orientation: "bottom-left",
      hidden: !0
    }
  }
), Cl = C(
  "fixed inset-0 z-50",
  {
    variants: {
      modal: {
        true: "bg-black/20",
        false: "bg-transparent"
      }
    },
    defaultVariants: {
      modal: !1
    }
  }
), fn = R(
  ({
    className: o,
    children: e,
    content: n,
    open: t = !1,
    orientation: a = "bottom-left",
    tip: i = !1,
    modal: s = !1,
    allowScroll: r = !1,
    onClose: m,
    onOpenChange: c,
    "aria-label": b,
    ...h
  }, d) => {
    const [u, g] = U({ x: 0, y: 0 }), [v, N] = U({}), [I, V] = U(!1), [z, y] = U(void 0), w = Y(null), j = Y(null), M = `popover-content-${eo()}`, T = f(() => {
      if (w.current === null || j.current === null)
        return;
      const x = w.current.getBoundingClientRect(), E = j.current.getBoundingClientRect(), S = 4;
      let F = 0, $ = 0;
      a === "bottom-right" || a === "top-right" || a === "bottom" || a === "top" ? F = x.x : a === "bottom-left" || a === "top-left" ? F = x.x + x.width - E.width : a === "right" ? F = x.x + x.width : a === "left" && (F = x.x - E.width), a.startsWith("bottom") ? $ = x.y + x.height : a.startsWith("top") ? $ = x.y - E.height : (a === "left" || a === "right") && ($ = x.y + x.height / 2 - E.height / 2);
      const H = Math.max(S, Math.min(F, window.innerWidth - E.width - S)), Z = Math.max(S, Math.min($, window.innerHeight - E.height - S));
      g({ x: H, y: Z });
      const _ = window.innerWidth - H - 16;
      y(_), i && P(x, E, H, Z);
    }, [a, i]), P = (x, E, S, F) => {
      const $ = {};
      if (a.startsWith("top") || a.startsWith("bottom")) {
        let _ = x.x - S + x.width / 2;
        (a === "bottom-left" || a === "top-left") && (_ = Math.max(_, E.width * 0.75)), (a === "bottom-right" || a === "top-right") && (_ = Math.min(_, E.width * 0.25));
        const A = Math.max(He, Math.min(_, E.width - He));
        $.left = `${A}px`;
      } else if (a === "left" || a === "right") {
        const _ = x.y - F + x.height / 2, A = Math.max(He, Math.min(_, E.height - He));
        $.top = `${A}px`;
      }
      N($);
      const H = !(x.right < E.left || x.left > E.right || x.bottom < E.top || x.top > E.bottom);
      V(H);
    };
    _o(() => {
      t && T();
    }, [t, T]), X(() => {
      if (!t)
        return;
      const x = () => {
        T();
      }, E = new ResizeObserver(x);
      if (j.current !== null && E.observe(j.current), window.addEventListener("resize", x), r && w.current !== null) {
        const S = () => T();
        return window.addEventListener("scroll", S, { passive: !0, capture: !0 }), () => {
          E.disconnect(), window.removeEventListener("resize", x), window.removeEventListener("scroll", S, { capture: !0 });
        };
      }
      return () => {
        E.disconnect(), window.removeEventListener("resize", x);
      };
    }, [t, r, T]), X(() => {
      if (!t)
        return;
      const x = (E) => {
        E.key === "Escape" && (E.preventDefault(), m == null || m(), c == null || c(!1));
      };
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [t, m, c]), _e(t && !r);
    const B = f((x) => {
      x.target === x.currentTarget && (m == null || m(), c == null || c(!1));
    }, [m, c]);
    X(() => {
      if (!t || s)
        return;
      const x = (S) => {
        j.current !== null && !j.current.contains(S.target) && w.current !== null && !w.current.contains(S.target) && (m == null || m(), c == null || c(!1));
      }, E = setTimeout(() => {
        document.addEventListener("mousedown", x);
      }, 0);
      return () => {
        clearTimeout(E), document.removeEventListener("mousedown", x);
      };
    }, [t, s, m, c]);
    const D = t && /* @__PURE__ */ L(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: p(Cl({ modal: s })),
          onClick: B,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          ref: j,
          id: M,
          role: "dialog",
          "aria-modal": s,
          "aria-label": b,
          className: p(
            "fixed z-50",
            i && "drop-shadow-[var(--sinch-comp-popover-shadow,var(--sinch-sys-shadow-overlay-sm))]"
          ),
          style: {
            left: u.x,
            top: u.y,
            maxWidth: z
          },
          children: /* @__PURE__ */ L("div", { className: p(Vl({ orientation: a, tip: i })), children: [
            /* @__PURE__ */ l("div", { className: p(zl({ tip: i }), o), children: n }),
            i && /* @__PURE__ */ l(
              "svg",
              {
                className: p(Il({ orientation: a, hidden: I })),
                style: v,
                width: "16",
                height: "9",
                "aria-hidden": "true",
                children: /* @__PURE__ */ l("path", { d: "m0 0 8 8 8 -8" })
              }
            )
          ] })
        }
      )
    ] });
    return /* @__PURE__ */ L(
      "div",
      {
        ref: d,
        className: "contents",
        ...h,
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              ref: w,
              "aria-controls": M,
              "aria-haspopup": "dialog",
              "aria-expanded": t,
              children: e
            }
          ),
          $e(D, document.body)
        ]
      }
    );
  }
);
fn.displayName = "Popover";
const Ml = 40, jn = be(null), Dl = () => {
  const o = ue(jn);
  if (!o)
    throw new Error("ActionMenuOption must be used within an ActionMenu");
  return o;
}, Tl = R(
  ({ className: o, rows: e, children: n, "aria-label": t, onKeyDown: a, onBlur: i, ...s }, r) => {
    const [m, c] = U(null), b = Y(/* @__PURE__ */ new Map()), h = Y(null), d = Y(null);
    Fe(r, () => h.current);
    const u = f((j, k, M) => {
      b.current.set(j, { disabled: k, onClick: M });
    }, []), g = f(() => {
      const j = [];
      return b.current.forEach((k, M) => {
        k.disabled || j.push(M);
      }), j.sort((k, M) => k - M);
    }, []), v = f(() => {
      if (m !== null) {
        const j = b.current.get(m);
        j && !j.disabled && j.onClick && j.onClick();
      }
    }, [m]), N = f((j) => {
      const k = g();
      if (k.length === 0) return null;
      if (m === null)
        return j === "down" ? k[0] : k[k.length - 1];
      const M = k.indexOf(m);
      return M === -1 ? k[0] : j === "down" ? k[(M + 1) % k.length] : k[(M - 1 + k.length) % k.length];
    }, [m, g]), I = f((j) => {
      if (a == null || a(j), !j.defaultPrevented)
        switch (j.code) {
          case "ArrowDown": {
            j.preventDefault();
            const k = N("down");
            c(k);
            break;
          }
          case "ArrowUp": {
            j.preventDefault();
            const k = N("up");
            c(k);
            break;
          }
          case "Enter":
          case "Space": {
            m !== null && (j.preventDefault(), v());
            break;
          }
        }
    }, [a, N, m, v]), V = f((j) => {
      var k;
      i == null || i(j), (k = h.current) != null && k.contains(j.relatedTarget) || c(null);
    }, [i]), z = e != null ? e * Ml : void 0, y = Ze.map(n, (j, k) => oo(j) ? ho(j, { index: k }) : j), w = {
      selectedIndex: m,
      setSelectedIndex: c,
      registerOption: u,
      getEnabledIndices: g,
      triggerSelectedOption: v
    };
    return /* @__PURE__ */ l(jn.Provider, { value: w, children: /* @__PURE__ */ l(
      "div",
      {
        ref: h,
        role: "listbox",
        tabIndex: 0,
        "aria-label": t,
        className: p(
          // Base styles
          "block outline-none",
          o
        ),
        onKeyDown: I,
        onBlur: V,
        ...s,
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: d,
            role: "presentation",
            className: "overflow-y-auto",
            style: { maxHeight: z },
            children: y
          }
        )
      }
    ) });
  }
);
Tl.displayName = "ActionMenu";
const Sl = R(
  ({
    className: o,
    text: e,
    disabled: n = !1,
    "aria-label": t,
    icon: a,
    rightIcon: i,
    onClick: s,
    index: r = 0,
    onMouseDown: m,
    onMouseOver: c,
    onKeyDown: b,
    ...h
  }, d) => {
    const u = Dl(), g = Y(null);
    Fe(d, () => g.current);
    const v = u.selectedIndex === r;
    X(() => {
      u.registerOption(r, n, s);
    }, [u, r, n, s]), X(() => {
      v && g.current && g.current.scrollIntoView && g.current.scrollIntoView({ block: "nearest" });
    }, [v]);
    const N = f(() => {
      n || s == null || s();
    }, [n, s]), I = f((y) => {
      m == null || m(y), !(y.defaultPrevented || n) && N();
    }, [m, n, N]), V = f((y) => {
      c == null || c(y), !y.defaultPrevented && v && u.setSelectedIndex(null);
    }, [c, v, u]), z = f((y) => {
      b == null || b(y), !(y.defaultPrevented || n) && (y.code === "Enter" || y.code === "Space") && (y.preventDefault(), N());
    }, [b, n, N]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: g,
        role: "option",
        "aria-selected": v && !n,
        "aria-disabled": n,
        "aria-label": t ?? e,
        tabIndex: -1,
        className: p(
          // Base styles
          "block cursor-pointer outline-none",
          // Disabled state
          n && "cursor-default",
          o
        ),
        onMouseDown: I,
        onMouseOver: V,
        onKeyDown: z,
        ...h,
        children: /* @__PURE__ */ L(
          "div",
          {
            className: p(
              // Base wrapper styles
              "box-border flex h-10 w-full items-center gap-2.5 px-4 py-2",
              "select-none",
              // Background colors
              "bg-[var(--sinch-comp-action-menu-color-default-background-initial)]",
              // Selected state
              v && !n && "bg-[var(--sinch-comp-action-menu-color-default-background-selected)]",
              // Hover state (only when not disabled)
              !n && "hover:bg-[var(--sinch-comp-action-menu-color-default-background-hover)]",
              // Disabled state
              n && [
                "pointer-events-none",
                "bg-[var(--sinch-comp-action-menu-color-disabled-background-initial)]"
              ]
            ),
            style: {
              // Set CSS custom properties for text/icon colors
              "--sinch-global-color-text": n ? "var(--sinch-comp-action-menu-color-disabled-text-initial)" : "var(--sinch-comp-action-menu-color-default-text-initial)",
              "--sinch-global-color-icon": n ? "var(--sinch-comp-action-menu-color-disabled-icon-initial)" : "var(--sinch-comp-action-menu-color-default-icon-initial)",
              "--sinch-global-size-icon": "var(--sinch-comp-action-menu-size-icon)"
            },
            children: [
              a && /* @__PURE__ */ l("span", { className: "-ml-1.5", children: a }),
              /* @__PURE__ */ l(
                "span",
                {
                  className: p(
                    "min-w-0 flex-1 truncate",
                    "text-[color:var(--sinch-global-color-text)]",
                    "font-[var(--sinch-comp-action-menu-font-option)]"
                  ),
                  children: e
                }
              ),
              i && /* @__PURE__ */ l("span", { className: "-mr-1.5", children: i })
            ]
          }
        )
      }
    );
  }
);
Sl.displayName = "ActionMenuOption";
const vn = be(null), El = () => {
  const o = ue(vn);
  if (o === null)
    throw new Error(
      "SelectMenuOption must be used within a SelectMenu component"
    );
  return o;
}, Eo = 40, Al = 7, Ol = C(
  // Base styles
  ["block outline-none"],
  {
    variants: {},
    defaultVariants: {}
  }
), wn = R(
  ({
    className: o,
    name: e,
    value: n,
    defaultValue: t = "",
    rows: a,
    multiple: i = !1,
    searchable: s = null,
    searchValue: r,
    defaultSearchValue: m = "",
    searchPlaceholder: c = "Search",
    searchAutocomplete: b,
    "aria-label": h,
    onChange: d,
    onSearchChange: u,
    children: g,
    ...v
  }, N) => {
    const [I, V] = U(t), [z, y] = U(m), [w, j] = U(null), [k, M] = U(0), T = Y(/* @__PURE__ */ new Map()), P = n !== void 0, B = P ? n : I, D = r !== void 0, x = D ? r : z, E = J(() => B === "" ? /* @__PURE__ */ new Set() : new Set(B.split(",").map((O) => O.trim())), [B]), S = f(
      (O) => E.has(O),
      [E]
    ), F = J(() => s === !0 ? !0 : s === !1 ? !1 : k >= Al, [s, k]), $ = J(() => {
      if (a === void 0)
        return;
      const O = a * Eo;
      return k > a ? O + Eo / 2 : O;
    }, [a, k]), H = f(
      (O) => {
        let W;
        if (i) {
          const Q = new Set(E);
          Q.has(O) ? Q.delete(O) : Q.add(O), W = Array.from(Q).join(",");
        } else
          W = O;
        P || V(W), d == null || d(W);
      },
      [P, i, d, E]
    ), Z = f(
      (O) => {
        D || y(O), u == null || u(O);
      },
      [D, u]
    ), _ = f(
      (O, W, Q, ae) => {
        T.current.set(O, {
          element: W,
          text: Q,
          disabled: ae
        }), M((ie) => ie + 1);
      },
      []
    ), A = f((O) => {
      T.current.delete(O), M((W) => Math.max(0, W - 1));
    }, []), ne = f(() => Array.from(T.current.entries()).filter(([, O]) => !(O.disabled || x !== "" && !O.text.toLowerCase().includes(x.toLowerCase()))).map(([O, W]) => ({ value: O, element: W.element })), [x]), G = f(
      (O) => {
        var Q, ae, ie, le;
        const W = ne();
        if (W.length !== 0)
          switch (O.code) {
            case "ArrowDown": {
              O.preventDefault();
              const ce = W.findIndex(
                (de) => de.value === w
              ), q = ce < 0 ? 0 : (ce + 1) % W.length, ee = W[q];
              j(ee.value), (ae = (Q = ee.element).scrollIntoView) == null || ae.call(Q, { block: "nearest" });
              break;
            }
            case "ArrowUp": {
              O.preventDefault();
              const ce = W.findIndex(
                (de) => de.value === w
              ), q = ce < 0 ? W.length - 1 : (ce - 1 + W.length) % W.length, ee = W[q];
              j(ee.value), (le = (ie = ee.element).scrollIntoView) == null || le.call(ie, { block: "nearest" });
              break;
            }
            case "Enter":
            case "Space": {
              w !== null && (O.preventDefault(), H(w));
              break;
            }
          }
      },
      [ne, H, w]
    ), me = f(
      (O) => {
        O.currentTarget.contains(O.relatedTarget) || j(null);
      },
      []
    ), he = J(() => {
      if (x === "")
        return g;
      let O = 0;
      const Q = ((ae) => {
        const ie = [];
        return We.Children.forEach(ae, (le) => {
          if (!We.isValidElement(le)) {
            ie.push(le);
            return;
          }
          le.type === xo || le.type.displayName === "SelectMenuOption" ? (le.props.text ?? "").toLowerCase().includes(x.toLowerCase()) && (O++, ie.push(le)) : ie.push(le);
        }), ie;
      })(g);
      return O === 0 ? /* @__PURE__ */ l(
        "div",
        {
          className: p(
            "flex items-center justify-center w-full h-[30px] mb-[10px]",
            "pointer-events-none select-none",
            "text-[var(--sinch-comp-select-menu-color-default-not-found-text-initial,var(--sinch-sys-color-text-muted))]",
            "font-[var(--sinch-comp-select-menu-font-not-found-text)]"
          ),
          children: "No results"
        }
      ) : Q;
    }, [g, x]);
    return /* @__PURE__ */ l(
      vn.Provider,
      {
        value: {
          value: B,
          multiple: i,
          onChange: H,
          registerOption: _,
          unregisterOption: A,
          selectedOptionValue: w,
          setSelectedOptionValue: j,
          isValueSelected: S
        },
        children: /* @__PURE__ */ L(
          "div",
          {
            ref: N,
            role: "listbox",
            tabIndex: 0,
            "aria-label": h,
            "aria-multiselectable": i || void 0,
            "data-name": e,
            "data-value": B,
            className: p(Ol(), o),
            onKeyDown: G,
            onBlur: me,
            ...v,
            children: [
              F && /* @__PURE__ */ l("div", { className: "sticky top-0 z-10 px-2 pt-2 pb-2 border-b border-[var(--sinch-sys-color-border-default,#e5e7eb)] bg-[var(--sinch-comp-select-menu-color-default-background-initial,var(--sinch-sys-color-surface-primary-default,white))]", children: /* @__PURE__ */ l(
                ko,
                {
                  size: "s",
                  value: x,
                  placeholder: c,
                  autoComplete: b,
                  "aria-label": "Search options",
                  icon: /* @__PURE__ */ l(oe, { name: "magnifying-glass", iconsVersion: "2" }),
                  onChange: Z,
                  rightAddon: x !== "" ? /* @__PURE__ */ l(
                    "button",
                    {
                      type: "button",
                      className: "flex items-center justify-center p-1 hover:bg-surface-secondary-hover rounded-sm",
                      onClick: () => Z(""),
                      "aria-label": "Clear search",
                      children: /* @__PURE__ */ l(oe, { name: "fa-xmark", iconsVersion: "2", size: "xs" })
                    }
                  ) : void 0
                }
              ) }),
              /* @__PURE__ */ l(
                "div",
                {
                  role: "presentation",
                  className: "overflow-y-auto",
                  style: {
                    maxHeight: $ !== void 0 ? `${$}px` : void 0
                  },
                  children: he
                }
              )
            ]
          }
        )
      }
    );
  }
);
wn.displayName = "SelectMenu";
const Ll = C(
  // Base styles - wrapper
  [
    "flex relative box-border min-h-[40px] px-4 py-2",
    "items-center gap-[10px]",
    "select-none cursor-pointer",
    "bg-[var(--sinch-comp-select-menu-color-default-background-initial,transparent)]",
    "text-[var(--sinch-comp-select-menu-color-default-option-initial,var(--sinch-sys-color-text-default))]"
  ],
  {
    variants: {
      isSelected: {
        true: "bg-[var(--sinch-comp-select-menu-color-default-background-selected,var(--sinch-sys-color-surface-secondary-default))]",
        false: ""
      },
      isDisabled: {
        true: [
          "cursor-default pointer-events-none",
          "bg-[var(--sinch-comp-select-menu-color-disabled-background-initial,transparent)]",
          "text-[var(--sinch-comp-select-menu-color-disabled-option-initial,var(--sinch-sys-color-text-disabled))]"
        ],
        false: "hover:bg-[var(--sinch-comp-select-menu-color-default-background-hover,var(--sinch-sys-color-surface-secondary-hover))]"
      }
    },
    defaultVariants: {
      isSelected: !1,
      isDisabled: !1
    }
  }
), xo = R(
  ({
    className: o,
    value: e,
    text: n = "",
    disabled: t = !1,
    "aria-label": a,
    icon: i,
    customContent: s,
    children: r,
    ...m
  }, c) => {
    const {
      registerOption: b,
      unregisterOption: h,
      onChange: d,
      setSelectedOptionValue: u,
      selectedOptionValue: g,
      isValueSelected: v,
      multiple: N
    } = El(), I = Y(null), V = v(e), z = g === e, y = f(
      (k) => {
        I.current = k, k !== null ? b(e, k, n, t) : h(e), c !== null && (typeof c == "function" ? c(k) : c.current = k);
      },
      [t, c, b, n, h, e]
    );
    X(() => {
      I.current !== null && b(e, I.current, n, t);
    }, [t, b, n, e]);
    const w = f(() => {
      t || d(e);
    }, [t, d, e]), j = f(() => {
      t || u(e);
    }, [t, u, e]);
    return /* @__PURE__ */ L(
      "div",
      {
        ref: y,
        role: "option",
        "aria-selected": N ? void 0 : V,
        "aria-checked": N ? V : void 0,
        "aria-disabled": t,
        "aria-label": a ?? n,
        className: p(
          Ll({
            isSelected: z,
            isDisabled: t
          }),
          o
        ),
        onClick: w,
        onMouseEnter: j,
        ...m,
        children: [
          i !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "-ml-[6px]",
                t ? "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"
              ),
              children: i
            }
          ),
          s !== void 0 ? /* @__PURE__ */ l("div", { className: "flex-1 min-w-0 pointer-events-none", children: s }) : /* @__PURE__ */ L(
            "span",
            {
              className: p(
                "flex-1 min-w-0",
                "font-[var(--sinch-comp-select-menu-font-option)]",
                "truncate"
              ),
              children: [
                n,
                r
              ]
            }
          ),
          V && /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "-mr-[6px]",
                t ? "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"
              ),
              children: /* @__PURE__ */ l(oe, { name: "fa-check", iconsVersion: "2" })
            }
          )
        ]
      }
    );
  }
);
xo.displayName = "SelectMenuOption";
const Pl = C(
  // Base styles
  [
    "relative inline-flex items-center gap-2 box-border w-full",
    "outline-none cursor-pointer align-middle",
    "bg-[var(--sinch-comp-select-button-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]"
  ],
  {
    variants: {
      size: {
        s: [
          "h-[var(--sinch-comp-select-button-size-container-s,32px)]",
          "rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]",
          "px-3 pr-1"
        ],
        m: [
          "h-[var(--sinch-comp-select-button-size-container-m,40px)]",
          "rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]",
          "px-3 pr-2"
        ],
        l: [
          "h-[var(--sinch-comp-select-button-size-container-l,48px)]",
          "rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]",
          "px-3"
        ]
      },
      isDisabled: {
        true: "cursor-default",
        false: ""
      }
    },
    defaultVariants: {
      size: "m",
      isDisabled: !1
    }
  }
), Rl = C(
  // Base border styles
  [
    "absolute inset-0 pointer-events-none",
    "border border-[var(--sinch-comp-select-button-color-default-border-initial,var(--sinch-sys-color-border-default))]"
  ],
  {
    variants: {
      size: {
        s: "rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]",
        m: "rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]",
        l: "rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]"
      },
      isFocused: {
        true: "border-[var(--sinch-comp-select-button-color-default-border-focus,var(--sinch-sys-color-focus))] border-2",
        false: ""
      },
      isInvalid: {
        true: "border-[var(--sinch-comp-select-button-color-invalid-border-initial,var(--sinch-sys-color-feedback-danger-default))]",
        false: ""
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]",
        false: ""
      }
    },
    compoundVariants: [
      // Disabled overrides everything
      {
        isDisabled: !0,
        className: "border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]"
      }
    ],
    defaultVariants: {
      size: "m",
      isFocused: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), xn = R(
  ({
    className: o,
    text: e,
    placeholder: n,
    size: t = "m",
    invalid: a = !1,
    disabled: i = !1,
    "aria-label": s,
    onClick: r,
    onFocus: m,
    onBlur: c,
    icon: b,
    leftAddon: h,
    clearable: d = !1,
    onClear: u,
    ...g
  }, v) => {
    const [N, I] = U(!1), V = f(() => {
      i || r == null || r();
    }, [i, r]), z = f(
      (M) => {
        (M.code === "Enter" || M.code === "Space") && (M.preventDefault(), V());
      },
      [V]
    ), y = f(() => {
      I(!0), m == null || m();
    }, [m]), w = f(() => {
      I(!1), c == null || c();
    }, [c]), j = e !== void 0 && e !== "", k = () => {
      switch (t) {
        case "s":
          return "var(--sinch-comp-select-button-size-icon-s,16px)";
        case "l":
          return "var(--sinch-comp-select-button-size-icon-l,24px)";
        default:
          return "var(--sinch-comp-select-button-size-icon-m,20px)";
      }
    };
    return /* @__PURE__ */ L(
      "div",
      {
        ref: v,
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-label": s,
        "aria-haspopup": "listbox",
        "aria-invalid": a || void 0,
        "aria-disabled": i || void 0,
        className: p(
          Pl({ size: t, isDisabled: i }),
          o
        ),
        onClick: V,
        onKeyDown: z,
        onFocus: y,
        onBlur: w,
        style: {
          "--sinch-global-size-icon": k()
        },
        ...g,
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                Rl({
                  size: t,
                  isFocused: N,
                  isInvalid: a && !N,
                  isDisabled: i
                })
              )
            }
          ),
          h !== void 0 && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 -ml-1", children: h }),
          b !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: p(
                i ? "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]" : "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: b
            }
          ),
          j ? /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-1 min-w-0 truncate",
                "font-[var(--sinch-comp-select-button-font-input)]",
                i ? "text-[var(--sinch-comp-select-button-color-disabled-text-initial,var(--sinch-sys-color-text-disabled))]" : "text-[var(--sinch-comp-select-button-color-default-text-initial,var(--sinch-sys-color-text-default))]"
              ),
              children: e
            }
          ) : /* @__PURE__ */ l(
            "span",
            {
              className: p(
                "flex-1 min-w-0 truncate",
                "font-[var(--sinch-comp-select-button-font-placeholder)]",
                i ? "text-[var(--sinch-comp-select-button-color-disabled-placeholder-initial,var(--sinch-sys-color-text-disabled))]" : "text-[var(--sinch-comp-select-button-color-default-placeholder-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: n
            }
          ),
          d && j && !i && /* @__PURE__ */ l(
            "div",
            {
              role: "button",
              tabIndex: -1,
              "aria-label": "Clear selection",
              className: p(
                "-ml-1 cursor-pointer",
                "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]",
                "hover:[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-text-initial,var(--sinch-sys-color-text-default))]"
              ),
              onClick: (M) => {
                M.stopPropagation(), u == null || u();
              },
              onKeyDown: (M) => {
                (M.code === "Enter" || M.code === "Space") && (M.preventDefault(), M.stopPropagation(), u == null || u());
              },
              children: /* @__PURE__ */ l(oe, { name: "fa-xmark", iconsVersion: "2" })
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "-ml-1",
                i ? "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]" : "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: /* @__PURE__ */ l(oe, { name: "fa-chevron-down", iconsVersion: "2" })
            }
          )
        ]
      }
    );
  }
);
xn.displayName = "SelectButton";
const yr = Object.assign(wn, {
  Option: xo,
  Button: xn
}), Fl = [
  "skintone-dark",
  "skintone-default",
  "skintone-light",
  "skintone-light-medium",
  "skintone-medium",
  "skintone-medium-dark"
], $l = [
  "blue",
  "dark-blue",
  "dark-gray",
  "dark-green",
  "dark-orange",
  "dark-pink",
  "dark-red",
  "dark-violet",
  "dark-yellow",
  "default",
  "gray",
  "green",
  "light-blue",
  "light-gray",
  "light-green",
  "light-orange",
  "light-pink",
  "light-red",
  "light-violet",
  "light-yellow",
  "orange",
  "pink",
  "red",
  "violet",
  "yellow",
  ...Fl
], Je = (o = "") => $l.includes(o), _l = (o) => `var(--sinch-comp-color-swatch-color-${o}-background)`, Ul = (o) => `var(--sinch-comp-color-swatch-color-${o}-foreground)`, Hl = C(
  // Base styles - the outer container
  "inline-block align-middle",
  {
    variants: {},
    defaultVariants: {}
  }
), Bl = C(
  // Inner wrapper styles - the colored circle
  [
    "w-[var(--sinch-global-size-icon,32px)]",
    "h-[var(--sinch-global-size-icon,32px)]",
    "rounded-full"
  ],
  {
    variants: {
      noColor: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      noColor: !1
    }
  }
), yo = R(
  ({ className: o, name: e, "aria-label": n, ...t }, a) => {
    const { backgroundColor: i, hasColor: s, computedAriaLabel: r } = J(() => {
      if (!(e != null && e.length > 0))
        return { backgroundColor: void 0, hasColor: !1, computedAriaLabel: n ?? "No color" };
      if (Je(e)) {
        const c = n == null || Je(n) ? e : n;
        return {
          backgroundColor: _l(e),
          hasColor: !0,
          computedAriaLabel: c
        };
      }
      return { backgroundColor: e, hasColor: !0, computedAriaLabel: n };
    }, [e, n]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        className: p(Hl(), o),
        "aria-label": r,
        role: "img",
        ...t,
        children: /* @__PURE__ */ l(
          "div",
          {
            className: p(Bl({ noColor: !s })),
            style: s ? { backgroundColor: i } : void 0,
            ...!s && {
              style: {
                background: `linear-gradient(
                45deg,
                var(--sinch-ref-color-violet-200),
                var(--sinch-ref-color-honey-200),
                var(--sinch-ref-color-grass-200),
                var(--sinch-ref-color-ocean-200),
                var(--sinch-ref-color-violet-200)
              )`
              }
            }
          }
        )
      }
    );
  }
);
yo.displayName = "ColorSwatch";
const Gl = 5, Wl = 44, Zl = 56, yn = be(null), ql = () => {
  const o = ue(yn);
  if (o === null)
    throw new Error("ColorMenuOption must be used within a ColorMenu");
  return o;
}, Yl = C(
  // Base styles - the container
  [
    "block",
    "outline-none"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), Kl = C(
  // The inner listbox wrapper
  [
    "flex",
    "flex-row",
    "flex-wrap",
    "px-2.5",
    "py-1",
    "overflow-y-auto"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), No = R(
  ({
    className: o,
    children: e,
    value: n,
    defaultValue: t = "",
    rows: a,
    cols: i,
    onChange: s,
    onKeyDown: r,
    onBlur: m,
    "aria-label": c,
    ...b
  }, h) => {
    const [d, u] = U(t), g = n !== void 0, v = g ? n : d, [N, I] = U(null), V = Y(/* @__PURE__ */ new Map()), z = J(() => {
      let S = 0;
      const F = ($) => {
        Array.isArray($) ? $.forEach(F) : $ != null && S++;
      };
      return F(e), S;
    }, [e]), y = i ?? Math.min(z, Gl), w = J(() => {
      const S = {};
      if (z > 0) {
        const F = Math.min(y, z);
        S.width = `${F * Wl}px`;
      }
      return a !== void 0 && a >= 2 && (S.maxHeight = `${a * Zl}px`), S;
    }, [y, z, a]), j = f(
      (S) => {
        g || u(S), s == null || s(S);
      },
      [g, s]
    ), k = f((S) => {
      I(S);
    }, []), M = f((S, F) => {
      V.current.set(S, F);
    }, []), T = f(() => V.current.size, []), P = f(
      (S) => {
        const F = T();
        if (F === 0) {
          r == null || r(S);
          return;
        }
        const $ = N ?? -1;
        switch (S.key) {
          case "ArrowLeft": {
            S.preventDefault();
            const H = $ <= 0 ? F - 1 : $ - 1;
            I(H);
            break;
          }
          case "ArrowRight": {
            S.preventDefault();
            const H = $ < 0 || $ >= F - 1 ? 0 : $ + 1;
            I(H);
            break;
          }
          case "ArrowUp": {
            if (S.preventDefault(), $ < 0)
              I(0);
            else {
              const H = $ - y;
              if (H >= 0)
                I(H);
              else {
                const Z = Math.ceil(F / y), _ = $ % y, A = (Z - 1) * y + _;
                I(
                  A < F ? A : F - 1
                );
              }
            }
            break;
          }
          case "ArrowDown": {
            if (S.preventDefault(), $ < 0)
              I(0);
            else {
              const H = $ + y;
              if (H < F)
                I(H);
              else {
                const Z = $ % y;
                I(
                  Z < F ? Z : 0
                );
              }
            }
            break;
          }
          case "Enter":
          case " ": {
            if (S.preventDefault(), N !== null) {
              const H = V.current.get(N);
              H !== void 0 && j(H);
            }
            break;
          }
        }
        r == null || r(S);
      },
      [
        N,
        y,
        T,
        j,
        r
      ]
    ), B = f(
      (S) => {
        I(null), m == null || m(S);
      },
      [m]
    ), D = J(
      () => ({
        value: v,
        selectedIndex: N,
        onOptionClick: j,
        onOptionSelect: k,
        registerOption: M
      }),
      [v, N, j, k, M]
    );
    let x = 0;
    const E = J(() => {
      const S = (F) => {
        if (Array.isArray(F))
          return F.map(S);
        if (F != null && typeof F == "object" && "type" in F) {
          const $ = F, H = x++;
          return { ...$, props: { ...$.props, index: H } };
        }
        return F;
      };
      return S(e);
    }, [e]);
    return /* @__PURE__ */ l(yn.Provider, { value: D, children: /* @__PURE__ */ l(
      "div",
      {
        ref: h,
        role: "listbox",
        tabIndex: 0,
        "aria-label": c,
        className: p(Yl(), o),
        onKeyDown: P,
        onBlur: B,
        ...b,
        children: /* @__PURE__ */ l(
          "div",
          {
            role: "presentation",
            className: p(Kl()),
            style: w,
            children: E
          }
        )
      }
    ) });
  }
);
No.displayName = "ColorMenu";
const Jl = C(
  // Base styles - the option container
  ["block", "outline-none"],
  {
    variants: {},
    defaultVariants: {}
  }
), Xl = C(
  // The inner wrapper
  ["w-[var(--sinch-comp-color-menu-size-option-width,44px)]", "h-[var(--sinch-comp-color-menu-size-option-height,56px)]", "p-3", "box-border"],
  {
    variants: {},
    defaultVariants: {}
  }
), Ql = C(
  // Swatch wrapper with border ring
  [
    "relative",
    "cursor-pointer",
    "w-8",
    "h-8"
    // Pseudo-element for border ring (handled via additional div)
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), Vo = R(
  ({ className: o, value: e, index: n = 0, "aria-label": t, ...a }, i) => {
    const s = ql(), r = s.value === e, m = s.selectedIndex === n;
    J(() => {
      s.registerOption(n, e);
    }, [n, e]);
    const c = f(() => {
      s.onOptionClick(e), s.onOptionSelect(n);
    }, [s, e, n]), b = J(() => Je(e) ? { "--sinch-global-color-icon": Ul(e) } : { "--sinch-global-color-icon": e }, [e]), h = Je(e) ? e : "", d = J(() => m ? "border-[var(--sinch-comp-color-menu-option-color-default-border-focus)]" : r ? "border-[var(--sinch-comp-color-menu-option-color-default-border-selected)]" : "border-[var(--sinch-comp-color-menu-option-color-default-border-initial)]", [m, r]), u = /* @__PURE__ */ L(
      "div",
      {
        className: p(Ql()),
        style: b,
        children: [
          /* @__PURE__ */ l(yo, { name: e, "aria-label": t }),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "absolute",
                "w-[34px]",
                "h-[34px]",
                "-inset-[3px]",
                "border-2",
                "rounded-full",
                "pointer-events-none",
                "transition-colors",
                d,
                "hover:border-[var(--sinch-comp-color-menu-option-color-default-border-hover)]",
                "active:border-[var(--sinch-comp-color-menu-option-color-default-border-active)]"
              )
            }
          )
        ]
      }
    );
    return /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        role: "option",
        "aria-selected": r,
        "data-checked": r || void 0,
        "data-selected": m || void 0,
        "data-value": e,
        className: p(Jl(), o),
        onClick: c,
        ...a,
        children: /* @__PURE__ */ l("div", { className: p(Xl()), children: h.length > 0 ? /* @__PURE__ */ l(to, { text: h, children: u }) : u })
      }
    );
  }
);
Vo.displayName = "ColorMenuOption";
const Nr = Object.assign(No, {
  Option: Vo
});
let Pe = 0;
const es = () => {
  Pe++, Pe === 1 && (document.body.style.setProperty("overscroll-behavior", "none"), document.documentElement.style.setProperty("overscroll-behavior", "none"));
}, os = () => {
  Pe = Math.max(0, Pe - 1), Pe === 0 && (document.body.style.removeProperty("overscroll-behavior"), document.documentElement.style.removeProperty("overscroll-behavior"));
}, ns = R(
  ({
    className: o,
    children: e,
    content: n,
    open: t = !1,
    orientation: a = "bottom-right",
    modal: i = !1,
    allowScroll: s = !1,
    hideOutsideViewport: r = !1,
    inset: m = 0,
    disableBackdropClose: c = !1,
    onClose: b,
    onOpenChange: h,
    "aria-label": d,
    ...u
  }, g) => {
    const [v, N] = U({ x: 0, y: 0 }), [I, V] = U(void 0), [z, y] = U(!1), w = Y(null), j = Y(null), k = Y(null), M = Y(null), T = f(() => {
      if (w.current === null)
        return { x: 0, y: 0, width: 0, height: 0 };
      const x = w.current.firstElementChild;
      return x !== null && "footprintRect" in x ? x.footprintRect : w.current.getBoundingClientRect();
    }, []), P = f(() => {
      if (j.current === null)
        return;
      const x = T(), E = j.current.getBoundingClientRect(), S = E.width, F = E.height;
      let $ = 0, H = 0;
      a === "bottom-right" || a === "top-right" || a === "top-stretch" || a === "bottom-stretch" ? $ = x.x : a === "bottom-left" || a === "top-left" ? $ = x.x + x.width - S : a === "bottom-center" || a === "top-center" ? $ = x.x + x.width / 2 - S / 2 : a === "center-right" ? $ = x.x + x.width : a === "center-left" && ($ = x.x - S), a === "bottom-left" || a === "bottom-right" || a === "bottom-stretch" || a === "bottom-center" ? H = x.y + x.height : a === "top-left" || a === "top-right" || a === "top-stretch" || a === "top-center" ? H = x.y - F : (a === "center-left" || a === "center-right") && (H = x.y + x.height / 2 - F / 2);
      const Z = Math.max(m, Math.min($, window.innerWidth - S - m)), _ = Math.max(m, Math.min(H, window.innerHeight - F - m));
      if (r) {
        const A = Math.abs(Z - $) > 2 || Math.abs(_ - H) > 2;
        y(A);
      }
      N({ x: Z, y: _ }), V(a === "top-stretch" || a === "bottom-stretch" ? x.width : void 0);
    }, [a, m, r, T]);
    _o(() => {
      t && requestAnimationFrame(() => {
        P();
      });
    }, [t, P]), X(() => {
      if (!t)
        return;
      const x = () => {
        P();
      }, E = new ResizeObserver(x);
      if (j.current !== null && E.observe(j.current), window.addEventListener("resize", x), s) {
        const S = () => P();
        return window.addEventListener("scroll", S, { passive: !0, capture: !0 }), () => {
          E.disconnect(), window.removeEventListener("resize", x), window.removeEventListener("scroll", S, { capture: !0 });
        };
      }
      return () => {
        E.disconnect(), window.removeEventListener("resize", x);
      };
    }, [t, s, P]), X(() => {
      if (!t)
        return;
      const x = (E) => {
        E.key === "Escape" && (E.preventDefault(), b == null || b(), h == null || h(!1));
      };
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [t, b, h]), _e(t && !s), X(() => {
      if (!(!t || s))
        return es(), () => {
          os();
        };
    }, [t, s]);
    const B = f(
      (x) => {
        c || x.target === x.currentTarget && (b == null || b(), h == null || h(!1));
      },
      [c, b, h]
    );
    X(() => {
      if (!t || i)
        return;
      const x = (S) => {
        c || M.current !== null && M.current.contains(S.target) || j.current !== null && !j.current.contains(S.target) && w.current !== null && !w.current.contains(S.target) && (b == null || b(), h == null || h(!1));
      }, E = setTimeout(() => {
        document.addEventListener("mousedown", x);
      }, 0);
      return () => {
        clearTimeout(E), document.removeEventListener("mousedown", x);
      };
    }, [t, i, c, b, h]);
    const D = t && /* @__PURE__ */ L(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: M,
          className: p(
            "fixed inset-0 z-50",
            "bg-transparent"
          ),
          onClick: B,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l(
        "dialog",
        {
          ref: k,
          className: p(
            "fixed z-50 m-0 p-0 border-none bg-transparent outline-none",
            "max-w-none max-h-none overflow-visible",
            z && "invisible"
          ),
          style: {
            left: v.x,
            top: v.y,
            width: I
          },
          open: !0,
          "aria-label": d,
          "aria-modal": i,
          children: /* @__PURE__ */ l("div", { ref: j, className: p("relative", o), ...u, children: n })
        }
      )
    ] });
    return /* @__PURE__ */ L("div", { ref: g, className: "contents", children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: w,
          "aria-haspopup": "dialog",
          "aria-expanded": t,
          children: e
        }
      ),
      $e(D, document.body)
    ] });
  }
);
ns.displayName = "Pop";
const ts = C(
  [
    "fixed inset-0 z-50 flex items-center justify-center",
    "bg-black/55"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), is = C(
  [
    "flex flex-col",
    "py-6",
    "max-w-[512px] max-h-[90vh]",
    "w-fit",
    "rounded-[var(--sinch-comp-dialog-shape-radius,8px)]",
    "bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]",
    "shadow-[var(--sinch-comp-dialog-shadow,var(--sinch-sys-shadow-overlay-sm))]",
    "outline-none"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), as = R(
  ({
    className: o,
    open: e = !1,
    caption: n,
    onVisibilityAltered: t,
    icon: a,
    content: i,
    buttons: s,
    "aria-label": r,
    checkInterval: m = 1e3,
    ...c
  }, b) => {
    const [h, d] = U(e), u = Y(null), g = Y(null);
    X(() => {
      d(e);
    }, [e]);
    const v = f(() => {
      if (u.current === null)
        return;
      const I = u.current, V = getComputedStyle(I);
      !(V.visibility === "visible" && V.display !== "none" && I.open === !0) && h && (t == null || t());
    }, [h, t]);
    if (X(() => {
      if (!e) {
        g.current !== null && (clearInterval(g.current), g.current = null);
        return;
      }
      return requestAnimationFrame(() => {
        g.current = setInterval(v, m);
      }), () => {
        g.current !== null && (clearInterval(g.current), g.current = null);
      };
    }, [e, m, v]), X(() => () => {
      g.current !== null && clearInterval(g.current), e && (t == null || t());
    }, []), X(() => {
      if (!e)
        return;
      const I = (V) => {
        V.key === "Escape" && (V.preventDefault(), V.stopPropagation());
      };
      return document.addEventListener("keydown", I, { capture: !0 }), () => {
        document.removeEventListener("keydown", I, { capture: !0 });
      };
    }, [e]), _e(e), !e)
      return null;
    const N = /* @__PURE__ */ l(
      "div",
      {
        ref: b,
        className: p(ts()),
        role: "presentation",
        ...c,
        children: /* @__PURE__ */ L(
          "dialog",
          {
            ref: u,
            className: p(is(), o),
            open: !0,
            "aria-modal": "true",
            "aria-label": r,
            children: [
              /* @__PURE__ */ L("div", { className: "flex items-start gap-2 px-6 mb-3", children: [
                a !== void 0 && /* @__PURE__ */ l("div", { className: "flex-shrink-0 text-[var(--sinch-comp-dialog-color-default-icon-initial,var(--sinch-sys-color-text-default))]", children: a }),
                n !== void 0 && /* @__PURE__ */ l("h3", { className: "text-[var(--sinch-comp-dialog-color-default-title-initial,var(--sinch-sys-color-text-default))] font-semibold text-lg", children: n })
              ] }),
              i !== void 0 && /* @__PURE__ */ l("div", { className: "min-h-0 overflow-auto px-6 py-1", children: i }),
              s !== void 0 && /* @__PURE__ */ l("div", { className: "flex justify-end gap-4 px-6 mt-5", children: s })
            ]
          }
        )
      }
    );
    return $e(N, document.body);
  }
);
as.displayName = "PersistentOverlay";
const ls = R(
  ({
    className: o,
    value: e,
    defaultValue: n = !1,
    onChange: t,
    "aria-label": a,
    iconSize: i = "32px",
    style: s,
    ...r
  }, m) => {
    const [c, b] = U(n), h = e !== void 0, d = h ? e : c, u = f(() => {
      const v = !d;
      h || b(v), t == null || t(v);
    }, [d, h, t]), g = d ? "rotate(0deg)" : "rotate(180deg)";
    return /* @__PURE__ */ l(
      re,
      {
        ref: m,
        role: "checkbox",
        "aria-checked": d,
        "aria-label": a,
        size: "s",
        onClick: u,
        className: p("block", o),
        style: {
          "--sinch-global-size-icon": i,
          ...s
        },
        icon: /* @__PURE__ */ l(
          oe,
          {
            name: "fa-chevron-down",
            iconsVersion: "2",
            style: {
              transform: g,
              willChange: "transform"
            }
          }
        ),
        ...r
      }
    );
  }
);
ls.displayName = "SegmentCollapse";
const ss = [
  {
    name: "smileys-emotion",
    emojis: [
      {
        emoji: "😀",
        label: "grinning face",
        tone: 0
      },
      {
        emoji: "😃",
        label: "grinning face with big eyes",
        tone: 0
      },
      {
        emoji: "😄",
        label: "grinning face with smiling eyes",
        tone: 0
      },
      {
        emoji: "😁",
        label: "beaming face with smiling eyes",
        tone: 0
      },
      {
        emoji: "😆",
        label: "grinning squinting face",
        tone: 0
      },
      {
        emoji: "😅",
        label: "grinning face with sweat",
        tone: 0
      },
      {
        emoji: "🤣",
        label: "rolling on the floor laughing",
        tone: 0
      },
      {
        emoji: "😂",
        label: "face with tears of joy",
        tone: 0
      },
      {
        emoji: "🙂",
        label: "slightly smiling face",
        tone: 0
      },
      {
        emoji: "🙃",
        label: "upside-down face",
        tone: 0
      },
      {
        emoji: "😉",
        label: "winking face",
        tone: 0
      },
      {
        emoji: "😊",
        label: "smiling face with smiling eyes",
        tone: 0
      },
      {
        emoji: "😇",
        label: "smiling face with halo",
        tone: 0
      },
      {
        emoji: "🥰",
        label: "smiling face with hearts",
        tone: 0
      },
      {
        emoji: "😍",
        label: "smiling face with heart-eyes",
        tone: 0
      },
      {
        emoji: "🤩",
        label: "star-struck",
        tone: 0
      },
      {
        emoji: "😘",
        label: "face blowing a kiss",
        tone: 0
      },
      {
        emoji: "😗",
        label: "kissing face",
        tone: 0
      },
      {
        emoji: "☺️",
        label: "smiling face",
        tone: 0
      },
      {
        emoji: "😚",
        label: "kissing face with closed eyes",
        tone: 0
      },
      {
        emoji: "😙",
        label: "kissing face with smiling eyes",
        tone: 0
      },
      {
        emoji: "🥲",
        label: "smiling face with tear",
        tone: 0
      },
      {
        emoji: "😋",
        label: "face savoring food",
        tone: 0
      },
      {
        emoji: "😛",
        label: "face with tongue",
        tone: 0
      },
      {
        emoji: "😜",
        label: "winking face with tongue",
        tone: 0
      },
      {
        emoji: "🤪",
        label: "zany face",
        tone: 0
      },
      {
        emoji: "😝",
        label: "squinting face with tongue",
        tone: 0
      },
      {
        emoji: "🤑",
        label: "money-mouth face",
        tone: 0
      },
      {
        emoji: "🤗",
        label: "smiling face with open hands",
        tone: 0
      },
      {
        emoji: "🤭",
        label: "face with hand over mouth",
        tone: 0
      },
      {
        emoji: "🤫",
        label: "shushing face",
        tone: 0
      },
      {
        emoji: "🤔",
        label: "thinking face",
        tone: 0
      },
      {
        emoji: "🤐",
        label: "zipper-mouth face",
        tone: 0
      },
      {
        emoji: "🤨",
        label: "face with raised eyebrow",
        tone: 0
      },
      {
        emoji: "😐️",
        label: "neutral face",
        tone: 0
      },
      {
        emoji: "😑",
        label: "expressionless face",
        tone: 0
      },
      {
        emoji: "😶",
        label: "face without mouth",
        tone: 0
      },
      {
        emoji: "😶‍🌫️",
        label: "face in clouds",
        tone: 0
      },
      {
        emoji: "😏",
        label: "smirking face",
        tone: 0
      },
      {
        emoji: "😒",
        label: "unamused face",
        tone: 0
      },
      {
        emoji: "🙄",
        label: "face with rolling eyes",
        tone: 0
      },
      {
        emoji: "😬",
        label: "grimacing face",
        tone: 0
      },
      {
        emoji: "😮‍💨",
        label: "face exhaling",
        tone: 0
      },
      {
        emoji: "🤥",
        label: "lying face",
        tone: 0
      },
      {
        emoji: "😌",
        label: "relieved face",
        tone: 0
      },
      {
        emoji: "😔",
        label: "pensive face",
        tone: 0
      },
      {
        emoji: "😪",
        label: "sleepy face",
        tone: 0
      },
      {
        emoji: "🤤",
        label: "drooling face",
        tone: 0
      },
      {
        emoji: "😴",
        label: "sleeping face",
        tone: 0
      },
      {
        emoji: "😷",
        label: "face with medical mask",
        tone: 0
      },
      {
        emoji: "🤒",
        label: "face with thermometer",
        tone: 0
      },
      {
        emoji: "🤕",
        label: "face with head-bandage",
        tone: 0
      },
      {
        emoji: "🤢",
        label: "nauseated face",
        tone: 0
      },
      {
        emoji: "🤮",
        label: "face vomiting",
        tone: 0
      },
      {
        emoji: "🤧",
        label: "sneezing face",
        tone: 0
      },
      {
        emoji: "🥵",
        label: "hot face",
        tone: 0
      },
      {
        emoji: "🥶",
        label: "cold face",
        tone: 0
      },
      {
        emoji: "🥴",
        label: "woozy face",
        tone: 0
      },
      {
        emoji: "😵",
        label: "face with crossed-out eyes",
        tone: 0
      },
      {
        emoji: "😵‍💫",
        label: "face with spiral eyes",
        tone: 0
      },
      {
        emoji: "🤯",
        label: "exploding head",
        tone: 0
      },
      {
        emoji: "🤠",
        label: "cowboy hat face",
        tone: 0
      },
      {
        emoji: "🥳",
        label: "partying face",
        tone: 0
      },
      {
        emoji: "🥸",
        label: "disguised face",
        tone: 0
      },
      {
        emoji: "😎",
        label: "smiling face with sunglasses",
        tone: 0
      },
      {
        emoji: "🤓",
        label: "nerd face",
        tone: 0
      },
      {
        emoji: "🧐",
        label: "face with monocle",
        tone: 0
      },
      {
        emoji: "😕",
        label: "confused face",
        tone: 0
      },
      {
        emoji: "😟",
        label: "worried face",
        tone: 0
      },
      {
        emoji: "🙁",
        label: "slightly frowning face",
        tone: 0
      },
      {
        emoji: "☹️",
        label: "frowning face",
        tone: 0
      },
      {
        emoji: "😮",
        label: "face with open mouth",
        tone: 0
      },
      {
        emoji: "😯",
        label: "hushed face",
        tone: 0
      },
      {
        emoji: "😲",
        label: "astonished face",
        tone: 0
      },
      {
        emoji: "😳",
        label: "flushed face",
        tone: 0
      },
      {
        emoji: "🥺",
        label: "pleading face",
        tone: 0
      },
      {
        emoji: "😦",
        label: "frowning face with open mouth",
        tone: 0
      },
      {
        emoji: "😧",
        label: "anguished face",
        tone: 0
      },
      {
        emoji: "😨",
        label: "fearful face",
        tone: 0
      },
      {
        emoji: "😰",
        label: "anxious face with sweat",
        tone: 0
      },
      {
        emoji: "😥",
        label: "sad but relieved face",
        tone: 0
      },
      {
        emoji: "😢",
        label: "crying face",
        tone: 0
      },
      {
        emoji: "😭",
        label: "loudly crying face",
        tone: 0
      },
      {
        emoji: "😱",
        label: "face screaming in fear",
        tone: 0
      },
      {
        emoji: "😖",
        label: "confounded face",
        tone: 0
      },
      {
        emoji: "😣",
        label: "persevering face",
        tone: 0
      },
      {
        emoji: "😞",
        label: "disappointed face",
        tone: 0
      },
      {
        emoji: "😓",
        label: "downcast face with sweat",
        tone: 0
      },
      {
        emoji: "😩",
        label: "weary face",
        tone: 0
      },
      {
        emoji: "😫",
        label: "tired face",
        tone: 0
      },
      {
        emoji: "🥱",
        label: "yawning face",
        tone: 0
      },
      {
        emoji: "😤",
        label: "face with steam from nose",
        tone: 0
      },
      {
        emoji: "😡",
        label: "enraged face",
        tone: 0
      },
      {
        emoji: "😠",
        label: "angry face",
        tone: 0
      },
      {
        emoji: "🤬",
        label: "face with symbols on mouth",
        tone: 0
      },
      {
        emoji: "😈",
        label: "smiling face with horns",
        tone: 0
      },
      {
        emoji: "👿",
        label: "angry face with horns",
        tone: 0
      },
      {
        emoji: "💀",
        label: "skull",
        tone: 0
      },
      {
        emoji: "☠️",
        label: "skull and crossbones",
        tone: 0
      },
      {
        emoji: "💩",
        label: "pile of poo",
        tone: 0
      },
      {
        emoji: "🤡",
        label: "clown face",
        tone: 0
      },
      {
        emoji: "👹",
        label: "ogre",
        tone: 0
      },
      {
        emoji: "👺",
        label: "goblin",
        tone: 0
      },
      {
        emoji: "👻",
        label: "ghost",
        tone: 0
      },
      {
        emoji: "👽️",
        label: "alien",
        tone: 0
      },
      {
        emoji: "👾",
        label: "alien monster",
        tone: 0
      },
      {
        emoji: "🤖",
        label: "robot",
        tone: 0
      },
      {
        emoji: "😺",
        label: "grinning cat",
        tone: 0
      },
      {
        emoji: "😸",
        label: "grinning cat with smiling eyes",
        tone: 0
      },
      {
        emoji: "😹",
        label: "cat with tears of joy",
        tone: 0
      },
      {
        emoji: "😻",
        label: "smiling cat with heart-eyes",
        tone: 0
      },
      {
        emoji: "😼",
        label: "cat with wry smile",
        tone: 0
      },
      {
        emoji: "😽",
        label: "kissing cat",
        tone: 0
      },
      {
        emoji: "🙀",
        label: "weary cat",
        tone: 0
      },
      {
        emoji: "😿",
        label: "crying cat",
        tone: 0
      },
      {
        emoji: "😾",
        label: "pouting cat",
        tone: 0
      },
      {
        emoji: "🙈",
        label: "see-no-evil monkey",
        tone: 0
      },
      {
        emoji: "🙉",
        label: "hear-no-evil monkey",
        tone: 0
      },
      {
        emoji: "🙊",
        label: "speak-no-evil monkey",
        tone: 0
      },
      {
        emoji: "💋",
        label: "kiss mark",
        tone: 0
      },
      {
        emoji: "💌",
        label: "love letter",
        tone: 0
      },
      {
        emoji: "💘",
        label: "heart with arrow",
        tone: 0
      },
      {
        emoji: "💝",
        label: "heart with ribbon",
        tone: 0
      },
      {
        emoji: "💖",
        label: "sparkling heart",
        tone: 0
      },
      {
        emoji: "💗",
        label: "growing heart",
        tone: 0
      },
      {
        emoji: "💓",
        label: "beating heart",
        tone: 0
      },
      {
        emoji: "💞",
        label: "revolving hearts",
        tone: 0
      },
      {
        emoji: "💕",
        label: "two hearts",
        tone: 0
      },
      {
        emoji: "💟",
        label: "heart decoration",
        tone: 0
      },
      {
        emoji: "❣️",
        label: "heart exclamation",
        tone: 0
      },
      {
        emoji: "💔",
        label: "broken heart",
        tone: 0
      },
      {
        emoji: "❤️‍🔥",
        label: "heart on fire",
        tone: 0
      },
      {
        emoji: "❤️‍🩹",
        label: "mending heart",
        tone: 0
      },
      {
        emoji: "❤️",
        label: "red heart",
        tone: 0
      },
      {
        emoji: "🧡",
        label: "orange heart",
        tone: 0
      },
      {
        emoji: "💛",
        label: "yellow heart",
        tone: 0
      },
      {
        emoji: "💚",
        label: "green heart",
        tone: 0
      },
      {
        emoji: "💙",
        label: "blue heart",
        tone: 0
      },
      {
        emoji: "💜",
        label: "purple heart",
        tone: 0
      },
      {
        emoji: "🤎",
        label: "brown heart",
        tone: 0
      },
      {
        emoji: "🖤",
        label: "black heart",
        tone: 0
      },
      {
        emoji: "🤍",
        label: "white heart",
        tone: 0
      },
      {
        emoji: "💯",
        label: "hundred points",
        tone: 0
      },
      {
        emoji: "💢",
        label: "anger symbol",
        tone: 0
      },
      {
        emoji: "💥",
        label: "collision",
        tone: 0
      },
      {
        emoji: "💫",
        label: "dizzy",
        tone: 0
      },
      {
        emoji: "💦",
        label: "sweat droplets",
        tone: 0
      },
      {
        emoji: "💨",
        label: "dashing away",
        tone: 0
      },
      {
        emoji: "🕳️",
        label: "hole",
        tone: 0
      },
      {
        emoji: "💣️",
        label: "bomb",
        tone: 0
      },
      {
        emoji: "💬",
        label: "speech balloon",
        tone: 0
      },
      {
        emoji: "👁️‍🗨️",
        label: "eye in speech bubble",
        tone: 0
      },
      {
        emoji: "🗨️",
        label: "left speech bubble",
        tone: 0
      },
      {
        emoji: "🗯️",
        label: "right anger bubble",
        tone: 0
      },
      {
        emoji: "💭",
        label: "thought balloon",
        tone: 0
      },
      {
        emoji: "💤",
        label: "ZZZ",
        tone: 0
      }
    ]
  },
  {
    name: "people-body",
    emojis: [
      {
        emoji: "👋",
        label: "waving hand",
        tone: 0,
        skins: [
          {
            emoji: "👋🏻",
            label: "waving hand: light skin tone",
            tone: 1
          },
          {
            emoji: "👋🏼",
            label: "waving hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👋🏽",
            label: "waving hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "👋🏾",
            label: "waving hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👋🏿",
            label: "waving hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤚",
        label: "raised back of hand",
        tone: 0,
        skins: [
          {
            emoji: "🤚🏻",
            label: "raised back of hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🤚🏼",
            label: "raised back of hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤚🏽",
            label: "raised back of hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤚🏾",
            label: "raised back of hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤚🏿",
            label: "raised back of hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🖐️",
        label: "hand with fingers splayed",
        tone: 0,
        skins: [
          {
            emoji: "🖐🏻",
            label: "hand with fingers splayed: light skin tone",
            tone: 1
          },
          {
            emoji: "🖐🏼",
            label: "hand with fingers splayed: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🖐🏽",
            label: "hand with fingers splayed: medium skin tone",
            tone: 3
          },
          {
            emoji: "🖐🏾",
            label: "hand with fingers splayed: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🖐🏿",
            label: "hand with fingers splayed: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "✋",
        label: "raised hand",
        tone: 0,
        skins: [
          {
            emoji: "✋🏻",
            label: "raised hand: light skin tone",
            tone: 1
          },
          {
            emoji: "✋🏼",
            label: "raised hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "✋🏽",
            label: "raised hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "✋🏾",
            label: "raised hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "✋🏿",
            label: "raised hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🖖",
        label: "vulcan salute",
        tone: 0,
        skins: [
          {
            emoji: "🖖🏻",
            label: "vulcan salute: light skin tone",
            tone: 1
          },
          {
            emoji: "🖖🏼",
            label: "vulcan salute: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🖖🏽",
            label: "vulcan salute: medium skin tone",
            tone: 3
          },
          {
            emoji: "🖖🏾",
            label: "vulcan salute: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🖖🏿",
            label: "vulcan salute: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👌",
        label: "OK hand",
        tone: 0,
        skins: [
          {
            emoji: "👌🏻",
            label: "OK hand: light skin tone",
            tone: 1
          },
          {
            emoji: "👌🏼",
            label: "OK hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👌🏽",
            label: "OK hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "👌🏾",
            label: "OK hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👌🏿",
            label: "OK hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤌",
        label: "pinched fingers",
        tone: 0,
        skins: [
          {
            emoji: "🤌🏻",
            label: "pinched fingers: light skin tone",
            tone: 1
          },
          {
            emoji: "🤌🏼",
            label: "pinched fingers: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤌🏽",
            label: "pinched fingers: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤌🏾",
            label: "pinched fingers: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤌🏿",
            label: "pinched fingers: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤏",
        label: "pinching hand",
        tone: 0,
        skins: [
          {
            emoji: "🤏🏻",
            label: "pinching hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🤏🏼",
            label: "pinching hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤏🏽",
            label: "pinching hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤏🏾",
            label: "pinching hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤏🏿",
            label: "pinching hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "✌️",
        label: "victory hand",
        tone: 0,
        skins: [
          {
            emoji: "✌🏻",
            label: "victory hand: light skin tone",
            tone: 1
          },
          {
            emoji: "✌🏼",
            label: "victory hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "✌🏽",
            label: "victory hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "✌🏾",
            label: "victory hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "✌🏿",
            label: "victory hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤞",
        label: "crossed fingers",
        tone: 0,
        skins: [
          {
            emoji: "🤞🏻",
            label: "crossed fingers: light skin tone",
            tone: 1
          },
          {
            emoji: "🤞🏼",
            label: "crossed fingers: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤞🏽",
            label: "crossed fingers: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤞🏾",
            label: "crossed fingers: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤞🏿",
            label: "crossed fingers: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤟",
        label: "love-you gesture",
        tone: 0,
        skins: [
          {
            emoji: "🤟🏻",
            label: "love-you gesture: light skin tone",
            tone: 1
          },
          {
            emoji: "🤟🏼",
            label: "love-you gesture: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤟🏽",
            label: "love-you gesture: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤟🏾",
            label: "love-you gesture: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤟🏿",
            label: "love-you gesture: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤘",
        label: "sign of the horns",
        tone: 0,
        skins: [
          {
            emoji: "🤘🏻",
            label: "sign of the horns: light skin tone",
            tone: 1
          },
          {
            emoji: "🤘🏼",
            label: "sign of the horns: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤘🏽",
            label: "sign of the horns: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤘🏾",
            label: "sign of the horns: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤘🏿",
            label: "sign of the horns: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤙",
        label: "call me hand",
        tone: 0,
        skins: [
          {
            emoji: "🤙🏻",
            label: "call me hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🤙🏼",
            label: "call me hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤙🏽",
            label: "call me hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤙🏾",
            label: "call me hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤙🏿",
            label: "call me hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👈️",
        label: "backhand index pointing left",
        tone: 0,
        skins: [
          {
            emoji: "👈🏻",
            label: "backhand index pointing left: light skin tone",
            tone: 1
          },
          {
            emoji: "👈🏼",
            label: "backhand index pointing left: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👈🏽",
            label: "backhand index pointing left: medium skin tone",
            tone: 3
          },
          {
            emoji: "👈🏾",
            label: "backhand index pointing left: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👈🏿",
            label: "backhand index pointing left: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👉️",
        label: "backhand index pointing right",
        tone: 0,
        skins: [
          {
            emoji: "👉🏻",
            label: "backhand index pointing right: light skin tone",
            tone: 1
          },
          {
            emoji: "👉🏼",
            label: "backhand index pointing right: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👉🏽",
            label: "backhand index pointing right: medium skin tone",
            tone: 3
          },
          {
            emoji: "👉🏾",
            label: "backhand index pointing right: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👉🏿",
            label: "backhand index pointing right: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👆️",
        label: "backhand index pointing up",
        tone: 0,
        skins: [
          {
            emoji: "👆🏻",
            label: "backhand index pointing up: light skin tone",
            tone: 1
          },
          {
            emoji: "👆🏼",
            label: "backhand index pointing up: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👆🏽",
            label: "backhand index pointing up: medium skin tone",
            tone: 3
          },
          {
            emoji: "👆🏾",
            label: "backhand index pointing up: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👆🏿",
            label: "backhand index pointing up: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🖕",
        label: "middle finger",
        tone: 0,
        skins: [
          {
            emoji: "🖕🏻",
            label: "middle finger: light skin tone",
            tone: 1
          },
          {
            emoji: "🖕🏼",
            label: "middle finger: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🖕🏽",
            label: "middle finger: medium skin tone",
            tone: 3
          },
          {
            emoji: "🖕🏾",
            label: "middle finger: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🖕🏿",
            label: "middle finger: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👇️",
        label: "backhand index pointing down",
        tone: 0,
        skins: [
          {
            emoji: "👇🏻",
            label: "backhand index pointing down: light skin tone",
            tone: 1
          },
          {
            emoji: "👇🏼",
            label: "backhand index pointing down: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👇🏽",
            label: "backhand index pointing down: medium skin tone",
            tone: 3
          },
          {
            emoji: "👇🏾",
            label: "backhand index pointing down: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👇🏿",
            label: "backhand index pointing down: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "☝️",
        label: "index pointing up",
        tone: 0,
        skins: [
          {
            emoji: "☝🏻",
            label: "index pointing up: light skin tone",
            tone: 1
          },
          {
            emoji: "☝🏼",
            label: "index pointing up: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "☝🏽",
            label: "index pointing up: medium skin tone",
            tone: 3
          },
          {
            emoji: "☝🏾",
            label: "index pointing up: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "☝🏿",
            label: "index pointing up: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👍️",
        label: "thumbs up",
        tone: 0,
        skins: [
          {
            emoji: "👍🏻",
            label: "thumbs up: light skin tone",
            tone: 1
          },
          {
            emoji: "👍🏼",
            label: "thumbs up: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👍🏽",
            label: "thumbs up: medium skin tone",
            tone: 3
          },
          {
            emoji: "👍🏾",
            label: "thumbs up: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👍🏿",
            label: "thumbs up: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👎️",
        label: "thumbs down",
        tone: 0,
        skins: [
          {
            emoji: "👎🏻",
            label: "thumbs down: light skin tone",
            tone: 1
          },
          {
            emoji: "👎🏼",
            label: "thumbs down: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👎🏽",
            label: "thumbs down: medium skin tone",
            tone: 3
          },
          {
            emoji: "👎🏾",
            label: "thumbs down: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👎🏿",
            label: "thumbs down: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "✊",
        label: "raised fist",
        tone: 0,
        skins: [
          {
            emoji: "✊🏻",
            label: "raised fist: light skin tone",
            tone: 1
          },
          {
            emoji: "✊🏼",
            label: "raised fist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "✊🏽",
            label: "raised fist: medium skin tone",
            tone: 3
          },
          {
            emoji: "✊🏾",
            label: "raised fist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "✊🏿",
            label: "raised fist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👊",
        label: "oncoming fist",
        tone: 0,
        skins: [
          {
            emoji: "👊🏻",
            label: "oncoming fist: light skin tone",
            tone: 1
          },
          {
            emoji: "👊🏼",
            label: "oncoming fist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👊🏽",
            label: "oncoming fist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👊🏾",
            label: "oncoming fist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👊🏿",
            label: "oncoming fist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤛",
        label: "left-facing fist",
        tone: 0,
        skins: [
          {
            emoji: "🤛🏻",
            label: "left-facing fist: light skin tone",
            tone: 1
          },
          {
            emoji: "🤛🏼",
            label: "left-facing fist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤛🏽",
            label: "left-facing fist: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤛🏾",
            label: "left-facing fist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤛🏿",
            label: "left-facing fist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤜",
        label: "right-facing fist",
        tone: 0,
        skins: [
          {
            emoji: "🤜🏻",
            label: "right-facing fist: light skin tone",
            tone: 1
          },
          {
            emoji: "🤜🏼",
            label: "right-facing fist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤜🏽",
            label: "right-facing fist: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤜🏾",
            label: "right-facing fist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤜🏿",
            label: "right-facing fist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👏",
        label: "clapping hands",
        tone: 0,
        skins: [
          {
            emoji: "👏🏻",
            label: "clapping hands: light skin tone",
            tone: 1
          },
          {
            emoji: "👏🏼",
            label: "clapping hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👏🏽",
            label: "clapping hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "👏🏾",
            label: "clapping hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👏🏿",
            label: "clapping hands: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙌",
        label: "raising hands",
        tone: 0,
        skins: [
          {
            emoji: "🙌🏻",
            label: "raising hands: light skin tone",
            tone: 1
          },
          {
            emoji: "🙌🏼",
            label: "raising hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙌🏽",
            label: "raising hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙌🏾",
            label: "raising hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙌🏿",
            label: "raising hands: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👐",
        label: "open hands",
        tone: 0,
        skins: [
          {
            emoji: "👐🏻",
            label: "open hands: light skin tone",
            tone: 1
          },
          {
            emoji: "👐🏼",
            label: "open hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👐🏽",
            label: "open hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "👐🏾",
            label: "open hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👐🏿",
            label: "open hands: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤲",
        label: "palms up together",
        tone: 0,
        skins: [
          {
            emoji: "🤲🏻",
            label: "palms up together: light skin tone",
            tone: 1
          },
          {
            emoji: "🤲🏼",
            label: "palms up together: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤲🏽",
            label: "palms up together: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤲🏾",
            label: "palms up together: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤲🏿",
            label: "palms up together: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤝",
        label: "handshake",
        tone: 0,
        skins: [
          {
            emoji: "🤝🏻",
            label: "handshake: light skin tone",
            tone: 1
          },
          {
            emoji: "🤝🏼",
            label: "handshake: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤝🏽",
            label: "handshake: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤝🏾",
            label: "handshake: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤝🏿",
            label: "handshake: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙏",
        label: "folded hands",
        tone: 0,
        skins: [
          {
            emoji: "🙏🏻",
            label: "folded hands: light skin tone",
            tone: 1
          },
          {
            emoji: "🙏🏼",
            label: "folded hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙏🏽",
            label: "folded hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙏🏾",
            label: "folded hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙏🏿",
            label: "folded hands: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "✍️",
        label: "writing hand",
        tone: 0,
        skins: [
          {
            emoji: "✍🏻",
            label: "writing hand: light skin tone",
            tone: 1
          },
          {
            emoji: "✍🏼",
            label: "writing hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "✍🏽",
            label: "writing hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "✍🏾",
            label: "writing hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "✍🏿",
            label: "writing hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💅",
        label: "nail polish",
        tone: 0,
        skins: [
          {
            emoji: "💅🏻",
            label: "nail polish: light skin tone",
            tone: 1
          },
          {
            emoji: "💅🏼",
            label: "nail polish: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💅🏽",
            label: "nail polish: medium skin tone",
            tone: 3
          },
          {
            emoji: "💅🏾",
            label: "nail polish: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💅🏿",
            label: "nail polish: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤳",
        label: "selfie",
        tone: 0,
        skins: [
          {
            emoji: "🤳🏻",
            label: "selfie: light skin tone",
            tone: 1
          },
          {
            emoji: "🤳🏼",
            label: "selfie: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤳🏽",
            label: "selfie: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤳🏾",
            label: "selfie: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤳🏿",
            label: "selfie: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💪",
        label: "flexed biceps",
        tone: 0,
        skins: [
          {
            emoji: "💪🏻",
            label: "flexed biceps: light skin tone",
            tone: 1
          },
          {
            emoji: "💪🏼",
            label: "flexed biceps: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💪🏽",
            label: "flexed biceps: medium skin tone",
            tone: 3
          },
          {
            emoji: "💪🏾",
            label: "flexed biceps: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💪🏿",
            label: "flexed biceps: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦾",
        label: "mechanical arm",
        tone: 0
      },
      {
        emoji: "🦿",
        label: "mechanical leg",
        tone: 0
      },
      {
        emoji: "🦵",
        label: "leg",
        tone: 0,
        skins: [
          {
            emoji: "🦵🏻",
            label: "leg: light skin tone",
            tone: 1
          },
          {
            emoji: "🦵🏼",
            label: "leg: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦵🏽",
            label: "leg: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦵🏾",
            label: "leg: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦵🏿",
            label: "leg: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦶",
        label: "foot",
        tone: 0,
        skins: [
          {
            emoji: "🦶🏻",
            label: "foot: light skin tone",
            tone: 1
          },
          {
            emoji: "🦶🏼",
            label: "foot: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦶🏽",
            label: "foot: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦶🏾",
            label: "foot: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦶🏿",
            label: "foot: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👂️",
        label: "ear",
        tone: 0,
        skins: [
          {
            emoji: "👂🏻",
            label: "ear: light skin tone",
            tone: 1
          },
          {
            emoji: "👂🏼",
            label: "ear: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👂🏽",
            label: "ear: medium skin tone",
            tone: 3
          },
          {
            emoji: "👂🏾",
            label: "ear: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👂🏿",
            label: "ear: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦻",
        label: "ear with hearing aid",
        tone: 0,
        skins: [
          {
            emoji: "🦻🏻",
            label: "ear with hearing aid: light skin tone",
            tone: 1
          },
          {
            emoji: "🦻🏼",
            label: "ear with hearing aid: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦻🏽",
            label: "ear with hearing aid: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦻🏾",
            label: "ear with hearing aid: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦻🏿",
            label: "ear with hearing aid: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👃",
        label: "nose",
        tone: 0,
        skins: [
          {
            emoji: "👃🏻",
            label: "nose: light skin tone",
            tone: 1
          },
          {
            emoji: "👃🏼",
            label: "nose: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👃🏽",
            label: "nose: medium skin tone",
            tone: 3
          },
          {
            emoji: "👃🏾",
            label: "nose: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👃🏿",
            label: "nose: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧠",
        label: "brain",
        tone: 0
      },
      {
        emoji: "🫀",
        label: "anatomical heart",
        tone: 0
      },
      {
        emoji: "🫁",
        label: "lungs",
        tone: 0
      },
      {
        emoji: "🦷",
        label: "tooth",
        tone: 0
      },
      {
        emoji: "🦴",
        label: "bone",
        tone: 0
      },
      {
        emoji: "👀",
        label: "eyes",
        tone: 0
      },
      {
        emoji: "👁️",
        label: "eye",
        tone: 0
      },
      {
        emoji: "👅",
        label: "tongue",
        tone: 0
      },
      {
        emoji: "👄",
        label: "mouth",
        tone: 0
      },
      {
        emoji: "👶",
        label: "baby",
        tone: 0,
        skins: [
          {
            emoji: "👶🏻",
            label: "baby: light skin tone",
            tone: 1
          },
          {
            emoji: "👶🏼",
            label: "baby: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👶🏽",
            label: "baby: medium skin tone",
            tone: 3
          },
          {
            emoji: "👶🏾",
            label: "baby: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👶🏿",
            label: "baby: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧒",
        label: "child",
        tone: 0,
        skins: [
          {
            emoji: "🧒🏻",
            label: "child: light skin tone",
            tone: 1
          },
          {
            emoji: "🧒🏼",
            label: "child: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧒🏽",
            label: "child: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧒🏾",
            label: "child: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧒🏿",
            label: "child: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👦",
        label: "boy",
        tone: 0,
        skins: [
          {
            emoji: "👦🏻",
            label: "boy: light skin tone",
            tone: 1
          },
          {
            emoji: "👦🏼",
            label: "boy: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👦🏽",
            label: "boy: medium skin tone",
            tone: 3
          },
          {
            emoji: "👦🏾",
            label: "boy: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👦🏿",
            label: "boy: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👧",
        label: "girl",
        tone: 0,
        skins: [
          {
            emoji: "👧🏻",
            label: "girl: light skin tone",
            tone: 1
          },
          {
            emoji: "👧🏼",
            label: "girl: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👧🏽",
            label: "girl: medium skin tone",
            tone: 3
          },
          {
            emoji: "👧🏾",
            label: "girl: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👧🏿",
            label: "girl: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑",
        label: "person",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻",
            label: "person: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼",
            label: "person: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽",
            label: "person: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾",
            label: "person: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿",
            label: "person: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👱",
        label: "person: blond hair",
        tone: 0,
        skins: [
          {
            emoji: "👱🏻",
            label: "person: light skin tone, blond hair",
            tone: 1
          },
          {
            emoji: "👱🏼",
            label: "person: medium-light skin tone, blond hair",
            tone: 2
          },
          {
            emoji: "👱🏽",
            label: "person: medium skin tone, blond hair",
            tone: 3
          },
          {
            emoji: "👱🏾",
            label: "person: medium-dark skin tone, blond hair",
            tone: 4
          },
          {
            emoji: "👱🏿",
            label: "person: dark skin tone, blond hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨",
        label: "man",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻",
            label: "man: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼",
            label: "man: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽",
            label: "man: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾",
            label: "man: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿",
            label: "man: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧔",
        label: "person: beard",
        tone: 0,
        skins: [
          {
            emoji: "🧔🏻",
            label: "person: light skin tone, beard",
            tone: 1
          },
          {
            emoji: "🧔🏼",
            label: "person: medium-light skin tone, beard",
            tone: 2
          },
          {
            emoji: "🧔🏽",
            label: "person: medium skin tone, beard",
            tone: 3
          },
          {
            emoji: "🧔🏾",
            label: "person: medium-dark skin tone, beard",
            tone: 4
          },
          {
            emoji: "🧔🏿",
            label: "person: dark skin tone, beard",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧔‍♂️",
        label: "man: beard",
        tone: 0,
        skins: [
          {
            emoji: "🧔🏻‍♂️",
            label: "man: light skin tone, beard",
            tone: 1
          },
          {
            emoji: "🧔🏼‍♂️",
            label: "man: medium-light skin tone, beard",
            tone: 2
          },
          {
            emoji: "🧔🏽‍♂️",
            label: "man: medium skin tone, beard",
            tone: 3
          },
          {
            emoji: "🧔🏾‍♂️",
            label: "man: medium-dark skin tone, beard",
            tone: 4
          },
          {
            emoji: "🧔🏿‍♂️",
            label: "man: dark skin tone, beard",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧔‍♀️",
        label: "woman: beard",
        tone: 0,
        skins: [
          {
            emoji: "🧔🏻‍♀️",
            label: "woman: light skin tone, beard",
            tone: 1
          },
          {
            emoji: "🧔🏼‍♀️",
            label: "woman: medium-light skin tone, beard",
            tone: 2
          },
          {
            emoji: "🧔🏽‍♀️",
            label: "woman: medium skin tone, beard",
            tone: 3
          },
          {
            emoji: "🧔🏾‍♀️",
            label: "woman: medium-dark skin tone, beard",
            tone: 4
          },
          {
            emoji: "🧔🏿‍♀️",
            label: "woman: dark skin tone, beard",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦰",
        label: "man: red hair",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦰",
            label: "man: light skin tone, red hair",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦰",
            label: "man: medium-light skin tone, red hair",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦰",
            label: "man: medium skin tone, red hair",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦰",
            label: "man: medium-dark skin tone, red hair",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦰",
            label: "man: dark skin tone, red hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦱",
        label: "man: curly hair",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦱",
            label: "man: light skin tone, curly hair",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦱",
            label: "man: medium-light skin tone, curly hair",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦱",
            label: "man: medium skin tone, curly hair",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦱",
            label: "man: medium-dark skin tone, curly hair",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦱",
            label: "man: dark skin tone, curly hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦳",
        label: "man: white hair",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦳",
            label: "man: light skin tone, white hair",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦳",
            label: "man: medium-light skin tone, white hair",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦳",
            label: "man: medium skin tone, white hair",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦳",
            label: "man: medium-dark skin tone, white hair",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦳",
            label: "man: dark skin tone, white hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦲",
        label: "man: bald",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦲",
            label: "man: light skin tone, bald",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦲",
            label: "man: medium-light skin tone, bald",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦲",
            label: "man: medium skin tone, bald",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦲",
            label: "man: medium-dark skin tone, bald",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦲",
            label: "man: dark skin tone, bald",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩",
        label: "woman",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻",
            label: "woman: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼",
            label: "woman: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽",
            label: "woman: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾",
            label: "woman: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿",
            label: "woman: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦰",
        label: "woman: red hair",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦰",
            label: "woman: light skin tone, red hair",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦰",
            label: "woman: medium-light skin tone, red hair",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦰",
            label: "woman: medium skin tone, red hair",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦰",
            label: "woman: medium-dark skin tone, red hair",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦰",
            label: "woman: dark skin tone, red hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦰",
        label: "person: red hair",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦰",
            label: "person: light skin tone, red hair",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦰",
            label: "person: medium-light skin tone, red hair",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦰",
            label: "person: medium skin tone, red hair",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦰",
            label: "person: medium-dark skin tone, red hair",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦰",
            label: "person: dark skin tone, red hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦱",
        label: "woman: curly hair",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦱",
            label: "woman: light skin tone, curly hair",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦱",
            label: "woman: medium-light skin tone, curly hair",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦱",
            label: "woman: medium skin tone, curly hair",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦱",
            label: "woman: medium-dark skin tone, curly hair",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦱",
            label: "woman: dark skin tone, curly hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦱",
        label: "person: curly hair",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦱",
            label: "person: light skin tone, curly hair",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦱",
            label: "person: medium-light skin tone, curly hair",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦱",
            label: "person: medium skin tone, curly hair",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦱",
            label: "person: medium-dark skin tone, curly hair",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦱",
            label: "person: dark skin tone, curly hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦳",
        label: "woman: white hair",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦳",
            label: "woman: light skin tone, white hair",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦳",
            label: "woman: medium-light skin tone, white hair",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦳",
            label: "woman: medium skin tone, white hair",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦳",
            label: "woman: medium-dark skin tone, white hair",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦳",
            label: "woman: dark skin tone, white hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦳",
        label: "person: white hair",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦳",
            label: "person: light skin tone, white hair",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦳",
            label: "person: medium-light skin tone, white hair",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦳",
            label: "person: medium skin tone, white hair",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦳",
            label: "person: medium-dark skin tone, white hair",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦳",
            label: "person: dark skin tone, white hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦲",
        label: "woman: bald",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦲",
            label: "woman: light skin tone, bald",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦲",
            label: "woman: medium-light skin tone, bald",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦲",
            label: "woman: medium skin tone, bald",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦲",
            label: "woman: medium-dark skin tone, bald",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦲",
            label: "woman: dark skin tone, bald",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦲",
        label: "person: bald",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦲",
            label: "person: light skin tone, bald",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦲",
            label: "person: medium-light skin tone, bald",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦲",
            label: "person: medium skin tone, bald",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦲",
            label: "person: medium-dark skin tone, bald",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦲",
            label: "person: dark skin tone, bald",
            tone: 5
          }
        ]
      },
      {
        emoji: "👱‍♀️",
        label: "woman: blond hair",
        tone: 0,
        skins: [
          {
            emoji: "👱🏻‍♀️",
            label: "woman: light skin tone, blond hair",
            tone: 1
          },
          {
            emoji: "👱🏼‍♀️",
            label: "woman: medium-light skin tone, blond hair",
            tone: 2
          },
          {
            emoji: "👱🏽‍♀️",
            label: "woman: medium skin tone, blond hair",
            tone: 3
          },
          {
            emoji: "👱🏾‍♀️",
            label: "woman: medium-dark skin tone, blond hair",
            tone: 4
          },
          {
            emoji: "👱🏿‍♀️",
            label: "woman: dark skin tone, blond hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "👱‍♂️",
        label: "man: blond hair",
        tone: 0,
        skins: [
          {
            emoji: "👱🏻‍♂️",
            label: "man: light skin tone, blond hair",
            tone: 1
          },
          {
            emoji: "👱🏼‍♂️",
            label: "man: medium-light skin tone, blond hair",
            tone: 2
          },
          {
            emoji: "👱🏽‍♂️",
            label: "man: medium skin tone, blond hair",
            tone: 3
          },
          {
            emoji: "👱🏾‍♂️",
            label: "man: medium-dark skin tone, blond hair",
            tone: 4
          },
          {
            emoji: "👱🏿‍♂️",
            label: "man: dark skin tone, blond hair",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧓",
        label: "older person",
        tone: 0,
        skins: [
          {
            emoji: "🧓🏻",
            label: "older person: light skin tone",
            tone: 1
          },
          {
            emoji: "🧓🏼",
            label: "older person: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧓🏽",
            label: "older person: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧓🏾",
            label: "older person: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧓🏿",
            label: "older person: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👴",
        label: "old man",
        tone: 0,
        skins: [
          {
            emoji: "👴🏻",
            label: "old man: light skin tone",
            tone: 1
          },
          {
            emoji: "👴🏼",
            label: "old man: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👴🏽",
            label: "old man: medium skin tone",
            tone: 3
          },
          {
            emoji: "👴🏾",
            label: "old man: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👴🏿",
            label: "old man: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👵",
        label: "old woman",
        tone: 0,
        skins: [
          {
            emoji: "👵🏻",
            label: "old woman: light skin tone",
            tone: 1
          },
          {
            emoji: "👵🏼",
            label: "old woman: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👵🏽",
            label: "old woman: medium skin tone",
            tone: 3
          },
          {
            emoji: "👵🏾",
            label: "old woman: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👵🏿",
            label: "old woman: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙍",
        label: "person frowning",
        tone: 0,
        skins: [
          {
            emoji: "🙍🏻",
            label: "person frowning: light skin tone",
            tone: 1
          },
          {
            emoji: "🙍🏼",
            label: "person frowning: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙍🏽",
            label: "person frowning: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙍🏾",
            label: "person frowning: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙍🏿",
            label: "person frowning: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙍‍♂️",
        label: "man frowning",
        tone: 0,
        skins: [
          {
            emoji: "🙍🏻‍♂️",
            label: "man frowning: light skin tone",
            tone: 1
          },
          {
            emoji: "🙍🏼‍♂️",
            label: "man frowning: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙍🏽‍♂️",
            label: "man frowning: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙍🏾‍♂️",
            label: "man frowning: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙍🏿‍♂️",
            label: "man frowning: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙍‍♀️",
        label: "woman frowning",
        tone: 0,
        skins: [
          {
            emoji: "🙍🏻‍♀️",
            label: "woman frowning: light skin tone",
            tone: 1
          },
          {
            emoji: "🙍🏼‍♀️",
            label: "woman frowning: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙍🏽‍♀️",
            label: "woman frowning: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙍🏾‍♀️",
            label: "woman frowning: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙍🏿‍♀️",
            label: "woman frowning: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙎",
        label: "person pouting",
        tone: 0,
        skins: [
          {
            emoji: "🙎🏻",
            label: "person pouting: light skin tone",
            tone: 1
          },
          {
            emoji: "🙎🏼",
            label: "person pouting: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙎🏽",
            label: "person pouting: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙎🏾",
            label: "person pouting: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙎🏿",
            label: "person pouting: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙎‍♂️",
        label: "man pouting",
        tone: 0,
        skins: [
          {
            emoji: "🙎🏻‍♂️",
            label: "man pouting: light skin tone",
            tone: 1
          },
          {
            emoji: "🙎🏼‍♂️",
            label: "man pouting: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙎🏽‍♂️",
            label: "man pouting: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙎🏾‍♂️",
            label: "man pouting: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙎🏿‍♂️",
            label: "man pouting: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙎‍♀️",
        label: "woman pouting",
        tone: 0,
        skins: [
          {
            emoji: "🙎🏻‍♀️",
            label: "woman pouting: light skin tone",
            tone: 1
          },
          {
            emoji: "🙎🏼‍♀️",
            label: "woman pouting: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙎🏽‍♀️",
            label: "woman pouting: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙎🏾‍♀️",
            label: "woman pouting: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙎🏿‍♀️",
            label: "woman pouting: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙅",
        label: "person gesturing NO",
        tone: 0,
        skins: [
          {
            emoji: "🙅🏻",
            label: "person gesturing NO: light skin tone",
            tone: 1
          },
          {
            emoji: "🙅🏼",
            label: "person gesturing NO: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙅🏽",
            label: "person gesturing NO: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙅🏾",
            label: "person gesturing NO: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙅🏿",
            label: "person gesturing NO: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙅‍♂️",
        label: "man gesturing NO",
        tone: 0,
        skins: [
          {
            emoji: "🙅🏻‍♂️",
            label: "man gesturing NO: light skin tone",
            tone: 1
          },
          {
            emoji: "🙅🏼‍♂️",
            label: "man gesturing NO: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙅🏽‍♂️",
            label: "man gesturing NO: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙅🏾‍♂️",
            label: "man gesturing NO: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙅🏿‍♂️",
            label: "man gesturing NO: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙅‍♀️",
        label: "woman gesturing NO",
        tone: 0,
        skins: [
          {
            emoji: "🙅🏻‍♀️",
            label: "woman gesturing NO: light skin tone",
            tone: 1
          },
          {
            emoji: "🙅🏼‍♀️",
            label: "woman gesturing NO: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙅🏽‍♀️",
            label: "woman gesturing NO: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙅🏾‍♀️",
            label: "woman gesturing NO: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙅🏿‍♀️",
            label: "woman gesturing NO: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙆",
        label: "person gesturing OK",
        tone: 0,
        skins: [
          {
            emoji: "🙆🏻",
            label: "person gesturing OK: light skin tone",
            tone: 1
          },
          {
            emoji: "🙆🏼",
            label: "person gesturing OK: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙆🏽",
            label: "person gesturing OK: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙆🏾",
            label: "person gesturing OK: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙆🏿",
            label: "person gesturing OK: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙆‍♂️",
        label: "man gesturing OK",
        tone: 0,
        skins: [
          {
            emoji: "🙆🏻‍♂️",
            label: "man gesturing OK: light skin tone",
            tone: 1
          },
          {
            emoji: "🙆🏼‍♂️",
            label: "man gesturing OK: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙆🏽‍♂️",
            label: "man gesturing OK: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙆🏾‍♂️",
            label: "man gesturing OK: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙆🏿‍♂️",
            label: "man gesturing OK: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙆‍♀️",
        label: "woman gesturing OK",
        tone: 0,
        skins: [
          {
            emoji: "🙆🏻‍♀️",
            label: "woman gesturing OK: light skin tone",
            tone: 1
          },
          {
            emoji: "🙆🏼‍♀️",
            label: "woman gesturing OK: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙆🏽‍♀️",
            label: "woman gesturing OK: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙆🏾‍♀️",
            label: "woman gesturing OK: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙆🏿‍♀️",
            label: "woman gesturing OK: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💁",
        label: "person tipping hand",
        tone: 0,
        skins: [
          {
            emoji: "💁🏻",
            label: "person tipping hand: light skin tone",
            tone: 1
          },
          {
            emoji: "💁🏼",
            label: "person tipping hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💁🏽",
            label: "person tipping hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "💁🏾",
            label: "person tipping hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💁🏿",
            label: "person tipping hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💁‍♂️",
        label: "man tipping hand",
        tone: 0,
        skins: [
          {
            emoji: "💁🏻‍♂️",
            label: "man tipping hand: light skin tone",
            tone: 1
          },
          {
            emoji: "💁🏼‍♂️",
            label: "man tipping hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💁🏽‍♂️",
            label: "man tipping hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "💁🏾‍♂️",
            label: "man tipping hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💁🏿‍♂️",
            label: "man tipping hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💁‍♀️",
        label: "woman tipping hand",
        tone: 0,
        skins: [
          {
            emoji: "💁🏻‍♀️",
            label: "woman tipping hand: light skin tone",
            tone: 1
          },
          {
            emoji: "💁🏼‍♀️",
            label: "woman tipping hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💁🏽‍♀️",
            label: "woman tipping hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "💁🏾‍♀️",
            label: "woman tipping hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💁🏿‍♀️",
            label: "woman tipping hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙋",
        label: "person raising hand",
        tone: 0,
        skins: [
          {
            emoji: "🙋🏻",
            label: "person raising hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🙋🏼",
            label: "person raising hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙋🏽",
            label: "person raising hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙋🏾",
            label: "person raising hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙋🏿",
            label: "person raising hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙋‍♂️",
        label: "man raising hand",
        tone: 0,
        skins: [
          {
            emoji: "🙋🏻‍♂️",
            label: "man raising hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🙋🏼‍♂️",
            label: "man raising hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙋🏽‍♂️",
            label: "man raising hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙋🏾‍♂️",
            label: "man raising hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙋🏿‍♂️",
            label: "man raising hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙋‍♀️",
        label: "woman raising hand",
        tone: 0,
        skins: [
          {
            emoji: "🙋🏻‍♀️",
            label: "woman raising hand: light skin tone",
            tone: 1
          },
          {
            emoji: "🙋🏼‍♀️",
            label: "woman raising hand: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙋🏽‍♀️",
            label: "woman raising hand: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙋🏾‍♀️",
            label: "woman raising hand: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙋🏿‍♀️",
            label: "woman raising hand: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧏",
        label: "deaf person",
        tone: 0,
        skins: [
          {
            emoji: "🧏🏻",
            label: "deaf person: light skin tone",
            tone: 1
          },
          {
            emoji: "🧏🏼",
            label: "deaf person: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧏🏽",
            label: "deaf person: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧏🏾",
            label: "deaf person: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧏🏿",
            label: "deaf person: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧏‍♂️",
        label: "deaf man",
        tone: 0,
        skins: [
          {
            emoji: "🧏🏻‍♂️",
            label: "deaf man: light skin tone",
            tone: 1
          },
          {
            emoji: "🧏🏼‍♂️",
            label: "deaf man: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧏🏽‍♂️",
            label: "deaf man: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧏🏾‍♂️",
            label: "deaf man: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧏🏿‍♂️",
            label: "deaf man: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧏‍♀️",
        label: "deaf woman",
        tone: 0,
        skins: [
          {
            emoji: "🧏🏻‍♀️",
            label: "deaf woman: light skin tone",
            tone: 1
          },
          {
            emoji: "🧏🏼‍♀️",
            label: "deaf woman: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧏🏽‍♀️",
            label: "deaf woman: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧏🏾‍♀️",
            label: "deaf woman: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧏🏿‍♀️",
            label: "deaf woman: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙇",
        label: "person bowing",
        tone: 0,
        skins: [
          {
            emoji: "🙇🏻",
            label: "person bowing: light skin tone",
            tone: 1
          },
          {
            emoji: "🙇🏼",
            label: "person bowing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙇🏽",
            label: "person bowing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙇🏾",
            label: "person bowing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙇🏿",
            label: "person bowing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙇‍♂️",
        label: "man bowing",
        tone: 0,
        skins: [
          {
            emoji: "🙇🏻‍♂️",
            label: "man bowing: light skin tone",
            tone: 1
          },
          {
            emoji: "🙇🏼‍♂️",
            label: "man bowing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙇🏽‍♂️",
            label: "man bowing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙇🏾‍♂️",
            label: "man bowing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙇🏿‍♂️",
            label: "man bowing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🙇‍♀️",
        label: "woman bowing",
        tone: 0,
        skins: [
          {
            emoji: "🙇🏻‍♀️",
            label: "woman bowing: light skin tone",
            tone: 1
          },
          {
            emoji: "🙇🏼‍♀️",
            label: "woman bowing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🙇🏽‍♀️",
            label: "woman bowing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🙇🏾‍♀️",
            label: "woman bowing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🙇🏿‍♀️",
            label: "woman bowing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤦",
        label: "person facepalming",
        tone: 0,
        skins: [
          {
            emoji: "🤦🏻",
            label: "person facepalming: light skin tone",
            tone: 1
          },
          {
            emoji: "🤦🏼",
            label: "person facepalming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤦🏽",
            label: "person facepalming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤦🏾",
            label: "person facepalming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤦🏿",
            label: "person facepalming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤦‍♂️",
        label: "man facepalming",
        tone: 0,
        skins: [
          {
            emoji: "🤦🏻‍♂️",
            label: "man facepalming: light skin tone",
            tone: 1
          },
          {
            emoji: "🤦🏼‍♂️",
            label: "man facepalming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤦🏽‍♂️",
            label: "man facepalming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤦🏾‍♂️",
            label: "man facepalming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤦🏿‍♂️",
            label: "man facepalming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤦‍♀️",
        label: "woman facepalming",
        tone: 0,
        skins: [
          {
            emoji: "🤦🏻‍♀️",
            label: "woman facepalming: light skin tone",
            tone: 1
          },
          {
            emoji: "🤦🏼‍♀️",
            label: "woman facepalming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤦🏽‍♀️",
            label: "woman facepalming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤦🏾‍♀️",
            label: "woman facepalming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤦🏿‍♀️",
            label: "woman facepalming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤷",
        label: "person shrugging",
        tone: 0,
        skins: [
          {
            emoji: "🤷🏻",
            label: "person shrugging: light skin tone",
            tone: 1
          },
          {
            emoji: "🤷🏼",
            label: "person shrugging: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤷🏽",
            label: "person shrugging: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤷🏾",
            label: "person shrugging: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤷🏿",
            label: "person shrugging: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤷‍♂️",
        label: "man shrugging",
        tone: 0,
        skins: [
          {
            emoji: "🤷🏻‍♂️",
            label: "man shrugging: light skin tone",
            tone: 1
          },
          {
            emoji: "🤷🏼‍♂️",
            label: "man shrugging: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤷🏽‍♂️",
            label: "man shrugging: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤷🏾‍♂️",
            label: "man shrugging: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤷🏿‍♂️",
            label: "man shrugging: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤷‍♀️",
        label: "woman shrugging",
        tone: 0,
        skins: [
          {
            emoji: "🤷🏻‍♀️",
            label: "woman shrugging: light skin tone",
            tone: 1
          },
          {
            emoji: "🤷🏼‍♀️",
            label: "woman shrugging: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤷🏽‍♀️",
            label: "woman shrugging: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤷🏾‍♀️",
            label: "woman shrugging: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤷🏿‍♀️",
            label: "woman shrugging: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍⚕️",
        label: "health worker",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍⚕️",
            label: "health worker: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍⚕️",
            label: "health worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍⚕️",
            label: "health worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍⚕️",
            label: "health worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍⚕️",
            label: "health worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍⚕️",
        label: "man health worker",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍⚕️",
            label: "man health worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍⚕️",
            label: "man health worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍⚕️",
            label: "man health worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍⚕️",
            label: "man health worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍⚕️",
            label: "man health worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍⚕️",
        label: "woman health worker",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍⚕️",
            label: "woman health worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍⚕️",
            label: "woman health worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍⚕️",
            label: "woman health worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍⚕️",
            label: "woman health worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍⚕️",
            label: "woman health worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🎓",
        label: "student",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🎓",
            label: "student: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🎓",
            label: "student: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🎓",
            label: "student: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🎓",
            label: "student: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🎓",
            label: "student: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🎓",
        label: "man student",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🎓",
            label: "man student: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🎓",
            label: "man student: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🎓",
            label: "man student: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🎓",
            label: "man student: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🎓",
            label: "man student: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🎓",
        label: "woman student",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🎓",
            label: "woman student: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🎓",
            label: "woman student: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🎓",
            label: "woman student: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🎓",
            label: "woman student: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🎓",
            label: "woman student: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🏫",
        label: "teacher",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🏫",
            label: "teacher: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🏫",
            label: "teacher: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🏫",
            label: "teacher: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🏫",
            label: "teacher: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🏫",
            label: "teacher: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🏫",
        label: "man teacher",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🏫",
            label: "man teacher: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🏫",
            label: "man teacher: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🏫",
            label: "man teacher: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🏫",
            label: "man teacher: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🏫",
            label: "man teacher: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🏫",
        label: "woman teacher",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🏫",
            label: "woman teacher: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🏫",
            label: "woman teacher: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🏫",
            label: "woman teacher: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🏫",
            label: "woman teacher: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🏫",
            label: "woman teacher: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍⚖️",
        label: "judge",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍⚖️",
            label: "judge: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍⚖️",
            label: "judge: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍⚖️",
            label: "judge: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍⚖️",
            label: "judge: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍⚖️",
            label: "judge: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍⚖️",
        label: "man judge",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍⚖️",
            label: "man judge: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍⚖️",
            label: "man judge: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍⚖️",
            label: "man judge: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍⚖️",
            label: "man judge: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍⚖️",
            label: "man judge: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍⚖️",
        label: "woman judge",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍⚖️",
            label: "woman judge: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍⚖️",
            label: "woman judge: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍⚖️",
            label: "woman judge: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍⚖️",
            label: "woman judge: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍⚖️",
            label: "woman judge: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🌾",
        label: "farmer",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🌾",
            label: "farmer: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🌾",
            label: "farmer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🌾",
            label: "farmer: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🌾",
            label: "farmer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🌾",
            label: "farmer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🌾",
        label: "man farmer",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🌾",
            label: "man farmer: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🌾",
            label: "man farmer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🌾",
            label: "man farmer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🌾",
            label: "man farmer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🌾",
            label: "man farmer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🌾",
        label: "woman farmer",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🌾",
            label: "woman farmer: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🌾",
            label: "woman farmer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🌾",
            label: "woman farmer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🌾",
            label: "woman farmer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🌾",
            label: "woman farmer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🍳",
        label: "cook",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🍳",
            label: "cook: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🍳",
            label: "cook: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🍳",
            label: "cook: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🍳",
            label: "cook: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🍳",
            label: "cook: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🍳",
        label: "man cook",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🍳",
            label: "man cook: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🍳",
            label: "man cook: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🍳",
            label: "man cook: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🍳",
            label: "man cook: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🍳",
            label: "man cook: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🍳",
        label: "woman cook",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🍳",
            label: "woman cook: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🍳",
            label: "woman cook: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🍳",
            label: "woman cook: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🍳",
            label: "woman cook: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🍳",
            label: "woman cook: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🔧",
        label: "mechanic",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🔧",
            label: "mechanic: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🔧",
            label: "mechanic: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🔧",
            label: "mechanic: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🔧",
            label: "mechanic: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🔧",
            label: "mechanic: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🔧",
        label: "man mechanic",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🔧",
            label: "man mechanic: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🔧",
            label: "man mechanic: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🔧",
            label: "man mechanic: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🔧",
            label: "man mechanic: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🔧",
            label: "man mechanic: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🔧",
        label: "woman mechanic",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🔧",
            label: "woman mechanic: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🔧",
            label: "woman mechanic: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🔧",
            label: "woman mechanic: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🔧",
            label: "woman mechanic: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🔧",
            label: "woman mechanic: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🏭",
        label: "factory worker",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🏭",
            label: "factory worker: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🏭",
            label: "factory worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🏭",
            label: "factory worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🏭",
            label: "factory worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🏭",
            label: "factory worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🏭",
        label: "man factory worker",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🏭",
            label: "man factory worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🏭",
            label: "man factory worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🏭",
            label: "man factory worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🏭",
            label: "man factory worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🏭",
            label: "man factory worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🏭",
        label: "woman factory worker",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🏭",
            label: "woman factory worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🏭",
            label: "woman factory worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🏭",
            label: "woman factory worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🏭",
            label: "woman factory worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🏭",
            label: "woman factory worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍💼",
        label: "office worker",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍💼",
            label: "office worker: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍💼",
            label: "office worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍💼",
            label: "office worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍💼",
            label: "office worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍💼",
            label: "office worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍💼",
        label: "man office worker",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍💼",
            label: "man office worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍💼",
            label: "man office worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍💼",
            label: "man office worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍💼",
            label: "man office worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍💼",
            label: "man office worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍💼",
        label: "woman office worker",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍💼",
            label: "woman office worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍💼",
            label: "woman office worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍💼",
            label: "woman office worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍💼",
            label: "woman office worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍💼",
            label: "woman office worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🔬",
        label: "scientist",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🔬",
            label: "scientist: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🔬",
            label: "scientist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🔬",
            label: "scientist: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🔬",
            label: "scientist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🔬",
            label: "scientist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🔬",
        label: "man scientist",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🔬",
            label: "man scientist: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🔬",
            label: "man scientist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🔬",
            label: "man scientist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🔬",
            label: "man scientist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🔬",
            label: "man scientist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🔬",
        label: "woman scientist",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🔬",
            label: "woman scientist: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🔬",
            label: "woman scientist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🔬",
            label: "woman scientist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🔬",
            label: "woman scientist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🔬",
            label: "woman scientist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍💻",
        label: "technologist",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍💻",
            label: "technologist: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍💻",
            label: "technologist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍💻",
            label: "technologist: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍💻",
            label: "technologist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍💻",
            label: "technologist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍💻",
        label: "man technologist",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍💻",
            label: "man technologist: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍💻",
            label: "man technologist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍💻",
            label: "man technologist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍💻",
            label: "man technologist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍💻",
            label: "man technologist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍💻",
        label: "woman technologist",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍💻",
            label: "woman technologist: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍💻",
            label: "woman technologist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍💻",
            label: "woman technologist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍💻",
            label: "woman technologist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍💻",
            label: "woman technologist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🎤",
        label: "singer",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🎤",
            label: "singer: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🎤",
            label: "singer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🎤",
            label: "singer: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🎤",
            label: "singer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🎤",
            label: "singer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🎤",
        label: "man singer",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🎤",
            label: "man singer: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🎤",
            label: "man singer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🎤",
            label: "man singer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🎤",
            label: "man singer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🎤",
            label: "man singer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🎤",
        label: "woman singer",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🎤",
            label: "woman singer: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🎤",
            label: "woman singer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🎤",
            label: "woman singer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🎤",
            label: "woman singer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🎤",
            label: "woman singer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🎨",
        label: "artist",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🎨",
            label: "artist: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🎨",
            label: "artist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🎨",
            label: "artist: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🎨",
            label: "artist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🎨",
            label: "artist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🎨",
        label: "man artist",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🎨",
            label: "man artist: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🎨",
            label: "man artist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🎨",
            label: "man artist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🎨",
            label: "man artist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🎨",
            label: "man artist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🎨",
        label: "woman artist",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🎨",
            label: "woman artist: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🎨",
            label: "woman artist: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🎨",
            label: "woman artist: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🎨",
            label: "woman artist: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🎨",
            label: "woman artist: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍✈️",
        label: "pilot",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍✈️",
            label: "pilot: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍✈️",
            label: "pilot: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍✈️",
            label: "pilot: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍✈️",
            label: "pilot: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍✈️",
            label: "pilot: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍✈️",
        label: "man pilot",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍✈️",
            label: "man pilot: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍✈️",
            label: "man pilot: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍✈️",
            label: "man pilot: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍✈️",
            label: "man pilot: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍✈️",
            label: "man pilot: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍✈️",
        label: "woman pilot",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍✈️",
            label: "woman pilot: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍✈️",
            label: "woman pilot: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍✈️",
            label: "woman pilot: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍✈️",
            label: "woman pilot: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍✈️",
            label: "woman pilot: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🚀",
        label: "astronaut",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🚀",
            label: "astronaut: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🚀",
            label: "astronaut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🚀",
            label: "astronaut: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🚀",
            label: "astronaut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🚀",
            label: "astronaut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🚀",
        label: "man astronaut",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🚀",
            label: "man astronaut: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🚀",
            label: "man astronaut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🚀",
            label: "man astronaut: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🚀",
            label: "man astronaut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🚀",
            label: "man astronaut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🚀",
        label: "woman astronaut",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🚀",
            label: "woman astronaut: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🚀",
            label: "woman astronaut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🚀",
            label: "woman astronaut: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🚀",
            label: "woman astronaut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🚀",
            label: "woman astronaut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🚒",
        label: "firefighter",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🚒",
            label: "firefighter: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🚒",
            label: "firefighter: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🚒",
            label: "firefighter: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🚒",
            label: "firefighter: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🚒",
            label: "firefighter: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🚒",
        label: "man firefighter",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🚒",
            label: "man firefighter: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🚒",
            label: "man firefighter: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🚒",
            label: "man firefighter: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🚒",
            label: "man firefighter: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🚒",
            label: "man firefighter: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🚒",
        label: "woman firefighter",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🚒",
            label: "woman firefighter: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🚒",
            label: "woman firefighter: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🚒",
            label: "woman firefighter: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🚒",
            label: "woman firefighter: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🚒",
            label: "woman firefighter: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👮",
        label: "police officer",
        tone: 0,
        skins: [
          {
            emoji: "👮🏻",
            label: "police officer: light skin tone",
            tone: 1
          },
          {
            emoji: "👮🏼",
            label: "police officer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👮🏽",
            label: "police officer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👮🏾",
            label: "police officer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👮🏿",
            label: "police officer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👮‍♂️",
        label: "man police officer",
        tone: 0,
        skins: [
          {
            emoji: "👮🏻‍♂️",
            label: "man police officer: light skin tone",
            tone: 1
          },
          {
            emoji: "👮🏼‍♂️",
            label: "man police officer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👮🏽‍♂️",
            label: "man police officer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👮🏾‍♂️",
            label: "man police officer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👮🏿‍♂️",
            label: "man police officer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👮‍♀️",
        label: "woman police officer",
        tone: 0,
        skins: [
          {
            emoji: "👮🏻‍♀️",
            label: "woman police officer: light skin tone",
            tone: 1
          },
          {
            emoji: "👮🏼‍♀️",
            label: "woman police officer: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👮🏽‍♀️",
            label: "woman police officer: medium skin tone",
            tone: 3
          },
          {
            emoji: "👮🏾‍♀️",
            label: "woman police officer: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👮🏿‍♀️",
            label: "woman police officer: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🕵️",
        label: "detective",
        tone: 0,
        skins: [
          {
            emoji: "🕵🏻",
            label: "detective: light skin tone",
            tone: 1
          },
          {
            emoji: "🕵🏼",
            label: "detective: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🕵🏽",
            label: "detective: medium skin tone",
            tone: 3
          },
          {
            emoji: "🕵🏾",
            label: "detective: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🕵🏿",
            label: "detective: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🕵️‍♂️",
        label: "man detective",
        tone: 0,
        skins: [
          {
            emoji: "🕵🏻‍♂️",
            label: "man detective: light skin tone",
            tone: 1
          },
          {
            emoji: "🕵🏼‍♂️",
            label: "man detective: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🕵🏽‍♂️",
            label: "man detective: medium skin tone",
            tone: 3
          },
          {
            emoji: "🕵🏾‍♂️",
            label: "man detective: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🕵🏿‍♂️",
            label: "man detective: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🕵️‍♀️",
        label: "woman detective",
        tone: 0,
        skins: [
          {
            emoji: "🕵🏻‍♀️",
            label: "woman detective: light skin tone",
            tone: 1
          },
          {
            emoji: "🕵🏼‍♀️",
            label: "woman detective: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🕵🏽‍♀️",
            label: "woman detective: medium skin tone",
            tone: 3
          },
          {
            emoji: "🕵🏾‍♀️",
            label: "woman detective: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🕵🏿‍♀️",
            label: "woman detective: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💂",
        label: "guard",
        tone: 0,
        skins: [
          {
            emoji: "💂🏻",
            label: "guard: light skin tone",
            tone: 1
          },
          {
            emoji: "💂🏼",
            label: "guard: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💂🏽",
            label: "guard: medium skin tone",
            tone: 3
          },
          {
            emoji: "💂🏾",
            label: "guard: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💂🏿",
            label: "guard: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💂‍♂️",
        label: "man guard",
        tone: 0,
        skins: [
          {
            emoji: "💂🏻‍♂️",
            label: "man guard: light skin tone",
            tone: 1
          },
          {
            emoji: "💂🏼‍♂️",
            label: "man guard: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💂🏽‍♂️",
            label: "man guard: medium skin tone",
            tone: 3
          },
          {
            emoji: "💂🏾‍♂️",
            label: "man guard: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💂🏿‍♂️",
            label: "man guard: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💂‍♀️",
        label: "woman guard",
        tone: 0,
        skins: [
          {
            emoji: "💂🏻‍♀️",
            label: "woman guard: light skin tone",
            tone: 1
          },
          {
            emoji: "💂🏼‍♀️",
            label: "woman guard: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💂🏽‍♀️",
            label: "woman guard: medium skin tone",
            tone: 3
          },
          {
            emoji: "💂🏾‍♀️",
            label: "woman guard: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💂🏿‍♀️",
            label: "woman guard: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🥷",
        label: "ninja",
        tone: 0,
        skins: [
          {
            emoji: "🥷🏻",
            label: "ninja: light skin tone",
            tone: 1
          },
          {
            emoji: "🥷🏼",
            label: "ninja: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🥷🏽",
            label: "ninja: medium skin tone",
            tone: 3
          },
          {
            emoji: "🥷🏾",
            label: "ninja: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🥷🏿",
            label: "ninja: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👷",
        label: "construction worker",
        tone: 0,
        skins: [
          {
            emoji: "👷🏻",
            label: "construction worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👷🏼",
            label: "construction worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👷🏽",
            label: "construction worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👷🏾",
            label: "construction worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👷🏿",
            label: "construction worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👷‍♂️",
        label: "man construction worker",
        tone: 0,
        skins: [
          {
            emoji: "👷🏻‍♂️",
            label: "man construction worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👷🏼‍♂️",
            label: "man construction worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👷🏽‍♂️",
            label: "man construction worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👷🏾‍♂️",
            label: "man construction worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👷🏿‍♂️",
            label: "man construction worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👷‍♀️",
        label: "woman construction worker",
        tone: 0,
        skins: [
          {
            emoji: "👷🏻‍♀️",
            label: "woman construction worker: light skin tone",
            tone: 1
          },
          {
            emoji: "👷🏼‍♀️",
            label: "woman construction worker: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👷🏽‍♀️",
            label: "woman construction worker: medium skin tone",
            tone: 3
          },
          {
            emoji: "👷🏾‍♀️",
            label: "woman construction worker: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👷🏿‍♀️",
            label: "woman construction worker: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤴",
        label: "prince",
        tone: 0,
        skins: [
          {
            emoji: "🤴🏻",
            label: "prince: light skin tone",
            tone: 1
          },
          {
            emoji: "🤴🏼",
            label: "prince: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤴🏽",
            label: "prince: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤴🏾",
            label: "prince: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤴🏿",
            label: "prince: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👸",
        label: "princess",
        tone: 0,
        skins: [
          {
            emoji: "👸🏻",
            label: "princess: light skin tone",
            tone: 1
          },
          {
            emoji: "👸🏼",
            label: "princess: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👸🏽",
            label: "princess: medium skin tone",
            tone: 3
          },
          {
            emoji: "👸🏾",
            label: "princess: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👸🏿",
            label: "princess: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👳",
        label: "person wearing turban",
        tone: 0,
        skins: [
          {
            emoji: "👳🏻",
            label: "person wearing turban: light skin tone",
            tone: 1
          },
          {
            emoji: "👳🏼",
            label: "person wearing turban: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👳🏽",
            label: "person wearing turban: medium skin tone",
            tone: 3
          },
          {
            emoji: "👳🏾",
            label: "person wearing turban: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👳🏿",
            label: "person wearing turban: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👳‍♂️",
        label: "man wearing turban",
        tone: 0,
        skins: [
          {
            emoji: "👳🏻‍♂️",
            label: "man wearing turban: light skin tone",
            tone: 1
          },
          {
            emoji: "👳🏼‍♂️",
            label: "man wearing turban: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👳🏽‍♂️",
            label: "man wearing turban: medium skin tone",
            tone: 3
          },
          {
            emoji: "👳🏾‍♂️",
            label: "man wearing turban: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👳🏿‍♂️",
            label: "man wearing turban: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👳‍♀️",
        label: "woman wearing turban",
        tone: 0,
        skins: [
          {
            emoji: "👳🏻‍♀️",
            label: "woman wearing turban: light skin tone",
            tone: 1
          },
          {
            emoji: "👳🏼‍♀️",
            label: "woman wearing turban: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👳🏽‍♀️",
            label: "woman wearing turban: medium skin tone",
            tone: 3
          },
          {
            emoji: "👳🏾‍♀️",
            label: "woman wearing turban: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👳🏿‍♀️",
            label: "woman wearing turban: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👲",
        label: "person with skullcap",
        tone: 0,
        skins: [
          {
            emoji: "👲🏻",
            label: "person with skullcap: light skin tone",
            tone: 1
          },
          {
            emoji: "👲🏼",
            label: "person with skullcap: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👲🏽",
            label: "person with skullcap: medium skin tone",
            tone: 3
          },
          {
            emoji: "👲🏾",
            label: "person with skullcap: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👲🏿",
            label: "person with skullcap: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧕",
        label: "woman with headscarf",
        tone: 0,
        skins: [
          {
            emoji: "🧕🏻",
            label: "woman with headscarf: light skin tone",
            tone: 1
          },
          {
            emoji: "🧕🏼",
            label: "woman with headscarf: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧕🏽",
            label: "woman with headscarf: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧕🏾",
            label: "woman with headscarf: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧕🏿",
            label: "woman with headscarf: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤵",
        label: "person in tuxedo",
        tone: 0,
        skins: [
          {
            emoji: "🤵🏻",
            label: "person in tuxedo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤵🏼",
            label: "person in tuxedo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤵🏽",
            label: "person in tuxedo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤵🏾",
            label: "person in tuxedo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤵🏿",
            label: "person in tuxedo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤵‍♂️",
        label: "man in tuxedo",
        tone: 0,
        skins: [
          {
            emoji: "🤵🏻‍♂️",
            label: "man in tuxedo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤵🏼‍♂️",
            label: "man in tuxedo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤵🏽‍♂️",
            label: "man in tuxedo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤵🏾‍♂️",
            label: "man in tuxedo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤵🏿‍♂️",
            label: "man in tuxedo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤵‍♀️",
        label: "woman in tuxedo",
        tone: 0,
        skins: [
          {
            emoji: "🤵🏻‍♀️",
            label: "woman in tuxedo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤵🏼‍♀️",
            label: "woman in tuxedo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤵🏽‍♀️",
            label: "woman in tuxedo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤵🏾‍♀️",
            label: "woman in tuxedo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤵🏿‍♀️",
            label: "woman in tuxedo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👰",
        label: "person with veil",
        tone: 0,
        skins: [
          {
            emoji: "👰🏻",
            label: "person with veil: light skin tone",
            tone: 1
          },
          {
            emoji: "👰🏼",
            label: "person with veil: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👰🏽",
            label: "person with veil: medium skin tone",
            tone: 3
          },
          {
            emoji: "👰🏾",
            label: "person with veil: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👰🏿",
            label: "person with veil: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👰‍♂️",
        label: "man with veil",
        tone: 0,
        skins: [
          {
            emoji: "👰🏻‍♂️",
            label: "man with veil: light skin tone",
            tone: 1
          },
          {
            emoji: "👰🏼‍♂️",
            label: "man with veil: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👰🏽‍♂️",
            label: "man with veil: medium skin tone",
            tone: 3
          },
          {
            emoji: "👰🏾‍♂️",
            label: "man with veil: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👰🏿‍♂️",
            label: "man with veil: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👰‍♀️",
        label: "woman with veil",
        tone: 0,
        skins: [
          {
            emoji: "👰🏻‍♀️",
            label: "woman with veil: light skin tone",
            tone: 1
          },
          {
            emoji: "👰🏼‍♀️",
            label: "woman with veil: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👰🏽‍♀️",
            label: "woman with veil: medium skin tone",
            tone: 3
          },
          {
            emoji: "👰🏾‍♀️",
            label: "woman with veil: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👰🏿‍♀️",
            label: "woman with veil: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤰",
        label: "pregnant woman",
        tone: 0,
        skins: [
          {
            emoji: "🤰🏻",
            label: "pregnant woman: light skin tone",
            tone: 1
          },
          {
            emoji: "🤰🏼",
            label: "pregnant woman: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤰🏽",
            label: "pregnant woman: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤰🏾",
            label: "pregnant woman: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤰🏿",
            label: "pregnant woman: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤱",
        label: "breast-feeding",
        tone: 0,
        skins: [
          {
            emoji: "🤱🏻",
            label: "breast-feeding: light skin tone",
            tone: 1
          },
          {
            emoji: "🤱🏼",
            label: "breast-feeding: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤱🏽",
            label: "breast-feeding: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤱🏾",
            label: "breast-feeding: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤱🏿",
            label: "breast-feeding: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🍼",
        label: "woman feeding baby",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🍼",
            label: "woman feeding baby: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🍼",
            label: "woman feeding baby: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🍼",
            label: "woman feeding baby: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🍼",
            label: "woman feeding baby: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🍼",
            label: "woman feeding baby: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🍼",
        label: "man feeding baby",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🍼",
            label: "man feeding baby: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🍼",
            label: "man feeding baby: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🍼",
            label: "man feeding baby: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🍼",
            label: "man feeding baby: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🍼",
            label: "man feeding baby: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🍼",
        label: "person feeding baby",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🍼",
            label: "person feeding baby: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🍼",
            label: "person feeding baby: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🍼",
            label: "person feeding baby: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🍼",
            label: "person feeding baby: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🍼",
            label: "person feeding baby: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👼",
        label: "baby angel",
        tone: 0,
        skins: [
          {
            emoji: "👼🏻",
            label: "baby angel: light skin tone",
            tone: 1
          },
          {
            emoji: "👼🏼",
            label: "baby angel: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👼🏽",
            label: "baby angel: medium skin tone",
            tone: 3
          },
          {
            emoji: "👼🏾",
            label: "baby angel: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👼🏿",
            label: "baby angel: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🎅",
        label: "Santa Claus",
        tone: 0,
        skins: [
          {
            emoji: "🎅🏻",
            label: "Santa Claus: light skin tone",
            tone: 1
          },
          {
            emoji: "🎅🏼",
            label: "Santa Claus: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🎅🏽",
            label: "Santa Claus: medium skin tone",
            tone: 3
          },
          {
            emoji: "🎅🏾",
            label: "Santa Claus: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🎅🏿",
            label: "Santa Claus: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤶",
        label: "Mrs. Claus",
        tone: 0,
        skins: [
          {
            emoji: "🤶🏻",
            label: "Mrs. Claus: light skin tone",
            tone: 1
          },
          {
            emoji: "🤶🏼",
            label: "Mrs. Claus: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤶🏽",
            label: "Mrs. Claus: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤶🏾",
            label: "Mrs. Claus: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤶🏿",
            label: "Mrs. Claus: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🎄",
        label: "mx claus",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🎄",
            label: "mx claus: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🎄",
            label: "mx claus: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🎄",
            label: "mx claus: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🎄",
            label: "mx claus: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🎄",
            label: "mx claus: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦸",
        label: "superhero",
        tone: 0,
        skins: [
          {
            emoji: "🦸🏻",
            label: "superhero: light skin tone",
            tone: 1
          },
          {
            emoji: "🦸🏼",
            label: "superhero: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦸🏽",
            label: "superhero: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦸🏾",
            label: "superhero: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦸🏿",
            label: "superhero: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦸‍♂️",
        label: "man superhero",
        tone: 0,
        skins: [
          {
            emoji: "🦸🏻‍♂️",
            label: "man superhero: light skin tone",
            tone: 1
          },
          {
            emoji: "🦸🏼‍♂️",
            label: "man superhero: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦸🏽‍♂️",
            label: "man superhero: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦸🏾‍♂️",
            label: "man superhero: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦸🏿‍♂️",
            label: "man superhero: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦸‍♀️",
        label: "woman superhero",
        tone: 0,
        skins: [
          {
            emoji: "🦸🏻‍♀️",
            label: "woman superhero: light skin tone",
            tone: 1
          },
          {
            emoji: "🦸🏼‍♀️",
            label: "woman superhero: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦸🏽‍♀️",
            label: "woman superhero: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦸🏾‍♀️",
            label: "woman superhero: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦸🏿‍♀️",
            label: "woman superhero: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦹",
        label: "supervillain",
        tone: 0,
        skins: [
          {
            emoji: "🦹🏻",
            label: "supervillain: light skin tone",
            tone: 1
          },
          {
            emoji: "🦹🏼",
            label: "supervillain: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦹🏽",
            label: "supervillain: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦹🏾",
            label: "supervillain: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦹🏿",
            label: "supervillain: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦹‍♂️",
        label: "man supervillain",
        tone: 0,
        skins: [
          {
            emoji: "🦹🏻‍♂️",
            label: "man supervillain: light skin tone",
            tone: 1
          },
          {
            emoji: "🦹🏼‍♂️",
            label: "man supervillain: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦹🏽‍♂️",
            label: "man supervillain: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦹🏾‍♂️",
            label: "man supervillain: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦹🏿‍♂️",
            label: "man supervillain: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🦹‍♀️",
        label: "woman supervillain",
        tone: 0,
        skins: [
          {
            emoji: "🦹🏻‍♀️",
            label: "woman supervillain: light skin tone",
            tone: 1
          },
          {
            emoji: "🦹🏼‍♀️",
            label: "woman supervillain: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🦹🏽‍♀️",
            label: "woman supervillain: medium skin tone",
            tone: 3
          },
          {
            emoji: "🦹🏾‍♀️",
            label: "woman supervillain: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🦹🏿‍♀️",
            label: "woman supervillain: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧙",
        label: "mage",
        tone: 0,
        skins: [
          {
            emoji: "🧙🏻",
            label: "mage: light skin tone",
            tone: 1
          },
          {
            emoji: "🧙🏼",
            label: "mage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧙🏽",
            label: "mage: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧙🏾",
            label: "mage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧙🏿",
            label: "mage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧙‍♂️",
        label: "man mage",
        tone: 0,
        skins: [
          {
            emoji: "🧙🏻‍♂️",
            label: "man mage: light skin tone",
            tone: 1
          },
          {
            emoji: "🧙🏼‍♂️",
            label: "man mage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧙🏽‍♂️",
            label: "man mage: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧙🏾‍♂️",
            label: "man mage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧙🏿‍♂️",
            label: "man mage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧙‍♀️",
        label: "woman mage",
        tone: 0,
        skins: [
          {
            emoji: "🧙🏻‍♀️",
            label: "woman mage: light skin tone",
            tone: 1
          },
          {
            emoji: "🧙🏼‍♀️",
            label: "woman mage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧙🏽‍♀️",
            label: "woman mage: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧙🏾‍♀️",
            label: "woman mage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧙🏿‍♀️",
            label: "woman mage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧚",
        label: "fairy",
        tone: 0,
        skins: [
          {
            emoji: "🧚🏻",
            label: "fairy: light skin tone",
            tone: 1
          },
          {
            emoji: "🧚🏼",
            label: "fairy: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧚🏽",
            label: "fairy: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧚🏾",
            label: "fairy: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧚🏿",
            label: "fairy: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧚‍♂️",
        label: "man fairy",
        tone: 0,
        skins: [
          {
            emoji: "🧚🏻‍♂️",
            label: "man fairy: light skin tone",
            tone: 1
          },
          {
            emoji: "🧚🏼‍♂️",
            label: "man fairy: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧚🏽‍♂️",
            label: "man fairy: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧚🏾‍♂️",
            label: "man fairy: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧚🏿‍♂️",
            label: "man fairy: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧚‍♀️",
        label: "woman fairy",
        tone: 0,
        skins: [
          {
            emoji: "🧚🏻‍♀️",
            label: "woman fairy: light skin tone",
            tone: 1
          },
          {
            emoji: "🧚🏼‍♀️",
            label: "woman fairy: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧚🏽‍♀️",
            label: "woman fairy: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧚🏾‍♀️",
            label: "woman fairy: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧚🏿‍♀️",
            label: "woman fairy: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧛",
        label: "vampire",
        tone: 0,
        skins: [
          {
            emoji: "🧛🏻",
            label: "vampire: light skin tone",
            tone: 1
          },
          {
            emoji: "🧛🏼",
            label: "vampire: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧛🏽",
            label: "vampire: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧛🏾",
            label: "vampire: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧛🏿",
            label: "vampire: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧛‍♂️",
        label: "man vampire",
        tone: 0,
        skins: [
          {
            emoji: "🧛🏻‍♂️",
            label: "man vampire: light skin tone",
            tone: 1
          },
          {
            emoji: "🧛🏼‍♂️",
            label: "man vampire: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧛🏽‍♂️",
            label: "man vampire: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧛🏾‍♂️",
            label: "man vampire: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧛🏿‍♂️",
            label: "man vampire: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧛‍♀️",
        label: "woman vampire",
        tone: 0,
        skins: [
          {
            emoji: "🧛🏻‍♀️",
            label: "woman vampire: light skin tone",
            tone: 1
          },
          {
            emoji: "🧛🏼‍♀️",
            label: "woman vampire: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧛🏽‍♀️",
            label: "woman vampire: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧛🏾‍♀️",
            label: "woman vampire: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧛🏿‍♀️",
            label: "woman vampire: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧜",
        label: "merperson",
        tone: 0,
        skins: [
          {
            emoji: "🧜🏻",
            label: "merperson: light skin tone",
            tone: 1
          },
          {
            emoji: "🧜🏼",
            label: "merperson: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧜🏽",
            label: "merperson: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧜🏾",
            label: "merperson: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧜🏿",
            label: "merperson: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧜‍♂️",
        label: "merman",
        tone: 0,
        skins: [
          {
            emoji: "🧜🏻‍♂️",
            label: "merman: light skin tone",
            tone: 1
          },
          {
            emoji: "🧜🏼‍♂️",
            label: "merman: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧜🏽‍♂️",
            label: "merman: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧜🏾‍♂️",
            label: "merman: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧜🏿‍♂️",
            label: "merman: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧜‍♀️",
        label: "mermaid",
        tone: 0,
        skins: [
          {
            emoji: "🧜🏻‍♀️",
            label: "mermaid: light skin tone",
            tone: 1
          },
          {
            emoji: "🧜🏼‍♀️",
            label: "mermaid: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧜🏽‍♀️",
            label: "mermaid: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧜🏾‍♀️",
            label: "mermaid: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧜🏿‍♀️",
            label: "mermaid: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧝",
        label: "elf",
        tone: 0,
        skins: [
          {
            emoji: "🧝🏻",
            label: "elf: light skin tone",
            tone: 1
          },
          {
            emoji: "🧝🏼",
            label: "elf: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧝🏽",
            label: "elf: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧝🏾",
            label: "elf: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧝🏿",
            label: "elf: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧝‍♂️",
        label: "man elf",
        tone: 0,
        skins: [
          {
            emoji: "🧝🏻‍♂️",
            label: "man elf: light skin tone",
            tone: 1
          },
          {
            emoji: "🧝🏼‍♂️",
            label: "man elf: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧝🏽‍♂️",
            label: "man elf: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧝🏾‍♂️",
            label: "man elf: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧝🏿‍♂️",
            label: "man elf: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧝‍♀️",
        label: "woman elf",
        tone: 0,
        skins: [
          {
            emoji: "🧝🏻‍♀️",
            label: "woman elf: light skin tone",
            tone: 1
          },
          {
            emoji: "🧝🏼‍♀️",
            label: "woman elf: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧝🏽‍♀️",
            label: "woman elf: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧝🏾‍♀️",
            label: "woman elf: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧝🏿‍♀️",
            label: "woman elf: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧞",
        label: "genie",
        tone: 0
      },
      {
        emoji: "🧞‍♂️",
        label: "man genie",
        tone: 0
      },
      {
        emoji: "🧞‍♀️",
        label: "woman genie",
        tone: 0
      },
      {
        emoji: "🧟",
        label: "zombie",
        tone: 0
      },
      {
        emoji: "🧟‍♂️",
        label: "man zombie",
        tone: 0
      },
      {
        emoji: "🧟‍♀️",
        label: "woman zombie",
        tone: 0
      },
      {
        emoji: "💆",
        label: "person getting massage",
        tone: 0,
        skins: [
          {
            emoji: "💆🏻",
            label: "person getting massage: light skin tone",
            tone: 1
          },
          {
            emoji: "💆🏼",
            label: "person getting massage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💆🏽",
            label: "person getting massage: medium skin tone",
            tone: 3
          },
          {
            emoji: "💆🏾",
            label: "person getting massage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💆🏿",
            label: "person getting massage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💆‍♂️",
        label: "man getting massage",
        tone: 0,
        skins: [
          {
            emoji: "💆🏻‍♂️",
            label: "man getting massage: light skin tone",
            tone: 1
          },
          {
            emoji: "💆🏼‍♂️",
            label: "man getting massage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💆🏽‍♂️",
            label: "man getting massage: medium skin tone",
            tone: 3
          },
          {
            emoji: "💆🏾‍♂️",
            label: "man getting massage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💆🏿‍♂️",
            label: "man getting massage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💆‍♀️",
        label: "woman getting massage",
        tone: 0,
        skins: [
          {
            emoji: "💆🏻‍♀️",
            label: "woman getting massage: light skin tone",
            tone: 1
          },
          {
            emoji: "💆🏼‍♀️",
            label: "woman getting massage: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💆🏽‍♀️",
            label: "woman getting massage: medium skin tone",
            tone: 3
          },
          {
            emoji: "💆🏾‍♀️",
            label: "woman getting massage: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💆🏿‍♀️",
            label: "woman getting massage: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💇",
        label: "person getting haircut",
        tone: 0,
        skins: [
          {
            emoji: "💇🏻",
            label: "person getting haircut: light skin tone",
            tone: 1
          },
          {
            emoji: "💇🏼",
            label: "person getting haircut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💇🏽",
            label: "person getting haircut: medium skin tone",
            tone: 3
          },
          {
            emoji: "💇🏾",
            label: "person getting haircut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💇🏿",
            label: "person getting haircut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💇‍♂️",
        label: "man getting haircut",
        tone: 0,
        skins: [
          {
            emoji: "💇🏻‍♂️",
            label: "man getting haircut: light skin tone",
            tone: 1
          },
          {
            emoji: "💇🏼‍♂️",
            label: "man getting haircut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💇🏽‍♂️",
            label: "man getting haircut: medium skin tone",
            tone: 3
          },
          {
            emoji: "💇🏾‍♂️",
            label: "man getting haircut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💇🏿‍♂️",
            label: "man getting haircut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💇‍♀️",
        label: "woman getting haircut",
        tone: 0,
        skins: [
          {
            emoji: "💇🏻‍♀️",
            label: "woman getting haircut: light skin tone",
            tone: 1
          },
          {
            emoji: "💇🏼‍♀️",
            label: "woman getting haircut: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💇🏽‍♀️",
            label: "woman getting haircut: medium skin tone",
            tone: 3
          },
          {
            emoji: "💇🏾‍♀️",
            label: "woman getting haircut: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💇🏿‍♀️",
            label: "woman getting haircut: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚶",
        label: "person walking",
        tone: 0,
        skins: [
          {
            emoji: "🚶🏻",
            label: "person walking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚶🏼",
            label: "person walking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚶🏽",
            label: "person walking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚶🏾",
            label: "person walking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚶🏿",
            label: "person walking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚶‍♂️",
        label: "man walking",
        tone: 0,
        skins: [
          {
            emoji: "🚶🏻‍♂️",
            label: "man walking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚶🏼‍♂️",
            label: "man walking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚶🏽‍♂️",
            label: "man walking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚶🏾‍♂️",
            label: "man walking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚶🏿‍♂️",
            label: "man walking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚶‍♀️",
        label: "woman walking",
        tone: 0,
        skins: [
          {
            emoji: "🚶🏻‍♀️",
            label: "woman walking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚶🏼‍♀️",
            label: "woman walking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚶🏽‍♀️",
            label: "woman walking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚶🏾‍♀️",
            label: "woman walking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚶🏿‍♀️",
            label: "woman walking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧍",
        label: "person standing",
        tone: 0,
        skins: [
          {
            emoji: "🧍🏻",
            label: "person standing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧍🏼",
            label: "person standing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧍🏽",
            label: "person standing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧍🏾",
            label: "person standing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧍🏿",
            label: "person standing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧍‍♂️",
        label: "man standing",
        tone: 0,
        skins: [
          {
            emoji: "🧍🏻‍♂️",
            label: "man standing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧍🏼‍♂️",
            label: "man standing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧍🏽‍♂️",
            label: "man standing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧍🏾‍♂️",
            label: "man standing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧍🏿‍♂️",
            label: "man standing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧍‍♀️",
        label: "woman standing",
        tone: 0,
        skins: [
          {
            emoji: "🧍🏻‍♀️",
            label: "woman standing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧍🏼‍♀️",
            label: "woman standing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧍🏽‍♀️",
            label: "woman standing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧍🏾‍♀️",
            label: "woman standing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧍🏿‍♀️",
            label: "woman standing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧎",
        label: "person kneeling",
        tone: 0,
        skins: [
          {
            emoji: "🧎🏻",
            label: "person kneeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🧎🏼",
            label: "person kneeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧎🏽",
            label: "person kneeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧎🏾",
            label: "person kneeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧎🏿",
            label: "person kneeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧎‍♂️",
        label: "man kneeling",
        tone: 0,
        skins: [
          {
            emoji: "🧎🏻‍♂️",
            label: "man kneeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🧎🏼‍♂️",
            label: "man kneeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧎🏽‍♂️",
            label: "man kneeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧎🏾‍♂️",
            label: "man kneeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧎🏿‍♂️",
            label: "man kneeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧎‍♀️",
        label: "woman kneeling",
        tone: 0,
        skins: [
          {
            emoji: "🧎🏻‍♀️",
            label: "woman kneeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🧎🏼‍♀️",
            label: "woman kneeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧎🏽‍♀️",
            label: "woman kneeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧎🏾‍♀️",
            label: "woman kneeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧎🏿‍♀️",
            label: "woman kneeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦯",
        label: "person with white cane",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦯",
            label: "person with white cane: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦯",
            label: "person with white cane: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦯",
            label: "person with white cane: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦯",
            label: "person with white cane: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦯",
            label: "person with white cane: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦯",
        label: "man with white cane",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦯",
            label: "man with white cane: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦯",
            label: "man with white cane: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦯",
            label: "man with white cane: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦯",
            label: "man with white cane: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦯",
            label: "man with white cane: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦯",
        label: "woman with white cane",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦯",
            label: "woman with white cane: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦯",
            label: "woman with white cane: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦯",
            label: "woman with white cane: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦯",
            label: "woman with white cane: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦯",
            label: "woman with white cane: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦼",
        label: "person in motorized wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦼",
            label: "person in motorized wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦼",
            label: "person in motorized wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦼",
            label: "person in motorized wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦼",
            label: "person in motorized wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦼",
            label: "person in motorized wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦼",
        label: "man in motorized wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦼",
            label: "man in motorized wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦼",
            label: "man in motorized wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦼",
            label: "man in motorized wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦼",
            label: "man in motorized wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦼",
            label: "man in motorized wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦼",
        label: "woman in motorized wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦼",
            label: "woman in motorized wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦼",
            label: "woman in motorized wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦼",
            label: "woman in motorized wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦼",
            label: "woman in motorized wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦼",
            label: "woman in motorized wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🦽",
        label: "person in manual wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🦽",
            label: "person in manual wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏼‍🦽",
            label: "person in manual wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏽‍🦽",
            label: "person in manual wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏾‍🦽",
            label: "person in manual wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏿‍🦽",
            label: "person in manual wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍🦽",
        label: "man in manual wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍🦽",
            label: "man in manual wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏼‍🦽",
            label: "man in manual wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏽‍🦽",
            label: "man in manual wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏾‍🦽",
            label: "man in manual wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏿‍🦽",
            label: "man in manual wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍🦽",
        label: "woman in manual wheelchair",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍🦽",
            label: "woman in manual wheelchair: light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏼‍🦽",
            label: "woman in manual wheelchair: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏽‍🦽",
            label: "woman in manual wheelchair: medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏾‍🦽",
            label: "woman in manual wheelchair: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏿‍🦽",
            label: "woman in manual wheelchair: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏃",
        label: "person running",
        tone: 0,
        skins: [
          {
            emoji: "🏃🏻",
            label: "person running: light skin tone",
            tone: 1
          },
          {
            emoji: "🏃🏼",
            label: "person running: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏃🏽",
            label: "person running: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏃🏾",
            label: "person running: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏃🏿",
            label: "person running: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏃‍♂️",
        label: "man running",
        tone: 0,
        skins: [
          {
            emoji: "🏃🏻‍♂️",
            label: "man running: light skin tone",
            tone: 1
          },
          {
            emoji: "🏃🏼‍♂️",
            label: "man running: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏃🏽‍♂️",
            label: "man running: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏃🏾‍♂️",
            label: "man running: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏃🏿‍♂️",
            label: "man running: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏃‍♀️",
        label: "woman running",
        tone: 0,
        skins: [
          {
            emoji: "🏃🏻‍♀️",
            label: "woman running: light skin tone",
            tone: 1
          },
          {
            emoji: "🏃🏼‍♀️",
            label: "woman running: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏃🏽‍♀️",
            label: "woman running: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏃🏾‍♀️",
            label: "woman running: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏃🏿‍♀️",
            label: "woman running: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💃",
        label: "woman dancing",
        tone: 0,
        skins: [
          {
            emoji: "💃🏻",
            label: "woman dancing: light skin tone",
            tone: 1
          },
          {
            emoji: "💃🏼",
            label: "woman dancing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💃🏽",
            label: "woman dancing: medium skin tone",
            tone: 3
          },
          {
            emoji: "💃🏾",
            label: "woman dancing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💃🏿",
            label: "woman dancing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🕺",
        label: "man dancing",
        tone: 0,
        skins: [
          {
            emoji: "🕺🏻",
            label: "man dancing: light skin tone",
            tone: 1
          },
          {
            emoji: "🕺🏼",
            label: "man dancing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🕺🏽",
            label: "man dancing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🕺🏾",
            label: "man dancing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🕺🏿",
            label: "man dancing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🕴️",
        label: "person in suit levitating",
        tone: 0,
        skins: [
          {
            emoji: "🕴🏻",
            label: "person in suit levitating: light skin tone",
            tone: 1
          },
          {
            emoji: "🕴🏼",
            label: "person in suit levitating: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🕴🏽",
            label: "person in suit levitating: medium skin tone",
            tone: 3
          },
          {
            emoji: "🕴🏾",
            label: "person in suit levitating: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🕴🏿",
            label: "person in suit levitating: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👯",
        label: "people with bunny ears",
        tone: 0
      },
      {
        emoji: "👯‍♂️",
        label: "men with bunny ears",
        tone: 0
      },
      {
        emoji: "👯‍♀️",
        label: "women with bunny ears",
        tone: 0
      },
      {
        emoji: "🧖",
        label: "person in steamy room",
        tone: 0,
        skins: [
          {
            emoji: "🧖🏻",
            label: "person in steamy room: light skin tone",
            tone: 1
          },
          {
            emoji: "🧖🏼",
            label: "person in steamy room: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧖🏽",
            label: "person in steamy room: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧖🏾",
            label: "person in steamy room: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧖🏿",
            label: "person in steamy room: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧖‍♂️",
        label: "man in steamy room",
        tone: 0,
        skins: [
          {
            emoji: "🧖🏻‍♂️",
            label: "man in steamy room: light skin tone",
            tone: 1
          },
          {
            emoji: "🧖🏼‍♂️",
            label: "man in steamy room: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧖🏽‍♂️",
            label: "man in steamy room: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧖🏾‍♂️",
            label: "man in steamy room: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧖🏿‍♂️",
            label: "man in steamy room: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧖‍♀️",
        label: "woman in steamy room",
        tone: 0,
        skins: [
          {
            emoji: "🧖🏻‍♀️",
            label: "woman in steamy room: light skin tone",
            tone: 1
          },
          {
            emoji: "🧖🏼‍♀️",
            label: "woman in steamy room: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧖🏽‍♀️",
            label: "woman in steamy room: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧖🏾‍♀️",
            label: "woman in steamy room: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧖🏿‍♀️",
            label: "woman in steamy room: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧗",
        label: "person climbing",
        tone: 0,
        skins: [
          {
            emoji: "🧗🏻",
            label: "person climbing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧗🏼",
            label: "person climbing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧗🏽",
            label: "person climbing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧗🏾",
            label: "person climbing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧗🏿",
            label: "person climbing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧗‍♂️",
        label: "man climbing",
        tone: 0,
        skins: [
          {
            emoji: "🧗🏻‍♂️",
            label: "man climbing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧗🏼‍♂️",
            label: "man climbing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧗🏽‍♂️",
            label: "man climbing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧗🏾‍♂️",
            label: "man climbing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧗🏿‍♂️",
            label: "man climbing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧗‍♀️",
        label: "woman climbing",
        tone: 0,
        skins: [
          {
            emoji: "🧗🏻‍♀️",
            label: "woman climbing: light skin tone",
            tone: 1
          },
          {
            emoji: "🧗🏼‍♀️",
            label: "woman climbing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧗🏽‍♀️",
            label: "woman climbing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧗🏾‍♀️",
            label: "woman climbing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧗🏿‍♀️",
            label: "woman climbing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤺",
        label: "person fencing",
        tone: 0
      },
      {
        emoji: "🏇",
        label: "horse racing",
        tone: 0,
        skins: [
          {
            emoji: "🏇🏻",
            label: "horse racing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏇🏼",
            label: "horse racing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏇🏽",
            label: "horse racing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏇🏾",
            label: "horse racing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏇🏿",
            label: "horse racing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "⛷️",
        label: "skier",
        tone: 0
      },
      {
        emoji: "🏂️",
        label: "snowboarder",
        tone: 0,
        skins: [
          {
            emoji: "🏂🏻",
            label: "snowboarder: light skin tone",
            tone: 1
          },
          {
            emoji: "🏂🏼",
            label: "snowboarder: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏂🏽",
            label: "snowboarder: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏂🏾",
            label: "snowboarder: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏂🏿",
            label: "snowboarder: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏌️",
        label: "person golfing",
        tone: 0,
        skins: [
          {
            emoji: "🏌🏻",
            label: "person golfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏌🏼",
            label: "person golfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏌🏽",
            label: "person golfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏌🏾",
            label: "person golfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏌🏿",
            label: "person golfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏌️‍♂️",
        label: "man golfing",
        tone: 0,
        skins: [
          {
            emoji: "🏌🏻‍♂️",
            label: "man golfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏌🏼‍♂️",
            label: "man golfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏌🏽‍♂️",
            label: "man golfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏌🏾‍♂️",
            label: "man golfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏌🏿‍♂️",
            label: "man golfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏌️‍♀️",
        label: "woman golfing",
        tone: 0,
        skins: [
          {
            emoji: "🏌🏻‍♀️",
            label: "woman golfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏌🏼‍♀️",
            label: "woman golfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏌🏽‍♀️",
            label: "woman golfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏌🏾‍♀️",
            label: "woman golfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏌🏿‍♀️",
            label: "woman golfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏄️",
        label: "person surfing",
        tone: 0,
        skins: [
          {
            emoji: "🏄🏻",
            label: "person surfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏄🏼",
            label: "person surfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏄🏽",
            label: "person surfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏄🏾",
            label: "person surfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏄🏿",
            label: "person surfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏄‍♂️",
        label: "man surfing",
        tone: 0,
        skins: [
          {
            emoji: "🏄🏻‍♂️",
            label: "man surfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏄🏼‍♂️",
            label: "man surfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏄🏽‍♂️",
            label: "man surfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏄🏾‍♂️",
            label: "man surfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏄🏿‍♂️",
            label: "man surfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏄‍♀️",
        label: "woman surfing",
        tone: 0,
        skins: [
          {
            emoji: "🏄🏻‍♀️",
            label: "woman surfing: light skin tone",
            tone: 1
          },
          {
            emoji: "🏄🏼‍♀️",
            label: "woman surfing: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏄🏽‍♀️",
            label: "woman surfing: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏄🏾‍♀️",
            label: "woman surfing: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏄🏿‍♀️",
            label: "woman surfing: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚣",
        label: "person rowing boat",
        tone: 0,
        skins: [
          {
            emoji: "🚣🏻",
            label: "person rowing boat: light skin tone",
            tone: 1
          },
          {
            emoji: "🚣🏼",
            label: "person rowing boat: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚣🏽",
            label: "person rowing boat: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚣🏾",
            label: "person rowing boat: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚣🏿",
            label: "person rowing boat: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚣‍♂️",
        label: "man rowing boat",
        tone: 0,
        skins: [
          {
            emoji: "🚣🏻‍♂️",
            label: "man rowing boat: light skin tone",
            tone: 1
          },
          {
            emoji: "🚣🏼‍♂️",
            label: "man rowing boat: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚣🏽‍♂️",
            label: "man rowing boat: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚣🏾‍♂️",
            label: "man rowing boat: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚣🏿‍♂️",
            label: "man rowing boat: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚣‍♀️",
        label: "woman rowing boat",
        tone: 0,
        skins: [
          {
            emoji: "🚣🏻‍♀️",
            label: "woman rowing boat: light skin tone",
            tone: 1
          },
          {
            emoji: "🚣🏼‍♀️",
            label: "woman rowing boat: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚣🏽‍♀️",
            label: "woman rowing boat: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚣🏾‍♀️",
            label: "woman rowing boat: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚣🏿‍♀️",
            label: "woman rowing boat: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏊️",
        label: "person swimming",
        tone: 0,
        skins: [
          {
            emoji: "🏊🏻",
            label: "person swimming: light skin tone",
            tone: 1
          },
          {
            emoji: "🏊🏼",
            label: "person swimming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏊🏽",
            label: "person swimming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏊🏾",
            label: "person swimming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏊🏿",
            label: "person swimming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏊‍♂️",
        label: "man swimming",
        tone: 0,
        skins: [
          {
            emoji: "🏊🏻‍♂️",
            label: "man swimming: light skin tone",
            tone: 1
          },
          {
            emoji: "🏊🏼‍♂️",
            label: "man swimming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏊🏽‍♂️",
            label: "man swimming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏊🏾‍♂️",
            label: "man swimming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏊🏿‍♂️",
            label: "man swimming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏊‍♀️",
        label: "woman swimming",
        tone: 0,
        skins: [
          {
            emoji: "🏊🏻‍♀️",
            label: "woman swimming: light skin tone",
            tone: 1
          },
          {
            emoji: "🏊🏼‍♀️",
            label: "woman swimming: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏊🏽‍♀️",
            label: "woman swimming: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏊🏾‍♀️",
            label: "woman swimming: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏊🏿‍♀️",
            label: "woman swimming: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "⛹️",
        label: "person bouncing ball",
        tone: 0,
        skins: [
          {
            emoji: "⛹🏻",
            label: "person bouncing ball: light skin tone",
            tone: 1
          },
          {
            emoji: "⛹🏼",
            label: "person bouncing ball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "⛹🏽",
            label: "person bouncing ball: medium skin tone",
            tone: 3
          },
          {
            emoji: "⛹🏾",
            label: "person bouncing ball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "⛹🏿",
            label: "person bouncing ball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "⛹️‍♂️",
        label: "man bouncing ball",
        tone: 0,
        skins: [
          {
            emoji: "⛹🏻‍♂️",
            label: "man bouncing ball: light skin tone",
            tone: 1
          },
          {
            emoji: "⛹🏼‍♂️",
            label: "man bouncing ball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "⛹🏽‍♂️",
            label: "man bouncing ball: medium skin tone",
            tone: 3
          },
          {
            emoji: "⛹🏾‍♂️",
            label: "man bouncing ball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "⛹🏿‍♂️",
            label: "man bouncing ball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "⛹️‍♀️",
        label: "woman bouncing ball",
        tone: 0,
        skins: [
          {
            emoji: "⛹🏻‍♀️",
            label: "woman bouncing ball: light skin tone",
            tone: 1
          },
          {
            emoji: "⛹🏼‍♀️",
            label: "woman bouncing ball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "⛹🏽‍♀️",
            label: "woman bouncing ball: medium skin tone",
            tone: 3
          },
          {
            emoji: "⛹🏾‍♀️",
            label: "woman bouncing ball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "⛹🏿‍♀️",
            label: "woman bouncing ball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏋️",
        label: "person lifting weights",
        tone: 0,
        skins: [
          {
            emoji: "🏋🏻",
            label: "person lifting weights: light skin tone",
            tone: 1
          },
          {
            emoji: "🏋🏼",
            label: "person lifting weights: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏋🏽",
            label: "person lifting weights: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏋🏾",
            label: "person lifting weights: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏋🏿",
            label: "person lifting weights: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏋️‍♂️",
        label: "man lifting weights",
        tone: 0,
        skins: [
          {
            emoji: "🏋🏻‍♂️",
            label: "man lifting weights: light skin tone",
            tone: 1
          },
          {
            emoji: "🏋🏼‍♂️",
            label: "man lifting weights: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏋🏽‍♂️",
            label: "man lifting weights: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏋🏾‍♂️",
            label: "man lifting weights: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏋🏿‍♂️",
            label: "man lifting weights: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🏋️‍♀️",
        label: "woman lifting weights",
        tone: 0,
        skins: [
          {
            emoji: "🏋🏻‍♀️",
            label: "woman lifting weights: light skin tone",
            tone: 1
          },
          {
            emoji: "🏋🏼‍♀️",
            label: "woman lifting weights: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🏋🏽‍♀️",
            label: "woman lifting weights: medium skin tone",
            tone: 3
          },
          {
            emoji: "🏋🏾‍♀️",
            label: "woman lifting weights: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🏋🏿‍♀️",
            label: "woman lifting weights: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚴",
        label: "person biking",
        tone: 0,
        skins: [
          {
            emoji: "🚴🏻",
            label: "person biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚴🏼",
            label: "person biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚴🏽",
            label: "person biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚴🏾",
            label: "person biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚴🏿",
            label: "person biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚴‍♂️",
        label: "man biking",
        tone: 0,
        skins: [
          {
            emoji: "🚴🏻‍♂️",
            label: "man biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚴🏼‍♂️",
            label: "man biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚴🏽‍♂️",
            label: "man biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚴🏾‍♂️",
            label: "man biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚴🏿‍♂️",
            label: "man biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚴‍♀️",
        label: "woman biking",
        tone: 0,
        skins: [
          {
            emoji: "🚴🏻‍♀️",
            label: "woman biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚴🏼‍♀️",
            label: "woman biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚴🏽‍♀️",
            label: "woman biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚴🏾‍♀️",
            label: "woman biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚴🏿‍♀️",
            label: "woman biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚵",
        label: "person mountain biking",
        tone: 0,
        skins: [
          {
            emoji: "🚵🏻",
            label: "person mountain biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚵🏼",
            label: "person mountain biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚵🏽",
            label: "person mountain biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚵🏾",
            label: "person mountain biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚵🏿",
            label: "person mountain biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚵‍♂️",
        label: "man mountain biking",
        tone: 0,
        skins: [
          {
            emoji: "🚵🏻‍♂️",
            label: "man mountain biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚵🏼‍♂️",
            label: "man mountain biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚵🏽‍♂️",
            label: "man mountain biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚵🏾‍♂️",
            label: "man mountain biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚵🏿‍♂️",
            label: "man mountain biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🚵‍♀️",
        label: "woman mountain biking",
        tone: 0,
        skins: [
          {
            emoji: "🚵🏻‍♀️",
            label: "woman mountain biking: light skin tone",
            tone: 1
          },
          {
            emoji: "🚵🏼‍♀️",
            label: "woman mountain biking: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🚵🏽‍♀️",
            label: "woman mountain biking: medium skin tone",
            tone: 3
          },
          {
            emoji: "🚵🏾‍♀️",
            label: "woman mountain biking: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🚵🏿‍♀️",
            label: "woman mountain biking: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤸",
        label: "person cartwheeling",
        tone: 0,
        skins: [
          {
            emoji: "🤸🏻",
            label: "person cartwheeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤸🏼",
            label: "person cartwheeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤸🏽",
            label: "person cartwheeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤸🏾",
            label: "person cartwheeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤸🏿",
            label: "person cartwheeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤸‍♂️",
        label: "man cartwheeling",
        tone: 0,
        skins: [
          {
            emoji: "🤸🏻‍♂️",
            label: "man cartwheeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤸🏼‍♂️",
            label: "man cartwheeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤸🏽‍♂️",
            label: "man cartwheeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤸🏾‍♂️",
            label: "man cartwheeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤸🏿‍♂️",
            label: "man cartwheeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤸‍♀️",
        label: "woman cartwheeling",
        tone: 0,
        skins: [
          {
            emoji: "🤸🏻‍♀️",
            label: "woman cartwheeling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤸🏼‍♀️",
            label: "woman cartwheeling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤸🏽‍♀️",
            label: "woman cartwheeling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤸🏾‍♀️",
            label: "woman cartwheeling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤸🏿‍♀️",
            label: "woman cartwheeling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤼",
        label: "people wrestling",
        tone: 0
      },
      {
        emoji: "🤼‍♂️",
        label: "men wrestling",
        tone: 0
      },
      {
        emoji: "🤼‍♀️",
        label: "women wrestling",
        tone: 0
      },
      {
        emoji: "🤽",
        label: "person playing water polo",
        tone: 0,
        skins: [
          {
            emoji: "🤽🏻",
            label: "person playing water polo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤽🏼",
            label: "person playing water polo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤽🏽",
            label: "person playing water polo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤽🏾",
            label: "person playing water polo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤽🏿",
            label: "person playing water polo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤽‍♂️",
        label: "man playing water polo",
        tone: 0,
        skins: [
          {
            emoji: "🤽🏻‍♂️",
            label: "man playing water polo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤽🏼‍♂️",
            label: "man playing water polo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤽🏽‍♂️",
            label: "man playing water polo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤽🏾‍♂️",
            label: "man playing water polo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤽🏿‍♂️",
            label: "man playing water polo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤽‍♀️",
        label: "woman playing water polo",
        tone: 0,
        skins: [
          {
            emoji: "🤽🏻‍♀️",
            label: "woman playing water polo: light skin tone",
            tone: 1
          },
          {
            emoji: "🤽🏼‍♀️",
            label: "woman playing water polo: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤽🏽‍♀️",
            label: "woman playing water polo: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤽🏾‍♀️",
            label: "woman playing water polo: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤽🏿‍♀️",
            label: "woman playing water polo: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤾",
        label: "person playing handball",
        tone: 0,
        skins: [
          {
            emoji: "🤾🏻",
            label: "person playing handball: light skin tone",
            tone: 1
          },
          {
            emoji: "🤾🏼",
            label: "person playing handball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤾🏽",
            label: "person playing handball: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤾🏾",
            label: "person playing handball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤾🏿",
            label: "person playing handball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤾‍♂️",
        label: "man playing handball",
        tone: 0,
        skins: [
          {
            emoji: "🤾🏻‍♂️",
            label: "man playing handball: light skin tone",
            tone: 1
          },
          {
            emoji: "🤾🏼‍♂️",
            label: "man playing handball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤾🏽‍♂️",
            label: "man playing handball: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤾🏾‍♂️",
            label: "man playing handball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤾🏿‍♂️",
            label: "man playing handball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤾‍♀️",
        label: "woman playing handball",
        tone: 0,
        skins: [
          {
            emoji: "🤾🏻‍♀️",
            label: "woman playing handball: light skin tone",
            tone: 1
          },
          {
            emoji: "🤾🏼‍♀️",
            label: "woman playing handball: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤾🏽‍♀️",
            label: "woman playing handball: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤾🏾‍♀️",
            label: "woman playing handball: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤾🏿‍♀️",
            label: "woman playing handball: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤹",
        label: "person juggling",
        tone: 0,
        skins: [
          {
            emoji: "🤹🏻",
            label: "person juggling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤹🏼",
            label: "person juggling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤹🏽",
            label: "person juggling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤹🏾",
            label: "person juggling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤹🏿",
            label: "person juggling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤹‍♂️",
        label: "man juggling",
        tone: 0,
        skins: [
          {
            emoji: "🤹🏻‍♂️",
            label: "man juggling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤹🏼‍♂️",
            label: "man juggling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤹🏽‍♂️",
            label: "man juggling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤹🏾‍♂️",
            label: "man juggling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤹🏿‍♂️",
            label: "man juggling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🤹‍♀️",
        label: "woman juggling",
        tone: 0,
        skins: [
          {
            emoji: "🤹🏻‍♀️",
            label: "woman juggling: light skin tone",
            tone: 1
          },
          {
            emoji: "🤹🏼‍♀️",
            label: "woman juggling: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🤹🏽‍♀️",
            label: "woman juggling: medium skin tone",
            tone: 3
          },
          {
            emoji: "🤹🏾‍♀️",
            label: "woman juggling: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🤹🏿‍♀️",
            label: "woman juggling: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧘",
        label: "person in lotus position",
        tone: 0,
        skins: [
          {
            emoji: "🧘🏻",
            label: "person in lotus position: light skin tone",
            tone: 1
          },
          {
            emoji: "🧘🏼",
            label: "person in lotus position: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧘🏽",
            label: "person in lotus position: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧘🏾",
            label: "person in lotus position: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧘🏿",
            label: "person in lotus position: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧘‍♂️",
        label: "man in lotus position",
        tone: 0,
        skins: [
          {
            emoji: "🧘🏻‍♂️",
            label: "man in lotus position: light skin tone",
            tone: 1
          },
          {
            emoji: "🧘🏼‍♂️",
            label: "man in lotus position: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧘🏽‍♂️",
            label: "man in lotus position: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧘🏾‍♂️",
            label: "man in lotus position: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧘🏿‍♂️",
            label: "man in lotus position: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧘‍♀️",
        label: "woman in lotus position",
        tone: 0,
        skins: [
          {
            emoji: "🧘🏻‍♀️",
            label: "woman in lotus position: light skin tone",
            tone: 1
          },
          {
            emoji: "🧘🏼‍♀️",
            label: "woman in lotus position: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧘🏽‍♀️",
            label: "woman in lotus position: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧘🏾‍♀️",
            label: "woman in lotus position: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧘🏿‍♀️",
            label: "woman in lotus position: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🛀",
        label: "person taking bath",
        tone: 0,
        skins: [
          {
            emoji: "🛀🏻",
            label: "person taking bath: light skin tone",
            tone: 1
          },
          {
            emoji: "🛀🏼",
            label: "person taking bath: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🛀🏽",
            label: "person taking bath: medium skin tone",
            tone: 3
          },
          {
            emoji: "🛀🏾",
            label: "person taking bath: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🛀🏿",
            label: "person taking bath: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🛌",
        label: "person in bed",
        tone: 0,
        skins: [
          {
            emoji: "🛌🏻",
            label: "person in bed: light skin tone",
            tone: 1
          },
          {
            emoji: "🛌🏼",
            label: "person in bed: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🛌🏽",
            label: "person in bed: medium skin tone",
            tone: 3
          },
          {
            emoji: "🛌🏾",
            label: "person in bed: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🛌🏿",
            label: "person in bed: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "🧑‍🤝‍🧑",
        label: "people holding hands",
        tone: 0,
        skins: [
          {
            emoji: "🧑🏻‍🤝‍🧑🏻",
            label: "people holding hands: light skin tone",
            tone: 1
          },
          {
            emoji: "🧑🏻‍🤝‍🧑🏼",
            label: "people holding hands: light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "🧑🏻‍🤝‍🧑🏽",
            label: "people holding hands: light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "🧑🏻‍🤝‍🧑🏾",
            label: "people holding hands: light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "🧑🏻‍🤝‍🧑🏿",
            label: "people holding hands: light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "🧑🏼‍🤝‍🧑🏻",
            label: "people holding hands: medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "🧑🏼‍🤝‍🧑🏼",
            label: "people holding hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "🧑🏼‍🤝‍🧑🏽",
            label: "people holding hands: medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "🧑🏼‍🤝‍🧑🏾",
            label: "people holding hands: medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "🧑🏼‍🤝‍🧑🏿",
            label: "people holding hands: medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "🧑🏽‍🤝‍🧑🏻",
            label: "people holding hands: medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "🧑🏽‍🤝‍🧑🏼",
            label: "people holding hands: medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "🧑🏽‍🤝‍🧑🏽",
            label: "people holding hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "🧑🏽‍🤝‍🧑🏾",
            label: "people holding hands: medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "🧑🏽‍🤝‍🧑🏿",
            label: "people holding hands: medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "🧑🏾‍🤝‍🧑🏻",
            label: "people holding hands: medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "🧑🏾‍🤝‍🧑🏼",
            label: "people holding hands: medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "🧑🏾‍🤝‍🧑🏽",
            label: "people holding hands: medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "🧑🏾‍🤝‍🧑🏾",
            label: "people holding hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "🧑🏾‍🤝‍🧑🏿",
            label: "people holding hands: medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "🧑🏿‍🤝‍🧑🏻",
            label: "people holding hands: dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "🧑🏿‍🤝‍🧑🏼",
            label: "people holding hands: dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "🧑🏿‍🤝‍🧑🏽",
            label: "people holding hands: dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "🧑🏿‍🤝‍🧑🏾",
            label: "people holding hands: dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "🧑🏿‍🤝‍🧑🏿",
            label: "people holding hands: dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👭",
        label: "women holding hands",
        tone: 0,
        skins: [
          {
            emoji: "👭🏻",
            label: "women holding hands: light skin tone",
            tone: 1
          },
          {
            emoji: "👭🏼",
            label: "women holding hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👭🏽",
            label: "women holding hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "👭🏾",
            label: "women holding hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👭🏿",
            label: "women holding hands: dark skin tone",
            tone: 5
          },
          {
            emoji: "👩🏻‍🤝‍👩🏼",
            label: "women holding hands: light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👩🏽",
            label: "women holding hands: light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👩🏾",
            label: "women holding hands: light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👩🏿",
            label: "women holding hands: light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👩🏻",
            label: "women holding hands: medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👩🏽",
            label: "women holding hands: medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👩🏾",
            label: "women holding hands: medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👩🏿",
            label: "women holding hands: medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👩🏻",
            label: "women holding hands: medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👩🏼",
            label: "women holding hands: medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👩🏾",
            label: "women holding hands: medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👩🏿",
            label: "women holding hands: medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👩🏻",
            label: "women holding hands: medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👩🏼",
            label: "women holding hands: medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👩🏽",
            label: "women holding hands: medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👩🏿",
            label: "women holding hands: medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👩🏻",
            label: "women holding hands: dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👩🏼",
            label: "women holding hands: dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👩🏽",
            label: "women holding hands: dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👩🏾",
            label: "women holding hands: dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          }
        ]
      },
      {
        emoji: "👫",
        label: "woman and man holding hands",
        tone: 0,
        skins: [
          {
            emoji: "👫🏻",
            label: "woman and man holding hands: light skin tone",
            tone: 1
          },
          {
            emoji: "👫🏼",
            label: "woman and man holding hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👫🏽",
            label: "woman and man holding hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "👫🏾",
            label: "woman and man holding hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👫🏿",
            label: "woman and man holding hands: dark skin tone",
            tone: 5
          },
          {
            emoji: "👩🏻‍🤝‍👨🏼",
            label: "woman and man holding hands: light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👨🏽",
            label: "woman and man holding hands: light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👨🏾",
            label: "woman and man holding hands: light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍🤝‍👨🏿",
            label: "woman and man holding hands: light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👨🏻",
            label: "woman and man holding hands: medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👨🏽",
            label: "woman and man holding hands: medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👨🏾",
            label: "woman and man holding hands: medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍🤝‍👨🏿",
            label: "woman and man holding hands: medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👨🏻",
            label: "woman and man holding hands: medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👨🏼",
            label: "woman and man holding hands: medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👨🏾",
            label: "woman and man holding hands: medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍🤝‍👨🏿",
            label: "woman and man holding hands: medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👨🏻",
            label: "woman and man holding hands: medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👨🏼",
            label: "woman and man holding hands: medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👨🏽",
            label: "woman and man holding hands: medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍🤝‍👨🏿",
            label: "woman and man holding hands: medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👨🏻",
            label: "woman and man holding hands: dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👨🏼",
            label: "woman and man holding hands: dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👨🏽",
            label: "woman and man holding hands: dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍🤝‍👨🏾",
            label: "woman and man holding hands: dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          }
        ]
      },
      {
        emoji: "👬",
        label: "men holding hands",
        tone: 0,
        skins: [
          {
            emoji: "👬🏻",
            label: "men holding hands: light skin tone",
            tone: 1
          },
          {
            emoji: "👬🏼",
            label: "men holding hands: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👬🏽",
            label: "men holding hands: medium skin tone",
            tone: 3
          },
          {
            emoji: "👬🏾",
            label: "men holding hands: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👬🏿",
            label: "men holding hands: dark skin tone",
            tone: 5
          },
          {
            emoji: "👨🏻‍🤝‍👨🏼",
            label: "men holding hands: light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👨🏻‍🤝‍👨🏽",
            label: "men holding hands: light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👨🏻‍🤝‍👨🏾",
            label: "men holding hands: light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👨🏻‍🤝‍👨🏿",
            label: "men holding hands: light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👨🏼‍🤝‍👨🏻",
            label: "men holding hands: medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👨🏼‍🤝‍👨🏽",
            label: "men holding hands: medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👨🏼‍🤝‍👨🏾",
            label: "men holding hands: medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👨🏼‍🤝‍👨🏿",
            label: "men holding hands: medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👨🏽‍🤝‍👨🏻",
            label: "men holding hands: medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👨🏽‍🤝‍👨🏼",
            label: "men holding hands: medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👨🏽‍🤝‍👨🏾",
            label: "men holding hands: medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👨🏽‍🤝‍👨🏿",
            label: "men holding hands: medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👨🏾‍🤝‍👨🏻",
            label: "men holding hands: medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👨🏾‍🤝‍👨🏼",
            label: "men holding hands: medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👨🏾‍🤝‍👨🏽",
            label: "men holding hands: medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👨🏾‍🤝‍👨🏿",
            label: "men holding hands: medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👨🏿‍🤝‍👨🏻",
            label: "men holding hands: dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👨🏿‍🤝‍👨🏼",
            label: "men holding hands: dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👨🏿‍🤝‍👨🏽",
            label: "men holding hands: dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👨🏿‍🤝‍👨🏾",
            label: "men holding hands: dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          }
        ]
      },
      {
        emoji: "💏",
        label: "kiss",
        tone: 0,
        skins: [
          {
            emoji: "💏🏻",
            label: "kiss: light skin tone",
            tone: 1
          },
          {
            emoji: "💏🏼",
            label: "kiss: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💏🏽",
            label: "kiss: medium skin tone",
            tone: 3
          },
          {
            emoji: "💏🏾",
            label: "kiss: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💏🏿",
            label: "kiss: dark skin tone",
            tone: 5
          },
          {
            emoji: "🧑🏻‍❤️‍💋‍🧑🏼",
            label: "kiss: person, person, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍💋‍🧑🏽",
            label: "kiss: person, person, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍💋‍🧑🏾",
            label: "kiss: person, person, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍💋‍🧑🏿",
            label: "kiss: person, person, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍💋‍🧑🏻",
            label: "kiss: person, person, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍💋‍🧑🏽",
            label: "kiss: person, person, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍💋‍🧑🏾",
            label: "kiss: person, person, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍💋‍🧑🏿",
            label: "kiss: person, person, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍💋‍🧑🏻",
            label: "kiss: person, person, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍💋‍🧑🏼",
            label: "kiss: person, person, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍💋‍🧑🏾",
            label: "kiss: person, person, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍💋‍🧑🏿",
            label: "kiss: person, person, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍💋‍🧑🏻",
            label: "kiss: person, person, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍💋‍🧑🏼",
            label: "kiss: person, person, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍💋‍🧑🏽",
            label: "kiss: person, person, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍💋‍🧑🏿",
            label: "kiss: person, person, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍💋‍🧑🏻",
            label: "kiss: person, person, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍💋‍🧑🏼",
            label: "kiss: person, person, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍💋‍🧑🏽",
            label: "kiss: person, person, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍💋‍🧑🏾",
            label: "kiss: person, person, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          }
        ]
      },
      {
        emoji: "👩‍❤️‍💋‍👨",
        label: "kiss: woman, man",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍❤️‍💋‍👨🏻",
            label: "kiss: woman, man, light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👨🏼",
            label: "kiss: woman, man, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👨🏽",
            label: "kiss: woman, man, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👨🏾",
            label: "kiss: woman, man, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👨🏿",
            label: "kiss: woman, man, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👨🏻",
            label: "kiss: woman, man, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👨🏼",
            label: "kiss: woman, man, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👨🏽",
            label: "kiss: woman, man, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👨🏾",
            label: "kiss: woman, man, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👨🏿",
            label: "kiss: woman, man, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👨🏻",
            label: "kiss: woman, man, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👨🏼",
            label: "kiss: woman, man, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👨🏽",
            label: "kiss: woman, man, medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👨🏾",
            label: "kiss: woman, man, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👨🏿",
            label: "kiss: woman, man, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👨🏻",
            label: "kiss: woman, man, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👨🏼",
            label: "kiss: woman, man, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👨🏽",
            label: "kiss: woman, man, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👨🏾",
            label: "kiss: woman, man, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👨🏿",
            label: "kiss: woman, man, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👨🏻",
            label: "kiss: woman, man, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👨🏼",
            label: "kiss: woman, man, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👨🏽",
            label: "kiss: woman, man, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👨🏾",
            label: "kiss: woman, man, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👨🏿",
            label: "kiss: woman, man, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍❤️‍💋‍👨",
        label: "kiss: man, man",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍❤️‍💋‍👨🏻",
            label: "kiss: man, man, light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏻‍❤️‍💋‍👨🏼",
            label: "kiss: man, man, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👨🏻‍❤️‍💋‍👨🏽",
            label: "kiss: man, man, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👨🏻‍❤️‍💋‍👨🏾",
            label: "kiss: man, man, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👨🏻‍❤️‍💋‍👨🏿",
            label: "kiss: man, man, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👨🏼‍❤️‍💋‍👨🏻",
            label: "kiss: man, man, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👨🏼‍❤️‍💋‍👨🏼",
            label: "kiss: man, man, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏼‍❤️‍💋‍👨🏽",
            label: "kiss: man, man, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👨🏼‍❤️‍💋‍👨🏾",
            label: "kiss: man, man, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👨🏼‍❤️‍💋‍👨🏿",
            label: "kiss: man, man, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👨🏽‍❤️‍💋‍👨🏻",
            label: "kiss: man, man, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👨🏽‍❤️‍💋‍👨🏼",
            label: "kiss: man, man, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👨🏽‍❤️‍💋‍👨🏽",
            label: "kiss: man, man, medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏽‍❤️‍💋‍👨🏾",
            label: "kiss: man, man, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👨🏽‍❤️‍💋‍👨🏿",
            label: "kiss: man, man, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👨🏾‍❤️‍💋‍👨🏻",
            label: "kiss: man, man, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👨🏾‍❤️‍💋‍👨🏼",
            label: "kiss: man, man, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👨🏾‍❤️‍💋‍👨🏽",
            label: "kiss: man, man, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👨🏾‍❤️‍💋‍👨🏾",
            label: "kiss: man, man, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏾‍❤️‍💋‍👨🏿",
            label: "kiss: man, man, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👨🏿‍❤️‍💋‍👨🏻",
            label: "kiss: man, man, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👨🏿‍❤️‍💋‍👨🏼",
            label: "kiss: man, man, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👨🏿‍❤️‍💋‍👨🏽",
            label: "kiss: man, man, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👨🏿‍❤️‍💋‍👨🏾",
            label: "kiss: man, man, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👨🏿‍❤️‍💋‍👨🏿",
            label: "kiss: man, man, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍❤️‍💋‍👩",
        label: "kiss: woman, woman",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍❤️‍💋‍👩🏻",
            label: "kiss: woman, woman, light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👩🏼",
            label: "kiss: woman, woman, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👩🏽",
            label: "kiss: woman, woman, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👩🏾",
            label: "kiss: woman, woman, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍❤️‍💋‍👩🏿",
            label: "kiss: woman, woman, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👩🏻",
            label: "kiss: woman, woman, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👩🏼",
            label: "kiss: woman, woman, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👩🏽",
            label: "kiss: woman, woman, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👩🏾",
            label: "kiss: woman, woman, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍❤️‍💋‍👩🏿",
            label: "kiss: woman, woman, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👩🏻",
            label: "kiss: woman, woman, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👩🏼",
            label: "kiss: woman, woman, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👩🏽",
            label: "kiss: woman, woman, medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👩🏾",
            label: "kiss: woman, woman, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍❤️‍💋‍👩🏿",
            label: "kiss: woman, woman, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👩🏻",
            label: "kiss: woman, woman, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👩🏼",
            label: "kiss: woman, woman, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👩🏽",
            label: "kiss: woman, woman, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👩🏾",
            label: "kiss: woman, woman, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏾‍❤️‍💋‍👩🏿",
            label: "kiss: woman, woman, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👩🏻",
            label: "kiss: woman, woman, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👩🏼",
            label: "kiss: woman, woman, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👩🏽",
            label: "kiss: woman, woman, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👩🏾",
            label: "kiss: woman, woman, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👩🏿‍❤️‍💋‍👩🏿",
            label: "kiss: woman, woman, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "💑",
        label: "couple with heart",
        tone: 0,
        skins: [
          {
            emoji: "💑🏻",
            label: "couple with heart: light skin tone",
            tone: 1
          },
          {
            emoji: "💑🏼",
            label: "couple with heart: medium-light skin tone",
            tone: 2
          },
          {
            emoji: "💑🏽",
            label: "couple with heart: medium skin tone",
            tone: 3
          },
          {
            emoji: "💑🏾",
            label: "couple with heart: medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "💑🏿",
            label: "couple with heart: dark skin tone",
            tone: 5
          },
          {
            emoji: "🧑🏻‍❤️‍🧑🏼",
            label: "couple with heart: person, person, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍🧑🏽",
            label: "couple with heart: person, person, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍🧑🏾",
            label: "couple with heart: person, person, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "🧑🏻‍❤️‍🧑🏿",
            label: "couple with heart: person, person, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍🧑🏻",
            label: "couple with heart: person, person, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍🧑🏽",
            label: "couple with heart: person, person, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍🧑🏾",
            label: "couple with heart: person, person, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "🧑🏼‍❤️‍🧑🏿",
            label: "couple with heart: person, person, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍🧑🏻",
            label: "couple with heart: person, person, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍🧑🏼",
            label: "couple with heart: person, person, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍🧑🏾",
            label: "couple with heart: person, person, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "🧑🏽‍❤️‍🧑🏿",
            label: "couple with heart: person, person, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍🧑🏻",
            label: "couple with heart: person, person, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍🧑🏼",
            label: "couple with heart: person, person, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍🧑🏽",
            label: "couple with heart: person, person, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "🧑🏾‍❤️‍🧑🏿",
            label: "couple with heart: person, person, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍🧑🏻",
            label: "couple with heart: person, person, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍🧑🏼",
            label: "couple with heart: person, person, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍🧑🏽",
            label: "couple with heart: person, person, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "🧑🏿‍❤️‍🧑🏾",
            label: "couple with heart: person, person, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          }
        ]
      },
      {
        emoji: "👩‍❤️‍👨",
        label: "couple with heart: woman, man",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍❤️‍👨🏻",
            label: "couple with heart: woman, man, light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏻‍❤️‍👨🏼",
            label: "couple with heart: woman, man, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👨🏽",
            label: "couple with heart: woman, man, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👨🏾",
            label: "couple with heart: woman, man, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👨🏿",
            label: "couple with heart: woman, man, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👨🏻",
            label: "couple with heart: woman, man, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👨🏼",
            label: "couple with heart: woman, man, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏼‍❤️‍👨🏽",
            label: "couple with heart: woman, man, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👨🏾",
            label: "couple with heart: woman, man, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👨🏿",
            label: "couple with heart: woman, man, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👨🏻",
            label: "couple with heart: woman, man, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👨🏼",
            label: "couple with heart: woman, man, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👨🏽",
            label: "couple with heart: woman, man, medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏽‍❤️‍👨🏾",
            label: "couple with heart: woman, man, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👨🏿",
            label: "couple with heart: woman, man, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👨🏻",
            label: "couple with heart: woman, man, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👨🏼",
            label: "couple with heart: woman, man, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👨🏽",
            label: "couple with heart: woman, man, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👨🏾",
            label: "couple with heart: woman, man, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏾‍❤️‍👨🏿",
            label: "couple with heart: woman, man, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👨🏻",
            label: "couple with heart: woman, man, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👨🏼",
            label: "couple with heart: woman, man, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👨🏽",
            label: "couple with heart: woman, man, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👨🏾",
            label: "couple with heart: woman, man, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👨🏿",
            label: "couple with heart: woman, man, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👨‍❤️‍👨",
        label: "couple with heart: man, man",
        tone: 0,
        skins: [
          {
            emoji: "👨🏻‍❤️‍👨🏻",
            label: "couple with heart: man, man, light skin tone",
            tone: 1
          },
          {
            emoji: "👨🏻‍❤️‍👨🏼",
            label: "couple with heart: man, man, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👨🏻‍❤️‍👨🏽",
            label: "couple with heart: man, man, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👨🏻‍❤️‍👨🏾",
            label: "couple with heart: man, man, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👨🏻‍❤️‍👨🏿",
            label: "couple with heart: man, man, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👨🏼‍❤️‍👨🏻",
            label: "couple with heart: man, man, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👨🏼‍❤️‍👨🏼",
            label: "couple with heart: man, man, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👨🏼‍❤️‍👨🏽",
            label: "couple with heart: man, man, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👨🏼‍❤️‍👨🏾",
            label: "couple with heart: man, man, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👨🏼‍❤️‍👨🏿",
            label: "couple with heart: man, man, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👨🏽‍❤️‍👨🏻",
            label: "couple with heart: man, man, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👨🏽‍❤️‍👨🏼",
            label: "couple with heart: man, man, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👨🏽‍❤️‍👨🏽",
            label: "couple with heart: man, man, medium skin tone",
            tone: 3
          },
          {
            emoji: "👨🏽‍❤️‍👨🏾",
            label: "couple with heart: man, man, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👨🏽‍❤️‍👨🏿",
            label: "couple with heart: man, man, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👨🏾‍❤️‍👨🏻",
            label: "couple with heart: man, man, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👨🏾‍❤️‍👨🏼",
            label: "couple with heart: man, man, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👨🏾‍❤️‍👨🏽",
            label: "couple with heart: man, man, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👨🏾‍❤️‍👨🏾",
            label: "couple with heart: man, man, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👨🏾‍❤️‍👨🏿",
            label: "couple with heart: man, man, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👨🏿‍❤️‍👨🏻",
            label: "couple with heart: man, man, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👨🏿‍❤️‍👨🏼",
            label: "couple with heart: man, man, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👨🏿‍❤️‍👨🏽",
            label: "couple with heart: man, man, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👨🏿‍❤️‍👨🏾",
            label: "couple with heart: man, man, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👨🏿‍❤️‍👨🏿",
            label: "couple with heart: man, man, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👩‍❤️‍👩",
        label: "couple with heart: woman, woman",
        tone: 0,
        skins: [
          {
            emoji: "👩🏻‍❤️‍👩🏻",
            label: "couple with heart: woman, woman, light skin tone",
            tone: 1
          },
          {
            emoji: "👩🏻‍❤️‍👩🏼",
            label: "couple with heart: woman, woman, light skin tone, medium-light skin tone",
            tone: [
              1,
              2
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👩🏽",
            label: "couple with heart: woman, woman, light skin tone, medium skin tone",
            tone: [
              1,
              3
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👩🏾",
            label: "couple with heart: woman, woman, light skin tone, medium-dark skin tone",
            tone: [
              1,
              4
            ]
          },
          {
            emoji: "👩🏻‍❤️‍👩🏿",
            label: "couple with heart: woman, woman, light skin tone, dark skin tone",
            tone: [
              1,
              5
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👩🏻",
            label: "couple with heart: woman, woman, medium-light skin tone, light skin tone",
            tone: [
              2,
              1
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👩🏼",
            label: "couple with heart: woman, woman, medium-light skin tone",
            tone: 2
          },
          {
            emoji: "👩🏼‍❤️‍👩🏽",
            label: "couple with heart: woman, woman, medium-light skin tone, medium skin tone",
            tone: [
              2,
              3
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👩🏾",
            label: "couple with heart: woman, woman, medium-light skin tone, medium-dark skin tone",
            tone: [
              2,
              4
            ]
          },
          {
            emoji: "👩🏼‍❤️‍👩🏿",
            label: "couple with heart: woman, woman, medium-light skin tone, dark skin tone",
            tone: [
              2,
              5
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👩🏻",
            label: "couple with heart: woman, woman, medium skin tone, light skin tone",
            tone: [
              3,
              1
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👩🏼",
            label: "couple with heart: woman, woman, medium skin tone, medium-light skin tone",
            tone: [
              3,
              2
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👩🏽",
            label: "couple with heart: woman, woman, medium skin tone",
            tone: 3
          },
          {
            emoji: "👩🏽‍❤️‍👩🏾",
            label: "couple with heart: woman, woman, medium skin tone, medium-dark skin tone",
            tone: [
              3,
              4
            ]
          },
          {
            emoji: "👩🏽‍❤️‍👩🏿",
            label: "couple with heart: woman, woman, medium skin tone, dark skin tone",
            tone: [
              3,
              5
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👩🏻",
            label: "couple with heart: woman, woman, medium-dark skin tone, light skin tone",
            tone: [
              4,
              1
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👩🏼",
            label: "couple with heart: woman, woman, medium-dark skin tone, medium-light skin tone",
            tone: [
              4,
              2
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👩🏽",
            label: "couple with heart: woman, woman, medium-dark skin tone, medium skin tone",
            tone: [
              4,
              3
            ]
          },
          {
            emoji: "👩🏾‍❤️‍👩🏾",
            label: "couple with heart: woman, woman, medium-dark skin tone",
            tone: 4
          },
          {
            emoji: "👩🏾‍❤️‍👩🏿",
            label: "couple with heart: woman, woman, medium-dark skin tone, dark skin tone",
            tone: [
              4,
              5
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👩🏻",
            label: "couple with heart: woman, woman, dark skin tone, light skin tone",
            tone: [
              5,
              1
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👩🏼",
            label: "couple with heart: woman, woman, dark skin tone, medium-light skin tone",
            tone: [
              5,
              2
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👩🏽",
            label: "couple with heart: woman, woman, dark skin tone, medium skin tone",
            tone: [
              5,
              3
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👩🏾",
            label: "couple with heart: woman, woman, dark skin tone, medium-dark skin tone",
            tone: [
              5,
              4
            ]
          },
          {
            emoji: "👩🏿‍❤️‍👩🏿",
            label: "couple with heart: woman, woman, dark skin tone",
            tone: 5
          }
        ]
      },
      {
        emoji: "👪️",
        label: "family",
        tone: 0
      },
      {
        emoji: "👨‍👩‍👦",
        label: "family: man, woman, boy",
        tone: 0
      },
      {
        emoji: "👨‍👩‍👧",
        label: "family: man, woman, girl",
        tone: 0
      },
      {
        emoji: "👨‍👩‍👧‍👦",
        label: "family: man, woman, girl, boy",
        tone: 0
      },
      {
        emoji: "👨‍👩‍👦‍👦",
        label: "family: man, woman, boy, boy",
        tone: 0
      },
      {
        emoji: "👨‍👩‍👧‍👧",
        label: "family: man, woman, girl, girl",
        tone: 0
      },
      {
        emoji: "👨‍👨‍👦",
        label: "family: man, man, boy",
        tone: 0
      },
      {
        emoji: "👨‍👨‍👧",
        label: "family: man, man, girl",
        tone: 0
      },
      {
        emoji: "👨‍👨‍👧‍👦",
        label: "family: man, man, girl, boy",
        tone: 0
      },
      {
        emoji: "👨‍👨‍👦‍👦",
        label: "family: man, man, boy, boy",
        tone: 0
      },
      {
        emoji: "👨‍👨‍👧‍👧",
        label: "family: man, man, girl, girl",
        tone: 0
      },
      {
        emoji: "👩‍👩‍👦",
        label: "family: woman, woman, boy",
        tone: 0
      },
      {
        emoji: "👩‍👩‍👧",
        label: "family: woman, woman, girl",
        tone: 0
      },
      {
        emoji: "👩‍👩‍👧‍👦",
        label: "family: woman, woman, girl, boy",
        tone: 0
      },
      {
        emoji: "👩‍👩‍👦‍👦",
        label: "family: woman, woman, boy, boy",
        tone: 0
      },
      {
        emoji: "👩‍👩‍👧‍👧",
        label: "family: woman, woman, girl, girl",
        tone: 0
      },
      {
        emoji: "👨‍👦",
        label: "family: man, boy",
        tone: 0
      },
      {
        emoji: "👨‍👦‍👦",
        label: "family: man, boy, boy",
        tone: 0
      },
      {
        emoji: "👨‍👧",
        label: "family: man, girl",
        tone: 0
      },
      {
        emoji: "👨‍👧‍👦",
        label: "family: man, girl, boy",
        tone: 0
      },
      {
        emoji: "👨‍👧‍👧",
        label: "family: man, girl, girl",
        tone: 0
      },
      {
        emoji: "👩‍👦",
        label: "family: woman, boy",
        tone: 0
      },
      {
        emoji: "👩‍👦‍👦",
        label: "family: woman, boy, boy",
        tone: 0
      },
      {
        emoji: "👩‍👧",
        label: "family: woman, girl",
        tone: 0
      },
      {
        emoji: "👩‍👧‍👦",
        label: "family: woman, girl, boy",
        tone: 0
      },
      {
        emoji: "👩‍👧‍👧",
        label: "family: woman, girl, girl",
        tone: 0
      },
      {
        emoji: "🗣️",
        label: "speaking head",
        tone: 0
      },
      {
        emoji: "👤",
        label: "bust in silhouette",
        tone: 0
      },
      {
        emoji: "👥",
        label: "busts in silhouette",
        tone: 0
      },
      {
        emoji: "🫂",
        label: "people hugging",
        tone: 0
      },
      {
        emoji: "👣",
        label: "footprints",
        tone: 0
      }
    ]
  },
  {
    name: "animals-nature",
    emojis: [
      {
        emoji: "🐵",
        label: "monkey face",
        tone: 0
      },
      {
        emoji: "🐒",
        label: "monkey",
        tone: 0
      },
      {
        emoji: "🦍",
        label: "gorilla",
        tone: 0
      },
      {
        emoji: "🦧",
        label: "orangutan",
        tone: 0
      },
      {
        emoji: "🐶",
        label: "dog face",
        tone: 0
      },
      {
        emoji: "🐕️",
        label: "dog",
        tone: 0
      },
      {
        emoji: "🦮",
        label: "guide dog",
        tone: 0
      },
      {
        emoji: "🐕‍🦺",
        label: "service dog",
        tone: 0
      },
      {
        emoji: "🐩",
        label: "poodle",
        tone: 0
      },
      {
        emoji: "🐺",
        label: "wolf",
        tone: 0
      },
      {
        emoji: "🦊",
        label: "fox",
        tone: 0
      },
      {
        emoji: "🦝",
        label: "raccoon",
        tone: 0
      },
      {
        emoji: "🐱",
        label: "cat face",
        tone: 0
      },
      {
        emoji: "🐈️",
        label: "cat",
        tone: 0
      },
      {
        emoji: "🐈‍⬛",
        label: "black cat",
        tone: 0
      },
      {
        emoji: "🦁",
        label: "lion",
        tone: 0
      },
      {
        emoji: "🐯",
        label: "tiger face",
        tone: 0
      },
      {
        emoji: "🐅",
        label: "tiger",
        tone: 0
      },
      {
        emoji: "🐆",
        label: "leopard",
        tone: 0
      },
      {
        emoji: "🐴",
        label: "horse face",
        tone: 0
      },
      {
        emoji: "🐎",
        label: "horse",
        tone: 0
      },
      {
        emoji: "🦄",
        label: "unicorn",
        tone: 0
      },
      {
        emoji: "🦓",
        label: "zebra",
        tone: 0
      },
      {
        emoji: "🦌",
        label: "deer",
        tone: 0
      },
      {
        emoji: "🦬",
        label: "bison",
        tone: 0
      },
      {
        emoji: "🐮",
        label: "cow face",
        tone: 0
      },
      {
        emoji: "🐂",
        label: "ox",
        tone: 0
      },
      {
        emoji: "🐃",
        label: "water buffalo",
        tone: 0
      },
      {
        emoji: "🐄",
        label: "cow",
        tone: 0
      },
      {
        emoji: "🐷",
        label: "pig face",
        tone: 0
      },
      {
        emoji: "🐖",
        label: "pig",
        tone: 0
      },
      {
        emoji: "🐗",
        label: "boar",
        tone: 0
      },
      {
        emoji: "🐽",
        label: "pig nose",
        tone: 0
      },
      {
        emoji: "🐏",
        label: "ram",
        tone: 0
      },
      {
        emoji: "🐑",
        label: "ewe",
        tone: 0
      },
      {
        emoji: "🐐",
        label: "goat",
        tone: 0
      },
      {
        emoji: "🐪",
        label: "camel",
        tone: 0
      },
      {
        emoji: "🐫",
        label: "two-hump camel",
        tone: 0
      },
      {
        emoji: "🦙",
        label: "llama",
        tone: 0
      },
      {
        emoji: "🦒",
        label: "giraffe",
        tone: 0
      },
      {
        emoji: "🐘",
        label: "elephant",
        tone: 0
      },
      {
        emoji: "🦣",
        label: "mammoth",
        tone: 0
      },
      {
        emoji: "🦏",
        label: "rhinoceros",
        tone: 0
      },
      {
        emoji: "🦛",
        label: "hippopotamus",
        tone: 0
      },
      {
        emoji: "🐭",
        label: "mouse face",
        tone: 0
      },
      {
        emoji: "🐁",
        label: "mouse",
        tone: 0
      },
      {
        emoji: "🐀",
        label: "rat",
        tone: 0
      },
      {
        emoji: "🐹",
        label: "hamster",
        tone: 0
      },
      {
        emoji: "🐰",
        label: "rabbit face",
        tone: 0
      },
      {
        emoji: "🐇",
        label: "rabbit",
        tone: 0
      },
      {
        emoji: "🐿️",
        label: "chipmunk",
        tone: 0
      },
      {
        emoji: "🦫",
        label: "beaver",
        tone: 0
      },
      {
        emoji: "🦔",
        label: "hedgehog",
        tone: 0
      },
      {
        emoji: "🦇",
        label: "bat",
        tone: 0
      },
      {
        emoji: "🐻",
        label: "bear",
        tone: 0
      },
      {
        emoji: "🐻‍❄️",
        label: "polar bear",
        tone: 0
      },
      {
        emoji: "🐨",
        label: "koala",
        tone: 0
      },
      {
        emoji: "🐼",
        label: "panda",
        tone: 0
      },
      {
        emoji: "🦥",
        label: "sloth",
        tone: 0
      },
      {
        emoji: "🦦",
        label: "otter",
        tone: 0
      },
      {
        emoji: "🦨",
        label: "skunk",
        tone: 0
      },
      {
        emoji: "🦘",
        label: "kangaroo",
        tone: 0
      },
      {
        emoji: "🦡",
        label: "badger",
        tone: 0
      },
      {
        emoji: "🐾",
        label: "paw prints",
        tone: 0
      },
      {
        emoji: "🦃",
        label: "turkey",
        tone: 0
      },
      {
        emoji: "🐔",
        label: "chicken",
        tone: 0
      },
      {
        emoji: "🐓",
        label: "rooster",
        tone: 0
      },
      {
        emoji: "🐣",
        label: "hatching chick",
        tone: 0
      },
      {
        emoji: "🐤",
        label: "baby chick",
        tone: 0
      },
      {
        emoji: "🐥",
        label: "front-facing baby chick",
        tone: 0
      },
      {
        emoji: "🐦️",
        label: "bird",
        tone: 0
      },
      {
        emoji: "🐧",
        label: "penguin",
        tone: 0
      },
      {
        emoji: "🕊️",
        label: "dove",
        tone: 0
      },
      {
        emoji: "🦅",
        label: "eagle",
        tone: 0
      },
      {
        emoji: "🦆",
        label: "duck",
        tone: 0
      },
      {
        emoji: "🦢",
        label: "swan",
        tone: 0
      },
      {
        emoji: "🦉",
        label: "owl",
        tone: 0
      },
      {
        emoji: "🦤",
        label: "dodo",
        tone: 0
      },
      {
        emoji: "🪶",
        label: "feather",
        tone: 0
      },
      {
        emoji: "🦩",
        label: "flamingo",
        tone: 0
      },
      {
        emoji: "🦚",
        label: "peacock",
        tone: 0
      },
      {
        emoji: "🦜",
        label: "parrot",
        tone: 0
      },
      {
        emoji: "🐸",
        label: "frog",
        tone: 0
      },
      {
        emoji: "🐊",
        label: "crocodile",
        tone: 0
      },
      {
        emoji: "🐢",
        label: "turtle",
        tone: 0
      },
      {
        emoji: "🦎",
        label: "lizard",
        tone: 0
      },
      {
        emoji: "🐍",
        label: "snake",
        tone: 0
      },
      {
        emoji: "🐲",
        label: "dragon face",
        tone: 0
      },
      {
        emoji: "🐉",
        label: "dragon",
        tone: 0
      },
      {
        emoji: "🦕",
        label: "sauropod",
        tone: 0
      },
      {
        emoji: "🦖",
        label: "T-Rex",
        tone: 0
      },
      {
        emoji: "🐳",
        label: "spouting whale",
        tone: 0
      },
      {
        emoji: "🐋",
        label: "whale",
        tone: 0
      },
      {
        emoji: "🐬",
        label: "dolphin",
        tone: 0
      },
      {
        emoji: "🦭",
        label: "seal",
        tone: 0
      },
      {
        emoji: "🐟️",
        label: "fish",
        tone: 0
      },
      {
        emoji: "🐠",
        label: "tropical fish",
        tone: 0
      },
      {
        emoji: "🐡",
        label: "blowfish",
        tone: 0
      },
      {
        emoji: "🦈",
        label: "shark",
        tone: 0
      },
      {
        emoji: "🐙",
        label: "octopus",
        tone: 0
      },
      {
        emoji: "🐚",
        label: "spiral shell",
        tone: 0
      },
      {
        emoji: "🐌",
        label: "snail",
        tone: 0
      },
      {
        emoji: "🦋",
        label: "butterfly",
        tone: 0
      },
      {
        emoji: "🐛",
        label: "bug",
        tone: 0
      },
      {
        emoji: "🐜",
        label: "ant",
        tone: 0
      },
      {
        emoji: "🐝",
        label: "honeybee",
        tone: 0
      },
      {
        emoji: "🪲",
        label: "beetle",
        tone: 0
      },
      {
        emoji: "🐞",
        label: "lady beetle",
        tone: 0
      },
      {
        emoji: "🦗",
        label: "cricket",
        tone: 0
      },
      {
        emoji: "🪳",
        label: "cockroach",
        tone: 0
      },
      {
        emoji: "🕷️",
        label: "spider",
        tone: 0
      },
      {
        emoji: "🕸️",
        label: "spider web",
        tone: 0
      },
      {
        emoji: "🦂",
        label: "scorpion",
        tone: 0
      },
      {
        emoji: "🦟",
        label: "mosquito",
        tone: 0
      },
      {
        emoji: "🪰",
        label: "fly",
        tone: 0
      },
      {
        emoji: "🪱",
        label: "worm",
        tone: 0
      },
      {
        emoji: "🦠",
        label: "microbe",
        tone: 0
      },
      {
        emoji: "💐",
        label: "bouquet",
        tone: 0
      },
      {
        emoji: "🌸",
        label: "cherry blossom",
        tone: 0
      },
      {
        emoji: "💮",
        label: "white flower",
        tone: 0
      },
      {
        emoji: "🏵️",
        label: "rosette",
        tone: 0
      },
      {
        emoji: "🌹",
        label: "rose",
        tone: 0
      },
      {
        emoji: "🥀",
        label: "wilted flower",
        tone: 0
      },
      {
        emoji: "🌺",
        label: "hibiscus",
        tone: 0
      },
      {
        emoji: "🌻",
        label: "sunflower",
        tone: 0
      },
      {
        emoji: "🌼",
        label: "blossom",
        tone: 0
      },
      {
        emoji: "🌷",
        label: "tulip",
        tone: 0
      },
      {
        emoji: "🌱",
        label: "seedling",
        tone: 0
      },
      {
        emoji: "🪴",
        label: "potted plant",
        tone: 0
      },
      {
        emoji: "🌲",
        label: "evergreen tree",
        tone: 0
      },
      {
        emoji: "🌳",
        label: "deciduous tree",
        tone: 0
      },
      {
        emoji: "🌴",
        label: "palm tree",
        tone: 0
      },
      {
        emoji: "🌵",
        label: "cactus",
        tone: 0
      },
      {
        emoji: "🌾",
        label: "sheaf of rice",
        tone: 0
      },
      {
        emoji: "🌿",
        label: "herb",
        tone: 0
      },
      {
        emoji: "☘️",
        label: "shamrock",
        tone: 0
      },
      {
        emoji: "🍀",
        label: "four leaf clover",
        tone: 0
      },
      {
        emoji: "🍁",
        label: "maple leaf",
        tone: 0
      },
      {
        emoji: "🍂",
        label: "fallen leaf",
        tone: 0
      },
      {
        emoji: "🍃",
        label: "leaf fluttering in wind",
        tone: 0
      }
    ]
  },
  {
    name: "food-drink",
    emojis: [
      {
        emoji: "🍇",
        label: "grapes",
        tone: 0
      },
      {
        emoji: "🍈",
        label: "melon",
        tone: 0
      },
      {
        emoji: "🍉",
        label: "watermelon",
        tone: 0
      },
      {
        emoji: "🍊",
        label: "tangerine",
        tone: 0
      },
      {
        emoji: "🍋",
        label: "lemon",
        tone: 0
      },
      {
        emoji: "🍌",
        label: "banana",
        tone: 0
      },
      {
        emoji: "🍍",
        label: "pineapple",
        tone: 0
      },
      {
        emoji: "🥭",
        label: "mango",
        tone: 0
      },
      {
        emoji: "🍎",
        label: "red apple",
        tone: 0
      },
      {
        emoji: "🍏",
        label: "green apple",
        tone: 0
      },
      {
        emoji: "🍐",
        label: "pear",
        tone: 0
      },
      {
        emoji: "🍑",
        label: "peach",
        tone: 0
      },
      {
        emoji: "🍒",
        label: "cherries",
        tone: 0
      },
      {
        emoji: "🍓",
        label: "strawberry",
        tone: 0
      },
      {
        emoji: "🫐",
        label: "blueberries",
        tone: 0
      },
      {
        emoji: "🥝",
        label: "kiwi fruit",
        tone: 0
      },
      {
        emoji: "🍅",
        label: "tomato",
        tone: 0
      },
      {
        emoji: "🫒",
        label: "olive",
        tone: 0
      },
      {
        emoji: "🥥",
        label: "coconut",
        tone: 0
      },
      {
        emoji: "🥑",
        label: "avocado",
        tone: 0
      },
      {
        emoji: "🍆",
        label: "eggplant",
        tone: 0
      },
      {
        emoji: "🥔",
        label: "potato",
        tone: 0
      },
      {
        emoji: "🥕",
        label: "carrot",
        tone: 0
      },
      {
        emoji: "🌽",
        label: "ear of corn",
        tone: 0
      },
      {
        emoji: "🌶️",
        label: "hot pepper",
        tone: 0
      },
      {
        emoji: "🫑",
        label: "bell pepper",
        tone: 0
      },
      {
        emoji: "🥒",
        label: "cucumber",
        tone: 0
      },
      {
        emoji: "🥬",
        label: "leafy green",
        tone: 0
      },
      {
        emoji: "🥦",
        label: "broccoli",
        tone: 0
      },
      {
        emoji: "🧄",
        label: "garlic",
        tone: 0
      },
      {
        emoji: "🧅",
        label: "onion",
        tone: 0
      },
      {
        emoji: "🍄",
        label: "mushroom",
        tone: 0
      },
      {
        emoji: "🥜",
        label: "peanuts",
        tone: 0
      },
      {
        emoji: "🌰",
        label: "chestnut",
        tone: 0
      },
      {
        emoji: "🍞",
        label: "bread",
        tone: 0
      },
      {
        emoji: "🥐",
        label: "croissant",
        tone: 0
      },
      {
        emoji: "🥖",
        label: "baguette bread",
        tone: 0
      },
      {
        emoji: "🫓",
        label: "flatbread",
        tone: 0
      },
      {
        emoji: "🥨",
        label: "pretzel",
        tone: 0
      },
      {
        emoji: "🥯",
        label: "bagel",
        tone: 0
      },
      {
        emoji: "🥞",
        label: "pancakes",
        tone: 0
      },
      {
        emoji: "🧇",
        label: "waffle",
        tone: 0
      },
      {
        emoji: "🧀",
        label: "cheese wedge",
        tone: 0
      },
      {
        emoji: "🍖",
        label: "meat on bone",
        tone: 0
      },
      {
        emoji: "🍗",
        label: "poultry leg",
        tone: 0
      },
      {
        emoji: "🥩",
        label: "cut of meat",
        tone: 0
      },
      {
        emoji: "🥓",
        label: "bacon",
        tone: 0
      },
      {
        emoji: "🍔",
        label: "hamburger",
        tone: 0
      },
      {
        emoji: "🍟",
        label: "french fries",
        tone: 0
      },
      {
        emoji: "🍕",
        label: "pizza",
        tone: 0
      },
      {
        emoji: "🌭",
        label: "hot dog",
        tone: 0
      },
      {
        emoji: "🥪",
        label: "sandwich",
        tone: 0
      },
      {
        emoji: "🌮",
        label: "taco",
        tone: 0
      },
      {
        emoji: "🌯",
        label: "burrito",
        tone: 0
      },
      {
        emoji: "🫔",
        label: "tamale",
        tone: 0
      },
      {
        emoji: "🥙",
        label: "stuffed flatbread",
        tone: 0
      },
      {
        emoji: "🧆",
        label: "falafel",
        tone: 0
      },
      {
        emoji: "🥚",
        label: "egg",
        tone: 0
      },
      {
        emoji: "🍳",
        label: "cooking",
        tone: 0
      },
      {
        emoji: "🥘",
        label: "shallow pan of food",
        tone: 0
      },
      {
        emoji: "🍲",
        label: "pot of food",
        tone: 0
      },
      {
        emoji: "🫕",
        label: "fondue",
        tone: 0
      },
      {
        emoji: "🥣",
        label: "bowl with spoon",
        tone: 0
      },
      {
        emoji: "🥗",
        label: "green salad",
        tone: 0
      },
      {
        emoji: "🍿",
        label: "popcorn",
        tone: 0
      },
      {
        emoji: "🧈",
        label: "butter",
        tone: 0
      },
      {
        emoji: "🧂",
        label: "salt",
        tone: 0
      },
      {
        emoji: "🥫",
        label: "canned food",
        tone: 0
      },
      {
        emoji: "🍱",
        label: "bento box",
        tone: 0
      },
      {
        emoji: "🍘",
        label: "rice cracker",
        tone: 0
      },
      {
        emoji: "🍙",
        label: "rice ball",
        tone: 0
      },
      {
        emoji: "🍚",
        label: "cooked rice",
        tone: 0
      },
      {
        emoji: "🍛",
        label: "curry rice",
        tone: 0
      },
      {
        emoji: "🍜",
        label: "steaming bowl",
        tone: 0
      },
      {
        emoji: "🍝",
        label: "spaghetti",
        tone: 0
      },
      {
        emoji: "🍠",
        label: "roasted sweet potato",
        tone: 0
      },
      {
        emoji: "🍢",
        label: "oden",
        tone: 0
      },
      {
        emoji: "🍣",
        label: "sushi",
        tone: 0
      },
      {
        emoji: "🍤",
        label: "fried shrimp",
        tone: 0
      },
      {
        emoji: "🍥",
        label: "fish cake with swirl",
        tone: 0
      },
      {
        emoji: "🥮",
        label: "moon cake",
        tone: 0
      },
      {
        emoji: "🍡",
        label: "dango",
        tone: 0
      },
      {
        emoji: "🥟",
        label: "dumpling",
        tone: 0
      },
      {
        emoji: "🥠",
        label: "fortune cookie",
        tone: 0
      },
      {
        emoji: "🥡",
        label: "takeout box",
        tone: 0
      },
      {
        emoji: "🦀",
        label: "crab",
        tone: 0
      },
      {
        emoji: "🦞",
        label: "lobster",
        tone: 0
      },
      {
        emoji: "🦐",
        label: "shrimp",
        tone: 0
      },
      {
        emoji: "🦑",
        label: "squid",
        tone: 0
      },
      {
        emoji: "🦪",
        label: "oyster",
        tone: 0
      },
      {
        emoji: "🍦",
        label: "soft ice cream",
        tone: 0
      },
      {
        emoji: "🍧",
        label: "shaved ice",
        tone: 0
      },
      {
        emoji: "🍨",
        label: "ice cream",
        tone: 0
      },
      {
        emoji: "🍩",
        label: "doughnut",
        tone: 0
      },
      {
        emoji: "🍪",
        label: "cookie",
        tone: 0
      },
      {
        emoji: "🎂",
        label: "birthday cake",
        tone: 0
      },
      {
        emoji: "🍰",
        label: "shortcake",
        tone: 0
      },
      {
        emoji: "🧁",
        label: "cupcake",
        tone: 0
      },
      {
        emoji: "🥧",
        label: "pie",
        tone: 0
      },
      {
        emoji: "🍫",
        label: "chocolate bar",
        tone: 0
      },
      {
        emoji: "🍬",
        label: "candy",
        tone: 0
      },
      {
        emoji: "🍭",
        label: "lollipop",
        tone: 0
      },
      {
        emoji: "🍮",
        label: "custard",
        tone: 0
      },
      {
        emoji: "🍯",
        label: "honey pot",
        tone: 0
      },
      {
        emoji: "🍼",
        label: "baby bottle",
        tone: 0
      },
      {
        emoji: "🥛",
        label: "glass of milk",
        tone: 0
      },
      {
        emoji: "☕️",
        label: "hot beverage",
        tone: 0
      },
      {
        emoji: "🫖",
        label: "teapot",
        tone: 0
      },
      {
        emoji: "🍵",
        label: "teacup without handle",
        tone: 0
      },
      {
        emoji: "🍶",
        label: "sake",
        tone: 0
      },
      {
        emoji: "🍾",
        label: "bottle with popping cork",
        tone: 0
      },
      {
        emoji: "🍷",
        label: "wine glass",
        tone: 0
      },
      {
        emoji: "🍸️",
        label: "cocktail glass",
        tone: 0
      },
      {
        emoji: "🍹",
        label: "tropical drink",
        tone: 0
      },
      {
        emoji: "🍺",
        label: "beer mug",
        tone: 0
      },
      {
        emoji: "🍻",
        label: "clinking beer mugs",
        tone: 0
      },
      {
        emoji: "🥂",
        label: "clinking glasses",
        tone: 0
      },
      {
        emoji: "🥃",
        label: "tumbler glass",
        tone: 0
      },
      {
        emoji: "🥤",
        label: "cup with straw",
        tone: 0
      },
      {
        emoji: "🧋",
        label: "bubble tea",
        tone: 0
      },
      {
        emoji: "🧃",
        label: "beverage box",
        tone: 0
      },
      {
        emoji: "🧉",
        label: "mate",
        tone: 0
      },
      {
        emoji: "🧊",
        label: "ice",
        tone: 0
      },
      {
        emoji: "🥢",
        label: "chopsticks",
        tone: 0
      },
      {
        emoji: "🍽️",
        label: "fork and knife with plate",
        tone: 0
      },
      {
        emoji: "🍴",
        label: "fork and knife",
        tone: 0
      },
      {
        emoji: "🥄",
        label: "spoon",
        tone: 0
      },
      {
        emoji: "🔪",
        label: "kitchen knife",
        tone: 0
      },
      {
        emoji: "🏺",
        label: "amphora",
        tone: 0
      }
    ]
  },
  {
    name: "travel-places",
    emojis: [
      {
        emoji: "🌍️",
        label: "globe showing Europe-Africa",
        tone: 0
      },
      {
        emoji: "🌎️",
        label: "globe showing Americas",
        tone: 0
      },
      {
        emoji: "🌏️",
        label: "globe showing Asia-Australia",
        tone: 0
      },
      {
        emoji: "🌐",
        label: "globe with meridians",
        tone: 0
      },
      {
        emoji: "🗺️",
        label: "world map",
        tone: 0
      },
      {
        emoji: "🗾",
        label: "map of Japan",
        tone: 0
      },
      {
        emoji: "🧭",
        label: "compass",
        tone: 0
      },
      {
        emoji: "🏔️",
        label: "snow-capped mountain",
        tone: 0
      },
      {
        emoji: "⛰️",
        label: "mountain",
        tone: 0
      },
      {
        emoji: "🌋",
        label: "volcano",
        tone: 0
      },
      {
        emoji: "🗻",
        label: "mount fuji",
        tone: 0
      },
      {
        emoji: "🏕️",
        label: "camping",
        tone: 0
      },
      {
        emoji: "🏖️",
        label: "beach with umbrella",
        tone: 0
      },
      {
        emoji: "🏜️",
        label: "desert",
        tone: 0
      },
      {
        emoji: "🏝️",
        label: "desert island",
        tone: 0
      },
      {
        emoji: "🏞️",
        label: "national park",
        tone: 0
      },
      {
        emoji: "🏟️",
        label: "stadium",
        tone: 0
      },
      {
        emoji: "🏛️",
        label: "classical building",
        tone: 0
      },
      {
        emoji: "🏗️",
        label: "building construction",
        tone: 0
      },
      {
        emoji: "🧱",
        label: "brick",
        tone: 0
      },
      {
        emoji: "🪨",
        label: "rock",
        tone: 0
      },
      {
        emoji: "🪵",
        label: "wood",
        tone: 0
      },
      {
        emoji: "🛖",
        label: "hut",
        tone: 0
      },
      {
        emoji: "🏘️",
        label: "houses",
        tone: 0
      },
      {
        emoji: "🏚️",
        label: "derelict house",
        tone: 0
      },
      {
        emoji: "🏠️",
        label: "house",
        tone: 0
      },
      {
        emoji: "🏡",
        label: "house with garden",
        tone: 0
      },
      {
        emoji: "🏢",
        label: "office building",
        tone: 0
      },
      {
        emoji: "🏣",
        label: "Japanese post office",
        tone: 0
      },
      {
        emoji: "🏤",
        label: "post office",
        tone: 0
      },
      {
        emoji: "🏥",
        label: "hospital",
        tone: 0
      },
      {
        emoji: "🏦",
        label: "bank",
        tone: 0
      },
      {
        emoji: "🏨",
        label: "hotel",
        tone: 0
      },
      {
        emoji: "🏩",
        label: "love hotel",
        tone: 0
      },
      {
        emoji: "🏪",
        label: "convenience store",
        tone: 0
      },
      {
        emoji: "🏫",
        label: "school",
        tone: 0
      },
      {
        emoji: "🏬",
        label: "department store",
        tone: 0
      },
      {
        emoji: "🏭️",
        label: "factory",
        tone: 0
      },
      {
        emoji: "🏯",
        label: "Japanese castle",
        tone: 0
      },
      {
        emoji: "🏰",
        label: "castle",
        tone: 0
      },
      {
        emoji: "💒",
        label: "wedding",
        tone: 0
      },
      {
        emoji: "🗼",
        label: "Tokyo tower",
        tone: 0
      },
      {
        emoji: "🗽",
        label: "Statue of Liberty",
        tone: 0
      },
      {
        emoji: "⛪️",
        label: "church",
        tone: 0
      },
      {
        emoji: "🕌",
        label: "mosque",
        tone: 0
      },
      {
        emoji: "🛕",
        label: "hindu temple",
        tone: 0
      },
      {
        emoji: "🕍",
        label: "synagogue",
        tone: 0
      },
      {
        emoji: "⛩️",
        label: "shinto shrine",
        tone: 0
      },
      {
        emoji: "🕋",
        label: "kaaba",
        tone: 0
      },
      {
        emoji: "⛲️",
        label: "fountain",
        tone: 0
      },
      {
        emoji: "⛺️",
        label: "tent",
        tone: 0
      },
      {
        emoji: "🌁",
        label: "foggy",
        tone: 0
      },
      {
        emoji: "🌃",
        label: "night with stars",
        tone: 0
      },
      {
        emoji: "🏙️",
        label: "cityscape",
        tone: 0
      },
      {
        emoji: "🌄",
        label: "sunrise over mountains",
        tone: 0
      },
      {
        emoji: "🌅",
        label: "sunrise",
        tone: 0
      },
      {
        emoji: "🌆",
        label: "cityscape at dusk",
        tone: 0
      },
      {
        emoji: "🌇",
        label: "sunset",
        tone: 0
      },
      {
        emoji: "🌉",
        label: "bridge at night",
        tone: 0
      },
      {
        emoji: "♨️",
        label: "hot springs",
        tone: 0
      },
      {
        emoji: "🎠",
        label: "carousel horse",
        tone: 0
      },
      {
        emoji: "🎡",
        label: "ferris wheel",
        tone: 0
      },
      {
        emoji: "🎢",
        label: "roller coaster",
        tone: 0
      },
      {
        emoji: "💈",
        label: "barber pole",
        tone: 0
      },
      {
        emoji: "🎪",
        label: "circus tent",
        tone: 0
      },
      {
        emoji: "🚂",
        label: "locomotive",
        tone: 0
      },
      {
        emoji: "🚃",
        label: "railway car",
        tone: 0
      },
      {
        emoji: "🚄",
        label: "high-speed train",
        tone: 0
      },
      {
        emoji: "🚅",
        label: "bullet train",
        tone: 0
      },
      {
        emoji: "🚆",
        label: "train",
        tone: 0
      },
      {
        emoji: "🚇️",
        label: "metro",
        tone: 0
      },
      {
        emoji: "🚈",
        label: "light rail",
        tone: 0
      },
      {
        emoji: "🚉",
        label: "station",
        tone: 0
      },
      {
        emoji: "🚊",
        label: "tram",
        tone: 0
      },
      {
        emoji: "🚝",
        label: "monorail",
        tone: 0
      },
      {
        emoji: "🚞",
        label: "mountain railway",
        tone: 0
      },
      {
        emoji: "🚋",
        label: "tram car",
        tone: 0
      },
      {
        emoji: "🚌",
        label: "bus",
        tone: 0
      },
      {
        emoji: "🚍️",
        label: "oncoming bus",
        tone: 0
      },
      {
        emoji: "🚎",
        label: "trolleybus",
        tone: 0
      },
      {
        emoji: "🚐",
        label: "minibus",
        tone: 0
      },
      {
        emoji: "🚑️",
        label: "ambulance",
        tone: 0
      },
      {
        emoji: "🚒",
        label: "fire engine",
        tone: 0
      },
      {
        emoji: "🚓",
        label: "police car",
        tone: 0
      },
      {
        emoji: "🚔️",
        label: "oncoming police car",
        tone: 0
      },
      {
        emoji: "🚕",
        label: "taxi",
        tone: 0
      },
      {
        emoji: "🚖",
        label: "oncoming taxi",
        tone: 0
      },
      {
        emoji: "🚗",
        label: "automobile",
        tone: 0
      },
      {
        emoji: "🚘️",
        label: "oncoming automobile",
        tone: 0
      },
      {
        emoji: "🚙",
        label: "sport utility vehicle",
        tone: 0
      },
      {
        emoji: "🛻",
        label: "pickup truck",
        tone: 0
      },
      {
        emoji: "🚚",
        label: "delivery truck",
        tone: 0
      },
      {
        emoji: "🚛",
        label: "articulated lorry",
        tone: 0
      },
      {
        emoji: "🚜",
        label: "tractor",
        tone: 0
      },
      {
        emoji: "🏎️",
        label: "racing car",
        tone: 0
      },
      {
        emoji: "🏍️",
        label: "motorcycle",
        tone: 0
      },
      {
        emoji: "🛵",
        label: "motor scooter",
        tone: 0
      },
      {
        emoji: "🦽",
        label: "manual wheelchair",
        tone: 0
      },
      {
        emoji: "🦼",
        label: "motorized wheelchair",
        tone: 0
      },
      {
        emoji: "🛺",
        label: "auto rickshaw",
        tone: 0
      },
      {
        emoji: "🚲️",
        label: "bicycle",
        tone: 0
      },
      {
        emoji: "🛴",
        label: "kick scooter",
        tone: 0
      },
      {
        emoji: "🛹",
        label: "skateboard",
        tone: 0
      },
      {
        emoji: "🛼",
        label: "roller skate",
        tone: 0
      },
      {
        emoji: "🚏",
        label: "bus stop",
        tone: 0
      },
      {
        emoji: "🛣️",
        label: "motorway",
        tone: 0
      },
      {
        emoji: "🛤️",
        label: "railway track",
        tone: 0
      },
      {
        emoji: "🛢️",
        label: "oil drum",
        tone: 0
      },
      {
        emoji: "⛽️",
        label: "fuel pump",
        tone: 0
      },
      {
        emoji: "🚨",
        label: "police car light",
        tone: 0
      },
      {
        emoji: "🚥",
        label: "horizontal traffic light",
        tone: 0
      },
      {
        emoji: "🚦",
        label: "vertical traffic light",
        tone: 0
      },
      {
        emoji: "🛑",
        label: "stop sign",
        tone: 0
      },
      {
        emoji: "🚧",
        label: "construction",
        tone: 0
      },
      {
        emoji: "⚓️",
        label: "anchor",
        tone: 0
      },
      {
        emoji: "⛵️",
        label: "sailboat",
        tone: 0
      },
      {
        emoji: "🛶",
        label: "canoe",
        tone: 0
      },
      {
        emoji: "🚤",
        label: "speedboat",
        tone: 0
      },
      {
        emoji: "🛳️",
        label: "passenger ship",
        tone: 0
      },
      {
        emoji: "⛴️",
        label: "ferry",
        tone: 0
      },
      {
        emoji: "🛥️",
        label: "motor boat",
        tone: 0
      },
      {
        emoji: "🚢",
        label: "ship",
        tone: 0
      },
      {
        emoji: "✈️",
        label: "airplane",
        tone: 0
      },
      {
        emoji: "🛩️",
        label: "small airplane",
        tone: 0
      },
      {
        emoji: "🛫",
        label: "airplane departure",
        tone: 0
      },
      {
        emoji: "🛬",
        label: "airplane arrival",
        tone: 0
      },
      {
        emoji: "🪂",
        label: "parachute",
        tone: 0
      },
      {
        emoji: "💺",
        label: "seat",
        tone: 0
      },
      {
        emoji: "🚁",
        label: "helicopter",
        tone: 0
      },
      {
        emoji: "🚟",
        label: "suspension railway",
        tone: 0
      },
      {
        emoji: "🚠",
        label: "mountain cableway",
        tone: 0
      },
      {
        emoji: "🚡",
        label: "aerial tramway",
        tone: 0
      },
      {
        emoji: "🛰️",
        label: "satellite",
        tone: 0
      },
      {
        emoji: "🚀",
        label: "rocket",
        tone: 0
      },
      {
        emoji: "🛸",
        label: "flying saucer",
        tone: 0
      },
      {
        emoji: "🛎️",
        label: "bellhop bell",
        tone: 0
      },
      {
        emoji: "🧳",
        label: "luggage",
        tone: 0
      },
      {
        emoji: "⌛️",
        label: "hourglass done",
        tone: 0
      },
      {
        emoji: "⏳️",
        label: "hourglass not done",
        tone: 0
      },
      {
        emoji: "⌚️",
        label: "watch",
        tone: 0
      },
      {
        emoji: "⏰",
        label: "alarm clock",
        tone: 0
      },
      {
        emoji: "⏱️",
        label: "stopwatch",
        tone: 0
      },
      {
        emoji: "⏲️",
        label: "timer clock",
        tone: 0
      },
      {
        emoji: "🕰️",
        label: "mantelpiece clock",
        tone: 0
      },
      {
        emoji: "🕛️",
        label: "twelve o’clock",
        tone: 0
      },
      {
        emoji: "🕧️",
        label: "twelve-thirty",
        tone: 0
      },
      {
        emoji: "🕐️",
        label: "one o’clock",
        tone: 0
      },
      {
        emoji: "🕜️",
        label: "one-thirty",
        tone: 0
      },
      {
        emoji: "🕑️",
        label: "two o’clock",
        tone: 0
      },
      {
        emoji: "🕝️",
        label: "two-thirty",
        tone: 0
      },
      {
        emoji: "🕒️",
        label: "three o’clock",
        tone: 0
      },
      {
        emoji: "🕞️",
        label: "three-thirty",
        tone: 0
      },
      {
        emoji: "🕓️",
        label: "four o’clock",
        tone: 0
      },
      {
        emoji: "🕟️",
        label: "four-thirty",
        tone: 0
      },
      {
        emoji: "🕔️",
        label: "five o’clock",
        tone: 0
      },
      {
        emoji: "🕠️",
        label: "five-thirty",
        tone: 0
      },
      {
        emoji: "🕕️",
        label: "six o’clock",
        tone: 0
      },
      {
        emoji: "🕡️",
        label: "six-thirty",
        tone: 0
      },
      {
        emoji: "🕖️",
        label: "seven o’clock",
        tone: 0
      },
      {
        emoji: "🕢️",
        label: "seven-thirty",
        tone: 0
      },
      {
        emoji: "🕗️",
        label: "eight o’clock",
        tone: 0
      },
      {
        emoji: "🕣️",
        label: "eight-thirty",
        tone: 0
      },
      {
        emoji: "🕘️",
        label: "nine o’clock",
        tone: 0
      },
      {
        emoji: "🕤️",
        label: "nine-thirty",
        tone: 0
      },
      {
        emoji: "🕙️",
        label: "ten o’clock",
        tone: 0
      },
      {
        emoji: "🕥️",
        label: "ten-thirty",
        tone: 0
      },
      {
        emoji: "🕚️",
        label: "eleven o’clock",
        tone: 0
      },
      {
        emoji: "🕦️",
        label: "eleven-thirty",
        tone: 0
      },
      {
        emoji: "🌑",
        label: "new moon",
        tone: 0
      },
      {
        emoji: "🌒",
        label: "waxing crescent moon",
        tone: 0
      },
      {
        emoji: "🌓",
        label: "first quarter moon",
        tone: 0
      },
      {
        emoji: "🌔",
        label: "waxing gibbous moon",
        tone: 0
      },
      {
        emoji: "🌕️",
        label: "full moon",
        tone: 0
      },
      {
        emoji: "🌖",
        label: "waning gibbous moon",
        tone: 0
      },
      {
        emoji: "🌗",
        label: "last quarter moon",
        tone: 0
      },
      {
        emoji: "🌘",
        label: "waning crescent moon",
        tone: 0
      },
      {
        emoji: "🌙",
        label: "crescent moon",
        tone: 0
      },
      {
        emoji: "🌚",
        label: "new moon face",
        tone: 0
      },
      {
        emoji: "🌛",
        label: "first quarter moon face",
        tone: 0
      },
      {
        emoji: "🌜️",
        label: "last quarter moon face",
        tone: 0
      },
      {
        emoji: "🌡️",
        label: "thermometer",
        tone: 0
      },
      {
        emoji: "☀️",
        label: "sun",
        tone: 0
      },
      {
        emoji: "🌝",
        label: "full moon face",
        tone: 0
      },
      {
        emoji: "🌞",
        label: "sun with face",
        tone: 0
      },
      {
        emoji: "🪐",
        label: "ringed planet",
        tone: 0
      },
      {
        emoji: "⭐️",
        label: "star",
        tone: 0
      },
      {
        emoji: "🌟",
        label: "glowing star",
        tone: 0
      },
      {
        emoji: "🌠",
        label: "shooting star",
        tone: 0
      },
      {
        emoji: "🌌",
        label: "milky way",
        tone: 0
      },
      {
        emoji: "☁️",
        label: "cloud",
        tone: 0
      },
      {
        emoji: "⛅️",
        label: "sun behind cloud",
        tone: 0
      },
      {
        emoji: "⛈️",
        label: "cloud with lightning and rain",
        tone: 0
      },
      {
        emoji: "🌤️",
        label: "sun behind small cloud",
        tone: 0
      },
      {
        emoji: "🌥️",
        label: "sun behind large cloud",
        tone: 0
      },
      {
        emoji: "🌦️",
        label: "sun behind rain cloud",
        tone: 0
      },
      {
        emoji: "🌧️",
        label: "cloud with rain",
        tone: 0
      },
      {
        emoji: "🌨️",
        label: "cloud with snow",
        tone: 0
      },
      {
        emoji: "🌩️",
        label: "cloud with lightning",
        tone: 0
      },
      {
        emoji: "🌪️",
        label: "tornado",
        tone: 0
      },
      {
        emoji: "🌫️",
        label: "fog",
        tone: 0
      },
      {
        emoji: "🌬️",
        label: "wind face",
        tone: 0
      },
      {
        emoji: "🌀",
        label: "cyclone",
        tone: 0
      },
      {
        emoji: "🌈",
        label: "rainbow",
        tone: 0
      },
      {
        emoji: "🌂",
        label: "closed umbrella",
        tone: 0
      },
      {
        emoji: "☂️",
        label: "umbrella",
        tone: 0
      },
      {
        emoji: "☔️",
        label: "umbrella with rain drops",
        tone: 0
      },
      {
        emoji: "⛱️",
        label: "umbrella on ground",
        tone: 0
      },
      {
        emoji: "⚡️",
        label: "high voltage",
        tone: 0
      },
      {
        emoji: "❄️",
        label: "snowflake",
        tone: 0
      },
      {
        emoji: "☃️",
        label: "snowman",
        tone: 0
      },
      {
        emoji: "⛄️",
        label: "snowman without snow",
        tone: 0
      },
      {
        emoji: "☄️",
        label: "comet",
        tone: 0
      },
      {
        emoji: "🔥",
        label: "fire",
        tone: 0
      },
      {
        emoji: "💧",
        label: "droplet",
        tone: 0
      },
      {
        emoji: "🌊",
        label: "water wave",
        tone: 0
      }
    ]
  },
  {
    name: "activities",
    emojis: [
      {
        emoji: "🎃",
        label: "jack-o-lantern",
        tone: 0
      },
      {
        emoji: "🎄",
        label: "Christmas tree",
        tone: 0
      },
      {
        emoji: "🎆",
        label: "fireworks",
        tone: 0
      },
      {
        emoji: "🎇",
        label: "sparkler",
        tone: 0
      },
      {
        emoji: "🧨",
        label: "firecracker",
        tone: 0
      },
      {
        emoji: "✨",
        label: "sparkles",
        tone: 0
      },
      {
        emoji: "🎈",
        label: "balloon",
        tone: 0
      },
      {
        emoji: "🎉",
        label: "party popper",
        tone: 0
      },
      {
        emoji: "🎊",
        label: "confetti ball",
        tone: 0
      },
      {
        emoji: "🎋",
        label: "tanabata tree",
        tone: 0
      },
      {
        emoji: "🎍",
        label: "pine decoration",
        tone: 0
      },
      {
        emoji: "🎎",
        label: "Japanese dolls",
        tone: 0
      },
      {
        emoji: "🎏",
        label: "carp streamer",
        tone: 0
      },
      {
        emoji: "🎐",
        label: "wind chime",
        tone: 0
      },
      {
        emoji: "🎑",
        label: "moon viewing ceremony",
        tone: 0
      },
      {
        emoji: "🧧",
        label: "red envelope",
        tone: 0
      },
      {
        emoji: "🎀",
        label: "ribbon",
        tone: 0
      },
      {
        emoji: "🎁",
        label: "wrapped gift",
        tone: 0
      },
      {
        emoji: "🎗️",
        label: "reminder ribbon",
        tone: 0
      },
      {
        emoji: "🎟️",
        label: "admission tickets",
        tone: 0
      },
      {
        emoji: "🎫",
        label: "ticket",
        tone: 0
      },
      {
        emoji: "🎖️",
        label: "military medal",
        tone: 0
      },
      {
        emoji: "🏆️",
        label: "trophy",
        tone: 0
      },
      {
        emoji: "🏅",
        label: "sports medal",
        tone: 0
      },
      {
        emoji: "🥇",
        label: "1st place medal",
        tone: 0
      },
      {
        emoji: "🥈",
        label: "2nd place medal",
        tone: 0
      },
      {
        emoji: "🥉",
        label: "3rd place medal",
        tone: 0
      },
      {
        emoji: "⚽️",
        label: "soccer ball",
        tone: 0
      },
      {
        emoji: "⚾️",
        label: "baseball",
        tone: 0
      },
      {
        emoji: "🥎",
        label: "softball",
        tone: 0
      },
      {
        emoji: "🏀",
        label: "basketball",
        tone: 0
      },
      {
        emoji: "🏐",
        label: "volleyball",
        tone: 0
      },
      {
        emoji: "🏈",
        label: "american football",
        tone: 0
      },
      {
        emoji: "🏉",
        label: "rugby football",
        tone: 0
      },
      {
        emoji: "🎾",
        label: "tennis",
        tone: 0
      },
      {
        emoji: "🥏",
        label: "flying disc",
        tone: 0
      },
      {
        emoji: "🎳",
        label: "bowling",
        tone: 0
      },
      {
        emoji: "🏏",
        label: "cricket game",
        tone: 0
      },
      {
        emoji: "🏑",
        label: "field hockey",
        tone: 0
      },
      {
        emoji: "🏒",
        label: "ice hockey",
        tone: 0
      },
      {
        emoji: "🥍",
        label: "lacrosse",
        tone: 0
      },
      {
        emoji: "🏓",
        label: "ping pong",
        tone: 0
      },
      {
        emoji: "🏸",
        label: "badminton",
        tone: 0
      },
      {
        emoji: "🥊",
        label: "boxing glove",
        tone: 0
      },
      {
        emoji: "🥋",
        label: "martial arts uniform",
        tone: 0
      },
      {
        emoji: "🥅",
        label: "goal net",
        tone: 0
      },
      {
        emoji: "⛳️",
        label: "flag in hole",
        tone: 0
      },
      {
        emoji: "⛸️",
        label: "ice skate",
        tone: 0
      },
      {
        emoji: "🎣",
        label: "fishing pole",
        tone: 0
      },
      {
        emoji: "🤿",
        label: "diving mask",
        tone: 0
      },
      {
        emoji: "🎽",
        label: "running shirt",
        tone: 0
      },
      {
        emoji: "🎿",
        label: "skis",
        tone: 0
      },
      {
        emoji: "🛷",
        label: "sled",
        tone: 0
      },
      {
        emoji: "🥌",
        label: "curling stone",
        tone: 0
      },
      {
        emoji: "🎯",
        label: "bullseye",
        tone: 0
      },
      {
        emoji: "🪀",
        label: "yo-yo",
        tone: 0
      },
      {
        emoji: "🪁",
        label: "kite",
        tone: 0
      },
      {
        emoji: "🎱",
        label: "pool 8 ball",
        tone: 0
      },
      {
        emoji: "🔮",
        label: "crystal ball",
        tone: 0
      },
      {
        emoji: "🪄",
        label: "magic wand",
        tone: 0
      },
      {
        emoji: "🧿",
        label: "nazar amulet",
        tone: 0
      },
      {
        emoji: "🎮️",
        label: "video game",
        tone: 0
      },
      {
        emoji: "🕹️",
        label: "joystick",
        tone: 0
      },
      {
        emoji: "🎰",
        label: "slot machine",
        tone: 0
      },
      {
        emoji: "🎲",
        label: "game die",
        tone: 0
      },
      {
        emoji: "🧩",
        label: "puzzle piece",
        tone: 0
      },
      {
        emoji: "🧸",
        label: "teddy bear",
        tone: 0
      },
      {
        emoji: "🪅",
        label: "piñata",
        tone: 0
      },
      {
        emoji: "🪆",
        label: "nesting dolls",
        tone: 0
      },
      {
        emoji: "♠️",
        label: "spade suit",
        tone: 0
      },
      {
        emoji: "♥️",
        label: "heart suit",
        tone: 0
      },
      {
        emoji: "♦️",
        label: "diamond suit",
        tone: 0
      },
      {
        emoji: "♣️",
        label: "club suit",
        tone: 0
      },
      {
        emoji: "♟️",
        label: "chess pawn",
        tone: 0
      },
      {
        emoji: "🃏",
        label: "joker",
        tone: 0
      },
      {
        emoji: "🀄️",
        label: "mahjong red dragon",
        tone: 0
      },
      {
        emoji: "🎴",
        label: "flower playing cards",
        tone: 0
      },
      {
        emoji: "🎭️",
        label: "performing arts",
        tone: 0
      },
      {
        emoji: "🖼️",
        label: "framed picture",
        tone: 0
      },
      {
        emoji: "🎨",
        label: "artist palette",
        tone: 0
      },
      {
        emoji: "🧵",
        label: "thread",
        tone: 0
      },
      {
        emoji: "🪡",
        label: "sewing needle",
        tone: 0
      },
      {
        emoji: "🧶",
        label: "yarn",
        tone: 0
      },
      {
        emoji: "🪢",
        label: "knot",
        tone: 0
      }
    ]
  },
  {
    name: "objects",
    emojis: [
      {
        emoji: "👓️",
        label: "glasses",
        tone: 0
      },
      {
        emoji: "🕶️",
        label: "sunglasses",
        tone: 0
      },
      {
        emoji: "🥽",
        label: "goggles",
        tone: 0
      },
      {
        emoji: "🥼",
        label: "lab coat",
        tone: 0
      },
      {
        emoji: "🦺",
        label: "safety vest",
        tone: 0
      },
      {
        emoji: "👔",
        label: "necktie",
        tone: 0
      },
      {
        emoji: "👕",
        label: "t-shirt",
        tone: 0
      },
      {
        emoji: "👖",
        label: "jeans",
        tone: 0
      },
      {
        emoji: "🧣",
        label: "scarf",
        tone: 0
      },
      {
        emoji: "🧤",
        label: "gloves",
        tone: 0
      },
      {
        emoji: "🧥",
        label: "coat",
        tone: 0
      },
      {
        emoji: "🧦",
        label: "socks",
        tone: 0
      },
      {
        emoji: "👗",
        label: "dress",
        tone: 0
      },
      {
        emoji: "👘",
        label: "kimono",
        tone: 0
      },
      {
        emoji: "🥻",
        label: "sari",
        tone: 0
      },
      {
        emoji: "🩱",
        label: "one-piece swimsuit",
        tone: 0
      },
      {
        emoji: "🩲",
        label: "briefs",
        tone: 0
      },
      {
        emoji: "🩳",
        label: "shorts",
        tone: 0
      },
      {
        emoji: "👙",
        label: "bikini",
        tone: 0
      },
      {
        emoji: "👚",
        label: "woman’s clothes",
        tone: 0
      },
      {
        emoji: "👛",
        label: "purse",
        tone: 0
      },
      {
        emoji: "👜",
        label: "handbag",
        tone: 0
      },
      {
        emoji: "👝",
        label: "clutch bag",
        tone: 0
      },
      {
        emoji: "🛍️",
        label: "shopping bags",
        tone: 0
      },
      {
        emoji: "🎒",
        label: "backpack",
        tone: 0
      },
      {
        emoji: "🩴",
        label: "thong sandal",
        tone: 0
      },
      {
        emoji: "👞",
        label: "man’s shoe",
        tone: 0
      },
      {
        emoji: "👟",
        label: "running shoe",
        tone: 0
      },
      {
        emoji: "🥾",
        label: "hiking boot",
        tone: 0
      },
      {
        emoji: "🥿",
        label: "flat shoe",
        tone: 0
      },
      {
        emoji: "👠",
        label: "high-heeled shoe",
        tone: 0
      },
      {
        emoji: "👡",
        label: "woman’s sandal",
        tone: 0
      },
      {
        emoji: "🩰",
        label: "ballet shoes",
        tone: 0
      },
      {
        emoji: "👢",
        label: "woman’s boot",
        tone: 0
      },
      {
        emoji: "👑",
        label: "crown",
        tone: 0
      },
      {
        emoji: "👒",
        label: "woman’s hat",
        tone: 0
      },
      {
        emoji: "🎩",
        label: "top hat",
        tone: 0
      },
      {
        emoji: "🎓️",
        label: "graduation cap",
        tone: 0
      },
      {
        emoji: "🧢",
        label: "billed cap",
        tone: 0
      },
      {
        emoji: "🪖",
        label: "military helmet",
        tone: 0
      },
      {
        emoji: "⛑️",
        label: "rescue worker’s helmet",
        tone: 0
      },
      {
        emoji: "📿",
        label: "prayer beads",
        tone: 0
      },
      {
        emoji: "💄",
        label: "lipstick",
        tone: 0
      },
      {
        emoji: "💍",
        label: "ring",
        tone: 0
      },
      {
        emoji: "💎",
        label: "gem stone",
        tone: 0
      },
      {
        emoji: "🔇",
        label: "muted speaker",
        tone: 0
      },
      {
        emoji: "🔈️",
        label: "speaker low volume",
        tone: 0
      },
      {
        emoji: "🔉",
        label: "speaker medium volume",
        tone: 0
      },
      {
        emoji: "🔊",
        label: "speaker high volume",
        tone: 0
      },
      {
        emoji: "📢",
        label: "loudspeaker",
        tone: 0
      },
      {
        emoji: "📣",
        label: "megaphone",
        tone: 0
      },
      {
        emoji: "📯",
        label: "postal horn",
        tone: 0
      },
      {
        emoji: "🔔",
        label: "bell",
        tone: 0
      },
      {
        emoji: "🔕",
        label: "bell with slash",
        tone: 0
      },
      {
        emoji: "🎼",
        label: "musical score",
        tone: 0
      },
      {
        emoji: "🎵",
        label: "musical note",
        tone: 0
      },
      {
        emoji: "🎶",
        label: "musical notes",
        tone: 0
      },
      {
        emoji: "🎙️",
        label: "studio microphone",
        tone: 0
      },
      {
        emoji: "🎚️",
        label: "level slider",
        tone: 0
      },
      {
        emoji: "🎛️",
        label: "control knobs",
        tone: 0
      },
      {
        emoji: "🎤",
        label: "microphone",
        tone: 0
      },
      {
        emoji: "🎧️",
        label: "headphone",
        tone: 0
      },
      {
        emoji: "📻️",
        label: "radio",
        tone: 0
      },
      {
        emoji: "🎷",
        label: "saxophone",
        tone: 0
      },
      {
        emoji: "🪗",
        label: "accordion",
        tone: 0
      },
      {
        emoji: "🎸",
        label: "guitar",
        tone: 0
      },
      {
        emoji: "🎹",
        label: "musical keyboard",
        tone: 0
      },
      {
        emoji: "🎺",
        label: "trumpet",
        tone: 0
      },
      {
        emoji: "🎻",
        label: "violin",
        tone: 0
      },
      {
        emoji: "🪕",
        label: "banjo",
        tone: 0
      },
      {
        emoji: "🥁",
        label: "drum",
        tone: 0
      },
      {
        emoji: "🪘",
        label: "long drum",
        tone: 0
      },
      {
        emoji: "📱",
        label: "mobile phone",
        tone: 0
      },
      {
        emoji: "📲",
        label: "mobile phone with arrow",
        tone: 0
      },
      {
        emoji: "☎️",
        label: "telephone",
        tone: 0
      },
      {
        emoji: "📞",
        label: "telephone receiver",
        tone: 0
      },
      {
        emoji: "📟️",
        label: "pager",
        tone: 0
      },
      {
        emoji: "📠",
        label: "fax machine",
        tone: 0
      },
      {
        emoji: "🔋",
        label: "battery",
        tone: 0
      },
      {
        emoji: "🔌",
        label: "electric plug",
        tone: 0
      },
      {
        emoji: "💻️",
        label: "laptop",
        tone: 0
      },
      {
        emoji: "🖥️",
        label: "desktop computer",
        tone: 0
      },
      {
        emoji: "🖨️",
        label: "printer",
        tone: 0
      },
      {
        emoji: "⌨️",
        label: "keyboard",
        tone: 0
      },
      {
        emoji: "🖱️",
        label: "computer mouse",
        tone: 0
      },
      {
        emoji: "🖲️",
        label: "trackball",
        tone: 0
      },
      {
        emoji: "💽",
        label: "computer disk",
        tone: 0
      },
      {
        emoji: "💾",
        label: "floppy disk",
        tone: 0
      },
      {
        emoji: "💿️",
        label: "optical disk",
        tone: 0
      },
      {
        emoji: "📀",
        label: "dvd",
        tone: 0
      },
      {
        emoji: "🧮",
        label: "abacus",
        tone: 0
      },
      {
        emoji: "🎥",
        label: "movie camera",
        tone: 0
      },
      {
        emoji: "🎞️",
        label: "film frames",
        tone: 0
      },
      {
        emoji: "📽️",
        label: "film projector",
        tone: 0
      },
      {
        emoji: "🎬️",
        label: "clapper board",
        tone: 0
      },
      {
        emoji: "📺️",
        label: "television",
        tone: 0
      },
      {
        emoji: "📷️",
        label: "camera",
        tone: 0
      },
      {
        emoji: "📸",
        label: "camera with flash",
        tone: 0
      },
      {
        emoji: "📹️",
        label: "video camera",
        tone: 0
      },
      {
        emoji: "📼",
        label: "videocassette",
        tone: 0
      },
      {
        emoji: "🔍️",
        label: "magnifying glass tilted left",
        tone: 0
      },
      {
        emoji: "🔎",
        label: "magnifying glass tilted right",
        tone: 0
      },
      {
        emoji: "🕯️",
        label: "candle",
        tone: 0
      },
      {
        emoji: "💡",
        label: "light bulb",
        tone: 0
      },
      {
        emoji: "🔦",
        label: "flashlight",
        tone: 0
      },
      {
        emoji: "🏮",
        label: "red paper lantern",
        tone: 0
      },
      {
        emoji: "🪔",
        label: "diya lamp",
        tone: 0
      },
      {
        emoji: "📔",
        label: "notebook with decorative cover",
        tone: 0
      },
      {
        emoji: "📕",
        label: "closed book",
        tone: 0
      },
      {
        emoji: "📖",
        label: "open book",
        tone: 0
      },
      {
        emoji: "📗",
        label: "green book",
        tone: 0
      },
      {
        emoji: "📘",
        label: "blue book",
        tone: 0
      },
      {
        emoji: "📙",
        label: "orange book",
        tone: 0
      },
      {
        emoji: "📚️",
        label: "books",
        tone: 0
      },
      {
        emoji: "📓",
        label: "notebook",
        tone: 0
      },
      {
        emoji: "📒",
        label: "ledger",
        tone: 0
      },
      {
        emoji: "📃",
        label: "page with curl",
        tone: 0
      },
      {
        emoji: "📜",
        label: "scroll",
        tone: 0
      },
      {
        emoji: "📄",
        label: "page facing up",
        tone: 0
      },
      {
        emoji: "📰",
        label: "newspaper",
        tone: 0
      },
      {
        emoji: "🗞️",
        label: "rolled-up newspaper",
        tone: 0
      },
      {
        emoji: "📑",
        label: "bookmark tabs",
        tone: 0
      },
      {
        emoji: "🔖",
        label: "bookmark",
        tone: 0
      },
      {
        emoji: "🏷️",
        label: "label",
        tone: 0
      },
      {
        emoji: "💰️",
        label: "money bag",
        tone: 0
      },
      {
        emoji: "🪙",
        label: "coin",
        tone: 0
      },
      {
        emoji: "💴",
        label: "yen banknote",
        tone: 0
      },
      {
        emoji: "💵",
        label: "dollar banknote",
        tone: 0
      },
      {
        emoji: "💶",
        label: "euro banknote",
        tone: 0
      },
      {
        emoji: "💷",
        label: "pound banknote",
        tone: 0
      },
      {
        emoji: "💸",
        label: "money with wings",
        tone: 0
      },
      {
        emoji: "💳️",
        label: "credit card",
        tone: 0
      },
      {
        emoji: "🧾",
        label: "receipt",
        tone: 0
      },
      {
        emoji: "💹",
        label: "chart increasing with yen",
        tone: 0
      },
      {
        emoji: "✉️",
        label: "envelope",
        tone: 0
      },
      {
        emoji: "📧",
        label: "e-mail",
        tone: 0
      },
      {
        emoji: "📨",
        label: "incoming envelope",
        tone: 0
      },
      {
        emoji: "📩",
        label: "envelope with arrow",
        tone: 0
      },
      {
        emoji: "📤️",
        label: "outbox tray",
        tone: 0
      },
      {
        emoji: "📥️",
        label: "inbox tray",
        tone: 0
      },
      {
        emoji: "📦️",
        label: "package",
        tone: 0
      },
      {
        emoji: "📫️",
        label: "closed mailbox with raised flag",
        tone: 0
      },
      {
        emoji: "📪️",
        label: "closed mailbox with lowered flag",
        tone: 0
      },
      {
        emoji: "📬️",
        label: "open mailbox with raised flag",
        tone: 0
      },
      {
        emoji: "📭️",
        label: "open mailbox with lowered flag",
        tone: 0
      },
      {
        emoji: "📮",
        label: "postbox",
        tone: 0
      },
      {
        emoji: "🗳️",
        label: "ballot box with ballot",
        tone: 0
      },
      {
        emoji: "✏️",
        label: "pencil",
        tone: 0
      },
      {
        emoji: "✒️",
        label: "black nib",
        tone: 0
      },
      {
        emoji: "🖋️",
        label: "fountain pen",
        tone: 0
      },
      {
        emoji: "🖊️",
        label: "pen",
        tone: 0
      },
      {
        emoji: "🖌️",
        label: "paintbrush",
        tone: 0
      },
      {
        emoji: "🖍️",
        label: "crayon",
        tone: 0
      },
      {
        emoji: "📝",
        label: "memo",
        tone: 0
      },
      {
        emoji: "💼",
        label: "briefcase",
        tone: 0
      },
      {
        emoji: "📁",
        label: "file folder",
        tone: 0
      },
      {
        emoji: "📂",
        label: "open file folder",
        tone: 0
      },
      {
        emoji: "🗂️",
        label: "card index dividers",
        tone: 0
      },
      {
        emoji: "📅",
        label: "calendar",
        tone: 0
      },
      {
        emoji: "📆",
        label: "tear-off calendar",
        tone: 0
      },
      {
        emoji: "🗒️",
        label: "spiral notepad",
        tone: 0
      },
      {
        emoji: "🗓️",
        label: "spiral calendar",
        tone: 0
      },
      {
        emoji: "📇",
        label: "card index",
        tone: 0
      },
      {
        emoji: "📈",
        label: "chart increasing",
        tone: 0
      },
      {
        emoji: "📉",
        label: "chart decreasing",
        tone: 0
      },
      {
        emoji: "📊",
        label: "bar chart",
        tone: 0
      },
      {
        emoji: "📋️",
        label: "clipboard",
        tone: 0
      },
      {
        emoji: "📌",
        label: "pushpin",
        tone: 0
      },
      {
        emoji: "📍",
        label: "round pushpin",
        tone: 0
      },
      {
        emoji: "📎",
        label: "paperclip",
        tone: 0
      },
      {
        emoji: "🖇️",
        label: "linked paperclips",
        tone: 0
      },
      {
        emoji: "📏",
        label: "straight ruler",
        tone: 0
      },
      {
        emoji: "📐",
        label: "triangular ruler",
        tone: 0
      },
      {
        emoji: "✂️",
        label: "scissors",
        tone: 0
      },
      {
        emoji: "🗃️",
        label: "card file box",
        tone: 0
      },
      {
        emoji: "🗄️",
        label: "file cabinet",
        tone: 0
      },
      {
        emoji: "🗑️",
        label: "wastebasket",
        tone: 0
      },
      {
        emoji: "🔒️",
        label: "locked",
        tone: 0
      },
      {
        emoji: "🔓️",
        label: "unlocked",
        tone: 0
      },
      {
        emoji: "🔏",
        label: "locked with pen",
        tone: 0
      },
      {
        emoji: "🔐",
        label: "locked with key",
        tone: 0
      },
      {
        emoji: "🔑",
        label: "key",
        tone: 0
      },
      {
        emoji: "🗝️",
        label: "old key",
        tone: 0
      },
      {
        emoji: "🔨",
        label: "hammer",
        tone: 0
      },
      {
        emoji: "🪓",
        label: "axe",
        tone: 0
      },
      {
        emoji: "⛏️",
        label: "pick",
        tone: 0
      },
      {
        emoji: "⚒️",
        label: "hammer and pick",
        tone: 0
      },
      {
        emoji: "🛠️",
        label: "hammer and wrench",
        tone: 0
      },
      {
        emoji: "🗡️",
        label: "dagger",
        tone: 0
      },
      {
        emoji: "⚔️",
        label: "crossed swords",
        tone: 0
      },
      {
        emoji: "🔫",
        label: "water pistol",
        tone: 0
      },
      {
        emoji: "🪃",
        label: "boomerang",
        tone: 0
      },
      {
        emoji: "🏹",
        label: "bow and arrow",
        tone: 0
      },
      {
        emoji: "🛡️",
        label: "shield",
        tone: 0
      },
      {
        emoji: "🪚",
        label: "carpentry saw",
        tone: 0
      },
      {
        emoji: "🔧",
        label: "wrench",
        tone: 0
      },
      {
        emoji: "🪛",
        label: "screwdriver",
        tone: 0
      },
      {
        emoji: "🔩",
        label: "nut and bolt",
        tone: 0
      },
      {
        emoji: "⚙️",
        label: "gear",
        tone: 0
      },
      {
        emoji: "🗜️",
        label: "clamp",
        tone: 0
      },
      {
        emoji: "⚖️",
        label: "balance scale",
        tone: 0
      },
      {
        emoji: "🦯",
        label: "white cane",
        tone: 0
      },
      {
        emoji: "🔗",
        label: "link",
        tone: 0
      },
      {
        emoji: "⛓️",
        label: "chains",
        tone: 0
      },
      {
        emoji: "🪝",
        label: "hook",
        tone: 0
      },
      {
        emoji: "🧰",
        label: "toolbox",
        tone: 0
      },
      {
        emoji: "🧲",
        label: "magnet",
        tone: 0
      },
      {
        emoji: "🪜",
        label: "ladder",
        tone: 0
      },
      {
        emoji: "⚗️",
        label: "alembic",
        tone: 0
      },
      {
        emoji: "🧪",
        label: "test tube",
        tone: 0
      },
      {
        emoji: "🧫",
        label: "petri dish",
        tone: 0
      },
      {
        emoji: "🧬",
        label: "dna",
        tone: 0
      },
      {
        emoji: "🔬",
        label: "microscope",
        tone: 0
      },
      {
        emoji: "🔭",
        label: "telescope",
        tone: 0
      },
      {
        emoji: "📡",
        label: "satellite antenna",
        tone: 0
      },
      {
        emoji: "💉",
        label: "syringe",
        tone: 0
      },
      {
        emoji: "🩸",
        label: "drop of blood",
        tone: 0
      },
      {
        emoji: "💊",
        label: "pill",
        tone: 0
      },
      {
        emoji: "🩹",
        label: "adhesive bandage",
        tone: 0
      },
      {
        emoji: "🩺",
        label: "stethoscope",
        tone: 0
      },
      {
        emoji: "🚪",
        label: "door",
        tone: 0
      },
      {
        emoji: "🛗",
        label: "elevator",
        tone: 0
      },
      {
        emoji: "🪞",
        label: "mirror",
        tone: 0
      },
      {
        emoji: "🪟",
        label: "window",
        tone: 0
      },
      {
        emoji: "🛏️",
        label: "bed",
        tone: 0
      },
      {
        emoji: "🛋️",
        label: "couch and lamp",
        tone: 0
      },
      {
        emoji: "🪑",
        label: "chair",
        tone: 0
      },
      {
        emoji: "🚽",
        label: "toilet",
        tone: 0
      },
      {
        emoji: "🪠",
        label: "plunger",
        tone: 0
      },
      {
        emoji: "🚿",
        label: "shower",
        tone: 0
      },
      {
        emoji: "🛁",
        label: "bathtub",
        tone: 0
      },
      {
        emoji: "🪤",
        label: "mouse trap",
        tone: 0
      },
      {
        emoji: "🪒",
        label: "razor",
        tone: 0
      },
      {
        emoji: "🧴",
        label: "lotion bottle",
        tone: 0
      },
      {
        emoji: "🧷",
        label: "safety pin",
        tone: 0
      },
      {
        emoji: "🧹",
        label: "broom",
        tone: 0
      },
      {
        emoji: "🧺",
        label: "basket",
        tone: 0
      },
      {
        emoji: "🧻",
        label: "roll of paper",
        tone: 0
      },
      {
        emoji: "🪣",
        label: "bucket",
        tone: 0
      },
      {
        emoji: "🧼",
        label: "soap",
        tone: 0
      },
      {
        emoji: "🪥",
        label: "toothbrush",
        tone: 0
      },
      {
        emoji: "🧽",
        label: "sponge",
        tone: 0
      },
      {
        emoji: "🧯",
        label: "fire extinguisher",
        tone: 0
      },
      {
        emoji: "🛒",
        label: "shopping cart",
        tone: 0
      },
      {
        emoji: "🚬",
        label: "cigarette",
        tone: 0
      },
      {
        emoji: "⚰️",
        label: "coffin",
        tone: 0
      },
      {
        emoji: "🪦",
        label: "headstone",
        tone: 0
      },
      {
        emoji: "⚱️",
        label: "funeral urn",
        tone: 0
      },
      {
        emoji: "🗿",
        label: "moai",
        tone: 0
      },
      {
        emoji: "🪧",
        label: "placard",
        tone: 0
      }
    ]
  },
  {
    name: "symbols",
    emojis: [
      {
        emoji: "🏧",
        label: "ATM sign",
        tone: 0
      },
      {
        emoji: "🚮",
        label: "litter in bin sign",
        tone: 0
      },
      {
        emoji: "🚰",
        label: "potable water",
        tone: 0
      },
      {
        emoji: "♿️",
        label: "wheelchair symbol",
        tone: 0
      },
      {
        emoji: "🚹️",
        label: "men’s room",
        tone: 0
      },
      {
        emoji: "🚺️",
        label: "women’s room",
        tone: 0
      },
      {
        emoji: "🚻",
        label: "restroom",
        tone: 0
      },
      {
        emoji: "🚼️",
        label: "baby symbol",
        tone: 0
      },
      {
        emoji: "🚾",
        label: "water closet",
        tone: 0
      },
      {
        emoji: "🛂",
        label: "passport control",
        tone: 0
      },
      {
        emoji: "🛃",
        label: "customs",
        tone: 0
      },
      {
        emoji: "🛄",
        label: "baggage claim",
        tone: 0
      },
      {
        emoji: "🛅",
        label: "left luggage",
        tone: 0
      },
      {
        emoji: "⚠️",
        label: "warning",
        tone: 0
      },
      {
        emoji: "🚸",
        label: "children crossing",
        tone: 0
      },
      {
        emoji: "⛔️",
        label: "no entry",
        tone: 0
      },
      {
        emoji: "🚫",
        label: "prohibited",
        tone: 0
      },
      {
        emoji: "🚳",
        label: "no bicycles",
        tone: 0
      },
      {
        emoji: "🚭️",
        label: "no smoking",
        tone: 0
      },
      {
        emoji: "🚯",
        label: "no littering",
        tone: 0
      },
      {
        emoji: "🚱",
        label: "non-potable water",
        tone: 0
      },
      {
        emoji: "🚷",
        label: "no pedestrians",
        tone: 0
      },
      {
        emoji: "📵",
        label: "no mobile phones",
        tone: 0
      },
      {
        emoji: "🔞",
        label: "no one under eighteen",
        tone: 0
      },
      {
        emoji: "☢️",
        label: "radioactive",
        tone: 0
      },
      {
        emoji: "☣️",
        label: "biohazard",
        tone: 0
      },
      {
        emoji: "⬆️",
        label: "up arrow",
        tone: 0
      },
      {
        emoji: "↗️",
        label: "up-right arrow",
        tone: 0
      },
      {
        emoji: "➡️",
        label: "right arrow",
        tone: 0
      },
      {
        emoji: "↘️",
        label: "down-right arrow",
        tone: 0
      },
      {
        emoji: "⬇️",
        label: "down arrow",
        tone: 0
      },
      {
        emoji: "↙️",
        label: "down-left arrow",
        tone: 0
      },
      {
        emoji: "⬅️",
        label: "left arrow",
        tone: 0
      },
      {
        emoji: "↖️",
        label: "up-left arrow",
        tone: 0
      },
      {
        emoji: "↕️",
        label: "up-down arrow",
        tone: 0
      },
      {
        emoji: "↔️",
        label: "left-right arrow",
        tone: 0
      },
      {
        emoji: "↩️",
        label: "right arrow curving left",
        tone: 0
      },
      {
        emoji: "↪️",
        label: "left arrow curving right",
        tone: 0
      },
      {
        emoji: "⤴️",
        label: "right arrow curving up",
        tone: 0
      },
      {
        emoji: "⤵️",
        label: "right arrow curving down",
        tone: 0
      },
      {
        emoji: "🔃",
        label: "clockwise vertical arrows",
        tone: 0
      },
      {
        emoji: "🔄",
        label: "counterclockwise arrows button",
        tone: 0
      },
      {
        emoji: "🔙",
        label: "BACK arrow",
        tone: 0
      },
      {
        emoji: "🔚",
        label: "END arrow",
        tone: 0
      },
      {
        emoji: "🔛",
        label: "ON! arrow",
        tone: 0
      },
      {
        emoji: "🔜",
        label: "SOON arrow",
        tone: 0
      },
      {
        emoji: "🔝",
        label: "TOP arrow",
        tone: 0
      },
      {
        emoji: "🛐",
        label: "place of worship",
        tone: 0
      },
      {
        emoji: "⚛️",
        label: "atom symbol",
        tone: 0
      },
      {
        emoji: "🕉️",
        label: "om",
        tone: 0
      },
      {
        emoji: "✡️",
        label: "star of David",
        tone: 0
      },
      {
        emoji: "☸️",
        label: "wheel of dharma",
        tone: 0
      },
      {
        emoji: "☯️",
        label: "yin yang",
        tone: 0
      },
      {
        emoji: "✝️",
        label: "latin cross",
        tone: 0
      },
      {
        emoji: "☦️",
        label: "orthodox cross",
        tone: 0
      },
      {
        emoji: "☪️",
        label: "star and crescent",
        tone: 0
      },
      {
        emoji: "☮️",
        label: "peace symbol",
        tone: 0
      },
      {
        emoji: "🕎",
        label: "menorah",
        tone: 0
      },
      {
        emoji: "🔯",
        label: "dotted six-pointed star",
        tone: 0
      },
      {
        emoji: "♈️",
        label: "Aries",
        tone: 0
      },
      {
        emoji: "♉️",
        label: "Taurus",
        tone: 0
      },
      {
        emoji: "♊️",
        label: "Gemini",
        tone: 0
      },
      {
        emoji: "♋️",
        label: "Cancer",
        tone: 0
      },
      {
        emoji: "♌️",
        label: "Leo",
        tone: 0
      },
      {
        emoji: "♍️",
        label: "Virgo",
        tone: 0
      },
      {
        emoji: "♎️",
        label: "Libra",
        tone: 0
      },
      {
        emoji: "♏️",
        label: "Scorpio",
        tone: 0
      },
      {
        emoji: "♐️",
        label: "Sagittarius",
        tone: 0
      },
      {
        emoji: "♑️",
        label: "Capricorn",
        tone: 0
      },
      {
        emoji: "♒️",
        label: "Aquarius",
        tone: 0
      },
      {
        emoji: "♓️",
        label: "Pisces",
        tone: 0
      },
      {
        emoji: "⛎",
        label: "Ophiuchus",
        tone: 0
      },
      {
        emoji: "🔀",
        label: "shuffle tracks button",
        tone: 0
      },
      {
        emoji: "🔁",
        label: "repeat button",
        tone: 0
      },
      {
        emoji: "🔂",
        label: "repeat single button",
        tone: 0
      },
      {
        emoji: "▶️",
        label: "play button",
        tone: 0
      },
      {
        emoji: "⏩️",
        label: "fast-forward button",
        tone: 0
      },
      {
        emoji: "⏭️",
        label: "next track button",
        tone: 0
      },
      {
        emoji: "⏯️",
        label: "play or pause button",
        tone: 0
      },
      {
        emoji: "◀️",
        label: "reverse button",
        tone: 0
      },
      {
        emoji: "⏪️",
        label: "fast reverse button",
        tone: 0
      },
      {
        emoji: "⏮️",
        label: "last track button",
        tone: 0
      },
      {
        emoji: "🔼",
        label: "upwards button",
        tone: 0
      },
      {
        emoji: "⏫",
        label: "fast up button",
        tone: 0
      },
      {
        emoji: "🔽",
        label: "downwards button",
        tone: 0
      },
      {
        emoji: "⏬",
        label: "fast down button",
        tone: 0
      },
      {
        emoji: "⏸️",
        label: "pause button",
        tone: 0
      },
      {
        emoji: "⏹️",
        label: "stop button",
        tone: 0
      },
      {
        emoji: "⏺️",
        label: "record button",
        tone: 0
      },
      {
        emoji: "⏏️",
        label: "eject button",
        tone: 0
      },
      {
        emoji: "🎦",
        label: "cinema",
        tone: 0
      },
      {
        emoji: "🔅",
        label: "dim button",
        tone: 0
      },
      {
        emoji: "🔆",
        label: "bright button",
        tone: 0
      },
      {
        emoji: "📶",
        label: "antenna bars",
        tone: 0
      },
      {
        emoji: "📳",
        label: "vibration mode",
        tone: 0
      },
      {
        emoji: "📴",
        label: "mobile phone off",
        tone: 0
      },
      {
        emoji: "♀️",
        label: "female sign",
        tone: 0
      },
      {
        emoji: "♂️",
        label: "male sign",
        tone: 0
      },
      {
        emoji: "⚧️",
        label: "transgender symbol",
        tone: 0
      },
      {
        emoji: "✖️",
        label: "multiply",
        tone: 0
      },
      {
        emoji: "➕",
        label: "plus",
        tone: 0
      },
      {
        emoji: "➖",
        label: "minus",
        tone: 0
      },
      {
        emoji: "➗",
        label: "divide",
        tone: 0
      },
      {
        emoji: "♾️",
        label: "infinity",
        tone: 0
      },
      {
        emoji: "‼️",
        label: "double exclamation mark",
        tone: 0
      },
      {
        emoji: "⁉️",
        label: "exclamation question mark",
        tone: 0
      },
      {
        emoji: "❓️",
        label: "red question mark",
        tone: 0
      },
      {
        emoji: "❔",
        label: "white question mark",
        tone: 0
      },
      {
        emoji: "❕",
        label: "white exclamation mark",
        tone: 0
      },
      {
        emoji: "❗️",
        label: "red exclamation mark",
        tone: 0
      },
      {
        emoji: "〰️",
        label: "wavy dash",
        tone: 0
      },
      {
        emoji: "💱",
        label: "currency exchange",
        tone: 0
      },
      {
        emoji: "💲",
        label: "heavy dollar sign",
        tone: 0
      },
      {
        emoji: "⚕️",
        label: "medical symbol",
        tone: 0
      },
      {
        emoji: "♻️",
        label: "recycling symbol",
        tone: 0
      },
      {
        emoji: "⚜️",
        label: "fleur-de-lis",
        tone: 0
      },
      {
        emoji: "🔱",
        label: "trident emblem",
        tone: 0
      },
      {
        emoji: "📛",
        label: "name badge",
        tone: 0
      },
      {
        emoji: "🔰",
        label: "Japanese symbol for beginner",
        tone: 0
      },
      {
        emoji: "⭕️",
        label: "hollow red circle",
        tone: 0
      },
      {
        emoji: "✅",
        label: "check mark button",
        tone: 0
      },
      {
        emoji: "☑️",
        label: "check box with check",
        tone: 0
      },
      {
        emoji: "✔️",
        label: "check mark",
        tone: 0
      },
      {
        emoji: "❌",
        label: "cross mark",
        tone: 0
      },
      {
        emoji: "❎",
        label: "cross mark button",
        tone: 0
      },
      {
        emoji: "➰",
        label: "curly loop",
        tone: 0
      },
      {
        emoji: "➿",
        label: "double curly loop",
        tone: 0
      },
      {
        emoji: "〽️",
        label: "part alternation mark",
        tone: 0
      },
      {
        emoji: "✳️",
        label: "eight-spoked asterisk",
        tone: 0
      },
      {
        emoji: "✴️",
        label: "eight-pointed star",
        tone: 0
      },
      {
        emoji: "❇️",
        label: "sparkle",
        tone: 0
      },
      {
        emoji: "©️",
        label: "copyright",
        tone: 0
      },
      {
        emoji: "®️",
        label: "registered",
        tone: 0
      },
      {
        emoji: "™️",
        label: "trade mark",
        tone: 0
      },
      {
        emoji: "#️⃣",
        label: "keycap: #",
        tone: 0
      },
      {
        emoji: "*️⃣",
        label: "keycap: *",
        tone: 0
      },
      {
        emoji: "0️⃣",
        label: "keycap: 0",
        tone: 0
      },
      {
        emoji: "1️⃣",
        label: "keycap: 1",
        tone: 0
      },
      {
        emoji: "2️⃣",
        label: "keycap: 2",
        tone: 0
      },
      {
        emoji: "3️⃣",
        label: "keycap: 3",
        tone: 0
      },
      {
        emoji: "4️⃣",
        label: "keycap: 4",
        tone: 0
      },
      {
        emoji: "5️⃣",
        label: "keycap: 5",
        tone: 0
      },
      {
        emoji: "6️⃣",
        label: "keycap: 6",
        tone: 0
      },
      {
        emoji: "7️⃣",
        label: "keycap: 7",
        tone: 0
      },
      {
        emoji: "8️⃣",
        label: "keycap: 8",
        tone: 0
      },
      {
        emoji: "9️⃣",
        label: "keycap: 9",
        tone: 0
      },
      {
        emoji: "🔟",
        label: "keycap: 10",
        tone: 0
      },
      {
        emoji: "🔠",
        label: "input latin uppercase",
        tone: 0
      },
      {
        emoji: "🔡",
        label: "input latin lowercase",
        tone: 0
      },
      {
        emoji: "🔢",
        label: "input numbers",
        tone: 0
      },
      {
        emoji: "🔣",
        label: "input symbols",
        tone: 0
      },
      {
        emoji: "🔤",
        label: "input latin letters",
        tone: 0
      },
      {
        emoji: "🅰️",
        label: "A button (blood type)",
        tone: 0
      },
      {
        emoji: "🆎",
        label: "AB button (blood type)",
        tone: 0
      },
      {
        emoji: "🅱️",
        label: "B button (blood type)",
        tone: 0
      },
      {
        emoji: "🆑",
        label: "CL button",
        tone: 0
      },
      {
        emoji: "🆒",
        label: "COOL button",
        tone: 0
      },
      {
        emoji: "🆓",
        label: "FREE button",
        tone: 0
      },
      {
        emoji: "ℹ️",
        label: "information",
        tone: 0
      },
      {
        emoji: "🆔",
        label: "ID button",
        tone: 0
      },
      {
        emoji: "Ⓜ️",
        label: "circled M",
        tone: 0
      },
      {
        emoji: "🆕",
        label: "NEW button",
        tone: 0
      },
      {
        emoji: "🆖",
        label: "NG button",
        tone: 0
      },
      {
        emoji: "🅾️",
        label: "O button (blood type)",
        tone: 0
      },
      {
        emoji: "🆗",
        label: "OK button",
        tone: 0
      },
      {
        emoji: "🅿️",
        label: "P button",
        tone: 0
      },
      {
        emoji: "🆘",
        label: "SOS button",
        tone: 0
      },
      {
        emoji: "🆙",
        label: "UP! button",
        tone: 0
      },
      {
        emoji: "🆚",
        label: "VS button",
        tone: 0
      },
      {
        emoji: "🈁",
        label: "Japanese “here” button",
        tone: 0
      },
      {
        emoji: "🈂️",
        label: "Japanese “service charge” button",
        tone: 0
      },
      {
        emoji: "🈷️",
        label: "Japanese “monthly amount” button",
        tone: 0
      },
      {
        emoji: "🈶",
        label: "Japanese “not free of charge” button",
        tone: 0
      },
      {
        emoji: "🈯️",
        label: "Japanese “reserved” button",
        tone: 0
      },
      {
        emoji: "🉐",
        label: "Japanese “bargain” button",
        tone: 0
      },
      {
        emoji: "🈹",
        label: "Japanese “discount” button",
        tone: 0
      },
      {
        emoji: "🈚️",
        label: "Japanese “free of charge” button",
        tone: 0
      },
      {
        emoji: "🈲",
        label: "Japanese “prohibited” button",
        tone: 0
      },
      {
        emoji: "🉑",
        label: "Japanese “acceptable” button",
        tone: 0
      },
      {
        emoji: "🈸",
        label: "Japanese “application” button",
        tone: 0
      },
      {
        emoji: "🈴",
        label: "Japanese “passing grade” button",
        tone: 0
      },
      {
        emoji: "🈳",
        label: "Japanese “vacancy” button",
        tone: 0
      },
      {
        emoji: "㊗️",
        label: "Japanese “congratulations” button",
        tone: 0
      },
      {
        emoji: "㊙️",
        label: "Japanese “secret” button",
        tone: 0
      },
      {
        emoji: "🈺",
        label: "Japanese “open for business” button",
        tone: 0
      },
      {
        emoji: "🈵",
        label: "Japanese “no vacancy” button",
        tone: 0
      },
      {
        emoji: "🔴",
        label: "red circle",
        tone: 0
      },
      {
        emoji: "🟠",
        label: "orange circle",
        tone: 0
      },
      {
        emoji: "🟡",
        label: "yellow circle",
        tone: 0
      },
      {
        emoji: "🟢",
        label: "green circle",
        tone: 0
      },
      {
        emoji: "🔵",
        label: "blue circle",
        tone: 0
      },
      {
        emoji: "🟣",
        label: "purple circle",
        tone: 0
      },
      {
        emoji: "🟤",
        label: "brown circle",
        tone: 0
      },
      {
        emoji: "⚫️",
        label: "black circle",
        tone: 0
      },
      {
        emoji: "⚪️",
        label: "white circle",
        tone: 0
      },
      {
        emoji: "🟥",
        label: "red square",
        tone: 0
      },
      {
        emoji: "🟧",
        label: "orange square",
        tone: 0
      },
      {
        emoji: "🟨",
        label: "yellow square",
        tone: 0
      },
      {
        emoji: "🟩",
        label: "green square",
        tone: 0
      },
      {
        emoji: "🟦",
        label: "blue square",
        tone: 0
      },
      {
        emoji: "🟪",
        label: "purple square",
        tone: 0
      },
      {
        emoji: "🟫",
        label: "brown square",
        tone: 0
      },
      {
        emoji: "⬛️",
        label: "black large square",
        tone: 0
      },
      {
        emoji: "⬜️",
        label: "white large square",
        tone: 0
      },
      {
        emoji: "◼️",
        label: "black medium square",
        tone: 0
      },
      {
        emoji: "◻️",
        label: "white medium square",
        tone: 0
      },
      {
        emoji: "◾️",
        label: "black medium-small square",
        tone: 0
      },
      {
        emoji: "◽️",
        label: "white medium-small square",
        tone: 0
      },
      {
        emoji: "▪️",
        label: "black small square",
        tone: 0
      },
      {
        emoji: "▫️",
        label: "white small square",
        tone: 0
      },
      {
        emoji: "🔶",
        label: "large orange diamond",
        tone: 0
      },
      {
        emoji: "🔷",
        label: "large blue diamond",
        tone: 0
      },
      {
        emoji: "🔸",
        label: "small orange diamond",
        tone: 0
      },
      {
        emoji: "🔹",
        label: "small blue diamond",
        tone: 0
      },
      {
        emoji: "🔺",
        label: "red triangle pointed up",
        tone: 0
      },
      {
        emoji: "🔻",
        label: "red triangle pointed down",
        tone: 0
      },
      {
        emoji: "💠",
        label: "diamond with a dot",
        tone: 0
      },
      {
        emoji: "🔘",
        label: "radio button",
        tone: 0
      },
      {
        emoji: "🔳",
        label: "white square button",
        tone: 0
      },
      {
        emoji: "🔲",
        label: "black square button",
        tone: 0
      },
      {
        emoji: "🏁",
        label: "chequered flag",
        tone: 0
      },
      {
        emoji: "🚩",
        label: "triangular flag",
        tone: 0
      },
      {
        emoji: "🎌",
        label: "crossed flags",
        tone: 0
      },
      {
        emoji: "🏴",
        label: "black flag",
        tone: 0
      },
      {
        emoji: "🏳️",
        label: "white flag",
        tone: 0
      },
      {
        emoji: "🏳️‍🌈",
        label: "rainbow flag",
        tone: 0
      },
      {
        emoji: "🏳️‍⚧️",
        label: "transgender flag",
        tone: 0
      },
      {
        emoji: "🏴‍☠️",
        label: "pirate flag",
        tone: 0
      },
      {
        emoji: "🇦🇨",
        label: "flag: Ascension Island",
        tone: 0
      },
      {
        emoji: "🇦🇩",
        label: "flag: Andorra",
        tone: 0
      },
      {
        emoji: "🇦🇪",
        label: "flag: United Arab Emirates",
        tone: 0
      },
      {
        emoji: "🇦🇫",
        label: "flag: Afghanistan",
        tone: 0
      },
      {
        emoji: "🇦🇬",
        label: "flag: Antigua & Barbuda",
        tone: 0
      },
      {
        emoji: "🇦🇮",
        label: "flag: Anguilla",
        tone: 0
      },
      {
        emoji: "🇦🇱",
        label: "flag: Albania",
        tone: 0
      },
      {
        emoji: "🇦🇲",
        label: "flag: Armenia",
        tone: 0
      },
      {
        emoji: "🇦🇴",
        label: "flag: Angola",
        tone: 0
      },
      {
        emoji: "🇦🇶",
        label: "flag: Antarctica",
        tone: 0
      },
      {
        emoji: "🇦🇷",
        label: "flag: Argentina",
        tone: 0
      },
      {
        emoji: "🇦🇸",
        label: "flag: American Samoa",
        tone: 0
      },
      {
        emoji: "🇦🇹",
        label: "flag: Austria",
        tone: 0
      },
      {
        emoji: "🇦🇺",
        label: "flag: Australia",
        tone: 0
      },
      {
        emoji: "🇦🇼",
        label: "flag: Aruba",
        tone: 0
      },
      {
        emoji: "🇦🇽",
        label: "flag: Åland Islands",
        tone: 0
      },
      {
        emoji: "🇦🇿",
        label: "flag: Azerbaijan",
        tone: 0
      },
      {
        emoji: "🇧🇦",
        label: "flag: Bosnia & Herzegovina",
        tone: 0
      },
      {
        emoji: "🇧🇧",
        label: "flag: Barbados",
        tone: 0
      },
      {
        emoji: "🇧🇩",
        label: "flag: Bangladesh",
        tone: 0
      },
      {
        emoji: "🇧🇪",
        label: "flag: Belgium",
        tone: 0
      },
      {
        emoji: "🇧🇫",
        label: "flag: Burkina Faso",
        tone: 0
      },
      {
        emoji: "🇧🇬",
        label: "flag: Bulgaria",
        tone: 0
      },
      {
        emoji: "🇧🇭",
        label: "flag: Bahrain",
        tone: 0
      },
      {
        emoji: "🇧🇮",
        label: "flag: Burundi",
        tone: 0
      },
      {
        emoji: "🇧🇯",
        label: "flag: Benin",
        tone: 0
      },
      {
        emoji: "🇧🇱",
        label: "flag: St. Barthélemy",
        tone: 0
      },
      {
        emoji: "🇧🇲",
        label: "flag: Bermuda",
        tone: 0
      },
      {
        emoji: "🇧🇳",
        label: "flag: Brunei",
        tone: 0
      },
      {
        emoji: "🇧🇴",
        label: "flag: Bolivia",
        tone: 0
      },
      {
        emoji: "🇧🇶",
        label: "flag: Caribbean Netherlands",
        tone: 0
      },
      {
        emoji: "🇧🇷",
        label: "flag: Brazil",
        tone: 0
      },
      {
        emoji: "🇧🇸",
        label: "flag: Bahamas",
        tone: 0
      },
      {
        emoji: "🇧🇹",
        label: "flag: Bhutan",
        tone: 0
      },
      {
        emoji: "🇧🇻",
        label: "flag: Bouvet Island",
        tone: 0
      },
      {
        emoji: "🇧🇼",
        label: "flag: Botswana",
        tone: 0
      },
      {
        emoji: "🇧🇾",
        label: "flag: Belarus",
        tone: 0
      },
      {
        emoji: "🇧🇿",
        label: "flag: Belize",
        tone: 0
      },
      {
        emoji: "🇨🇦",
        label: "flag: Canada",
        tone: 0
      },
      {
        emoji: "🇨🇨",
        label: "flag: Cocos (Keeling) Islands",
        tone: 0
      },
      {
        emoji: "🇨🇩",
        label: "flag: Congo - Kinshasa",
        tone: 0
      },
      {
        emoji: "🇨🇫",
        label: "flag: Central African Republic",
        tone: 0
      },
      {
        emoji: "🇨🇬",
        label: "flag: Congo - Brazzaville",
        tone: 0
      },
      {
        emoji: "🇨🇭",
        label: "flag: Switzerland",
        tone: 0
      },
      {
        emoji: "🇨🇮",
        label: "flag: Côte d’Ivoire",
        tone: 0
      },
      {
        emoji: "🇨🇰",
        label: "flag: Cook Islands",
        tone: 0
      },
      {
        emoji: "🇨🇱",
        label: "flag: Chile",
        tone: 0
      },
      {
        emoji: "🇨🇲",
        label: "flag: Cameroon",
        tone: 0
      },
      {
        emoji: "🇨🇳",
        label: "flag: China",
        tone: 0
      },
      {
        emoji: "🇨🇴",
        label: "flag: Colombia",
        tone: 0
      },
      {
        emoji: "🇨🇵",
        label: "flag: Clipperton Island",
        tone: 0
      },
      {
        emoji: "🇨🇷",
        label: "flag: Costa Rica",
        tone: 0
      },
      {
        emoji: "🇨🇺",
        label: "flag: Cuba",
        tone: 0
      },
      {
        emoji: "🇨🇻",
        label: "flag: Cape Verde",
        tone: 0
      },
      {
        emoji: "🇨🇼",
        label: "flag: Curaçao",
        tone: 0
      },
      {
        emoji: "🇨🇽",
        label: "flag: Christmas Island",
        tone: 0
      },
      {
        emoji: "🇨🇾",
        label: "flag: Cyprus",
        tone: 0
      },
      {
        emoji: "🇨🇿",
        label: "flag: Czechia",
        tone: 0
      },
      {
        emoji: "🇩🇪",
        label: "flag: Germany",
        tone: 0
      },
      {
        emoji: "🇩🇬",
        label: "flag: Diego Garcia",
        tone: 0
      },
      {
        emoji: "🇩🇯",
        label: "flag: Djibouti",
        tone: 0
      },
      {
        emoji: "🇩🇰",
        label: "flag: Denmark",
        tone: 0
      },
      {
        emoji: "🇩🇲",
        label: "flag: Dominica",
        tone: 0
      },
      {
        emoji: "🇩🇴",
        label: "flag: Dominican Republic",
        tone: 0
      },
      {
        emoji: "🇩🇿",
        label: "flag: Algeria",
        tone: 0
      },
      {
        emoji: "🇪🇦",
        label: "flag: Ceuta & Melilla",
        tone: 0
      },
      {
        emoji: "🇪🇨",
        label: "flag: Ecuador",
        tone: 0
      },
      {
        emoji: "🇪🇪",
        label: "flag: Estonia",
        tone: 0
      },
      {
        emoji: "🇪🇬",
        label: "flag: Egypt",
        tone: 0
      },
      {
        emoji: "🇪🇭",
        label: "flag: Western Sahara",
        tone: 0
      },
      {
        emoji: "🇪🇷",
        label: "flag: Eritrea",
        tone: 0
      },
      {
        emoji: "🇪🇸",
        label: "flag: Spain",
        tone: 0
      },
      {
        emoji: "🇪🇹",
        label: "flag: Ethiopia",
        tone: 0
      },
      {
        emoji: "🇪🇺",
        label: "flag: European Union",
        tone: 0
      },
      {
        emoji: "🇫🇮",
        label: "flag: Finland",
        tone: 0
      },
      {
        emoji: "🇫🇯",
        label: "flag: Fiji",
        tone: 0
      },
      {
        emoji: "🇫🇰",
        label: "flag: Falkland Islands",
        tone: 0
      },
      {
        emoji: "🇫🇲",
        label: "flag: Micronesia",
        tone: 0
      },
      {
        emoji: "🇫🇴",
        label: "flag: Faroe Islands",
        tone: 0
      },
      {
        emoji: "🇫🇷",
        label: "flag: France",
        tone: 0
      },
      {
        emoji: "🇬🇦",
        label: "flag: Gabon",
        tone: 0
      },
      {
        emoji: "🇬🇧",
        label: "flag: United Kingdom",
        tone: 0
      },
      {
        emoji: "🇬🇩",
        label: "flag: Grenada",
        tone: 0
      },
      {
        emoji: "🇬🇪",
        label: "flag: Georgia",
        tone: 0
      },
      {
        emoji: "🇬🇫",
        label: "flag: French Guiana",
        tone: 0
      },
      {
        emoji: "🇬🇬",
        label: "flag: Guernsey",
        tone: 0
      },
      {
        emoji: "🇬🇭",
        label: "flag: Ghana",
        tone: 0
      },
      {
        emoji: "🇬🇮",
        label: "flag: Gibraltar",
        tone: 0
      },
      {
        emoji: "🇬🇱",
        label: "flag: Greenland",
        tone: 0
      },
      {
        emoji: "🇬🇲",
        label: "flag: Gambia",
        tone: 0
      },
      {
        emoji: "🇬🇳",
        label: "flag: Guinea",
        tone: 0
      },
      {
        emoji: "🇬🇵",
        label: "flag: Guadeloupe",
        tone: 0
      },
      {
        emoji: "🇬🇶",
        label: "flag: Equatorial Guinea",
        tone: 0
      },
      {
        emoji: "🇬🇷",
        label: "flag: Greece",
        tone: 0
      },
      {
        emoji: "🇬🇸",
        label: "flag: South Georgia & South Sandwich Islands",
        tone: 0
      },
      {
        emoji: "🇬🇹",
        label: "flag: Guatemala",
        tone: 0
      },
      {
        emoji: "🇬🇺",
        label: "flag: Guam",
        tone: 0
      },
      {
        emoji: "🇬🇼",
        label: "flag: Guinea-Bissau",
        tone: 0
      },
      {
        emoji: "🇬🇾",
        label: "flag: Guyana",
        tone: 0
      },
      {
        emoji: "🇭🇰",
        label: "flag: Hong Kong SAR China",
        tone: 0
      },
      {
        emoji: "🇭🇲",
        label: "flag: Heard & McDonald Islands",
        tone: 0
      },
      {
        emoji: "🇭🇳",
        label: "flag: Honduras",
        tone: 0
      },
      {
        emoji: "🇭🇷",
        label: "flag: Croatia",
        tone: 0
      },
      {
        emoji: "🇭🇹",
        label: "flag: Haiti",
        tone: 0
      },
      {
        emoji: "🇭🇺",
        label: "flag: Hungary",
        tone: 0
      },
      {
        emoji: "🇮🇨",
        label: "flag: Canary Islands",
        tone: 0
      },
      {
        emoji: "🇮🇩",
        label: "flag: Indonesia",
        tone: 0
      },
      {
        emoji: "🇮🇪",
        label: "flag: Ireland",
        tone: 0
      },
      {
        emoji: "🇮🇱",
        label: "flag: Israel",
        tone: 0
      },
      {
        emoji: "🇮🇲",
        label: "flag: Isle of Man",
        tone: 0
      },
      {
        emoji: "🇮🇳",
        label: "flag: India",
        tone: 0
      },
      {
        emoji: "🇮🇴",
        label: "flag: British Indian Ocean Territory",
        tone: 0
      },
      {
        emoji: "🇮🇶",
        label: "flag: Iraq",
        tone: 0
      },
      {
        emoji: "🇮🇷",
        label: "flag: Iran",
        tone: 0
      },
      {
        emoji: "🇮🇸",
        label: "flag: Iceland",
        tone: 0
      },
      {
        emoji: "🇮🇹",
        label: "flag: Italy",
        tone: 0
      },
      {
        emoji: "🇯🇪",
        label: "flag: Jersey",
        tone: 0
      },
      {
        emoji: "🇯🇲",
        label: "flag: Jamaica",
        tone: 0
      },
      {
        emoji: "🇯🇴",
        label: "flag: Jordan",
        tone: 0
      },
      {
        emoji: "🇯🇵",
        label: "flag: Japan",
        tone: 0
      },
      {
        emoji: "🇰🇪",
        label: "flag: Kenya",
        tone: 0
      },
      {
        emoji: "🇰🇬",
        label: "flag: Kyrgyzstan",
        tone: 0
      },
      {
        emoji: "🇰🇭",
        label: "flag: Cambodia",
        tone: 0
      },
      {
        emoji: "🇰🇮",
        label: "flag: Kiribati",
        tone: 0
      },
      {
        emoji: "🇰🇲",
        label: "flag: Comoros",
        tone: 0
      },
      {
        emoji: "🇰🇳",
        label: "flag: St. Kitts & Nevis",
        tone: 0
      },
      {
        emoji: "🇰🇵",
        label: "flag: North Korea",
        tone: 0
      },
      {
        emoji: "🇰🇷",
        label: "flag: South Korea",
        tone: 0
      },
      {
        emoji: "🇰🇼",
        label: "flag: Kuwait",
        tone: 0
      },
      {
        emoji: "🇰🇾",
        label: "flag: Cayman Islands",
        tone: 0
      },
      {
        emoji: "🇰🇿",
        label: "flag: Kazakhstan",
        tone: 0
      },
      {
        emoji: "🇱🇦",
        label: "flag: Laos",
        tone: 0
      },
      {
        emoji: "🇱🇧",
        label: "flag: Lebanon",
        tone: 0
      },
      {
        emoji: "🇱🇨",
        label: "flag: St. Lucia",
        tone: 0
      },
      {
        emoji: "🇱🇮",
        label: "flag: Liechtenstein",
        tone: 0
      },
      {
        emoji: "🇱🇰",
        label: "flag: Sri Lanka",
        tone: 0
      },
      {
        emoji: "🇱🇷",
        label: "flag: Liberia",
        tone: 0
      },
      {
        emoji: "🇱🇸",
        label: "flag: Lesotho",
        tone: 0
      },
      {
        emoji: "🇱🇹",
        label: "flag: Lithuania",
        tone: 0
      },
      {
        emoji: "🇱🇺",
        label: "flag: Luxembourg",
        tone: 0
      },
      {
        emoji: "🇱🇻",
        label: "flag: Latvia",
        tone: 0
      },
      {
        emoji: "🇱🇾",
        label: "flag: Libya",
        tone: 0
      },
      {
        emoji: "🇲🇦",
        label: "flag: Morocco",
        tone: 0
      },
      {
        emoji: "🇲🇨",
        label: "flag: Monaco",
        tone: 0
      },
      {
        emoji: "🇲🇩",
        label: "flag: Moldova",
        tone: 0
      },
      {
        emoji: "🇲🇪",
        label: "flag: Montenegro",
        tone: 0
      },
      {
        emoji: "🇲🇫",
        label: "flag: St. Martin",
        tone: 0
      },
      {
        emoji: "🇲🇬",
        label: "flag: Madagascar",
        tone: 0
      },
      {
        emoji: "🇲🇭",
        label: "flag: Marshall Islands",
        tone: 0
      },
      {
        emoji: "🇲🇰",
        label: "flag: North Macedonia",
        tone: 0
      },
      {
        emoji: "🇲🇱",
        label: "flag: Mali",
        tone: 0
      },
      {
        emoji: "🇲🇲",
        label: "flag: Myanmar (Burma)",
        tone: 0
      },
      {
        emoji: "🇲🇳",
        label: "flag: Mongolia",
        tone: 0
      },
      {
        emoji: "🇲🇴",
        label: "flag: Macao SAR China",
        tone: 0
      },
      {
        emoji: "🇲🇵",
        label: "flag: Northern Mariana Islands",
        tone: 0
      },
      {
        emoji: "🇲🇶",
        label: "flag: Martinique",
        tone: 0
      },
      {
        emoji: "🇲🇷",
        label: "flag: Mauritania",
        tone: 0
      },
      {
        emoji: "🇲🇸",
        label: "flag: Montserrat",
        tone: 0
      },
      {
        emoji: "🇲🇹",
        label: "flag: Malta",
        tone: 0
      },
      {
        emoji: "🇲🇺",
        label: "flag: Mauritius",
        tone: 0
      },
      {
        emoji: "🇲🇻",
        label: "flag: Maldives",
        tone: 0
      },
      {
        emoji: "🇲🇼",
        label: "flag: Malawi",
        tone: 0
      },
      {
        emoji: "🇲🇽",
        label: "flag: Mexico",
        tone: 0
      },
      {
        emoji: "🇲🇾",
        label: "flag: Malaysia",
        tone: 0
      },
      {
        emoji: "🇲🇿",
        label: "flag: Mozambique",
        tone: 0
      },
      {
        emoji: "🇳🇦",
        label: "flag: Namibia",
        tone: 0
      },
      {
        emoji: "🇳🇨",
        label: "flag: New Caledonia",
        tone: 0
      },
      {
        emoji: "🇳🇪",
        label: "flag: Niger",
        tone: 0
      },
      {
        emoji: "🇳🇫",
        label: "flag: Norfolk Island",
        tone: 0
      },
      {
        emoji: "🇳🇬",
        label: "flag: Nigeria",
        tone: 0
      },
      {
        emoji: "🇳🇮",
        label: "flag: Nicaragua",
        tone: 0
      },
      {
        emoji: "🇳🇱",
        label: "flag: Netherlands",
        tone: 0
      },
      {
        emoji: "🇳🇴",
        label: "flag: Norway",
        tone: 0
      },
      {
        emoji: "🇳🇵",
        label: "flag: Nepal",
        tone: 0
      },
      {
        emoji: "🇳🇷",
        label: "flag: Nauru",
        tone: 0
      },
      {
        emoji: "🇳🇺",
        label: "flag: Niue",
        tone: 0
      },
      {
        emoji: "🇳🇿",
        label: "flag: New Zealand",
        tone: 0
      },
      {
        emoji: "🇴🇲",
        label: "flag: Oman",
        tone: 0
      },
      {
        emoji: "🇵🇦",
        label: "flag: Panama",
        tone: 0
      },
      {
        emoji: "🇵🇪",
        label: "flag: Peru",
        tone: 0
      },
      {
        emoji: "🇵🇫",
        label: "flag: French Polynesia",
        tone: 0
      },
      {
        emoji: "🇵🇬",
        label: "flag: Papua New Guinea",
        tone: 0
      },
      {
        emoji: "🇵🇭",
        label: "flag: Philippines",
        tone: 0
      },
      {
        emoji: "🇵🇰",
        label: "flag: Pakistan",
        tone: 0
      },
      {
        emoji: "🇵🇱",
        label: "flag: Poland",
        tone: 0
      },
      {
        emoji: "🇵🇲",
        label: "flag: St. Pierre & Miquelon",
        tone: 0
      },
      {
        emoji: "🇵🇳",
        label: "flag: Pitcairn Islands",
        tone: 0
      },
      {
        emoji: "🇵🇷",
        label: "flag: Puerto Rico",
        tone: 0
      },
      {
        emoji: "🇵🇸",
        label: "flag: Palestinian Territories",
        tone: 0
      },
      {
        emoji: "🇵🇹",
        label: "flag: Portugal",
        tone: 0
      },
      {
        emoji: "🇵🇼",
        label: "flag: Palau",
        tone: 0
      },
      {
        emoji: "🇵🇾",
        label: "flag: Paraguay",
        tone: 0
      },
      {
        emoji: "🇶🇦",
        label: "flag: Qatar",
        tone: 0
      },
      {
        emoji: "🇷🇪",
        label: "flag: Réunion",
        tone: 0
      },
      {
        emoji: "🇷🇴",
        label: "flag: Romania",
        tone: 0
      },
      {
        emoji: "🇷🇸",
        label: "flag: Serbia",
        tone: 0
      },
      {
        emoji: "🇷🇺",
        label: "flag: Russia",
        tone: 0
      },
      {
        emoji: "🇷🇼",
        label: "flag: Rwanda",
        tone: 0
      },
      {
        emoji: "🇸🇦",
        label: "flag: Saudi Arabia",
        tone: 0
      },
      {
        emoji: "🇸🇧",
        label: "flag: Solomon Islands",
        tone: 0
      },
      {
        emoji: "🇸🇨",
        label: "flag: Seychelles",
        tone: 0
      },
      {
        emoji: "🇸🇩",
        label: "flag: Sudan",
        tone: 0
      },
      {
        emoji: "🇸🇪",
        label: "flag: Sweden",
        tone: 0
      },
      {
        emoji: "🇸🇬",
        label: "flag: Singapore",
        tone: 0
      },
      {
        emoji: "🇸🇭",
        label: "flag: St. Helena",
        tone: 0
      },
      {
        emoji: "🇸🇮",
        label: "flag: Slovenia",
        tone: 0
      },
      {
        emoji: "🇸🇯",
        label: "flag: Svalbard & Jan Mayen",
        tone: 0
      },
      {
        emoji: "🇸🇰",
        label: "flag: Slovakia",
        tone: 0
      },
      {
        emoji: "🇸🇱",
        label: "flag: Sierra Leone",
        tone: 0
      },
      {
        emoji: "🇸🇲",
        label: "flag: San Marino",
        tone: 0
      },
      {
        emoji: "🇸🇳",
        label: "flag: Senegal",
        tone: 0
      },
      {
        emoji: "🇸🇴",
        label: "flag: Somalia",
        tone: 0
      },
      {
        emoji: "🇸🇷",
        label: "flag: Suriname",
        tone: 0
      },
      {
        emoji: "🇸🇸",
        label: "flag: South Sudan",
        tone: 0
      },
      {
        emoji: "🇸🇹",
        label: "flag: São Tomé & Príncipe",
        tone: 0
      },
      {
        emoji: "🇸🇻",
        label: "flag: El Salvador",
        tone: 0
      },
      {
        emoji: "🇸🇽",
        label: "flag: Sint Maarten",
        tone: 0
      },
      {
        emoji: "🇸🇾",
        label: "flag: Syria",
        tone: 0
      },
      {
        emoji: "🇸🇿",
        label: "flag: Eswatini",
        tone: 0
      },
      {
        emoji: "🇹🇦",
        label: "flag: Tristan da Cunha",
        tone: 0
      },
      {
        emoji: "🇹🇨",
        label: "flag: Turks & Caicos Islands",
        tone: 0
      },
      {
        emoji: "🇹🇩",
        label: "flag: Chad",
        tone: 0
      },
      {
        emoji: "🇹🇫",
        label: "flag: French Southern Territories",
        tone: 0
      },
      {
        emoji: "🇹🇬",
        label: "flag: Togo",
        tone: 0
      },
      {
        emoji: "🇹🇭",
        label: "flag: Thailand",
        tone: 0
      },
      {
        emoji: "🇹🇯",
        label: "flag: Tajikistan",
        tone: 0
      },
      {
        emoji: "🇹🇰",
        label: "flag: Tokelau",
        tone: 0
      },
      {
        emoji: "🇹🇱",
        label: "flag: Timor-Leste",
        tone: 0
      },
      {
        emoji: "🇹🇲",
        label: "flag: Turkmenistan",
        tone: 0
      },
      {
        emoji: "🇹🇳",
        label: "flag: Tunisia",
        tone: 0
      },
      {
        emoji: "🇹🇴",
        label: "flag: Tonga",
        tone: 0
      },
      {
        emoji: "🇹🇷",
        label: "flag: Turkey",
        tone: 0
      },
      {
        emoji: "🇹🇹",
        label: "flag: Trinidad & Tobago",
        tone: 0
      },
      {
        emoji: "🇹🇻",
        label: "flag: Tuvalu",
        tone: 0
      },
      {
        emoji: "🇹🇼",
        label: "flag: Taiwan",
        tone: 0
      },
      {
        emoji: "🇹🇿",
        label: "flag: Tanzania",
        tone: 0
      },
      {
        emoji: "🇺🇦",
        label: "flag: Ukraine",
        tone: 0
      },
      {
        emoji: "🇺🇬",
        label: "flag: Uganda",
        tone: 0
      },
      {
        emoji: "🇺🇲",
        label: "flag: U.S. Outlying Islands",
        tone: 0
      },
      {
        emoji: "🇺🇳",
        label: "flag: United Nations",
        tone: 0
      },
      {
        emoji: "🇺🇸",
        label: "flag: United States",
        tone: 0
      },
      {
        emoji: "🇺🇾",
        label: "flag: Uruguay",
        tone: 0
      },
      {
        emoji: "🇺🇿",
        label: "flag: Uzbekistan",
        tone: 0
      },
      {
        emoji: "🇻🇦",
        label: "flag: Vatican City",
        tone: 0
      },
      {
        emoji: "🇻🇨",
        label: "flag: St. Vincent & Grenadines",
        tone: 0
      },
      {
        emoji: "🇻🇪",
        label: "flag: Venezuela",
        tone: 0
      },
      {
        emoji: "🇻🇬",
        label: "flag: British Virgin Islands",
        tone: 0
      },
      {
        emoji: "🇻🇮",
        label: "flag: U.S. Virgin Islands",
        tone: 0
      },
      {
        emoji: "🇻🇳",
        label: "flag: Vietnam",
        tone: 0
      },
      {
        emoji: "🇻🇺",
        label: "flag: Vanuatu",
        tone: 0
      },
      {
        emoji: "🇼🇫",
        label: "flag: Wallis & Futuna",
        tone: 0
      },
      {
        emoji: "🇼🇸",
        label: "flag: Samoa",
        tone: 0
      },
      {
        emoji: "🇽🇰",
        label: "flag: Kosovo",
        tone: 0
      },
      {
        emoji: "🇾🇪",
        label: "flag: Yemen",
        tone: 0
      },
      {
        emoji: "🇾🇹",
        label: "flag: Mayotte",
        tone: 0
      },
      {
        emoji: "🇿🇦",
        label: "flag: South Africa",
        tone: 0
      },
      {
        emoji: "🇿🇲",
        label: "flag: Zambia",
        tone: 0
      },
      {
        emoji: "🇿🇼",
        label: "flag: Zimbabwe",
        tone: 0
      },
      {
        emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        label: "flag: England",
        tone: 0
      },
      {
        emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        label: "flag: Scotland",
        tone: 0
      },
      {
        emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        label: "flag: Wales",
        tone: 0
      }
    ]
  }
], Be = ss, so = 2, rs = 300, ms = [
  "Emotions",
  "People",
  "Animals and nature",
  "Food and drinks",
  "Travel and places",
  "Sports and activities",
  "Objects",
  "Symbols and flags"
], Ao = [
  { name: "skintone-default", value: 0 },
  { name: "skintone-light", value: 1 },
  { name: "skintone-light-medium", value: 2 },
  { name: "skintone-medium", value: 3 },
  { name: "skintone-medium-dark", value: 4 },
  { name: "skintone-dark", value: 5 }
], fe = {
  emotions: /* @__PURE__ */ L("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "M15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" }),
    /* @__PURE__ */ l("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm4.41-6.11a.745.745 0 0 0-1.03.24A3.98 3.98 0 0 1 12 16c-1.38 0-2.64-.7-3.38-1.88a.747.747 0 1 0-1.27.79A5.446 5.446 0 0 0 12 17.5c1.9 0 3.63-.97 4.65-2.58.22-.35.11-.81-.24-1.03Z" })
  ] }),
  people: /* @__PURE__ */ L("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }),
    /* @__PURE__ */ l("path", { d: "M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.023 5.023 0 0 1-4.92-4.15.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14A7.037 7.037 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41l-3.76-3.77Z" })
  ] }),
  animals: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5Zm-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13ZM7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5Zm7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56A2.5 2.5 0 0 1 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73a2.5 2.5 0 0 1-2.5 2.5Zm-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Zm-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Z" }) }),
  food: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M19 19H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1Zm1-16H9v2.4l1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V7.24c0-.15.07-.3.19-.39L8 5.4V3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 5h-2V5h2v3Z" }) }),
  travel: /* @__PURE__ */ L("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "m21.99 14.77-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01l-.01-5.24Zm-10.38-1.43.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66Zm.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" }),
    /* @__PURE__ */ l("path", { d: "M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5Z" }),
    /* @__PURE__ */ l("path", { d: "M7 11H5v2h2v-2Zm5-6h-2v2h2V5ZM7 15H5v2h2v-2Zm0 4H5v2h2v-2Z" })
  ] }),
  sports: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-3.54 3.53c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.42 0l3.53-3.54c1.61-1.61 3.92-1.33 5.5-1.35 1.58-.02 3.86-.94 5.46-2.54 2.93-2.92 3.41-7.2 1.07-9.54Zm-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72 2.11-2.11 5.18-2.59 6.72-1.06 1.53 1.53 1.05 4.61-1.06 6.72-2.11 2.11-5.18 2.59-6.72 1.06ZM18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58-.53 0-1.04-.21-1.41-.59-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58Zm0-2a3.998 3.998 0 0 0-2.83 6.83c.78.78 1.81 1.17 2.83 1.17a3.998 3.998 0 0 0 2.83-6.83A3.998 3.998 0 0 0 18 15Z" }) }),
  objects: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7Zm.5 11h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.83V14Zm1 5c-.01 0-.02-.01-.03-.01V19h-2.94v-.01c-.01 0-.02.01-.03.01-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.01 0 .02.01.03.01V18h2.94v.01c.01 0 .02-.01.03-.01.28 0 .5.22.5.5s-.22.5-.5.5Zm0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5Z" }) }),
  symbols: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1Zm0-3H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1Zm10.89 11.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41ZM14.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-4-10A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5Zm-5.05 7.09a.996.996 0 1 0-1.41-1.41l-.71.71-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.48 1.14.72 1.78.72.64 0 1.28-.24 1.77-.73l1.06-1.06.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71.71-.71Zm-4.6-3.89a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35Zm0 5.65a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35l1.06-1.06.71.71-1.07 1.05Z" }) })
}, cs = {
  "smileys-emotion": fe.emotions,
  "people-body": fe.people,
  "animals-nature": fe.animals,
  "food-drink": fe.food,
  "travel-places": fe.travel,
  activities: fe.sports,
  objects: fe.objects,
  symbols: fe.symbols
}, ds = C(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), bs = C(
  // Wrapper styles from template.html #wrapper
  [
    "w-96",
    "max-h-[504px]",
    "flex",
    "flex-col",
    "gap-2",
    "py-3"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), us = C(
  // Toolbar styles from template.html #toolbar
  ["flex", "gap-2", "px-3"],
  {
    variants: {},
    defaultVariants: {}
  }
), hs = C(
  // List wrapper styles from template.html #list-wrapper
  [
    "overflow-y-auto",
    "overflow-x-hidden",
    "w-96",
    "box-border",
    "scrollbar-gutter-stable"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), ps = C(
  // List styles from template.html #list
  [
    "flex",
    "flex-wrap",
    "gap-2",
    "px-3",
    "pt-1",
    "w-96",
    "box-border"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), gs = C(
  // Not found styles from template.html #not-found
  [
    "w-full",
    "h-12",
    "items-center",
    "justify-center",
    "pointer-events-none",
    "select-none",
    "text-[var(--sinch-comp-emoji-picker-color-default-text-not-found,var(--sinch-sys-color-text-muted))]"
  ],
  {
    variants: {
      visible: {
        true: "flex",
        false: "hidden"
      }
    },
    defaultVariants: {
      visible: !1
    }
  }
), ks = R(
  ({ className: o, emojiBaseUrl: e, onChange: n, ...t }, a) => {
    var E;
    const [i, s] = U(""), [r, m] = U(((E = Be[0]) == null ? void 0 : E.name) ?? ""), [c, b] = U(0), [h, d] = U("skintone-default"), [u, g] = U(!1), [v, N] = U(null), I = r.length === 0, [V, z] = U(""), y = f((S) => {
      s(S);
      const F = setTimeout(() => {
        z(S), S.length >= so ? r.length > 0 && (N(r), m("")) : v !== null && (m(v), N(null));
      }, rs);
      return () => clearTimeout(F);
    }, [r, v]), w = f((S) => {
      m(S), s(""), z(""), N(null);
    }, []), j = f(() => {
      s(""), z(""), v !== null && (m(v), N(null));
    }, [v]), k = f((S) => {
      const F = Ao.find(($) => $.name === S);
      F !== void 0 && (b(F.value), d(F.name)), g(!1);
    }, []), M = f(
      (S) => {
        n == null || n(S);
      },
      [n]
    ), T = J(() => {
      if (V.length < so)
        return [];
      const S = V.toLowerCase(), F = [];
      for (const $ of Be)
        for (const H of $.emojis)
          if (H.label.toLowerCase().includes(S)) {
            const Z = H.skins !== void 0 && H.skins.length > 0;
            if (c === 0 || !Z)
              F.push(H);
            else if (Z)
              for (const _ of H.skins)
                (c === _.tone || Array.isArray(_.tone) && _.tone.includes(c)) && F.push(_);
          }
      return F;
    }, [V, c]), P = J(() => {
      if (I)
        return [];
      const S = Be.find(($) => $.name === r);
      if (S === void 0)
        return [];
      const F = [];
      for (const $ of S.emojis) {
        const H = $.skins !== void 0 && $.skins.length > 0;
        if (c === 0 || !H)
          F.push($);
        else if (H)
          for (const Z of $.skins)
            (c === Z.tone || Array.isArray(Z.tone) && Z.tone.includes(c)) && F.push(Z);
      }
      return F;
    }, [r, I, c]), B = I ? T : P, D = I && B.length === 0 && V.length >= so, x = /* @__PURE__ */ l(
      No,
      {
        value: h,
        cols: 1,
        "aria-label": "Emoji skin tone menu",
        onChange: k,
        children: Ao.map((S) => /* @__PURE__ */ l(Vo, { value: S.name }, S.name))
      }
    );
    return /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        className: p(ds(), o),
        ...t,
        children: /* @__PURE__ */ L("div", { className: p(bs()), children: [
          /* @__PURE__ */ L("div", { className: p(us()), children: [
            /* @__PURE__ */ l(
              ko,
              {
                size: "l",
                "aria-label": "Search emojis",
                value: i,
                onChange: y,
                icon: /* @__PURE__ */ l(oe, { name: "magnifying-glass", iconsVersion: "2" }),
                rightAddon: i.length > 0 && /* @__PURE__ */ l(
                  re,
                  {
                    size: "s",
                    "aria-label": "Clear",
                    icon: /* @__PURE__ */ l(oe, { name: "fa-xmark", iconsVersion: "2" }),
                    onClick: j
                  }
                ),
                className: "flex-1 min-w-0"
              }
            ),
            /* @__PURE__ */ l(
              fn,
              {
                open: u,
                orientation: "bottom-left",
                "aria-label": "Emoji skin tone select",
                content: x,
                onClose: () => g(!1),
                children: /* @__PURE__ */ l(
                  re,
                  {
                    size: "l",
                    "aria-label": "Select emoji skin tones",
                    icon: /* @__PURE__ */ l(yo, { name: h }),
                    onClick: () => g(!u)
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ l(
            jo,
            {
              value: r,
              "aria-label": "Emoji groups",
              onChange: w,
              children: Be.map((S, F) => /* @__PURE__ */ l(
                vo,
                {
                  value: S.name,
                  "aria-label": ms[F] ?? S.name,
                  icon: /* @__PURE__ */ l(
                    "span",
                    {
                      className: p(
                        "w-5 h-5",
                        "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]"
                      ),
                      children: cs[S.name] ?? fe.emotions
                    }
                  )
                },
                S.name
              ))
            }
          ),
          /* @__PURE__ */ L("div", { className: p(hs()), children: [
            /* @__PURE__ */ l("div", { className: p(ps()), children: B.map((S, F) => /* @__PURE__ */ l(
              re,
              {
                size: "s",
                "aria-label": S.label,
                "data-value": S.emoji,
                icon: /* @__PURE__ */ l(
                  Qo,
                  {
                    char: S.emoji,
                    baseUrl: e,
                    size: "sm"
                  }
                ),
                onClick: () => M(S.emoji)
              },
              `${S.emoji}-${F}`
            )) }),
            /* @__PURE__ */ l("div", { className: p(gs({ visible: D })), children: /* @__PURE__ */ l(no, { type: "m", children: "No results" }) })
          ] })
        ] })
      }
    );
  }
);
ks.displayName = "EmojiPicker";
function Nn(o) {
  if (o === "" || o === null || o === void 0)
    return [];
  const e = o.split(`
`), n = [];
  let t = null, a = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i], r = s.match(/^[-*]\s+(.*)$/);
    if (r !== null) {
      (t === null || t.ordered === !0) && (t !== null && (t.children = a, n.push(t)), t = { type: "list", ordered: !1, children: [] }, a = []), a.push({
        type: "listItem",
        children: De(r[1])
      });
      continue;
    }
    const m = s.match(/^(\d+)\.\s+(.*)$/);
    if (m !== null) {
      (t === null || t.ordered === !1) && (t !== null && (t.children = a, n.push(t)), t = { type: "list", ordered: !0, children: [] }, a = []), a.push({
        type: "listItem",
        children: De(m[2])
      });
      continue;
    }
    if (t !== null && (t.children = a, n.push(t), t = null, a = []), s.trim() === "") {
      n.length > 0 && n.push({ type: "linebreak" });
      continue;
    }
    n.push({
      type: "paragraph",
      children: De(s)
    });
  }
  return t !== null && (t.children = a, n.push(t)), n;
}
function De(o) {
  var t;
  const e = [];
  let n = o;
  for (; n.length > 0; ) {
    const a = n.match(/^\\(.)/);
    if (a !== null) {
      e.push({ type: "text", content: a[1] }), n = n.slice(a[0].length);
      continue;
    }
    const i = n.match(/^\{\{([a-zA-Z0-9_-]+)\}\}/);
    if (i !== null) {
      e.push({ type: "chip", content: i[1] }), n = n.slice(i[0].length);
      continue;
    }
    const s = n.match(/^`([^`]+)`/);
    if (s !== null) {
      e.push({ type: "code", content: s[1] }), n = n.slice(s[0].length);
      continue;
    }
    const r = n.match(/^\*\*(.+?)\*\*/);
    if (r !== null) {
      e.push({
        type: "bold",
        children: De(r[1])
      }), n = n.slice(r[0].length);
      continue;
    }
    const m = n.match(/^\*([^*]+)\*/);
    if (m !== null) {
      e.push({
        type: "italic",
        children: De(m[1])
      }), n = n.slice(m[0].length);
      continue;
    }
    const c = n.match(/^~~(.+?)~~/);
    if (c !== null) {
      e.push({
        type: "strikethrough",
        children: De(c[1])
      }), n = n.slice(c[0].length);
      continue;
    }
    const b = n.match(/^\[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/);
    if (b !== null) {
      const u = ((t = b[3]) == null ? void 0 : t.split(",").map((g) => g.trim())) ?? [];
      e.push({
        type: "link",
        content: b[1],
        href: b[2],
        external: u.includes("external")
      }), n = n.slice(b[0].length);
      continue;
    }
    const h = n.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}])/u);
    if (h !== null) {
      e.push({ type: "emoji", content: h[1] }), n = n.slice(h[0].length);
      continue;
    }
    const d = n.match(/^[^*`\[\\{~\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]+/u);
    if (d !== null) {
      e.push({ type: "text", content: d[0] }), n = n.slice(d[0].length);
      continue;
    }
    e.push({ type: "text", content: n[0] }), n = n.slice(1);
  }
  return e;
}
const fs = C(
  // Base styles
  [
    "block"
  ],
  {
    variants: {
      size: {
        m: "[font:var(--sinch-sys-font-body-m)]",
        s: "[font:var(--sinch-sys-font-body-s)]",
        xs: "[font:var(--sinch-sys-font-body-xs)]",
        xxs: "[font:var(--sinch-sys-font-body-xxs)]"
      }
    },
    defaultVariants: {
      size: "m"
    }
  }
), js = R(
  ({
    className: o,
    text: e,
    size: n = "m",
    chipColor: t,
    chipIcon: a,
    chipResolver: i,
    onElementClick: s,
    ...r
  }, m) => {
    const c = J(() => Nn(e), [e]), b = f((d) => {
      const u = d.target;
      (u.tagName === "A" || u.closest("[data-chip]") !== null || u.closest("a") !== null) && (s == null || s(d, u));
    }, [s]), h = (d, u) => {
      var g, v, N, I, V, z, y;
      switch (d.type) {
        case "text":
          return d.content;
        case "bold":
          return /* @__PURE__ */ l("span", { className: "[font-weight:var(--sinch-ref-typography-font-weight-700)]", children: (g = d.children) == null ? void 0 : g.map((w, j) => h(w, j)) }, u);
        case "italic":
          return /* @__PURE__ */ l("span", { className: "italic", children: (v = d.children) == null ? void 0 : v.map((w, j) => h(w, j)) }, u);
        case "strikethrough":
          return /* @__PURE__ */ l("span", { className: "line-through", children: (N = d.children) == null ? void 0 : N.map((w, j) => h(w, j)) }, u);
        case "code":
          return /* @__PURE__ */ l(
            "code",
            {
              className: p(
                "[font:var(--sinch-comp-code-tag-font-text)]",
                "leading-inherit text-[length:inherit]",
                "border border-[var(--sinch-comp-code-tag-color-default-border-initial)]",
                "bg-[var(--sinch-comp-code-tag-color-default-background-initial)]",
                "px-[0.25em] rounded-[var(--sinch-comp-code-tag-shape-radius)]"
              ),
              children: d.content
            },
            u
          );
        case "link":
          return /* @__PURE__ */ l(
            "a",
            {
              href: d.href,
              className: p(
                "[font:var(--sinch-comp-link-default-font-initial)]",
                "text-[var(--sinch-comp-link-color-default-text-initial)]",
                "underline",
                "hover:text-[var(--sinch-comp-link-color-default-text-hover)]",
                "hover:no-underline"
              ),
              target: d.external === !0 ? "_blank" : void 0,
              rel: d.external === !0 ? "noopener noreferrer" : void 0,
              children: d.content
            },
            u
          );
        case "chip": {
          const w = i == null ? void 0 : i(d.content ?? ""), j = (w == null ? void 0 : w.color) ?? t, k = (w == null ? void 0 : w.icon) ?? a, M = j !== void 0 ? `var(--sinch-comp-tag-color-${j}-background)` : void 0, T = j !== void 0 ? `var(--sinch-comp-tag-color-${j}-foreground)` : void 0;
          return /* @__PURE__ */ L(
            "span",
            {
              "data-chip": !0,
              className: p(
                "inline-flex items-center align-middle",
                "h-[var(--sinch-comp-chip-size-container-m)]",
                "px-[9px] gap-1",
                "rounded-[var(--sinch-comp-chip-shape-radius)]",
                "bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]",
                "text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]",
                "[font:var(--sinch-comp-chip-font-size-m-label)]",
                "select-none"
              ),
              style: {
                backgroundColor: M,
                color: T
              },
              children: [
                k !== void 0 && /* @__PURE__ */ l(
                  "span",
                  {
                    className: "w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)]",
                    style: { color: T }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "overflow-hidden text-ellipsis whitespace-nowrap", children: d.content })
              ]
            },
            u
          );
        }
        case "emoji":
          return /* @__PURE__ */ l(
            "span",
            {
              className: "inline w-[1em] h-[1em] align-[-0.2em]",
              role: "img",
              "aria-label": d.content,
              children: d.content
            },
            u
          );
        case "linebreak":
          return /* @__PURE__ */ l("br", {}, u);
        case "paragraph":
          return /* @__PURE__ */ l("p", { className: "m-0 [&+p]:mt-[0.5em] [&+ul]:mt-[0.5em] [&+ol]:mt-[0.5em]", children: (I = d.children) == null ? void 0 : I.map((w, j) => h(w, j)) }, u);
        case "list":
          return d.ordered === !0 ? /* @__PURE__ */ l("ol", { className: "m-0 pl-[1.5em] [p+&]:mt-[0.5em]", children: (V = d.children) == null ? void 0 : V.map((w, j) => h(w, j)) }, u) : /* @__PURE__ */ l("ul", { className: "m-0 pl-[1.5em] [p+&]:mt-[0.5em]", children: (z = d.children) == null ? void 0 : z.map((w, j) => h(w, j)) }, u);
        case "listItem":
          return /* @__PURE__ */ l("li", { children: (y = d.children) == null ? void 0 : y.map((w, j) => h(w, j)) }, u);
        default:
          return null;
      }
    };
    return /* @__PURE__ */ l(
      "div",
      {
        ref: m,
        role: "paragraph",
        className: p(
          fs({ size: n }),
          "text-[var(--sinch-global-color-text,var(--sinch-sys-color-text-default))]",
          o
        ),
        onClick: b,
        ...r,
        children: c.map((d, u) => h(d, u))
      }
    );
  }
);
js.displayName = "RichText";
const vs = C(
  // Base styles for wrapper
  [
    "relative flex flex-col w-full box-border",
    "bg-[var(--sinch-comp-textarea-color-default-background-initial)]",
    "rounded-[var(--sinch-comp-textarea-shape-radius)]",
    "overflow-hidden"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), ws = C(
  // Base styles for the editable area
  [
    "w-full px-3 py-2 box-border",
    "bg-transparent outline-none border-none",
    "whitespace-pre-wrap break-words",
    "[font:var(--sinch-comp-textarea-font-input)]",
    "text-[var(--sinch-comp-textarea-color-default-text-initial)]",
    "min-h-[2.5em]"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), xs = C(
  // Base styles for the border overlay
  [
    "absolute inset-0 pointer-events-none",
    "border border-[var(--sinch-comp-textarea-color-default-border-initial)]",
    "rounded-[var(--sinch-comp-textarea-shape-radius)]",
    "transition-colors"
  ],
  {
    variants: {
      isFocused: {
        true: "border-[var(--sinch-comp-textarea-color-default-border-focus)] border-2",
        false: ""
      },
      isInvalid: {
        true: "border-[var(--sinch-comp-textarea-color-invalid-border-initial)]",
        false: ""
      },
      isDisabled: {
        true: "border-[var(--sinch-comp-textarea-color-disabled-border-initial)]",
        false: ""
      }
    },
    compoundVariants: [
      {
        isFocused: !0,
        isInvalid: !0,
        className: "border-[var(--sinch-comp-textarea-color-default-border-focus)]"
      },
      {
        isDisabled: !0,
        className: "border-[var(--sinch-comp-textarea-color-disabled-border-initial)]"
      }
    ],
    defaultVariants: {
      isFocused: !1,
      isInvalid: !1,
      isDisabled: !1
    }
  }
), ys = R(
  ({
    className: o,
    value: e,
    defaultValue: n,
    placeholder: t,
    invalid: a = !1,
    disabled: i = !1,
    rows: s,
    chipColor: r,
    chipIcon: m,
    chipResolver: c,
    "aria-label": b,
    topContent: h,
    bottomContent: d,
    onChange: u,
    onFocus: g,
    onBlur: v,
    onSelectionChange: N,
    ...I
  }, V) => {
    const [z, y] = U(n ?? ""), [w, j] = U(!1), k = Y(null), M = e !== void 0, T = M ? e : z, P = J(() => Nn(T), [T]), B = f(() => {
      const A = k.current;
      if (A === null)
        return "";
      let G = A.innerHTML;
      return G = G.replace(/<br\s*\/?>/gi, `
`), G = G.replace(/<\/p>\s*<p[^>]*>/gi, `

`), G = G.replace(/<\/?p[^>]*>/gi, ""), G = G.replace(/<strong>([^<]*)<\/strong>/gi, "**$1**"), G = G.replace(/<b>([^<]*)<\/b>/gi, "**$1**"), G = G.replace(/<em>([^<]*)<\/em>/gi, "*$1*"), G = G.replace(/<i>([^<]*)<\/i>/gi, "*$1*"), G = G.replace(/<del>([^<]*)<\/del>/gi, "~~$1~~"), G = G.replace(/<s>([^<]*)<\/s>/gi, "~~$1~~"), G = G.replace(/<code>([^<]*)<\/code>/gi, "`$1`"), G = G.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, "[$2]($1)"), G = G.replace(/<span[^>]*data-chip[^>]*>([^<]*)<\/span>/gi, "{{$1}}"), G = G.replace(/<[^>]+>/g, ""), G = G.replace(/&nbsp;/g, " "), G = G.replace(/&lt;/g, "<"), G = G.replace(/&gt;/g, ">"), G = G.replace(/&amp;/g, "&"), G.trim();
    }, []);
    X(() => {
      const A = k.current;
      if (A === null || document.activeElement === A)
        return;
      B() !== T && (A.innerHTML = Ns(P, r, m, c));
    }, [T, P, r, m, c, B]);
    const D = f(() => {
      const A = B();
      M || y(A), u == null || u(A);
    }, [M, u, B]), x = f(() => {
      j(!0), g == null || g();
    }, [g]), E = f(() => {
      j(!1), v == null || v();
      const A = B();
      A !== T && (M || y(A), u == null || u(A));
    }, [M, v, u, B, T]), S = f((A) => {
      if (i) {
        A.preventDefault();
        return;
      }
      if (A.metaKey || A.ctrlKey) {
        switch (A.key.toLowerCase()) {
          case "b":
            A.preventDefault(), document.execCommand("bold"), D();
            break;
          case "i":
            A.preventDefault(), document.execCommand("italic"), D();
            break;
        }
        if (A.shiftKey)
          switch (A.key.toLowerCase()) {
            case "x":
              A.preventDefault(), document.execCommand("strikeThrough"), D();
              break;
          }
      }
    }, [i, D]), F = f((A) => {
      A.preventDefault();
      const ne = A.clipboardData.getData("text/plain");
      document.execCommand("insertText", !1, ne), D();
    }, [D]);
    Fe(V, () => ({
      focus: () => {
        var A;
        return (A = k.current) == null ? void 0 : A.focus();
      },
      blur: () => {
        var A;
        return (A = k.current) == null ? void 0 : A.blur();
      },
      insertText: (A) => {
        var ne;
        (ne = k.current) == null || ne.focus(), document.execCommand("insertText", !1, A), D();
      },
      insertLink: (A, ne) => {
        var G;
        (G = k.current) == null || G.focus(), document.execCommand("insertHTML", !1, `<a href="${ne}">${A}</a>`), D();
      },
      insertChip: (A) => {
        var G;
        (G = k.current) == null || G.focus();
        const ne = `<span data-chip contenteditable="false">${A}</span>&nbsp;`;
        document.execCommand("insertHTML", !1, ne), D();
      },
      formatBold: () => {
        var A;
        (A = k.current) == null || A.focus(), document.execCommand("bold"), D();
      },
      formatItalic: () => {
        var A;
        (A = k.current) == null || A.focus(), document.execCommand("italic"), D();
      },
      formatStrikethrough: () => {
        var A;
        (A = k.current) == null || A.focus(), document.execCommand("strikeThrough"), D();
      },
      formatCodeTag: () => {
        var ne;
        (ne = k.current) == null || ne.focus();
        const A = window.getSelection();
        if (A !== null && A.rangeCount > 0) {
          const me = A.getRangeAt(0).toString();
          me.length > 0 && (document.execCommand("insertHTML", !1, `<code>${me}</code>`), D());
        }
      },
      formatOrderedList: () => {
        var A;
        (A = k.current) == null || A.focus(), document.execCommand("insertOrderedList"), D();
      },
      formatUnorderedList: () => {
        var A;
        (A = k.current) == null || A.focus(), document.execCommand("insertUnorderedList"), D();
      },
      getCaretRect: () => {
        const A = window.getSelection();
        return A === null || A.rangeCount === 0 ? null : A.getRangeAt(0).getBoundingClientRect();
      }
    }), [D]);
    const $ = h !== void 0, H = d !== void 0, Z = T === "", _ = s !== void 0 && s > 0 ? `${s * 1.5}em` : void 0;
    return /* @__PURE__ */ L(
      "div",
      {
        className: p(vs({}), o),
        ...I,
        children: [
          $ && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 px-1 pt-1 pb-0", children: h }),
          /* @__PURE__ */ L("div", { className: "relative px-[10px] py-2 box-border", children: [
            /* @__PURE__ */ l(
              "div",
              {
                ref: k,
                role: "textbox",
                "aria-multiline": "true",
                "aria-label": b,
                "aria-placeholder": t,
                "aria-invalid": a,
                contentEditable: !i,
                suppressContentEditableWarning: !0,
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: !1,
                className: p(
                  ws({}),
                  i && "text-[var(--sinch-comp-textarea-color-disabled-text-initial)] cursor-not-allowed",
                  // Inline styles for formatting
                  "[&_b]:font-bold [&_strong]:font-bold",
                  "[&_i]:italic [&_em]:italic",
                  "[&_s]:line-through [&_del]:line-through",
                  "[&_code]:[font:var(--sinch-comp-code-tag-font-text)]",
                  "[&_code]:bg-[var(--sinch-comp-code-tag-color-default-background-initial)]",
                  "[&_code]:border [&_code]:border-[var(--sinch-comp-code-tag-color-default-border-initial)]",
                  "[&_code]:px-[0.25em] [&_code]:rounded-[var(--sinch-comp-code-tag-shape-radius)]",
                  "[&_a]:text-[var(--sinch-comp-link-color-default-text-initial)]",
                  "[&_a]:underline",
                  "[&_[data-chip]]:inline-flex [&_[data-chip]]:items-center [&_[data-chip]]:align-middle",
                  "[&_[data-chip]]:h-[var(--sinch-comp-chip-size-container-m)]",
                  "[&_[data-chip]]:px-[9px] [&_[data-chip]]:gap-1",
                  "[&_[data-chip]]:rounded-[var(--sinch-comp-chip-shape-radius)]",
                  "[&_[data-chip]]:bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]",
                  "[&_[data-chip]]:text-[var(--sinch-comp-chip-color-neutral-default-foreground-initial)]",
                  "[&_[data-chip]]:[font:var(--sinch-comp-chip-font-size-m-label)]",
                  "[&_[data-chip]]:select-none"
                ),
                style: { minHeight: _ },
                onInput: D,
                onFocus: x,
                onBlur: E,
                onKeyDown: S,
                onPaste: F
              }
            ),
            Z && t !== void 0 && /* @__PURE__ */ l(
              "div",
              {
                className: p(
                  "absolute left-0 top-0 px-3 py-2",
                  "[font:var(--sinch-comp-textarea-font-input)]",
                  "text-[var(--sinch-comp-textarea-color-default-text-placeholder)]",
                  "pointer-events-none select-none"
                ),
                children: t
              }
            )
          ] }),
          /* @__PURE__ */ l(
            "div",
            {
              className: p(
                xs({
                  isFocused: w,
                  isInvalid: a && !w,
                  isDisabled: i
                })
              )
            }
          ),
          H && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 px-1 pt-0 pb-1", children: d })
        ]
      }
    );
  }
);
ys.displayName = "RichTextarea";
function Ns(o, e, n, t) {
  const a = (i) => {
    var s, r, m, c, b, h, d;
    switch (i.type) {
      case "text":
        return Le(i.content ?? "");
      case "bold":
        return `<b>${((s = i.children) == null ? void 0 : s.map(a).join("")) ?? ""}</b>`;
      case "italic":
        return `<i>${((r = i.children) == null ? void 0 : r.map(a).join("")) ?? ""}</i>`;
      case "strikethrough":
        return `<s>${((m = i.children) == null ? void 0 : m.map(a).join("")) ?? ""}</s>`;
      case "code":
        return `<code>${Le(i.content ?? "")}</code>`;
      case "link":
        return `<a href="${Le(i.href ?? "")}">${Le(i.content ?? "")}</a>`;
      case "chip": {
        const u = t == null ? void 0 : t(i.content ?? ""), g = (u == null ? void 0 : u.color) ?? e;
        let v = "";
        return g !== void 0 && (v = ` style="background-color:var(--sinch-comp-tag-color-${g}-background);color:var(--sinch-comp-tag-color-${g}-foreground)"`), `<span data-chip contenteditable="false"${v}>${Le(i.content ?? "")}</span>`;
      }
      case "emoji":
        return i.content ?? "";
      case "linebreak":
        return "<br>";
      case "paragraph":
        return `<p>${((c = i.children) == null ? void 0 : c.map(a).join("")) ?? ""}</p>`;
      case "list":
        return i.ordered === !0 ? `<ol>${((b = i.children) == null ? void 0 : b.map(a).join("")) ?? ""}</ol>` : `<ul>${((h = i.children) == null ? void 0 : h.map(a).join("")) ?? ""}</ul>`;
      case "listItem":
        return `<li>${((d = i.children) == null ? void 0 : d.map(a).join("")) ?? ""}</li>`;
      default:
        return "";
    }
  };
  return o.map(a).join("");
}
function Le(o) {
  return o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const Vs = C(
  // Base styles
  [
    "inline-flex items-center",
    "h-[var(--sinch-comp-chip-size-container-m)]",
    "px-[5px] pl-[9px] gap-1",
    "rounded-[var(--sinch-comp-chip-shape-radius)]",
    "bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]",
    "text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]",
    "[font:var(--sinch-comp-chip-font-size-m-label)]",
    "select-none",
    "outline-none",
    "align-middle"
  ],
  {
    variants: {
      readonly: {
        true: "pr-[9px]",
        false: "pr-[5px]"
      }
    },
    defaultVariants: {
      readonly: !1
    }
  }
), zs = () => /* @__PURE__ */ l(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.354-9.354a.5.5 0 0 1 0 .708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293l1.646-1.647a.5.5 0 0 1 .708 0Z"
      }
    )
  }
), Is = R(
  ({
    className: o,
    text: e,
    readonly: n = !1,
    color: t,
    icon: a,
    onClick: i,
    onRemove: s,
    style: r,
    ...m
  }, c) => {
    const b = {};
    t !== void 0 && t !== "default" && (b.backgroundColor = `var(--sinch-comp-tag-color-${t}-background)`, b.color = `var(--sinch-comp-tag-color-${t}-foreground)`, b["--sinch-global-color-icon"] = `var(--sinch-comp-tag-color-${t}-foreground)`);
    const h = f((u) => {
      u.stopPropagation(), s == null || s(u);
    }, [s]), d = f((u) => {
      u.target.closest("[data-close-icon]") === null && (i == null || i(u));
    }, [i]);
    return /* @__PURE__ */ L(
      "span",
      {
        ref: c,
        role: "button",
        "aria-label": e,
        contentEditable: !1,
        className: p(
          Vs({ readonly: n }),
          o
        ),
        style: { ...b, ...r },
        onClick: d,
        ...m,
        children: [
          a !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: "w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)] flex items-center justify-center",
              children: a
            }
          ),
          /* @__PURE__ */ l("span", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap", children: e }),
          n !== !0 && /* @__PURE__ */ l(
            "span",
            {
              "data-close-icon": !0,
              className: "cursor-pointer flex items-center justify-center",
              onClick: h,
              role: "button",
              "aria-label": `Remove ${e}`,
              children: /* @__PURE__ */ l(zs, {})
            }
          )
        ]
      }
    );
  }
);
Is.displayName = "RichTextareaChip";
const Cs = 216 / 2, Vn = 30, zn = 26, In = 26, Xe = Cs - Vn, Qe = Xe - zn, Cn = Qe - In, Ms = Qe, Ds = Cn, Ts = Xe, Oo = (o) => {
  if (o === "" || o === null || o === void 0)
    return { hours: 0, minutes: 0 };
  const e = o.split(":"), n = parseInt(e[0] ?? "00"), t = parseInt(e[1] ?? "00");
  return isNaN(n) || n > 23 || n < 0 ? { hours: 0, minutes: 0 } : isNaN(t) || t > 59 || t < 0 ? { hours: 0, minutes: 0 } : { hours: n, minutes: t };
}, Re = (o) => o.toString().padStart(2, "0"), Lo = (o, e) => `${Re(o)}:${Re(e)}:00`, Ss = (o, e) => e ? Re(o) : o === 0 || o === 12 ? "12" : Re(o % 12), Es = (o) => o === 0 ? "12" : o === 12 ? "24" : String(o), Mn = (o) => Re(o), As = (o, e) => e ? o === 0 ? 12 : o === 12 ? 0 : o : o % 12, Po = (o, e) => {
  const t = (360 - (o % 360 - e)) % 360;
  return t > 180 ? o - 360 + t : o + t;
}, Os = C(
  // Base styles
  "block outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), Ro = ({ hour: o, x: e, y: n, isSelected: t, onClick: a }) => {
  const i = Es(o), s = o >= 12 && o !== 12 || o === 0, r = (m) => {
    (m.key === "Enter" || m.key === " ") && (m.preventDefault(), a());
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: p(
        "absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto",
        "top-[calc(50%-14px)] left-[calc(50%-14px)]",
        "leading-7",
        s ? [
          "font-[var(--sinch-comp-time-picker-digit-font-default-h24)]",
          t ? "font-[var(--sinch-comp-time-picker-digit-font-checked-h24)] text-[var(--sinch-comp-time-picker-digit-color-checked-h24-initial)]" : "text-[var(--sinch-comp-time-picker-digit-color-default-h24-initial)]"
        ] : [
          "font-[var(--sinch-comp-time-picker-digit-font-default-h12)]",
          t ? "font-[var(--sinch-comp-time-picker-digit-font-checked-h12)] text-[var(--sinch-comp-time-picker-digit-color-checked-h12-default)]" : "text-[var(--sinch-comp-time-picker-digit-color-default-h12-initial)]"
        ]
      ),
      style: { transform: `translate(${e}px, ${n}px)` },
      role: "button",
      tabIndex: -1,
      "aria-label": `${i} o'clock`,
      onClick: (m) => {
        m.stopPropagation(), a();
      },
      onKeyDown: r,
      children: i
    }
  );
}, Ls = ({ minute: o, x: e, y: n, isSelected: t, onClick: a }) => {
  const i = (s) => {
    (s.key === "Enter" || s.key === " ") && (s.preventDefault(), a());
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: p(
        "absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto",
        "top-[calc(50%-14px)] left-[calc(50%-14px)]",
        "leading-7",
        "font-[var(--sinch-comp-time-picker-digit-font-default-minutes)]",
        t ? "font-[var(--sinch-comp-time-picker-digit-font-checked-minutes)] text-[var(--sinch-comp-time-picker-digit-color-checked-minute-initial)]" : "text-[var(--sinch-comp-time-picker-digit-color-default-minute-initial)]"
      ),
      style: { transform: `translate(${e}px, ${n}px)` },
      role: "button",
      tabIndex: -1,
      "aria-label": `${o} minutes`,
      onClick: (s) => {
        s.stopPropagation(), a();
      },
      onKeyDown: i,
      children: Mn(o)
    }
  );
}, Ps = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "00:00:00",
    ampm: t = !1,
    "aria-label": a,
    submitAriaLabel: i = "Submit",
    clearable: s = !1,
    onClear: r,
    onChange: m,
    ...c
  }, b) => {
    const h = Oo(e ?? n), [d, u] = U(h.hours), [g, v] = U(h.minutes), [N, I] = U(0), [V, z] = U(0), y = Y(null), w = Y(null), j = e !== void 0;
    X(() => {
      if (j) {
        const O = Oo(e);
        u(O.hours), v(O.minutes);
      }
    }, [j, e]), X(() => {
      const O = d % 12, W = Po(N, O * 30);
      I(W);
    }, [d]), X(() => {
      const O = Po(V, g * 6);
      z(O);
    }, [g]);
    const k = !t, M = Xe + Vn / 2, T = Qe + zn / 2, P = Cn + In / 2, B = J(() => Array.from({ length: 12 }, (O, W) => {
      const Q = Math.PI / 6 * (W - 3), ae = Math.cos(Q) * T, ie = Math.sin(Q) * T;
      return { hour: W, x: ae, y: ie };
    }), [T]), D = J(() => Array.from({ length: 12 }, (O, W) => {
      const Q = W + 12, ae = Math.PI / 6 * (W - 3), ie = Math.cos(ae) * P, le = Math.sin(ae) * P;
      return { hour: Q, x: ie, y: le };
    }), [P]), x = J(() => Array.from({ length: 12 }, (O, W) => {
      const Q = W * 5, ae = Math.PI / 30 * (Q - 15), ie = Math.cos(ae) * M, le = Math.sin(ae) * M;
      return { minute: Q, x: ie, y: le };
    }), [M]), E = As(d, k), S = f((O) => {
      u(O);
    }, []), F = f((O) => {
      v(O);
    }, []), $ = f((O) => {
      const W = O.currentTarget.getBoundingClientRect(), Q = W.width / 2, ae = W.height / 2, ie = O.clientX - W.left, le = W.height - (O.clientY - W.top), ce = ie - Q, q = le - ae, ee = Math.sqrt(ce * ce + q * q), de = ce / ee;
      let pe = (Math.acos(de * (q < 0 ? -1 : 1)) * (180 / Math.PI) - 90 - 360) % 360 * -1;
      q < 0 && (pe += 180);
      const je = ee > Xe ? 0 : ee > Qe ? 1 : 2, io = je > 0, ze = je > 1;
      if (io) {
        const Ee = Math.round(pe / 30) % 12;
        if (k)
          u(ze ? Ee === 0 ? 0 : Ee + 12 : Ee === 0 ? 12 : Ee);
        else {
          const Dn = d >= 12 ? 12 : 0;
          u(Ee + Dn);
        }
      } else
        v(Math.round(pe / 6) % 60);
    }, [k, d]), H = f((O) => {
      O === "am" && d >= 12 ? u(d - 12) : O === "pm" && d < 12 && u(d + 12);
    }, [d]), Z = f(() => {
      const O = Lo(d, g);
      m == null || m(O);
    }, [d, g, m]), _ = f(() => {
      u(0), v(0), r == null || r(), m == null || m("00:00:00");
    }, [r, m]), A = f((O) => {
      switch (O.key) {
        case "ArrowUp":
          O.preventDefault(), u((W) => (W + 1) % 24);
          break;
        case "ArrowDown":
          O.preventDefault(), u((W) => (W + 23) % 24);
          break;
      }
    }, []), ne = f((O) => {
      switch (O.key) {
        case "ArrowUp":
          O.preventDefault(), v((W) => (W + 1) % 60);
          break;
        case "ArrowDown":
          O.preventDefault(), v((W) => (W + 59) % 60);
          break;
      }
    }, []), G = k && (d <= 0 || d > 12) ? Ds : Ms, me = g % 5 === 0, he = d >= 0 && d < 12 ? "am" : "pm";
    return /* @__PURE__ */ l(
      "div",
      {
        ref: b,
        className: p(Os(), o),
        "aria-label": a,
        "data-value": Lo(d, g),
        ...c,
        children: /* @__PURE__ */ L("div", { className: "flex flex-col w-[var(--sinch-comp-time-picker-size-container-width,248px)] p-4 box-border gap-4", children: [
          /* @__PURE__ */ L(
            "div",
            {
              className: "relative w-full h-12 select-none",
              style: {
                font: "var(--sinch-comp-time-picker-header-font)",
                lineHeight: "48px",
                color: "var(--sinch-comp-time-picker-header-color-default-text-initial)"
              },
              children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "absolute p-0 px-1 w-[50px] outline-none right-[calc(50%+8px)] text-right",
                    role: "meter",
                    "aria-valuemin": 0,
                    "aria-valuemax": k ? 23 : 12,
                    "aria-valuenow": d,
                    "aria-valuetext": String(d),
                    children: /* @__PURE__ */ l("span", { children: Ss(d, k) })
                  }
                ),
                /* @__PURE__ */ l("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: ":" }),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: "absolute p-0 px-1 w-[50px] outline-none left-[calc(50%+8px)]",
                    role: "meter",
                    "aria-valuemin": 0,
                    "aria-valuemax": 59,
                    "aria-valuenow": g,
                    "aria-valuetext": String(g),
                    children: /* @__PURE__ */ l("span", { children: Mn(g) })
                  }
                ),
                /* @__PURE__ */ l(
                  re,
                  {
                    size: "s",
                    "aria-label": i,
                    className: "absolute right-0 top-1/2 -translate-y-1/2",
                    onClick: Z,
                    icon: /* @__PURE__ */ l(
                      oe,
                      {
                        name: "fa-check",
                        iconsVersion: "2",
                        size: "sm",
                        style: {
                          color: "var(--sinch-comp-time-picker-header-color-default-icon-initial)"
                        }
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ L(
            "div",
            {
              className: "relative w-[var(--sinch-comp-time-picker-size-clock-face,216px)] h-[var(--sinch-comp-time-picker-size-clock-face,216px)] rounded-full box-border cursor-pointer",
              style: {
                border: "2px solid var(--sinch-comp-time-picker-watch-face-color-default-border-initial)",
                backgroundColor: "var(--sinch-comp-time-picker-watch-face-color-default-background-initial)",
                boxShadow: "inset 0 1px 3px var(--sinch-comp-time-picker-watch-face-color-default-shadow-inner, rgba(0,0,0,0.06))"
              },
              role: "group",
              "aria-label": "Time picker clock face",
              onClick: $,
              children: [
                /* @__PURE__ */ L("div", { className: "absolute inset-0 rounded-full pointer-events-none select-none", children: [
                  B.map(({ hour: O, x: W, y: Q }) => /* @__PURE__ */ l(
                    Ro,
                    {
                      hour: O,
                      x: W,
                      y: Q,
                      is24Hour: !1,
                      isSelected: k ? E === O && d > 0 && d <= 12 : E === O,
                      onClick: () => S(O)
                    },
                    `h12-${O}`
                  )),
                  k && D.map(({ hour: O, x: W, y: Q }) => /* @__PURE__ */ l(
                    Ro,
                    {
                      hour: O,
                      x: W,
                      y: Q,
                      is24Hour: !0,
                      isSelected: E === O,
                      onClick: () => S(O)
                    },
                    `h24-${O}`
                  ))
                ] }),
                /* @__PURE__ */ l("div", { className: "absolute inset-0 rounded-full pointer-events-none select-none", children: x.map(({ minute: O, x: W, y: Q }) => /* @__PURE__ */ l(
                  Ls,
                  {
                    minute: O,
                    x: W,
                    y: Q,
                    isSelected: g === O,
                    onClick: () => F(O)
                  },
                  `m-${O}`
                )) }),
                /* @__PURE__ */ L("div", { className: "absolute inset-0 cursor-pointer rounded-full", children: [
                  /* @__PURE__ */ l(
                    "div",
                    {
                      ref: y,
                      className: p(
                        "absolute w-1 rounded-sm z-[2] outline-none",
                        "left-[calc(50%-2px)] bottom-1/2",
                        "origin-bottom",
                        "transition-[transform,height] duration-[250ms] ease-in-out",
                        "motion-reduce:transition-none",
                        "focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"
                      ),
                      style: {
                        height: `${G}px`,
                        transform: `rotate(${N}deg)`,
                        backgroundColor: "var(--sinch-comp-time-picker-needle-color-default-background-initial)"
                      },
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": "Hour selector",
                      "aria-valuemin": 0,
                      "aria-valuemax": k ? 23 : 12,
                      "aria-valuenow": d,
                      "aria-valuetext": `${d} o'clock`,
                      onKeyDown: A
                    }
                  ),
                  /* @__PURE__ */ l(
                    "div",
                    {
                      ref: w,
                      className: p(
                        "absolute w-0.5 rounded-[1px] z-[2] outline-none",
                        "left-[calc(50%-1px)] bottom-1/2",
                        "origin-bottom",
                        "transition-[transform,height] duration-[250ms] ease-in-out",
                        "motion-reduce:transition-none",
                        "focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"
                      ),
                      style: {
                        height: `${Ts}px`,
                        transform: `rotate(${V}deg)`,
                        backgroundColor: "var(--sinch-comp-time-picker-needle-color-default-background-initial)"
                      },
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": "Minute selector",
                      "aria-valuemin": 0,
                      "aria-valuemax": 59,
                      "aria-valuenow": g,
                      "aria-valuetext": `${g} minutes`,
                      onKeyDown: ne,
                      children: !me && /* @__PURE__ */ l(
                        "div",
                        {
                          className: "absolute w-1 h-1 rounded-full -left-[1px] -top-4",
                          style: {
                            backgroundColor: "var(--sinch-comp-time-picker-digit-color-checked-minute-initial)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ l(
                    "div",
                    {
                      className: "absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2",
                      style: {
                        backgroundColor: "var(--sinch-comp-time-picker-needle-color-default-background-initial)"
                      }
                    }
                  )
                ] })
              ]
            }
          ),
          t && /* @__PURE__ */ l("div", { className: "flex justify-center w-full h-8", children: /* @__PURE__ */ L(
            wo,
            {
              value: he,
              "aria-label": "AM/PM selection",
              onChange: H,
              children: [
                /* @__PURE__ */ l(
                  Ye,
                  {
                    value: "am",
                    text: "AM",
                    "aria-label": "AM",
                    isFirst: !0
                  }
                ),
                /* @__PURE__ */ l(
                  Ye,
                  {
                    value: "pm",
                    text: "PM",
                    "aria-label": "PM",
                    isLast: !0
                  }
                )
              ]
            }
          ) }),
          s && (d !== 0 || g !== 0) && /* @__PURE__ */ l("div", { className: "flex justify-end px-4 pb-2", children: /* @__PURE__ */ l(
            re,
            {
              size: "s",
              variant: "subtle-secondary",
              text: "Clear",
              "aria-label": "Clear selected time",
              onClick: _
            }
          ) })
        ] })
      }
    );
  }
);
Ps.displayName = "TimePicker";
const Ge = 7, Fo = (o) => o.toString().padStart(2, "0"), Rs = (o) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), 1)), t = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth() + 1, 0)), a = n.getUTCDay(), i = t.getUTCDay(), s = t.getUTCDate(), r = (a - 1 + Ge) % Ge, m = (Ge - 1 - i + 1) % Ge, c = [];
  let b = [];
  for (let h = 1 - r; h <= s + m + 1; h++) {
    if (h <= 0 || h > s)
      b.push(null);
    else {
      const d = new Date(o);
      d.setUTCDate(h), b.push(d);
    }
    b.length === 7 && (c.push(b), b = []);
  }
  return c;
}, ro = (o) => `${o.getUTCFullYear()}-${Fo(o.getUTCMonth() + 1)}-${Fo(o.getUTCDate())}`, Ie = (o) => {
  if (o === "" || o === null || o === void 0) return null;
  const e = /* @__PURE__ */ new Date(`${o.substring(0, 10)}T00:00:00Z`);
  return isNaN(e.getTime()) ? null : e;
}, $o = () => {
  const o = /* @__PURE__ */ new Date();
  return new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()));
}, Fs = (o) => {
  const e = new Intl.DateTimeFormat(o, { weekday: "narrow", timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7].map((n) => {
    const t = new Date(Date.UTC(2018, 0, n));
    return e.format(t);
  });
}, $s = (o) => {
  const e = new Intl.DateTimeFormat(o, { month: "short", timeZone: "UTC" });
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => {
    const t = new Date(Date.UTC(2018, n, 1));
    return e.format(t);
  });
}, ge = (o, e) => o.getTime() - e.getTime(), xe = (o, e) => e === null ? !1 : ge(o, e) === 0, mo = (o, e, n) => e === null || n === null ? !1 : ge(o, e) >= 0 && ge(n, o) >= 0, co = (o) => ge(o[0], o[1]) > 0 ? [o[1], o[0]] : o, _s = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), 0));
  return ge(n, e) >= 0;
}, Us = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth() + 1, 1));
  return ge(e, n) >= 0;
}, Hs = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear() + 1, 0, 1));
  return ge(e, n) >= 0;
}, Bs = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), 0, 0));
  return ge(n, e) >= 0;
}, Te = (o, e, n) => {
  const t = new Date(o.getTime());
  return ge(t, e) < 0 && t.setTime(e.getTime()), ge(t, n) > 0 && t.setTime(n.getTime()), t;
}, Gs = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), a = o.getUTCFullYear();
  let i = t + 1, s = a;
  i > 11 && (i = 0, s++);
  const m = new Date(Date.UTC(s, i + 1, 0)).getUTCDate(), c = Math.min(n, m), b = new Date(Date.UTC(s, i, c));
  return Te(b, o, e);
}, Ws = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), a = o.getUTCFullYear();
  let i = t - 1, s = a;
  i < 0 && (i = 11, s--);
  const m = new Date(Date.UTC(s, i + 1, 0)).getUTCDate(), c = Math.min(n, m), b = new Date(Date.UTC(s, i, c));
  return Te(b, e, o);
}, Zs = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), i = o.getUTCFullYear() + 1;
  let s = n;
  t === 1 && n === 29 && (new Date(Date.UTC(i, 1, 29)).getUTCDate() === 29 || (s = 28));
  const r = new Date(Date.UTC(i, t, s));
  return Te(r, o, e);
}, qs = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), i = o.getUTCFullYear() - 1;
  let s = n;
  t === 1 && n === 29 && (new Date(Date.UTC(i, 1, 29)).getUTCDate() === 29 || (s = 28));
  const r = new Date(Date.UTC(i, t, s));
  return Te(r, e, o);
}, Ys = (o) => o.join(","), Ks = (o) => o.split(",").filter(Boolean), Js = R(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    min: t = "1900-01-01",
    max: a = "2100-12-31",
    locale: i = "en-US",
    range: s = !1,
    clearable: r = !1,
    onClear: m,
    onChange: c,
    prevYearAriaLabel: b = "Previous year",
    nextYearAriaLabel: h = "Next year",
    prevMonthAriaLabel: d = "Previous month",
    nextMonthAriaLabel: u = "Next month",
    ...g
  }, v) => {
    const N = e !== void 0, [I, V] = U(n), z = N ? e : I, y = J(() => Ie(t) ?? new Date(Date.UTC(1900, 0, 1)), [t]), w = J(() => Ie(a) ?? new Date(Date.UTC(2100, 11, 31)), [a]), { date1: j, date2: k } = J(() => {
      if (s) {
        const ee = Ks(z);
        if (ee.length === 2) {
          const de = Ie(ee[0]), se = Ie(ee[1]);
          if (de !== null && se !== null) {
            const Ve = co([de, se]);
            return { date1: Ve[0], date2: Ve[1] };
          }
        }
        return ee.length === 1 ? { date1: Ie(ee[0]), date2: null } : { date1: null, date2: null };
      }
      return { date1: Ie(z), date2: null };
    }, [z, s]), [M, T] = U(() => {
      const q = j ?? $o();
      return Te(q, y, w);
    }), [P, B] = U(null), [D, x] = U(null);
    X(() => {
      j !== null && T((q) => j.getUTCMonth() === q.getUTCMonth() && j.getUTCFullYear() === q.getUTCFullYear() ? q : Te(j, y, w));
    }, [j, y, w]);
    const E = J(() => Fs(i), [i]), S = J(() => $s(i), [i]), F = J(() => Rs(M), [M]), $ = J(() => $o(), []), H = f(() => {
      T((q) => Ws(q, y));
    }, [y]), Z = f(() => {
      T((q) => Gs(q, w));
    }, [w]), _ = f(() => {
      T((q) => qs(q, y));
    }, [y]), A = f(() => {
      T((q) => Zs(q, w));
    }, [w]), ne = f(
      (q) => {
        const ee = ro(q);
        if (s)
          if (P !== null) {
            const de = co([P, q]), se = Ys(de.map(ro));
            N || V(se), c == null || c(se), B(null), x(null);
          } else
            B(q);
        else
          N || V(ee), c == null || c(ee);
      },
      [s, P, N, c]
    ), G = f(
      (q) => {
        s && P !== null && x(q);
      },
      [s, P]
    ), me = f(() => {
      x(null);
    }, []), he = f(
      (q) => {
        if (j !== null && k !== null)
          return mo(q, j, k) && !xe(q, j) && !xe(q, k);
        if (P !== null && D !== null) {
          const ee = co([P, D]);
          return mo(q, ee[0], ee[1]) && !xe(q, ee[0]) && !xe(q, ee[1]);
        }
        return !1;
      },
      [j, k, P, D]
    ), O = f(
      (q) => xe(q, j) || xe(q, k) || xe(q, P),
      [j, k, P]
    ), W = f(
      (q) => mo(q, y, w),
      [y, w]
    ), Q = !_s(M, y), ae = !Us(M, w), ie = !Bs(M, y), le = !Hs(M, w), ce = `${S[M.getUTCMonth()]} ${M.getUTCFullYear()}`;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: v,
        className: p("inline-block outline-none", o),
        onMouseLeave: me,
        "data-value": z ?? void 0,
        ...g,
        children: /* @__PURE__ */ L("div", { className: "box-border w-fit p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ L("div", { className: "flex flex-row h-8 items-center", children: [
            /* @__PURE__ */ l(
              re,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(oe, { name: "fa-angles-left", iconsVersion: "2", size: "sm" }),
                disabled: ie,
                onClick: _,
                "aria-label": b,
                className: "-ml-1"
              }
            ),
            /* @__PURE__ */ l(
              re,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(oe, { name: "fa-angle-left", iconsVersion: "2", size: "sm" }),
                disabled: Q,
                onClick: H,
                "aria-label": d
              }
            ),
            /* @__PURE__ */ l(
              "span",
              {
                role: "status",
                className: p(
                  "flex-1 text-center capitalize",
                  "font-[var(--sinch-comp-date-picker-font-header)]",
                  "text-[var(--sinch-comp-date-picker-header-color-default-text-initial)]"
                ),
                "aria-live": "polite",
                children: ce
              }
            ),
            /* @__PURE__ */ l(
              re,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(oe, { name: "fa-angle-right", iconsVersion: "2", size: "sm" }),
                disabled: ae,
                onClick: Z,
                "aria-label": u
              }
            ),
            /* @__PURE__ */ l(
              re,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(oe, { name: "fa-angles-right", iconsVersion: "2", size: "sm" }),
                disabled: le,
                onClick: A,
                "aria-label": h,
                className: "-mr-1"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-row gap-2 h-6", children: E.map((q, ee) => /* @__PURE__ */ l(
            "div",
            {
              className: p(
                "w-6 h-6 leading-6 text-center uppercase select-none",
                "font-[var(--sinch-comp-date-picker-font-weekday)]",
                "text-[var(--sinch-comp-date-picker-weekday-color-default-text-initial)]"
              ),
              children: q
            },
            ee
          )) }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: F.map((q, ee) => q.every((se) => se === null) ? null : /* @__PURE__ */ l("div", { className: "flex flex-row gap-2", children: q.map((se, Ve) => {
            if (se === null)
              return /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  disabled: !0,
                  "aria-hidden": "true",
                  className: p(
                    "w-6 h-6 leading-[22px] text-center box-border",
                    "rounded-[var(--sinch-comp-date-picker-day-shape-radius)]",
                    "font-[var(--sinch-comp-date-picker-font-day)]",
                    "bg-transparent border border-transparent select-none",
                    "cursor-default"
                  )
                },
                Ve
              );
            const pe = xe(se, $), je = O(se), io = he(se), ze = W(se);
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                disabled: !ze,
                onClick: () => ne(se),
                onMouseEnter: () => G(se),
                "data-date": ro(se),
                className: p(
                  "w-6 h-6 leading-[22px] text-center box-border select-none",
                  "rounded-[var(--sinch-comp-date-picker-day-shape-radius)]",
                  "border border-solid",
                  "transition-colors cursor-pointer",
                  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1",
                  "focus-visible:outline-[var(--sinch-comp-date-picker-day-color-default-outline-focus)]",
                  // Default day styles
                  !pe && !je && [
                    "font-[var(--sinch-comp-date-picker-font-day)]",
                    "text-[var(--sinch-comp-date-picker-day-color-default-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-day-color-default-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-day-color-default-border-initial)]",
                    ze && "hover:bg-[var(--sinch-comp-date-picker-day-color-default-background-hover)]"
                  ],
                  // Range highlight
                  io && !pe && !je && [
                    "bg-[var(--sinch-comp-date-picker-day-color-default-range-background)]"
                  ],
                  // Selected styles
                  je && !pe && [
                    "text-[var(--sinch-comp-date-picker-day-color-checked-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-day-color-checked-border-initial)]"
                  ],
                  // Today styles (not selected)
                  pe && !je && [
                    "font-[var(--sinch-comp-date-picker-font-today)]",
                    "text-[var(--sinch-comp-date-picker-today-color-default-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-today-color-default-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-today-color-default-border-initial)]",
                    ze && "hover:bg-[var(--sinch-comp-date-picker-today-color-default-background-hover)]"
                  ],
                  // Today selected styles
                  pe && je && [
                    "font-[var(--sinch-comp-date-picker-font-today)]",
                    "text-[var(--sinch-comp-date-picker-today-color-checked-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-today-color-checked-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-today-color-checked-border-initial)]"
                  ],
                  // Disabled styles
                  !ze && [
                    "cursor-default",
                    pe ? [
                      "text-[var(--sinch-comp-date-picker-today-color-disabled-text-initial)]",
                      "border-[var(--sinch-comp-date-picker-today-color-disabled-border-initial)]"
                    ] : "text-[var(--sinch-comp-date-picker-day-color-disabled-text-initial)]"
                  ]
                ),
                children: se.getUTCDate()
              },
              Ve
            );
          }) }, ee)) }),
          r && z && z.length > 0 && /* @__PURE__ */ l("div", { className: "flex justify-end", children: /* @__PURE__ */ l(
            re,
            {
              size: "s",
              variant: "subtle-secondary",
              text: "Clear",
              "aria-label": "Clear selected date",
              onClick: () => {
                N || V(""), m == null || m(), c == null || c("");
              }
            }
          ) })
        ] })
      }
    );
  }
);
Js.displayName = "DatePicker";
const Xs = C(
  // Base styles for the dialog panel
  [
    "fixed",
    "left-0",
    "right-0",
    "m-auto",
    "flex",
    "flex-col",
    "border-none",
    "outline-none",
    "box-border",
    "bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default,white))]",
    "rounded-[var(--sinch-comp-dialog-shape-radius,12px)]",
    "shadow-[var(--sinch-comp-dialog-shadow,var(--sinch-sys-shadow-overlay-md))]",
    "max-h-[var(--sinch-comp-dialog-max-height,85vh)]",
    "min-w-[320px]",
    "z-50",
    // Animation
    "transition-all",
    "duration-200",
    "ease-out"
  ],
  {
    variants: {
      open: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-95"
      },
      size: {
        sm: "max-w-[384px] w-full",
        md: "max-w-[512px] w-full",
        lg: "max-w-[768px] w-full",
        fullscreen: "max-w-none w-[calc(100vw-48px)] max-h-[calc(100vh-48px)]"
      }
    },
    defaultVariants: {
      open: !1,
      size: "md"
    }
  }
), Qs = C(
  [
    "fixed",
    "inset-0",
    "z-40",
    "bg-[var(--sinch-comp-dialog-color-backdrop,var(--sinch-sys-color-backdrop))]",
    "backdrop-blur-sm",
    "transition-[opacity,backdrop-filter]",
    "duration-200"
  ],
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      }
    },
    defaultVariants: {
      visible: !1
    }
  }
), er = R(
  ({
    className: o,
    children: e,
    open: n = !1,
    size: t = "md",
    caption: a,
    onClose: i,
    onOpenChange: s,
    closeAriaLabel: r = "Close",
    icon: m,
    buttons: c,
    container: b,
    hideCloseButton: h = !1,
    onDialogTransitionStart: d,
    onDialogTransitionEnd: u,
    style: g,
    id: v,
    "aria-label": N,
    ...I
  }, V) => {
    const z = Y(null), [y, w] = U(!1), [j, k] = U(!1), M = Y(null);
    Fe(V, () => z.current), _e(y), X(() => {
      n ? (M.current = document.activeElement, w(!0), requestAnimationFrame(() => {
        k(!0), d == null || d("open");
      })) : y && (k(!1), d == null || d("close"));
    }, [n, y, d]), X(() => {
      if (!n) return;
      const x = (E) => {
        E.key === "Escape" && (E.preventDefault(), E.stopPropagation(), i == null || i("escape"), s == null || s(!1));
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [n, i, s]);
    const T = f(
      (x) => {
        var E;
        x.propertyName === "opacity" && (j ? u == null || u("open") : (u == null || u("close"), w(!1), (E = M.current) == null || E.focus()));
      },
      [j, u]
    ), P = f(
      (x) => {
        x.target === x.currentTarget && (i == null || i("backdrop"), s == null || s(!1));
      },
      [i, s]
    ), B = f(() => {
      i == null || i("close"), s == null || s(!1);
    }, [i, s]);
    if (X(() => {
      if (!n || !z.current) return;
      const x = z.current, E = () => {
        const H = x.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        return Array.from(H).filter(
          (Z) => !Z.closest('[role="dialog"]') || Z.closest('[role="dialog"]') === x
        );
      }, F = E()[0];
      F == null || F.focus();
      const $ = (H) => {
        if (H.key !== "Tab") return;
        const Z = E();
        if (Z.length === 0) return;
        const _ = Z[0], A = Z[Z.length - 1];
        H.shiftKey ? document.activeElement === _ && (H.preventDefault(), A == null || A.focus()) : document.activeElement === A && (H.preventDefault(), _ == null || _.focus());
      };
      return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
    }, [n]), !y && !n) return null;
    const D = /* @__PURE__ */ L(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: p(Qs({ visible: j })),
          onClick: P,
          "aria-hidden": "true",
          "data-testid": "dialog-backdrop"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
          children: /* @__PURE__ */ L(
            "div",
            {
              ref: z,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": N ?? a,
              "aria-labelledby": a ? "dialog-caption" : void 0,
              "aria-describedby": "dialog-content",
              id: v,
              style: g,
              className: p(
                Xs({ open: j, size: t }),
                "pointer-events-auto",
                o
              ),
              onTransitionEnd: T,
              ...I,
              children: [
                /* @__PURE__ */ L(
                  "div",
                  {
                    className: p(
                      "flex flex-row items-start gap-2 px-6 pt-6 pb-4",
                      (e || c) && "border-b border-[var(--sinch-sys-color-border-default,#e5e7eb)]",
                      "[--sinch-global-size-icon:24px]",
                      "[--sinch-global-color-icon:var(--sinch-comp-dialog-color-default-icon-initial)]"
                    ),
                    children: [
                      m && /* @__PURE__ */ l("span", { className: "shrink-0 mt-0.5", children: m }),
                      a && /* @__PURE__ */ l(
                        fo,
                        {
                          type: "m",
                          level: "3",
                          id: "dialog-caption",
                          className: p(
                            "[color:var(--sinch-comp-dialog-color-default-title-initial)]",
                            "[font:var(--sinch-comp-dialog-font-title)]"
                          ),
                          children: a
                        }
                      ),
                      !h && /* @__PURE__ */ l(
                        re,
                        {
                          size: "s",
                          "aria-label": r,
                          onClick: B,
                          className: "ml-auto shrink-0",
                          icon: /* @__PURE__ */ l(oe, { name: "fa-xmark", iconsVersion: "2", size: "sm" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    id: "dialog-content",
                    className: "min-h-0 overflow-auto px-6 py-5",
                    children: e
                  }
                ),
                c && /* @__PURE__ */ l("div", { className: "flex flex-row justify-end gap-3 px-6 pt-4 pb-6 border-t border-[var(--sinch-sys-color-border-default,#e5e7eb)]", children: c })
              ]
            }
          )
        }
      )
    ] });
    return $e(D, b ?? document.body);
  }
);
er.displayName = "Dialog";
const or = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "table",
    {
      ref: t,
      className: p(
        // Base styles matching web component
        "table-auto",
        o
      ),
      ...n,
      children: e
    }
  )
);
or.displayName = "Table";
const nr = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "thead",
    {
      ref: t,
      className: p(o),
      ...n,
      children: e
    }
  )
);
nr.displayName = "TableHead";
const tr = R(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "tbody",
    {
      ref: t,
      className: p(o),
      ...n,
      children: e
    }
  )
);
tr.displayName = "TableBody";
const ir = C(
  // Base styles
  "bg-[var(--sinch-comp-table-color-row-default-background-initial)] hover:bg-[var(--sinch-comp-table-color-row-default-background-hover)]",
  {
    variants: {
      selected: {
        true: "bg-[var(--sinch-comp-table-color-row-checked-background-initial)]",
        false: ""
      }
    },
    defaultVariants: {
      selected: !1
    }
  }
), ar = R(
  ({ className: o, children: e, sticky: n, selected: t, ...a }, i) => /* @__PURE__ */ l(
    "tr",
    {
      ref: i,
      "data-sticky": n || void 0,
      "data-selected": t || void 0,
      className: p(
        ir({ selected: t }),
        // Apply last:border-b-0 on child cells via parent data attribute
        "[&:last-child_td]:border-b-0",
        // Sticky styles for header cells within this row
        n && "[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:bg-[var(--sinch-comp-table-color-row-default-background-sticky)]",
        o
      ),
      ...a,
      children: e
    }
  )
);
ar.displayName = "TableRow";
const lr = C(
  // Base styles
  [
    "border-b border-[var(--sinch-comp-table-color-head-cell-default-border-initial)]",
    "align-middle",
    "text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]"
  ],
  {
    variants: {
      align: {
        start: "",
        center: "",
        end: ""
      },
      fit: {
        // 1px instead of 0 because of Safari
        true: "w-px",
        false: ""
      }
    },
    defaultVariants: {
      align: "start",
      fit: !1
    }
  }
), sr = C(
  // Base wrapper styles
  [
    "relative",
    "flex",
    "items-center",
    "gap-2",
    "w-full",
    "h-full",
    "p-2",
    "box-border"
  ],
  {
    variants: {
      align: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end"
      }
    },
    defaultVariants: {
      align: "start"
    }
  }
), rr = R(
  ({
    className: o,
    children: e,
    text: n,
    align: t = "start",
    fit: a,
    leftContent: i,
    rightContent: s,
    checkboxContent: r,
    tooltipContent: m,
    ...c
  }, b) => {
    const h = n !== void 0 && n !== "", d = e !== void 0;
    return /* @__PURE__ */ l(
      "th",
      {
        ref: b,
        scope: "col",
        className: p(lr({ align: t, fit: a }), o),
        ...c,
        children: /* @__PURE__ */ L("div", { className: p(sr({ align: t })), children: [
          r,
          i,
          h && /* @__PURE__ */ l("span", { className: "min-w-0 shrink text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]", children: n }),
          d && !h && e,
          m,
          s
        ] })
      }
    );
  }
);
rr.displayName = "TableHeadCell";
const mr = C(
  // Base styles
  [
    "border-b border-[var(--sinch-comp-table-color-cell-default-border-initial)]",
    "align-top"
  ],
  {
    variants: {
      align: {
        start: "",
        center: "",
        end: ""
      }
    },
    defaultVariants: {
      align: "start"
    }
  }
), cr = C(
  // Base wrapper styles
  [
    "flex",
    "flex-col",
    "justify-center",
    "min-h-[48px]",
    "box-border",
    "p-2"
  ],
  {
    variants: {
      align: {
        start: "text-start items-start",
        center: "text-center items-center",
        end: "text-end items-end"
      }
    },
    defaultVariants: {
      align: "start"
    }
  }
), dr = R(
  ({ className: o, children: e, align: n = "start", ...t }, a) => /* @__PURE__ */ l(
    "td",
    {
      ref: a,
      className: p(mr({ align: n }), o),
      ...t,
      children: /* @__PURE__ */ l("div", { className: p(cr({ align: n })), children: e })
    }
  )
);
dr.displayName = "TableCell";
export {
  tn as Accordion,
  gr as AccordionGroup,
  an as AccordionItem,
  Tl as ActionMenu,
  Sl as ActionMenuOption,
  Pt as Alert,
  Mt as Avatar,
  yt as Badge,
  re as Button,
  ia as ButtonGroup,
  en as ButtonGroupContext,
  ra as ButtonGroupItem,
  da as Card,
  ua as CardContainer,
  ba as CardTitle,
  Jt as Checkbox,
  Gt as Chip,
  ui as CodeTag,
  No as ColorMenu,
  Nr as ColorMenuCompound,
  Vo as ColorMenuOption,
  yo as ColorSwatch,
  Js as DatePicker,
  er as Dialog,
  Qo as Emoji,
  ks as EmojiPicker,
  Ai as Field,
  sl as FileDrop,
  ml as FilePicker,
  Ra as FileStatus,
  Li as Flag,
  Ui as Grid,
  Hi as GridItem,
  $i as HelpTooltip,
  oe as Icon,
  fi as InlineAlert,
  ko as Input,
  Dt as Link,
  qi as List,
  Yi as ListItem,
  Fi as Pagination,
  as as PersistentOverlay,
  ns as Pop,
  fn as Popover,
  ti as Progress,
  sn as ProgressStepper,
  kr as ProgressStepperGroup,
  rn as ProgressStepperItem,
  Ko as Radio,
  pr as RadioGroup,
  Jo as RadioOption,
  js as RichText,
  ys as RichTextarea,
  Is as RichTextareaChip,
  Fl as SKINTONE_SWATCH_COLORS,
  $l as SWATCH_COLORS,
  ls as SegmentCollapse,
  wo as SegmentedControl,
  jr as SegmentedControlGroup,
  Ye as SegmentedControlOption,
  hn as SegmentedIconControl,
  vr as SegmentedIconControlGroup,
  pn as SegmentedIconControlOption,
  yr as Select,
  xn as SelectButton,
  wn as SelectMenu,
  xo as SelectMenuOption,
  bl as Sheet,
  hl as SheetTitle,
  Gi as Skeleton,
  Zi as SkeletonItem,
  go as Spinner,
  Fa as StopEvents,
  or as Table,
  tr as TableBody,
  dr as TableCell,
  nr as TableHead,
  rr as TableHeadCell,
  ar as TableRow,
  jo as Tabs,
  fr as TabsGroup,
  vo as TabsIconOption,
  dn as TabsOption,
  St as Tag,
  no as Text,
  xi as Textarea,
  Ps as TimePicker,
  fo as Title,
  gn as Toast,
  Nl as ToastManager,
  wr as ToastProvider,
  Ut as Toggle,
  to as Tooltip,
  p as cn,
  _l as getSwatchColorBg,
  Ul as getSwatchColorFg,
  Je as isSwatchColor,
  Nn as parseRichText,
  xr as toast,
  Dl as useActionMenuContext,
  na as useButtonGroupContext,
  wl as useToast
};
