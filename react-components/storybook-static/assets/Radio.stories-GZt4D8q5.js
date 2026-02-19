import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as we}from"./index-CsAwyYjM.js";import{r}from"./index-pP6CS22B.js";import{c as R}from"./index-EXTQMK5R.js";import{c as h}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ce=r.createContext(null),De=()=>{const t=r.useContext(Ce);if(t===null)throw new Error("RadioOption must be used within a Radio component");return t},Ie=R("flex box-border w-full",{variants:{direction:{column:"flex-col gap-[var(--sinch-comp-radio-gap,8px)]",row:"flex-row gap-[var(--sinch-comp-radio-gap,8px)]"}},defaultVariants:{direction:"column"}}),s=r.forwardRef(({className:t,direction:l="column",name:a,value:p,defaultValue:q="",invalid:j=!1,"aria-label":b,onChange:f,children:m,...d},F)=>{const[S,L]=r.useState(q),c=r.useRef(new Map),u=p!==void 0,x=u?p:S,v=r.useCallback(i=>{u||L(i),f==null||f(i)},[u,f]),G=r.useCallback((i,n)=>{c.current.set(i,n)},[]),U=r.useCallback(i=>{c.current.delete(i)},[]),g=r.useCallback(()=>Array.from(c.current.entries()).filter(([,i])=>i.getAttribute("aria-disabled")!=="true").map(([i,n])=>({value:i,element:n})),[]),H=r.useCallback(()=>{const i=g();if(i.length===0)return;const n=i.findIndex(M=>M.value===x),_=n<0?0:(n+1)%i.length,O=i[_];O.element.focus(),v(O.value)},[x,g,v]),z=r.useCallback(()=>{const i=g();if(i.length===0)return;const n=i.findIndex(M=>M.value===x),_=n<0?i.length-1:(n-1+i.length)%i.length,O=i[_];O.element.focus(),v(O.value)},[x,g,v]);return e.jsx(Ce.Provider,{value:{name:a,value:x,invalid:j,onChange:v,registerOption:G,unregisterOption:U,focusNextOption:H,focusPrevOption:z},children:e.jsx("div",{ref:F,role:"radiogroup","aria-label":b,"aria-invalid":j||void 0,"data-name":a,"data-value":x,className:h(Ie({direction:l}),t),...d,children:m})})});s.displayName="Radio";const Pe=R(["flex flex-row box-border w-full min-h-[24px]","outline-none cursor-pointer select-none"],{variants:{isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isDisabled:!1}}),$e=R(["relative w-[18px] h-[18px]","rounded-full","border border-solid transition-colors duration-100","box-border"],{variants:{isChecked:{true:["bg-[var(--sinch-comp-radio-color-default-background-initial)]","border-[var(--sinch-comp-radio-color-checked-border-initial)]"],false:["bg-[var(--sinch-comp-radio-color-default-background-initial)]","border-[var(--sinch-comp-radio-color-default-border-initial)]"]},isInvalid:{true:"border-[var(--sinch-comp-radio-color-invalid-border-initial)]",false:""},isDisabled:{true:["bg-[var(--sinch-comp-radio-color-disabled-background-initial)]","border-[var(--sinch-comp-radio-color-disabled-border-initial)]"],false:""}},compoundVariants:[{isChecked:!0,isDisabled:!0,className:["border-[var(--sinch-comp-radio-color-checked-disabled-border-initial)]"]}],defaultVariants:{isChecked:!1,isInvalid:!1,isDisabled:!1}}),Ae=R(["absolute inset-[-3px] pointer-events-none","border-2 border-[var(--sinch-comp-radio-color-default-outline-focus)]","rounded-full","transition-opacity duration-100 opacity-0"],{variants:{isFocused:{true:"opacity-100",false:""}},defaultVariants:{isFocused:!1}}),Te=R(["absolute w-[10px] h-[10px]","inset-0 m-auto","rounded-full","transition-opacity duration-100","pointer-events-none","bg-[var(--sinch-comp-radio-color-checked-knob-initial)]"],{variants:{isVisible:{true:"opacity-100",false:"opacity-0"},isDisabled:{true:"bg-[var(--sinch-comp-radio-color-checked-disabled-knob-initial)]",false:""}},defaultVariants:{isVisible:!1,isDisabled:!1}}),o=r.forwardRef(({className:t,value:l,disabled:a=!1,text:p,"aria-label":q,"aria-labelledby":j,onKeyDown:b,...f},m)=>{const d=De(),[F,S]=r.useState(!1),L=r.useRef(null),c=d.value===l,u=d.invalid,x=r.useCallback(n=>{L.current=n,n!==null?d.registerOption(l,n):d.unregisterOption(l),m!==null&&(typeof m=="function"?m(n):m.current=n)},[d,m,l]),v=r.useCallback(()=>{a||d.onChange(l)},[d,a,l]),G=r.useCallback(n=>{switch(n.code){case"ArrowUp":case"ArrowLeft":n.preventDefault(),d.focusPrevOption();break;case"ArrowDown":case"ArrowRight":n.preventDefault(),d.focusNextOption();break;case"Space":n.preventDefault(),a||d.onChange(l);break}b==null||b(n)},[d,a,b,l]),U=r.useCallback(()=>{S(!0)},[]),g=r.useCallback(()=>{S(!1)},[]),H=()=>a?"":c&&!u?["hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]","hover:border-[var(--sinch-comp-radio-color-checked-border-hover)]","active:bg-[var(--sinch-comp-radio-color-default-background-active)]","active:border-[var(--sinch-comp-radio-color-checked-border-active)]"].join(" "):u?["hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]","hover:border-[var(--sinch-comp-radio-color-invalid-border-hover)]","active:bg-[var(--sinch-comp-radio-color-default-background-active)]","active:border-[var(--sinch-comp-radio-color-invalid-border-active)]"].join(" "):["hover:bg-[var(--sinch-comp-radio-color-default-background-hover)]","hover:border-[var(--sinch-comp-radio-color-default-border-hover)]","active:bg-[var(--sinch-comp-radio-color-default-background-active)]","active:border-[var(--sinch-comp-radio-color-default-border-active)]"].join(" "),z=()=>a||!c?"":["group-hover:bg-[var(--sinch-comp-radio-color-checked-knob-hover)]","group-active:bg-[var(--sinch-comp-radio-color-checked-knob-active)]"].join(" "),i=()=>a&&c?"text-[var(--sinch-comp-radio-color-checked-disabled-label-initial)]":a?"text-[var(--sinch-comp-radio-color-disabled-label-initial)]":u?"text-[var(--sinch-comp-radio-color-invalid-label-initial)]":"text-[var(--sinch-comp-radio-color-default-label-initial)]";return e.jsxs("div",{ref:x,role:"radio","aria-checked":c,"aria-disabled":a,"aria-label":q??p,"aria-labelledby":j,tabIndex:a?-1:0,className:h(Pe({isDisabled:a}),"group",t),onClick:v,onKeyDown:G,onFocus:U,onBlur:g,...f,children:[e.jsxs("div",{className:"relative w-[18px] h-[18px] mt-[3px] flex-shrink-0 self-start",children:[e.jsx("div",{className:h(Ae({isFocused:F}))}),e.jsx("div",{className:h($e({isChecked:c,isInvalid:u&&!c,isDisabled:a}),H())}),e.jsx("div",{className:h(Te({isVisible:c,isDisabled:a}),z())})]}),p!==void 0&&p.length>0&&e.jsx("span",{className:h("flex-1 self-center pl-2","font-[var(--sinch-comp-radio-font-label)]",i(),a?"cursor-default":"cursor-pointer"),children:p})]})});o.displayName="RadioOption";const y=Object.assign(s,{Option:o});s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{name:{required:!1,tsType:{name:"string"},description:"Name for form submissions"},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled usage",defaultValue:{value:"''",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label for the radio group"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the selected value"},direction:{defaultValue:{value:"'column'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};o.__docgenInfo={description:"",methods:[],displayName:"RadioOption",props:{value:{required:!0,tsType:{name:"string"},description:"Value of this option"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Label text displayed next to the radio"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label (required if text is not provided)"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element that labels this option"}},composes:["Omit"]};const He={title:"Components/Radio",component:s,tags:["autodocs"],args:{onChange:we()},argTypes:{value:{control:"text",description:"Controlled selected value"},defaultValue:{control:"text",description:"Default selected value for uncontrolled usage"},invalid:{control:"boolean",description:"Invalid/error state"},direction:{control:"select",options:["column","row"],description:"Layout direction"},name:{control:"text",description:"Form name attribute"},"aria-label":{control:"text",description:"Accessible label for the radio group"}}},N={args:{"aria-label":"Select an option",defaultValue:"option1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"}),e.jsx(o,{value:"option3",text:"Option 3"})]})},V={args:{"aria-label":"Select an option",direction:"row",defaultValue:"option1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"}),e.jsx(o,{value:"option3",text:"Option 3"})]})},k={args:{"aria-label":"Select an option",defaultValue:"option1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2 (Disabled)",disabled:!0}),e.jsx(o,{value:"option3",text:"Option 3"})]})},C={args:{"aria-label":"Select an option",defaultValue:"option2"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"Option 1",disabled:!0}),e.jsx(o,{value:"option2",text:"Option 2 (Selected)",disabled:!0}),e.jsx(o,{value:"option3",text:"Option 3",disabled:!0})]})},w={args:{"aria-label":"Select an option",invalid:!0},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"}),e.jsx(o,{value:"option3",text:"Option 3"})]})},D={args:{"aria-label":"Select an option",direction:"row",defaultValue:"option1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1","aria-label":"Option 1"}),e.jsx(o,{value:"option2","aria-label":"Option 2"}),e.jsx(o,{value:"option3","aria-label":"Option 3"})]})},I={args:{"aria-label":"Select an option"},render:function(){const[l,a]=r.useState("option1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{"aria-label":"Select an option",value:l,onChange:a,children:[e.jsx(o,{value:"option1",text:`Option 1 ${l==="option1"?"(selected)":""}`}),e.jsx(o,{value:"option2",text:`Option 2 ${l==="option2"?"(selected)":""}`}),e.jsx(o,{value:"option3",text:`Option 3 ${l==="option3"?"(selected)":""}`})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>a("option1"),children:"Select Option 1"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>a("option2"),children:"Select Option 2"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>a("option3"),children:"Select Option 3"})]})]})}},P={args:{"aria-label":"Select a plan",defaultValue:"basic"},render:t=>e.jsxs(y,{...t,children:[e.jsx(y.Option,{value:"basic",text:"Basic Plan - $9/month"}),e.jsx(y.Option,{value:"pro",text:"Pro Plan - $19/month"}),e.jsx(y.Option,{value:"enterprise",text:"Enterprise Plan - $49/month"})]})},$={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default (Vertical)"}),e.jsxs(s,{"aria-label":"Default options",defaultValue:"option1",children:[e.jsx(o,{value:"option1",text:"Selected option"}),e.jsx(o,{value:"option2",text:"Unselected option"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Horizontal"}),e.jsxs(s,{"aria-label":"Horizontal options",direction:"row",defaultValue:"option1",children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"}),e.jsx(o,{value:"option3",text:"Option 3"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Invalid"}),e.jsxs(s,{"aria-label":"Invalid options",invalid:!0,children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Disabled"}),e.jsxs(s,{"aria-label":"Disabled options",defaultValue:"option1",children:[e.jsx(o,{value:"option1",text:"Selected disabled",disabled:!0}),e.jsx(o,{value:"option2",text:"Unselected disabled",disabled:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Mixed (Some Disabled)"}),e.jsxs(s,{"aria-label":"Mixed options",defaultValue:"option1",children:[e.jsx(o,{value:"option1",text:"Enabled option"}),e.jsx(o,{value:"option2",text:"Disabled option",disabled:!0}),e.jsx(o,{value:"option3",text:"Enabled option"})]})]})]})},A={render:function(){const[l,a]=r.useState("");return e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:p=>{p.preventDefault(),alert(`Selected plan: ${l}`)},children:[e.jsxs(s,{name:"plan","aria-label":"Select a subscription plan",value:l,onChange:a,children:[e.jsx(o,{value:"free",text:"Free - $0/month"}),e.jsx(o,{value:"starter",text:"Starter - $9/month"}),e.jsx(o,{value:"pro",text:"Pro - $29/month"}),e.jsx(o,{value:"enterprise",text:"Enterprise - Contact us"})]}),e.jsxs("button",{type:"submit",className:"px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit disabled:opacity-50",disabled:l.length===0,children:["Continue with ",l||"..."]})]})}},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Use Tab to focus, Arrow keys to navigate, Space to select"}),e.jsxs(s,{"aria-label":"Keyboard navigation demo",defaultValue:"option1",children:[e.jsx(o,{value:"option1",text:"Option 1"}),e.jsx(o,{value:"option2",text:"Option 2"}),e.jsx(o,{value:"option3",text:"Option 3"}),e.jsx(o,{value:"option4",text:"Option 4"})]})]})},E={args:{"aria-label":"Select an option",defaultValue:"option1"},render:t=>e.jsx("div",{className:"max-w-[300px]",children:e.jsxs(s,{...t,children:[e.jsx(o,{value:"option1",text:"This is a very long option label that might wrap to multiple lines in a narrow container"}),e.jsx(o,{value:"option2",text:"Another long option with detailed description explaining what this choice means"}),e.jsx(o,{value:"option3",text:"Short option"})]})})};var W,B,K;N.parameters={...N.parameters,docs:{...(W=N.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1'
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
}`,...(K=(B=N.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var J,Q,X;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    direction: 'row',
    defaultValue: 'option1'
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
}`,...(X=(Q=V.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1'
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2 (Disabled)" disabled />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,te,ae;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option2'
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" text="Option 1" disabled />
      <RadioOption value="option2" text="Option 2 (Selected)" disabled />
      <RadioOption value="option3" text="Option 3" disabled />
    </Radio>
}`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,ne,re;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    invalid: true
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" text="Option 1" />
      <RadioOption value="option2" text="Option 2" />
      <RadioOption value="option3" text="Option 3" />
    </Radio>
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,se,de;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    direction: 'row',
    defaultValue: 'option1'
  },
  render: args => <Radio {...args}>
      <RadioOption value="option1" aria-label="Option 1" />
      <RadioOption value="option2" aria-label="Option 2" />
      <RadioOption value="option3" aria-label="Option 3" />
    </Radio>
}`,...(de=(se=D.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,pe,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option'
  },
  render: function ControlledRadio() {
    const [value, setValue] = useState('option1');
    return <div className="flex flex-col gap-4">
        <Radio aria-label="Select an option" value={value} onChange={setValue}>
          <RadioOption value="option1" text={\`Option 1 \${value === 'option1' ? '(selected)' : ''}\`} />
          <RadioOption value="option2" text={\`Option 2 \${value === 'option2' ? '(selected)' : ''}\`} />
          <RadioOption value="option3" text={\`Option 3 \${value === 'option3' ? '(selected)' : ''}\`} />
        </Radio>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('option1')}>
            Select Option 1
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('option2')}>
            Select Option 2
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('option3')}>
            Select Option 3
          </button>
        </div>
      </div>;
  }
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var xe,me,ve;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a plan',
    defaultValue: 'basic'
  },
  render: args => <RadioGroup {...args}>
      <RadioGroup.Option value="basic" text="Basic Plan - $9/month" />
      <RadioGroup.Option value="pro" text="Pro Plan - $19/month" />
      <RadioGroup.Option value="enterprise" text="Enterprise Plan - $49/month" />
    </RadioGroup>
}`,...(ve=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var be,fe,ge;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Vertical)</h3>
        <Radio aria-label="Default options" defaultValue="option1">
          <RadioOption value="option1" text="Selected option" />
          <RadioOption value="option2" text="Unselected option" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Horizontal</h3>
        <Radio aria-label="Horizontal options" direction="row" defaultValue="option1">
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
          <RadioOption value="option3" text="Option 3" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Invalid</h3>
        <Radio aria-label="Invalid options" invalid>
          <RadioOption value="option1" text="Option 1" />
          <RadioOption value="option2" text="Option 2" />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <Radio aria-label="Disabled options" defaultValue="option1">
          <RadioOption value="option1" text="Selected disabled" disabled />
          <RadioOption value="option2" text="Unselected disabled" disabled />
        </Radio>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Mixed (Some Disabled)</h3>
        <Radio aria-label="Mixed options" defaultValue="option1">
          <RadioOption value="option1" text="Enabled option" />
          <RadioOption value="option2" text="Disabled option" disabled />
          <RadioOption value="option3" text="Enabled option" />
        </Radio>
      </div>
    </div>
}`,...(ge=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,Oe,Re;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: function FormExample() {
    const [selectedPlan, setSelectedPlan] = useState('');
    return <form className="flex flex-col gap-4" onSubmit={e => {
      e.preventDefault();
      alert(\`Selected plan: \${selectedPlan}\`);
    }}>
        <Radio name="plan" aria-label="Select a subscription plan" value={selectedPlan} onChange={setSelectedPlan}>
          <RadioOption value="free" text="Free - $0/month" />
          <RadioOption value="starter" text="Starter - $9/month" />
          <RadioOption value="pro" text="Pro - $29/month" />
          <RadioOption value="enterprise" text="Enterprise - Contact us" />
        </Radio>
        <button type="submit" className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md w-fit disabled:opacity-50" disabled={selectedPlan.length === 0}>
          Continue with {selectedPlan || '...'}
        </button>
      </form>;
  }
}`,...(Re=(Oe=A.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};var je,Se,ye;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space to select
      </p>
      <Radio aria-label="Keyboard navigation demo" defaultValue="option1">
        <RadioOption value="option1" text="Option 1" />
        <RadioOption value="option2" text="Option 2" />
        <RadioOption value="option3" text="Option 3" />
        <RadioOption value="option4" text="Option 4" />
      </Radio>
    </div>
}`,...(ye=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ne,Ve,ke;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select an option',
    defaultValue: 'option1'
  },
  render: args => <div className="max-w-[300px]">
      <Radio {...args}>
        <RadioOption value="option1" text="This is a very long option label that might wrap to multiple lines in a narrow container" />
        <RadioOption value="option2" text="Another long option with detailed description explaining what this choice means" />
        <RadioOption value="option3" text="Short option" />
      </Radio>
    </div>
}`,...(ke=(Ve=E.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};const ze=["Default","Horizontal","WithDisabledOption","AllDisabled","Invalid","WithoutLabels","Controlled","UsingRadioGroup","AllStates","FormIntegration","KeyboardNavigation","LongTextLabels"];export{C as AllDisabled,$ as AllStates,I as Controlled,N as Default,A as FormIntegration,V as Horizontal,w as Invalid,T as KeyboardNavigation,E as LongTextLabels,P as UsingRadioGroup,k as WithDisabledOption,D as WithoutLabels,ze as __namedExportsOrder,He as default};
