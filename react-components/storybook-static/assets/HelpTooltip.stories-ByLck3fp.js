import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as P}from"./index-pP6CS22B.js";import{f}from"./index-CsAwyYjM.js";import{c as G}from"./cn-BLSKlp9E.js";import{I as J}from"./Icon-3RA0aubP.js";import{T as Q}from"./Tooltip-WtcvfBIx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";const t=P.forwardRef(({className:s,text:o,orientation:p="top",textAlign:_,width:x,isOpen:F,onShow:M,onHide:R,style:V,...Y},$)=>{const B=x!==void 0?{"--sinch-global-size-icon":`${x}px`}:{"--sinch-global-size-icon":"18px"};return e.jsx(Q,{ref:$,text:o,orientation:p,textAlign:_,type:"fast",isOpen:F,onShow:M,onHide:R,className:G("inline-flex",s),style:V,...Y,children:e.jsx(J,{name:"circle-question",iconsVersion:"2",className:"text-foreground-muted cursor-help",style:B})})});t.displayName="HelpTooltip";t.__docgenInfo={description:"",methods:[],displayName:"HelpTooltip",props:{text:{required:!0,tsType:{name:"string"},description:"Text content to display in the tooltip"},orientation:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'bottom'
| 'left'
| 'right'
| 'top-left'
| 'top-right'
| 'bottom-left'
| 'bottom-right'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"Orientation/position of the tooltip relative to the icon",defaultValue:{value:"'top'",computed:!1}},textAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text alignment within the tooltip"},width:{required:!1,tsType:{name:"number"},description:"Width override for the icon (in pixels)"},isOpen:{required:!1,tsType:{name:"boolean"},description:`Controlled open state. When set, controls whether the tooltip is visible.
If undefined, the tooltip operates in uncontrolled mode (hover-based).`},onShow:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the tooltip is shown"},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the tooltip is hidden"}},composes:["Omit"]};const ie={title:"Components/HelpTooltip",component:t,tags:["autodocs"],args:{onShow:f(),onHide:f()},argTypes:{orientation:{control:"select",options:["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"]},textAlign:{control:"select",options:["left","center","right"]},width:{control:{type:"number",min:12,max:48}},isOpen:{control:"boolean"}},decorators:[s=>e.jsx("div",{className:"p-16 flex items-center justify-center",children:e.jsx(s,{})})]},n={args:{text:"This is helpful information about the feature."}},i={args:{text:"This is a longer explanation that provides detailed information about how this feature works and what you can expect when using it."}},a={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-16 items-center justify-items-center",children:[e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"top"}),e.jsx(t,{text:"Tooltip on top",orientation:"top"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"left"}),e.jsx(t,{text:"Tooltip on left",orientation:"left"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"right"}),e.jsx(t,{text:"Tooltip on right",orientation:"right"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"bottom"}),e.jsx(t,{text:"Tooltip on bottom",orientation:"bottom"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"top-left"}),e.jsx(t,{text:"Tooltip on top-left",orientation:"top-left"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"top-right"}),e.jsx(t,{text:"Tooltip on top-right",orientation:"top-right"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"bottom-left"}),e.jsx(t,{text:"Tooltip on bottom-left",orientation:"bottom-left"})]}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"bottom-right"}),e.jsx(t,{text:"Tooltip on bottom-right",orientation:"bottom-right"})]})]})},l={render:()=>e.jsxs("div",{className:"flex gap-16 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"left"}),e.jsx(t,{text:"This text is aligned to the left side of the tooltip.",textAlign:"left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"center"}),e.jsx(t,{text:"This text is centered in the tooltip.",textAlign:"center"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"right"}),e.jsx(t,{text:"This text is aligned to the right side of the tooltip.",textAlign:"right"})]})]})},r={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"12px"}),e.jsx(t,{text:"Small icon",width:12})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"18px (default)"}),e.jsx(t,{text:"Default size icon"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"24px"}),e.jsx(t,{text:"Medium icon",width:24})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"32px"}),e.jsx(t,{text:"Large icon",width:32})]})]})},c={render:function(){const[o,p]=P.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",onClick:()=>p(!o),children:[o?"Hide":"Show"," Tooltip"]}),e.jsx(t,{text:"This tooltip is controlled programmatically.",isOpen:o,onShow:()=>console.log("Tooltip shown"),onHide:()=>console.log("Tooltip hidden")})]})}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"What is this feature?"}),e.jsx(t,{text:"This feature allows you to do amazing things!"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium",children:["Email Address",e.jsx(t,{text:"We'll use this email to send you important updates about your account."})]}),e.jsx("input",{type:"email",placeholder:"you@example.com",className:"px-3 py-2 border border-border rounded-md"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium",children:["API Key",e.jsx(t,{text:"Your API key is required for authentication. Keep it secret!"})]}),e.jsx("input",{type:"password",placeholder:"sk-xxxxxxxx",className:"px-3 py-2 border border-border rounded-md"})]})]})};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'This is helpful information about the feature.'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,N,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'This is a longer explanation that provides detailed information about how this feature works and what you can expect when using it.'
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var T,b,y;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-16 items-center justify-items-center">
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top</span>
        <HelpTooltip text="Tooltip on top" orientation="top" />
      </div>
      <div />

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">left</span>
        <HelpTooltip text="Tooltip on left" orientation="left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">right</span>
        <HelpTooltip text="Tooltip on right" orientation="right" />
      </div>

      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom</span>
        <HelpTooltip text="Tooltip on bottom" orientation="bottom" />
      </div>
      <div />

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top-left</span>
        <HelpTooltip text="Tooltip on top-left" orientation="top-left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">top-right</span>
        <HelpTooltip text="Tooltip on top-right" orientation="top-right" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom-left</span>
        <HelpTooltip text="Tooltip on bottom-left" orientation="bottom-left" />
      </div>
      <div />
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">bottom-right</span>
        <HelpTooltip text="Tooltip on bottom-right" orientation="bottom-right" />
      </div>
    </div>
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,H,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-16 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">left</span>
        <HelpTooltip text="This text is aligned to the left side of the tooltip." textAlign="left" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">center</span>
        <HelpTooltip text="This text is centered in the tooltip." textAlign="center" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">right</span>
        <HelpTooltip text="This text is aligned to the right side of the tooltip." textAlign="right" />
      </div>
    </div>
}`,...(S=(H=l.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var A,O,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">12px</span>
        <HelpTooltip text="Small icon" width={12} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">18px (default)</span>
        <HelpTooltip text="Default size icon" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">24px</span>
        <HelpTooltip text="Medium icon" width={24} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-foreground-muted">32px</span>
        <HelpTooltip text="Large icon" width={32} />
      </div>
    </div>
}`,...(I=(O=r.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var C,k,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide' : 'Show'} Tooltip
        </button>
        <HelpTooltip text="This tooltip is controlled programmatically." isOpen={isOpen} onShow={() => console.log('Tooltip shown')} onHide={() => console.log('Tooltip hidden')} />
      </div>;
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var W,z,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <span>What is this feature?</span>
      <HelpTooltip text="This feature allows you to do amazing things!" />
    </div>
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var E,D,K;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium">
          Email Address
          <HelpTooltip text="We'll use this email to send you important updates about your account." />
        </label>
        <input type="email" placeholder="you@example.com" className="px-3 py-2 border border-border rounded-md" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="flex items-center gap-2 text-sm font-medium">
          API Key
          <HelpTooltip text="Your API key is required for authentication. Keep it secret!" />
        </label>
        <input type="password" placeholder="sk-xxxxxxxx" className="px-3 py-2 border border-border rounded-md" />
      </div>
    </div>
}`,...(K=(D=m.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};const ae=["Default","WithLongText","AllOrientations","TextAlignment","CustomSizes","Controlled","InlineWithText","InFormLabel"];export{a as AllOrientations,c as Controlled,r as CustomSizes,n as Default,m as InFormLabel,d as InlineWithText,l as TextAlignment,i as WithLongText,ae as __namedExportsOrder,ie as default};
