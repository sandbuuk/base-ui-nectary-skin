import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as v}from"./index-pP6CS22B.js";import{c as y}from"./index-EXTQMK5R.js";import{c as r}from"./cn-BLSKlp9E.js";import{I as W}from"./Input-DkujYRlI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Je=y("block w-full",{variants:{disabled:{true:"",false:""}},defaultVariants:{disabled:!1}}),Qe=y(["font-[var(--sinch-comp-field-font-label)]","overflow-hidden text-ellipsis whitespace-nowrap"],{variants:{disabled:{true:"text-[var(--sinch-comp-field-color-disabled-label-initial)]",false:"text-[var(--sinch-comp-field-color-default-label-initial)]"}},defaultVariants:{disabled:!1}}),Xe=y(["font-[var(--sinch-comp-field-font-optional)]","overflow-hidden text-ellipsis whitespace-nowrap","flex-1 text-right"],{variants:{disabled:{true:"text-[var(--sinch-comp-field-color-disabled-optional-initial)]",false:"text-[var(--sinch-comp-field-color-default-optional-initial)]"}},defaultVariants:{disabled:!1}}),Ze=y(["font-[var(--sinch-comp-field-font-additional)]","overflow-hidden text-ellipsis whitespace-nowrap","flex-1 text-right leading-5 mt-0.5"],{variants:{disabled:{true:"text-[var(--sinch-comp-field-color-disabled-additional-initial)]",false:"text-[var(--sinch-comp-field-color-default-additional-initial)]"}},defaultVariants:{disabled:!1}}),$e=["font-[var(--sinch-comp-field-font-invalid)]","text-[var(--sinch-comp-field-color-invalid-text-initial)]","overflow-hidden text-ellipsis whitespace-nowrap","leading-5 mt-0.5"],a=v.forwardRef(({className:T,label:i,optionalText:w,additionalText:j,invalidText:I,disabled:g=!1,tooltip:N,children:Ke,htmlFor:_e,...Ue},Ye)=>{const ze=v.useId(),Be=_e??ze,O=v.useRef(null),Ge=i!==void 0||w!==void 0,He=v.useCallback(()=>{const k=O.current;if(k!==null){const F=k.querySelector('input, textarea, select, [tabindex]:not([tabindex="-1"])');F==null||F.focus()}},[]);return e.jsx("div",{ref:Ye,className:r(Je({disabled:g}),T),...Ue,children:e.jsxs("div",{className:"flex flex-col w-full",children:[Ge&&e.jsxs("div",{className:"flex items-baseline h-6 mb-0.5",children:[i!==void 0&&e.jsx("label",{htmlFor:Be,className:r(Qe({disabled:g}),"cursor-pointer"),onClick:He,children:i}),N!==void 0&&e.jsx("div",{className:"self-center mx-2 flex",children:N}),w!==void 0&&e.jsx("span",{className:r(Xe({disabled:g})),children:w})]}),e.jsx("div",{ref:O,children:Ke}),(I!==void 0||j!==void 0)&&e.jsxs("div",{className:"flex items-baseline",children:[I!==void 0&&e.jsx("div",{className:r($e),children:I}),j!==void 0&&e.jsx("div",{className:r(Ze({disabled:g})),children:j})]})]})})});a.displayName="Field";a.__docgenInfo={description:`Field component that provides a consistent wrapper for form inputs.

Includes label, optional text, tooltip slot, additional helper text,
and error message display.

@example
\`\`\`tsx
<Field label="Email" optionalText="Optional" additionalText="We'll never share your email.">
  <Input placeholder="Enter your email" />
</Field>

<Field label="Password" invalidText="Password is required">
  <Input type="password" invalid />
</Field>
\`\`\``,methods:[],displayName:"Field",props:{label:{required:!1,tsType:{name:"string"},description:"Label text displayed above the input"},optionalText:{required:!1,tsType:{name:"string"},description:"Optional text displayed in the top row (right-aligned)"},additionalText:{required:!1,tsType:{name:"string"},description:"Additional helper text displayed below the input (right-aligned)"},invalidText:{required:!1,tsType:{name:"string"},description:`Error/validation message displayed below the input
When set, indicates an invalid state`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state for the field
@default false`,defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tooltip element to display next to the label"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The form input element to wrap (Input, Textarea, Select, etc.)"},htmlFor:{required:!1,tsType:{name:"string"},description:`Custom ID for the label's htmlFor attribute
If not provided, an auto-generated ID will be used`}},composes:["Omit"]};const lt={title:"Components/Field",component:a,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input"},optionalText:{control:"text",description:"Optional text displayed in the top row (right-aligned)"},additionalText:{control:"text",description:"Additional helper text displayed below the input"},invalidText:{control:"text",description:"Error/validation message displayed below the input"},disabled:{control:"boolean",description:"Disabled state for the field"}}},t=({disabled:T,invalid:i})=>e.jsx("input",{type:"text",disabled:T,"aria-invalid":i,placeholder:"Enter value...",className:"w-full h-10 px-3 border border-border rounded-md bg-surface-primary text-foreground placeholder:text-foreground-muted disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-focus"}),s={args:{label:"Email",children:e.jsx(t,{})}},l={args:{label:"Phone Number",optionalText:"Optional",children:e.jsx(t,{})}},o={args:{label:"Username",additionalText:"Must be 3-20 characters",children:e.jsx(t,{})}},n={args:{label:"Password",invalidText:"Password must be at least 8 characters",children:e.jsx(t,{invalid:!0})}},d={args:{label:"Email",invalidText:"Invalid email format",additionalText:"Required",children:e.jsx(t,{invalid:!0})}},c={args:{label:"Company Name",optionalText:"Optional",additionalText:"This field is disabled",disabled:!0,children:e.jsx(t,{disabled:!0})}},p={args:{additionalText:"Additional information",children:e.jsx(t,{})}},u={args:{optionalText:"Optional field",children:e.jsx(t,{})}},m={args:{label:"API Key",tooltip:e.jsx("span",{title:"Your API key can be found in settings",className:"inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help",children:"?"}),children:e.jsx(t,{})}},x={args:{label:"Secret Key",tooltip:e.jsx("span",{title:"Keep this secret!",className:"inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help",children:"?"}),optionalText:"Optional",children:e.jsx(t,{})}},h={args:{label:"Full Name",optionalText:"Required",tooltip:e.jsx("span",{title:"Enter your full legal name",className:"inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help",children:"?"}),additionalText:"As it appears on your ID",children:e.jsx(t,{})}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(a,{label:"First Name",children:e.jsx(t,{})}),e.jsx(a,{label:"Last Name",children:e.jsx(t,{})}),e.jsx(a,{label:"Email",invalidText:"Please enter a valid email address",children:e.jsx(t,{invalid:!0})}),e.jsx(a,{label:"Phone",optionalText:"Optional",additionalText:"Include country code",children:e.jsx(t,{})})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(a,{label:"Email Address",additionalText:"We'll never share your email",children:e.jsx(W,{placeholder:"you@example.com"})}),e.jsx(a,{label:"Password",invalidText:"Password is required",children:e.jsx(W,{type:"password",invalid:!0,placeholder:"Enter password"})})]})};var A,E,P,M,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    children: <MockInput />
  }
}`,...(P=(E=s.parameters)==null?void 0:E.docs)==null?void 0:P.source},description:{story:"Default field with a label and input",...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.description}}};var q,R,C,D,L;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    optionalText: 'Optional',
    children: <MockInput />
  }
}`,...(C=(R=l.parameters)==null?void 0:R.docs)==null?void 0:C.source},description:{story:"Field with label and optional text indicator",...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var V,K,_,U,Y;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    additionalText: 'Must be 3-20 characters',
    children: <MockInput />
  }
}`,...(_=(K=o.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"Field with additional helper text below the input",...(Y=(U=o.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var z,B,G,H,J;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    invalidText: 'Password must be at least 8 characters',
    children: <MockInput invalid />
  }
}`,...(G=(B=n.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"Field showing an error/invalid state with error message",...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,X,Z,$,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    invalidText: 'Invalid email format',
    additionalText: 'Required',
    children: <MockInput invalid />
  }
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Field with both invalid and additional text",...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,ae,ie,re,se;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Company Name',
    optionalText: 'Optional',
    additionalText: 'This field is disabled',
    disabled: true,
    children: <MockInput disabled />
  }
}`,...(ie=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:ie.source},description:{story:"Disabled field state",...(se=(re=c.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var le,oe,ne,de,ce;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    additionalText: 'Additional information',
    children: <MockInput />
  }
}`,...(ne=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Field without a label (just input wrapper)",...(ce=(de=p.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var pe,ue,me,xe,he;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    optionalText: 'Optional field',
    children: <MockInput />
  }
}`,...(me=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"Field with only optional text",...(he=(xe=u.parameters)==null?void 0:xe.docs)==null?void 0:he.description}}};var fe,be,ge,ve,ye;m.parameters={...m.parameters,docs:{...(fe=m.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'API Key',
    tooltip: <span title="Your API key can be found in settings" className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help">
        ?
      </span>,
    children: <MockInput />
  }
}`,...(ge=(be=m.parameters)==null?void 0:be.docs)==null?void 0:ge.source},description:{story:"Field with tooltip (using a placeholder element)",...(ye=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var Te,we,je,Ie,Fe;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Secret Key',
    tooltip: <span title="Keep this secret!" className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help">
        ?
      </span>,
    optionalText: 'Optional',
    children: <MockInput />
  }
}`,...(je=(we=x.parameters)==null?void 0:we.docs)==null?void 0:je.source},description:{story:"Field with tooltip and optional text",...(Fe=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.description}}};var Ne,Oe,ke,We,Ae;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    optionalText: 'Required',
    tooltip: <span title="Enter your full legal name" className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-surface-secondary text-foreground-muted text-xs cursor-help">
        ?
      </span>,
    additionalText: 'As it appears on your ID',
    children: <MockInput />
  }
}`,...(ke=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source},description:{story:"Complete field with all features",...(Ae=(We=h.parameters)==null?void 0:We.docs)==null?void 0:Ae.description}}};var Ee,Pe,Me,Se,qe;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <Field label="First Name">
        <MockInput />
      </Field>
      <Field label="Last Name">
        <MockInput />
      </Field>
      <Field label="Email" invalidText="Please enter a valid email address">
        <MockInput invalid />
      </Field>
      <Field label="Phone" optionalText="Optional" additionalText="Include country code">
        <MockInput />
      </Field>
    </div>
}`,...(Me=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source},description:{story:"Multiple fields in a form layout",...(qe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:qe.description}}};var Re,Ce,De,Le,Ve;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <Field label="Email Address" additionalText="We'll never share your email">
        <Input placeholder="you@example.com" />
      </Field>
      <Field label="Password" invalidText="Password is required">
        <Input type="password" invalid placeholder="Enter password" />
      </Field>
    </div>
}`,...(De=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:De.source},description:{story:"Field with real Input component (integration example)",...(Ve=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:Ve.description}}};const ot=["Default","WithOptionalText","WithAdditionalText","WithInvalidText","WithInvalidAndAdditionalText","Disabled","WithoutLabel","WithOnlyOptionalText","WithTooltip","WithTooltipAndOptionalText","Complete","FormLayout","WithInputComponent"];export{h as Complete,s as Default,c as Disabled,f as FormLayout,o as WithAdditionalText,b as WithInputComponent,d as WithInvalidAndAdditionalText,n as WithInvalidText,u as WithOnlyOptionalText,l as WithOptionalText,m as WithTooltip,x as WithTooltipAndOptionalText,p as WithoutLabel,ot as __namedExportsOrder,lt as default};
