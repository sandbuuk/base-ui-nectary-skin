import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{c as ae}from"./index-EXTQMK5R.js";import{r as ne}from"./index-pP6CS22B.js";import{c as te}from"./cn-BLSKlp9E.js";import{I as oe}from"./Icon-3RA0aubP.js";import{S as ie}from"./Spinner-Bh5BG8Cg.js";import{T as ce}from"./Text-cs3GWPsb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const le=ae(["flex","flex-row","items-start","py-3","px-4","box-border","min-h-[48px]","min-w-[148px]","rounded-[var(--sinch-comp-file-status-shape-radius)]"],{variants:{type:{pending:"bg-[var(--sinch-comp-file-status-color-pending-background)]",loading:"bg-[var(--sinch-comp-file-status-color-loading-background)]",progress:"bg-[var(--sinch-comp-file-status-color-progress-background)]",success:"bg-[var(--sinch-comp-file-status-color-success-background)]",error:"bg-[var(--sinch-comp-file-status-color-error-background)]"}},defaultVariants:{type:"pending"}}),de={pending:"var(--sinch-comp-file-status-color-pending-icon)",loading:"var(--sinch-comp-file-status-color-loading-icon)",progress:"var(--sinch-comp-file-status-color-progress-icon)",success:"var(--sinch-comp-file-status-color-success-icon)",error:"var(--sinch-comp-file-status-color-error-icon)"},pe={pending:"var(--sinch-comp-file-status-color-pending-text)",loading:"var(--sinch-comp-file-status-color-loading-text)",progress:"var(--sinch-comp-file-status-color-progress-text)",success:"var(--sinch-comp-file-status-color-success-text)",error:"var(--sinch-comp-file-status-color-error-text)"},me={pending:"fa-clipboard-question",loading:null,progress:"fa-file-lines",success:"circle-check",error:"octagon-exclamation"},s=ne.forwardRef(({className:g,type:r="pending",filename:Y,content:f,action:x,...Z},$)=>{const b=de[r],ee=pe[r],se=me[r],re=f!=null;return e.jsxs("div",{ref:$,className:te(le({type:r}),g),...Z,children:[r==="loading"?e.jsx(ie,{size:"m",style:{color:b}}):e.jsx(oe,{name:se,iconsVersion:"2",size:"md",style:{color:b}}),e.jsxs("div",{className:"flex flex-col gap-2 flex-1 min-w-0 min-h-[24px] ml-4",children:[e.jsx(ce,{type:"m",ellipsis:!0,emphasized:re,style:{color:ee},children:Y}),f]}),x&&e.jsx("div",{className:"flex gap-1 h-8 -mt-1 -mb-1",children:x})]})});s.displayName="FileStatus";s.__docgenInfo={description:`FileStatus component for displaying file upload/processing status.

Shows a file status indicator with:
- Status-specific icon (spinner for loading, icons for other states)
- Filename with appropriate text color
- Optional additional content
- Optional action buttons

@example
\`\`\`tsx
// Pending file
<FileStatus type="pending" filename="document.pdf" />

// Loading file with action
<FileStatus
  type="loading"
  filename="uploading.jpg"
  action={<button>Cancel</button>}
/>

// Error with content
<FileStatus
  type="error"
  filename="failed.doc"
  content="Upload failed. Please try again."
/>
\`\`\``,methods:[],displayName:"FileStatus",props:{type:{required:!1,tsType:{name:"union",raw:"'pending' | 'loading' | 'progress' | 'success' | 'error'",elements:[{name:"literal",value:"'pending'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'progress'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:`File status type determines the background color and icon
@default 'pending'`,defaultValue:{value:"'pending'",computed:!1}},filename:{required:!1,tsType:{name:"string"},description:"File name to display"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional content slot (additional info below filename)"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action slot (e.g., buttons)"}},composes:["Omit","VariantProps"]};const _e={title:"Components/FileStatus",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["pending","loading","progress","success","error"],description:"File status type determines the background color and icon"},filename:{control:"text",description:"File name to display"},content:{control:"text",description:"Optional content slot (additional info below filename)"}},args:{filename:"document.pdf",type:"pending"}},a={args:{filename:"document.pdf",type:"pending"}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(s,{type:"pending",filename:"waiting.pdf"}),e.jsx(s,{type:"loading",filename:"uploading.jpg"}),e.jsx(s,{type:"progress",filename:"processing.doc"}),e.jsx(s,{type:"success",filename:"complete.png"}),e.jsx(s,{type:"error",filename:"failed.txt"})]})},t={args:{type:"pending",filename:"waiting_for_review.pdf"}},o={args:{type:"loading",filename:"uploading_file.jpg"}},i={args:{type:"progress",filename:"processing_document.doc"}},c={args:{type:"success",filename:"upload_complete.png"}},l={args:{type:"error",filename:"upload_failed.txt"}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(s,{type:"success",filename:"report.pdf",content:e.jsx("span",{className:"text-sm text-foreground-muted",children:"2.4 MB - Uploaded 2 minutes ago"})}),e.jsx(s,{type:"error",filename:"image.jpg",content:e.jsx("span",{className:"text-sm text-danger",children:"File size exceeds limit"})}),e.jsx(s,{type:"progress",filename:"video.mp4",content:e.jsx("span",{className:"text-sm text-foreground-muted",children:"Processing: 45%"})})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(s,{type:"loading",filename:"uploading.pdf",action:e.jsx("button",{className:"px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary",children:"Cancel"})}),e.jsx(s,{type:"success",filename:"complete.pdf",action:e.jsx("button",{className:"px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary",children:"Download"})}),e.jsx(s,{type:"error",filename:"failed.pdf",action:e.jsx("button",{className:"px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary",children:"Retry"})})]})},m={args:{type:"success",filename:"annual_report_2024.pdf",content:e.jsx("span",{className:"text-sm text-foreground-muted",children:"5.2 MB - Uploaded just now"}),action:e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{className:"px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary",children:"View"}),e.jsx("button",{className:"px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary",children:"Delete"})]})}},u={args:{type:"success",filename:"this_is_a_very_long_filename_that_should_be_truncated_with_ellipsis_when_it_overflows.pdf"},decorators:[g=>e.jsx("div",{className:"max-w-xs",children:e.jsx(g,{})})]};var y,h,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    filename: 'document.pdf',
    type: 'pending'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var _,j,w;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <FileStatus type="pending" filename="waiting.pdf" />
      <FileStatus type="loading" filename="uploading.jpg" />
      <FileStatus type="progress" filename="processing.doc" />
      <FileStatus type="success" filename="complete.png" />
      <FileStatus type="error" filename="failed.txt" />
    </div>
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,S,F;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'pending',
    filename: 'waiting_for_review.pdf'
  }
}`,...(F=(S=t.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var C,R,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'loading',
    filename: 'uploading_file.jpg'
  }
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var T,k,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'progress',
    filename: 'processing_document.doc'
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var M,O,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'success',
    filename: 'upload_complete.png'
  }
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var W,D,E;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'error',
    filename: 'upload_failed.txt'
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var q,z,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <FileStatus type="success" filename="report.pdf" content={<span className="text-sm text-foreground-muted">2.4 MB - Uploaded 2 minutes ago</span>} />
      <FileStatus type="error" filename="image.jpg" content={<span className="text-sm text-danger">File size exceeds limit</span>} />
      <FileStatus type="progress" filename="video.mp4" content={<span className="text-sm text-foreground-muted">Processing: 45%</span>} />
    </div>
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,B,I;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <FileStatus type="loading" filename="uploading.pdf" action={<button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Cancel
          </button>} />
      <FileStatus type="success" filename="complete.pdf" action={<button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Download
          </button>} />
      <FileStatus type="error" filename="failed.pdf" action={<button className="px-3 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
            Retry
          </button>} />
    </div>
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'success',
    filename: 'annual_report_2024.pdf',
    content: <span className="text-sm text-foreground-muted">5.2 MB - Uploaded just now</span>,
    action: <div className="flex gap-1">
        <button className="px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
          View
        </button>
        <button className="px-2 py-1 text-sm bg-transparent border border-border rounded hover:bg-surface-secondary">
          Delete
        </button>
      </div>
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'success',
    filename: 'this_is_a_very_long_filename_that_should_be_truncated_with_ellipsis_when_it_overflows.pdf'
  },
  decorators: [Story => <div className="max-w-xs">
        <Story />
      </div>]
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const je=["Default","AllTypes","Pending","Loading","Progress","Success","Error","WithContent","WithAction","WithContentAndAction","LongFilename"];export{n as AllTypes,a as Default,l as Error,o as Loading,u as LongFilename,t as Pending,i as Progress,c as Success,p as WithAction,d as WithContent,m as WithContentAndAction,je as __namedExportsOrder,_e as default};
