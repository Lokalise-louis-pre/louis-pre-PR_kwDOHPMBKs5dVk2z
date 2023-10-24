"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[3507],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Spacer/Spacer.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>Spacer_stories,shorthand:()=>shorthand,specificDirections:()=>specificDirections});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),theme=__webpack_require__("./src/utils/theme/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Spacer__Container",componentId:"sc-sr3xs8-0"})(["padding:",";&:empty{display:none;}"],(({$padding})=>(0,theme.W0)(...$padding)));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spacer=({children,vertical=0,horizontal=0,top=vertical,right=horizontal,bottom=vertical,left=horizontal,...rest})=>(0,jsx_runtime.jsx)(Container,{$padding:[top,right,bottom,left],...rest,children});Spacer.displayName="Spacer",Spacer.displayName="Spacer";try{Spacer.displayName="Spacer",Spacer.__docgenInfo={description:"",displayName:"Spacer",props:{top:{defaultValue:{value:"0"},description:"Padding space from the top using theme spacing.",name:"top",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},right:{defaultValue:{value:"0"},description:"Padding space from the right using theme spacing.",name:"right",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},bottom:{defaultValue:{value:"0"},description:"Padding space from the bottom using theme spacing.",name:"bottom",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},left:{defaultValue:{value:"0"},description:"Padding space from the left using theme spacing.",name:"left",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},vertical:{defaultValue:{value:"0"},description:"Padding space from top and bottom using theme spacing.",name:"vertical",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},horizontal:{defaultValue:{value:"0"},description:"Padding space from left and right using theme spacing.",name:"horizontal",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spacer/Spacer.tsx#Spacer"]={docgenInfo:Spacer.__docgenInfo,name:"Spacer",path:"src/components/Spacer/Spacer.tsx#Spacer"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>{const _components=Object.assign({div:"div",span:"span"},(0,lib.ah)()),{vertical,horizontal,top,right,bottom,left,...rest}=args;return(0,jsx_runtime.jsx)(Spacer,{vertical,horizontal,top,right,bottom,left,...rest,children:(0,jsx_runtime.jsx)(_components.div,{children:vertical||horizontal?[(0,jsx_runtime.jsx)(_components.span,{children:vertical&&`vertical: ${vertical}`}),(0,jsx_runtime.jsx)(_components.span,{children:horizontal&&`horizontal: ${horizontal}`})]:[(0,jsx_runtime.jsx)(_components.span,{children:top&&`top: ${top}`}),(0,jsx_runtime.jsxs)(_components.span,{children:[left&&`left: ${left}`,"   ",right&&`right: ${right}`]}),(0,jsx_runtime.jsx)(_components.span,{children:bottom&&`bottom: ${bottom}`})]})})};const specificDirections=Template.bind({});specificDirections.storyName="Specific Directions",specificDirections.args={top:2,right:4,bottom:6,left:8},specificDirections.parameters={storySource:{source:"args => {\n  const {\n    vertical,\n    horizontal,\n    top,\n    right,\n    bottom,\n    left,\n    ...rest\n  } = args;\n  return <Spacer vertical={vertical} horizontal={horizontal} top={top} right={right} bottom={bottom} left={left} {...rest}>\n\t\t\t<div>\n\t\t\t\t{vertical || horizontal ? [<span>{vertical && `vertical: ${vertical}`}</span>, <span>{horizontal && `horizontal: ${horizontal}`}</span>] : [<span>{top && `top: ${top}`}</span>, <span>\n\t\t\t\t\t\t\t\t{left && `left: ${left}`}\n\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t{right && `right: ${right}`}\n\t\t\t\t\t\t\t</span>, <span>{bottom && `bottom: ${bottom}`}</span>]}\n\t\t\t</div>\n\t\t</Spacer>;\n}"}};const shorthand=Template.bind({});shorthand.storyName="Shorthand",shorthand.args={vertical:2,horizontal:8},shorthand.parameters={storySource:{source:"args => {\n  const {\n    vertical,\n    horizontal,\n    top,\n    right,\n    bottom,\n    left,\n    ...rest\n  } = args;\n  return <Spacer vertical={vertical} horizontal={horizontal} top={top} right={right} bottom={bottom} left={left} {...rest}>\n\t\t\t<div>\n\t\t\t\t{vertical || horizontal ? [<span>{vertical && `vertical: ${vertical}`}</span>, <span>{horizontal && `horizontal: ${horizontal}`}</span>] : [<span>{top && `top: ${top}`}</span>, <span>\n\t\t\t\t\t\t\t\t{left && `left: ${left}`}\n\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t{right && `right: ${right}`}\n\t\t\t\t\t\t\t</span>, <span>{bottom && `bottom: ${bottom}`}</span>]}\n\t\t\t</div>\n\t\t</Spacer>;\n}"}};const componentMeta={title:"Components/Spacer",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
	 			${(0,theme.cp)("body.caption.default")};
	 			// styled Spacer
	 			& > div {
	 				background-color: #fed77c;
	 				display: inline-block;
	 			}
	 			// styled content in Spacer
	 			& > div > div {
	 				display: flex;
	 				flex-direction: column;
	 				align-items: center;
	 				justify-content: center;
	 				text-align: center;
	 				background-color: #eeeeee;
	 				color: #808080;
	 				width: 100px;
	 				height: 100px;
	 			}
	 		`;return(0,jsx_runtime.jsx)(StoryContent,{children:Story()})}],component:Spacer,tags:["stories-mdx"],includeStories:["specificDirections","shorthand"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",strong:"strong",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Spacer",component:Spacer,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>{const StoryContent=styled_components_browser_esm.ZP.div`
	 			${(0,theme.cp)("body.caption.default")};
	 			// styled Spacer
	 			& > div {
	 				background-color: #fed77c;
	 				display: inline-block;
	 			}
	 			// styled content in Spacer
	 			& > div > div {
	 				display: flex;
	 				flex-direction: column;
	 				align-items: center;
	 				justify-content: center;
	 				text-align: center;
	 				background-color: #eeeeee;
	 				color: #808080;
	 				width: 100px;
	 				height: 100px;
	 			}
	 		`;return(0,jsx_runtime.jsx)(StoryContent,{children:Story()})}]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"spacer",children:"Spacer"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Meant for adding space between different components. It allows extracting margins from other components which allows making components more reusable. Also, ",(0,jsx_runtime.jsx)(_components.code,{children:"Spacer"})," allows avoiding creation of custom components that are meant just for adding some margins."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["Keep in mind that ",(0,jsx_runtime.jsx)(_components.code,{children:"Spacer"})," should be used only in places where using ",(0,jsx_runtime.jsx)(_components.code,{children:"flex gap"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"grid gap"})," doesn't make sense."]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Spacer } from '@lokalise/louis';\n\nexport default () => <Spacer>Hello world!</Spacer>;\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Spacer,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"specific-directions",children:"Specific Directions"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Specific Directions",args:{top:2,right:4,bottom:6,left:8},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"shorthand",children:"Shorthand"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Shorthand",args:{vertical:2,horizontal:8},children:Template.bind({})})})]})}}};const Spacer_stories=componentMeta}}]);
//# sourceMappingURL=components-Spacer-Spacer-stories-mdx.415178c1.iframe.bundle.js.map