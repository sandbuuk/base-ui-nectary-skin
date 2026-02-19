import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as We}from"./index-CsAwyYjM.js";import{B as r}from"./Button-SrxEgsda.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./Spinner-Bh5BG8Cg.js";const a=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2v12M2 8h12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),Le=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M3 8h10M9 4l4 4-4 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),t=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 1l2.2 4.5 5 .7-3.6 3.5.9 5L8 12.6 3.5 14.7l.9-5-3.6-3.5 5-.7L8 1z"})}),Ee={title:"Components/Button",component:r,tags:["autodocs"],args:{onClick:We()},argTypes:{variant:{control:"select",options:["primary","secondary","subtle-primary","subtle-secondary","cta-primary","cta-secondary","destructive"],description:"Visual variant of the button"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Whether the button is in a loading state"},toggled:{control:"boolean",description:"Whether the button is toggled (for subtle variants)"},text:{control:"text",description:"Text content of the button"},formType:{control:"select",options:["button","submit","reset"],description:"Form behavior type"}}},n={args:{children:"Button"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"subtle-primary",children:"Subtle Primary"}),e.jsx(r,{variant:"subtle-secondary",children:"Subtle Secondary"}),e.jsx(r,{variant:"cta-primary",children:"CTA Primary"}),e.jsx(r,{variant:"cta-secondary",children:"CTA Secondary"}),e.jsx(r,{variant:"destructive",children:"Destructive"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xs",children:"Extra Small"}),e.jsx(r,{size:"s",children:"Small"}),e.jsx(r,{size:"m",children:"Medium"}),e.jsx(r,{size:"l",children:"Large"})]})},o={name:"Sizes (Primary)",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",size:"xs",children:"Extra Small"}),e.jsx(r,{variant:"primary",size:"s",children:"Small"}),e.jsx(r,{variant:"primary",size:"m",children:"Medium"}),e.jsx(r,{variant:"primary",size:"l",children:"Large"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{variant:"primary",disabled:!0,children:"Primary"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(r,{variant:"subtle-primary",disabled:!0,children:"Subtle Primary"}),e.jsx(r,{variant:"subtle-secondary",disabled:!0,children:"Subtle Secondary"}),e.jsx(r,{variant:"cta-primary",disabled:!0,children:"CTA Primary"}),e.jsx(r,{variant:"cta-secondary",disabled:!0,children:"CTA Secondary"}),e.jsx(r,{variant:"destructive",disabled:!0,children:"Destructive"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{variant:"primary",loading:!0,children:"Primary"}),e.jsx(r,{variant:"secondary",loading:!0,children:"Secondary"}),e.jsx(r,{variant:"subtle-primary",loading:!0,children:"Subtle Primary"}),e.jsx(r,{variant:"destructive",loading:!0,children:"Destructive"})]})},d={name:"Loading (Sizes)",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",size:"xs",loading:!0,children:"Extra Small"}),e.jsx(r,{variant:"primary",size:"s",loading:!0,children:"Small"}),e.jsx(r,{variant:"primary",size:"m",loading:!0,children:"Medium"}),e.jsx(r,{variant:"primary",size:"l",loading:!0,children:"Large"})]})},u={args:{children:"Add Item",leftIcon:e.jsx(a,{})}},m={args:{children:"Continue",rightIcon:e.jsx(Le,{})}},p={args:{children:"Favorite",leftIcon:e.jsx(t,{}),rightIcon:e.jsx(Le,{})}},v={args:{icon:e.jsx(a,{}),"aria-label":"Add item"}},x={name:"Icon Only (Sizes)",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xs",icon:e.jsx(a,{}),"aria-label":"Add item"}),e.jsx(r,{size:"s",icon:e.jsx(a,{}),"aria-label":"Add item"}),e.jsx(r,{size:"m",icon:e.jsx(a,{}),"aria-label":"Add item"}),e.jsx(r,{size:"l",icon:e.jsx(a,{}),"aria-label":"Add item"})]})},g={name:"Icon Only (Variants)",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",icon:e.jsx(a,{}),"aria-label":"Add item"}),e.jsx(r,{variant:"secondary",icon:e.jsx(a,{}),"aria-label":"Add item"}),e.jsx(r,{variant:"subtle-primary",icon:e.jsx(t,{}),"aria-label":"Favorite"}),e.jsx(r,{variant:"subtle-secondary",icon:e.jsx(t,{}),"aria-label":"Favorite"}),e.jsx(r,{variant:"destructive",icon:e.jsx(a,{}),"aria-label":"Delete"})]})},y={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"subtle-primary",toggled:!0,children:"Toggled Primary"}),e.jsx(r,{variant:"subtle-secondary",toggled:!0,children:"Toggled Secondary"}),e.jsx(r,{variant:"subtle-primary",icon:e.jsx(t,{}),toggled:!0,"aria-label":"Favorited"}),e.jsx(r,{variant:"subtle-secondary",icon:e.jsx(t,{}),toggled:!0,"aria-label":"Favorited"})]})},h={args:{text:"Using text prop",variant:"primary"}},b={render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{variant:"primary",className:"w-full",children:"Full Width Button"})})},B={render:()=>e.jsxs("form",{onSubmit:Te=>{Te.preventDefault(),alert("Form submitted!")},className:"flex gap-4",children:[e.jsx(r,{variant:"secondary",formType:"reset",children:"Reset"}),e.jsx(r,{variant:"primary",formType:"submit",children:"Submit"})]})},j={render:()=>e.jsxs("div",{className:"flex",children:[e.jsx(r,{variant:"secondary",className:"rounded-r-none border-r-0",children:"Left"}),e.jsx(r,{variant:"secondary",className:"rounded-none border-r-0",children:"Center"}),e.jsx(r,{variant:"secondary",className:"rounded-l-none",children:"Right"})]})},f={args:{children:"Click me",variant:"primary",size:"m",disabled:!1,loading:!1,toggled:!1}},S={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Primary Variant"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"primary",children:"Default"}),e.jsx(r,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"primary",loading:!0,children:"Loading"}),e.jsx(r,{variant:"primary",leftIcon:e.jsx(a,{}),children:"With Icon"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Secondary Variant"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"secondary",children:"Default"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"secondary",loading:!0,children:"Loading"}),e.jsx(r,{variant:"secondary",leftIcon:e.jsx(a,{}),children:"With Icon"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Subtle Primary Variant"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"subtle-primary",children:"Default"}),e.jsx(r,{variant:"subtle-primary",toggled:!0,children:"Toggled"}),e.jsx(r,{variant:"subtle-primary",disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"subtle-primary",loading:!0,children:"Loading"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Destructive Variant"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{variant:"destructive",children:"Default"}),e.jsx(r,{variant:"destructive",disabled:!0,children:"Disabled"}),e.jsx(r,{variant:"destructive",loading:!0,children:"Loading"}),e.jsx(r,{variant:"destructive",leftIcon:e.jsx(a,{}),children:"With Icon"})]})]})]})};var I,z,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var P,D,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="subtle-primary">Subtle Primary</Button>
      <Button variant="subtle-secondary">Subtle Secondary</Button>
      <Button variant="cta-primary">CTA Primary</Button>
      <Button variant="cta-secondary">CTA Secondary</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var L,T,W;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </div>
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,w,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Sizes (Primary)',
  render: () => <div className="flex items-center gap-4">
      <Button variant="primary" size="xs">Extra Small</Button>
      <Button variant="primary" size="s">Small</Button>
      <Button variant="primary" size="m">Medium</Button>
      <Button variant="primary" size="l">Large</Button>
    </div>
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var V,M,O;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="subtle-primary" disabled>Subtle Primary</Button>
      <Button variant="subtle-secondary" disabled>Subtle Secondary</Button>
      <Button variant="cta-primary" disabled>CTA Primary</Button>
      <Button variant="cta-secondary" disabled>CTA Secondary</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var k,R,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" loading>Primary</Button>
      <Button variant="secondary" loading>Secondary</Button>
      <Button variant="subtle-primary" loading>Subtle Primary</Button>
      <Button variant="destructive" loading>Destructive</Button>
    </div>
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var G,U,_;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Loading (Sizes)',
  render: () => <div className="flex items-center gap-4">
      <Button variant="primary" size="xs" loading>Extra Small</Button>
      <Button variant="primary" size="s" loading>Small</Button>
      <Button variant="primary" size="m" loading>Medium</Button>
      <Button variant="primary" size="l" loading>Large</Button>
    </div>
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var q,H,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Add Item',
    leftIcon: <PlusIcon />
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Continue',
    rightIcon: <ArrowRightIcon />
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: 'Favorite',
    leftIcon: <StarIcon />,
    rightIcon: <ArrowRightIcon />
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    'aria-label': 'Add item'
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Icon Only (Sizes)',
  render: () => <div className="flex items-center gap-4">
      <Button size="xs" icon={<PlusIcon />} aria-label="Add item" />
      <Button size="s" icon={<PlusIcon />} aria-label="Add item" />
      <Button size="m" icon={<PlusIcon />} aria-label="Add item" />
      <Button size="l" icon={<PlusIcon />} aria-label="Add item" />
    </div>
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,oe,le;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Icon Only (Variants)',
  render: () => <div className="flex items-center gap-4">
      <Button variant="primary" icon={<PlusIcon />} aria-label="Add item" />
      <Button variant="secondary" icon={<PlusIcon />} aria-label="Add item" />
      <Button variant="subtle-primary" icon={<StarIcon />} aria-label="Favorite" />
      <Button variant="subtle-secondary" icon={<StarIcon />} aria-label="Favorite" />
      <Button variant="destructive" icon={<PlusIcon />} aria-label="Delete" />
    </div>
}`,...(le=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button variant="subtle-primary" toggled>Toggled Primary</Button>
      <Button variant="subtle-secondary" toggled>Toggled Secondary</Button>
      <Button variant="subtle-primary" icon={<StarIcon />} toggled aria-label="Favorited" />
      <Button variant="subtle-secondary" icon={<StarIcon />} toggled aria-label="Favorited" />
    </div>
}`,...(ue=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ve;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    text: 'Using text prop',
    variant: 'primary'
  }
}`,...(ve=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var xe,ge,ye;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="w-80">
      <Button variant="primary" className="w-full">Full Width Button</Button>
    </div>
}`,...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var he,be,Be;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <form onSubmit={e => {
    e.preventDefault();
    alert('Form submitted!');
  }} className="flex gap-4">
      <Button variant="secondary" formType="reset">Reset</Button>
      <Button variant="primary" formType="submit">Submit</Button>
    </form>
}`,...(Be=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var je,fe,Se;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="flex">
      <Button variant="secondary" className="rounded-r-none border-r-0">Left</Button>
      <Button variant="secondary" className="rounded-none border-r-0">Center</Button>
      <Button variant="secondary" className="rounded-l-none">Right</Button>
    </div>
}`,...(Se=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var Ie,ze,Ne;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'm',
    disabled: false,
    loading: false,
    toggled: false
  }
}`,...(Ne=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source}}};var Pe,De,Ae;S.parameters={...S.parameters,docs:{...(Pe=S.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-lg font-semibold">Primary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" leftIcon={<PlusIcon />}>With Icon</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Secondary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Default</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="secondary" leftIcon={<PlusIcon />}>With Icon</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Subtle Primary Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="subtle-primary">Default</Button>
          <Button variant="subtle-primary" toggled>Toggled</Button>
          <Button variant="subtle-primary" disabled>Disabled</Button>
          <Button variant="subtle-primary" loading>Loading</Button>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-lg font-semibold">Destructive Variant</h3>
        <div className="flex items-center gap-4">
          <Button variant="destructive">Default</Button>
          <Button variant="destructive" disabled>Disabled</Button>
          <Button variant="destructive" loading>Loading</Button>
          <Button variant="destructive" leftIcon={<PlusIcon />}>With Icon</Button>
        </div>
      </section>
    </div>
}`,...(Ae=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};const Ge=["Default","Variants","Sizes","SizesPrimary","Disabled","Loading","LoadingSizes","WithLeftIcon","WithRightIcon","WithBothIcons","IconOnly","IconOnlySizes","IconOnlyVariants","Toggled","WithTextProp","FullWidth","FormButtons","ButtonGroup","Playground","AllStates"];export{S as AllStates,j as ButtonGroup,n as Default,l as Disabled,B as FormButtons,b as FullWidth,v as IconOnly,x as IconOnlySizes,g as IconOnlyVariants,c as Loading,d as LoadingSizes,f as Playground,i as Sizes,o as SizesPrimary,y as Toggled,s as Variants,p as WithBothIcons,u as WithLeftIcon,m as WithRightIcon,h as WithTextProp,Ge as __namedExportsOrder,Ee as default};
