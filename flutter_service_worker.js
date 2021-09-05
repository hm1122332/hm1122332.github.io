'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cc4e97d86bd533b967b1600029f10aa1",
"assets/assets/addincompany.jpg": "8b36316699c05e22b45f536e4591fe42",
"assets/assets/addingnewdesign.jpg": "a4dec4945cad5c9402373e574acf8ac0",
"assets/assets/brandifyus.jpg": "a1ec60842ce1c28f65a266d3ec15d367",
"assets/assets/brandifyuslogo.jpg": "dea52823fe3165632be1670108b6a7ac",
"assets/assets/building.jpg": "d26ef8c0cde57804e296a8d2b90428b7",
"assets/assets/category.png": "2fb6cd4aadd8f70775d63a51fad4f583",
"assets/assets/comertial.jpg": "0215a8dfb53658785f09faf9e05aac6c",
"assets/assets/comingsoon.jpg": "bf0b725a6091f41e104bae4857201095",
"assets/assets/drawing.jpg": "f6a5e51577106521f68b7bd7d5d981f3",
"assets/assets/engineer.png": "70ad9ac9e0b0cc497ae8d84332ebb35d",
"assets/assets/facebook.png": "07fcfa63dcb65da2034ee7eabd8e72d1",
"assets/assets/files.jpg": "aca59bcab77b1af7976b83afc7eb1b48",
"assets/assets/hosenlogo2.jpg": "70ddfb072ec0a34bfad4e0f60e465b59",
"assets/assets/hosenmap.png": "7facd3ee21242434cfe60534b8d7be3d",
"assets/assets/hospital.jpg": "a53362c3bc42f828547c95cb32c6cf1d",
"assets/assets/iconImages/arc%2520drawing.png": "56790d905674423ffae229acff650ad5",
"assets/assets/iconImages/calander.png": "220c635514d4488608f2f5abf8972186",
"assets/assets/iconImages/certificate%2520noc.png": "86bce2ccce58704533d6fbe4e3a1594a",
"assets/assets/iconImages/design%2520idea.png": "2e8ad932333b98969f51aaaea49de49d",
"assets/assets/iconImages/digging.png": "25facf067fa73ce1ae57c8401472fde5",
"assets/assets/iconImages/drainage.png": "82b7aaa19f69d957c53e005371a5fa08",
"assets/assets/iconImages/electric%2520room.png": "fc2cca4d55dee4d6a8ee6a0179ba56bb",
"assets/assets/iconImages/etisalat.png": "b67f85d297119ad1f5dd00c69e082fa9",
"assets/assets/iconImages/fire.png": "ea6cfb6683b2e8e53b20beefaaebb652",
"assets/assets/iconImages/owner%2520approval.png": "7a67486a522c44b57a07182c734772b5",
"assets/assets/iconImages/prespictive%2520approve.png": "becec4a0b7c4c33bfeaedfb951ffe798",
"assets/assets/iconImages/registring.png": "6d21e504389c894a4ed3e6e49802787b",
"assets/assets/iconImages/road.jpg": "13dbfc5770e8673f588ff7996bf25872",
"assets/assets/iconImages/signed.jpg": "6db5f4cd2a033c6a7a7d5ab4036472fd",
"assets/assets/iconImages/specidication.png": "1b103a571c28ded0df0f325c2f8a7769",
"assets/assets/iconImages/stru%2520drawing.png": "a1ebb7227f57da6e33a445c7f572852d",
"assets/assets/iconImages/watersupply.png": "a7c19f988cd01459ed694cfb1326c13f",
"assets/assets/IMG-20210228-WA0000.jpg": "1d5863a86a7ed7d4821590279e27394b",
"assets/assets/instag.png": "28c5fae49114271c125726fc971c42fb",
"assets/assets/internet.png": "5e58342dcc3224c83f392abeddd56de7",
"assets/assets/istrahat.jpg": "44cc3f137188ff984f0ec08b71a0e108",
"assets/assets/loginb.jpg": "38dab431238271edbf09b97c35a20566",
"assets/assets/loginbackground.jpg": "274640f36f54d8ea06bcedb5036a4898",
"assets/assets/LOGO-AL%2520HOSN_1.png": "5b3ab15073c29cfe9e96d49f54445a8e",
"assets/assets/logo.jpg": "84c0b2c54596246196354fdf6f4547b1",
"assets/assets/logob.png": "f9665482e42b5f7baf70b15fdc76ced2",
"assets/assets/logoonly.png": "b26d69c4f2b39c73febac9d5cba0572a",
"assets/assets/m1.jpg": "ef2149bca6e688d9cfa45e5233a0bcea",
"assets/assets/mall.jpg": "8afab011a321ada931320d2548f2397d",
"assets/assets/mosque.jpg": "182143a78f50b05a9f6d6be968e7905f",
"assets/assets/natinal.png": "6fe1e386be19ddd2e30b9741c9412089",
"assets/assets/news.jpg": "914adcf4d42aea27a8b88a4fde827248",
"assets/assets/ozonedd.jpg": "de119c37565386364b8b3557cd193e1c",
"assets/assets/park.jpg": "9be263286be7f41f764d1c9d13c99b35",
"assets/assets/play.png": "419f72b75552fb9f5337e7a9e367ae72",
"assets/assets/play2.png": "9f126619595c6ec1f37ac397a22d103e",
"assets/assets/ppl.jpg": "268e44fd9eb25e3586d5224e61b4042f",
"assets/assets/projectnoimage.jpg": "4509adf5ae72f5236a0c43d229d06f2d",
"assets/assets/radial_scale.png": "2286ab6f98dd8de455af647d61fe7488",
"assets/assets/sh.gif": "286c07ee26be7f7d520c63cc74499c4b",
"assets/assets/shcool.jpg": "f8fa449a130ffa1144c5c57b4e9d524b",
"assets/assets/site%2520visit%25202.jpg": "ecf4ff851fa604fc5c3c3e7f7d71ac4f",
"assets/assets/snapchat.png": "461c41a9daf833466512b76ef229b957",
"assets/assets/villa1.jpg": "677164449f9c104f890ccb7f8d24bb71",
"assets/assets/villa1d.jpg": "b8377638010fd55443040fef919aedd7",
"assets/assets/villaa.jpg": "dc1e6cd60c516a90ce98e3a8c65fb4e8",
"assets/assets/villasilver.jpeg": "25eb4215458dacdf22474e8e67dca4e5",
"assets/assets/whatappb.png": "c92bbf63b7915e7bfee934b4224672fe",
"assets/assets/whatappsilver.jpg": "43ba5d0794ca6e24f941dae88902e825",
"assets/assets/whatsappp.png": "fe864327131f181611a0df8b7766bc54",
"assets/assets/whatsappused.png": "f4d737cb6adbfb4a875c14e21b22382c",
"assets/assets/whatsappwhite.png": "a387cfb93fb8a720cd37073072d7fc9b",
"assets/assets/youtube.png": "e36df75ad2ff53dd7cc640fb19db310e",
"assets/FontManifest.json": "6b7a36c4a9f94dd609391985171199a9",
"assets/fonts/a.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/arial%25203.ttf": "5995c725ca5a13be62d3dc75c2fc59fc",
"assets/fonts/arial.ttf": "91871314e7593d93e7d52d272e75deb6",
"assets/fonts/b.ttf": "21e6d71c2301e16cfc210492896a4dd5",
"assets/fonts/c.ttf": "fadf3643241c767ed85bdd91d2af9ccb",
"assets/fonts/d.ttf": "94ecb7555a8e2a1ce6096e37337ab661",
"assets/fonts/dd/dd.ttf": "62027b7aa5859e5ecdf9a09a5ee7cdac",
"assets/fonts/e.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/fonts/f.ttf": "31cf3c974f725ce750854143dfcca310",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "139210d3ac96d24d7070790fc988d977",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "3320b684446ace9b7e0f4a1d9bd9e287",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "10f919d134a10cbd97e32c01d22051c1",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "a0eb8f5e7889c5ca93045133889daf28",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bb0af31b58c87da6950f9ce594996734",
"/": "bb0af31b58c87da6950f9ce594996734",
"main.dart.js": "e37950deefb18f66055558689b417d6f",
"manifest.json": "c4e8a49579a39b370d24285d55142531",
"version.json": "54dfcaafc85d1b2d19a2b65e881c47e3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
