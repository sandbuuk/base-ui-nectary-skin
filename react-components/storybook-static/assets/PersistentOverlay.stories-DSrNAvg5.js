import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as t}from"./index-pP6CS22B.js";import{r as Y}from"./index-Bvak3XBe.js";import{c as K}from"./index-EXTQMK5R.js";import{c as w}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Z=K(["fixed inset-0 z-50 flex items-center justify-center","bg-black/55"],{variants:{},defaultVariants:{}}),ee=K(["flex flex-col","py-6","max-w-[512px] max-h-[90vh]","w-fit","rounded-[var(--sinch-comp-dialog-shape-radius,8px)]","bg-[var(--sinch-comp-dialog-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]","shadow-[var(--sinch-comp-dialog-shadow,0_4px_16px_rgba(0,0,0,0.2))]","outline-none"],{variants:{},defaultVariants:{}}),i=t.forwardRef(({className:n,open:r=!1,caption:s,onVisibilityAltered:o,icon:a,content:c,buttons:b,"aria-label":G,checkInterval:N=1e3,...H},J)=>{const[C,Q]=t.useState(r),v=t.useRef(null),l=t.useRef(null);t.useEffect(()=>{Q(r)},[r]);const j=t.useCallback(()=>{if(v.current===null)return;const d=v.current,u=getComputedStyle(d);!(u.visibility==="visible"&&u.display!=="none"&&d.open===!0)&&C&&(o==null||o())},[C,o]);if(t.useEffect(()=>{if(!r){l.current!==null&&(clearInterval(l.current),l.current=null);return}return requestAnimationFrame(()=>{l.current=setInterval(j,N)}),()=>{l.current!==null&&(clearInterval(l.current),l.current=null)}},[r,N,j]),t.useEffect(()=>()=>{l.current!==null&&clearInterval(l.current),r&&(o==null||o())},[]),t.useEffect(()=>{if(!r)return;const d=u=>{u.key==="Escape"&&(u.preventDefault(),u.stopPropagation())};return document.addEventListener("keydown",d,{capture:!0}),()=>{document.removeEventListener("keydown",d,{capture:!0})}},[r]),t.useEffect(()=>{if(!r)return;const d=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=d}},[r]),!r)return null;const X=e.jsx("div",{ref:J,className:w(Z()),role:"presentation",...H,children:e.jsxs("dialog",{ref:v,className:w(ee(),n),open:!0,"aria-modal":"true","aria-label":G,children:[e.jsxs("div",{className:"flex items-start gap-2 px-6 mb-3",children:[a!==void 0&&e.jsx("div",{className:"flex-shrink-0 text-[var(--sinch-comp-dialog-color-default-icon-initial,var(--sinch-sys-color-text-default))]",children:a}),s!==void 0&&e.jsx("h3",{className:"text-[var(--sinch-comp-dialog-color-default-title-initial,var(--sinch-sys-color-text-default))] font-semibold text-lg",children:s})]}),c!==void 0&&e.jsx("div",{className:"min-h-0 overflow-auto px-6 py-1",children:c}),b!==void 0&&e.jsx("div",{className:"flex justify-end gap-4 px-6 mt-5",children:b})]})});return Y.createPortal(X,document.body)});i.displayName="PersistentOverlay";i.__docgenInfo={description:"",methods:[],displayName:"PersistentOverlay",props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay is open",defaultValue:{value:"false",computed:!1}},caption:{required:!1,tsType:{name:"string"},description:"Dialog caption/title"},onVisibilityAltered:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when visibility is altered externally"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display in the header"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display in the dialog body"},buttons:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Buttons/actions to display at the bottom"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the dialog"},checkInterval:{required:!1,tsType:{name:"number"},description:"Interval for checking visibility manipulation (ms)",defaultValue:{value:"1000",computed:!1}}},composes:["Omit","VariantProps"]};const le={title:"Components/PersistentOverlay",component:i,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the overlay is open"},caption:{control:"text",description:"Dialog caption/title"},checkInterval:{control:"number",description:"Interval for checking visibility manipulation (ms)"}}},m={render:()=>{const[n,r]=t.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Show Persistent Overlay"}),e.jsx(i,{open:n,caption:"Processing...",content:e.jsxs("div",{className:"text-foreground-muted",children:[e.jsx("p",{children:"Please wait while we process your request."}),e.jsx("p",{className:"mt-2 text-sm",children:"This dialog cannot be dismissed with Escape or clicking outside."})]}),buttons:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm",onClick:()=>r(!1),children:"Complete"})})]})}},p={render:()=>{const[n,r]=t.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Show With Icon"}),e.jsx(i,{open:n,caption:"Warning",icon:e.jsx("svg",{className:"w-6 h-6 text-warning",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),content:e.jsx("p",{className:"text-foreground-muted",children:"A critical operation is in progress. Please do not close this window."}),buttons:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm",onClick:()=>r(!1),children:"Acknowledge"})})]})}},x={render:()=>{const[n,r]=t.useState(!1),[s,o]=t.useState(0);return t.useEffect(()=>{if(!n){o(0);return}const a=setInterval(()=>{o(c=>c>=100?(clearInterval(a),100):c+10)},500);return()=>clearInterval(a)},[n]),t.useEffect(()=>{s>=100&&setTimeout(()=>r(!1),500)},[s]),e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Start Process"}),e.jsx(i,{open:n,caption:"Uploading Files",content:e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground-muted mb-4",children:"Please wait while your files are being uploaded..."}),e.jsx("div",{className:"w-full bg-surface-secondary rounded-full h-2",children:e.jsx("div",{className:"bg-primary h-2 rounded-full transition-all duration-300",style:{width:`${s}%`}})}),e.jsxs("p",{className:"text-sm text-foreground-muted mt-2 text-center",children:[s,"%"]})]})})]})}},f={render:()=>{const[n,r]=t.useState(!1),[s,o]=t.useState(null),a=c=>{o(c),r(!1)};return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>{o(null),r(!0)},children:"Show Overlay"}),s!==null&&e.jsxs("p",{className:"mt-4 text-foreground-muted",children:["Last action: ",e.jsx("span",{className:"font-medium text-foreground",children:s})]}),e.jsx(i,{open:n,caption:"Confirm Action",content:e.jsx("p",{className:"text-foreground-muted",children:"This action requires confirmation. Please choose how to proceed."}),buttons:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm",onClick:()=>a("Cancelled"),children:"Cancel"}),e.jsx("button",{className:"px-4 py-2 bg-danger text-pure rounded-md hover:bg-danger-strong text-sm",onClick:()=>a("Declined"),children:"Decline"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm",onClick:()=>a("Confirmed"),children:"Confirm"})]})})]})}},g={render:()=>{const[n,r]=t.useState(!1),[s,o]=t.useState(0);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Show Overlay"}),e.jsxs("p",{className:"mt-4 text-foreground-muted",children:["Visibility altered count: ",e.jsx("span",{className:"font-medium text-foreground",children:s})]}),e.jsx("p",{className:"text-sm text-foreground-muted mt-1",children:"(Try closing by calling setOpen(false) to see the callback)"}),e.jsx(i,{open:n,caption:"Monitored Overlay",onVisibilityAltered:()=>{o(a=>a+1)},content:e.jsx("p",{className:"text-foreground-muted",children:"This overlay monitors for external visibility manipulation."}),buttons:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm",onClick:()=>r(!1),children:"Close Normally"})})]})}},h={render:()=>{const[n,r]=t.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Show Long Content"}),e.jsx(i,{open:n,caption:"Terms and Conditions",content:e.jsx("div",{className:"text-foreground-muted max-h-[300px] overflow-auto",children:Array.from({length:10}).map((s,o)=>e.jsx("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},o))}),buttons:e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm",onClick:()=>r(!1),children:"Decline"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm",onClick:()=>r(!1),children:"Accept"})]})})]})}},y={render:()=>{const[n,r]=t.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>r(!0),children:"Show Simple Overlay"}),e.jsx(i,{open:n,content:e.jsxs("div",{className:"flex flex-col items-center gap-4 py-4",children:[e.jsx("div",{className:"animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"}),e.jsx("p",{className:"text-foreground-muted",children:"Loading..."}),e.jsx("button",{className:"px-3 py-1.5 text-sm text-foreground-muted hover:text-foreground",onClick:()=>r(!1),children:"Cancel"})]})})]})}};var k,O,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Show Persistent Overlay
        </button>

        <PersistentOverlay open={open} caption="Processing..." content={<div className="text-foreground-muted">
              <p>Please wait while we process your request.</p>
              <p className="mt-2 text-sm">This dialog cannot be dismissed with Escape or clicking outside.</p>
            </div>} buttons={<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm" onClick={() => setOpen(false)}>
              Complete
            </button>} />
      </div>;
  }
}`,...(S=(O=m.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var P,L,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Show With Icon
        </button>

        <PersistentOverlay open={open} caption="Warning" icon={<svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>} content={<p className="text-foreground-muted">
              A critical operation is in progress. Please do not close this window.
            </p>} buttons={<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm" onClick={() => setOpen(false)}>
              Acknowledge
            </button>} />
      </div>;
  }
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var T,I,A;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      if (!open) {
        setProgress(0);
        return;
      }
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(interval);
    }, [open]);
    useEffect(() => {
      if (progress >= 100) {
        setTimeout(() => setOpen(false), 500);
      }
    }, [progress]);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Start Process
        </button>

        <PersistentOverlay open={open} caption="Uploading Files" content={<div>
              <p className="text-foreground-muted mb-4">
                Please wait while your files are being uploaded...
              </p>
              <div className="w-full bg-surface-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{
            width: \`\${progress}%\`
          }} />
              </div>
              <p className="text-sm text-foreground-muted mt-2 text-center">{progress}%</p>
            </div>} />
      </div>;
  }
}`,...(A=(I=x.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,R,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<string | null>(null);
    const handleAction = (actionName: string) => {
      setAction(actionName);
      setOpen(false);
    };
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => {
        setAction(null);
        setOpen(true);
      }}>
          Show Overlay
        </button>

        {action !== null && <p className="mt-4 text-foreground-muted">
            Last action: <span className="font-medium text-foreground">{action}</span>
          </p>}

        <PersistentOverlay open={open} caption="Confirm Action" content={<p className="text-foreground-muted">
              This action requires confirmation. Please choose how to proceed.
            </p>} buttons={<>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm" onClick={() => handleAction('Cancelled')}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-danger text-pure rounded-md hover:bg-danger-strong text-sm" onClick={() => handleAction('Declined')}>
                Decline
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm" onClick={() => handleAction('Confirmed')}>
                Confirm
              </button>
            </>} />
      </div>;
  }
}`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,V,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [alteredCount, setAlteredCount] = useState(0);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Show Overlay
        </button>

        <p className="mt-4 text-foreground-muted">
          Visibility altered count: <span className="font-medium text-foreground">{alteredCount}</span>
        </p>
        <p className="text-sm text-foreground-muted mt-1">
          (Try closing by calling setOpen(false) to see the callback)
        </p>

        <PersistentOverlay open={open} caption="Monitored Overlay" onVisibilityAltered={() => {
        setAlteredCount(c => c + 1);
      }} content={<p className="text-foreground-muted">
              This overlay monitors for external visibility manipulation.
            </p>} buttons={<button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm" onClick={() => setOpen(false)}>
              Close Normally
            </button>} />
      </div>;
  }
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var M,B,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Show Long Content
        </button>

        <PersistentOverlay open={open} caption="Terms and Conditions" content={<div className="text-foreground-muted max-h-[300px] overflow-auto">
              {Array.from({
          length: 10
        }).map((_, i) => <p key={i} className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>)}
            </div>} buttons={<>
              <button className="px-4 py-2 border border-border rounded-md hover:bg-surface-secondary text-sm" onClick={() => setOpen(false)}>
                Decline
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover text-sm" onClick={() => setOpen(false)}>
                Accept
              </button>
            </>} />
      </div>;
  }
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,z,$;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpen(true)}>
          Show Simple Overlay
        </button>

        <PersistentOverlay open={open} content={<div className="flex flex-col items-center gap-4 py-4">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
              <p className="text-foreground-muted">Loading...</p>
              <button className="px-3 py-1.5 text-sm text-foreground-muted hover:text-foreground" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>} />
      </div>;
  }
}`,...($=(z=y.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};const ce=["Default","WithIcon","LoadingState","WithMultipleButtons","VisibilityAlteredCallback","LongContent","ContentOnly"];export{y as ContentOnly,m as Default,x as LoadingState,h as LongContent,g as VisibilityAlteredCallback,p as WithIcon,f as WithMultipleButtons,ce as __namedExportsOrder,le as default};
