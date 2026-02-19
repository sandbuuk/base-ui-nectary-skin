import{j as a}from"./jsx-runtime-Z5uAzocK.js";import{f as Bt}from"./index-CsAwyYjM.js";import{r as s}from"./index-pP6CS22B.js";import{c as Zt}from"./index-EXTQMK5R.js";import{c as E}from"./cn-BLSKlp9E.js";import{B as Ft}from"./Button-SrxEgsda.js";import{I as Xt}from"./Icon-3RA0aubP.js";import{S as Yt,a as ae}from"./SegmentedControl-D-MHpZt1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Spinner-Bh5BG8Cg.js";const Jt=216/2,St=30,yt=26,Nt=26,O=Jt-St,L=O-yt,Pt=L-Nt,Qt=L,ea=Pt,ta=O,re=t=>{if(t===""||t===null||t===void 0)return{hours:0,minutes:0};const r=t.split(":"),l=parseInt(r[0]??"00"),i=parseInt(r[1]??"00");return isNaN(l)||l>23||l<0?{hours:0,minutes:0}:isNaN(i)||i>59||i<0?{hours:0,minutes:0}:{hours:l,minutes:i}},R=t=>t.toString().padStart(2,"0"),aa=(t,r)=>`${R(t)}:${R(r)}:00`,ra=(t,r)=>r?R(t):t===0||t===12?"12":R(t%12),na=t=>t===0?"12":t===12?"24":String(t),wt=t=>R(t),oa=(t,r)=>r?t===0?12:t===12?0:t:t%12,ne=(t,r)=>{const i=(360-(t%360-r))%360;return i>180?t-360+i:t+i},sa=Zt("block outline-none",{variants:{},defaultVariants:{}}),oe=({hour:t,x:r,y:l,isSelected:i,onClick:m})=>{const u=na(t),d=t>=12&&t!==12||t===0,G=b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),m())};return a.jsx("div",{className:E("absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto","top-[calc(50%-14px)] left-[calc(50%-14px)]","leading-7",d?["font-[var(--sinch-comp-time-picker-digit-font-default-h24)]",i?"font-[var(--sinch-comp-time-picker-digit-font-checked-h24)] text-[var(--sinch-comp-time-picker-digit-color-checked-h24-initial)]":"text-[var(--sinch-comp-time-picker-digit-color-default-h24-initial)]"]:["font-[var(--sinch-comp-time-picker-digit-font-default-h12)]",i?"font-[var(--sinch-comp-time-picker-digit-font-checked-h12)] text-[var(--sinch-comp-time-picker-digit-color-checked-h12-default)]":"text-[var(--sinch-comp-time-picker-digit-color-default-h12-initial)]"]),style:{transform:`translate(${r}px, ${l}px)`},role:"button",tabIndex:-1,"aria-label":`${u} o'clock`,onClick:b=>{b.stopPropagation(),m()},onKeyDown:G,children:u})},ia=({minute:t,x:r,y:l,isSelected:i,onClick:m})=>{const u=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),m())};return a.jsx("div",{className:E("absolute w-7 h-7 text-center z-[1] cursor-pointer pointer-events-auto","top-[calc(50%-14px)] left-[calc(50%-14px)]","leading-7","font-[var(--sinch-comp-time-picker-digit-font-default-minutes)]",i?"font-[var(--sinch-comp-time-picker-digit-font-checked-minutes)] text-[var(--sinch-comp-time-picker-digit-color-checked-minute-initial)]":"text-[var(--sinch-comp-time-picker-digit-color-default-minute-initial)]"),style:{transform:`translate(${r}px, ${l}px)`},role:"button",tabIndex:-1,"aria-label":`${t} minutes`,onClick:d=>{d.stopPropagation(),m()},onKeyDown:u,children:wt(t)})},U=s.forwardRef(({className:t,value:r,defaultValue:l="00:00:00",ampm:i=!1,"aria-label":m,submitAriaLabel:u="Submit",onChange:d,...G},b)=>{const X=re(r??l),[o,f]=s.useState(X.hours),[p,v]=s.useState(X.minutes),[Y,Ct]=s.useState(0),[J,At]=s.useState(0),Dt=s.useRef(null),It=s.useRef(null),Q=r!==void 0;s.useEffect(()=>{if(Q){const e=re(r);f(e.hours),v(e.minutes)}},[Q,r]),s.useEffect(()=>{const e=o%12,n=ne(Y,e*30);Ct(n)},[o]),s.useEffect(()=>{const e=ne(J,p*6);At(e)},[p]);const g=!i,K=O+St/2,q=L+yt/2,z=Pt+Nt/2,Tt=s.useMemo(()=>Array.from({length:12},(e,n)=>{const c=Math.PI/6*(n-3),h=Math.cos(c)*q,x=Math.sin(c)*q;return{hour:n,x:h,y:x}}),[q]),Ht=s.useMemo(()=>Array.from({length:12},(e,n)=>{const c=n+12,h=Math.PI/6*(n-3),x=Math.cos(h)*z,M=Math.sin(h)*z;return{hour:c,x,y:M}}),[z]),_t=s.useMemo(()=>Array.from({length:12},(e,n)=>{const c=n*5,h=Math.PI/30*(c-15),x=Math.cos(h)*K,M=Math.sin(h)*K;return{minute:c,x,y:M}}),[K]),W=oa(o,g),ee=s.useCallback(e=>{f(e)},[]),jt=s.useCallback(e=>{v(e)},[]),Vt=s.useCallback(e=>{const n=e.currentTarget.getBoundingClientRect(),c=n.width/2,h=n.height/2,x=e.clientX-n.left,M=n.height-(e.clientY-n.top),B=x-c,$=M-h,Z=Math.sqrt(B*B+$*$),Kt=B/Z;let F=(Math.acos(Kt*($<0?-1:1))*(180/Math.PI)-90-360)%360*-1;$<0&&(F+=180);const te=Z>O?0:Z>L?1:2,qt=te>0,zt=te>1;if(qt){const k=Math.round(F/30)%12;if(g)f(zt?k===0?0:k+12:k===0?12:k);else{const Wt=o>=12?12:0;f(k+Wt)}}else v(Math.round(F/6)%60)},[g,o]),Et=s.useCallback(e=>{e==="am"&&o>=12?f(o-12):e==="pm"&&o<12&&f(o+12)},[o]),Rt=s.useCallback(()=>{const e=aa(o,p);d==null||d(e)},[o,p,d]),Ut=s.useCallback(e=>{switch(e.key){case"ArrowUp":e.preventDefault(),f(n=>(n+1)%24);break;case"ArrowDown":e.preventDefault(),f(n=>(n+23)%24);break}},[]),$t=s.useCallback(e=>{switch(e.key){case"ArrowUp":e.preventDefault(),v(n=>(n+1)%60);break;case"ArrowDown":e.preventDefault(),v(n=>(n+59)%60);break}},[]),Ot=g&&(o<=0||o>12)?ea:Qt,Lt=p%5===0,Gt=o>=0&&o<12?"am":"pm";return a.jsx("div",{ref:b,className:E(sa(),t),"aria-label":m,...G,children:a.jsxs("div",{className:"flex flex-col w-[248px] p-4 box-border gap-4",children:[a.jsxs("div",{className:"relative w-full h-12 select-none",style:{font:"var(--sinch-comp-time-picker-header-font)",lineHeight:"48px",color:"var(--sinch-comp-time-picker-header-color-default-text-initial)"},children:[a.jsx("div",{className:"absolute p-0 px-1 w-[50px] outline-none right-[calc(50%+8px)] text-right",role:"meter","aria-valuemin":0,"aria-valuemax":g?23:12,"aria-valuenow":o,"aria-valuetext":String(o),children:a.jsx("span",{children:ra(o,g)})}),a.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:":"}),a.jsx("div",{className:"absolute p-0 px-1 w-[50px] outline-none left-[calc(50%+8px)]",role:"meter","aria-valuemin":0,"aria-valuemax":59,"aria-valuenow":p,"aria-valuetext":String(p),children:a.jsx("span",{children:wt(p)})}),a.jsx(Ft,{size:"s","aria-label":u,className:"absolute right-0 top-1/2 -translate-y-1/2",onClick:Rt,icon:a.jsx(Xt,{name:"fa-check",iconsVersion:"2",size:"sm",style:{color:"var(--sinch-comp-time-picker-header-color-default-icon-initial)"}})})]}),a.jsxs("div",{className:"relative w-[216px] h-[216px] rounded-full box-border cursor-pointer",style:{border:"1px solid var(--sinch-comp-time-picker-watch-face-color-default-border-initial)",backgroundColor:"var(--sinch-comp-time-picker-watch-face-color-default-background-initial)"},role:"group","aria-label":"Time picker clock face",onClick:Vt,children:[a.jsxs("div",{className:"absolute inset-0 rounded-full pointer-events-none select-none",children:[Tt.map(({hour:e,x:n,y:c})=>a.jsx(oe,{hour:e,x:n,y:c,is24Hour:!1,isSelected:g?W===e&&o>0&&o<=12:W===e,onClick:()=>ee(e)},`h12-${e}`)),g&&Ht.map(({hour:e,x:n,y:c})=>a.jsx(oe,{hour:e,x:n,y:c,is24Hour:!0,isSelected:W===e,onClick:()=>ee(e)},`h24-${e}`))]}),a.jsx("div",{className:"absolute inset-0 rounded-full pointer-events-none select-none",children:_t.map(({minute:e,x:n,y:c})=>a.jsx(ia,{minute:e,x:n,y:c,isSelected:p===e,onClick:()=>jt(e)},`m-${e}`))}),a.jsxs("div",{className:"absolute inset-0 cursor-pointer rounded-full",children:[a.jsx("div",{ref:Dt,className:E("absolute w-1 rounded-sm z-[2] outline-none","left-[calc(50%-2px)] bottom-1/2","origin-bottom","transition-[transform,height] duration-[250ms] ease-in-out","motion-reduce:transition-none","focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"),style:{height:`${Ot}px`,transform:`rotate(${Y}deg)`,backgroundColor:"var(--sinch-comp-time-picker-needle-color-default-background-initial)"},tabIndex:0,role:"slider","aria-label":"Hour selector","aria-valuemin":0,"aria-valuemax":g?23:12,"aria-valuenow":o,"aria-valuetext":`${o} o'clock`,onKeyDown:Ut}),a.jsx("div",{ref:It,className:E("absolute w-0.5 rounded-[1px] z-[2] outline-none","left-[calc(50%-1px)] bottom-1/2","origin-bottom","transition-[transform,height] duration-[250ms] ease-in-out","motion-reduce:transition-none","focus-visible:bg-[var(--sinch-comp-time-picker-needle-color-default-background-focus)]"),style:{height:`${ta}px`,transform:`rotate(${J}deg)`,backgroundColor:"var(--sinch-comp-time-picker-needle-color-default-background-initial)"},tabIndex:0,role:"slider","aria-label":"Minute selector","aria-valuemin":0,"aria-valuemax":59,"aria-valuenow":p,"aria-valuetext":`${p} minutes`,onKeyDown:$t,children:!Lt&&a.jsx("div",{className:"absolute w-1 h-1 rounded-full -left-[1px] -top-4",style:{backgroundColor:"var(--sinch-comp-time-picker-digit-color-checked-minute-initial)"}})}),a.jsx("div",{className:"absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2",style:{backgroundColor:"var(--sinch-comp-time-picker-needle-color-default-background-initial)"}})]})]}),i&&a.jsx("div",{className:"flex justify-center w-full h-8",children:a.jsxs(Yt,{value:Gt,"aria-label":"AM/PM selection",onChange:Et,children:[a.jsx(ae,{value:"am",text:"AM","aria-label":"AM",isFirst:!0}),a.jsx(ae,{value:"pm",text:"PM","aria-label":"PM",isLast:!0})]})})]})})});U.displayName="TimePicker";U.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:"Time value in ISO 8601 format (HH:mm:ss or HH:mm)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default time value for uncontrolled usage",defaultValue:{value:"'00:00:00'",computed:!1}},ampm:{required:!1,tsType:{name:"boolean"},description:"AM/PM 12-hour clock system, `false` by default (24-hour)\n@default false",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the time picker"},submitAriaLabel:{required:!1,tsType:{name:"string"},description:"Submit button accessible label",defaultValue:{value:"'Submit'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Change handler - called when submit button is clicked
Returns time in ISO 8601 format (HH:mm:ss)`}},composes:["Omit","VariantProps"]};const Ma={title:"Components/TimePicker",component:U,tags:["autodocs"],args:{onChange:Bt()},argTypes:{value:{control:"text",description:"Time value in HH:mm:ss or HH:mm format"},defaultValue:{control:"text",description:"Default time value for uncontrolled usage"},ampm:{control:"boolean",description:"Use 12-hour format with AM/PM toggle"},submitAriaLabel:{control:"text",description:"Accessible label for submit button"},onChange:{action:"changed",description:"Called when submit button is clicked with time in HH:mm:ss format"}},parameters:{layout:"centered"}},S={args:{"aria-label":"Select time"}},y={args:{value:"14:30:00","aria-label":"Select time"}},N={args:{defaultValue:"09:15:00","aria-label":"Select time"}},P={args:{ampm:!0,defaultValue:"09:30:00","aria-label":"Select time"}},w={args:{ampm:!0,defaultValue:"15:45:00","aria-label":"Select time"},name:"AM/PM (PM selected)"},C={args:{defaultValue:"20:00:00","aria-label":"Select time"},name:"24-hour Evening"},A={render:function(r){const[l,i]=s.useState("12:00:00");return a.jsxs("div",{className:"flex flex-col items-center gap-4",children:[a.jsx(U,{...r,value:l,onChange:m=>{var u;i(m),(u=r.onChange)==null||u.call(r,m)}}),a.jsxs("div",{className:"text-foreground font-mono",children:["Selected time: ",l]})]})},args:{"aria-label":"Select time"}},D={render:function(r){const[l,i]=s.useState("09:30:00");return a.jsxs("div",{className:"flex flex-col items-center gap-4",children:[a.jsx(U,{...r,value:l,ampm:!0,onChange:m=>{var u;i(m),(u=r.onChange)==null||u.call(r,m)}}),a.jsxs("div",{className:"text-foreground font-mono",children:["Selected time: ",l]})]})},args:{"aria-label":"Select time"},name:"Controlled AM/PM"},I={args:{defaultValue:"10:00:00",submitAriaLabel:"Confirm time selection","aria-label":"Select time"}},T={args:{defaultValue:"00:00:00","aria-label":"Select time"},name:"Midnight (24-hour)"},H={args:{defaultValue:"12:00:00","aria-label":"Select time"},name:"Noon (24-hour)"},_={args:{ampm:!0,defaultValue:"00:00:00","aria-label":"Select time"},name:"Midnight (AM/PM)"},j={args:{ampm:!0,defaultValue:"12:00:00","aria-label":"Select time"},name:"Noon (AM/PM)"},V={args:{defaultValue:"14:23:00","aria-label":"Select time"},name:"Non-standard Minute"};var se,ie,le,ce,me;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select time'
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"Default 24-hour time picker starting at 00:00",...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.description}}};var ue,de,pe,fe,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    value: '14:30:00',
    'aria-label': 'Select time'
  }
}`,...(pe=(de=y.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Time picker with a preset value",...(ge=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ge.description}}};var he,be,xe,ve,Me;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    defaultValue: '09:15:00',
    'aria-label': 'Select time'
  }
}`,...(xe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:"Time picker with default value (uncontrolled)",...(Me=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:Me.description}}};var ke,Se,ye,Ne,Pe;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ampm: true,
    defaultValue: '09:30:00',
    'aria-label': 'Select time'
  }
}`,...(ye=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:ye.source},description:{story:"12-hour format with AM/PM toggle",...(Pe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.description}}};var we,Ce,Ae,De,Ie;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ampm: true,
    defaultValue: '15:45:00',
    'aria-label': 'Select time'
  },
  name: 'AM/PM (PM selected)'
}`,...(Ae=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source},description:{story:"12-hour format showing PM time",...(Ie=(De=w.parameters)==null?void 0:De.docs)==null?void 0:Ie.description}}};var Te,He,_e,je,Ve;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    defaultValue: '20:00:00',
    'aria-label': 'Select time'
  },
  name: '24-hour Evening'
}`,...(_e=(He=C.parameters)==null?void 0:He.docs)==null?void 0:_e.source},description:{story:"24-hour format showing evening time",...(Ve=(je=C.parameters)==null?void 0:je.docs)==null?void 0:Ve.description}}};var Ee,Re,Ue,$e,Oe;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: function ControlledTimePicker(args) {
    const [time, setTime] = useState('12:00:00');
    return <div className="flex flex-col items-center gap-4">
        <TimePicker {...args} value={time} onChange={newTime => {
        setTime(newTime);
        args.onChange?.(newTime);
      }} />
        <div className="text-foreground font-mono">
          Selected time: {time}
        </div>
      </div>;
  },
  args: {
    'aria-label': 'Select time'
  }
}`,...(Ue=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source},description:{story:"Controlled component example",...(Oe=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:Oe.description}}};var Le,Ge,Ke,qe,ze;D.parameters={...D.parameters,docs:{...(Le=D.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: function ControlledAMPMPicker(args) {
    const [time, setTime] = useState('09:30:00');
    return <div className="flex flex-col items-center gap-4">
        <TimePicker {...args} value={time} ampm onChange={newTime => {
        setTime(newTime);
        args.onChange?.(newTime);
      }} />
        <div className="text-foreground font-mono">
          Selected time: {time}
        </div>
      </div>;
  },
  args: {
    'aria-label': 'Select time'
  },
  name: 'Controlled AM/PM'
}`,...(Ke=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source},description:{story:"Controlled AM/PM example",...(ze=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:ze.description}}};var We,Be,Ze,Fe,Xe;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    defaultValue: '10:00:00',
    submitAriaLabel: 'Confirm time selection',
    'aria-label': 'Select time'
  }
}`,...(Ze=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Ze.source},description:{story:"Custom submit button label",...(Xe=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Xe.description}}};var Ye,Je,Qe,et,tt;T.parameters={...T.parameters,docs:{...(Ye=T.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    defaultValue: '00:00:00',
    'aria-label': 'Select time'
  },
  name: 'Midnight (24-hour)'
}`,...(Qe=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source},description:{story:"Midnight (00:00) in 24-hour format",...(tt=(et=T.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,rt,nt,ot,st;H.parameters={...H.parameters,docs:{...(at=H.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    defaultValue: '12:00:00',
    'aria-label': 'Select time'
  },
  name: 'Noon (24-hour)'
}`,...(nt=(rt=H.parameters)==null?void 0:rt.docs)==null?void 0:nt.source},description:{story:"Noon (12:00) in 24-hour format",...(st=(ot=H.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};var it,lt,ct,mt,ut;_.parameters={..._.parameters,docs:{...(it=_.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ampm: true,
    defaultValue: '00:00:00',
    'aria-label': 'Select time'
  },
  name: 'Midnight (AM/PM)'
}`,...(ct=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:ct.source},description:{story:"Midnight in 12-hour format (12:00 AM)",...(ut=(mt=_.parameters)==null?void 0:mt.docs)==null?void 0:ut.description}}};var dt,pt,ft,gt,ht;j.parameters={...j.parameters,docs:{...(dt=j.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ampm: true,
    defaultValue: '12:00:00',
    'aria-label': 'Select time'
  },
  name: 'Noon (AM/PM)'
}`,...(ft=(pt=j.parameters)==null?void 0:pt.docs)==null?void 0:ft.source},description:{story:"Noon in 12-hour format (12:00 PM)",...(ht=(gt=j.parameters)==null?void 0:gt.docs)==null?void 0:ht.description}}};var bt,xt,vt,Mt,kt;V.parameters={...V.parameters,docs:{...(bt=V.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    defaultValue: '14:23:00',
    'aria-label': 'Select time'
  },
  name: 'Non-standard Minute'
}`,...(vt=(xt=V.parameters)==null?void 0:xt.docs)==null?void 0:vt.source},description:{story:"Time with non-5-minute interval (shows dot on minute needle)",...(kt=(Mt=V.parameters)==null?void 0:Mt.docs)==null?void 0:kt.description}}};const ka=["Default","WithValue","WithDefaultValue","AMPM","AMPM_PM","Evening24Hour","Controlled","ControlledAMPM","CustomSubmitLabel","Midnight24Hour","Noon24Hour","MidnightAMPM","NoonAMPM","NonStandardMinute"];export{P as AMPM,w as AMPM_PM,A as Controlled,D as ControlledAMPM,I as CustomSubmitLabel,S as Default,C as Evening24Hour,T as Midnight24Hour,_ as MidnightAMPM,V as NonStandardMinute,H as Noon24Hour,j as NoonAMPM,N as WithDefaultValue,y as WithValue,ka as __namedExportsOrder,Ma as default};
