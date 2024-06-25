import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.4061ee68.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.748f7e29.mjs');const pageMap = new Map([["src/pages/index.astro", _page0]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(t,n,r,e,m){t[e]=t[e]||[],t[e].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=e!=\"dataLayer\"?\"&l=\"+e:\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-5H3KWMQS\");\n"}],"styles":[{"type":"external","src":"/_astro/index.107a2923.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.69db7343.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.748f7e29.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.f08fd5bc.js","/Users/JoshuaMendoza/JfuseCodes/client-websites/prettylooks_website/src/components/react/app":"_astro/app.baa31bda.js","@astrojs/react/client.js":"_astro/client.41a6daee.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.107a2923.css","/favicon.svg","/prettylookslogo.jpeg","/prettylookslogo.png","/_astro/app.baa31bda.js","/_astro/client.41a6daee.js","/_astro/index.6c890760.js","/assets/featured_looks/featured_look_1.jpeg","/assets/featured_looks/featured_look_2.jpeg","/assets/landing_page/landing.png","/assets/landing_page/landing_desktop.jpg","/assets/landing_page/landing_mobile.jpg","/assets/gallery/fl1.jpeg","/assets/gallery/fl10.jpeg","/assets/gallery/fl11.jpeg","/assets/gallery/fl12.jpeg","/assets/gallery/fl13.jpeg","/assets/gallery/fl14.jpeg","/assets/gallery/fl15.jpeg","/assets/gallery/fl16.jpeg","/assets/gallery/fl17.jpeg","/assets/gallery/fl18.jpeg","/assets/gallery/fl2.jpeg","/assets/gallery/fl3.jpeg","/assets/gallery/fl4.jpeg","/assets/gallery/fl5.jpeg","/assets/gallery/fl6.jpeg","/assets/gallery/fl7.jpeg","/assets/gallery/fl8.jpeg","/assets/gallery/fl9.jpeg","/assets/offer_cards/logo_consistency.png","/assets/offer_cards/logo_creative-design.jpg","/assets/offer_cards/logo_creative-design.png","/assets/offer_cards/logo_professionalism.png"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
