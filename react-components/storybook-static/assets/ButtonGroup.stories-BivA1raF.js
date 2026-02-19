import{j as t}from"./jsx-runtime-Z5uAzocK.js";import{r as s}from"./index-pP6CS22B.js";import{c as nt}from"./index-EXTQMK5R.js";import{c as N}from"./cn-BLSKlp9E.js";import{B as mt}from"./Button-SrxEgsda.js";import{I as i}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Spinner-Bh5BG8Cg.js";const ot=s.createContext(null);function dt(){return s.useContext(ot)}const ct=nt("inline-flex",{variants:{},defaultVariants:{}}),r=s.forwardRef(({className:o,children:a,size:f="m",variant:b="secondary",...I},n)=>{const m=s.Children.count(a);return t.jsx(ot.Provider,{value:{size:f,variant:b,itemCount:m},children:t.jsx("div",{ref:n,role:"group",className:N(ct(),o),...I,children:s.Children.map(a,(u,g)=>s.isValidElement(u)?s.cloneElement(u,{_index:g}):u)})})});r.displayName="ButtonGroup";r.__docgenInfo={description:`ButtonGroup component that wraps ButtonGroupItem children.

Provides size and variant context to child items, creating a
visually unified button group with connected styling.`,methods:[],displayName:"ButtonGroup",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},description:`Size of all buttons in the group
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'subtle-primary'
| 'subtle-secondary'
| 'cta-primary'
| 'cta-secondary'
| 'destructive'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'subtle-primary'"},{name:"literal",value:"'subtle-secondary'"},{name:"literal",value:"'cta-primary'"},{name:"literal",value:"'cta-secondary'"},{name:"literal",value:"'destructive'"}]},description:`Variant/style of all buttons in the group
@default 'secondary'`,defaultValue:{value:"'secondary'",computed:!1}}},composes:["VariantProps"]};function lt(o){return{primary:"var(--sinch-comp-button-color-primary-default-text-initial)",secondary:"var(--sinch-comp-button-color-secondary-default-text-initial)","subtle-primary":"var(--sinch-comp-button-color-subtle-primary-default-text-initial)","subtle-secondary":"var(--sinch-comp-button-color-subtle-secondary-default-text-initial)","cta-primary":"var(--sinch-comp-button-color-cta-primary-default-text-initial)","cta-secondary":"var(--sinch-comp-button-color-cta-secondary-default-text-initial)",destructive:"var(--sinch-comp-button-color-danger-default-text-initial)"}[o]}function pt(o){return{xs:"var(--sinch-comp-button-shape-radius-size-xs)",s:"var(--sinch-comp-button-shape-radius-size-s)",m:"var(--sinch-comp-button-shape-radius-size-m)",l:"var(--sinch-comp-button-shape-radius-size-l)"}[o]}const xt=nt("relative flex",{variants:{},defaultVariants:{}}),e=s.forwardRef(({className:o,_index:a=0,style:f,...b},I)=>{const n=dt(),m=(n==null?void 0:n.size)??"m",u=(n==null?void 0:n.variant)??"secondary",g=(n==null?void 0:n.itemCount)??1,d=a===0,T=a===g-1,st=!d&&!T,at=pt(m),ut=lt(u),it={...f,"--button-group-item-divider-color":ut};return t.jsx("div",{className:N(xt(),!d&&["before:absolute before:left-0 before:top-[10%] before:bottom-[10%]","before:w-px before:-translate-x-[0.5px]","before:bg-[var(--button-group-item-divider-color)]","before:opacity-30 before:pointer-events-none before:z-10"],o),style:it,children:t.jsx(mt,{ref:I,variant:u,size:m,className:N("!rounded-none",d&&"!rounded-l-[var(--button-group-item-radius)]",T&&"!rounded-r-[var(--button-group-item-radius)]",!d&&"!border-l-0",!T&&"!border-r-0",st&&"!border-l-0 !border-r-0"),style:{"--button-group-item-radius":at},...b})})});e.displayName="ButtonGroupItem";e.__docgenInfo={description:`ButtonGroupItem component for use within a ButtonGroup.

Automatically inherits size and variant from the parent ButtonGroup
and handles special styling for first/last items in the group.`,methods:[],displayName:"ButtonGroupItem",props:{toggled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in a toggled/pressed state"},_index:{required:!1,tsType:{name:"number"},description:`Internal prop for position tracking (set by ButtonGroup)
@internal`,defaultValue:{value:"0",computed:!1}}},composes:["Omit","VariantProps"]};const It={title:"Components/ButtonGroup",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","subtle-primary","subtle-secondary","cta-primary","cta-secondary","destructive"]},size:{control:"select",options:["xs","s","m","l"]}}},c={render:o=>t.jsxs(r,{...o,children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]}),args:{variant:"secondary",size:"m"}},l={render:()=>t.jsxs(r,{variant:"primary",children:[t.jsx(e,{text:"Save"}),t.jsx(e,{text:"Cancel"}),t.jsx(e,{text:"Delete"})]})},p={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Primary"}),t.jsxs(r,{variant:"primary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Secondary"}),t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Subtle Primary"}),t.jsxs(r,{variant:"subtle-primary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Subtle Secondary"}),t.jsxs(r,{variant:"subtle-secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"CTA Primary"}),t.jsxs(r,{variant:"cta-primary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"CTA Secondary"}),t.jsxs(r,{variant:"cta-secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Destructive"}),t.jsxs(r,{variant:"destructive",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]})]})},x={render:()=>t.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Extra Small (xs)"}),t.jsxs(r,{size:"xs",variant:"secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Small (s)"}),t.jsxs(r,{size:"s",variant:"secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Medium (m)"}),t.jsxs(r,{size:"m",variant:"secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Large (l)"}),t.jsxs(r,{size:"l",variant:"secondary",children:[t.jsx(e,{text:"One"}),t.jsx(e,{text:"Two"}),t.jsx(e,{text:"Three"})]})]})]})},v={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"With Left Icons"}),t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{text:"Edit",leftIcon:t.jsx(i,{name:"edit-contained",size:"sm"})}),t.jsx(e,{text:"Copy",leftIcon:t.jsx(i,{name:"copy",size:"sm"})}),t.jsx(e,{text:"Delete",leftIcon:t.jsx(i,{name:"delete",size:"sm"})})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-foreground-muted text-sm mb-2",children:"Icon Only"}),t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{icon:t.jsx(i,{name:"edit-contained",size:"sm"}),"aria-label":"Edit"}),t.jsx(e,{icon:t.jsx(i,{name:"copy",size:"sm"}),"aria-label":"Copy"}),t.jsx(e,{icon:t.jsx(i,{name:"delete",size:"sm"}),"aria-label":"Delete"})]})]})]})},j={render:()=>t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{text:"Yes"}),t.jsx(e,{text:"No"})]})},B={render:()=>t.jsx(r,{variant:"secondary",children:t.jsx(e,{text:"Only One"})})},y={render:()=>t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{text:"1"}),t.jsx(e,{text:"2"}),t.jsx(e,{text:"3"}),t.jsx(e,{text:"4"}),t.jsx(e,{text:"5"}),t.jsx(e,{text:"6"})]})},G={render:()=>t.jsxs(r,{variant:"secondary",children:[t.jsx(e,{text:"Enabled"}),t.jsx(e,{text:"Disabled",disabled:!0}),t.jsx(e,{text:"Enabled"})]})},h={render:()=>t.jsxs(r,{variant:"subtle-primary",children:[t.jsx(e,{text:"Option A"}),t.jsx(e,{text:"Option B",toggled:!0}),t.jsx(e,{text:"Option C"})]})};var z,O,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <ButtonGroupItem text="One" />
      <ButtonGroupItem text="Two" />
      <ButtonGroupItem text="Three" />
    </ButtonGroup>,
  args: {
    variant: 'secondary',
    size: 'm'
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var S,C,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="primary">
      <ButtonGroupItem text="Save" />
      <ButtonGroupItem text="Cancel" />
      <ButtonGroupItem text="Delete" />
    </ButtonGroup>
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,V,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-foreground-muted text-sm mb-2">Primary</p>
        <ButtonGroup variant="primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Secondary</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Subtle Primary</p>
        <ButtonGroup variant="subtle-primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Subtle Secondary</p>
        <ButtonGroup variant="subtle-secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">CTA Primary</p>
        <ButtonGroup variant="cta-primary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">CTA Secondary</p>
        <ButtonGroup variant="cta-secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Destructive</p>
        <ButtonGroup variant="destructive">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>
    </div>
}`,...(P=(V=p.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var M,W,A;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">
      <div>
        <p className="text-foreground-muted text-sm mb-2">Extra Small (xs)</p>
        <ButtonGroup size="xs" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Small (s)</p>
        <ButtonGroup size="s" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Medium (m)</p>
        <ButtonGroup size="m" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Large (l)</p>
        <ButtonGroup size="l" variant="secondary">
          <ButtonGroupItem text="One" />
          <ButtonGroupItem text="Two" />
          <ButtonGroupItem text="Three" />
        </ButtonGroup>
      </div>
    </div>
}`,...(A=(W=x.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,L,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-foreground-muted text-sm mb-2">With Left Icons</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem text="Edit" leftIcon={<Icon name="edit-contained" size="sm" />} />
          <ButtonGroupItem text="Copy" leftIcon={<Icon name="copy" size="sm" />} />
          <ButtonGroupItem text="Delete" leftIcon={<Icon name="delete" size="sm" />} />
        </ButtonGroup>
      </div>

      <div>
        <p className="text-foreground-muted text-sm mb-2">Icon Only</p>
        <ButtonGroup variant="secondary">
          <ButtonGroupItem icon={<Icon name="edit-contained" size="sm" />} aria-label="Edit" />
          <ButtonGroupItem icon={<Icon name="copy" size="sm" />} aria-label="Copy" />
          <ButtonGroupItem icon={<Icon name="delete" size="sm" />} aria-label="Delete" />
        </ButtonGroup>
      </div>
    </div>
}`,...(R=(L=v.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var q,Y,k;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Yes" />
      <ButtonGroupItem text="No" />
    </ButtonGroup>
}`,...(k=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:k.source}}};var F,H,J;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Only One" />
    </ButtonGroup>
}`,...(J=(H=B.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="secondary">
      <ButtonGroupItem text="1" />
      <ButtonGroupItem text="2" />
      <ButtonGroupItem text="3" />
      <ButtonGroupItem text="4" />
      <ButtonGroupItem text="5" />
      <ButtonGroupItem text="6" />
    </ButtonGroup>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,$;G.parameters={...G.parameters,docs:{...(X=G.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="secondary">
      <ButtonGroupItem text="Enabled" />
      <ButtonGroupItem text="Disabled" disabled />
      <ButtonGroupItem text="Enabled" />
    </ButtonGroup>
}`,...($=(Z=G.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,et,rt;h.parameters={...h.parameters,docs:{...(tt=h.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <ButtonGroup variant="subtle-primary">
      <ButtonGroupItem text="Option A" />
      <ButtonGroupItem text="Option B" toggled />
      <ButtonGroupItem text="Option C" />
    </ButtonGroup>
}`,...(rt=(et=h.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};const gt=["Default","Primary","Variants","Sizes","WithIcons","TwoItems","SingleItem","ManyItems","WithDisabledItem","WithToggledItem"];export{c as Default,y as ManyItems,l as Primary,B as SingleItem,x as Sizes,j as TwoItems,p as Variants,G as WithDisabledItem,v as WithIcons,h as WithToggledItem,gt as __namedExportsOrder,It as default};
