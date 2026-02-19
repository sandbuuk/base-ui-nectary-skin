import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as t}from"./Title-zZzoipTH.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const He={title:"Components/Title",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["xl","l","m","s","xs"],description:"Title size type"},level:{control:"select",options:["1","2","3","4","5","6"],description:"Semantic heading level"},ellipsis:{control:"boolean",description:"Truncate with ellipsis"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","span","div"],description:"HTML element to render"}}},s={args:{children:"Default Title"}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{type:"xl",children:"Extra Large Title (xl)"}),e.jsx(t,{type:"l",children:"Large Title (l)"}),e.jsx(t,{type:"m",children:"Medium Title (m)"}),e.jsx(t,{type:"s",children:"Small Title (s)"}),e.jsx(t,{type:"xs",children:"Extra Small Title (xs)"})]})},a={args:{type:"xl",children:"Extra Large Heading"}},i={args:{type:"l",children:"Large Heading"}},l={args:{type:"m",children:"Medium Heading"}},n={args:{type:"s",children:"Small Heading"}},o={args:{type:"xs",children:"Extra Small Heading"}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{type:"s",level:"1",children:"Small size, but h1 level (for accessibility)"}),e.jsx(t,{type:"xl",level:"4",children:"Extra large size, but h4 level"})]})},d={render:()=>e.jsxs("div",{className:"w-64 flex flex-col gap-4",children:[e.jsx(t,{ellipsis:!0,children:"This is a very long title that will be truncated with an ellipsis"}),e.jsx(t,{type:"l",ellipsis:!0,children:"Another long title demonstrating ellipsis on large text"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{as:"span",type:"m",children:"Rendered as span"}),e.jsx(t,{as:"div",type:"m",children:"Rendered as div"}),e.jsx(t,{as:"h1",type:"xs",children:"Extra small size, but rendered as h1"})]})},m={render:()=>e.jsxs("article",{className:"flex flex-col gap-4",children:[e.jsx(t,{type:"xl",children:"Document Title (h1)"}),e.jsx("p",{className:"text-foreground-muted",children:"Introduction paragraph..."}),e.jsx(t,{type:"l",children:"Section 1 (h2)"}),e.jsx("p",{className:"text-foreground-muted",children:"Section content..."}),e.jsx(t,{type:"m",children:"Subsection 1.1 (h3)"}),e.jsx("p",{className:"text-foreground-muted",children:"Subsection content..."}),e.jsx(t,{type:"s",children:"Minor Heading (h4)"}),e.jsx("p",{className:"text-foreground-muted",children:"Minor content..."}),e.jsx(t,{type:"xs",children:"Detail Heading (h5)"}),e.jsx("p",{className:"text-foreground-muted",children:"Detail content..."})]})},u={args:{children:"Custom Styled Title",className:"text-primary underline"}};var x,h,g,y,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Default Title'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"Default title with medium size",...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var f,S,v,j,N;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Title type="xl">Extra Large Title (xl)</Title>
      <Title type="l">Large Title (l)</Title>
      <Title type="m">Medium Title (m)</Title>
      <Title type="s">Small Title (s)</Title>
      <Title type="xs">Extra Small Title (xs)</Title>
    </div>
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"All title size types",...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var E,b,H,L,z;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'xl',
    children: 'Extra Large Heading'
  }
}`,...(H=(b=a.parameters)==null?void 0:b.docs)==null?void 0:H.source},description:{story:"Extra large title - h1 by default",...(z=(L=a.parameters)==null?void 0:L.docs)==null?void 0:z.description}}};var M,D,w,A,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'l',
    children: 'Large Heading'
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source},description:{story:"Large title - h2 by default",...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};var R,I,W,_,O;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'm',
    children: 'Medium Heading'
  }
}`,...(W=(I=l.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"Medium title - h3 by default",...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var V,k,q,B,F;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 's',
    children: 'Small Heading'
  }
}`,...(q=(k=n.parameters)==null?void 0:k.docs)==null?void 0:q.source},description:{story:"Small title - h4 by default",...(F=(B=n.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var G,J,K,P,Q;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'xs',
    children: 'Extra Small Heading'
  }
}`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Extra small title - h5 by default",...(Q=(P=o.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var U,X,Y,Z,$;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Title type="s" level="1">
        Small size, but h1 level (for accessibility)
      </Title>
      <Title type="xl" level="4">
        Extra large size, but h4 level
      </Title>
    </div>
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Visual size and semantic level can be set independently.
Here we have a small visual size but h1 semantic importance.`,...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,te,se,re,ae;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="w-64 flex flex-col gap-4">
      <Title ellipsis>
        This is a very long title that will be truncated with an ellipsis
      </Title>
      <Title type="l" ellipsis>
        Another long title demonstrating ellipsis on large text
      </Title>
    </div>
}`,...(se=(te=d.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Titles with ellipsis truncation enabled",...(ae=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var ie,le,ne,oe,ce;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Title as="span" type="m">
        Rendered as span
      </Title>
      <Title as="div" type="m">
        Rendered as div
      </Title>
      <Title as="h1" type="xs">
        Extra small size, but rendered as h1
      </Title>
    </div>
}`,...(ne=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ne.source},description:{story:"Render title as different HTML elements",...(ce=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ce.description}}};var de,pe,me,ue,xe;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <article className="flex flex-col gap-4">
      <Title type="xl">Document Title (h1)</Title>
      <p className="text-foreground-muted">Introduction paragraph...</p>

      <Title type="l">Section 1 (h2)</Title>
      <p className="text-foreground-muted">Section content...</p>

      <Title type="m">Subsection 1.1 (h3)</Title>
      <p className="text-foreground-muted">Subsection content...</p>

      <Title type="s">Minor Heading (h4)</Title>
      <p className="text-foreground-muted">Minor content...</p>

      <Title type="xs">Detail Heading (h5)</Title>
      <p className="text-foreground-muted">Detail content...</p>
    </article>
}`,...(me=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Demonstration of semantic heading hierarchy",...(xe=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:xe.description}}};var he,ge,ye,Te,fe;u.parameters={...u.parameters,docs:{...(he=u.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    children: 'Custom Styled Title',
    className: 'text-primary underline'
  }
}`,...(ye=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:ye.source},description:{story:"Title with custom className for additional styling",...(fe=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:fe.description}}};const Le=["Default","AllTypes","ExtraLarge","Large","Medium","Small","ExtraSmall","IndependentSizeAndLevel","WithEllipsis","AsCustomElement","HeadingHierarchy","WithCustomClassName"];export{r as AllTypes,p as AsCustomElement,s as Default,a as ExtraLarge,o as ExtraSmall,m as HeadingHierarchy,c as IndependentSizeAndLevel,i as Large,l as Medium,n as Small,u as WithCustomClassName,d as WithEllipsis,Le as __namedExportsOrder,He as default};
