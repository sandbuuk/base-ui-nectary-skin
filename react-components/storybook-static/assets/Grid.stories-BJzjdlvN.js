import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as f}from"./index-pP6CS22B.js";import{c as De}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const we=["grid","grid-cols-[repeat(var(--sinch-comp-grid-columns-xl),minmax(0,1fr))]","gap-[var(--sinch-comp-grid-gutter-xl)]","p-[var(--sinch-comp-grid-margin-xl)]","max-[1439px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-l),minmax(0,1fr))]","max-[1439px]:gap-[var(--sinch-comp-grid-gutter-l)]","max-[1439px]:p-[var(--sinch-comp-grid-margin-l)]","max-[1023px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-m),minmax(0,1fr))]","max-[1023px]:gap-[var(--sinch-comp-grid-gutter-m)]","max-[1023px]:p-[var(--sinch-comp-grid-margin-m)]","max-[767px]:grid-cols-[repeat(var(--sinch-comp-grid-columns-s),minmax(0,1fr))]","max-[767px]:gap-[var(--sinch-comp-grid-gutter-s)]","max-[767px]:p-[var(--sinch-comp-grid-margin-s)]"].join(" "),o=f.forwardRef(({className:n,children:l,...a},m)=>e.jsx("div",{ref:m,className:De(we,n),...a,children:l}));o.displayName="Grid";o.__docgenInfo={description:`A responsive CSS grid container that adapts to different screen sizes.

The Grid component uses CSS variables for columns, gutters, and margins
at four breakpoints: XL (1440px+), L (1024-1439px), M (768-1023px), S (<768px).

Default values are provided by the design system's CSS variables.
Override them via the \`style\` prop to customize the grid layout.

@example
\`\`\`tsx
<Grid>
  <GridItem xl={6} l={6} m={4} s={4}>Left</GridItem>
  <GridItem xl={6} l={6} m={4} s={4}>Right</GridItem>
</Grid>
\`\`\`

@example Custom column configuration
\`\`\`tsx
<Grid style={{ '--sinch-comp-grid-columns-xl': '6' }}>
  <GridItem xl={3}>Item</GridItem>
</Grid>
\`\`\``,methods:[],displayName:"Grid",props:{style:{required:!1,tsType:{name:"intersection",raw:"React.CSSProperties & GridStyleOverrides",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"GridStyleOverrides"}]},description:"Custom style overrides including grid CSS variables"}}};const r=f.forwardRef(({className:n,s:l,m:a,l:m,xl:y,children:Be,...Se},be)=>{const Ce=f.useMemo(()=>{const i=["block"];return y!==void 0?i.push(`col-span-${y}`):i.push("col-span-12"),m!==void 0?i.push(`max-[1439px]:col-span-${m}`):i.push("max-[1439px]:col-span-12"),a!==void 0?i.push(`max-[1023px]:col-span-${a}`):i.push("max-[1023px]:col-span-8"),l!==void 0?i.push(`max-[767px]:col-span-${l}`):i.push("max-[767px]:col-span-4"),i.join(" ")},[l,a,m,y]);return e.jsx("div",{ref:be,className:De(Ce,n),...Se,children:Be})});r.displayName="GridItem";r.__docgenInfo={description:`A grid item that spans a specified number of columns at each breakpoint.

Must be used inside a \`Grid\` component.

@example
\`\`\`tsx
<Grid>
  <GridItem xl={6} l={6} m={4} s={4}>Half width</GridItem>
  <GridItem xl={6} l={6} m={4} s={4}>Half width</GridItem>
</Grid>
\`\`\`

@example Full width card
\`\`\`tsx
<Grid>
  <GridItem xl={12} l={12} m={8} s={4}>
    Full width at all breakpoints
  </GridItem>
</Grid>
\`\`\``,methods:[],displayName:"GridItem",props:{s:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Column span at S breakpoint (<768px). Max: 4 columns"},m:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Column span at M breakpoint (768-1023px). Max: 8 columns"},l:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Column span at L breakpoint (1024-1439px). Max: 12 columns"},xl:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"Column span at XL breakpoint (1440px+). Max: 12 columns"}}};const Le={title:"Components/Grid",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{style:{control:"object",description:"CSS variables for grid configuration"}},decorators:[n=>e.jsx("div",{className:"min-h-[400px]",children:e.jsx(n,{})})]},s=({children:n,color:l="primary"})=>{const a={primary:"bg-primary/20 border-primary",secondary:"bg-surface-secondary border-border",success:"bg-success-subtle border-success",warning:"bg-warning-subtle border-warning",info:"bg-info-subtle border-info"};return e.jsx("div",{className:`${a[l]} border rounded-md p-4 text-center font-mono text-sm`,children:n})},t={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:4,l:4,m:4,s:2,children:e.jsx(s,{children:"xl=4"})}),e.jsx(r,{xl:4,l:4,m:4,s:2,children:e.jsx(s,{children:"xl=4"})}),e.jsx(r,{xl:4,l:4,m:8,s:4,children:e.jsx(s,{children:"xl=4"})})]})},d={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:6,l:6,m:4,s:4,children:e.jsx(s,{color:"primary",children:"Left (6 cols)"})}),e.jsx(r,{xl:6,l:6,m:4,s:4,children:e.jsx(s,{color:"secondary",children:"Right (6 cols)"})})]})},c={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:3,l:3,m:2,s:4,children:e.jsx(s,{color:"info",children:"Sidebar (3 cols)"})}),e.jsx(r,{xl:6,l:6,m:4,s:4,children:e.jsx(s,{color:"primary",children:"Main Content (6 cols)"})}),e.jsx(r,{xl:3,l:3,m:2,s:4,children:e.jsx(s,{color:"info",children:"Sidebar (3 cols)"})})]})},x={render:()=>e.jsx(o,{children:[1,2,3,4].map(n=>e.jsx(r,{xl:3,l:3,m:4,s:2,children:e.jsxs(s,{children:["Card ",n]})},n))})},p={render:()=>e.jsx(o,{children:e.jsx(r,{xl:12,l:12,m:8,s:4,children:e.jsx(s,{color:"success",children:"Full Width (12 cols)"})})})},u={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:8,l:8,m:5,s:4,children:e.jsx(s,{color:"primary",children:"Large (8 cols)"})}),e.jsx(r,{xl:4,l:4,m:3,s:4,children:e.jsx(s,{color:"secondary",children:"Small (4 cols)"})}),e.jsx(r,{xl:3,l:3,m:2,s:2,children:e.jsx(s,{color:"info",children:"XS"})}),e.jsx(r,{xl:3,l:3,m:2,s:2,children:e.jsx(s,{color:"info",children:"XS"})}),e.jsx(r,{xl:3,l:3,m:2,s:2,children:e.jsx(s,{color:"info",children:"XS"})}),e.jsx(r,{xl:3,l:3,m:2,s:2,children:e.jsx(s,{color:"info",children:"XS"})})]})},h={render:()=>e.jsx(o,{children:[1,2,3,4,5,6].map(n=>e.jsx(r,{xl:2,l:3,m:4,s:4,children:e.jsxs(s,{color:n%2===0?"primary":"secondary",children:["Item ",n,e.jsx("div",{className:"text-xs text-foreground-muted mt-1",children:"xl:2 l:3 m:4 s:4"})]})},n))})},g={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:6,l:6,m:8,s:4,children:e.jsxs(s,{color:"primary",children:[e.jsx("div",{className:"mb-2",children:"Parent Item"}),e.jsxs(o,{className:"mt-2 p-0",children:[e.jsx(r,{xl:6,l:6,m:4,s:2,children:e.jsx(s,{color:"info",children:"Nested 1"})}),e.jsx(r,{xl:6,l:6,m:4,s:2,children:e.jsx(s,{color:"info",children:"Nested 2"})})]})]})}),e.jsx(r,{xl:6,l:6,m:8,s:4,children:e.jsx(s,{color:"secondary",children:"Right Column"})})]})},G={render:()=>e.jsxs(o,{style:{"--sinch-comp-grid-columns-xl":"6","--sinch-comp-grid-gutter-xl":"2rem","--sinch-comp-grid-margin-xl":"2rem"},children:[e.jsx(r,{xl:2,l:4,m:4,s:2,children:e.jsx(s,{color:"warning",children:"6-col grid (xl:2)"})}),e.jsx(r,{xl:2,l:4,m:4,s:2,children:e.jsx(s,{color:"warning",children:"6-col grid (xl:2)"})}),e.jsx(r,{xl:2,l:4,m:8,s:4,children:e.jsx(s,{color:"warning",children:"6-col grid (xl:2)"})})]})},v={render:()=>e.jsxs(o,{style:{"--sinch-comp-grid-margin-xl":"0","--sinch-comp-grid-margin-l":"0","--sinch-comp-grid-margin-m":"0","--sinch-comp-grid-margin-s":"0"},children:[e.jsx(r,{xl:6,l:6,m:4,s:4,children:e.jsx(s,{children:"No margin"})}),e.jsx(r,{xl:6,l:6,m:4,s:4,children:e.jsx(s,{children:"No margin"})})]})},j={render:()=>e.jsxs(o,{children:[e.jsx(r,{xl:12,l:12,m:8,s:4,children:e.jsx(s,{color:"primary",children:"Header"})}),e.jsx(r,{xl:3,l:3,m:8,s:4,children:e.jsx(s,{color:"info",children:e.jsx("div",{className:"h-48 flex items-center justify-center",children:"Sidebar"})})}),e.jsx(r,{xl:9,l:9,m:8,s:4,children:e.jsx(s,{color:"secondary",children:e.jsx("div",{className:"h-48 flex items-center justify-center",children:"Main Content Area"})})}),e.jsx(r,{xl:12,l:12,m:8,s:4,children:e.jsx(s,{color:"primary",children:"Footer"})})]})};var I,D,B,S,b;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={4} l={4} m={4} s={2}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={4} s={2}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={8} s={4}>
        <DemoBox>xl=4</DemoBox>
      </GridItem>
    </Grid>
}`,...(B=(D=t.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:`Default 12-column grid with automatic responsive behavior.
Resize the viewport to see the grid adapt.`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var C,w,N,M,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="primary">Left (6 cols)</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="secondary">Right (6 cols)</DemoBox>
      </GridItem>
    </Grid>
}`,...(N=(w=d.parameters)==null?void 0:w.docs)==null?void 0:N.source},description:{story:"Two column layout that stacks on small screens.",...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var F,L,T,k,X;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={3} l={3} m={2} s={4}>
        <DemoBox color="info">Sidebar (3 cols)</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox color="primary">Main Content (6 cols)</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={4}>
        <DemoBox color="info">Sidebar (3 cols)</DemoBox>
      </GridItem>
    </Grid>
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"Three column layout with asymmetric widths.",...(X=(k=c.parameters)==null?void 0:k.docs)==null?void 0:X.description}}};var P,W,_,q,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Grid>
      {[1, 2, 3, 4].map(i => <GridItem key={i} xl={3} l={3} m={4} s={2}>
          <DemoBox>Card {i}</DemoBox>
        </GridItem>)}
    </Grid>
}`,...(_=(W=x.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"Four column layout commonly used for cards/dashboards.",...(H=(q=x.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var $,z,A,O,E;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="success">Full Width (12 cols)</DemoBox>
      </GridItem>
    </Grid>
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:"Full width item spanning all columns.",...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var J,K,Q,U,V;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={8} l={8} m={5} s={4}>
        <DemoBox color="primary">Large (8 cols)</DemoBox>
      </GridItem>
      <GridItem xl={4} l={4} m={3} s={4}>
        <DemoBox color="secondary">Small (4 cols)</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
      <GridItem xl={3} l={3} m={2} s={2}>
        <DemoBox color="info">XS</DemoBox>
      </GridItem>
    </Grid>
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Mixed column widths for complex layouts.",...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var Y,Z,ee,re,se;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Grid>
      {[1, 2, 3, 4, 5, 6].map(i => <GridItem key={i} xl={2} l={3} m={4} s={4}>
          <DemoBox color={i % 2 === 0 ? 'primary' : 'secondary'}>
            Item {i}
            <div className="text-xs text-foreground-muted mt-1">
              xl:2 l:3 m:4 s:4
            </div>
          </DemoBox>
        </GridItem>)}
    </Grid>
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`Responsive behavior: different column counts at each breakpoint.
Resize the viewport to see items reflow.`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var oe,ne,ie,le,ae;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Grid>
      <GridItem xl={6} l={6} m={8} s={4}>
        <DemoBox color="primary">
          <div className="mb-2">Parent Item</div>
          <Grid className="mt-2 p-0">
            <GridItem xl={6} l={6} m={4} s={2}>
              <DemoBox color="info">Nested 1</DemoBox>
            </GridItem>
            <GridItem xl={6} l={6} m={4} s={2}>
              <DemoBox color="info">Nested 2</DemoBox>
            </GridItem>
          </Grid>
        </DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={8} s={4}>
        <DemoBox color="secondary">Right Column</DemoBox>
      </GridItem>
    </Grid>
}`,...(ie=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Nested grids for complex layouts.",...(ae=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ae.description}}};var me,te,de,ce,xe;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Grid style={{
    '--sinch-comp-grid-columns-xl': '6',
    '--sinch-comp-grid-gutter-xl': '2rem',
    '--sinch-comp-grid-margin-xl': '2rem'
  } as GridProps['style']}>
      <GridItem xl={2} l={4} m={4} s={2}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
      <GridItem xl={2} l={4} m={4} s={2}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
      <GridItem xl={2} l={4} m={8} s={4}>
        <DemoBox color="warning">6-col grid (xl:2)</DemoBox>
      </GridItem>
    </Grid>
}`,...(de=(te=G.parameters)==null?void 0:te.docs)==null?void 0:de.source},description:{story:"Custom grid configuration using CSS variables.",...(xe=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:xe.description}}};var pe,ue,he,ge,Ge;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Grid style={{
    '--sinch-comp-grid-margin-xl': '0',
    '--sinch-comp-grid-margin-l': '0',
    '--sinch-comp-grid-margin-m': '0',
    '--sinch-comp-grid-margin-s': '0'
  } as GridProps['style']}>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox>No margin</DemoBox>
      </GridItem>
      <GridItem xl={6} l={6} m={4} s={4}>
        <DemoBox>No margin</DemoBox>
      </GridItem>
    </Grid>
}`,...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source},description:{story:"Grid without padding/margin.",...(Ge=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:Ge.description}}};var ve,je,ye,fe,Ie;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <Grid>
      {/* Header - full width */}
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="primary">Header</DemoBox>
      </GridItem>
      {/* Sidebar */}
      <GridItem xl={3} l={3} m={8} s={4}>
        <DemoBox color="info">
          <div className="h-48 flex items-center justify-center">Sidebar</div>
        </DemoBox>
      </GridItem>
      {/* Main content */}
      <GridItem xl={9} l={9} m={8} s={4}>
        <DemoBox color="secondary">
          <div className="h-48 flex items-center justify-center">
            Main Content Area
          </div>
        </DemoBox>
      </GridItem>
      {/* Footer - full width */}
      <GridItem xl={12} l={12} m={8} s={4}>
        <DemoBox color="primary">Footer</DemoBox>
      </GridItem>
    </Grid>
}`,...(ye=(je=j.parameters)==null?void 0:je.docs)==null?void 0:ye.source},description:{story:"Dashboard-style layout with header, sidebar, and content area.",...(Ie=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:Ie.description}}};const Te=["Default","TwoColumns","ThreeColumns","FourColumns","FullWidth","MixedWidths","ResponsiveLayout","NestedGrids","CustomConfiguration","NoPadding","DashboardLayout"];export{G as CustomConfiguration,j as DashboardLayout,t as Default,x as FourColumns,p as FullWidth,u as MixedWidths,g as NestedGrids,v as NoPadding,h as ResponsiveLayout,c as ThreeColumns,d as TwoColumns,Te as __namedExportsOrder,Le as default};
