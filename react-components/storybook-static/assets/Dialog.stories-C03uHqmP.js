import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as De}from"./index-CsAwyYjM.js";import{r as o}from"./index-pP6CS22B.js";import{B as a}from"./Button-SrxEgsda.js";import{I as R}from"./Icon-3RA0aubP.js";import{T as i}from"./Text-cs3GWPsb.js";import{c as pe}from"./index-EXTQMK5R.js";import{r as ke}from"./index-Bvak3XBe.js";import{c as b}from"./cn-BLSKlp9E.js";import{T as je}from"./Title-zZzoipTH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Spinner-Bh5BG8Cg.js";const Te=pe(["fixed","left-0","right-0","m-auto","flex","flex-col","py-6","border-none","outline-none","box-border","bg-[var(--sinch-comp-dialog-color-default-background-initial,white)]","rounded-[var(--sinch-comp-dialog-shape-radius,8px)]","shadow-[var(--sinch-comp-dialog-shadow,0_8px_32px_rgba(0,0,0,0.2))]","max-w-[var(--sinch-comp-dialog-max-width,512px)]","max-h-[var(--sinch-comp-dialog-max-height,90vh)]","w-[var(--sinch-comp-dialog-width,fit-content)]","z-50","transition-all","duration-200","ease-out"],{variants:{open:{true:"opacity-100 scale-100",false:"opacity-0 scale-95"}},defaultVariants:{open:!1}}),we=pe(["fixed","inset-0","z-40","bg-black/55","transition-opacity","duration-200"],{variants:{visible:{true:"opacity-100",false:"opacity-0 pointer-events-none"}},defaultVariants:{visible:!1}}),h=o.forwardRef(({className:n,children:s,open:r=!1,caption:c,onClose:t,closeAriaLabel:f="Close",icon:m,buttons:g,container:E,hideCloseButton:q=!1,style:me,id:he,"aria-label":fe,...ge},xe)=>{const x=o.useRef(null),[O,V]=o.useState(!1),[C,I]=o.useState(!1),L=o.useRef(null);o.useImperativeHandle(xe,()=>x.current),o.useEffect(()=>{r?(L.current=document.activeElement,V(!0),requestAnimationFrame(()=>{I(!0)}),document.body.style.overflow="hidden"):O&&I(!1)},[r,O]),o.useEffect(()=>{if(!r)return;const d=l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),t==null||t("escape"))};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[r,t]);const Ce=o.useCallback(d=>{var l;d.propertyName==="opacity"&&(C||(V(!1),document.body.style.overflow="",(l=L.current)==null||l.focus()))},[C]),ye=o.useCallback(d=>{d.target===d.currentTarget&&(t==null||t("backdrop"))},[t]),ve=o.useCallback(()=>{t==null||t("close")},[t]);if(o.useEffect(()=>{if(!r||!x.current)return;const l=x.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),u=l[0],y=l[l.length-1];u==null||u.focus();const W=v=>{v.key==="Tab"&&(v.shiftKey?document.activeElement===u&&(v.preventDefault(),y==null||y.focus()):document.activeElement===y&&(v.preventDefault(),u==null||u.focus()))};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[r]),!O&&!r)return null;const be=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:b(we({visible:C})),onClick:ye,"aria-hidden":"true","data-testid":"dialog-backdrop"}),e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center pointer-events-none",children:e.jsxs("div",{ref:x,role:"dialog","aria-modal":"true","aria-label":fe??c,"aria-labelledby":c?"dialog-caption":void 0,"aria-describedby":"dialog-content",id:he,style:me,className:b(Te({open:C}),"pointer-events-auto",n),onTransitionEnd:Ce,...ge,children:[e.jsxs("div",{className:b("flex flex-row items-start gap-2 mb-3 px-6","[--sinch-global-size-icon:24px]","[--sinch-global-color-icon:var(--sinch-comp-dialog-color-default-icon-initial)]"),children:[m&&e.jsx("span",{className:"shrink-0",children:m}),c&&e.jsx(je,{type:"m",level:"3",id:"dialog-caption",className:b("[color:var(--sinch-comp-dialog-color-default-title-initial)]","[font:var(--sinch-comp-dialog-font-title)]"),children:c}),!q&&e.jsx(a,{size:"s","aria-label":f,onClick:ve,className:"relative left-1 -top-1 ml-auto",icon:e.jsx(R,{name:"fa-xmark",iconsVersion:"2",size:"sm"})})]}),e.jsx("div",{id:"dialog-content",className:"min-h-0 overflow-auto px-6 py-1",children:s}),g&&e.jsx("div",{className:"flex flex-row justify-end gap-4 mt-5 px-6",children:g})]})})]});return ke.createPortal(be,E??document.body)});h.displayName="Dialog";h.__docgenInfo={description:`Dialog component - A modal dialog with backdrop, focus trapping, and escape key support.

Features:
- Portal rendering to document.body
- Focus trapping within the dialog
- Escape key to close
- Click outside (backdrop) to close
- Scroll locking when open

@example
\`\`\`tsx
const [open, setOpen] = useState(false)

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  caption="Confirm Action"
  buttons={
    <>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  Are you sure you want to proceed?
</Dialog>
\`\`\``,methods:[],displayName:"Dialog",props:{open:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is open
@default false`,defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Dialog title/caption"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(detail: DialogCloseDetail) => void",signature:{arguments:[{type:{name:"union",raw:"'close' | 'escape' | 'backdrop'",elements:[{name:"literal",value:"'close'"},{name:"literal",value:"'escape'"},{name:"literal",value:"'backdrop'"}]},name:"detail"}],return:{name:"void"}}},description:`Callback when the dialog requests to be closed
@param detail - The reason for closing ('close', 'escape', or 'backdrop')`},closeAriaLabel:{required:!1,tsType:{name:"string"},description:`Aria label for the close button
@default 'Close'`,defaultValue:{value:"'Close'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display in the header"},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer/buttons content"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display in the dialog body"},container:{required:!1,tsType:{name:"HTMLElement"},description:`Container element for the portal
@default document.body`},hideCloseButton:{required:!1,tsType:{name:"boolean"},description:`Hide the close button
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const ze={title:"Components/Dialog",component:h,tags:["autodocs"],args:{onClose:De()},argTypes:{open:{control:"boolean"},caption:{control:"text"},hideCloseButton:{control:"boolean"}},parameters:{layout:"centered"}},p=({caption:n="Dialog Title",hideCloseButton:s=!1,icon:r,children:c,buttons:t})=>{const[f,m]=o.useState(!1),g=q=>{console.log("Dialog closed via:",q),m(!1)},E=()=>m(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>m(!0),children:"Open Dialog"}),e.jsx(h,{open:f,onClose:g,caption:n,hideCloseButton:s,icon:r,buttons:t==null?void 0:t(E),children:c??e.jsx(i,{children:"This is the dialog content. You can put any content here including forms, text, or other components."})})]})},D={render:()=>e.jsx(p,{})},k={render:()=>e.jsx(p,{caption:"Confirm Delete",children:e.jsx(i,{children:"Are you sure you want to delete this item? This action cannot be undone."})})},j={render:()=>e.jsx(p,{caption:"Warning",icon:e.jsx(R,{name:"fa-triangle-exclamation",iconsVersion:"2",size:"md"}),children:e.jsx(i,{children:"This action requires your attention before proceeding."})})},T={render:()=>e.jsx(p,{caption:"Confirm Action",buttons:n=>e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:n,children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:n,children:"Confirm"})]}),children:e.jsx(i,{children:"Are you sure you want to proceed with this action?"})})},w={render:()=>e.jsx(p,{caption:"Delete Item",icon:e.jsx(R,{name:"fa-trash",iconsVersion:"2",size:"md"}),buttons:n=>e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:n,children:"Cancel"}),e.jsx(a,{variant:"destructive",onClick:n,children:"Delete"})]}),children:e.jsx(i,{children:"Are you sure you want to delete this item? This action cannot be undone."})})},B={render:()=>e.jsx(p,{caption:"Modal Dialog",hideCloseButton:!0,buttons:n=>e.jsx(a,{variant:"primary",onClick:n,children:"Close"}),children:e.jsx(i,{children:"This dialog has no close button. You must use the button below to close it."})})},N={render:()=>e.jsx(p,{caption:"Terms and Conditions",buttons:n=>e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:n,children:"Decline"}),e.jsx(a,{variant:"primary",onClick:n,children:"Accept"})]}),children:e.jsx("div",{className:"space-y-4",children:Array.from({length:10},(n,s)=>e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},s))})})},S={render:()=>{const[n,s]=o.useState(!1),[r,c]=o.useState(null),t=f=>{c(f),s(!1)};return e.jsxs("div",{className:"flex flex-col gap-4 items-center",children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Dialog"}),r&&e.jsxs(i,{type:"xs",className:"text-foreground-muted",children:["Last closed via: ",r]}),e.jsxs(h,{open:n,onClose:t,caption:"Controlled Dialog",buttons:e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>t("close"),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>t("close"),children:"Save"})]}),children:[e.jsx(i,{children:"Try closing this dialog in different ways:"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2 space-y-1",children:[e.jsx("li",{children:e.jsx(i,{children:"Click the X button (close)"})}),e.jsx("li",{children:e.jsx(i,{children:"Press Escape key (escape)"})}),e.jsx("li",{children:e.jsx(i,{children:"Click the backdrop (backdrop)"})})]})]})]})}},A={render:()=>{const[n,s]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>s(!0),children:"Open Dialog"}),e.jsx(h,{open:n,onClose:()=>s(!1),"aria-label":"Simple dialog",buttons:e.jsx(a,{variant:"primary",onClick:()=>s(!1),children:"Got it"}),children:e.jsx(i,{children:"This dialog has no caption, just content."})})]})}};var z,_,F;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DialogDemo />
}`,...(F=(_=D.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var P,H,K;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Confirm Delete">
      <Text>
        Are you sure you want to delete this item? This action cannot be undone.
      </Text>
    </DialogDemo>
}`,...(K=(H=k.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var M,Y,G;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Warning" icon={<Icon name="fa-triangle-exclamation" iconsVersion="2" size="md" />}>
      <Text>
        This action requires your attention before proceeding.
      </Text>
    </DialogDemo>
}`,...(G=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var U,X,J;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Confirm Action" buttons={handleClose => <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </>}>
      <Text>
        Are you sure you want to proceed with this action?
      </Text>
    </DialogDemo>
}`,...(J=(X=T.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,Z,$;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Delete Item" icon={<Icon name="fa-trash" iconsVersion="2" size="md" />} buttons={handleClose => <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="destructive" onClick={handleClose}>
            Delete
          </Button>
        </>}>
      <Text>
        Are you sure you want to delete this item? This action cannot be undone.
      </Text>
    </DialogDemo>
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Modal Dialog" hideCloseButton buttons={handleClose => <Button variant="primary" onClick={handleClose}>
          Close
        </Button>}>
      <Text>
        This dialog has no close button. You must use the button below to close it.
      </Text>
    </DialogDemo>
}`,...(ne=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <DialogDemo caption="Terms and Conditions" buttons={handleClose => <>
          <Button onClick={handleClose}>Decline</Button>
          <Button variant="primary" onClick={handleClose}>
            Accept
          </Button>
        </>}>
      <div className="space-y-4">
        {Array.from({
        length: 10
      }, (_, i) => <Text key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>)}
      </div>
    </DialogDemo>
}`,...(ie=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var se,re,le;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [closeDetail, setCloseDetail] = useState<DialogCloseDetail | null>(null);
    const handleClose = (detail: DialogCloseDetail) => {
      setCloseDetail(detail);
      setOpen(false);
    };
    return <div className="flex flex-col gap-4 items-center">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        {closeDetail && <Text type="xs" className="text-foreground-muted">
            Last closed via: {closeDetail}
          </Text>}
        <Dialog open={open} onClose={handleClose} caption="Controlled Dialog" buttons={<>
              <Button onClick={() => handleClose('close')}>Cancel</Button>
              <Button variant="primary" onClick={() => handleClose('close')}>
                Save
              </Button>
            </>}>
          <Text>
            Try closing this dialog in different ways:
          </Text>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><Text>Click the X button (close)</Text></li>
            <li><Text>Press Escape key (escape)</Text></li>
            <li><Text>Click the backdrop (backdrop)</Text></li>
          </ul>
        </Dialog>
      </div>;
  }
}`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} aria-label="Simple dialog" buttons={<Button variant="primary" onClick={() => setOpen(false)}>
              Got it
            </Button>}>
          <Text>
            This dialog has no caption, just content.
          </Text>
        </Dialog>
      </>;
  }
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const _e=["Default","WithCaption","WithIcon","WithButtons","WithDestructiveAction","HiddenCloseButton","LongContent","Controlled","NoCaption"];export{S as Controlled,D as Default,B as HiddenCloseButton,N as LongContent,A as NoCaption,T as WithButtons,k as WithCaption,w as WithDestructiveAction,j as WithIcon,_e as __namedExportsOrder,ze as default};
