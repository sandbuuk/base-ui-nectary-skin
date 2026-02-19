import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as Ne}from"./index-CsAwyYjM.js";import{r as s}from"./index-pP6CS22B.js";import{c as g}from"./index-EXTQMK5R.js";import{c as d}from"./cn-BLSKlp9E.js";import{I as je}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const pe=s.createContext(null),Ae=()=>{const o=s.useContext(pe);if(o===null)throw new Error("AccordionItem must be used within an Accordion component");return o},ye=g("flex flex-col box-border w-full h-full",{variants:{},defaultVariants:{}});function Ie(o){return o.length===0?new Set:new Set(o.split(",").map(n=>n.trim()).filter(n=>n.length>0))}function Ce(o){return Array.from(o).join(",")}const r=s.forwardRef(({className:o,value:n,defaultValue:l="",multiple:i=!1,onChange:c,children:a,...f},T)=>{const[k,D]=s.useState(l),m=n!==void 0,x=Ie(m?n:k),F=s.useCallback(p=>{let u;i?(u=new Set(x),u.has(p)?u.delete(p):u.add(p)):x.has(p)?u=new Set:u=new Set([p]);const h=Ce(u);m||D(h),c==null||c(h)},[x,m,i,c]);return e.jsx(pe.Provider,{value:{expandedItems:x,multiple:i,toggleItem:F},children:e.jsx("div",{ref:T,className:d(ye(),o),...f,children:a})})});r.displayName="Accordion";const Se=g("block outline-none min-h-[48px]",{variants:{},defaultVariants:{}}),we=g(["flex flex-col relative w-full h-full box-border overflow-hidden","border-b border-[var(--sinch-comp-accordion-color-default-border-initial)]","last:border-b-0"],{variants:{},defaultVariants:{}}),Ve=g(["flex relative items-center gap-2 box-border w-full h-[48px]","px-2 pl-2 pr-1","cursor-pointer","outline-none","bg-transparent border-none","text-left"],{variants:{isDisabled:{true:"cursor-default",false:""}},defaultVariants:{isDisabled:!1}}),Te=g("w-2 h-2 rounded-full",{variants:{status:{success:"bg-[var(--sinch-comp-accordion-color-default-status-success)]",warn:"bg-[var(--sinch-comp-accordion-color-default-status-warning)]",error:"bg-[var(--sinch-comp-accordion-color-default-status-error)]",info:"bg-[var(--sinch-comp-accordion-color-default-status-info)]"}},defaultVariants:{}}),ke=g(["absolute inset-0 pointer-events-none","border-2 border-[var(--sinch-comp-accordion-color-default-outline-focus)]","transition-opacity duration-100 opacity-0"],{variants:{isFocused:{true:"opacity-100",false:""}},defaultVariants:{isFocused:!1}}),t=s.forwardRef(({className:o,value:n,label:l,optionalText:i,status:c,disabled:a=!1,icon:f,children:T,...k},D)=>{const m=Ae(),[O,x]=s.useState(!1),F=s.useRef(null),p=s.useId(),u=`accordion-content-${p}`,h=`accordion-button-${p}`,E=m.expandedItems.has(n),xe=s.useCallback(()=>{a||m.toggleItem(n)},[m,a,n]),fe=s.useCallback(P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),a||m.toggleItem(n))},[m,a,n]),ge=s.useCallback(()=>{x(!0)},[]),he=s.useCallback(()=>{x(!1)},[]),q=()=>a?"text-[var(--sinch-comp-accordion-color-disabled-icon-initial)]":"text-[var(--sinch-comp-accordion-color-default-icon-initial)]",be=()=>a?"text-[var(--sinch-comp-accordion-color-disabled-title-initial)]":"text-[var(--sinch-comp-accordion-color-default-title-initial)]",ve=()=>a?"text-[var(--sinch-comp-accordion-color-disabled-optional-text-initial)]":"text-[var(--sinch-comp-accordion-color-default-optional-text-initial)]";return e.jsx("div",{ref:D,className:d(Se(),o),...k,children:e.jsxs("div",{className:d(we()),children:[e.jsxs("button",{ref:F,id:h,type:"button","aria-controls":u,"aria-expanded":E,disabled:a,className:d(Ve({isDisabled:a})),onClick:xe,onKeyDown:fe,onFocus:ge,onBlur:he,children:[e.jsx("div",{className:d(ke({isFocused:O}))}),c!==void 0&&e.jsx("div",{className:"w-[18px] h-6 py-2 pl-0.5 pr-2 box-border",children:e.jsx("div",{className:d(Te({status:c}))})}),f!==void 0&&e.jsx("span",{className:d("pointer-events-none",q()),children:f}),e.jsx("span",{className:d("flex-1 min-w-0 truncate pointer-events-none","font-[var(--sinch-comp-accordion-font-title)]",be()),children:l}),i!==void 0&&i.length>0&&e.jsx("span",{className:d("pointer-events-none","font-[var(--sinch-comp-accordion-font-optional-text)]",ve()),children:i}),e.jsx("span",{className:d("pointer-events-none transition-transform duration-[250ms] ease-in-out",q(),E&&"rotate-180"),children:e.jsx(je,{name:"fa-chevron-down"})})]}),e.jsx("div",{id:u,role:"region","aria-labelledby":h,className:d("overflow-hidden","transition-[max-height,opacity] duration-[250ms] ease-in-out",E?"max-h-[2000px] opacity-100":"max-h-0 opacity-0 overflow-hidden"),children:e.jsx("div",{className:"px-2 pb-3",children:T})})]})})});t.displayName="AccordionItem";const b=Object.assign(r,{Item:t});r.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{value:{required:!1,tsType:{name:"string"},description:`The currently expanded item value(s). For single mode, a string.
For multiple mode, comma-separated values (e.g., "item1,item2").`},defaultValue:{required:!1,tsType:{name:"string"},description:"Default expanded value(s) for uncontrolled usage.",defaultValue:{value:"''",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple items to be expanded at once.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the new value (comma-separated for multiple)."}},composes:["Omit","VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{value:{required:!0,tsType:{name:"string"},description:"Unique value identifier for this item."},label:{required:!0,tsType:{name:"string"},description:"Label text displayed in the header."},optionalText:{required:!1,tsType:{name:"string"},description:"Optional text displayed on the right side of the header."},status:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warn' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warn'"},{name:"literal",value:"'error'"}]},description:"Status indicator."},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state.
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon slot - rendered before the label."}},composes:["Omit"]};const Re={title:"Components/Accordion",component:r,tags:["autodocs"],args:{onChange:Ne()},argTypes:{value:{control:"text",description:"Controlled expanded value(s)"},defaultValue:{control:"text",description:"Default expanded value(s) for uncontrolled usage"},multiple:{control:"boolean",description:"Allow multiple items to be expanded at once"}}},v={args:{defaultValue:"item1"},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Section 1",children:e.jsx("p",{className:"text-foreground",children:"Content for section 1. This is the expanded content area where you can place any content."})}),e.jsx(t,{value:"item2",label:"Section 2",children:e.jsx("p",{className:"text-foreground",children:"Content for section 2. Accordions are useful for organizing content into collapsible sections."})}),e.jsx(t,{value:"item3",label:"Section 3",children:e.jsx("p",{className:"text-foreground",children:"Content for section 3. Each section can contain any type of content."})})]})},N={args:{defaultValue:"item1,item2",multiple:!0},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Section 1",children:e.jsx("p",{className:"text-foreground",children:"Content for section 1. Multiple sections can be open at once."})}),e.jsx(t,{value:"item2",label:"Section 2",children:e.jsx("p",{className:"text-foreground",children:"Content for section 2. Notice how both sections are initially expanded."})}),e.jsx(t,{value:"item3",label:"Section 3",children:e.jsx("p",{className:"text-foreground",children:"Content for section 3. You can open this one too!"})})]})},j={args:{defaultValue:"item1"},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Profile Settings",optionalText:"3 options",children:e.jsx("p",{className:"text-foreground",children:"Configure your profile settings here."})}),e.jsx(t,{value:"item2",label:"Notification Preferences",optionalText:"5 options",children:e.jsx("p",{className:"text-foreground",children:"Manage your notification preferences."})}),e.jsx(t,{value:"item3",label:"Privacy Settings",optionalText:"2 options",children:e.jsx("p",{className:"text-foreground",children:"Control your privacy settings."})})]})},A={args:{},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Verification Complete",status:"success",children:e.jsx("p",{className:"text-foreground",children:"Your account has been verified successfully."})}),e.jsx(t,{value:"item2",label:"Payment Required",status:"warn",children:e.jsx("p",{className:"text-foreground",children:"Please update your payment information."})}),e.jsx(t,{value:"item3",label:"Action Required",status:"error",children:e.jsx("p",{className:"text-foreground",children:"There was an error processing your request."})}),e.jsx(t,{value:"item4",label:"New Feature Available",status:"info",children:e.jsx("p",{className:"text-foreground",children:"Check out our new feature release!"})})]})},y={args:{defaultValue:"item1"},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Active Section",children:e.jsx("p",{className:"text-foreground",children:"This section is active and can be interacted with."})}),e.jsx(t,{value:"item2",label:"Disabled Section",disabled:!0,children:e.jsx("p",{className:"text-foreground",children:"This content cannot be seen because the section is disabled."})}),e.jsx(t,{value:"item3",label:"Another Active Section",children:e.jsx("p",{className:"text-foreground",children:"Another section that can be expanded."})})]})},I={render:function(){const[n,l]=s.useState("item1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{value:n,onChange:l,children:[e.jsx(t,{value:"item1",label:"Section 1",children:e.jsx("p",{className:"text-foreground",children:"Content for section 1."})}),e.jsx(t,{value:"item2",label:"Section 2",children:e.jsx("p",{className:"text-foreground",children:"Content for section 2."})}),e.jsx(t,{value:"item3",label:"Section 3",children:e.jsx("p",{className:"text-foreground",children:"Content for section 3."})})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("item1"),children:"Open Section 1"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("item2"),children:"Open Section 2"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("item3"),children:"Open Section 3"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md",onClick:()=>l(""),children:"Close All"})]})]})}},C={render:function(){const[n,l]=s.useState("item1,item2"),i=c=>{const a=new Set(n.split(",").filter(f=>f.length>0));a.has(c)?a.delete(c):a.add(c),l(Array.from(a).join(","))};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{value:n,onChange:l,multiple:!0,children:[e.jsx(t,{value:"item1",label:"Section 1",children:e.jsx("p",{className:"text-foreground",children:"Content for section 1."})}),e.jsx(t,{value:"item2",label:"Section 2",children:e.jsx("p",{className:"text-foreground",children:"Content for section 2."})}),e.jsx(t,{value:"item3",label:"Section 3",children:e.jsx("p",{className:"text-foreground",children:"Content for section 3."})})]}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("item1"),children:"Toggle 1"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("item2"),children:"Toggle 2"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("item3"),children:"Toggle 3"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md",onClick:()=>l("item1,item2,item3"),children:"Open All"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md",onClick:()=>l(""),children:"Close All"})]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",n||"(empty)"]})]})}},S={args:{defaultValue:"item1"},render:o=>e.jsxs(b,{...o,children:[e.jsx(b.Item,{value:"item1",label:"First Section",children:e.jsx("p",{className:"text-foreground",children:"Content using the compound component pattern."})}),e.jsx(b.Item,{value:"item2",label:"Second Section",children:e.jsx("p",{className:"text-foreground",children:"This pattern provides better discoverability."})}),e.jsx(b.Item,{value:"item3",label:"Third Section",children:e.jsx("p",{className:"text-foreground",children:"All items are nested under AccordionGroup."})})]})},w={args:{defaultValue:"item1"},render:o=>e.jsxs(r,{...o,children:[e.jsx(t,{value:"item1",label:"Product Details",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-foreground",children:"Our product offers the following features:"}),e.jsxs("ul",{className:"list-disc list-inside text-foreground",children:[e.jsx("li",{children:"Feature 1: High performance"}),e.jsx("li",{children:"Feature 2: Easy to use"}),e.jsx("li",{children:"Feature 3: Customizable"})]}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded-md w-fit",children:"Learn More"})]})}),e.jsx(t,{value:"item2",label:"Pricing Information",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-foreground",children:"Basic Plan"}),e.jsx("span",{className:"text-foreground font-semibold",children:"$9/month"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-foreground",children:"Pro Plan"}),e.jsx("span",{className:"text-foreground font-semibold",children:"$29/month"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-foreground",children:"Enterprise"}),e.jsx("span",{className:"text-foreground font-semibold",children:"Contact us"})]})]})}),e.jsx(t,{value:"item3",label:"FAQ",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground font-semibold",children:"Q: How do I get started?"}),e.jsx("p",{className:"text-foreground-muted",children:"A: Sign up for a free trial and explore our features."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-foreground font-semibold",children:"Q: Is there a free tier?"}),e.jsx("p",{className:"text-foreground-muted",children:"A: Yes, we offer a free tier with limited features."})]})]})})]})},V={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default (Single Selection)"}),e.jsxs(r,{defaultValue:"item1",children:[e.jsx(t,{value:"item1",label:"Expanded item",children:e.jsx("p",{className:"text-foreground",children:"This item is expanded."})}),e.jsx(t,{value:"item2",label:"Collapsed item",children:e.jsx("p",{className:"text-foreground",children:"This item is collapsed."})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Multiple Selection"}),e.jsxs(r,{defaultValue:"item1,item2",multiple:!0,children:[e.jsx(t,{value:"item1",label:"First expanded",children:e.jsx("p",{className:"text-foreground",children:"First expanded content."})}),e.jsx(t,{value:"item2",label:"Second expanded",children:e.jsx("p",{className:"text-foreground",children:"Second expanded content."})}),e.jsx(t,{value:"item3",label:"Collapsed",children:e.jsx("p",{className:"text-foreground",children:"Collapsed content."})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"With Status Indicators"}),e.jsxs(r,{children:[e.jsx(t,{value:"item1",label:"Success",status:"success",children:e.jsx("p",{className:"text-foreground",children:"Success status."})}),e.jsx(t,{value:"item2",label:"Warning",status:"warn",children:e.jsx("p",{className:"text-foreground",children:"Warning status."})}),e.jsx(t,{value:"item3",label:"Error",status:"error",children:e.jsx("p",{className:"text-foreground",children:"Error status."})}),e.jsx(t,{value:"item4",label:"Info",status:"info",children:e.jsx("p",{className:"text-foreground",children:"Info status."})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"With Optional Text"}),e.jsxs(r,{defaultValue:"item1",children:[e.jsx(t,{value:"item1",label:"Settings",optionalText:"3 options",children:e.jsx("p",{className:"text-foreground",children:"Settings content."})}),e.jsx(t,{value:"item2",label:"Advanced",optionalText:"5 options",children:e.jsx("p",{className:"text-foreground",children:"Advanced content."})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Disabled"}),e.jsxs(r,{defaultValue:"item1",children:[e.jsx(t,{value:"item1",label:"Enabled item",children:e.jsx("p",{className:"text-foreground",children:"Enabled content."})}),e.jsx(t,{value:"item2",label:"Disabled item",disabled:!0,children:e.jsx("p",{className:"text-foreground",children:"Disabled content."})})]})]})]})};var W,R,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Section 1">
        <p className="text-foreground">
          Content for section 1. This is the expanded content area where you can place any content.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Section 2">
        <p className="text-foreground">
          Content for section 2. Accordions are useful for organizing content into collapsible sections.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Section 3">
        <p className="text-foreground">
          Content for section 3. Each section can contain any type of content.
        </p>
      </AccordionItem>
    </Accordion>
}`,...(M=(R=v.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var G,Q,Y;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1,item2',
    multiple: true
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Section 1">
        <p className="text-foreground">
          Content for section 1. Multiple sections can be open at once.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Section 2">
        <p className="text-foreground">
          Content for section 2. Notice how both sections are initially expanded.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Section 3">
        <p className="text-foreground">
          Content for section 3. You can open this one too!
        </p>
      </AccordionItem>
    </Accordion>
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var _,$,B;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Profile Settings" optionalText="3 options">
        <p className="text-foreground">
          Configure your profile settings here.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Notification Preferences" optionalText="5 options">
        <p className="text-foreground">
          Manage your notification preferences.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Privacy Settings" optionalText="2 options">
        <p className="text-foreground">
          Control your privacy settings.
        </p>
      </AccordionItem>
    </Accordion>
}`,...(B=($=j.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,H,L;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {},
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Verification Complete" status="success">
        <p className="text-foreground">
          Your account has been verified successfully.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Payment Required" status="warn">
        <p className="text-foreground">
          Please update your payment information.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Action Required" status="error">
        <p className="text-foreground">
          There was an error processing your request.
        </p>
      </AccordionItem>
      <AccordionItem value="item4" label="New Feature Available" status="info">
        <p className="text-foreground">
          Check out our new feature release!
        </p>
      </AccordionItem>
    </Accordion>
}`,...(L=(H=A.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var U,K,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Active Section">
        <p className="text-foreground">
          This section is active and can be interacted with.
        </p>
      </AccordionItem>
      <AccordionItem value="item2" label="Disabled Section" disabled>
        <p className="text-foreground">
          This content cannot be seen because the section is disabled.
        </p>
      </AccordionItem>
      <AccordionItem value="item3" label="Another Active Section">
        <p className="text-foreground">
          Another section that can be expanded.
        </p>
      </AccordionItem>
    </Accordion>
}`,...(J=(K=y.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var X,Z,ee;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: function ControlledAccordion() {
    const [value, setValue] = useState('item1');
    return <div className="flex flex-col gap-4">
        <Accordion value={value} onChange={setValue}>
          <AccordionItem value="item1" label="Section 1">
            <p className="text-foreground">Content for section 1.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Section 2">
            <p className="text-foreground">Content for section 2.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Section 3">
            <p className="text-foreground">Content for section 3.</p>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('item1')}>
            Open Section 1
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('item2')}>
            Open Section 2
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('item3')}>
            Open Section 3
          </button>
          <button className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md" onClick={() => setValue('')}>
            Close All
          </button>
        </div>
      </div>;
  }
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: function ControlledMultipleAccordion() {
    const [value, setValue] = useState('item1,item2');
    const toggleItem = (item: string) => {
      const items = new Set(value.split(',').filter(v => v.length > 0));
      if (items.has(item)) {
        items.delete(item);
      } else {
        items.add(item);
      }
      setValue(Array.from(items).join(','));
    };
    return <div className="flex flex-col gap-4">
        <Accordion value={value} onChange={setValue} multiple>
          <AccordionItem value="item1" label="Section 1">
            <p className="text-foreground">Content for section 1.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Section 2">
            <p className="text-foreground">Content for section 2.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Section 3">
            <p className="text-foreground">Content for section 3.</p>
          </AccordionItem>
        </Accordion>
        <div className="flex gap-2 flex-wrap">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => toggleItem('item1')}>
            Toggle 1
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => toggleItem('item2')}>
            Toggle 2
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => toggleItem('item3')}>
            Toggle 3
          </button>
          <button className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md" onClick={() => setValue('item1,item2,item3')}>
            Open All
          </button>
          <button className="px-3 py-1 text-sm bg-surface-secondary text-foreground rounded-md" onClick={() => setValue('')}>
            Close All
          </button>
        </div>
        <p className="text-sm text-foreground-muted">Current value: {value || '(empty)'}</p>
      </div>;
  }
}`,...(ne=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,ae,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1'
  },
  render: args => <AccordionGroup {...args}>
      <AccordionGroup.Item value="item1" label="First Section">
        <p className="text-foreground">Content using the compound component pattern.</p>
      </AccordionGroup.Item>
      <AccordionGroup.Item value="item2" label="Second Section">
        <p className="text-foreground">This pattern provides better discoverability.</p>
      </AccordionGroup.Item>
      <AccordionGroup.Item value="item3" label="Third Section">
        <p className="text-foreground">All items are nested under AccordionGroup.</p>
      </AccordionGroup.Item>
    </AccordionGroup>
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,ie,ce;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    defaultValue: 'item1'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item1" label="Product Details">
        <div className="flex flex-col gap-4">
          <p className="text-foreground">
            Our product offers the following features:
          </p>
          <ul className="list-disc list-inside text-foreground">
            <li>Feature 1: High performance</li>
            <li>Feature 2: Easy to use</li>
            <li>Feature 3: Customizable</li>
          </ul>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md w-fit">
            Learn More
          </button>
        </div>
      </AccordionItem>
      <AccordionItem value="item2" label="Pricing Information">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-foreground">Basic Plan</span>
            <span className="text-foreground font-semibold">$9/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Pro Plan</span>
            <span className="text-foreground font-semibold">$29/month</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Enterprise</span>
            <span className="text-foreground font-semibold">Contact us</span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem value="item3" label="FAQ">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-foreground font-semibold">Q: How do I get started?</p>
            <p className="text-foreground-muted">A: Sign up for a free trial and explore our features.</p>
          </div>
          <div>
            <p className="text-foreground font-semibold">Q: Is there a free tier?</p>
            <p className="text-foreground-muted">A: Yes, we offer a free tier with limited features.</p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,me;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Single Selection)</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Expanded item">
            <p className="text-foreground">This item is expanded.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Collapsed item">
            <p className="text-foreground">This item is collapsed.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <Accordion defaultValue="item1,item2" multiple>
          <AccordionItem value="item1" label="First expanded">
            <p className="text-foreground">First expanded content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Second expanded">
            <p className="text-foreground">Second expanded content.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Collapsed">
            <p className="text-foreground">Collapsed content.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Status Indicators</h3>
        <Accordion>
          <AccordionItem value="item1" label="Success" status="success">
            <p className="text-foreground">Success status.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Warning" status="warn">
            <p className="text-foreground">Warning status.</p>
          </AccordionItem>
          <AccordionItem value="item3" label="Error" status="error">
            <p className="text-foreground">Error status.</p>
          </AccordionItem>
          <AccordionItem value="item4" label="Info" status="info">
            <p className="text-foreground">Info status.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Optional Text</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Settings" optionalText="3 options">
            <p className="text-foreground">Settings content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Advanced" optionalText="5 options">
            <p className="text-foreground">Advanced content.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <Accordion defaultValue="item1">
          <AccordionItem value="item1" label="Enabled item">
            <p className="text-foreground">Enabled content.</p>
          </AccordionItem>
          <AccordionItem value="item2" label="Disabled item" disabled>
            <p className="text-foreground">Disabled content.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
}`,...(me=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Me=["Default","Multiple","WithOptionalText","WithStatus","WithDisabledItems","Controlled","ControlledMultiple","UsingAccordionGroup","WithRichContent","AllStates"];export{V as AllStates,I as Controlled,C as ControlledMultiple,v as Default,N as Multiple,S as UsingAccordionGroup,y as WithDisabledItems,j as WithOptionalText,w as WithRichContent,A as WithStatus,Me as __namedExportsOrder,Re as default};
