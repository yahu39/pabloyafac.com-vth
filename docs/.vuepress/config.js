const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "Pablo Yafac",
  description: "Blog Personal",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

/*   locales: {
    "/": {
      lang: "en-US",
    },
    "/zh/": {
      title: "Pablo Yafac",
      description: "vuepress-theme-hope 的 demo",
    },
  }, */

  themeConfig: {
    darkmode: "switch",
    logo: "/pablo.jpg",
    hostname: "https://vuepress.pabloyafac.com/",
    author: "Pablo Yafac",
//    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
    
    nav: [
      { text: "Blog", link: "/", icon: "home" },
      { text: "Portfolio", link: "/portfolio/", icon: "folder" },
      { text: "About Me", link: "/about/", icon: "people" }
/*       {
        text: "Guide",
        icon: "creative",
        link: "/guide/",
      }, */
/*       {
        text: "Docs",
        link: "https://vuepress-theme-hope.github.io/",
        icon: "note",
      }, */
    ],

    sidebar: {
      "/": [
        "",
        //"home",
        //"slides",
        //"layout",
        {
          title: "Portfolio",
          icon: "folder",
          prefix: "portfolio/",
          children:[""],
        },
        {
          title: "About",
          icon: "people",
          prefix: "about/",
          children: ["", "certifications", "courses", "experience"],
        }
/*         {
          title: "Guide",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        }, */
      ]
    },

/*     locales: {
      "/zh/": {
        nav: [
          { text: "博客主页", link: "/zh/", icon: "home" },
          { text: "项目主页", link: "/zh/home/", icon: "home" },
          {
            text: "如何使用",
            icon: "creative",
            link: "/zh/guide/",
          },
          {
            text: "主题文档",
            icon: "note",
            link: "https://vuepress-theme-hope.github.io/zh/",
          },
        ],
        sidebar: {
          "/zh/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "如何使用",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    }, */

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Github: "https://github.com/yahu39",
        Twitter: "https://twitter.com/yahupc",
        Linkedin: "https://www.linkedin.com/in/pablo-yafac-95348412/"
      },
    },

    footer: {
      display: true,
      content: "Made with ❤️ by Pablo Yafac.",
    },

/*     comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    }, */

    copyright: {
      status: "global",
    },

    git: {
      timezone: "America/Lima",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
/*           {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          }, */
        ],
      },
    },
  },
});
