import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as c}from"./index-CsAwyYjM.js";import{r as i}from"./index-pP6CS22B.js";import{c as D}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Re=40,Ee=i.createContext(null),De=()=>{const k=i.useContext(Ee);if(!k)throw new Error("ActionMenuOption must be used within an ActionMenu");return k},l=i.forwardRef(({className:k,rows:C,children:s,"aria-label":T,onKeyDown:A,onBlur:g,...m},M)=>{const[r,p]=i.useState(null),h=i.useRef(new Map),O=i.useRef(null),F=i.useRef(null);i.useImperativeHandle(M,()=>O.current);const b=i.useCallback((n,o,x)=>{h.current.set(n,{disabled:o,onClick:x})},[]),u=i.useCallback(()=>{const n=[];return h.current.forEach((o,x)=>{o.disabled||n.push(x)}),n.sort((o,x)=>o-x)},[]),d=i.useCallback(()=>{if(r!==null){const n=h.current.get(r);n&&!n.disabled&&n.onClick&&n.onClick()}},[r]),f=i.useCallback(n=>{const o=u();if(o.length===0)return null;if(r===null)return n==="down"?o[0]:o[o.length-1];const x=o.indexOf(r);return x===-1?o[0]:n==="down"?o[(x+1)%o.length]:o[(x-1+o.length)%o.length]},[r,u]),W=i.useCallback(n=>{if(A==null||A(n),!n.defaultPrevented)switch(n.code){case"ArrowDown":{n.preventDefault();const o=f("down");p(o);break}case"ArrowUp":{n.preventDefault();const o=f("up");p(o);break}case"Enter":case"Space":{r!==null&&(n.preventDefault(),d());break}}},[A,f,r,d]),q=i.useCallback(n=>{var o;g==null||g(n),(o=O.current)!=null&&o.contains(n.relatedTarget)||p(null)},[g]),P=C!=null?C*Re:void 0,a=i.Children.map(s,(n,o)=>i.isValidElement(n)?i.cloneElement(n,{index:o}):n),Se={selectedIndex:r,setSelectedIndex:p,registerOption:b,getEnabledIndices:u,triggerSelectedOption:d};return e.jsx(Ee.Provider,{value:Se,children:e.jsx("div",{ref:O,role:"listbox",tabIndex:0,"aria-label":T,className:D("block outline-none",k),onKeyDown:W,onBlur:q,...m,children:e.jsx("div",{ref:F,role:"presentation",className:"overflow-y-auto",style:{maxHeight:P},children:a})})})});l.displayName="ActionMenu";l.__docgenInfo={description:`ActionMenu is a dropdown menu component that displays a list of action options.
It supports keyboard navigation (Arrow Up/Down, Enter, Space) and accessible roles.

@example
\`\`\`tsx
<ActionMenu aria-label="Actions">
  <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
  <ActionMenuOption text="Delete" onClick={() => console.log('Delete')} />
  <ActionMenuOption text="Disabled" disabled />
</ActionMenu>
\`\`\``,methods:[],displayName:"ActionMenu",props:{rows:{required:!1,tsType:{name:"number"},description:"How many rows to show and scroll the rest"},"aria-label":{required:!0,tsType:{name:"string"},description:"Label that is used for a11y"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically ActionMenuOption components)"}},composes:["Omit"]};const t=i.forwardRef(({className:k,text:C,disabled:s=!1,"aria-label":T,icon:A,rightIcon:g,onClick:m,index:M=0,onMouseDown:r,onMouseOver:p,onKeyDown:h,...O},F)=>{const b=De(),u=i.useRef(null);i.useImperativeHandle(F,()=>u.current);const d=b.selectedIndex===M;i.useEffect(()=>{b.registerOption(M,s,m)},[b,M,s,m]),i.useEffect(()=>{d&&u.current&&u.current.scrollIntoView&&u.current.scrollIntoView({block:"nearest"})},[d]);const f=i.useCallback(()=>{s||m==null||m()},[s,m]),W=i.useCallback(a=>{r==null||r(a),!(a.defaultPrevented||s)&&f()},[r,s,f]),q=i.useCallback(a=>{p==null||p(a),!a.defaultPrevented&&d&&b.setSelectedIndex(null)},[p,d,b]),P=i.useCallback(a=>{h==null||h(a),!(a.defaultPrevented||s)&&(a.code==="Enter"||a.code==="Space")&&(a.preventDefault(),f())},[h,s,f]);return e.jsx("div",{ref:u,role:"option","aria-selected":d&&!s,"aria-disabled":s,"aria-label":T??C,tabIndex:-1,className:D("block cursor-pointer outline-none",s&&"cursor-default",k),onMouseDown:W,onMouseOver:q,onKeyDown:P,...O,children:e.jsxs("div",{className:D("box-border flex h-10 w-full items-center gap-2.5 px-4 py-2","select-none","bg-[var(--sinch-comp-action-menu-color-default-background-initial)]",d&&!s&&"bg-[var(--sinch-comp-action-menu-color-default-background-selected)]",!s&&"hover:bg-[var(--sinch-comp-action-menu-color-default-background-hover)]",s&&["pointer-events-none","bg-[var(--sinch-comp-action-menu-color-disabled-background-initial)]"]),style:{"--sinch-global-color-text":s?"var(--sinch-comp-action-menu-color-disabled-text-initial)":"var(--sinch-comp-action-menu-color-default-text-initial)","--sinch-global-color-icon":s?"var(--sinch-comp-action-menu-color-disabled-icon-initial)":"var(--sinch-comp-action-menu-color-default-icon-initial)","--sinch-global-size-icon":"var(--sinch-comp-action-menu-size-icon)"},children:[A&&e.jsx("span",{className:"-ml-1.5",children:A}),e.jsx("span",{className:D("min-w-0 flex-1 truncate","text-[color:var(--sinch-global-color-text)]","font-[var(--sinch-comp-action-menu-font-option)]"),children:C}),g&&e.jsx("span",{className:"-mr-1.5",children:g})]})})});t.displayName="ActionMenuOption";t.__docgenInfo={description:`ActionMenuOption is an individual option within an ActionMenu.
It supports disabled state, icons, and click handlers.

@example
\`\`\`tsx
<ActionMenu aria-label="Actions">
  <ActionMenuOption text="Edit" onClick={() => console.log('Edit')} />
  <ActionMenuOption
    text="Settings"
    icon={<Icon name="settings" />}
    onClick={() => console.log('Settings')}
  />
  <ActionMenuOption text="Disabled" disabled />
</ActionMenu>
\`\`\``,methods:[],displayName:"ActionMenuOption",props:{text:{required:!0,tsType:{name:"string"},description:"Display text"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Label that is used for a11y (defaults to text)"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon slot - displayed before the text"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right icon slot - displayed after the text"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click event handler"},index:{required:!1,tsType:{name:"number"},description:"Internal index (set by ActionMenu)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const Ve={title:"Components/ActionMenu",component:l,tags:["autodocs"],argTypes:{rows:{control:{type:"number",min:1,max:10},description:"How many rows to show before scrolling"}}},v={render:()=>e.jsxs(l,{"aria-label":"Actions",children:[e.jsx(t,{text:"Edit",onClick:c()}),e.jsx(t,{text:"Duplicate",onClick:c()}),e.jsx(t,{text:"Archive",onClick:c()}),e.jsx(t,{text:"Delete",onClick:c()})]})},j={render:()=>e.jsxs(l,{"aria-label":"Actions",children:[e.jsx(t,{text:"Edit",onClick:c()}),e.jsx(t,{text:"Duplicate",disabled:!0}),e.jsx(t,{text:"Archive",onClick:c()}),e.jsx(t,{text:"Delete",disabled:!0})]})},y={render:()=>e.jsxs(l,{"aria-label":"Actions",rows:3,children:[e.jsx(t,{text:"Option 1",onClick:c()}),e.jsx(t,{text:"Option 2",onClick:c()}),e.jsx(t,{text:"Option 3",onClick:c()}),e.jsx(t,{text:"Option 4",onClick:c()}),e.jsx(t,{text:"Option 5",onClick:c()}),e.jsx(t,{text:"Option 6",onClick:c()}),e.jsx(t,{text:"Option 7",onClick:c()})]})},w={render:()=>e.jsxs(l,{"aria-label":"Actions",children:[e.jsx(t,{text:"Edit",icon:e.jsx("span",{className:"text-[color:var(--sinch-global-color-icon)]",children:"✏️"}),onClick:c()}),e.jsx(t,{text:"Copy",icon:e.jsx("span",{className:"text-[color:var(--sinch-global-color-icon)]",children:"📋"}),onClick:c()}),e.jsx(t,{text:"Delete",icon:e.jsx("span",{className:"text-[color:var(--sinch-global-color-icon)]",children:"🗑️"}),onClick:c()})]})},N={render:()=>e.jsxs(l,{"aria-label":"Actions",children:[e.jsx(t,{text:"Cut",rightIcon:e.jsx("span",{className:"text-xs text-foreground-muted",children:"⌘X"}),onClick:c()}),e.jsx(t,{text:"Copy",rightIcon:e.jsx("span",{className:"text-xs text-foreground-muted",children:"⌘C"}),onClick:c()}),e.jsx(t,{text:"Paste",rightIcon:e.jsx("span",{className:"text-xs text-foreground-muted",children:"⌘V"}),onClick:c()})]})},I={render:()=>e.jsxs(l,{"aria-label":"File actions",children:[e.jsx(t,{text:"Save",icon:e.jsx("span",{children:"💾"}),rightIcon:e.jsx("span",{className:"text-xs text-foreground-muted",children:"⌘S"}),onClick:c()}),e.jsx(t,{text:"Open",icon:e.jsx("span",{children:"📂"}),rightIcon:e.jsx("span",{className:"text-xs text-foreground-muted",children:"⌘O"}),onClick:c()}),e.jsx(t,{text:"Export",icon:e.jsx("span",{children:"📤"}),onClick:c()})]})},E={render:()=>e.jsx("div",{className:"w-48",children:e.jsxs(l,{"aria-label":"Actions",children:[e.jsx(t,{text:"Short option",onClick:c()}),e.jsx(t,{text:"This is a very long option text that should be truncated",onClick:c()}),e.jsx(t,{text:"Another really long option text that won't fit",onClick:c()})]})})},S={render:()=>e.jsx(l,{"aria-label":"Empty menu"})},R={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-foreground-muted",children:"Click on the menu, then use Arrow Up/Down to navigate, Enter or Space to select."}),e.jsxs(l,{"aria-label":"Keyboard navigation demo",children:[e.jsx(t,{text:"First Option",onClick:()=>alert("First clicked!")}),e.jsx(t,{text:"Second Option",onClick:()=>alert("Second clicked!")}),e.jsx(t,{text:"Third Option (disabled)",disabled:!0}),e.jsx(t,{text:"Fourth Option",onClick:()=>alert("Fourth clicked!")}),e.jsx(t,{text:"Fifth Option",onClick:()=>alert("Fifth clicked!")})]})]})};var V,H,_,U,L;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Edit" onClick={fn()} />
      <ActionMenuOption text="Duplicate" onClick={fn()} />
      <ActionMenuOption text="Archive" onClick={fn()} />
      <ActionMenuOption text="Delete" onClick={fn()} />
    </ActionMenu>
}`,...(_=(H=v.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:"Default ActionMenu with a few options.",...(L=(U=v.parameters)==null?void 0:U.docs)==null?void 0:L.description}}};var z,X,G,J,Q;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Edit" onClick={fn()} />
      <ActionMenuOption text="Duplicate" disabled />
      <ActionMenuOption text="Archive" onClick={fn()} />
      <ActionMenuOption text="Delete" disabled />
    </ActionMenu>
}`,...(G=(X=j.parameters)==null?void 0:X.docs)==null?void 0:G.source},description:{story:"ActionMenu with some disabled options.",...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,Z,$,B,K;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Actions" rows={3}>
      <ActionMenuOption text="Option 1" onClick={fn()} />
      <ActionMenuOption text="Option 2" onClick={fn()} />
      <ActionMenuOption text="Option 3" onClick={fn()} />
      <ActionMenuOption text="Option 4" onClick={fn()} />
      <ActionMenuOption text="Option 5" onClick={fn()} />
      <ActionMenuOption text="Option 6" onClick={fn()} />
      <ActionMenuOption text="Option 7" onClick={fn()} />
    </ActionMenu>
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"ActionMenu with limited visible rows and scrolling.",...(K=(B=y.parameters)==null?void 0:B.docs)==null?void 0:K.description}}};var ee,te,ne,oe,ie;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Edit" icon={<span className="text-[color:var(--sinch-global-color-icon)]">✏️</span>} onClick={fn()} />
      <ActionMenuOption text="Copy" icon={<span className="text-[color:var(--sinch-global-color-icon)]">📋</span>} onClick={fn()} />
      <ActionMenuOption text="Delete" icon={<span className="text-[color:var(--sinch-global-color-icon)]">🗑️</span>} onClick={fn()} />
    </ActionMenu>
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"ActionMenu with icons on options.",...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.description}}};var ce,se,re,ae,le;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Cut" rightIcon={<span className="text-xs text-foreground-muted">⌘X</span>} onClick={fn()} />
      <ActionMenuOption text="Copy" rightIcon={<span className="text-xs text-foreground-muted">⌘C</span>} onClick={fn()} />
      <ActionMenuOption text="Paste" rightIcon={<span className="text-xs text-foreground-muted">⌘V</span>} onClick={fn()} />
    </ActionMenu>
}`,...(re=(se=N.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"ActionMenu with right-side icons (e.g., keyboard shortcuts).",...(le=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:le.description}}};var de,pe,ue,xe,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="File actions">
      <ActionMenuOption text="Save" icon={<span>💾</span>} rightIcon={<span className="text-xs text-foreground-muted">⌘S</span>} onClick={fn()} />
      <ActionMenuOption text="Open" icon={<span>📂</span>} rightIcon={<span className="text-xs text-foreground-muted">⌘O</span>} onClick={fn()} />
      <ActionMenuOption text="Export" icon={<span>📤</span>} onClick={fn()} />
    </ActionMenu>
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"ActionMenu with both left and right icons.",...(me=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:me.description}}};var he,fe,Ae,ge,be;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="w-48">
      <ActionMenu aria-label="Actions">
        <ActionMenuOption text="Short option" onClick={fn()} />
        <ActionMenuOption text="This is a very long option text that should be truncated" onClick={fn()} />
        <ActionMenuOption text="Another really long option text that won't fit" onClick={fn()} />
      </ActionMenu>
    </div>
}`,...(Ae=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source},description:{story:"ActionMenu with long text that gets truncated.",...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var ke,Ce,Me,Oe,ve;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <ActionMenu aria-label="Empty menu">
      {/* No options */}
    </ActionMenu>
}`,...(Me=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source},description:{story:"Empty ActionMenu (edge case).",...(ve=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:ve.description}}};var je,ye,we,Ne,Ie;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-foreground-muted">
        Click on the menu, then use Arrow Up/Down to navigate, Enter or Space to select.
      </p>
      <ActionMenu aria-label="Keyboard navigation demo">
        <ActionMenuOption text="First Option" onClick={() => alert('First clicked!')} />
        <ActionMenuOption text="Second Option" onClick={() => alert('Second clicked!')} />
        <ActionMenuOption text="Third Option (disabled)" disabled />
        <ActionMenuOption text="Fourth Option" onClick={() => alert('Fourth clicked!')} />
        <ActionMenuOption text="Fifth Option" onClick={() => alert('Fifth clicked!')} />
      </ActionMenu>
    </div>
}`,...(we=(ye=R.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:`ActionMenu showcasing keyboard navigation.
Focus the menu and use Arrow Up/Down to navigate, Enter/Space to select.`,...(Ie=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Ie.description}}};const He=["Default","WithDisabledOptions","WithRows","WithIcons","WithRightIcons","WithBothIcons","WithLongText","Empty","KeyboardNavigation"];export{v as Default,S as Empty,R as KeyboardNavigation,I as WithBothIcons,j as WithDisabledOptions,w as WithIcons,E as WithLongText,N as WithRightIcons,y as WithRows,He as __namedExportsOrder,Ve as default};
