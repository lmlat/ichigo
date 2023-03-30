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
    "revision": "a656c471484f7732a2dc92f75754db42"
  },
  {
    "url": "assets/css/0.styles.cf0a4651.css",
    "revision": "8e26829a3203a0aa0c885e1681dae652"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1680155038813.3ef29a9b.png",
    "revision": "3ef29a9b6272d40326f13adc47457c18"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.7543bd4f.js",
    "revision": "04918ee56ed0a5972e7b19fb7e474107"
  },
  {
    "url": "assets/js/10.06f06474.js",
    "revision": "c9af7532768b282f1f3bbd2712243263"
  },
  {
    "url": "assets/js/11.d88a996d.js",
    "revision": "da3ad8e960f7c0703c7ece86a5bc2475"
  },
  {
    "url": "assets/js/12.40112076.js",
    "revision": "975ee95db21f7e04035d443b490841e8"
  },
  {
    "url": "assets/js/13.ecbcfc5b.js",
    "revision": "288aafb87c8c31cf5589096006686a07"
  },
  {
    "url": "assets/js/14.2d4ad4d8.js",
    "revision": "c214453386b1e827d4098d413ba4fbee"
  },
  {
    "url": "assets/js/15.7f02c07a.js",
    "revision": "8e80be472f0d5dab94dcb2b0cfe2aa39"
  },
  {
    "url": "assets/js/16.3e83926b.js",
    "revision": "750d2b0d2dfe1d9a037f1e59d0ab258a"
  },
  {
    "url": "assets/js/17.895365fa.js",
    "revision": "4fd42768b889e142b5b6bab116991d57"
  },
  {
    "url": "assets/js/18.5ce7702c.js",
    "revision": "679583fce7d03f23cf278dc0cd7e1163"
  },
  {
    "url": "assets/js/19.4026da04.js",
    "revision": "cdad6cf3699f9772cb43b81679bc6b3d"
  },
  {
    "url": "assets/js/20.82775ba2.js",
    "revision": "87d8a826a22ec4952794655b59496d88"
  },
  {
    "url": "assets/js/21.336709a8.js",
    "revision": "bd2bc40f1d2f9ffc5e1467837fb97cba"
  },
  {
    "url": "assets/js/22.cd8ce7e7.js",
    "revision": "4884efacb93ead30309cbf59395ad529"
  },
  {
    "url": "assets/js/23.de97340d.js",
    "revision": "b649dd70e0391beb72d1a0ee22d4a643"
  },
  {
    "url": "assets/js/24.8136404b.js",
    "revision": "e40e2bd55d8a16d2facecdcd3fa060da"
  },
  {
    "url": "assets/js/25.580ae8ec.js",
    "revision": "c9cfc14c0af196324c27ffd786f4f9fc"
  },
  {
    "url": "assets/js/3.440a4598.js",
    "revision": "cdd113a7da401cb7c8aefc8b8480d19c"
  },
  {
    "url": "assets/js/4.2bb206fd.js",
    "revision": "1d89bd427472582b5a31daac12f63b8d"
  },
  {
    "url": "assets/js/5.4377ba8f.js",
    "revision": "1e9a56290d444a8cc2e2a92133fb0b7f"
  },
  {
    "url": "assets/js/6.374eca97.js",
    "revision": "d4fa011e739997ac453f153611c60006"
  },
  {
    "url": "assets/js/7.d49f5611.js",
    "revision": "2cac75f7a5d8b173863fd9fdb01386c9"
  },
  {
    "url": "assets/js/8.8f8e74be.js",
    "revision": "518415ecd84c9fb2fa4c2dae8ea77ead"
  },
  {
    "url": "assets/js/9.00897824.js",
    "revision": "33a2a8f4aae19684706569f406894e68"
  },
  {
    "url": "assets/js/app.8ce08534.js",
    "revision": "11f8ce276585fefb115c1a85aac06874"
  },
  {
    "url": "avatar.jpg",
    "revision": "9ae378202261e2241a4044671f021f05"
  },
  {
    "url": "bg.png",
    "revision": "adf807663f9a803b893b4fed58f84097"
  },
  {
    "url": "categories/index.html",
    "revision": "ae946936d87192ead54f81225ae4b864"
  },
  {
    "url": "home.png",
    "revision": "e2062d0fe86e96636d5bb3739930bd24"
  },
  {
    "url": "index.html",
    "revision": "f8f781e4c73f9100f0cbd83d939e6369"
  },
  {
    "url": "Java全系列/Java IO流.html",
    "revision": "384b3e196206f8c95ea7cef866bff07c"
  },
  {
    "url": "Java全系列/Java8新特性.html",
    "revision": "4d880a3b53aaff88b737ade8dece70d0"
  },
  {
    "url": "Java全系列/Java9新特性.html",
    "revision": "e05b0ad316c994a8e77a333e412a377d"
  },
  {
    "url": "Java全系列/Java全篇.html",
    "revision": "ad0e9814fe937459af3f742013b4781c"
  },
  {
    "url": "Java全系列/Java常用类.html",
    "revision": "355dfe0e26d65878c0fa50eeacf1cb68"
  },
  {
    "url": "Java全系列/正则表达式.html",
    "revision": "a302fd120286fef5ab280b20fb6f5cd6"
  },
  {
    "url": "tag/index.html",
    "revision": "5bf96484e23798f81bd2ae12b98e3cc6"
  },
  {
    "url": "timeline/index.html",
    "revision": "a5575a848f79ef76b753352fc288acc7"
  },
  {
    "url": "数据结构与算法/index.html",
    "revision": "e1429ecaf901f216837f7b0fe4e6d378"
  },
  {
    "url": "数据结构与算法/LC4_栈.html",
    "revision": "0d44157863c17cf141acd02a12e89e2b"
  },
  {
    "url": "数据结构与算法/LC7_堆.html",
    "revision": "d689fcb168691b071d8a0f96b6042797"
  },
  {
    "url": "数据结构与算法/LC排序算法.html",
    "revision": "b3c52f0331c5ddc3444b5d248e92628e"
  },
  {
    "url": "数据结构与算法/回溯算法.html",
    "revision": "f475f691e622b234c8108847fb0e2638"
  },
  {
    "url": "数据结构与算法/左神-数据结构学习.html",
    "revision": "718a0d89a617da91ea8a4b569c4725a5"
  },
  {
    "url": "数据结构与算法/深度优先搜索.html",
    "revision": "1d7a15b51b84f67b76b3774ed570a062"
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
