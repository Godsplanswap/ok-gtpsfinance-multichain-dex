(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[12],{"./src/components/ProAmm/ProAmmFee.tsx":function(e,t,o){"use strict";o.d(t,"a",(function(){return S}));var n=o("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),i=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/@lingui/react/esm/index.js"),s=o("./node_modules/@lingui/core/esm/index.js"),d=o("./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js"),a=o("./node_modules/react/index.js"),c=o("./node_modules/react-feather/dist/icons/info.js"),l=o("./node_modules/rebass/dist/index.esm.js"),u=o("./src/components/Button/index.tsx"),m=o("./src/components/Card/index.tsx"),p=o("./src/components/Column/index.tsx"),b=o("./src/components/CurrencyLogo/index.tsx"),x=o("./src/components/Divider/index.tsx"),j=o("./src/components/FormattedCurrencyAmount/index.tsx"),h=o("./src/components/QuestionHelper/index.tsx"),g=o("./src/components/Row/index.tsx"),f=o("./src/components/Tooltip/index.tsx"),y=o("./src/hooks/index.ts"),v=o("./src/hooks/useContract.ts"),O=o("./src/hooks/useMixpanel.ts"),C=o("./src/hooks/useTheme.ts"),k=o("./src/hooks/useTransactionDeadline.ts"),w=o("./src/state/transactions/hooks.tsx"),_=o("./src/state/transactions/type.ts"),T=o("./src/state/user/hooks.tsx"),I=o("./src/utils/index.ts"),R=o("./src/utils/wrappedCurrency.ts"),E=o("./node_modules/react/jsx-runtime.js");function S(e){var t=e.tokenId,o=e.position,S=e.layout,A=void 0===S?0:S,N=e.text,P=void 0===N?"":N,z=e.hasUserDepositedInFarm,L=e.feeValue0,U=e.feeValue1,q=e.totalFeeRewardUSD,Y=Object(y.b)(),F=Y.chainId,W=Y.account,D=Object(y.e)().library,M=Object(C.a)(),B=Object(R.a)(o.pool.token0),V=Object(R.a)(o.pool.token1),Q=Object(w.h)(),H=Object(v.o)(),G=Object(k.a)(),Z=Object(O.c)().mixpanelHandler,J=Object(T.y)(),K=Object(i.a)(J,1)[0],X=Object(a.useCallback)((()=>{if(F&&L&&U&&H&&W&&t&&D&&G&&A){Z(O.a.ELASTIC_COLLECT_FEES_INITIATED,{token_1:null===B||void 0===B?void 0:B.symbol,token_2:null===V||void 0===V?void 0:V.symbol});var e=d.NonfungiblePositionManager.collectCallParameters({tokenId:t.toString(),expectedCurrencyOwed0:L.subtract(L.multiply(Object(I.a)(K))),expectedCurrencyOwed1:U.subtract(U.multiply(Object(I.a)(K))),recipient:W,deadline:G.toString(),havingFee:!0}),o=e.calldata,i=e.value,r={to:H.address,data:o,value:i};D.getSigner().estimateGas(r).then((e=>{var t=Object(n.a)(Object(n.a)({},r),{},{gasLimit:Object(I.b)(e)});return D.getSigner().sendTransaction(t).then((e=>{Q({hash:e.hash,type:_.a.COLLECT_FEE,summary:L.toSignificant(6)+" "+L.currency.symbol+" and "+U.toSignificant(6)+" "+U.currency.symbol,arbitrary:{token_1:null===B||void 0===B?void 0:B.symbol,token_2:null===V||void 0===V?void 0:V.symbol,token_1_amount:L.toSignificant(6),token_2_amount:U.toSignificant(6)}})}))})).catch((e=>{console.error(e)}))}}),[F,L,U,H,W,t,Q,D,G,A,B,V,Z,K]),$=!(null!==L&&void 0!==L&&L.greaterThan(0)||null!==U&&void 0!==U&&U.greaterThan(0));return 0===A?Object(E.jsx)(m.e,{marginTop:"1rem",padding:"1rem",children:Object(E.jsxs)(p.a,{gap:"md",children:[Object(E.jsx)(l.d,{fontSize:"16px",fontWeight:"500",children:"Your Fee Earnings"}),P&&Object(E.jsx)(l.d,{color:M.subText,fontSize:"12px",children:P}),Object(E.jsx)(x.b,{}),Object(E.jsxs)(g.b,{children:[Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"Total Fees Earned"})}),Object(E.jsx)(g.d,{children:Object(E.jsx)(l.d,{fontSize:14,fontWeight:500,marginLeft:"6px",children:Object(I.j)(q,!0)})})]}),Object(E.jsxs)(g.b,{children:[Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"{0} Fees Earned",values:{0:B.symbol}})}),Object(E.jsxs)(g.d,{children:[Object(E.jsx)(b.a,{size:"16px",style:{marginLeft:"8px"},currency:B}),Object(E.jsxs)(l.d,{fontSize:14,fontWeight:500,marginLeft:"6px",children:[L&&Object(E.jsx)(j.a,{currencyAmount:L})," ",B.symbol]})]})]}),Object(E.jsxs)(g.b,{children:[Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"{0} Fees Earned",values:{0:V.symbol}})}),Object(E.jsxs)(g.d,{children:[Object(E.jsx)(b.a,{size:"16px",style:{marginLeft:"8px"},currency:V}),Object(E.jsxs)(l.d,{fontSize:14,fontWeight:500,marginLeft:"6px",children:[U&&Object(E.jsx)(j.a,{currencyAmount:U})," ",V.symbol]})]})]})]})}):Object(E.jsx)(m.e,{marginTop:"1rem",padding:"1rem",children:Object(E.jsxs)(p.a,{gap:"md",children:[Object(E.jsxs)(g.b,{children:[Object(E.jsx)(l.b,{children:Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"Total Fees Earned"})})}),Object(E.jsx)(g.d,{children:Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,children:Object(I.j)(q,!0)})})]}),Object(E.jsxs)(g.b,{children:[Object(E.jsxs)(l.b,{children:[Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"{0} Fees Earned",values:{0:B.symbol}})}),Object(E.jsx)(h.a,{text:s.a._("Your fees are being automatically compounded so you earn more")})]}),Object(E.jsxs)(g.d,{children:[Object(E.jsx)(b.a,{size:"16px",style:{marginLeft:"8px"},currency:B}),Object(E.jsxs)(l.d,{fontSize:12,fontWeight:500,marginLeft:"6px",children:[L&&Object(E.jsx)(j.a,{currencyAmount:L})," ",B.symbol]})]})]}),Object(E.jsxs)(g.b,{children:[Object(E.jsxs)(l.b,{children:[Object(E.jsx)(l.d,{fontSize:12,fontWeight:500,color:M.subText,children:Object(E.jsx)(r.b,{id:"{0} Fees Earned",values:{0:V.symbol}})}),Object(E.jsx)(h.a,{text:s.a._("Your fees are being automatically compounded so you earn more")})]}),Object(E.jsxs)(g.d,{children:[Object(E.jsx)(b.a,{size:"16px",style:{marginLeft:"8px"},currency:V}),Object(E.jsxs)(l.d,{fontSize:12,fontWeight:500,marginLeft:"6px",children:[U&&Object(E.jsx)(j.a,{currencyAmount:U})," ",V.symbol]})]})]}),z?Object(E.jsx)(f.a,{placement:"top",text:s.a._("You need to withdraw your deposited liquidity position from the Farm first"),children:Object(E.jsx)(l.b,{sx:{cursor:"not-allowed",width:"100%"},children:Object(E.jsx)(u.f,{style:{padding:"10px",fontSize:"14px",width:"100%",pointerEvents:"none"},disabled:!0,children:Object(E.jsxs)(l.b,{alignItems:"center",sx:{gap:"8px"},children:[Object(E.jsx)(c.a,{size:16}),Object(E.jsx)(r.b,{id:"Collect Fees"})]})})})}):Object(E.jsx)(u.f,{disabled:$,onClick:X,style:{padding:"10px",fontSize:"14px"},children:Object(E.jsxs)(l.b,{alignItems:"center",sx:{gap:"8px"},children:[Object(E.jsx)(h.a,{placement:"top",size:16,text:$?s.a._("You don't have any fees to collect"):s.a._("By collecting, you will receive 100% of your fee earnings"),useCurrentColor:!0}),Object(E.jsx)(r.b,{id:"Collect Fees"})]})})]})})}},"./src/components/Slider/index.tsx":function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o("./node_modules/react/index.js"),i=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=o("./node_modules/react/jsx-runtime.js"),s=i.default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-1tszkgv-0"})(["-webkit-appearance:none;width:100%;background:transparent;cursor:pointer;&:focus{outline:none;}&::-moz-focus-outer{border:0;}&::-webkit-slider-thumb{-webkit-appearance:none;height:","px;width:","px;background-color:",";border-radius:100%;border:none;transform:translateY(-50%);color:",";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-moz-range-thumb{height:","px;width:","px;background-color:",";border-radius:100%;border:none;color:",";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-ms-thumb{height:","px;width:","px;background-color:",";border-radius:100%;color:",";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-webkit-slider-runnable-track{background:linear-gradient(90deg,",",",");height:2px;}&::-moz-range-track{background:linear-gradient(90deg,",",",");height:2px;}&::-ms-track{width:100%;border-color:transparent;color:transparent;background:",";height:2px;}&::-ms-fill-lower{background:",";}&::-ms-fill-upper{background:",";}"],(e=>e.size),(e=>e.size),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.size),(e=>e.size),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.size),(e=>e.size),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText),(e=>e.theme.subText));function d(e){var t=e.value,o=e.onChange,i=e.min,d=void 0===i?0:i,a=e.step,c=void 0===a?1:a,l=e.max,u=void 0===l?100:l,m=e.size,p=void 0===m?28:m,b=e.style,x=e.className,j=Object(n.useCallback)((e=>{o(parseInt(e.target.value))}),[o]);return Object(r.jsx)(s,{size:p,type:"range",value:t,style:b||{width:"90%",marginLeft:15,marginRight:15,padding:"15px 0"},onChange:j,"aria-labelledby":"input slider",step:c,min:d,max:u,className:x})}},"./src/hooks/useProAmmPositionFees.ts":function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var n=o("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),i=o("./src/utils/wrappedCurrency.ts"),r=o("./src/hooks/useProAmmPreviousTicks.ts");function s(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=null===e||void 0===e?void 0:e.toHexString(),d=Object(r.b)(null===t||void 0===t?void 0:t.pool,s),a=d.current,c=d.last24h;return t&&2===a.length?{current:[n.CurrencyAmount.fromRawAmount(o?null===t||void 0===t?void 0:t.pool.token0:Object(i.a)(null===t||void 0===t?void 0:t.pool.token0),a[0]),n.CurrencyAmount.fromRawAmount(o?null===t||void 0===t?void 0:t.pool.token1:Object(i.a)(null===t||void 0===t?void 0:t.pool.token1),a[1])],last24h:[n.CurrencyAmount.fromRawAmount(o?null===t||void 0===t?void 0:t.pool.token0:Object(i.a)(null===t||void 0===t?void 0:t.pool.token0),c[0]),n.CurrencyAmount.fromRawAmount(o?null===t||void 0===t?void 0:t.pool.token1:Object(i.a)(null===t||void 0===t?void 0:t.pool.token1),c[1])]}:{current:[void 0,void 0],last24h:[void 0,void 0]}}},"./src/hooks/useProAmmPositions.ts":function(e,t,o){"use strict";o.d(t,"b",(function(){return p})),o.d(t,"a",(function(){return b}));var n=o("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),i=o("./node_modules/@ethersproject/abi/lib.esm/abi-coder.js"),r=o("./node_modules/@ethersproject/address/lib.esm/index.js"),s=o("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),d=o("./node_modules/@ethersproject/solidity/lib.esm/index.js"),a=o("./node_modules/react/index.js"),c=o("./src/hooks/index.ts"),l=o("./src/state/multicall/hooks.ts"),u=o("./src/hooks/useContract.ts");function m(e){var t=Object(u.o)(),o=Object(c.b)(),s=o.isEVM,m=o.networkInfo,p=Object(a.useMemo)((()=>e?e.map((e=>[e])):[]),[e]),b=Object(l.d)(t,"positions",p),x=Object(a.useMemo)((()=>b.some((e=>e.loading))),[b]),j=Object(a.useMemo)((()=>b.some((e=>e.error))),[b]),h=Object(a.useMemo)((()=>{if(!x&&!j&&e&&s)return b.map(((t,o)=>{var n=e[o],s=t.result;return{tokenId:n,poolId:Object(r.getCreate2Address)(m.elastic.coreFactory,Object(d.keccak256)(["bytes"],[i.b.encode(["address","address","uint24"],[s.info.token0,s.info.token1,s.info.fee])]),m.elastic.initCodeHash),feeGrowthInsideLast:s.pos.feeGrowthInsideLast,nonce:s.pos.nonce,liquidity:s.pos.liquidity,operator:s.pos.operator,tickLower:s.pos.tickLower,tickUpper:s.pos.tickUpper,rTokenOwed:s.pos.rTokenOwed,fee:s.info.fee,token0:s.info.token0,token1:s.info.token1}}))}),[x,j,b,e,m,s]);return Object(a.useMemo)((()=>({loading:x,positions:null===h||void 0===h?void 0:h.map(((e,t)=>Object(n.a)(Object(n.a)({},e),{},{tokenId:p[t][0]})))})),[x,h,p])}function p(e){var t,o=m(e?[e]:void 0);return{loading:o.loading,position:null===(t=o.positions)||void 0===t?void 0:t[0]}}function b(e){var t,o=Object(u.o)(),n=Object(l.c)(o,"balanceOf",[null!==e&&void 0!==e?e:void 0]),i=n.loading,r=n.result,d=null===r||void 0===r||null===(t=r[0])||void 0===t?void 0:t.toNumber(),c=Object(a.useMemo)((()=>{if(d&&e){for(var t=[],o=0;o<d;o++)t.push([e,o]);return t}return[]}),[e,d]),p=Object(l.d)(o,"tokenOfOwnerByIndex",c),b=Object(a.useMemo)((()=>p.some((e=>e.loading))),[p]),x=m(Object(a.useMemo)((()=>e?p.map((e=>e.result)).filter((e=>!!e)).map((e=>s.a.from(e[0]))):[]),[e,p])),j=x.positions,h=x.loading;return Object(a.useMemo)((()=>({loading:b||i||h,positions:j})),[b,i,h,j])}},"./src/pages/RemoveLiquidity/styled.tsx":function(e,t,o){"use strict";o.d(t,"j",(function(){return d})),o.d(t,"a",(function(){return a})),o.d(t,"f",(function(){return c})),o.d(t,"n",(function(){return l})),o.d(t,"g",(function(){return u})),o.d(t,"k",(function(){return m})),o.d(t,"e",(function(){return p})),o.d(t,"l",(function(){return b})),o.d(t,"h",(function(){return x})),o.d(t,"d",(function(){return j})),o.d(t,"c",(function(){return h})),o.d(t,"m",(function(){return g})),o.d(t,"i",(function(){return f})),o.d(t,"b",(function(){return y}));var n,i=o("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),s=o("./src/components/Column/index.tsx"),d=r.default.div.withConfig({displayName:"styled__PageWrapper",componentId:"sc-52z1f1-0"})(["padding:28px 16px 100px;width:100%;@media only screen and (min-width:768px){padding:24px 16px 100px;}@media only screen and (min-width:1000px){padding:24px 32px 100px;}@media only screen and (min-width:1366px){padding:24px 215px 50px;}@media only screen and (min-width:1440px){padding:24px 252px 50px;}"]),a=r.default.div.withConfig({displayName:"styled__Container",componentId:"sc-52z1f1-1"})(["max-width:936px;margin:0 auto;padding:4px 20px 24px;background:",";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:8px;@media only screen and (min-width:1000px){padding:4px 24px 24px;}"],(e=>e.theme.background)),c=r.default.div.withConfig({displayName:"styled__GridColumn",componentId:"sc-52z1f1-2"})(["display:grid;grid-template-columns:1fr;@media only screen and (min-width:768px){grid-template-columns:1fr 1fr;}"]),l=r.default.div.withConfig({displayName:"styled__TopBar",componentId:"sc-52z1f1-3"})(["padding:20px 0;display:flex;flex-direction:column-reverse;align-items:center;border-top:1px solid ",";margin-top:1rem;@media only screen and (min-width:768px){display:grid;grid-template-columns:1fr 1fr;margin-top:0;}"],(e=>e.theme.border)),u=r.default.div.withConfig({displayName:"styled__LiquidityProviderModeWrapper",componentId:"sc-52z1f1-4"})(["width:100%;@media only screen and (min-width:768px){padding-right:24px;}"]),m=r.default.div.withConfig({displayName:"styled__PoolName",componentId:"sc-52z1f1-5"})(["display:flex;margin-bottom:24px;font-size:14px;font-weight:500;color:",";@media only screen and (min-width:768px){justify-content:flex-end;margin-bottom:0;}"],(e=>e.theme.subText)),p=Object(r.default)(s.a).withConfig({displayName:"styled__FirstColumn",componentId:"sc-52z1f1-6"})(["grid-auto-rows:min-content;padding-bottom:24px;border-bottom:1px solid ",";gap:20px;@media only screen and (min-width:768px){padding-right:24px;padding-bottom:0;border-right:1px solid ",";border-bottom:none;}"],(e=>e.theme.border),(e=>e.theme.border)),b=Object(r.default)(s.a).withConfig({displayName:"styled__SecondColumn",componentId:"sc-52z1f1-7"})(["grid-auto-rows:min-content;padding-top:24px;@media only screen and (min-width:768px){padding-left:24px;padding-top:0;}"]),x=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-52z1f1-8"})(["flex:1;padding:6px 0;background-color:",";border:1px solid transparent;border-radius:999px;font-size:1rem;",";font-weight:500;cursor:pointer;margin:0.25rem;overflow:hidden;color:",";:hover{border:1px solid ",";}:focus{border:1px solid ",";outline:none;}"],(e=>{var t=e.theme;return"".concat(t.primary,"33")}),(e=>e.theme.mediaWidth.upToSmall(n||(n=Object(i.a)(["\n    padding: 0.25rem 0;\n  "])))),(e=>e.theme.primary),(e=>e.theme.primary),(e=>e.theme.primary)),j=Object(r.default)(s.a).withConfig({displayName:"styled__DetailWrapper",componentId:"sc-52z1f1-9"})(["padding:1rem 1rem 12px;border:1px solid ",";margin:24px 0 28px;border-radius:20px;"],(e=>e.theme.border)),h=r.default.div.withConfig({displayName:"styled__DetailBox",componentId:"sc-52z1f1-10"})(["display:grid;grid-template-columns:1fr 1fr;"]),g=r.default.div.withConfig({displayName:"styled__TokenWrapper",componentId:"sc-52z1f1-11"})(["display:flex;align-items:center;gap:4px;"]),f=r.default.div.withConfig({displayName:"styled__ModalDetailWrapper",componentId:"sc-52z1f1-12"})(["border:1px solid ",";border-radius:20px;padding:1rem;margin-bottom:28px;"],(e=>e.theme.border)),y=r.default.div.withConfig({displayName:"styled__CurrentPriceWrapper",componentId:"sc-52z1f1-13"})(["display:flex;flex-direction:column;@media only screen and (min-width:768px){flex-direction:row;justify-content:space-between;align-items:center;}"])},"./src/pages/RemoveLiquidityProAmm/index.tsx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return he}));var n=o("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),i=o("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),r=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),d=o("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=o("./node_modules/@lingui/react/esm/index.js"),c=o("./node_modules/@lingui/core/esm/index.js"),l=o("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),u=o("./node_modules/@kyberswap/ks-sdk-classic/dist/index.js"),m=o("./node_modules/@kyberswap/ks-sdk-core/dist/index.js"),p=o("./node_modules/@kyberswap/ks-sdk-elastic/dist/index.js"),b=o("./node_modules/jsbi/dist/jsbi-umd.js"),x=o.n(b),j=o("./node_modules/react/index.js"),h=o("./node_modules/react-router/esm/react-router.js"),g=o("./node_modules/rebass/dist/index.esm.js"),f=o("./node_modules/styled-components/dist/styled-components.browser.esm.js"),y=o("./src/components/Button/index.tsx"),v=o("./src/components/Card/index.tsx"),O=o("./src/components/Column/index.tsx"),C=o("./src/components/Copy/index.tsx"),k=o("./src/components/CurrencyInputPanel/index.tsx"),w=o("./src/components/Divider/index.tsx"),_=o("./src/components/Loader/index.tsx"),T=o("./src/components/NavigationTabs/index.tsx"),I=o("./src/components/ProAmm/ProAmmFee.tsx"),R=o("./src/components/ProAmm/ProAmmPoolInfo.tsx"),E=o("./src/components/ProAmm/ProAmmPooledTokens.tsx"),S=o("./src/components/Slider/index.tsx"),A=o("./src/components/TransactionConfirmationModal/index.tsx"),N=o("./src/components/Tutorial/index.tsx"),P=o("./src/constants/v2.ts"),z=o("./src/hooks/index.ts"),L=o("./src/hooks/useContract.ts"),U=o("./src/hooks/usePrevious.ts"),q=o("./src/hooks/useProAmmPoolInfo.ts"),Y=o("./src/hooks/useProAmmPositions.ts"),F=o("./src/hooks/useTheme.ts"),W=o("./src/hooks/useTransactionDeadline.ts"),D=o("./src/pages/RemoveLiquidity/styled.tsx"),M=o("./src/state/application/hooks.ts"),B=o("./src/state/burn/proamm/actions.ts"),V=o("./src/hooks/Tokens.ts"),Q=o("./src/hooks/usePools.ts"),H=o("./src/hooks/useProAmmPositionFees.ts"),G=o("./src/state/hooks.ts"),Z=o("./src/state/swap/hooks.ts"),J=o("./src/utils/wrappedCurrency.ts"),K=o("./node_modules/react/jsx-runtime.js");function X(){return Object(G.b)((e=>e.burnProAmm))}var $,ee,te,oe,ne,ie=o("./src/state/multicall/hooks.ts"),re=o("./src/state/transactions/hooks.tsx"),se=o("./src/state/transactions/type.ts"),de=o("./src/state/user/hooks.tsx"),ae=o("./src/utils/index.ts"),ce=o("./src/utils/useDebouncedChangeHandler.tsx"),le=f.default.div.withConfig({displayName:"styled__Container",componentId:"sc-12rct2w-0"})(["text-align:center;width:calc(100% - 24px);margin:24px auto 12px;max-width:936px;border-radius:0.5rem;background:",";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);padding:0 20px 28px;",";"],(e=>e.theme.background),(e=>e.theme.mediaWidth.upToSmall($||($=Object(d.a)(["\n    padding: 0 16px 24px;\n  "]))))),ue=f.default.div.withConfig({displayName:"styled__GridColumn",componentId:"sc-12rct2w-1"})(["display:grid;grid-template-columns:1fr;@media only screen and (min-width:768px){grid-template-columns:1fr 1fr;}"]),me=Object(f.default)(O.a).withConfig({displayName:"styled__FirstColumn",componentId:"sc-12rct2w-2"})(["grid-auto-rows:min-content;padding-bottom:24px;border-bottom:1px solid ",";gap:20px;@media only screen and (min-width:768px){padding-right:24px;padding-bottom:0;border-right:1px solid ",";border-bottom:none;}"],(e=>e.theme.border),(e=>e.theme.border)),pe=Object(f.default)(O.a).withConfig({displayName:"styled__SecondColumn",componentId:"sc-12rct2w-3"})(["grid-auto-rows:min-content;padding-top:24px;@media only screen and (min-width:768px){padding-left:24px;padding-top:0;}"]),be=Object(f.default)(D.h).withConfig({displayName:"RemoveLiquidityProAmm__MaxButton",componentId:"sc-1otf4nh-0"})(["margin:0;flex:unset;padding:0.375rem 0.75rem;font-size:0.875rem;font-weight:500;height:max-content;width:max-content;"," ",""],(e=>e.theme.mediaWidth.upToSmall(ee||(ee=Object(d.a)(["\n    padding: 0.375rem 0.75rem;\n    font-size: 0.875rem;\n  "])))),(e=>e.theme.mediaWidth.upToExtraSmall(te||(te=Object(d.a)(["\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n    flex: 1;\n  "]))))),xe=Object(f.default)(g.b).withConfig({displayName:"RemoveLiquidityProAmm__MaxButtonGroup",componentId:"sc-1otf4nh-1"})(["gap:0.5rem;justify-content:flex-end;flex:1;",""],(e=>e.theme.mediaWidth.upToExtraSmall(oe||(oe=Object(d.a)(["\n    gap: 0.25rem\n  "]))))),je=Object(f.default)(g.d).withConfig({displayName:"RemoveLiquidityProAmm__PercentText",componentId:"sc-1otf4nh-2"})(["",""],(e=>e.theme.mediaWidth.upToExtraSmall(ne||(ne=Object(d.a)(["\n    font-size: 28px !important;\n    min-width: 72px !important;\n  "])))));function he(e){var t=e.location,o=e.match.params.tokenId,n=Object(j.useMemo)((()=>{try{return l.a.from(o)}catch(e){return null}}),[o]);return null===n||n.eq(0)?Object(K.jsx)(h.a,{to:Object(s.a)(Object(s.a)({},t),{},{pathname:"/myPools"})}):Object(K.jsx)(ge,{tokenId:n})}function ge(e){var t,o,d,l,b,f,D,$,ee,te,oe,ne,he,ge=e.tokenId,fe=Object(Y.b)(ge).position,ye=Object(L.o)(),ve=Object(F.a)(),Oe=Object(z.b)(),Ce=Oe.account,ke=Oe.chainId,we=Oe.isEVM,_e=Object(z.e)().library,Te=Object(M.y)(),Ie=null===(t=Object(ie.c)(ge?ye:null,"ownerOf",[ge.toNumber()]).result)||void 0===t?void 0:t[0],Re=Ie===Ce,Ee=Object(h.g)(),Se=Object(U.a)(ke);Object(j.useEffect)((()=>{ke&&Se&&ke!==Se&&Ee.push("/myPools")}),[ke,Se,Ee]);var Ae=Object(j.useState)(!1),Ne=Object(r.a)(Ae,2),Pe=Ne[0],ze=Ne[1],Le=X(),Ue=Le.independentField,qe=Le.typedValue,Ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=Object(z.b)().account,n=X(),i=n.independentField,s=n.typedValue,d=Object(V.c)(null===e||void 0===e?void 0:e.token0),c=Object(V.c)(null===e||void 0===e?void 0:e.token1),l={[B.a.CURRENCY_A]:d,[B.a.CURRENCY_B]:c},u=Object(Q.b)(null!==d&&void 0!==d?d:void 0,null!==c&&void 0!==c?c:void 0,null===e||void 0===e?void 0:e.fee),b=Object(r.a)(u,2)[1],x=Object(j.useMemo)((()=>b&&null!==e&&void 0!==e&&e.liquidity&&"number"===typeof(null===e||void 0===e?void 0:e.tickLower)&&"number"===typeof(null===e||void 0===e?void 0:e.tickUpper)?new p.Position({pool:b,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[b,e]),h={[B.a.CURRENCY_A]:x&&x.amount0,[B.a.CURRENCY_B]:x&&x.amount1},g=new m.Percent("0","100");if(i===B.a.LIQUIDITY_PERCENT)g=new m.Percent(s,"100");else if(l[i]){var f,y=Object(Z.a)(s,null!==(f=l[i])&&void 0!==f?f:void 0),v=h[i];y&&v&&!y.greaterThan(v)&&(g=new m.Percent(y.quotient,v.quotient))}var O,C=x?g.multiply(x.amount0.quotient).quotient:void 0,k=x?g.multiply(x.amount1.quotient).quotient:void 0,w=d&&C?m.CurrencyAmount.fromRawAmount(t?d:Object(J.a)(d),C):void 0,_=c&&k?m.CurrencyAmount.fromRawAmount(t?c:Object(J.a)(c),k):void 0,T=!(!b||!e)&&(b.tickCurrent<e.tickLower||b.tickCurrent>=e.tickUpper);o||(O=Object(K.jsx)(a.b,{id:"Connect Wallet"}));var I=Object(H.a)(null===e||void 0===e?void 0:e.tokenId,b&&e?new p.Position({pool:b,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0,t).current,R=Object(r.a)(I,2),E=R[0],S=R[1],A={[B.a.LIQUIDITY_PERCENT]:g,[B.a.CURRENCY_A]:d&&g&&g.greaterThan("0")&&w&&x?m.TokenAmount.fromRawAmount(d.wrapped,g.multiply(x.amount0.quotient).quotient):void 0,[B.a.CURRENCY_B]:c&&g&&g.greaterThan("0")&&_&&x?m.TokenAmount.fromRawAmount(c.wrapped,g.multiply(x.amount1.quotient).quotient):void 0};return{position:x,pooledAmount0:h[B.a.CURRENCY_A],pooledAmount1:h[B.a.CURRENCY_B],liquidityPercentage:g,liquidityValue0:w,liquidityValue1:_,feeValue0:E,feeValue1:S,outOfRange:T,error:O,parsedAmounts:A}}(fe,Pe),Fe=Ye.position,We=Ye.liquidityPercentage,De=Ye.liquidityValue0,Me=Ye.liquidityValue1,Be=Ye.pooledAmount0,Ve=Ye.pooledAmount1,Qe=Ye.feeValue0,He=Ye.feeValue1,Ge=Ye.error,Ze=Ye.parsedAmounts,Je=!(!ke||null===De||void 0===De||!De.currency.isNative),Ke=!(!ke||null===De||void 0===De||!De.currency.equals(m.WETH[ke])),Xe=!(!ke||null===Me||void 0===Me||!Me.currency.isNative),$e=!(!ke||null===Me||void 0===Me||!Me.currency.equals(m.WETH[ke])),et=function(){var e=Object(G.a)();return{onUserInput:Object(j.useCallback)(((t,o)=>{e(Object(B.b)({field:t,typedValue:o}))}),[e])}}(),tt=et.onUserInput,ot=null===fe||void 0===fe||null===(o=fe.liquidity)||void 0===o?void 0:o.eq(0),nt=Object(q.a)(null===Fe||void 0===Fe||null===(d=Fe.pool)||void 0===d?void 0:d.token0,null===Fe||void 0===Fe||null===(l=Fe.pool)||void 0===l?void 0:l.token1,null===Fe||void 0===Fe||null===(b=Fe.pool)||void 0===b?void 0:b.fee),it=Fe&&Object(J.a)(Fe.pool.token0),rt=Fe&&Object(J.a)(Fe.pool.token1),st=Object(j.useCallback)((e=>{tt(B.a.LIQUIDITY_PERCENT,e.toString())}),[tt]),dt=Object(ce.a)(Number.parseInt(Ze[B.a.LIQUIDITY_PERCENT].toFixed(0)),st),at=Object(r.a)(dt,2),ct=at[0],lt=at[1],ut={[B.a.LIQUIDITY_PERCENT]:Ze[B.a.LIQUIDITY_PERCENT].equalTo("0")?"0":Ze[B.a.LIQUIDITY_PERCENT].lessThan(new m.Percent("1","100"))?"<1":Ze[B.a.LIQUIDITY_PERCENT].toFixed(0),[B.a.CURRENCY_A]:Ue===B.a.CURRENCY_A?qe:null!==(f=null===(D=Ze[B.a.CURRENCY_A])||void 0===D?void 0:D.toSignificant(6))&&void 0!==f?f:"",[B.a.CURRENCY_B]:Ue===B.a.CURRENCY_B?qe:null!==($=null===(ee=Ze[B.a.CURRENCY_B])||void 0===ee?void 0:ee.toSignificant(6))&&void 0!==$?$:""},mt=Object(M.v)([null===De||void 0===De?void 0:De.currency.wrapped,null===Me||void 0===Me?void 0:Me.currency.wrapped],P.c.ELASTIC),pt=parseFloat((null===Qe||void 0===Qe?void 0:Qe.toExact())||"0")*mt[0]+parseFloat((null===He||void 0===He?void 0:He.toExact())||"0")*mt[1],bt=Ze[B.a.CURRENCY_A]&&mt[0]?parseFloat(Ze[B.a.CURRENCY_A].toSignificant(6))*mt[0]:0,xt=Ze[B.a.CURRENCY_B]&&mt[1]?parseFloat(Ze[B.a.CURRENCY_B].toSignificant(6))*mt[1]:0,jt=Object(W.a)(),ht=Object(de.y)(),gt=Object(j.useState)(!1),ft=Object(r.a)(gt,2),yt=ft[0],vt=ft[1],Ot=Object(j.useState)(!1),Ct=Object(r.a)(Ot,2),kt=Ct[0],wt=Ct[1],_t=Object(j.useState)(),Tt=Object(r.a)(_t,2),It=Tt[0],Rt=Tt[1],Et=Object(re.h)(),St=Object(j.useCallback)(Object(i.a)(Object(n.a)().mark((function e(){var t,o,i,r;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(wt(!0),ye&&De&&Me&&jt&&Ce&&ke&&Qe&&He&&Fe&&We&&_e){e.next=4;break}return wt(!1),e.abrupt("return");case 4:t=p.NonfungiblePositionManager.removeCallParameters(Fe,{tokenId:ge.toString(),liquidityPercentage:We,slippageTolerance:Object(ae.a)(ht[0]),deadline:jt.toString(),collectOptions:{expectedCurrencyOwed0:Qe,expectedCurrencyOwed1:He,recipient:Ce,deadline:jt.toString(),isRemovingLiquid:!0,havingFee:!(Qe.equalTo(x.a.BigInt("0"))&&He.equalTo(x.a.BigInt("0")))}}),o=t.calldata,i=t.value,r={to:ye.address,data:o,value:i},_e.getSigner().estimateGas(r).then((e=>{var t=Object(s.a)(Object(s.a)({},r),{},{gasLimit:Object(ae.b)(e)});return _e.getSigner().sendTransaction(t).then((e=>{wt(!1),Et({hash:e.hash,type:se.a.ELASTIC_REMOVE_LIQUIDITY,summary:(null===De||void 0===De?void 0:De.toSignificant(6))+" "+(null===De||void 0===De?void 0:De.currency.symbol)+" and "+(null===Me||void 0===Me?void 0:Me.toSignificant(6))+" "+(null===Me||void 0===Me?void 0:Me.currency.symbol),arbitrary:{poolAddress:nt,token_1:null===it||void 0===it?void 0:it.symbol,token_2:null===rt||void 0===rt?void 0:rt.symbol}}),Rt(e.hash)}))})).catch((e=>{wt(!1),console.error(e)}));case 7:case"end":return e.stop()}}),e)}))),[ye,De,Me,jt,Ce,ke,Qe,He,Fe,We,_e,ge,ht,Et,nt,it,rt]),At=Object(j.useCallback)((()=>{vt(!1),It&&tt(B.a.LIQUIDITY_PERCENT,"0"),wt(!1),Rt("")}),[tt,It]),Nt=Object(K.jsx)(a.b,{id:"Removing {0} {1} and {2} {3}{4}{5}",values:{0:null===De||void 0===De?void 0:De.toSignificant(6),1:null===De||void 0===De||null===(te=De.currency)||void 0===te?void 0:te.symbol,2:null===Me||void 0===Me?void 0:Me.toSignificant(6),3:null===Me||void 0===Me||null===(oe=Me.currency)||void 0===oe?void 0:oe.symbol,4:null!==Qe&&void 0!==Qe&&Qe.greaterThan(u.ZERO)||null!==He&&void 0!==He&&He.greaterThan(u.ZERO)?Object(K.jsx)("br",{}):"",5:null!==Qe&&void 0!==Qe&&Qe.greaterThan(u.ZERO)||null!==He&&void 0!==He&&He.greaterThan(u.ZERO)?"Collecting fee of ".concat(null===Qe||void 0===Qe?void 0:Qe.toSignificant(6)," ").concat(null===Qe||void 0===Qe||null===(ne=Qe.currency)||void 0===ne?void 0:ne.symbol," and ").concat(null===He||void 0===He?void 0:He.toSignificant(6)," ").concat(null===He||void 0===He||null===(he=He.currency)||void 0===he?void 0:he.symbol):""}});function Pt(){return Object(K.jsx)(y.h,{mt:"16px",onClick:St,children:Object(K.jsx)(a.b,{id:"Remove"})})}var zt=Object(j.useCallback)((e=>tt(B.a.CURRENCY_A,e)),[tt]),Lt=Object(j.useCallback)((e=>tt(B.a.CURRENCY_B,e)),[tt]);return we?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(A.c,{isOpen:yt,onDismiss:At,attemptingTxn:kt,hash:It,content:()=>Object(K.jsx)(A.a,{title:c.a._("Remove Liquidity"),onDismiss:At,topContent:()=>Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(E.a,{liquidityValue0:De,liquidityValue1:Me,title:c.a._("Remove Amount")}),Fe?Object(K.jsx)(I.a,{totalFeeRewardUSD:pt,feeValue0:Qe,feeValue1:He,position:Fe,tokenId:ge}):Object(K.jsx)(_.a,{})]}),bottomContent:Pt}),pendingText:Nt}),Object(K.jsxs)(le,{children:[Object(K.jsx)(T.a,{action:T.c.REMOVE,hideShare:!0,tooltip:c.a._("You can remove your liquidity here. When you remove liquidity (even partially), you will receive 100% of your fee earnings"),tutorialType:N.a.ELASTIC_REMOVE_LIQUIDITY}),Ie&&Ce&&!Re?Object(K.jsxs)(g.d,{fontSize:"12px",fontWeight:"500",paddingTop:"10px",paddingBottom:"10px",backgroundColor:ve.bg3Opacity4,color:ve.subText,style:{borderRadius:"4px",marginBottom:"1.25rem"},children:["The owner of this liquidity position is ",Object(ae.w)(ke,Ie),Object(K.jsx)("span",{style:{display:"inline-block"},children:Object(K.jsx)(C.a,{toCopy:Ie})})]}):Object(K.jsx)(w.b,{style:{marginBottom:"1.25rem"}}),fe?Object(K.jsxs)(O.a,{gap:"md",style:{textAlign:"left"},children:[Fe?Object(K.jsx)(R.a,{position:Fe,tokenId:ge.toString()}):Object(K.jsx)(_.a,{}),Object(K.jsxs)(ue,{children:[Object(K.jsxs)(me,{children:[Object(K.jsx)(E.a,{pooled:!0,liquidityValue0:Be,liquidityValue1:Ve}),Fe?Object(K.jsx)(I.a,{totalFeeRewardUSD:pt,position:Fe,tokenId:ge,text:c.a._("When you remove liquidity (even partially), you will receive 100% of your fee earnings"),feeValue0:Qe,feeValue1:He}):Object(K.jsx)(_.a,{})]}),Object(K.jsx)(pe,{children:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(v.a,{padding:"1rem",marginTop:"1rem",children:[Object(K.jsx)(g.d,{fontSize:12,color:ve.subText,fontWeight:"500",children:Object(K.jsx)(a.b,{id:"Amount to remove"})}),Object(K.jsxs)(g.b,{marginTop:"0.5rem",sx:{gap:"1rem"},alignItems:"center",children:[Object(K.jsxs)(je,{fontSize:36,fontWeight:"500",children:[ct,"%"]}),Object(K.jsxs)(xe,{children:[Object(K.jsx)(be,{onClick:()=>tt(B.a.LIQUIDITY_PERCENT,"25"),children:Object(K.jsx)(a.b,{id:"25%"})}),Object(K.jsx)(be,{onClick:()=>tt(B.a.LIQUIDITY_PERCENT,"50"),children:Object(K.jsx)(a.b,{id:"50%"})}),Object(K.jsx)(be,{onClick:()=>tt(B.a.LIQUIDITY_PERCENT,"75"),children:Object(K.jsx)(a.b,{id:"75%"})}),Object(K.jsx)(be,{onClick:()=>tt(B.a.LIQUIDITY_PERCENT,"100"),children:Object(K.jsx)(a.b,{id:"Max"})})]})]}),Object(K.jsx)(S.a,{value:ct,onChange:lt,size:16,style:{width:"100%",margin:"1rem 0 0",padding:"0.75rem 0"}})]}),Object(K.jsx)("div",{style:{marginTop:"1.5rem",marginBottom:"1.5rem"},children:Object(K.jsx)(k.g,{value:ut[B.a.CURRENCY_A],onUserInput:zt,onMax:null,onHalf:null,currency:null===De||void 0===De?void 0:De.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokena",estimatedUsd:Object(ae.i)(bt.toString(),!0)||void 0,disableCurrencySelect:!Je&&!Ke,isSwitchMode:Je||Ke,onSwitchCurrency:()=>ze((e=>!e))})}),Object(K.jsx)("div",{children:Object(K.jsx)(k.g,{value:ut[B.a.CURRENCY_B],onUserInput:Lt,onMax:null,onHalf:null,currency:null===Me||void 0===Me?void 0:Me.currency,onCurrencySelect:()=>null,id:"remove-liquidity-tokenb",estimatedUsd:Object(ae.i)(xt.toString(),!0)||void 0,disableCurrencySelect:!Xe&&!$e,isSwitchMode:Xe||$e,onSwitchCurrency:()=>ze((e=>!e))})}),Object(K.jsx)(y.a,{style:{marginTop:"28px"},confirmed:!1,disabled:ot||(null===We||void 0===We?void 0:We.equalTo(new m.Percent(0,100)))||!De||!!Ie&&!!Ce&&!Re,onClick:()=>{Ce?vt(!0):Te()},children:ot?Object(K.jsx)(a.b,{id:"Closed"}):null!==Ge&&void 0!==Ge?Ge:Object(K.jsx)(a.b,{id:"Preview"})})]})})]})]}):Object(K.jsx)(_.a,{})]})]}):Object(K.jsx)(h.a,{to:"/"})}},"./src/utils/useDebouncedChangeHandler.tsx":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=o("./node_modules/react/index.js");function r(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,r=Object(i.useState)((()=>e)),s=Object(n.a)(r,2),d=s[0],a=s[1],c=Object(i.useRef)(),l=Object(i.useCallback)((e=>{a(e),c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{t(e),c.current=void 0}),o)}),[o,t]);return Object(i.useEffect)((()=>{c.current&&(clearTimeout(c.current),c.current=void 0),a(e)}),[e]),[d,l]}}}]);
//# sourceMappingURL=elastic-remove-liquidity-page.d88b3e55.chunk.js.map