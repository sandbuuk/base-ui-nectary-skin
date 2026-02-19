import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r}from"./index-pP6CS22B.js";import{c as q}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c=r.forwardRef(({events:o,className:i,children:l,...s},n)=>{const t=r.useRef(null),a=r.useCallback(d=>{t.current=d,typeof n=="function"?n(d):n!==null&&(n.current=d)},[n]);return r.useEffect(()=>{const d=t.current;if(d===null)return;const h=u=>{u.stopPropagation()};for(const u of o)d.addEventListener(u,h);return()=>{for(const u of o)d.removeEventListener(u,h)}},[o]),e.jsx("div",{ref:a,className:q("contents",i),...s,children:l})});c.displayName="StopEvents";c.__docgenInfo={description:`StopEvents is a utility component that prevents specified events from
propagating beyond its boundary. It wraps children with \`display: contents\`
so it doesn't affect layout.

This is useful when you want to isolate event handling within a portion
of the DOM tree, preventing events from bubbling up to parent handlers.

Note: This component stops native DOM events from bubbling. React's synthetic
events that are registered on ancestors will not receive these events.

@example
\`\`\`tsx
// Stop click events from bubbling
<StopEvents events={['click']}>
  <button onClick={() => console.log('This fires')}>Click me</button>
</StopEvents>

// Stop multiple events
<StopEvents events={['click', 'mousedown', 'mouseup']}>
  <div>Interactive content</div>
</StopEvents>
\`\`\``,methods:[],displayName:"StopEvents",props:{events:{required:!0,tsType:{name:"union",raw:"StoppableEvent[] | string[]",elements:[{name:"Array",elements:[{name:"union",raw:`| 'click'
| 'dblclick'
| 'mousedown'
| 'mouseup'
| 'mousemove'
| 'mouseenter'
| 'mouseleave'
| 'mouseover'
| 'mouseout'
| 'keydown'
| 'keyup'
| 'keypress'
| 'focus'
| 'blur'
| 'focusin'
| 'focusout'
| 'change'
| 'input'
| 'submit'
| 'reset'
| 'scroll'
| 'wheel'
| 'touchstart'
| 'touchend'
| 'touchmove'
| 'touchcancel'
| 'pointerdown'
| 'pointerup'
| 'pointermove'
| 'pointerenter'
| 'pointerleave'
| 'pointerover'
| 'pointerout'
| 'pointercancel'
| 'dragstart'
| 'drag'
| 'dragend'
| 'dragenter'
| 'dragleave'
| 'dragover'
| 'drop'
| 'contextmenu'
| 'copy'
| 'cut'
| 'paste'`,elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'dblclick'"},{name:"literal",value:"'mousedown'"},{name:"literal",value:"'mouseup'"},{name:"literal",value:"'mousemove'"},{name:"literal",value:"'mouseenter'"},{name:"literal",value:"'mouseleave'"},{name:"literal",value:"'mouseover'"},{name:"literal",value:"'mouseout'"},{name:"literal",value:"'keydown'"},{name:"literal",value:"'keyup'"},{name:"literal",value:"'keypress'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'blur'"},{name:"literal",value:"'focusin'"},{name:"literal",value:"'focusout'"},{name:"literal",value:"'change'"},{name:"literal",value:"'input'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'scroll'"},{name:"literal",value:"'wheel'"},{name:"literal",value:"'touchstart'"},{name:"literal",value:"'touchend'"},{name:"literal",value:"'touchmove'"},{name:"literal",value:"'touchcancel'"},{name:"literal",value:"'pointerdown'"},{name:"literal",value:"'pointerup'"},{name:"literal",value:"'pointermove'"},{name:"literal",value:"'pointerenter'"},{name:"literal",value:"'pointerleave'"},{name:"literal",value:"'pointerover'"},{name:"literal",value:"'pointerout'"},{name:"literal",value:"'pointercancel'"},{name:"literal",value:"'dragstart'"},{name:"literal",value:"'drag'"},{name:"literal",value:"'dragend'"},{name:"literal",value:"'dragenter'"},{name:"literal",value:"'dragleave'"},{name:"literal",value:"'dragover'"},{name:"literal",value:"'drop'"},{name:"literal",value:"'contextmenu'"},{name:"literal",value:"'copy'"},{name:"literal",value:"'cut'"},{name:"literal",value:"'paste'"}]}],raw:"StoppableEvent[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Array of event names to stop propagation for.
Events will be captured at this element and prevented from bubbling up.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to render inside the container."}}};const J={title:"Utilities/StopEvents",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A utility component that prevents specified events from propagating beyond its boundary. Uses `display: contents` to avoid affecting layout."}}},argTypes:{events:{control:"object",description:"Array of event names to stop propagation for"}}},p={args:{events:["click"]},render:o=>{const[i,l]=r.useState(0),[s,n]=r.useState(0);return e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"p-6 bg-surface-secondary rounded-md cursor-pointer",onClick:()=>l(t=>t+1),children:[e.jsx("p",{className:"mb-4 text-foreground-muted",children:"Parent container (click anywhere)"}),e.jsx(c,{...o,children:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",onClick:()=>n(t=>t+1),children:"Button inside StopEvents"})})]}),e.jsxs("div",{className:"text-sm text-foreground-muted",children:[e.jsxs("p",{children:["Parent clicks: ",i]}),e.jsxs("p",{children:["Child clicks: ",s]})]})]})}},m={args:{events:["click"]},render:()=>{const[o,i]=r.useState(0),[l,s]=r.useState(0),[n,t]=r.useState(0);return e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"p-6 bg-surface-secondary rounded-md",onClick:()=>i(a=>a+1),children:[e.jsx("p",{className:"mb-4 text-foreground-muted",children:"Parent container"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(c,{events:["click"],children:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",onClick:()=>s(a=>a+1),children:"With StopEvents"})}),e.jsx("button",{className:"px-4 py-2 bg-surface-tertiary text-foreground rounded-md border border-border",onClick:()=>t(a=>a+1),children:"Without StopEvents"})]})]}),e.jsxs("div",{className:"text-sm text-foreground-muted space-y-1",children:[e.jsxs("p",{children:["Parent clicks: ",o]}),e.jsxs("p",{children:["Button with StopEvents clicks: ",l]}),e.jsxs("p",{children:["Button without StopEvents clicks: ",n]}),e.jsx("p",{className:"text-xs mt-2",children:"Note: Clicking the button without StopEvents increments both the button count and parent count due to event bubbling."})]})]})}},v={args:{events:["click","mousedown","mouseup"]},render:o=>{const[i,l]=r.useState([]),s=n=>{l(t=>[...t.slice(-4),n])};return e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"p-6 bg-surface-secondary rounded-md",onClick:()=>s("Parent: click"),onMouseDown:()=>s("Parent: mousedown"),onMouseUp:()=>s("Parent: mouseup"),children:[e.jsx("p",{className:"mb-4 text-foreground-muted",children:"Parent listens for: click, mousedown, mouseup"}),e.jsx(c,{...o,children:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",onClick:()=>s("Child: click"),onMouseDown:()=>s("Child: mousedown"),onMouseUp:()=>s("Child: mouseup"),children:"Interact with me"})})]}),e.jsxs("div",{className:"text-sm font-mono bg-surface-tertiary p-2 rounded-md min-h-[100px]",children:[i.length===0&&e.jsx("span",{className:"text-foreground-muted",children:"Event log..."}),i.map((n,t)=>e.jsx("div",{children:n},t))]})]})}},g={args:{events:["keydown","keyup"]},render:o=>{const[i,l]=r.useState([]),[s,n]=r.useState([]);return e.jsxs("div",{className:"p-4 space-y-4",children:[e.jsxs("div",{className:"p-6 bg-surface-secondary rounded-md",tabIndex:0,onKeyDown:t=>l(a=>[...a.slice(-2),`Parent: ${t.key}`]),children:[e.jsx("p",{className:"mb-4 text-foreground-muted",children:"Parent container (also focusable - try pressing keys here)"}),e.jsx(c,{...o,children:e.jsx("input",{type:"text",placeholder:"Type here - keys won't bubble to parent",className:"px-3 py-2 border border-border rounded-md w-full",onKeyDown:t=>n(a=>[...a.slice(-2),`Input: ${t.key}`])})})]}),e.jsxs("div",{className:"text-sm text-foreground-muted space-y-1",children:[e.jsxs("p",{children:["Parent key events: ",i.join(", ")||"none"]}),e.jsxs("p",{children:["Input key events: ",s.join(", ")||"none"]})]})]})}},y={args:{events:["click"]},render:()=>e.jsxs("div",{className:"p-4",children:[e.jsxs("p",{className:"mb-4 text-foreground-muted text-sm",children:["The StopEvents wrapper uses ",e.jsx("code",{children:"display: contents"})," so it doesn't affect the flex layout below:"]}),e.jsxs("div",{className:"flex gap-2 p-4 bg-surface-secondary rounded-md",children:[e.jsx("button",{className:"px-4 py-2 bg-surface-tertiary rounded-md",children:"Button 1"}),e.jsx(c,{events:["click"],children:e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Button 2 (wrapped)"})}),e.jsx("button",{className:"px-4 py-2 bg-surface-tertiary rounded-md",children:"Button 3"})]})]})};var b,x,f,k,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    events: ['click']
  },
  render: args => {
    const [parentClicks, setParentClicks] = useState(0);
    const [childClicks, setChildClicks] = useState(0);
    return <div className="p-4 space-y-4">
        <div className="p-6 bg-surface-secondary rounded-md cursor-pointer" onClick={() => setParentClicks(c => c + 1)}>
          <p className="mb-4 text-foreground-muted">
            Parent container (click anywhere)
          </p>
          <StopEvents {...args}>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md" onClick={() => setChildClicks(c => c + 1)}>
              Button inside StopEvents
            </button>
          </StopEvents>
        </div>
        <div className="text-sm text-foreground-muted">
          <p>Parent clicks: {parentClicks}</p>
          <p>Child clicks: {childClicks}</p>
        </div>
      </div>;
  }
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`Basic usage showing click event being stopped.
Click the inner button - the parent click handler won't fire.`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var w,N,C,j,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    events: ['click']
  },
  render: () => {
    const [parentClicks, setParentClicks] = useState(0);
    const [withStopClicks, setWithStopClicks] = useState(0);
    const [withoutStopClicks, setWithoutStopClicks] = useState(0);
    return <div className="p-4 space-y-4">
        <div className="p-6 bg-surface-secondary rounded-md" onClick={() => setParentClicks(c => c + 1)}>
          <p className="mb-4 text-foreground-muted">Parent container</p>
          <div className="flex gap-4">
            <StopEvents events={['click']}>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md" onClick={() => setWithStopClicks(c => c + 1)}>
                With StopEvents
              </button>
            </StopEvents>
            <button className="px-4 py-2 bg-surface-tertiary text-foreground rounded-md border border-border" onClick={() => setWithoutStopClicks(c => c + 1)}>
              Without StopEvents
            </button>
          </div>
        </div>
        <div className="text-sm text-foreground-muted space-y-1">
          <p>Parent clicks: {parentClicks}</p>
          <p>Button with StopEvents clicks: {withStopClicks}</p>
          <p>Button without StopEvents clicks: {withoutStopClicks}</p>
          <p className="text-xs mt-2">
            Note: Clicking the button without StopEvents increments both the
            button count and parent count due to event bubbling.
          </p>
        </div>
      </div>;
  }
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source},description:{story:"Shows the difference between areas with and without event stopping.",...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var P,K,L,B,D;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    events: ['click', 'mousedown', 'mouseup']
  },
  render: args => {
    const [log, setLog] = useState<string[]>([]);
    const addLog = (msg: string) => {
      setLog(l => [...l.slice(-4), msg]);
    };
    return <div className="p-4 space-y-4">
        <div className="p-6 bg-surface-secondary rounded-md" onClick={() => addLog('Parent: click')} onMouseDown={() => addLog('Parent: mousedown')} onMouseUp={() => addLog('Parent: mouseup')}>
          <p className="mb-4 text-foreground-muted">
            Parent listens for: click, mousedown, mouseup
          </p>
          <StopEvents {...args}>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md" onClick={() => addLog('Child: click')} onMouseDown={() => addLog('Child: mousedown')} onMouseUp={() => addLog('Child: mouseup')}>
              Interact with me
            </button>
          </StopEvents>
        </div>
        <div className="text-sm font-mono bg-surface-tertiary p-2 rounded-md min-h-[100px]">
          {log.length === 0 && <span className="text-foreground-muted">Event log...</span>}
          {log.map((entry, i) => <div key={i}>{entry}</div>)}
        </div>
      </div>;
  }
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"Stopping multiple event types at once.",...(D=(B=v.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var M,I,R,T,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    events: ['keydown', 'keyup']
  },
  render: args => {
    const [parentKeys, setParentKeys] = useState<string[]>([]);
    const [childKeys, setChildKeys] = useState<string[]>([]);
    return <div className="p-4 space-y-4">
        <div className="p-6 bg-surface-secondary rounded-md" tabIndex={0} onKeyDown={e => setParentKeys(k => [...k.slice(-2), \`Parent: \${e.key}\`])}>
          <p className="mb-4 text-foreground-muted">
            Parent container (also focusable - try pressing keys here)
          </p>
          <StopEvents {...args}>
            <input type="text" placeholder="Type here - keys won't bubble to parent" className="px-3 py-2 border border-border rounded-md w-full" onKeyDown={e => setChildKeys(k => [...k.slice(-2), \`Input: \${e.key}\`])} />
          </StopEvents>
        </div>
        <div className="text-sm text-foreground-muted space-y-1">
          <p>Parent key events: {parentKeys.join(', ') || 'none'}</p>
          <p>Input key events: {childKeys.join(', ') || 'none'}</p>
        </div>
      </div>;
  }
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"Useful for preventing keyboard events from bubbling.",...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.description}}};var U,A,_,$,O;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    events: ['click']
  },
  render: () => <div className="p-4">
      <p className="mb-4 text-foreground-muted text-sm">
        The StopEvents wrapper uses <code>display: contents</code> so it
        doesn&apos;t affect the flex layout below:
      </p>
      <div className="flex gap-2 p-4 bg-surface-secondary rounded-md">
        <button className="px-4 py-2 bg-surface-tertiary rounded-md">
          Button 1
        </button>
        <StopEvents events={['click']}>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Button 2 (wrapped)
          </button>
        </StopEvents>
        <button className="px-4 py-2 bg-surface-tertiary rounded-md">
          Button 3
        </button>
      </div>
    </div>
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source},description:{story:"StopEvents uses `display: contents` so it doesn't affect layout.",...(O=($=y.parameters)==null?void 0:$.docs)==null?void 0:O.description}}};const Q=["Default","Comparison","MultipleEvents","KeyboardEvents","LayoutNeutral"];export{m as Comparison,p as Default,g as KeyboardEvents,y as LayoutNeutral,v as MultipleEvents,Q as __namedExportsOrder,J as default};
