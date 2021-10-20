if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"6fea0ded321c5b2fc95b1652cdf40d78","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"6fea0ded321c5b2fc95b1652cdf40d78","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"af1815dcc9d3c06d86d8bb5e2fc1b68c","url":"static/js/1.0ab3f70e.chunk.js"},{"revision":"d1c85a5d2329c92f709712e392e8bcbc","url":"static/js/11.44f499d6.chunk.js"},{"revision":"35cf7119b0e08ce06786fbcb4793e5e2","url":"static/js/12.f4eba91d.chunk.js"},{"revision":"0a3a343f59a4014d78904a65a51c18ba","url":"static/js/13.c0a5e690.chunk.js"},{"revision":"151295aa0e6beff527c5c4b72a3c0ec6","url":"static/js/14.fee95ea4.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"4667f186dd1a6b8feb09ba7b646e9cf3","url":"static/js/16.e830232a.chunk.js"},{"revision":"6e8e4e7d35e09213c45a3b2f54c8ce28","url":"static/js/17.f4af42c7.chunk.js"},{"revision":"72f44c2e8b07b92846c139612ff6b46d","url":"static/js/18.aec54715.chunk.js"},{"revision":"bb65fd608a12c8dcc25b745f1ed06c64","url":"static/js/19.88a16763.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"4bcb35cb7d9e2816be37a6140dd81ff4","url":"static/js/20.69a6842c.chunk.js"},{"revision":"503e03319f4d2e56cae05231ea17e631","url":"static/js/21.e3f5c106.chunk.js"},{"revision":"5b8ce3b09a94bc521b2844a617b78ad8","url":"static/js/22.8fea1e0c.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"49cc8a9d8f153d12c3105e44dc264b51","url":"static/js/24.0a58b3fd.chunk.js"},{"revision":"8322a0438dd00e8736c9c092d9f39093","url":"static/js/25.c096b825.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"50269789e9b3cd37651bdd5badbe2af6","url":"static/js/27.411de1e5.chunk.js"},{"revision":"5ddafeb59fd382958c1c3fed3ecd6cc2","url":"static/js/28.5662e1f8.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"8a70af2aba4d2c1d0bb363f29e6e6964","url":"static/js/3.54c99384.chunk.js"},{"revision":"e3d814bf2fddfa85ebcd3447df71368c","url":"static/js/30.359f9210.chunk.js"},{"revision":"30f2bd5c7f56efcfa8dd6ce378a253d9","url":"static/js/31.f782f721.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"1c8055600f5c80ee9e6bb76ee2d939a5","url":"static/js/34.6e605897.chunk.js"},{"revision":"c6d221515f5e91a84e6dc5f0b6af4ac7","url":"static/js/35.7ba67640.chunk.js"},{"revision":"96b11aa0a0c1833dd4cfc0810ef3c3a3","url":"static/js/36.fa828122.chunk.js"},{"revision":"a893b7f1b1bf514290045727d6609c20","url":"static/js/37.2f27cacb.chunk.js"},{"revision":"4ae5b0987877573ad0e52c0509967662","url":"static/js/38.cb58537b.chunk.js"},{"revision":"f3be3b2c1c0cc76548b8e288fcc0d2f1","url":"static/js/39.667670ee.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"425dd2e934cd73cc41788d11f48c54f0","url":"static/js/40.c4501f8b.chunk.js"},{"revision":"8f033a936eea2cf06a5f9e2684202c22","url":"static/js/41.0362fe7a.chunk.js"},{"revision":"10bc3349955b611ea02fdb75962fda8c","url":"static/js/42.17656d11.chunk.js"},{"revision":"7e79378153d2235d9243535f4a497410","url":"static/js/43.4e71eb84.chunk.js"},{"revision":"a5437acdd8ef431824c254051f1033d6","url":"static/js/44.1e1debb5.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"328488cc7bdb67f52e845e5370bd6c4c","url":"static/js/5.df9ee230.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"7a68c5c4fa7ae93b8880c50cdf5449dc","url":"static/js/8.1eff2413.chunk.js"},{"revision":"1a950676f8c532a0d090eade4b77ce3c","url":"static/js/main.1445e731.chunk.js"},{"revision":"3e8b29c9a3a13469498ffbb144702656","url":"static/js/runtime-main.821c4fc5.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
