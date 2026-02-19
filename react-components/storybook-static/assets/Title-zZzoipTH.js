import{j as p}from"./jsx-runtime-Z5uAzocK.js";import{c as u}from"./index-EXTQMK5R.js";import{r as h}from"./index-pP6CS22B.js";import{c}from"./cn-BLSKlp9E.js";const v=u(["block","text-foreground","[font:var(--sinch-sys-font-desktop-title-m)]","[letter-spacing:-0.02em]"],{variants:{type:{xl:"[font:var(--sinch-sys-font-desktop-title-xl)]",l:"[font:var(--sinch-sys-font-desktop-title-l)]",m:"[font:var(--sinch-sys-font-desktop-title-m)]",s:"[font:var(--sinch-sys-font-desktop-title-s)]",xs:"[font:var(--sinch-sys-font-desktop-title-xs)]"},ellipsis:{true:"overflow-hidden text-ellipsis whitespace-nowrap",false:""}},defaultVariants:{type:"m",ellipsis:!1}}),f={xl:"1",l:"2",m:"3",s:"4",xs:"5"},y={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},t=h.forwardRef(({className:a,children:n,type:e="m",level:i,ellipsis:s=!1,as:r,...o},m)=>{const l=i??f[e],d=r??y[l];return p.jsx(d,{ref:m,role:"heading","aria-level":parseInt(l,10),className:c(v({type:e,ellipsis:s}),a),...o,children:n})});t.displayName="Title";t.__docgenInfo={description:`Title component for displaying heading text with various sizes and levels.

Supports five sizes (xl, l, m, s, xs) and six semantic heading levels (1-6).
The visual size (type) and semantic level can be set independently,
allowing for flexible typography while maintaining proper document structure.

@example
\`\`\`tsx
// Default h3 heading with medium size
<Title>Page Section</Title>

// Large heading (h2 by default)
<Title type="l">Main Heading</Title>

// Small visual size but h1 semantic level
<Title type="s" level="1">Document Title</Title>

// With ellipsis truncation
<Title ellipsis>Very long title that will be truncated...</Title>

// Render as span (no semantic heading)
<Title as="span" type="m">Styled text</Title>
\`\`\``,methods:[],displayName:"Title",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to display"},type:{required:!1,tsType:{name:"union",raw:"'xl' | 'l' | 'm' | 's' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"}]},description:`Title size type
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},level:{required:!1,tsType:{name:"union",raw:"'1' | '2' | '3' | '4' | '5' | '6'",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"},{name:"literal",value:"'3'"},{name:"literal",value:"'4'"},{name:"literal",value:"'5'"},{name:"literal",value:"'6'"}]},description:`Semantic heading level (1-6). Determines the HTML heading element (h1-h6).
If not provided, defaults based on type: xl=1, l=2, m=3, s=4, xs=5`},ellipsis:{required:!1,tsType:{name:"boolean"},description:`Truncate overflowing text with ellipsis
@default false`,defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:`Override the HTML element to render as
By default, renders as the heading element corresponding to the level`}},composes:["Omit","VariantProps"]};export{t as T};
