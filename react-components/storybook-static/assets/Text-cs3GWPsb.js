import{j as m}from"./jsx-runtime-Z5uAzocK.js";import{c as f}from"./index-EXTQMK5R.js";import{r as u}from"./index-pP6CS22B.js";import{c}from"./cn-BLSKlp9E.js";const x=f("text-foreground [font:var(--sinch-sys-font-body-m)]",{variants:{type:{m:"[font:var(--sinch-sys-font-body-m)]",s:"[font:var(--sinch-sys-font-body-s)]",xs:"[font:var(--sinch-sys-font-body-xs)]",xxs:"[font:var(--sinch-sys-font-body-xxs)]"},inline:{true:"inline",false:"block"},emphasized:{true:"",false:""},ellipsis:{true:"overflow-hidden text-ellipsis whitespace-nowrap",false:""}},compoundVariants:[{type:"m",emphasized:!0,className:"[font:var(--sinch-sys-font-body-emphasize)]"},{type:"s",emphasized:!0,className:"[font:var(--sinch-sys-font-body-emphasize-s)]"}],defaultVariants:{type:"m",inline:!1,emphasized:!1,ellipsis:!1}}),s=u.forwardRef(({className:a,children:t,type:n="m",inline:e=!1,emphasized:l=!1,ellipsis:i=!1,as:o,...r},p)=>{const d=o??(e?"span":"p");return m.jsx(d,{ref:p,className:c(x({type:n,inline:e,emphasized:l,ellipsis:i}),a),...r,children:t})});s.displayName="Text";s.__docgenInfo={description:`Text component for displaying body text with various sizes and styles.

Supports four sizes (m, s, xs, xxs), emphasized styling for m and s sizes,
inline/block display modes, and text truncation with ellipsis.

@example
\`\`\`tsx
// Default paragraph text
<Text>Hello World</Text>

// Small emphasized text
<Text type="s" emphasized>Important note</Text>

// Inline text with ellipsis
<Text inline ellipsis>Long text that will truncate...</Text>

// Render as a label
<Text as="label" type="s">Form field label</Text>
\`\`\``,methods:[],displayName:"Text",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display"},type:{required:!1,tsType:{name:"union",raw:"'m' | 's' | 'xs' | 'xxs'",elements:[{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'xxs'"}]},description:`Text size type
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:`Display as inline element (span-like) instead of block (paragraph-like)
@default false`,defaultValue:{value:"false",computed:!1}},emphasized:{required:!1,tsType:{name:"boolean"},description:`Apply emphasized (bolder) styling. Only works with 'm' and 's' sizes.
@default false`,defaultValue:{value:"false",computed:!1}},ellipsis:{required:!1,tsType:{name:"boolean"},description:`Truncate overflowing text with ellipsis
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'p' | 'span' | 'div' | 'label'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"},{name:"literal",value:"'label'"}]},description:`The HTML element to render as
@default 'p' when not inline, 'span' when inline`}},composes:["Omit","VariantProps"]};export{s as T};
