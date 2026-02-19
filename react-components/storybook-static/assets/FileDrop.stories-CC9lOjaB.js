import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as O}from"./index-CsAwyYjM.js";import{r as d}from"./index-pP6CS22B.js";import{c as W}from"./index-EXTQMK5R.js";import{c as w}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Le=(c,t)=>{if(t===null)return!0;const o=t.split(/\s*,\s*/);return c.every(i=>o.some(r=>r.startsWith(".")?i.name.endsWith(r):r==="image/*"?i.type.startsWith("image/"):r==="video/*"?i.type.startsWith("video/"):r==="audio/*"?i.type.startsWith("audio/"):r===i.type))},Ue=(c,t)=>{if(t===null)return!0;const o=t.split(/\s*,\s*/);return c.every(i=>o.some(r=>r==="image/*"?i.type.startsWith("image/"):r==="video/*"?i.type.startsWith("video/"):r==="audio/*"?i.type.startsWith("audio/"):r===i.type))},P=(c,t)=>t===null||t<=0?!0:c.every(o=>o.size<=t),Ke=W(["relative flex flex-row flex-wrap justify-center content-center gap-2","min-h-[148px] min-w-[148px] box-border p-4","rounded-[var(--sinch-comp-file-drop-shape-radius)]","bg-[var(--sinch-comp-file-drop-color-default-background-initial)]"],{variants:{isInvalid:{true:"bg-[var(--sinch-comp-file-drop-color-invalid-background-initial)]",false:""},isDisabled:{true:"bg-[var(--sinch-comp-file-drop-color-disabled-background-initial)]",false:""},isDragging:{true:"",false:""},isDragValid:{true:"bg-[var(--sinch-comp-file-drop-color-default-background-active)]",false:""},isDragInvalid:{true:"bg-[var(--sinch-comp-file-drop-color-invalid-background-active)]",false:""}},defaultVariants:{isInvalid:!1,isDisabled:!1,isDragging:!1,isDragValid:!1,isDragInvalid:!1}}),He=W(["absolute inset-0 pointer-events-none","border border-dashed border-[var(--sinch-comp-file-drop-color-default-border-initial)]","rounded-[var(--sinch-comp-file-drop-shape-radius)]","transition-colors"],{variants:{isInvalid:{true:"border-[var(--sinch-comp-file-drop-color-invalid-border-initial)]",false:""},isDisabled:{true:"border-[var(--sinch-comp-file-drop-color-disabled-border-initial)]",false:""},isDragging:{true:"pointer-events-auto",false:""},isDragValid:{true:"border-[var(--sinch-comp-file-drop-color-default-border-active)] border-2 border-solid",false:""},isDragInvalid:{true:"border-[var(--sinch-comp-file-drop-color-invalid-border-active)] border-2 border-solid",false:""}},defaultVariants:{isInvalid:!1,isDisabled:!1,isDragging:!1,isDragValid:!1,isDragInvalid:!1}}),Ge=W(["self-center text-center","font-[var(--sinch-comp-file-drop-font-placeholder)]","text-[var(--sinch-comp-file-drop-color-default-placeholder-initial)]"],{variants:{isDisabled:{true:"text-[var(--sinch-comp-file-drop-color-disabled-placeholder-initial)]",false:""},isDragValid:{true:"text-[var(--sinch-comp-file-drop-color-default-placeholder-active)]",false:""},isDragInvalid:{true:"text-[var(--sinch-comp-file-drop-color-invalid-placeholder-active)]",false:""}},defaultVariants:{isDisabled:!1,isDragValid:!1,isDragInvalid:!1}}),m=d.forwardRef(({className:c,multiple:t=!1,accept:o,maxSize:i,disabled:r=!1,invalid:f=!1,placeholder:I,buttonText:N="Choose file",onChange:l,onInvalid:s,children:g,...Be},Ee)=>{const A=d.useRef(null),[p,z]=d.useState(!1),[C,k]=d.useState(!1),V=p&&!C,Oe=d.useCallback(a=>{var E;if(a.stopPropagation(),a.preventDefault(),r)return;const n=(E=a.dataTransfer)==null?void 0:E.items;let u=!1;if(n!==void 0&&n.length>0){const _e=Array.from(n);u=Ue(_e,o??null)}z(!0),k(u)},[r,o]),Pe=d.useCallback(a=>{a.stopPropagation(),a.preventDefault(),z(!1),k(!1)},[]),qe=d.useCallback(a=>{a.stopPropagation(),a.preventDefault()},[]),Me=d.useCallback(a=>{if(a.stopPropagation(),a.preventDefault(),z(!1),k(!1),r)return;const n=a.dataTransfer;if(n===null||n.files.length===0)return;if(!t&&n.files.length>1){s==null||s("multiple");return}const u=Array.from(n.files);if(!Le(u,o??null)){s==null||s("accept");return}if(!P(u,i??null)){s==null||s("size");return}l==null||l(u)},[r,t,o,i,l,s]),Re=d.useCallback(a=>{const n=a.target.files;if(n===null||n.length===0)return;const u=Array.from(n);if(!P(u,i??null)){s==null||s("size"),a.target.value="";return}l==null||l(u),a.target.value=""},[i,l,s]),B=d.useCallback(()=>{var a;r||(a=A.current)==null||a.click()},[r]);return e.jsxs("div",{ref:Ee,className:w(Ke({isInvalid:f,isDisabled:r,isDragging:p,isDragValid:p&&C,isDragInvalid:p&&V}),c),onDragEnter:Oe,onDragLeave:Pe,onDragOver:qe,onDrop:Me,...Be,children:[I!==void 0&&e.jsx("span",{className:w(Ge({isDisabled:r,isDragValid:p&&C,isDragInvalid:p&&V})),"aria-hidden":"true",children:I}),e.jsx("input",{ref:A,type:"file",className:"sr-only",multiple:t,accept:o,disabled:r,onChange:Re,"aria-label":"File input"}),g!==void 0?e.jsx("div",{onClick:B,children:g}):e.jsx("button",{type:"button",onClick:B,disabled:r,className:w("inline-flex items-center justify-center","px-4 py-2 rounded-md","bg-surface-primary border border-border","text-foreground font-sans text-sm","hover:bg-surface-primary-hover","disabled:opacity-50 disabled:cursor-not-allowed"),children:N}),e.jsx("div",{className:w(He({isInvalid:f,isDisabled:r,isDragging:p,isDragValid:p&&C,isDragInvalid:p&&V}))})]})});m.displayName="FileDrop";m.__docgenInfo={description:`FileDrop component for drag-and-drop file uploads.

Provides a drop zone for files with validation for file type, count, and size.
Also includes a file picker button for traditional file selection.`,methods:[],displayName:"FileDrop",props:{multiple:{required:!1,tsType:{name:"boolean"},description:`Allows to choose multiple files
@default false`,defaultValue:{value:"false",computed:!1}},accept:{required:!1,tsType:{name:"string"},description:`A unique file type specifier
@see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers`},maxSize:{required:!1,tsType:{name:"number"},description:"Max file size in bytes"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text displayed in the drop zone"},buttonText:{required:!1,tsType:{name:"string"},description:"Button text (passed to children slot)",defaultValue:{value:"'Choose file'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Change handler - receives the selected files"},onInvalid:{required:!1,tsType:{name:"signature",type:"function",raw:"(type: FileDropInvalidType) => void",signature:{arguments:[{type:{name:"union",raw:"'accept' | 'multiple' | 'size'",elements:[{name:"literal",value:"'accept'"},{name:"literal",value:"'multiple'"},{name:"literal",value:"'size'"}]},name:"type"}],return:{name:"void"}}},description:"Invalid handler - receives the type of validation error"}},composes:["Omit","VariantProps"]};const er={title:"Components/FileDrop",component:m,tags:["autodocs"],args:{onChange:O(),onInvalid:O()},argTypes:{multiple:{control:"boolean",description:"Allow multiple file selection"},accept:{control:"text",description:'File type specifier (e.g., "image/*", ".pdf")'},maxSize:{control:"number",description:"Maximum file size in bytes"},disabled:{control:"boolean",description:"Disabled state"},invalid:{control:"boolean",description:"Invalid/error state"},placeholder:{control:"text",description:"Placeholder text"},buttonText:{control:"text",description:"Button text"}}},h={args:{placeholder:"Drag and drop files here",buttonText:"Choose file"}},v={args:{placeholder:"Drop images here",buttonText:"Select images",accept:"image/*"}},b={args:{placeholder:"Drop multiple files here",buttonText:"Select files",multiple:!0}},x={args:{placeholder:"Max file size: 1MB",buttonText:"Choose file",maxSize:1024*1024}},y={args:{placeholder:"File upload disabled",buttonText:"Choose file",disabled:!0}},D={args:{placeholder:"Please upload a valid file",buttonText:"Choose file",invalid:!0}},F={args:{placeholder:"PDF and Word documents only",buttonText:"Select document",accept:".pdf,.doc,.docx,application/pdf,application/msword"}},T={args:{placeholder:"Or drag files here"},render:c=>e.jsx(m,{...c,children:e.jsx("button",{style:{padding:"12px 24px",backgroundColor:"#4F46E5",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:500},children:"Upload Files"})})},S={args:{placeholder:"Drag files here or click to browse",buttonText:"Browse files",multiple:!0},render:function(t){const[o,i]=d.useState([]),[r,f]=d.useState(null),I=l=>{var s;i(l),f(null),(s=t.onChange)==null||s.call(t,l)},N=l=>{var g;f({accept:"File type not accepted",multiple:"Only one file allowed",size:"File too large"}[l]),(g=t.onInvalid)==null||g.call(t,l)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{...t,onChange:I,onInvalid:N,invalid:r!==null}),r!==null&&e.jsx("p",{className:"text-sm text-red-500",children:r}),o.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Selected files:"}),e.jsx("ul",{className:"text-sm space-y-1",children:o.map((l,s)=>e.jsxs("li",{className:"text-foreground-muted",children:[l.name," (",(l.size/1024).toFixed(1)," KB)"]},s))})]})]})}},j={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Default"}),e.jsx(m,{placeholder:"Default state",buttonText:"Choose file"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Invalid"}),e.jsx(m,{placeholder:"Invalid state",buttonText:"Choose file",invalid:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Disabled"}),e.jsx(m,{placeholder:"Disabled state",buttonText:"Choose file",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Images Only"}),e.jsx(m,{placeholder:"Images only",buttonText:"Select image",accept:"image/*"})]})]})};var q,M,R,_,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Drag and drop files here',
    buttonText: 'Choose file'
  }
}`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Default file drop zone with placeholder text",...(L=(_=h.parameters)==null?void 0:_.docs)==null?void 0:L.description}}};var U,K,H,G,J;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Drop images here',
    buttonText: 'Select images',
    accept: 'image/*'
  }
}`,...(H=(K=v.parameters)==null?void 0:K.docs)==null?void 0:H.source},description:{story:"File drop that accepts only images",...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,X,Y,Z,$;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    placeholder: 'Drop multiple files here',
    buttonText: 'Select files',
    multiple: true
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"File drop that accepts multiple files",...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,re,te,se,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    placeholder: 'Max file size: 1MB',
    buttonText: 'Choose file',
    maxSize: 1024 * 1024 // 1MB
  }
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"File drop with size limit (1MB)",...(ae=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var ie,le,oe,ne,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    placeholder: 'File upload disabled',
    buttonText: 'Choose file',
    disabled: true
  }
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"File drop in disabled state",...(de=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:de.description}}};var ce,pe,ue,me,fe;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    placeholder: 'Please upload a valid file',
    buttonText: 'Choose file',
    invalid: true
  }
}`,...(ue=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"File drop in invalid/error state",...(fe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:fe.description}}};var ge,he,ve,be,xe;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    placeholder: 'PDF and Word documents only',
    buttonText: 'Select document',
    accept: '.pdf,.doc,.docx,application/pdf,application/msword'
  }
}`,...(ve=(he=F.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"File drop accepting specific file types",...(xe=(be=F.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var ye,De,Fe,Te,Se;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    placeholder: 'Or drag files here'
  },
  render: args => <FileDrop {...args}>
      <button style={{
      padding: '12px 24px',
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 500
    }}>
        Upload Files
      </button>
    </FileDrop>
}`,...(Fe=(De=T.parameters)==null?void 0:De.docs)==null?void 0:Fe.source},description:{story:"File drop with custom children instead of default button",...(Se=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Se.description}}};var je,Ie,Ce,we,Ne;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    placeholder: 'Drag files here or click to browse',
    buttonText: 'Browse files',
    multiple: true
  },
  render: function InteractiveStory(args) {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);
    const handleChange = (newFiles: File[]) => {
      setFiles(newFiles);
      setError(null);
      args.onChange?.(newFiles);
    };
    const handleInvalid = (type: FileDropInvalidType) => {
      const messages: Record<FileDropInvalidType, string> = {
        accept: 'File type not accepted',
        multiple: 'Only one file allowed',
        size: 'File too large'
      };
      setError(messages[type]);
      args.onInvalid?.(type);
    };
    return <div className="space-y-4">
        <FileDrop {...args} onChange={handleChange} onInvalid={handleInvalid} invalid={error !== null} />

        {error !== null && <p className="text-sm text-red-500">{error}</p>}

        {files.length > 0 && <div className="space-y-2">
            <p className="text-sm font-medium">Selected files:</p>
            <ul className="text-sm space-y-1">
              {files.map((file, index) => <li key={index} className="text-foreground-muted">
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>)}
            </ul>
          </div>}
      </div>;
  }
}`,...(Ce=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source},description:{story:"Interactive example showing file selection feedback",...(Ne=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Ne.description}}};var ze,ke,Ve,We,Ae;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <FileDrop placeholder="Default state" buttonText="Choose file" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Invalid</p>
        <FileDrop placeholder="Invalid state" buttonText="Choose file" invalid />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Disabled</p>
        <FileDrop placeholder="Disabled state" buttonText="Choose file" disabled />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Images Only</p>
        <FileDrop placeholder="Images only" buttonText="Select image" accept="image/*" />
      </div>
    </div>
}`,...(Ve=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source},description:{story:"All states side by side for comparison",...(Ae=(We=j.parameters)==null?void 0:We.docs)==null?void 0:Ae.description}}};const rr=["Default","ImagesOnly","MultipleFiles","WithSizeLimit","Disabled","Invalid","SpecificFileTypes","WithCustomButton","Interactive","AllStates"];export{j as AllStates,h as Default,y as Disabled,v as ImagesOnly,S as Interactive,D as Invalid,b as MultipleFiles,F as SpecificFileTypes,T as WithCustomButton,x as WithSizeLimit,rr as __namedExportsOrder,er as default};
