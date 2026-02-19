import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as A}from"./index-CsAwyYjM.js";import{r as D}from"./index-pP6CS22B.js";import{I as a}from"./Input-DkujYRlI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const sr={title:"Components/Input",component:a,tags:["autodocs"],args:{onChange:A(),onFocus:A(),onBlur:A()},argTypes:{type:{control:"select",options:["text","password","number"],description:"Input type"},size:{control:"select",options:["s","m","l"],description:"Size of the input"},invalid:{control:"boolean",description:"Invalid/error state"},disabled:{control:"boolean",description:"Disabled state"},readOnly:{control:"boolean",description:"Read-only state"},required:{control:"boolean",description:"Required field"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Controlled value"}},parameters:{docs:{description:{component:"A text input component supporting controlled and uncontrolled patterns, multiple input types, error states, and icon/addon slots."}}}},W=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 14L11 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ga=({onClick:r})=>e.jsx("button",{type:"button",onClick:r,className:"flex items-center justify-center w-6 h-6 rounded hover:bg-surface-secondary-hover","aria-label":"Clear",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),t={args:{placeholder:"Enter text..."}},o={args:{value:"Hello World"}},n={args:{placeholder:"Enter your email address"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Small"}),e.jsx(a,{size:"s",placeholder:"Small input"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Medium (default)"}),e.jsx(a,{size:"m",placeholder:"Medium input"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Large"}),e.jsx(a,{size:"l",placeholder:"Large input"})]})]})},c={args:{size:"s",placeholder:"Small input"}},d={args:{size:"m",placeholder:"Medium input"}},i={args:{size:"l",placeholder:"Large input"}},p={args:{invalid:!0,placeholder:"Invalid input",value:"Invalid value"}},m={args:{disabled:!0,placeholder:"Disabled input",value:"Cannot edit this"}},u={args:{readOnly:!0,value:"Read-only value"}},x={args:{type:"password",placeholder:"Enter password"}},h={args:{type:"number",placeholder:"0",min:0,max:100,step:1}},g={args:{icon:e.jsx(W,{}),placeholder:"Search..."}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{size:"s",icon:e.jsx(W,{}),placeholder:"Small with icon"}),e.jsx(a,{size:"m",icon:e.jsx(W,{}),placeholder:"Medium with icon"}),e.jsx(a,{size:"l",icon:e.jsx(W,{}),placeholder:"Large with icon"})]})},v={render:()=>{const[r,s]=D.useState("Some text");return e.jsx(a,{value:r,onChange:s,rightAddon:e.jsx(Ga,{onClick:()=>s("")}),placeholder:"Type something..."})}},y={args:{leftAddon:e.jsx("span",{className:"text-foreground-muted px-2",children:"$"}),placeholder:"0.00",type:"number"}},j={render:()=>{const[r,s]=D.useState("");return e.jsx(a,{value:r,onChange:s,icon:e.jsx(W,{}),rightAddon:r!==""?e.jsx(Ga,{onClick:()=>s("")}):void 0,placeholder:"Search..."})}},N={render:()=>{const[r,s]=D.useState("");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{value:r,onChange:s,placeholder:"Type something..."}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",r||"(empty)"]})]})}},S={args:{defaultValue:"Default value",placeholder:"Type something..."}},b={args:{"aria-label":"Email address",placeholder:"email@example.com"}},I={args:{maxLength:10,placeholder:"Max 10 characters"}},w={args:{required:!0,placeholder:"Required field *"}},C={args:{autoComplete:"email",placeholder:"Enter your email",type:"text"}},z={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Default"}),e.jsx(a,{placeholder:"Default state"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"With value"}),e.jsx(a,{value:"Some value"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Invalid"}),e.jsx(a,{invalid:!0,value:"Invalid input"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Disabled"}),e.jsx(a,{disabled:!0,value:"Disabled input"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-sm text-foreground-muted",children:"Read-only"}),e.jsx(a,{readOnly:!0,value:"Read-only input"})]})]})},L={render:()=>e.jsxs("form",{className:"flex flex-col gap-4 max-w-sm",onSubmit:r=>r.preventDefault(),children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Name"}),e.jsx(a,{placeholder:"John Doe",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx(a,{type:"text",placeholder:"john@example.com",autoComplete:"email",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Password"}),e.jsx(a,{type:"password",placeholder:"Enter password",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium",children:"Age"}),e.jsx(a,{type:"number",placeholder:"25",min:0,max:150})]})]})};var E,M,R,k,q;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(R=(M=t.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Default input with placeholder.",...(q=(k=t.parameters)==null?void 0:k.docs)==null?void 0:q.description}}};var V,O,P,T,B;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 'Hello World'
  }
}`,...(P=(O=o.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"Input with a value.",...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var F,U,H,J,_;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your email address'
  }
}`,...(H=(U=n.parameters)==null?void 0:U.docs)==null?void 0:H.source},description:{story:"Input with placeholder text.",...(_=(J=n.parameters)==null?void 0:J.docs)==null?void 0:_.description}}};var $,Z,G,K,Q;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Small</span>
        <Input size="s" placeholder="Small input" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Medium (default)</span>
        <Input size="m" placeholder="Medium input" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Large</span>
        <Input size="l" placeholder="Large input" />
      </div>
    </div>
}`,...(G=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:G.source},description:{story:"All size variants displayed together.",...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Y,ee,ae,re;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 's',
    placeholder: 'Small input'
  }
}`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.source},description:{story:"Small size input.",...(re=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var se,te,oe,ne,le;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Medium input'
  }
}`,...(oe=(te=d.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Medium size input (default).",...(le=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:le.description}}};var ce,de,ie,pe,me;i.parameters={...i.parameters,docs:{...(ce=i.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    size: 'l',
    placeholder: 'Large input'
  }
}`,...(ie=(de=i.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:"Large size input.",...(me=(pe=i.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ue,xe,he,ge,fe;p.parameters={...p.parameters,docs:{...(ue=p.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Invalid input',
    value: 'Invalid value'
  }
}`,...(he=(xe=p.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"Input in error/invalid state.",...(fe=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:fe.description}}};var ve,ye,je,Ne,Se;m.parameters={...m.parameters,docs:{...(ve=m.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this'
  }
}`,...(je=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:je.source},description:{story:"Disabled input.",...(Se=(Ne=m.parameters)==null?void 0:Ne.docs)==null?void 0:Se.description}}};var be,Ie,we,Ce,ze;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: 'Read-only value'
  }
}`,...(we=(Ie=u.parameters)==null?void 0:Ie.docs)==null?void 0:we.source},description:{story:"Read-only input.",...(ze=(Ce=u.parameters)==null?void 0:Ce.docs)==null?void 0:ze.description}}};var Le,We,Ae,De,Ee;x.parameters={...x.parameters,docs:{...(Le=x.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(Ae=(We=x.parameters)==null?void 0:We.docs)==null?void 0:Ae.source},description:{story:"Password input type.",...(Ee=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Ee.description}}};var Me,Re,ke,qe,Ve;h.parameters={...h.parameters,docs:{...(Me=h.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
    step: 1
  }
}`,...(ke=(Re=h.parameters)==null?void 0:Re.docs)==null?void 0:ke.source},description:{story:"Number input type.",...(Ve=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:Ve.description}}};var Oe,Pe,Te,Be,Fe;g.parameters={...g.parameters,docs:{...(Oe=g.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    icon: <SearchIcon />,
    placeholder: 'Search...'
  }
}`,...(Te=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:Te.source},description:{story:"Input with an icon on the left.",...(Fe=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Fe.description}}};var Ue,He,Je,_e,$e;f.parameters={...f.parameters,docs:{...(Ue=f.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input size="s" icon={<SearchIcon />} placeholder="Small with icon" />
      <Input size="m" icon={<SearchIcon />} placeholder="Medium with icon" />
      <Input size="l" icon={<SearchIcon />} placeholder="Large with icon" />
    </div>
}`,...(Je=(He=f.parameters)==null?void 0:He.docs)==null?void 0:Je.source},description:{story:"Input with icon in all sizes.",...($e=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:$e.description}}};var Ze,Ge,Ke,Qe,Xe;v.parameters={...v.parameters,docs:{...(Ze=v.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Some text');
    return <Input value={value} onChange={setValue} rightAddon={<ClearButton onClick={() => setValue('')} />} placeholder="Type something..." />;
  }
}`,...(Ke=(Ge=v.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source},description:{story:"Input with a right addon (clear button).",...(Xe=(Qe=v.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.description}}};var Ye,ea,aa,ra,sa;y.parameters={...y.parameters,docs:{...(Ye=y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    leftAddon: <span className="text-foreground-muted px-2">$</span>,
    placeholder: '0.00',
    type: 'number'
  }
}`,...(aa=(ea=y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source},description:{story:"Input with left addon.",...(sa=(ra=y.parameters)==null?void 0:ra.docs)==null?void 0:sa.description}}};var ta,oa,na,la,ca;j.parameters={...j.parameters,docs:{...(ta=j.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Input value={value} onChange={setValue} icon={<SearchIcon />} rightAddon={value !== '' ? <ClearButton onClick={() => setValue('')} /> : undefined} placeholder="Search..." />;
  }
}`,...(na=(oa=j.parameters)==null?void 0:oa.docs)==null?void 0:na.source},description:{story:"Input with both icon and right addon.",...(ca=(la=j.parameters)==null?void 0:la.docs)==null?void 0:ca.description}}};var da,ia,pa,ma,ua;N.parameters={...N.parameters,docs:{...(da=N.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4">
        <Input value={value} onChange={setValue} placeholder="Type something..." />
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(empty)'}
        </p>
      </div>;
  }
}`,...(pa=(ia=N.parameters)==null?void 0:ia.docs)==null?void 0:pa.source},description:{story:"Controlled input example showing state management.",...(ua=(ma=N.parameters)==null?void 0:ma.docs)==null?void 0:ua.description}}};var xa,ha,ga,fa,va;S.parameters={...S.parameters,docs:{...(xa=S.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Default value',
    placeholder: 'Type something...'
  }
}`,...(ga=(ha=S.parameters)==null?void 0:ha.docs)==null?void 0:ga.source},description:{story:"Uncontrolled input with default value.",...(va=(fa=S.parameters)==null?void 0:fa.docs)==null?void 0:va.description}}};var ya,ja,Na,Sa,ba;b.parameters={...b.parameters,docs:{...(ya=b.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Email address',
    placeholder: 'email@example.com'
  }
}`,...(Na=(ja=b.parameters)==null?void 0:ja.docs)==null?void 0:Na.source},description:{story:"Input with aria-label for accessibility.",...(ba=(Sa=b.parameters)==null?void 0:Sa.docs)==null?void 0:ba.description}}};var Ia,wa,Ca,za,La;I.parameters={...I.parameters,docs:{...(Ia=I.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    maxLength: 10,
    placeholder: 'Max 10 characters'
  }
}`,...(Ca=(wa=I.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source},description:{story:"Input with max length validation.",...(La=(za=I.parameters)==null?void 0:za.docs)==null?void 0:La.description}}};var Wa,Aa,Da,Ea,Ma;w.parameters={...w.parameters,docs:{...(Wa=w.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholder: 'Required field *'
  }
}`,...(Da=(Aa=w.parameters)==null?void 0:Aa.docs)==null?void 0:Da.source},description:{story:"Required input field.",...(Ma=(Ea=w.parameters)==null?void 0:Ea.docs)==null?void 0:Ma.description}}};var Ra,ka,qa,Va,Oa;C.parameters={...C.parameters,docs:{...(Ra=C.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  args: {
    autoComplete: 'email',
    placeholder: 'Enter your email',
    type: 'text'
  }
}`,...(qa=(ka=C.parameters)==null?void 0:ka.docs)==null?void 0:qa.source},description:{story:"Input with autocomplete attribute for forms.",...(Oa=(Va=C.parameters)==null?void 0:Va.docs)==null?void 0:Oa.description}}};var Pa,Ta,Ba,Fa,Ua;z.parameters={...z.parameters,docs:{...(Pa=z.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Default</span>
        <Input placeholder="Default state" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">With value</span>
        <Input value="Some value" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Invalid</span>
        <Input invalid value="Invalid input" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Disabled</span>
        <Input disabled value="Disabled input" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-foreground-muted">Read-only</span>
        <Input readOnly value="Read-only input" />
      </div>
    </div>
}`,...(Ba=(Ta=z.parameters)==null?void 0:Ta.docs)==null?void 0:Ba.source},description:{story:"All states comparison.",...(Ua=(Fa=z.parameters)==null?void 0:Fa.docs)==null?void 0:Ua.description}}};var Ha,Ja,_a,$a,Za;L.parameters={...L.parameters,docs:{...(Ha=L.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-4 max-w-sm" onSubmit={e => e.preventDefault()}>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Name</label>
        <Input placeholder="John Doe" required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Email</label>
        <Input type="text" placeholder="john@example.com" autoComplete="email" required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Password</label>
        <Input type="password" placeholder="Enter password" required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Age</label>
        <Input type="number" placeholder="25" min={0} max={150} />
      </div>
    </form>
}`,...(_a=(Ja=L.parameters)==null?void 0:Ja.docs)==null?void 0:_a.source},description:{story:"Form example showing multiple inputs.",...(Za=($a=L.parameters)==null?void 0:$a.docs)==null?void 0:Za.description}}};const tr=["Default","WithValue","WithPlaceholder","Sizes","Small","Medium","Large","Invalid","Disabled","ReadOnly","Password","Number","WithIcon","WithIconSizes","WithRightAddon","WithLeftAddon","WithIconAndAddon","Controlled","Uncontrolled","WithAriaLabel","WithMaxLength","Required","WithAutocomplete","AllStates","FormExample"];export{z as AllStates,N as Controlled,t as Default,m as Disabled,L as FormExample,p as Invalid,i as Large,d as Medium,h as Number,x as Password,u as ReadOnly,w as Required,l as Sizes,c as Small,S as Uncontrolled,b as WithAriaLabel,C as WithAutocomplete,g as WithIcon,j as WithIconAndAddon,f as WithIconSizes,y as WithLeftAddon,I as WithMaxLength,n as WithPlaceholder,v as WithRightAddon,o as WithValue,tr as __namedExportsOrder,sr as default};
