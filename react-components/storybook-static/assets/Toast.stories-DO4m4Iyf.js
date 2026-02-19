import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as o,R as _}from"./index-pP6CS22B.js";import{c as Pe}from"./index-EXTQMK5R.js";import{c as f}from"./cn-BLSKlp9E.js";import{I as D}from"./Icon-3RA0aubP.js";import{B as d}from"./Button-SrxEgsda.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Spinner-Bh5BG8Cg.js";const Ee=5e3,y=250,Ie=Pe(["flex","flex-row","items-center","gap-2","w-[328px]","max-w-[90vw]","p-4","box-border","rounded-[var(--sinch-comp-toast-shape-radius)]","shadow-[var(--sinch-comp-toast-shadow)]"],{variants:{type:{success:"bg-[var(--sinch-comp-toast-color-success-default-background)]",warn:"bg-[var(--sinch-comp-toast-color-warning-default-background)]",error:"bg-[var(--sinch-comp-toast-color-error-default-background)]",info:"bg-[var(--sinch-comp-toast-color-info-default-background)]"}},defaultVariants:{type:"info"}}),Me={success:"var(--sinch-comp-toast-color-success-default-icon)",warn:"var(--sinch-comp-toast-color-warning-default-icon)",error:"var(--sinch-comp-toast-color-error-default-icon)",info:"var(--sinch-comp-toast-color-info-default-icon)"},De={success:"var(--sinch-comp-toast-color-success-default-text)",warn:"var(--sinch-comp-toast-color-warning-default-text)",error:"var(--sinch-comp-toast-color-error-default-text)",info:"var(--sinch-comp-toast-color-info-default-text)"},ze={info:"circle-info",success:"circle-check",warn:"triangle-exclamation",error:"octagon-exclamation"},m=o.forwardRef(({className:t,type:s="info",text:r,persistent:c=!1,onTimeout:a,action:n,close:l,children:u,...h},p)=>{const i=o.useRef(null);o.useEffect(()=>{if(c){i.current!==null&&(window.clearTimeout(i.current),i.current=null);return}return i.current=window.setTimeout(()=>{a==null||a(),i.current=null},Ee),()=>{i.current!==null&&(window.clearTimeout(i.current),i.current=null)}},[c,a]);const g=ze[s],x=Me[s],Se=De[s];return e.jsxs("div",{ref:p,role:"alert","aria-atomic":"true",className:f(Ie({type:s}),t),...h,children:[e.jsx(D,{name:g,iconsVersion:"2",className:"self-start my-1",style:{color:x}}),e.jsx("div",{className:"flex-1 min-w-0 break-words py-1 pl-1 font-[var(--sinch-comp-toast-font-body)]",style:{color:Se},children:r??u}),n,l]})});m.displayName="Toast";function Oe(t,s){switch(s.type){case"ADD_TOAST":return{...t,toasts:[...t.toasts,s.payload]};case"REMOVE_TOAST":return{...t,toasts:t.toasts.filter(r=>r.id!==s.payload.id)};case"CLEAR_ALL":return{...t,toasts:[]};default:return t}}const Ne=o.createContext(null);function z({children:t,origin:s="bottom-right",reduceMotion:r=!1}){const[c,a]=o.useReducer(Oe,{toasts:[]}),n=o.useCallback(p=>{const i=`toast-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;return a({type:"ADD_TOAST",payload:{...p,id:i}}),i},[]),l=o.useCallback(p=>{a({type:"REMOVE_TOAST",payload:{id:p}})},[]),u=o.useCallback(()=>{a({type:"CLEAR_ALL"})},[]),h=o.useMemo(()=>({toasts:c.toasts,addToast:n,removeToast:l,clearAll:u}),[c.toasts,n,l,u]);return e.jsxs(Ne.Provider,{value:h,children:[t,e.jsx(_e,{origin:s,reduceMotion:r})]})}function ke(){const t=o.useContext(Ne);if(t===null)throw new Error("useToast must be used within a ToastProvider");return t}function _e({origin:t,reduceMotion:s}){const{toasts:r,removeToast:c}=ke(),a=o.useMemo(()=>r.some(l=>l.type==="error"||l.type==="warn")?"assertive":"polite",[r]);return e.jsx("div",{className:f("fixed z-50 right-4 flex flex-col gap-4",t==="top-right"?"top-4 flex-col-reverse":"bottom-4"),"aria-live":a,children:r.map(n=>e.jsx(Ue,{toast:n,onRemove:()=>c(n.id),reduceMotion:s},n.id))})}function Ue({toast:t,onRemove:s,reduceMotion:r}){const[c,a]=o.useState(!0),[n,l]=o.useState(!1),u=o.useRef(null);o.useEffect(()=>{if(r){a(!1);return}const i=setTimeout(()=>{a(!1)},y);return()=>clearTimeout(i)},[r]);const h=o.useCallback(()=>{if(r){s();return}l(!0),setTimeout(()=>{s()},y)},[s,r]),p=o.useCallback(()=>{if(r){s();return}l(!0),setTimeout(()=>{s()},y)},[s,r]);return e.jsx("div",{ref:u,className:f("transition-all",!r&&"duration-250 ease-out",c&&"opacity-0 translate-y-2",n&&"opacity-0 -translate-y-2",!c&&!n&&"opacity-100 translate-y-0"),style:{transitionDuration:r?"0ms":`${y}ms`},children:e.jsx(m,{type:t.type,text:t.text,persistent:t.persistent,onTimeout:h,action:t.action,close:t.close!==void 0?e.jsx("div",{onClick:p,children:t.close}):void 0})})}const O=o.forwardRef(({className:t,origin:s="bottom-right",children:r,...c},a)=>{const[n,l]=o.useState([]),u=o.useMemo(()=>{const p=[];return _.Children.forEach(r,i=>{_.isValidElement(i)&&p.push(i)}),p},[r]);o.useEffect(()=>{l(u)},[u]);const h=o.useMemo(()=>n.some(i=>{var x;const g=(x=i.props)==null?void 0:x.type;return g==="error"||g==="warn"})?"assertive":"polite",[n]);return e.jsxs("div",{ref:a,className:f("block",t),...c,children:[e.jsx("div",{className:"w-0 h-0 overflow-hidden invisible",children:r}),e.jsx("div",{className:f("fixed z-50 right-4 flex flex-col",s==="top-right"?"top-4 flex-col-reverse":"bottom-0"),"aria-live":h,children:n.map((p,i)=>e.jsx("div",{className:"mb-4",children:p},p.key??i))})]})});O.displayName="ToastManager";const v={success:(t,s)=>({type:"success",text:t,...s}),error:(t,s)=>({type:"error",text:t,...s}),warn:(t,s)=>({type:"warn",text:t,...s}),info:(t,s)=>({type:"info",text:t,...s})};m.__docgenInfo={description:"Individual Toast notification component",methods:[],displayName:"Toast",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'warn' | 'error' | 'success'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warn'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"Toast type determines the background color and icon",defaultValue:{value:"'info'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Text content to display"},persistent:{required:!1,tsType:{name:"boolean"},description:"If true, toast won't auto-dismiss after 5 seconds",defaultValue:{value:"false",computed:!1}},onTimeout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when toast times out"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action slot (e.g., a button)"},close:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional close slot (e.g., a close button)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display (alternative to text prop)"}},composes:["VariantProps"]};z.__docgenInfo={description:`Toast Provider - Wrap your app with this to enable toast notifications

@example
\`\`\`tsx
<ToastProvider origin="bottom-right">
  <App />
</ToastProvider>
\`\`\``,methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},origin:{required:!1,tsType:{name:"union",raw:"'top-right' | 'bottom-right'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"}]},description:"Position of toast container",defaultValue:{value:"'bottom-right'",computed:!1}},reduceMotion:{required:!1,tsType:{name:"boolean"},description:"Disable animations (for reduced motion)",defaultValue:{value:"false",computed:!1}}}};O.__docgenInfo={description:`ToastManager - A declarative wrapper for managing toasts as children

This mirrors the web component API where toasts are passed as children.
For most React use cases, prefer ToastProvider + useToast.

@example
\`\`\`tsx
<ToastManager origin="bottom-right">
  {showToast && <Toast type="success" text="Saved!" />}
</ToastManager>
\`\`\``,methods:[],displayName:"ToastManager",props:{origin:{required:!1,tsType:{name:"union",raw:"'top-right' | 'bottom-right'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"}]},description:"Position of toast container",defaultValue:{value:"'bottom-right'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Toast children (rendered in hidden slot, cloned to visible list)"}}};const He={title:"Components/Toast",component:m,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["info","success","warn","error"]},persistent:{control:"boolean"},text:{control:"text"}}},T={args:{type:"info",text:"This is an informational message."}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(m,{type:"info",text:"This is an info toast."}),e.jsx(m,{type:"success",text:"This is a success toast."}),e.jsx(m,{type:"warn",text:"This is a warning toast."}),e.jsx(m,{type:"error",text:"This is an error toast."})]})},b={args:{type:"info",text:"Your session will expire in 5 minutes."}},j={args:{type:"success",text:"Your changes have been saved successfully."}},A={args:{type:"warn",text:"Your subscription is about to expire."}},C={args:{type:"error",text:"Failed to save changes. Please try again."}},N={args:{type:"error",text:"This toast will stay until you dismiss it.",persistent:!0}},k={args:{type:"info",text:"New version available.",action:e.jsx(d,{size:"s",variant:"secondary",children:"Update"})}},R={args:{type:"success",text:"File uploaded successfully.",close:e.jsx(d,{size:"s",variant:"subtle-secondary",icon:e.jsx(D,{name:"xmark",size:"sm"}),"aria-label":"Close"}),persistent:!0}},S={args:{type:"warn",text:"Unsaved changes detected.",action:e.jsx(d,{size:"s",variant:"secondary",children:"Save"}),close:e.jsx(d,{size:"s",variant:"subtle-secondary",icon:e.jsx(D,{name:"xmark",size:"sm"}),"aria-label":"Close"}),persistent:!0}},P={args:{type:"info",text:"This is a very long toast message that demonstrates how the component handles text wrapping when the content exceeds the available width."}};function Re(){const{addToast:t,clearAll:s,toasts:r}=ke(),c=()=>{t(v.info("This is an info message"))},a=()=>{t(v.success("Operation completed successfully!"))},n=()=>{t(v.warn("Please review your input"))},l=()=>{t(v.error("An error occurred"))},u=()=>{t({type:"info",text:"This toast will not auto-dismiss",persistent:!0,close:e.jsx(d,{size:"s",variant:"subtle-secondary",icon:e.jsx(D,{name:"xmark",size:"sm"}),"aria-label":"Close"})})};return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"text-sm text-foreground-muted mb-2",children:["Active toasts: ",r.length]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(d,{onClick:c,children:"Add Info"}),e.jsx(d,{onClick:a,children:"Add Success"}),e.jsx(d,{onClick:n,children:"Add Warning"}),e.jsx(d,{onClick:l,children:"Add Error"}),e.jsx(d,{onClick:u,children:"Add Persistent"}),e.jsx(d,{variant:"secondary",onClick:s,children:"Clear All"})]})]})}const E={render:()=>e.jsx(z,{origin:"bottom-right",children:e.jsx(Re,{})}),parameters:{docs:{description:{story:"Using ToastProvider and useToast hook to manage toasts programmatically."}}}},I={render:()=>e.jsx(z,{origin:"top-right",children:e.jsx(Re,{})}),parameters:{docs:{description:{story:"Toasts can appear from the top-right corner."}}}};function Ve(){const[t,s]=o.useState([]),r=o.useState({current:0})[0],c=a=>{const n=r.current++;s(l=>[...l,{id:n,type:a,text:`${a.charAt(0).toUpperCase()+a.slice(1)} toast #${n}`}]),setTimeout(()=>{s(l=>l.filter(u=>u.id!==n))},5e3)};return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"text-sm text-foreground-muted mb-2",children:["Active toasts: ",t.length]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(d,{onClick:()=>c("info"),children:"Add Info"}),e.jsx(d,{onClick:()=>c("success"),children:"Add Success"}),e.jsx(d,{onClick:()=>c("warn"),children:"Add Warning"}),e.jsx(d,{onClick:()=>c("error"),children:"Add Error"}),e.jsx(d,{variant:"secondary",onClick:()=>s([]),children:"Clear All"})]}),e.jsx(O,{origin:"bottom-right",children:t.map(a=>e.jsx(m,{type:a.type,text:a.text},a.id))})]})}const M={render:()=>e.jsx(Ve,{}),parameters:{docs:{description:{story:"Using ToastManager with declarative children (mirrors web component API)."}}}};var U,V,W;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is an informational message.'
  }
}`,...(W=(V=T.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,L,B;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toast type="info" text="This is an info toast." />
      <Toast type="success" text="This is a success toast." />
      <Toast type="warn" text="This is a warning toast." />
      <Toast type="error" text="This is an error toast." />
    </div>
}`,...(B=(L=w.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var Y,$,F;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'Your session will expire in 5 minutes.'
  }
}`,...(F=($=b.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,H,J;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'success',
    text: 'Your changes have been saved successfully.'
  }
}`,...(J=(H=j.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    text: 'Your subscription is about to expire.'
  }
}`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'Failed to save changes. Please try again.'
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,re,ae;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'This toast will stay until you dismiss it.',
    persistent: true
  }
}`,...(ae=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ne,ie;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'New version available.',
    action: <Button size="s" variant="secondary">
        Update
      </Button>
  }
}`,...(ie=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,le,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    type: 'success',
    text: 'File uploaded successfully.',
    close: <Button size="s" variant="subtle-secondary" icon={<Icon name="xmark" size="sm" />} aria-label="Close" />,
    persistent: true
  }
}`,...(de=(le=R.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ue,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    type: 'warn',
    text: 'Unsaved changes detected.',
    action: <Button size="s" variant="secondary">
        Save
      </Button>,
    close: <Button size="s" variant="subtle-secondary" icon={<Icon name="xmark" size="sm" />} aria-label="Close" />,
    persistent: true
  }
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,fe,ge;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    type: 'info',
    text: 'This is a very long toast message that demonstrates how the component handles text wrapping when the content exceeds the available width.'
  }
}`,...(ge=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,ye,ve;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <ToastProvider origin="bottom-right">
      <ToastDemo />
    </ToastProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Using ToastProvider and useToast hook to manage toasts programmatically.'
      }
    }
  }
}`,...(ve=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var Te,we,be;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <ToastProvider origin="top-right">
      <ToastDemo />
    </ToastProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Toasts can appear from the top-right corner.'
      }
    }
  }
}`,...(be=(we=I.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var je,Ae,Ce;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <ToastManagerDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Using ToastManager with declarative children (mirrors web component API).'
      }
    }
  }
}`,...(Ce=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};const Je=["Default","Types","Info","Success","Warning","Error","Persistent","WithAction","WithClose","WithActionAndClose","LongText","WithProvider","TopRightOrigin","DeclarativeManager"];export{M as DeclarativeManager,T as Default,C as Error,b as Info,P as LongText,N as Persistent,j as Success,I as TopRightOrigin,w as Types,A as Warning,k as WithAction,S as WithActionAndClose,R as WithClose,E as WithProvider,Je as __namedExportsOrder,He as default};
