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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "d8c3acb527485c9dc384c8d8df7c37ea"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.10a1179b.css",
    "revision": "c29d50e984dabf68865d4274afab6926"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc316f46.js",
    "revision": "1d6a2f22c9b053365bfd582cf9901ed9"
  },
  {
    "url": "assets/js/11.7227b195.js",
    "revision": "7da992d204bda4cc463737d90c32fab0"
  },
  {
    "url": "assets/js/12.d9af3753.js",
    "revision": "82ae2832a81ab95ad8a57eaee51dbbac"
  },
  {
    "url": "assets/js/13.b8dd9aae.js",
    "revision": "66acaad5a75aadc7c40d2732d6b34b55"
  },
  {
    "url": "assets/js/14.f76bc3b8.js",
    "revision": "4310b95ff07aa30cdc6b9b0997122ace"
  },
  {
    "url": "assets/js/15.28605c14.js",
    "revision": "0216aab1c08765e1b56077740ed65305"
  },
  {
    "url": "assets/js/16.0ff98a9a.js",
    "revision": "d87c2bbd574675dc788bf7c8a6abb16d"
  },
  {
    "url": "assets/js/17.26742ec5.js",
    "revision": "6c64fea6833e8946e99ffb31d5336e97"
  },
  {
    "url": "assets/js/18.b55c33af.js",
    "revision": "b31b0c04ee4b199515c4f9f5ffdccf2b"
  },
  {
    "url": "assets/js/19.cc55fce6.js",
    "revision": "447bdb4dd8d4cee00075a7e856107863"
  },
  {
    "url": "assets/js/2.f218033d.js",
    "revision": "d2f5f24249ac8ddd7ff685d95196f4b8"
  },
  {
    "url": "assets/js/20.9c39eaef.js",
    "revision": "5ed4fe81dde675c4d5ebe9a0526dc25a"
  },
  {
    "url": "assets/js/21.87a58227.js",
    "revision": "9e296169f92c94f4232005132c02ceaf"
  },
  {
    "url": "assets/js/22.1b519852.js",
    "revision": "2b5b295626b9a43b1cc357e9753927c7"
  },
  {
    "url": "assets/js/23.ac1268cf.js",
    "revision": "8cc7dbdb0af045da2fb6e4f3a635bb96"
  },
  {
    "url": "assets/js/24.fdec3785.js",
    "revision": "3752e16c6356883363e38fa9ae7b399f"
  },
  {
    "url": "assets/js/26.87ff770b.js",
    "revision": "78f4e8b74647795453feb067e07475f5"
  },
  {
    "url": "assets/js/3.bb30875e.js",
    "revision": "ac280743ca97ab1997d6316250b95dfd"
  },
  {
    "url": "assets/js/4.5042fbeb.js",
    "revision": "90773e0bf4d6aedee55e1e07f94825f3"
  },
  {
    "url": "assets/js/5.8b0efd2b.js",
    "revision": "c9beef560d0921ec782fc523cb380eac"
  },
  {
    "url": "assets/js/6.aeddef27.js",
    "revision": "f0306f9ae855a5709fc912bdfb73d3e8"
  },
  {
    "url": "assets/js/7.4bdd093e.js",
    "revision": "092f44f9b407c40b73864c16ea45c86b"
  },
  {
    "url": "assets/js/8.e2d1a40b.js",
    "revision": "66bf12cafa81a9fa5719be210656ce33"
  },
  {
    "url": "assets/js/9.cce8dc66.js",
    "revision": "216a81c2270a5b232cdc9ed63a7ba71c"
  },
  {
    "url": "assets/js/app.3a31ed76.js",
    "revision": "a24cbbb1bb212c909ea49f495b8629e6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c2e863a6d8b8d73699c888fb784c2f05"
  },
  {
    "url": "design/index.html",
    "revision": "09c66137e4fa7adaa50601283d345962"
  },
  {
    "url": "index.html",
    "revision": "630f01eb869a8fbff1dee8681f4c1bcb"
  },
  {
    "url": "intro/index.html",
    "revision": "b248f6667ddcd94b58288676fe6abc17"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "2edbbe8bdb13609d7acb26a10195e0dd"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b5e7af41b155d7627a20c5f5ed463fcb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1dc1849820347899328e60c639dfb630"
  },
  {
    "url": "software/index.html",
    "revision": "dec11baaf10aaf0343709dc6216ed7d7"
  },
  {
    "url": "test/index.html",
    "revision": "0926383adaad06b539f60cf594745b4f"
  },
  {
    "url": "use cases/index.html",
    "revision": "a986ae2815986fb7b7c855390921ee8f"
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
