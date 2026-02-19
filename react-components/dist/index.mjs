import { jsxs as A, jsx as l, Fragment as Ne } from "react/jsx-runtime";
import Ue, { forwardRef as P, useMemo as J, useState as F, useCallback as k, useRef as Z, useEffect as X, isValidElement as Ke, cloneElement as ro, createContext as de, useContext as be, useId as mo, Children as He, useImperativeHandle as Le, useReducer as Cn, useLayoutEffect as Ao } from "react";
import { createPortal as Pe } from "react-dom";
function Lo(o) {
  var e, n, t = "";
  if (typeof o == "string" || typeof o == "number") t += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var i = o.length;
    for (e = 0; e < i; e++) o[e] && (n = Lo(o[e])) && (t && (t += " "), t += n);
  } else for (n in o) o[n] && (t && (t += " "), t += n);
  return t;
}
function Po() {
  for (var o, e, n = 0, t = "", i = arguments.length; n < i; n++) (o = arguments[n]) && (e = Lo(o)) && (t && (t += " "), t += e);
  return t;
}
const co = "-", Vn = (o) => {
  const e = zn(o), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: t
  } = o;
  return {
    getClassGroupId: (r) => {
      const s = r.split(co);
      return s[0] === "" && s.length !== 1 && s.shift(), Ro(s, e) || In(r);
    },
    getConflictingClassGroupIds: (r, s) => {
      const m = n[r] || [];
      return s && t[r] ? [...m, ...t[r]] : m;
    }
  };
}, Ro = (o, e) => {
  var r;
  if (o.length === 0)
    return e.classGroupId;
  const n = o[0], t = e.nextPart.get(n), i = t ? Ro(o.slice(1), t) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const a = o.join(co);
  return (r = e.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : r.classGroupId;
}, xo = /^\[(.+)\]$/, In = (o) => {
  if (xo.test(o)) {
    const e = xo.exec(o)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, zn = (o) => {
  const {
    theme: e,
    prefix: n
  } = o, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Tn(Object.entries(o.classGroups), n).forEach(([a, r]) => {
    lo(r, t, a, e);
  }), t;
}, lo = (o, e, n, t) => {
  o.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? e : yo(e, i);
      a.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Dn(i)) {
        lo(i(t), e, n, t);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([a, r]) => {
      lo(r, yo(e, a), n, t);
    });
  });
}, yo = (o, e) => {
  let n = o;
  return e.split(co).forEach((t) => {
    n.nextPart.has(t) || n.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(t);
  }), n;
}, Dn = (o) => o.isThemeGetter, Tn = (o, e) => e ? o.map(([n, t]) => {
  const i = t.map((a) => typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([r, s]) => [e + r, s])) : a);
  return [n, i];
}) : o, Mn = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  const i = (a, r) => {
    n.set(a, r), e++, e > o && (e = 0, t = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let r = n.get(a);
      if (r !== void 0)
        return r;
      if ((r = t.get(a)) !== void 0)
        return i(a, r), r;
    },
    set(a, r) {
      n.has(a) ? n.set(a, r) : i(a, r);
    }
  };
}, $o = "!", Sn = (o) => {
  const {
    separator: e,
    experimentalParseClassName: n
  } = o, t = e.length === 1, i = e[0], a = e.length, r = (s) => {
    const m = [];
    let d = 0, c = 0, u;
    for (let x = 0; x < s.length; x++) {
      let V = s[x];
      if (d === 0) {
        if (V === i && (t || s.slice(x, x + a) === e)) {
          m.push(s.slice(c, x)), c = x + a;
          continue;
        }
        if (V === "/") {
          u = x;
          continue;
        }
      }
      V === "[" ? d++ : V === "]" && d--;
    }
    const b = m.length === 0 ? s : s.substring(c), p = b.startsWith($o), f = p ? b.substring(1) : b, g = u && u > c ? u - c : void 0;
    return {
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: r
  }) : r;
}, On = (o) => {
  if (o.length <= 1)
    return o;
  const e = [];
  let n = [];
  return o.forEach((t) => {
    t[0] === "[" ? (e.push(...n.sort(), t), n = []) : n.push(t);
  }), e.push(...n.sort()), e;
}, En = (o) => ({
  cache: Mn(o.cacheSize),
  parseClassName: Sn(o),
  ...Vn(o)
}), An = /\s+/, Ln = (o, e) => {
  const {
    parseClassName: n,
    getClassGroupId: t,
    getConflictingClassGroupIds: i
  } = e, a = [], r = o.trim().split(An);
  let s = "";
  for (let m = r.length - 1; m >= 0; m -= 1) {
    const d = r[m], {
      modifiers: c,
      hasImportantModifier: u,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = n(d);
    let f = !!p, g = t(f ? b.substring(0, p) : b);
    if (!g) {
      if (!f) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = t(b), !g) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      f = !1;
    }
    const x = On(c).join(":"), V = u ? x + $o : x, I = V + g;
    if (a.includes(I))
      continue;
    a.push(I);
    const N = i(g, f);
    for (let j = 0; j < N.length; ++j) {
      const v = N[j];
      a.push(V + v);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Pn() {
  let o = 0, e, n, t = "";
  for (; o < arguments.length; )
    (e = arguments[o++]) && (n = Fo(e)) && (t && (t += " "), t += n);
  return t;
}
const Fo = (o) => {
  if (typeof o == "string")
    return o;
  let e, n = "";
  for (let t = 0; t < o.length; t++)
    o[t] && (e = Fo(o[t])) && (n && (n += " "), n += e);
  return n;
};
function Rn(o, ...e) {
  let n, t, i, a = r;
  function r(m) {
    const d = e.reduce((c, u) => u(c), o());
    return n = En(d), t = n.cache.get, i = n.cache.set, a = s, s(m);
  }
  function s(m) {
    const d = t(m);
    if (d)
      return d;
    const c = Ln(m, n);
    return i(m, c), c;
  }
  return function() {
    return a(Pn.apply(null, arguments));
  };
}
const ie = (o) => {
  const e = (n) => n[o] || [];
  return e.isThemeGetter = !0, e;
}, _o = /^\[(?:([a-z-]+):)?(.+)\]$/i, $n = /^\d+\/\d+$/, Fn = /* @__PURE__ */ new Set(["px", "full", "screen"]), _n = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Un = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Bn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (o) => Ie(o) || Fn.has(o) || $n.test(o), je = (o) => Te(o, "length", Qn), Ie = (o) => !!o && !Number.isNaN(Number(o)), eo = (o) => Te(o, "number", Ie), Me = (o) => !!o && Number.isInteger(Number(o)), Wn = (o) => o.endsWith("%") && Ie(o.slice(0, -1)), Y = (o) => _o.test(o), ve = (o) => _n.test(o), Zn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), qn = (o) => Te(o, Zn, Uo), Yn = (o) => Te(o, "position", Uo), Kn = /* @__PURE__ */ new Set(["image", "url"]), Jn = (o) => Te(o, Kn, ot), Xn = (o) => Te(o, "", et), Se = () => !0, Te = (o, e, n) => {
  const t = _o.exec(o);
  return t ? t[1] ? typeof e == "string" ? t[1] === e : e.has(t[1]) : n(t[2]) : !1;
}, Qn = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Un.test(o) && !Hn.test(o)
), Uo = () => !1, et = (o) => Bn.test(o), ot = (o) => Gn.test(o), nt = () => {
  const o = ie("colors"), e = ie("spacing"), n = ie("blur"), t = ie("brightness"), i = ie("borderColor"), a = ie("borderRadius"), r = ie("borderSpacing"), s = ie("borderWidth"), m = ie("contrast"), d = ie("grayscale"), c = ie("hueRotate"), u = ie("invert"), b = ie("gap"), p = ie("gradientColorStops"), f = ie("gradientColorStopPositions"), g = ie("inset"), x = ie("margin"), V = ie("opacity"), I = ie("padding"), N = ie("saturate"), j = ie("scale"), v = ie("sepia"), y = ie("skew"), w = ie("space"), T = ie("translate"), z = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", Y, e], C = () => [Y, e], E = () => ["", ke, je], _ = () => ["auto", Ie, Y], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", Y], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [Ie, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Se],
      spacing: [ke, je],
      blur: ["none", "", ve, Y],
      brightness: S(),
      borderColor: [o],
      borderRadius: ["none", "", "full", ve, Y],
      borderSpacing: C(),
      borderWidth: E(),
      contrast: S(),
      grayscale: q(),
      hueRotate: S(),
      invert: q(),
      gap: C(),
      gradientColorStops: [o],
      gradientColorStopPositions: [Wn, je],
      inset: $(),
      margin: $(),
      opacity: S(),
      padding: C(),
      saturate: S(),
      scale: S(),
      sepia: q(),
      skew: S(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Y]
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
        columns: [ve]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...L(), Y]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", Me, Y]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
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
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Me, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Se]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Me, Y]
        }, Y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Se]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Me, Y]
        }, Y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...G()]
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
        content: ["normal", ...G(), "baseline"]
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
        "place-content": [...G(), "baseline"]
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
        p: [I]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [I]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [I]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [I]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [I]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [I]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [I]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [I]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [I]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [w]
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
        "space-y": [w]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [ve]
        }, ve]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ve, je]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", eo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Se]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ie, eo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ke, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
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
        "placeholder-opacity": [V]
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
        "text-opacity": [V]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ke, je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ke, Y]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
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
        content: ["none", Y]
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
        "bg-opacity": [V]
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
        bg: [...L(), Yn]
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
        bg: ["auto", "cover", "contain", qn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jn]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [V]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [V]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: R()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ke, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ke, je]
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
        ring: E()
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
        "ring-opacity": [V]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ke, je]
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
        shadow: ["", "inner", "none", ve, Xn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Se]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "drop-shadow": ["", "none", ve, Y]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [v]
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
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [v]
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
        "border-spacing": [r]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [r]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [r]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: S()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: S()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
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
        scale: [j]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [j]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [j]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Me, Y]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", Y]
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
        stroke: [ke, je, eo]
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
}, tt = /* @__PURE__ */ Rn(nt);
function h(...o) {
  return tt(Po(o));
}
const No = (o) => typeof o == "boolean" ? `${o}` : o === 0 ? "0" : o, Co = Po, D = (o, e) => (n) => {
  var t;
  if ((e == null ? void 0 : e.variants) == null) return Co(o, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = e, r = Object.keys(i).map((d) => {
    const c = n == null ? void 0 : n[d], u = a == null ? void 0 : a[d];
    if (c === null) return null;
    const b = No(c) || No(u);
    return i[d][b];
  }), s = n && Object.entries(n).reduce((d, c) => {
    let [u, b] = c;
    return b === void 0 || (d[u] = b), d;
  }, {}), m = e == null || (t = e.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((d, c) => {
    let { class: u, className: b, ...p } = c;
    return Object.entries(p).every((f) => {
      let [g, x] = f;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === x;
    }) ? [
      ...d,
      u,
      b
    ] : d;
  }, []);
  return Co(o, r, m, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, it = D(
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
), bo = P(
  ({ className: o, size: e = "m", ...n }, t) => {
    const a = {
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
    return /* @__PURE__ */ A(
      "svg",
      {
        ref: t,
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true",
        "aria-label": "Loading",
        fill: "none",
        className: h(it({ size: e }), o),
        viewBox: a.viewBox,
        ...n,
        children: [
          /* @__PURE__ */ l(
            "circle",
            {
              cx: a.center,
              cy: a.center,
              r: a.radius,
              strokeWidth: a.strokeWidth,
              className: "stroke-current opacity-30"
            }
          ),
          /* @__PURE__ */ l(
            "path",
            {
              d: a.path,
              strokeWidth: a.strokeWidth,
              strokeLinecap: "round",
              className: "stroke-current"
            }
          )
        ]
      }
    );
  }
);
bo.displayName = "Spinner";
const at = D(
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
), lt = (o, e) => e === "1" ? "var(--sinch-comp-icon-font-family)" : /^(fa-|(?!fa-))[0-9a-d]/i.test(o) ? "var(--sinch-comp-icon-font-family-zero-to-d)" : /^(fa-|(?!fa-))[e-o]/i.test(o) ? "var(--sinch-comp-icon-font-family-e-to-o)" : /^(fa-|(?!fa-))[p-z]/i.test(o) ? "var(--sinch-comp-icon-font-family-p-to-z)" : "var(--sinch-comp-icon-font-family)", ne = P(
  ({ className: o, name: e, iconsVersion: n = "1", size: t = "md", style: i, ...a }, r) => {
    const s = J(
      () => lt(e, n),
      [e, n]
    );
    return /* @__PURE__ */ l(
      "span",
      {
        ref: r,
        role: "img",
        "aria-label": e,
        className: h(at({ size: t }), o),
        style: {
          fontFamily: s,
          fontWeight: "var(--sinch-comp-icon-font-weight)",
          fontFeatureSettings: "var(--sinch-comp-icon-font-feature-settings)",
          color: "var(--sinch-global-color-icon, var(--sinch-sys-color-text-default))",
          ...i
        },
        ...a,
        children: e
      }
    );
  }
);
ne.displayName = "Icon";
const st = D(
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
), Je = P(
  ({
    className: o,
    children: e,
    type: n = "m",
    inline: t = !1,
    emphasized: i = !1,
    ellipsis: a = !1,
    as: r,
    ...s
  }, m) => /* @__PURE__ */ l(
    r ?? (t ? "span" : "p"),
    {
      ref: m,
      className: h(
        st({ type: n, inline: t, emphasized: i, ellipsis: a }),
        o
      ),
      ...s,
      children: e
    }
  )
);
Je.displayName = "Text";
const rt = D(
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
), mt = D(
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
), ct = D(
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
), uo = P(
  ({
    className: o,
    type: e = "text",
    value: n,
    defaultValue: t,
    placeholder: i,
    size: a = "m",
    invalid: r = !1,
    disabled: s = !1,
    readOnly: m = !1,
    required: d = !1,
    autoComplete: c,
    maxLength: u,
    min: b,
    max: p,
    step: f,
    "aria-label": g,
    icon: x,
    leftAddon: V,
    rightAddon: I,
    onChange: N,
    onFocus: j,
    onBlur: v,
    onKeyDown: y,
    ...w
  }, T) => {
    const [z, O] = F(t ?? ""), [$, C] = F(!1), E = n !== void 0, _ = E ? n : z, L = x !== void 0, R = {
      s: "var(--sinch-comp-input-size-icon-s)",
      m: "var(--sinch-comp-input-size-icon-m)",
      l: "var(--sinch-comp-input-size-icon-l)"
    }[a], U = k(
      (H) => {
        const S = H.target.value;
        E || O(S), N == null || N(S);
      },
      [E, N]
    ), G = k(
      (H) => {
        C(!0), j == null || j(H);
      },
      [j]
    ), q = k(
      (H) => {
        C(!1), v == null || v(H);
      },
      [v]
    );
    return /* @__PURE__ */ A(
      "div",
      {
        className: h(rt({ size: a }), o),
        style: {
          "--sinch-local-icon-size": R
        },
        children: [
          V && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 pl-1", children: V }),
          L && /* @__PURE__ */ l("div", { className: "relative h-full", children: /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "absolute flex items-center left-3 top-0 bottom-0 pointer-events-none",
                s ? "[--sinch-global-color-icon:var(--sinch-comp-input-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-input-color-default-icon-initial)]"
              ),
              style: {
                width: R
              },
              children: x
            }
          ) }),
          /* @__PURE__ */ l("div", { className: "relative flex-1 min-w-0 self-stretch", children: /* @__PURE__ */ l(
            "input",
            {
              ref: T,
              type: e,
              value: _,
              placeholder: i,
              disabled: s,
              readOnly: m,
              required: d,
              autoComplete: c,
              maxLength: u,
              min: b,
              max: p,
              step: f,
              "aria-label": g,
              "aria-invalid": r,
              className: h(mt({ hasIcon: L })),
              onChange: U,
              onFocus: G,
              onBlur: q,
              onKeyDown: y,
              ...w
            }
          ) }),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                ct({
                  size: a,
                  isFocused: $,
                  isInvalid: r && !$,
                  isDisabled: s
                })
              )
            }
          ),
          I && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 pr-1", children: I })
        ]
      }
    );
  }
);
uo.displayName = "Input";
const dt = D(
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
), bt = {
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
}, ut = {
  "subtle-primary": "bg-[var(--sinch-comp-button-color-subtle-primary-toggled-background-initial)]",
  "subtle-secondary": "bg-[var(--sinch-comp-button-color-subtle-secondary-toggled-background-initial)]"
}, me = P(
  ({
    className: o,
    variant: e = "secondary",
    size: n = "m",
    text: t,
    icon: i,
    leftIcon: a,
    rightIcon: r,
    loading: s = !1,
    toggled: m = !1,
    disabled: d = !1,
    formType: c = "button",
    children: u,
    ...b
  }, p) => {
    const f = t !== void 0 || u !== void 0, g = !f && i !== void 0, x = d || s, V = g && e === "secondary" ? "subtle-secondary" : e, I = h(
      dt({ variant: V, size: n, iconOnly: g }),
      // Disabled styles
      x && [
        "cursor-not-allowed",
        "pointer-events-none",
        bt[V]
      ],
      // Toggled state (only for subtle variants when not disabled)
      !x && m && ut[V],
      o
    );
    return /* @__PURE__ */ A(
      "button",
      {
        ref: p,
        type: c,
        disabled: x,
        "aria-pressed": m ? "true" : void 0,
        "aria-busy": s ? "true" : void 0,
        className: I,
        ...b,
        children: [
          s ? /* @__PURE__ */ l(bo, { size: n === "l" ? "m" : "s", className: "shrink-0" }) : a && /* @__PURE__ */ l("span", { className: "shrink-0", children: a }),
          g && !s && /* @__PURE__ */ l("span", { className: "shrink-0", children: i }),
          f && /* @__PURE__ */ l("span", { className: "truncate", children: t ?? u }),
          r && !s && /* @__PURE__ */ l("span", { className: "shrink-0", children: r })
        ]
      }
    );
  }
);
me.displayName = "Button";
const ht = D(
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
), pt = D(
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
), gt = D(
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
), kt = P(
  ({ className: o, children: e, text: n, size: t = "m", mode: i = "square", hidden: a = !1, ...r }, s) => {
    const m = n !== void 0 && n.length > 1;
    return /* @__PURE__ */ A(
      "div",
      {
        ref: s,
        className: h("relative inline-flex flex-col", o),
        ...r,
        children: [
          e,
          !a && /* @__PURE__ */ l("div", { className: h(ht({ size: t, mode: i })), children: /* @__PURE__ */ l("div", { className: h(pt({ size: t, long: m })), children: /* @__PURE__ */ l("span", { className: h(gt({ size: t })), children: n }) }) })
        ]
      }
    );
  }
);
kt.displayName = "Badge";
const ft = D(
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
), jt = D(
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
), vt = D(
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
), wt = D(
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
), xt = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-0 top-0 w-full h-full fill-[var(--sinch-comp-avatar-container-color-default-foreground)]",
    viewBox: "0 0 40 40",
    fill: "none",
    children: /* @__PURE__ */ l("path", { d: "M29.451 15.785a9.451 9.451 0 1 1-18.902 0 9.452 9.452 0 0 1 18.902 0ZM4.734 40.5c.119-7.085 5.899-12.792 13.012-12.792h4.508c7.113 0 12.893 5.707 13.012 12.792H4.734Z" })
  }
), yt = P(
  ({
    className: o,
    src: e,
    alt: n = "",
    color: t,
    size: i = "m",
    status: a,
    onImageError: r,
    style: s,
    ...m
  }, d) => {
    const [c, u] = F(!1), b = k(
      (x) => {
        u(!0), r == null || r(x);
      },
      [r]
    ), p = e !== void 0 && e !== "" && !c, f = n !== void 0 && n !== "", g = J(() => t === void 0 ? {} : {
      backgroundColor: `var(--sinch-comp-avatar-container-color-${t}-background)`,
      color: `var(--sinch-comp-avatar-container-color-${t}-foreground)`
    }, [t]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: d,
        className: h(ft({ size: i }), o),
        style: s,
        ...m,
        children: /* @__PURE__ */ A("div", { className: h(jt({ size: i })), children: [
          /* @__PURE__ */ A(
            "div",
            {
              className: h(
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
              style: g,
              children: [
                !p && f && /* @__PURE__ */ l("span", { className: h(vt({ size: i })), children: n }),
                p && /* @__PURE__ */ l(
                  "img",
                  {
                    src: e,
                    alt: n,
                    onError: b,
                    className: "absolute left-0 top-0 w-full h-full object-contain"
                  }
                ),
                !p && !f && /* @__PURE__ */ l(xt, {})
              ]
            }
          ),
          a !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: h(
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
              children: /* @__PURE__ */ l("div", { className: h(wt({ status: a })) })
            }
          )
        ] })
      }
    );
  }
);
yt.displayName = "Avatar";
const Nt = D(
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
), Ct = P(
  ({
    className: o,
    text: e,
    href: n,
    useHistory: t = !1,
    disabled: i = !1,
    external: a = !1,
    standalone: r = !1,
    preventDefault: s,
    onClick: m,
    children: d,
    ...c
  }, u) => {
    const b = s ?? t, p = (g) => {
      if (i) {
        g.preventDefault();
        return;
      }
      b && (g.preventDefault(), t && history.pushState({}, "", n)), m == null || m(g);
    }, f = i ? "[--sinch-global-color-icon:var(--sinch-comp-link-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-initial)] hover:[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-hover)]";
    return /* @__PURE__ */ A(
      "a",
      {
        ref: u,
        href: i ? void 0 : n,
        target: a ? "_blank" : void 0,
        rel: a ? "noopener noreferrer" : void 0,
        referrerPolicy: "no-referrer",
        "aria-disabled": i || void 0,
        onClick: p,
        className: h(
          Nt({ standalone: r, disabled: i }),
          f,
          o
        ),
        ...c,
        children: [
          /* @__PURE__ */ l("span", { className: "whitespace-[var(--sinch-global-text-white-space,normal)]", children: e ?? d }),
          r && a && /* @__PURE__ */ A(Ne, { children: [
            /* @__PURE__ */ l("span", { children: " " }),
            /* @__PURE__ */ l(
              ne,
              {
                name: "fa-arrow-up-right",
                className: "inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
              }
            )
          ] }),
          r && !a && /* @__PURE__ */ A(Ne, { children: [
            /* @__PURE__ */ l("span", { children: " " }),
            /* @__PURE__ */ l(
              ne,
              {
                name: "fa-arrow-right",
                className: "inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"
              }
            )
          ] }),
          !r && a && /* @__PURE__ */ l(
            ne,
            {
              name: "fa-arrow-up-right",
              className: "inline-block ml-1 align-[-0.2em] h-[1em] [--sinch-global-size-icon:1em]"
            }
          )
        ]
      }
    );
  }
);
Ct.displayName = "Link";
const Vt = D(
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
), It = P(
  ({
    className: o,
    text: e,
    color: n,
    small: t = !1,
    size: i,
    ellipsis: a = !1,
    icon: r,
    children: s,
    style: m,
    ...d
  }, c) => {
    const u = t ? "s" : i ?? "m", b = {};
    n !== void 0 && n !== "default" && (b.backgroundColor = `var(--sinch-comp-tag-color-${n}-background)`, b.color = `var(--sinch-comp-tag-color-${n}-foreground)`, b["--sinch-global-color-icon"] = `var(--sinch-comp-tag-color-${n}-foreground)`);
    const p = u === "s" ? "var(--sinch-comp-tag-size-icon-s)" : "var(--sinch-comp-tag-size-icon-m)";
    return b["--sinch-global-size-icon"] = p, /* @__PURE__ */ A(
      "div",
      {
        ref: c,
        className: h(
          Vt({ size: u, ellipsis: a }),
          o
        ),
        style: { ...b, ...m },
        ...d,
        children: [
          r && /* @__PURE__ */ l("span", { className: "-ml-1", children: r }),
          /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-1",
                a && "overflow-hidden text-ellipsis whitespace-nowrap"
              ),
              children: e ?? s
            }
          )
        ]
      }
    );
  }
);
It.displayName = "Tag";
const zt = D(
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
), Dt = {
  info: "var(--sinch-comp-alert-color-info-default-icon)",
  warn: "var(--sinch-comp-alert-color-warning-default-icon)",
  error: "var(--sinch-comp-alert-color-error-default-icon)"
}, Tt = {
  info: "var(--sinch-comp-alert-color-info-default-text)",
  warn: "var(--sinch-comp-alert-color-warning-default-text)",
  error: "var(--sinch-comp-alert-color-error-default-text)"
}, Mt = {
  info: "circle-info",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, St = P(
  ({ className: o, type: e = "info", text: n, action: t, close: i, children: a, ...r }, s) => {
    const m = Mt[e], d = Dt[e], c = Tt[e];
    return /* @__PURE__ */ A(
      "div",
      {
        ref: s,
        role: "alert",
        className: h(zt({ type: e }), o),
        ...r,
        children: [
          /* @__PURE__ */ l(
            ne,
            {
              name: m,
              iconsVersion: "2",
              size: "md",
              style: { color: d }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: "flex flex-col gap-2 flex-1 min-w-0 font-[var(--sinch-comp-alert-font-body)]",
              style: { color: c },
              children: n ?? a
            }
          ),
          t,
          i
        ]
      }
    );
  }
);
St.displayName = "Alert";
const Ot = D(
  // Base styles for the toggle wrapper
  [
    "inline-flex items-center gap-2 outline-none",
    "cursor-pointer select-none"
  ],
  {
    variants: {
      small: {
        true: "[--sinch-local-size:16px] [--sinch-local-width:32px] [--sinch-local-knob-size:12px] [--sinch-local-translate:16px]",
        false: "[--sinch-local-size:20px] [--sinch-local-width:40px] [--sinch-local-knob-size:16px] [--sinch-local-translate:20px]"
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
), Et = D(
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
), At = D(
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
), Lt = D(
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
), Pt = P(
  ({
    className: o,
    checked: e,
    defaultChecked: n = !1,
    small: t = !1,
    labeled: i = !1,
    disabled: a = !1,
    text: r,
    "aria-label": s,
    onChange: m,
    onFocus: d,
    onBlur: c,
    onKeyDown: u,
    onClick: b,
    ...p
  }, f) => {
    const [g, x] = F(n), [V, I] = F(!1), N = e !== void 0, j = N ? e : g, v = k(
      (z) => {
        if (a)
          return;
        const O = !j;
        N || x(O), m == null || m(O), b == null || b(z);
      },
      [a, j, N, m, b]
    ), y = k(
      (z) => {
        if ((z.code === "Space" || z.code === "Enter") && (z.preventDefault(), !a)) {
          const O = !j;
          N || x(O), m == null || m(O);
        }
        u == null || u(z);
      },
      [a, j, N, m, u]
    ), w = k(
      (z) => {
        I(!0), d == null || d(z);
      },
      [d]
    ), T = k(
      (z) => {
        I(!1), c == null || c(z);
      },
      [c]
    );
    return /* @__PURE__ */ A(
      "div",
      {
        ref: f,
        role: "checkbox",
        "aria-checked": j,
        "aria-disabled": a,
        "aria-label": s,
        tabIndex: a ? -1 : 0,
        className: h(Ot({ small: t, disabled: a }), o),
        onClick: v,
        onKeyDown: y,
        onFocus: w,
        onBlur: T,
        ...p,
        children: [
          /* @__PURE__ */ A("div", { className: h(Et({ checked: j, disabled: a })), children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  "absolute -inset-[3px] pointer-events-none",
                  "border-2 border-[var(--sinch-comp-toggle-color-default-outline-focus)]",
                  "rounded-[17px]",
                  V ? "block" : "hidden"
                )
              }
            ),
            /* @__PURE__ */ l("div", { className: h(At({ checked: j, disabled: a })), children: i && !t && /* @__PURE__ */ A(Ne, { children: [
              /* @__PURE__ */ l(
                "span",
                {
                  className: h(
                    "absolute top-0 right-full px-[1px]",
                    "font-[var(--sinch-comp-toggle-font-size-m-inside-text)]",
                    "text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]",
                    "uppercase select-none",
                    "transition-opacity duration-150 ease-in-out",
                    j ? "opacity-100" : "opacity-0"
                  ),
                  children: "on"
                }
              ),
              /* @__PURE__ */ l(
                "span",
                {
                  className: h(
                    "absolute top-0 left-full px-[1px]",
                    "font-[var(--sinch-comp-toggle-font-size-m-inside-text)]",
                    "text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]",
                    "uppercase select-none",
                    "transition-opacity duration-150 ease-in-out",
                    j ? "opacity-0" : "opacity-100"
                  ),
                  children: "off"
                }
              )
            ] }) })
          ] }),
          r && /* @__PURE__ */ l("span", { className: h(Lt({ small: t, disabled: a })), children: r })
        ]
      }
    );
  }
);
Pt.displayName = "Toggle";
const Rt = D(
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
), $t = ({ size: o }) => /* @__PURE__ */ l(
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
), Ft = P(
  ({
    className: o,
    text: e,
    color: n,
    small: t = !1,
    size: i,
    icon: a,
    rightIcon: r,
    onClick: s,
    onFocus: m,
    onBlur: d,
    onKeyDown: c,
    style: u,
    ...b
  }, p) => {
    const f = t ? "s" : i ?? "m", g = {};
    n !== void 0 && n !== "neutral" && (g.backgroundColor = `var(--sinch-comp-chip-color-${n}-default-background-initial)`, g.color = `var(--sinch-comp-chip-color-${n}-default-foreground-initial)`, g["--sinch-global-color-icon"] = `var(--sinch-comp-chip-color-${n}-default-foreground-initial)`);
    const x = f === "s" ? "var(--sinch-comp-chip-size-icon-s)" : "var(--sinch-comp-chip-size-icon-m)";
    g["--sinch-global-size-icon"] = x;
    const V = k((I) => {
      I.code === "Space" && (I.preventDefault(), I.currentTarget.click()), c == null || c(I);
    }, [c]);
    return /* @__PURE__ */ A(
      "div",
      {
        ref: p,
        role: "button",
        tabIndex: 0,
        "aria-label": e,
        className: h(
          Rt({ size: f }),
          o
        ),
        style: { ...g, ...u },
        onClick: s,
        onFocus: m,
        onBlur: d,
        onKeyDown: V,
        ...b,
        children: [
          a && /* @__PURE__ */ l("span", { className: "-ml-1", children: a }),
          /* @__PURE__ */ l(
            "span",
            {
              className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap",
              children: e
            }
          ),
          /* @__PURE__ */ l("span", { "aria-label": `Delete ${e}`, children: r ?? /* @__PURE__ */ l($t, { size: f }) })
        ]
      }
    );
  }
);
Ft.displayName = "Chip";
const _t = D(
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
), Ut = D(
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
), Ht = D(
  // Focus ring styles
  [
    "absolute inset-[-3px] pointer-events-none",
    "border-2 border-[var(--sinch-comp-checkbox-color-default-outline-focus)]",
    "rounded-[calc(var(--sinch-comp-checkbox-shape-radius)+3px)]",
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
), Bt = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l("path", { d: "M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17Z" })
  }
), Gt = () => /* @__PURE__ */ l(
  "svg",
  {
    className: "absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: /* @__PURE__ */ l("path", { d: "M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z" })
  }
), Wt = P(
  ({
    className: o,
    name: e,
    value: n = "",
    checked: t,
    defaultChecked: i = !1,
    indeterminate: a = !1,
    disabled: r = !1,
    invalid: s = !1,
    text: m,
    "aria-label": d,
    onChange: c,
    onFocus: u,
    onBlur: b,
    onKeyDown: p,
    ...f
  }, g) => {
    const [x, V] = F(i), [I, N] = F(!1), j = Z(null), v = t !== void 0, y = v ? t : x;
    X(() => {
      g != null && (typeof g == "function" ? g(j.current) : g.current = j.current);
    }, [g]);
    const w = k(() => {
      if (r)
        return;
      const E = !y;
      v || V(E), c == null || c(E);
    }, [r, y, v, c]), T = k(
      (E) => {
        E.code === "Space" && (E.preventDefault(), w()), p == null || p(E);
      },
      [w, p]
    ), z = k(
      (E) => {
        N(!0), u == null || u(E);
      },
      [u]
    ), O = k(
      (E) => {
        N(!1), b == null || b(E);
      },
      [b]
    ), $ = () => r ? "" : y && !s ? [
      "hover:bg-[var(--sinch-comp-checkbox-color-checked-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-checked-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-checked-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-checked-border-active)]"
    ].join(" ") : s ? [
      "hover:bg-[var(--sinch-comp-checkbox-color-invalid-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-invalid-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-invalid-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-invalid-border-active)]"
    ].join(" ") : [
      "hover:bg-[var(--sinch-comp-checkbox-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-checkbox-color-default-border-hover)]",
      "active:bg-[var(--sinch-comp-checkbox-color-default-background-active)]",
      "active:border-[var(--sinch-comp-checkbox-color-default-border-active)]"
    ].join(" "), C = () => r ? "text-[var(--sinch-comp-checkbox-color-disabled-text-initial)]" : s ? "text-[var(--sinch-comp-checkbox-color-invalid-text-initial)]" : "text-[var(--sinch-comp-checkbox-color-default-text-initial)]";
    return /* @__PURE__ */ A(
      "div",
      {
        ref: j,
        role: "checkbox",
        "aria-checked": y && a ? "mixed" : y,
        "aria-disabled": r,
        "aria-invalid": s,
        "aria-label": d ?? m,
        tabIndex: r ? -1 : 0,
        "data-name": e,
        "data-value": y ? n.length > 0 ? n : "on" : "",
        className: h(
          _t({ isDisabled: r }),
          o
        ),
        onClick: w,
        onKeyDown: T,
        onFocus: z,
        onBlur: O,
        ...f,
        children: [
          /* @__PURE__ */ A("div", { className: "relative w-[18px] h-[18px] mt-[3px] flex-shrink-0", children: [
            /* @__PURE__ */ l("div", { className: h(Ht({ isFocused: I })) }),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  Ut({
                    isChecked: y,
                    isInvalid: s && !y,
                    isDisabled: r
                  }),
                  $()
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  "transition-opacity duration-100",
                  y && !a ? "opacity-100" : "opacity-0"
                ),
                children: /* @__PURE__ */ l(Bt, {})
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  "transition-opacity duration-100",
                  y && a ? "opacity-100" : "opacity-0"
                ),
                children: /* @__PURE__ */ l(Gt, {})
              }
            )
          ] }),
          m && /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-1 self-center pl-2",
                "font-[var(--sinch-comp-checkbox-font-label)]",
                C(),
                r ? "cursor-default" : "cursor-pointer"
              ),
              children: m
            }
          )
        ]
      }
    );
  }
);
Wt.displayName = "Checkbox";
const Zt = D(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), qt = D(
  "flex items-center h-6",
  {
    variants: {},
    defaultVariants: {}
  }
), Yt = D(
  "h-2 rounded-full flex-1 min-w-0 bg-[var(--sinch-comp-progress-color-default-background-initial)]",
  {
    variants: {},
    defaultVariants: {}
  }
), Kt = D(
  "h-2 rounded-full bg-[var(--sinch-comp-progress-color-default-bar-initial)] transition-[width] duration-200",
  {
    variants: {},
    defaultVariants: {}
  }
), Jt = D(
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
), Xt = P(
  ({ className: o, value: e = 0, detailed: n = !1, ...t }, i) => {
    const a = Math.min(100, Math.max(0, e)), r = J(() => Intl.NumberFormat(
      typeof navigator < "u" ? navigator.language : "en-US",
      { style: "percent" }
    ).format(a / 100), [a]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-valuenow": a,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        className: h(Zt(), o),
        ...t,
        children: /* @__PURE__ */ A("div", { className: qt(), children: [
          /* @__PURE__ */ l("span", { className: Jt({ visible: n }), children: r }),
          /* @__PURE__ */ l("div", { className: Yt(), children: /* @__PURE__ */ l(
            "div",
            {
              className: Kt(),
              style: { width: `${a}%` }
            }
          ) })
        ] })
      }
    );
  }
);
Xt.displayName = "Progress";
const Qt = D(
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
), ei = {
  xl: "1",
  l: "2",
  m: "3",
  s: "4",
  xs: "5"
}, oi = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
}, ho = P(
  ({
    className: o,
    children: e,
    type: n = "m",
    level: t,
    ellipsis: i = !1,
    as: a,
    ...r
  }, s) => {
    const m = t ?? ei[n], d = a ?? oi[m];
    return /* @__PURE__ */ l(
      d,
      {
        ref: s,
        role: "heading",
        "aria-level": parseInt(m, 10),
        className: h(Qt({ type: n, ellipsis: i }), o),
        ...r,
        children: e
      }
    );
  }
);
ho.displayName = "Title";
const ni = 1e3, ti = 250, ii = 100, ai = D(
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
), li = D(
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
), Xe = P(
  ({
    className: o,
    children: e,
    text: n,
    orientation: t = "top",
    textAlign: i = "left",
    type: a = "slow",
    isOpen: r,
    onShow: s,
    onHide: m,
    ...d
  }, c) => {
    const [u, b] = F(!1), [p, f] = F(!1), g = Z(null), x = Z(null), V = r !== void 0, I = V ? r : u;
    X(() => () => {
      g.current !== null && window.clearTimeout(g.current), x.current !== null && window.clearTimeout(x.current);
    }, []), X(() => {
      I ? (requestAnimationFrame(() => {
        f(!0);
      }), s == null || s()) : (f(!1), x.current = window.setTimeout(() => {
        m == null || m();
      }, ii));
    }, [I, s, m]);
    const N = k(() => {
      if (V || n.length === 0)
        return;
      x.current !== null && (window.clearTimeout(x.current), x.current = null);
      const w = a === "fast" ? ti : ni;
      g.current = window.setTimeout(() => {
        b(!0);
      }, w);
    }, [V, a, n]), j = k(() => {
      V || (g.current !== null && (window.clearTimeout(g.current), g.current = null), b(!1));
    }, [V]), v = k(() => {
      V || (g.current !== null && (window.clearTimeout(g.current), g.current = null), b(!1));
    }, [V]);
    if (n.length === 0)
      return e;
    const y = Ke(e) ? ro(e, {
      onMouseEnter: (w) => {
        var T, z;
        N(), (z = (T = e.props) == null ? void 0 : T.onMouseEnter) == null || z.call(T, w);
      },
      onMouseLeave: (w) => {
        var T, z;
        j(), (z = (T = e.props) == null ? void 0 : T.onMouseLeave) == null || z.call(T, w);
      },
      onMouseDown: (w) => {
        var T, z;
        v(), (z = (T = e.props) == null ? void 0 : T.onMouseDown) == null || z.call(T, w);
      }
    }) : e;
    return /* @__PURE__ */ A(
      "div",
      {
        ref: c,
        className: h("relative inline-flex", o),
        role: "tooltip",
        ...d,
        children: [
          y,
          (I || p) && /* @__PURE__ */ A(
            "div",
            {
              className: h(
                ai({
                  orientation: t,
                  textAlign: i,
                  visible: p
                })
              ),
              children: [
                n,
                /* @__PURE__ */ l(
                  "svg",
                  {
                    className: h(li({ orientation: t })),
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
Xe.displayName = "Tooltip";
const si = D(
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
), ri = P(
  ({ className: o, text: e, children: n, ...t }, i) => /* @__PURE__ */ l(
    "code",
    {
      ref: i,
      className: h(si(), o),
      ...t,
      children: e ?? n
    }
  )
);
ri.displayName = "CodeTag";
const mi = D(
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
), ci = {
  info: "var(--sinch-comp-inline-alert-color-info-default-icon)",
  success: "var(--sinch-comp-inline-alert-color-success-default-icon)",
  warn: "var(--sinch-comp-inline-alert-color-warning-default-icon)",
  error: "var(--sinch-comp-inline-alert-color-error-default-icon)"
}, di = {
  info: "var(--sinch-comp-inline-alert-color-info-default-text)",
  success: "var(--sinch-comp-inline-alert-color-success-default-text)",
  warn: "var(--sinch-comp-inline-alert-color-warning-default-text)",
  error: "var(--sinch-comp-inline-alert-color-error-default-text)"
}, bi = {
  info: "circle-info",
  success: "circle-check",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, ui = P(
  ({
    className: o,
    type: e = "info",
    text: n,
    caption: t,
    icon: i,
    action: a,
    close: r,
    children: s,
    ...m
  }, d) => {
    const c = i ?? bi[e], u = ci[e], b = di[e];
    return /* @__PURE__ */ A(
      "div",
      {
        ref: d,
        role: "alert",
        "aria-atomic": "true",
        "aria-live": "polite",
        className: h(mi({ type: e }), o),
        ...m,
        children: [
          /* @__PURE__ */ l(
            ne,
            {
              name: c,
              iconsVersion: "2",
              size: "md",
              style: { color: u }
            }
          ),
          /* @__PURE__ */ A("div", { className: "flex flex-col items-start ml-2 min-w-0 flex-1", children: [
            t && /* @__PURE__ */ l(
              "div",
              {
                className: "self-stretch font-[var(--sinch-comp-inline-alert-font-title)]",
                style: { color: b },
                children: t
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  "flex flex-col gap-2 self-stretch font-[var(--sinch-comp-inline-alert-font-body)]",
                  t && "mt-1"
                ),
                style: { color: b },
                children: n ?? s
              }
            ),
            a && /* @__PURE__ */ l("div", { className: "w-full flex mt-4 min-w-0 gap-4", children: a })
          ] }),
          r && /* @__PURE__ */ l("div", { className: "ml-4", children: r })
        ]
      }
    );
  }
);
ui.displayName = "InlineAlert";
const hi = D(
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
), pi = D(
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
), gi = D(
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
), ki = P(
  ({
    className: o,
    value: e,
    defaultValue: n,
    placeholder: t,
    invalid: i = !1,
    disabled: a = !1,
    readOnly: r = !1,
    required: s = !1,
    rows: m,
    minRows: d,
    maxRows: c,
    resizable: u = !1,
    "aria-label": b,
    bottomContent: p,
    onChange: f,
    onFocus: g,
    onBlur: x,
    onKeyDown: V,
    ...I
  }, N) => {
    const [j, v] = F(n ?? ""), [y, w] = F(!1), T = Z(null), z = k(
      (H) => {
        T.current = H, typeof N == "function" ? N(H) : N !== null && (N.current = H);
      },
      [N]
    ), O = Z({ startY: 0, startHeight: 0 }), [$, C] = F(null), E = e !== void 0, _ = E ? e : j;
    X(() => {
      const H = T.current;
      if (H === null || u)
        return;
      H.style.height = "auto";
      let S = 0, ee = 1 / 0;
      if (d !== void 0 && d > 0) {
        const te = H.rows;
        H.rows = d, S = H.scrollHeight, H.rows = te;
      }
      if (c !== void 0 && c > 0) {
        const te = H.rows;
        H.rows = c, ee = H.scrollHeight, H.rows = te;
      }
      const M = H.scrollHeight, K = Math.min(Math.max(M, S), ee);
      H.style.height = `${K}px`;
    }, [_, d, c, u]), X(() => {
      const H = T.current;
      H === null || $ === null || (H.style.height = `${$}px`);
    }, [$]);
    const L = k(
      (H) => {
        const S = H.target.value;
        E || v(S), f == null || f(S);
      },
      [E, f]
    ), R = k(
      (H) => {
        w(!0), g == null || g(H);
      },
      [g]
    ), U = k(
      (H) => {
        w(!1), x == null || x(H);
      },
      [x]
    ), G = k(
      (H) => {
        H.preventDefault();
        const S = T.current;
        if (S === null)
          return;
        O.current = {
          startY: H.clientY,
          startHeight: S.getBoundingClientRect().height
        };
        const ee = (K) => {
          const te = K.clientY - O.current.startY, W = Math.max(0, O.current.startHeight + te);
          C(W);
        }, M = () => {
          document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", M);
        };
        document.addEventListener("mousemove", ee), document.addEventListener("mouseup", M);
      },
      []
    ), q = p !== void 0 || u;
    return /* @__PURE__ */ A("div", { className: h(hi({}), o), children: [
      /* @__PURE__ */ l(
        "textarea",
        {
          ref: z,
          value: _,
          placeholder: t,
          disabled: a,
          readOnly: r,
          required: s,
          rows: m,
          "aria-label": b,
          "aria-invalid": i,
          "aria-multiline": "true",
          className: h(pi({})),
          onChange: L,
          onFocus: R,
          onBlur: U,
          onKeyDown: V,
          ...I
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: h(
            gi({
              isFocused: y,
              isInvalid: i && !y,
              isDisabled: a
            })
          )
        }
      ),
      q && /* @__PURE__ */ l(
        "div",
        {
          className: h(
            "flex flex-row items-center gap-2 px-1 pt-3 pb-1",
            u && "pr-[calc(var(--sinch-comp-textarea-size-resize-handle)+4px)]"
          ),
          children: p
        }
      ),
      u && /* @__PURE__ */ l(
        "div",
        {
          className: h(
            "absolute bottom-0 right-0 cursor-ns-resize",
            "w-[var(--sinch-comp-textarea-size-resize-handle)]",
            "h-[var(--sinch-comp-textarea-size-resize-handle)]"
          ),
          onMouseDown: G,
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
ki.displayName = "Textarea";
const Ho = de(null), fi = () => {
  const o = be(Ho);
  if (o === null)
    throw new Error("RadioOption must be used within a Radio component");
  return o;
}, ji = D(
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
), Bo = P(
  ({
    className: o,
    direction: e = "column",
    name: n,
    value: t,
    defaultValue: i = "",
    invalid: a = !1,
    "aria-label": r,
    onChange: s,
    children: m,
    ...d
  }, c) => {
    const [u, b] = F(i), p = Z(/* @__PURE__ */ new Map()), f = t !== void 0, g = f ? t : u, x = k(
      (y) => {
        f || b(y), s == null || s(y);
      },
      [f, s]
    ), V = k(
      (y, w) => {
        p.current.set(y, w);
      },
      []
    ), I = k((y) => {
      p.current.delete(y);
    }, []), N = k(() => Array.from(p.current.entries()).filter(([, y]) => y.getAttribute("aria-disabled") !== "true").map(([y, w]) => ({ value: y, element: w })), []), j = k(() => {
      const y = N();
      if (y.length === 0)
        return;
      const w = y.findIndex((O) => O.value === g), T = w < 0 ? 0 : (w + 1) % y.length, z = y[T];
      z.element.focus(), x(z.value);
    }, [g, N, x]), v = k(() => {
      const y = N();
      if (y.length === 0)
        return;
      const w = y.findIndex((O) => O.value === g), T = w < 0 ? y.length - 1 : (w - 1 + y.length) % y.length, z = y[T];
      z.element.focus(), x(z.value);
    }, [g, N, x]);
    return /* @__PURE__ */ l(
      Ho.Provider,
      {
        value: {
          name: n,
          value: g,
          invalid: a,
          onChange: x,
          registerOption: V,
          unregisterOption: I,
          focusNextOption: j,
          focusPrevOption: v
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: c,
            role: "radiogroup",
            "aria-label": r,
            "aria-invalid": a || void 0,
            "data-name": n,
            "data-value": g,
            className: h(ji({ direction: e }), o),
            ...d,
            children: m
          }
        )
      }
    );
  }
);
Bo.displayName = "Radio";
const vi = D(
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
), wi = D(
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
), xi = D(
  // Focus ring styles
  [
    "absolute inset-[-3px] pointer-events-none",
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
), yi = D(
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
), Go = P(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    text: t,
    "aria-label": i,
    "aria-labelledby": a,
    onKeyDown: r,
    ...s
  }, m) => {
    const d = fi(), [c, u] = F(!1), b = Z(null), p = d.value === e, f = d.invalid, g = k(
      (w) => {
        b.current = w, w !== null ? d.registerOption(e, w) : d.unregisterOption(e), m !== null && (typeof m == "function" ? m(w) : m.current = w);
      },
      [d, m, e]
    ), x = k(() => {
      n || d.onChange(e);
    }, [d, n, e]), V = k(
      (w) => {
        switch (w.code) {
          case "ArrowUp":
          case "ArrowLeft":
            w.preventDefault(), d.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            w.preventDefault(), d.focusNextOption();
            break;
          case "Space":
            w.preventDefault(), n || d.onChange(e);
            break;
        }
        r == null || r(w);
      },
      [d, n, r, e]
    ), I = k(() => {
      u(!0);
    }, []), N = k(() => {
      u(!1);
    }, []), j = () => n ? "" : p && !f ? [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-checked-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-checked-border-active)]"
    ].join(" ") : f ? [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-invalid-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-invalid-border-active)]"
    ].join(" ") : [
      "hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]",
      "hover:border-[var(--sinch-comp-radio-color-default-border-hover)]",
      "active:bg-[var(--sinch-comp-radio-color-default-background-active)]",
      "active:border-[var(--sinch-comp-radio-color-default-border-active)]"
    ].join(" "), v = () => n || !p ? "" : [
      "group-hover:bg-[var(--sinch-comp-radio-color-checked-knob-hover)]",
      "group-active:bg-[var(--sinch-comp-radio-color-checked-knob-active)]"
    ].join(" "), y = () => n && p ? "text-[var(--sinch-comp-radio-color-checked-disabled-label-initial)]" : n ? "text-[var(--sinch-comp-radio-color-disabled-label-initial)]" : f ? "text-[var(--sinch-comp-radio-color-invalid-label-initial)]" : "text-[var(--sinch-comp-radio-color-default-label-initial)]";
    return /* @__PURE__ */ A(
      "div",
      {
        ref: g,
        role: "radio",
        "aria-checked": p,
        "aria-disabled": n,
        "aria-label": i ?? t,
        "aria-labelledby": a,
        tabIndex: n ? -1 : 0,
        className: h(
          vi({ isDisabled: n }),
          "group",
          o
        ),
        onClick: x,
        onKeyDown: V,
        onFocus: I,
        onBlur: N,
        ...s,
        children: [
          /* @__PURE__ */ A("div", { className: "relative w-[18px] h-[18px] mt-[3px] flex-shrink-0 self-start", children: [
            /* @__PURE__ */ l("div", { className: h(xi({ isFocused: c })) }),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  wi({
                    isChecked: p,
                    isInvalid: f && !p,
                    isDisabled: n
                  }),
                  j()
                )
              }
            ),
            /* @__PURE__ */ l(
              "div",
              {
                className: h(
                  yi({
                    isVisible: p,
                    isDisabled: n
                  }),
                  v()
                )
              }
            )
          ] }),
          t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-1 self-center pl-2",
                "font-[var(--sinch-comp-radio-font-label)]",
                y(),
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
Go.displayName = "RadioOption";
const dr = Object.assign(Bo, {
  Option: Go
}), Ni = D(
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
), Ci = D(
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
), Vi = D(
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
), Ii = D(
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
), zi = [
  "font-[var(--sinch-comp-field-font-invalid)]",
  "text-[var(--sinch-comp-field-color-invalid-text-initial)]",
  "overflow-hidden text-ellipsis whitespace-nowrap",
  "leading-5 mt-0.5"
], Di = P(
  ({
    className: o,
    label: e,
    optionalText: n,
    additionalText: t,
    invalidText: i,
    disabled: a = !1,
    tooltip: r,
    children: s,
    htmlFor: m,
    ...d
  }, c) => {
    const u = mo(), b = m ?? u, p = Z(null), f = e !== void 0 || n !== void 0, g = k(() => {
      const x = p.current;
      if (x !== null) {
        const V = x.querySelector(
          'input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        V == null || V.focus();
      }
    }, []);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: h(Ni({ disabled: a }), o),
        ...d,
        children: /* @__PURE__ */ A("div", { className: "flex flex-col w-full", children: [
          f && /* @__PURE__ */ A("div", { className: "flex items-baseline h-6 mb-0.5", children: [
            e !== void 0 && /* @__PURE__ */ l(
              "label",
              {
                htmlFor: b,
                className: h(Ci({ disabled: a }), "cursor-pointer"),
                onClick: g,
                children: e
              }
            ),
            r !== void 0 && /* @__PURE__ */ l("div", { className: "self-center mx-2 flex", children: r }),
            n !== void 0 && /* @__PURE__ */ l("span", { className: h(Vi({ disabled: a })), children: n })
          ] }),
          /* @__PURE__ */ l("div", { ref: p, children: s }),
          (i !== void 0 || t !== void 0) && /* @__PURE__ */ A("div", { className: "flex items-baseline", children: [
            i !== void 0 && /* @__PURE__ */ l("div", { className: h(zi), children: i }),
            t !== void 0 && /* @__PURE__ */ l("div", { className: h(Ii({ disabled: a })), children: t })
          ] })
        ] })
      }
    );
  }
);
Di.displayName = "Field";
const Ti = D(
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
), Mi = P(
  ({ className: o, code: e, size: n = "md", flagUrlTemplate: t, alt: i, loading: a = "lazy", style: r, ...s }, m) => {
    const d = J(() => e === "" || e === null || e === void 0 ? "" : t !== void 0 && t !== "" ? t.replace("%s", e) : "", [e, t]);
    return d === "" ? null : /* @__PURE__ */ l(
      "img",
      {
        ref: m,
        src: d,
        alt: i ?? e,
        loading: a,
        className: h(Ti({ size: n }), o),
        style: {
          width: "var(--sinch-global-size-icon)",
          height: "var(--sinch-global-size-icon)",
          ...r
        },
        ...s
      }
    );
  }
);
Mi.displayName = "Flag";
const xe = 7, Ve = Math.floor(xe / 2), Vo = 0, so = xe - 1, Wo = 1, Be = so - 1, Si = (o, e, n) => o === Wo && e > Ve || o === Be && e <= n - Be, Oi = D([
  "flex",
  "justify-center",
  "items-center",
  "gap-2",
  "h-6"
]), oo = D(
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
), Ei = P(
  ({ className: o, value: e, max: n, onChange: t, ariaLabel: i = "Pagination", ...a }, r) => {
    const s = e - 1, m = Math.max(0, n), d = J(() => Math.min(
      Math.max(0, s - Ve),
      Math.max(0, m - xe)
    ), [s, m]), c = J(() => Array.from({ length: xe }, (I, N) => {
      let j = !1;
      s < 3 ? j = s === N : s >= m - Ve ? j = N + d === s : j = N === Ve;
      const v = N === Vo ? 1 : N === so ? m : N + 1 + d, y = m > xe && Si(N, s, m);
      return {
        index: N,
        pageNumber: v,
        isActive: j,
        isEllipsis: y,
        isHidden: N >= m
      };
    }), [s, m, d]), u = k(
      (I) => Math.max(0, Math.min(m - 1, I)) + 1,
      [m]
    ), b = k(
      (I) => {
        let N;
        I === Vo ? N = 0 : I === so ? N = m - 1 : I === Wo && m > xe && s > Ve ? N = Math.floor(s / 2) : I === Be && m > xe && s <= m - Be ? N = Math.floor((m - s) / 2 + s) : N = I + Math.min(
          Math.max(0, s - Ve),
          Math.max(0, m - xe)
        ), t == null || t(u(N));
      },
      [s, m, t, u]
    ), p = k(() => {
      t == null || t(u(Math.max(s - 1, 0)));
    }, [s, t, u]), f = k(() => {
      t == null || t(u(Math.min(s + 1, m - 1)));
    }, [s, m, t, u]), g = s < 0 || s >= m, x = g || s === 0, V = g || s === m - 1;
    return /* @__PURE__ */ l(
      "nav",
      {
        ref: r,
        "aria-label": i,
        className: h("inline-block align-middle outline-none", o),
        ...a,
        children: /* @__PURE__ */ A("div", { className: Oi(), children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": "Go back",
              disabled: x,
              onClick: p,
              className: oo({ variant: "arrow" }),
              children: /* @__PURE__ */ l(ne, { name: "fa-angle-left", iconsVersion: "2", size: "md" })
            }
          ),
          c.map((I) => I.isHidden ? null : /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": `Go to page ${I.pageNumber}`,
              "aria-current": I.isActive ? "page" : void 0,
              "aria-hidden": I.isEllipsis ? !0 : void 0,
              disabled: I.isEllipsis,
              onClick: () => b(I.index),
              className: oo({
                variant: I.isActive ? "pageActive" : "page"
              }),
              children: I.isEllipsis ? "..." : /* @__PURE__ */ l("span", { children: I.pageNumber })
            },
            I.index
          )),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              "aria-label": "Go forward",
              disabled: V,
              onClick: f,
              className: oo({ variant: "arrow" }),
              children: /* @__PURE__ */ l(ne, { name: "fa-angle-right", iconsVersion: "2", size: "md" })
            }
          )
        ] })
      }
    );
  }
);
Ei.displayName = "Pagination";
const Ai = P(
  ({
    className: o,
    text: e,
    orientation: n = "top",
    textAlign: t,
    width: i,
    isOpen: a,
    onShow: r,
    onHide: s,
    style: m,
    ...d
  }, c) => {
    const u = i !== void 0 ? { "--sinch-global-size-icon": `${i}px` } : { "--sinch-global-size-icon": "18px" };
    return /* @__PURE__ */ l(
      Xe,
      {
        ref: c,
        text: e,
        orientation: n,
        textAlign: t,
        type: "fast",
        isOpen: a,
        onShow: r,
        onHide: s,
        className: h("inline-flex", o),
        style: m,
        ...d,
        children: /* @__PURE__ */ l(
          ne,
          {
            name: "circle-question",
            iconsVersion: "2",
            className: "text-foreground-muted cursor-help",
            style: u
          }
        )
      }
    );
  }
);
Ai.displayName = "HelpTooltip";
const Li = [
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
].join(" "), Pi = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      className: h(Li, o),
      ...n,
      children: e
    }
  )
);
Pi.displayName = "Grid";
const Ri = P(
  ({ className: o, s: e, m: n, l: t, xl: i, children: a, ...r }, s) => {
    const m = J(() => {
      const d = ["block"];
      return i !== void 0 ? d.push(`col-span-${i}`) : d.push("col-span-12"), t !== void 0 ? d.push(`max-[1439px]:col-span-${t}`) : d.push("max-[1439px]:col-span-12"), n !== void 0 ? d.push(`max-[1023px]:col-span-${n}`) : d.push("max-[1023px]:col-span-8"), e !== void 0 ? d.push(`max-[767px]:col-span-${e}`) : d.push("max-[767px]:col-span-4"), d.join(" ");
    }, [e, n, t, i]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: s,
        className: h(m, o),
        ...r,
        children: a
      }
    );
  }
);
Ri.displayName = "GridItem";
const $i = D(
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
), Fi = P(
  ({ className: o, card: e = !1, children: n, ...t }, i) => /* @__PURE__ */ l(
    "div",
    {
      ref: i,
      className: h($i({ card: e }), o),
      role: "status",
      "aria-label": "Loading",
      ...t,
      children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-4", children: n })
    }
  )
);
Fi.displayName = "Skeleton";
const _i = D(
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
), Ui = P(
  ({ className: o, size: e = "md", width: n, style: t, ...i }, a) => {
    const r = n !== void 0 ? { ...t, width: typeof n == "number" ? `${n}px` : n } : t;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        className: h(_i({ size: e }), o),
        style: r,
        "aria-hidden": "true",
        ...i
      }
    );
  }
);
Ui.displayName = "SkeletonItem";
const Hi = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      role: "list",
      className: h(
        // Base styles
        "block h-full",
        o
      ),
      ...n,
      children: /* @__PURE__ */ l("div", { className: "flex h-full w-full flex-col overflow-y-auto", children: e })
    }
  )
);
Hi.displayName = "List";
const Bi = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      role: "listitem",
      className: h(
        // Base styles
        "block outline-none",
        o
      ),
      ...n,
      children: /* @__PURE__ */ l(
        "div",
        {
          className: h(
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
Bi.displayName = "ListItem";
const Gi = /\uFE0F/g, Wi = "‍", Zi = (o) => o.indexOf(Wi) < 0 ? o.replace(Gi, "") : o;
function qi(o) {
  const e = [];
  let n = 0, t = 0, i = 0;
  for (; i < o.length; )
    n = o.charCodeAt(i++), t !== 0 ? (e.push((65536 + (t - 55296 << 10) + (n - 56320)).toString(16)), t = 0) : n > 55296 && n <= 56319 ? t = n : e.push(n.toString(16));
  return e;
}
const Yi = (o, e) => {
  if (e == null || e.length === 0 || o === null || o === void 0)
    return "";
  let n = qi(Zi(e)).join("-");
  return n === "1f441-fe0f-200d-1f5e8-fe0f" && (n = "1f441-200d-1f5e8"), o.replace("%s", n);
}, Ki = D(
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
), Zo = P(
  ({ className: o, char: e, baseUrl: n, size: t, verticalAlign: i, customSize: a, style: r, ...s }, m) => {
    const d = J(() => Yi(n, e), [n, e]), c = a ?? "var(--emoji-size, 24px)";
    return /* @__PURE__ */ l(
      "span",
      {
        ref: m,
        className: h(Ki({ size: t }), o),
        style: r,
        ...s,
        children: d !== "" && /* @__PURE__ */ l(
          "img",
          {
            src: d,
            alt: e,
            loading: "lazy",
            style: {
              width: c,
              height: c,
              verticalAlign: i ?? "initial",
              pointerEvents: "none"
            }
          }
        )
      }
    );
  }
);
Zo.displayName = "Emoji";
const qo = de(null);
function Ji() {
  return be(qo);
}
const Xi = D(
  // Base styles - flex container
  "inline-flex",
  {
    variants: {},
    defaultVariants: {}
  }
), Qi = P(
  ({ className: o, children: e, size: n = "m", variant: t = "secondary", ...i }, a) => {
    const r = He.count(e);
    return /* @__PURE__ */ l(qo.Provider, { value: { size: n, variant: t, itemCount: r }, children: /* @__PURE__ */ l(
      "div",
      {
        ref: a,
        role: "group",
        className: h(Xi(), o),
        ...i,
        children: He.map(e, (s, m) => Ke(s) ? ro(s, {
          _index: m
        }) : s)
      }
    ) });
  }
);
Qi.displayName = "ButtonGroup";
function ea(o) {
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
function oa(o) {
  return {
    xs: "var(--sinch-comp-button-shape-radius-size-xs)",
    s: "var(--sinch-comp-button-shape-radius-size-s)",
    m: "var(--sinch-comp-button-shape-radius-size-m)",
    l: "var(--sinch-comp-button-shape-radius-size-l)"
  }[o];
}
const na = D(
  // Base styles - relative position for the divider
  "relative flex",
  {
    variants: {},
    defaultVariants: {}
  }
), ta = P(
  ({ className: o, _index: e = 0, style: n, ...t }, i) => {
    const a = Ji(), r = (a == null ? void 0 : a.size) ?? "m", s = (a == null ? void 0 : a.variant) ?? "secondary", m = (a == null ? void 0 : a.itemCount) ?? 1, d = e === 0, c = e === m - 1, u = !d && !c, b = oa(r), p = ea(s), f = {
      ...n,
      // Set CSS custom properties for the divider
      "--button-group-item-divider-color": p
    };
    return /* @__PURE__ */ l(
      "div",
      {
        className: h(
          na(),
          // Add divider pseudo-element for non-first items
          !d && [
            "before:absolute before:left-0 before:top-[10%] before:bottom-[10%]",
            "before:w-px before:-translate-x-[0.5px]",
            "before:bg-[var(--button-group-item-divider-color)]",
            "before:opacity-30 before:pointer-events-none before:z-10"
          ],
          o
        ),
        style: f,
        children: /* @__PURE__ */ l(
          me,
          {
            ref: i,
            variant: s,
            size: r,
            className: h(
              // Override border radius based on position
              "!rounded-none",
              d && "!rounded-l-[var(--button-group-item-radius)]",
              c && "!rounded-r-[var(--button-group-item-radius)]",
              // Remove inner borders for connected appearance
              !d && "!border-l-0",
              !c && "!border-r-0",
              u && "!border-l-0 !border-r-0"
            ),
            style: {
              "--button-group-item-radius": b
            },
            ...t
          }
        )
      }
    );
  }
);
ta.displayName = "ButtonGroupItem";
const Yo = de({}), ia = D(
  // Base styles for the outer container
  "flex",
  {
    variants: {},
    defaultVariants: {}
  }
), aa = D(
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
), la = P(
  ({
    className: o,
    disabled: e = !1,
    selected: n = !1,
    clickable: t,
    onClick: i,
    media: a,
    title: r,
    content: s,
    footer: m,
    children: d,
    ...c
  }, u) => {
    const b = t ?? !!i, p = (j) => {
      if (e) {
        j.stopPropagation(), j.preventDefault();
        return;
      }
      i == null || i(j);
    }, f = b ? "button" : void 0, g = b ? 0 : void 0, x = !!a, V = !!r, I = !!s || !!d, N = !!m;
    return /* @__PURE__ */ l(Yo.Provider, { value: { disabled: e, selected: n }, children: /* @__PURE__ */ l(
      "div",
      {
        ref: u,
        className: h(ia(), o),
        ...c,
        children: /* @__PURE__ */ A(
          "div",
          {
            role: f,
            tabIndex: g,
            className: h(
              aa({ clickable: b, selected: n, disabled: e })
            ),
            onClick: b ? p : void 0,
            onKeyDown: b ? (j) => {
              (j.key === "Enter" || j.key === " ") && (j.preventDefault(), p(j));
            } : void 0,
            children: [
              x && /* @__PURE__ */ l("div", { className: "block overflow-hidden", children: a }),
              /* @__PURE__ */ A("div", { className: "flex flex-col flex-1 self-stretch gap-2 p-4", children: [
                V && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 self-stretch", children: r }),
                I && /* @__PURE__ */ l("div", { className: "flex gap-[10px] self-stretch", children: /* @__PURE__ */ l(
                  "div",
                  {
                    className: h(
                      "max-w-full font-[var(--sinch-comp-card-v2-font-description)]",
                      !e && !n && "text-[var(--sinch-comp-card-v2-color-default-description-initial)]",
                      n && !e && "text-[var(--sinch-comp-card-v2-color-selected-description-initial)]",
                      e && !n && "text-[var(--sinch-comp-card-v2-color-default-description-disabled)]",
                      e && n && "text-[var(--sinch-comp-card-v2-color-selected-description-disabled)]"
                    ),
                    children: s ?? d
                  }
                ) }),
                N && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-4 self-stretch mt-auto", children: m })
              ] })
            ]
          }
        )
      }
    ) });
  }
);
la.displayName = "Card";
const sa = P(
  ({
    className: o,
    text: e,
    orientation: n = "horizontal",
    ellipsis: t = !1,
    icon: i,
    children: a,
    ...r
  }, s) => {
    const { disabled: m, selected: d } = be(Yo), c = n === "vertical", u = () => m && d ? "var(--sinch-comp-card-v2-color-selected-icon-disabled)" : m ? "var(--sinch-comp-card-v2-color-default-icon-disabled)" : d ? "var(--sinch-comp-card-v2-color-selected-icon-initial)" : "var(--sinch-comp-card-v2-color-default-icon-initial)", b = () => m && d ? "var(--sinch-comp-card-v2-color-selected-title-disabled)" : m ? "var(--sinch-comp-card-v2-color-default-title-disabled)" : "var(--sinch-comp-card-v2-color-default-title-initial)";
    return /* @__PURE__ */ A(
      "div",
      {
        ref: s,
        className: h(
          "flex items-center",
          c ? "flex-col items-start" : "flex-row",
          o
        ),
        ...r,
        children: [
          i && /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "flex",
                c ? "mb-2" : "mr-2"
              ),
              style: {
                "--sinch-global-color-icon": u(),
                "--sinch-global-size-icon": "var(--sinch-comp-card-v2-size-icon)"
              },
              children: i
            }
          ),
          /* @__PURE__ */ l(
            Je,
            {
              type: "m",
              ellipsis: t,
              className: "max-w-full font-[var(--sinch-comp-card-v2-font-title)]",
              style: { color: b() },
              children: e ?? a
            }
          )
        ]
      }
    );
  }
);
sa.displayName = "CardTitle";
const ra = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "div",
    {
      ref: t,
      className: h("block", o),
      ...n,
      children: /* @__PURE__ */ l(
        "div",
        {
          className: h(
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
ra.displayName = "CardContainer";
const Ko = de(null), ma = () => {
  const o = be(Ko);
  if (o === null)
    throw new Error("AccordionItem must be used within an Accordion component");
  return o;
}, ca = D(
  // Base styles
  "flex flex-col box-border w-full h-full",
  {
    variants: {},
    defaultVariants: {}
  }
);
function da(o) {
  return o.length === 0 ? /* @__PURE__ */ new Set() : new Set(o.split(",").map((e) => e.trim()).filter((e) => e.length > 0));
}
function ba(o) {
  return Array.from(o).join(",");
}
const Jo = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    multiple: t = !1,
    onChange: i,
    children: a,
    ...r
  }, s) => {
    const [m, d] = F(n), c = e !== void 0, b = da(c ? e : m), p = k(
      (f) => {
        let g;
        t ? (g = new Set(b), g.has(f) ? g.delete(f) : g.add(f)) : b.has(f) ? g = /* @__PURE__ */ new Set() : g = /* @__PURE__ */ new Set([f]);
        const x = ba(g);
        c || d(x), i == null || i(x);
      },
      [b, c, t, i]
    );
    return /* @__PURE__ */ l(
      Ko.Provider,
      {
        value: {
          expandedItems: b,
          multiple: t,
          toggleItem: p
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            className: h(ca(), o),
            ...r,
            children: a
          }
        )
      }
    );
  }
);
Jo.displayName = "Accordion";
const ua = D(
  // Base styles
  "block outline-none min-h-[48px]",
  {
    variants: {},
    defaultVariants: {}
  }
), ha = D(
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
), pa = D(
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
), ga = D(
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
), ka = D(
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
), Xo = P(
  ({
    className: o,
    value: e,
    label: n,
    optionalText: t,
    status: i,
    disabled: a = !1,
    icon: r,
    children: s,
    ...m
  }, d) => {
    const c = ma(), [u, b] = F(!1), p = Z(null), f = mo(), g = `accordion-content-${f}`, x = `accordion-button-${f}`, V = c.expandedItems.has(e), I = k(() => {
      a || c.toggleItem(e);
    }, [c, a, e]), N = k(
      (z) => {
        (z.key === "Enter" || z.key === " ") && (z.preventDefault(), a || c.toggleItem(e));
      },
      [c, a, e]
    ), j = k(() => {
      b(!0);
    }, []), v = k(() => {
      b(!1);
    }, []), y = () => a ? "text-[var(--sinch-comp-accordion-color-disabled-icon-initial)]" : "text-[var(--sinch-comp-accordion-color-default-icon-initial)]", w = () => a ? "text-[var(--sinch-comp-accordion-color-disabled-title-initial)]" : "text-[var(--sinch-comp-accordion-color-default-title-initial)]", T = () => a ? "text-[var(--sinch-comp-accordion-color-disabled-optional-text-initial)]" : "text-[var(--sinch-comp-accordion-color-default-optional-text-initial)]";
    return /* @__PURE__ */ l(
      "div",
      {
        ref: d,
        className: h(ua(), o),
        ...m,
        children: /* @__PURE__ */ A("div", { className: h(ha()), children: [
          /* @__PURE__ */ A(
            "button",
            {
              ref: p,
              id: x,
              type: "button",
              "aria-controls": g,
              "aria-expanded": V,
              disabled: a,
              className: h(pa({ isDisabled: a })),
              onClick: I,
              onKeyDown: N,
              onFocus: j,
              onBlur: v,
              children: [
                /* @__PURE__ */ l("div", { className: h(ka({ isFocused: u })) }),
                i !== void 0 && /* @__PURE__ */ l("div", { className: "w-[18px] h-6 py-2 pl-0.5 pr-2 box-border", children: /* @__PURE__ */ l("div", { className: h(ga({ status: i })) }) }),
                r !== void 0 && /* @__PURE__ */ l("span", { className: h("pointer-events-none", y()), children: r }),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: h(
                      "flex-1 min-w-0 truncate pointer-events-none",
                      "font-[var(--sinch-comp-accordion-font-title)]",
                      w()
                    ),
                    children: n
                  }
                ),
                t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
                  "span",
                  {
                    className: h(
                      "pointer-events-none",
                      "font-[var(--sinch-comp-accordion-font-optional-text)]",
                      T()
                    ),
                    children: t
                  }
                ),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: h(
                      "pointer-events-none transition-transform duration-[250ms] ease-in-out",
                      y(),
                      V && "rotate-180"
                    ),
                    children: /* @__PURE__ */ l(ne, { name: "fa-chevron-down" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              id: g,
              role: "region",
              "aria-labelledby": x,
              className: h(
                "overflow-hidden",
                "transition-[max-height,opacity] duration-[250ms] ease-in-out",
                V ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              ),
              children: /* @__PURE__ */ l("div", { className: "px-2 pb-3", children: s })
            }
          )
        ] })
      }
    );
  }
);
Xo.displayName = "AccordionItem";
const br = Object.assign(Jo, {
  Item: Xo
}), Qo = de(null), fa = () => {
  const o = be(Qo);
  if (o === null)
    throw new Error("ProgressStepperItem must be used within a ProgressStepper component");
  return o;
}, ja = D(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), va = D(
  "flex w-full",
  {
    variants: {},
    defaultVariants: {}
  }
), en = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    progressValue: t = "",
    "aria-label": i,
    onChange: a,
    children: r,
    ...s
  }, m) => {
    const [d, c] = F(n), u = Z(/* @__PURE__ */ new Map()), b = e !== void 0, p = b ? e : d, f = J(() => {
      const w = [];
      return He.forEach(r, (T) => {
        if (Ke(T) && typeof T.props == "object" && T.props !== null) {
          const z = T.props;
          typeof z.value == "string" && w.push(z.value);
        }
      }), w;
    }, [r]), g = k(
      (w) => {
        b || c(w), a == null || a(w);
      },
      [b, a]
    ), x = k(
      (w, T) => {
        u.current.set(w, T);
      },
      []
    ), V = k((w) => {
      u.current.delete(w);
    }, []), I = k((w) => {
      const T = f.indexOf(t), z = f.indexOf(w);
      return T < 0 || T < z ? "inactive" : T > z ? "complete" : "incomplete";
    }, [f, t]), N = k((w) => I(w) !== "inactive", [I]), j = k(() => f.filter((w) => N(w)).map((w) => ({
      value: w,
      element: u.current.get(w)
    })).filter((w) => w.element !== void 0), [f, N]), v = k(() => {
      const w = j();
      if (w.length === 0)
        return;
      const T = w.findIndex(($) => $.value === p), z = T < 0 ? 0 : (T + 1) % w.length;
      w[z].element.focus();
    }, [p, j]), y = k(() => {
      const w = j();
      if (w.length === 0)
        return;
      const T = w.findIndex(($) => $.value === p), z = T < 0 ? w.length - 1 : (T - 1 + w.length) % w.length;
      w[z].element.focus();
    }, [p, j]);
    return /* @__PURE__ */ l(
      Qo.Provider,
      {
        value: {
          value: p,
          progressValue: t,
          itemValues: f,
          onChange: g,
          registerItem: x,
          unregisterItem: V,
          focusNextItem: v,
          focusPrevItem: y
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: m,
            role: "tablist",
            "aria-label": i,
            "data-value": p,
            "data-progress-value": t,
            className: h(ja(), o),
            ...s,
            children: /* @__PURE__ */ l("div", { className: va(), children: r })
          }
        )
      }
    );
  }
);
en.displayName = "ProgressStepper";
const wa = D(
  // Base styles
  "flex-1 min-w-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), xa = D(
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
), ya = D(
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
), Na = D(
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
), Ca = D(
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
), Va = (o, e, n) => n ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-invalid-label-default)]" : o === "incomplete" && e ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-current-label-default)]" : o === "complete" && e ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-current-label-default)]" : o === "incomplete" ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-label-default)]" : o === "complete" ? "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-label-default)]" : "[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-inactive-label-default)]", Ia = (o, e, n) => n && e ? "[font:var(--sinch-comp-progress-stepper-step-font-invalid-current-label)]" : n ? "[font:var(--sinch-comp-progress-stepper-step-font-invalid-label)]" : o === "incomplete" && e ? "[font:var(--sinch-comp-progress-stepper-step-font-incomplete-current-label)]" : o === "complete" && e ? "[font:var(--sinch-comp-progress-stepper-step-font-complete-current-label)]" : o === "incomplete" ? "[font:var(--sinch-comp-progress-stepper-step-font-incomplete-label)]" : o === "complete" ? "[font:var(--sinch-comp-progress-stepper-step-font-complete-label)]" : "[font:var(--sinch-comp-progress-stepper-step-font-inactive-label)]", za = (o, e, n) => {
  const t = n.indexOf(e), i = n.indexOf(o);
  return t < 0 || t < i ? "inactive" : t > i ? "complete" : "incomplete";
}, on = P(
  ({
    className: o,
    value: e,
    text: n,
    invalid: t = !1,
    onKeyDown: i,
    ...a
  }, r) => {
    const s = fa(), [m, d] = F(!1), c = Z(null), u = s.value === e, b = za(e, s.progressValue, s.itemValues), p = b !== "inactive", f = k(
      (N) => {
        c.current = N, N !== null ? s.registerItem(e, N) : s.unregisterItem(e), r !== null && (typeof r == "function" ? r(N) : r.current = N);
      },
      [s, r, e]
    ), g = k(() => {
      p && s.onChange(e);
    }, [s, p, e]), x = k(
      (N) => {
        switch (N.code) {
          case "Enter":
          case "Space":
            N.preventDefault(), p && s.onChange(e);
            break;
          case "ArrowRight":
            N.preventDefault(), s.focusNextItem();
            break;
          case "ArrowLeft":
            N.preventDefault(), s.focusPrevItem();
            break;
        }
        i == null || i(N);
      },
      [s, p, i, e]
    ), V = k(() => {
      d(!0);
    }, []), I = k(() => {
      d(!1);
    }, []);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: f,
        role: "tab",
        "aria-selected": u,
        "aria-invalid": t || void 0,
        tabIndex: p ? 0 : -1,
        "data-status": b,
        "data-checked": u || void 0,
        "data-value": e,
        className: h(wa(), o),
        onClick: g,
        onKeyDown: x,
        onFocus: V,
        onBlur: I,
        ...a,
        children: /* @__PURE__ */ A("div", { className: h(xa({ status: b, invalid: t })), children: [
          /* @__PURE__ */ l("div", { className: h(Na({ status: b, invalid: t })), children: /* @__PURE__ */ l("div", { className: h(Ca({ status: b, invalid: t })) }) }),
          /* @__PURE__ */ A("div", { className: "relative", children: [
            /* @__PURE__ */ l(
              ne,
              {
                name: "triangle-exclamation",
                iconsVersion: "2",
                size: "xs",
                "aria-hidden": !0,
                className: h(
                  "absolute left-0 top-0 pointer-events-none transition-opacity",
                  "[--sinch-global-color-icon:var(--sinch-comp-progress-stepper-step-color-invalid-icon-default)]",
                  t ? "opacity-100" : "opacity-0"
                )
              }
            ),
            /* @__PURE__ */ l(
              "span",
              {
                className: h(
                  "flex-shrink min-w-0 transition-transform pr-6",
                  "text-[color:var(--sinch-global-color-text)]",
                  Va(b, u, t),
                  Ia(b, u, t),
                  t ? "translate-x-6" : "translate-x-0"
                ),
                children: n
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: h(ya({ isFocused: m })) })
        ] })
      }
    );
  }
);
on.displayName = "ProgressStepperItem";
const ur = Object.assign(en, {
  Item: on
}), Da = D(
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
), Ta = {
  pending: "var(--sinch-comp-file-status-color-pending-icon)",
  loading: "var(--sinch-comp-file-status-color-loading-icon)",
  progress: "var(--sinch-comp-file-status-color-progress-icon)",
  success: "var(--sinch-comp-file-status-color-success-icon)",
  error: "var(--sinch-comp-file-status-color-error-icon)"
}, Ma = {
  pending: "var(--sinch-comp-file-status-color-pending-text)",
  loading: "var(--sinch-comp-file-status-color-loading-text)",
  progress: "var(--sinch-comp-file-status-color-progress-text)",
  success: "var(--sinch-comp-file-status-color-success-text)",
  error: "var(--sinch-comp-file-status-color-error-text)"
}, Sa = {
  pending: "fa-clipboard-question",
  loading: null,
  // Uses Spinner instead
  progress: "fa-file-lines",
  success: "circle-check",
  error: "octagon-exclamation"
}, Oa = P(
  ({ className: o, type: e = "pending", filename: n, content: t, action: i, ...a }, r) => {
    const s = Ta[e], m = Ma[e], d = Sa[e], c = t != null;
    return /* @__PURE__ */ A(
      "div",
      {
        ref: r,
        className: h(Da({ type: e }), o),
        ...a,
        children: [
          e === "loading" ? /* @__PURE__ */ l(bo, { size: "m", style: { color: s } }) : /* @__PURE__ */ l(
            ne,
            {
              name: d,
              iconsVersion: "2",
              size: "md",
              style: { color: s }
            }
          ),
          /* @__PURE__ */ A("div", { className: "flex flex-col gap-2 flex-1 min-w-0 min-h-[24px] ml-4", children: [
            /* @__PURE__ */ l(
              Je,
              {
                type: "m",
                ellipsis: !0,
                emphasized: c,
                style: { color: m },
                children: n
              }
            ),
            t
          ] }),
          i && /* @__PURE__ */ l("div", { className: "flex gap-1 h-8 -mt-1 -mb-1", children: i })
        ]
      }
    );
  }
);
Oa.displayName = "FileStatus";
const Ea = P(
  ({ events: o, className: e, children: n, ...t }, i) => {
    const a = Z(null), r = k(
      (s) => {
        a.current = s, typeof i == "function" ? i(s) : i !== null && (i.current = s);
      },
      [i]
    );
    return X(() => {
      const s = a.current;
      if (s === null) return;
      const m = (d) => {
        d.stopPropagation();
      };
      for (const d of o)
        s.addEventListener(d, m);
      return () => {
        for (const d of o)
          s.removeEventListener(d, m);
      };
    }, [o]), /* @__PURE__ */ l(
      "div",
      {
        ref: r,
        className: h("contents", e),
        ...t,
        children: n
      }
    );
  }
);
Ea.displayName = "StopEvents";
const nn = de(null), tn = () => {
  const o = be(nn);
  if (o === null)
    throw new Error("TabsOption must be used within a Tabs component");
  return o;
}, Aa = D(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), La = D(
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
), po = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    "aria-label": t,
    onChange: i,
    children: a,
    ...r
  }, s) => {
    const [m, d] = F(n), c = Z(/* @__PURE__ */ new Map()), u = Z([]), b = e !== void 0, p = b ? e : m, f = k(
      (j) => {
        b || d(j), i == null || i(j);
      },
      [b, i]
    ), g = k(
      (j, v) => {
        c.current.has(j) || u.current.push(j), c.current.set(j, v);
      },
      []
    ), x = k((j) => {
      c.current.delete(j), u.current = u.current.filter((v) => v !== j);
    }, []), V = k(() => u.current.map((j) => ({ value: j, element: c.current.get(j) })).filter(
      (j) => j.element !== void 0 && !j.element.disabled
    ), []), I = k(() => {
      const j = V();
      if (j.length === 0)
        return;
      const v = j.findIndex((T) => T.value === p), y = v < 0 ? 0 : (v + 1) % j.length, w = j[y];
      w.element.focus(), f(w.value);
    }, [p, V, f]), N = k(() => {
      const j = V();
      if (j.length === 0)
        return;
      const v = j.findIndex((T) => T.value === p), y = v < 0 ? j.length - 1 : (v - 1 + j.length) % j.length, w = j[y];
      w.element.focus(), f(w.value);
    }, [p, V, f]);
    return /* @__PURE__ */ l(
      nn.Provider,
      {
        value: {
          value: p,
          onChange: f,
          registerOption: g,
          unregisterOption: x,
          focusNextOption: I,
          focusPrevOption: N
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            role: "tablist",
            "aria-label": t,
            "data-value": p,
            className: h(Aa(), o),
            ...r,
            children: /* @__PURE__ */ l("div", { className: h(La()), children: a })
          }
        )
      }
    );
  }
);
po.displayName = "Tabs";
const Pa = D(
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
), an = P(
  ({
    className: o,
    value: e,
    text: n,
    disabled: t = !1,
    icon: i,
    onKeyDown: a,
    ...r
  }, s) => {
    const m = tn(), d = Z(null), c = m.value === e, u = k(
      (x) => {
        d.current = x, x !== null ? m.registerOption(e, x) : m.unregisterOption(e), s !== null && (typeof s == "function" ? s(x) : s.current = x);
      },
      [m, s, e]
    ), b = k(() => {
      t || m.onChange(e);
    }, [m, t, e]), p = k(
      (x) => {
        switch (x.code) {
          case "ArrowLeft":
            x.preventDefault(), m.focusPrevOption();
            break;
          case "ArrowRight":
            x.preventDefault(), m.focusNextOption();
            break;
          case "Home":
            x.preventDefault(), m.focusPrevOption();
            break;
          case "End":
            x.preventDefault(), m.focusNextOption();
            break;
        }
        a == null || a(x);
      },
      [m, a]
    ), f = () => t ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]" : c ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]", g = () => t ? "" : "hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]";
    return /* @__PURE__ */ A(
      "button",
      {
        ref: u,
        type: "button",
        role: "tab",
        "aria-selected": c,
        disabled: t,
        tabIndex: t ? -1 : 0,
        className: h(
          Pa({ isChecked: c, isDisabled: t }),
          g(),
          f(),
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
          c && [
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
        onClick: b,
        onKeyDown: p,
        ...r,
        children: [
          i !== void 0 && /* @__PURE__ */ l("span", { className: "flex-shrink-0", children: i }),
          /* @__PURE__ */ l(
            "span",
            {
              className: h(
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
an.displayName = "TabsOption";
const Ra = D(
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
), go = P(
  ({
    className: o,
    value: e,
    "aria-label": n,
    disabled: t = !1,
    icon: i,
    onKeyDown: a,
    ...r
  }, s) => {
    const m = tn(), d = Z(null), c = m.value === e, u = k(
      (V) => {
        d.current = V, V !== null ? m.registerOption(e, V) : m.unregisterOption(e), s !== null && (typeof s == "function" ? s(V) : s.current = V);
      },
      [m, s, e]
    ), b = k(() => {
      t || m.onChange(e);
    }, [m, t, e]), p = k(
      (V) => {
        switch (V.code) {
          case "ArrowLeft":
            V.preventDefault(), m.focusPrevOption();
            break;
          case "ArrowRight":
            V.preventDefault(), m.focusNextOption();
            break;
          case "Home":
            V.preventDefault(), m.focusPrevOption();
            break;
          case "End":
            V.preventDefault(), m.focusNextOption();
            break;
        }
        a == null || a(V);
      },
      [m, a]
    ), f = () => t ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-disabled-icon-initial)]" : c ? "[--sinch-global-color-icon:var(--sinch-comp-tab-color-checked-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]", g = () => t ? "" : "hover:bg-[var(--sinch-comp-tab-color-default-background-hover)]", x = /* @__PURE__ */ l(
      "button",
      {
        ref: u,
        type: "button",
        role: "tab",
        "aria-selected": c,
        "aria-label": n,
        disabled: t,
        tabIndex: t ? -1 : 0,
        className: h(
          Ra({ isChecked: c, isDisabled: t }),
          g(),
          f(),
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
          c && [
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
        onClick: b,
        onKeyDown: p,
        ...r,
        children: i
      }
    );
    return /* @__PURE__ */ l(Xe, { text: n, orientation: "top", type: "fast", children: x });
  }
);
go.displayName = "TabsIconOption";
const hr = Object.assign(po, {
  Option: an,
  IconOption: go
}), ln = de(null), $a = () => {
  const o = be(ln);
  if (o === null)
    throw new Error("SegmentedControlOption must be used within a SegmentedControl component");
  return o;
}, Fa = D(
  // Base styles
  "flex flex-row w-full box-border relative z-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), ko = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    "aria-label": t,
    onChange: i,
    children: a,
    ...r
  }, s) => {
    const [m, d] = F(n), c = Z(/* @__PURE__ */ new Map()), u = e !== void 0, b = u ? e : m, p = k(
      (N) => {
        u || d(N), i == null || i(N);
      },
      [u, i]
    ), f = k(
      (N, j) => {
        c.current.set(N, j);
      },
      []
    ), g = k((N) => {
      c.current.delete(N);
    }, []), x = k(() => Array.from(c.current.entries()).filter(([, N]) => N.getAttribute("aria-disabled") !== "true").map(([N, j]) => ({ value: N, element: j })), []), V = k(() => {
      const N = x();
      if (N.length === 0)
        return;
      const j = N.findIndex((w) => w.value === b), v = j < 0 ? 0 : (j + 1) % N.length;
      N[v].element.focus();
    }, [b, x]), I = k(() => {
      const N = x();
      if (N.length === 0)
        return;
      const j = N.findIndex((w) => w.value === b), v = j < 0 ? N.length - 1 : (j - 1 + N.length) % N.length;
      N[v].element.focus();
    }, [b, x]);
    return /* @__PURE__ */ l(
      ln.Provider,
      {
        value: {
          value: b,
          onChange: p,
          registerOption: f,
          unregisterOption: g,
          focusNextOption: V,
          focusPrevOption: I
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: s,
            role: "tablist",
            "aria-label": t,
            "aria-orientation": "horizontal",
            "data-value": b,
            className: h(Fa(), o),
            ...r,
            children: a
          }
        )
      }
    );
  }
);
ko.displayName = "SegmentedControl";
const _a = D(
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
), Ua = D(
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
), Ha = D(
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
), Ge = P(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    text: t,
    "aria-label": i,
    icon: a,
    isFirst: r = !1,
    isLast: s = !1,
    onKeyDown: m,
    ...d
  }, c) => {
    const u = $a(), [b, p] = F(!1), f = Z(null), g = u.value === e, x = k(
      (v) => {
        f.current = v, v !== null ? u.registerOption(e, v) : u.unregisterOption(e), c !== null && (typeof c == "function" ? c(v) : c.current = v);
      },
      [u, c, e]
    ), V = k(() => {
      n || u.onChange(e);
    }, [u, n, e]), I = k(
      (v) => {
        switch (v.code) {
          case "ArrowUp":
          case "ArrowLeft":
            v.preventDefault(), u.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            v.preventDefault(), u.focusNextOption();
            break;
          case "Space":
          case "Enter":
            v.preventDefault(), n || u.onChange(e);
            break;
        }
        m == null || m(v);
      },
      [u, n, m, e]
    ), N = k(() => {
      p(!0);
    }, []), j = k(() => {
      p(!1);
    }, []);
    return /* @__PURE__ */ A(
      "div",
      {
        ref: x,
        role: "tab",
        "aria-selected": g,
        "aria-disabled": n,
        "aria-label": i ?? t,
        tabIndex: n ? -1 : 0,
        "data-checked": g || void 0,
        className: h(
          _a({
            isChecked: g,
            isDisabled: n,
            isFirst: r,
            isLast: s
          }),
          o
        ),
        onClick: V,
        onKeyDown: I,
        onFocus: N,
        onBlur: j,
        ...d,
        children: [
          a !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: "block pointer-events-none",
              style: {
                color: n ? "var(--sinch-comp-segmented-control-color-disabled-icon-initial)" : g ? "var(--sinch-comp-segmented-control-color-checked-icon-initial)" : "var(--sinch-comp-segmented-control-color-default-icon-initial)"
              },
              children: a
            }
          ),
          t !== void 0 && t.length > 0 && /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-shrink overflow-hidden whitespace-nowrap text-ellipsis pointer-events-none",
                "font-[var(--sinch-comp-segmented-control-font-label)]"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                Ua({
                  isChecked: g,
                  isDisabled: n,
                  isFirst: r,
                  isLast: s
                })
              )
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                Ha({
                  isFocused: b,
                  isFirst: r,
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
Ge.displayName = "SegmentedControlOption";
const pr = Object.assign(ko, {
  Option: Ge
}), sn = de(null), Ba = () => {
  const o = be(sn);
  if (o === null)
    throw new Error("SegmentedIconControlOption must be used within a SegmentedIconControl component");
  return o;
}, We = (o) => o === "" ? [] : o.split(",").filter(Boolean), Ga = (o, e, n) => {
  const t = We(o);
  if (n)
    t.includes(e) || t.push(e);
  else {
    const i = t.indexOf(e);
    i !== -1 && t.splice(i, 1);
  }
  return t.join(",");
}, Wa = (o) => We(o)[0] ?? "", Za = D(
  // Base styles
  "flex flex-row w-full box-border relative z-0 outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), rn = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    multiple: t = !1,
    "aria-label": i,
    onChange: a,
    children: r,
    ...s
  }, m) => {
    const [d, c] = F(n), u = Z(/* @__PURE__ */ new Map()), b = e !== void 0, p = b ? e : d, f = t ? We(p) : [Wa(p)], g = k(
      (v) => {
        let y;
        if (t) {
          const w = We(p).includes(v);
          y = Ga(p, v, !w);
        } else
          y = v;
        b || c(y), a == null || a(y);
      },
      [p, b, t, a]
    ), x = k(
      (v, y) => {
        u.current.set(v, y);
      },
      []
    ), V = k((v) => {
      u.current.delete(v);
    }, []), I = k(() => Array.from(u.current.entries()).filter(([, v]) => v.getAttribute("aria-disabled") !== "true").map(([v, y]) => ({ value: v, element: y })), []), N = k(() => {
      const v = I();
      if (v.length === 0)
        return;
      const y = document.activeElement, w = v.findIndex((O) => O.element === y), T = w < 0 ? 0 : (w + 1) % v.length;
      v[T].element.focus();
    }, [I]), j = k(() => {
      const v = I();
      if (v.length === 0)
        return;
      const y = document.activeElement, w = v.findIndex((O) => O.element === y), T = w < 0 ? v.length - 1 : (w - 1 + v.length) % v.length;
      v[T].element.focus();
    }, [I]);
    return /* @__PURE__ */ l(
      sn.Provider,
      {
        value: {
          value: f,
          multiple: t,
          onChange: g,
          registerOption: x,
          unregisterOption: V,
          focusNextOption: N,
          focusPrevOption: j
        },
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: m,
            role: "tablist",
            "aria-label": i,
            "aria-orientation": "horizontal",
            "data-value": p,
            "data-multiple": t || void 0,
            className: h(Za(), o),
            ...s,
            children: r
          }
        )
      }
    );
  }
);
rn.displayName = "SegmentedIconControl";
const qa = D(
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
), Ya = D(
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
), Ka = D(
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
), mn = P(
  ({
    className: o,
    value: e,
    disabled: n = !1,
    "aria-label": t,
    icon: i,
    isFirst: a = !1,
    isLast: r = !1,
    onKeyDown: s,
    ...m
  }, d) => {
    const c = Ba(), [u, b] = F(!1), p = Z(null), f = c.value.includes(e), g = k(
      (v) => {
        p.current = v, v !== null ? c.registerOption(e, v) : c.unregisterOption(e), d !== null && (typeof d == "function" ? d(v) : d.current = v);
      },
      [c, d, e]
    ), x = k(() => {
      n || c.onChange(e);
    }, [c, n, e]), V = k(
      (v) => {
        switch (v.code) {
          case "ArrowUp":
          case "ArrowLeft":
            v.preventDefault(), c.focusPrevOption();
            break;
          case "ArrowDown":
          case "ArrowRight":
            v.preventDefault(), c.focusNextOption();
            break;
          case "Space":
          case "Enter":
            v.preventDefault(), n || c.onChange(e);
            break;
        }
        s == null || s(v);
      },
      [c, n, s, e]
    ), I = k(() => {
      b(!0);
    }, []), N = k(() => {
      b(!1);
    }, []), j = n ? "var(--sinch-comp-segmented-control-color-disabled-icon-initial)" : f ? "var(--sinch-comp-segmented-control-color-checked-icon-initial)" : "var(--sinch-comp-segmented-control-color-default-icon-initial)";
    return /* @__PURE__ */ A(
      "div",
      {
        ref: g,
        role: "tab",
        "aria-selected": f,
        "aria-disabled": n,
        "aria-label": t,
        tabIndex: n ? -1 : 0,
        "data-checked": f || void 0,
        className: h(
          qa({
            isChecked: f,
            isDisabled: n,
            isFirst: a,
            isLast: r
          }),
          o
        ),
        onClick: x,
        onKeyDown: V,
        onFocus: I,
        onBlur: N,
        ...m,
        children: [
          /* @__PURE__ */ l(
            "span",
            {
              className: "block pointer-events-none",
              style: {
                color: j,
                // Icon size from component tokens
                fontSize: "var(--sinch-comp-segmented-control-size-icon, 24px)"
              },
              children: i
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                Ya({
                  isChecked: f,
                  isDisabled: n,
                  isFirst: a,
                  isLast: r
                })
              )
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                Ka({
                  isFocused: u,
                  isFirst: a,
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
mn.displayName = "SegmentedIconControlOption";
const gr = Object.assign(rn, {
  Option: mn
}), Ja = (o, e) => {
  if (e === null)
    return !0;
  const n = e.split(/\s*,\s*/);
  return o.every((t) => n.some((i) => i.startsWith(".") ? t.name.endsWith(i) : i === "image/*" ? t.type.startsWith("image/") : i === "video/*" ? t.type.startsWith("video/") : i === "audio/*" ? t.type.startsWith("audio/") : i === t.type));
}, Xa = (o, e) => {
  if (e === null)
    return !0;
  const n = e.split(/\s*,\s*/);
  return o.every((t) => n.some((i) => i === "image/*" ? t.type.startsWith("image/") : i === "video/*" ? t.type.startsWith("video/") : i === "audio/*" ? t.type.startsWith("audio/") : i === t.type));
}, Io = (o, e) => e === null || e <= 0 ? !0 : o.every((n) => n.size <= e), Qa = D(
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
), el = D(
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
), ol = D(
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
), nl = P(
  ({
    className: o,
    multiple: e = !1,
    accept: n,
    maxSize: t,
    disabled: i = !1,
    invalid: a = !1,
    placeholder: r,
    buttonText: s = "Choose file",
    onChange: m,
    onInvalid: d,
    children: c,
    ...u
  }, b) => {
    const p = Z(null), [f, g] = F(!1), [x, V] = F(!1), I = f && !x, N = k(
      (z) => {
        var C;
        if (z.stopPropagation(), z.preventDefault(), i)
          return;
        const O = (C = z.dataTransfer) == null ? void 0 : C.items;
        let $ = !1;
        if (O !== void 0 && O.length > 0) {
          const E = Array.from(O);
          $ = Xa(E, n ?? null);
        }
        g(!0), V($);
      },
      [i, n]
    ), j = k(
      (z) => {
        z.stopPropagation(), z.preventDefault(), g(!1), V(!1);
      },
      []
    ), v = k(
      (z) => {
        z.stopPropagation(), z.preventDefault();
      },
      []
    ), y = k(
      (z) => {
        if (z.stopPropagation(), z.preventDefault(), g(!1), V(!1), i)
          return;
        const O = z.dataTransfer;
        if (O === null || O.files.length === 0)
          return;
        if (!e && O.files.length > 1) {
          d == null || d("multiple");
          return;
        }
        const $ = Array.from(O.files);
        if (!Ja($, n ?? null)) {
          d == null || d("accept");
          return;
        }
        if (!Io($, t ?? null)) {
          d == null || d("size");
          return;
        }
        m == null || m($);
      },
      [i, e, n, t, m, d]
    ), w = k(
      (z) => {
        const O = z.target.files;
        if (O === null || O.length === 0)
          return;
        const $ = Array.from(O);
        if (!Io($, t ?? null)) {
          d == null || d("size"), z.target.value = "";
          return;
        }
        m == null || m($), z.target.value = "";
      },
      [t, m, d]
    ), T = k(() => {
      var z;
      i || (z = p.current) == null || z.click();
    }, [i]);
    return /* @__PURE__ */ A(
      "div",
      {
        ref: b,
        className: h(
          Qa({
            isInvalid: a,
            isDisabled: i,
            isDragging: f,
            isDragValid: f && x,
            isDragInvalid: f && I
          }),
          o
        ),
        onDragEnter: N,
        onDragLeave: j,
        onDragOver: v,
        onDrop: y,
        ...u,
        children: [
          r !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: h(
                ol({
                  isDisabled: i,
                  isDragValid: f && x,
                  isDragInvalid: f && I
                })
              ),
              "aria-hidden": "true",
              children: r
            }
          ),
          /* @__PURE__ */ l(
            "input",
            {
              ref: p,
              type: "file",
              className: "sr-only",
              multiple: e,
              accept: n,
              disabled: i,
              onChange: w,
              "aria-label": "File input"
            }
          ),
          c !== void 0 ? /* @__PURE__ */ l("div", { onClick: T, children: c }) : /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: T,
              disabled: i,
              className: h(
                "inline-flex items-center justify-center",
                "px-4 py-2 rounded-md",
                "bg-surface-primary border border-border",
                "text-foreground font-sans text-sm",
                "hover:bg-surface-primary-hover",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              ),
              children: s
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                el({
                  isInvalid: a,
                  isDisabled: i,
                  isDragging: f,
                  isDragValid: f && x,
                  isDragInvalid: f && I
                })
              )
            }
          )
        ]
      }
    );
  }
);
nl.displayName = "FileDrop";
const tl = (o, e) => e == null || e <= 0 ? !0 : o.every((n) => n.size <= e), il = P(
  ({
    className: o,
    children: e,
    multiple: n,
    accept: t,
    maxSize: i,
    onChange: a,
    onInvalid: r,
    ...s
  }, m) => {
    const d = Z(null), c = k(() => {
      var b;
      (b = d.current) == null || b.click();
    }, []), u = k(
      (b) => {
        const p = b.target.files;
        if (p === null)
          return;
        const f = Array.from(p);
        if (b.target.value = "", !tl(f, i)) {
          r == null || r("size");
          return;
        }
        a == null || a(f);
      },
      [i, a, r]
    );
    return /* @__PURE__ */ A(
      "div",
      {
        ref: m,
        className: h("inline-block", o),
        ...s,
        children: [
          /* @__PURE__ */ l(
            "input",
            {
              ref: d,
              type: "file",
              className: "hidden",
              multiple: n,
              accept: t,
              onChange: u
            }
          ),
          /* @__PURE__ */ l("div", { onClick: c, className: "cursor-pointer", children: e })
        ]
      }
    );
  }
);
il.displayName = "FilePicker";
const al = D(
  // Base styles
  [
    "fixed",
    "m-0",
    "grid",
    "grid-rows-[auto_1fr_auto]",
    "p-[var(--sinch-comp-sheet-size-padding,24px)]",
    "gap-[var(--sinch-comp-sheet-size-gap,16px)]",
    "box-border",
    "bg-[var(--sinch-comp-sheet-color-background,white)]",
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
        push: "opacity-50"
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
), ll = D(
  [
    "fixed",
    "inset-0",
    "z-40",
    "bg-gradient-to-b",
    "from-[var(--sinch-comp-sheet-color-backdrop-from,rgba(0,0,0,0.5))]",
    "to-[var(--sinch-comp-sheet-color-backdrop-to,rgba(0,0,0,0.5))]",
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
), sl = P(
  ({
    className: o,
    children: e,
    open: n = !1,
    placement: t = "right",
    overlay: i = "modal",
    onClose: a,
    onSheetAnimationStart: r,
    onSheetAnimationEnd: s,
    title: m,
    footer: d,
    container: c,
    id: u,
    style: b,
    "data-testid": p
  }, f) => {
    const g = Z(null), [x, V] = F(!1), [I, N] = F(!1), j = Z(null);
    Le(f, () => g.current), X(() => {
      n ? (j.current = document.activeElement, V(!0), requestAnimationFrame(() => {
        N(!0);
      }), i === "modal" && (document.body.style.overflow = "hidden")) : x && N(!1);
    }, [n, i, x]), X(() => {
      if (!n) return;
      const z = (O) => {
        O.key === "Escape" && (O.preventDefault(), O.stopPropagation(), a == null || a("escape"));
      };
      return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
    }, [n, a]);
    const v = k(() => {
      var z, O;
      return {
        action: I ? "expand" : "collapse",
        width: ((z = g.current) == null ? void 0 : z.offsetWidth) ?? 0,
        height: ((O = g.current) == null ? void 0 : O.offsetHeight) ?? 0,
        duration: g.current && getComputedStyle(g.current).getPropertyValue("--sinch-comp-sheet-animation-duration") || "300ms",
        easing: g.current && getComputedStyle(g.current).getPropertyValue("--sinch-comp-sheet-animation-easing") || "cubic-bezier(0.25, 1, 0.5, 1)"
      };
    }, [I]);
    X(() => {
      const z = g.current;
      if (!z || !r) return;
      const O = ($) => {
        $.propertyName === "transform" && r(v());
      };
      return z.addEventListener("transitionstart", O), () => z.removeEventListener("transitionstart", O);
    }, [r, v]);
    const y = k(
      (z) => {
        var O;
        z.propertyName === "transform" && (s == null || s(v()), I || (V(!1), i === "modal" && (document.body.style.overflow = ""), (O = j.current) == null || O.focus()));
      },
      [I, s, i, v]
    ), w = k(
      (z) => {
        z.target === z.currentTarget && (a == null || a("backdrop"));
      },
      [a]
    );
    if (X(() => {
      if (!n || i !== "modal" || !g.current) return;
      const O = g.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), $ = O[0], C = O[O.length - 1];
      $ == null || $.focus();
      const E = (_) => {
        _.key === "Tab" && (_.shiftKey ? document.activeElement === $ && (_.preventDefault(), C == null || C.focus()) : document.activeElement === C && (_.preventDefault(), $ == null || $.focus()));
      };
      return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
    }, [n, i]), !x && !n) return null;
    const T = /* @__PURE__ */ A(Ne, { children: [
      i === "modal" && /* @__PURE__ */ l(
        "div",
        {
          className: h(ll({ visible: I })),
          onClick: w,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ A(
        "div",
        {
          ref: g,
          role: "dialog",
          "aria-modal": i === "modal",
          "aria-labelledby": m ? "sheet-title" : void 0,
          "aria-describedby": "sheet-content",
          id: u,
          style: b,
          "data-testid": p,
          className: h(
            "z-50",
            al({
              placement: t,
              overlay: i,
              open: I
            }),
            o
          ),
          onTransitionEnd: y,
          children: [
            m && /* @__PURE__ */ l("div", { id: "sheet-title", children: m }),
            /* @__PURE__ */ l(
              "div",
              {
                id: "sheet-content",
                className: "min-h-0 overflow-auto overscroll-contain",
                children: e
              }
            ),
            d && /* @__PURE__ */ l("div", { className: "flex flex-row justify-end gap-4", children: d })
          ]
        }
      )
    ] });
    return Pe(T, c ?? document.body);
  }
);
sl.displayName = "Sheet";
const rl = D(
  // Base styles
  ["contents"]
), ml = P(
  ({
    className: o,
    title: e,
    description: n,
    onClose: t,
    closeAriaLabel: i = "Close",
    icon: a,
    hideCloseButton: r = !1,
    ...s
  }, m) => {
    const d = k(() => {
      t == null || t();
    }, [t]);
    return /* @__PURE__ */ A("div", { ref: m, className: h(rl(), o), ...s, children: [
      /* @__PURE__ */ A("div", { className: "flex flex-row items-center gap-2 mt-2", children: [
        a && /* @__PURE__ */ l("span", { className: "shrink-0", children: a }),
        /* @__PURE__ */ l(
          ho,
          {
            type: "m",
            level: "3",
            className: "text-[var(--sinch-comp-sheet-color-title)] [font:var(--sinch-comp-sheet-font-title)]",
            children: e
          }
        ),
        !r && /* @__PURE__ */ l(
          me,
          {
            size: "s",
            "aria-label": i,
            onClick: d,
            className: "ml-auto",
            icon: /* @__PURE__ */ l(ne, { name: "fa-xmark", iconsVersion: "2", size: "sm" })
          }
        )
      ] }),
      n && /* @__PURE__ */ l("p", { className: "text-[var(--sinch-comp-sheet-color-description)] [font:var(--sinch-comp-sheet-font-description)] m-0", children: n })
    ] });
  }
);
ml.displayName = "SheetTitle";
const cl = 5e3, Re = 250, dl = D(
  // Base styles
  [
    "flex",
    "flex-row",
    "items-center",
    "gap-2",
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
), bl = {
  success: "var(--sinch-comp-toast-color-success-default-icon)",
  warn: "var(--sinch-comp-toast-color-warning-default-icon)",
  error: "var(--sinch-comp-toast-color-error-default-icon)",
  info: "var(--sinch-comp-toast-color-info-default-icon)"
}, ul = {
  success: "var(--sinch-comp-toast-color-success-default-text)",
  warn: "var(--sinch-comp-toast-color-warning-default-text)",
  error: "var(--sinch-comp-toast-color-error-default-text)",
  info: "var(--sinch-comp-toast-color-info-default-text)"
}, hl = {
  info: "circle-info",
  success: "circle-check",
  warn: "triangle-exclamation",
  error: "octagon-exclamation"
}, cn = P(
  ({
    className: o,
    type: e = "info",
    text: n,
    persistent: t = !1,
    onTimeout: i,
    action: a,
    close: r,
    children: s,
    ...m
  }, d) => {
    const c = Z(null);
    X(() => {
      if (t) {
        c.current !== null && (window.clearTimeout(c.current), c.current = null);
        return;
      }
      return c.current = window.setTimeout(() => {
        i == null || i(), c.current = null;
      }, cl), () => {
        c.current !== null && (window.clearTimeout(c.current), c.current = null);
      };
    }, [t, i]);
    const u = hl[e], b = bl[e], p = ul[e];
    return /* @__PURE__ */ A(
      "div",
      {
        ref: d,
        role: "alert",
        "aria-atomic": "true",
        className: h(dl({ type: e }), o),
        ...m,
        children: [
          /* @__PURE__ */ l(
            ne,
            {
              name: u,
              iconsVersion: "2",
              className: "self-start my-1",
              style: { color: b }
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: "flex-1 min-w-0 break-words py-1 pl-1 font-[var(--sinch-comp-toast-font-body)]",
              style: { color: p },
              children: n ?? s
            }
          ),
          a,
          r
        ]
      }
    );
  }
);
cn.displayName = "Toast";
function pl(o, e) {
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
const dn = de(null);
function kr({
  children: o,
  origin: e = "bottom-right",
  reduceMotion: n = !1
}) {
  const [t, i] = Cn(pl, { toasts: [] }), a = k((d) => {
    const c = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    return i({ type: "ADD_TOAST", payload: { ...d, id: c } }), c;
  }, []), r = k((d) => {
    i({ type: "REMOVE_TOAST", payload: { id: d } });
  }, []), s = k(() => {
    i({ type: "CLEAR_ALL" });
  }, []), m = J(
    () => ({
      toasts: t.toasts,
      addToast: a,
      removeToast: r,
      clearAll: s
    }),
    [t.toasts, a, r, s]
  );
  return /* @__PURE__ */ A(dn.Provider, { value: m, children: [
    o,
    /* @__PURE__ */ l(kl, { origin: e, reduceMotion: n })
  ] });
}
function gl() {
  const o = be(dn);
  if (o === null)
    throw new Error("useToast must be used within a ToastProvider");
  return o;
}
function kl({ origin: o, reduceMotion: e }) {
  const { toasts: n, removeToast: t } = gl(), i = J(() => n.some(
    (r) => r.type === "error" || r.type === "warn"
  ) ? "assertive" : "polite", [n]);
  return /* @__PURE__ */ l(
    "div",
    {
      className: h(
        "fixed z-50 right-4 flex flex-col gap-4",
        o === "top-right" ? "top-4 flex-col-reverse" : "bottom-4"
      ),
      "aria-live": i,
      children: n.map((a) => /* @__PURE__ */ l(
        fl,
        {
          toast: a,
          onRemove: () => t(a.id),
          reduceMotion: e
        },
        a.id
      ))
    }
  );
}
function fl({ toast: o, onRemove: e, reduceMotion: n }) {
  const [t, i] = F(!0), [a, r] = F(!1), s = Z(null);
  X(() => {
    if (n) {
      i(!1);
      return;
    }
    const c = setTimeout(() => {
      i(!1);
    }, Re);
    return () => clearTimeout(c);
  }, [n]);
  const m = k(() => {
    if (n) {
      e();
      return;
    }
    r(!0), setTimeout(() => {
      e();
    }, Re);
  }, [e, n]), d = k(() => {
    if (n) {
      e();
      return;
    }
    r(!0), setTimeout(() => {
      e();
    }, Re);
  }, [e, n]);
  return /* @__PURE__ */ l(
    "div",
    {
      ref: s,
      className: h(
        "transition-all",
        !n && "duration-250 ease-out",
        t && "opacity-0 translate-y-2",
        a && "opacity-0 -translate-y-2",
        !t && !a && "opacity-100 translate-y-0"
      ),
      style: {
        transitionDuration: n ? "0ms" : `${Re}ms`
      },
      children: /* @__PURE__ */ l(
        cn,
        {
          type: o.type,
          text: o.text,
          persistent: o.persistent,
          onTimeout: m,
          action: o.action,
          close: o.close !== void 0 ? /* @__PURE__ */ l("div", { onClick: d, children: o.close }) : void 0
        }
      )
    }
  );
}
const jl = P(
  ({ className: o, origin: e = "bottom-right", children: n, ...t }, i) => {
    const [a, r] = F([]), s = J(() => {
      const d = [];
      return Ue.Children.forEach(n, (c) => {
        Ue.isValidElement(c) && d.push(c);
      }), d;
    }, [n]);
    X(() => {
      r(s);
    }, [s]);
    const m = J(() => a.some((c) => {
      var b;
      const u = (b = c.props) == null ? void 0 : b.type;
      return u === "error" || u === "warn";
    }) ? "assertive" : "polite", [a]);
    return /* @__PURE__ */ A("div", { ref: i, className: h("block", o), ...t, children: [
      /* @__PURE__ */ l("div", { className: "w-0 h-0 overflow-hidden invisible", children: n }),
      /* @__PURE__ */ l(
        "div",
        {
          className: h(
            "fixed z-50 right-4 flex flex-col",
            e === "top-right" ? "top-4 flex-col-reverse" : "bottom-0"
          ),
          "aria-live": m,
          children: a.map((d, c) => /* @__PURE__ */ l("div", { className: "mb-4", children: d }, d.key ?? c))
        }
      )
    ] });
  }
);
jl.displayName = "ToastManager";
const fr = {
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
}, $e = 16, vl = D(
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
), wl = D(
  [
    "bg-[var(--sinch-comp-popover-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]",
    "border",
    "border-[var(--sinch-comp-popover-color-default-border-initial,var(--sinch-sys-color-border-default))]",
    "rounded-[var(--sinch-comp-popover-shape-radius,8px)]",
    "shadow-[var(--sinch-comp-popover-shadow,0_4px_16px_rgba(0,0,0,0.12))]",
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
), xl = D(
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
), yl = D(
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
), bn = P(
  ({
    className: o,
    children: e,
    content: n,
    open: t = !1,
    orientation: i = "bottom-left",
    tip: a = !1,
    modal: r = !1,
    allowScroll: s = !1,
    onClose: m,
    "aria-label": d,
    ...c
  }, u) => {
    const [b, p] = F({ x: 0, y: 0 }), [f, g] = F({}), [x, V] = F(!1), [I, N] = F(void 0), j = Z(null), v = Z(null), w = `popover-content-${mo()}`, T = k(() => {
      if (j.current === null || v.current === null)
        return;
      const C = j.current.getBoundingClientRect(), E = v.current.getBoundingClientRect(), _ = 4;
      let L = 0, R = 0;
      i === "bottom-right" || i === "top-right" || i === "bottom" || i === "top" ? L = C.x : i === "bottom-left" || i === "top-left" ? L = C.x + C.width - E.width : i === "right" ? L = C.x + C.width : i === "left" && (L = C.x - E.width), i.startsWith("bottom") ? R = C.y + C.height : i.startsWith("top") ? R = C.y - E.height : (i === "left" || i === "right") && (R = C.y + C.height / 2 - E.height / 2);
      const U = Math.max(_, Math.min(L, window.innerWidth - E.width - _)), G = Math.max(_, Math.min(R, window.innerHeight - E.height - _));
      p({ x: U, y: G });
      const q = window.innerWidth - U - 16;
      N(q), a && z(C, E, U, G);
    }, [i, a]), z = (C, E, _, L) => {
      const R = {};
      if (i.startsWith("top") || i.startsWith("bottom")) {
        let q = C.x - _ + C.width / 2;
        (i === "bottom-left" || i === "top-left") && (q = Math.max(q, E.width * 0.75)), (i === "bottom-right" || i === "top-right") && (q = Math.min(q, E.width * 0.25));
        const H = Math.max($e, Math.min(q, E.width - $e));
        R.left = `${H}px`;
      } else if (i === "left" || i === "right") {
        const q = C.y - L + C.height / 2, H = Math.max($e, Math.min(q, E.height - $e));
        R.top = `${H}px`;
      }
      g(R);
      const U = !(C.right < E.left || C.left > E.right || C.bottom < E.top || C.top > E.bottom);
      V(U);
    };
    Ao(() => {
      t && T();
    }, [t, T]), X(() => {
      if (!t)
        return;
      const C = () => {
        T();
      }, E = new ResizeObserver(C);
      if (v.current !== null && E.observe(v.current), window.addEventListener("resize", C), s && j.current !== null) {
        const _ = () => T();
        return window.addEventListener("scroll", _, { passive: !0, capture: !0 }), () => {
          E.disconnect(), window.removeEventListener("resize", C), window.removeEventListener("scroll", _, { capture: !0 });
        };
      }
      return () => {
        E.disconnect(), window.removeEventListener("resize", C);
      };
    }, [t, s, T]), X(() => {
      if (!t)
        return;
      const C = (E) => {
        E.key === "Escape" && (E.preventDefault(), m == null || m());
      };
      return document.addEventListener("keydown", C), () => {
        document.removeEventListener("keydown", C);
      };
    }, [t, m]), X(() => {
      if (t && !s) {
        const C = document.body.style.overflow;
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = C;
        };
      }
    }, [t, s]);
    const O = k((C) => {
      C.target === C.currentTarget && (m == null || m());
    }, [m]);
    X(() => {
      if (!t || r)
        return;
      const C = (_) => {
        v.current !== null && !v.current.contains(_.target) && j.current !== null && !j.current.contains(_.target) && (m == null || m());
      }, E = setTimeout(() => {
        document.addEventListener("mousedown", C);
      }, 0);
      return () => {
        clearTimeout(E), document.removeEventListener("mousedown", C);
      };
    }, [t, r, m]);
    const $ = t && /* @__PURE__ */ A(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: h(yl({ modal: r })),
          onClick: O,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          ref: v,
          role: "dialog",
          "aria-modal": r,
          "aria-label": d,
          "aria-labelledby": d !== void 0 ? void 0 : w,
          className: h(
            "fixed z-50",
            a && "drop-shadow-[var(--sinch-comp-popover-shadow,0_4px_16px_rgba(0,0,0,0.12))]"
          ),
          style: {
            left: b.x,
            top: b.y,
            maxWidth: I
          },
          children: /* @__PURE__ */ A("div", { className: h(vl({ orientation: i, tip: a })), children: [
            /* @__PURE__ */ l("div", { className: h(wl({ tip: a }), o), children: n }),
            a && /* @__PURE__ */ l(
              "svg",
              {
                className: h(xl({ orientation: i, hidden: x })),
                style: f,
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
    return /* @__PURE__ */ A(
      "div",
      {
        ref: u,
        className: "contents",
        ...c,
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              ref: j,
              "aria-controls": w,
              "aria-haspopup": "dialog",
              "aria-expanded": t,
              children: e
            }
          ),
          Pe($, document.body)
        ]
      }
    );
  }
);
bn.displayName = "Popover";
const Nl = 40, un = de(null), Cl = () => {
  const o = be(un);
  if (!o)
    throw new Error("ActionMenuOption must be used within an ActionMenu");
  return o;
}, Vl = P(
  ({ className: o, rows: e, children: n, "aria-label": t, onKeyDown: i, onBlur: a, ...r }, s) => {
    const [m, d] = F(null), c = Z(/* @__PURE__ */ new Map()), u = Z(null), b = Z(null);
    Le(s, () => u.current);
    const p = k((y, w, T) => {
      c.current.set(y, { disabled: w, onClick: T });
    }, []), f = k(() => {
      const y = [];
      return c.current.forEach((w, T) => {
        w.disabled || y.push(T);
      }), y.sort((w, T) => w - T);
    }, []), g = k(() => {
      if (m !== null) {
        const y = c.current.get(m);
        y && !y.disabled && y.onClick && y.onClick();
      }
    }, [m]), x = k((y) => {
      const w = f();
      if (w.length === 0) return null;
      if (m === null)
        return y === "down" ? w[0] : w[w.length - 1];
      const T = w.indexOf(m);
      return T === -1 ? w[0] : y === "down" ? w[(T + 1) % w.length] : w[(T - 1 + w.length) % w.length];
    }, [m, f]), V = k((y) => {
      if (i == null || i(y), !y.defaultPrevented)
        switch (y.code) {
          case "ArrowDown": {
            y.preventDefault();
            const w = x("down");
            d(w);
            break;
          }
          case "ArrowUp": {
            y.preventDefault();
            const w = x("up");
            d(w);
            break;
          }
          case "Enter":
          case "Space": {
            m !== null && (y.preventDefault(), g());
            break;
          }
        }
    }, [i, x, m, g]), I = k((y) => {
      var w;
      a == null || a(y), (w = u.current) != null && w.contains(y.relatedTarget) || d(null);
    }, [a]), N = e != null ? e * Nl : void 0, j = He.map(n, (y, w) => Ke(y) ? ro(y, { index: w }) : y), v = {
      selectedIndex: m,
      setSelectedIndex: d,
      registerOption: p,
      getEnabledIndices: f,
      triggerSelectedOption: g
    };
    return /* @__PURE__ */ l(un.Provider, { value: v, children: /* @__PURE__ */ l(
      "div",
      {
        ref: u,
        role: "listbox",
        tabIndex: 0,
        "aria-label": t,
        className: h(
          // Base styles
          "block outline-none",
          o
        ),
        onKeyDown: V,
        onBlur: I,
        ...r,
        children: /* @__PURE__ */ l(
          "div",
          {
            ref: b,
            role: "presentation",
            className: "overflow-y-auto",
            style: { maxHeight: N },
            children: j
          }
        )
      }
    ) });
  }
);
Vl.displayName = "ActionMenu";
const Il = P(
  ({
    className: o,
    text: e,
    disabled: n = !1,
    "aria-label": t,
    icon: i,
    rightIcon: a,
    onClick: r,
    index: s = 0,
    onMouseDown: m,
    onMouseOver: d,
    onKeyDown: c,
    ...u
  }, b) => {
    const p = Cl(), f = Z(null);
    Le(b, () => f.current);
    const g = p.selectedIndex === s;
    X(() => {
      p.registerOption(s, n, r);
    }, [p, s, n, r]), X(() => {
      g && f.current && f.current.scrollIntoView && f.current.scrollIntoView({ block: "nearest" });
    }, [g]);
    const x = k(() => {
      n || r == null || r();
    }, [n, r]), V = k((j) => {
      m == null || m(j), !(j.defaultPrevented || n) && x();
    }, [m, n, x]), I = k((j) => {
      d == null || d(j), !j.defaultPrevented && g && p.setSelectedIndex(null);
    }, [d, g, p]), N = k((j) => {
      c == null || c(j), !(j.defaultPrevented || n) && (j.code === "Enter" || j.code === "Space") && (j.preventDefault(), x());
    }, [c, n, x]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: f,
        role: "option",
        "aria-selected": g && !n,
        "aria-disabled": n,
        "aria-label": t ?? e,
        tabIndex: -1,
        className: h(
          // Base styles
          "block cursor-pointer outline-none",
          // Disabled state
          n && "cursor-default",
          o
        ),
        onMouseDown: V,
        onMouseOver: I,
        onKeyDown: N,
        ...u,
        children: /* @__PURE__ */ A(
          "div",
          {
            className: h(
              // Base wrapper styles
              "box-border flex h-10 w-full items-center gap-2.5 px-4 py-2",
              "select-none",
              // Background colors
              "bg-[var(--sinch-comp-action-menu-color-default-background-initial)]",
              // Selected state
              g && !n && "bg-[var(--sinch-comp-action-menu-color-default-background-selected)]",
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
              i && /* @__PURE__ */ l("span", { className: "-ml-1.5", children: i }),
              /* @__PURE__ */ l(
                "span",
                {
                  className: h(
                    "min-w-0 flex-1 truncate",
                    "text-[color:var(--sinch-global-color-text)]",
                    "font-[var(--sinch-comp-action-menu-font-option)]"
                  ),
                  children: e
                }
              ),
              a && /* @__PURE__ */ l("span", { className: "-mr-1.5", children: a })
            ]
          }
        )
      }
    );
  }
);
Il.displayName = "ActionMenuOption";
const hn = de(null), zl = () => {
  const o = be(hn);
  if (o === null)
    throw new Error(
      "SelectMenuOption must be used within a SelectMenu component"
    );
  return o;
}, zo = 40, Dl = 7, Tl = D(
  // Base styles
  ["block outline-none"],
  {
    variants: {},
    defaultVariants: {}
  }
), pn = P(
  ({
    className: o,
    name: e,
    value: n,
    defaultValue: t = "",
    rows: i,
    multiple: a = !1,
    searchable: r = null,
    searchValue: s,
    defaultSearchValue: m = "",
    searchPlaceholder: d = "Search",
    searchAutocomplete: c,
    "aria-label": u,
    onChange: b,
    onSearchChange: p,
    children: f,
    ...g
  }, x) => {
    const [V, I] = F(t), [N, j] = F(m), [v, y] = F(null), [w, T] = F(0), z = Z(/* @__PURE__ */ new Map()), O = n !== void 0, $ = O ? n : V, C = s !== void 0, E = C ? s : N, _ = J(() => $ === "" ? /* @__PURE__ */ new Set() : new Set($.split(",").map((W) => W.trim())), [$]), L = k(
      (W) => _.has(W),
      [_]
    ), R = J(() => r === !0 ? !0 : r === !1 ? !1 : w >= Dl, [r, w]), U = J(() => {
      if (i === void 0)
        return;
      const W = i * zo;
      return w > i ? W + zo / 2 : W;
    }, [i, w]), G = k(
      (W) => {
        let Q;
        if (a) {
          const le = new Set(_);
          le.has(W) ? le.delete(W) : le.add(W), Q = Array.from(le).join(",");
        } else
          Q = W;
        O || I(Q), b == null || b(Q);
      },
      [O, a, b, _]
    ), q = k(
      (W) => {
        C || j(W), p == null || p(W);
      },
      [C, p]
    ), H = k(
      (W, Q, le, ce) => {
        z.current.set(W, {
          element: Q,
          text: le,
          disabled: ce
        }), T((se) => se + 1);
      },
      []
    ), S = k((W) => {
      z.current.delete(W), T((Q) => Math.max(0, Q - 1));
    }, []), ee = k(() => Array.from(z.current.entries()).filter(([, W]) => !(W.disabled || E !== "" && !W.text.toLowerCase().includes(E.toLowerCase()))).map(([W, Q]) => ({ value: W, element: Q.element })), [E]), M = k(
      (W) => {
        var le, ce, se, B;
        const Q = ee();
        if (Q.length !== 0)
          switch (W.code) {
            case "ArrowDown": {
              W.preventDefault();
              const oe = Q.findIndex(
                (re) => re.value === v
              ), ue = oe < 0 ? 0 : (oe + 1) % Q.length, ae = Q[ue];
              y(ae.value), (ce = (le = ae.element).scrollIntoView) == null || ce.call(le, { block: "nearest" });
              break;
            }
            case "ArrowUp": {
              W.preventDefault();
              const oe = Q.findIndex(
                (re) => re.value === v
              ), ue = oe < 0 ? Q.length - 1 : (oe - 1 + Q.length) % Q.length, ae = Q[ue];
              y(ae.value), (B = (se = ae.element).scrollIntoView) == null || B.call(se, { block: "nearest" });
              break;
            }
            case "Enter":
            case "Space": {
              v !== null && (W.preventDefault(), G(v));
              break;
            }
          }
      },
      [ee, G, v]
    ), K = k(
      (W) => {
        W.currentTarget.contains(W.relatedTarget) || y(null);
      },
      []
    ), te = J(() => {
      if (E === "")
        return f;
      let W = 0;
      const le = ((ce) => {
        const se = [];
        return Ue.Children.forEach(ce, (B) => {
          if (!Ue.isValidElement(B)) {
            se.push(B);
            return;
          }
          B.type === fo || B.type.displayName === "SelectMenuOption" ? (B.props.text ?? "").toLowerCase().includes(E.toLowerCase()) && (W++, se.push(B)) : se.push(B);
        }), se;
      })(f);
      return W === 0 ? /* @__PURE__ */ l(
        "div",
        {
          className: h(
            "flex items-center justify-center w-full h-[30px] mb-[10px]",
            "pointer-events-none select-none",
            "text-[var(--sinch-comp-select-menu-color-default-not-found-text-initial,var(--sinch-sys-color-text-muted))]",
            "font-[var(--sinch-comp-select-menu-font-not-found-text)]"
          ),
          children: "No results"
        }
      ) : le;
    }, [f, E]);
    return /* @__PURE__ */ l(
      hn.Provider,
      {
        value: {
          value: $,
          multiple: a,
          onChange: G,
          registerOption: H,
          unregisterOption: S,
          selectedOptionValue: v,
          setSelectedOptionValue: y,
          isValueSelected: L
        },
        children: /* @__PURE__ */ A(
          "div",
          {
            ref: x,
            role: "listbox",
            tabIndex: 0,
            "aria-label": u,
            "aria-multiselectable": a || void 0,
            "data-name": e,
            "data-value": $,
            className: h(Tl(), o),
            onKeyDown: M,
            onBlur: K,
            ...g,
            children: [
              R && /* @__PURE__ */ l("div", { className: "mx-[10px] my-[10px]", children: /* @__PURE__ */ l(
                uo,
                {
                  size: "s",
                  value: E,
                  placeholder: d,
                  autoComplete: c,
                  "aria-label": "Search options",
                  icon: /* @__PURE__ */ l(ne, { name: "magnifying-glass", iconsVersion: "2" }),
                  onChange: q,
                  rightAddon: E !== "" ? /* @__PURE__ */ l(
                    "button",
                    {
                      type: "button",
                      className: "flex items-center justify-center p-1 hover:bg-surface-secondary-hover rounded-sm",
                      onClick: () => q(""),
                      "aria-label": "Clear search",
                      children: /* @__PURE__ */ l(ne, { name: "fa-xmark", iconsVersion: "2", size: "xs" })
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
                    maxHeight: U !== void 0 ? `${U}px` : void 0
                  },
                  children: te
                }
              )
            ]
          }
        )
      }
    );
  }
);
pn.displayName = "SelectMenu";
const Ml = D(
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
), fo = P(
  ({
    className: o,
    value: e,
    text: n = "",
    disabled: t = !1,
    "aria-label": i,
    icon: a,
    customContent: r,
    children: s,
    ...m
  }, d) => {
    const {
      registerOption: c,
      unregisterOption: u,
      onChange: b,
      setSelectedOptionValue: p,
      selectedOptionValue: f,
      isValueSelected: g
    } = zl(), x = Z(null), V = g(e), I = f === e, N = k(
      (y) => {
        x.current = y, y !== null ? c(e, y, n, t) : u(e), d !== null && (typeof d == "function" ? d(y) : d.current = y);
      },
      [t, d, c, n, u, e]
    );
    X(() => {
      x.current !== null && c(e, x.current, n, t);
    }, [t, c, n, e]);
    const j = k(() => {
      t || b(e);
    }, [t, b, e]), v = k(() => {
      t || p(e);
    }, [t, p, e]);
    return /* @__PURE__ */ A(
      "div",
      {
        ref: N,
        role: "option",
        "aria-selected": V,
        "aria-disabled": t,
        "aria-label": i ?? n,
        className: h(
          Ml({
            isSelected: I,
            isDisabled: t
          }),
          o
        ),
        onClick: j,
        onMouseEnter: v,
        ...m,
        children: [
          a !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "-ml-[6px]",
                t ? "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"
              ),
              children: a
            }
          ),
          r !== void 0 ? /* @__PURE__ */ l("div", { className: "flex-1 min-w-0 pointer-events-none", children: r }) : /* @__PURE__ */ A(
            "span",
            {
              className: h(
                "flex-1 min-w-0",
                "font-[var(--sinch-comp-select-menu-font-option)]",
                "truncate"
              ),
              children: [
                n,
                s
              ]
            }
          ),
          V && /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "-mr-[6px]",
                t ? "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]" : "[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"
              ),
              children: /* @__PURE__ */ l(ne, { name: "fa-check", iconsVersion: "2" })
            }
          )
        ]
      }
    );
  }
);
fo.displayName = "SelectMenuOption";
const Sl = D(
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
), Ol = D(
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
), gn = P(
  ({
    className: o,
    text: e,
    placeholder: n,
    size: t = "m",
    invalid: i = !1,
    disabled: a = !1,
    "aria-label": r,
    onClick: s,
    onFocus: m,
    onBlur: d,
    icon: c,
    leftAddon: u,
    ...b
  }, p) => {
    const [f, g] = F(!1), x = k(() => {
      a || s == null || s();
    }, [a, s]), V = k(
      (y) => {
        (y.code === "Enter" || y.code === "Space") && (y.preventDefault(), x());
      },
      [x]
    ), I = k(() => {
      g(!0), m == null || m();
    }, [m]), N = k(() => {
      g(!1), d == null || d();
    }, [d]), j = e !== void 0 && e !== "", v = () => {
      switch (t) {
        case "s":
          return "var(--sinch-comp-select-button-size-icon-s,16px)";
        case "l":
          return "var(--sinch-comp-select-button-size-icon-l,24px)";
        default:
          return "var(--sinch-comp-select-button-size-icon-m,20px)";
      }
    };
    return /* @__PURE__ */ A(
      "div",
      {
        ref: p,
        role: "button",
        tabIndex: a ? -1 : 0,
        "aria-label": r,
        "aria-invalid": i || void 0,
        "aria-disabled": a || void 0,
        className: h(
          Sl({ size: t, isDisabled: a }),
          o
        ),
        onClick: x,
        onKeyDown: V,
        onFocus: I,
        onBlur: N,
        style: {
          "--sinch-global-size-icon": v()
        },
        ...b,
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                Ol({
                  size: t,
                  isFocused: f,
                  isInvalid: i && !f,
                  isDisabled: a
                })
              )
            }
          ),
          u !== void 0 && /* @__PURE__ */ l("div", { className: "flex flex-row items-center self-stretch gap-1 -ml-1", children: u }),
          c !== void 0 && /* @__PURE__ */ l(
            "div",
            {
              className: h(
                a ? "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]" : "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: c
            }
          ),
          j ? /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-1 min-w-0 truncate",
                "font-[var(--sinch-comp-select-button-font-input)]",
                a ? "text-[var(--sinch-comp-select-button-color-disabled-text-initial,var(--sinch-sys-color-text-disabled))]" : "text-[var(--sinch-comp-select-button-color-default-text-initial,var(--sinch-sys-color-text-default))]"
              ),
              children: e
            }
          ) : /* @__PURE__ */ l(
            "span",
            {
              className: h(
                "flex-1 min-w-0 truncate",
                "font-[var(--sinch-comp-select-button-font-placeholder)]",
                a ? "text-[var(--sinch-comp-select-button-color-disabled-placeholder-initial,var(--sinch-sys-color-text-disabled))]" : "text-[var(--sinch-comp-select-button-color-default-placeholder-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "-ml-1",
                a ? "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]" : "[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"
              ),
              children: /* @__PURE__ */ l(ne, { name: "fa-chevron-down", iconsVersion: "2" })
            }
          )
        ]
      }
    );
  }
);
gn.displayName = "SelectButton";
const jr = Object.assign(pn, {
  Option: fo,
  Button: gn
}), El = [
  "skintone-dark",
  "skintone-default",
  "skintone-light",
  "skintone-light-medium",
  "skintone-medium",
  "skintone-medium-dark"
], Al = [
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
  ...El
], Ze = (o = "") => Al.includes(o), Ll = (o) => `var(--sinch-comp-color-swatch-color-${o}-background)`, Pl = (o) => `var(--sinch-comp-color-swatch-color-${o}-foreground)`, Rl = D(
  // Base styles - the outer container
  "inline-block align-middle",
  {
    variants: {},
    defaultVariants: {}
  }
), $l = D(
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
), jo = P(
  ({ className: o, name: e, "aria-label": n, ...t }, i) => {
    const { backgroundColor: a, hasColor: r, computedAriaLabel: s } = J(() => {
      if (!(e != null && e.length > 0))
        return { backgroundColor: void 0, hasColor: !1, computedAriaLabel: n };
      if (Ze(e)) {
        const d = n == null || Ze(n) ? e : n;
        return {
          backgroundColor: Ll(e),
          hasColor: !0,
          computedAriaLabel: d
        };
      }
      return { backgroundColor: e, hasColor: !0, computedAriaLabel: n };
    }, [e, n]);
    return /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        className: h(Rl(), o),
        "aria-label": s,
        role: "img",
        ...t,
        children: /* @__PURE__ */ l(
          "div",
          {
            className: h($l({ noColor: !r })),
            style: r ? { backgroundColor: a } : void 0,
            ...!r && {
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
jo.displayName = "ColorSwatch";
const Fl = 5, _l = 44, Ul = 56, kn = de(null), Hl = () => {
  const o = be(kn);
  if (o === null)
    throw new Error("ColorMenuOption must be used within a ColorMenu");
  return o;
}, Bl = D(
  // Base styles - the container
  [
    "block",
    "outline-none"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), Gl = D(
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
), vo = P(
  ({
    className: o,
    children: e,
    value: n,
    defaultValue: t = "",
    rows: i,
    cols: a,
    onChange: r,
    onKeyDown: s,
    onBlur: m,
    "aria-label": d,
    ...c
  }, u) => {
    const [b, p] = F(t), f = n !== void 0, g = f ? n : b, [x, V] = F(null), I = Z(/* @__PURE__ */ new Map()), N = J(() => {
      let L = 0;
      const R = (U) => {
        Array.isArray(U) ? U.forEach(R) : U != null && L++;
      };
      return R(e), L;
    }, [e]), j = a ?? Math.min(N, Fl), v = J(() => {
      const L = {};
      if (N > 0) {
        const R = Math.min(j, N);
        L.width = `${R * _l}px`;
      }
      return i !== void 0 && i >= 2 && (L.maxHeight = `${i * Ul}px`), L;
    }, [j, N, i]), y = k(
      (L) => {
        f || p(L), r == null || r(L);
      },
      [f, r]
    ), w = k((L) => {
      V(L);
    }, []), T = k((L, R) => {
      I.current.set(L, R);
    }, []), z = k(() => I.current.size, []), O = k(
      (L) => {
        const R = z();
        if (R === 0) {
          s == null || s(L);
          return;
        }
        const U = x ?? -1;
        switch (L.key) {
          case "ArrowLeft": {
            L.preventDefault();
            const G = U <= 0 ? R - 1 : U - 1;
            V(G);
            break;
          }
          case "ArrowRight": {
            L.preventDefault();
            const G = U < 0 || U >= R - 1 ? 0 : U + 1;
            V(G);
            break;
          }
          case "ArrowUp": {
            if (L.preventDefault(), U < 0)
              V(0);
            else {
              const G = U - j;
              if (G >= 0)
                V(G);
              else {
                const q = Math.ceil(R / j), H = U % j, S = (q - 1) * j + H;
                V(
                  S < R ? S : R - 1
                );
              }
            }
            break;
          }
          case "ArrowDown": {
            if (L.preventDefault(), U < 0)
              V(0);
            else {
              const G = U + j;
              if (G < R)
                V(G);
              else {
                const q = U % j;
                V(
                  q < R ? q : 0
                );
              }
            }
            break;
          }
          case "Enter":
          case " ": {
            if (L.preventDefault(), x !== null) {
              const G = I.current.get(x);
              G !== void 0 && y(G);
            }
            break;
          }
        }
        s == null || s(L);
      },
      [
        x,
        j,
        z,
        y,
        s
      ]
    ), $ = k(
      (L) => {
        V(null), m == null || m(L);
      },
      [m]
    ), C = J(
      () => ({
        value: g,
        selectedIndex: x,
        onOptionClick: y,
        onOptionSelect: w,
        registerOption: T
      }),
      [g, x, y, w, T]
    );
    let E = 0;
    const _ = J(() => {
      const L = (R) => {
        if (Array.isArray(R))
          return R.map(L);
        if (R != null && typeof R == "object" && "type" in R) {
          const U = R, G = E++;
          return { ...U, props: { ...U.props, index: G } };
        }
        return R;
      };
      return L(e);
    }, [e]);
    return /* @__PURE__ */ l(kn.Provider, { value: C, children: /* @__PURE__ */ l(
      "div",
      {
        ref: u,
        role: "listbox",
        tabIndex: 0,
        "aria-label": d,
        className: h(Bl(), o),
        onKeyDown: O,
        onBlur: $,
        ...c,
        children: /* @__PURE__ */ l(
          "div",
          {
            role: "presentation",
            className: h(Gl()),
            style: v,
            children: _
          }
        )
      }
    ) });
  }
);
vo.displayName = "ColorMenu";
const Wl = D(
  // Base styles - the option container
  ["block", "outline-none"],
  {
    variants: {},
    defaultVariants: {}
  }
), Zl = D(
  // The inner wrapper
  ["w-[44px]", "h-[56px]", "p-3", "box-border"],
  {
    variants: {},
    defaultVariants: {}
  }
), ql = D(
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
), wo = P(
  ({ className: o, value: e, index: n = 0, "aria-label": t, ...i }, a) => {
    const r = Hl(), s = r.value === e, m = r.selectedIndex === n;
    J(() => {
      r.registerOption(n, e);
    }, [n, e]);
    const d = k(() => {
      r.onOptionClick(e), r.onOptionSelect(n);
    }, [r, e, n]), c = J(() => Ze(e) ? { "--sinch-global-color-icon": Pl(e) } : { "--sinch-global-color-icon": e }, [e]), u = Ze(e) ? e : "", b = J(() => m ? "border-[var(--sinch-comp-color-menu-option-color-default-border-focus)]" : s ? "border-[var(--sinch-comp-color-menu-option-color-default-border-selected)]" : "border-[var(--sinch-comp-color-menu-option-color-default-border-initial)]", [m, s]), p = /* @__PURE__ */ A(
      "div",
      {
        className: h(ql()),
        style: c,
        children: [
          /* @__PURE__ */ l(jo, { name: e, "aria-label": t }),
          /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "absolute",
                "w-[34px]",
                "h-[34px]",
                "-inset-[3px]",
                "border-2",
                "rounded-full",
                "pointer-events-none",
                "transition-colors",
                b,
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
        ref: a,
        role: "option",
        "aria-selected": s,
        "data-checked": s || void 0,
        "data-selected": m || void 0,
        "data-value": e,
        className: h(Wl(), o),
        onClick: d,
        ...i,
        children: /* @__PURE__ */ l("div", { className: h(Zl()), children: u.length > 0 ? /* @__PURE__ */ l(Xe, { text: u, children: p }) : p })
      }
    );
  }
);
wo.displayName = "ColorMenuOption";
const vr = Object.assign(vo, {
  Option: wo
});
let Ee = 0;
const Yl = () => {
  Ee++, Ee === 1 && (document.body.style.setProperty("overscroll-behavior", "none"), document.documentElement.style.setProperty("overscroll-behavior", "none"));
}, Kl = () => {
  Ee = Math.max(0, Ee - 1), Ee === 0 && (document.body.style.removeProperty("overscroll-behavior"), document.documentElement.style.removeProperty("overscroll-behavior"));
}, Jl = P(
  ({
    className: o,
    children: e,
    content: n,
    open: t = !1,
    orientation: i = "bottom-right",
    modal: a = !1,
    allowScroll: r = !1,
    hideOutsideViewport: s = !1,
    inset: m = 0,
    disableBackdropClose: d = !1,
    onClose: c,
    "aria-label": u,
    ...b
  }, p) => {
    const [f, g] = F({ x: 0, y: 0 }), [x, V] = F(void 0), [I, N] = F(!1), j = Z(null), v = Z(null), y = Z(null), w = Z(null), T = k(() => {
      if (j.current === null)
        return { x: 0, y: 0, width: 0, height: 0 };
      const C = j.current.firstElementChild;
      return C !== null && "footprintRect" in C ? C.footprintRect : j.current.getBoundingClientRect();
    }, []), z = k(() => {
      if (v.current === null)
        return;
      const C = T(), E = v.current.getBoundingClientRect(), _ = E.width, L = E.height;
      let R = 0, U = 0;
      i === "bottom-right" || i === "top-right" || i === "top-stretch" || i === "bottom-stretch" ? R = C.x : i === "bottom-left" || i === "top-left" ? R = C.x + C.width - _ : i === "bottom-center" || i === "top-center" ? R = C.x + C.width / 2 - _ / 2 : i === "center-right" ? R = C.x + C.width : i === "center-left" && (R = C.x - _), i === "bottom-left" || i === "bottom-right" || i === "bottom-stretch" || i === "bottom-center" ? U = C.y + C.height : i === "top-left" || i === "top-right" || i === "top-stretch" || i === "top-center" ? U = C.y - L : (i === "center-left" || i === "center-right") && (U = C.y + C.height / 2 - L / 2);
      const G = Math.max(m, Math.min(R, window.innerWidth - _ - m)), q = Math.max(m, Math.min(U, window.innerHeight - L - m));
      if (s) {
        const H = Math.abs(G - R) > 2 || Math.abs(q - U) > 2;
        N(H);
      }
      g({ x: G, y: q }), V(i === "top-stretch" || i === "bottom-stretch" ? C.width : void 0);
    }, [i, m, s, T]);
    Ao(() => {
      t && requestAnimationFrame(() => {
        z();
      });
    }, [t, z]), X(() => {
      if (!t)
        return;
      const C = () => {
        z();
      }, E = new ResizeObserver(C);
      if (v.current !== null && E.observe(v.current), window.addEventListener("resize", C), r) {
        const _ = () => z();
        return window.addEventListener("scroll", _, { passive: !0, capture: !0 }), () => {
          E.disconnect(), window.removeEventListener("resize", C), window.removeEventListener("scroll", _, { capture: !0 });
        };
      }
      return () => {
        E.disconnect(), window.removeEventListener("resize", C);
      };
    }, [t, r, z]), X(() => {
      if (!t)
        return;
      const C = (E) => {
        E.key === "Escape" && (E.preventDefault(), c == null || c());
      };
      return document.addEventListener("keydown", C), () => {
        document.removeEventListener("keydown", C);
      };
    }, [t, c]), X(() => {
      if (t && !r) {
        Yl();
        const C = document.body.style.overflow;
        return document.body.style.overflow = "hidden", () => {
          Kl(), document.body.style.overflow = C;
        };
      }
    }, [t, r]);
    const O = k(
      (C) => {
        d || C.target === C.currentTarget && (c == null || c());
      },
      [d, c]
    );
    X(() => {
      if (!t || a)
        return;
      const C = (_) => {
        d || w.current !== null && w.current.contains(_.target) || v.current !== null && !v.current.contains(_.target) && j.current !== null && !j.current.contains(_.target) && (c == null || c());
      }, E = setTimeout(() => {
        document.addEventListener("mousedown", C);
      }, 0);
      return () => {
        clearTimeout(E), document.removeEventListener("mousedown", C);
      };
    }, [t, a, d, c]);
    const $ = t && /* @__PURE__ */ A(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: w,
          className: h(
            "fixed inset-0 z-50",
            "bg-transparent"
          ),
          onClick: O,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ l(
        "dialog",
        {
          ref: y,
          className: h(
            "fixed z-50 m-0 p-0 border-none bg-transparent outline-none",
            "max-w-none max-h-none overflow-visible",
            I && "invisible"
          ),
          style: {
            left: f.x,
            top: f.y,
            width: x
          },
          open: !0,
          "aria-label": u,
          "aria-modal": a,
          children: /* @__PURE__ */ l("div", { ref: v, className: h("relative", o), ...b, children: n })
        }
      )
    ] });
    return /* @__PURE__ */ A("div", { ref: p, className: "contents", children: [
      /* @__PURE__ */ l(
        "div",
        {
          ref: j,
          "aria-haspopup": "dialog",
          "aria-expanded": t,
          children: e
        }
      ),
      Pe($, document.body)
    ] });
  }
);
Jl.displayName = "Pop";
const Xl = D(
  [
    "fixed inset-0 z-50 flex items-center justify-center",
    "bg-black/55"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), Ql = D(
  [
    "flex flex-col",
    "py-6",
    "max-w-[512px] max-h-[90vh]",
    "w-fit",
    "rounded-[var(--sinch-comp-dialog-shape-radius,8px)]",
    "bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]",
    "shadow-[var(--sinch-comp-dialog-shadow,0_4px_16px_rgba(0,0,0,0.2))]",
    "outline-none"
  ],
  {
    variants: {},
    defaultVariants: {}
  }
), es = P(
  ({
    className: o,
    open: e = !1,
    caption: n,
    onVisibilityAltered: t,
    icon: i,
    content: a,
    buttons: r,
    "aria-label": s,
    checkInterval: m = 1e3,
    ...d
  }, c) => {
    const [u, b] = F(e), p = Z(null), f = Z(null);
    X(() => {
      b(e);
    }, [e]);
    const g = k(() => {
      if (p.current === null)
        return;
      const V = p.current, I = getComputedStyle(V);
      !(I.visibility === "visible" && I.display !== "none" && V.open === !0) && u && (t == null || t());
    }, [u, t]);
    if (X(() => {
      if (!e) {
        f.current !== null && (clearInterval(f.current), f.current = null);
        return;
      }
      return requestAnimationFrame(() => {
        f.current = setInterval(g, m);
      }), () => {
        f.current !== null && (clearInterval(f.current), f.current = null);
      };
    }, [e, m, g]), X(() => () => {
      f.current !== null && clearInterval(f.current), e && (t == null || t());
    }, []), X(() => {
      if (!e)
        return;
      const V = (I) => {
        I.key === "Escape" && (I.preventDefault(), I.stopPropagation());
      };
      return document.addEventListener("keydown", V, { capture: !0 }), () => {
        document.removeEventListener("keydown", V, { capture: !0 });
      };
    }, [e]), X(() => {
      if (!e)
        return;
      const V = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = V;
      };
    }, [e]), !e)
      return null;
    const x = /* @__PURE__ */ l(
      "div",
      {
        ref: c,
        className: h(Xl()),
        role: "presentation",
        ...d,
        children: /* @__PURE__ */ A(
          "dialog",
          {
            ref: p,
            className: h(Ql(), o),
            open: !0,
            "aria-modal": "true",
            "aria-label": s,
            children: [
              /* @__PURE__ */ A("div", { className: "flex items-start gap-2 px-6 mb-3", children: [
                i !== void 0 && /* @__PURE__ */ l("div", { className: "flex-shrink-0 text-[var(--sinch-comp-dialog-color-default-icon-initial,var(--sinch-sys-color-text-default))]", children: i }),
                n !== void 0 && /* @__PURE__ */ l("h3", { className: "text-[var(--sinch-comp-dialog-color-default-title-initial,var(--sinch-sys-color-text-default))] font-semibold text-lg", children: n })
              ] }),
              a !== void 0 && /* @__PURE__ */ l("div", { className: "min-h-0 overflow-auto px-6 py-1", children: a }),
              r !== void 0 && /* @__PURE__ */ l("div", { className: "flex justify-end gap-4 px-6 mt-5", children: r })
            ]
          }
        )
      }
    );
    return Pe(x, document.body);
  }
);
es.displayName = "PersistentOverlay";
const os = P(
  ({
    className: o,
    value: e,
    defaultValue: n = !1,
    onChange: t,
    "aria-label": i,
    iconSize: a = "32px",
    style: r,
    ...s
  }, m) => {
    const [d, c] = F(n), u = e !== void 0, b = u ? e : d, p = k(() => {
      const g = !b;
      u || c(g), t == null || t(g);
    }, [b, u, t]), f = b ? "rotate(0deg)" : "rotate(180deg)";
    return /* @__PURE__ */ l(
      me,
      {
        ref: m,
        role: "checkbox",
        "aria-checked": b,
        "aria-label": i,
        size: "s",
        onClick: p,
        className: h("block", o),
        style: {
          "--sinch-global-size-icon": a,
          ...r
        },
        icon: /* @__PURE__ */ l(
          ne,
          {
            name: "fa-chevron-down",
            iconsVersion: "2",
            style: {
              transform: f,
              willChange: "transform"
            }
          }
        ),
        ...s
      }
    );
  }
);
os.displayName = "SegmentCollapse";
const ns = [
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
], Fe = ns, no = 2, ts = 300, is = [
  "Emotions",
  "People",
  "Animals and nature",
  "Food and drinks",
  "Travel and places",
  "Sports and activities",
  "Objects",
  "Symbols and flags"
], Do = [
  { name: "skintone-default", value: 0 },
  { name: "skintone-light", value: 1 },
  { name: "skintone-light-medium", value: 2 },
  { name: "skintone-medium", value: 3 },
  { name: "skintone-medium-dark", value: 4 },
  { name: "skintone-dark", value: 5 }
], fe = {
  emotions: /* @__PURE__ */ A("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "M15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" }),
    /* @__PURE__ */ l("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm4.41-6.11a.745.745 0 0 0-1.03.24A3.98 3.98 0 0 1 12 16c-1.38 0-2.64-.7-3.38-1.88a.747.747 0 1 0-1.27.79A5.446 5.446 0 0 0 12 17.5c1.9 0 3.63-.97 4.65-2.58.22-.35.11-.81-.24-1.03Z" })
  ] }),
  people: /* @__PURE__ */ A("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }),
    /* @__PURE__ */ l("path", { d: "M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.023 5.023 0 0 1-4.92-4.15.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14A7.037 7.037 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41l-3.76-3.77Z" })
  ] }),
  animals: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M17 14c-.24-.24-.44-.49-.65-.75C17.51 11.5 19 8.56 19 5c0-1.95-.74-3-2-3-1.54 0-3.96 2.06-5 5.97C10.96 4.06 8.54 2 7 2 5.74 2 5 3.05 5 5c0 3.56 1.49 6.5 2.65 8.25-.21.26-.41.51-.65.75-.25.25-2 1.39-2 3.5C5 19.98 7.02 22 9.5 22c1.5 0 2.5-.5 2.5-.5s1 .5 2.5.5c2.48 0 4.5-2.02 4.5-4.5 0-2.11-1.75-3.25-2-3.5Zm-.12-9.97c.06.17.12.48.12.97 0 2.84-1.11 5.24-2.07 6.78-.38-.26-.83-.48-1.4-.62.24-4.52 2.44-6.83 3.35-7.13ZM7 5c0-.49.06-.8.12-.97.91.3 3.11 2.61 3.36 7.13-.58.14-1.03.35-1.4.62C8.11 10.24 7 7.84 7 5Zm7.5 15c-1 0-1.8-.33-2.22-.56.42-.18.72-.71.72-.94 0-.28-.45-.5-1-.5s-1 .22-1 .5c0 .23.3.76.72.94-.42.23-1.22.56-2.22.56A2.5 2.5 0 0 1 7 17.5c0-.7.43-1.24 1-1.73.44-.36.61-.52 1.3-1.37.76-.95 1.09-1.4 2.7-1.4s1.94.45 2.7 1.4c.69.85.86 1.01 1.3 1.37.57.49 1 1.03 1 1.73a2.5 2.5 0 0 1-2.5 2.5Zm-.5-4c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Zm-3 0c0 .41-.22.75-.5.75s-.5-.34-.5-.75.22-.75.5-.75.5.34.5.75Z" }) }),
  food: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M19 19H3c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1Zm1-16H9v2.4l1.81 1.45c.12.09.19.24.19.39v4.26c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5V7.24c0-.15.07-.3.19-.39L8 5.4V3H6c-1.1 0-2 .9-2 2v8c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 5h-2V5h2v3Z" }) }),
  travel: /* @__PURE__ */ A("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: [
    /* @__PURE__ */ l("path", { d: "m21.99 14.77-1.43-4.11c-.14-.4-.52-.66-.97-.66H12.4c-.46 0-.83.26-.98.66L10 14.77v5.24c0 .55.45.99 1 .99s1-.45 1-1v-1h8v1a1 1 0 0 0 2 .01l-.01-5.24Zm-10.38-1.43.69-2c.05-.2.24-.34.46-.34h6.48c.21 0 .4.14.47.34l.69 2a.5.5 0 0 1-.47.66h-7.85a.5.5 0 0 1-.47-.66Zm.38 3.66c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" }),
    /* @__PURE__ */ l("path", { d: "M14 4.5V9h1V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v4H3c-.55 0-1 .45-1 1v12h1V9.5c0-.28.22-.5.5-.5h4c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5Z" }),
    /* @__PURE__ */ l("path", { d: "M7 11H5v2h2v-2Zm5-6h-2v2h2V5ZM7 15H5v2h2v-2Zm0 4H5v2h2v-2Z" })
  ] }),
  sports: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M19.52 2.49C17.18.15 12.9.62 9.97 3.55c-1.6 1.6-2.52 3.87-2.54 5.46-.02 1.58.26 3.89-1.35 5.5l-3.54 3.53c-.39.39-.39 1.02 0 1.42.39.39 1.02.39 1.42 0l3.53-3.54c1.61-1.61 3.92-1.33 5.5-1.35 1.58-.02 3.86-.94 5.46-2.54 2.93-2.92 3.41-7.2 1.07-9.54Zm-9.2 9.19c-1.53-1.53-1.05-4.61 1.06-6.72 2.11-2.11 5.18-2.59 6.72-1.06 1.53 1.53 1.05 4.61-1.06 6.72-2.11 2.11-5.18 2.59-6.72 1.06ZM18 17c.53 0 1.04.21 1.41.59.78.78.78 2.05 0 2.83-.37.37-.88.58-1.41.58-.53 0-1.04-.21-1.41-.59-.78-.78-.78-2.05 0-2.83.37-.37.88-.58 1.41-.58Zm0-2a3.998 3.998 0 0 0-2.83 6.83c.78.78 1.81 1.17 2.83 1.17a3.998 3.998 0 0 0 2.83-6.83A3.998 3.998 0 0 0 18 15Z" }) }),
  objects: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M12 3c-.46 0-.93.04-1.4.14-2.76.53-4.96 2.76-5.48 5.52-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V19c0 1.1.9 2 2 2h.28a1.98 1.98 0 0 0 3.44 0H14c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0 0 19 10c0-3.87-3.13-7-7-7Zm.5 11h-1v-2.59L9.67 9.59l.71-.71L12 10.5l1.62-1.62.71.71-1.83 1.83V14Zm1 5c-.01 0-.02-.01-.03-.01V19h-2.94v-.01c-.01 0-.02.01-.03.01-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.01 0 .02.01.03.01V18h2.94v.01c.01 0 .02-.01.03-.01.28 0 .5.22.5.5s-.22.5-.5.5Zm0-2h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5Z" }) }),
  symbols: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", className: "w-full h-full fill-current", children: /* @__PURE__ */ l("path", { d: "M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1Zm0-3H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1Zm10.89 11.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41ZM14.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-4-10A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5Zm-5.05 7.09a.996.996 0 1 0-1.41-1.41l-.71.71-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.48 1.14.72 1.78.72.64 0 1.28-.24 1.77-.73l1.06-1.06.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71.71-.71Zm-4.6-3.89a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35Zm0 5.65a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35l1.06-1.06.71.71-1.07 1.05Z" }) })
}, as = {
  "smileys-emotion": fe.emotions,
  "people-body": fe.people,
  "animals-nature": fe.animals,
  "food-drink": fe.food,
  "travel-places": fe.travel,
  activities: fe.sports,
  objects: fe.objects,
  symbols: fe.symbols
}, ls = D(
  // Base styles
  "block",
  {
    variants: {},
    defaultVariants: {}
  }
), ss = D(
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
), rs = D(
  // Toolbar styles from template.html #toolbar
  ["flex", "gap-2", "px-3"],
  {
    variants: {},
    defaultVariants: {}
  }
), ms = D(
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
), cs = D(
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
), ds = D(
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
), bs = P(
  ({ className: o, emojiBaseUrl: e, onChange: n, ...t }, i) => {
    var _;
    const [a, r] = F(""), [s, m] = F(((_ = Fe[0]) == null ? void 0 : _.name) ?? ""), [d, c] = F(0), [u, b] = F("skintone-default"), [p, f] = F(!1), [g, x] = F(null), V = s.length === 0, [I, N] = F(""), j = k((L) => {
      r(L);
      const R = setTimeout(() => {
        N(L), L.length >= no ? s.length > 0 && (x(s), m("")) : g !== null && (m(g), x(null));
      }, ts);
      return () => clearTimeout(R);
    }, [s, g]), v = k((L) => {
      m(L), r(""), N(""), x(null);
    }, []), y = k(() => {
      r(""), N(""), g !== null && (m(g), x(null));
    }, [g]), w = k((L) => {
      const R = Do.find((U) => U.name === L);
      R !== void 0 && (c(R.value), b(R.name)), f(!1);
    }, []), T = k(
      (L) => {
        n == null || n(L);
      },
      [n]
    ), z = J(() => {
      if (I.length < no)
        return [];
      const L = I.toLowerCase(), R = [];
      for (const U of Fe)
        for (const G of U.emojis)
          if (G.label.toLowerCase().includes(L)) {
            const q = G.skins !== void 0 && G.skins.length > 0;
            if (d === 0 || !q)
              R.push(G);
            else if (q)
              for (const H of G.skins)
                (d === H.tone || Array.isArray(H.tone) && H.tone.includes(d)) && R.push(H);
          }
      return R;
    }, [I, d]), O = J(() => {
      if (V)
        return [];
      const L = Fe.find((U) => U.name === s);
      if (L === void 0)
        return [];
      const R = [];
      for (const U of L.emojis) {
        const G = U.skins !== void 0 && U.skins.length > 0;
        if (d === 0 || !G)
          R.push(U);
        else if (G)
          for (const q of U.skins)
            (d === q.tone || Array.isArray(q.tone) && q.tone.includes(d)) && R.push(q);
      }
      return R;
    }, [s, V, d]), $ = V ? z : O, C = V && $.length === 0 && I.length >= no, E = /* @__PURE__ */ l(
      vo,
      {
        value: u,
        cols: 1,
        "aria-label": "Emoji skin tone menu",
        onChange: w,
        children: Do.map((L) => /* @__PURE__ */ l(wo, { value: L.name }, L.name))
      }
    );
    return /* @__PURE__ */ l(
      "div",
      {
        ref: i,
        className: h(ls(), o),
        ...t,
        children: /* @__PURE__ */ A("div", { className: h(ss()), children: [
          /* @__PURE__ */ A("div", { className: h(rs()), children: [
            /* @__PURE__ */ l(
              uo,
              {
                size: "l",
                "aria-label": "Search emojis",
                value: a,
                onChange: j,
                icon: /* @__PURE__ */ l(ne, { name: "magnifying-glass", iconsVersion: "2" }),
                rightAddon: a.length > 0 && /* @__PURE__ */ l(
                  me,
                  {
                    size: "s",
                    "aria-label": "Clear",
                    icon: /* @__PURE__ */ l(ne, { name: "fa-xmark", iconsVersion: "2" }),
                    onClick: y
                  }
                ),
                className: "flex-1 min-w-0"
              }
            ),
            /* @__PURE__ */ l(
              bn,
              {
                open: p,
                orientation: "bottom-left",
                "aria-label": "Emoji skin tone select",
                content: E,
                onClose: () => f(!1),
                children: /* @__PURE__ */ l(
                  me,
                  {
                    size: "l",
                    "aria-label": "Select emoji skin tones",
                    icon: /* @__PURE__ */ l(jo, { name: u }),
                    onClick: () => f(!p)
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ l(
            po,
            {
              value: s,
              "aria-label": "Emoji groups",
              onChange: v,
              children: Fe.map((L, R) => /* @__PURE__ */ l(
                go,
                {
                  value: L.name,
                  "aria-label": is[R] ?? L.name,
                  icon: /* @__PURE__ */ l(
                    "span",
                    {
                      className: h(
                        "w-5 h-5",
                        "[--sinch-global-color-icon:var(--sinch-comp-tab-color-default-icon-initial)]"
                      ),
                      children: as[L.name] ?? fe.emotions
                    }
                  )
                },
                L.name
              ))
            }
          ),
          /* @__PURE__ */ A("div", { className: h(ms()), children: [
            /* @__PURE__ */ l("div", { className: h(cs()), children: $.map((L, R) => /* @__PURE__ */ l(
              me,
              {
                size: "s",
                "aria-label": L.label,
                "data-value": L.emoji,
                icon: /* @__PURE__ */ l(
                  Zo,
                  {
                    char: L.emoji,
                    baseUrl: e,
                    size: "sm"
                  }
                ),
                onClick: () => T(L.emoji)
              },
              `${L.emoji}-${R}`
            )) }),
            /* @__PURE__ */ l("div", { className: h(ds({ visible: C })), children: /* @__PURE__ */ l(Je, { type: "m", children: "No results" }) })
          ] })
        ] })
      }
    );
  }
);
bs.displayName = "EmojiPicker";
function fn(o) {
  if (o === "" || o === null || o === void 0)
    return [];
  const e = o.split(`
`), n = [];
  let t = null, i = [];
  for (let a = 0; a < e.length; a++) {
    const r = e[a], s = r.match(/^[-*]\s+(.*)$/);
    if (s !== null) {
      (t === null || t.ordered === !0) && (t !== null && (t.children = i, n.push(t)), t = { type: "list", ordered: !1, children: [] }, i = []), i.push({
        type: "listItem",
        children: ze(s[1])
      });
      continue;
    }
    const m = r.match(/^(\d+)\.\s+(.*)$/);
    if (m !== null) {
      (t === null || t.ordered === !1) && (t !== null && (t.children = i, n.push(t)), t = { type: "list", ordered: !0, children: [] }, i = []), i.push({
        type: "listItem",
        children: ze(m[2])
      });
      continue;
    }
    if (t !== null && (t.children = i, n.push(t), t = null, i = []), r.trim() === "") {
      n.length > 0 && n.push({ type: "linebreak" });
      continue;
    }
    n.push({
      type: "paragraph",
      children: ze(r)
    });
  }
  return t !== null && (t.children = i, n.push(t)), n;
}
function ze(o) {
  var t;
  const e = [];
  let n = o;
  for (; n.length > 0; ) {
    const i = n.match(/^\\(.)/);
    if (i !== null) {
      e.push({ type: "text", content: i[1] }), n = n.slice(i[0].length);
      continue;
    }
    const a = n.match(/^\{\{([a-zA-Z0-9_-]+)\}\}/);
    if (a !== null) {
      e.push({ type: "chip", content: a[1] }), n = n.slice(a[0].length);
      continue;
    }
    const r = n.match(/^`([^`]+)`/);
    if (r !== null) {
      e.push({ type: "code", content: r[1] }), n = n.slice(r[0].length);
      continue;
    }
    const s = n.match(/^\*\*(.+?)\*\*/);
    if (s !== null) {
      e.push({
        type: "bold",
        children: ze(s[1])
      }), n = n.slice(s[0].length);
      continue;
    }
    const m = n.match(/^\*([^*]+)\*/);
    if (m !== null) {
      e.push({
        type: "italic",
        children: ze(m[1])
      }), n = n.slice(m[0].length);
      continue;
    }
    const d = n.match(/^~~(.+?)~~/);
    if (d !== null) {
      e.push({
        type: "strikethrough",
        children: ze(d[1])
      }), n = n.slice(d[0].length);
      continue;
    }
    const c = n.match(/^\[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/);
    if (c !== null) {
      const p = ((t = c[3]) == null ? void 0 : t.split(",").map((f) => f.trim())) ?? [];
      e.push({
        type: "link",
        content: c[1],
        href: c[2],
        external: p.includes("external")
      }), n = n.slice(c[0].length);
      continue;
    }
    const u = n.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}])/u);
    if (u !== null) {
      e.push({ type: "emoji", content: u[1] }), n = n.slice(u[0].length);
      continue;
    }
    const b = n.match(/^[^*`\[\\{~\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]+/u);
    if (b !== null) {
      e.push({ type: "text", content: b[0] }), n = n.slice(b[0].length);
      continue;
    }
    e.push({ type: "text", content: n[0] }), n = n.slice(1);
  }
  return e;
}
const us = D(
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
), hs = P(
  ({
    className: o,
    text: e,
    size: n = "m",
    chipColor: t,
    chipIcon: i,
    chipResolver: a,
    onElementClick: r,
    ...s
  }, m) => {
    const d = J(() => fn(e), [e]), c = k((b) => {
      const p = b.target;
      (p.tagName === "A" || p.closest("[data-chip]") !== null || p.closest("a") !== null) && (r == null || r(b, p));
    }, [r]), u = (b, p) => {
      var f, g, x, V, I, N, j;
      switch (b.type) {
        case "text":
          return b.content;
        case "bold":
          return /* @__PURE__ */ l("span", { className: "[font-weight:var(--sinch-ref-typography-font-weight-700)]", children: (f = b.children) == null ? void 0 : f.map((v, y) => u(v, y)) }, p);
        case "italic":
          return /* @__PURE__ */ l("span", { className: "italic", children: (g = b.children) == null ? void 0 : g.map((v, y) => u(v, y)) }, p);
        case "strikethrough":
          return /* @__PURE__ */ l("span", { className: "line-through", children: (x = b.children) == null ? void 0 : x.map((v, y) => u(v, y)) }, p);
        case "code":
          return /* @__PURE__ */ l(
            "code",
            {
              className: h(
                "[font:var(--sinch-comp-code-tag-font-text)]",
                "leading-inherit text-[length:inherit]",
                "border border-[var(--sinch-comp-code-tag-color-default-border-initial)]",
                "bg-[var(--sinch-comp-code-tag-color-default-background-initial)]",
                "px-[0.25em] rounded-[var(--sinch-comp-code-tag-shape-radius)]"
              ),
              children: b.content
            },
            p
          );
        case "link":
          return /* @__PURE__ */ l(
            "a",
            {
              href: b.href,
              className: h(
                "[font:var(--sinch-comp-link-default-font-initial)]",
                "text-[var(--sinch-comp-link-color-default-text-initial)]",
                "underline",
                "hover:text-[var(--sinch-comp-link-color-default-text-hover)]",
                "hover:no-underline"
              ),
              target: b.external === !0 ? "_blank" : void 0,
              rel: b.external === !0 ? "noopener noreferrer" : void 0,
              children: b.content
            },
            p
          );
        case "chip": {
          const v = a == null ? void 0 : a(b.content ?? ""), y = (v == null ? void 0 : v.color) ?? t, w = (v == null ? void 0 : v.icon) ?? i, T = y !== void 0 ? `var(--sinch-comp-tag-color-${y}-background)` : void 0, z = y !== void 0 ? `var(--sinch-comp-tag-color-${y}-foreground)` : void 0;
          return /* @__PURE__ */ A(
            "span",
            {
              "data-chip": !0,
              className: h(
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
                backgroundColor: T,
                color: z
              },
              children: [
                w !== void 0 && /* @__PURE__ */ l(
                  "span",
                  {
                    className: "w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)]",
                    style: { color: z }
                  }
                ),
                /* @__PURE__ */ l("span", { className: "overflow-hidden text-ellipsis whitespace-nowrap", children: b.content })
              ]
            },
            p
          );
        }
        case "emoji":
          return /* @__PURE__ */ l(
            "span",
            {
              className: "inline w-[1em] h-[1em] align-[-0.2em]",
              role: "img",
              "aria-label": b.content,
              children: b.content
            },
            p
          );
        case "linebreak":
          return /* @__PURE__ */ l("br", {}, p);
        case "paragraph":
          return /* @__PURE__ */ l("p", { className: "m-0 [&+p]:mt-[0.5em] [&+ul]:mt-[0.5em] [&+ol]:mt-[0.5em]", children: (V = b.children) == null ? void 0 : V.map((v, y) => u(v, y)) }, p);
        case "list":
          return b.ordered === !0 ? /* @__PURE__ */ l("ol", { className: "m-0 pl-[1.5em] [p+&]:mt-[0.5em]", children: (I = b.children) == null ? void 0 : I.map((v, y) => u(v, y)) }, p) : /* @__PURE__ */ l("ul", { className: "m-0 pl-[1.5em] [p+&]:mt-[0.5em]", children: (N = b.children) == null ? void 0 : N.map((v, y) => u(v, y)) }, p);
        case "listItem":
          return /* @__PURE__ */ l("li", { children: (j = b.children) == null ? void 0 : j.map((v, y) => u(v, y)) }, p);
        default:
          return null;
      }
    };
    return /* @__PURE__ */ l(
      "div",
      {
        ref: m,
        role: "paragraph",
        className: h(
          us({ size: n }),
          "text-[var(--sinch-global-color-text,var(--sinch-sys-color-text-default))]",
          o
        ),
        onClick: c,
        ...s,
        children: d.map((b, p) => u(b, p))
      }
    );
  }
);
hs.displayName = "RichText";
const ps = D(
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
), gs = D(
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
), ks = D(
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
), fs = P(
  ({
    className: o,
    value: e,
    defaultValue: n,
    placeholder: t,
    invalid: i = !1,
    disabled: a = !1,
    rows: r,
    chipColor: s,
    chipIcon: m,
    chipResolver: d,
    "aria-label": c,
    topContent: u,
    bottomContent: b,
    onChange: p,
    onFocus: f,
    onBlur: g,
    onSelectionChange: x,
    ...V
  }, I) => {
    const [N, j] = F(n ?? ""), [v, y] = F(!1), w = Z(null), T = e !== void 0, z = T ? e : N, O = J(() => fn(z), [z]), $ = k(() => {
      const S = w.current;
      if (S === null)
        return "";
      let M = S.innerHTML;
      return M = M.replace(/<br\s*\/?>/gi, `
`), M = M.replace(/<\/p>\s*<p[^>]*>/gi, `

`), M = M.replace(/<\/?p[^>]*>/gi, ""), M = M.replace(/<strong>([^<]*)<\/strong>/gi, "**$1**"), M = M.replace(/<b>([^<]*)<\/b>/gi, "**$1**"), M = M.replace(/<em>([^<]*)<\/em>/gi, "*$1*"), M = M.replace(/<i>([^<]*)<\/i>/gi, "*$1*"), M = M.replace(/<del>([^<]*)<\/del>/gi, "~~$1~~"), M = M.replace(/<s>([^<]*)<\/s>/gi, "~~$1~~"), M = M.replace(/<code>([^<]*)<\/code>/gi, "`$1`"), M = M.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, "[$2]($1)"), M = M.replace(/<span[^>]*data-chip[^>]*>([^<]*)<\/span>/gi, "{{$1}}"), M = M.replace(/<[^>]+>/g, ""), M = M.replace(/&nbsp;/g, " "), M = M.replace(/&lt;/g, "<"), M = M.replace(/&gt;/g, ">"), M = M.replace(/&amp;/g, "&"), M.trim();
    }, []);
    X(() => {
      const S = w.current;
      if (S === null || document.activeElement === S)
        return;
      $() !== z && (S.innerHTML = js(O, s, m, d));
    }, [z, O, s, m, d, $]);
    const C = k(() => {
      const S = $();
      T || j(S), p == null || p(S);
    }, [T, p, $]), E = k(() => {
      y(!0), f == null || f();
    }, [f]), _ = k(() => {
      y(!1), g == null || g();
      const S = $();
      S !== z && (T || j(S), p == null || p(S));
    }, [T, g, p, $, z]), L = k((S) => {
      if (a) {
        S.preventDefault();
        return;
      }
      if (S.metaKey || S.ctrlKey) {
        switch (S.key.toLowerCase()) {
          case "b":
            S.preventDefault(), document.execCommand("bold"), C();
            break;
          case "i":
            S.preventDefault(), document.execCommand("italic"), C();
            break;
        }
        if (S.shiftKey)
          switch (S.key.toLowerCase()) {
            case "x":
              S.preventDefault(), document.execCommand("strikeThrough"), C();
              break;
          }
      }
    }, [a, C]), R = k((S) => {
      S.preventDefault();
      const ee = S.clipboardData.getData("text/plain");
      document.execCommand("insertText", !1, ee), C();
    }, [C]);
    Le(I, () => ({
      focus: () => {
        var S;
        return (S = w.current) == null ? void 0 : S.focus();
      },
      blur: () => {
        var S;
        return (S = w.current) == null ? void 0 : S.blur();
      },
      insertText: (S) => {
        var ee;
        (ee = w.current) == null || ee.focus(), document.execCommand("insertText", !1, S), C();
      },
      insertLink: (S, ee) => {
        var M;
        (M = w.current) == null || M.focus(), document.execCommand("insertHTML", !1, `<a href="${ee}">${S}</a>`), C();
      },
      insertChip: (S) => {
        var M;
        (M = w.current) == null || M.focus();
        const ee = `<span data-chip contenteditable="false">${S}</span>&nbsp;`;
        document.execCommand("insertHTML", !1, ee), C();
      },
      formatBold: () => {
        var S;
        (S = w.current) == null || S.focus(), document.execCommand("bold"), C();
      },
      formatItalic: () => {
        var S;
        (S = w.current) == null || S.focus(), document.execCommand("italic"), C();
      },
      formatStrikethrough: () => {
        var S;
        (S = w.current) == null || S.focus(), document.execCommand("strikeThrough"), C();
      },
      formatCodeTag: () => {
        var ee;
        (ee = w.current) == null || ee.focus();
        const S = window.getSelection();
        if (S !== null && S.rangeCount > 0) {
          const K = S.getRangeAt(0).toString();
          K.length > 0 && (document.execCommand("insertHTML", !1, `<code>${K}</code>`), C());
        }
      },
      formatOrderedList: () => {
        var S;
        (S = w.current) == null || S.focus(), document.execCommand("insertOrderedList"), C();
      },
      formatUnorderedList: () => {
        var S;
        (S = w.current) == null || S.focus(), document.execCommand("insertUnorderedList"), C();
      },
      getCaretRect: () => {
        const S = window.getSelection();
        return S === null || S.rangeCount === 0 ? null : S.getRangeAt(0).getBoundingClientRect();
      }
    }), [C]);
    const U = u !== void 0, G = b !== void 0, q = z === "", H = r !== void 0 && r > 0 ? `${r * 1.5}em` : void 0;
    return /* @__PURE__ */ A(
      "div",
      {
        className: h(ps({}), o),
        ...V,
        children: [
          U && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 px-1 pt-1 pb-0", children: u }),
          /* @__PURE__ */ A("div", { className: "relative px-[10px] py-2 box-border", children: [
            /* @__PURE__ */ l(
              "div",
              {
                ref: w,
                role: "textbox",
                "aria-multiline": "true",
                "aria-label": c,
                "aria-placeholder": t,
                "aria-invalid": i,
                contentEditable: !a,
                suppressContentEditableWarning: !0,
                autoCapitalize: "off",
                autoCorrect: "off",
                spellCheck: !1,
                className: h(
                  gs({}),
                  a && "text-[var(--sinch-comp-textarea-color-disabled-text-initial)] cursor-not-allowed",
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
                style: { minHeight: H },
                onInput: C,
                onFocus: E,
                onBlur: _,
                onKeyDown: L,
                onPaste: R
              }
            ),
            q && t !== void 0 && /* @__PURE__ */ l(
              "div",
              {
                className: h(
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
              className: h(
                ks({
                  isFocused: v,
                  isInvalid: i && !v,
                  isDisabled: a
                })
              )
            }
          ),
          G && /* @__PURE__ */ l("div", { className: "flex flex-row items-center gap-2 px-1 pt-0 pb-1", children: b })
        ]
      }
    );
  }
);
fs.displayName = "RichTextarea";
function js(o, e, n, t) {
  const i = (a) => {
    var r, s, m, d, c, u, b;
    switch (a.type) {
      case "text":
        return Oe(a.content ?? "");
      case "bold":
        return `<b>${((r = a.children) == null ? void 0 : r.map(i).join("")) ?? ""}</b>`;
      case "italic":
        return `<i>${((s = a.children) == null ? void 0 : s.map(i).join("")) ?? ""}</i>`;
      case "strikethrough":
        return `<s>${((m = a.children) == null ? void 0 : m.map(i).join("")) ?? ""}</s>`;
      case "code":
        return `<code>${Oe(a.content ?? "")}</code>`;
      case "link":
        return `<a href="${Oe(a.href ?? "")}">${Oe(a.content ?? "")}</a>`;
      case "chip": {
        const p = t == null ? void 0 : t(a.content ?? ""), f = (p == null ? void 0 : p.color) ?? e;
        let g = "";
        return f !== void 0 && (g = ` style="background-color:var(--sinch-comp-tag-color-${f}-background);color:var(--sinch-comp-tag-color-${f}-foreground)"`), `<span data-chip contenteditable="false"${g}>${Oe(a.content ?? "")}</span>`;
      }
      case "emoji":
        return a.content ?? "";
      case "linebreak":
        return "<br>";
      case "paragraph":
        return `<p>${((d = a.children) == null ? void 0 : d.map(i).join("")) ?? ""}</p>`;
      case "list":
        return a.ordered === !0 ? `<ol>${((c = a.children) == null ? void 0 : c.map(i).join("")) ?? ""}</ol>` : `<ul>${((u = a.children) == null ? void 0 : u.map(i).join("")) ?? ""}</ul>`;
      case "listItem":
        return `<li>${((b = a.children) == null ? void 0 : b.map(i).join("")) ?? ""}</li>`;
      default:
        return "";
    }
  };
  return o.map(i).join("");
}
function Oe(o) {
  return o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const vs = D(
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
), ws = () => /* @__PURE__ */ l(
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
), xs = P(
  ({
    className: o,
    text: e,
    readonly: n = !1,
    color: t,
    icon: i,
    onClick: a,
    onRemove: r,
    style: s,
    ...m
  }, d) => {
    const c = {};
    t !== void 0 && t !== "default" && (c.backgroundColor = `var(--sinch-comp-tag-color-${t}-background)`, c.color = `var(--sinch-comp-tag-color-${t}-foreground)`, c["--sinch-global-color-icon"] = `var(--sinch-comp-tag-color-${t}-foreground)`);
    const u = k((p) => {
      p.stopPropagation(), r == null || r(p);
    }, [r]), b = k((p) => {
      p.target.closest("[data-close-icon]") === null && (a == null || a(p));
    }, [a]);
    return /* @__PURE__ */ A(
      "span",
      {
        ref: d,
        role: "button",
        "aria-label": e,
        contentEditable: !1,
        className: h(
          vs({ readonly: n }),
          o
        ),
        style: { ...c, ...s },
        onClick: b,
        ...m,
        children: [
          i !== void 0 && /* @__PURE__ */ l(
            "span",
            {
              className: "w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)] flex items-center justify-center",
              children: i
            }
          ),
          /* @__PURE__ */ l("span", { className: "flex-1 overflow-hidden text-ellipsis whitespace-nowrap", children: e }),
          n !== !0 && /* @__PURE__ */ l(
            "span",
            {
              "data-close-icon": !0,
              className: "cursor-pointer flex items-center justify-center",
              onClick: u,
              role: "button",
              "aria-label": `Remove ${e}`,
              children: /* @__PURE__ */ l(ws, {})
            }
          )
        ]
      }
    );
  }
);
xs.displayName = "RichTextareaChip";
const ys = 216 / 2, jn = 30, vn = 26, wn = 26, qe = ys - jn, Ye = qe - vn, xn = Ye - wn, Ns = Ye, Cs = xn, Vs = qe, To = (o) => {
  if (o === "" || o === null || o === void 0)
    return { hours: 0, minutes: 0 };
  const e = o.split(":"), n = parseInt(e[0] ?? "00"), t = parseInt(e[1] ?? "00");
  return isNaN(n) || n > 23 || n < 0 ? { hours: 0, minutes: 0 } : isNaN(t) || t > 59 || t < 0 ? { hours: 0, minutes: 0 } : { hours: n, minutes: t };
}, Ae = (o) => o.toString().padStart(2, "0"), Is = (o, e) => `${Ae(o)}:${Ae(e)}:00`, zs = (o, e) => e ? Ae(o) : o === 0 || o === 12 ? "12" : Ae(o % 12), Ds = (o) => o === 0 ? "12" : o === 12 ? "24" : String(o), yn = (o) => Ae(o), Ts = (o, e) => e ? o === 0 ? 12 : o === 12 ? 0 : o : o % 12, Mo = (o, e) => {
  const t = (360 - (o % 360 - e)) % 360;
  return t > 180 ? o - 360 + t : o + t;
}, Ms = D(
  // Base styles
  "block outline-none",
  {
    variants: {},
    defaultVariants: {}
  }
), So = ({ hour: o, x: e, y: n, isSelected: t, onClick: i }) => {
  const a = Ds(o), r = o >= 12 && o !== 12 || o === 0, s = (m) => {
    (m.key === "Enter" || m.key === " ") && (m.preventDefault(), i());
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: h(
        "absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto",
        "top-[calc(50%-14px)] left-[calc(50%-14px)]",
        "leading-7",
        r ? [
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
      "aria-label": `${a} o'clock`,
      onClick: (m) => {
        m.stopPropagation(), i();
      },
      onKeyDown: s,
      children: a
    }
  );
}, Ss = ({ minute: o, x: e, y: n, isSelected: t, onClick: i }) => {
  const a = (r) => {
    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), i());
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: h(
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
      onClick: (r) => {
        r.stopPropagation(), i();
      },
      onKeyDown: a,
      children: yn(o)
    }
  );
}, Os = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "00:00:00",
    ampm: t = !1,
    "aria-label": i,
    submitAriaLabel: a = "Submit",
    onChange: r,
    ...s
  }, m) => {
    const d = To(e ?? n), [c, u] = F(d.hours), [b, p] = F(d.minutes), [f, g] = F(0), [x, V] = F(0), I = Z(null), N = Z(null), j = e !== void 0;
    X(() => {
      if (j) {
        const M = To(e);
        u(M.hours), p(M.minutes);
      }
    }, [j, e]), X(() => {
      const M = c % 12, K = Mo(f, M * 30);
      g(K);
    }, [c]), X(() => {
      const M = Mo(x, b * 6);
      V(M);
    }, [b]);
    const v = !t, y = qe + jn / 2, w = Ye + vn / 2, T = xn + wn / 2, z = J(() => Array.from({ length: 12 }, (M, K) => {
      const te = Math.PI / 6 * (K - 3), W = Math.cos(te) * w, Q = Math.sin(te) * w;
      return { hour: K, x: W, y: Q };
    }), [w]), O = J(() => Array.from({ length: 12 }, (M, K) => {
      const te = K + 12, W = Math.PI / 6 * (K - 3), Q = Math.cos(W) * T, le = Math.sin(W) * T;
      return { hour: te, x: Q, y: le };
    }), [T]), $ = J(() => Array.from({ length: 12 }, (M, K) => {
      const te = K * 5, W = Math.PI / 30 * (te - 15), Q = Math.cos(W) * y, le = Math.sin(W) * y;
      return { minute: te, x: Q, y: le };
    }), [y]), C = Ts(c, v), E = k((M) => {
      u(M);
    }, []), _ = k((M) => {
      p(M);
    }, []), L = k((M) => {
      const K = M.currentTarget.getBoundingClientRect(), te = K.width / 2, W = K.height / 2, Q = M.clientX - K.left, le = K.height - (M.clientY - K.top), ce = Q - te, se = le - W, B = Math.sqrt(ce * ce + se * se), oe = ce / B;
      let re = (Math.acos(oe * (se < 0 ? -1 : 1)) * (180 / Math.PI) - 90 - 360) % 360 * -1;
      se < 0 && (re += 180);
      const ge = B > qe ? 0 : B > Ye ? 1 : 2, ye = ge > 0, Qe = ge > 1;
      if (ye) {
        const he = Math.round(re / 30) % 12;
        if (v)
          u(Qe ? he === 0 ? 0 : he + 12 : he === 0 ? 12 : he);
        else {
          const Nn = c >= 12 ? 12 : 0;
          u(he + Nn);
        }
      } else
        p(Math.round(re / 6) % 60);
    }, [v, c]), R = k((M) => {
      M === "am" && c >= 12 ? u(c - 12) : M === "pm" && c < 12 && u(c + 12);
    }, [c]), U = k(() => {
      const M = Is(c, b);
      r == null || r(M);
    }, [c, b, r]), G = k((M) => {
      switch (M.key) {
        case "ArrowUp":
          M.preventDefault(), u((K) => (K + 1) % 24);
          break;
        case "ArrowDown":
          M.preventDefault(), u((K) => (K + 23) % 24);
          break;
      }
    }, []), q = k((M) => {
      switch (M.key) {
        case "ArrowUp":
          M.preventDefault(), p((K) => (K + 1) % 60);
          break;
        case "ArrowDown":
          M.preventDefault(), p((K) => (K + 59) % 60);
          break;
      }
    }, []), H = v && (c <= 0 || c > 12) ? Cs : Ns, S = b % 5 === 0, ee = c >= 0 && c < 12 ? "am" : "pm";
    return /* @__PURE__ */ l(
      "div",
      {
        ref: m,
        className: h(Ms(), o),
        "aria-label": i,
        ...s,
        children: /* @__PURE__ */ A("div", { className: "flex flex-col w-[248px] p-4 box-border gap-4", children: [
          /* @__PURE__ */ A(
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
                    "aria-valuemax": v ? 23 : 12,
                    "aria-valuenow": c,
                    "aria-valuetext": String(c),
                    children: /* @__PURE__ */ l("span", { children: zs(c, v) })
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
                    "aria-valuenow": b,
                    "aria-valuetext": String(b),
                    children: /* @__PURE__ */ l("span", { children: yn(b) })
                  }
                ),
                /* @__PURE__ */ l(
                  me,
                  {
                    size: "s",
                    "aria-label": a,
                    className: "absolute right-0 top-1/2 -translate-y-1/2",
                    onClick: U,
                    icon: /* @__PURE__ */ l(
                      ne,
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
          /* @__PURE__ */ A(
            "div",
            {
              className: "relative w-[216px] h-[216px] rounded-full box-border cursor-pointer",
              style: {
                border: "1px solid var(--sinch-comp-time-picker-watch-face-color-default-border-initial)",
                backgroundColor: "var(--sinch-comp-time-picker-watch-face-color-default-background-initial)"
              },
              role: "group",
              "aria-label": "Time picker clock face",
              onClick: L,
              children: [
                /* @__PURE__ */ A("div", { className: "absolute inset-0 rounded-full pointer-events-none select-none", children: [
                  z.map(({ hour: M, x: K, y: te }) => /* @__PURE__ */ l(
                    So,
                    {
                      hour: M,
                      x: K,
                      y: te,
                      is24Hour: !1,
                      isSelected: v ? C === M && c > 0 && c <= 12 : C === M,
                      onClick: () => E(M)
                    },
                    `h12-${M}`
                  )),
                  v && O.map(({ hour: M, x: K, y: te }) => /* @__PURE__ */ l(
                    So,
                    {
                      hour: M,
                      x: K,
                      y: te,
                      is24Hour: !0,
                      isSelected: C === M,
                      onClick: () => E(M)
                    },
                    `h24-${M}`
                  ))
                ] }),
                /* @__PURE__ */ l("div", { className: "absolute inset-0 rounded-full pointer-events-none select-none", children: $.map(({ minute: M, x: K, y: te }) => /* @__PURE__ */ l(
                  Ss,
                  {
                    minute: M,
                    x: K,
                    y: te,
                    isSelected: b === M,
                    onClick: () => _(M)
                  },
                  `m-${M}`
                )) }),
                /* @__PURE__ */ A("div", { className: "absolute inset-0 cursor-pointer rounded-full", children: [
                  /* @__PURE__ */ l(
                    "div",
                    {
                      ref: I,
                      className: h(
                        "absolute w-1 rounded-sm z-[2] outline-none",
                        "left-[calc(50%-2px)] bottom-1/2",
                        "origin-bottom",
                        "transition-[transform,height] duration-[250ms] ease-in-out",
                        "motion-reduce:transition-none",
                        "focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"
                      ),
                      style: {
                        height: `${H}px`,
                        transform: `rotate(${f}deg)`,
                        backgroundColor: "var(--sinch-comp-time-picker-needle-color-default-background-initial)"
                      },
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": "Hour selector",
                      "aria-valuemin": 0,
                      "aria-valuemax": v ? 23 : 12,
                      "aria-valuenow": c,
                      "aria-valuetext": `${c} o'clock`,
                      onKeyDown: G
                    }
                  ),
                  /* @__PURE__ */ l(
                    "div",
                    {
                      ref: N,
                      className: h(
                        "absolute w-0.5 rounded-[1px] z-[2] outline-none",
                        "left-[calc(50%-1px)] bottom-1/2",
                        "origin-bottom",
                        "transition-[transform,height] duration-[250ms] ease-in-out",
                        "motion-reduce:transition-none",
                        "focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"
                      ),
                      style: {
                        height: `${Vs}px`,
                        transform: `rotate(${x}deg)`,
                        backgroundColor: "var(--sinch-comp-time-picker-needle-color-default-background-initial)"
                      },
                      tabIndex: 0,
                      role: "slider",
                      "aria-label": "Minute selector",
                      "aria-valuemin": 0,
                      "aria-valuemax": 59,
                      "aria-valuenow": b,
                      "aria-valuetext": `${b} minutes`,
                      onKeyDown: q,
                      children: !S && /* @__PURE__ */ l(
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
          t && /* @__PURE__ */ l("div", { className: "flex justify-center w-full h-8", children: /* @__PURE__ */ A(
            ko,
            {
              value: ee,
              "aria-label": "AM/PM selection",
              onChange: R,
              children: [
                /* @__PURE__ */ l(
                  Ge,
                  {
                    value: "am",
                    text: "AM",
                    "aria-label": "AM",
                    isFirst: !0
                  }
                ),
                /* @__PURE__ */ l(
                  Ge,
                  {
                    value: "pm",
                    text: "PM",
                    "aria-label": "PM",
                    isLast: !0
                  }
                )
              ]
            }
          ) })
        ] })
      }
    );
  }
);
Os.displayName = "TimePicker";
const _e = 7, Oo = (o) => o.toString().padStart(2, "0"), Es = (o) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), 1)), t = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth() + 1, 0)), i = n.getUTCDay(), a = t.getUTCDay(), r = t.getUTCDate(), s = (i - 1 + _e) % _e, m = (_e - 1 - a + 1) % _e, d = [];
  let c = [];
  for (let u = 1 - s; u <= r + m + 1; u++) {
    if (u <= 0 || u > r)
      c.push(null);
    else {
      const b = new Date(o);
      b.setUTCDate(u), c.push(b);
    }
    c.length === 7 && (d.push(c), c = []);
  }
  return d;
}, to = (o) => `${o.getUTCFullYear()}-${Oo(o.getUTCMonth() + 1)}-${Oo(o.getUTCDate())}`, Ce = (o) => {
  if (o === "" || o === null || o === void 0) return null;
  const e = /* @__PURE__ */ new Date(`${o.substring(0, 10)}T00:00:00Z`);
  return isNaN(e.getTime()) ? null : e;
}, Eo = () => {
  const o = /* @__PURE__ */ new Date();
  return new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()));
}, As = (o) => {
  const e = new Intl.DateTimeFormat(o, { weekday: "narrow", timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7].map((n) => {
    const t = new Date(Date.UTC(2018, 0, n));
    return e.format(t);
  });
}, Ls = (o) => {
  const e = new Intl.DateTimeFormat(o, { month: "short", timeZone: "UTC" });
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => {
    const t = new Date(Date.UTC(2018, n, 1));
    return e.format(t);
  });
}, pe = (o, e) => o.getTime() - e.getTime(), we = (o, e) => e === null ? !1 : pe(o, e) === 0, io = (o, e, n) => e === null || n === null ? !1 : pe(o, e) >= 0 && pe(n, o) >= 0, ao = (o) => pe(o[0], o[1]) > 0 ? [o[1], o[0]] : o, Ps = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth(), 0));
  return pe(n, e) >= 0;
}, Rs = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), o.getUTCMonth() + 1, 1));
  return pe(e, n) >= 0;
}, $s = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear() + 1, 0, 1));
  return pe(e, n) >= 0;
}, Fs = (o, e) => {
  const n = new Date(Date.UTC(o.getUTCFullYear(), 0, 0));
  return pe(n, e) >= 0;
}, De = (o, e, n) => {
  const t = new Date(o.getTime());
  return pe(t, e) < 0 && t.setTime(e.getTime()), pe(t, n) > 0 && t.setTime(n.getTime()), t;
}, _s = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), i = o.getUTCFullYear();
  let a = t + 1, r = i;
  a > 11 && (a = 0, r++);
  const m = new Date(Date.UTC(r, a + 1, 0)).getUTCDate(), d = Math.min(n, m), c = new Date(Date.UTC(r, a, d));
  return De(c, o, e);
}, Us = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), i = o.getUTCFullYear();
  let a = t - 1, r = i;
  a < 0 && (a = 11, r--);
  const m = new Date(Date.UTC(r, a + 1, 0)).getUTCDate(), d = Math.min(n, m), c = new Date(Date.UTC(r, a, d));
  return De(c, e, o);
}, Hs = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), a = o.getUTCFullYear() + 1;
  let r = n;
  t === 1 && n === 29 && (new Date(Date.UTC(a, 1, 29)).getUTCDate() === 29 || (r = 28));
  const s = new Date(Date.UTC(a, t, r));
  return De(s, o, e);
}, Bs = (o, e) => {
  const n = o.getUTCDate(), t = o.getUTCMonth(), a = o.getUTCFullYear() - 1;
  let r = n;
  t === 1 && n === 29 && (new Date(Date.UTC(a, 1, 29)).getUTCDate() === 29 || (r = 28));
  const s = new Date(Date.UTC(a, t, r));
  return De(s, e, o);
}, Gs = (o) => o.join(","), Ws = (o) => o.split(",").filter(Boolean), Zs = P(
  ({
    className: o,
    value: e,
    defaultValue: n = "",
    min: t = "1900-01-01",
    max: i = "2100-12-31",
    locale: a = "en-US",
    range: r = !1,
    onChange: s,
    prevYearAriaLabel: m = "Previous year",
    nextYearAriaLabel: d = "Next year",
    prevMonthAriaLabel: c = "Previous month",
    nextMonthAriaLabel: u = "Next month",
    ...b
  }, p) => {
    const f = e !== void 0, [g, x] = F(n), V = f ? e : g, I = J(() => Ce(t) ?? new Date(Date.UTC(1900, 0, 1)), [t]), N = J(() => Ce(i) ?? new Date(Date.UTC(2100, 11, 31)), [i]), { date1: j, date2: v } = J(() => {
      if (r) {
        const oe = Ws(V);
        if (oe.length === 2) {
          const ue = Ce(oe[0]), ae = Ce(oe[1]);
          if (ue !== null && ae !== null) {
            const re = ao([ue, ae]);
            return { date1: re[0], date2: re[1] };
          }
        }
        return oe.length === 1 ? { date1: Ce(oe[0]), date2: null } : { date1: null, date2: null };
      }
      return { date1: Ce(V), date2: null };
    }, [V, r]), [y, w] = F(() => {
      const B = j ?? Eo();
      return De(B, I, N);
    }), [T, z] = F(null), [O, $] = F(null);
    X(() => {
      j !== null && w((B) => j.getUTCMonth() === B.getUTCMonth() && j.getUTCFullYear() === B.getUTCFullYear() ? B : De(j, I, N));
    }, [j, I, N]);
    const C = J(() => As(a), [a]), E = J(() => Ls(a), [a]), _ = J(() => Es(y), [y]), L = J(() => Eo(), []), R = k(() => {
      w((B) => Us(B, I));
    }, [I]), U = k(() => {
      w((B) => _s(B, N));
    }, [N]), G = k(() => {
      w((B) => Bs(B, I));
    }, [I]), q = k(() => {
      w((B) => Hs(B, N));
    }, [N]), H = k(
      (B) => {
        const oe = to(B);
        if (r)
          if (T !== null) {
            const ue = ao([T, B]), ae = Gs(ue.map(to));
            f || x(ae), s == null || s(ae), z(null), $(null);
          } else
            z(B);
        else
          f || x(oe), s == null || s(oe);
      },
      [r, T, f, s]
    ), S = k(
      (B) => {
        r && T !== null && $(B);
      },
      [r, T]
    ), ee = k(() => {
      $(null);
    }, []), M = k(
      (B) => {
        if (j !== null && v !== null)
          return io(B, j, v) && !we(B, j) && !we(B, v);
        if (T !== null && O !== null) {
          const oe = ao([T, O]);
          return io(B, oe[0], oe[1]) && !we(B, oe[0]) && !we(B, oe[1]);
        }
        return !1;
      },
      [j, v, T, O]
    ), K = k(
      (B) => we(B, j) || we(B, v) || we(B, T),
      [j, v, T]
    ), te = k(
      (B) => io(B, I, N),
      [I, N]
    ), W = !Ps(y, I), Q = !Rs(y, N), le = !Fs(y, I), ce = !$s(y, N), se = `${E[y.getUTCMonth()]} ${y.getUTCFullYear()}`;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: p,
        className: h("inline-block outline-none", o),
        onMouseLeave: ee,
        ...b,
        children: /* @__PURE__ */ A("div", { className: "box-border w-fit p-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ A("div", { className: "flex flex-row h-8 items-center", children: [
            /* @__PURE__ */ l(
              me,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(ne, { name: "fa-angles-left", iconsVersion: "2", size: "sm" }),
                disabled: le,
                onClick: G,
                "aria-label": m,
                className: "-ml-1"
              }
            ),
            /* @__PURE__ */ l(
              me,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(ne, { name: "fa-angle-left", iconsVersion: "2", size: "sm" }),
                disabled: W,
                onClick: R,
                "aria-label": c
              }
            ),
            /* @__PURE__ */ l(
              "span",
              {
                role: "status",
                className: h(
                  "flex-1 text-center capitalize",
                  "font-[var(--sinch-comp-date-picker-font-header)]",
                  "text-[var(--sinch-comp-date-picker-header-color-default-text-initial)]"
                ),
                "aria-live": "polite",
                children: se
              }
            ),
            /* @__PURE__ */ l(
              me,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(ne, { name: "fa-angle-right", iconsVersion: "2", size: "sm" }),
                disabled: Q,
                onClick: U,
                "aria-label": u
              }
            ),
            /* @__PURE__ */ l(
              me,
              {
                size: "s",
                variant: "subtle-secondary",
                icon: /* @__PURE__ */ l(ne, { name: "fa-angles-right", iconsVersion: "2", size: "sm" }),
                disabled: ce,
                onClick: q,
                "aria-label": d,
                className: "-mr-1"
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "flex flex-row gap-2 h-6", children: C.map((B, oe) => /* @__PURE__ */ l(
            "div",
            {
              className: h(
                "w-6 h-6 leading-6 text-center uppercase select-none",
                "font-[var(--sinch-comp-date-picker-font-weekday)]",
                "text-[var(--sinch-comp-date-picker-weekday-color-default-text-initial)]"
              ),
              children: B
            },
            oe
          )) }),
          /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: _.map((B, oe) => B.every((ae) => ae === null) ? null : /* @__PURE__ */ l("div", { className: "flex flex-row gap-2", children: B.map((ae, re) => {
            if (ae === null)
              return /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  disabled: !0,
                  "aria-hidden": "true",
                  className: h(
                    "w-6 h-6 leading-[22px] text-center box-border",
                    "rounded-[var(--sinch-comp-date-picker-day-shape-radius)]",
                    "font-[var(--sinch-comp-date-picker-font-day)]",
                    "bg-transparent border border-transparent select-none",
                    "cursor-default"
                  )
                },
                re
              );
            const ge = we(ae, L), ye = K(ae), Qe = M(ae), he = te(ae);
            return /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                disabled: !he,
                onClick: () => H(ae),
                onMouseEnter: () => S(ae),
                "data-date": to(ae),
                className: h(
                  "w-6 h-6 leading-[22px] text-center box-border select-none",
                  "rounded-[var(--sinch-comp-date-picker-day-shape-radius)]",
                  "border border-solid",
                  "transition-colors cursor-pointer",
                  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1",
                  "focus-visible:outline-[var(--sinch-comp-date-picker-day-color-default-outline-focus)]",
                  // Default day styles
                  !ge && !ye && [
                    "font-[var(--sinch-comp-date-picker-font-day)]",
                    "text-[var(--sinch-comp-date-picker-day-color-default-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-day-color-default-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-day-color-default-border-initial)]",
                    he && "hover:bg-[var(--sinch-comp-date-picker-day-color-default-background-hover)]"
                  ],
                  // Range highlight
                  Qe && !ge && !ye && [
                    "bg-[var(--sinch-comp-date-picker-day-color-default-range-background)]"
                  ],
                  // Selected styles
                  ye && !ge && [
                    "text-[var(--sinch-comp-date-picker-day-color-checked-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-day-color-checked-border-initial)]"
                  ],
                  // Today styles (not selected)
                  ge && !ye && [
                    "font-[var(--sinch-comp-date-picker-font-today)]",
                    "text-[var(--sinch-comp-date-picker-today-color-default-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-today-color-default-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-today-color-default-border-initial)]",
                    he && "hover:bg-[var(--sinch-comp-date-picker-today-color-default-background-hover)]"
                  ],
                  // Today selected styles
                  ge && ye && [
                    "font-[var(--sinch-comp-date-picker-font-today)]",
                    "text-[var(--sinch-comp-date-picker-today-color-checked-text-initial)]",
                    "bg-[var(--sinch-comp-date-picker-today-color-checked-background-initial)]",
                    "border-[var(--sinch-comp-date-picker-today-color-checked-border-initial)]"
                  ],
                  // Disabled styles
                  !he && [
                    "cursor-default",
                    ge ? [
                      "text-[var(--sinch-comp-date-picker-today-color-disabled-text-initial)]",
                      "border-[var(--sinch-comp-date-picker-today-color-disabled-border-initial)]"
                    ] : "text-[var(--sinch-comp-date-picker-day-color-disabled-text-initial)]"
                  ]
                ),
                children: ae.getUTCDate()
              },
              re
            );
          }) }, oe)) })
        ] })
      }
    );
  }
);
Zs.displayName = "DatePicker";
const qs = D(
  // Base styles for the dialog panel
  [
    "fixed",
    "left-0",
    "right-0",
    "m-auto",
    "flex",
    "flex-col",
    "py-6",
    "border-none",
    "outline-none",
    "box-border",
    "bg-[var(--sinch-comp-dialog-color-default-background-initial,white)]",
    "rounded-[var(--sinch-comp-dialog-shape-radius,8px)]",
    "shadow-[var(--sinch-comp-dialog-shadow,0_8px_32px_rgba(0,0,0,0.2))]",
    "max-w-[var(--sinch-comp-dialog-max-width,512px)]",
    "max-h-[var(--sinch-comp-dialog-max-height,90vh)]",
    "w-[var(--sinch-comp-dialog-width,fit-content)]",
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
      }
    },
    defaultVariants: {
      open: !1
    }
  }
), Ys = D(
  [
    "fixed",
    "inset-0",
    "z-40",
    "bg-black/55",
    "transition-opacity",
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
), Ks = P(
  ({
    className: o,
    children: e,
    open: n = !1,
    caption: t,
    onClose: i,
    closeAriaLabel: a = "Close",
    icon: r,
    buttons: s,
    container: m,
    hideCloseButton: d = !1,
    style: c,
    id: u,
    "aria-label": b,
    ...p
  }, f) => {
    const g = Z(null), [x, V] = F(!1), [I, N] = F(!1), j = Z(null);
    Le(f, () => g.current), X(() => {
      n ? (j.current = document.activeElement, V(!0), requestAnimationFrame(() => {
        N(!0);
      }), document.body.style.overflow = "hidden") : x && N(!1);
    }, [n, x]), X(() => {
      if (!n) return;
      const z = (O) => {
        O.key === "Escape" && (O.preventDefault(), O.stopPropagation(), i == null || i("escape"));
      };
      return document.addEventListener("keydown", z), () => document.removeEventListener("keydown", z);
    }, [n, i]);
    const v = k(
      (z) => {
        var O;
        z.propertyName === "opacity" && (I || (V(!1), document.body.style.overflow = "", (O = j.current) == null || O.focus()));
      },
      [I]
    ), y = k(
      (z) => {
        z.target === z.currentTarget && (i == null || i("backdrop"));
      },
      [i]
    ), w = k(() => {
      i == null || i("close");
    }, [i]);
    if (X(() => {
      if (!n || !g.current) return;
      const O = g.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), $ = O[0], C = O[O.length - 1];
      $ == null || $.focus();
      const E = (_) => {
        _.key === "Tab" && (_.shiftKey ? document.activeElement === $ && (_.preventDefault(), C == null || C.focus()) : document.activeElement === C && (_.preventDefault(), $ == null || $.focus()));
      };
      return document.addEventListener("keydown", E), () => document.removeEventListener("keydown", E);
    }, [n]), !x && !n) return null;
    const T = /* @__PURE__ */ A(Ne, { children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: h(Ys({ visible: I })),
          onClick: y,
          "aria-hidden": "true",
          "data-testid": "dialog-backdrop"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
          children: /* @__PURE__ */ A(
            "div",
            {
              ref: g,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": b ?? t,
              "aria-labelledby": t ? "dialog-caption" : void 0,
              "aria-describedby": "dialog-content",
              id: u,
              style: c,
              className: h(
                qs({ open: I }),
                "pointer-events-auto",
                o
              ),
              onTransitionEnd: v,
              ...p,
              children: [
                /* @__PURE__ */ A(
                  "div",
                  {
                    className: h(
                      "flex flex-row items-start gap-2 mb-3 px-6",
                      "[--sinch-global-size-icon:24px]",
                      "[--sinch-global-color-icon:var(--sinch-comp-dialog-color-default-icon-initial)]"
                    ),
                    children: [
                      r && /* @__PURE__ */ l("span", { className: "shrink-0", children: r }),
                      t && /* @__PURE__ */ l(
                        ho,
                        {
                          type: "m",
                          level: "3",
                          id: "dialog-caption",
                          className: h(
                            "[color:var(--sinch-comp-dialog-color-default-title-initial)]",
                            "[font:var(--sinch-comp-dialog-font-title)]"
                          ),
                          children: t
                        }
                      ),
                      !d && /* @__PURE__ */ l(
                        me,
                        {
                          size: "s",
                          "aria-label": a,
                          onClick: w,
                          className: "relative left-1 -top-1 ml-auto",
                          icon: /* @__PURE__ */ l(ne, { name: "fa-xmark", iconsVersion: "2", size: "sm" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    id: "dialog-content",
                    className: "min-h-0 overflow-auto px-6 py-1",
                    children: e
                  }
                ),
                s && /* @__PURE__ */ l("div", { className: "flex flex-row justify-end gap-4 mt-5 px-6", children: s })
              ]
            }
          )
        }
      )
    ] });
    return Pe(T, m ?? document.body);
  }
);
Ks.displayName = "Dialog";
const Js = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "table",
    {
      ref: t,
      className: h(
        // Base styles matching web component
        "table-auto",
        o
      ),
      ...n,
      children: e
    }
  )
);
Js.displayName = "Table";
const Xs = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "thead",
    {
      ref: t,
      className: h(o),
      ...n,
      children: e
    }
  )
);
Xs.displayName = "TableHead";
const Qs = P(
  ({ className: o, children: e, ...n }, t) => /* @__PURE__ */ l(
    "tbody",
    {
      ref: t,
      className: h(o),
      ...n,
      children: e
    }
  )
);
Qs.displayName = "TableBody";
const er = D(
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
), or = P(
  ({ className: o, children: e, sticky: n, selected: t, ...i }, a) => /* @__PURE__ */ l(
    "tr",
    {
      ref: a,
      "data-sticky": n || void 0,
      "data-selected": t || void 0,
      className: h(
        er({ selected: t }),
        // Apply last:border-b-0 on child cells via parent data attribute
        "[&:last-child_td]:border-b-0",
        // Sticky styles for header cells within this row
        n && "[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:bg-[var(--sinch-comp-table-color-row-default-background-sticky)]",
        o
      ),
      ...i,
      children: e
    }
  )
);
or.displayName = "TableRow";
const nr = D(
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
), tr = D(
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
), ir = P(
  ({
    className: o,
    children: e,
    text: n,
    align: t = "start",
    fit: i,
    leftContent: a,
    rightContent: r,
    checkboxContent: s,
    tooltipContent: m,
    ...d
  }, c) => {
    const u = n !== void 0 && n !== "", b = e !== void 0;
    return /* @__PURE__ */ l(
      "th",
      {
        ref: c,
        scope: "col",
        className: h(nr({ align: t, fit: i }), o),
        ...d,
        children: /* @__PURE__ */ A("div", { className: h(tr({ align: t })), children: [
          s,
          a,
          u && /* @__PURE__ */ l("span", { className: "min-w-0 shrink text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]", children: n }),
          b && !u && e,
          m,
          r
        ] })
      }
    );
  }
);
ir.displayName = "TableHeadCell";
const ar = D(
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
), lr = D(
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
), sr = P(
  ({ className: o, children: e, align: n = "start", ...t }, i) => /* @__PURE__ */ l(
    "td",
    {
      ref: i,
      className: h(ar({ align: n }), o),
      ...t,
      children: /* @__PURE__ */ l("div", { className: h(lr({ align: n })), children: e })
    }
  )
);
sr.displayName = "TableCell";
export {
  Jo as Accordion,
  br as AccordionGroup,
  Xo as AccordionItem,
  Vl as ActionMenu,
  Il as ActionMenuOption,
  St as Alert,
  yt as Avatar,
  kt as Badge,
  me as Button,
  Qi as ButtonGroup,
  qo as ButtonGroupContext,
  ta as ButtonGroupItem,
  la as Card,
  ra as CardContainer,
  sa as CardTitle,
  Wt as Checkbox,
  Ft as Chip,
  ri as CodeTag,
  vo as ColorMenu,
  vr as ColorMenuCompound,
  wo as ColorMenuOption,
  jo as ColorSwatch,
  Zs as DatePicker,
  Ks as Dialog,
  Zo as Emoji,
  bs as EmojiPicker,
  Di as Field,
  nl as FileDrop,
  il as FilePicker,
  Oa as FileStatus,
  Mi as Flag,
  Pi as Grid,
  Ri as GridItem,
  Ai as HelpTooltip,
  ne as Icon,
  ui as InlineAlert,
  uo as Input,
  Ct as Link,
  Hi as List,
  Bi as ListItem,
  Ei as Pagination,
  es as PersistentOverlay,
  Jl as Pop,
  bn as Popover,
  Xt as Progress,
  en as ProgressStepper,
  ur as ProgressStepperGroup,
  on as ProgressStepperItem,
  Bo as Radio,
  dr as RadioGroup,
  Go as RadioOption,
  hs as RichText,
  fs as RichTextarea,
  xs as RichTextareaChip,
  El as SKINTONE_SWATCH_COLORS,
  Al as SWATCH_COLORS,
  os as SegmentCollapse,
  ko as SegmentedControl,
  pr as SegmentedControlGroup,
  Ge as SegmentedControlOption,
  rn as SegmentedIconControl,
  gr as SegmentedIconControlGroup,
  mn as SegmentedIconControlOption,
  jr as Select,
  gn as SelectButton,
  pn as SelectMenu,
  fo as SelectMenuOption,
  sl as Sheet,
  ml as SheetTitle,
  Fi as Skeleton,
  Ui as SkeletonItem,
  bo as Spinner,
  Ea as StopEvents,
  Js as Table,
  Qs as TableBody,
  sr as TableCell,
  Xs as TableHead,
  ir as TableHeadCell,
  or as TableRow,
  po as Tabs,
  hr as TabsGroup,
  go as TabsIconOption,
  an as TabsOption,
  It as Tag,
  Je as Text,
  ki as Textarea,
  Os as TimePicker,
  ho as Title,
  cn as Toast,
  jl as ToastManager,
  kr as ToastProvider,
  Pt as Toggle,
  Xe as Tooltip,
  h as cn,
  Ll as getSwatchColorBg,
  Pl as getSwatchColorFg,
  Ze as isSwatchColor,
  fn as parseRichText,
  fr as toast,
  Cl as useActionMenuContext,
  Ji as useButtonGroupContext,
  gl as useToast
};
