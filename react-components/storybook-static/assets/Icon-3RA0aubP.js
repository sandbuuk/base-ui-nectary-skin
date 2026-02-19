import{j as c}from"./jsx-runtime-Z5uAzocK.js";import{c as m}from"./index-EXTQMK5R.js";import{r as f}from"./index-pP6CS22B.js";import{c as p}from"./cn-BLSKlp9E.js";const u=m(["inline-block","leading-none","whitespace-nowrap","select-none","antialiased","font-[var(--sinch-comp-icon-font-family)]","[font-feature-settings:var(--sinch-comp-icon-font-feature-settings)]","font-[var(--sinch-comp-icon-font-weight)]"].join(" "),{variants:{size:{xs:"w-4 h-4 text-[16px]",sm:"w-5 h-5 text-[20px]",md:"w-6 h-6 text-[24px]",lg:"w-8 h-8 text-[32px]",xl:"w-10 h-10 text-[40px]"}},defaultVariants:{size:"md"}}),d=(e,n)=>n==="1"?"":/^(fa-|(?!fa-))[0-9a-d]/i.test(e)?"font-[var(--sinch-comp-icon-font-family-zero-to-d)]":/^(fa-|(?!fa-))[e-o]/i.test(e)?"font-[var(--sinch-comp-icon-font-family-e-to-o)]":/^(fa-|(?!fa-))[p-z]/i.test(e)?"font-[var(--sinch-comp-icon-font-family-p-to-z)]":"",t=f.forwardRef(({className:e,name:n,iconsVersion:a="1",size:o="md",style:i,...s},r)=>{const l=d(n,a);return c.jsx("span",{ref:r,role:"img","aria-label":n,className:p(u({size:o}),l,e),style:{color:"var(--sinch-global-color-icon, var(--sinch-sys-color-text-default))",...i},...s,children:n})});t.displayName="Icon";t.__docgenInfo={description:`Icon component for displaying icon font glyphs.

Uses the icon name as text content with icon font families.
Supports size variants and custom styling through CSS variables.

@example
\`\`\`tsx
<Icon name="circle-check" />
<Icon name="bell" size="lg" />
<Icon name="fa-star" iconsVersion="2" className="text-warning" />
\`\`\``,methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name to display"},iconsVersion:{required:!1,tsType:{name:"union",raw:"'1' | '2'",elements:[{name:"literal",value:"'1'"},{name:"literal",value:"'2'"}]},description:`Icon font version
@default '1'`,defaultValue:{value:"'1'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Icon size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}}},composes:["Omit","VariantProps"]};export{t as I};
