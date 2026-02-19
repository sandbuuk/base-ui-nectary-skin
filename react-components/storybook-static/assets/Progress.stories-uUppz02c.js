import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as r}from"./index-EXTQMK5R.js";import{r as m}from"./index-pP6CS22B.js";import{c as F}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $=r("block",{variants:{},defaultVariants:{}}),z=r("flex items-center h-6",{variants:{},defaultVariants:{}}),A=r("h-2 rounded-full flex-1 min-w-0 bg-[var(--sinch-comp-progress-color-default-background-initial)]",{variants:{},defaultVariants:{}}),B=r("h-2 rounded-full bg-[var(--sinch-comp-progress-color-default-bar-initial)] transition-[width] duration-200",{variants:{},defaultVariants:{}}),G=r("w-[46px] text-sm text-[var(--sinch-comp-progress-color-default-text-initial)]",{variants:{visible:{true:"block",false:"hidden"}},defaultVariants:{visible:!1}}),a=m.forwardRef(({className:M,value:U=0,detailed:I=!1,...L},R)=>{const s=Math.min(100,Math.max(0,U)),W=m.useMemo(()=>Intl.NumberFormat(typeof navigator<"u"?navigator.language:"en-US",{style:"percent"}).format(s/100),[s]);return e.jsx("div",{ref:R,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,className:F($(),M),...L,children:e.jsxs("div",{className:z(),children:[e.jsx("span",{className:G({visible:I}),children:W}),e.jsx("div",{className:A(),children:e.jsx("div",{className:B(),style:{width:`${s}%`}})})]})})});a.displayName="Progress";a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"Progress value between 0 and 100",defaultValue:{value:"0",computed:!1}},detailed:{required:!1,tsType:{name:"boolean"},description:"Show percentage text",defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const ee={title:"Components/Progress",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Progress value between 0 and 100"},detailed:{control:"boolean",description:"Show percentage text"}}},l={args:{value:50,"aria-label":"Loading progress"}},t={args:{value:75,detailed:!0,"aria-label":"Upload progress"}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"0%"}),e.jsx(a,{value:0,"aria-label":"Empty progress"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"25%"}),e.jsx(a,{value:25,"aria-label":"Quarter progress"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"50%"}),e.jsx(a,{value:50,"aria-label":"Half progress"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"75%"}),e.jsx(a,{value:75,"aria-label":"Three quarters progress"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"100%"}),e.jsx(a,{value:100,"aria-label":"Complete progress"})]})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{value:0,detailed:!0,"aria-label":"Empty progress"}),e.jsx(a,{value:25,detailed:!0,"aria-label":"Quarter progress"}),e.jsx(a,{value:50,detailed:!0,"aria-label":"Half progress"}),e.jsx(a,{value:75,detailed:!0,"aria-label":"Three quarters progress"}),e.jsx(a,{value:100,detailed:!0,"aria-label":"Complete progress"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Negative value (clamped to 0)"}),e.jsx(a,{value:-10,detailed:!0,"aria-label":"Negative value"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Over 100 (clamped to 100)"}),e.jsx(a,{value:150,detailed:!0,"aria-label":"Over 100 value"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Decimal value (33.33)"}),e.jsx(a,{value:33.33,detailed:!0,"aria-label":"Decimal value"})]})]})},d={render:()=>e.jsx("div",{className:"w-32",children:e.jsx(a,{value:60,detailed:!0,"aria-label":"Progress in narrow container"})})},c={render:()=>e.jsx("div",{className:"w-full max-w-xl",children:e.jsx(a,{value:45,detailed:!0,"aria-label":"Progress in wide container"})})},u={args:{value:65,className:"w-48","aria-label":"Custom styled progress"}};var p,v,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 50,
    'aria-label': 'Loading progress'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 75,
    detailed: true,
    'aria-label': 'Upload progress'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,j,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <div>
        <span className="text-sm text-foreground-muted">0%</span>
        <Progress value={0} aria-label="Empty progress" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">25%</span>
        <Progress value={25} aria-label="Quarter progress" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">50%</span>
        <Progress value={50} aria-label="Half progress" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">75%</span>
        <Progress value={75} aria-label="Three quarters progress" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">100%</span>
        <Progress value={100} aria-label="Complete progress" />
      </div>
    </div>
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,P,V;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Progress value={0} detailed aria-label="Empty progress" />
      <Progress value={25} detailed aria-label="Quarter progress" />
      <Progress value={50} detailed aria-label="Half progress" />
      <Progress value={75} detailed aria-label="Three quarters progress" />
      <Progress value={100} detailed aria-label="Complete progress" />
    </div>
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var y,C,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <div>
        <span className="text-sm text-foreground-muted">Negative value (clamped to 0)</span>
        <Progress value={-10} detailed aria-label="Negative value" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">Over 100 (clamped to 100)</span>
        <Progress value={150} detailed aria-label="Over 100 value" />
      </div>
      <div>
        <span className="text-sm text-foreground-muted">Decimal value (33.33)</span>
        <Progress value={33.33} detailed aria-label="Decimal value" />
      </div>
    </div>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var D,E,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="w-32">
      <Progress value={60} detailed aria-label="Progress in narrow container" />
    </div>
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,O,k;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xl">
      <Progress value={45} detailed aria-label="Progress in wide container" />
    </div>
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var H,Q,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 65,
    className: 'w-48',
    'aria-label': 'Custom styled progress'
  }
}`,...(_=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};const ae=["Default","Detailed","Values","DetailedValues","EdgeCases","NarrowContainer","WideContainer","CustomStyling"];export{u as CustomStyling,l as Default,t as Detailed,o as DetailedValues,i as EdgeCases,d as NarrowContainer,n as Values,c as WideContainer,ae as __namedExportsOrder,ee as default};
