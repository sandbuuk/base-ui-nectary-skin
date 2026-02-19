import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as ne}from"./index-CsAwyYjM.js";import{r as C}from"./index-pP6CS22B.js";import{S as s,a as t,b as o}from"./SegmentedControl-D-MHpZt1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";const ve={title:"Components/SegmentedControl",component:s,tags:["autodocs"],args:{onChange:ne()},argTypes:{value:{control:"text",description:"Controlled selected value"},defaultValue:{control:"text",description:"Default selected value for uncontrolled usage"},"aria-label":{control:"text",description:"Accessible label for the segmented control"}}},i={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"list",text:"List",isFirst:!0}),e.jsx(t,{value:"grid",text:"Grid"}),e.jsx(t,{value:"table",text:"Table",isLast:!0})]})},d={args:{"aria-label":"Select mode",defaultValue:"monthly"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"monthly",text:"Monthly",isFirst:!0,isLast:!1}),e.jsx(t,{value:"yearly",text:"Yearly",isLast:!0,isFirst:!1})]})},u={args:{"aria-label":"Select day",defaultValue:"mon"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"mon",text:"Mon",isFirst:!0}),e.jsx(t,{value:"tue",text:"Tue"}),e.jsx(t,{value:"wed",text:"Wed"}),e.jsx(t,{value:"thu",text:"Thu"}),e.jsx(t,{value:"fri",text:"Fri"}),e.jsx(t,{value:"sat",text:"Sat"}),e.jsx(t,{value:"sun",text:"Sun",isLast:!0})]})},c={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"list",text:"List",isFirst:!0}),e.jsx(t,{value:"grid",text:"Grid (Disabled)",disabled:!0}),e.jsx(t,{value:"table",text:"Table",isLast:!0})]})},x={args:{"aria-label":"Select view",defaultValue:"grid"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"list",text:"List",isFirst:!0,disabled:!0}),e.jsx(t,{value:"grid",text:"Grid (Selected)",disabled:!0}),e.jsx(t,{value:"table",text:"Table",isLast:!0,disabled:!0})]})},m={args:{"aria-label":"Select view"},render:function(){const[r,l]=C.useState("list");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{"aria-label":"Select view",value:r,onChange:l,children:[e.jsx(t,{value:"list",text:`List ${r==="list"?"(selected)":""}`,isFirst:!0}),e.jsx(t,{value:"grid",text:`Grid ${r==="grid"?"(selected)":""}`}),e.jsx(t,{value:"table",text:`Table ${r==="table"?"(selected)":""}`,isLast:!0})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("list"),children:"Select List"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("grid"),children:"Select Grid"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>l("table"),children:"Select Table"})]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",r]})]})}},p={args:{"aria-label":"Select time period",defaultValue:"day"},render:a=>e.jsxs(o,{...a,children:[e.jsx(o.Option,{value:"day",text:"Day",isFirst:!0}),e.jsx(o.Option,{value:"week",text:"Week"}),e.jsx(o.Option,{value:"month",text:"Month"}),e.jsx(o.Option,{value:"year",text:"Year",isLast:!0})]})},g={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsxs(s,{...a,children:[e.jsx(t,{value:"list",text:"List",icon:e.jsx("span",{className:"text-[16px]",children:"☰"}),isFirst:!0}),e.jsx(t,{value:"grid",text:"Grid",icon:e.jsx("span",{className:"text-[16px]",children:"▦"})}),e.jsx(t,{value:"table",text:"Table",icon:e.jsx("span",{className:"text-[16px]",children:"◫"}),isLast:!0})]})},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Use Tab to focus, Arrow keys to navigate, Space/Enter to select"}),e.jsxs(s,{"aria-label":"Keyboard navigation demo",defaultValue:"option1",children:[e.jsx(t,{value:"option1",text:"Option 1",isFirst:!0}),e.jsx(t,{value:"option2",text:"Option 2"}),e.jsx(t,{value:"option3",text:"Option 3"}),e.jsx(t,{value:"option4",text:"Option 4",isLast:!0})]})]})},b={args:{"aria-label":"Select view",defaultValue:"list"},render:a=>e.jsx("div",{className:"w-[300px]",children:e.jsxs(s,{...a,children:[e.jsx(t,{value:"list",text:"List View",isFirst:!0}),e.jsx(t,{value:"grid",text:"Grid View"}),e.jsx(t,{value:"table",text:"Table View",isLast:!0})]})})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default"}),e.jsxs(s,{"aria-label":"Default options",defaultValue:"option1",children:[e.jsx(t,{value:"option1",text:"Selected",isFirst:!0}),e.jsx(t,{value:"option2",text:"Unselected"}),e.jsx(t,{value:"option3",text:"Unselected",isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"With Disabled"}),e.jsxs(s,{"aria-label":"With disabled",defaultValue:"option1",children:[e.jsx(t,{value:"option1",text:"Selected",isFirst:!0}),e.jsx(t,{value:"option2",text:"Disabled",disabled:!0}),e.jsx(t,{value:"option3",text:"Enabled",isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"All Disabled"}),e.jsxs(s,{"aria-label":"All disabled",defaultValue:"option2",children:[e.jsx(t,{value:"option1",text:"Disabled",disabled:!0,isFirst:!0}),e.jsx(t,{value:"option2",text:"Disabled Selected",disabled:!0}),e.jsx(t,{value:"option3",text:"Disabled",disabled:!0,isLast:!0})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"No Selection"}),e.jsxs(s,{"aria-label":"No selection",children:[e.jsx(t,{value:"option1",text:"Option 1",isFirst:!0}),e.jsx(t,{value:"option2",text:"Option 2"}),e.jsx(t,{value:"option3",text:"Option 3",isLast:!0})]})]})]})},f={render:function(){const[r,l]=C.useState("list");return e.jsxs("div",{className:"flex flex-col gap-4 p-4 border border-border rounded-md",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-lg font-semibold text-foreground",children:"Files"}),e.jsxs(s,{"aria-label":"Select view type",value:r,onChange:l,className:"w-auto",children:[e.jsx(t,{value:"list",text:"List",isFirst:!0}),e.jsx(t,{value:"grid",text:"Grid",isLast:!0})]})]}),e.jsx("div",{className:"p-4 bg-surface-secondary rounded-md min-h-[100px] flex items-center justify-center",children:e.jsxs("p",{className:"text-foreground-muted",children:["Showing files in ",e.jsx("strong",{children:r})," view"]})})]})}},h={render:function(){const[r,l]=C.useState("monthly"),n={monthly:{price:"$29",period:"/month"},yearly:{price:"$290",period:"/year",savings:"Save 17%"}}[r];return e.jsxs("div",{className:"flex flex-col gap-4 p-6 border border-border rounded-lg max-w-[300px]",children:[e.jsx("h2",{className:"text-lg font-semibold text-foreground text-center",children:"Pro Plan"}),e.jsxs(s,{"aria-label":"Select billing period",value:r,onChange:l,children:[e.jsx(t,{value:"monthly",text:"Monthly",isFirst:!0}),e.jsx(t,{value:"yearly",text:"Yearly",isLast:!0})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-3xl font-bold text-foreground",children:n.price}),e.jsx("span",{className:"text-foreground-muted",children:n.period}),"savings"in n&&e.jsx("p",{className:"text-sm text-success mt-1",children:n.savings})]}),e.jsx("button",{className:"w-full px-4 py-2 bg-primary text-primary-foreground rounded-md",children:"Subscribe"})]})}};var j,y,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst />
      <SegmentedControlOption value="grid" text="Grid" />
      <SegmentedControlOption value="table" text="Table" isLast />
    </SegmentedControl>
}`,...(O=(y=i.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var N,w,L;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select mode',
    defaultValue: 'monthly'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="monthly" text="Monthly" isFirst isLast={false} />
      <SegmentedControlOption value="yearly" text="Yearly" isLast isFirst={false} />
    </SegmentedControl>
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var V,F,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select day',
    defaultValue: 'mon'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="mon" text="Mon" isFirst />
      <SegmentedControlOption value="tue" text="Tue" />
      <SegmentedControlOption value="wed" text="Wed" />
      <SegmentedControlOption value="thu" text="Thu" />
      <SegmentedControlOption value="fri" text="Fri" />
      <SegmentedControlOption value="sat" text="Sat" />
      <SegmentedControlOption value="sun" text="Sun" isLast />
    </SegmentedControl>
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var G,T,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst />
      <SegmentedControlOption value="grid" text="Grid (Disabled)" disabled />
      <SegmentedControlOption value="table" text="Table" isLast />
    </SegmentedControl>
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,A,E;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'grid'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" isFirst disabled />
      <SegmentedControlOption value="grid" text="Grid (Selected)" disabled />
      <SegmentedControlOption value="table" text="Table" isLast disabled />
    </SegmentedControl>
}`,...(E=(A=x.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var P,M,$;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view'
  },
  render: function ControlledSegmentedControl() {
    const [value, setValue] = useState('list');
    return <div className="flex flex-col gap-4">
        <SegmentedControl aria-label="Select view" value={value} onChange={setValue}>
          <SegmentedControlOption value="list" text={\`List \${value === 'list' ? '(selected)' : ''}\`} isFirst />
          <SegmentedControlOption value="grid" text={\`Grid \${value === 'grid' ? '(selected)' : ''}\`} />
          <SegmentedControlOption value="table" text={\`Table \${value === 'table' ? '(selected)' : ''}\`} isLast />
        </SegmentedControl>
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
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var U,Y,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select time period',
    defaultValue: 'day'
  },
  render: args => <SegmentedControlGroup {...args}>
      <SegmentedControlGroup.Option value="day" text="Day" isFirst />
      <SegmentedControlGroup.Option value="week" text="Week" />
      <SegmentedControlGroup.Option value="month" text="Month" />
      <SegmentedControlGroup.Option value="year" text="Year" isLast />
    </SegmentedControlGroup>
}`,...(B=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var K,I,_;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <SegmentedControl {...args}>
      <SegmentedControlOption value="list" text="List" icon={<span className="text-[16px]">&#9776;</span>} isFirst />
      <SegmentedControlOption value="grid" text="Grid" icon={<span className="text-[16px]">&#9638;</span>} />
      <SegmentedControlOption value="table" text="Table" icon={<span className="text-[16px]">&#9707;</span>} isLast />
    </SegmentedControl>
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var R,q,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow keys to navigate, Space/Enter to select
      </p>
      <SegmentedControl aria-label="Keyboard navigation demo" defaultValue="option1">
        <SegmentedControlOption value="option1" text="Option 1" isFirst />
        <SegmentedControlOption value="option2" text="Option 2" />
        <SegmentedControlOption value="option3" text="Option 3" />
        <SegmentedControlOption value="option4" text="Option 4" isLast />
      </SegmentedControl>
    </div>
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var H,J,Q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select view',
    defaultValue: 'list'
  },
  render: args => <div className="w-[300px]">
      <SegmentedControl {...args}>
        <SegmentedControlOption value="list" text="List View" isFirst />
        <SegmentedControlOption value="grid" text="Grid View" />
        <SegmentedControlOption value="table" text="Table View" isLast />
      </SegmentedControl>
    </div>
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default</h3>
        <SegmentedControl aria-label="Default options" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Selected" isFirst />
          <SegmentedControlOption value="option2" text="Unselected" />
          <SegmentedControlOption value="option3" text="Unselected" isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled</h3>
        <SegmentedControl aria-label="With disabled" defaultValue="option1">
          <SegmentedControlOption value="option1" text="Selected" isFirst />
          <SegmentedControlOption value="option2" text="Disabled" disabled />
          <SegmentedControlOption value="option3" text="Enabled" isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <SegmentedControl aria-label="All disabled" defaultValue="option2">
          <SegmentedControlOption value="option1" text="Disabled" disabled isFirst />
          <SegmentedControlOption value="option2" text="Disabled Selected" disabled />
          <SegmentedControlOption value="option3" text="Disabled" disabled isLast />
        </SegmentedControl>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">No Selection</h3>
        <SegmentedControl aria-label="No selection">
          <SegmentedControlOption value="option1" text="Option 1" isFirst />
          <SegmentedControlOption value="option2" text="Option 2" />
          <SegmentedControlOption value="option3" text="Option 3" isLast />
        </SegmentedControl>
      </div>
    </div>
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: function ViewSwitcherExample() {
    const [view, setView] = useState('list');
    return <div className="flex flex-col gap-4 p-4 border border-border rounded-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-foreground">Files</h2>
          <SegmentedControl aria-label="Select view type" value={view} onChange={setView} className="w-auto">
            <SegmentedControlOption value="list" text="List" isFirst />
            <SegmentedControlOption value="grid" text="Grid" isLast />
          </SegmentedControl>
        </div>
        <div className="p-4 bg-surface-secondary rounded-md min-h-[100px] flex items-center justify-center">
          <p className="text-foreground-muted">
            Showing files in <strong>{view}</strong> view
          </p>
        </div>
      </div>;
  }
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,le,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: function BillingPeriodExample() {
    const [period, setPeriod] = useState('monthly');
    const prices = {
      monthly: {
        price: '$29',
        period: '/month'
      },
      yearly: {
        price: '$290',
        period: '/year',
        savings: 'Save 17%'
      }
    };
    const current = prices[period as keyof typeof prices];
    return <div className="flex flex-col gap-4 p-6 border border-border rounded-lg max-w-[300px]">
        <h2 className="text-lg font-semibold text-foreground text-center">Pro Plan</h2>
        <SegmentedControl aria-label="Select billing period" value={period} onChange={setPeriod}>
          <SegmentedControlOption value="monthly" text="Monthly" isFirst />
          <SegmentedControlOption value="yearly" text="Yearly" isLast />
        </SegmentedControl>
        <div className="text-center">
          <span className="text-3xl font-bold text-foreground">{current.price}</span>
          <span className="text-foreground-muted">{current.period}</span>
          {'savings' in current && <p className="text-sm text-success mt-1">{current.savings}</p>}
        </div>
        <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md">
          Subscribe
        </button>
      </div>;
  }
}`,...(oe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const be=["Default","TwoOptions","ManyOptions","WithDisabledOption","AllDisabled","Controlled","UsingCompoundComponent","WithIcons","KeyboardNavigation","FixedWidth","AllStates","ViewSwitcher","BillingPeriod"];export{x as AllDisabled,S as AllStates,h as BillingPeriod,m as Controlled,i as Default,b as FixedWidth,v as KeyboardNavigation,u as ManyOptions,d as TwoOptions,p as UsingCompoundComponent,f as ViewSwitcher,c as WithDisabledOption,g as WithIcons,be as __namedExportsOrder,ve as default};
