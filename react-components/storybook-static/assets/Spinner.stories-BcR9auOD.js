import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as s}from"./Spinner-Bh5BG8Cg.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const he={title:"Components/Spinner",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["s","m","l"],description:"Size of the spinner"},className:{control:"text",description:"Additional CSS classes"}},parameters:{docs:{description:{component:"A loading indicator that displays an animated spinning circle. Use to indicate that content is loading or an action is in progress."}}}},r={args:{}},a={args:{size:"s"}},n={args:{size:"m"}},t={args:{size:"l"}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"s"}),e.jsx("span",{className:"text-sm text-foreground-muted",children:"Small (16px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"m"}),e.jsx("span",{className:"text-sm text-foreground-muted",children:"Medium (24px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:"l"}),e.jsx("span",{className:"text-sm text-foreground-muted",children:"Large (50px)"})]})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(s,{className:"text-primary"}),e.jsx(s,{className:"text-success"}),e.jsx(s,{className:"text-warning"}),e.jsx(s,{className:"text-danger"}),e.jsx(s,{className:"text-info"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"s"}),e.jsx("span",{children:"Loading..."})]})},d={render:()=>e.jsxs("button",{className:"inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground",disabled:!0,children:[e.jsx(s,{size:"s",className:"text-primary-foreground"}),e.jsx("span",{children:"Submitting..."})]})},m={render:()=>e.jsx("div",{className:"flex h-64 w-full items-center justify-center rounded-lg border border-border bg-surface-primary",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(s,{size:"l"}),e.jsx("span",{className:"text-foreground-muted",children:"Loading content..."})]})})},l={render:()=>e.jsxs("div",{className:"relative h-40 w-64 rounded-lg border border-border bg-surface-primary p-4",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-lg bg-surface-primary/80",children:e.jsx(s,{size:"m"})}),e.jsx("h3",{className:"font-semibold",children:"Card Title"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"Some card content..."})]})},p={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-6 rounded-lg bg-pure-inverted p-8",children:[e.jsx(s,{size:"s",className:"text-pure"}),e.jsx(s,{size:"m",className:"text-pure"}),e.jsx(s,{size:"l",className:"text-pure"})]})};var u,x,g,f,N;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"Default spinner with medium size.",...(N=(f=r.parameters)==null?void 0:f.docs)==null?void 0:N.description}}};var S,j,h,v,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 's'
  }
}`,...(h=(j=a.parameters)==null?void 0:j.docs)==null?void 0:h.source},description:{story:"Small spinner (16x16px) - ideal for inline usage or buttons.",...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};var b,z,L,w,C;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'm'
  }
}`,...(L=(z=n.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:"Medium spinner (24x24px) - the default size for general use.",...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var k,A,D,M,T;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'l'
  }
}`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"Large spinner (50x50px) - for prominent loading states.",...(T=(M=t.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};var B,I,O,E,P;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="s" />
        <span className="text-sm text-foreground-muted">Small (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="m" />
        <span className="text-sm text-foreground-muted">Medium (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="l" />
        <span className="text-sm text-foreground-muted">Large (50px)</span>
      </div>
    </div>
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"All sizes displayed together for comparison.",...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var W,_,F,R,U;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <Spinner className="text-primary" />
      <Spinner className="text-success" />
      <Spinner className="text-warning" />
      <Spinner className="text-danger" />
      <Spinner className="text-info" />
    </div>
}`,...(F=(_=o.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:"Spinner with custom color using text color utilities.",...(U=(R=o.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var q,G,H,J,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Spinner size="s" />
      <span>Loading...</span>
    </div>
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Spinner used inline with text content.",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,V,X,Y,Z;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground" disabled>
      <Spinner size="s" className="text-primary-foreground" />
      <span>Submitting...</span>
    </button>
}`,...(X=(V=d.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"Spinner inside a button to indicate loading state.",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,se,re,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex h-64 w-full items-center justify-center rounded-lg border border-border bg-surface-primary">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="l" />
        <span className="text-foreground-muted">Loading content...</span>
      </div>
    </div>
}`,...(se=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:se.source},description:{story:"Full page loading state with centered spinner.",...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var ne,te,ie,oe,ce;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="relative h-40 w-64 rounded-lg border border-border bg-surface-primary p-4">
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-surface-primary/80">
        <Spinner size="m" />
      </div>
      <h3 className="font-semibold">Card Title</h3>
      <p className="text-sm text-foreground-muted">Some card content...</p>
    </div>
}`,...(ie=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"Card with loading state overlay.",...(ce=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var de,me,le,pe,ue;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-6 rounded-lg bg-pure-inverted p-8">
      <Spinner size="s" className="text-pure" />
      <Spinner size="m" className="text-pure" />
      <Spinner size="l" className="text-pure" />
    </div>
}`,...(le=(me=p.parameters)==null?void 0:me.docs)==null?void 0:le.source},description:{story:"On dark background showing contrast.",...(ue=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};const ve=["Default","Small","Medium","Large","AllSizes","CustomColor","InlineWithText","InButton","PageLoading","CardLoading","OnDarkBackground"];export{i as AllSizes,l as CardLoading,o as CustomColor,r as Default,d as InButton,c as InlineWithText,t as Large,n as Medium,p as OnDarkBackground,m as PageLoading,a as Small,ve as __namedExportsOrder,he as default};
