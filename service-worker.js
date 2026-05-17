// SkillSwap PH — Service Worker (GitHub Pages compatible)

const CACHE_NAME = 'skillswap-v2';
const RUNTIME_CACHE = 'skillswap-runtime-v2';

// Detect if running on GitHub Pages
const isGitHubPages = self.location.hostname.includes('github.io');
const GHPATH = isGitHubPages ? '/skillswap-pwa' : '';  // ← PALITAN ITO

const PRECACHE_URLS = [
    `${GHPATH}/`,
    `${GHPATH}/index.html`,
    `${GHPATH}/dashboard.html`,
    `${GHPATH}/skills.html`,
    `${GHPATH}/matches.html`,
    `${GHPATH}/exchanges.html`,
    `${GHPATH}/messages.html`,
    `${GHPATH}/profile.html`,
    `${GHPATH}/global.js`,
    `${GHPATH}/style.css`,
    `${GHPATH}/manifest.json`,
    `${GHPATH}/icons/icon-192.png`,
    `${GHPATH}/icons/icon-512.png`
];

self.addEventListener('install', (event) => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[SW] Pre-caching app shell');
            return cache.addAll(PRECACHE_URLS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (request.method !== 'GET') return;
    if (!url.protocol.startsWith('http')) return;

    // API calls - Network First
    if (url.pathname.includes('/api/')) {
        event.respondWith(networkFirst(request));
        return;
    }

    // HTML pages - Network First with offline fallback
    if (request.headers.get('accept')?.includes('text/html')) {
        event.respondWith(htmlStrategy(request));
        return;
    }

    // Static assets - Cache First
    event.respondWith(cacheFirst(request));
});

async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        return new Response('Offline', { status: 503 });
    }
}

async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await caches.match(request);
        return cached || new Response(JSON.stringify({ error: 'Offline' }), { status: 503 });
    }
}

async function htmlStrategy(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch {
        const cached = await caches.match(request);
        if (cached) return cached;
        return new Response(offlineHTML(), { headers: { 'Content-Type': 'text/html' } });
    }
}

function offlineHTML() {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>SkillSwap PH — Offline</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Plus Jakarta Sans',sans-serif;}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#1e40af,#2563eb);color:white;text-align:center;padding:24px;}
.card{background:rgba(255,255,255,0.12);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.2);border-radius:24px;padding:48px 40px;max-width:380px;}
.icon{font-size:3.5rem;margin-bottom:20px;}
h1{font-size:1.5rem;margin-bottom:10px;}
p{color:rgba(255,255,255,0.75);margin-bottom:28px;}
button{background:white;color:#2563eb;border:none;padding:13px 28px;border-radius:12px;font-weight:700;cursor:pointer;}
button:hover{opacity:0.9;}
</style>
</head>
<body>
<div class="card">
<div class="icon">📡</div>
<h1>You're Offline</h1>
<p>Please check your internet connection and try again.</p>
<button onclick="window.location.reload()">Try Again</button>
</div>
</body>
</html>`;
}