(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{560:function(s,t,n){s.exports=n.p+"assets/img/optimize.c68a0996.jpg"},634:function(s,t,n){"use strict";n.r(t);var e=n(7),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("主要介绍下如何在 "),t("code",[s._v("pure-admin")]),s._v(" 平台进行正确有效的 "),t("code",[s._v("vite")]),s._v(" 预构建配置")]),s._v(" "),t("h2",{attrs:{id:"include"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include"}},[s._v("#")]),s._v(" "),t("code",[s._v("include")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/pure-admin/pure-admin-thin/blob/main/build/optimize.ts#L7",target:"_blank",rel:"noopener noreferrer"}},[s._v("optimizeDeps.include"),t("OutboundLink")],1),s._v(" 配置为需要预构建的模块。"),t("code",[s._v("vite")]),s._v(" 启动时会将 "),t("code",[s._v("optimizeDeps.include")]),s._v(" 里的模块，编译成 "),t("code",[s._v("esm")]),s._v(" 格式并缓存到 "),t("code",[s._v("node_modules/.vite")]),s._v(" 文件夹，页面加载到对应模块时如果浏览器有缓存就读取浏览器缓存，如果没有会读取本地缓存并按需加载")]),s._v(" "),t("p",[t("img",{attrs:{src:n(560),alt:"theme"}})]),s._v(" "),t("p",[s._v("下面是精简版 "),t("code",[s._v("optimizeDeps.include")]),s._v(" 配置，将 "),t("a",{attrs:{href:"https://github.com/pure-admin/pure-admin-thin/blob/main/package.json#L50-L75",target:"_blank",rel:"noopener noreferrer"}},[s._v("dependencies"),t("OutboundLink")],1),s._v(" 大部分未全局安装的模块都配置进来，当然如果模块里面的东西很少，也就是里面方法不多，可以不用配置进来直接让浏览器加载即可（您自己安装的模块也是参考该配置）")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("点击查看")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" include "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mitt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dayjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"axios"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pinia"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-types"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"js-cookie"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue-tippy"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pinyin-pro"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sortablejs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@vueuse/core"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@pureadmin/utils"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"responsive-storage"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ol",[t("li",[s._v("尤其当您禁用浏览器缓存时（这种情况只应该发生在调试阶段）必须将对应模块加入到 "),t("code",[s._v("include")]),s._v(" 里，否则会遇到开发环境切换页面卡顿的问题（"),t("code",[s._v("vite")]),s._v(" 会认为它是一个新的依赖包会重新加载并强制刷新页面），因为它既无法使用浏览器缓存，又没有在本地 "),t("code",[s._v("node_modules/.vite")]),s._v(" 里缓存")]),s._v(" "),t("li",[s._v("如果您使用的第三方库是全局引入，也就是引入到 "),t("code",[s._v("src/main.ts")]),s._v(" 文件里，就不需要再添加到 "),t("code",[s._v("include")]),s._v(" 里了，因为 "),t("code",[s._v("vite")]),s._v(" 会自动将它们缓存到 "),t("code",[s._v("node_modules/.vite")])])])]),s._v(" "),t("h2",{attrs:{id:"exclude"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exclude"}},[s._v("#")]),s._v(" "),t("code",[s._v("exclude")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/pure-admin/pure-admin-thin/blob/main/build/optimize.ts#L27",target:"_blank",rel:"noopener noreferrer"}},[s._v("optimizeDeps.exclude"),t("OutboundLink")],1),s._v(" 配置为排除预构建的模块。需要注意的是平台里所有以 "),t("code",[s._v("@iconify-icons/")]),s._v(" 开头引入的的本地图标模块，都应加入到下面的 "),t("code",[s._v("exclude")]),s._v(" 里，因为平台推荐本地图标的使用方式是哪里需要哪里引入而且都是单个的引入，不需要预构建，直接让浏览器加载就好")]),s._v(" "),t("p",[s._v("下面是精简版 "),t("code",[s._v("optimizeDeps.exclude")]),s._v(" 配置")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("点击查看")]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" exclude "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@iconify-icons/ep"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@iconify-icons/ri"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@pureadmin/theme/dist/browser-utils"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("推荐阅读")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cn.vitejs.dev/guide/dep-pre-bundling.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("依赖预构建"),t("OutboundLink")],1),s._v(" "),t("Badge",{attrs:{text:"vite文档"}})],1),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/7064853960636989454",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入理解 Vite 核心原理"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=a.exports}}]);