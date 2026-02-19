import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as ye}from"./index-EXTQMK5R.js";import{r as ve}from"./index-pP6CS22B.js";import{c as w}from"./cn-BLSKlp9E.js";import{I as be}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const we=ye(["flex","flex-row","items-start","p-4","w-full","box-border","rounded-[var(--sinch-comp-inline-alert-shape-radius)]"],{variants:{type:{info:"bg-[var(--sinch-comp-inline-alert-color-info-default-background)]",success:"bg-[var(--sinch-comp-inline-alert-color-success-default-background)]",warn:"bg-[var(--sinch-comp-inline-alert-color-warning-default-background)]",error:"bg-[var(--sinch-comp-inline-alert-color-error-default-background)]"}},defaultVariants:{type:"info"}}),Ce={info:"var(--sinch-comp-inline-alert-color-info-default-icon)",success:"var(--sinch-comp-inline-alert-color-success-default-icon)",warn:"var(--sinch-comp-inline-alert-color-warning-default-icon)",error:"var(--sinch-comp-inline-alert-color-error-default-icon)"},je={info:"var(--sinch-comp-inline-alert-color-info-default-text)",success:"var(--sinch-comp-inline-alert-color-success-default-text)",warn:"var(--sinch-comp-inline-alert-color-warning-default-text)",error:"var(--sinch-comp-inline-alert-color-error-default-text)"},Ne={info:"circle-info",success:"circle-check",warn:"triangle-exclamation",error:"octagon-exclamation"},t=ve.forwardRef(({className:pe,type:r="info",text:de,caption:x,icon:ue,action:y,close:v,children:me,...he},ge)=>{const fe=ue??Ne[r],xe=Ce[r],b=je[r];return e.jsxs("div",{ref:ge,role:"alert","aria-atomic":"true","aria-live":"polite",className:w(we({type:r}),pe),...he,children:[e.jsx(be,{name:fe,iconsVersion:"2",size:"md",style:{color:xe}}),e.jsxs("div",{className:"flex flex-col items-start ml-2 min-w-0 flex-1",children:[x&&e.jsx("div",{className:"self-stretch font-[var(--sinch-comp-inline-alert-font-title)]",style:{color:b},children:x}),e.jsx("div",{className:w("flex flex-col gap-2 self-stretch font-[var(--sinch-comp-inline-alert-font-body)]",x&&"mt-1"),style:{color:b},children:de??me}),y&&e.jsx("div",{className:"w-full flex mt-4 min-w-0 gap-4",children:y})]}),v&&e.jsx("div",{className:"ml-4",children:v})]})});t.displayName="InlineAlert";t.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warn' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warn'"},{name:"literal",value:"'error'"}]},description:"Alert type determines the background color, icon, and text color",defaultValue:{value:"'info'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Main text content to display"},caption:{required:!1,tsType:{name:"string"},description:"Optional caption/title displayed above the text"},icon:{required:!1,tsType:{name:"string"},description:"Custom icon name (overrides default type icon)"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action slot (e.g., buttons)"},close:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional close slot (e.g., a close button)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display (alternative to text prop)"}},composes:["Omit","VariantProps"]};const ke={title:"Components/InlineAlert",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warn","error"],description:"Alert type determines the background color, icon, and text color"},text:{control:"text",description:"Main text content to display"},caption:{control:"text",description:"Optional caption/title displayed above the text"},icon:{control:"text",description:"Custom icon name (overrides default type icon)"}}},o={args:{type:"info",text:"This is an informational inline alert message."}},n={args:{type:"info",caption:"Information",text:"This is an informational message to help guide the user."}},a={args:{type:"success",caption:"Success",text:"Your changes have been saved successfully."}},s={args:{type:"warn",caption:"Warning",text:"Please review your input before continuing."}},i={args:{type:"error",caption:"Error",text:"Something went wrong. Please try again."}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{type:"info",caption:"Information",text:"This is an informational message."}),e.jsx(t,{type:"success",caption:"Success",text:"Operation completed successfully."}),e.jsx(t,{type:"warn",caption:"Warning",text:"This is a warning message."}),e.jsx(t,{type:"error",caption:"Error",text:"This is an error message."})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{type:"info",text:"Info alert without caption."}),e.jsx(t,{type:"success",text:"Success alert without caption."}),e.jsx(t,{type:"warn",text:"Warning alert without caption."}),e.jsx(t,{type:"error",text:"Error alert without caption."})]})},p={args:{type:"info",caption:"Important Notice",text:"This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon and maintaining readability."}},d={args:{type:"info",caption:"Custom Icon",text:"This alert uses a custom icon instead of the default.",icon:"bell"}},u={args:{type:"warn",caption:"Session Expiring",text:"Your session is about to expire. Would you like to extend it?",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border",children:"Extend Session"})}},m={args:{type:"error",caption:"Connection Lost",text:"The connection to the server was lost. Please try again.",action:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary-hover",children:"Retry"}),e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border",children:"Cancel"})]})}},h={args:{type:"success",caption:"Changes Saved",text:"Your changes have been saved successfully.",close:e.jsx("button",{className:"p-1 rounded hover:bg-surface-transparent-hover","aria-label":"Close alert",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8"})})})}},g={args:{type:"error",caption:"Failed to Save",text:"Your changes could not be saved. Please try again.",action:e.jsx("button",{className:"px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border",children:"Retry"}),close:e.jsx("button",{className:"p-1 rounded hover:bg-surface-transparent-hover","aria-label":"Close alert",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8"})})})}},f={render:()=>e.jsx(t,{type:"info",caption:"Rich Content",children:e.jsxs("span",{children:["You can also use ",e.jsx("strong",{children:"children"})," instead of the text prop for rich content. This allows for ",e.jsx("em",{children:"formatted text"})," and even ",e.jsx("a",{href:"#",className:"underline",children:"links"}),"."]})})};var C,j,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is an informational inline alert message.'
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var I,S,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'info',
    caption: 'Information',
    text: 'This is an informational message to help guide the user.'
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var W,A,R;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'success',
    caption: 'Success',
    text: 'Your changes have been saved successfully.'
  }
}`,...(R=(A=a.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,E,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    caption: 'Warning',
    text: 'Please review your input before continuing.'
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var Y,P,O;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'error',
    caption: 'Error',
    text: 'Something went wrong. Please try again.'
  }
}`,...(O=(P=i.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,V,B;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InlineAlert type="info" caption="Information" text="This is an informational message." />
      <InlineAlert type="success" caption="Success" text="Operation completed successfully." />
      <InlineAlert type="warn" caption="Warning" text="This is a warning message." />
      <InlineAlert type="error" caption="Error" text="This is an error message." />
    </div>
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var L,_,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <InlineAlert type="info" text="Info alert without caption." />
      <InlineAlert type="success" text="Success alert without caption." />
      <InlineAlert type="warn" text="Warning alert without caption." />
      <InlineAlert type="error" text="Error alert without caption." />
    </div>
}`,...(F=(_=l.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var D,z,G;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'info',
    caption: 'Important Notice',
    text: 'This is a longer alert message that demonstrates how the component handles text that spans multiple lines. The alert should grow vertically to accommodate the content while maintaining proper alignment of the icon and maintaining readability.'
  }
}`,...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'info',
    caption: 'Custom Icon',
    text: 'This alert uses a custom icon instead of the default.',
    icon: 'bell'
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    caption: 'Session Expiring',
    text: 'Your session is about to expire. Would you like to extend it?',
    action: <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Extend Session
      </button>
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'error',
    caption: 'Connection Lost',
    text: 'The connection to the server was lost. Please try again.',
    action: <>
        <button className="px-3 py-1 text-sm font-medium rounded bg-primary text-primary-foreground hover:bg-primary-hover">
          Retry
        </button>
        <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
          Cancel
        </button>
      </>
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,oe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: 'success',
    caption: 'Changes Saved',
    text: 'Your changes have been saved successfully.',
    close: <button className="p-1 rounded hover:bg-surface-transparent-hover" aria-label="Close alert">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
  }
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,ae,se;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'error',
    caption: 'Failed to Save',
    text: 'Your changes could not be saved. Please try again.',
    action: <button className="px-3 py-1 text-sm font-medium rounded bg-surface-primary hover:bg-surface-primary-hover border border-border">
        Retry
      </button>,
    close: <button className="p-1 rounded hover:bg-surface-transparent-hover" aria-label="Close alert">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
  }
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ce,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <InlineAlert type="info" caption="Rich Content">
      <span>
        You can also use <strong>children</strong> instead of the text prop for rich content.
        This allows for <em>formatted text</em> and even <a href="#" className="underline">links</a>.
      </span>
    </InlineAlert>
}`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Ee=["Default","Info","Success","Warning","Error","AllTypes","WithoutCaption","LongText","WithCustomIcon","WithAction","WithMultipleActions","WithClose","WithActionAndClose","WithChildren"];export{c as AllTypes,o as Default,i as Error,n as Info,p as LongText,a as Success,s as Warning,u as WithAction,g as WithActionAndClose,f as WithChildren,h as WithClose,d as WithCustomIcon,m as WithMultipleActions,l as WithoutCaption,Ee as __namedExportsOrder,ke as default};
