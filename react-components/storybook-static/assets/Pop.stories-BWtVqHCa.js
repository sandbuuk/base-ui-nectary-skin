import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as s}from"./index-pP6CS22B.js";import{r as Oe}from"./index-Bvak3XBe.js";import{c as q}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";let w=0;const ke=()=>{w++,w===1&&(document.body.style.setProperty("overscroll-behavior","none"),document.documentElement.style.setProperty("overscroll-behavior","none"))},Te=()=>{w=Math.max(0,w-1),w===0&&(document.body.style.removeProperty("overscroll-behavior"),document.documentElement.style.removeProperty("overscroll-behavior"))},i=s.forwardRef(({className:r,children:t,content:p,open:l=!1,orientation:n="bottom-right",modal:a=!1,allowScroll:c=!1,hideOutsideViewport:D=!1,inset:v=0,disableBackdropClose:N=!1,onClose:d,"aria-label":he,...ge},be)=>{const[W,xe]=s.useState({x:0,y:0}),[ve,I]=s.useState(void 0),[ye,Ce]=s.useState(!1),x=s.useRef(null),g=s.useRef(null),we=s.useRef(null),L=s.useRef(null),A=s.useCallback(()=>{if(x.current===null)return{x:0,y:0,width:0,height:0};const o=x.current.firstElementChild;return o!==null&&"footprintRect"in o?o.footprintRect:x.current.getBoundingClientRect()},[]),y=s.useCallback(()=>{if(g.current===null)return;const o=A(),m=g.current.getBoundingClientRect(),u=m.width,M=m.height;let b=0,C=0;n==="bottom-right"||n==="top-right"||n==="top-stretch"||n==="bottom-stretch"?b=o.x:n==="bottom-left"||n==="top-left"?b=o.x+o.width-u:n==="bottom-center"||n==="top-center"?b=o.x+o.width/2-u/2:n==="center-right"?b=o.x+o.width:n==="center-left"&&(b=o.x-u),n==="bottom-left"||n==="bottom-right"||n==="bottom-stretch"||n==="bottom-center"?C=o.y+o.height:n==="top-left"||n==="top-right"||n==="top-stretch"||n==="top-center"?C=o.y-M:(n==="center-left"||n==="center-right")&&(C=o.y+o.height/2-M/2);const z=Math.max(v,Math.min(b,window.innerWidth-u-v)),V=Math.max(v,Math.min(C,window.innerHeight-M-v));if(D){const Pe=Math.abs(z-b)>2||Math.abs(V-C)>2;Ce(Pe)}xe({x:z,y:V}),I(n==="top-stretch"||n==="bottom-stretch"?o.width:void 0)},[n,v,D,A]);s.useLayoutEffect(()=>{l&&requestAnimationFrame(()=>{y()})},[l,y]),s.useEffect(()=>{if(!l)return;const o=()=>{y()},m=new ResizeObserver(o);if(g.current!==null&&m.observe(g.current),window.addEventListener("resize",o),c){const u=()=>y();return window.addEventListener("scroll",u,{passive:!0,capture:!0}),()=>{m.disconnect(),window.removeEventListener("resize",o),window.removeEventListener("scroll",u,{capture:!0})}}return()=>{m.disconnect(),window.removeEventListener("resize",o)}},[l,c,y]),s.useEffect(()=>{if(!l)return;const o=m=>{m.key==="Escape"&&(m.preventDefault(),d==null||d())};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[l,d]),s.useEffect(()=>{if(l&&!c){ke();const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{Te(),document.body.style.overflow=o}}},[l,c]);const Ne=s.useCallback(o=>{N||o.target===o.currentTarget&&(d==null||d())},[N,d]);s.useEffect(()=>{if(!l||a)return;const o=u=>{N||L.current!==null&&L.current.contains(u.target)||g.current!==null&&!g.current.contains(u.target)&&x.current!==null&&!x.current.contains(u.target)&&(d==null||d())},m=setTimeout(()=>{document.addEventListener("mousedown",o)},0);return()=>{clearTimeout(m),document.removeEventListener("mousedown",o)}},[l,a,N,d]);const je=l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:L,className:q("fixed inset-0 z-50","bg-transparent"),onClick:Ne,"aria-hidden":"true"}),e.jsx("dialog",{ref:we,className:q("fixed z-50 m-0 p-0 border-none bg-transparent outline-none","max-w-none max-h-none overflow-visible",ye&&"invisible"),style:{left:W.x,top:W.y,width:ve},open:!0,"aria-label":he,"aria-modal":a,children:e.jsx("div",{ref:g,className:q("relative",r),...ge,children:p})})]});return e.jsxs("div",{ref:be,className:"contents",children:[e.jsx("div",{ref:x,"aria-haspopup":"dialog","aria-expanded":l,children:t}),Oe.createPortal(je,document.body)]})});i.displayName="Pop";i.__docgenInfo={description:"",methods:[],displayName:"Pop",props:{open:{required:!1,tsType:{name:"boolean"},description:"Whether the pop is open",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-right'
| 'top-center'
| 'top-stretch'
| 'bottom-left'
| 'bottom-right'
| 'bottom-center'
| 'bottom-stretch'
| 'center-left'
| 'center-right'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-stretch'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-stretch'"},{name:"literal",value:"'center-left'"},{name:"literal",value:"'center-right'"}]},description:"Orientation/position of the pop relative to the target",defaultValue:{value:"'bottom-right'",computed:!1}},modal:{required:!1,tsType:{name:"boolean"},description:"Modal mode - shows backdrop and uses showModal()",defaultValue:{value:"false",computed:!1}},allowScroll:{required:!1,tsType:{name:"boolean"},description:"Allow page scrolling when pop is open (non-modal mode only)",defaultValue:{value:"false",computed:!1}},hideOutsideViewport:{required:!1,tsType:{name:"boolean"},description:"Hide the pop if the target is outside the viewport",defaultValue:{value:"false",computed:!1}},inset:{required:!1,tsType:{name:"number"},description:"Inset from viewport edges",defaultValue:{value:"0",computed:!1}},disableBackdropClose:{required:!1,tsType:{name:"boolean"},description:"Disable closing on backdrop click",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the pop requests to close"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The target/trigger element"},content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The floating content"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the dialog"}},composes:["Omit"]};const Me={title:"Components/Pop",component:i,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the pop is open"},orientation:{control:"select",options:["top-left","top-right","top-center","top-stretch","bottom-left","bottom-right","bottom-center","bottom-stretch","center-left","center-right"],description:"Position of the pop relative to the target"},modal:{control:"boolean",description:"Whether to use modal mode"},allowScroll:{control:"boolean",description:"Allow page scrolling when open"},hideOutsideViewport:{control:"boolean",description:"Hide pop when target is outside viewport"},inset:{control:"number",description:"Inset from viewport edges"},disableBackdropClose:{control:"boolean",description:"Disable closing on backdrop click"}},decorators:[r=>e.jsx("div",{className:"flex items-center justify-center min-h-[400px] p-16",children:e.jsx(r,{})})]},f=({children:r="Open Pop",onClick:t})=>e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors",onClick:t,children:r}),h=({title:r="Pop Content",onClose:t})=>e.jsxs("div",{className:"p-4 min-w-[200px] bg-surface-primary border border-border rounded-md shadow-lg",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:r}),e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"This is floating content."}),t!==void 0&&e.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover",onClick:t,children:"Close"})]}),j={render:()=>{const[r,t]=s.useState(!1);return e.jsx(i,{open:r,onClose:()=>t(!1),content:e.jsx(h,{onClose:()=>t(!1)}),children:e.jsx(f,{onClick:()=>t(!r),children:"Click to toggle"})})}},P={render:()=>{const[r,t]=s.useState({}),p=a=>{t(c=>({...c,[a]:!c[a]}))},l=a=>{t(c=>({...c,[a]:!1}))},n=[{id:"top-left",label:"Top Left"},{id:"top-center",label:"Top Center"},{id:"top-right",label:"Top Right"},{id:"center-left",label:"Center Left"},{id:"center-right",label:"Center Right"},{id:"bottom-left",label:"Bottom Left"},{id:"bottom-center",label:"Bottom Center"},{id:"bottom-right",label:"Bottom Right"}];return e.jsxs("div",{className:"grid grid-cols-3 gap-8 p-8",children:[n.slice(0,3).map(({id:a,label:c})=>e.jsx(i,{open:r[a]??!1,onClose:()=>l(a),orientation:a,content:e.jsx(h,{title:c,onClose:()=>l(a)}),children:e.jsx(f,{onClick:()=>p(a),children:c})},a)),e.jsx(i,{open:r["center-left"]??!1,onClose:()=>l("center-left"),orientation:"center-left",content:e.jsx(h,{title:"Center Left",onClose:()=>l("center-left")}),children:e.jsx(f,{onClick:()=>p("center-left"),children:"Center Left"})}),e.jsx("div",{}),e.jsx(i,{open:r["center-right"]??!1,onClose:()=>l("center-right"),orientation:"center-right",content:e.jsx(h,{title:"Center Right",onClose:()=>l("center-right")}),children:e.jsx(f,{onClick:()=>p("center-right"),children:"Center Right"})}),n.slice(5).map(({id:a,label:c})=>e.jsx(i,{open:r[a]??!1,onClose:()=>l(a),orientation:a,content:e.jsx(h,{title:c,onClose:()=>l(a)}),children:e.jsx(f,{onClick:()=>p(a),children:c})},a))]})}},O={render:()=>{const[r,t]=s.useState(!1),[p,l]=s.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(i,{open:r,onClose:()=>t(!1),orientation:"top-stretch",content:e.jsx("div",{className:"p-4 bg-surface-primary border border-border rounded-md shadow-lg",children:e.jsx("p",{className:"text-foreground",children:"This content stretches to match the trigger width."})}),children:e.jsx("button",{className:"w-[300px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>t(!r),children:"Top Stretch (300px wide)"})}),e.jsx(i,{open:p,onClose:()=>l(!1),orientation:"bottom-stretch",content:e.jsx("div",{className:"p-4 bg-surface-primary border border-border rounded-md shadow-lg",children:e.jsx("p",{className:"text-foreground",children:"This content stretches to match the trigger width."})}),children:e.jsx("button",{className:"w-[400px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",onClick:()=>l(!p),children:"Bottom Stretch (400px wide)"})})]})}},k={render:()=>{const[r,t]=s.useState(!1);return e.jsx(i,{open:r,onClose:()=>t(!1),modal:!0,content:e.jsxs("div",{className:"p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:"Modal Pop"}),e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"This pop is in modal mode. Click outside or press Escape to close."}),e.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover",onClick:()=>t(!1),children:"Close"})]}),children:e.jsx(f,{onClick:()=>t(!0),children:"Open Modal Pop"})})}},T={render:()=>{const[r,t]=s.useState(!1);return e.jsx(i,{open:r,onClose:()=>t(!1),disableBackdropClose:!0,content:e.jsxs("div",{className:"p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:"Backdrop Close Disabled"}),e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"Clicking outside won't close this pop. Use the button to close."}),e.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover",onClick:()=>t(!1),children:"Close"})]}),children:e.jsx(f,{onClick:()=>t(!0),children:"Open Pop"})})}},S={render:()=>{const[r,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"With allowScroll enabled, the page can scroll while the pop is open and the pop follows the trigger."}),e.jsx(i,{open:r,onClose:()=>t(!1),allowScroll:!0,content:e.jsx(h,{title:"Scrollable",onClose:()=>t(!1)}),children:e.jsx(f,{onClick:()=>t(!r),children:"Allow Scroll"})})]})}},B={render:()=>{const[r,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"The pop maintains a 20px inset from viewport edges."}),e.jsx(i,{open:r,onClose:()=>t(!1),inset:20,content:e.jsx(h,{title:"With Inset",onClose:()=>t(!1)}),children:e.jsx(f,{onClick:()=>t(!r),children:"Open with Inset"})})]})}},R={render:()=>{const[r,t]=s.useState(!1);return e.jsx(i,{open:r,onClose:()=>t(!1),content:e.jsxs("div",{className:"p-4 min-w-[300px] bg-surface-primary border border-border rounded-md shadow-lg",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Form in Pop"}),e.jsxs("form",{onSubmit:p=>{p.preventDefault(),t(!1)},children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"block text-sm text-foreground-muted mb-1",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter name"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm text-foreground-muted mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter email"})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{type:"button",className:"px-3 py-1.5 text-sm rounded border border-border hover:bg-surface-secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded hover:bg-primary-hover",children:"Save"})]})]})]}),children:e.jsx(f,{onClick:()=>t(!r),children:"Open Form"})})}},E={render:()=>{const[r,t]=s.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>t(!0),children:"Open Pop"}),e.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>t(!1),children:"Close Pop"})]}),e.jsx(i,{open:r,onClose:()=>t(!1),content:e.jsx(h,{title:"Controlled"}),children:e.jsx("div",{className:"px-4 py-2 bg-surface-tertiary rounded-md",children:"Target Element (controlled externally)"})})]})}};var F,H,_;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Pop open={open} onClose={() => setOpen(false)} content={<PopContent onClose={() => setOpen(false)} />}>
        <TriggerButton onClick={() => setOpen(!open)}>
          Click to toggle
        </TriggerButton>
      </Pop>;
  }
}`,...(_=(H=j.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var U,K,X;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
    const togglePop = (id: string) => {
      setOpenStates(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
    const closePop = (id: string) => {
      setOpenStates(prev => ({
        ...prev,
        [id]: false
      }));
    };
    const orientations = [{
      id: 'top-left',
      label: 'Top Left'
    }, {
      id: 'top-center',
      label: 'Top Center'
    }, {
      id: 'top-right',
      label: 'Top Right'
    }, {
      id: 'center-left',
      label: 'Center Left'
    }, {
      id: 'center-right',
      label: 'Center Right'
    }, {
      id: 'bottom-left',
      label: 'Bottom Left'
    }, {
      id: 'bottom-center',
      label: 'Bottom Center'
    }, {
      id: 'bottom-right',
      label: 'Bottom Right'
    }] as const;
    return <div className="grid grid-cols-3 gap-8 p-8">
        {orientations.slice(0, 3).map(({
        id,
        label
      }) => <Pop key={id} open={openStates[id] ?? false} onClose={() => closePop(id)} orientation={id} content={<PopContent title={label} onClose={() => closePop(id)} />}>
            <TriggerButton onClick={() => togglePop(id)}>
              {label}
            </TriggerButton>
          </Pop>)}

        <Pop open={openStates['center-left'] ?? false} onClose={() => closePop('center-left')} orientation="center-left" content={<PopContent title="Center Left" onClose={() => closePop('center-left')} />}>
          <TriggerButton onClick={() => togglePop('center-left')}>
            Center Left
          </TriggerButton>
        </Pop>

        <div />

        <Pop open={openStates['center-right'] ?? false} onClose={() => closePop('center-right')} orientation="center-right" content={<PopContent title="Center Right" onClose={() => closePop('center-right')} />}>
          <TriggerButton onClick={() => togglePop('center-right')}>
            Center Right
          </TriggerButton>
        </Pop>

        {orientations.slice(5).map(({
        id,
        label
      }) => <Pop key={id} open={openStates[id] ?? false} onClose={() => closePop(id)} orientation={id} content={<PopContent title={label} onClose={() => closePop(id)} />}>
            <TriggerButton onClick={() => togglePop(id)}>
              {label}
            </TriggerButton>
          </Pop>)}
      </div>;
  }
}`,...(X=(K=P.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,G,J;O.parameters={...O.parameters,docs:{...(Y=O.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [openTop, setOpenTop] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    return <div className="flex flex-col gap-8">
        <Pop open={openTop} onClose={() => setOpenTop(false)} orientation="top-stretch" content={<div className="p-4 bg-surface-primary border border-border rounded-md shadow-lg">
              <p className="text-foreground">This content stretches to match the trigger width.</p>
            </div>}>
          <button className="w-[300px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpenTop(!openTop)}>
            Top Stretch (300px wide)
          </button>
        </Pop>

        <Pop open={openBottom} onClose={() => setOpenBottom(false)} orientation="bottom-stretch" content={<div className="p-4 bg-surface-primary border border-border rounded-md shadow-lg">
              <p className="text-foreground">This content stretches to match the trigger width.</p>
            </div>}>
          <button className="w-[400px] px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover" onClick={() => setOpenBottom(!openBottom)}>
            Bottom Stretch (400px wide)
          </button>
        </Pop>
      </div>;
  }
}`,...(J=(G=O.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,$;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Pop open={open} onClose={() => setOpen(false)} modal content={<div className="p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-2">Modal Pop</h3>
            <p className="text-foreground-muted text-sm mb-4">
              This pop is in modal mode. Click outside or press Escape to close.
            </p>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>}>
        <TriggerButton onClick={() => setOpen(true)}>
          Open Modal Pop
        </TriggerButton>
      </Pop>;
  }
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,oe;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Pop open={open} onClose={() => setOpen(false)} disableBackdropClose content={<div className="p-4 min-w-[250px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-2">Backdrop Close Disabled</h3>
            <p className="text-foreground-muted text-sm mb-4">
              Clicking outside won't close this pop. Use the button to close.
            </p>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>}>
        <TriggerButton onClick={() => setOpen(true)}>
          Open Pop
        </TriggerButton>
      </Pop>;
  }
}`,...(oe=(te=T.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,ne,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <p className="text-foreground-muted text-sm mb-4">
          With allowScroll enabled, the page can scroll while the pop is open and the pop follows the trigger.
        </p>
        <Pop open={open} onClose={() => setOpen(false)} allowScroll content={<PopContent title="Scrollable" onClose={() => setOpen(false)} />}>
          <TriggerButton onClick={() => setOpen(!open)}>
            Allow Scroll
          </TriggerButton>
        </Pop>
      </div>;
  }
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var le,ae,ie;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <p className="text-foreground-muted text-sm mb-4">
          The pop maintains a 20px inset from viewport edges.
        </p>
        <Pop open={open} onClose={() => setOpen(false)} inset={20} content={<PopContent title="With Inset" onClose={() => setOpen(false)} />}>
          <TriggerButton onClick={() => setOpen(!open)}>
            Open with Inset
          </TriggerButton>
        </Pop>
      </div>;
  }
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,de,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Pop open={open} onClose={() => setOpen(false)} content={<div className="p-4 min-w-[300px] bg-surface-primary border border-border rounded-md shadow-lg">
            <h3 className="font-semibold text-foreground mb-4">Form in Pop</h3>
            <form onSubmit={e => {
        e.preventDefault();
        setOpen(false);
      }}>
              <div className="mb-3">
                <label className="block text-sm text-foreground-muted mb-1">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter name" />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-foreground-muted mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter email" />
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" className="px-3 py-1.5 text-sm rounded border border-border hover:bg-surface-secondary" onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded hover:bg-primary-hover">
                  Save
                </button>
              </div>
            </form>
          </div>}>
        <TriggerButton onClick={() => setOpen(!open)}>
          Open Form
        </TriggerButton>
      </Pop>;
  }
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,fe;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setOpen(true)}>
            Open Pop
          </button>
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setOpen(false)}>
            Close Pop
          </button>
        </div>
        <Pop open={open} onClose={() => setOpen(false)} content={<PopContent title="Controlled" />}>
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element (controlled externally)
          </div>
        </Pop>
      </div>;
  }
}`,...(fe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};const qe=["Default","AllOrientations","StretchOrientations","ModalMode","DisableBackdropClose","AllowScroll","WithInset","NestedContent","Controlled"];export{P as AllOrientations,S as AllowScroll,E as Controlled,j as Default,T as DisableBackdropClose,k as ModalMode,R as NestedContent,O as StretchOrientations,B as WithInset,qe as __namedExportsOrder,Me as default};
