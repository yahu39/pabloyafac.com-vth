if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let c={};const d=e=>s(e,r),o={module:{uri:r},exports:c,require:d};a[r]=Promise.all(f.map((e=>o[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2e495911"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.98076a1c.css",revision:"a1c9b1c6aace6cf142f500f96279f6a5"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/20.d08d7a69.js",revision:"e2213a08757b07ef100732e7cd5c5322"},{url:"assets/js/21.9898108f.js",revision:"9fc31a0ddde85e72f0cd8169034e5b75"},{url:"assets/js/22.b29de803.js",revision:"15a253868f6e6e6fb9a5eeee6a870b4a"},{url:"assets/js/23.c570e496.js",revision:"4020856fcda5a4df6ebb2184ed1c5319"},{url:"assets/js/24.786dace0.js",revision:"45cb9099b780bab13ff87d0f8b1171c7"},{url:"assets/js/25.19392a45.js",revision:"7c73dde715710435a38f43a9de2af3ff"},{url:"assets/js/26.39dcd99e.js",revision:"0539aea5b4feab459617ac7c780b5b3d"},{url:"assets/js/27.eefcc8c2.js",revision:"c702e6026d50b7a169e22fba3aac6b97"},{url:"assets/js/app.b8d8239b.js",revision:"1e46950fca41b7d84e939d19a7e36ff2"},{url:"assets/js/layout-Blog.ec0ff27b.js",revision:"d1ea5a9adabcf202367be4b478aaeca7"},{url:"assets/js/layout-Layout.985ed51b.js",revision:"f5a8aebb7a8c44e7c52e23f5ab7fa3dd"},{url:"assets/js/layout-NotFound.1f8eb95a.js",revision:"f0275e488a9f2751cc6427337e4512b2"},{url:"assets/js/layout-Slide.592ca476.js",revision:"697f49342ae729a04bb61c3749b097be"},{url:"assets/js/page-About.16a2a94f.js",revision:"658834226085fbac277ee225ba4e92c1"},{url:"assets/js/page-Bienvenidos.7df8eeee.js",revision:"6ea07c89d43fc6328d8fadd6c379b48f"},{url:"assets/js/page-Blog.1a96d94f.js",revision:"f43c52df5cd0d8ffbf0f715b0568fd5d"},{url:"assets/js/page-Certificaciones.c85e851b.js",revision:"be6175529fb3a908d6e8cdda57f1deba"},{url:"assets/js/page-Cursos.e9e9b39f.js",revision:"51329c9fa40e51e000217b0c155e1d14"},{url:"assets/js/page-Experiencia.dc24c7fc.js",revision:"e01f15d45a638fdb34d4c62504d88415"},{url:"assets/js/page-Portafolio.ff92914c.js",revision:"9ad8bf9c36c4d7c53e1b0ae7885bc61b"},{url:"assets/js/vendors~flowchart.d03350e6.js",revision:"8c0ee658bab7ce19c738b3c16bb6e34c"},{url:"assets/js/vendors~layout-Blog~layout-Layout.8a952f52.js",revision:"2016cf48a60dda05efe2b4b0f0786a95"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1545b65c.js",revision:"d9c08f3881c816d763210fcdc17f5f2f"},{url:"assets/js/vendors~layout-Layout.e91cb7bc.js",revision:"3096599f1a7eda1963b5c949f088d02e"},{url:"assets/js/vendors~mermaid.3f129d5b.js",revision:"96ad0d3aacc7dd130de6e8dcbffed20f"},{url:"assets/js/vendors~photo-swipe.fb1bb9ae.js",revision:"2061bf69c8384331df505c7abd021970"},{url:"assets/js/vendors~reveal.6e0ea071.js",revision:"f5e04b48b43393b672a903a989aeff78"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"dad12bd7e1723252b2f2c3a08fbcf04c"},{url:"about/certifications/index.html",revision:"3b78924b5281f9b51acbbdf3ceda10c8"},{url:"about/courses/index.html",revision:"b04e0198ba74ff45914e4a962fea80c7"},{url:"about/experience/index.html",revision:"0f152e780099986fa703640fc4d80db2"},{url:"about/index.html",revision:"4e337e126e81b53e35eeb9895ca7cd7a"},{url:"article/index.html",revision:"b099d2941f750e68e70194f015083dab"},{url:"category/index.html",revision:"a5672a058418a5f1a2c96a0d28eb7217"},{url:"encrypt/index.html",revision:"d9c3c1353e1d9ac7958f63b56c9359fd"},{url:"home/index.html",revision:"c8bdfe306e920654b933910953ef56d2"},{url:"index.html",revision:"31a01f364db7e2734e7159476d1a83d2"},{url:"intro/index.html",revision:"19c38eced918b807ae900b7a649251c5"},{url:"portfolio/index.html",revision:"ba6cac53c56b82b7d4245a311a942e72"},{url:"slide/index.html",revision:"3056740ccc6091f8f7203a345e3c6d8e"},{url:"star/index.html",revision:"fc07aacdc6e59683bd8ff0a1fcb9feac"},{url:"tag/index.html",revision:"f8571fbc214d97e48a5853a7af2d97cc"},{url:"timeline/index.html",revision:"39385e87a07fa25a67229ed458fbd644"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/img/pablo.dc53df11.png",revision:"dc53df11105ca787dc26567c888fe04a"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"},{url:"pablo.jpg",revision:"e1e285eceb0985534f3f245597e18de3"},{url:"pablo.png",revision:"dc53df11105ca787dc26567c888fe04a"},{url:"photo-personal.png",revision:"d42947bd9ec52035818b1bf602298adc"},{url:"platzi/diploma-basico-javascript.jpg",revision:"504a07a76f57b41036ae3a11e48cc72c"},{url:"platzi/diploma-intro-laravel.jpg",revision:"29e008f8ec4834e46663071d0afdb58f"},{url:"platzi/diploma-jee-2017.jpg",revision:"9d3a8f793330eaa75324da52e3c36b80"},{url:"portfolio.png",revision:"e9215e73dd86781b9d95a27f819ba897"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
