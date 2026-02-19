import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as R}from"./index-CsAwyYjM.js";import{r as a}from"./index-pP6CS22B.js";import{c as O}from"./index-EXTQMK5R.js";import{c as d}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Fe=O(["inline-flex flex-row items-start box-border w-auto min-h-[24px]","outline-none cursor-pointer select-none"],{variants:{isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isDisabled:!1}}),Ee=O(["relative w-[18px] h-[18px] mt-[3px] flex-shrink-0","rounded-[var(--sinch-comp-checkbox-shape-radius)]","border border-solid transition-colors duration-100","box-border"],{variants:{isChecked:{true:["bg-[var(--sinch-comp-checkbox-color-checked-background-initial)]","border-[var(--sinch-comp-checkbox-color-checked-border-initial)]"],false:["bg-[var(--sinch-comp-checkbox-color-default-background-initial)]","border-[var(--sinch-comp-checkbox-color-default-border-initial)]"]},isInvalid:{true:["bg-[var(--sinch-comp-checkbox-color-invalid-background-initial)]","border-[var(--sinch-comp-checkbox-color-invalid-border-initial)]"],false:""},isDisabled:{true:["bg-[var(--sinch-comp-checkbox-color-disabled-background-initial)]","border-[var(--sinch-comp-checkbox-color-disabled-border-initial)]"],false:""}},compoundVariants:[{isChecked:!0,isDisabled:!0,className:["bg-[var(--sinch-comp-checkbox-color-checked-disabled-background-initial)]","border-[var(--sinch-comp-checkbox-color-checked-disabled-border-initial)]"]}],defaultVariants:{isChecked:!1,isInvalid:!1,isDisabled:!1}}),Le=O(["absolute inset-[-3px] pointer-events-none","border-2 border-[var(--sinch-comp-checkbox-color-default-outline-focus)]","rounded-[calc(var(--sinch-comp-checkbox-shape-radius)+3px)]","transition-opacity duration-100 opacity-0"],{variants:{isFocused:{true:"opacity-100",false:""}},defaultVariants:{isFocused:!1}}),Ve=()=>e.jsx("svg",{className:"absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17Z"})}),qe=()=>e.jsx("svg",{className:"absolute left-[1px] top-[1px] w-4 h-4 pointer-events-none fill-[var(--sinch-sys-color-surface-primary-default)]",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1Z"})}),t=a.forwardRef(({className:m,name:r,value:n="",checked:o,defaultChecked:l=!1,indeterminate:F=!1,disabled:i=!1,invalid:u=!1,text:E,"aria-label":ge,onChange:x,onFocus:p,onBlur:b,onKeyDown:f,...Ce},h)=>{const[ye,Ne]=a.useState(l),[je,H]=a.useState(!1),L=a.useRef(null),V=o!==void 0,c=V?o:ye;a.useEffect(()=>{h!=null&&(typeof h=="function"?h(L.current):h.current=L.current)},[h]);const q=a.useCallback(()=>{if(i)return;const s=!c;V||Ne(s),x==null||x(s)},[i,c,V,x]),De=a.useCallback(s=>{s.code==="Space"&&(s.preventDefault(),q()),f==null||f(s)},[q,f]),we=a.useCallback(s=>{H(!0),p==null||p(s)},[p]),Se=a.useCallback(s=>{H(!1),b==null||b(s)},[b]),Ie=()=>i?"":c&&!u?["hover:bg-[var(--sinch-comp-checkbox-color-checked-background-hover)]","hover:border-[var(--sinch-comp-checkbox-color-checked-border-hover)]","active:bg-[var(--sinch-comp-checkbox-color-checked-background-active)]","active:border-[var(--sinch-comp-checkbox-color-checked-border-active)]"].join(" "):u?["hover:bg-[var(--sinch-comp-checkbox-color-invalid-background-hover)]","hover:border-[var(--sinch-comp-checkbox-color-invalid-border-hover)]","active:bg-[var(--sinch-comp-checkbox-color-invalid-background-active)]","active:border-[var(--sinch-comp-checkbox-color-invalid-border-active)]"].join(" "):["hover:bg-[var(--sinch-comp-checkbox-color-default-background-hover)]","hover:border-[var(--sinch-comp-checkbox-color-default-border-hover)]","active:bg-[var(--sinch-comp-checkbox-color-default-background-active)]","active:border-[var(--sinch-comp-checkbox-color-default-border-active)]"].join(" "),Te=()=>i?"text-[var(--sinch-comp-checkbox-color-disabled-text-initial)]":u?"text-[var(--sinch-comp-checkbox-color-invalid-text-initial)]":"text-[var(--sinch-comp-checkbox-color-default-text-initial)]";return e.jsxs("div",{ref:L,role:"checkbox","aria-checked":c&&F?"mixed":c,"aria-disabled":i,"aria-invalid":u,"aria-label":ge??E,tabIndex:i?-1:0,"data-name":r,"data-value":c?n.length>0?n:"on":"",className:d(Fe({isDisabled:i}),m),onClick:q,onKeyDown:De,onFocus:we,onBlur:Se,...Ce,children:[e.jsxs("div",{className:"relative w-[18px] h-[18px] mt-[3px] flex-shrink-0",children:[e.jsx("div",{className:d(Le({isFocused:je}))}),e.jsx("div",{className:d(Ee({isChecked:c,isInvalid:u&&!c,isDisabled:i}),Ie())}),e.jsx("div",{className:d("transition-opacity duration-100",c&&!F?"opacity-100":"opacity-0"),children:e.jsx(Ve,{})}),e.jsx("div",{className:d("transition-opacity duration-100",c&&F?"opacity-100":"opacity-0"),children:e.jsx(qe,{})})]}),E&&e.jsx("span",{className:d("flex-1 self-center pl-2","font-[var(--sinch-comp-checkbox-font-label)]",Te(),i?"cursor-default":"cursor-pointer"),children:E})]})});t.displayName="Checkbox";t.__docgenInfo={description:`Checkbox component for binary or tri-state selections.

Supports controlled and uncontrolled patterns, indeterminate state,
form integration, and keyboard navigation.`,methods:[],displayName:"Checkbox",props:{name:{required:!1,tsType:{name:"string"},description:"Name for form submissions"},value:{required:!1,tsType:{name:"string"},description:"Value for form submissions (defaults to 'on' if checked)",defaultValue:{value:"''",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Controlled checked state"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"Default checked state for uncontrolled usage",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate state - shows a dash instead of checkmark when checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Label text displayed next to the checkbox"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler - receives the new checked state"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"}},composes:["Omit","VariantProps"]};const _e={title:"Components/Checkbox",component:t,tags:["autodocs"],args:{onChange:R(),onFocus:R(),onBlur:R()},argTypes:{checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state for uncontrolled usage"},indeterminate:{control:"boolean",description:"Shows indeterminate state (dash icon)"},disabled:{control:"boolean",description:"Disabled state"},invalid:{control:"boolean",description:"Invalid/error state"},text:{control:"text",description:"Label text"},name:{control:"text",description:"Form name attribute"},value:{control:"text",description:"Form value attribute"},"aria-label":{control:"text",description:"Accessible label"}}},k={args:{text:"Checkbox label"}},v={args:{text:"Checked checkbox",defaultChecked:!0}},g={args:{text:"Indeterminate checkbox",defaultChecked:!0,indeterminate:!0}},C={args:{text:"Disabled checkbox",disabled:!0}},y={args:{text:"Disabled checked checkbox",defaultChecked:!0,disabled:!0}},N={args:{text:"Invalid checkbox",invalid:!0}},j={args:{"aria-label":"Checkbox without visible label"}},D={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{text:"Unchecked"}),e.jsx(t,{text:"Checked",defaultChecked:!0}),e.jsx(t,{text:"Indeterminate",defaultChecked:!0,indeterminate:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Invalid"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{text:"Unchecked",invalid:!0}),e.jsx(t,{text:"Checked",defaultChecked:!0,invalid:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Disabled"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{text:"Unchecked",disabled:!0}),e.jsx(t,{text:"Checked",defaultChecked:!0,disabled:!0})]})]})]})},w={render:function(){const[r,n]=a.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{text:`Controlled checkbox (${r?"checked":"unchecked"})`,checked:r,onChange:n}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md w-fit",onClick:()=>n(!r),children:"Toggle from outside"})]})}},S={args:{text:"This is a checkbox with a very long label that might wrap to multiple lines in a narrow container"},decorators:[m=>e.jsx("div",{className:"max-w-[200px]",children:e.jsx(m,{})})]},I={render:function(){const[r,n]=a.useState({terms:!1,newsletter:!1,notifications:!0});return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:o=>{o.preventDefault(),alert(JSON.stringify(r,null,2))},children:[e.jsx(t,{name:"terms",text:"I agree to the terms and conditions",checked:r.terms,onChange:o=>n(l=>({...l,terms:o}))}),e.jsx(t,{name:"newsletter",text:"Subscribe to newsletter",checked:r.newsletter,onChange:o=>n(l=>({...l,newsletter:o}))}),e.jsx(t,{name:"notifications",text:"Enable notifications",checked:r.notifications,onChange:o=>n(l=>({...l,notifications:o}))}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit",children:"Submit"})]})}},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Use Tab to navigate and Space to toggle"}),e.jsx(t,{text:"Option 1"}),e.jsx(t,{text:"Option 2"}),e.jsx(t,{text:"Option 3"})]})};var M,U,A;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Checkbox label'
  }
}`,...(A=(U=k.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var _,B,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Checked checkbox',
    defaultChecked: true
  }
}`,...(W=(B=v.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var J,Z,$;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: 'Indeterminate checkbox',
    defaultChecked: true,
    indeterminate: true
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var P,z,G;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Disabled checkbox',
    disabled: true
  }
}`,...(G=(z=C.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: 'Disabled checked checkbox',
    defaultChecked: true,
    disabled: true
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var K,ee,te;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: 'Invalid checkbox',
    invalid: true
  }
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Checkbox without visible label'
  }
}`,...(oe=(re=j.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,se,ne;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked" />
          <Checkbox text="Checked" defaultChecked />
          <Checkbox text="Indeterminate" defaultChecked indeterminate />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Invalid</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked" invalid />
          <Checkbox text="Checked" defaultChecked invalid />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <div className="flex gap-4">
          <Checkbox text="Unchecked" disabled />
          <Checkbox text="Checked" defaultChecked disabled />
        </div>
      </div>
    </div>
}`,...(ne=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,le,de;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: function ControlledCheckbox() {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Checkbox text={\`Controlled checkbox (\${checked ? 'checked' : 'unchecked'})\`} checked={checked} onChange={setChecked} />
        <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md w-fit" onClick={() => setChecked(!checked)}>
          Toggle from outside
        </button>
      </div>;
  }
}`,...(de=(le=w.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,ue,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    text: 'This is a checkbox with a very long label that might wrap to multiple lines in a narrow container'
  },
  decorators: [Story => <div className="max-w-[200px]">
        <Story />
      </div>]
}`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var xe,pe,be;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: function FormExample() {
    const [formData, setFormData] = useState<Record<string, boolean>>({
      terms: false,
      newsletter: false,
      notifications: true
    });
    return <form className="flex flex-col gap-4" onSubmit={e => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    }}>
        <Checkbox name="terms" text="I agree to the terms and conditions" checked={formData.terms} onChange={checked => setFormData(prev => ({
        ...prev,
        terms: checked
      }))} />
        <Checkbox name="newsletter" text="Subscribe to newsletter" checked={formData.newsletter} onChange={checked => setFormData(prev => ({
        ...prev,
        newsletter: checked
      }))} />
        <Checkbox name="notifications" text="Enable notifications" checked={formData.notifications} onChange={checked => setFormData(prev => ({
        ...prev,
        notifications: checked
      }))} />
        <button type="submit" className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit">
          Submit
        </button>
      </form>;
  }
}`,...(be=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,ke,ve;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to navigate and Space to toggle
      </p>
      <Checkbox text="Option 1" />
      <Checkbox text="Option 2" />
      <Checkbox text="Option 3" />
    </div>
}`,...(ve=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const Be=["Default","Checked","Indeterminate","Disabled","DisabledChecked","Invalid","WithoutLabel","AllStates","Controlled","LongText","FormIntegration","KeyboardNavigation"];export{D as AllStates,v as Checked,w as Controlled,k as Default,C as Disabled,y as DisabledChecked,I as FormIntegration,g as Indeterminate,N as Invalid,T as KeyboardNavigation,S as LongText,j as WithoutLabel,Be as __namedExportsOrder,_e as default};
