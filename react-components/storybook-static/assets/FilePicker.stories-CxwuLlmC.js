import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as j}from"./index-CsAwyYjM.js";import{r as n}from"./index-pP6CS22B.js";import{c as Y}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=(r,t)=>t==null||t<=0?!0:r.every(i=>i.size<=t),s=n.forwardRef(({className:r,children:t,multiple:i,accept:l,maxSize:a,onChange:o,onInvalid:d,...J},Q)=>{const b=n.useRef(null),V=n.useCallback(()=>{var c;(c=b.current)==null||c.click()},[]),X=n.useCallback(c=>{const v=c.target.files;if(v===null)return;const k=Array.from(v);if(c.target.value="",!Z(k,a)){d==null||d("size");return}o==null||o(k)},[a,o,d]);return e.jsxs("div",{ref:Q,className:Y("inline-block",r),...J,children:[e.jsx("input",{ref:b,type:"file",className:"hidden",multiple:i,accept:l,onChange:X}),e.jsx("div",{onClick:V,className:"cursor-pointer",children:t})]})});s.displayName="FilePicker";s.__docgenInfo={description:`FilePicker wraps any clickable element and opens the native file picker when clicked.
It handles file selection, validation, and calls the appropriate callbacks.`,methods:[],displayName:"FilePicker",props:{multiple:{required:!1,tsType:{name:"boolean"},description:"Allows to choose multiple files"},accept:{required:!1,tsType:{name:"string"},description:'A unique file type specifier (e.g., ".jpg,.png", "image/*")'},maxSize:{required:!1,tsType:{name:"number"},description:"Max file size in bytes"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Called when valid files are selected"},onInvalid:{required:!1,tsType:{name:"signature",type:"function",raw:"(type: FilePickerInvalidType) => void",signature:{arguments:[{type:{name:"literal",value:"'size'"},name:"type"}],return:{name:"void"}}},description:"Called when validation fails (e.g., file too large)"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to render as the click target (button, etc.)"}},composes:["Omit"]};const oe={title:"Components/FilePicker",component:s,tags:["autodocs"],args:{onChange:j(),onInvalid:j()},argTypes:{multiple:{control:"boolean",description:"Allow selecting multiple files"},accept:{control:"text",description:'File types to accept (e.g., ".jpg,.png", "image/*")'},maxSize:{control:"number",description:"Maximum file size in bytes"}}},$=()=>e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Choose File"}),p={render:r=>e.jsx(s,{...r,children:e.jsx($,{})})},m={args:{multiple:!0},render:r=>e.jsx(s,{...r,children:e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Choose Multiple Files"})})},u={args:{accept:"image/*"},render:r=>e.jsx(s,{...r,children:e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Choose Images"})})},g={args:{accept:".pdf"},render:r=>e.jsx(s,{...r,children:e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Choose PDF"})})},h={args:{maxSize:1024*1024},render:r=>e.jsx(s,{...r,children:e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Choose File (Max 1MB)"})})},ee=()=>{const[r,t]=n.useState([]),[i,l]=n.useState(null);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{multiple:!0,maxSize:5*1024*1024,onChange:a=>{t(a),l(null)},onInvalid:a=>{a==="size"&&l("File exceeds maximum size of 5MB")},children:e.jsx("button",{className:"bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover",children:"Select Files"})}),i!==null&&e.jsx("div",{className:"text-danger text-sm",children:i}),r.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm text-foreground-muted",children:"Selected files:"}),e.jsx("ul",{className:"list-disc list-inside text-sm",children:r.map((a,o)=>e.jsxs("li",{children:[a.name," (",(a.size/1024).toFixed(1)," KB)"]},o))})]})]})},x={render:()=>e.jsx(ee,{})},y={render:r=>e.jsx(s,{...r,accept:"image/*",children:e.jsx("div",{className:"border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors",children:e.jsx("div",{className:"text-foreground-muted",children:"Click to upload an image"})})})},f={render:r=>e.jsx(s,{...r,children:e.jsx("button",{className:"w-10 h-10 rounded-full bg-surface-secondary flex items-center justify-center hover:bg-surface-secondary-hover","aria-label":"Upload file",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]})})})};var F,N,w;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <FilePicker {...args}>
      <SimpleButton />
    </FilePicker>
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var P,C,S;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: args => <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose Multiple Files
      </button>
    </FilePicker>
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var M,z,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    accept: 'image/*'
  },
  render: args => <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose Images
      </button>
    </FilePicker>
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var T,A,B;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    accept: '.pdf'
  },
  render: args => <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose PDF
      </button>
    </FilePicker>
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var q,D,E;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    maxSize: 1024 * 1024 // 1MB
  },
  render: args => <FilePicker {...args}>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-hover">
        Choose File (Max 1MB)
      </button>
    </FilePicker>
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,R,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <InteractiveExample />
}`,...(W=(R=x.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,H,O;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <FilePicker {...args} accept="image/*">
      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
        <div className="text-foreground-muted">
          Click to upload an image
        </div>
      </div>
    </FilePicker>
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,K,G;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <FilePicker {...args}>
      <button className="w-10 h-10 rounded-full bg-surface-secondary flex items-center justify-center hover:bg-surface-secondary-hover" aria-label="Upload file">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      </button>
    </FilePicker>
}`,...(G=(K=f.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const ne=["Default","Multiple","AcceptImages","AcceptPDF","WithMaxSize","Interactive","CustomTrigger","IconTrigger"];export{u as AcceptImages,g as AcceptPDF,y as CustomTrigger,p as Default,f as IconTrigger,x as Interactive,m as Multiple,h as WithMaxSize,ne as __namedExportsOrder,oe as default};
