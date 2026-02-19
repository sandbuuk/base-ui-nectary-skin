import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{f as Se}from"./index-CsAwyYjM.js";import{c as Ne}from"./index-EXTQMK5R.js";import{r as je}from"./index-pP6CS22B.js";import{c as De}from"./cn-BLSKlp9E.js";import{I as S}from"./Icon-3RA0aubP.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Le=Ne(["font-[var(--sinch-comp-link-default-font-initial)]","rounded-[0.5em]","whitespace-nowrap","transition-colors","outline-none","focus-visible:outline-2","focus-visible:outline-[var(--sinch-comp-link-color-default-outline-focus)]","focus-visible:outline-offset-2"],{variants:{standalone:{true:["block","w-fit","font-[var(--sinch-comp-link-standalone-font-initial)]","no-underline"],false:["inline","[text-decoration:var(--sinch-comp-link-default-text-decoration-initial)]","text-[var(--sinch-comp-link-color-default-text-initial)]","hover:[text-decoration:var(--sinch-comp-link-default-text-decoration-hover)]","hover:text-[var(--sinch-comp-link-color-default-text-hover)]"]},disabled:{true:["text-[var(--sinch-comp-link-color-disabled-text-initial)]","pointer-events-none","cursor-default","[text-decoration:var(--sinch-comp-link-default-text-decoration-disabled)]"],false:[]}},compoundVariants:[{standalone:!0,disabled:!1,className:["text-[var(--sinch-comp-link-color-default-text-initial)]","hover:text-[var(--sinch-comp-link-color-default-text-hover)]"]}],defaultVariants:{standalone:!1,disabled:!1}}),a=je.forwardRef(({className:pe,text:he,href:N,useHistory:j=!1,disabled:n=!1,external:t=!1,standalone:r=!1,preventDefault:xe,onClick:k,children:ue,...fe},ge)=>{const ve=xe??j,ke=b=>{if(n){b.preventDefault();return}ve&&(b.preventDefault(),j&&history.pushState({},"",N)),k==null||k(b)},be=n?"[--sinch-global-color-icon:var(--sinch-comp-link-color-disabled-icon-initial)]":"[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-initial)] hover:[--sinch-global-color-icon:var(--sinch-comp-link-color-default-icon-hover)]";return e.jsxs("a",{ref:ge,href:n?void 0:N,target:t?"_blank":void 0,rel:t?"noopener noreferrer":void 0,referrerPolicy:"no-referrer","aria-disabled":n||void 0,onClick:ke,className:De(Le({standalone:r,disabled:n}),be,pe),...fe,children:[e.jsx("span",{className:"whitespace-[var(--sinch-global-text-white-space,normal)]",children:he??ue}),r&&t&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:" "}),e.jsx(S,{name:"fa-arrow-up-right",className:"inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"})]}),r&&!t&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:" "}),e.jsx(S,{name:"fa-arrow-right",className:"inline-block align-[-0.4em] [--sinch-global-size-icon:1.5em]"})]}),!r&&t&&e.jsx(S,{name:"fa-arrow-up-right",className:"inline-block ml-1 align-[-0.2em] h-[1em] [--sinch-global-size-icon:1em]"})]})});a.displayName="Link";a.__docgenInfo={description:`Link component for navigation within the application or to external URLs.

Supports inline and standalone display modes, external link indicators,
and SPA-friendly history navigation.`,methods:[],displayName:"Link",props:{text:{required:!1,tsType:{name:"string"},description:"Text content of the link"},href:{required:!0,tsType:{name:"string"},description:"URL that the link points to"},useHistory:{required:!1,tsType:{name:"boolean"},description:"When true, uses history.pushState instead of navigating (for SPA routing)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the link is disabled",defaultValue:{value:"false",computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"When true, opens link in new tab and shows external icon",defaultValue:{value:"false",computed:!1}},standalone:{required:!1,tsType:{name:"boolean"},description:"Standalone mode displays as block with an arrow icon",defaultValue:{value:"false",computed:!1}},preventDefault:{required:!1,tsType:{name:"boolean"},description:"Prevents default anchor behavior on click"}},composes:["Omit"]};const Ie={title:"Components/Link",component:a,tags:["autodocs"],args:{onClick:Se()},argTypes:{text:{control:"text",description:"Text content of the link"},href:{control:"text",description:"URL that the link points to"},disabled:{control:"boolean",description:"Whether the link is disabled"},external:{control:"boolean",description:"When true, opens link in new tab and shows external icon"},standalone:{control:"boolean",description:"Standalone mode displays as block with an arrow icon"},useHistory:{control:"boolean",description:"When true, uses history.pushState instead of navigating"},preventDefault:{control:"boolean",description:"Prevents default anchor behavior on click"}}},s={args:{text:"Click here",href:"https://example.com"}},o={args:{href:"https://example.com",children:"Link using children"}},l={args:{text:"External link",href:"https://example.com",external:!0}},i={args:{text:"Standalone link",href:"/some-page",standalone:!0}},c={args:{text:"External standalone link",href:"https://example.com",standalone:!0,external:!0}},d={args:{text:"Disabled link",href:"https://example.com",disabled:!0}},m={args:{text:"Disabled external link",href:"https://example.com",disabled:!0,external:!0}},p={args:{text:"Disabled standalone link",href:"/some-page",disabled:!0,standalone:!0}},h={render:()=>e.jsxs("p",{className:"text-foreground",children:["This is a paragraph with an ",e.jsx(a,{href:"/inline",text:"inline link"})," in the middle of the text content."]})},x={render:()=>e.jsxs("p",{className:"text-foreground",children:["Learn more at the"," ",e.jsx(a,{href:"https://sinch.com",text:"Sinch website",external:!0})," for additional documentation."]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground mb-2 font-semibold",children:"Inline Links"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{className:"text-foreground",children:["Default: ",e.jsx(a,{href:"#",text:"Default link"})]}),e.jsxs("p",{className:"text-foreground",children:["External: ",e.jsx(a,{href:"#",text:"External link",external:!0})]}),e.jsxs("p",{className:"text-foreground",children:["Disabled: ",e.jsx(a,{href:"#",text:"Disabled link",disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground mb-2 font-semibold",children:"Standalone Links"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{href:"#",text:"Standalone link",standalone:!0}),e.jsx(a,{href:"#",text:"Standalone external",standalone:!0,external:!0}),e.jsx(a,{href:"#",text:"Standalone disabled",standalone:!0,disabled:!0})]})]})]})},f={args:{text:"SPA Navigation (uses history.pushState)",href:"/new-route",useHistory:!0,standalone:!0}},g={args:{text:"Custom styled link",href:"#",className:"text-lg font-bold"}},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-foreground-muted text-sm",children:"Hover over the links to see state changes:"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-foreground",children:e.jsx(a,{href:"#",text:"Hover me (inline)"})}),e.jsx(a,{href:"#",text:"Hover me (standalone)",standalone:!0}),e.jsx(a,{href:"#",text:"Hover me (external)",external:!0})]})]})};var D,L,y;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'Click here',
    href: 'https://example.com'
  }
}`,...(y=(L=s.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var w,E,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: 'Link using children'
  }
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var C,T,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'External link',
    href: 'https://example.com',
    external: true
  }
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var I,W,V;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'Standalone link',
    href: '/some-page',
    standalone: true
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var A,q,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    text: 'External standalone link',
    href: 'https://example.com',
    standalone: true,
    external: true
  }
}`,...(R=(q=c.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,z,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Disabled link',
    href: 'https://example.com',
    disabled: true
  }
}`,...(U=(z=d.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var F,O,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Disabled external link',
    href: 'https://example.com',
    disabled: true,
    external: true
  }
}`,...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: 'Disabled standalone link',
    href: '/some-page',
    disabled: true,
    standalone: true
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,X;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <p className="text-foreground">
      This is a paragraph with an <Link href="/inline" text="inline link" /> in
      the middle of the text content.
    </p>
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <p className="text-foreground">
      Learn more at the{' '}
      <Link href="https://sinch.com" text="Sinch website" external /> for
      additional documentation.
    </p>
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-foreground mb-2 font-semibold">Inline Links</h3>
        <div className="flex flex-col gap-2">
          <p className="text-foreground">
            Default: <Link href="#" text="Default link" />
          </p>
          <p className="text-foreground">
            External: <Link href="#" text="External link" external />
          </p>
          <p className="text-foreground">
            Disabled: <Link href="#" text="Disabled link" disabled />
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-foreground mb-2 font-semibold">Standalone Links</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" text="Standalone link" standalone />
          <Link href="#" text="Standalone external" standalone external />
          <Link href="#" text="Standalone disabled" standalone disabled />
        </div>
      </div>
    </div>
}`,...(ne=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    text: 'SPA Navigation (uses history.pushState)',
    href: '/new-route',
    useHistory: true,
    standalone: true
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,le,ie;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    text: 'Custom styled link',
    href: '#',
    className: 'text-lg font-bold'
  }
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,me;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <p className="text-foreground-muted text-sm">
        Hover over the links to see state changes:
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-foreground">
          <Link href="#" text="Hover me (inline)" />
        </p>
        <Link href="#" text="Hover me (standalone)" standalone />
        <Link href="#" text="Hover me (external)" external />
      </div>
    </div>
}`,...(me=(de=v.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const We=["Default","WithChildren","External","Standalone","StandaloneExternal","Disabled","DisabledExternal","DisabledStandalone","InParagraph","ExternalInParagraph","AllVariants","SPANavigation","WithCustomClassName","InteractiveStates"];export{u as AllVariants,s as Default,d as Disabled,m as DisabledExternal,p as DisabledStandalone,l as External,x as ExternalInParagraph,h as InParagraph,v as InteractiveStates,f as SPANavigation,i as Standalone,c as StandaloneExternal,o as WithChildren,g as WithCustomClassName,We as __namedExportsOrder,Ie as default};
