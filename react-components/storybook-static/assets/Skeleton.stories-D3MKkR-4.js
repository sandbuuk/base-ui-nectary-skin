import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as q}from"./index-EXTQMK5R.js";import{r as E}from"./index-pP6CS22B.js";import{c as U}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O=q("relative block overflow-hidden",{variants:{card:{true:["p-4","bg-surface-primary","rounded-lg","border","border-border-subtle"],false:""}},defaultVariants:{card:!1}}),n=E.forwardRef(({className:t,card:p=!1,children:a,...r},u)=>e.jsx("div",{ref:u,className:U(O({card:p}),t),role:"status","aria-label":"Loading",...r,children:e.jsx("div",{className:"flex flex-col gap-4",children:a})}));n.displayName="Skeleton";n.__docgenInfo={description:`Skeleton container component that displays a shimmer animation over its children.
Use with SkeletonItem components to create loading placeholders.

@example
\`\`\`tsx
<Skeleton>
  <SkeletonItem />
  <SkeletonItem size="sm" />
</Skeleton>
\`\`\``,methods:[],displayName:"Skeleton",props:{card:{required:!1,tsType:{name:"boolean"},description:"Display as a card-like container with border and padding",defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const $=q(["relative","block","overflow-hidden","bg-border-subtle","before:absolute","before:inset-0","before:translate-x-[-100%]","before:animate-[shimmer_2s_infinite]","before:bg-gradient-to-r","before:from-transparent","before:via-surface-tertiary","before:to-transparent"],{variants:{size:{xs:"h-xs rounded-xs",sm:"h-sm rounded-sm",md:"h-md rounded-md",lg:"h-lg rounded-lg"}},defaultVariants:{size:"md"}}),s=E.forwardRef(({className:t,size:p="md",width:a,style:r,...u},W)=>{const L=a!==void 0?{...r,width:typeof a=="number"?`${a}px`:a}:r;return e.jsx("div",{ref:W,className:U($({size:p}),t),style:L,"aria-hidden":"true",...u})});s.displayName="SkeletonItem";s.__docgenInfo={description:`Individual skeleton placeholder item with shimmer animation.
Use inside a Skeleton container for loading states.

@example
\`\`\`tsx
<Skeleton>
  <SkeletonItem />
  <SkeletonItem size="sm" width="50%" />
  <SkeletonItem size="lg" />
</Skeleton>
\`\`\``,methods:[],displayName:"SkeletonItem",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the skeleton item",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Custom width (CSS value)"}},composes:["VariantProps"]};const K={title:"Components/Skeleton",component:n,tags:["autodocs"],argTypes:{card:{control:"boolean",description:"Display as a card-like container with border and padding"}}},l={render:t=>e.jsxs(n,{...t,children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{width:"75%"})]})},o={args:{card:!0},render:t=>e.jsxs(n,{...t,children:[e.jsx(s,{size:"lg"}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{width:"50%"})]})},i={render:()=>e.jsxs(n,{children:[e.jsx(s,{size:"xs"}),e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})},d={render:()=>e.jsxs(n,{children:[e.jsx(s,{width:"100%"}),e.jsx(s,{width:"75%"}),e.jsx(s,{width:"50%"}),e.jsx(s,{width:"25%"}),e.jsx(s,{width:200})]})},m={render:()=>e.jsxs(n,{card:!0,children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{size:"lg",className:"w-12 rounded-full"}),e.jsxs("div",{className:"flex flex-col gap-2 flex-1",children:[e.jsx(s,{size:"sm",width:"60%"}),e.jsx(s,{size:"xs",width:"40%"})]})]}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{width:"80%"})]})},c={render:()=>e.jsx("div",{className:"flex flex-col gap-2",children:[1,2,3,4,5].map(t=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{size:"sm",className:"w-8"}),e.jsx(s,{size:"sm",className:"flex-1"}),e.jsx(s,{size:"sm",className:"w-24"}),e.jsx(s,{size:"sm",className:"w-16"})]},t))})},x={render:()=>e.jsx("div",{className:"max-w-2xl",children:e.jsxs(n,{children:[e.jsx(s,{size:"lg",width:"80%"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{size:"xs",width:100}),e.jsx(s,{size:"xs",width:80})]}),e.jsx("div",{className:"h-48 w-full",children:e.jsx(s,{className:"h-full"})}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{width:"90%"}),e.jsx(s,{}),e.jsx(s,{width:"75%"})]})})};var S,k,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Skeleton {...args}>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem width="75%" />
    </Skeleton>
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var f,w,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    card: true
  },
  render: args => <Skeleton {...args}>
      <SkeletonItem size="lg" />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem width="50%" />
    </Skeleton>
}`,...(g=(w=o.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var j,I,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Skeleton>
      <SkeletonItem size="xs" />
      <SkeletonItem size="sm" />
      <SkeletonItem size="md" />
      <SkeletonItem size="lg" />
    </Skeleton>
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var z,N,b;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Skeleton>
      <SkeletonItem width="100%" />
      <SkeletonItem width="75%" />
      <SkeletonItem width="50%" />
      <SkeletonItem width="25%" />
      <SkeletonItem width={200} />
    </Skeleton>
}`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var y,C,V;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Skeleton card>
      <div className="flex gap-4 items-center">
        <SkeletonItem size="lg" className="w-12 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <SkeletonItem size="sm" width="60%" />
          <SkeletonItem size="xs" width="40%" />
        </div>
      </div>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem width="80%" />
    </Skeleton>
}`,...(V=(C=m.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var _,P,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex gap-4">
          <SkeletonItem size="sm" className="w-8" />
          <SkeletonItem size="sm" className="flex-1" />
          <SkeletonItem size="sm" className="w-24" />
          <SkeletonItem size="sm" className="w-16" />
        </div>)}
    </div>
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var R,A,D;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl">
      <Skeleton>
        <SkeletonItem size="lg" width="80%" />
        <div className="flex gap-2">
          <SkeletonItem size="xs" width={100} />
          <SkeletonItem size="xs" width={80} />
        </div>
        <div className="h-48 w-full">
          <SkeletonItem className="h-full" />
        </div>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem width="90%" />
        <SkeletonItem />
        <SkeletonItem width="75%" />
      </Skeleton>
    </div>
}`,...(D=(A=x.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const M=["Default","Card","AllSizes","CustomWidths","ProfileCard","TableRows","ArticlePlaceholder"];export{i as AllSizes,x as ArticlePlaceholder,o as Card,d as CustomWidths,l as Default,m as ProfileCard,c as TableRows,M as __namedExportsOrder,K as default};
