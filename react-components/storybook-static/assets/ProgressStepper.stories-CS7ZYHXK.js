import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as a}from"./index-pP6CS22B.js";import{c as b}from"./index-EXTQMK5R.js";import{c as P}from"./cn-BLSKlp9E.js";import{I as fe}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const me=a.createContext(null),Se=()=>{const p=a.useContext(me);if(p===null)throw new Error("ProgressStepperItem must be used within a ProgressStepper component");return p},he=b("block",{variants:{},defaultVariants:{}}),Pe=b("flex w-full",{variants:{},defaultVariants:{}}),n=a.forwardRef(({className:p,value:r,defaultValue:u="",progressValue:l="","aria-label":x,onChange:f,children:c,...o},I)=>{const[j,E]=a.useState(u),S=a.useRef(new Map),g=r!==void 0,m=g?r:j,h=a.useMemo(()=>{const s=[];return a.Children.forEach(c,i=>{if(a.isValidElement(i)&&typeof i.props=="object"&&i.props!==null){const v=i.props;typeof v.value=="string"&&s.push(v.value)}}),s},[c]),q=a.useCallback(s=>{g||E(s),f==null||f(s)},[g,f]),_=a.useCallback((s,i)=>{S.current.set(s,i)},[]),L=a.useCallback(s=>{S.current.delete(s)},[]),V=a.useCallback(s=>{const i=h.indexOf(l),v=h.indexOf(s);return i<0||i<v?"inactive":i>v?"complete":"incomplete"},[h,l]),d=a.useCallback(s=>V(s)!=="inactive",[V]),C=a.useCallback(()=>h.filter(s=>d(s)).map(s=>({value:s,element:S.current.get(s)})).filter(s=>s.element!==void 0),[h,d]),xe=a.useCallback(()=>{const s=C();if(s.length===0)return;const i=s.findIndex(M=>M.value===m),v=i<0?0:(i+1)%s.length;s[v].element.focus()},[m,C]),ge=a.useCallback(()=>{const s=C();if(s.length===0)return;const i=s.findIndex(M=>M.value===m),v=i<0?s.length-1:(i-1+s.length)%s.length;s[v].element.focus()},[m,C]);return e.jsx(me.Provider,{value:{value:m,progressValue:l,itemValues:h,onChange:q,registerItem:_,unregisterItem:L,focusNextItem:xe,focusPrevItem:ge},children:e.jsx("div",{ref:I,role:"tablist","aria-label":x,"data-value":m,"data-progress-value":l,className:P(he(),p),...o,children:e.jsx("div",{className:Pe(),children:c})})})});n.displayName="ProgressStepper";const be=b("flex-1 min-w-0 outline-none",{variants:{},defaultVariants:{}}),Ie=b(["relative flex flex-col gap-1 w-full h-full","p-[8px_4px_4px] box-border","rounded-[var(--sinch-comp-progress-stepper-step-shape-radius)]","transition-colors"],{variants:{status:{inactive:"cursor-not-allowed",incomplete:"cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-background-hover)]",complete:"cursor-pointer hover:bg-[var(--sinch-comp-progress-stepper-step-color-complete-background-hover)]"},invalid:{true:"hover:bg-[var(--sinch-comp-progress-stepper-step-color-invalid-background-hover)]",false:""}},defaultVariants:{status:"inactive",invalid:!1}}),je=b(["absolute inset-[-2px] pointer-events-none","border-2 border-[var(--sinch-comp-progress-stepper-step-color-outline-focus)]","rounded-[calc(var(--sinch-comp-progress-stepper-step-shape-radius)+2px)]","transition-opacity opacity-0"],{variants:{isFocused:{true:"opacity-100",false:""}},defaultVariants:{isFocused:!1}}),Ve=b("h-2 rounded transition-colors",{variants:{status:{inactive:"bg-[var(--sinch-comp-progress-stepper-step-color-inactive-progress-background)]",incomplete:"bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-background)]",complete:"bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-background)]"},invalid:{true:"bg-[var(--sinch-comp-progress-stepper-step-color-invalid-progress-background)]",false:""}},defaultVariants:{status:"inactive",invalid:!1}}),Ce=b("w-2 h-2 rounded transition-[width,opacity]",{variants:{status:{inactive:"opacity-0",incomplete:"bg-[var(--sinch-comp-progress-stepper-step-color-incomplete-progress-bar)] opacity-100",complete:"bg-[var(--sinch-comp-progress-stepper-step-color-complete-progress-bar)] w-full opacity-100"},invalid:{true:"opacity-0",false:""}},defaultVariants:{status:"inactive",invalid:!1}}),ye=(p,r,u)=>u?"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-invalid-label-default)]":p==="incomplete"&&r?"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-current-label-default)]":p==="complete"&&r?"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-current-label-default)]":p==="incomplete"?"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-incomplete-label-default)]":p==="complete"?"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-complete-label-default)]":"[--sinch-global-color-text:var(--sinch-comp-progress-stepper-step-color-inactive-label-default)]",Ne=(p,r,u)=>u&&r?"[font:var(--sinch-comp-progress-stepper-step-font-invalid-current-label)]":u?"[font:var(--sinch-comp-progress-stepper-step-font-invalid-label)]":p==="incomplete"&&r?"[font:var(--sinch-comp-progress-stepper-step-font-incomplete-current-label)]":p==="complete"&&r?"[font:var(--sinch-comp-progress-stepper-step-font-complete-current-label)]":p==="incomplete"?"[font:var(--sinch-comp-progress-stepper-step-font-incomplete-label)]":p==="complete"?"[font:var(--sinch-comp-progress-stepper-step-font-complete-label)]":"[font:var(--sinch-comp-progress-stepper-step-font-inactive-label)]",we=(p,r,u)=>{const l=u.indexOf(r),x=u.indexOf(p);return l<0||l<x?"inactive":l>x?"complete":"incomplete"},t=a.forwardRef(({className:p,value:r,text:u,invalid:l=!1,onKeyDown:x,...f},c)=>{const o=Se(),[I,j]=a.useState(!1),E=a.useRef(null),S=o.value===r,g=we(r,o.progressValue,o.itemValues),m=g!=="inactive",h=a.useCallback(d=>{E.current=d,d!==null?o.registerItem(r,d):o.unregisterItem(r),c!==null&&(typeof c=="function"?c(d):c.current=d)},[o,c,r]),q=a.useCallback(()=>{m&&o.onChange(r)},[o,m,r]),_=a.useCallback(d=>{switch(d.code){case"Enter":case"Space":d.preventDefault(),m&&o.onChange(r);break;case"ArrowRight":d.preventDefault(),o.focusNextItem();break;case"ArrowLeft":d.preventDefault(),o.focusPrevItem();break}x==null||x(d)},[o,m,x,r]),L=a.useCallback(()=>{j(!0)},[]),V=a.useCallback(()=>{j(!1)},[]);return e.jsx("div",{ref:h,role:"tab","aria-selected":S,"aria-invalid":l||void 0,tabIndex:m?0:-1,"data-status":g,"data-checked":S||void 0,"data-value":r,className:P(be(),p),onClick:q,onKeyDown:_,onFocus:L,onBlur:V,...f,children:e.jsxs("div",{className:P(Ie({status:g,invalid:l})),children:[e.jsx("div",{className:P(Ve({status:g,invalid:l})),children:e.jsx("div",{className:P(Ce({status:g,invalid:l}))})}),e.jsxs("div",{className:"relative",children:[e.jsx(fe,{name:"triangle-exclamation",iconsVersion:"2",size:"xs","aria-hidden":!0,className:P("absolute left-0 top-0 pointer-events-none transition-opacity","[--sinch-global-color-icon:var(--sinch-comp-progress-stepper-step-color-invalid-icon-default)]",l?"opacity-100":"opacity-0")}),e.jsx("span",{className:P("flex-shrink min-w-0 transition-transform pr-6","text-[color:var(--sinch-global-color-text)]",ye(g,S,l),Ne(g,S,l),l?"translate-x-6":"translate-x-0"),children:u})]}),e.jsx("div",{className:P(je({isFocused:I}))})]})})});t.displayName="ProgressStepperItem";Object.assign(n,{Item:t});n.__docgenInfo={description:"",methods:[],displayName:"ProgressStepper",props:{value:{required:!1,tsType:{name:"string"},description:"Controlled selected item value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled usage",defaultValue:{value:"''",computed:!1}},progressValue:{required:!1,tsType:{name:"string"},description:"Current progress value - determines which steps are complete/incomplete/inactive",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the progress stepper"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the selected step value"}},composes:["Omit","VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"ProgressStepperItem",props:{value:{required:!0,tsType:{name:"string"},description:"Value of this step item"},text:{required:!1,tsType:{name:"string"},description:"Text label for this step"},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state for this step
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Ee={title:"Components/ProgressStepper",component:n,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{value:{control:"text",description:"Controlled selected value"},progressValue:{control:"select",options:["step-1","step-2","step-3","step-4"],description:"Current progress value"},onChange:{action:"changed",description:"Change handler"}}},y={render:p=>e.jsxs(n,{...p,progressValue:"step-2",defaultValue:"step-2","aria-label":"Progress stepper",children:[e.jsx(t,{value:"step-1",text:"Step 1"}),e.jsx(t,{value:"step-2",text:"Step 2"}),e.jsx(t,{value:"step-3",text:"Step 3"}),e.jsx(t,{value:"step-4",text:"Step 4"})]})},N={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Progress at Step 1 (incomplete)"}),e.jsxs(n,{progressValue:"step-1",defaultValue:"step-1","aria-label":"Progress at step 1",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile"}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Progress at Step 2"}),e.jsxs(n,{progressValue:"step-2",defaultValue:"step-2","aria-label":"Progress at step 2",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile"}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Progress at Step 3"}),e.jsxs(n,{progressValue:"step-3",defaultValue:"step-3","aria-label":"Progress at step 3",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile"}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"All Steps Complete"}),e.jsxs(n,{progressValue:"step-4",defaultValue:"step-4","aria-label":"All steps complete",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile"}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})]})]})},w={render:()=>e.jsxs(n,{progressValue:"step-2",defaultValue:"step-2","aria-label":"Progress with invalid step",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile",invalid:!0}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})},k={render:()=>e.jsxs(n,{progressValue:"step-3",defaultValue:"step-1","aria-label":"Progress with multiple invalid steps",children:[e.jsx(t,{value:"step-1",text:"Account",invalid:!0}),e.jsx(t,{value:"step-2",text:"Profile",invalid:!0}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]})},A={render:()=>{const[p,r]=a.useState("step-1"),[u,l]=a.useState("step-2"),x=()=>{const c=["step-1","step-2","step-3","step-4"],o=c.indexOf(u);if(o<c.length-1){const I=c[o+1];l(I),r(I)}},f=()=>{const c=["step-1","step-2","step-3","step-4"],o=c.indexOf(p);o>0&&r(c[o-1])};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(n,{value:p,progressValue:u,onChange:r,"aria-label":"Interactive progress stepper",children:[e.jsx(t,{value:"step-1",text:"Account"}),e.jsx(t,{value:"step-2",text:"Profile"}),e.jsx(t,{value:"step-3",text:"Settings"}),e.jsx(t,{value:"step-4",text:"Review"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:f,className:"px-4 py-2 bg-surface-secondary rounded-md hover:bg-surface-secondary-hover",children:"Previous"}),e.jsx("button",{onClick:x,className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover",children:"Next"})]}),e.jsxs("div",{className:"text-sm text-foreground-muted",children:["Selected: ",p," | Progress: ",u]})]})}},R={render:()=>e.jsxs(n,{progressValue:"step-2",defaultValue:"step-2","aria-label":"Three step progress",children:[e.jsx(t,{value:"step-1",text:"Start"}),e.jsx(t,{value:"step-2",text:"Middle"}),e.jsx(t,{value:"step-3",text:"End"})]})},T={render:()=>e.jsxs(n,{progressValue:"step-3",defaultValue:"step-3","aria-label":"Five step progress",children:[e.jsx(t,{value:"step-1",text:"Step 1"}),e.jsx(t,{value:"step-2",text:"Step 2"}),e.jsx(t,{value:"step-3",text:"Step 3"}),e.jsx(t,{value:"step-4",text:"Step 4"}),e.jsx(t,{value:"step-5",text:"Step 5"})]})},O={render:()=>e.jsxs(n,{progressValue:"payment",defaultValue:"payment","aria-label":"Progress with long labels",children:[e.jsx(t,{value:"personal",text:"Personal Information"}),e.jsx(t,{value:"address",text:"Shipping Address"}),e.jsx(t,{value:"payment",text:"Payment Details"}),e.jsx(t,{value:"confirmation",text:"Order Confirmation"})]})},F={name:"Item States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Complete (can be clicked)"}),e.jsxs(n,{progressValue:"step-3",defaultValue:"step-1","aria-label":"Complete state",children:[e.jsx(t,{value:"step-1",text:"Complete Step"}),e.jsx(t,{value:"step-2",text:"Another Complete"}),e.jsx(t,{value:"step-3",text:"Current Step"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Incomplete (current progress)"}),e.jsxs(n,{progressValue:"step-1",defaultValue:"step-1","aria-label":"Incomplete state",children:[e.jsx(t,{value:"step-1",text:"Current Step"}),e.jsx(t,{value:"step-2",text:"Inactive"}),e.jsx(t,{value:"step-3",text:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Invalid state"}),e.jsxs(n,{progressValue:"step-2",defaultValue:"step-1","aria-label":"Invalid state",children:[e.jsx(t,{value:"step-1",text:"Invalid Step",invalid:!0}),e.jsx(t,{value:"step-2",text:"Current Step"}),e.jsx(t,{value:"step-3",text:"Inactive"})]})]})]})};var D,B,W;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <ProgressStepper {...args} progressValue="step-2" defaultValue="step-2" aria-label="Progress stepper">
      <ProgressStepperItem value="step-1" text="Step 1" />
      <ProgressStepperItem value="step-2" text="Step 2" />
      <ProgressStepperItem value="step-3" text="Step 3" />
      <ProgressStepperItem value="step-4" text="Step 4" />
    </ProgressStepper>
}`,...(W=(B=y.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var z,G,H;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 1 (incomplete)</p>
        <ProgressStepper progressValue="step-1" defaultValue="step-1" aria-label="Progress at step 1">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 2</p>
        <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Progress at step 2">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Progress at Step 3</p>
        <ProgressStepper progressValue="step-3" defaultValue="step-3" aria-label="Progress at step 3">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">All Steps Complete</p>
        <ProgressStepper progressValue="step-4" defaultValue="step-4" aria-label="All steps complete">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>
      </div>
    </div>
}`,...(H=(G=N.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Progress with invalid step">
      <ProgressStepperItem value="step-1" text="Account" />
      <ProgressStepperItem value="step-2" text="Profile" invalid />
      <ProgressStepperItem value="step-3" text="Settings" />
      <ProgressStepperItem value="step-4" text="Review" />
    </ProgressStepper>
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ProgressStepper progressValue="step-3" defaultValue="step-1" aria-label="Progress with multiple invalid steps">
      <ProgressStepperItem value="step-1" text="Account" invalid />
      <ProgressStepperItem value="step-2" text="Profile" invalid />
      <ProgressStepperItem value="step-3" text="Settings" />
      <ProgressStepperItem value="step-4" text="Review" />
    </ProgressStepper>
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,K,ee;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('step-1');
    const [progressValue, setProgressValue] = useState('step-2');
    const handleNext = () => {
      const steps = ['step-1', 'step-2', 'step-3', 'step-4'];
      const currentIndex = steps.indexOf(progressValue);
      if (currentIndex < steps.length - 1) {
        const nextStep = steps[currentIndex + 1];
        setProgressValue(nextStep);
        setValue(nextStep);
      }
    };
    const handlePrev = () => {
      const steps = ['step-1', 'step-2', 'step-3', 'step-4'];
      const currentIndex = steps.indexOf(value);
      if (currentIndex > 0) {
        setValue(steps[currentIndex - 1]);
      }
    };
    return <div className="flex flex-col gap-4">
        <ProgressStepper value={value} progressValue={progressValue} onChange={setValue} aria-label="Interactive progress stepper">
          <ProgressStepperItem value="step-1" text="Account" />
          <ProgressStepperItem value="step-2" text="Profile" />
          <ProgressStepperItem value="step-3" text="Settings" />
          <ProgressStepperItem value="step-4" text="Review" />
        </ProgressStepper>

        <div className="flex gap-2">
          <button onClick={handlePrev} className="px-4 py-2 bg-surface-secondary rounded-md hover:bg-surface-secondary-hover">
            Previous
          </button>
          <button onClick={handleNext} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover">
            Next
          </button>
        </div>

        <div className="text-sm text-foreground-muted">
          Selected: {value} | Progress: {progressValue}
        </div>
      </div>;
  }
}`,...(ee=(K=A.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var te,se,re;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <ProgressStepper progressValue="step-2" defaultValue="step-2" aria-label="Three step progress">
      <ProgressStepperItem value="step-1" text="Start" />
      <ProgressStepperItem value="step-2" text="Middle" />
      <ProgressStepperItem value="step-3" text="End" />
    </ProgressStepper>
}`,...(re=(se=R.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,pe,oe;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <ProgressStepper progressValue="step-3" defaultValue="step-3" aria-label="Five step progress">
      <ProgressStepperItem value="step-1" text="Step 1" />
      <ProgressStepperItem value="step-2" text="Step 2" />
      <ProgressStepperItem value="step-3" text="Step 3" />
      <ProgressStepperItem value="step-4" text="Step 4" />
      <ProgressStepperItem value="step-5" text="Step 5" />
    </ProgressStepper>
}`,...(oe=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:oe.source}}};var le,ne,ie;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <ProgressStepper progressValue="payment" defaultValue="payment" aria-label="Progress with long labels">
      <ProgressStepperItem value="personal" text="Personal Information" />
      <ProgressStepperItem value="address" text="Shipping Address" />
      <ProgressStepperItem value="payment" text="Payment Details" />
      <ProgressStepperItem value="confirmation" text="Order Confirmation" />
    </ProgressStepper>
}`,...(ie=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,ue,de;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Item States',
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-foreground-muted mb-2">Complete (can be clicked)</p>
        <ProgressStepper progressValue="step-3" defaultValue="step-1" aria-label="Complete state">
          <ProgressStepperItem value="step-1" text="Complete Step" />
          <ProgressStepperItem value="step-2" text="Another Complete" />
          <ProgressStepperItem value="step-3" text="Current Step" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Incomplete (current progress)</p>
        <ProgressStepper progressValue="step-1" defaultValue="step-1" aria-label="Incomplete state">
          <ProgressStepperItem value="step-1" text="Current Step" />
          <ProgressStepperItem value="step-2" text="Inactive" />
          <ProgressStepperItem value="step-3" text="Inactive" />
        </ProgressStepper>
      </div>

      <div>
        <p className="text-sm text-foreground-muted mb-2">Invalid state</p>
        <ProgressStepper progressValue="step-2" defaultValue="step-1" aria-label="Invalid state">
          <ProgressStepperItem value="step-1" text="Invalid Step" invalid />
          <ProgressStepperItem value="step-2" text="Current Step" />
          <ProgressStepperItem value="step-3" text="Inactive" />
        </ProgressStepper>
      </div>
    </div>
}`,...(de=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const qe=["Default","AllStates","WithInvalidStep","MultipleInvalidSteps","Controlled","ThreeSteps","FiveSteps","LongLabels","ItemStates"];export{N as AllStates,A as Controlled,y as Default,T as FiveSteps,F as ItemStates,O as LongLabels,k as MultipleInvalidSteps,R as ThreeSteps,w as WithInvalidStep,qe as __namedExportsOrder,Ee as default};
