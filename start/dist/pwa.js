var firebaseConfig={apiKey:"AIzaSyBfLRXB-hpP4apKs9cFPL_WuqYohXDdv_4",authDomain:"pwa-workshop-63f48.firebaseapp.com",databaseURL:"https://pwa-workshop-63f48.firebaseio.com",projectId:"pwa-workshop-63f48",storageBucket:"pwa-workshop-63f48.appspot.com",messagingSenderId:"1000934113831",appId:"1:1000934113831:web:581cee95d9a6f469"},FCFUrl="https://us-central1-pwa-workshop-63f48.cloudfunctions.net";firebase.initializeApp(firebaseConfig);var messaging=firebase.messaging();messaging.usePublicVapidKey("BJbjv60gNlm-6v5eoE-x4YUGZb94LyJsVCtC6oM9Qqk6lWWHI1CODiiPdRDxAP_EnbGAPoxEmYb5l3mmSOChJck"),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(e){return messaging.useServiceWorker(e)}).then(function(){return requestPermission()}).then(function(){return getToken()}).then(function(e){return sendTokenToServer(e)}).then(function(e){console.log("Notifications setup is ready")});var sendTokenToServer=function(e){return firebase.functions().httpsCallable("addToken")({token:e})},getToken=function(){return messaging.getToken().then(function(e){if(e)return e;console.log("No Instance ID token available. Request permission to generate one.")}).catch(function(e){console.log("An error occurred while retrieving token. ",e)})},requestPermission=function(){return messaging.requestPermission().then(function(){return console.log("Notification permission granted."),!0}).catch(function(e){console.log("Unable to get permission to notify.",e)})};messaging.onMessage(function(e){console.log("Message received. ",e),console.log(e)});