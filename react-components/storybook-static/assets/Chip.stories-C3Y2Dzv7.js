import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as w}from"./index-CsAwyYjM.js";import{c as ve}from"./index-EXTQMK5R.js";import{r as y}from"./index-pP6CS22B.js";import{c as fe}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ke=ve(["inline-flex items-center","gap-1","select-none","box-border","cursor-pointer","outline-none","bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]","text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]","rounded-[var(--sinch-comp-chip-shape-radius)]","focus-visible:ring-2","focus-visible:ring-[var(--sinch-comp-chip-color-outiline-focus)]","focus-visible:ring-offset-2"],{variants:{size:{m:["h-[var(--sinch-comp-chip-size-container-m)]","pl-[9px] pr-[5px]","[font:var(--sinch-comp-chip-font-size-m-label)]"],s:["h-[var(--sinch-comp-chip-size-container-s)]","pl-[7px] pr-[3px]","[font:var(--sinch-comp-chip-font-size-s-label)]"]}},defaultVariants:{size:"m"}}),Ce=({size:t})=>e.jsx("svg",{width:t==="s"?12:16,height:t==="s"?12:16,viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.354-9.354a.5.5 0 0 1 0 .708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293l1.646-1.647a.5.5 0 0 1 .708 0Z"})}),r=y.forwardRef(({className:t,text:l,color:a,small:ne=!1,size:ie,icon:j,rightIcon:se,onClick:ce,onFocus:de,onBlur:pe,onKeyDown:n,style:ue,...ge},he)=>{const C=ne?"s":ie??"m",o={};a!==void 0&&a!=="neutral"&&(o.backgroundColor=`var(--sinch-comp-chip-color-${a}-default-background-initial)`,o.color=`var(--sinch-comp-chip-color-${a}-default-foreground-initial)`,o["--sinch-global-color-icon"]=`var(--sinch-comp-chip-color-${a}-default-foreground-initial)`);const me=C==="s"?"var(--sinch-comp-chip-size-icon-s)":"var(--sinch-comp-chip-size-icon-m)";o["--sinch-global-size-icon"]=me;const xe=y.useCallback(i=>{i.code==="Space"&&(i.preventDefault(),i.currentTarget.click()),n==null||n(i)},[n]);return e.jsxs("div",{ref:he,role:"button",tabIndex:0,"aria-label":l,className:fe(ke({size:C}),t),style:{...o,...ue},onClick:ce,onFocus:de,onBlur:pe,onKeyDown:xe,...ge,children:[j&&e.jsx("span",{className:"-ml-1",children:j}),e.jsx("span",{className:"flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:l}),e.jsx("span",{"aria-label":`Delete ${l}`,children:se??e.jsx(Ce,{size:C})})]})});r.displayName="Chip";r.__docgenInfo={description:`Chip component for displaying removable tags or labels.

Supports multiple color variants, two sizes (s, m), optional icon,
and click interactions for removal.

@example
\`\`\`tsx
// Default chip
<Chip text="Label" onClick={handleRemove} />

// Colored chip
<Chip text="Success" color="success" onClick={handleRemove} />

// Small chip with icon
<Chip text="Status" small icon={<Icon name="check" />} onClick={handleRemove} />
\`\`\``,methods:[],displayName:"Chip",props:{text:{required:!0,tsType:{name:"string"},description:"Text content for the chip"},color:{required:!1,tsType:{name:"union",raw:`| 'neutral'
| 'gray'
| 'light-gray'
| 'dark-gray'
| 'blue'
| 'light-blue'
| 'dark-blue'
| 'green'
| 'light-green'
| 'dark-green'
| 'yellow'
| 'light-yellow'
| 'dark-yellow'
| 'orange'
| 'light-orange'
| 'dark-orange'
| 'red'
| 'light-red'
| 'dark-red'
| 'pink'
| 'light-pink'
| 'dark-pink'
| 'violet'
| 'light-violet'
| 'dark-violet'
| 'danger'
| 'warning'
| 'success'
| 'info'`,elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'red'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:`Color variant for the chip
@default 'neutral'`},small:{required:!1,tsType:{name:"boolean"},description:`Use small size variant
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:`Chip size ('s' or 'm')
@default 'm'`},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the text"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom right icon (replaces the default close icon)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called when the chip is clicked"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called when the chip receives focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called when the chip loses focus"}},composes:["Omit","VariantProps"]};const De={title:"Components/Chip",component:r,tags:["autodocs"],args:{onClick:w(),onFocus:w(),onBlur:w()},argTypes:{color:{control:"select",options:["neutral","gray","light-gray","dark-gray","blue","light-blue","dark-blue","green","light-green","dark-green","yellow","light-yellow","dark-yellow","orange","light-orange","dark-orange","red","light-red","dark-red","pink","light-pink","dark-pink","violet","light-violet","dark-violet","danger","warning","success","info"]},size:{control:"select",options:["s","m"]},small:{control:"boolean"}}},s={args:{text:"Label"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"m",text:"Medium (default)"}),e.jsx(r,{size:"s",text:"Small"}),e.jsx(r,{small:!0,text:"Small (via prop)"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"neutral",text:"Neutral"}),e.jsx(r,{color:"success",text:"Success"}),e.jsx(r,{color:"warning",text:"Warning"}),e.jsx(r,{color:"danger",text:"Danger"}),e.jsx(r,{color:"info",text:"Info"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"gray",text:"Gray"}),e.jsx(r,{color:"blue",text:"Blue"}),e.jsx(r,{color:"green",text:"Green"}),e.jsx(r,{color:"yellow",text:"Yellow"}),e.jsx(r,{color:"orange",text:"Orange"}),e.jsx(r,{color:"red",text:"Red"}),e.jsx(r,{color:"pink",text:"Pink"}),e.jsx(r,{color:"violet",text:"Violet"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"light-gray",text:"Light Gray"}),e.jsx(r,{color:"light-blue",text:"Light Blue"}),e.jsx(r,{color:"light-green",text:"Light Green"}),e.jsx(r,{color:"light-yellow",text:"Light Yellow"}),e.jsx(r,{color:"light-orange",text:"Light Orange"}),e.jsx(r,{color:"light-red",text:"Light Red"}),e.jsx(r,{color:"light-pink",text:"Light Pink"}),e.jsx(r,{color:"light-violet",text:"Light Violet"})]})},g={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"dark-gray",text:"Dark Gray"}),e.jsx(r,{color:"dark-blue",text:"Dark Blue"}),e.jsx(r,{color:"dark-green",text:"Dark Green"}),e.jsx(r,{color:"dark-yellow",text:"Dark Yellow"}),e.jsx(r,{color:"dark-orange",text:"Dark Orange"}),e.jsx(r,{color:"dark-red",text:"Dark Red"}),e.jsx(r,{color:"dark-pink",text:"Dark Pink"}),e.jsx(r,{color:"dark-violet",text:"Dark Violet"})]})},h={render:()=>{const t=["neutral","gray","light-gray","dark-gray","blue","light-blue","dark-blue","green","light-green","dark-green","yellow","light-yellow","dark-yellow","orange","light-orange","dark-orange","red","light-red","dark-red","pink","light-pink","dark-pink","violet","light-violet","dark-violet","danger","warning","success","info"];return e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.map(l=>e.jsx(r,{color:l,text:l},l))})}},m={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{text:"With Icon",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("circle",{cx:"8",cy:"8",r:"4"})})}),e.jsx(r,{text:"Success",color:"success",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z"})})}),e.jsx(r,{text:"Small",small:!0,icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("circle",{cx:"8",cy:"8",r:"4"})})})]})},x={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{text:"Custom Close",rightIcon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M4 4L12 12M4 12L12 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),e.jsx(r,{text:"Edit",rightIcon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M12 4l-1-1-7 7-1 3 3-1 7-7-1-1z"})})})]})},v={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{small:!0,color:"neutral",text:"Neutral"}),e.jsx(r,{small:!0,color:"success",text:"Success"}),e.jsx(r,{small:!0,color:"warning",text:"Warning"}),e.jsx(r,{small:!0,color:"danger",text:"Danger"}),e.jsx(r,{small:!0,color:"info",text:"Info"}),e.jsx(r,{small:!0,color:"blue",text:"Blue"}),e.jsx(r,{small:!0,color:"violet",text:"Violet"})]})},f={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{text:"Click me",onClick:()=>alert("Chip clicked!")}),e.jsx(r,{text:"Focusable",color:"blue",onFocus:()=>console.log("Chip focused"),onBlur:()=>console.log("Chip blurred")})]})},k={args:{text:"Customizable Chip",color:"neutral",size:"m",small:!1}};var b,L,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Label'
  }
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var D,N,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Chip size="m" text="Medium (default)" />
      <Chip size="s" text="Small" />
      <Chip small text="Small (via prop)" />
    </div>
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,B,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip color="neutral" text="Neutral" />
      <Chip color="success" text="Success" />
      <Chip color="warning" text="Warning" />
      <Chip color="danger" text="Danger" />
      <Chip color="info" text="Info" />
    </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var M,I,T;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip color="gray" text="Gray" />
      <Chip color="blue" text="Blue" />
      <Chip color="green" text="Green" />
      <Chip color="yellow" text="Yellow" />
      <Chip color="orange" text="Orange" />
      <Chip color="red" text="Red" />
      <Chip color="pink" text="Pink" />
      <Chip color="violet" text="Violet" />
    </div>
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,F,G;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip color="light-gray" text="Light Gray" />
      <Chip color="light-blue" text="Light Blue" />
      <Chip color="light-green" text="Light Green" />
      <Chip color="light-yellow" text="Light Yellow" />
      <Chip color="light-orange" text="Light Orange" />
      <Chip color="light-red" text="Light Red" />
      <Chip color="light-pink" text="Light Pink" />
      <Chip color="light-violet" text="Light Violet" />
    </div>
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var W,q,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip color="dark-gray" text="Dark Gray" />
      <Chip color="dark-blue" text="Dark Blue" />
      <Chip color="dark-green" text="Dark Green" />
      <Chip color="dark-yellow" text="Dark Yellow" />
      <Chip color="dark-orange" text="Dark Orange" />
      <Chip color="dark-red" text="Dark Red" />
      <Chip color="dark-pink" text="Dark Pink" />
      <Chip color="dark-violet" text="Dark Violet" />
    </div>
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,O,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const colors: ChipColor[] = ['neutral', 'gray', 'light-gray', 'dark-gray', 'blue', 'light-blue', 'dark-blue', 'green', 'light-green', 'dark-green', 'yellow', 'light-yellow', 'dark-yellow', 'orange', 'light-orange', 'dark-orange', 'red', 'light-red', 'dark-red', 'pink', 'light-pink', 'dark-pink', 'violet', 'light-violet', 'dark-violet', 'danger', 'warning', 'success', 'info'];
    return <div className="flex flex-wrap items-center gap-2">
        {colors.map(color => <Chip key={color} color={color} text={color} />)}
      </div>;
  }
}`,...(Y=(O=h.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var _,$,A;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Chip text="With Icon" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4" />
          </svg>} />
      <Chip text="Success" color="success" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z" />
          </svg>} />
      <Chip text="Small" small icon={<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4" />
          </svg>} />
    </div>
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var Z,U,J;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Chip text="Custom Close" rightIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>} />
      <Chip text="Edit" rightIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12 4l-1-1-7 7-1 3 3-1 7-7-1-1z" />
          </svg>} />
    </div>
}`,...(J=(U=x.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,K;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip small color="neutral" text="Neutral" />
      <Chip small color="success" text="Success" />
      <Chip small color="warning" text="Warning" />
      <Chip small color="danger" text="Danger" />
      <Chip small color="info" text="Info" />
      <Chip small color="blue" text="Blue" />
      <Chip small color="violet" text="Violet" />
    </div>
}`,...(K=(X=v.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var ee,re,le;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-wrap items-center gap-2">
        <Chip text="Click me" onClick={() => alert('Chip clicked!')} />
        <Chip text="Focusable" color="blue" onFocus={() => console.log('Chip focused')} onBlur={() => console.log('Chip blurred')} />
      </div>;
  }
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,ae,oe;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    text: 'Customizable Chip',
    color: 'neutral',
    size: 'm',
    small: false
  }
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ne=["Default","Sizes","SemanticColors","BaseColors","LightColors","DarkColors","AllColors","WithIcon","CustomRightIcon","SmallVariants","Interactive","Playground"];export{h as AllColors,p as BaseColors,x as CustomRightIcon,g as DarkColors,s as Default,f as Interactive,u as LightColors,k as Playground,d as SemanticColors,c as Sizes,v as SmallVariants,m as WithIcon,Ne as __namedExportsOrder,De as default};
