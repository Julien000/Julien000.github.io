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
    "revision": "a5f1525da68c687cb7b44cecd7846de3"
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
    "url": "assets/js/1.9a3a2fff.js",
    "revision": "dac444ba744d0cb4719fd75b97bdff45"
  },
  {
    "url": "assets/js/10.cdb0e415.js",
    "revision": "6080cdbe38ad942db716abf6c3c024c7"
  },
  {
    "url": "assets/js/11.ed32d7aa.js",
    "revision": "ce8c6e35480405cd02cc6966cff59cf7"
  },
  {
    "url": "assets/js/12.6e205945.js",
    "revision": "c302c585ca18e57a069bcffd68750ddf"
  },
  {
    "url": "assets/js/13.3a2a3ab9.js",
    "revision": "cbcf3455906f7333fbc60fee9dddb70c"
  },
  {
    "url": "assets/js/14.cc02a8a1.js",
    "revision": "3e261d3a888eb7702026bdefa858dc28"
  },
  {
    "url": "assets/js/15.eec9536c.js",
    "revision": "7624956afe0b0eedf19a7cb7d753c595"
  },
  {
    "url": "assets/js/16.faae2126.js",
    "revision": "2a6afdf9f833d0c027c1a1c57bbcb95b"
  },
  {
    "url": "assets/js/17.a8964052.js",
    "revision": "cd558d5c5776d8a6d1a754fb77a90775"
  },
  {
    "url": "assets/js/18.5c01d500.js",
    "revision": "9498277b4c3f1c2b61b41c54540d56fa"
  },
  {
    "url": "assets/js/19.d55ebf92.js",
    "revision": "1f1d71b9bbe820d89fc16c0f61e01688"
  },
  {
    "url": "assets/js/4.a976dd45.js",
    "revision": "5cae399218e347e22dcce586ecb55f1d"
  },
  {
    "url": "assets/js/5.bced7208.js",
    "revision": "bbd4699ee69b382fdbfebe9326caf47a"
  },
  {
    "url": "assets/js/6.cc955d55.js",
    "revision": "487db1d8858afae56cb92cb5b0f676ba"
  },
  {
    "url": "assets/js/7.3886eda8.js",
    "revision": "b6be105161d6317368f391ba434cf546"
  },
  {
    "url": "assets/js/8.848d5774.js",
    "revision": "467944a60d8731a1a0ad191a37239185"
  },
  {
    "url": "assets/js/9.4f78d6a9.js",
    "revision": "469b340569468a0979d63a11858e8eca"
  },
  {
    "url": "assets/js/app.7e056ac4.js",
    "revision": "c43c7a7f996928912e315378e165046f"
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
    "revision": "61d97908013b251d4ef82a7f645b19e8"
  },
  {
    "url": "categories/Me/index.html",
    "revision": "638ccb8813537af48f0dbc20bebceafd"
  },
  {
    "url": "categories/书籍/index.html",
    "revision": "d78a90ff5312777002f941a9545f9a98"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6b48ad2113a000a6052ec3c504634768"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "079346b67c7c21f9a54c144cc737b9dc"
  },
  {
    "url": "categories/电影/index.html",
    "revision": "49e9b579e1c08fc6dbf7763a32d5657e"
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
    "url": "img/pq2.png",
    "revision": "b844f6817147933c706adccc5dad32cb"
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
    "revision": "9528fac9025e4130ee38205e11bd7bc5"
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
    "url": "tag/index.html",
    "revision": "503e0fe244881c84a4080fb7cd53f62e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7c69870465a3a521db407b2c35349e98"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8b41fc50dff2f55e115a20168a3db9cd"
  },
  {
    "url": "tags/书籍/index.html",
    "revision": "0dce0e8de207e4f295df47b17577850b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "7d31d5ea1c998c4d86074c6894ccc058"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ee80beef0df559dea1e52f1e120b7eb5"
  },
  {
    "url": "tags/生活记录/index.html",
    "revision": "17bda19c8121b30f367658a3230068ed"
  },
  {
    "url": "tags/电影/index.html",
    "revision": "512eba8f79c4243e9fb5f40d08fe878d"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ac625c56c75d32b2b5c2e9ac6a1410b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "489d6e254605bc7c5d806d8aad89e070"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a3f12443a0ddbc45af83c7fc9f8868b9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "57f43417093a2190897e9caa7457df27"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "d42cfa6e1f024037a3da581b46da087a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "33d35b9b30c8a8192d1aaaf1cf3fdce0"
  },
  {
    "url": "生活分享/Me/me01.html",
    "revision": "6f85136b1c8c23b3ac9f9a88d72794ec"
  },
  {
    "url": "生活分享/书籍/b01.html",
    "revision": "52d8e3ae02a3e76b582bb781010466db"
  },
  {
    "url": "生活分享/电影/m01.html",
    "revision": "1711acc4f8443f891bf89a3214eafc92"
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
