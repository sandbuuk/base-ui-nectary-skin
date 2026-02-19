import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as re}from"./index-CsAwyYjM.js";import{r as oe}from"./index-pP6CS22B.js";import{T as s,a,b as o,c as n}from"./Tabs-C_riYYDM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./Tooltip-WtcvfBIx.js";const i=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{color:"var(--sinch-global-color-icon, currentColor)"},children:e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}),b=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{color:"var(--sinch-global-color-icon, currentColor)"},children:e.jsx("path",{d:"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),N=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{color:"var(--sinch-global-color-icon, currentColor)"},children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})}),ve={title:"Components/Tabs",component:s,tags:["autodocs"],args:{onChange:re()},argTypes:{value:{control:"text",description:"Controlled selected value"},defaultValue:{control:"text",description:"Default selected value for uncontrolled usage"},"aria-label":{control:"text",description:"Accessible label for the tab list"}}},c={args:{"aria-label":"Navigation tabs",defaultValue:"tab1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"tab1",text:"Tab 1"}),e.jsx(a,{value:"tab2",text:"Tab 2"}),e.jsx(a,{value:"tab3",text:"Tab 3"})]})},d={args:{"aria-label":"Navigation tabs",defaultValue:"home"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"home",text:"Home",icon:e.jsx(i,{})}),e.jsx(a,{value:"settings",text:"Settings",icon:e.jsx(b,{})}),e.jsx(a,{value:"profile",text:"Profile",icon:e.jsx(N,{})})]})},u={args:{"aria-label":"Icon navigation",defaultValue:"home"},render:t=>e.jsxs(s,{...t,children:[e.jsx(o,{value:"home","aria-label":"Home",icon:e.jsx(i,{})}),e.jsx(o,{value:"settings","aria-label":"Settings",icon:e.jsx(b,{})}),e.jsx(o,{value:"profile","aria-label":"Profile",icon:e.jsx(N,{})})]})},x={args:{"aria-label":"Navigation tabs",defaultValue:"tab1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"tab1",text:"Tab 1"}),e.jsx(a,{value:"tab2",text:"Tab 2 (Disabled)",disabled:!0}),e.jsx(a,{value:"tab3",text:"Tab 3"})]})},m={args:{"aria-label":"Navigation tabs",defaultValue:"tab1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"tab1",text:"Tab 1",disabled:!0}),e.jsx(a,{value:"tab2",text:"Tab 2",disabled:!0}),e.jsx(a,{value:"tab3",text:"Tab 3",disabled:!0})]})},v={args:{"aria-label":"Controlled tabs"},render:function(){const[l,r]=oe.useState("tab1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{"aria-label":"Controlled tabs",value:l,onChange:r,children:[e.jsx(a,{value:"tab1",text:`Tab 1 ${l==="tab1"?"(active)":""}`}),e.jsx(a,{value:"tab2",text:`Tab 2 ${l==="tab2"?"(active)":""}`}),e.jsx(a,{value:"tab3",text:`Tab 3 ${l==="tab3"?"(active)":""}`})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>r("tab1"),children:"Select Tab 1"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>r("tab2"),children:"Select Tab 2"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md",onClick:()=>r("tab3"),children:"Select Tab 3"})]}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Current value: ",e.jsx("strong",{children:l})]})]})}},p={args:{"aria-label":"Navigation tabs",defaultValue:"overview"},render:t=>e.jsxs(n,{...t,children:[e.jsx(n.Option,{value:"overview",text:"Overview"}),e.jsx(n.Option,{value:"analytics",text:"Analytics"}),e.jsx(n.Option,{value:"reports",text:"Reports"}),e.jsx(n.Option,{value:"notifications",text:"Notifications"})]})},g={args:{"aria-label":"Mixed navigation",defaultValue:"home"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"home",text:"Home",icon:e.jsx(i,{})}),e.jsx(a,{value:"dashboard",text:"Dashboard"}),e.jsx(o,{value:"settings","aria-label":"Settings",icon:e.jsx(b,{})})]})},f={args:{"aria-label":"Navigation tabs",defaultValue:"tab1"},render:t=>e.jsxs(s,{...t,children:[e.jsx(a,{value:"tab1",text:"Overview"}),e.jsx(a,{value:"tab2",text:"Analytics"}),e.jsx(a,{value:"tab3",text:"Reports"}),e.jsx(a,{value:"tab4",text:"Notifications"}),e.jsx(a,{value:"tab5",text:"Settings"}),e.jsx(a,{value:"tab6",text:"Help"})]})},T={render:function(){const[l,r]=oe.useState("tab1");return e.jsxs("div",{className:"w-full",children:[e.jsxs(s,{"aria-label":"Content tabs",value:l,onChange:r,children:[e.jsx(a,{value:"tab1",text:"Account"}),e.jsx(a,{value:"tab2",text:"Password"}),e.jsx(a,{value:"tab3",text:"Notifications"})]}),e.jsxs("div",{className:"p-4 border border-t-0 border-border rounded-b-md",children:[l==="tab1"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-foreground",children:"Account Settings"}),e.jsx("p",{className:"text-foreground-muted",children:"Manage your account settings and preferences."})]}),l==="tab2"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-foreground",children:"Password Settings"}),e.jsx("p",{className:"text-foreground-muted",children:"Change your password and security settings."})]}),l==="tab3"&&e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2 text-foreground",children:"Notification Settings"}),e.jsx("p",{className:"text-foreground-muted",children:"Configure your notification preferences."})]})]})]})}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-foreground-muted mb-2",children:"Use Tab to focus, Arrow Left/Right to navigate between tabs"}),e.jsxs(s,{"aria-label":"Keyboard navigation demo",defaultValue:"tab1",children:[e.jsx(a,{value:"tab1",text:"Tab 1"}),e.jsx(a,{value:"tab2",text:"Tab 2"}),e.jsx(a,{value:"tab3",text:"Tab 3 (Disabled)",disabled:!0}),e.jsx(a,{value:"tab4",text:"Tab 4"})]})]})},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Default Text Tabs"}),e.jsxs(s,{"aria-label":"Text tabs",defaultValue:"tab1",children:[e.jsx(a,{value:"tab1",text:"Selected"}),e.jsx(a,{value:"tab2",text:"Unselected"}),e.jsx(a,{value:"tab3",text:"Another"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Tabs with Icons"}),e.jsxs(s,{"aria-label":"Tabs with icons",defaultValue:"home",children:[e.jsx(a,{value:"home",text:"Home",icon:e.jsx(i,{})}),e.jsx(a,{value:"settings",text:"Settings",icon:e.jsx(b,{})}),e.jsx(a,{value:"profile",text:"Profile",icon:e.jsx(N,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"Icon-only Tabs"}),e.jsxs(s,{"aria-label":"Icon tabs",defaultValue:"home",children:[e.jsx(o,{value:"home","aria-label":"Home",icon:e.jsx(i,{})}),e.jsx(o,{value:"settings","aria-label":"Settings",icon:e.jsx(b,{})}),e.jsx(o,{value:"profile","aria-label":"Profile",icon:e.jsx(N,{})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"With Disabled Tab"}),e.jsxs(s,{"aria-label":"Tabs with disabled",defaultValue:"tab1",children:[e.jsx(a,{value:"tab1",text:"Enabled"}),e.jsx(a,{value:"tab2",text:"Disabled",disabled:!0}),e.jsx(a,{value:"tab3",text:"Enabled"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-foreground",children:"All Disabled"}),e.jsxs(s,{"aria-label":"All disabled tabs",defaultValue:"tab1",children:[e.jsx(a,{value:"tab1",text:"Disabled Selected",disabled:!0}),e.jsx(a,{value:"tab2",text:"Disabled",disabled:!0})]})]})]})};var O,S,y;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" />
      <TabsOption value="tab2" text="Tab 2" />
      <TabsOption value="tab3" text="Tab 3" />
    </Tabs>
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var I,C,V;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'home'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="home" text="Home" icon={<HomeIcon />} />
      <TabsOption value="settings" text="Settings" icon={<SettingsIcon />} />
      <TabsOption value="profile" text="Profile" icon={<UserIcon />} />
    </Tabs>
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var w,D,A;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Icon navigation',
    defaultValue: 'home'
  },
  render: args => <Tabs {...args}>
      <TabsIconOption value="home" aria-label="Home" icon={<HomeIcon />} />
      <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
      <TabsIconOption value="profile" aria-label="Profile" icon={<UserIcon />} />
    </Tabs>
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var H,P,M;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" />
      <TabsOption value="tab2" text="Tab 2 (Disabled)" disabled />
      <TabsOption value="tab3" text="Tab 3" />
    </Tabs>
}`,...(M=(P=x.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var U,E,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="tab1" text="Tab 1" disabled />
      <TabsOption value="tab2" text="Tab 2" disabled />
      <TabsOption value="tab3" text="Tab 3" disabled />
    </Tabs>
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var W,R,k;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Controlled tabs'
  },
  render: function ControlledTabs() {
    const [value, setValue] = useState('tab1');
    return <div className="flex flex-col gap-4">
        <Tabs aria-label="Controlled tabs" value={value} onChange={setValue}>
          <TabsOption value="tab1" text={\`Tab 1 \${value === 'tab1' ? '(active)' : ''}\`} />
          <TabsOption value="tab2" text={\`Tab 2 \${value === 'tab2' ? '(active)' : ''}\`} />
          <TabsOption value="tab3" text={\`Tab 3 \${value === 'tab3' ? '(active)' : ''}\`} />
        </Tabs>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('tab1')}>
            Select Tab 1
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('tab2')}>
            Select Tab 2
          </button>
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md" onClick={() => setValue('tab3')}>
            Select Tab 3
          </button>
        </div>
        <p className="text-sm text-foreground-muted">
          Current value: <strong>{value}</strong>
        </p>
      </div>;
  }
}`,...(k=(R=v.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var $,z,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'overview'
  },
  render: args => <TabsGroup {...args}>
      <TabsGroup.Option value="overview" text="Overview" />
      <TabsGroup.Option value="analytics" text="Analytics" />
      <TabsGroup.Option value="reports" text="Reports" />
      <TabsGroup.Option value="notifications" text="Notifications" />
    </TabsGroup>
}`,...(K=(z=p.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var L,B,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Mixed navigation',
    defaultValue: 'home'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="home" text="Home" icon={<HomeIcon />} />
      <TabsOption value="dashboard" text="Dashboard" />
      <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
    </Tabs>
}`,...(_=(B=g.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var q,F,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Navigation tabs',
    defaultValue: 'tab1'
  },
  render: args => <Tabs {...args}>
      <TabsOption value="tab1" text="Overview" />
      <TabsOption value="tab2" text="Analytics" />
      <TabsOption value="tab3" text="Reports" />
      <TabsOption value="tab4" text="Notifications" />
      <TabsOption value="tab5" text="Settings" />
      <TabsOption value="tab6" text="Help" />
    </Tabs>
}`,...(J=(F=f.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function TabPanelsExample() {
    const [activeTab, setActiveTab] = useState('tab1');
    return <div className="w-full">
        <Tabs aria-label="Content tabs" value={activeTab} onChange={setActiveTab}>
          <TabsOption value="tab1" text="Account" />
          <TabsOption value="tab2" text="Password" />
          <TabsOption value="tab3" text="Notifications" />
        </Tabs>
        <div className="p-4 border border-t-0 border-border rounded-b-md">
          {activeTab === 'tab1' && <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Account Settings</h3>
              <p className="text-foreground-muted">Manage your account settings and preferences.</p>
            </div>}
          {activeTab === 'tab2' && <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Password Settings</h3>
              <p className="text-foreground-muted">Change your password and security settings.</p>
            </div>}
          {activeTab === 'tab3' && <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Notification Settings</h3>
              <p className="text-foreground-muted">Configure your notification preferences.</p>
            </div>}
        </div>
      </div>;
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground-muted mb-2">
        Use Tab to focus, Arrow Left/Right to navigate between tabs
      </p>
      <Tabs aria-label="Keyboard navigation demo" defaultValue="tab1">
        <TabsOption value="tab1" text="Tab 1" />
        <TabsOption value="tab2" text="Tab 2" />
        <TabsOption value="tab3" text="Tab 3 (Disabled)" disabled />
        <TabsOption value="tab4" text="Tab 4" />
      </Tabs>
    </div>
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,le;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Default Text Tabs</h3>
        <Tabs aria-label="Text tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Selected" />
          <TabsOption value="tab2" text="Unselected" />
          <TabsOption value="tab3" text="Another" />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Tabs with Icons</h3>
        <Tabs aria-label="Tabs with icons" defaultValue="home">
          <TabsOption value="home" text="Home" icon={<HomeIcon />} />
          <TabsOption value="settings" text="Settings" icon={<SettingsIcon />} />
          <TabsOption value="profile" text="Profile" icon={<UserIcon />} />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">Icon-only Tabs</h3>
        <Tabs aria-label="Icon tabs" defaultValue="home">
          <TabsIconOption value="home" aria-label="Home" icon={<HomeIcon />} />
          <TabsIconOption value="settings" aria-label="Settings" icon={<SettingsIcon />} />
          <TabsIconOption value="profile" aria-label="Profile" icon={<UserIcon />} />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">With Disabled Tab</h3>
        <Tabs aria-label="Tabs with disabled" defaultValue="tab1">
          <TabsOption value="tab1" text="Enabled" />
          <TabsOption value="tab2" text="Disabled" disabled />
          <TabsOption value="tab3" text="Enabled" />
        </Tabs>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-foreground">All Disabled</h3>
        <Tabs aria-label="All disabled tabs" defaultValue="tab1">
          <TabsOption value="tab1" text="Disabled Selected" disabled />
          <TabsOption value="tab2" text="Disabled" disabled />
        </Tabs>
      </div>
    </div>
}`,...(le=(se=j.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const pe=["Default","WithIcons","IconOnly","WithDisabledTab","AllDisabled","Controlled","UsingTabsGroup","MixedTabs","ManyTabs","WithTabPanels","KeyboardNavigation","AllStates"];export{m as AllDisabled,j as AllStates,v as Controlled,c as Default,u as IconOnly,h as KeyboardNavigation,f as ManyTabs,g as MixedTabs,p as UsingTabsGroup,x as WithDisabledTab,d as WithIcons,T as WithTabPanels,pe as __namedExportsOrder,ve as default};
