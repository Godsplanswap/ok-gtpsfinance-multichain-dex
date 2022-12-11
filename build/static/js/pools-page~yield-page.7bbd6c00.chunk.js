(this["webpackJsonp@kyberswap/interface"]=this["webpackJsonp@kyberswap/interface"]||[]).push([[5],{"./src/components/ClassicElasticTab.tsx":function(e,t,n){"use strict";var o=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),i=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/@lingui/react/esm/index.js"),r=n("./node_modules/querystring-es3/index.js"),d=n("./node_modules/react-router/esm/react-router.js"),s=n("./node_modules/rebass/dist/index.esm.js"),c=n("./src/constants/v2.ts"),l=n("./src/hooks/index.ts"),p=n("./src/hooks/useMixpanel.ts"),m=n("./src/hooks/useParsedQueryString.ts"),u=n("./src/hooks/useTheme.ts"),g=n("./src/utils/string.ts"),b=n("./src/components/Icons/index.ts"),f=n("./src/components/Tooltip/index.tsx"),h=n("./node_modules/react/jsx-runtime.js"),x=["tab"];t.a=function(){var e=Object(m.a)(),t=e.tab,n=void 0===t?c.c.ELASTIC:t,j=Object(i.a)(e,x),y=Object(g.c)(n,c.c)?n:c.c.ELASTIC,w=Object(p.c)().mixpanelHandler,_=Object(l.b)().chainId,k=c.a[_],O=Object(u.a)(),v=Object(d.g)(),C="/farms"===v.location.pathname;return Object(h.jsxs)(s.b,{children:[Object(h.jsx)(f.a,{text:k||"",children:Object(h.jsxs)(s.b,{alignItems:"center",onClick:()=>{if(!k){var e=Object(o.a)(Object(o.a)({},j),{},{tab:c.c.ELASTIC}),t="";switch(v.location.pathname){case"/pools":t=p.a.ELASTIC_POOLS_ELASTIC_POOLS_CLICKED;break;case"/myPools":t=p.a.ELASTIC_MYPOOLS_ELASTIC_POOLS_CLICKED}t&&w(t),v.replace({search:Object(r.stringify)(e)})}},children:[Object(h.jsx)(s.d,{fontWeight:500,fontSize:[18,20,24],color:y===c.c.ELASTIC?k?O.disableText:O.primary:O.subText,width:"auto",marginRight:"5px",role:"button",style:{cursor:k?"not-allowed":"pointer"},children:C?Object(h.jsx)(a.b,{id:"Elastic Farms"}):Object(h.jsx)(a.b,{id:"Elastic Pools"})}),Object(h.jsx)(b.H,{size:20,color:y===c.c.ELASTIC?O.primary:O.subText})]})}),Object(h.jsx)(s.d,{fontWeight:500,fontSize:[18,20,24],color:O.subText,marginX:"12px",children:"|"}),Object(h.jsxs)(s.b,{alignItems:"center",onClick:()=>{var e=Object(o.a)(Object(o.a)({},j),{},{tab:c.c.CLASSIC});v.replace({search:Object(r.stringify)(e)})},children:[Object(h.jsx)(s.d,{fontWeight:500,fontSize:[18,20,24],color:y===c.c.CLASSIC?O.primary:O.subText,width:"auto",marginRight:"5px",style:{cursor:"pointer"},role:"button",children:C?Object(h.jsx)(a.b,{id:"Classic Farms"}):Object(h.jsx)(a.b,{id:"Classic Pools"})}),Object(h.jsx)(b.G,{size:20,color:y===c.c.ELASTIC?O.subText:O.primary})]})]})}},"./src/components/SwitchLocaleLink/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o,i=n("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),a=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),r=n("./node_modules/querystring-es3/index.js"),d=n("./node_modules/react/index.js"),s=n("./node_modules/react-router/esm/react-router.js"),c=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),l=n("./src/constants/locales.tsx"),p=n("./src/hooks/useActiveLocale.ts"),m=n("./src/hooks/useParsedQueryString.ts"),u=n("./src/theme/index.tsx"),g=n("./node_modules/react/jsx-runtime.js"),b=Object(c.default)(u.l.small).withConfig({displayName:"SwitchLocaleLink__Container",componentId:"sc-1rrcg41-0"})(["opacity:0.6;:hover{opacity:1;}margin-top:1rem !important;",";"],(e=>e.theme.mediaWidth.upToMedium(o||(o=Object(a.a)(["\n    display: none;\n  "])))));function f(){var e=Object(p.b)(),t=Object(d.useMemo)((()=>Object(p.a)()),[]),n=Object(s.h)(),o=Object(m.a)();if(t&&(t!==l.a||e!==l.a)){var a;a=e===t?l.a:t;var c=Object(i.a)(Object(i.a)({},n),{},{search:Object(r.stringify)(Object(i.a)(Object(i.a)({},o),{},{lng:a}))});return Object(g.jsxs)(b,{children:["KyberSwap available in: ",Object(g.jsx)(u.k,{to:c,children:l.b[a]})]})}return null}},"./src/components/YieldPools/FarmingPoolAPRCell.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("./node_modules/@lingui/react/esm/index.js"),i=n("./node_modules/react-use/esm/useMedia.js"),a=n("./node_modules/rebass/dist/index.esm.js"),r=n("./src/components/Icons/index.ts"),d=n("./src/components/Tooltip/index.tsx"),s=n("./src/hooks/useTheme.ts"),c=n("./src/state/farms/elastic/hooks.ts"),l=n("./src/state/tokenPrices/hooks.ts"),p=n("./src/theme/index.tsx"),m=n("./node_modules/react/jsx-runtime.js"),u=e=>{var t=e.poolAPR,n=e.farmAPR,r=Object(s.a)(),d=Object(i.a)("(max-width: ".concat(p.i.upToSmall,"px)"));return Object(m.jsxs)(a.b,{sx:{flexDirection:"column",background:r.tableHeader,gap:"8px",width:d?"300px":"fit-content"},children:[Object(m.jsxs)(a.d,{as:"span",fontSize:"14px",children:["Total APR:"," ",Object(m.jsxs)(a.d,{as:"span",color:r.text,fontWeight:500,children:[(t+n).toFixed(2),"%"]})]}),Object(m.jsx)(a.a,{sx:{width:"100%",borderBottom:"1px solid ".concat(r.border)}}),Object(m.jsxs)(a.b,{sx:{flexDirection:"column",fontSize:"12px",lineHeight:"16px"},children:[Object(m.jsxs)(a.d,{as:"span",children:["Pool APR:"," ",Object(m.jsxs)(a.d,{as:"span",color:r.text,fontWeight:500,children:[t.toFixed(2),"%"]})]}),Object(m.jsx)(a.d,{as:"span",fontStyle:"italic",sx:{whiteSpace:d?"wrap":"nowrap"},children:Object(m.jsx)(o.b,{id:"Estimated return from trading fees if you participate in the pool"})})]}),Object(m.jsxs)(a.b,{sx:{flexDirection:"column",fontSize:"12px",lineHeight:"16px"},children:[Object(m.jsxs)(a.d,{as:"span",color:r.warning,children:["Farm APR:"," ",Object(m.jsxs)(a.d,{as:"span",fontWeight:500,children:[n.toFixed(2),"%"]})]}),Object(m.jsx)(a.d,{as:"span",fontStyle:"italic",sx:{whiteSpace:d?"wrap":"nowrap"},children:Object(m.jsx)(o.b,{id:"Estimated return from additional rewards if you also participate in the farm"})})]})]})};t.b=e=>{var t,n=e.poolAPR,o=e.fairlaunchAddress,i=e.pid,p=e.tooltipPlacement,g=void 0===p?"right":p,b=Object(s.a)(),f=Object(c.b)().farms,h=null===f||void 0===f||null===(t=f.find((e=>e.id.toLowerCase()===o.toLowerCase())))||void 0===t?void 0:t.pools.find((e=>Number(e.pid)===Number(i))),x=Object(l.a)([null===h||void 0===h?void 0:h.token0.wrapped.address,null===h||void 0===h?void 0:h.token1.wrapped.address,...null===h||void 0===h?void 0:h.rewardTokens.map((e=>e.wrapped.address))].filter((e=>!!e))),j=0;h&&(j=36500*(h.totalRewards.reduce(((e,t)=>e+Number(t.toExact())*x[t.currency.wrapped.address]),0)||0)/((h.endTime-h.startTime)/86400)/h.poolTvl);return Object(m.jsxs)(a.b,{alignItems:"center",sx:{gap:"4px"},children:[Object(m.jsxs)(a.d,{as:"span",children:[(n+j).toFixed(2),"%"]}),Object(m.jsx)(d.a,{width:"fit-content",placement:g,text:Object(m.jsx)(u,{farmAPR:j,poolAPR:n}),children:Object(m.jsx)(r.x,{size:16,color:b.apr})})]})}},"./src/components/YieldPools/styleds.tsx":function(e,t,n){"use strict";n.d(t,"q",(function(){return z})),n.d(t,"t",(function(){return A})),n.d(t,"s",(function(){return M})),n.d(t,"B",(function(){return R})),n.d(t,"k",(function(){return E})),n.d(t,"j",(function(){return F})),n.d(t,"b",(function(){return B})),n.d(t,"K",(function(){return H})),n.d(t,"G",(function(){return G})),n.d(t,"H",(function(){return D})),n.d(t,"F",(function(){return q})),n.d(t,"r",(function(){return K})),n.d(t,"L",(function(){return Y})),n.d(t,"p",(function(){return J})),n.d(t,"D",(function(){return Q})),n.d(t,"C",(function(){return U})),n.d(t,"l",(function(){return V})),n.d(t,"m",(function(){return X})),n.d(t,"g",(function(){return Z})),n.d(t,"f",(function(){return $})),n.d(t,"o",(function(){return ee})),n.d(t,"I",(function(){return te})),n.d(t,"u",(function(){return ne})),n.d(t,"v",(function(){return oe})),n.d(t,"c",(function(){return ie})),n.d(t,"J",(function(){return ae})),n.d(t,"h",(function(){return re})),n.d(t,"E",(function(){return de})),n.d(t,"x",(function(){return se})),n.d(t,"d",(function(){return ce})),n.d(t,"i",(function(){return le})),n.d(t,"e",(function(){return pe})),n.d(t,"z",(function(){return me})),n.d(t,"A",(function(){return ue})),n.d(t,"w",(function(){return ge})),n.d(t,"n",(function(){return be})),n.d(t,"y",(function(){return fe})),n.d(t,"a",(function(){return he}));var o,i,a,r,d,s,c,l,p,m,u,g,b,f,h,x,j,y,w,_,k,O,v,C,T=n("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),I=n("./node_modules/polished/dist/polished.esm.js"),S=n("./node_modules/rebass/dist/index.esm.js"),N=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),W=n("./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/down.svg"),P=n("./src/components/Button/index.tsx"),L=n("./src/components/Column/index.tsx"),z=Object(N.default)(L.a).withConfig({displayName:"styleds__PageWrapper",componentId:"sc-1jk5gag-0"})(["padding:32px 24px 50px;width:100%;max-width:1500px;",""],(e=>e.theme.mediaWidth.upToSmall(o||(o=Object(T.a)(["\n    padding: 24px 16px 100px;\n  "]))))),A=N.default.div.withConfig({displayName:"styleds__ProMMFarmGuideWrapper",componentId:"sc-1jk5gag-1"})(["padding:1rem 0;font-size:12px;color:",";line-height:1.5;border-top:1px solid ",";border-bottom:1px solid ",";"],(e=>e.theme.subText),(e=>e.theme.border),(e=>e.theme.border)),M=N.default.div.withConfig({displayName:"styleds__ProMMFarmGuide",componentId:"sc-1jk5gag-2"})(["font-size:12px;"]),R=N.default.button.withConfig({displayName:"styleds__ShowGuideBtn",componentId:"sc-1jk5gag-3"})(["border:none;outline:none;line-height:0;background:transparent;color:",";cursor:pointer;transform:rotate(",");transition:transform 0.2s;"],(e=>e.theme.text),(e=>e.show?"-180deg":0)),E=N.default.div.withConfig({displayName:"styleds__GuideWrapper",componentId:"sc-1jk5gag-4"})(["display:grid;"," margin-top:",";height:",";max-height:",";transition:height 0.2s ease,margin 0.2s ease;overflow:hidden;",""],(e=>{var t=e.numOfSteps;return Object(N.css)(["grid-template-columns:",";"],Array(t).fill("1fr").join(" auto "))}),(e=>e.show?"1rem":0),(e=>e.show?"auto":0),(e=>e.show?"1000px":0),(e=>e.theme.mediaWidth.upToMedium(i||(i=Object(T.a)(["\n    grid-template-columns: 1fr;\n    gap: 8px;\n\n    "," {\n      display: none;\n    }\n  "])),B))),F=N.default.div.withConfig({displayName:"styleds__GuideItem",componentId:"sc-1jk5gag-5"})(["padding:1rem;font-size:12px;color:",";border-radius:20px;background:",";",""],(e=>e.theme.subText),(e=>e.theme.background),(e=>e.theme.mediaWidth.upToMedium(a||(a=Object(T.a)(["\n    background: transparent;\n    padding: 0;\n  "]))))),B=Object(N.default)(W.a).withConfig({displayName:"styleds__ChevronRight",componentId:"sc-1jk5gag-6"})(["transform:rotate(-90deg);margin:auto;color:",";"],(e=>e.theme.primary)),H=N.default.div.withConfig({displayName:"styleds__TopBar",componentId:"sc-1jk5gag-7"})(["display:flex;justify-content:space-between;align-items:center;gap:24px;"]),G=N.default.div.withConfig({displayName:"styleds__TabContainer",componentId:"sc-1jk5gag-8"})(["display:flex;margin-bottom:0;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:24px;"]),D=N.default.div.withConfig({displayName:"styleds__TabWrapper",componentId:"sc-1jk5gag-9"})(["display:flex;justify-content:space-between;align-items:center;"]),q=Object(N.default)(P.c).withConfig({displayName:"styleds__Tab",componentId:"sc-1jk5gag-10"})(["width:fit-content;margin-right:1.5rem;font-weight:500;padding:0;font-size:1rem;padding-bottom:4px;color:",";border-radius:0;&:hover{text-decoration:none;}&:focus{text-decoration:none;}&:last-child{margin-right:0;}",""],(e=>{var t=e.theme;return e.isActive?t.primary:t.subText}),(e=>e.theme.mediaWidth.upToSmall(r||(r=Object(T.a)(["\n    margin-right: 12px;\n  "]))))),K=N.default.div.withConfig({displayName:"styleds__PoolTitleContainer",componentId:"sc-1jk5gag-11"})(["display:flex;align-items:center;"]),Y=N.default.div.withConfig({displayName:"styleds__UpcomingPoolsWrapper",componentId:"sc-1jk5gag-12"})(["position:relative;margin-right:4px;"]),J=N.default.div.withConfig({displayName:"styleds__NewText",componentId:"sc-1jk5gag-13"})(["position:absolute;top:-10px;right:-12px;font-size:10px;font-weight:500;color:#ff537b;"]),Q=N.default.div.withConfig({displayName:"styleds__StakedOnlyToggleWrapper",componentId:"sc-1jk5gag-14"})(["display:flex;align-items:center;",""],(e=>e.theme.mediaWidth.upToSmall(d||(d=Object(T.a)(["\n    margin-top: 20px;\n  "]))))),U=N.default.div.withConfig({displayName:"styleds__StakedOnlyToggleText",componentId:"sc-1jk5gag-15"})(["font-size:14px;font-weight:500;color:",";margin-right:8px;",""],(e=>e.theme.subText),(e=>e.theme.mediaWidth.upToLarge(s||(s=Object(T.a)(["\n    margin-left: 4px;\n  "]))))),V=(N.default.div.withConfig({displayName:"styleds__AdContainer",componentId:"sc-1jk5gag-16"})(["margin-bottom:1.75rem;border-radius:0.5rem;position:relative;"]),N.default.a.withConfig({displayName:"styleds__LearnMoreBtn",componentId:"sc-1jk5gag-17"})(["outline:none;border:none;text-decoration:none;background-color:#244641;color:",";position:absolute;bottom:0.25rem;right:0;font-size:0.875rem;font-weight:500;padding:0.25rem 0.5rem;border-top-left-radius:0.5rem;border-bottom-right-radius:0.5rem;:hover{text-decoration:underline;}"],(e=>e.theme.primary)),N.default.div.withConfig({displayName:"styleds__HeadingContainer",componentId:"sc-1jk5gag-18"})(["display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:16px;",""],(e=>e.theme.mediaWidth.upToSmall(c||(c=Object(T.a)(["\n    gap: 0;\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  "])))))),X=N.default.div.withConfig({displayName:"styleds__HeadingRight",componentId:"sc-1jk5gag-19"})(["display:flex;gap:20px;"," ",""],(e=>e.theme.mediaWidth.upToSmall(l||(l=Object(T.a)(["\n    width: 100%;\n  "])))),(e=>e.theme.mediaWidth.upToExtraSmall(p||(p=Object(T.a)(["\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0;\n  "]))))),Z=(N.default.div.withConfig({displayName:"styleds__TotalRewardsContainer",componentId:"sc-1jk5gag-20"})(["display:flex;gap:0.75rem;align-items:center;border-radius:4px;padding:0.625rem 0.75rem;font-size:0.875rem;font-weight:500;cursor:pointer;position:relative;background-color:",";color:",";",";",";"],(e=>e.theme.apr),(e=>e.theme.textReverse),(e=>e.theme.mediaWidth.upToExtraSmall(m||(m=Object(T.a)(["\n    justify-content: space-between\n  "])))),(e=>e.disabled&&Object(N.css)(["background-color:",";color:",";cursor:not-allowed;"],(e=>e.theme.buttonGray),(e=>e.theme.disableText)))),N.default.div.withConfig({displayName:"styleds__HarvestAllButtonContainer",componentId:"sc-1jk5gag-21"})(["display:flex;justify-content:flex-end;",""],(e=>e.theme.mediaWidth.upToSmall(u||(u=Object(T.a)(["\n    justify-content: flex-start;\n  "]))))),N.default.div.withConfig({displayName:"styleds__HarvestAllInstruction",componentId:"sc-1jk5gag-22"})(["display:flex;justify-content:center;align-items:center;height:fit-content;font-size:14px;font-weight:normal;font-stretch:normal;font-style:normal;font-weight:500;color:",";background-color:",";padding:20px;border-radius:8px;"],(e=>e.theme.text7),(e=>e.theme.buttonBlack)),N.default.div.withConfig({displayName:"styleds__RewardNumberContainer",componentId:"sc-1jk5gag-23"})(["font-size:24px;font-weight:500;color:",";margin-right:12px;"],(e=>e.theme.text11)),N.default.span.withConfig({displayName:"styleds__RewardToken",componentId:"sc-1jk5gag-24"})(["@media (min-width:1200px){display:block;margin-bottom:4px;}"]),N.default.div.withConfig({displayName:"styleds__HistoryButton",componentId:"sc-1jk5gag-25"})(["background:",";color:",";padding:10px 14px;border-radius:4px;margin-left:auto;cursor:pointer;white-space:nowrap;svg{vertical-align:bottom;margin-right:8px;}"],(e=>e.theme.background),(e=>e.theme.subText)),N.default.div.withConfig({displayName:"styleds__FairLaunchPoolsWrapper",componentId:"sc-1jk5gag-26"})(["background-color:",";box-shadow:0px 4px 16px rgba(0,0,0,0.04);:last-child{border-bottom-left-radius:1.25rem;border-bottom-right-radius:1.25rem;}",";"],(e=>e.theme.background),(e=>e.theme.mediaWidth.upToMedium(g||(g=Object(T.a)(["\n    border-radius: 1.25rem;\n    margin-bottom: 1.5rem;\n  "])))))),$=N.default.div.withConfig({displayName:"styleds__FairLaunchPoolsTitle",componentId:"sc-1jk5gag-27"})(["padding:12px 24px;display:flex;justify-content:",";align-items:center;background-color:",";gap:24px;",""],(e=>e.justify||"space-between"),(e=>{var t=e.theme;return Object(I.d)(t.buttonBlack,.4)}),(e=>e.theme.mediaWidth.upToMedium(b||(b=Object(T.a)(["\n    flex-direction: column;\n    align-items: flex-end;\n    padding: 16px;\n  "]))))),ee=N.default.div.withConfig({displayName:"styleds__ListItemWrapper",componentId:"sc-1jk5gag-28"})(["padding:0 24px 24px;",";"],(e=>e.theme.mediaWidth.upToMedium(f||(f=Object(T.a)(["\n    padding: 0;\n  "]))))),te=N.default.div.withConfig({displayName:"styleds__TableHeader",componentId:"sc-1jk5gag-29"})(["display:grid;grid-gap:1rem;grid-template-columns:1.5fr 1fr 0.75fr 1fr 1.5fr 1fr 140px;grid-template-areas:'pools liq apy vesting_duration reward staked_balance action';padding:16px 24px;font-size:12px;align-items:center;height:fit-content;position:relative;opacity:",";background-color:",";border-top-left-radius:1.25rem;border-top-right-radius:1.25rem;box-shadow:0px 4px 16px rgba(0,0,0,0.04);",";",";",";"],(e=>e.fade?"0.6":"1"),(e=>e.theme.tableHeader),(e=>e.theme.mediaWidth.upToSmall(h||(h=Object(T.a)(["\n    grid-gap: 1rem;\n  "])))),(e=>e.theme.mediaWidth.upToMedium(x||(x=Object(T.a)(["\n    grid-gap: 1.5rem;\n  "])))),(e=>e.theme.mediaWidth.upToLarge(j||(j=Object(T.a)(["\n    grid-gap: 1.5rem;\n  "]))))),ne=Object(N.default)(te).withConfig({displayName:"styleds__ProMMFarmTableHeader",componentId:"sc-1jk5gag-30"})(["grid-template-columns:200px 0.5fr 0.75fr 1fr 1fr 0.75fr 120px;grid-template-areas:'token_pairs staked_tvl apr ending_in my_deposit reward action';grid-gap:2rem;border-top-left-radius:0;border-top-right-radius:0;",";"],(e=>e.theme.mediaWidth.upToLarge(y||(y=Object(T.a)(["\n    grid-template-columns: 170px 0.5fr 0.75fr 1fr 1fr 0.75fr 120px;\n    grid-gap: 1rem;\n  "]))))),oe=Object(N.default)(ne).withConfig({displayName:"styleds__ProMMFarmTableRow",componentId:"sc-1jk5gag-31"})(["font-size:14px;background-color:",";border-radius:0;:not(:last-child){border-bottom:1px solid ",";}"],(e=>e.theme.background),(e=>e.theme.border)),ie=Object(N.default)(S.d).withConfig({displayName:"styleds__ClickableText",componentId:"sc-1jk5gag-32"})(["display:flex;gap:4px;align-items:center;color:",";user-select:none;text-transform:uppercase;&:hover{cursor:pointer;opacity:0.6;}"],(e=>e.theme.subText)),ae=(N.default.span.withConfig({displayName:"styleds__MenuFlyout",componentId:"sc-1jk5gag-33"})(["min-width:14rem;background-color:",";filter:drop-shadow(0px 4px 12px rgba(0,0,0,0.2));border-radius:5px;padding:12px 16px;display:flex;flex-direction:column;font-size:16px;position:absolute;top:2.5rem !important;left:0 !important;z-index:10000;"],(e=>e.theme.background)),N.default.div.withConfig({displayName:"styleds__Tag",componentId:"sc-1jk5gag-34"})(["display:flex;position:relative;flex-direction:row;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:4px;font-size:14px;color:",";background-color:",";box-sizing:border-box;@media screen and (max-width:500px){box-shadow:none;}"],(e=>"active"===e.tag?"#1f292e":"inherit"),(e=>{var t=e.theme;return"active"===e.tag?"#4aff8c":t.bg11})),N.default.div.withConfig({displayName:"styleds__TableRow",componentId:"sc-1jk5gag-35"})(["display:grid;grid-gap:1rem;grid-template-columns:1.5fr 1fr 0.75fr 1fr 1.5fr 1fr 140px;grid-template-areas:'pools liq apy vesting_duration reward staked_balance action';padding:15px 0 13px;font-size:14px;align-items:center;height:fit-content;position:relative;opacity:",";background-color:",";border:1px solid transparent;border-bottom:1px solid ",";",";",";",";&:hover{cursor:pointer;}"],(e=>e.fade?"0.6":"1"),(e=>e.theme.background),(e=>{var t=e.theme;return e.isExpanded?"transparent":t.border}),(e=>e.theme.mediaWidth.upToSmall(w||(w=Object(T.a)(["\n    grid-gap: 1rem;\n  "])))),(e=>e.theme.mediaWidth.upToMedium(_||(_=Object(T.a)(["\n    grid-gap: 1.5rem;\n  "])))),(e=>e.theme.mediaWidth.upToLarge(k||(k=Object(T.a)(["\n    grid-gap: 1.5rem;\n  "])))))),re=N.default.span.withConfig({displayName:"styleds__GetLP",componentId:"sc-1jk5gag-36"})(["font-size:14px;font-weight:600;color:",";"],(e=>e.theme.primary)),de=N.default.div.withConfig({displayName:"styleds__StyledItemCard",componentId:"sc-1jk5gag-37"})(["border-bottom:",";margin-bottom:24px;padding:16px;background-color:",";:last-child{border-bottom:none;border-radius:1rem;}"],(e=>{var t=e.theme;return"1px solid ".concat(t.border)}),(e=>e.theme.background)),se=N.default.div.withConfig({displayName:"styleds__RewardBalanceWrapper",componentId:"sc-1jk5gag-38"})(["display:flex;align-items:center;flex-wrap:wrap;width:100%;justify-content:center;padding:0.75rem;border-radius:1.25rem;gap:8px;background-color:",";margin-top:0.75rem;margin-bottom:1rem;"],(e=>e.theme.buttonBlack)),ce=(N.default.div.withConfig({displayName:"styleds__PoolRewardUSD",componentId:"sc-1jk5gag-39"})(["color:",";"],(e=>e.theme.subText)),Object(N.default)(S.b).withConfig({displayName:"styleds__DataText",componentId:"sc-1jk5gag-40"})(["color:",";justify-content:",";font-weight:500;",""],(e=>e.theme.text),(e=>"right"===e.align?"flex-end":"flex-start"),(e=>e.theme.mediaWidth.upToLarge(O||(O=Object(T.a)(["\n    font-size: 14px;\n  "])))))),le=(Object(N.default)(ce).withConfig({displayName:"styleds__APY",componentId:"sc-1jk5gag-41"})(["color:",";"],(e=>e.theme.apr)),N.default.div.withConfig({displayName:"styleds__GridItem",componentId:"sc-1jk5gag-42"})(["position:relative;margin-top:8px;margin-bottom:8px;border-bottom:",";padding-bottom:12px;"],(e=>{var t=e.theme;return e.noBorder?"none":"1px dashed ".concat(t.border)}))),pe=N.default.div.withConfig({displayName:"styleds__DataTitle",componentId:"sc-1jk5gag-43"})(["display:flex;align-items:flex-start;color:",";&:hover{opacity:0.6;}user-select:none;text-transform:uppercase;margin-bottom:4px;font-size:12px;"],(e=>e.theme.subText)),me=N.default.div.withConfig({displayName:"styleds__SearchContainer",componentId:"sc-1jk5gag-44"})(["background:",";border-radius:999px;width:320px;font-size:12px;display:flex;align-items:center;padding:8px 12px;gap:8px;> svg{cursor:pointer;}"," ",""],(e=>e.theme.background),(e=>e.theme.mediaWidth.upToSmall(v||(v=Object(T.a)(["\n    width: 100%;\n  "])))),(e=>e.theme.mediaWidth.upToExtraSmall(C||(C=Object(T.a)(["\n    width: 100%;\n  "]))))),ue=N.default.input.withConfig({displayName:"styleds__SearchInput",componentId:"sc-1jk5gag-45"})(["outline:none;border:none;flex:1;color:",";background:",";:placeholder{color:",";}"],(e=>e.theme.text),(e=>e.theme.background),(e=>e.theme.disableText)),ge=N.default.div.withConfig({displayName:"styleds__ProMMFarmTableRowMobile",componentId:"sc-1jk5gag-46"})(["background:",";padding:24px 16px;:not(:last-child){border-bottom:1px solid ",";}"],(e=>e.theme.background),(e=>e.theme.border)),be=N.default.div.withConfig({displayName:"styleds__InfoRow",componentId:"sc-1jk5gag-47"})(["display:flex;justify-content:space-between;margin-top:12px;font-size:12px;"]),fe=N.default.div.withConfig({displayName:"styleds__RewardMobileArea",componentId:"sc-1jk5gag-48"})(["background:",";border-radius:16px;padding:12px;margin-top:12px;"],(e=>e.theme.buttonBlack)),he=Object(N.default)(P.f).withConfig({displayName:"styleds__ActionButton",componentId:"sc-1jk5gag-49"})(["background-color:",";width:28px;height:28px;:disabled{background:",";cursor:not-allowed;opacity:0.4;}"],(e=>{var t=e.theme;return e.backgroundColor||t.primary+"33"}),(e=>e.theme.buttonGray))},"./src/hooks/useSyncNetworkParamWithStore.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),i=n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),a=n("./node_modules/react/index.js"),r=n("./node_modules/react-router/esm/react-router.js"),d=n("./src/constants/networks.ts"),s=n("./src/hooks/index.ts"),c=n("./src/hooks/useChangeNetwork.ts");function l(){var e=Object(r.i)(),t=Object(c.a)(),n=Object(s.b)(),l=n.networkInfo,p=n.walletEVM,m=n.walletSolana,u=Object(a.useRef)(!0),g=Object(r.g)(),b=Object(r.j)(),f=Object(s.c)();Object(a.useEffect)((()=>{if(null!==e&&void 0!==e&&e.network){if(u.current){var n,a=null===(n=Object.values(d.f).find((t=>t.route===(null===e||void 0===e?void 0:e.network))))||void 0===n?void 0:n.chainId;Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!Object(d.k)(a)){e.next=5;break}return e.next=3,t(a,void 0,(()=>{g.replace({pathname:b.path.replace(":network",l.route)})}));case 3:e.next=8;break;case 5:if(!a||!Object(d.l)(a)){e.next=8;break}return e.next=8,t(a);case 8:case"end":return e.stop()}}),e)})))()}u.current=!1}else u.current=!1}),[t,g,null===e||void 0===e?void 0:e.network,b.path,l.route,p.isConnected,m.isConnected]),Object(a.useEffect)((()=>{l.route!==(null===e||void 0===e?void 0:e.network)&&!u.current&&f&&g.replace({pathname:b.path.replace(":network",l.route)})}),[l.route,g,f,b.path,null===e||void 0===e?void 0:e.network])}}}]);
//# sourceMappingURL=pools-page~yield-page.7bbd6c00.chunk.js.map