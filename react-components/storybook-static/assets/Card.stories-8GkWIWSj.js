import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as _}from"./index-CsAwyYjM.js";import{c as Ke}from"./index-EXTQMK5R.js";import{r as x}from"./index-pP6CS22B.js";import{c as d}from"./cn-BLSKlp9E.js";import{T as $e}from"./Text-cs3GWPsb.js";import{I as m}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ge=x.createContext({}),et=Ke("flex",{variants:{},defaultVariants:{}}),tt=Ke(["flex","flex-col","flex-1","overflow-hidden","transition-all","duration-150","rounded-[var(--sinch-comp-card-v2-shape-radius)]","border","border-[var(--sinch-comp-card-v2-color-default-border-initial)]","bg-[var(--sinch-comp-card-v2-color-default-background-initial)]","shadow-[var(--sinch-comp-card-v2-shadow-initial)]"],{variants:{clickable:{true:"cursor-pointer",false:""},selected:{true:["bg-[var(--sinch-comp-card-v2-color-selected-background-initial)]","border-[var(--sinch-comp-card-v2-color-selected-border-initial)]","cursor-pointer"],false:""},disabled:{true:["shadow-[var(--sinch-comp-card-v2-shadow-disabled)]","bg-[var(--sinch-comp-card-v2-color-default-background-disabled)]","border-[var(--sinch-comp-card-v2-color-default-border-disabled)]","cursor-not-allowed"],false:""}},compoundVariants:[{clickable:!0,disabled:!1,className:["hover:bg-[var(--sinch-comp-card-v2-color-default-background-hover)]","hover:border-[var(--sinch-comp-card-v2-color-default-border-hover)]","hover:shadow-[var(--sinch-comp-card-v2-shadow-hover)]","active:bg-[var(--sinch-comp-card-v2-color-default-background-active)]","active:border-[var(--sinch-comp-card-v2-color-default-border-active)]","active:shadow-[var(--sinch-comp-card-v2-shadow-active)]"]},{selected:!0,disabled:!1,className:["hover:bg-[var(--sinch-comp-card-v2-color-selected-background-hover)]","hover:border-[var(--sinch-comp-card-v2-color-selected-border-hover)]","active:bg-[var(--sinch-comp-card-v2-color-selected-background-active)]","active:border-[var(--sinch-comp-card-v2-color-selected-border-active)]"]},{selected:!0,disabled:!0,className:["bg-[var(--sinch-comp-card-v2-color-selected-background-disabled)]","border-[var(--sinch-comp-card-v2-color-selected-border-disabled)]"]}],defaultVariants:{clickable:!1,selected:!1,disabled:!1}}),a=x.forwardRef(({className:o,disabled:r=!1,selected:s=!1,clickable:h,onClick:c,media:v,title:f,content:C,footer:l,children:p,...b},z)=>{const n=h??!!c,A=i=>{if(r){i.stopPropagation(),i.preventDefault();return}c==null||c(i)},Je=n?"button":void 0,Qe=n?0:void 0,Ue=!!v,Xe=!!f,Ye=!!C||!!p,Ze=!!l;return e.jsx(Ge.Provider,{value:{disabled:r,selected:s},children:e.jsx("div",{ref:z,className:d(et(),o),...b,children:e.jsxs("div",{role:Je,tabIndex:Qe,className:d(tt({clickable:n,selected:s,disabled:r})),onClick:n?A:void 0,onKeyDown:n?i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),A(i))}:void 0,children:[Ue&&e.jsx("div",{className:"block overflow-hidden",children:v}),e.jsxs("div",{className:"flex flex-col flex-1 self-stretch gap-2 p-4",children:[Xe&&e.jsx("div",{className:"flex flex-row items-center gap-2 self-stretch",children:f}),Ye&&e.jsx("div",{className:"flex gap-[10px] self-stretch",children:e.jsx("div",{className:d("max-w-full font-[var(--sinch-comp-card-v2-font-description)]",!r&&!s&&"text-[var(--sinch-comp-card-v2-color-default-description-initial)]",s&&!r&&"text-[var(--sinch-comp-card-v2-color-selected-description-initial)]",r&&!s&&"text-[var(--sinch-comp-card-v2-color-default-description-disabled)]",r&&s&&"text-[var(--sinch-comp-card-v2-color-selected-description-disabled)]"),children:C??p})}),Ze&&e.jsx("div",{className:"flex flex-row items-center gap-4 self-stretch mt-auto",children:l})]})]})})})});a.displayName="Card";const t=x.forwardRef(({className:o,text:r,orientation:s="horizontal",ellipsis:h=!1,icon:c,children:v,...f},C)=>{const{disabled:l,selected:p}=x.useContext(Ge),b=s==="vertical",z=()=>l&&p?"var(--sinch-comp-card-v2-color-selected-icon-disabled)":l?"var(--sinch-comp-card-v2-color-default-icon-disabled)":p?"var(--sinch-comp-card-v2-color-selected-icon-initial)":"var(--sinch-comp-card-v2-color-default-icon-initial)",n=()=>l&&p?"var(--sinch-comp-card-v2-color-selected-title-disabled)":l?"var(--sinch-comp-card-v2-color-default-title-disabled)":"var(--sinch-comp-card-v2-color-default-title-initial)";return e.jsxs("div",{ref:C,className:d("flex items-center",b?"flex-col items-start":"flex-row",o),...f,children:[c&&e.jsx("div",{className:d("flex",b?"mb-2":"mr-2"),style:{"--sinch-global-color-icon":z(),"--sinch-global-size-icon":"var(--sinch-comp-card-v2-size-icon)"},children:c}),e.jsx($e,{type:"m",ellipsis:h,className:"max-w-full font-[var(--sinch-comp-card-v2-font-title)]",style:{color:n()},children:r??v})]})});t.displayName="CardTitle";const u=x.forwardRef(({className:o,children:r,...s},h)=>e.jsx("div",{ref:h,className:d("block",o),...s,children:e.jsx("div",{className:d("h-full","py-5","box-border","bg-[var(--sinch-comp-card-color-default-background-initial)]","rounded-[var(--sinch-comp-card-shape-radius)]","border","border-[var(--sinch-comp-card-color-default-border-initial)]"),children:e.jsx("div",{className:"overflow-auto h-full box-border px-6 py-1",children:r})})}));u.displayName="CardContainer";a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the card is disabled",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the card is selected",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether the card is clickable. Auto-set to true if onClick is provided"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Click event handler"},media:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Media content (image, video, etc.) rendered at the top"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Title content (use CardTitle component)"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main content area"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer content rendered at the bottom"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children are rendered in the content area if content prop is not provided"}},composes:["Omit","VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{text:{required:!1,tsType:{name:"string"},description:"Title text"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation relative to the icon slot",defaultValue:{value:"'horizontal'",computed:!1}},ellipsis:{required:!1,tsType:{name:"boolean"},description:"Truncate text with ellipsis",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children can be used instead of text prop"}}};u.__docgenInfo={description:"",methods:[],displayName:"CardContainer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display inside the container"}}};const dt={title:"Components/Card",component:a,tags:["autodocs"],args:{onClick:_()},argTypes:{disabled:{control:"boolean"},selected:{control:"boolean"},clickable:{control:"boolean"}}},g={args:{title:e.jsx(t,{text:"Card Title"}),content:"This is the card content. It can contain any text or components."}},T={args:{title:e.jsx(t,{text:"Card with Icon",icon:e.jsx(m,{name:"star",iconsVersion:"2"})}),content:"This card has an icon in the title."}},j={args:{title:e.jsx(t,{text:"Vertical Icon Layout",orientation:"vertical",icon:e.jsx(m,{name:"star",iconsVersion:"2"})}),content:"The icon is displayed above the title text."}},N={args:{title:e.jsx(t,{text:"Clickable Card"}),content:"Click me! Hover and active states are visible.",onClick:_()}},w={args:{title:e.jsx(t,{text:"Selected Card"}),content:"This card is in a selected state.",selected:!0}},y={args:{title:e.jsx(t,{text:"Disabled Card"}),content:"This card is disabled and cannot be interacted with.",disabled:!0}},S={name:"Selected + Disabled",args:{title:e.jsx(t,{text:"Selected & Disabled"}),content:"This card is both selected and disabled.",selected:!0,disabled:!0}},k={args:{media:e.jsx("img",{src:"https://placehold.co/400x200",alt:"Placeholder",className:"w-full h-auto"}),title:e.jsx(t,{text:"Card with Media"}),content:"This card has an image at the top."}},D={args:{title:e.jsx(t,{text:"Card with Footer"}),content:"This card has a footer area.",footer:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded",children:"Action"}),e.jsx("button",{className:"px-3 py-1 text-sm border border-border rounded",children:"Cancel"})]})}},I={args:{media:e.jsx("img",{src:"https://placehold.co/400x150",alt:"Placeholder",className:"w-full h-auto"}),title:e.jsx(t,{text:"Full Featured Card",icon:e.jsx(m,{name:"star",iconsVersion:"2"})}),content:"This card demonstrates all the features: media, title with icon, content, and footer.",footer:e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded",children:"Learn More"})}),onClick:_()}},R={args:{title:e.jsx(t,{text:"This is a very long title that should be truncated with ellipsis when it exceeds the available width",ellipsis:!0}),content:"The title text is truncated."},decorators:[o=>e.jsx("div",{style:{width:250},children:e.jsx(o,{})})]},V={name:"CardTitle - Default",render:()=>e.jsx(t,{text:"Default Title"})},M={name:"CardTitle - With Icon",render:()=>e.jsx(t,{text:"Title with Icon",icon:e.jsx(m,{name:"circle-info",iconsVersion:"2"})})},W={name:"CardTitle - Vertical",render:()=>e.jsx(t,{text:"Vertical Title",orientation:"vertical",icon:e.jsx(m,{name:"circle-info",iconsVersion:"2"})})},F={name:"CardTitle - Ellipsis",render:()=>e.jsx("div",{style:{width:150},children:e.jsx(t,{text:"This is a very long title that will be truncated",ellipsis:!0})})},E={name:"CardContainer - Default",render:()=>e.jsxs(u,{children:[e.jsx("p",{children:"Content inside the card container"}),e.jsx("p",{children:"More content here"})]})},q={name:"CardContainer - Multiple Cards",render:()=>e.jsx(u,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{title:e.jsx(t,{text:"Card 1"}),content:"First card inside the container"}),e.jsx(a,{title:e.jsx(t,{text:"Card 2"}),content:"Second card inside the container"}),e.jsx(a,{title:e.jsx(t,{text:"Card 3"}),content:"Third card inside the container"})]})})},H={name:"CardContainer - Fixed Height (Scrollable)",render:()=>e.jsx("div",{style:{height:200},children:e.jsx(u,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{title:e.jsx(t,{text:"Card 1"}),content:"First card"}),e.jsx(a,{title:e.jsx(t,{text:"Card 2"}),content:"Second card"}),e.jsx(a,{title:e.jsx(t,{text:"Card 3"}),content:"Third card"}),e.jsx(a,{title:e.jsx(t,{text:"Card 4"}),content:"Fourth card"})]})})})},L={name:"All States Overview",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Default States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{title:e.jsx(t,{text:"Default"}),content:"Default state"}),e.jsx(a,{title:e.jsx(t,{text:"Clickable"}),content:"Hover me",onClick:()=>{}}),e.jsx(a,{title:e.jsx(t,{text:"Selected"}),content:"Selected state",selected:!0}),e.jsx(a,{title:e.jsx(t,{text:"Disabled"}),content:"Disabled state",disabled:!0})]}),e.jsx("h3",{className:"text-lg font-semibold mt-4",children:"Combined States"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{title:e.jsx(t,{text:"Selected + Clickable"}),content:"Selected and clickable",selected:!0,onClick:()=>{}}),e.jsx(a,{title:e.jsx(t,{text:"Selected + Disabled"}),content:"Selected and disabled",selected:!0,disabled:!0})]}),e.jsx("h3",{className:"text-lg font-semibold mt-4",children:"With Icons"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{title:e.jsx(t,{text:"Horizontal Icon",icon:e.jsx(m,{name:"star",iconsVersion:"2"})}),content:"Icon on the left"}),e.jsx(a,{title:e.jsx(t,{text:"Vertical Icon",orientation:"vertical",icon:e.jsx(m,{name:"star",iconsVersion:"2"})}),content:"Icon on top"})]})]})};var P,B,O;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Card Title" />,
    content: 'This is the card content. It can contain any text or components.'
  }
}`,...(O=(B=g.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var K,G,J;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Card with Icon" icon={<Icon name="star" iconsVersion="2" />} />,
    content: 'This card has an icon in the title.'
  }
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Vertical Icon Layout" orientation="vertical" icon={<Icon name="star" iconsVersion="2" />} />,
    content: 'The icon is displayed above the title text.'
  }
}`,...(X=(U=j.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Clickable Card" />,
    content: 'Click me! Hover and active states are visible.',
    onClick: fn()
  }
}`,...($=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Selected Card" />,
    content: 'This card is in a selected state.',
    selected: true
  }
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Disabled Card" />,
    content: 'This card is disabled and cannot be interacted with.',
    disabled: true
  }
}`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,ce,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Selected + Disabled',
  args: {
    title: <CardTitle text="Selected & Disabled" />,
    content: 'This card is both selected and disabled.',
    selected: true,
    disabled: true
  }
}`,...(le=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ne,de,me;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    media: <img src="https://placehold.co/400x200" alt="Placeholder" className="w-full h-auto" />,
    title: <CardTitle text="Card with Media" />,
    content: 'This card has an image at the top.'
  }
}`,...(me=(de=k.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,he,xe;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="Card with Footer" />,
    content: 'This card has a footer area.',
    footer: <div className="flex gap-2">
        <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">
          Action
        </button>
        <button className="px-3 py-1 text-sm border border-border rounded">
          Cancel
        </button>
      </div>
  }
}`,...(xe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ue,ve,fe;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    media: <img src="https://placehold.co/400x150" alt="Placeholder" className="w-full h-auto" />,
    title: <CardTitle text="Full Featured Card" icon={<Icon name="star" iconsVersion="2" />} />,
    content: 'This card demonstrates all the features: media, title with icon, content, and footer.',
    footer: <div className="flex gap-2">
        <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded">
          Learn More
        </button>
      </div>,
    onClick: fn()
  }
}`,...(fe=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ce,be,ge;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    title: <CardTitle text="This is a very long title that should be truncated with ellipsis when it exceeds the available width" ellipsis />,
    content: 'The title text is truncated.'
  },
  decorators: [Story => <div style={{
    width: 250
  }}>
        <Story />
      </div>]
}`,...(ge=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Te,je,Ne;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'CardTitle - Default',
  render: () => <CardTitle text="Default Title" />
}`,...(Ne=(je=V.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};var we,ye,Se;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'CardTitle - With Icon',
  render: () => <CardTitle text="Title with Icon" icon={<Icon name="circle-info" iconsVersion="2" />} />
}`,...(Se=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var ke,De,Ie;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'CardTitle - Vertical',
  render: () => <CardTitle text="Vertical Title" orientation="vertical" icon={<Icon name="circle-info" iconsVersion="2" />} />
}`,...(Ie=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Re,Ve,Me;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'CardTitle - Ellipsis',
  render: () => <div style={{
    width: 150
  }}>
      <CardTitle text="This is a very long title that will be truncated" ellipsis />
    </div>
}`,...(Me=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var We,Fe,Ee;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'CardContainer - Default',
  render: () => <CardContainer>
      <p>Content inside the card container</p>
      <p>More content here</p>
    </CardContainer>
}`,...(Ee=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var qe,He,Le;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'CardContainer - Multiple Cards',
  render: () => <CardContainer>
      <div className="flex flex-col gap-4">
        <Card title={<CardTitle text="Card 1" />} content="First card inside the container" />
        <Card title={<CardTitle text="Card 2" />} content="Second card inside the container" />
        <Card title={<CardTitle text="Card 3" />} content="Third card inside the container" />
      </div>
    </CardContainer>
}`,...(Le=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var ze,_e,Ae;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'CardContainer - Fixed Height (Scrollable)',
  render: () => <div style={{
    height: 200
  }}>
      <CardContainer>
        <div className="flex flex-col gap-4">
          <Card title={<CardTitle text="Card 1" />} content="First card" />
          <Card title={<CardTitle text="Card 2" />} content="Second card" />
          <Card title={<CardTitle text="Card 3" />} content="Third card" />
          <Card title={<CardTitle text="Card 4" />} content="Fourth card" />
        </div>
      </CardContainer>
    </div>
}`,...(Ae=(_e=H.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var Pe,Be,Oe;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'All States Overview',
  render: () => <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Default States</h3>
      <div className="flex gap-4 flex-wrap">
        <Card title={<CardTitle text="Default" />} content="Default state" />
        <Card title={<CardTitle text="Clickable" />} content="Hover me" onClick={() => {}} />
        <Card title={<CardTitle text="Selected" />} content="Selected state" selected />
        <Card title={<CardTitle text="Disabled" />} content="Disabled state" disabled />
      </div>

      <h3 className="text-lg font-semibold mt-4">Combined States</h3>
      <div className="flex gap-4 flex-wrap">
        <Card title={<CardTitle text="Selected + Clickable" />} content="Selected and clickable" selected onClick={() => {}} />
        <Card title={<CardTitle text="Selected + Disabled" />} content="Selected and disabled" selected disabled />
      </div>

      <h3 className="text-lg font-semibold mt-4">With Icons</h3>
      <div className="flex gap-4 flex-wrap">
        <Card title={<CardTitle text="Horizontal Icon" icon={<Icon name="star" iconsVersion="2" />} />} content="Icon on the left" />
        <Card title={<CardTitle text="Vertical Icon" orientation="vertical" icon={<Icon name="star" iconsVersion="2" />} />} content="Icon on top" />
      </div>
    </div>
}`,...(Oe=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};const mt=["Default","WithIcon","VerticalLayout","Clickable","Selected","Disabled","SelectedDisabled","WithMedia","WithFooter","FullExample","WithEllipsis","TitleDefault","TitleWithIcon","TitleVertical","TitleEllipsis","ContainerDefault","ContainerWithMultipleCards","ContainerWithHeight","AllStates"];export{L as AllStates,N as Clickable,E as ContainerDefault,H as ContainerWithHeight,q as ContainerWithMultipleCards,g as Default,y as Disabled,I as FullExample,w as Selected,S as SelectedDisabled,V as TitleDefault,F as TitleEllipsis,W as TitleVertical,M as TitleWithIcon,j as VerticalLayout,R as WithEllipsis,D as WithFooter,T as WithIcon,k as WithMedia,mt as __namedExportsOrder,dt as default};
