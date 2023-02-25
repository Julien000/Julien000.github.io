/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a48cd0d87b171acd26b0dfa5993ed59d"
  },
  {
    "url": "assets/css/0.styles.b35752c4.css",
    "revision": "1527737ce579d9b97a3ea4ef106d8373"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.46f8b562.js",
    "revision": "17af38c5ac7ae91a3cc9b40862774507"
  },
  {
    "url": "assets/js/10.bf9159b8.js",
    "revision": "d42270e6494aded5bd84e561a87c4540"
  },
  {
    "url": "assets/js/11.9d9a2419.js",
    "revision": "4e8f10f93e8153ea0f48b79dbd61d5d2"
  },
  {
    "url": "assets/js/12.56ff53f8.js",
    "revision": "9c64ab9331994f56c185abb344ddf185"
  },
  {
    "url": "assets/js/13.8e874f68.js",
    "revision": "ef73c38e6fcb07df303d434447775b47"
  },
  {
    "url": "assets/js/14.9b5a1e2c.js",
    "revision": "b49ecf15dc9f1d8aaf2dc87c34bf1bf7"
  },
  {
    "url": "assets/js/15.3f692c31.js",
    "revision": "5002318904ad502621078cd3c604b8ba"
  },
  {
    "url": "assets/js/16.a6342083.js",
    "revision": "cdf1e57f8fb38576985cbb7eb0316e31"
  },
  {
    "url": "assets/js/17.f3adaf6c.js",
    "revision": "ded0e58e94e55866a77170ca239768a1"
  },
  {
    "url": "assets/js/18.1de0a676.js",
    "revision": "ca089f7db7e14640a60d651c82d3f894"
  },
  {
    "url": "assets/js/19.0669ba94.js",
    "revision": "db5eae64d7d4be7e8dd19e538b4b07bc"
  },
  {
    "url": "assets/js/4.7fee6fac.js",
    "revision": "8288b627186f31af501db2e8edba187d"
  },
  {
    "url": "assets/js/5.adf31274.js",
    "revision": "b3d5d899e07aa6be8c053b1a4ce875b2"
  },
  {
    "url": "assets/js/6.56494596.js",
    "revision": "c3ef8546a71a0f1b4d0d5e1b91c25fd9"
  },
  {
    "url": "assets/js/7.321e0459.js",
    "revision": "ab242019e3928bb654a03bc6761b64dc"
  },
  {
    "url": "assets/js/8.a0ae3202.js",
    "revision": "30a7bf6c35c6dd331a7db9998f9055bf"
  },
  {
    "url": "assets/js/9.2b11ca64.js",
    "revision": "7ea432c6dfc150ac3754536259e3da4d"
  },
  {
    "url": "assets/js/app.cd643a59.js",
    "revision": "956fcdd74ce182bdae0250a78643535f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.0f0dde37.js",
    "revision": "328f0afb834d3a6ad67223943e83f89c"
  },
  {
    "url": "categories/index.html",
    "revision": "a4fd013cf9358187b63c89413f31afd7"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c73396d0144d1535fb72c97416804bb6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "38f701a0473dc9bb557df5c59240751c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ff44c8fa46564026c370f1f806491b14"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c3dab883540220f28e3f2c4a70711156"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "pq1.png",
    "revision": "07901d96df5dbfe1648ac5d4c9413544"
  },
  {
    "url": "pq2.png",
    "revision": "b844f6817147933c706adccc5dad32cb"
  },
  {
    "url": "tag/index.html",
    "revision": "27d2df707ea100eeca9a1645acecd3de"
  },
  {
    "url": "tags/js/index.html",
    "revision": "89d3ba8731f9f24d50ad40750466a1af"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "09b9278903628b6486ef5c711beb1c3e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5e2160e865292dd7831ecf2a5bff8674"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "dfa39579545c88ff23e839da83874b17"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e9b90fd23555b39f34b05858a510a16d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c5b09432657212a73730ac1f0a0b79b"
  },
  {
    "url": "技术文章/index.html",
    "revision": "2d1d3551f8618fb43f2f8965d3325b06"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4eb7ac2bf7f99f78c1f2ff5cd98a8bf3"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "d0b09df5a29b6e5be799429b5214f915"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c47264b099e78146cddb1c78549e9c11"
  },
  {
    "url": "生活分享/Me/me01.html",
    "revision": "86191e4b3b1d1ae170de47dbceac1b59"
  },
  {
    "url": "生活分享/书籍/b01.html",
    "revision": "65636977d24d519aa3788895f61b40b4"
  },
  {
    "url": "生活分享/电影/m01.html",
    "revision": "133889606a72fc8edaa2b0729f9b0712"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
