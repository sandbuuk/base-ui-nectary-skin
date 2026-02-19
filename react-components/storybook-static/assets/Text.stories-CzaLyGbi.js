import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as s}from"./Text-cs3GWPsb.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const Ue={title:"Components/Text",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["m","s","xs","xxs"],description:"Text size type"},inline:{control:"boolean",description:"Display as inline element"},emphasized:{control:"boolean",description:"Apply emphasized (bolder) styling"},ellipsis:{control:"boolean",description:"Truncate with ellipsis"},as:{control:"select",options:["p","span","div","label"],description:"HTML element to render as"},className:{control:"text",description:"Additional CSS classes"}},parameters:{docs:{description:{component:"Text component for displaying body text with various sizes and styles. Supports four sizes (m, s, xs, xxs), emphasized styling, inline/block display modes, and text truncation."}}}},t="The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate the text component styling.",r={args:{children:t}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx(s,{type:"m",className:"text-foreground-muted",children:"Medium (m) - Default"}),e.jsx(s,{type:"m",children:t})]}),e.jsxs("div",{children:[e.jsx(s,{type:"s",className:"text-foreground-muted",children:"Small (s)"}),e.jsx(s,{type:"s",children:t})]}),e.jsxs("div",{children:[e.jsx(s,{type:"xs",className:"text-foreground-muted",children:"Extra Small (xs)"}),e.jsx(s,{type:"xs",children:t})]}),e.jsxs("div",{children:[e.jsx(s,{type:"xxs",className:"text-foreground-muted",children:"Extra Extra Small (xxs)"}),e.jsx(s,{type:"xxs",children:t})]})]})},n={args:{type:"m",children:t}},i={args:{type:"s",children:t}},d={args:{type:"xs",children:t}},o={args:{type:"xxs",children:t}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx(s,{type:"m",className:"text-foreground-muted",children:"Medium Emphasized"}),e.jsx(s,{type:"m",emphasized:!0,children:t})]}),e.jsxs("div",{children:[e.jsx(s,{type:"s",className:"text-foreground-muted",children:"Small Emphasized"}),e.jsx(s,{type:"s",emphasized:!0,children:t})]})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx(s,{type:"m",children:"Regular medium text"}),e.jsx(s,{type:"m",emphasized:!0,children:"Emphasized medium text"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"s",children:"Regular small text"}),e.jsx(s,{type:"s",emphasized:!0,children:"Emphasized small text"})]})]})},m={render:()=>e.jsxs("div",{children:["This is regular text with"," ",e.jsx(s,{inline:!0,type:"m",children:"inline text component"})," ","in the middle of a sentence."]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"w-64 border border-border p-2",children:e.jsx(s,{ellipsis:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width."})}),e.jsx("div",{className:"w-64 border border-border p-2",children:e.jsx(s,{type:"s",ellipsis:!0,children:"Small text that will also be truncated with ellipsis behavior applied."})})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{className:"text-foreground",children:"Default foreground"}),e.jsx(s,{className:"text-foreground-muted",children:"Muted foreground"}),e.jsx(s,{className:"text-foreground-caption",children:"Caption foreground"}),e.jsx(s,{className:"text-primary",children:"Primary color"}),e.jsx(s,{className:"text-danger",children:"Danger color"}),e.jsx(s,{className:"text-success",children:"Success color"}),e.jsx(s,{className:"text-warning",children:"Warning color"}),e.jsx(s,{className:"text-info",children:"Info color"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx(s,{type:"xs",className:"text-foreground-muted",children:'as="p" (default for block)'}),e.jsx(s,{as:"p",children:"Rendered as a paragraph element"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"xs",className:"text-foreground-muted",children:'as="span"'}),e.jsx(s,{as:"span",children:"Rendered as a span element"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"xs",className:"text-foreground-muted",children:'as="div"'}),e.jsx(s,{as:"div",children:"Rendered as a div element"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"xs",className:"text-foreground-muted",children:'as="label"'}),e.jsx(s,{as:"label",type:"s",children:"Rendered as a label element"})]})]})},h={render:()=>e.jsxs("p",{children:["This paragraph contains"," ",e.jsx(s,{inline:!0,type:"m",emphasized:!0,children:"emphasized medium"}),","," ",e.jsx(s,{inline:!0,type:"s",children:"small"}),", and"," ",e.jsx(s,{inline:!0,type:"xs",children:"extra small"})," ","text components inline."]})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"rounded-md border border-border p-4",children:[e.jsx(s,{type:"m",emphasized:!0,children:"Card Title"}),e.jsx(s,{type:"s",className:"text-foreground-muted",children:"This is a card description using smaller muted text."})]}),e.jsxs("div",{className:"flex items-center gap-4 rounded-md bg-surface-secondary p-4",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-primary"}),e.jsxs("div",{children:[e.jsx(s,{type:"s",emphasized:!0,children:"User Name"}),e.jsx(s,{type:"xs",className:"text-foreground-muted",children:"user@email.com"})]})]}),e.jsx("div",{className:"rounded-md bg-info-subtle p-4",children:e.jsx(s,{type:"s",children:"Information message with default text styling on a colored background."})})]})};var T,y,f,v,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: sampleText
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Default text with medium size.",...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.description}}};var N,b,z,S,w;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <Text type="m" className="text-foreground-muted">
          Medium (m) - Default
        </Text>
        <Text type="m">{sampleText}</Text>
      </div>
      <div>
        <Text type="s" className="text-foreground-muted">
          Small (s)
        </Text>
        <Text type="s">{sampleText}</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          Extra Small (xs)
        </Text>
        <Text type="xs">{sampleText}</Text>
      </div>
      <div>
        <Text type="xxs" className="text-foreground-muted">
          Extra Extra Small (xxs)
        </Text>
        <Text type="xxs">{sampleText}</Text>
      </div>
    </div>
}`,...(z=(b=a.parameters)==null?void 0:b.docs)==null?void 0:z.source},description:{story:"All available text sizes displayed together for comparison.",...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var E,R,C,M,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'm',
    children: sampleText
  }
}`,...(C=(R=n.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Medium size text.",...(I=(M=n.parameters)==null?void 0:M.docs)==null?void 0:I.description}}};var D,k,A,L,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 's',
    children: sampleText
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"Small size text.",...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var W,H,U,V,_;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'xs',
    children: sampleText
  }
}`,...(U=(H=d.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"Extra small size text.",...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var q,O,B,F,G;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'xxs',
    children: sampleText
  }
}`,...(B=(O=o.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:"Extra extra small size text.",...(G=(F=o.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var J,K,Q,X,Y;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <Text type="m" className="text-foreground-muted">
          Medium Emphasized
        </Text>
        <Text type="m" emphasized>
          {sampleText}
        </Text>
      </div>
      <div>
        <Text type="s" className="text-foreground-muted">
          Small Emphasized
        </Text>
        <Text type="s" emphasized>
          {sampleText}
        </Text>
      </div>
    </div>
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Emphasized text with bolder weight. Available for 'm' and 's' sizes.",...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,se,te;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <Text type="m">Regular medium text</Text>
        <Text type="m" emphasized>
          Emphasized medium text
        </Text>
      </div>
      <div>
        <Text type="s">Regular small text</Text>
        <Text type="s" emphasized>
          Emphasized small text
        </Text>
      </div>
    </div>
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Comparison of regular vs emphasized text.",...(te=(se=c.parameters)==null?void 0:se.docs)==null?void 0:te.description}}};var re,ae,ne,ie,de;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div>
      This is regular text with{' '}
      <Text inline type="m">
        inline text component
      </Text>{' '}
      in the middle of a sentence.
    </div>
}`,...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Inline text that flows with surrounding content.",...(de=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var oe,le,ce,me,xe;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="w-64 border border-border p-2">
        <Text ellipsis>
          This is a very long text that will be truncated with an ellipsis when
          it exceeds the container width.
        </Text>
      </div>
      <div className="w-64 border border-border p-2">
        <Text type="s" ellipsis>
          Small text that will also be truncated with ellipsis behavior applied.
        </Text>
      </div>
    </div>
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Text truncated with ellipsis when it overflows its container.",...(xe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:xe.description}}};var pe,ue,he,ge,Te;p.parameters={...p.parameters,docs:{...(pe=p.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Text className="text-foreground">Default foreground</Text>
      <Text className="text-foreground-muted">Muted foreground</Text>
      <Text className="text-foreground-caption">Caption foreground</Text>
      <Text className="text-primary">Primary color</Text>
      <Text className="text-danger">Danger color</Text>
      <Text className="text-success">Success color</Text>
      <Text className="text-warning">Warning color</Text>
      <Text className="text-info">Info color</Text>
    </div>
}`,...(he=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:he.source},description:{story:"Text with custom color using Tailwind classes.",...(Te=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:Te.description}}};var ye,fe,ve,je,Ne;u.parameters={...u.parameters,docs:{...(ye=u.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="p" (default for block)
        </Text>
        <Text as="p">Rendered as a paragraph element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="span"
        </Text>
        <Text as="span">Rendered as a span element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="div"
        </Text>
        <Text as="div">Rendered as a div element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="label"
        </Text>
        <Text as="label" type="s">
          Rendered as a label element
        </Text>
      </div>
    </div>
}`,...(ve=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:"Text rendered as different HTML elements using the `as` prop.",...(Ne=(je=u.parameters)==null?void 0:je.docs)==null?void 0:Ne.description}}};var be,ze,Se,we,Ee;h.parameters={...h.parameters,docs:{...(be=h.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <p>
      This paragraph contains{' '}
      <Text inline type="m" emphasized>
        emphasized medium
      </Text>
      ,{' '}
      <Text inline type="s">
        small
      </Text>
      , and{' '}
      <Text inline type="xs">
        extra small
      </Text>{' '}
      text components inline.
    </p>
}`,...(Se=(ze=h.parameters)==null?void 0:ze.docs)==null?void 0:Se.source},description:{story:"Inline text with various sizes mixed in a paragraph.",...(Ee=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Ee.description}}};var Re,Ce,Me,Ie,De;g.parameters={...g.parameters,docs:{...(Re=g.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="rounded-md border border-border p-4">
        <Text type="m" emphasized>
          Card Title
        </Text>
        <Text type="s" className="text-foreground-muted">
          This is a card description using smaller muted text.
        </Text>
      </div>

      <div className="flex items-center gap-4 rounded-md bg-surface-secondary p-4">
        <div className="h-10 w-10 rounded-full bg-primary" />
        <div>
          <Text type="s" emphasized>
            User Name
          </Text>
          <Text type="xs" className="text-foreground-muted">
            user@email.com
          </Text>
        </div>
      </div>

      <div className="rounded-md bg-info-subtle p-4">
        <Text type="s">
          Information message with default text styling on a colored background.
        </Text>
      </div>
    </div>
}`,...(Me=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source},description:{story:"Text inside various layout contexts.",...(De=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:De.description}}};const Ve=["Default","AllSizes","Medium","Small","ExtraSmall","ExtraExtraSmall","Emphasized","RegularVsEmphasized","Inline","WithEllipsis","CustomColors","PolymorphicRendering","MixedInlineSizes","InLayoutContexts"];export{a as AllSizes,p as CustomColors,r as Default,l as Emphasized,o as ExtraExtraSmall,d as ExtraSmall,g as InLayoutContexts,m as Inline,n as Medium,h as MixedInlineSizes,u as PolymorphicRendering,c as RegularVsEmphasized,i as Small,x as WithEllipsis,Ve as __namedExportsOrder,Ue as default};
