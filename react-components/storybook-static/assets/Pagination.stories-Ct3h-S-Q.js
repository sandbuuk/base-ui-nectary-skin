import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as c}from"./index-pP6CS22B.js";import{f as Xe}from"./index-CsAwyYjM.js";import{c as De}from"./index-EXTQMK5R.js";import{c as qe}from"./cn-BLSKlp9E.js";import{I as E}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=7,u=Math.floor(d/2),_=0,D=d-1,Te=1,k=D-1,Ge=(p,o,i)=>p===Te&&o>u||p===k&&o<=i-k,He=De(["flex","justify-center","items-center","gap-2","h-6"]),M=De(["relative","flex","justify-center","items-center","min-w-6","h-6","cursor-pointer","rounded-[var(--sinch-comp-pagination-shape-radius)]","select-none","outline-none","focus-visible:before:content-['']","focus-visible:before:absolute","focus-visible:before:inset-[-3px]","focus-visible:before:border-2","focus-visible:before:border-solid","focus-visible:before:border-[var(--sinch-comp-pagination-color-default-outline-focus)]","focus-visible:before:rounded-[calc(var(--sinch-comp-pagination-shape-radius)+3px)]","focus-visible:before:pointer-events-none"],{variants:{variant:{arrow:["text-[var(--sinch-comp-pagination-color-default-icon-default)]","enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]","disabled:text-[var(--sinch-comp-pagination-color-disabled-icon-initial)]","disabled:cursor-default"],page:["px-1","font-[var(--sinch-comp-pagination-font-default-page-number)]","text-[var(--sinch-comp-pagination-color-default-text-initial)]","bg-[var(--sinch-comp-pagination-color-default-background-initial)]","enabled:hover:bg-[var(--sinch-comp-pagination-color-default-background-hover)]"],pageActive:["px-1","font-[var(--sinch-comp-pagination-font-checked-page-number)]","text-[var(--sinch-comp-pagination-color-default-text-initial)]","bg-[var(--sinch-comp-pagination-color-checked-background-initial)]","pointer-events-none","cursor-default"]}},defaultVariants:{variant:"page"}}),l=c.forwardRef(({className:p,value:o,max:i,onChange:n,ariaLabel:Ee="Pagination",..._e},Le)=>{const a=o-1,s=Math.max(0,i),S=c.useMemo(()=>Math.min(Math.max(0,a-u),Math.max(0,s-d)),[a,s]),Ae=c.useMemo(()=>Array.from({length:d},(t,r)=>{let j=!1;a<3?j=a===r:a>=s-u?j=r+S===a:j=r===u;const Oe=r===_?1:r===D?s:r+1+S,Re=s>d&&Ge(r,a,s);return{index:r,pageNumber:Oe,isActive:j,isEllipsis:Re,isHidden:r>=s}}),[a,s,S]),m=c.useCallback(t=>Math.max(0,Math.min(s-1,t))+1,[s]),Ce=c.useCallback(t=>{let r;t===_?r=0:t===D?r=s-1:t===Te&&s>d&&a>u?r=Math.floor(a/2):t===k&&s>d&&a<=s-k?r=Math.floor((s-a)/2+a):r=t+Math.min(Math.max(0,a-u),Math.max(0,s-d)),n==null||n(m(r))},[a,s,n,m]),Ie=c.useCallback(()=>{n==null||n(m(Math.max(a-1,0)))},[a,n,m]),Fe=c.useCallback(()=>{n==null||n(m(Math.min(a+1,s-1)))},[a,s,n,m]),T=a<0||a>=s,Ve=T||a===0,Be=T||a===s-1;return e.jsx("nav",{ref:Le,"aria-label":Ee,className:qe("inline-block align-middle outline-none",p),..._e,children:e.jsxs("div",{className:He(),children:[e.jsx("button",{type:"button","aria-label":"Go back",disabled:Ve,onClick:Ie,className:M({variant:"arrow"}),children:e.jsx(E,{name:"fa-angle-left",iconsVersion:"2",size:"md"})}),Ae.map(t=>t.isHidden?null:e.jsx("button",{type:"button","aria-label":`Go to page ${t.pageNumber}`,"aria-current":t.isActive?"page":void 0,"aria-hidden":t.isEllipsis?!0:void 0,disabled:t.isEllipsis,onClick:()=>Ce(t.index),className:M({variant:t.isActive?"pageActive":"page"}),children:t.isEllipsis?"...":e.jsx("span",{children:t.pageNumber})},t.index)),e.jsx("button",{type:"button","aria-label":"Go forward",disabled:Be,onClick:Fe,className:M({variant:"arrow"}),children:e.jsx(E,{name:"fa-angle-right",iconsVersion:"2",size:"md"})})]})})});l.displayName="Pagination";l.__docgenInfo={description:`Pagination component for navigating between pages.

Displays a row of page buttons with ellipsis when there are many pages.
Supports keyboard navigation and screen readers.

@example
\`\`\`tsx
<Pagination value={1} max={10} onChange={(page) => setPage(page)} />
\`\`\``,methods:[],displayName:"Pagination",props:{value:{required:!0,tsType:{name:"number"},description:"Current page (1-indexed)"},max:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the page changes"},ariaLabel:{required:!1,tsType:{name:"string"},description:`Aria label for the navigation element
@default 'Pagination'`,defaultValue:{value:"'Pagination'",computed:!1}}},composes:["Omit"]};const Ye={title:"Components/Pagination",component:l,tags:["autodocs"],args:{onChange:Xe()},argTypes:{value:{control:{type:"number",min:1},description:"Current page (1-indexed)"},max:{control:{type:"number",min:1},description:"Total number of pages"},onChange:{action:"changed",description:"Callback fired when the page changes"},ariaLabel:{control:"text",description:"Aria label for the navigation element"}}},g={args:{value:1,max:10}},x={args:{value:10,max:20}},v={args:{value:20,max:20}},f={args:{value:2,max:5}},b={args:{value:1,max:1}},h={args:{value:4,max:7}},P={args:{value:1,max:100}},N={render:function(){const[o,i]=c.useState(1),n=15;return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(l,{value:o,max:n,onChange:i}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Page ",o," of ",n]})]})}},y={render:function(){const[o,i]=c.useState(1),n=20;return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(l,{value:o,max:n,onChange:i}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm border rounded hover:bg-surface-secondary",onClick:()=>i(1),children:"First"}),e.jsx("button",{className:"px-3 py-1 text-sm border rounded hover:bg-surface-secondary",onClick:()=>i(10),children:"Page 10"}),e.jsx("button",{className:"px-3 py-1 text-sm border rounded hover:bg-surface-secondary",onClick:()=>i(n),children:"Last"})]})]})}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"First page (left arrow disabled)"}),e.jsx(l,{value:1,max:20})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Middle page (both ellipsis visible)"}),e.jsx(l,{value:10,max:20})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Last page (right arrow disabled)"}),e.jsx(l,{value:20,max:20})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Few pages (no ellipsis)"}),e.jsx(l,{value:3,max:5})]})]})};var L,A,C,I,F;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 1,
    max: 10
  }
}`,...(C=(A=g.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"Default pagination with 10 pages, starting at page 1.",...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.description}}};var V,B,O,R,X;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 10,
    max: 20
  }
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source},description:{story:"Pagination at middle position showing ellipsis on both sides.",...(X=(R=x.parameters)==null?void 0:R.docs)==null?void 0:X.description}}};var q,G,H,z,U;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 20,
    max: 20
  }
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source},description:{story:"Pagination at the last page with left navigation disabled.",...(U=(z=v.parameters)==null?void 0:z.docs)==null?void 0:U.description}}};var $,J,K,Q,W;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 2,
    max: 5
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Pagination with fewer pages than button slots (no ellipsis needed).",...(W=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:W.description}}};var Y,Z,ee,ae,se;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    value: 1,
    max: 1
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Pagination with only a single page.",...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var te,ne,re,ie,oe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    value: 4,
    max: 7
  }
}`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"Pagination with exactly 7 pages (no ellipsis needed).",...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.description}}};var ce,le,de,pe,me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    value: 1,
    max: 100
  }
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Pagination with many pages showing ellipsis.",...(me=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ue,ge,xe,ve,fe;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: function InteractivePagination() {
    const [page, setPage] = useState(1);
    const maxPages = 15;
    return <div className="flex flex-col items-center gap-4">
        <Pagination value={page} max={maxPages} onChange={setPage} />
        <p className="text-sm text-foreground-muted">
          Page {page} of {maxPages}
        </p>
      </div>;
  }
}`,...(xe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:"Interactive example with controlled state.",...(fe=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var be,he,Pe,Ne,ye;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: function NavigationDemo() {
    const [page, setPage] = useState(1);
    const maxPages = 20;
    return <div className="flex flex-col items-center gap-4">
        <Pagination value={page} max={maxPages} onChange={setPage} />
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary" onClick={() => setPage(1)}>
            First
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary" onClick={() => setPage(10)}>
            Page 10
          </button>
          <button className="px-3 py-1 text-sm border rounded hover:bg-surface-secondary" onClick={() => setPage(maxPages)}>
            Last
          </button>
        </div>
      </div>;
  }
}`,...(Pe=(he=y.parameters)==null?void 0:he.docs)==null?void 0:Pe.source},description:{story:"Example showing navigation through pages.",...(ye=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:ye.description}}};var we,je,ke,Se,Me;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-foreground-muted mb-2">First page (left arrow disabled)</p>
        <Pagination value={1} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Middle page (both ellipsis visible)</p>
        <Pagination value={10} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Last page (right arrow disabled)</p>
        <Pagination value={20} max={20} />
      </div>
      <div>
        <p className="text-sm text-foreground-muted mb-2">Few pages (no ellipsis)</p>
        <Pagination value={3} max={5} />
      </div>
    </div>
}`,...(ke=(je=w.parameters)==null?void 0:je.docs)==null?void 0:ke.source},description:{story:"All pagination states for visual comparison.",...(Me=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:Me.description}}};const Ze=["Default","MiddlePage","LastPage","FewPages","SinglePage","SevenPages","ManyPages","Interactive","NavigationDemo","AllStates"];export{w as AllStates,g as Default,f as FewPages,N as Interactive,v as LastPage,P as ManyPages,x as MiddlePage,y as NavigationDemo,h as SevenPages,b as SinglePage,Ze as __namedExportsOrder,Ye as default};
