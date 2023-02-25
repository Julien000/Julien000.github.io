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
    "revision": "5a9344852c61085a4fb19c700e88e9a5"
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
    "url": "assets/js/14.bfb06cb8.js",
    "revision": "e27e209682fed0564a0b89113c71fa8e"
  },
  {
    "url": "assets/js/15.7970c80c.js",
    "revision": "76f7dd58f3ab0d0c9d87c4f8a3547d77"
  },
  {
    "url": "assets/js/16.6100b09c.js",
    "revision": "2d1a2e615d17edecc87f399c8b785ae3"
  },
  {
    "url": "assets/js/17.c755a7b7.js",
    "revision": "1eb624bce831028f80b26daefd9c4a9f"
  },
  {
    "url": "assets/js/18.0c9d5688.js",
    "revision": "8cda8855d91df9b77544c709ca399eb3"
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
    "url": "assets/js/app.08723c14.js",
    "revision": "0b60a532c3d83929cd2712656c1c46e9"
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
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "9d85b5006b3487120681a35269a796e9"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7f3ee54916375192baeffd9063a9dd2a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a3a8f2f4f4e89a33ddc2fe7bcb79ab7a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6fc5f236eb563a7f0874ff0cbc5ccfda"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
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
    "revision": "270631c1a4d2722cac82ae8b1b3e741c"
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
    "revision": "82098803d7466c10b9da67ac674e9372"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3f32bfdbc0fa262ff122e20e6a02ecb2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5bee6f078dfbb5730be36bc0ba713def"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4b392d8f55d34df19f95dfc2e43e4a2a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "06d165e09f733720d4d250463dfee3b9"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "bda1cab70221fbfad56b74513a3dcd22"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f03f7bd4d958ffe71d793f287d07dcb7"
  },
  {
    "url": "timeline/index.html",
    "revision": "00506cdd14cb19f7e3b9f8f4b8a6c793"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bfd066d8f46ef053ed296e7e462e75d9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bee9784dbbdda11cb246b31cf9d15572"
  },
  {
    "url": "技术文章/vue/vue02.html",
    "revision": "2a7303e4a22b14434c0b89389eca5640"
  },
  {
    "url": "生活分享/life.html",
    "revision": "eab653981d365f3d4e9df19692083385"
  },
  {
    "url": "生活分享/Me/me01.html",
    "revision": "091c3dcab22e3034d77b341876fa2a21"
  },
  {
    "url": "生活分享/书籍/b01.html",
    "revision": "74870352d2616014cee387c701430ce4"
  },
  {
    "url": "生活分享/电影/m01.html",
    "revision": "fbdfcaa42d9ff712686de582d0c0b9ea"
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
