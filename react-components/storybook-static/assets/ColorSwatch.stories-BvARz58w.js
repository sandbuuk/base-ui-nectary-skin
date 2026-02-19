import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as ie,C as s,a as de}from"./ColorSwatch-CurNVpas.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const he={title:"Components/ColorSwatch",component:s,tags:["autodocs"],argTypes:{name:{control:"select",options:[void 0,...ie,"#ff0000","#00ff00","rgb(0, 0, 255)"],description:"The color name - can be a predefined swatch color or a CSS color value"},"aria-label":{control:"text",description:"Accessible label for the color swatch"}}},a={args:{}},o={args:{name:"blue"}},t={args:{name:"#ff6b6b"}},c={args:{name:"rgb(100, 149, 237)"}},n={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:ie.filter(r=>!r.startsWith("skintone")).map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r})]},r))})},l={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:de.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:r}),e.jsx("span",{className:"text-xs text-foreground-muted",children:r.replace("skintone-","")})]},r))})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-foreground",children:"Color:"}),e.jsx(s,{name:"red"}),e.jsx(s,{name:"green"}),e.jsx(s,{name:"blue"}),e.jsx(s,{name:"yellow"}),e.jsx(s,{name:"violet"})]})},d={args:{name:void 0}},m={args:{name:"red","aria-label":"Selected color: Red"}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:"#e74c3c"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"#e74c3c"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:"#3498db"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"#3498db"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:"#2ecc71"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"#2ecc71"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:"hsl(45, 100%, 51%)"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"hsl gold"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{name:"rgba(155, 89, 182, 0.8)"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"rgba purple"})]})]})};var x,f,u,g,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source},description:{story:"Default state shows a gradient when no color is specified.",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var S,C,N,v,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'blue'
  }
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source},description:{story:"With a predefined swatch color.",...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var j,b,W,y,O;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: '#ff6b6b'
  }
}`,...(W=(b=t.parameters)==null?void 0:b.docs)==null?void 0:W.source},description:{story:"With a custom hex color.",...(O=(y=t.parameters)==null?void 0:y.docs)==null?void 0:O.description}}};var R,k,A,T,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'rgb(100, 149, 237)'
  }
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"With a custom RGB color.",...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var H,L,E,I,D;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {SWATCH_COLORS.filter(c => !c.startsWith('skintone')).map(color => <div key={color} className="flex flex-col items-center gap-1">
          <ColorSwatch name={color} />
          <span className="text-xs text-foreground-muted">{color}</span>
        </div>)}
    </div>
}`,...(E=(L=n.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:"All predefined swatch colors.",...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.description}}};var K,U,B,G,q;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      {SKINTONE_SWATCH_COLORS.map(color => <div key={color} className="flex flex-col items-center gap-1">
          <ColorSwatch name={color} />
          <span className="text-xs text-foreground-muted">{color.replace('skintone-', '')}</span>
        </div>)}
    </div>
}`,...(B=(U=l.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:"Skin tone colors for emoji and avatar components.",...(q=(G=l.parameters)==null?void 0:G.docs)==null?void 0:q.description}}};var z,F,J,M,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <span className="text-foreground">Color:</span>
      <ColorSwatch name="red" />
      <ColorSwatch name="green" />
      <ColorSwatch name="blue" />
      <ColorSwatch name="yellow" />
      <ColorSwatch name="violet" />
    </div>
}`,...(J=(F=i.parameters)==null?void 0:F.docs)==null?void 0:J.source},description:{story:"Row of various colors showing the component inline.",...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.description}}};var Q,V,X,Y,Z;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    name: undefined
  }
}`,...(X=(V=d.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"No color shows a gradient background.",...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,se,re,ae;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'red',
    'aria-label': 'Selected color: Red'
  }
}`,...(se=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:se.source},description:{story:"With custom aria-label for accessibility.",...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,te,ce,ne,le;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#e74c3c" />
        <span className="text-xs text-foreground-muted">#e74c3c</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#3498db" />
        <span className="text-xs text-foreground-muted">#3498db</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#2ecc71" />
        <span className="text-xs text-foreground-muted">#2ecc71</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="hsl(45, 100%, 51%)" />
        <span className="text-xs text-foreground-muted">hsl gold</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="rgba(155, 89, 182, 0.8)" />
        <span className="text-xs text-foreground-muted">rgba purple</span>
      </div>
    </div>
}`,...(ce=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ce.source},description:{story:"Custom CSS color values.",...(le=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:le.description}}};const Se=["Default","WithSwatchColor","WithHexColor","WithRgbColor","AllSwatchColors","SkinToneColors","InlineUsage","NoColor","WithAriaLabel","CustomColors"];export{n as AllSwatchColors,p as CustomColors,a as Default,i as InlineUsage,d as NoColor,l as SkinToneColors,m as WithAriaLabel,t as WithHexColor,c as WithRgbColor,o as WithSwatchColor,Se as __namedExportsOrder,he as default};
