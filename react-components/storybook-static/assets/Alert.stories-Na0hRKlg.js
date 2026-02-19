import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as $}from"./index-EXTQMK5R.js";import{r as ee}from"./index-pP6CS22B.js";import{c as re}from"./cn-BLSKlp9E.js";import{I as te}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const oe=$(["flex","flex-row","gap-2","items-center","py-2","px-4","w-full","min-h-[48px]","box-border"],{variants:{type:{info:"bg-[var(--sinch-comp-alert-color-info-default-background)]",warn:"bg-[var(--sinch-comp-alert-color-warning-default-background)]",error:"bg-[var(--sinch-comp-alert-color-error-default-background)]"}},defaultVariants:{type:"info"}}),ae={info:"var(--sinch-comp-alert-color-info-default-icon)",warn:"var(--sinch-comp-alert-color-warning-default-icon)",error:"var(--sinch-comp-alert-color-error-default-icon)"},se={info:"var(--sinch-comp-alert-color-info-default-text)",warn:"var(--sinch-comp-alert-color-warning-default-text)",error:"var(--sinch-comp-alert-color-error-default-text)"},ne={info:"circle-info",warn:"triangle-exclamation",error:"octagon-exclamation"},r=ee.forwardRef(({className:L,type:t="info",text:z,action:G,close:H,children:J,...K},Q)=>{const U=ne[t],X=ae[t],Z=se[t];return e.jsxs("div",{ref:Q,role:"alert",className:re(oe({type:t}),L),...K,children:[e.jsx(te,{name:U,iconsVersion:"2",size:"md",style:{color:X}}),e.jsx("div",{className:"flex flex-col gap-2 flex-1 min-w-0 font-[var(--sinch-comp-alert-font-body)]",style:{color:Z},children:z??J}),G,H]})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'warn' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warn'"},{name:"literal",value:"'error'"}]},description:"Alert type determines the background color and icon",defaultValue:{value:"'info'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Text content to display in the alert"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action slot (e.g., a button)"},close:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional close slot (e.g., a close button)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display (alternative to text prop)"}},composes:["Omit","VariantProps"]};const ue={title:"Components/Alert",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","warn","error"],description:"Alert type determines the background color and icon"},text:{control:"text",description:"Text content to display in the alert"}}},o={args:{type:"info",text:"This is an informational alert message."}},a={args:{type:"info",text:"This is an informational message to help guide the user."}},s={args:{type:"warn",text:"Warning: Please review your input before continuing."}},n={args:{type:"error",text:"Error: Something went wrong. Please try again."}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{type:"info",text:"This is an informational message."}),e.jsx(r,{type:"warn",text:"This is a warning message."}),e.jsx(r,{type:"error",text:"This is an error message."})]})},c={args:{type:"info",text:"This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon."}},l={args:{type:"warn",text:"Your session is about to expire.",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border",children:"Extend Session"})}},p={args:{type:"info",text:"This alert can be dismissed.",close:e.jsx("button",{className:"p-1 rounded hover:bg-surface-transparent-hover","aria-label":"Close alert",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8"})})})}},d={args:{type:"error",text:"Failed to save changes.",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border",children:"Retry"}),close:e.jsx("button",{className:"p-1 rounded hover:bg-surface-transparent-hover","aria-label":"Close alert",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8"})})})}},m={render:()=>e.jsx(r,{type:"info",children:e.jsxs("span",{children:["You can also use ",e.jsx("strong",{children:"children"})," instead of the text prop for rich content."]})})};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is an informational alert message.'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is an informational message to help guide the user.'
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,v,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    text: 'Warning: Please review your input before continuing.'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,N,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'Error: Something went wrong. Please try again.'
  }
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,A,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert type="info" text="This is an informational message." />
      <Alert type="warn" text="This is a warning message." />
      <Alert type="error" text="This is an error message." />
    </div>
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,S,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon.'
  }
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var M,E,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    text: 'Your session is about to expire.',
    action: <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Extend Session
      </button>
  }
}`,...(q=(E=l.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var I,P,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This alert can be dismissed.',
    close: <button className="p-1 rounded hover:bg-surface-transparent-hover" aria-label="Close alert">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
  }
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,O,Y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'Failed to save changes.',
    action: <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Retry
      </button>,
    close: <button className="p-1 rounded hover:bg-surface-transparent-hover" aria-label="Close alert">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
  }
}`,...(Y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var _,D,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Alert type="info">
      <span>
        You can also use <strong>children</strong> instead of the text prop for rich content.
      </span>
    </Alert>
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const he=["Default","Info","Warning","Error","AllTypes","LongText","WithAction","WithClose","WithActionAndClose","WithChildren"];export{i as AllTypes,o as Default,n as Error,a as Info,c as LongText,s as Warning,l as WithAction,d as WithActionAndClose,m as WithChildren,p as WithClose,he as __namedExportsOrder,ue as default};
