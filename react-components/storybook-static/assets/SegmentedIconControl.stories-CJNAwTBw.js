import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as ze}from"./index-CsAwyYjM.js";import{r as o}from"./index-pP6CS22B.js";import{c as _}from"./index-EXTQMK5R.js";import{c as q}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ue=o.createContext(null),_e=()=>{const a=o.useContext(Ue);if(a===null)throw new Error("SegmentedIconControlOption must be used within a SegmentedIconControl component");return a},z=a=>a===""?[]:a.split(",").filter(Boolean),Pe=(a,n,i)=>{const s=z(a);if(i)s.includes(n)||s.push(n);else{const g=s.indexOf(n);g!==-1&&s.splice(g,1)}return s.join(",")},He=a=>z(a)[0]??"",Ke=_("flex flex-row w-full box-border relative z-0 outline-none",{variants:{},defaultVariants:{}}),r=o.forwardRef(({className:a,value:n,defaultValue:i="",multiple:s=!1,"aria-label":g,onChange:p,children:S,...j},P)=>{const[f,c]=o.useState(i),y=o.useRef(new Map),I=n!==void 0,b=I?n:f,v=s?z(b):[He(b)],H=o.useCallback(l=>{let d;if(s){const h=z(b).includes(l);d=Pe(b,l,!h)}else d=l;I||c(d),p==null||p(d)},[b,I,s,p]),K=o.useCallback((l,d)=>{y.current.set(l,d)},[]),J=o.useCallback(l=>{y.current.delete(l)},[]),C=o.useCallback(()=>Array.from(y.current.entries()).filter(([,l])=>l.getAttribute("aria-disabled")!=="true").map(([l,d])=>({value:l,element:d})),[]),Q=o.useCallback(()=>{const l=C();if(l.length===0)return;const d=document.activeElement,h=l.findIndex(Z=>Z.element===d),Y=h<0?0:(h+1)%l.length;l[Y].element.focus()},[C]),X=o.useCallback(()=>{const l=C();if(l.length===0)return;const d=document.activeElement,h=l.findIndex(Z=>Z.element===d),Y=h<0?l.length-1:(h-1+l.length)%l.length;l[Y].element.focus()},[C]);return e.jsx(Ue.Provider,{value:{value:v,multiple:s,onChange:H,registerOption:K,unregisterOption:J,focusNextOption:Q,focusPrevOption:X},children:e.jsx("div",{ref:P,role:"tablist","aria-label":g,"aria-orientation":"horizontal","data-value":b,"data-multiple":s||void 0,className:q(Ke(),a),...j,children:S})})});r.displayName="SegmentedIconControl";const Je=_(["relative flex items-center justify-center","w-14 h-8 px-4 box-border","outline-none cursor-pointer select-none","transition-colors duration-100"],{variants:{isChecked:{true:"bg-[var(--sinch-comp-segmented-control-color-checked-background-initial)]",false:"bg-[var(--sinch-comp-segmented-control-color-default-background-initial)]"},isDisabled:{true:["bg-[var(--sinch-comp-segmented-control-color-disabled-background-initial)]","cursor-default"],false:""},isFirst:{true:"rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",false:""},isLast:{true:"rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",false:""}},compoundVariants:[{isChecked:!1,isDisabled:!1,className:"hover:bg-[var(--sinch-comp-segmented-control-color-default-background-hover)]"}],defaultVariants:{isChecked:!1,isDisabled:!1,isFirst:!1,isLast:!1}}),Qe=_(["absolute inset-0 pointer-events-none box-border","border border-solid","transition-all duration-100"],{variants:{isChecked:{true:["border-2","border-[var(--sinch-comp-segmented-control-color-checked-border-initial)]"],false:"border-[var(--sinch-comp-segmented-control-color-default-border-initial)]"},isDisabled:{true:"border-[var(--sinch-comp-segmented-control-color-disabled-border-initial)]",false:""},isFirst:{true:"rounded-l-[var(--sinch-comp-segmented-control-shape-radius)]",false:"border-l-0"},isLast:{true:"rounded-r-[var(--sinch-comp-segmented-control-shape-radius)]",false:""}},compoundVariants:[{isChecked:!0,isFirst:!1,className:"-left-px"}],defaultVariants:{isChecked:!1,isDisabled:!1,isFirst:!1,isLast:!1}}),Xe=_(["absolute pointer-events-none box-border","border-2 border-[var(--sinch-comp-segmented-control-color-default-outline-focus)]","transition-opacity duration-100 opacity-0","z-[1]","inset-[-3px]"],{variants:{isFocused:{true:"opacity-100",false:""},isFirst:{true:"rounded-l-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]",false:"-left-[4px]"},isLast:{true:"rounded-r-[calc(var(--sinch-comp-segmented-control-shape-radius)+3px)]",false:""}},defaultVariants:{isFocused:!1,isFirst:!1,isLast:!1}}),t=o.forwardRef(({className:a,value:n,disabled:i=!1,"aria-label":s,icon:g,isFirst:p=!1,isLast:S=!1,onKeyDown:j,...P},f)=>{const c=_e(),[y,I]=o.useState(!1),b=o.useRef(null),v=c.value.includes(n),H=o.useCallback(l=>{b.current=l,l!==null?c.registerOption(n,l):c.unregisterOption(n),f!==null&&(typeof f=="function"?f(l):f.current=l)},[c,f,n]),K=o.useCallback(()=>{i||c.onChange(n)},[c,i,n]),J=o.useCallback(l=>{switch(l.code){case"ArrowUp":case"ArrowLeft":l.preventDefault(),c.focusPrevOption();break;case"ArrowDown":case"ArrowRight":l.preventDefault(),c.focusNextOption();break;case"Space":case"Enter":l.preventDefault(),i||c.onChange(n);break}j==null||j(l)},[c,i,j,n]),C=o.useCallback(()=>{I(!0)},[]),Q=o.useCallback(()=>{I(!1)},[]),X=i?"var(--sinch-comp-segmented-control-color-disabled-icon-initial)":v?"var(--sinch-comp-segmented-control-color-checked-icon-initial)":"var(--sinch-comp-segmented-control-color-default-icon-initial)";return e.jsxs("div",{ref:H,role:"tab","aria-selected":v,"aria-disabled":i,"aria-label":s,tabIndex:i?-1:0,"data-checked":v||void 0,className:q(Je({isChecked:v,isDisabled:i,isFirst:p,isLast:S}),a),onClick:K,onKeyDown:J,onFocus:C,onBlur:Q,...P,children:[e.jsx("span",{className:"block pointer-events-none",style:{color:X,fontSize:"var(--sinch-comp-segmented-control-size-icon, 24px)"},children:g}),e.jsx("div",{className:q(Qe({isChecked:v,isDisabled:i,isFirst:p,isLast:S}))}),e.jsx("div",{className:q(Xe({isFocused:y,isFirst:p,isLast:S}))})]})});t.displayName="SegmentedIconControlOption";const L=Object.assign(r,{Option:t});r.__docgenInfo={description:"",methods:[],displayName:"SegmentedIconControl",props:{value:{required:!1,tsType:{name:"string"},description:"Controlled selected value (comma-separated for multiple selection)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value for uncontrolled usage",defaultValue:{value:"''",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:`Enable multiple selection mode
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label for the segmented icon control"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the selected value(s) as comma-separated string"}},composes:["Omit","VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"SegmentedIconControlOption",props:{value:{required:!0,tsType:{name:"string"},description:"Value of this option"},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label (required for icon-only options)"},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element to display"},isFirst:{required:!1,tsType:{name:"boolean"},description:"Whether this is the first option (for border radius)",defaultValue:{value:"false",computed:!1}},isLast:{required:!1,tsType:{name:"boolean"},description:"Whether this is the last option (for border radius)",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const u=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),m=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),x=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),e.jsx("line",{x1:"3",y1:"15",x2:"21",y2:"15"}),e.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),w=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"}),e.jsx("path",{d:"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"})]}),N=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"19",y1:"4",x2:"10",y2:"4"}),e.jsx("line",{x1:"14",y1:"20",x2:"5",y2:"20"}),e.jsx("line",{x1:"15",y1:"4",x2:"9",y2:"20"})]}),O=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}),e.jsx("line",{x1:"4",y1:"21",x2:"20",y2:"21"})]}),Ye=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),e.jsx("path",{d:"M17.5 6.5a5 5 0 0 0-7-1 5 5 0 0 0 0 9"}),e.jsx("path",{d:"M6.5 17.5a5 5 0 0 0 7 1 5 5 0 0 0 0-9"})]}),We=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"15",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"18",y2:"18"})]}),Me=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12"}),e.jsx("line",{x1:"5",y1:"18",x2:"19",y2:"18"})]}),Re=()=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"9",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"6",y1:"18",x2:"21",y2:"18"})]}),nt={title:"Components/SegmentedIconControl",component:r,tags:["autodocs"],args:{onChange:ze()},argTypes:{value:{control:"text",description:"Controlled selected value (comma-separated for multiple)"},defaultValue:{control:"text",description:"Default selected value for uncontrolled usage"},multiple:{control:"boolean",description:"Enable multiple selection mode"},"aria-label":{control:"text",description:"Accessible label for the segmented icon control"}}},k={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view",icon:e.jsx(m,{})}),e.jsx(t,{value:"table","aria-label":"Table view",icon:e.jsx(x,{}),isLast:!0})]})},V={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view",icon:e.jsx(m,{}),isLast:!0})]})},T={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view (disabled)",icon:e.jsx(m,{}),disabled:!0}),e.jsx(t,{value:"table","aria-label":"Table view",icon:e.jsx(x,{}),isLast:!0})]})},F={args:{"aria-label":"Select view",defaultValue:"grid"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),disabled:!0,isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view (selected)",icon:e.jsx(m,{}),disabled:!0}),e.jsx(t,{value:"table","aria-label":"Table view",icon:e.jsx(x,{}),disabled:!0,isLast:!0})]})},A={args:{"aria-label":"Select formatting options",multiple:!0,defaultValue:"bold"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"bold","aria-label":"Bold",icon:e.jsx(w,{}),isFirst:!0}),e.jsx(t,{value:"italic","aria-label":"Italic",icon:e.jsx(N,{})}),e.jsx(t,{value:"underline","aria-label":"Underline",icon:e.jsx(O,{})}),e.jsx(t,{value:"strikethrough","aria-label":"Strikethrough",icon:e.jsx(Ye,{}),isLast:!0})]})},G={args:{"aria-label":"Select formatting options",multiple:!0,defaultValue:"bold,italic"},render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{value:"bold","aria-label":"Bold",icon:e.jsx(w,{}),isFirst:!0}),e.jsx(t,{value:"italic","aria-label":"Italic",icon:e.jsx(N,{})}),e.jsx(t,{value:"underline","aria-label":"Underline",icon:e.jsx(O,{}),isLast:!0})]})},B={args:{"aria-label":"Select view"},render:function(){const[n,i]=o.useState("list");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{"aria-label":"Select view",value:n,onChange:i,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view",icon:e.jsx(m,{})}),e.jsx(t,{value:"table","aria-label":"Table view",icon:e.jsx(x,{}),isLast:!0})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("list"),children:"Select List"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("grid"),children:"Select Grid"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("table"),children:"Select Table"})]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",n]})]})}},D={args:{"aria-label":"Select formatting",multiple:!0},render:function(){const[n,i]=o.useState("bold");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(r,{"aria-label":"Select formatting",multiple:!0,value:n,onChange:i,children:[e.jsx(t,{value:"bold","aria-label":"Bold",icon:e.jsx(w,{}),isFirst:!0}),e.jsx(t,{value:"italic","aria-label":"Italic",icon:e.jsx(N,{})}),e.jsx(t,{value:"underline","aria-label":"Underline",icon:e.jsx(O,{}),isLast:!0})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i("bold,italic"),children:"Set Bold + Italic"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>i(""),children:"Clear All"})]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",n||"(none)"]})]})}},E={args:{"aria-label":"Select alignment",defaultValue:"left"},render:a=>e.jsxs(L,{...a,children:[e.jsx(L.Option,{value:"left","aria-label":"Align left",icon:e.jsx(We,{}),isFirst:!0}),e.jsx(L.Option,{value:"center","aria-label":"Align center",icon:e.jsx(Me,{})}),e.jsx(L.Option,{value:"right","aria-label":"Align right",icon:e.jsx(Re,{}),isLast:!0})]})},U={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Use Tab to focus, Arrow keys to navigate, Space/Enter to select"}),e.jsxs(r,{"aria-label":"Keyboard navigation demo",defaultValue:"list",children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view",icon:e.jsx(m,{})}),e.jsx(t,{value:"table","aria-label":"Table view",icon:e.jsx(x,{}),isLast:!0})]})]})},W={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default (Single Selection)"}),e.jsxs(r,{"aria-label":"Default options",defaultValue:"list",children:[e.jsx(t,{value:"list","aria-label":"List (selected)",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid",icon:e.jsx(m,{})}),e.jsx(t,{value:"table","aria-label":"Table",icon:e.jsx(x,{}),isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Multiple Selection"}),e.jsxs(r,{"aria-label":"Multiple selection",multiple:!0,defaultValue:"bold,italic",children:[e.jsx(t,{value:"bold","aria-label":"Bold",icon:e.jsx(w,{}),isFirst:!0}),e.jsx(t,{value:"italic","aria-label":"Italic",icon:e.jsx(N,{})}),e.jsx(t,{value:"underline","aria-label":"Underline",icon:e.jsx(O,{}),isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"With Disabled"}),e.jsxs(r,{"aria-label":"With disabled",defaultValue:"list",children:[e.jsx(t,{value:"list","aria-label":"List",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid (disabled)",icon:e.jsx(m,{}),disabled:!0}),e.jsx(t,{value:"table","aria-label":"Table",icon:e.jsx(x,{}),isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"All Disabled"}),e.jsxs(r,{"aria-label":"All disabled",defaultValue:"grid",children:[e.jsx(t,{value:"list","aria-label":"List",icon:e.jsx(u,{}),disabled:!0,isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid (selected)",icon:e.jsx(m,{}),disabled:!0}),e.jsx(t,{value:"table","aria-label":"Table",icon:e.jsx(x,{}),disabled:!0,isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"No Selection"}),e.jsxs(r,{"aria-label":"No selection",children:[e.jsx(t,{value:"list","aria-label":"List",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid",icon:e.jsx(m,{})}),e.jsx(t,{value:"table","aria-label":"Table",icon:e.jsx(x,{}),isLast:!0})]})]})]})},M={render:function(){const[n,i]=o.useState("list");return e.jsxs("div",{className:"flex flex-col gap-4 p-4 border border-border rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-semibold text-foreground",children:"Files"}),e.jsxs(r,{"aria-label":"Select view type",value:n,onChange:i,children:[e.jsx(t,{value:"list","aria-label":"List view",icon:e.jsx(u,{}),isFirst:!0}),e.jsx(t,{value:"grid","aria-label":"Grid view",icon:e.jsx(m,{}),isLast:!0})]})]}),e.jsx("div",{className:"p-4 bg-surface-secondary rounded-md min-h-[100px] flex items-center justify-center",children:e.jsxs("p",{className:"text-foreground-muted",children:["Showing files in ",e.jsx("strong",{children:n})," view"]})})]})}},R={render:function(){const[n,i]=o.useState("bold"),[s,g]=o.useState("left");return e.jsxs("div",{className:"flex flex-col gap-4 p-4 border border-border rounded-md",children:[e.jsx("h2",{className:"text-lg font-semibold text-foreground",children:"Text Editor"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-xs text-foreground-muted",children:"Formatting"}),e.jsxs(r,{"aria-label":"Text formatting",multiple:!0,value:n,onChange:i,children:[e.jsx(t,{value:"bold","aria-label":"Bold",icon:e.jsx(w,{}),isFirst:!0}),e.jsx(t,{value:"italic","aria-label":"Italic",icon:e.jsx(N,{})}),e.jsx(t,{value:"underline","aria-label":"Underline",icon:e.jsx(O,{}),isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"text-xs text-foreground-muted",children:"Alignment"}),e.jsxs(r,{"aria-label":"Text alignment",value:s,onChange:g,children:[e.jsx(t,{value:"left","aria-label":"Align left",icon:e.jsx(We,{}),isFirst:!0}),e.jsx(t,{value:"center","aria-label":"Align center",icon:e.jsx(Me,{})}),e.jsx(t,{value:"right","aria-label":"Align right",icon:e.jsx(Re,{}),isLast:!0})]})]})]}),e.jsx("div",{className:"p-4 bg-surface-secondary rounded-md min-h-[60px]",children:e.jsxs("p",{className:"text-foreground-muted text-sm",children:["Formatting: ",n||"(none)"," | Alignment: ",s]})})]})}};var $,ee,te;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
    </SegmentedIconControl>
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,ae,ne;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} isLast />
    </SegmentedIconControl>
}`,...(ne=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,oe,re;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view (disabled)" icon={<GridIcon />} disabled />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
    </SegmentedIconControl>
}`,...(re=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,ce,de;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'grid'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} disabled isFirst />
      <SegmentedIconControlOption value="grid" aria-label="Grid view (selected)" icon={<GridIcon />} disabled />
      <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} disabled isLast />
    </SegmentedIconControl>
}`,...(de=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,xe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select formatting options',
    multiple: true,
    defaultValue: 'bold'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
      <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
      <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} />
      <SegmentedIconControlOption value="strikethrough" aria-label="Strikethrough" icon={<StrikethroughIcon />} isLast />
    </SegmentedIconControl>
}`,...(xe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ge,pe,be;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select formatting options',
    multiple: true,
    defaultValue: 'bold,italic'
  },
  render: args => <SegmentedIconControl {...args}>
      <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
      <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
      <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
    </SegmentedIconControl>
}`,...(be=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,ve,he;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view'
  },
  render: function ControlledSegmentedIconControl() {
    const [value, setValue] = useState('list');
    return <div className="flex flex-col gap-4">
        <SegmentedIconControl aria-label="Select view" value={value} onChange={setValue}>
          <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('list')}>
            Select List
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('grid')}>
            Select Grid
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('table')}>
            Select Table
          </button>
        </div>
        <p className="text-sm text-foreground-muted">Current value: {value}</p>
      </div>;
  }
}`,...(he=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var je,Ie,Ce;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select formatting',
    multiple: true
  },
  render: function ControlledMultipleSegmentedIconControl() {
    const [value, setValue] = useState('bold');
    return <div className="flex flex-col gap-4">
        <SegmentedIconControl aria-label="Select formatting" multiple value={value} onChange={setValue}>
          <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
          <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
          <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
        </SegmentedIconControl>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('bold,italic')}>
            Set Bold + Italic
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('')}>
            Clear All
          </button>
        </div>
        <p className="text-sm text-foreground-muted">
          Current value: {value || '(none)'}
        </p>
      </div>;
  }
}`,...(Ce=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Se,ye,we;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select alignment',
    defaultValue: 'left'
  },
  render: args => <SegmentedIconControlGroup {...args}>
      <SegmentedIconControlGroup.Option value="left" aria-label="Align left" icon={<AlignLeftIcon />} isFirst />
      <SegmentedIconControlGroup.Option value="center" aria-label="Align center" icon={<AlignCenterIcon />} />
      <SegmentedIconControlGroup.Option value="right" aria-label="Align right" icon={<AlignRightIcon />} isLast />
    </SegmentedIconControlGroup>
}`,...(we=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Ne,Oe,Le;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space/Enter to select
      </p>
      <SegmentedIconControl aria-label="Keyboard navigation demo" defaultValue="list">
        <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
        <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} />
        <SegmentedIconControlOption value="table" aria-label="Table view" icon={<TableIcon />} isLast />
      </SegmentedIconControl>
    </div>
}`,...(Le=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var ke,Ve,Te;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default (Single Selection)</h3>
        <SegmentedIconControl aria-label="Default options" defaultValue="list">
          <SegmentedIconControlOption value="list" aria-label="List (selected)" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Multiple Selection</h3>
        <SegmentedIconControl aria-label="Multiple selection" multiple defaultValue="bold,italic">
          <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
          <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
          <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled</h3>
        <SegmentedIconControl aria-label="With disabled" defaultValue="list">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid (disabled)" icon={<GridIcon />} disabled />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <SegmentedIconControl aria-label="All disabled" defaultValue="grid">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} disabled isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid (selected)" icon={<GridIcon />} disabled />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} disabled isLast />
        </SegmentedIconControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">No Selection</h3>
        <SegmentedIconControl aria-label="No selection">
          <SegmentedIconControlOption value="list" aria-label="List" icon={<ListIcon />} isFirst />
          <SegmentedIconControlOption value="grid" aria-label="Grid" icon={<GridIcon />} />
          <SegmentedIconControlOption value="table" aria-label="Table" icon={<TableIcon />} isLast />
        </SegmentedIconControl>
      </div>
    </div>
}`,...(Te=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};var Fe,Ae,Ge;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: function ViewSwitcherExample() {
    const [view, setView] = useState('list');
    return <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-foreground">Files</h2>
          <SegmentedIconControl aria-label="Select view type" value={view} onChange={setView}>
            <SegmentedIconControlOption value="list" aria-label="List view" icon={<ListIcon />} isFirst />
            <SegmentedIconControlOption value="grid" aria-label="Grid view" icon={<GridIcon />} isLast />
          </SegmentedIconControl>
        </div>
        <div className="p-4 bg-surface-secondary rounded-md min-h-[100px] flex items-center justify-center">
          <p className="text-foreground-muted">
            Showing files in <strong>{view}</strong> view
          </p>
        </div>
      </div>;
  }
}`,...(Ge=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var Be,De,Ee;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: function TextEditorToolbarExample() {
    const [formatting, setFormatting] = useState('bold');
    const [alignment, setAlignment] = useState('left');
    return <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        <h2 className="text-lg font-semibold text-foreground">Text Editor</h2>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Formatting</span>
            <SegmentedIconControl aria-label="Text formatting" multiple value={formatting} onChange={setFormatting}>
              <SegmentedIconControlOption value="bold" aria-label="Bold" icon={<BoldIcon />} isFirst />
              <SegmentedIconControlOption value="italic" aria-label="Italic" icon={<ItalicIcon />} />
              <SegmentedIconControlOption value="underline" aria-label="Underline" icon={<UnderlineIcon />} isLast />
            </SegmentedIconControl>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-foreground-muted">Alignment</span>
            <SegmentedIconControl aria-label="Text alignment" value={alignment} onChange={setAlignment}>
              <SegmentedIconControlOption value="left" aria-label="Align left" icon={<AlignLeftIcon />} isFirst />
              <SegmentedIconControlOption value="center" aria-label="Align center" icon={<AlignCenterIcon />} />
              <SegmentedIconControlOption value="right" aria-label="Align right" icon={<AlignRightIcon />} isLast />
            </SegmentedIconControl>
          </div>
        </div>
        <div className="p-4 bg-surface-secondary rounded-md min-h-[60px]">
          <p className="text-foreground-muted text-sm">
            Formatting: {formatting || '(none)'} | Alignment: {alignment}
          </p>
        </div>
      </div>;
  }
}`,...(Ee=(De=R.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};const it=["Default","TwoOptions","WithDisabledOption","AllDisabled","MultipleSelection","MultipleWithSelections","Controlled","ControlledMultiple","UsingCompoundComponent","KeyboardNavigation","AllStates","ViewSwitcher","TextEditorToolbar"];export{F as AllDisabled,W as AllStates,B as Controlled,D as ControlledMultiple,k as Default,U as KeyboardNavigation,A as MultipleSelection,G as MultipleWithSelections,R as TextEditorToolbar,V as TwoOptions,E as UsingCompoundComponent,M as ViewSwitcher,T as WithDisabledOption,it as __namedExportsOrder,nt as default};
