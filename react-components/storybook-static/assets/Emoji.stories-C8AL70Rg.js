import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{E as s}from"./Emoji-CqNAQv9t.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const k="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/%s.png",Q={title:"Components/Emoji",component:s,tags:["autodocs"],args:{baseUrl:k},argTypes:{char:{control:"text",description:"Emoji character to display"},baseUrl:{control:"text",description:"Base URL for emoji images. Use %s as placeholder for the codepoint"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Predefined emoji size"},customSize:{control:"number",description:"Custom size in pixels (overrides size variant)"},verticalAlign:{control:"select",options:["initial","baseline","middle","top","bottom","text-top","text-bottom"],description:"Vertical alignment of the emoji"}}},a={args:{char:"😀"}},o={render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...r,char:"😀"}),e.jsx(s,{...r,char:"🎉"}),e.jsx(s,{...r,char:"❤️"}),e.jsx(s,{...r,char:"👍"}),e.jsx(s,{...r,char:"🚀"}),e.jsx(s,{...r,char:"🌟"})]})},i={render:r=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{...r,char:"😀",size:"xs"}),e.jsx(s,{...r,char:"😀",size:"sm"}),e.jsx(s,{...r,char:"😀",size:"md"}),e.jsx(s,{...r,char:"😀",size:"lg"}),e.jsx(s,{...r,char:"😀",size:"xl"})]})},t={args:{char:"🎉",customSize:64}},c={render:r=>e.jsxs("p",{className:"text-base",children:["Hello ",e.jsx(s,{...r,char:"👋",size:"sm",verticalAlign:"middle"})," World! How are you"," ",e.jsx(s,{...r,char:"😊",size:"sm",verticalAlign:"middle"})," today?"]})},n={render:r=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["Baseline: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"baseline"})," World"]}),e.jsxs("p",{children:["Middle: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"middle"})," World"]}),e.jsxs("p",{children:["Top: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"top"})," World"]}),e.jsxs("p",{children:["Bottom: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"bottom"})," World"]}),e.jsxs("p",{children:["Text-Top: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"text-top"})," World"]}),e.jsxs("p",{children:["Text-Bottom: Hello ",e.jsx(s,{...r,char:"👋",size:"md",verticalAlign:"text-bottom"})," World"]})]})},l={name:"Complex Emojis (ZWJ Sequences)",render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...r,char:"👨‍👩‍👧‍👦",title:"Family"}),e.jsx(s,{...r,char:"👩‍💻",title:"Woman Technologist"}),e.jsx(s,{...r,char:"🏳️‍🌈",title:"Rainbow Flag"}),e.jsx(s,{...r,char:"👨‍🍳",title:"Man Cook"})]})},m={render:r=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{...r,char:"🇺🇸",title:"USA"}),e.jsx(s,{...r,char:"🇬🇧",title:"UK"}),e.jsx(s,{...r,char:"🇫🇷",title:"France"}),e.jsx(s,{...r,char:"🇯🇵",title:"Japan"}),e.jsx(s,{...r,char:"🇩🇪",title:"Germany"})]})},d={args:{char:"😀",baseUrl:void 0},name:"Without Base URL (renders nothing)"},p={args:{char:""},name:"Empty Char (renders nothing)"};var h,j,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    char: '😀'
  }
}`,...(x=(j=a.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var g,u,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Emoji {...args} char="😀" />
      <Emoji {...args} char="🎉" />
      <Emoji {...args} char="❤️" />
      <Emoji {...args} char="👍" />
      <Emoji {...args} char="🚀" />
      <Emoji {...args} char="🌟" />
    </div>
}`,...(E=(u=o.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var z,v,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-4">
      <Emoji {...args} char="😀" size="xs" />
      <Emoji {...args} char="😀" size="sm" />
      <Emoji {...args} char="😀" size="md" />
      <Emoji {...args} char="😀" size="lg" />
      <Emoji {...args} char="😀" size="xl" />
    </div>
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var f,A,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    char: '🎉',
    customSize: 64
  }
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var b,y,H;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <p className="text-base">
      Hello <Emoji {...args} char="👋" size="sm" verticalAlign="middle" /> World! How are you{' '}
      <Emoji {...args} char="😊" size="sm" verticalAlign="middle" /> today?
    </p>
}`,...(H=(y=c.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var U,C,T;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div className="space-y-2">
      <p>
        Baseline: Hello <Emoji {...args} char="👋" size="md" verticalAlign="baseline" /> World
      </p>
      <p>
        Middle: Hello <Emoji {...args} char="👋" size="md" verticalAlign="middle" /> World
      </p>
      <p>
        Top: Hello <Emoji {...args} char="👋" size="md" verticalAlign="top" /> World
      </p>
      <p>
        Bottom: Hello <Emoji {...args} char="👋" size="md" verticalAlign="bottom" /> World
      </p>
      <p>
        Text-Top: Hello <Emoji {...args} char="👋" size="md" verticalAlign="text-top" /> World
      </p>
      <p>
        Text-Bottom: Hello <Emoji {...args} char="👋" size="md" verticalAlign="text-bottom" /> World
      </p>
    </div>
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var B,N,F;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Complex Emojis (ZWJ Sequences)',
  render: args => <div className="flex gap-4">
      <Emoji {...args} char="👨‍👩‍👧‍👦" title="Family" />
      <Emoji {...args} char="👩‍💻" title="Woman Technologist" />
      <Emoji {...args} char="🏳️‍🌈" title="Rainbow Flag" />
      <Emoji {...args} char="👨‍🍳" title="Man Cook" />
    </div>
}`,...(F=(N=l.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var R,w,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <Emoji {...args} char="🇺🇸" title="USA" />
      <Emoji {...args} char="🇬🇧" title="UK" />
      <Emoji {...args} char="🇫🇷" title="France" />
      <Emoji {...args} char="🇯🇵" title="Japan" />
      <Emoji {...args} char="🇩🇪" title="Germany" />
    </div>
}`,...(J=(w=m.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};var M,D,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    char: '😀',
    baseUrl: undefined
  },
  name: 'Without Base URL (renders nothing)'
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var _,I,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    char: ''
  },
  name: 'Empty Char (renders nothing)'
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const X=["Default","WithDifferentEmojis","Sizes","CustomSize","InlineWithText","VerticalAlignments","ComplexEmojis","FlagEmojis","WithoutBaseUrl","EmptyChar"];export{l as ComplexEmojis,t as CustomSize,a as Default,p as EmptyChar,m as FlagEmojis,c as InlineWithText,i as Sizes,n as VerticalAlignments,o as WithDifferentEmojis,d as WithoutBaseUrl,X as __namedExportsOrder,Q as default};
