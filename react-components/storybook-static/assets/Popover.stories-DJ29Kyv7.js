import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as p}from"./index-pP6CS22B.js";import{P as n}from"./Popover-gpBx0n2Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./index-Bvak3XBe.js";const ee={title:"Components/Popover",component:n,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the popover is open"},orientation:{control:"select",options:["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Position of the popover relative to the trigger"},tip:{control:"boolean",description:"Whether to show the arrow tip"},modal:{control:"boolean",description:"Modal mode with backdrop"},allowScroll:{control:"boolean",description:"Allow page scrolling when open"}},decorators:[o=>e.jsx("div",{className:"flex items-center justify-center min-h-[400px] p-16",children:e.jsx(o,{})})]},r=({children:o="Open Popover"})=>e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors",children:o}),s=({title:o="Popover Title",children:t})=>e.jsxs("div",{className:"p-4 min-w-[200px]",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-2",children:o}),t||e.jsx("p",{className:"text-foreground-muted text-sm",children:"This is the popover content."})]}),d={render:()=>{const[o,t]=p.useState(!1);return e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsx(s,{}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!o),children:"Click to toggle"})})})}},m={render:()=>{const[o,t]=p.useState(!1);return e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsx(s,{title:"With Arrow"}),tip:!0,children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!o),children:"Popover with tip"})})})}},u={render:()=>{const[o,t]=p.useState(!1);return e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsxs(s,{title:"Modal Popover",children:[e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"Click outside or press Escape to close."}),e.jsx("button",{className:"px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover",onClick:()=>t(!1),children:"Close"})]}),modal:!0,children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!0),children:"Open Modal Popover"})})})}},g={render:()=>{const[o,t]=p.useState({}),l=i=>{t(c=>({...c,[i]:!c[i]}))},a=i=>{t(c=>({...c,[i]:!1}))};return e.jsxs("div",{className:"grid grid-cols-3 gap-8 p-8",children:[e.jsx(n,{open:o["top-left"]??!1,onClose:()=>a("top-left"),orientation:"top-left",tip:!0,content:e.jsx(s,{title:"Top Left"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("top-left"),children:"Top Left"})})}),e.jsx(n,{open:o.top??!1,onClose:()=>a("top"),orientation:"top",tip:!0,content:e.jsx(s,{title:"Top"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("top"),children:"Top"})})}),e.jsx(n,{open:o["top-right"]??!1,onClose:()=>a("top-right"),orientation:"top-right",tip:!0,content:e.jsx(s,{title:"Top Right"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("top-right"),children:"Top Right"})})}),e.jsx(n,{open:o.left??!1,onClose:()=>a("left"),orientation:"left",tip:!0,content:e.jsx(s,{title:"Left"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("left"),children:"Left"})})}),e.jsx("div",{}),e.jsx(n,{open:o.right??!1,onClose:()=>a("right"),orientation:"right",tip:!0,content:e.jsx(s,{title:"Right"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("right"),children:"Right"})})}),e.jsx(n,{open:o["bottom-left"]??!1,onClose:()=>a("bottom-left"),orientation:"bottom-left",tip:!0,content:e.jsx(s,{title:"Bottom Left"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("bottom-left"),children:"Bottom Left"})})}),e.jsx(n,{open:o.bottom??!1,onClose:()=>a("bottom"),orientation:"bottom",tip:!0,content:e.jsx(s,{title:"Bottom"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("bottom"),children:"Bottom"})})}),e.jsx(n,{open:o["bottom-right"]??!1,onClose:()=>a("bottom-right"),orientation:"bottom-right",tip:!0,content:e.jsx(s,{title:"Bottom Right"}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>l("bottom-right"),children:"Bottom Right"})})})]})}},x={render:()=>{const[o,t]=p.useState(!1);return e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsxs("div",{className:"p-4 w-[280px]",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-4",children:"Edit Details"}),e.jsxs("form",{onSubmit:l=>{l.preventDefault(),t(!1)},children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"block text-sm text-foreground-muted mb-1",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter name"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm text-foreground-muted mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"Enter email"})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{type:"button",className:"px-3 py-1.5 text-sm rounded border border-border hover:bg-surface-secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-3 py-1.5 bg-primary text-primary-foreground text-sm rounded hover:bg-primary-hover",children:"Save"})]})]})]}),modal:!0,children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!0),children:"Edit Details"})})})}},h={render:()=>{const[o,t]=p.useState(!1),l=[{label:"Edit",icon:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},{label:"Duplicate",icon:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"},{label:"Delete",icon:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",danger:!0}];return e.jsx(n,{open:o,onClose:()=>t(!1),orientation:"bottom-right",content:e.jsx("div",{className:"py-1 min-w-[160px]",children:l.map((a,i)=>e.jsx("button",{className:`w-full px-4 py-2 text-left text-sm hover:bg-surface-secondary flex items-center gap-2 ${a.danger?"text-danger":"text-foreground"}`,onClick:()=>t(!1),children:a.label},i))}),children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!o),children:"Actions"})})})}},f={render:()=>{const[o,t]=p.useState(!1);return e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground-muted text-sm mb-4",children:"With allowScroll enabled, the page can scroll while the popover is open."}),e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsx(s,{title:"Scrollable"}),allowScroll:!0,children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!o),children:"Allow Scroll"})})})]})}},v={render:()=>{const[o,t]=p.useState(!1);return e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-pure",children:"Custom styled popover content"})}),className:"bg-primary text-pure border-primary",tip:!0,children:e.jsx(r,{children:e.jsx("span",{onClick:()=>t(!o),children:"Custom Style"})})})}},b={render:()=>{const[o,t]=p.useState(!1);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>t(!0),children:"Open Popover"}),e.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>t(!1),children:"Close Popover"})]}),e.jsx(n,{open:o,onClose:()=>t(!1),content:e.jsx(s,{title:"Controlled"}),tip:!0,children:e.jsx("div",{className:"px-4 py-2 bg-surface-tertiary rounded-md",children:"Target Element (controlled externally)"})})]})}};var C,j,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onClose={() => setOpen(false)} content={<PopoverContent />}>
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Click to toggle</span>
        </TriggerButton>
      </Popover>;
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var y,S,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onClose={() => setOpen(false)} content={<PopoverContent title="With Arrow" />} tip>
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Popover with tip</span>
        </TriggerButton>
      </Popover>;
  }
}`,...(N=(S=m.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var k,T,O;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onClose={() => setOpen(false)} content={<PopoverContent title="Modal Popover">
            <p className="text-foreground-muted text-sm mb-4">
              Click outside or press Escape to close.
            </p>
            <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm hover:bg-primary-hover" onClick={() => setOpen(false)}>
              Close
            </button>
          </PopoverContent>} modal>
        <TriggerButton>
          <span onClick={() => setOpen(true)}>Open Modal Popover</span>
        </TriggerButton>
      </Popover>;
  }
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var B,w,E;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
    const togglePopover = (id: string) => {
      setOpenStates(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
    const closePopover = (id: string) => {
      setOpenStates(prev => ({
        ...prev,
        [id]: false
      }));
    };
    return <div className="grid grid-cols-3 gap-8 p-8">
        <Popover open={openStates['top-left'] ?? false} onClose={() => closePopover('top-left')} orientation="top-left" tip content={<PopoverContent title="Top Left" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('top-left')}>Top Left</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['top'] ?? false} onClose={() => closePopover('top')} orientation="top" tip content={<PopoverContent title="Top" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('top')}>Top</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['top-right'] ?? false} onClose={() => closePopover('top-right')} orientation="top-right" tip content={<PopoverContent title="Top Right" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('top-right')}>Top Right</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['left'] ?? false} onClose={() => closePopover('left')} orientation="left" tip content={<PopoverContent title="Left" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('left')}>Left</span>
          </TriggerButton>
        </Popover>

        <div />

        <Popover open={openStates['right'] ?? false} onClose={() => closePopover('right')} orientation="right" tip content={<PopoverContent title="Right" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('right')}>Right</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['bottom-left'] ?? false} onClose={() => closePopover('bottom-left')} orientation="bottom-left" tip content={<PopoverContent title="Bottom Left" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('bottom-left')}>Bottom Left</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['bottom'] ?? false} onClose={() => closePopover('bottom')} orientation="bottom" tip content={<PopoverContent title="Bottom" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('bottom')}>Bottom</span>
          </TriggerButton>
        </Popover>

        <Popover open={openStates['bottom-right'] ?? false} onClose={() => closePopover('bottom-right')} orientation="bottom-right" tip content={<PopoverContent title="Bottom Right" />}>
          <TriggerButton>
            <span onClick={() => togglePopover('bottom-right')}>Bottom Right</span>
          </TriggerButton>
        </Popover>
      </div>;
  }
}`,...(E=(w=g.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,R,D;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onClose={() => setOpen(false)} content={<div className="p-4 w-[280px]">
            <h3 className="font-semibold text-foreground mb-4">Edit Details</h3>
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
          </div>} modal>
        <TriggerButton>
          <span onClick={() => setOpen(true)}>Edit Details</span>
        </TriggerButton>
      </Popover>;
  }
}`,...(D=(R=x.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var L,W,A;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const menuItems = [{
      label: 'Edit',
      icon: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
    }, {
      label: 'Duplicate',
      icon: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'
    }, {
      label: 'Delete',
      icon: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
      danger: true
    }];
    return <Popover open={open} onClose={() => setOpen(false)} orientation="bottom-right" content={<div className="py-1 min-w-[160px]">
            {menuItems.map((item, index) => <button key={index} className={\`w-full px-4 py-2 text-left text-sm hover:bg-surface-secondary flex items-center gap-2 \${item.danger ? 'text-danger' : 'text-foreground'}\`} onClick={() => setOpen(false)}>
                {item.label}
              </button>)}
          </div>}>
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Actions</span>
        </TriggerButton>
      </Popover>;
  }
}`,...(A=(W=h.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var H,V,I;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <p className="text-foreground-muted text-sm mb-4">
          With allowScroll enabled, the page can scroll while the popover is open.
        </p>
        <Popover open={open} onClose={() => setOpen(false)} content={<PopoverContent title="Scrollable" />} allowScroll>
          <TriggerButton>
            <span onClick={() => setOpen(!open)}>Allow Scroll</span>
          </TriggerButton>
        </Popover>
      </div>;
  }
}`,...(I=(V=f.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var F,_,$;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onClose={() => setOpen(false)} content={<div className="p-4">
            <p className="text-pure">Custom styled popover content</p>
          </div>} className="bg-primary text-pure border-primary" tip>
        <TriggerButton>
          <span onClick={() => setOpen(!open)}>Custom Style</span>
        </TriggerButton>
      </Popover>;
  }
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,z,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setOpen(true)}>
            Open Popover
          </button>
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setOpen(false)}>
            Close Popover
          </button>
        </div>
        <Popover open={open} onClose={() => setOpen(false)} content={<PopoverContent title="Controlled" />} tip>
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element (controlled externally)
          </div>
        </Popover>
      </div>;
  }
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const oe=["Default","WithTip","ModalMode","Orientations","WithForm","WithMenu","AllowScroll","CustomStyling","Controlled"];export{f as AllowScroll,b as Controlled,v as CustomStyling,d as Default,u as ModalMode,g as Orientations,x as WithForm,h as WithMenu,m as WithTip,oe as __namedExportsOrder,ee as default};
