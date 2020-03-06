;
//Asignar un nombre y Version al Cache

const CACHE_NAME='v1_cache_evolution_gamin',
    urlsToCache=[
        './',
        './img/banner.png',
        './img/logo.png',
        './estilo/estilo_menu.css',
        './estilo/estilo.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js',
        './js/eskju.jquery.scrollflow.min.js',
        './menu.js',

    ]

//Durante la fase de instalacion generalmente se almacena en cache los activos estaticos
self.addEventListener('install',e=>{
   e.waitUntil(
       caches.open(CACHE_NAME)
       .then(cache=>{
           return cache.addAll(urlsToCache)
           .then(()=>self.skipWaiting())
       })
       .catch(err=>console.log('Fallo registro de cache',err))
   ) 
})

//Una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexion
self.addEventListener('activate',e=>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{
            cacheNames.map(cacheName=>{
                //Eliminamos lo que ya no se necesita en cache
                if(cacheWhitelist.indexOf(cacheName)== -1){
                    return caches.delete(cacheName)
                }
            })
        })
        //Le indica al SW activar el cache actual
        .then(()=>self.clients.claim())
    )
})

//Cuando el navegador recupera una url
self.addEventListener('fetch',e=>{
//Responder ya sea con el objeto en cache o continuar y buscar la URL real
    e.respondWith(
        caches.match(e.request)
            .then(res=>{
                if(res){
                    //Recuperamos del Cache
                    return res
                }
                // recuperar de la peticion URL
                return fetch(e.request)
            })
    )
})


