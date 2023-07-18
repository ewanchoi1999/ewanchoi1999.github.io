'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4d62a6114ab94a2031d46026b0fb61e4",
"index.html": "c7c491722a9735cc6122f294d5827860",
"/": "c7c491722a9735cc6122f294d5827860",
"main.dart.js": "64cdf0e749d5d64f4e354c0fac4fb54e",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b20315fecfd565f29a28dd6f6e380bda",
"assets/AssetManifest.json": "c4f8d338f180c31cf1ef760980040763",
"assets/NOTICES": "e3d2119e76a0390397969e7dd4a9466f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0765ee2a7377d8db142d7f2e36f83594",
"assets/fonts/MaterialIcons-Regular.otf": "690ac0a92477f760ac90f6c0adfb5c4d",
"assets/assets/images/37b.png": "487637be52b1321debf1165d3c578d6d",
"assets/assets/images/boy2.png": "468c86fb22bf42efce6e93256799faa6",
"assets/assets/images/apple2.png": "df1a6c4212bd489c19e2bdd9f7cba1c4",
"assets/assets/images/21b.png": "2327c20fdd8d201c57fe53d67d58ded0",
"assets/assets/images/car2.png": "7d7d4edd976badad10690f518d7798cd",
"assets/assets/images/car3.png": "affea74c19c6798cd8b36a44edd6f6c6",
"assets/assets/images/21c.png": "8f12addb20f18c6d833b57bb6f8f0067",
"assets/assets/images/ut1.png": "65a5dfd457835fbb0a5b79741ea0e2bb",
"assets/assets/images/boyR.png": "cbd2e194858ce5a67b25f48ff914d358",
"assets/assets/images/boy3.png": "7808c61621a8bc70b20c63f7d41440f4",
"assets/assets/images/boxblocks.png": "653cb0d77518954c3e1af5c2c2e2a612",
"assets/assets/images/37c.png": "dfcc06aaaf87ef204100b544fadca3a7",
"assets/assets/images/37a.png": "62256f1e1ff2a48eb816053549f78044",
"assets/assets/images/boy1.png": "f3a1c27f27d30b1096b3e0b51ea72562",
"assets/assets/images/ut3.png": "fc72966e72e2d0d96f3bec86440e9f4e",
"assets/assets/images/21a.png": "23119192286e2199d1b0edcd1a6dbfe6",
"assets/assets/images/car1.png": "94b5e395f65ddc9ab663083c5f8b5808",
"assets/assets/images/housebuild.png": "f54db92a5bae6e91291a3ce7c1429b5e",
"assets/assets/images/ut2.png": "075953c13dc11cfe972da335eddc6742",
"assets/assets/images/redflowers.png": "9be847dd5a98a2d6d2e74f613112b916",
"assets/assets/images/3doors.png": "4e92080d550c714403fcedf4c5f0ee41",
"assets/assets/images/animal1.png": "17c2a9f2bfc52ee19165da3c4a6463d7",
"assets/assets/images/dog3.png": "0359ead86951848efc43fc7fb896cd9b",
"assets/assets/images/20a.png": "9bf0b8b8839683d8150c5fc5542a1ac1",
"assets/assets/images/buttbird.png": "69c7b1347f9c1359e57666272853a23a",
"assets/assets/images/dog2.png": "82ae7377075a75f3d97fecca7cec4de4",
"assets/assets/images/36a.png": "1ff1ed6461f102cb09525ed8317356a5",
"assets/assets/images/36c.png": "33353fcaebbb9a4f506c684c79ef3eb9",
"assets/assets/images/brush.png": "c18c34ae6a0bb1f8c592342a1c8d873e",
"assets/assets/images/animal2.png": "53de60a05438a36410c2e8fd5e76b702",
"assets/assets/images/20c.png": "3996597e04b2568ee8c10a85949375c1",
"assets/assets/images/20b.png": "fadc1cc85718dfe513b4bd738c427240",
"assets/assets/images/dog1.png": "27ff567f6c93e5adde6f0eaf6d1584af",
"assets/assets/images/capon.png": "b6ec800b71902aedfae43e4d9b732bc2",
"assets/assets/images/redflower.png": "a12a9ca87c3afdcf9f4d68f685369c5a",
"assets/assets/images/animal3.png": "4e4590f9d8b484a0054df1b64986fd29",
"assets/assets/images/red_ball.png": "ff7c71380a53d2bd9a70b9d40dd315f7",
"assets/assets/images/36b.png": "9d9fe0b2b7cb537fd810e6a2b38c46f9",
"assets/assets/images/31a.png": "1c99cfe1c325e229d18b617da70b4ba9",
"assets/assets/images/1door.png": "aeb77a35ef8c26194bde2d273fd2d3be",
"assets/assets/images/book3.png": "e8e071fa59bb87433a65f0711d6c5472",
"assets/assets/images/shoeson.png": "13ff740503f3512ead8656f1861e5ffc",
"assets/assets/images/27a.png": "b9667f3214cd04ee5cb1031224abbba5",
"assets/assets/images/bike.png": "b26e87d131a1ac1dfa87b53773597c35",
"assets/assets/images/book2.png": "9834c9a40ea991d73fc1ec40b2177592",
"assets/assets/images/31b.png": "45c244476bd730656ed2cc05b80be7ad",
"assets/assets/images/27b.png": "4c2787f5f2e6d66eacc7f940c8d17278",
"assets/assets/images/27c.png": "3acd587f52e45b915bb942e9495e86ff",
"assets/assets/images/bird.png": "27880d9c783031e1e84dd8e703150211",
"assets/assets/images/pouring.png": "9bb617422d95d669464896cfbbcbb343",
"assets/assets/images/book1.png": "b100d10b9713da56cfdfe8a8d55d8006",
"assets/assets/images/31c.png": "8e8f5258b5defe570b2e97193379a041",
"assets/assets/images/30c.png": "39b68933898ae342f98d483c22843d28",
"assets/assets/images/girl.png": "c1b588592f8d2f2b5fe38bfdf32f9b2f",
"assets/assets/images/butterfly.png": "02ae8466b84db68fa21f75839751ac50",
"assets/assets/images/30b.png": "13b5fa662c72ccd384375e6ab2e082a2",
"assets/assets/images/cups.png": "0c69c8bc1d89b33bc7ce7bdc9232bf5b",
"assets/assets/images/30a.png": "26e1debef1b7dd7c679d4c90a13f7cfc",
"assets/assets/images/orange.png": "cca5a1bf56c5078011dcefb4ad17e5c0",
"assets/assets/images/29c.png": "5074444e909222cd53f473019e306dc4",
"assets/assets/images/29b.png": "b720ca1da5e9b20e679bb7bc916a6597",
"assets/assets/images/nodoor.png": "71c5612cf4934fa2da8517660e3a285f",
"assets/assets/images/25a.png": "7f774e6d96a3646c36f79fb000ac3438",
"assets/assets/images/building.png": "c84d643a89a0041c6161e5d1d1936e9b",
"assets/assets/images/33a.png": "f43f460c803a993552a2be8125de86c6",
"assets/assets/images/33c.png": "dcaaea603c5c9f99ab4072599ae24c93",
"assets/assets/images/yellowflowers.png": "cb906c0c0fe2d2724dcb4dfef5f77b0e",
"assets/assets/images/25c.png": "790628704144f5fa8d83bc9cd0dd9b08",
"assets/assets/images/29a.png": "5e3493d0c307c13d99d6b2faccf98716",
"assets/assets/images/25b.png": "2954289c32d33701e5f1c8d5d5e73ef3",
"assets/assets/images/cup.png": "b678e32e133bbfeac8fd07e8a7ee9276",
"assets/assets/images/33b.png": "1d8eecaa0168604b3d7ed2e48f91162a",
"assets/assets/images/32b.png": "7d81bb6b795a3c10986eba95da144abb",
"assets/assets/images/fat2.png": "6c21606e262fc39257bf7d54f9ec95f0",
"assets/assets/images/24b.png": "73cf23774a76c6fcee993603a8bc8e88",
"assets/assets/images/28a.png": "eba262280e0a8eb7e659525523c85f37",
"assets/assets/images/24c.png": "7da4e2bc1276423ec662d40ceef69070",
"assets/assets/images/fat3.png": "9ca950ba1f22de02dfeca838a8b11f27",
"assets/assets/images/26.jpg": "8cfe46e1268f094bdd5517295155d2d3",
"assets/assets/images/32c.png": "0e259fe0e961706c8f4f0ed6cf4825eb",
"assets/assets/images/32a.png": "d5617429a03b9b0fc2fb3b4cd1876910",
"assets/assets/images/fat1.png": "e0c865325228e13215dde561235e3c01",
"assets/assets/images/short1.png": "ab1dbe9c3467af20f777e8415ad648b7",
"assets/assets/images/24a.png": "2f0e682b1895ab5dc5f03e839ce4c545",
"assets/assets/images/school_logo.jpg": "6da913d5703d9b3655eb7e317872566c",
"assets/assets/images/28b.png": "d42485af230dab34cd8b440293c2d1e5",
"assets/assets/images/28c.png": "34d21160366cd7b6f3d2123f761361fc",
"assets/assets/images/35c.png": "c38507afb15f4cd508d07d94b85f39b0",
"assets/assets/images/monkey.png": "e3a0ba8046cb8dfea29553c4e9194937",
"assets/assets/images/boyM.png": "6d17e842f43dd38adf1c065d250266a8",
"assets/assets/images/23c.png": "1de24a9866f1108ef3a3d175aefa5d50",
"assets/assets/images/23b.png": "759a6127332b058bbae963e795c784e7",
"assets/assets/images/boyL.png": "83c5e96e41f038d2e08aa296ccf767e9",
"assets/assets/images/star1.png": "9129657849370434fceb65c78dbdecf8",
"assets/assets/images/39a.png": "96d62ee85bea14a6ec4243593c10d977",
"assets/assets/images/35b.png": "cc2cf70933e2bd842b72e8f3210020e5",
"assets/assets/images/blue_bowl.png": "f2a20d6af7df5f85f1f57bba9437f002",
"assets/assets/images/39c.png": "0ceb206dac228e1a9d525b908350d9c7",
"assets/assets/images/star3.png": "e8721acd861c82d6a62f44cf4d07b647",
"assets/assets/images/kick.png": "823d142a03b8e6b058da21d410751b24",
"assets/assets/images/23a.png": "a4479e00ff0e0b6e90d54769ce6ec90f",
"assets/assets/images/star2.png": "630b9a7e8f0df1cebb48f9eb4b3d54b0",
"assets/assets/images/39b.png": "83cfdebd30be70153c008decafc88da9",
"assets/assets/images/35a.png": "a40a7be2360e2ea2a72cb63ad81f3c58",
"assets/assets/images/34a.png": "1bf726694a979dda7463c4d30c20a914",
"assets/assets/images/38b.png": "75534cd8f8d27b48dadf24d64bd1e0af",
"assets/assets/images/blue_ball.png": "3f922f33a6b1dd1ab2da377f02b68753",
"assets/assets/images/22a.png": "567c4a154c2632d9505ad487d4aa3437",
"assets/assets/images/bigapple.png": "4c8ffbdb1b0c48187ab49f3a4425f4b9",
"assets/assets/images/boy1a.png": "8d3eb14f39c3f85283440c3396ff4c0c",
"assets/assets/images/38c.png": "929c1251d0370a9889fdf64516a9dd99",
"assets/assets/images/34b.png": "9a8bb03574633afd79b1967694e428d3",
"assets/assets/images/38a.png": "69dcdc87e652f979ecf4247fdaf7e579",
"assets/assets/images/22b.png": "e055d81f413e172fd0ce1e398132fa20",
"assets/assets/images/boy1c.png": "c7df75fa87c66aea002595c2e43d0511",
"assets/assets/images/boy1b.png": "86a663811a638b1b55de6aed8386962d",
"assets/assets/images/22c.png": "beccb78904dd7ba2953a69c703db9b54",
"assets/assets/images/sockson.png": "e132de5758f194f2c9ae43e9d3feff1b",
"assets/assets/images/teddy.png": "fbb84f7d82d1c57bb4264a7d479b22fd",
"assets/assets/images/34c.png": "79c2d9a25d340b87db1cf445ad53d503",
"assets/assets/recording/16.wav": "09068a0a0b307db21fe23c3fcd5ade54",
"assets/assets/recording/17.wav": "f7a826165aa0fd6952916f1487f9dd93",
"assets/assets/recording/15.wav": "0c890bf225774a5bc9c2dd0a3eb18291",
"assets/assets/recording/29.wav": "9b85cf86686d2a9fd2a25c7db3433f33",
"assets/assets/recording/28.wav": "81976515b16d92043a9808e088176cc0",
"assets/assets/recording/14.wav": "8f3a929392987a1b3196f46dcb086a21",
"assets/assets/recording/0b.wav": "7df71f2afc04282dd54cd31bfe442f33",
"assets/assets/recording/38.wav": "df8717f50f05a7d9c8feaaf4f0528348",
"assets/assets/recording/10.wav": "5ae5638bad6ffec195f696c0beabaa66",
"assets/assets/recording/11.wav": "c8f51950fb4527a92a367a554fd9df6c",
"assets/assets/recording/39.wav": "8e6c002704ae7306738d48bb78ed0fbd",
"assets/assets/recording/0a.wav": "01ec5a465e383a2d8de6ff214d0b7071",
"assets/assets/recording/13.wav": "18917b108690dc75266a7b0402471243",
"assets/assets/recording/12.wav": "f9895bebcf9d662be508700d62f0f739",
"assets/assets/recording/9.wav": "fed4e15b285096626f3998f06fa89c9c",
"assets/assets/recording/8.wav": "ffd3e25ae81389633622eb29ffa1f7b7",
"assets/assets/recording/40.wav": "40ed4b6e2ff0cd9328e8ca17e89da1da",
"assets/assets/recording/6.wav": "04b2acecdece09183a2d0e99d4b09285",
"assets/assets/recording/7.wav": "572f5d41633266b091dea8cd593e89e3",
"assets/assets/recording/41.wav": "063cc7efd2b470bf7c009627e141490b",
"assets/assets/recording/5.wav": "6635426a8236b515101a9c321f41af2d",
"assets/assets/recording/43.wav": "3c96e17f12d38ba74f982f93ed534d48",
"assets/assets/recording/42.wav": "dd70be231b379b02ad648d4a4d3086f0",
"assets/assets/recording/4.wav": "49144c20da3b082107ec0ed99bf99fe9",
"assets/assets/recording/0.wav": "689387cf8347d706d5733f6cec27931e",
"assets/assets/recording/1.wav": "03e01d6e5987a11d7ea953e953891667",
"assets/assets/recording/3.wav": "163f55a6dc7a89317be3e40b45559b54",
"assets/assets/recording/2.wav": "f64b1d16ee536c7718154bf74442e019",
"assets/assets/recording/23.wav": "e6757f9a571da8056160fd3d1a72fe08",
"assets/assets/recording/37.wav": "ab5ca13427c95773df2b97bd7d3e1b69",
"assets/assets/recording/36.wav": "c5b0928b794866eb4d0b33f1621559d2",
"assets/assets/recording/22.wav": "061e5f7f76dbcfabc3b18536542d00dd",
"assets/assets/recording/34.wav": "38588c49108622a0034054afad39a91d",
"assets/assets/recording/20.wav": "57173265d741676c7a2cd669d4db075c",
"assets/assets/recording/21.wav": "60030c619da8915208393c2add7b4325",
"assets/assets/recording/35.wav": "f19178bfc3ef975bf461487260e448a2",
"assets/assets/recording/19.wav": "1c3644cc9df8f8b5a9f5f03bcc53fbf1",
"assets/assets/recording/31.wav": "3a01e3754a7cfd06e240b70469008153",
"assets/assets/recording/25.wav": "0842f083e640385df4cc396a7de68dfd",
"assets/assets/recording/24.wav": "05497b2c8d21f036ee5a69c43c31aea1",
"assets/assets/recording/30.wav": "65553ab9363e79ed84836368160915fd",
"assets/assets/recording/18.wav": "9e30c65da26f604c5add890108e14372",
"assets/assets/recording/26.wav": "1ffdaa6035c8df769597971024decaf2",
"assets/assets/recording/32.wav": "68dd274b9fd813c1052838b68ebc369b",
"assets/assets/recording/33.wav": "49ede17f6d023494565b0afa13fca0d9",
"assets/assets/recording/27.wav": "ad5ccae589251bce6fc2595aa213ebb6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "69eba9f7e275f21e3736f9f5a197562a",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "f7d7efdddd3f6ca40da77de0f383d2c1",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "6f8a8269da1b5bf6ad0be9785202804f",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
