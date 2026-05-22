// Global functions for SkillSwap PH

function showToast(msg, duration = 3000) {
    let t = document.getElementById('toast');
    if (!t) {
        const toastDiv = document.createElement('div');
        toastDiv.id = 'toast';
        document.body.appendChild(toastDiv);
        t = toastDiv;
    }
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1f2937;color:white;padding:10px 20px;border-radius:12px;font-size:0.8rem;z-index:2000;opacity:0;transition:opacity 0.3s;';
    setTimeout(() => { t.style.opacity = '1'; }, 10);
    setTimeout(() => { 
        t.style.opacity = '0'; 
        setTimeout(() => { if (t && t.parentNode) t.parentNode.removeChild(t); }, 300); 
    }, duration);
}

// Notification badge updater
let notificationInterval = null;

function startNotificationListener() {
    if (notificationInterval) clearInterval(notificationInterval);
    
    notificationInterval = setInterval(async () => {
        const token = localStorage.getItem('access_token');
        if (!token) return;
        
        try {
            const [msgCount, sessCount] = await Promise.all([
                fetch(`${API_URL}/messages/unread-count`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }).then(r => r.ok ? r.json() : 0).catch(() => 0),
                fetch(`${API_URL}/sessions/pending-count`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                }).then(r => r.ok ? r.json() : 0).catch(() => 0)
            ]);
            
            updateBadges(msgCount, sessCount);
        } catch (e) {
            console.log('Notification check failed');
        }
    }, 5000);
}

function updateBadges(messageCount, sessionCount) {
    const msgBadge = document.getElementById('msgBadge');
    const notifBadge = document.getElementById('notifBadge');
    
    if (msgBadge) {
        if (messageCount > 0) {
            msgBadge.textContent = messageCount > 9 ? '9+' : messageCount;
            msgBadge.style.display = 'flex';
        } else {
            msgBadge.style.display = 'none';
        }
    }
    
    if (notifBadge) {
        if (sessionCount > 0) {
            notifBadge.textContent = sessionCount > 9 ? '9+' : sessionCount;
            notifBadge.style.display = 'flex';
        } else {
            notifBadge.style.display = 'none';
        }
    }
}

// Auto-start when logged in
if (localStorage.getItem('access_token')) {
    startNotificationListener();
}