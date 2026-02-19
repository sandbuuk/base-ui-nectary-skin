import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as m}from"./index-pP6CS22B.js";import{c as $}from"./index-EXTQMK5R.js";import{c as N}from"./cn-BLSKlp9E.js";import"./_commonjsHelpers-Cpj98o6Y.js";function ia(c){if(c===""||c===null||c===void 0)return[];const i=c.split(`
`),t=[];let n=null,d=[];for(let s=0;s<i.length;s++){const u=i[s],b=u.match(/^[-*]\s+(.*)$/);if(b!==null){(n===null||n.ordered===!0)&&(n!==null&&(n.children=d,t.push(n)),n={type:"list",ordered:!1,children:[]},d=[]),d.push({type:"listItem",children:I(b[1])});continue}const y=u.match(/^(\d+)\.\s+(.*)$/);if(y!==null){(n===null||n.ordered===!1)&&(n!==null&&(n.children=d,t.push(n)),n={type:"list",ordered:!0,children:[]},d=[]),d.push({type:"listItem",children:I(y[2])});continue}if(n!==null&&(n.children=d,t.push(n),n=null,d=[]),u.trim()===""){t.length>0&&t.push({type:"linebreak"});continue}t.push({type:"paragraph",children:I(u)})}return n!==null&&(n.children=d,t.push(n)),t}function I(c){var n;const i=[];let t=c;for(;t.length>0;){const d=t.match(/^\\(.)/);if(d!==null){i.push({type:"text",content:d[1]}),t=t.slice(d[0].length);continue}const s=t.match(/^\{\{([a-zA-Z0-9_-]+)\}\}/);if(s!==null){i.push({type:"chip",content:s[1]}),t=t.slice(s[0].length);continue}const u=t.match(/^`([^`]+)`/);if(u!==null){i.push({type:"code",content:u[1]}),t=t.slice(u[0].length);continue}const b=t.match(/^\*\*(.+?)\*\*/);if(b!==null){i.push({type:"bold",children:I(b[1])}),t=t.slice(b[0].length);continue}const y=t.match(/^\*([^*]+)\*/);if(y!==null){i.push({type:"italic",children:I(y[1])}),t=t.slice(y[0].length);continue}const C=t.match(/^~~(.+?)~~/);if(C!==null){i.push({type:"strikethrough",children:I(C[1])}),t=t.slice(C[0].length);continue}const f=t.match(/^\[([^\]]+)\]\(([^)]+)\)(?:\{([^}]+)\})?/);if(f!==null){const l=((n=f[3])==null?void 0:n.split(",").map(T=>T.trim()))??[];i.push({type:"link",content:f[1],href:f[2],external:l.includes("external")}),t=t.slice(f[0].length);continue}const g=t.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}])/u);if(g!==null){i.push({type:"emoji",content:g[1]}),t=t.slice(g[0].length);continue}const o=t.match(/^[^*`\[\\{~\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]+/u);if(o!==null){i.push({type:"text",content:o[0]}),t=t.slice(o[0].length);continue}i.push({type:"text",content:t[0]}),t=t.slice(1)}return i}const ga=$(["block"],{variants:{size:{m:"[font:var(--sinch-sys-font-body-m)]",s:"[font:var(--sinch-sys-font-body-s)]",xs:"[font:var(--sinch-sys-font-body-xs)]",xxs:"[font:var(--sinch-sys-font-body-xxs)]"}},defaultVariants:{size:"m"}}),L=m.forwardRef(({className:c,text:i,size:t="m",chipColor:n,chipIcon:d,chipResolver:s,onElementClick:u,...b},y)=>{const C=m.useMemo(()=>ia(i),[i]),f=m.useCallback(o=>{const l=o.target;(l.tagName==="A"||l.closest("[data-chip]")!==null||l.closest("a")!==null)&&(u==null||u(o,l))},[u]),g=(o,l)=>{var T,R,re,_,q,D,F;switch(o.type){case"text":return o.content;case"bold":return e.jsx("span",{className:"font-[var(--sinch-ref-typography-font-weight-700)]",children:(T=o.children)==null?void 0:T.map((p,h)=>g(p,h))},l);case"italic":return e.jsx("span",{className:"italic",children:(R=o.children)==null?void 0:R.map((p,h)=>g(p,h))},l);case"strikethrough":return e.jsx("span",{className:"line-through",children:(re=o.children)==null?void 0:re.map((p,h)=>g(p,h))},l);case"code":return e.jsx("code",{className:N("[font:var(--sinch-comp-code-tag-font-text)]","leading-inherit text-[length:inherit]","border border-[var(--sinch-comp-code-tag-color-default-border-initial)]","bg-[var(--sinch-comp-code-tag-color-default-background-initial)]","px-[0.25em] rounded-[var(--sinch-comp-code-tag-shape-radius)]"),children:o.content},l);case"link":return e.jsx("a",{href:o.href,className:N("[font:var(--sinch-comp-link-default-font-initial)]","text-[var(--sinch-comp-link-color-default-text-initial)]","underline","hover:text-[var(--sinch-comp-link-color-default-text-hover)]","hover:no-underline"),target:o.external===!0?"_blank":void 0,rel:o.external===!0?"noopener noreferrer":void 0,children:o.content},l);case"chip":{const p=s==null?void 0:s(o.content??""),h=(p==null?void 0:p.color)??n,k=(p==null?void 0:p.icon)??d,M=h!==void 0?`var(--sinch-comp-tag-color-${h}-background)`:void 0,j=h!==void 0?`var(--sinch-comp-tag-color-${h}-foreground)`:void 0;return e.jsxs("span",{"data-chip":!0,className:N("inline-flex items-center align-middle","h-[var(--sinch-comp-chip-size-container-m)]","px-[9px] gap-1","rounded-[var(--sinch-comp-chip-shape-radius)]","bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]","text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]","[font:var(--sinch-comp-chip-font-size-m-label)]","select-none"),style:{backgroundColor:M,color:j},children:[k!==void 0&&e.jsx("span",{className:"w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)]",style:{color:j}}),e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:o.content})]},l)}case"emoji":return e.jsx("span",{className:"inline w-[1em] h-[1em] align-[-0.2em]",role:"img","aria-label":o.content,children:o.content},l);case"linebreak":return e.jsx("br",{},l);case"paragraph":return e.jsx("p",{className:"m-0 [&+p]:mt-[0.5em] [&+ul]:mt-[0.5em] [&+ol]:mt-[0.5em]",children:(_=o.children)==null?void 0:_.map((p,h)=>g(p,h))},l);case"list":return o.ordered===!0?e.jsx("ol",{className:"m-0 pl-[1.5em] [p+&]:mt-[0.5em]",children:(q=o.children)==null?void 0:q.map((p,h)=>g(p,h))},l):e.jsx("ul",{className:"m-0 pl-[1.5em] [p+&]:mt-[0.5em]",children:(D=o.children)==null?void 0:D.map((p,h)=>g(p,h))},l);case"listItem":return e.jsx("li",{children:(F=o.children)==null?void 0:F.map((p,h)=>g(p,h))},l);default:return null}};return e.jsx("div",{ref:y,role:"paragraph",className:N(ga({size:t}),"text-[var(--sinch-global-color-text,var(--sinch-sys-color-text-default))]",c),onClick:f,...b,children:C.map((o,l)=>g(o,l))})});L.displayName="RichText";L.__docgenInfo={description:`RichText component for rendering markdown-like formatted text.

Supports:
- Bold (**text**)
- Italic (*text*)
- Strikethrough (~~text~~)
- Links [text](url)
- Code (\`code\`)
- Emoji (unicode)
- Chips/Tags ({{tagname}})
- Lists (- item or 1. item)

@example
\`\`\`tsx
<RichText text="Hello **world**!" />
<RichText text="Visit [our site](https://example.com)" size="s" />
<RichText text="Status: {{pending}}" chipColor="warning" />
\`\`\``,methods:[],displayName:"RichText",props:{text:{required:!0,tsType:{name:"string"},description:"Markdown-like text content to render"},size:{required:!1,tsType:{name:"union",raw:"'m' | 's' | 'xs' | 'xxs'",elements:[{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'xxs'"}]},description:`Text size variant
@default 'm'`,defaultValue:{value:"'m'",computed:!1}},chipColor:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'danger'
| 'dark-blue'
| 'dark-gray'
| 'dark-green'
| 'dark-orange'
| 'dark-pink'
| 'dark-red'
| 'dark-violet'
| 'dark-yellow'
| 'gray'
| 'green'
| 'info'
| 'light-blue'
| 'light-gray'
| 'light-green'
| 'light-orange'
| 'light-pink'
| 'light-red'
| 'light-violet'
| 'light-yellow'
| 'orange'
| 'pink'
| 'red'
| 'success'
| 'violet'
| 'warning'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'red'"},{name:"literal",value:"'success'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'yellow'"}]},description:"Default color for chips"},chipIcon:{required:!1,tsType:{name:"string"},description:"Default icon for chips"},chipResolver:{required:!1,tsType:{name:"signature",type:"function",raw:"(tagName: string) => { icon?: string, color?: string } | undefined",signature:{arguments:[{type:{name:"string"},name:"tagName"}],return:{name:"union",raw:"{ icon?: string, color?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ icon?: string, color?: string }",signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},description:"Resolver callback for chip properties based on tag name"},onElementClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, element: HTMLElement) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"HTMLElement"},name:"element"}],return:{name:"void"}}},description:"Callback when an element (link, chip, etc.) is clicked"}},composes:["Omit","VariantProps"]};const xa=$(["relative flex flex-col w-full box-border","bg-[var(--sinch-comp-textarea-color-default-background-initial)]","rounded-[var(--sinch-comp-textarea-shape-radius)]","overflow-hidden"],{variants:{},defaultVariants:{}}),fa=$(["w-full px-3 py-2 box-border","bg-transparent outline-none border-none","whitespace-pre-wrap break-words","[font:var(--sinch-comp-textarea-font-input)]","text-[var(--sinch-comp-textarea-color-default-text-initial)]","min-h-[2.5em]"],{variants:{},defaultVariants:{}}),va=$(["absolute inset-0 pointer-events-none","border border-[var(--sinch-comp-textarea-color-default-border-initial)]","rounded-[var(--sinch-comp-textarea-shape-radius)]","transition-colors"],{variants:{isFocused:{true:"border-[var(--sinch-comp-textarea-color-default-border-focus)] border-2",false:""},isInvalid:{true:"border-[var(--sinch-comp-textarea-color-invalid-border-initial)]",false:""},isDisabled:{true:"border-[var(--sinch-comp-textarea-color-disabled-border-initial)]",false:""}},compoundVariants:[{isFocused:!0,isInvalid:!0,className:"border-[var(--sinch-comp-textarea-color-default-border-focus)]"},{isDisabled:!0,className:"border-[var(--sinch-comp-textarea-color-disabled-border-initial)]"}],defaultVariants:{isFocused:!1,isInvalid:!1,isDisabled:!1}}),S=m.forwardRef(({className:c,value:i,defaultValue:t,placeholder:n,invalid:d=!1,disabled:s=!1,rows:u,chipColor:b,chipIcon:y,chipResolver:C,"aria-label":f,topContent:g,bottomContent:o,onChange:l,onFocus:T,onBlur:R,onSelectionChange:re,..._},q)=>{const[D,F]=m.useState(t??""),[p,h]=m.useState(!1),k=m.useRef(null),M=i!==void 0,j=M?i:D,ne=m.useMemo(()=>ia(j),[j]),V=m.useCallback(()=>{const a=k.current;if(a===null)return"";let r=a.innerHTML;return r=r.replace(/<br\s*\/?>/gi,`
`),r=r.replace(/<\/p>\s*<p[^>]*>/gi,`

`),r=r.replace(/<\/?p[^>]*>/gi,""),r=r.replace(/<strong>([^<]*)<\/strong>/gi,"**$1**"),r=r.replace(/<b>([^<]*)<\/b>/gi,"**$1**"),r=r.replace(/<em>([^<]*)<\/em>/gi,"*$1*"),r=r.replace(/<i>([^<]*)<\/i>/gi,"*$1*"),r=r.replace(/<del>([^<]*)<\/del>/gi,"~~$1~~"),r=r.replace(/<s>([^<]*)<\/s>/gi,"~~$1~~"),r=r.replace(/<code>([^<]*)<\/code>/gi,"`$1`"),r=r.replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi,"[$2]($1)"),r=r.replace(/<span[^>]*data-chip[^>]*>([^<]*)<\/span>/gi,"{{$1}}"),r=r.replace(/<[^>]+>/g,""),r=r.replace(/&nbsp;/g," "),r=r.replace(/&lt;/g,"<"),r=r.replace(/&gt;/g,">"),r=r.replace(/&amp;/g,"&"),r.trim()},[]);m.useEffect(()=>{const a=k.current;if(a===null||document.activeElement===a)return;V()!==j&&(a.innerHTML=ba(ne,b,y,C))},[j,ne,b,y,C,V]);const v=m.useCallback(()=>{const a=V();M||F(a),l==null||l(a)},[M,l,V]),sa=m.useCallback(()=>{h(!0),T==null||T()},[T]),oa=m.useCallback(()=>{h(!1),R==null||R();const a=V();a!==j&&(M||F(a),l==null||l(a))},[M,R,l,V,j]),ca=m.useCallback(a=>{if(s){a.preventDefault();return}if(a.metaKey||a.ctrlKey){switch(a.key.toLowerCase()){case"b":a.preventDefault(),document.execCommand("bold"),v();break;case"i":a.preventDefault(),document.execCommand("italic"),v();break}if(a.shiftKey)switch(a.key.toLowerCase()){case"x":a.preventDefault(),document.execCommand("strikeThrough"),v();break}}},[s,v]),da=m.useCallback(a=>{a.preventDefault();const w=a.clipboardData.getData("text/plain");document.execCommand("insertText",!1,w),v()},[v]);m.useImperativeHandle(q,()=>({focus:()=>{var a;return(a=k.current)==null?void 0:a.focus()},blur:()=>{var a;return(a=k.current)==null?void 0:a.blur()},insertText:a=>{var w;(w=k.current)==null||w.focus(),document.execCommand("insertText",!1,a),v()},insertLink:(a,w)=>{var r;(r=k.current)==null||r.focus(),document.execCommand("insertHTML",!1,`<a href="${w}">${a}</a>`),v()},insertChip:a=>{var r;(r=k.current)==null||r.focus();const w=`<span data-chip contenteditable="false">${a}</span>&nbsp;`;document.execCommand("insertHTML",!1,w),v()},formatBold:()=>{var a;(a=k.current)==null||a.focus(),document.execCommand("bold"),v()},formatItalic:()=>{var a;(a=k.current)==null||a.focus(),document.execCommand("italic"),v()},formatStrikethrough:()=>{var a;(a=k.current)==null||a.focus(),document.execCommand("strikeThrough"),v()},formatCodeTag:()=>{var w;(w=k.current)==null||w.focus();const a=window.getSelection();if(a!==null&&a.rangeCount>0){const le=a.getRangeAt(0).toString();le.length>0&&(document.execCommand("insertHTML",!1,`<code>${le}</code>`),v())}},formatOrderedList:()=>{var a;(a=k.current)==null||a.focus(),document.execCommand("insertOrderedList"),v()},formatUnorderedList:()=>{var a;(a=k.current)==null||a.focus(),document.execCommand("insertUnorderedList"),v()},getCaretRect:()=>{const a=window.getSelection();return a===null||a.rangeCount===0?null:a.getRangeAt(0).getBoundingClientRect()}}),[v]);const ua=g!==void 0,ma=o!==void 0,pa=j==="",ha=u!==void 0&&u>0?`${u*1.5}em`:void 0;return e.jsxs("div",{className:N(xa({}),c),..._,children:[ua&&e.jsx("div",{className:"flex flex-row items-center gap-2 px-1 pt-1 pb-0",children:g}),e.jsxs("div",{className:"relative px-[10px] py-2 box-border",children:[e.jsx("div",{ref:k,role:"textbox","aria-multiline":"true","aria-label":f,"aria-placeholder":n,"aria-invalid":d,contentEditable:!s,suppressContentEditableWarning:!0,autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,className:N(fa({}),s&&"text-[var(--sinch-comp-textarea-color-disabled-text-initial)] cursor-not-allowed","[&_b]:font-bold [&_strong]:font-bold","[&_i]:italic [&_em]:italic","[&_s]:line-through [&_del]:line-through","[&_code]:[font:var(--sinch-comp-code-tag-font-text)]","[&_code]:bg-[var(--sinch-comp-code-tag-color-default-background-initial)]","[&_code]:border [&_code]:border-[var(--sinch-comp-code-tag-color-default-border-initial)]","[&_code]:px-[0.25em] [&_code]:rounded-[var(--sinch-comp-code-tag-shape-radius)]","[&_a]:text-[var(--sinch-comp-link-color-default-text-initial)]","[&_a]:underline","[&_[data-chip]]:inline-flex [&_[data-chip]]:items-center [&_[data-chip]]:align-middle","[&_[data-chip]]:h-[var(--sinch-comp-chip-size-container-m)]","[&_[data-chip]]:px-[9px] [&_[data-chip]]:gap-1","[&_[data-chip]]:rounded-[var(--sinch-comp-chip-shape-radius)]","[&_[data-chip]]:bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]","[&_[data-chip]]:text-[var(--sinch-comp-chip-color-neutral-default-foreground-initial)]","[&_[data-chip]]:[font:var(--sinch-comp-chip-font-size-m-label)]","[&_[data-chip]]:select-none"),style:{minHeight:ha},onInput:v,onFocus:sa,onBlur:oa,onKeyDown:ca,onPaste:da}),pa&&n!==void 0&&e.jsx("div",{className:N("absolute left-0 top-0 px-3 py-2","[font:var(--sinch-comp-textarea-font-input)]","text-[var(--sinch-comp-textarea-color-default-text-placeholder)]","pointer-events-none select-none"),children:n})]}),e.jsx("div",{className:N(va({isFocused:p,isInvalid:d&&!p,isDisabled:s}))}),ma&&e.jsx("div",{className:"flex flex-row items-center gap-2 px-1 pt-0 pb-1",children:o})]})});S.displayName="RichTextarea";function ba(c,i,t,n){const d=s=>{var u,b,y,C,f,g,o;switch(s.type){case"text":return z(s.content??"");case"bold":return`<b>${((u=s.children)==null?void 0:u.map(d).join(""))??""}</b>`;case"italic":return`<i>${((b=s.children)==null?void 0:b.map(d).join(""))??""}</i>`;case"strikethrough":return`<s>${((y=s.children)==null?void 0:y.map(d).join(""))??""}</s>`;case"code":return`<code>${z(s.content??"")}</code>`;case"link":return`<a href="${z(s.href??"")}">${z(s.content??"")}</a>`;case"chip":{const l=n==null?void 0:n(s.content??""),T=(l==null?void 0:l.color)??i;let R="";return T!==void 0&&(R=` style="background-color:var(--sinch-comp-tag-color-${T}-background);color:var(--sinch-comp-tag-color-${T}-foreground)"`),`<span data-chip contenteditable="false"${R}>${z(s.content??"")}</span>`}case"emoji":return s.content??"";case"linebreak":return"<br>";case"paragraph":return`<p>${((C=s.children)==null?void 0:C.map(d).join(""))??""}</p>`;case"list":return s.ordered===!0?`<ol>${((f=s.children)==null?void 0:f.map(d).join(""))??""}</ol>`:`<ul>${((g=s.children)==null?void 0:g.map(d).join(""))??""}</ul>`;case"listItem":return`<li>${((o=s.children)==null?void 0:o.map(d).join(""))??""}</li>`;default:return""}};return c.map(d).join("")}function z(c){return c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}S.__docgenInfo={description:`RichTextarea component for editing rich text with formatting support.

Features:
- contentEditable-based editing
- Keyboard shortcuts (Cmd/Ctrl+B for bold, Cmd/Ctrl+I for italic)
- Markdown output format
- Chip/tag insertion
- Link insertion

@example
\`\`\`tsx
<RichTextarea
  value={text}
  onChange={setText}
  placeholder="Type something..."
/>
\`\`\``,methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null},{name:"insertText",docblock:null,modifiers:[],params:[{name:"text",optional:!1,type:{name:"string"}}],returns:null},{name:"insertLink",docblock:null,modifiers:[],params:[{name:"text",optional:!1,type:{name:"string"}},{name:"href",optional:!1,type:{name:"string"}}],returns:null},{name:"insertChip",docblock:null,modifiers:[],params:[{name:"name",optional:!1,type:{name:"string"}}],returns:null},{name:"formatBold",docblock:null,modifiers:[],params:[],returns:null},{name:"formatItalic",docblock:null,modifiers:[],params:[],returns:null},{name:"formatStrikethrough",docblock:null,modifiers:[],params:[],returns:null},{name:"formatCodeTag",docblock:null,modifiers:[],params:[],returns:null},{name:"formatOrderedList",docblock:null,modifiers:[],params:[],returns:null},{name:"formatUnorderedList",docblock:null,modifiers:[],params:[],returns:null},{name:"getCaretRect",docblock:null,modifiers:[],params:[],returns:null}],displayName:"RichTextarea",props:{value:{required:!1,tsType:{name:"string"},description:"Controlled value (markdown text)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled usage"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},invalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state
@default false`,defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of visible rows"},chipColor:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'danger'
| 'dark-blue'
| 'dark-gray'
| 'dark-green'
| 'dark-orange'
| 'dark-pink'
| 'dark-red'
| 'dark-violet'
| 'dark-yellow'
| 'gray'
| 'green'
| 'info'
| 'light-blue'
| 'light-gray'
| 'light-green'
| 'light-orange'
| 'light-pink'
| 'light-red'
| 'light-violet'
| 'light-yellow'
| 'orange'
| 'pink'
| 'red'
| 'success'
| 'violet'
| 'warning'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'red'"},{name:"literal",value:"'success'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'yellow'"}]},description:"Default color for chips"},chipIcon:{required:!1,tsType:{name:"string"},description:"Default icon for chips"},chipResolver:{required:!1,tsType:{name:"signature",type:"function",raw:"(tagName: string) => { icon?: string, color?: string } | undefined",signature:{arguments:[{type:{name:"string"},name:"tagName"}],return:{name:"union",raw:"{ icon?: string, color?: string } | undefined",elements:[{name:"signature",type:"object",raw:"{ icon?: string, color?: string }",signature:{properties:[{key:"icon",value:{name:"string",required:!1}},{key:"color",value:{name:"string",required:!1}}]}},{name:"undefined"}]}}},description:"Resolver callback for chip properties based on tag name"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},topContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content displayed in the top slot"},bottomContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content displayed in the bottom slot"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler - receives the new markdown value"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Blur handler"},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selection: RichTextareaSelection) => void",signature:{arguments:[{type:{name:"RichTextareaSelection"},name:"selection"}],return:{name:"void"}}},description:"Selection change handler"}},composes:["Omit","VariantProps"]};const ya=$(["inline-flex items-center","h-[var(--sinch-comp-chip-size-container-m)]","px-[5px] pl-[9px] gap-1","rounded-[var(--sinch-comp-chip-shape-radius)]","bg-[var(--sinch-comp-chip-color-neutral-default-background-initial)]","text-[color:var(--sinch-comp-chip-color-neutral-default-foreground-initial)]","[font:var(--sinch-comp-chip-font-size-m-label)]","select-none","outline-none","align-middle"],{variants:{readonly:{true:"pr-[9px]",false:"pr-[5px]"}},defaultVariants:{readonly:!1}}),ka=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.354-9.354a.5.5 0 0 1 0 .708L8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L7.293 8 5.646 6.354a.5.5 0 1 1 .708-.708L8 7.293l1.646-1.647a.5.5 0 0 1 .708 0Z"})}),x=m.forwardRef(({className:c,text:i,readonly:t=!1,color:n,icon:d,onClick:s,onRemove:u,style:b,...y},C)=>{const f={};n!==void 0&&n!=="default"&&(f.backgroundColor=`var(--sinch-comp-tag-color-${n}-background)`,f.color=`var(--sinch-comp-tag-color-${n}-foreground)`,f["--sinch-global-color-icon"]=`var(--sinch-comp-tag-color-${n}-foreground)`);const g=m.useCallback(l=>{l.stopPropagation(),u==null||u(l)},[u]),o=m.useCallback(l=>{l.target.closest("[data-close-icon]")===null&&(s==null||s(l))},[s]);return e.jsxs("span",{ref:C,role:"button","aria-label":i,contentEditable:!1,className:N(ya({readonly:t}),c),style:{...f,...b},onClick:o,...y,children:[d!==void 0&&e.jsx("span",{className:"w-[var(--sinch-comp-chip-size-icon-m)] h-[var(--sinch-comp-chip-size-icon-m)] flex items-center justify-center",children:d}),e.jsx("span",{className:"flex-1 overflow-hidden text-ellipsis whitespace-nowrap",children:i}),t!==!0&&e.jsx("span",{"data-close-icon":!0,className:"cursor-pointer flex items-center justify-center",onClick:g,role:"button","aria-label":`Remove ${i}`,children:e.jsx(ka,{})})]})});x.displayName="RichTextareaChip";x.__docgenInfo={description:`RichTextareaChip component for displaying chips within rich text editors.

Used internally by RichTextarea but can also be used standalone.
Supports custom colors, icons, and a remove button.

@example
\`\`\`tsx
<RichTextareaChip text="username" />
<RichTextareaChip text="status" color="success" readonly />
<RichTextareaChip text="tag" onRemove={handleRemove} />
\`\`\``,methods:[],displayName:"RichTextareaChip",props:{text:{required:!0,tsType:{name:"string"},description:"Text content for the chip"},readonly:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is readonly (hides the close button)
@default false`,defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'danger'
| 'dark-blue'
| 'dark-gray'
| 'dark-green'
| 'dark-orange'
| 'dark-pink'
| 'dark-red'
| 'dark-violet'
| 'dark-yellow'
| 'gray'
| 'green'
| 'info'
| 'light-blue'
| 'light-gray'
| 'light-green'
| 'light-orange'
| 'light-pink'
| 'light-red'
| 'light-violet'
| 'light-yellow'
| 'orange'
| 'pink'
| 'red'
| 'success'
| 'violet'
| 'warning'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark-blue'"},{name:"literal",value:"'dark-gray'"},{name:"literal",value:"'dark-green'"},{name:"literal",value:"'dark-orange'"},{name:"literal",value:"'dark-pink'"},{name:"literal",value:"'dark-red'"},{name:"literal",value:"'dark-violet'"},{name:"literal",value:"'dark-yellow'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light-blue'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'light-green'"},{name:"literal",value:"'light-orange'"},{name:"literal",value:"'light-pink'"},{name:"literal",value:"'light-red'"},{name:"literal",value:"'light-violet'"},{name:"literal",value:"'light-yellow'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'red'"},{name:"literal",value:"'success'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'yellow'"}]},description:"Color using the tag color system"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon name (displayed before text)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"e"}],return:{name:"void"}}},description:"Called when the chip is clicked"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"e"}],return:{name:"void"}}},description:"Called when the close button is clicked"}},composes:["Omit","VariantProps"]};const Na={title:"Components/RichText",component:L,tags:["autodocs"],argTypes:{size:{control:"select",options:["m","s","xs","xxs"]},chipColor:{control:"select",options:["default","success","warning","danger","info","blue","green","red","yellow"]}}},H={args:{text:"Hello, this is some **bold** text and *italic* text."}},E={args:{text:"This text has **bold**, *italic*, ~~strikethrough~~, and `code` formatting."}},B={args:{text:"Visit [our website](https://example.com) for more information."}},W={args:{text:"Status: {{pending}} assigned to {{john-doe}}",chipColor:"info"}},O={args:{text:"Priority: {{high}} Status: {{completed}} User: {{admin}}",chipResolver:c=>({high:{color:"danger"},completed:{color:"success"},admin:{color:"violet"}})[c]}},P={args:{text:`Here is a list:
- First item
- Second item
- Third item

And numbered:
1. One
2. Two
3. Three`}},A={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(L,{text:"Size M (default): **Bold** and *italic* text",size:"m"}),e.jsx(L,{text:"Size S: **Bold** and *italic* text",size:"s"}),e.jsx(L,{text:"Size XS: **Bold** and *italic* text",size:"xs"}),e.jsx(L,{text:"Size XXS: **Bold** and *italic* text",size:"xxs"})]})},U={args:{text:`# Welcome to RichText

This component supports **bold**, *italic*, and ~~strikethrough~~ text.

You can also use \`inline code\` and [links](https://example.com).

Tags like {{status}} and {{user}} are rendered as chips.

Lists work too:
- Item one
- Item two
  - Nested item

1. Numbered
2. Lists
3. Also work`}},K={render:()=>{const[c,i]=m.useState("");return e.jsxs("div",{className:"w-96",children:[e.jsx(S,{value:c,onChange:i,placeholder:"Type some rich text...","aria-label":"Rich text input"}),e.jsxs("p",{className:"mt-4 text-sm text-foreground-muted",children:["Output: ",c]})]})}},X={render:()=>{const[c,i]=m.useState("Hello **world**! This is *rich* text.");return e.jsx("div",{className:"w-96",children:e.jsx(S,{value:c,onChange:i,"aria-label":"Rich text input"})})}},Z={render:()=>{const[c,i]=m.useState("");return e.jsx("div",{className:"w-96",children:e.jsx(S,{value:c,onChange:i,placeholder:"Use **bold**, *italic*, or {{tags}}...","aria-label":"Rich text input"})})}},Y={render:()=>e.jsx("div",{className:"w-96",children:e.jsx(S,{value:"This textarea is disabled",disabled:!0,"aria-label":"Disabled rich text input"})})},G={render:()=>{const[c,i]=m.useState("");return e.jsx("div",{className:"w-96",children:e.jsx(S,{value:c,onChange:i,invalid:!0,placeholder:"This field has an error","aria-label":"Invalid rich text input"})})}},J={render:()=>{const[c,i]=m.useState("");return e.jsx("div",{className:"w-96",children:e.jsx(S,{value:c,onChange:i,placeholder:"Type a message...","aria-label":"Rich text input",topContent:e.jsx("div",{className:"text-xs text-foreground-muted",children:"Formatting: Bold (Ctrl+B), Italic (Ctrl+I)"}),bottomContent:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-surface-secondary rounded",children:"B"}),e.jsx("button",{className:"text-xs px-2 py-1 bg-surface-secondary rounded",children:"I"})]})})})}},Q={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(x,{text:"username"}),e.jsx(x,{text:"tag"}),e.jsx(x,{text:"mention"})]})},ee={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(x,{text:"readonly",readonly:!0}),e.jsx(x,{text:"editable"})]})},ae={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(x,{text:"default",readonly:!0}),e.jsx(x,{text:"success",color:"success",readonly:!0}),e.jsx(x,{text:"warning",color:"warning",readonly:!0}),e.jsx(x,{text:"danger",color:"danger",readonly:!0}),e.jsx(x,{text:"info",color:"info",readonly:!0}),e.jsx(x,{text:"blue",color:"blue",readonly:!0}),e.jsx(x,{text:"green",color:"green",readonly:!0}),e.jsx(x,{text:"red",color:"red",readonly:!0}),e.jsx(x,{text:"yellow",color:"yellow",readonly:!0}),e.jsx(x,{text:"violet",color:"violet",readonly:!0})]})},te={render:()=>{const[c,i]=m.useState(["React","TypeScript","Tailwind"]);return e.jsx("div",{className:"flex gap-2",children:c.map(t=>e.jsx(x,{text:t,onRemove:()=>i(c.filter(n=>n!==t))},t))})}};var ie,se,oe;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    text: 'Hello, this is some **bold** text and *italic* text.'
  }
}`,...(oe=(se=H.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ce,de,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    text: 'This text has **bold**, *italic*, ~~strikethrough~~, and \`code\` formatting.'
  }
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,he;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    text: 'Visit [our website](https://example.com) for more information.'
  }
}`,...(he=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,xe,fe;W.parameters={...W.parameters,docs:{...(ge=W.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    text: 'Status: {{pending}} assigned to {{john-doe}}',
    chipColor: 'info'
  }
}`,...(fe=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var ve,be,ye;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    text: 'Priority: {{high}} Status: {{completed}} User: {{admin}}',
    chipResolver: (tagName: string) => {
      const resolvers: Record<string, {
        color: string;
        icon?: string;
      }> = {
        high: {
          color: 'danger'
        },
        completed: {
          color: 'success'
        },
        admin: {
          color: 'violet'
        }
      };
      return resolvers[tagName];
    }
  }
}`,...(ye=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ke,Te,we;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    text: \`Here is a list:
- First item
- Second item
- Third item

And numbered:
1. One
2. Two
3. Three\`
  }
}`,...(we=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ce,Re,je;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <RichText text="Size M (default): **Bold** and *italic* text" size="m" />
      <RichText text="Size S: **Bold** and *italic* text" size="s" />
      <RichText text="Size XS: **Bold** and *italic* text" size="xs" />
      <RichText text="Size XXS: **Bold** and *italic* text" size="xxs" />
    </div>
}`,...(je=(Re=A.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};var Ne,Se,Me;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    text: \`# Welcome to RichText

This component supports **bold**, *italic*, and ~~strikethrough~~ text.

You can also use \\\`inline code\\\` and [links](https://example.com).

Tags like {{status}} and {{user}} are rendered as chips.

Lists work too:
- Item one
- Item two
  - Nested item

1. Numbered
2. Lists
3. Also work\`
  }
}`,...(Me=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};var Le,Ve,Ie;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <RichTextarea value={value} onChange={setValue} placeholder="Type some rich text..." aria-label="Rich text input" />
        <p className="mt-4 text-sm text-foreground-muted">
          Output: {value}
        </p>
      </div>;
  }
}`,...(Ie=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Fe,ze,$e;X.parameters={...X.parameters,docs:{...(Fe=X.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Hello **world**! This is *rich* text.');
    return <div className="w-96">
        <RichTextarea value={value} onChange={setValue} aria-label="Rich text input" />
      </div>;
  }
}`,...($e=(ze=X.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var _e,qe,De;Z.parameters={...Z.parameters,docs:{...(_e=Z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <RichTextarea value={value} onChange={setValue} placeholder="Use **bold**, *italic*, or {{tags}}..." aria-label="Rich text input" />
      </div>;
  }
}`,...(De=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var He,Ee,Be;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div className="w-96">
      <RichTextarea value="This textarea is disabled" disabled aria-label="Disabled rich text input" />
    </div>
}`,...(Be=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var We,Oe,Pe;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <RichTextarea value={value} onChange={setValue} invalid placeholder="This field has an error" aria-label="Invalid rich text input" />
      </div>;
  }
}`,...(Pe=(Oe=G.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Ae,Ue,Ke;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <RichTextarea value={value} onChange={setValue} placeholder="Type a message..." aria-label="Rich text input" topContent={<div className="text-xs text-foreground-muted">Formatting: Bold (Ctrl+B), Italic (Ctrl+I)</div>} bottomContent={<div className="flex gap-2">
              <button className="text-xs px-2 py-1 bg-surface-secondary rounded">B</button>
              <button className="text-xs px-2 py-1 bg-surface-secondary rounded">I</button>
            </div>} />
      </div>;
  }
}`,...(Ke=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Xe,Ze,Ye;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <RichTextareaChip text="username" />
      <RichTextareaChip text="tag" />
      <RichTextareaChip text="mention" />
    </div>
}`,...(Ye=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:Ye.source}}};var Ge,Je,Qe;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <RichTextareaChip text="readonly" readonly />
      <RichTextareaChip text="editable" />
    </div>
}`,...(Qe=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var ea,aa,ta;ae.parameters={...ae.parameters,docs:{...(ea=ae.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <RichTextareaChip text="default" readonly />
      <RichTextareaChip text="success" color="success" readonly />
      <RichTextareaChip text="warning" color="warning" readonly />
      <RichTextareaChip text="danger" color="danger" readonly />
      <RichTextareaChip text="info" color="info" readonly />
      <RichTextareaChip text="blue" color="blue" readonly />
      <RichTextareaChip text="green" color="green" readonly />
      <RichTextareaChip text="red" color="red" readonly />
      <RichTextareaChip text="yellow" color="yellow" readonly />
      <RichTextareaChip text="violet" color="violet" readonly />
    </div>
}`,...(ta=(aa=ae.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,na,la;te.parameters={...te.parameters,docs:{...(ra=te.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind']);
    return <div className="flex gap-2">
        {chips.map(chip => <RichTextareaChip key={chip} text={chip} onRemove={() => setChips(chips.filter(c => c !== chip))} />)}
      </div>;
  }
}`,...(la=(na=te.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};const Sa=["Default","WithFormatting","WithLinks","WithChips","WithChipResolver","WithLists","Sizes","ComplexContent","TextareaDefault","TextareaWithValue","TextareaWithPlaceholder","TextareaDisabled","TextareaInvalid","TextareaWithSlots","ChipDefault","ChipReadonly","ChipColors","ChipWithRemove"];export{ae as ChipColors,Q as ChipDefault,ee as ChipReadonly,te as ChipWithRemove,U as ComplexContent,H as Default,A as Sizes,K as TextareaDefault,Y as TextareaDisabled,G as TextareaInvalid,Z as TextareaWithPlaceholder,J as TextareaWithSlots,X as TextareaWithValue,O as WithChipResolver,W as WithChips,E as WithFormatting,B as WithLinks,P as WithLists,Sa as __namedExportsOrder,Na as default};
