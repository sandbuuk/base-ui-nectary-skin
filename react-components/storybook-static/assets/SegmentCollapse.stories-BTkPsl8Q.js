import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as ue}from"./index-CsAwyYjM.js";import{r}from"./index-pP6CS22B.js";import{c as xe}from"./cn-BLSKlp9E.js";import{B as ge}from"./Button-SrxEgsda.js";import{I as fe}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./Spinner-Bh5BG8Cg.js";const a=r.forwardRef(({className:g,value:s,defaultValue:n=!1,onChange:o,"aria-label":b,iconSize:t="32px",style:f,...le},ie)=>{const[de,ce]=r.useState(n),h=s!==void 0,v=h?s:de,pe=r.useCallback(()=>{const C=!v;h||ce(C),o==null||o(C)},[v,h,o]),me=v?"rotate(0deg)":"rotate(180deg)";return e.jsx(ge,{ref:ie,role:"checkbox","aria-checked":v,"aria-label":b,size:"s",onClick:pe,className:xe("block",g),style:{"--sinch-global-size-icon":t,...f},icon:e.jsx(fe,{name:"fa-chevron-down",iconsVersion:"2",style:{transform:me,willChange:"transform"}}),...le})});a.displayName="SegmentCollapse";a.__docgenInfo={description:`SegmentCollapse is a toggle button used to expand/collapse sections.

It displays a chevron icon that rotates based on the expanded state.
When collapsed (value=false), the chevron points down.
When expanded (value=true), the chevron points up.

Supports both controlled and uncontrolled usage patterns.

@example
\`\`\`tsx
// Controlled
const [expanded, setExpanded] = useState(false)
<SegmentCollapse
  value={expanded}
  onChange={setExpanded}
  aria-label="Toggle section"
/>

// Uncontrolled
<SegmentCollapse
  defaultValue={false}
  aria-label="Toggle section"
/>
\`\`\``,methods:[],displayName:"SegmentCollapse",props:{value:{required:!1,tsType:{name:"boolean"},description:"Whether the section is expanded (true) or collapsed (false)"},defaultValue:{required:!1,tsType:{name:"boolean"},description:"Default value for uncontrolled mode",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the toggle state changes"},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label for the toggle button"},iconSize:{required:!1,tsType:{name:"string"},description:"Custom icon size override",defaultValue:{value:"'32px'",computed:!1}}},composes:["Omit"]};const we={title:"Components/SegmentCollapse",component:a,tags:["autodocs"],args:{onChange:ue(),"aria-label":"Toggle section"},argTypes:{value:{control:"boolean",description:"Expanded state (controlled)"},defaultValue:{control:"boolean",description:"Default expanded state (uncontrolled)"},onChange:{description:"Callback fired when toggle state changes"},"aria-label":{control:"text",description:"Accessible label for the button"},iconSize:{control:"text",description:"Custom icon size override"}}},l={args:{"aria-label":"Toggle section"}},i={args:{value:!0,"aria-label":"Toggle section"}},d={args:{value:!1,"aria-label":"Toggle section"}},c={render:function(){const[s,n]=r.useState(!1);return e.jsxs("div",{className:"flex flex-col items-start gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{value:s,onChange:n,"aria-label":"Toggle content visibility"}),e.jsx("span",{className:"text-sm text-foreground-muted",children:s?"Expanded":"Collapsed"})]}),s&&e.jsx("div",{className:"p-4 bg-surface-secondary rounded-md",children:e.jsx("p",{className:"text-foreground",children:"This content is visible when expanded."})})]})}},p={args:{defaultValue:!1,"aria-label":"Toggle section"}},m={render:function(){const[s,n]=r.useState(!1);return e.jsxs("div",{className:"w-64 border border-border rounded-md overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-surface-secondary",children:[e.jsx("span",{className:"font-medium text-foreground",children:"Section Title"}),e.jsx(a,{value:s,onChange:n,"aria-label":s?"Collapse section":"Expand section"})]}),s&&e.jsx("div",{className:"p-3 bg-surface-primary",children:e.jsx("p",{className:"text-sm text-foreground-muted",children:"This is the collapsible content that appears when the section is expanded."})})]})}},u={render:function(){const[s,n]=r.useState({section1:!0,section2:!1,section3:!1}),o=t=>{n(f=>({...f,[t]:!f[t]}))},b=[{id:"section1",title:"Section One",content:"Content for section one."},{id:"section2",title:"Section Two",content:"Content for section two."},{id:"section3",title:"Section Three",content:"Content for section three."}];return e.jsx("div",{className:"w-72 border border-border rounded-md divide-y divide-border",children:b.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-surface-secondary",children:[e.jsx("span",{className:"font-medium text-foreground",children:t.title}),e.jsx(a,{value:s[t.id],onChange:()=>o(t.id),"aria-label":`Toggle ${t.title}`})]}),s[t.id]&&e.jsx("div",{className:"p-3 bg-surface-primary",children:e.jsx("p",{className:"text-sm text-foreground-muted",children:t.content})})]},t.id))})}},x={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{value:!1,"aria-label":"Collapsed state"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Collapsed"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{value:!0,"aria-label":"Expanded state"}),e.jsx("span",{className:"text-xs text-foreground-muted",children:"Expanded"})]})]})};var S,N,y,E,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Toggle section'
  }
}`,...(y=(N=l.parameters)==null?void 0:N.docs)==null?void 0:y.source},description:{story:"Default collapsed state",...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var w,T,k,V,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: true,
    'aria-label': 'Toggle section'
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Expanded state (chevron points up)",...(I=(V=i.parameters)==null?void 0:V.docs)==null?void 0:I.description}}};var z,q,A,D,M;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: false,
    'aria-label': 'Toggle section'
  }
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"Collapsed state (chevron points down)",...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.description}}};var R,W,O,U,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [expanded, setExpanded] = useState(false);
    return <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <SegmentCollapse value={expanded} onChange={setExpanded} aria-label="Toggle content visibility" />
          <span className="text-sm text-foreground-muted">
            {expanded ? 'Expanded' : 'Collapsed'}
          </span>
        </div>
        {expanded && <div className="p-4 bg-surface-secondary rounded-md">
            <p className="text-foreground">
              This content is visible when expanded.
            </p>
          </div>}
      </div>;
  }
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"Interactive controlled example showing usage with React state",...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var B,$,F,G,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: false,
    'aria-label': 'Toggle section'
  }
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source},description:{story:"Uncontrolled example with default value",...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,L,P,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function CollapsibleContentExample() {
    const [isExpanded, setIsExpanded] = useState(false);
    return <div className="w-64 border border-border rounded-md overflow-hidden">
        <div className="flex items-center justify-between p-3 bg-surface-secondary">
          <span className="font-medium text-foreground">Section Title</span>
          <SegmentCollapse value={isExpanded} onChange={setIsExpanded} aria-label={isExpanded ? 'Collapse section' : 'Expand section'} />
        </div>
        {isExpanded && <div className="p-3 bg-surface-primary">
            <p className="text-sm text-foreground-muted">
              This is the collapsible content that appears when the section is expanded.
            </p>
          </div>}
      </div>;
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"Example with a collapsible section",...(Q=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var X,Y,Z,ee,se;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: function MultipleSectionsExample() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
      section1: true,
      section2: false,
      section3: false
    });
    const toggleSection = (section: string) => {
      setExpanded(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };
    const sections = [{
      id: 'section1',
      title: 'Section One',
      content: 'Content for section one.'
    }, {
      id: 'section2',
      title: 'Section Two',
      content: 'Content for section two.'
    }, {
      id: 'section3',
      title: 'Section Three',
      content: 'Content for section three.'
    }];
    return <div className="w-72 border border-border rounded-md divide-y divide-border">
        {sections.map(section => <div key={section.id}>
            <div className="flex items-center justify-between p-3 bg-surface-secondary">
              <span className="font-medium text-foreground">{section.title}</span>
              <SegmentCollapse value={expanded[section.id]} onChange={() => toggleSection(section.id)} aria-label={\`Toggle \${section.title}\`} />
            </div>
            {expanded[section.id] && <div className="p-3 bg-surface-primary">
                <p className="text-sm text-foreground-muted">{section.content}</p>
              </div>}
          </div>)}
      </div>;
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Multiple collapsible sections (accordion-like behavior)",...(se=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:se.description}}};var te,ae,ne,oe,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <SegmentCollapse value={false} aria-label="Collapsed state" />
        <span className="text-xs text-foreground-muted">Collapsed</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SegmentCollapse value={true} aria-label="Expanded state" />
        <span className="text-xs text-foreground-muted">Expanded</span>
      </div>
    </div>
}`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"All states side by side for visual comparison",...(re=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};const Te=["Default","Expanded","Collapsed","Controlled","Uncontrolled","WithCollapsibleContent","MultipleSections","AllStates"];export{x as AllStates,d as Collapsed,c as Controlled,l as Default,i as Expanded,u as MultipleSections,p as Uncontrolled,m as WithCollapsibleContent,Te as __namedExportsOrder,we as default};
