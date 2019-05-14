importScripts("../../js/workbox.js");var cssFiles=["/css/first-section.css","/css/main.css","/css/second-section.css","/css/third-section.css","/css/tikal-tech-radar.css"],scriptsFiles=["/js/app.js","/js/default.js","/js/scripts.js","/js/platform.js","/js/workbox.js","/pwa/index.js","/pwa/sw/caching.js","/pwa/sw/notifications.js"],htmlFiles=["/index.html","/schedule/index.html","/speakers/index.html","/venue/index.html","/updates/index.html","/updates/Can-Kubernetes-Keep-a-Secret.html","/updates/conversational-ui.html","/updates/Full-Cycle-Development-at-netflix.html","/updtes/Hacker-vs-Company-Cloud-Cyber-Security-Automated-with-Kubernetes.html","/updates/Interview-With-Haggai-About-Chaos-Engineering.html","/updates/OnRadar-Episode-1-A-Config-Keeping-tale.html","/updates/You-Are-Not-A-Commodity.html"],otherFiles=["/site.webmanifest"],initCaching=function(){workbox?(workbox.precaching.precacheAndRoute(cssFiles.concat(scriptsFiles,htmlFiles,otherFiles)),workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,workbox.strategies.staleWhileRevalidate({cacheName:"external-google-scripts"})),workbox.routing.registerRoute(/(.*)\.(?:png|gif|jpg|svg|ico|jpeg)/,workbox.strategies.cacheFirst({cacheName:"images"}))):console.log("Workbox didn't load 😬")};