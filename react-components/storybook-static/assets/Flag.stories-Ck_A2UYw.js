import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as X}from"./index-EXTQMK5R.js";import{r as g}from"./index-pP6CS22B.js";import{c as Y}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=X(["inline-block","pointer-events-none","object-contain"].join(" "),{variants:{size:{xs:"w-4 h-4",sm:"w-5 h-5",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-10 h-10"}},defaultVariants:{size:"md"}}),s=g.forwardRef(({className:B,code:l,size:W="md",flagUrlTemplate:d,alt:k,loading:H="lazy",style:J,...K},Q)=>{const m=g.useMemo(()=>l===""||l===null||l===void 0?"":d!==void 0&&d!==""?d.replace("%s",l):"",[l,d]);return m===""?null:e.jsx("img",{ref:Q,src:m,alt:k??l,loading:H,className:Y(Z({size:W}),B),style:{width:"var(--sinch-global-size-icon)",height:"var(--sinch-global-size-icon)",...J},...K})});s.displayName="Flag";s.__docgenInfo={description:`Flag component for displaying country flags based on ISO 3166-1 alpha-2 country codes.

The flag URL is determined by either:
1. The \`flagUrlTemplate\` prop (with %s as placeholder for the country code)
2. The CSS variable \`--sinch-flag-src-url\` (with %s as placeholder for the country code)

@example
\`\`\`tsx
<Flag code="US" />
<Flag code="GB" size="lg" />
<Flag code="SE" flagUrlTemplate="https://example.com/flags/%s.svg" />
\`\`\``,methods:[],displayName:"Flag",props:{code:{required:!0,tsType:{name:"string"},description:'ISO 3166-1 alpha-2 country code (e.g., "US", "GB", "SE")'},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Flag size
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},flagUrlTemplate:{required:!1,tsType:{name:"string"},description:`Optional URL template for flag images.
Use %s as placeholder for the country code.
If not provided, reads from CSS variable --sinch-flag-src-url`},loading:{defaultValue:{value:"'lazy'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const a="https://flagcdn.com/w40/%s.png",re={title:"Components/Flag",component:s,tags:["autodocs"],args:{flagUrlTemplate:a},argTypes:{code:{control:"text",description:"ISO 3166-1 alpha-2 country code"},size:{control:"select",options:["xs","sm","md","lg","xl"]},flagUrlTemplate:{control:"text",description:"URL template with %s placeholder for country code"}}},r={args:{code:"us"}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{code:"us",size:"xs",flagUrlTemplate:a}),e.jsx(s,{code:"us",size:"sm",flagUrlTemplate:a}),e.jsx(s,{code:"us",size:"md",flagUrlTemplate:a}),e.jsx(s,{code:"us",size:"lg",flagUrlTemplate:a}),e.jsx(s,{code:"us",size:"xl",flagUrlTemplate:a})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{code:"us",flagUrlTemplate:a}),e.jsx(s,{code:"gb",flagUrlTemplate:a}),e.jsx(s,{code:"se",flagUrlTemplate:a}),e.jsx(s,{code:"de",flagUrlTemplate:a}),e.jsx(s,{code:"fr",flagUrlTemplate:a}),e.jsx(s,{code:"jp",flagUrlTemplate:a}),e.jsx(s,{code:"br",flagUrlTemplate:a}),e.jsx(s,{code:"in",flagUrlTemplate:a})]})},n={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-8 text-sm text-foreground-muted",children:"xs"}),e.jsx(s,{code:"us",size:"xs",flagUrlTemplate:a}),e.jsx(s,{code:"gb",size:"xs",flagUrlTemplate:a}),e.jsx(s,{code:"se",size:"xs",flagUrlTemplate:a})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-8 text-sm text-foreground-muted",children:"sm"}),e.jsx(s,{code:"us",size:"sm",flagUrlTemplate:a}),e.jsx(s,{code:"gb",size:"sm",flagUrlTemplate:a}),e.jsx(s,{code:"se",size:"sm",flagUrlTemplate:a})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-8 text-sm text-foreground-muted",children:"md"}),e.jsx(s,{code:"us",size:"md",flagUrlTemplate:a}),e.jsx(s,{code:"gb",size:"md",flagUrlTemplate:a}),e.jsx(s,{code:"se",size:"md",flagUrlTemplate:a})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-8 text-sm text-foreground-muted",children:"lg"}),e.jsx(s,{code:"us",size:"lg",flagUrlTemplate:a}),e.jsx(s,{code:"gb",size:"lg",flagUrlTemplate:a}),e.jsx(s,{code:"se",size:"lg",flagUrlTemplate:a})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-8 text-sm text-foreground-muted",children:"xl"}),e.jsx(s,{code:"us",size:"xl",flagUrlTemplate:a}),e.jsx(s,{code:"gb",size:"xl",flagUrlTemplate:a}),e.jsx(s,{code:"se",size:"xl",flagUrlTemplate:a})]})]})},c={args:{code:"se",alt:"Swedish flag",size:"lg"}},i={args:{code:"us",flagUrlTemplate:"https://flagcdn.com/h40/%s.png",size:"lg"}};var p,f,T,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    code: 'us'
  }
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source},description:{story:"Default flag displaying the United States.",...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var U,L,F,E,_;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Flag code="us" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
    </div>
}`,...(F=(L=t.parameters)==null?void 0:L.docs)==null?void 0:F.source},description:{story:"Display flags in all available sizes.",...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};var z,A,h,j,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="gb" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="se" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="de" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="fr" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="jp" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="br" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="in" flagUrlTemplate={FLAG_URL_TEMPLATE} />
    </div>
}`,...(h=(A=o.parameters)==null?void 0:A.docs)==null?void 0:h.source},description:{story:"Display various country flags.",...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};var R,y,G,M,P;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">xs</span>
        <Flag code="us" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">sm</span>
        <Flag code="us" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">md</span>
        <Flag code="us" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">lg</span>
        <Flag code="us" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">xl</span>
        <Flag code="us" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
    </div>
}`,...(G=(y=n.parameters)==null?void 0:y.docs)==null?void 0:G.source},description:{story:"Flags with different sizes showing a row of countries.",...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.description}}};var N,w,S,b,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    code: 'se',
    alt: 'Swedish flag',
    size: 'lg'
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:"Flag with custom alt text for accessibility.",...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};var O,D,I,V,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    code: 'us',
    flagUrlTemplate: 'https://flagcdn.com/h40/%s.png',
    size: 'lg'
  }
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source},description:{story:"Using a different flag URL provider.",...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};const te=["Default","Sizes","Countries","SizeComparison","WithCustomAlt","CustomUrlTemplate"];export{o as Countries,i as CustomUrlTemplate,r as Default,n as SizeComparison,t as Sizes,c as WithCustomAlt,te as __namedExportsOrder,re as default};
