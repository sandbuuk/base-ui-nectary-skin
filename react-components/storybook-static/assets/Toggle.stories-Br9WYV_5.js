import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as Fe}from"./index-CsAwyYjM.js";import{r as o}from"./index-pP6CS22B.js";import{c as F}from"./index-EXTQMK5R.js";import{c as d}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ze=F(["inline-flex items-center gap-2 outline-none","cursor-pointer select-none"],{variants:{small:{true:"[--sinch-local-size:16px] [--sinch-local-width:32px] [--sinch-local-knob-size:12px] [--sinch-local-translate:16px]",false:"[--sinch-local-size:20px] [--sinch-local-width:40px] [--sinch-local-knob-size:16px] [--sinch-local-translate:20px]"},disabled:{true:"cursor-default",false:""}},defaultVariants:{small:!1,disabled:!1}}),Le=F(["relative","w-[var(--sinch-local-width)] h-[var(--sinch-local-size)]","rounded-[calc(var(--sinch-local-size)*0.5)]","transition-colors duration-150 ease-in-out","pointer-events-none"],{variants:{checked:{true:"bg-[var(--sinch-comp-toggle-color-checked-background-initial)]",false:"bg-[var(--sinch-comp-toggle-color-default-background-initial)]"},disabled:{true:"",false:""}},compoundVariants:[{checked:!1,disabled:!0,className:"bg-[var(--sinch-comp-toggle-color-disabled-background-initial)]"},{checked:!0,disabled:!0,className:"bg-[var(--sinch-comp-toggle-color-checked-disabled-background-initial)]"}],defaultVariants:{checked:!1,disabled:!1}}),Ve=F(["relative","w-[var(--sinch-local-knob-size)] h-[var(--sinch-local-knob-size)]","left-[2px] top-[2px]","rounded-full","bg-[var(--sinch-comp-toggle-color-default-knob-background-initial)]","transition-transform duration-150 ease-in-out","will-change-transform"],{variants:{checked:{true:"translate-x-[var(--sinch-local-translate)]",false:"translate-x-0"},disabled:{true:"shadow-[var(--sinch-comp-toggle-shadow-knob-disabled)]",false:"shadow-[var(--sinch-comp-toggle-shadow-knob-default)]"}},defaultVariants:{checked:!1,disabled:!1}}),Me=F(["flex-1 min-w-0","self-center","overflow-hidden whitespace-nowrap text-ellipsis"],{variants:{small:{true:"font-[var(--sinch-comp-toggle-font-size-s-label)]",false:"font-[var(--sinch-comp-toggle-font-size-m-label)]"},disabled:{true:"text-[var(--sinch-comp-toggle-color-disabled-label-initial)]",false:"text-[var(--sinch-comp-toggle-color-default-label-initial)]"}},defaultVariants:{small:!1,disabled:!1}}),a=o.forwardRef(({className:z,checked:t,defaultChecked:i=!1,small:n=!1,labeled:ve=!1,disabled:s=!1,text:L,"aria-label":Se,onChange:c,onFocus:g,onBlur:f,onKeyDown:h,onClick:p,...Ce},Te)=>{const[je,V]=o.useState(i),[Ne,M]=o.useState(!1),u=t!==void 0,r=u?t:je,we=o.useCallback(l=>{if(s)return;const m=!r;u||V(m),c==null||c(m),p==null||p(l)},[s,r,u,c,p]),ye=o.useCallback(l=>{if((l.code==="Space"||l.code==="Enter")&&(l.preventDefault(),!s)){const m=!r;u||V(m),c==null||c(m)}h==null||h(l)},[s,r,u,c,h]),De=o.useCallback(l=>{M(!0),g==null||g(l)},[g]),Ee=o.useCallback(l=>{M(!1),f==null||f(l)},[f]);return e.jsxs("div",{ref:Te,role:"checkbox","aria-checked":r,"aria-disabled":s,"aria-label":Se,tabIndex:s?-1:0,className:d(ze({small:n,disabled:s}),z),onClick:we,onKeyDown:ye,onFocus:De,onBlur:Ee,...Ce,children:[e.jsxs("div",{className:d(Le({checked:r,disabled:s})),children:[e.jsx("div",{className:d("absolute -inset-[3px] pointer-events-none","border-2 border-[var(--sinch-comp-toggle-color-default-outline-focus)]","rounded-[17px]",Ne?"block":"hidden")}),e.jsx("div",{className:d(Ve({checked:r,disabled:s})),children:ve&&!n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d("absolute top-0 right-full px-[1px]","font-[var(--sinch-comp-toggle-font-size-m-inside-text)]","text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]","uppercase select-none","transition-opacity duration-150 ease-in-out",r?"opacity-100":"opacity-0"),children:"on"}),e.jsx("span",{className:d("absolute top-0 left-full px-[1px]","font-[var(--sinch-comp-toggle-font-size-m-inside-text)]","text-[var(--sinch-comp-toggle-color-default-text-inside-initial)]","uppercase select-none","transition-opacity duration-150 ease-in-out",r?"opacity-0":"opacity-100"),children:"off"})]})})]}),L&&e.jsx("span",{className:d(Me({small:n,disabled:s})),children:L})]})});a.displayName="Toggle";a.__docgenInfo={description:`Toggle component for boolean on/off states.

Supports controlled and uncontrolled patterns, small size variant,
optional on/off labels, and accessible keyboard navigation.`,methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Controlled checked state"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},small:{required:!1,tsType:{name:"boolean"},description:`Small size variant
@default false`,defaultValue:{value:"false",computed:!1}},labeled:{required:!1,tsType:{name:"boolean"},description:`Show on/off labels inside the toggle
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Label text displayed next to the toggle"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label (required if no text)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler - receives the new checked value"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"}},composes:["Omit"]};const Ae={title:"Components/Toggle",component:a,tags:["autodocs"],args:{onChange:Fe()},argTypes:{checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state for uncontrolled usage"},small:{control:"boolean",description:"Small size variant"},labeled:{control:"boolean",description:"Show on/off labels inside the toggle"},disabled:{control:"boolean",description:"Disabled state"},text:{control:"text",description:"Label text displayed next to the toggle"}}},b={args:{"aria-label":"Toggle setting"}},x={args:{defaultChecked:!0,"aria-label":"Toggle setting"}},k={args:{text:"Enable notifications"}},v={args:{text:"Enable notifications",defaultChecked:!0}},S={args:{small:!0,"aria-label":"Toggle setting"}},C={args:{small:!0,text:"Compact toggle"}},T={args:{labeled:!0,"aria-label":"Toggle with labels"}},j={args:{labeled:!0,defaultChecked:!0,"aria-label":"Toggle with labels"}},N={args:{disabled:!0,text:"Disabled toggle"}},w={args:{disabled:!0,defaultChecked:!0,text:"Disabled toggle (on)"}},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Default Size"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{"aria-label":"Unchecked"}),e.jsx(a,{defaultChecked:!0,"aria-label":"Checked"}),e.jsx(a,{text:"With label"}),e.jsx(a,{text:"Checked with label",defaultChecked:!0}),e.jsx(a,{labeled:!0,"aria-label":"With on/off labels"}),e.jsx(a,{labeled:!0,defaultChecked:!0,"aria-label":"Checked with on/off labels"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Small Size"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{small:!0,"aria-label":"Small unchecked"}),e.jsx(a,{small:!0,defaultChecked:!0,"aria-label":"Small checked"}),e.jsx(a,{small:!0,text:"Small with label"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Disabled States"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{disabled:!0,text:"Disabled unchecked"}),e.jsx(a,{disabled:!0,defaultChecked:!0,text:"Disabled checked"}),e.jsx(a,{disabled:!0,small:!0,text:"Small disabled"})]})]})]})},D={render:function(){const[t,i]=o.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{checked:t,onChange:i,text:t?"Feature enabled":"Feature disabled"}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current state: ",e.jsx("strong",{children:t?"ON":"OFF"})]})]})}},E={render:function(){const[t,i]=o.useState({notifications:!0,darkMode:!1,autoSave:!0});return e.jsxs("div",{className:"flex flex-col gap-4 p-4 rounded-md border border-border",children:[e.jsx("h3",{className:"font-medium",children:"Settings"}),e.jsx(a,{checked:t.notifications,onChange:n=>i({...t,notifications:n}),text:"Push notifications"}),e.jsx(a,{checked:t.darkMode,onChange:n=>i({...t,darkMode:n}),text:"Dark mode"}),e.jsx(a,{checked:t.autoSave,onChange:n=>i({...t,autoSave:n}),text:"Auto-save drafts"}),e.jsx("pre",{className:"text-xs bg-surface-secondary p-2 rounded",children:JSON.stringify(t,null,2)})]})}};var q,W,O;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Toggle setting'
  }
}`,...(O=(W=b.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var R,I,H;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    'aria-label': 'Toggle setting'
  }
}`,...(H=(I=x.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var A,_,J;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: 'Enable notifications'
  }
}`,...(J=(_=k.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var P,U,G;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Enable notifications',
    defaultChecked: true
  }
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    small: true,
    'aria-label': 'Toggle setting'
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,B;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    small: true,
    text: 'Compact toggle'
  }
}`,...(B=($=C.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var K,ee,ae;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    labeled: true,
    'aria-label': 'Toggle with labels'
  }
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,le;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    labeled: true,
    defaultChecked: true,
    'aria-label': 'Toggle with labels'
  }
}`,...(le=(se=j.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,re,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    disabled: true,
    text: 'Disabled toggle'
  }
}`,...(oe=(re=N.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,ie,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    text: 'Disabled toggle (on)'
  }
}`,...(de=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,me,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Default Size</h3>
        <div className="flex flex-col gap-3">
          <Toggle aria-label="Unchecked" />
          <Toggle defaultChecked aria-label="Checked" />
          <Toggle text="With label" />
          <Toggle text="Checked with label" defaultChecked />
          <Toggle labeled aria-label="With on/off labels" />
          <Toggle labeled defaultChecked aria-label="Checked with on/off labels" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small Size</h3>
        <div className="flex flex-col gap-3">
          <Toggle small aria-label="Small unchecked" />
          <Toggle small defaultChecked aria-label="Small checked" />
          <Toggle small text="Small with label" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled States</h3>
        <div className="flex flex-col gap-3">
          <Toggle disabled text="Disabled unchecked" />
          <Toggle disabled defaultChecked text="Disabled checked" />
          <Toggle disabled small text="Small disabled" />
        </div>
      </div>
    </div>
}`,...(ge=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var fe,he,pe;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: function ControlledToggle() {
    const [isChecked, setIsChecked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Toggle checked={isChecked} onChange={setIsChecked} text={isChecked ? 'Feature enabled' : 'Feature disabled'} />
        <p className="text-sm text-foreground-muted">
          Current state: <strong>{isChecked ? 'ON' : 'OFF'}</strong>
        </p>
      </div>;
  }
}`,...(pe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var be,xe,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: function FormToggle() {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true
    });
    return <div className="flex flex-col gap-4 p-4 rounded-md border border-border">
        <h3 className="font-medium">Settings</h3>
        <Toggle checked={settings.notifications} onChange={checked => setSettings({
        ...settings,
        notifications: checked
      })} text="Push notifications" />
        <Toggle checked={settings.darkMode} onChange={checked => setSettings({
        ...settings,
        darkMode: checked
      })} text="Dark mode" />
        <Toggle checked={settings.autoSave} onChange={checked => setSettings({
        ...settings,
        autoSave: checked
      })} text="Auto-save drafts" />
        <pre className="text-xs bg-surface-secondary p-2 rounded">
          {JSON.stringify(settings, null, 2)}
        </pre>
      </div>;
  }
}`,...(ke=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};const _e=["Default","Checked","WithLabel","WithLabelChecked","Small","SmallWithLabel","Labeled","LabeledChecked","Disabled","DisabledChecked","AllVariants","Controlled","FormExample"];export{y as AllVariants,x as Checked,D as Controlled,b as Default,N as Disabled,w as DisabledChecked,E as FormExample,T as Labeled,j as LabeledChecked,S as Small,C as SmallWithLabel,k as WithLabel,v as WithLabelChecked,_e as __namedExportsOrder,Ae as default};
