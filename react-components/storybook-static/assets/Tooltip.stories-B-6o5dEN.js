import{j as t}from"./jsx-runtime-Z5uAzocK.js";import{r as ot}from"./index-pP6CS22B.js";import{T as e}from"./Tooltip-WtcvfBIx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const ct={title:"Components/Tooltip",component:e,tags:["autodocs"],argTypes:{text:{control:"text",description:"Text content to display in the tooltip"},orientation:{control:"select",options:["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],description:"Position of the tooltip relative to the target"},textAlign:{control:"select",options:["left","center","right"],description:"Text alignment within the tooltip"},type:{control:"select",options:["slow","fast"],description:"Delay before showing - slow (1000ms) or fast (250ms)"},isOpen:{control:"boolean",description:"Controlled open state"}},decorators:[n=>t.jsx("div",{className:"flex items-center justify-center min-h-[200px] p-16",children:t.jsx(n,{})})]},o=({children:n="Hover me"})=>t.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover transition-colors",children:n}),s={args:{text:"This is a tooltip",children:t.jsx(o,{})}},i={args:{text:"This tooltip appears faster (250ms delay)",type:"fast",children:t.jsx(o,{children:"Hover me (fast)"})}},a={args:{text:"This tooltip appears slower (1000ms delay)",type:"slow",children:t.jsx(o,{children:"Hover me (slow)"})}},l={render:()=>t.jsxs("div",{className:"grid grid-cols-3 gap-8 p-8",children:[t.jsx("div",{}),t.jsx(e,{text:"Top",orientation:"top",children:t.jsx(o,{children:"Top"})}),t.jsx("div",{}),t.jsx(e,{text:"Left",orientation:"left",children:t.jsx(o,{children:"Left"})}),t.jsx("div",{}),t.jsx(e,{text:"Right",orientation:"right",children:t.jsx(o,{children:"Right"})}),t.jsx("div",{}),t.jsx(e,{text:"Bottom",orientation:"bottom",children:t.jsx(o,{children:"Bottom"})}),t.jsx("div",{})]})},c={render:()=>t.jsxs("div",{className:"grid grid-cols-2 gap-16 p-8",children:[t.jsx(e,{text:"Top-Left orientation",orientation:"top-left",children:t.jsx(o,{children:"Top-Left"})}),t.jsx(e,{text:"Top-Right orientation",orientation:"top-right",children:t.jsx(o,{children:"Top-Right"})}),t.jsx(e,{text:"Bottom-Left orientation",orientation:"bottom-left",children:t.jsx(o,{children:"Bottom-Left"})}),t.jsx(e,{text:"Bottom-Right orientation",orientation:"bottom-right",children:t.jsx(o,{children:"Bottom-Right"})})]})},d={render:()=>t.jsxs("div",{className:"flex gap-8",children:[t.jsx(e,{text:"This is left-aligned text that may span multiple lines",textAlign:"left",orientation:"bottom",children:t.jsx(o,{children:"Left Align"})}),t.jsx(e,{text:"This is centered text that may span multiple lines",textAlign:"center",orientation:"bottom",children:t.jsx(o,{children:"Center Align"})}),t.jsx(e,{text:"This is right-aligned text that may span multiple lines",textAlign:"right",orientation:"bottom",children:t.jsx(o,{children:"Right Align"})})]})},p={args:{text:"This is a longer tooltip text that demonstrates how the tooltip handles content that exceeds the typical length. It will wrap to multiple lines while respecting the max-width constraint.",orientation:"bottom",children:t.jsx(o,{children:"Long tooltip text"})}},m={render:()=>{const[n,r]=ot.useState(!1);return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsxs("div",{className:"flex gap-4",children:[t.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>r(!0),children:"Show Tooltip"}),t.jsx("button",{className:"px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover",onClick:()=>r(!1),children:"Hide Tooltip"})]}),t.jsx(e,{text:"This tooltip is controlled",isOpen:n,children:t.jsx("div",{className:"px-4 py-2 bg-surface-tertiary rounded-md",children:"Target Element"})})]})}},h={render:()=>{const[n,r]=ot.useState([]),y=f=>{r(v=>[...v.slice(-4),`${new Date().toLocaleTimeString()}: ${f}`])};return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsx(e,{text:"Hover to trigger callbacks",type:"fast",onShow:()=>y("onShow called"),onHide:()=>y("onHide called"),children:t.jsx(o,{children:"Hover for callbacks"})}),t.jsxs("div",{className:"mt-4 p-4 bg-surface-secondary rounded text-sm font-mono w-80",children:[t.jsx("p",{className:"text-foreground-muted mb-2",children:"Event Log:"}),n.length===0?t.jsx("p",{className:"text-foreground-caption",children:"No events yet"}):n.map((f,v)=>t.jsx("p",{className:"text-foreground",children:f},v))]})]})}},x={render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(e,{text:"Edit",type:"fast",children:t.jsx("button",{className:"w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),t.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})}),t.jsx(e,{text:"Delete",type:"fast",children:t.jsx("button",{className:"w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover text-danger",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("polyline",{points:"3 6 5 6 21 6"}),t.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})}),t.jsx(e,{text:"Settings",type:"fast",children:t.jsx("button",{className:"w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]})})})]})},u={render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(e,{text:"Click to view profile",orientation:"top",children:t.jsx("div",{className:"w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold cursor-pointer",children:"JD"})}),t.jsx(e,{text:"Online - Last seen 5 minutes ago",orientation:"top",children:t.jsx("div",{className:"w-12 h-12 rounded-full bg-success flex items-center justify-center text-pure font-semibold cursor-pointer",children:"AB"})})]})},g={args:{text:"",children:t.jsx(o,{children:"No tooltip (empty text)"})}};var T,j,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: 'This is a tooltip',
    children: <DemoButton />
  }
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,B,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'This tooltip appears faster (250ms delay)',
    type: 'fast',
    children: <DemoButton>Hover me (fast)</DemoButton>
  }
}`,...(N=(B=i.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var D,L,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'This tooltip appears slower (1000ms delay)',
    type: 'slow',
    children: <DemoButton>Hover me (slow)</DemoButton>
  }
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var C,k,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-8 p-8">
      <div />
      <Tooltip text="Top" orientation="top">
        <DemoButton>Top</DemoButton>
      </Tooltip>
      <div />

      <Tooltip text="Left" orientation="left">
        <DemoButton>Left</DemoButton>
      </Tooltip>
      <div />
      <Tooltip text="Right" orientation="right">
        <DemoButton>Right</DemoButton>
      </Tooltip>

      <div />
      <Tooltip text="Bottom" orientation="bottom">
        <DemoButton>Bottom</DemoButton>
      </Tooltip>
      <div />
    </div>
}`,...(H=(k=l.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var A,O,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-16 p-8">
      <Tooltip text="Top-Left orientation" orientation="top-left">
        <DemoButton>Top-Left</DemoButton>
      </Tooltip>
      <Tooltip text="Top-Right orientation" orientation="top-right">
        <DemoButton>Top-Right</DemoButton>
      </Tooltip>
      <Tooltip text="Bottom-Left orientation" orientation="bottom-left">
        <DemoButton>Bottom-Left</DemoButton>
      </Tooltip>
      <Tooltip text="Bottom-Right orientation" orientation="bottom-right">
        <DemoButton>Bottom-Right</DemoButton>
      </Tooltip>
    </div>
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var V,W,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <Tooltip text="This is left-aligned text that may span multiple lines" textAlign="left" orientation="bottom">
        <DemoButton>Left Align</DemoButton>
      </Tooltip>
      <Tooltip text="This is centered text that may span multiple lines" textAlign="center" orientation="bottom">
        <DemoButton>Center Align</DemoButton>
      </Tooltip>
      <Tooltip text="This is right-aligned text that may span multiple lines" textAlign="right" orientation="bottom">
        <DemoButton>Right Align</DemoButton>
      </Tooltip>
    </div>
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,M,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'This is a longer tooltip text that demonstrates how the tooltip handles content that exceeds the typical length. It will wrap to multiple lines while respecting the max-width constraint.',
    orientation: 'bottom',
    children: <DemoButton>Long tooltip text</DemoButton>
  }
}`,...(z=(M=p.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var $,F,J;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setIsOpen(true)}>
            Show Tooltip
          </button>
          <button className="px-3 py-1.5 bg-surface-secondary rounded text-sm hover:bg-surface-secondary-hover" onClick={() => setIsOpen(false)}>
            Hide Tooltip
          </button>
        </div>
        <Tooltip text="This tooltip is controlled" isOpen={isOpen}>
          <div className="px-4 py-2 bg-surface-tertiary rounded-md">
            Target Element
          </div>
        </Tooltip>
      </div>;
  }
}`,...(J=(F=m.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var _,P,q;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLog(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div className="flex flex-col items-center gap-4">
        <Tooltip text="Hover to trigger callbacks" type="fast" onShow={() => addLog('onShow called')} onHide={() => addLog('onHide called')}>
          <DemoButton>Hover for callbacks</DemoButton>
        </Tooltip>
        <div className="mt-4 p-4 bg-surface-secondary rounded text-sm font-mono w-80">
          <p className="text-foreground-muted mb-2">Event Log:</p>
          {log.length === 0 ? <p className="text-foreground-caption">No events yet</p> : log.map((entry, i) => <p key={i} className="text-foreground">
                {entry}
              </p>)}
        </div>
      </div>;
  }
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var G,K,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip text="Edit" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip text="Delete" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover text-danger">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip text="Settings" type="fast">
        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-surface-secondary hover:bg-surface-secondary-hover">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </Tooltip>
    </div>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip text="Click to view profile" orientation="top">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold cursor-pointer">
          JD
        </div>
      </Tooltip>
      <Tooltip text="Online - Last seen 5 minutes ago" orientation="top">
        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center text-pure font-semibold cursor-pointer">
          AB
        </div>
      </Tooltip>
    </div>
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    text: '',
    children: <DemoButton>No tooltip (empty text)</DemoButton>
  }
}`,...(et=(tt=g.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};const dt=["Default","FastType","SlowType","Orientations","CornerOrientations","TextAlignment","LongText","Controlled","WithCallbacks","OnIconButton","WithCustomContent","NoText"];export{m as Controlled,c as CornerOrientations,s as Default,i as FastType,p as LongText,g as NoText,x as OnIconButton,l as Orientations,a as SlowType,d as TextAlignment,h as WithCallbacks,u as WithCustomContent,dt as __namedExportsOrder,ct as default};
