import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{r as _e}from"./index-pP6CS22B.js";import{f as Te}from"./index-CsAwyYjM.js";import{C as s,a as l}from"./ColorMenu-BEv_wx7l.js";import{S as M}from"./ColorSwatch-CurNVpas.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./Tooltip-WtcvfBIx.js";const ze={title:"Components/ColorMenu",component:s,tags:["autodocs"],args:{onChange:Te()},argTypes:{value:{control:"text",description:"The currently selected color value"},rows:{control:{type:"number",min:1,max:10},description:"Number of rows to show before scrolling"},cols:{control:{type:"number",min:1,max:10},description:"Number of columns to display"},onChange:{action:"changed",description:"Callback when a color is selected"}}},t=["blue","green","red","yellow","orange","violet","pink","gray","dark-blue","dark-green"],n={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:t.map(e=>r.jsx(l,{value:e},e))}),args:{value:"blue"}},i={render:function(e){const[a,Ne]=_e.useState("green");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("p",{className:"text-foreground",children:["Selected color: ",r.jsx("strong",{children:a})]}),r.jsx(s,{...e,value:a,onChange:c=>{var h;Ne(c),(h=e.onChange)==null||h.call(e,c)},"aria-label":"Select a color",children:t.map(c=>r.jsx(l,{value:c},c))})]})}},u={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:M.filter(e=>!e.startsWith("skintone")).map(e=>r.jsx(l,{value:e},e))}),args:{value:"blue",cols:6}},d={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:t.map(e=>r.jsx(l,{value:e},e))}),args:{value:"blue",cols:3}},p={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:M.filter(e=>!e.startsWith("skintone")).map(e=>r.jsx(l,{value:e},e))}),args:{value:"blue",cols:5,rows:3}},m={render:o=>{const e=["#FF5733","#33FF57","#3357FF","#FF33F5","#F5FF33","#33FFF5","#FF8C00","#8B00FF"];return r.jsx(s,{...o,"aria-label":"Select a color",children:e.map(a=>r.jsx(l,{value:a,"aria-label":a},a))})},args:{value:"#FF5733",cols:4}},C={render:o=>{const e=["blue","#FF5733","green","#33FF57","red","#3357FF","yellow","#FF33F5"];return r.jsx(s,{...o,"aria-label":"Select a color",children:e.map(a=>r.jsx(l,{value:a,"aria-label":a.startsWith("#")?a:void 0},a))})},args:{value:"blue",cols:4}},g={render:o=>{const e=M.filter(a=>a.startsWith("skintone"));return r.jsx(s,{...o,"aria-label":"Select skin tone",children:e.map(a=>r.jsx(l,{value:a},a))})},args:{value:"skintone-default",cols:6}},S={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:t.slice(0,6).map(e=>r.jsx(l,{value:e},e))}),args:{value:"blue",cols:6}},v={render:o=>r.jsxs(s,{...o,"aria-label":"Select a color",children:[r.jsx(l,{value:"blue"}),r.jsx(l,{value:"green"}),r.jsx(l,{value:"red"})]}),args:{value:"blue",cols:3}},b={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:t.map(e=>r.jsx(l,{value:e},e))}),args:{defaultValue:"orange"}},x={render:o=>r.jsx(s,{...o,"aria-label":"Select a color",children:t.map(e=>r.jsx(l,{value:e},e))})},F={render:o=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("p",{className:"text-foreground-muted text-sm",children:"Click on the menu to focus, then use arrow keys to navigate and Enter/Space to select."}),r.jsx(s,{...o,"aria-label":"Select a color",children:t.map(e=>r.jsx(l,{value:e},e))})]}),args:{value:"blue"}};var f,y,O,k,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    value: 'blue'
  }
}`,...(O=(y=n.parameters)==null?void 0:y.docs)==null?void 0:O.source},description:{story:"Default ColorMenu with sample colors.",...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.description}}};var w,L,W,R,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: function ControlledStory(args) {
    const [selectedColor, setSelectedColor] = useState('green');
    return <div className="flex flex-col gap-4">
        <p className="text-foreground">Selected color: <strong>{selectedColor}</strong></p>
        <ColorMenu {...args} value={selectedColor} onChange={color => {
        setSelectedColor(color);
        args.onChange?.(color);
      }} aria-label="Select a color">
          {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
        </ColorMenu>
      </div>;
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Controlled ColorMenu with state management.",...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};var E,N,_,T,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SWATCH_COLORS.filter(c => !c.startsWith('skintone')).map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    value: 'blue',
    cols: 6
  }
}`,...(_=(N=u.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"All available swatch colors.",...(P=(T=u.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};var H,U,D,K,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    value: 'blue',
    cols: 3
  }
}`,...(D=(U=d.parameters)==null?void 0:U.docs)==null?void 0:D.source},description:{story:"With custom column count.",...(V=(K=d.parameters)==null?void 0:K.docs)==null?void 0:V.description}}};var B,I,q,z,G;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SWATCH_COLORS.filter(c => !c.startsWith('skintone')).map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    value: 'blue',
    cols: 5,
    rows: 3
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:"With row limit and scrolling.",...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var J,Q,X,Y,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const customColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F5', '#F5FF33', '#33FFF5', '#FF8C00', '#8B00FF'];
    return <ColorMenu {...args} aria-label="Select a color">
        {customColors.map(color => <ColorMenuOption key={color} value={color} aria-label={color} />)}
      </ColorMenu>;
  },
  args: {
    value: '#FF5733',
    cols: 4
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"With custom CSS colors (hex values).",...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var $,ee,re,oe,ae;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const mixedColors = ['blue', '#FF5733', 'green', '#33FF57', 'red', '#3357FF', 'yellow', '#FF33F5'];
    return <ColorMenu {...args} aria-label="Select a color">
        {mixedColors.map(color => <ColorMenuOption key={color} value={color} aria-label={color.startsWith('#') ? color : undefined} />)}
      </ColorMenu>;
  },
  args: {
    value: 'blue',
    cols: 4
  }
}`,...(re=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Mixed swatch and custom colors.",...(ae=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ae.description}}};var le,se,te,ce,ne;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => {
    const skinTones = SWATCH_COLORS.filter(c => c.startsWith('skintone'));
    return <ColorMenu {...args} aria-label="Select skin tone">
        {skinTones.map(color => <ColorMenuOption key={color} value={color} />)}
      </ColorMenu>;
  },
  args: {
    value: 'skintone-default',
    cols: 6
  }
}`,...(te=(se=g.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Skin tone colors for emoji-like use cases.",...(ne=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ne.description}}};var ie,ue,de,pe,me;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.slice(0, 6).map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    value: 'blue',
    cols: 6
  }
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source},description:{story:"Single row layout.",...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var Ce,ge,Se,ve,be;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      <ColorMenuOption value="blue" />
      <ColorMenuOption value="green" />
      <ColorMenuOption value="red" />
    </ColorMenu>,
  args: {
    value: 'blue',
    cols: 3
  }
}`,...(Se=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:Se.source},description:{story:"Minimal with just a few colors.",...(be=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:be.description}}};var xe,Fe,Me,he,fe;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>,
  args: {
    defaultValue: 'orange'
  }
}`,...(Me=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source},description:{story:"Uncontrolled mode with defaultValue.",...(fe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var ye,Oe,ke,je,we;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
    </ColorMenu>
}`,...(ke=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:ke.source},description:{story:"Without any initial selection.",...(we=(je=x.parameters)==null?void 0:je.docs)==null?void 0:we.description}}};var Le,We,Re,Ae,Ee;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <p className="text-foreground-muted text-sm">
        Click on the menu to focus, then use arrow keys to navigate and Enter/Space to select.
      </p>
      <ColorMenu {...args} aria-label="Select a color">
        {SAMPLE_COLORS.map(color => <ColorMenuOption key={color} value={color} />)}
      </ColorMenu>
    </div>,
  args: {
    value: 'blue'
  }
}`,...(Re=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Re.source},description:{story:`Keyboard navigation demo.
Use arrow keys to navigate and Enter/Space to select.`,...(Ee=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.description}}};const Ge=["Default","Controlled","AllSwatchColors","CustomColumns","WithRowLimit","CustomColors","MixedColors","SkinToneColors","SingleRow","Minimal","Uncontrolled","NoInitialSelection","KeyboardNavigation"];export{u as AllSwatchColors,i as Controlled,m as CustomColors,d as CustomColumns,n as Default,F as KeyboardNavigation,v as Minimal,C as MixedColors,x as NoInitialSelection,S as SingleRow,g as SkinToneColors,b as Uncontrolled,p as WithRowLimit,Ge as __namedExportsOrder,ze as default};
