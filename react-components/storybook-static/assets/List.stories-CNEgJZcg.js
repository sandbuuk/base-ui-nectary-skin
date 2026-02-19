import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as X}from"./index-pP6CS22B.js";import{c as u}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=X.forwardRef(({className:l,children:i,...p},h)=>e.jsx("div",{ref:h,role:"list",className:u("block h-full",l),...p,children:e.jsx("div",{className:"flex h-full w-full flex-col overflow-y-auto",children:i})}));t.displayName="List";t.__docgenInfo={description:`List container component that displays a vertical list of items.
Use with ListItem components to create lists with consistent styling.

@example
\`\`\`tsx
<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>
\`\`\``,methods:[],displayName:"List",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically ListItem components)"}}};const s=X.forwardRef(({className:l,children:i,...p},h)=>e.jsx("div",{ref:h,role:"listitem",className:u("block outline-none",l),...p,children:e.jsx("div",{className:u("box-border h-full w-full overflow-hidden","py-2","bg-[var(--sinch-comp-list-color-default-background-initial)]","hover:bg-[var(--sinch-comp-list-color-default-background-hover)]","border-b border-[var(--sinch-comp-list-color-default-border-initial)]","last:border-b-0"),children:i})}));s.displayName="ListItem";s.__docgenInfo={description:`Individual list item component with hover state and border separator.
Use inside a List container for consistent styling.

@example
\`\`\`tsx
<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>
\`\`\``,methods:[],displayName:"ListItem",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display inside the list item"}}};const se={title:"Components/List",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A container component for displaying vertical lists of items with consistent styling."}}}},r={render:()=>e.jsxs(t,{children:[e.jsx(s,{children:"First item"}),e.jsx(s,{children:"Second item"}),e.jsx(s,{children:"Third item"})]})},n={render:()=>e.jsx(t,{})},a={render:()=>e.jsx(t,{children:e.jsx(s,{children:"Only item"})})},m={render:()=>e.jsx("div",{className:"h-64",children:e.jsx(t,{children:Array.from({length:20},(l,i)=>e.jsxs(s,{children:["Item ",i+1]},i))})})},o={render:()=>e.jsxs(t,{children:[e.jsx(s,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-primary"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"John Doe"}),e.jsx("div",{className:"text-sm text-foreground-muted",children:"john@example.com"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-success"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Jane Smith"}),e.jsx("div",{className:"text-sm text-foreground-muted",children:"jane@example.com"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-info"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Bob Johnson"}),e.jsx("div",{className:"text-sm text-foreground-muted",children:"bob@example.com"})]})]})})]})},c={render:()=>e.jsxs(t,{children:[e.jsx(s,{className:"cursor-pointer",onClick:()=>alert("Clicked Item 1"),children:"Click me - Item 1"}),e.jsx(s,{className:"cursor-pointer",onClick:()=>alert("Clicked Item 2"),children:"Click me - Item 2"}),e.jsx(s,{className:"cursor-pointer",onClick:()=>alert("Clicked Item 3"),children:"Click me - Item 3"})]})},d={render:()=>e.jsxs(t,{className:"max-w-md rounded-lg border border-border bg-surface-primary",children:[e.jsx(s,{children:e.jsx("div",{className:"px-4",children:"Styled list item 1"})}),e.jsx(s,{children:e.jsx("div",{className:"px-4",children:"Styled list item 2"})}),e.jsx(s,{children:e.jsx("div",{className:"px-4",children:"Styled list item 3"})})]})};var x,L,v,I,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
}`,...(v=(L=r.parameters)==null?void 0:L.docs)==null?void 0:v.source},description:{story:"Default list with multiple items",...(f=(I=r.parameters)==null?void 0:I.docs)==null?void 0:f.description}}};var N,j,g,y,b;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <List />
}`,...(g=(j=n.parameters)==null?void 0:j.docs)==null?void 0:g.source},description:{story:"Empty list with no items",...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var C,k,w,S,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>Only item</ListItem>
    </List>
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"Single item in a list",...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var _,E,J,T,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="h-64">
      <List>
        {Array.from({
        length: 20
      }, (_, i) => <ListItem key={i}>Item {i + 1}</ListItem>)}
      </List>
    </div>
}`,...(J=(E=m.parameters)==null?void 0:E.docs)==null?void 0:J.source},description:{story:"List with many items demonstrating scroll behavior",...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var F,A,O,q,B;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary" />
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-foreground-muted">john@example.com</div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-success" />
          <div>
            <div className="font-medium">Jane Smith</div>
            <div className="text-sm text-foreground-muted">jane@example.com</div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-info" />
          <div>
            <div className="font-medium">Bob Johnson</div>
            <div className="text-sm text-foreground-muted">bob@example.com</div>
          </div>
        </div>
      </ListItem>
    </List>
}`,...(O=(A=o.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"List items with rich content",...(B=(q=o.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};var M,U,W,z,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 1')}>
        Click me - Item 1
      </ListItem>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 2')}>
        Click me - Item 2
      </ListItem>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 3')}>
        Click me - Item 3
      </ListItem>
    </List>
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"List with clickable items",...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var H,K,P,Q,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List className="max-w-md rounded-lg border border-border bg-surface-primary">
      <ListItem>
        <div className="px-4">Styled list item 1</div>
      </ListItem>
      <ListItem>
        <div className="px-4">Styled list item 2</div>
      </ListItem>
      <ListItem>
        <div className="px-4">Styled list item 3</div>
      </ListItem>
    </List>
}`,...(P=(K=d.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:"List with custom styling",...(V=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};const te=["Default","Empty","SingleItem","ManyItems","WithRichContent","ClickableItems","CustomStyling"];export{c as ClickableItems,d as CustomStyling,r as Default,n as Empty,m as ManyItems,a as SingleItem,o as WithRichContent,te as __namedExportsOrder,se as default};
