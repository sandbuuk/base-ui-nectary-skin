import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as pe}from"./index-EXTQMK5R.js";import{r as he}from"./index-pP6CS22B.js";import{c as y}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const fe=pe(["inline-flex items-center","gap-1","select-none","box-border","bg-[var(--sinch-comp-tag-color-default-background)]","text-[color:var(--sinch-comp-tag-color-default-foreground)]","rounded-[var(--sinch-comp-tag-shape-radius)]"],{variants:{size:{m:["h-[var(--sinch-comp-tag-size-container-m)]","px-[9px]","[font:var(--sinch-comp-tag-font-size-m-label)]"],s:["h-[var(--sinch-comp-tag-size-container-s)]","px-2","[font:var(--sinch-comp-tag-font-size-s-label)]"]},ellipsis:{true:"inline",false:"inline-flex"}},defaultVariants:{size:"m",ellipsis:!1}}),r=he.forwardRef(({className:v,text:a,color:l,small:ie=!1,size:ce,ellipsis:k=!1,icon:T,children:ge,style:de,...xe},me)=>{const w=ie?"s":ce??"m",t={};l!==void 0&&l!=="default"&&(t.backgroundColor=`var(--sinch-comp-tag-color-${l}-background)`,t.color=`var(--sinch-comp-tag-color-${l}-foreground)`,t["--sinch-global-color-icon"]=`var(--sinch-comp-tag-color-${l}-foreground)`);const ue=w==="s"?"var(--sinch-comp-tag-size-icon-s)":"var(--sinch-comp-tag-size-icon-m)";return t["--sinch-global-size-icon"]=ue,e.jsxs("div",{ref:me,className:y(fe({size:w,ellipsis:k}),v),style:{...t,...de},...xe,children:[T&&e.jsx("span",{className:"-ml-1",children:T}),e.jsx("span",{className:y("flex-1",k&&"overflow-hidden text-ellipsis whitespace-nowrap"),children:a??ge})]})});r.displayName="Tag";r.__docgenInfo={description:`Tag component for displaying labels, categories, or status indicators.

Supports multiple color variants, two sizes (s, m), optional icon,
and text truncation with ellipsis.

@example
\`\`\`tsx
// Default tag
<Tag text="Label" />

// Colored tag
<Tag text="Success" color="success" />

// Small tag with icon
<Tag text="Status" small icon={<Icon name="check" />} />

// Tag with ellipsis
<Tag text="Very long label text" ellipsis />
\`\`\``,methods:[],displayName:"Tag",props:{text:{required:!1,tsType:{name:"string"},description:"Text content for the tag"},color:{required:!1,tsType:{name:"union",raw:`| 'default'
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
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'red'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:`Color variant for the tag
@default 'default'`},small:{required:!1,tsType:{name:"boolean"},description:`Use small size variant
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:`Tag size ('s' or 'm')
@default 'm'`},ellipsis:{required:!1,tsType:{name:"boolean"},description:`Enable text truncation with ellipsis
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the text"}},composes:["Omit","VariantProps"]};const je={title:"Components/Tag",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","gray","light-gray","dark-gray","blue","light-blue","dark-blue","green","light-green","dark-green","yellow","light-yellow","dark-yellow","orange","light-orange","dark-orange","red","light-red","dark-red","pink","light-pink","dark-pink","violet","light-violet","dark-violet","danger","warning","success","info"]},size:{control:"select",options:["s","m"]},small:{control:"boolean"},ellipsis:{control:"boolean"}}},o={args:{text:"Label"}},s={args:{text:"Tag Text"}},n={args:{children:"Tag Content"}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"m",text:"Medium (default)"}),e.jsx(r,{size:"s",text:"Small"}),e.jsx(r,{small:!0,text:"Small (via prop)"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"default",text:"Default"}),e.jsx(r,{color:"success",text:"Success"}),e.jsx(r,{color:"warning",text:"Warning"}),e.jsx(r,{color:"danger",text:"Danger"}),e.jsx(r,{color:"info",text:"Info"})]})},g={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"gray",text:"Gray"}),e.jsx(r,{color:"blue",text:"Blue"}),e.jsx(r,{color:"green",text:"Green"}),e.jsx(r,{color:"yellow",text:"Yellow"}),e.jsx(r,{color:"orange",text:"Orange"}),e.jsx(r,{color:"red",text:"Red"}),e.jsx(r,{color:"pink",text:"Pink"}),e.jsx(r,{color:"violet",text:"Violet"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"light-gray",text:"Light Gray"}),e.jsx(r,{color:"light-blue",text:"Light Blue"}),e.jsx(r,{color:"light-green",text:"Light Green"}),e.jsx(r,{color:"light-yellow",text:"Light Yellow"}),e.jsx(r,{color:"light-orange",text:"Light Orange"}),e.jsx(r,{color:"light-red",text:"Light Red"}),e.jsx(r,{color:"light-pink",text:"Light Pink"}),e.jsx(r,{color:"light-violet",text:"Light Violet"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{color:"dark-gray",text:"Dark Gray"}),e.jsx(r,{color:"dark-blue",text:"Dark Blue"}),e.jsx(r,{color:"dark-green",text:"Dark Green"}),e.jsx(r,{color:"dark-yellow",text:"Dark Yellow"}),e.jsx(r,{color:"dark-orange",text:"Dark Orange"}),e.jsx(r,{color:"dark-red",text:"Dark Red"}),e.jsx(r,{color:"dark-pink",text:"Dark Pink"}),e.jsx(r,{color:"dark-violet",text:"Dark Violet"})]})},m={render:()=>{const v=["default","gray","light-gray","dark-gray","blue","light-blue","dark-blue","green","light-green","dark-green","yellow","light-yellow","dark-yellow","orange","light-orange","dark-orange","red","light-red","dark-red","pink","light-pink","dark-pink","violet","light-violet","dark-violet","danger","warning","success","info"];return e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:v.map(a=>e.jsx(r,{color:a,text:a},a))})}},u={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{text:"With Icon",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("circle",{cx:"8",cy:"8",r:"4"})})}),e.jsx(r,{text:"Success",color:"success",icon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z"})})}),e.jsx(r,{text:"Small",small:!0,icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("circle",{cx:"8",cy:"8",r:"4"})})})]})},p={render:()=>e.jsx("div",{className:"max-w-[150px]",children:e.jsx(r,{text:"This is a very long tag text that should be truncated",ellipsis:!0})})},h={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{small:!0,color:"default",text:"Default"}),e.jsx(r,{small:!0,color:"success",text:"Success"}),e.jsx(r,{small:!0,color:"warning",text:"Warning"}),e.jsx(r,{small:!0,color:"danger",text:"Danger"}),e.jsx(r,{small:!0,color:"info",text:"Info"}),e.jsx(r,{small:!0,color:"blue",text:"Blue"}),e.jsx(r,{small:!0,color:"violet",text:"Violet"})]})},f={args:{text:"Customizable Tag",color:"default",size:"m",small:!1,ellipsis:!1}};var j,b,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Label'
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var z,D,C;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'Tag Text'
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var N,L,V;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Tag Content'
  }
}`,...(V=(L=n.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var B,W,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tag size="m" text="Medium (default)" />
      <Tag size="s" text="Small" />
      <Tag small text="Small (via prop)" />
    </div>
}`,...(G=(W=i.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var R,I,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Tag color="default" text="Default" />
      <Tag color="success" text="Success" />
      <Tag color="warning" text="Warning" />
      <Tag color="danger" text="Danger" />
      <Tag color="info" text="Info" />
    </div>
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var O,q,E;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Tag color="gray" text="Gray" />
      <Tag color="blue" text="Blue" />
      <Tag color="green" text="Green" />
      <Tag color="yellow" text="Yellow" />
      <Tag color="orange" text="Orange" />
      <Tag color="red" text="Red" />
      <Tag color="pink" text="Pink" />
      <Tag color="violet" text="Violet" />
    </div>
}`,...(E=(q=g.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var Y,M,_;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Tag color="light-gray" text="Light Gray" />
      <Tag color="light-blue" text="Light Blue" />
      <Tag color="light-green" text="Light Green" />
      <Tag color="light-yellow" text="Light Yellow" />
      <Tag color="light-orange" text="Light Orange" />
      <Tag color="light-red" text="Light Red" />
      <Tag color="light-pink" text="Light Pink" />
      <Tag color="light-violet" text="Light Violet" />
    </div>
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,A,U;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Tag color="dark-gray" text="Dark Gray" />
      <Tag color="dark-blue" text="Dark Blue" />
      <Tag color="dark-green" text="Dark Green" />
      <Tag color="dark-yellow" text="Dark Yellow" />
      <Tag color="dark-orange" text="Dark Orange" />
      <Tag color="dark-red" text="Dark Red" />
      <Tag color="dark-pink" text="Dark Pink" />
      <Tag color="dark-violet" text="Dark Violet" />
    </div>
}`,...(U=(A=x.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var F,H,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const colors: TagColor[] = ['default', 'gray', 'light-gray', 'dark-gray', 'blue', 'light-blue', 'dark-blue', 'green', 'light-green', 'dark-green', 'yellow', 'light-yellow', 'dark-yellow', 'orange', 'light-orange', 'dark-orange', 'red', 'light-red', 'dark-red', 'pink', 'light-pink', 'dark-pink', 'violet', 'light-violet', 'dark-violet', 'danger', 'warning', 'success', 'info'];
    return <div className="flex flex-wrap items-center gap-2">
        {colors.map(color => <Tag key={color} color={color} text={color} />)}
      </div>;
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Tag text="With Icon" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4" />
          </svg>} />
      <Tag text="Success" color="success" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 11L3 7.5l1-1 2.5 2.5 5-5 1 1z" />
          </svg>} />
      <Tag text="Small" small icon={<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="4" />
          </svg>} />
    </div>
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="max-w-[150px]">
      <Tag text="This is a very long tag text that should be truncated" ellipsis />
    </div>
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,le,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Tag small color="default" text="Default" />
      <Tag small color="success" text="Success" />
      <Tag small color="warning" text="Warning" />
      <Tag small color="danger" text="Danger" />
      <Tag small color="info" text="Info" />
      <Tag small color="blue" text="Blue" />
      <Tag small color="violet" text="Violet" />
    </div>
}`,...(te=(le=h.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var oe,se,ne;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    text: 'Customizable Tag',
    color: 'default',
    size: 'm',
    small: false,
    ellipsis: false
  }
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const be=["Default","WithTextProp","WithChildren","Sizes","SemanticColors","BaseColors","LightColors","DarkColors","AllColors","WithIcon","WithEllipsis","SmallVariants","Playground"];export{m as AllColors,g as BaseColors,x as DarkColors,o as Default,d as LightColors,f as Playground,c as SemanticColors,i as Sizes,h as SmallVariants,n as WithChildren,p as WithEllipsis,u as WithIcon,s as WithTextProp,be as __namedExportsOrder,je as default};
