import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as m}from"./index-pP6CS22B.js";import{c as b}from"./cn-BLSKlp9E.js";import{c as y}from"./index-EXTQMK5R.js";import"./_commonjsHelpers-Cpj98o6Y.js";const o=m.forwardRef(({className:i,children:t,...s},r)=>e.jsx("table",{ref:r,className:b("table-auto",i),...s,children:t}));o.displayName="Table";o.__docgenInfo={description:`Table container component that provides semantic table structure.
Use with TableHead, TableBody, TableRow, TableHeadCell, and TableCell components.

@example
\`\`\`tsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeadCell text="Name" />
      <TableHeadCell text="Email" />
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\``,methods:[],displayName:"Table",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically TableHead and TableBody components)"}}};const d=m.forwardRef(({className:i,children:t,...s},r)=>e.jsx("thead",{ref:r,className:b(i),...s,children:t}));d.displayName="TableHead";d.__docgenInfo={description:`Table head section component that wraps table header rows.
Use inside Table and contains TableRow with TableHeadCell components.

@example
\`\`\`tsx
<Table>
  <TableHead>
    <TableRow>
      <TableHeadCell text="Name" />
      <TableHeadCell text="Email" />
    </TableRow>
  </TableHead>
</Table>
\`\`\``,methods:[],displayName:"TableHead",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically TableRow components)"}}};const c=m.forwardRef(({className:i,children:t,...s},r)=>e.jsx("tbody",{ref:r,className:b(i),...s,children:t}));c.displayName="TableBody";c.__docgenInfo={description:`Table body section component that wraps table body rows.
Use inside Table and contains TableRow with TableCell components.

@example
\`\`\`tsx
<Table>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\``,methods:[],displayName:"TableBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically TableRow components)"}}};const Je=y("bg-[var(--sinch-comp-table-color-row-default-background-initial)] hover:bg-[var(--sinch-comp-table-color-row-default-background-hover)]",{variants:{selected:{true:"bg-[var(--sinch-comp-table-color-row-checked-background-initial)]",false:""}},defaultVariants:{selected:!1}}),a=m.forwardRef(({className:i,children:t,sticky:s,selected:r,...T},N)=>e.jsx("tr",{ref:N,"data-sticky":s||void 0,"data-selected":r||void 0,className:b(Je({selected:r}),"[&:last-child_td]:border-b-0",s&&"[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:bg-[var(--sinch-comp-table-color-row-default-background-sticky)]",i),...T,children:t}));a.displayName="TableRow";a.__docgenInfo={description:`Table row component that wraps table cells.
Use inside TableHead or TableBody components.

@example
\`\`\`tsx
<TableRow>
  <TableCell>John Doe</TableCell>
  <TableCell>john@example.com</TableCell>
</TableRow>
\`\`\`

@example Selected row
\`\`\`tsx
<TableRow selected>
  <TableCell>John Doe</TableCell>
  <TableCell>john@example.com</TableCell>
</TableRow>
\`\`\`

@example Sticky header row
\`\`\`tsx
<TableHead>
  <TableRow sticky>
    <TableHeadCell text="Name" />
  </TableRow>
</TableHead>
\`\`\``,methods:[],displayName:"TableRow",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children elements (typically TableCell or TableHeadCell components)"},sticky:{required:!1,tsType:{name:"boolean"},description:"Whether the row is sticky (header cells will be position:sticky)"},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the row is selected"}},composes:["VariantProps"]};const Be=y(["border-b border-[var(--sinch-comp-table-color-head-cell-default-border-initial)]","align-middle","text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]"],{variants:{align:{start:"",center:"",end:""},fit:{true:"w-px",false:""}},defaultVariants:{align:"start",fit:!1}}),Se=y(["relative","flex","items-center","gap-2","w-full","h-full","p-2","box-border"],{variants:{align:{start:"justify-start",center:"justify-center",end:"justify-end"}},defaultVariants:{align:"start"}}),n=m.forwardRef(({className:i,children:t,text:s,align:r="start",fit:T,leftContent:N,rightContent:ge,checkboxContent:ye,tooltipContent:Ne,...ve},He)=>{const v=s!==void 0&&s!=="",ke=t!==void 0;return e.jsx("th",{ref:He,scope:"col",className:b(Be({align:r,fit:T}),i),...ve,children:e.jsxs("div",{className:b(Se({align:r})),children:[ye,N,v&&e.jsx("span",{className:"min-w-0 shrink text-[var(--sinch-comp-table-color-head-cell-default-text-initial)]",children:s}),ke&&!v&&t,Ne,ge]})})});n.displayName="TableHeadCell";n.__docgenInfo={description:'Table header cell component for column headers.\nUse inside TableRow within TableHead.\n\n@example Basic usage\n```tsx\n<TableHeadCell text="Name" />\n```\n\n@example With alignment\n```tsx\n<TableHeadCell text="Price" align="end" />\n```\n\n@example With fit (shrink to content)\n```tsx\n<TableHeadCell text="ID" fit />\n```\n\n@example With children instead of text\n```tsx\n<TableHeadCell>\n  <Icon name="user" />\n  User\n</TableHeadCell>\n```',methods:[],displayName:"TableHeadCell",props:{text:{required:!1,tsType:{name:"string"},description:"Text content for the header cell"},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"Alignment of the cell content",defaultValue:{value:"'start'",computed:!1}},fit:{required:!1,tsType:{name:"boolean"},description:"Whether the cell should shrink to fit its content"},leftContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render on the left side (before text)"},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render on the right side (after text)"},checkboxContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Checkbox content to render before everything"},tooltipContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tooltip content to render after text"}},composes:["Omit","VariantProps"]};const Ae=y(["border-b border-[var(--sinch-comp-table-color-cell-default-border-initial)]","align-top"],{variants:{align:{start:"",center:"",end:""}},defaultVariants:{align:"start"}}),De=y(["flex","flex-col","justify-center","min-h-[48px]","box-border","p-2"],{variants:{align:{start:"text-start items-start",center:"text-center items-center",end:"text-end items-end"}},defaultVariants:{align:"start"}}),l=m.forwardRef(({className:i,children:t,align:s="start",...r},T)=>e.jsx("td",{ref:T,className:b(Ae({align:s}),i),...r,children:e.jsx("div",{className:b(De({align:s})),children:t})}));l.displayName="TableCell";l.__docgenInfo={description:`Table cell component for table data.
Use inside TableRow within TableBody.

@example Basic usage
\`\`\`tsx
<TableCell>John Doe</TableCell>
\`\`\`

@example With alignment
\`\`\`tsx
<TableCell align="end">$99.99</TableCell>
\`\`\`

@example With complex content
\`\`\`tsx
<TableCell>
  <div className="flex items-center gap-2">
    <Avatar name="John Doe" />
    <span>John Doe</span>
  </div>
</TableCell>
\`\`\``,methods:[],displayName:"TableCell",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"Alignment of the cell content",defaultValue:{value:"'start'",computed:!1}}},composes:["Omit","VariantProps"]};const Ve={title:"Components/Table",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A semantic table component system with Table, TableHead, TableBody, TableRow, TableHeadCell, and TableCell components."}}}},x={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Email"}),e.jsx(n,{text:"Role"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Editor"})]})]})]})},h={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Product"}),e.jsx(n,{text:"Quantity",align:"center"}),e.jsx(n,{text:"Price",align:"end"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Widget A"}),e.jsx(l,{align:"center",children:"10"}),e.jsx(l,{align:"end",children:"$99.99"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Widget B"}),e.jsx(l,{align:"center",children:"25"}),e.jsx(l,{align:"end",children:"$149.99"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Widget C"}),e.jsx(l,{align:"center",children:"5"}),e.jsx(l,{align:"end",children:"$299.99"})]})]})]})},p={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Status"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"Item 1"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{selected:!0,children:[e.jsx(l,{children:"Item 2 (selected)"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Item 3"}),e.jsx(l,{children:"Inactive"})]}),e.jsxs(a,{selected:!0,children:[e.jsx(l,{children:"Item 4 (selected)"}),e.jsx(l,{children:"Active"})]})]})]})},C={render:()=>e.jsx("div",{className:"h-64 overflow-auto border border-border rounded-md",children:e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{sticky:!0,children:[e.jsx(n,{text:"ID",fit:!0}),e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Email"})]})}),e.jsx(c,{children:Array.from({length:20},(i,t)=>e.jsxs(a,{children:[e.jsx(l,{children:t+1}),e.jsxs(l,{children:["User ",t+1]}),e.jsxs(l,{children:["user",t+1,"@example.com"]})]},t))})]})})},u={render:()=>e.jsxs(o,{className:"w-full",children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"#",fit:!0}),e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Description"}),e.jsx(n,{text:"Actions",fit:!0})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"Item One"}),e.jsx(l,{children:"This is a description of the first item"}),e.jsx(l,{children:e.jsx("button",{className:"px-2 py-1 text-sm bg-primary text-primary-foreground rounded",children:"Edit"})})]}),e.jsxs(a,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"Item Two"}),e.jsx(l,{children:"This is a description of the second item"}),e.jsx(l,{children:e.jsx("button",{className:"px-2 py-1 text-sm bg-primary text-primary-foreground rounded",children:"Edit"})})]})]})]})},j={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{checkboxContent:e.jsx("input",{type:"checkbox",className:"w-4 h-4"}),fit:!0}),e.jsx(n,{text:"Name",tooltipContent:e.jsx("span",{className:"text-foreground-muted ml-1",title:"User's full name",children:"(?)"})}),e.jsx(n,{text:"Status",rightContent:e.jsx("span",{className:"text-xs text-foreground-muted",children:"(sortable)"})})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox",className:"w-4 h-4"})}),e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:e.jsx("input",{type:"checkbox",className:"w-4 h-4"})}),e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"Pending"})]})]})]})},w={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Email"}),e.jsx(n,{text:"Role"})]})}),e.jsx(c,{children:e.jsx(a,{children:e.jsx(l,{colSpan:3,children:e.jsx("div",{className:"text-center text-foreground-muted py-8",children:"No data available"})})})})]})},f={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"User"}),e.jsx(n,{text:"Details"}),e.jsx(n,{text:"Status",align:"center"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium",children:"JD"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"John Doe"}),e.jsx("div",{className:"text-sm text-foreground-muted",children:"Admin"})]})]})}),e.jsx(l,{children:e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{children:"john@example.com"}),e.jsx("div",{className:"text-foreground-muted",children:"Joined Jan 2024"})]})}),e.jsx(l,{align:"center",children:e.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-subtle text-success-strong",children:"Active"})})]}),e.jsxs(a,{children:[e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-10 w-10 rounded-full bg-info flex items-center justify-center text-pure font-medium",children:"JS"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Jane Smith"}),e.jsx("div",{className:"text-sm text-foreground-muted",children:"Editor"})]})]})}),e.jsx(l,{children:e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{children:"jane@example.com"}),e.jsx("div",{className:"text-foreground-muted",children:"Joined Feb 2024"})]})}),e.jsx(l,{align:"center",children:e.jsx("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning-subtle text-warning-strong",children:"Pending"})})]})]})]})},R={render:()=>e.jsxs(o,{children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Email"})]})}),e.jsxs(c,{children:[e.jsxs(a,{className:"cursor-pointer",onClick:()=>alert("Clicked row 1"),children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"})]}),e.jsxs(a,{className:"cursor-pointer",onClick:()=>alert("Clicked row 2"),children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"})]}),e.jsxs(a,{className:"cursor-pointer",onClick:()=>alert("Clicked row 3"),children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"bob@example.com"})]})]})]})},g={render:()=>e.jsxs(o,{className:"w-full",children:[e.jsx(d,{children:e.jsxs(a,{children:[e.jsx(n,{text:"Name"}),e.jsx(n,{text:"Email"}),e.jsx(n,{text:"Role"}),e.jsx(n,{text:"Status",align:"end"})]})}),e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"}),e.jsx(l,{align:"end",children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"User"}),e.jsx(l,{align:"end",children:"Active"})]}),e.jsxs(a,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Editor"}),e.jsx(l,{align:"end",children:"Inactive"})]})]})]})};var H,k,J,B,S;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(J=(k=x.parameters)==null?void 0:k.docs)==null?void 0:J.source},description:{story:"Default table with header and body",...(S=(B=x.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var A,D,E,W,I;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Product" />
          <TableHeadCell text="Quantity" align="center" />
          <TableHeadCell text="Price" align="end" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell align="center">10</TableCell>
          <TableCell align="end">$99.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell align="center">25</TableCell>
          <TableCell align="end">$149.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell align="center">5</TableCell>
          <TableCell align="end">$299.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(E=(D=h.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Table with different column alignments",...(I=(W=h.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};var _,U,V,q,P;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Status" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>Item 2 (selected)</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 3</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>Item 4 (selected)</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Table with selected rows",...(P=(q=p.parameters)==null?void 0:q.docs)==null?void 0:P.description}}};var $,F,O,Q,z;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="h-64 overflow-auto border border-border rounded-md">
      <Table>
        <TableHead>
          <TableRow sticky>
            <TableHeadCell text="ID" fit />
            <TableHeadCell text="Name" />
            <TableHeadCell text="Email" />
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({
          length: 20
        }, (_, i) => <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>User {i + 1}</TableCell>
              <TableCell>user{i + 1}@example.com</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
}`,...(O=(F=C.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"Table with sticky header (scroll to see effect)",...(z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:z.description}}};var G,K,L,M,X;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Table className="w-full">
      <TableHead>
        <TableRow>
          <TableHeadCell text="#" fit />
          <TableHeadCell text="Name" />
          <TableHeadCell text="Description" />
          <TableHeadCell text="Actions" fit />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Item One</TableCell>
          <TableCell>This is a description of the first item</TableCell>
          <TableCell>
            <button className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Item Two</TableCell>
          <TableCell>This is a description of the second item</TableCell>
          <TableCell>
            <button className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(L=(K=u.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"Table with fit column (shrinks to content width)",...(X=(M=u.parameters)==null?void 0:M.docs)==null?void 0:X.description}}};var Y,Z,ee,le,ae;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell checkboxContent={<input type="checkbox" className="w-4 h-4" />} fit />
          <TableHeadCell text="Name" tooltipContent={<span className="text-foreground-muted ml-1" title="User's full name">(?)</span>} />
          <TableHeadCell text="Status" rightContent={<span className="text-xs text-foreground-muted">(sortable)</span>} />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><input type="checkbox" className="w-4 h-4" /></TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><input type="checkbox" className="w-4 h-4" /></TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Table with header cell slots (checkbox, tooltip, etc.)",...(ae=(le=j.parameters)==null?void 0:le.docs)==null?void 0:ae.description}}};var ne,te,se,re,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3}>
            <div className="text-center text-foreground-muted py-8">
              No data available
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Empty table",...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.description}}};var ie,de,ce,be,me;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="User" />
          <TableHeadCell text="Details" />
          <TableHeadCell text="Status" align="center" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                JD
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-foreground-muted">Admin</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-sm">
              <div>john@example.com</div>
              <div className="text-foreground-muted">Joined Jan 2024</div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-subtle text-success-strong">
              Active
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-info flex items-center justify-center text-pure font-medium">
                JS
              </div>
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-foreground-muted">Editor</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-sm">
              <div>jane@example.com</div>
              <div className="text-foreground-muted">Joined Feb 2024</div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning-subtle text-warning-strong">
              Pending
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Table with complex cell content",...(me=(be=f.parameters)==null?void 0:be.docs)==null?void 0:me.description}}};var Te,xe,he,pe,Ce;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 1')}>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 2')}>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 3')}>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(he=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"Clickable rows",...(Ce=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:Ce.description}}};var ue,je,we,fe,Re;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Table className="w-full">
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
          <TableHeadCell text="Status" align="end" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell align="end">Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell align="end">Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
          <TableCell align="end">Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(we=(je=g.parameters)==null?void 0:je.docs)==null?void 0:we.source},description:{story:"Full width table",...(Re=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:Re.description}}};const qe=["Default","WithAlignment","WithSelectedRows","WithStickyHeader","WithFitColumn","WithHeaderSlots","Empty","WithComplexContent","ClickableRows","FullWidth"];export{R as ClickableRows,x as Default,w as Empty,g as FullWidth,h as WithAlignment,f as WithComplexContent,u as WithFitColumn,j as WithHeaderSlots,p as WithSelectedRows,C as WithStickyHeader,qe as __namedExportsOrder,Ve as default};
