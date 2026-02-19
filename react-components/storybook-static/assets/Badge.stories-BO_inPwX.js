import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as v}from"./index-EXTQMK5R.js";import{r as te}from"./index-pP6CS22B.js";import{c as n}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const se=v(["absolute","pointer-events-none","rounded-[var(--sinch-comp-badge-shape-radius)]","p-px","bg-[var(--sinch-comp-badge-color-border)]"],{variants:{size:{l:"left-[calc(100%-10px)] -top-2.5",m:"left-[calc(100%-8px)] -top-2",s:"left-[calc(100%-4px)] -top-1"},mode:{square:"",circle:""}},compoundVariants:[{mode:"circle",size:"l",className:"left-[calc(85%-10px)] top-[calc(15%-10px)]"},{mode:"circle",size:"m",className:"left-[calc(85%-7px)] top-[calc(15%-7px)]"},{mode:"circle",size:"s",className:"left-[calc(85%-4px)] top-[calc(15%-4px)]"}],defaultVariants:{size:"m",mode:"square"}}),re=v(["box-border","rounded-[var(--sinch-comp-badge-shape-radius)]","bg-[var(--sinch-comp-badge-color-background)]","text-[var(--sinch-comp-badge-color-text)]","flex","items-center","justify-center"],{variants:{size:{l:"w-5 h-5",m:"w-3.5 h-3.5",s:"w-2 h-2"},long:{true:"w-fit",false:""}},compoundVariants:[{size:"l",long:!0,className:"px-[5px]"},{size:"m",long:!0,className:"px-[3px]"},{size:"s",long:!0,className:"px-0"}],defaultVariants:{size:"m",long:!1}}),ae=v(["block","w-full","h-full","text-center"],{variants:{size:{l:"font-[var(--sinch-comp-badge-font-size-l)] leading-5",m:"font-[var(--sinch-comp-badge-font-size-m)] leading-[14px]",s:"hidden"}},defaultVariants:{size:"m"}}),t=te.forwardRef(({className:r,children:U,text:h,size:f="m",mode:X="square",hidden:Y=!1,...Z},$)=>{const ee=h!==void 0&&h.length>1;return e.jsxs("div",{ref:$,className:n("relative inline-flex flex-col",r),...Z,children:[U,!Y&&e.jsx("div",{className:n(se({size:f,mode:X})),children:e.jsx("div",{className:n(re({size:f,long:ee})),children:e.jsx("span",{className:n(ae({size:f})),children:h})})})]})});t.displayName="Badge";t.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:"Text to display in the badge (e.g., notification count)"},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm' | 's'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:"Size of the badge indicator",defaultValue:{value:"'m'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Mode affects positioning - 'square' for rectangular content, 'circle' for circular content like avatars",defaultValue:{value:"'square'",computed:!1}},hidden:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the badge indicator",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const le={title:"Components/Badge",component:t,tags:["autodocs"],argTypes:{text:{control:"text",description:"Text to display in the badge (e.g., notification count)"},size:{control:"select",options:["l","m","s"],description:"Size of the badge indicator"},mode:{control:"select",options:["square","circle"],description:"Mode affects positioning for rectangular or circular content"},hidden:{control:"boolean",description:"Whether to hide the badge indicator"}}},s=({size:r=48})=>e.jsx("div",{className:"rounded-md bg-surface-secondary flex items-center justify-center text-foreground-muted",style:{width:r,height:r},children:"Box"}),a=({size:r=48})=>e.jsx("div",{className:"rounded-full bg-surface-secondary flex items-center justify-center text-foreground-muted",style:{width:r,height:r},children:"Img"}),c={args:{text:"3",size:"m",mode:"square",children:e.jsx(s,{})}},d={args:{text:"99+",children:e.jsx(s,{})}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"l",children:e.jsx(s,{size:56})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"m",children:e.jsx(s,{})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"s",children:e.jsx(s,{size:40})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Small (dot only)"})]})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"3",mode:"square",children:e.jsx(s,{})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Square mode"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"3",mode:"circle",children:e.jsx(a,{})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Circle mode"})]})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"l",mode:"circle",children:e.jsx(a,{size:56})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"m",mode:"circle",children:e.jsx(a,{})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"5",size:"s",mode:"circle",children:e.jsx(a,{size:40})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Small"})]})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"99+",size:"l",children:e.jsx(s,{size:56})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(t,{text:"99+",size:"m",children:e.jsx(s,{})}),e.jsx("p",{className:"mt-4 text-sm text-foreground-muted",children:"Medium"})]})]})},x={args:{text:"5",hidden:!0,children:e.jsx(s,{})}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(t,{size:"s",mode:"square",children:e.jsx(s,{})}),e.jsx(t,{size:"s",mode:"circle",children:e.jsx(a,{})})]})},p={render:()=>e.jsx(t,{text:"3",mode:"circle",children:e.jsx("div",{className:"w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold",children:"JD"})})},g={render:()=>e.jsx(t,{text:"5",size:"m",children:e.jsx("div",{className:"w-10 h-10 rounded-md bg-surface-secondary flex items-center justify-center",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"text-foreground",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})})})};var j,N,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: '3',
    size: 'm',
    mode: 'square',
    children: <SquareContent />
  }
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var B,b,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: '99+',
    children: <SquareContent />
  }
}`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var q,C,y;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="5" size="l">
          <SquareContent size={56} />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="m">
          <SquareContent />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="s">
          <SquareContent size={40} />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Small (dot only)</p>
      </div>
    </div>
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,M,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="3" mode="square">
          <SquareContent />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Square mode</p>
      </div>
      <div className="text-center">
        <Badge text="3" mode="circle">
          <CircleContent />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Circle mode</p>
      </div>
    </div>
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var V,W,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="5" size="l" mode="circle">
          <CircleContent size={56} />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="m" mode="circle">
          <CircleContent />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
      <div className="text-center">
        <Badge text="5" size="s" mode="circle">
          <CircleContent size={40} />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Small</p>
      </div>
    </div>
}`,...(L=(W=l.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var I,k,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="text-center">
        <Badge text="99+" size="l">
          <SquareContent size={56} />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Large</p>
      </div>
      <div className="text-center">
        <Badge text="99+" size="m">
          <SquareContent />
        </Badge>
        <p className="mt-4 text-sm text-foreground-muted">Medium</p>
      </div>
    </div>
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,_,E;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: '5',
    hidden: true,
    children: <SquareContent />
  }
}`,...(E=(_=x.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,J,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <Badge size="s" mode="square">
        <SquareContent />
      </Badge>
      <Badge size="s" mode="circle">
        <CircleContent />
      </Badge>
    </div>
}`,...(O=(J=u.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var R,F,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Badge text="3" mode="circle">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
        JD
      </div>
    </Badge>
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,P,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Badge text="5" size="m">
      <div className="w-10 h-10 rounded-md bg-surface-secondary flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </div>
    </Badge>
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const me=["Default","WithText","Sizes","Modes","CircleModeAllSizes","LongText","Hidden","DotIndicator","WithAvatar","WithIcon"];export{l as CircleModeAllSizes,c as Default,u as DotIndicator,x as Hidden,m as LongText,o as Modes,i as Sizes,p as WithAvatar,g as WithIcon,d as WithText,me as __namedExportsOrder,le as default};
