import{j as a}from"./jsx-runtime-Z5uAzocK.js";import{c as y}from"./index-EXTQMK5R.js";import{r as x}from"./index-pP6CS22B.js";import{c as r}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Ta=y(["inline-block","align-middle","outline-none"],{variants:{size:{s:"",m:"",l:""}},defaultVariants:{size:"m"}}),Pa=y(["relative","rounded-[var(--sinch-comp-avatar-shape-radius)]"],{variants:{size:{s:"w-[var(--sinch-comp-avatar-size-s)] h-[var(--sinch-comp-avatar-size-s)]",m:"w-[var(--sinch-comp-avatar-size-m)] h-[var(--sinch-comp-avatar-size-m)]",l:"w-[var(--sinch-comp-avatar-size-l)] h-[var(--sinch-comp-avatar-size-l)]"}},defaultVariants:{size:"m"}}),Ca=y(["block","w-full","h-full","uppercase","text-center"],{variants:{size:{s:"font-[var(--sinch-comp-avatar-container-font-size-s-text)] leading-[calc(var(--sinch-comp-avatar-size-s)-2px)]",m:"font-[var(--sinch-comp-avatar-container-font-size-m-text)] leading-[calc(var(--sinch-comp-avatar-size-m)-2px)]",l:"font-[var(--sinch-comp-avatar-container-font-size-l-text)] leading-[calc(var(--sinch-comp-avatar-size-l)-2px)]"}},defaultVariants:{size:"m"}}),Fa=y(["w-2","h-2","rounded-full"],{variants:{status:{online:"bg-[var(--sinch-comp-avatar-status-color-online-default-background)]",away:"bg-[var(--sinch-comp-avatar-status-color-away-default-background)]",busy:"bg-[var(--sinch-comp-avatar-status-color-busy-default-background)]",offline:"bg-[var(--sinch-comp-avatar-status-color-offline-default-background)]"}}}),qa=()=>a.jsx("svg",{className:"absolute left-0 top-0 w-full h-full fill-[var(--sinch-comp-avatar-container-color-default-foreground)]",viewBox:"0 0 40 40",fill:"none",children:a.jsx("path",{d:"M29.451 15.785a9.451 9.451 0 1 1-18.902 0 9.452 9.452 0 0 1 18.902 0ZM4.734 40.5c.119-7.085 5.899-12.792 13.012-12.792h4.508c7.113 0 12.893 5.707 13.012 12.792H4.734Z"})}),e=x.forwardRef(({className:Ua,src:j,alt:g="",color:h,size:k="m",status:A,onImageError:f,style:Ra,...Oa},Da)=>{const[Ea,Va]=x.useState(!1),Wa=x.useCallback(Ga=>{Va(!0),f==null||f(Ga)},[f]),w=j!==void 0&&j!==""&&!Ea,b=g!==void 0&&g!=="",Ma=x.useMemo(()=>h===void 0?{}:{backgroundColor:`var(--sinch-comp-avatar-container-color-${h}-background)`,color:`var(--sinch-comp-avatar-container-color-${h}-foreground)`},[h]);return a.jsx("div",{ref:Da,className:r(Ta({size:k}),Ua),style:Ra,...Oa,children:a.jsxs("div",{className:r(Pa({size:k})),children:[a.jsxs("div",{className:r("relative","w-[calc(100%-2px)]","h-[calc(100%-2px)]","left-[1px]","top-[1px]","rounded-full","bg-[var(--sinch-comp-avatar-container-color-default-background)]","text-[var(--sinch-comp-avatar-container-color-default-foreground)]","[mask:linear-gradient(#fff,#000)]"),style:Ma,children:[!w&&b&&a.jsx("span",{className:r(Ca({size:k})),children:g}),w&&a.jsx("img",{src:j,alt:g,onError:Wa,className:"absolute left-0 top-0 w-full h-full object-contain"}),!w&&!b&&a.jsx(qa,{})]}),A!==void 0&&a.jsx("div",{className:r("absolute","left-[calc(85%-5px)]","top-[calc(85%-5px)]","w-[10px]","h-[10px]","p-[1px]","box-border","rounded-full","bg-[var(--sinch-comp-avatar-status-color-border)]","pointer-events-none"),children:a.jsx("div",{className:r(Fa({status:A}))})})]})})});e.displayName="Avatar";e.__docgenInfo={description:`Avatar component for displaying user profile images with fallback to initials.

Features:
- Image with automatic fallback to initials or person icon
- Multiple sizes (s, m, l)
- Color presets for background
- Online presence status indicator (online, busy, away, offline)`,methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image source URL"},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the image, also used as fallback initials",defaultValue:{value:"''",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'blue' | 'dark-blue' | 'dark-gray' | 'dark-green' | 'dark-orange'
| 'dark-pink' | 'dark-red' | 'dark-violet' | 'dark-yellow' | 'default'
| 'gray' | 'green' | 'light-blue' | 'light-gray' | 'light-green'
| 'light-orange' | 'light-pink' | 'light-red' | 'light-violet' | 'light-yellow'
| 'orange' | 'pink' | 'red' | 'violet' | 'yellow'`,elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'default'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'red'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'yellow'"}]},description:"Background color preset for the avatar"},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},description:`Avatar size
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'busy' | 'away' | 'offline'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'away'"},{name:"literal",value:"'offline'"}]},description:"Online presence status indicator"},onImageError:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent<HTMLImageElement, Event>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<HTMLImageElement, Event>",elements:[{name:"HTMLImageElement"},{name:"Event"}]},name:"event"}],return:{name:"void"}}},description:"Callback fired when the image fails to load"}},composes:["Omit","VariantProps"]};const Za={title:"Components/Avatar",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["s","m","l"],description:"Avatar size"},status:{control:"select",options:[void 0,"online","away","busy","offline"],description:"Online presence status"},color:{control:"select",options:[void 0,"default","blue","dark-blue","light-blue","green","dark-green","light-green","red","dark-red","light-red","orange","dark-orange","light-orange","yellow","dark-yellow","light-yellow","pink","dark-pink","light-pink","violet","dark-violet","light-violet","gray","dark-gray","light-gray"],description:"Background color preset"},src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alt text / initials"}}},t={args:{}},s={args:{alt:"JD"}},l={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User avatar"}},i={args:{src:"https://invalid-url-that-will-fail.jpg",alt:"FB"}},n={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{size:"s",alt:"S"}),a.jsx(e,{size:"m",alt:"M"}),a.jsx(e,{size:"l",alt:"L"})]})},o={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(e,{status:"online",alt:"ON"}),a.jsx("span",{className:"text-sm text-foreground-muted",children:"Online"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(e,{status:"away",alt:"AW"}),a.jsx("span",{className:"text-sm text-foreground-muted",children:"Away"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(e,{status:"busy",alt:"BY"}),a.jsx("span",{className:"text-sm text-foreground-muted",children:"Busy"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(e,{status:"offline",alt:"OF"}),a.jsx("span",{className:"text-sm text-foreground-muted",children:"Offline"})]})]})},c={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(e,{color:"blue",alt:"BL"}),a.jsx(e,{color:"dark-blue",alt:"DB"}),a.jsx(e,{color:"light-blue",alt:"LB"}),a.jsx(e,{color:"green",alt:"GR"}),a.jsx(e,{color:"dark-green",alt:"DG"}),a.jsx(e,{color:"light-green",alt:"LG"}),a.jsx(e,{color:"red",alt:"RD"}),a.jsx(e,{color:"dark-red",alt:"DR"}),a.jsx(e,{color:"light-red",alt:"LR"}),a.jsx(e,{color:"orange",alt:"OR"}),a.jsx(e,{color:"yellow",alt:"YL"}),a.jsx(e,{color:"pink",alt:"PK"}),a.jsx(e,{color:"violet",alt:"VI"}),a.jsx(e,{color:"gray",alt:"GY"})]})},m={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",status:"online"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",status:"away"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",status:"busy"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",status:"offline"})]})},d={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{size:"s",src:"https://i.pravatar.cc/150?img=5",alt:"Small"}),a.jsx(e,{size:"m",src:"https://i.pravatar.cc/150?img=6",alt:"Medium"}),a.jsx(e,{size:"l",src:"https://i.pravatar.cc/150?img=7",alt:"Large"})]})},p={render:()=>a.jsxs("div",{className:"flex -space-x-2",children:[a.jsx(e,{src:"https://i.pravatar.cc/150?img=8",alt:"User 1",className:"ring-2 ring-white"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=9",alt:"User 2",className:"ring-2 ring-white"}),a.jsx(e,{src:"https://i.pravatar.cc/150?img=10",alt:"User 3",className:"ring-2 ring-white"}),a.jsx(e,{alt:"+5",color:"gray",className:"ring-2 ring-white"})]})},u={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{size:"s"}),a.jsx(e,{size:"m"}),a.jsx(e,{size:"l"})]})},v={args:{size:"m",alt:"AB",color:"blue",status:"online"}};var N,z,S,I,B;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {}
}`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.source},description:{story:"Default avatar with person icon",...(B=(I=t.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var L,U,R,O,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    alt: 'JD'
  }
}`,...(R=(U=s.parameters)==null?void 0:U.docs)==null?void 0:R.source},description:{story:"Avatar with initials",...(D=(O=s.parameters)==null?void 0:O.docs)==null?void 0:D.description}}};var E,V,W,M,G;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar'
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"Avatar with image",...(G=(M=l.parameters)==null?void 0:M.docs)==null?void 0:G.description}}};var T,P,C,F,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'FB'
  }
}`,...(C=(P=i.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:"Avatar with image that fails to load (shows fallback)",...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var Y,H,_,J,K;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="s" alt="S" />
      <Avatar size="m" alt="M" />
      <Avatar size="l" alt="L" />
    </div>
}`,...(_=(H=n.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:"All sizes comparison",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Z,$,Q,X,aa;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar status="online" alt="ON" />
        <span className="text-sm text-foreground-muted">Online</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="away" alt="AW" />
        <span className="text-sm text-foreground-muted">Away</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="busy" alt="BY" />
        <span className="text-sm text-foreground-muted">Busy</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar status="offline" alt="OF" />
        <span className="text-sm text-foreground-muted">Offline</span>
      </div>
    </div>
}`,...(Q=($=o.parameters)==null?void 0:$.docs)==null?void 0:Q.source},description:{story:"All status indicators",...(aa=(X=o.parameters)==null?void 0:X.docs)==null?void 0:aa.description}}};var ea,ra,ta,sa,la;c.parameters={...c.parameters,docs:{...(ea=c.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Avatar color="blue" alt="BL" />
      <Avatar color="dark-blue" alt="DB" />
      <Avatar color="light-blue" alt="LB" />
      <Avatar color="green" alt="GR" />
      <Avatar color="dark-green" alt="DG" />
      <Avatar color="light-green" alt="LG" />
      <Avatar color="red" alt="RD" />
      <Avatar color="dark-red" alt="DR" />
      <Avatar color="light-red" alt="LR" />
      <Avatar color="orange" alt="OR" />
      <Avatar color="yellow" alt="YL" />
      <Avatar color="pink" alt="PK" />
      <Avatar color="violet" alt="VI" />
      <Avatar color="gray" alt="GY" />
    </div>
}`,...(ta=(ra=c.parameters)==null?void 0:ra.docs)==null?void 0:ta.source},description:{story:"Color presets showcase",...(la=(sa=c.parameters)==null?void 0:sa.docs)==null?void 0:la.description}}};var ia,na,oa,ca,ma;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" status="online" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" status="away" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" status="busy" />
      <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" status="offline" />
    </div>
}`,...(oa=(na=m.parameters)==null?void 0:na.docs)==null?void 0:oa.source},description:{story:"Avatar with status and image",...(ma=(ca=m.parameters)==null?void 0:ca.docs)==null?void 0:ma.description}}};var da,pa,ua,va,ga;d.parameters={...d.parameters,docs:{...(da=d.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="s" src="https://i.pravatar.cc/150?img=5" alt="Small" />
      <Avatar size="m" src="https://i.pravatar.cc/150?img=6" alt="Medium" />
      <Avatar size="l" src="https://i.pravatar.cc/150?img=7" alt="Large" />
    </div>
}`,...(ua=(pa=d.parameters)==null?void 0:pa.docs)==null?void 0:ua.source},description:{story:"Different sizes with images",...(ga=(va=d.parameters)==null?void 0:va.docs)==null?void 0:ga.description}}};var ha,fa,xa,ya,ja;p.parameters={...p.parameters,docs:{...(ha=p.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      <Avatar src="https://i.pravatar.cc/150?img=8" alt="User 1" className="ring-2 ring-white" />
      <Avatar src="https://i.pravatar.cc/150?img=9" alt="User 2" className="ring-2 ring-white" />
      <Avatar src="https://i.pravatar.cc/150?img=10" alt="User 3" className="ring-2 ring-white" />
      <Avatar alt="+5" color="gray" className="ring-2 ring-white" />
    </div>
}`,...(xa=(fa=p.parameters)==null?void 0:fa.docs)==null?void 0:xa.source},description:{story:"Avatar group example",...(ja=(ya=p.parameters)==null?void 0:ya.docs)==null?void 0:ja.description}}};var ka,wa,Aa,ba,Na;u.parameters={...u.parameters,docs:{...(ka=u.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar size="s" />
      <Avatar size="m" />
      <Avatar size="l" />
    </div>
}`,...(Aa=(wa=u.parameters)==null?void 0:wa.docs)==null?void 0:Aa.source},description:{story:"Person icon fallback (no src, no alt)",...(Na=(ba=u.parameters)==null?void 0:ba.docs)==null?void 0:Na.description}}};var za,Sa,Ia,Ba,La;v.parameters={...v.parameters,docs:{...(za=v.parameters)==null?void 0:za.docs,source:{originalSource:`{
  args: {
    size: 'm',
    alt: 'AB',
    color: 'blue',
    status: 'online'
  }
}`,...(Ia=(Sa=v.parameters)==null?void 0:Sa.docs)==null?void 0:Ia.source},description:{story:"Interactive playground",...(La=(Ba=v.parameters)==null?void 0:Ba.docs)==null?void 0:La.description}}};const $a=["Default","WithInitials","WithImage","WithBrokenImage","Sizes","StatusIndicators","Colors","ImageWithStatus","SizesWithImages","AvatarGroup","PersonIconFallback","Playground"];export{p as AvatarGroup,c as Colors,t as Default,m as ImageWithStatus,u as PersonIconFallback,v as Playground,n as Sizes,d as SizesWithImages,o as StatusIndicators,i as WithBrokenImage,l as WithImage,s as WithInitials,$a as __namedExportsOrder,Za as default};
