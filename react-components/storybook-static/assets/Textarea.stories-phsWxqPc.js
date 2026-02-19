import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as K}from"./index-CsAwyYjM.js";import{r}from"./index-pP6CS22B.js";import{c as P}from"./index-EXTQMK5R.js";import{c as u}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const lr=P(["relative flex flex-col box-border w-full","bg-[var(--sinch-comp-textarea-color-default-background-initial)]","rounded-[var(--sinch-comp-textarea-shape-radius)]","pr-0.5 overflow-hidden"],{variants:{},defaultVariants:{}}),ir=P(["w-full px-3 py-2 box-border","bg-transparent outline-none border-none","resize-none","whitespace-pre-wrap break-words","font-[var(--sinch-comp-textarea-font-input)]","text-[var(--sinch-comp-textarea-color-default-text-initial)]","placeholder:text-[var(--sinch-comp-textarea-color-default-text-placeholder)]","placeholder:opacity-100","disabled:text-[var(--sinch-comp-textarea-color-disabled-text-initial)]"],{variants:{},defaultVariants:{}}),cr=P(["absolute inset-0 pointer-events-none","border border-[var(--sinch-comp-textarea-color-default-border-initial)]","rounded-[var(--sinch-comp-textarea-shape-radius)]","transition-colors"],{variants:{isFocused:{true:"border-[var(--sinch-comp-textarea-color-default-border-focus)] border-2",false:""},isInvalid:{true:"border-[var(--sinch-comp-textarea-color-invalid-border-initial)]",false:""},isDisabled:{true:"border-[var(--sinch-comp-textarea-color-disabled-border-initial)]",false:""}},compoundVariants:[{isFocused:!0,isInvalid:!0,className:"border-[var(--sinch-comp-textarea-color-default-border-focus)]"},{isDisabled:!0,className:"border-[var(--sinch-comp-textarea-color-disabled-border-initial)]"}],defaultVariants:{isFocused:!1,isInvalid:!1,isDisabled:!1}}),t=r.forwardRef(({className:s,value:n,defaultValue:Ka,placeholder:Pa,invalid:Y=!1,disabled:_=!1,readOnly:Ya=!1,required:_a=!1,rows:Ua,minRows:q,maxRows:V,resizable:l=!1,"aria-label":Za,bottomContent:U,onChange:A,onFocus:W,onBlur:H,onKeyDown:$a,...Ga},i)=>{const[Ja,Qa]=r.useState(Ka??""),[Z,$]=r.useState(!1),I=r.useRef(null),Xa=r.useCallback(a=>{I.current=a,typeof i=="function"?i(a):i!==null&&(i.current=a)},[i]),F=r.useRef({startY:0,startHeight:0}),[k,er]=r.useState(null),O=n!==void 0,G=O?n:Ja;r.useEffect(()=>{const a=I.current;if(a===null||l)return;a.style.height="auto";let o=0,c=1/0;if(q!==void 0&&q>0){const d=a.rows;a.rows=q,o=a.scrollHeight,a.rows=d}if(V!==void 0&&V>0){const d=a.rows;a.rows=V,c=a.scrollHeight,a.rows=d}const L=a.scrollHeight,B=Math.min(Math.max(L,o),c);a.style.height=`${B}px`},[G,q,V,l]),r.useEffect(()=>{const a=I.current;a===null||k===null||(a.style.height=`${k}px`)},[k]);const ar=r.useCallback(a=>{const o=a.target.value;O||Qa(o),A==null||A(o)},[O,A]),rr=r.useCallback(a=>{$(!0),W==null||W(a)},[W]),tr=r.useCallback(a=>{$(!1),H==null||H(a)},[H]),sr=r.useCallback(a=>{a.preventDefault();const o=I.current;if(o===null)return;F.current={startY:a.clientY,startHeight:o.getBoundingClientRect().height};const c=B=>{const d=B.clientY-F.current.startY,nr=Math.max(0,F.current.startHeight+d);er(nr)},L=()=>{document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",L)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",L)},[]),or=U!==void 0||l;return e.jsxs("div",{className:u(lr({}),s),children:[e.jsx("textarea",{ref:Xa,value:G,placeholder:Pa,disabled:_,readOnly:Ya,required:_a,rows:Ua,"aria-label":Za,"aria-invalid":Y,"aria-multiline":"true",className:u(ir({})),onChange:ar,onFocus:rr,onBlur:tr,onKeyDown:$a,...Ga}),e.jsx("div",{className:u(cr({isFocused:Z,isInvalid:Y&&!Z,isDisabled:_}))}),or&&e.jsx("div",{className:u("flex flex-row items-center gap-2 px-1 pt-3 pb-1",l&&"pr-[calc(var(--sinch-comp-textarea-size-resize-handle)+4px)]"),children:U}),l&&e.jsx("div",{className:u("absolute bottom-0 right-0 cursor-ns-resize","w-[var(--sinch-comp-textarea-size-resize-handle)]","h-[var(--sinch-comp-textarea-size-resize-handle)]"),onMouseDown:sr,"aria-hidden":"true",children:e.jsx("svg",{className:"block pointer-events-none fill-[var(--sinch-comp-textarea-color-default-border-initial)]",width:"16",height:"16",children:e.jsx("path",{d:"m14.833 4.724-9.61 9.61-.942-.944 9.61-9.609.942.943ZM15.443 10 10.5 14.943 9.557 14 14.5 9.057l.943.943Z"})})})]})});t.displayName="Textarea";t.__docgenInfo={description:`Textarea component for multi-line text input.

Supports controlled and uncontrolled patterns, auto-resize behavior,
error states, and a resizable drag handle.`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:"Controlled value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled usage"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:`Read-only state
@default false`,defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:`Required field
@default false`,defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of visible rows"},minRows:{required:!1,tsType:{name:"number"},description:"Minimum number of rows (auto-resize mode)"},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of rows (auto-resize mode)"},resizable:{required:!1,tsType:{name:"boolean"},description:`Whether the textarea is resizable by dragging
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},bottomContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content displayed in the bottom slot"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the new value string"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:"Key down handler"}},composes:["Omit","VariantProps"]};const fr={title:"Components/Textarea",component:t,tags:["autodocs"],args:{onChange:K(),onFocus:K(),onBlur:K()},argTypes:{invalid:{control:"boolean",description:"Invalid/error state"},disabled:{control:"boolean",description:"Disabled state"},readOnly:{control:"boolean",description:"Read-only state"},required:{control:"boolean",description:"Required field"},resizable:{control:"boolean",description:"Whether the textarea can be resized by dragging"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Controlled value"},rows:{control:"number",description:"Number of visible rows"},minRows:{control:"number",description:"Minimum number of rows (auto-resize mode)"},maxRows:{control:"number",description:"Maximum number of rows (auto-resize mode)"}},parameters:{docs:{description:{component:"A multi-line text input component supporting controlled and uncontrolled patterns, auto-resize behavior, error states, and a resizable drag handle."}}}},m={args:{placeholder:"Enter your message..."}},p={args:{value:`Hello World
This is a multi-line message.`}},x={args:{placeholder:"Enter your feedback here..."}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"2 rows"}),e.jsx(t,{rows:2,placeholder:"2 rows"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"4 rows"}),e.jsx(t,{rows:4,placeholder:"4 rows"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"6 rows"}),e.jsx(t,{rows:6,placeholder:"6 rows"})]})]})},f={args:{minRows:3,placeholder:"This textarea has a minimum of 3 rows and will auto-resize"}},g={args:{maxRows:5,placeholder:"This textarea will auto-resize up to 5 rows, then scroll"}},v={args:{minRows:2,maxRows:6,placeholder:"Auto-resize between 2 and 6 rows"}},b={args:{invalid:!0,placeholder:"Invalid textarea",value:"This content has an error"}},w={args:{disabled:!0,placeholder:"Disabled textarea",value:"Cannot edit this content"}},y={args:{readOnly:!0,value:"This is read-only content that cannot be modified."}},N={args:{resizable:!0,placeholder:"Drag the bottom-right corner to resize...",rows:4}},T={args:{placeholder:"Enter your message...",bottomContent:e.jsx("div",{className:"flex items-center gap-2 text-sm text-foreground-muted",children:e.jsx("span",{children:"0/500 characters"})})}},R={args:{resizable:!0,placeholder:"Enter your message...",rows:3,bottomContent:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{type:"button",className:"px-2 py-1 text-xs bg-surface-secondary rounded hover:bg-surface-secondary-hover",children:"Attach"})})}},j={render:()=>{const[s,n]=r.useState("");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{value:s,onChange:n,placeholder:"Type something...",rows:4}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",s||"(empty)"]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Character count: ",s.length]})]})}},z={args:{defaultValue:"Default value that can be edited",placeholder:"Type something..."}},E={args:{"aria-label":"Message content",placeholder:"Enter your message..."}},S={args:{required:!0,placeholder:"Required field *"}},D={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Default"}),e.jsx(t,{placeholder:"Default state",rows:2})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"With value"}),e.jsx(t,{value:"Some text content",rows:2})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Invalid"}),e.jsx(t,{invalid:!0,value:"Invalid content",rows:2})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Disabled"}),e.jsx(t,{disabled:!0,value:"Disabled content",rows:2})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Read-only"}),e.jsx(t,{readOnly:!0,value:"Read-only content",rows:2})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Resizable"}),e.jsx(t,{resizable:!0,placeholder:"Resizable textarea",rows:2})]})]})},C={render:()=>{const[s,n]=r.useState("");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-sm text-foreground-muted",children:"Type or paste multi-line content to see the textarea grow automatically."}),e.jsx(t,{value:s,onChange:n,minRows:2,maxRows:10,placeholder:"Start typing... the textarea will grow as you type"})]})}},M={render:()=>e.jsxs("form",{className:"flex flex-col gap-4 max-w-md",onSubmit:s=>s.preventDefault(),children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Subject"}),e.jsx("input",{type:"text",className:"px-3 py-2 border border-border rounded-md",placeholder:"Enter subject"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Message"}),e.jsx(t,{placeholder:"Enter your message...",rows:4,required:!0})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",children:"Send Message"})]})};var J,Q,X,ee,ae;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Default textarea with placeholder.",...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var re,te,se,oe,ne;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    value: 'Hello World\\nThis is a multi-line message.'
  }
}`,...(se=(te=p.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Textarea with a value.",...(ne=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var le,ie,ce,de,ue;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your feedback here...'
  }
}`,...(ce=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"Textarea with placeholder text.",...(ue=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var me,pe,xe,he,fe;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">2 rows</span>
        <Textarea rows={2} placeholder="2 rows" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">4 rows</span>
        <Textarea rows={4} placeholder="4 rows" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">6 rows</span>
        <Textarea rows={6} placeholder="6 rows" />
      </div>
    </div>
}`,...(xe=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:xe.source},description:{story:"Textarea with specific number of rows.",...(fe=(he=h.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var ge,ve,be,we,ye;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    minRows: 3,
    placeholder: 'This textarea has a minimum of 3 rows and will auto-resize'
  }
}`,...(be=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:be.source},description:{story:"Textarea with minRows - auto-resizes but has a minimum height.",...(ye=(we=f.parameters)==null?void 0:we.docs)==null?void 0:ye.description}}};var Ne,Te,Re,je,ze;g.parameters={...g.parameters,docs:{...(Ne=g.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    maxRows: 5,
    placeholder: 'This textarea will auto-resize up to 5 rows, then scroll'
  }
}`,...(Re=(Te=g.parameters)==null?void 0:Te.docs)==null?void 0:Re.source},description:{story:"Textarea with maxRows - auto-resizes up to a maximum height.",...(ze=(je=g.parameters)==null?void 0:je.docs)==null?void 0:ze.description}}};var Ee,Se,De,Ce,Me;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    minRows: 2,
    maxRows: 6,
    placeholder: 'Auto-resize between 2 and 6 rows'
  }
}`,...(De=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:De.source},description:{story:"Textarea with both minRows and maxRows constraints.",...(Me=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Me.description}}};var qe,Ve,Ae,We,He;b.parameters={...b.parameters,docs:{...(qe=b.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Invalid textarea',
    value: 'This content has an error'
  }
}`,...(Ae=(Ve=b.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source},description:{story:"Textarea in error/invalid state.",...(He=(We=b.parameters)==null?void 0:We.docs)==null?void 0:He.description}}};var Ie,Le,Fe,ke,Oe;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
    value: 'Cannot edit this content'
  }
}`,...(Fe=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source},description:{story:"Disabled textarea.",...(Oe=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Oe.description}}};var Be,Ke,Pe,Ye,_e;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'This is read-only content that cannot be modified.'
  }
}`,...(Pe=(Ke=y.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source},description:{story:"Read-only textarea.",...(_e=(Ye=y.parameters)==null?void 0:Ye.docs)==null?void 0:_e.description}}};var Ue,Ze,$e,Ge,Je;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    resizable: true,
    placeholder: 'Drag the bottom-right corner to resize...',
    rows: 4
  }
}`,...($e=(Ze=N.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source},description:{story:"Resizable textarea with drag handle.",...(Je=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Je.description}}};var Qe,Xe,ea,aa,ra;T.parameters={...T.parameters,docs:{...(Qe=T.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...',
    bottomContent: <div className="flex items-center gap-2 text-sm text-foreground-muted">
        <span>0/500 characters</span>
      </div>
  }
}`,...(ea=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source},description:{story:"Textarea with bottom content slot.",...(ra=(aa=T.parameters)==null?void 0:aa.docs)==null?void 0:ra.description}}};var ta,sa,oa,na,la;R.parameters={...R.parameters,docs:{...(ta=R.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    resizable: true,
    placeholder: 'Enter your message...',
    rows: 3,
    bottomContent: <div className="flex items-center gap-2">
        <button type="button" className="px-2 py-1 text-xs bg-surface-secondary rounded hover:bg-surface-secondary-hover">
          Attach
        </button>
      </div>
  }
}`,...(oa=(sa=R.parameters)==null?void 0:sa.docs)==null?void 0:oa.source},description:{story:"Resizable textarea with bottom content.",...(la=(na=R.parameters)==null?void 0:na.docs)==null?void 0:la.description}}};var ia,ca,da,ua,ma;j.parameters={...j.parameters,docs:{...(ia=j.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4">
        <Textarea value={value} onChange={setValue} placeholder="Type something..." rows={4} />
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(empty)'}
        </p>
        <p className="text-sm text-foreground-muted">
          Character count: {value.length}
        </p>
      </div>;
  }
}`,...(da=(ca=j.parameters)==null?void 0:ca.docs)==null?void 0:da.source},description:{story:"Controlled textarea example showing state management.",...(ma=(ua=j.parameters)==null?void 0:ua.docs)==null?void 0:ma.description}}};var pa,xa,ha,fa,ga;z.parameters={...z.parameters,docs:{...(pa=z.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value that can be edited',
    placeholder: 'Type something...'
  }
}`,...(ha=(xa=z.parameters)==null?void 0:xa.docs)==null?void 0:ha.source},description:{story:"Uncontrolled textarea with default value.",...(ga=(fa=z.parameters)==null?void 0:fa.docs)==null?void 0:ga.description}}};var va,ba,wa,ya,Na;E.parameters={...E.parameters,docs:{...(va=E.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Message content',
    placeholder: 'Enter your message...'
  }
}`,...(wa=(ba=E.parameters)==null?void 0:ba.docs)==null?void 0:wa.source},description:{story:"Textarea with aria-label for accessibility.",...(Na=(ya=E.parameters)==null?void 0:ya.docs)==null?void 0:Na.description}}};var Ta,Ra,ja,za,Ea;S.parameters={...S.parameters,docs:{...(Ta=S.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: 'Required field *'
  }
}`,...(ja=(Ra=S.parameters)==null?void 0:Ra.docs)==null?void 0:ja.source},description:{story:"Required textarea field.",...(Ea=(za=S.parameters)==null?void 0:za.docs)==null?void 0:Ea.description}}};var Sa,Da,Ca,Ma,qa;D.parameters={...D.parameters,docs:{...(Sa=D.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Default</span>
        <Textarea placeholder="Default state" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">With value</span>
        <Textarea value="Some text content" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Invalid</span>
        <Textarea invalid value="Invalid content" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Disabled</span>
        <Textarea disabled value="Disabled content" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Read-only</span>
        <Textarea readOnly value="Read-only content" rows={2} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Resizable</span>
        <Textarea resizable placeholder="Resizable textarea" rows={2} />
      </div>
    </div>
}`,...(Ca=(Da=D.parameters)==null?void 0:Da.docs)==null?void 0:Ca.source},description:{story:"All states comparison.",...(qa=(Ma=D.parameters)==null?void 0:Ma.docs)==null?void 0:qa.description}}};var Va,Aa,Wa,Ha,Ia;C.parameters={...C.parameters,docs:{...(Va=C.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4">
        <p className="text-sm text-foreground-muted">
          Type or paste multi-line content to see the textarea grow automatically.
        </p>
        <Textarea value={value} onChange={setValue} minRows={2} maxRows={10} placeholder="Start typing... the textarea will grow as you type" />
      </div>;
  }
}`,...(Wa=(Aa=C.parameters)==null?void 0:Aa.docs)==null?void 0:Wa.source},description:{story:"Auto-resize demonstration.",...(Ia=(Ha=C.parameters)==null?void 0:Ha.docs)==null?void 0:Ia.description}}};var La,Fa,ka,Oa,Ba;M.parameters={...M.parameters,docs:{...(La=M.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-4 max-w-md" onSubmit={e => e.preventDefault()}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Subject</label>
        <input type="text" className="px-3 py-2 border border-border rounded-md" placeholder="Enter subject" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Message</label>
        <Textarea placeholder="Enter your message..." rows={4} required />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover">
        Send Message
      </button>
    </form>
}`,...(ka=(Fa=M.parameters)==null?void 0:Fa.docs)==null?void 0:ka.source},description:{story:"Form example with textarea.",...(Ba=(Oa=M.parameters)==null?void 0:Oa.docs)==null?void 0:Ba.description}}};const gr=["Default","WithValue","WithPlaceholder","WithRows","WithMinRows","WithMaxRows","WithMinAndMaxRows","Invalid","Disabled","ReadOnly","Resizable","WithBottomContent","ResizableWithBottomContent","Controlled","Uncontrolled","WithAriaLabel","Required","AllStates","AutoResize","FormExample"];export{D as AllStates,C as AutoResize,j as Controlled,m as Default,w as Disabled,M as FormExample,b as Invalid,y as ReadOnly,S as Required,N as Resizable,R as ResizableWithBottomContent,z as Uncontrolled,E as WithAriaLabel,T as WithBottomContent,g as WithMaxRows,v as WithMinAndMaxRows,f as WithMinRows,x as WithPlaceholder,h as WithRows,p as WithValue,gr as __namedExportsOrder,fr as default};
