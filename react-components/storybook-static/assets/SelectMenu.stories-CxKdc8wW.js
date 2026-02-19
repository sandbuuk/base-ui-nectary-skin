import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as ht}from"./index-CsAwyYjM.js";import{r as a,R as xe}from"./index-pP6CS22B.js";import{I as y}from"./Icon-3RA0aubP.js";import{c as se}from"./index-EXTQMK5R.js";import{c as x}from"./cn-BLSKlp9E.js";import{I as bt}from"./Input-DkujYRlI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ct=a.createContext(null),gt=()=>{const s=a.useContext(ct);if(s===null)throw new Error("SelectMenuOption must be used within a SelectMenu component");return s},he=40,St=7,yt=se(["block outline-none"],{variants:{},defaultVariants:{}}),h=a.forwardRef(({className:s,name:t,value:u,defaultValue:r="",rows:c,multiple:l=!1,searchable:o=null,searchValue:d,defaultSearchValue:M="",searchPlaceholder:v="Search",searchAutocomplete:j,"aria-label":D,onChange:w,onSearchChange:C,children:N,...T},O)=>{const[B,E]=a.useState(r),[A,W]=a.useState(M),[g,m]=a.useState(null),[L,pe]=a.useState(0),le=a.useRef(new Map),oe=u!==void 0,F=oe?u:B,ie=d!==void 0,I=ie?d:A,U=a.useMemo(()=>F===""?new Set:new Set(F.split(",").map(n=>n.trim())),[F]),ut=a.useCallback(n=>U.has(n),[U]),dt=a.useMemo(()=>o===!0?!0:o===!1?!1:L>=St,[o,L]),me=a.useMemo(()=>{if(c===void 0)return;const n=c*he;return L>c?n+he/2:n},[c,L]),ce=a.useCallback(n=>{let i;if(l){const b=new Set(U);b.has(n)?b.delete(n):b.add(n),i=Array.from(b).join(",")}else i=n;oe||E(i),w==null||w(i)},[oe,l,w,U]),fe=a.useCallback(n=>{ie||W(n),C==null||C(n)},[ie,C]),pt=a.useCallback((n,i,b,z)=>{le.current.set(n,{element:i,text:b,disabled:z}),pe(V=>V+1)},[]),mt=a.useCallback(n=>{le.current.delete(n),pe(i=>Math.max(0,i-1))},[]),ve=a.useCallback(()=>Array.from(le.current.entries()).filter(([,n])=>!(n.disabled||I!==""&&!n.text.toLowerCase().includes(I.toLowerCase()))).map(([n,i])=>({value:n,element:i.element})),[I]),ft=a.useCallback(n=>{var b,z,V,S;const i=ve();if(i.length!==0)switch(n.code){case"ArrowDown":{n.preventDefault();const q=i.findIndex(de=>de.value===g),ue=q<0?0:(q+1)%i.length,_=i[ue];m(_.value),(z=(b=_.element).scrollIntoView)==null||z.call(b,{block:"nearest"});break}case"ArrowUp":{n.preventDefault();const q=i.findIndex(de=>de.value===g),ue=q<0?i.length-1:(q-1+i.length)%i.length,_=i[ue];m(_.value),(S=(V=_.element).scrollIntoView)==null||S.call(V,{block:"nearest"});break}case"Enter":case"Space":{g!==null&&(n.preventDefault(),ce(g));break}}},[ve,ce,g]),vt=a.useCallback(n=>{n.currentTarget.contains(n.relatedTarget)||m(null)},[]),xt=a.useMemo(()=>{if(I==="")return N;let n=0;const b=(z=>{const V=[];return xe.Children.forEach(z,S=>{if(!xe.isValidElement(S)){V.push(S);return}S.type===p||S.type.displayName==="SelectMenuOption"?(S.props.text??"").toLowerCase().includes(I.toLowerCase())&&(n++,V.push(S)):V.push(S)}),V})(N);return n===0?e.jsx("div",{className:x("flex items-center justify-center w-full h-[30px] mb-[10px]","pointer-events-none select-none","text-[var(--sinch-comp-select-menu-color-default-not-found-text-initial,var(--sinch-sys-color-text-muted))]","font-[var(--sinch-comp-select-menu-font-not-found-text)]"),children:"No results"}):b},[N,I]);return e.jsx(ct.Provider,{value:{value:F,multiple:l,onChange:ce,registerOption:pt,unregisterOption:mt,selectedOptionValue:g,setSelectedOptionValue:m,isValueSelected:ut},children:e.jsxs("div",{ref:O,role:"listbox",tabIndex:0,"aria-label":D,"aria-multiselectable":l||void 0,"data-name":t,"data-value":F,className:x(yt(),s),onKeyDown:ft,onBlur:vt,...T,children:[dt&&e.jsx("div",{className:"mx-[10px] my-[10px]",children:e.jsx(bt,{size:"s",value:I,placeholder:v,autoComplete:j,"aria-label":"Search options",icon:e.jsx(y,{name:"magnifying-glass",iconsVersion:"2"}),onChange:fe,rightAddon:I!==""?e.jsx("button",{type:"button",className:"flex items-center justify-center p-1 hover:bg-surface-secondary-hover rounded-sm",onClick:()=>fe(""),"aria-label":"Clear search",children:e.jsx(y,{name:"fa-xmark",iconsVersion:"2",size:"xs"})}):void 0})}),e.jsx("div",{role:"presentation",className:"overflow-y-auto",style:{maxHeight:me!==void 0?`${me}px`:void 0},children:xt})]})})});h.displayName="SelectMenu";const jt=se(["flex relative box-border min-h-[40px] px-4 py-2","items-center gap-[10px]","select-none cursor-pointer","bg-[var(--sinch-comp-select-menu-color-default-background-initial,transparent)]","text-[var(--sinch-comp-select-menu-color-default-option-initial,var(--sinch-sys-color-text-default))]"],{variants:{isSelected:{true:"bg-[var(--sinch-comp-select-menu-color-default-background-selected,var(--sinch-sys-color-surface-secondary-default))]",false:""},isDisabled:{true:["cursor-default pointer-events-none","bg-[var(--sinch-comp-select-menu-color-disabled-background-initial,transparent)]","text-[var(--sinch-comp-select-menu-color-disabled-option-initial,var(--sinch-sys-color-text-disabled))]"],false:"hover:bg-[var(--sinch-comp-select-menu-color-default-background-hover,var(--sinch-sys-color-surface-secondary-hover))]"}},defaultVariants:{isSelected:!1,isDisabled:!1}}),p=a.forwardRef(({className:s,value:t,text:u="",disabled:r=!1,"aria-label":c,icon:l,customContent:o,children:d,...M},v)=>{const{registerOption:j,unregisterOption:D,onChange:w,setSelectedOptionValue:C,selectedOptionValue:N,isValueSelected:T}=gt(),O=a.useRef(null),B=T(t),E=N===t,A=a.useCallback(m=>{O.current=m,m!==null?j(t,m,u,r):D(t),v!==null&&(typeof v=="function"?v(m):v.current=m)},[r,v,j,u,D,t]);a.useEffect(()=>{O.current!==null&&j(t,O.current,u,r)},[r,j,u,t]);const W=a.useCallback(()=>{r||w(t)},[r,w,t]),g=a.useCallback(()=>{r||C(t)},[r,C,t]);return e.jsxs("div",{ref:A,role:"option","aria-selected":B,"aria-disabled":r,"aria-label":c??u,className:x(jt({isSelected:E,isDisabled:r}),s),onClick:W,onMouseEnter:g,...M,children:[l!==void 0&&e.jsx("div",{className:x("-ml-[6px]",r?"[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]":"[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"),children:l}),o!==void 0?e.jsx("div",{className:"flex-1 min-w-0 pointer-events-none",children:o}):e.jsxs("span",{className:x("flex-1 min-w-0","font-[var(--sinch-comp-select-menu-font-option)]","truncate"),children:[u,d]}),B&&e.jsx("div",{className:x("-mr-[6px]",r?"[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-disabled-icon-initial)]":"[--sinch-global-color-icon:var(--sinch-comp-select-menu-color-default-icon-initial)]"),children:e.jsx(y,{name:"fa-check",iconsVersion:"2"})})]})});p.displayName="SelectMenuOption";const wt=se(["relative inline-flex items-center gap-2 box-border w-full","outline-none cursor-pointer align-middle","bg-[var(--sinch-comp-select-button-color-default-background-initial,var(--sinch-sys-color-surface-primary-default))]"],{variants:{size:{s:["h-[var(--sinch-comp-select-button-size-container-s,32px)]","rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]","px-3 pr-1"],m:["h-[var(--sinch-comp-select-button-size-container-m,40px)]","rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]","px-3 pr-2"],l:["h-[var(--sinch-comp-select-button-size-container-l,48px)]","rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]","px-3"]},isDisabled:{true:"cursor-default",false:""}},defaultVariants:{size:"m",isDisabled:!1}}),Ct=se(["absolute inset-0 pointer-events-none","border border-[var(--sinch-comp-select-button-color-default-border-initial,var(--sinch-sys-color-border-default))]"],{variants:{size:{s:"rounded-[var(--sinch-comp-select-button-shape-radius-size-s,var(--sinch-sys-shape-radius-s))]",m:"rounded-[var(--sinch-comp-select-button-shape-radius-size-m,var(--sinch-sys-shape-radius-m))]",l:"rounded-[var(--sinch-comp-select-button-shape-radius-size-l,var(--sinch-sys-shape-radius-l))]"},isFocused:{true:"border-[var(--sinch-comp-select-button-color-default-border-focus,var(--sinch-sys-color-focus))] border-2",false:""},isInvalid:{true:"border-[var(--sinch-comp-select-button-color-invalid-border-initial,var(--sinch-sys-color-feedback-danger-default))]",false:""},isDisabled:{true:"border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]",false:""}},compoundVariants:[{isDisabled:!0,className:"border-[var(--sinch-comp-select-button-color-disabled-border-initial,var(--sinch-sys-color-border-disabled))]"}],defaultVariants:{size:"m",isFocused:!1,isInvalid:!1,isDisabled:!1}}),f=a.forwardRef(({className:s,text:t,placeholder:u,size:r="m",invalid:c=!1,disabled:l=!1,"aria-label":o,onClick:d,onFocus:M,onBlur:v,icon:j,leftAddon:D,...w},C)=>{const[N,T]=a.useState(!1),O=a.useCallback(()=>{l||d==null||d()},[l,d]),B=a.useCallback(m=>{(m.code==="Enter"||m.code==="Space")&&(m.preventDefault(),O())},[O]),E=a.useCallback(()=>{T(!0),M==null||M()},[M]),A=a.useCallback(()=>{T(!1),v==null||v()},[v]),W=t!==void 0&&t!=="",g=()=>{switch(r){case"s":return"var(--sinch-comp-select-button-size-icon-s,16px)";case"l":return"var(--sinch-comp-select-button-size-icon-l,24px)";default:return"var(--sinch-comp-select-button-size-icon-m,20px)"}};return e.jsxs("div",{ref:C,role:"button",tabIndex:l?-1:0,"aria-label":o,"aria-invalid":c||void 0,"aria-disabled":l||void 0,className:x(wt({size:r,isDisabled:l}),s),onClick:O,onKeyDown:B,onFocus:E,onBlur:A,style:{"--sinch-global-size-icon":g()},...w,children:[e.jsx("div",{className:x(Ct({size:r,isFocused:N,isInvalid:c&&!N,isDisabled:l}))}),D!==void 0&&e.jsx("div",{className:"flex flex-row items-center self-stretch gap-1 -ml-1",children:D}),j!==void 0&&e.jsx("div",{className:x(l?"[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]":"[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"),children:j}),W?e.jsx("span",{className:x("flex-1 min-w-0 truncate","font-[var(--sinch-comp-select-button-font-input)]",l?"text-[var(--sinch-comp-select-button-color-disabled-text-initial,var(--sinch-sys-color-text-disabled))]":"text-[var(--sinch-comp-select-button-color-default-text-initial,var(--sinch-sys-color-text-default))]"),children:t}):e.jsx("span",{className:x("flex-1 min-w-0 truncate","font-[var(--sinch-comp-select-button-font-placeholder)]",l?"text-[var(--sinch-comp-select-button-color-disabled-placeholder-initial,var(--sinch-sys-color-text-disabled))]":"text-[var(--sinch-comp-select-button-color-default-placeholder-initial,var(--sinch-sys-color-text-muted))]"),children:u}),e.jsx("div",{className:x("-ml-1",l?"[--sinch-global-color-icon:var(--sinch-comp-select-button-color-disabled-icon-initial,var(--sinch-sys-color-text-disabled))]":"[--sinch-global-color-icon:var(--sinch-comp-select-button-color-default-icon-initial,var(--sinch-sys-color-text-muted))]"),children:e.jsx(y,{name:"fa-chevron-down",iconsVersion:"2"})})]})});f.displayName="SelectButton";const R=Object.assign(h,{Option:p,Button:f});h.__docgenInfo={description:"",methods:[],displayName:"SelectMenu",props:{name:{required:!1,tsType:{name:"string"},description:"Name for form submissions"},value:{required:!1,tsType:{name:"string"},description:"Selected value (CSV for multiple)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled usage",defaultValue:{value:"''",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of visible rows before scrolling"},multiple:{required:!1,tsType:{name:"boolean"},description:`Allow multiple selection
@default false`,defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:`Show search bar (null = auto based on option count)
@default null`,defaultValue:{value:"null",computed:!1}},searchValue:{required:!1,tsType:{name:"string"},description:"Current search value"},defaultSearchValue:{required:!1,tsType:{name:"string"},description:"Default search value for uncontrolled usage",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Search placeholder text
@default 'Search'`,defaultValue:{value:"'Search'",computed:!1}},searchAutocomplete:{required:!1,tsType:{name:"string"},description:"Autocomplete attribute for search input"},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the selected value(s)"},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(searchValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"searchValue"}],return:{name:"void"}}},description:"Search change handler"}},composes:["Omit"]};p.__docgenInfo={description:"",methods:[],displayName:"SelectMenuOption",props:{value:{required:!0,tsType:{name:"string"},description:"Option value"},text:{required:!1,tsType:{name:"string"},description:"Display text",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to display on the left"},customContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content to replace text"}},composes:["Omit"]};f.__docgenInfo={description:"",methods:[],displayName:"SelectButton",props:{text:{required:!1,tsType:{name:"string"},description:"Display text (selected value label)"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text when no value is selected"},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},description:`Size variant
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Blur handler"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to display on the left"},leftAddon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display on the left (before the text)"}},composes:["Omit","VariantProps"]};const Bt={title:"Components/SelectMenu",component:h,tags:["autodocs"],args:{onChange:ht()},argTypes:{multiple:{control:"boolean"},searchable:{control:"select",options:[null,!0,!1]},rows:{control:"number"}}},k=[{value:"apple",text:"Apple"},{value:"banana",text:"Banana"},{value:"cherry",text:"Cherry"},{value:"date",text:"Date"},{value:"elderberry",text:"Elderberry"}],H={args:{"aria-label":"Select a fruit"},render:s=>e.jsx(h,{...s,children:k.map(t=>e.jsx(p,{value:t.value,text:t.text},t.value))})},K={args:{"aria-label":"Select a fruit",value:"cherry"},render:s=>e.jsx(h,{...s,children:k.map(t=>e.jsx(p,{value:t.value,text:t.text},t.value))})},G={args:{"aria-label":"Select fruits",multiple:!0,value:"apple,cherry"},render:s=>e.jsx(h,{...s,children:k.map(t=>e.jsx(p,{value:t.value,text:t.text},t.value))})},P={args:{"aria-label":"Select a fruit",searchable:!0},render:s=>e.jsx(h,{...s,children:k.map(t=>e.jsx(p,{value:t.value,text:t.text},t.value))})},J={args:{"aria-label":"Select a fruit",rows:3},render:s=>e.jsx(h,{...s,children:[...k,{value:"fig",text:"Fig"},{value:"grape",text:"Grape"},{value:"honeydew",text:"Honeydew"}].map(t=>e.jsx(p,{value:t.value,text:t.text},t.value))})},$={args:{"aria-label":"Select a fruit"},render:s=>e.jsxs(h,{...s,children:[e.jsx(p,{value:"apple",text:"Apple"}),e.jsx(p,{value:"banana",text:"Banana",disabled:!0}),e.jsx(p,{value:"cherry",text:"Cherry"}),e.jsx(p,{value:"date",text:"Date",disabled:!0}),e.jsx(p,{value:"elderberry",text:"Elderberry"})]})},Q={args:{"aria-label":"Select a fruit"},render:s=>e.jsxs(h,{...s,children:[e.jsx(p,{value:"apple",text:"Apple",icon:e.jsx(y,{name:"fa-apple-whole",iconsVersion:"2"})}),e.jsx(p,{value:"lemon",text:"Lemon",icon:e.jsx(y,{name:"fa-lemon",iconsVersion:"2"})}),e.jsx(p,{value:"carrot",text:"Carrot",icon:e.jsx(y,{name:"fa-carrot",iconsVersion:"2"})})]})},X={args:{"aria-label":"Select a fruit"},render:function(t){const[u,r]=a.useState("banana");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["Selected: ",u||"none"]}),e.jsx(h,{...t,value:u,onChange:r,children:k.map(c=>e.jsx(p,{value:c.value,text:c.text},c.value))}),e.jsx("button",{type:"button",onClick:()=>r(""),className:"px-4 py-2 bg-surface-secondary rounded-md",children:"Clear selection"})]})}},Y={render:()=>e.jsx(f,{"aria-label":"Select option",placeholder:"Select an option..."})},Z={render:()=>e.jsx(f,{"aria-label":"Select option",text:"Apple",placeholder:"Select an option..."})},ee={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(f,{size:"s","aria-label":"Small",text:"Small"}),e.jsx(f,{size:"m","aria-label":"Medium",text:"Medium"}),e.jsx(f,{size:"l","aria-label":"Large",text:"Large"})]})},te={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(f,{"aria-label":"Default",placeholder:"Default"}),e.jsx(f,{"aria-label":"Invalid",placeholder:"Invalid",invalid:!0}),e.jsx(f,{"aria-label":"Disabled",placeholder:"Disabled",disabled:!0}),e.jsx(f,{"aria-label":"Disabled with text",text:"Selected value",disabled:!0})]})},ae={render:()=>e.jsx(f,{"aria-label":"Select fruit",text:"Apple",icon:e.jsx(y,{name:"fa-apple-whole",iconsVersion:"2"})})},ne={render:function(){const[t,u]=a.useState(""),[r,c]=a.useState(!1),l=k.find(o=>o.value===t);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["Selected: ",t||"none"]}),e.jsx(R.Button,{"aria-label":"Select a fruit",text:l==null?void 0:l.text,placeholder:"Select a fruit...",onClick:()=>c(!r)}),r&&e.jsx("div",{className:"border border-border rounded-md shadow-lg bg-pure",children:e.jsx(R,{"aria-label":"Select a fruit",value:t,onChange:o=>{u(o),c(!1)},children:k.map(o=>e.jsx(R.Option,{value:o.value,text:o.text},o.value))})})]})}},re={render:function(){const[t,u]=a.useState(""),[r,c]=a.useState(!1),l=[{value:"us",text:"United States",icon:"fa-flag-usa"},{value:"uk",text:"United Kingdom",icon:"fa-flag"},{value:"ca",text:"Canada",icon:"fa-leaf"},{value:"au",text:"Australia",icon:"fa-globe"},{value:"de",text:"Germany",icon:"fa-flag"},{value:"fr",text:"France",icon:"fa-flag"},{value:"jp",text:"Japan",icon:"fa-flag"},{value:"br",text:"Brazil",icon:"fa-flag"}],o=l.find(d=>d.value===t);return e.jsxs("div",{className:"relative w-64",children:[e.jsx(R.Button,{"aria-label":"Select country",text:o==null?void 0:o.text,placeholder:"Select country...",onClick:()=>c(!r),icon:o!==void 0?e.jsx(y,{name:o.icon,iconsVersion:"2"}):void 0}),r&&e.jsx("div",{className:"absolute z-10 top-full left-0 right-0 mt-1 border border-border rounded-md shadow-lg bg-pure",children:e.jsx(R,{"aria-label":"Select country",value:t,searchable:!0,rows:5,onChange:d=>{u(d),c(!1)},children:l.map(d=>e.jsx(R.Option,{value:d.value,text:d.text,icon:e.jsx(y,{name:d.icon,iconsVersion:"2"})},d.value))})})]})}};var be,ge,Se;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit'
  },
  render: args => <SelectMenu {...args}>
      {fruitOptions.map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
    </SelectMenu>
}`,...(Se=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var ye,je,we;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit',
    value: 'cherry'
  },
  render: args => <SelectMenu {...args}>
      {fruitOptions.map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
    </SelectMenu>
}`,...(we=(je=K.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var Ce,Oe,Ve;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select fruits',
    multiple: true,
    value: 'apple,cherry'
  },
  render: args => <SelectMenu {...args}>
      {fruitOptions.map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
    </SelectMenu>
}`,...(Ve=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Me,Ne,Ie;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit',
    searchable: true
  },
  render: args => <SelectMenu {...args}>
      {fruitOptions.map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
    </SelectMenu>
}`,...(Ie=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.source}}};var ke,De,Te;J.parameters={...J.parameters,docs:{...(ke=J.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit',
    rows: 3
  },
  render: args => <SelectMenu {...args}>
      {[...fruitOptions, {
      value: 'fig',
      text: 'Fig'
    }, {
      value: 'grape',
      text: 'Grape'
    }, {
      value: 'honeydew',
      text: 'Honeydew'
    }].map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
    </SelectMenu>
}`,...(Te=(De=J.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Be,ze,qe;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit'
  },
  render: args => <SelectMenu {...args}>
      <SelectMenuOption value="apple" text="Apple" />
      <SelectMenuOption value="banana" text="Banana" disabled />
      <SelectMenuOption value="cherry" text="Cherry" />
      <SelectMenuOption value="date" text="Date" disabled />
      <SelectMenuOption value="elderberry" text="Elderberry" />
    </SelectMenu>
}`,...(qe=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:qe.source}}};var Re,Ee,Ae;Q.parameters={...Q.parameters,docs:{...(Re=Q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit'
  },
  render: args => <SelectMenu {...args}>
      <SelectMenuOption value="apple" text="Apple" icon={<Icon name="fa-apple-whole" iconsVersion="2" />} />
      <SelectMenuOption value="lemon" text="Lemon" icon={<Icon name="fa-lemon" iconsVersion="2" />} />
      <SelectMenuOption value="carrot" text="Carrot" icon={<Icon name="fa-carrot" iconsVersion="2" />} />
    </SelectMenu>
}`,...(Ae=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var We,Fe,_e;X.parameters={...X.parameters,docs:{...(We=X.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select a fruit'
  },
  render: function ControlledExample(args) {
    const [value, setValue] = useState('banana');
    return <div className="flex flex-col gap-4">
        <p>Selected: {value || 'none'}</p>
        <SelectMenu {...args} value={value} onChange={setValue}>
          {fruitOptions.map(option => <SelectMenuOption key={option.value} value={option.value} text={option.text} />)}
        </SelectMenu>
        <button type="button" onClick={() => setValue('')} className="px-4 py-2 bg-surface-secondary rounded-md">
          Clear selection
        </button>
      </div>;
  }
}`,...(_e=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};var Le,Ue,He;Y.parameters={...Y.parameters,docs:{...(Le=Y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <SelectButton aria-label="Select option" placeholder="Select an option..." />
}`,...(He=(Ue=Y.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Ke,Ge,Pe;Z.parameters={...Z.parameters,docs:{...(Ke=Z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <SelectButton aria-label="Select option" text="Apple" placeholder="Select an option..." />
}`,...(Pe=(Ge=Z.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var Je,$e,Qe;ee.parameters={...ee.parameters,docs:{...(Je=ee.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <SelectButton size="s" aria-label="Small" text="Small" />
      <SelectButton size="m" aria-label="Medium" text="Medium" />
      <SelectButton size="l" aria-label="Large" text="Large" />
    </div>
}`,...(Qe=($e=ee.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <SelectButton aria-label="Default" placeholder="Default" />
      <SelectButton aria-label="Invalid" placeholder="Invalid" invalid />
      <SelectButton aria-label="Disabled" placeholder="Disabled" disabled />
      <SelectButton aria-label="Disabled with text" text="Selected value" disabled />
    </div>
}`,...(Ze=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => <SelectButton aria-label="Select fruit" text="Apple" icon={<Icon name="fa-apple-whole" iconsVersion="2" />} />
}`,...(at=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,st;ne.parameters={...ne.parameters,docs:{...(nt=ne.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: function CompoundExample() {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = fruitOptions.find(opt => opt.value === value);
    return <div className="flex flex-col gap-4">
        <p>Selected: {value || 'none'}</p>

        {/* Button to trigger dropdown */}
        <Select.Button aria-label="Select a fruit" text={selectedOption?.text} placeholder="Select a fruit..." onClick={() => setIsOpen(!isOpen)} />

        {/* Dropdown menu (shown when open) */}
        {isOpen && <div className="border border-border rounded-md shadow-lg bg-pure">
            <Select aria-label="Select a fruit" value={value} onChange={newValue => {
          setValue(newValue);
          setIsOpen(false);
        }}>
              {fruitOptions.map(option => <Select.Option key={option.value} value={option.value} text={option.text} />)}
            </Select>
          </div>}
      </div>;
  }
}`,...(st=(rt=ne.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var lt,ot,it;re.parameters={...re.parameters,docs:{...(lt=re.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: function FullExampleComponent() {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const countries = [{
      value: 'us',
      text: 'United States',
      icon: 'fa-flag-usa'
    }, {
      value: 'uk',
      text: 'United Kingdom',
      icon: 'fa-flag'
    }, {
      value: 'ca',
      text: 'Canada',
      icon: 'fa-leaf'
    }, {
      value: 'au',
      text: 'Australia',
      icon: 'fa-globe'
    }, {
      value: 'de',
      text: 'Germany',
      icon: 'fa-flag'
    }, {
      value: 'fr',
      text: 'France',
      icon: 'fa-flag'
    }, {
      value: 'jp',
      text: 'Japan',
      icon: 'fa-flag'
    }, {
      value: 'br',
      text: 'Brazil',
      icon: 'fa-flag'
    }];
    const selectedCountry = countries.find(c => c.value === value);
    return <div className="relative w-64">
        <Select.Button aria-label="Select country" text={selectedCountry?.text} placeholder="Select country..." onClick={() => setIsOpen(!isOpen)} icon={selectedCountry !== undefined ? <Icon name={selectedCountry.icon} iconsVersion="2" /> : undefined} />

        {isOpen && <div className="absolute z-10 top-full left-0 right-0 mt-1 border border-border rounded-md shadow-lg bg-pure">
            <Select aria-label="Select country" value={value} searchable rows={5} onChange={newValue => {
          setValue(newValue);
          setIsOpen(false);
        }}>
              {countries.map(country => <Select.Option key={country.value} value={country.value} text={country.text} icon={<Icon name={country.icon} iconsVersion="2" />} />)}
            </Select>
          </div>}
      </div>;
  }
}`,...(it=(ot=re.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};const zt=["Default","WithSelectedValue","MultipleSelection","WithSearch","WithRows","WithDisabledOptions","WithIcons","Controlled","ButtonDefault","ButtonWithText","ButtonSizes","ButtonStates","ButtonWithIcon","CompoundUsage","FullExample"];export{Y as ButtonDefault,ee as ButtonSizes,te as ButtonStates,ae as ButtonWithIcon,Z as ButtonWithText,ne as CompoundUsage,X as Controlled,H as Default,re as FullExample,G as MultipleSelection,$ as WithDisabledOptions,Q as WithIcons,J as WithRows,P as WithSearch,K as WithSelectedValue,zt as __namedExportsOrder,Bt as default};
