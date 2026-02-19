import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as R}from"./index-pP6CS22B.js";import{c as _}from"./index-EXTQMK5R.js";import{c as k}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P=_(["inline","font-mono","px-[0.25em]","border","rounded-[var(--sinch-comp-code-tag-shape-radius)]","text-[var(--sinch-comp-code-tag-color-default-text-initial)]","border-[var(--sinch-comp-code-tag-color-default-border-initial)]","bg-[var(--sinch-comp-code-tag-color-default-background-initial)]"],{variants:{},defaultVariants:{}}),t=R.forwardRef(({className:S,text:W,children:E,...I},L)=>e.jsx("code",{ref:L,className:k(P(),S),...I,children:W??E}));t.displayName="CodeTag";t.__docgenInfo={description:'CodeTag displays inline code with monospace font styling.\n\n@example\n```tsx\n<CodeTag text="const x = 1" />\n<CodeTag>npm install</CodeTag>\n```',methods:[],displayName:"CodeTag",props:{text:{required:!1,tsType:{name:"string"},description:"Text content to display as code"}},composes:["VariantProps"]};const O={title:"Components/CodeTag",component:t,tags:["autodocs"],argTypes:{text:{control:"text",description:"Text content to display as code"},children:{control:"text",description:"Children content (alternative to text prop)"}}},a={args:{text:"npm install"}},s={args:{children:"const x = 1"}},r={render:()=>e.jsxs("p",{children:["Run ",e.jsx(t,{text:"npm install"})," to install dependencies, then"," ",e.jsx(t,{text:"npm run dev"})," to start the development server."]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["Use the ",e.jsx(t,{text:"useState"})," hook for state management."]}),e.jsxs("p",{children:["Install via ",e.jsx(t,{text:"pnpm add @nectary/react"}),"."]}),e.jsxs("p",{children:["The variable ",e.jsx(t,{children:"myVariable"})," is undefined."]}),e.jsxs("p",{children:["Press ",e.jsx(t,{text:"Ctrl+C"})," to copy."]})]})},n={args:{text:"const veryLongVariableName = someFunction(arg1, arg2, arg3)"}},c={args:{text:"custom styled",className:"text-lg"}};var d,i,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'npm install'
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'const x = 1'
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <p>
      Run <CodeTag text="npm install" /> to install dependencies, then{' '}
      <CodeTag text="npm run dev" /> to start the development server.
    </p>
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var C,f,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <p>
        Use the <CodeTag text="useState" /> hook for state management.
      </p>
      <p>
        Install via <CodeTag text="pnpm add @nectary/react" />.
      </p>
      <p>
        The variable <CodeTag>myVariable</CodeTag> is undefined.
      </p>
      <p>
        Press <CodeTag text="Ctrl+C" /> to copy.
      </p>
    </div>
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,y,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'const veryLongVariableName = someFunction(arg1, arg2, arg3)'
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,N,V;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'custom styled',
    className: 'text-lg'
  }
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const z=["Default","WithChildren","InlineWithText","VariousCodeExamples","LongCode","WithCustomClassName"];export{a as Default,r as InlineWithText,n as LongCode,o as VariousCodeExamples,s as WithChildren,c as WithCustomClassName,z as __namedExportsOrder,O as default};
