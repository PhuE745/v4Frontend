// global.js — Shared mock data and state for SkillSwap PH
// Load this BEFORE other page scripts

window.SkillSwap = window.SkillSwap || {};

// ============================================
// CURRENT USER
// ============================================
SkillSwap.currentUser = {
    id: 1,
    username: 'JohnDoe',
    email: 'john@skillswap.com',
    avatar: 'JD',
    rating: 4.8,
    exchanges: 5,
    skills_count: 4,
    member_since: 'Jan 2024',
    location: 'Metro Manila',
    bio: 'Passionate web developer and lifelong learner. Love teaching and sharing knowledge!'
};

// ============================================
// USER SKILLS
// ============================================
SkillSwap.userSkills = {
    offer: [
        { id: 1, name: 'Web Development', category: 'IT & Programming', level: 'advanced', icon: '💻', color: '#dbeafe' },
        { id: 2, name: 'React / Next.js', category: 'IT & Programming', level: 'intermediate', icon: '⚛️', color: '#dbeafe' }
    ],
    need: [
        { id: 9, name: 'Graphic Design', category: 'Creative Design', level: 'beginner', icon: '🖌️', color: '#f3e8ff' }
    ]
};

// ============================================
// ALL SKILLS (for browsing)
// ============================================
SkillSwap.allSkills = [
    { id: 1, name: 'Web Development', category: 'IT & Programming', icon: '💻', color: '#dbeafe' },
    { id: 2, name: 'React / Next.js', category: 'IT & Programming', icon: '⚛️', color: '#dbeafe' },
    { id: 3, name: 'Python', category: 'IT & Programming', icon: '🐍', color: '#dbeafe' },
    { id: 4, name: 'Data Science', category: 'IT & Programming', icon: '📊', color: '#dbeafe' },
    { id: 5, name: 'Machine Learning', category: 'IT & Programming', icon: '🤖', color: '#dbeafe' },
    { id: 6, name: 'Mobile Dev', category: 'IT & Programming', icon: '📱', color: '#dbeafe' },
    { id: 7, name: 'UI/UX Design', category: 'IT & Programming', icon: '🎨', color: '#dbeafe' },
    { id: 8, name: 'Cybersecurity', category: 'IT & Programming', icon: '🔒', color: '#dbeafe' },
    { id: 9, name: 'Graphic Design', category: 'Creative Design', icon: '🖌️', color: '#f3e8ff' },
    { id: 10, name: 'Video Editing', category: 'Creative Design', icon: '🎬', color: '#f3e8ff' },
    { id: 11, name: 'Photography', category: 'Creative Design', icon: '📷', color: '#f3e8ff' },
    { id: 12, name: 'Illustration', category: 'Creative Design', icon: '✏️', color: '#f3e8ff' },
    { id: 13, name: 'Mathematics', category: 'Academic Tutoring', icon: '📐', color: '#fef9c3' },
    { id: 14, name: 'Physics', category: 'Academic Tutoring', icon: '⚡', color: '#fef9c3' },
    { id: 15, name: 'Chemistry', category: 'Academic Tutoring', icon: '🧪', color: '#fef9c3' },
    { id: 16, name: 'English Writing', category: 'Academic Tutoring', icon: '✍️', color: '#fef9c3' },
    { id: 17, name: 'Filipino Language', category: 'Academic Tutoring', icon: '🇵🇭', color: '#fef9c3' },
    { id: 18, name: 'Fitness Training', category: 'Fitness / Lifestyle', icon: '💪', color: '#dcfce7' },
    { id: 19, name: 'Yoga', category: 'Fitness / Lifestyle', icon: '🧘', color: '#dcfce7' },
    { id: 20, name: 'Cooking', category: 'Fitness / Lifestyle', icon: '🍳', color: '#dcfce7' },
    { id: 21, name: 'Nutrition', category: 'Fitness / Lifestyle', icon: '🥗', color: '#dcfce7' },
    { id: 22, name: 'Public Speaking', category: 'Others', icon: '🎤', color: '#fce7f3' },
    { id: 23, name: 'Music (Guitar)', category: 'Others', icon: '🎸', color: '#fce7f3' },
    { id: 24, name: 'Music (Piano)', category: 'Others', icon: '🎹', color: '#fce7f3' },
    { id: 25, name: 'Business Planning', category: 'Others', icon: '💼', color: '#fce7f3' }
];

// ============================================
// CATEGORIES
// ============================================
SkillSwap.categories = [
    { name: 'All Skills', key: 'all', count: 120 },
    { name: 'IT & Programming', key: 'it', count: 45 },
    { name: 'Creative Design', key: 'design', count: 22 },
    { name: 'Academic Tutoring', key: 'academic', count: 28 },
    { name: 'Fitness / Lifestyle', key: 'fitness', count: 14 },
    { name: 'Others', key: 'others', count: 11 }
];

// ============================================
// MATCHES (ML recommended)
// ============================================
SkillSwap.matches = [
    { id: 1, name: 'Maria Santos', initials: 'MS', rating: 4.8, match_score: 92, offers: ['Web Development', 'React'], needs: ['Graphic Design', 'UI/UX'], location: 'Online', availability: 'Weekends', avatar: 'MS' },
    { id: 2, name: 'Carlo Reyes', initials: 'CR', rating: 4.5, match_score: 87, offers: ['Graphic Design', 'Illustration'], needs: ['Python', 'Data Analysis'], location: 'NCR', availability: 'Weekdays', avatar: 'CR' },
    { id: 3, name: 'Ana Lim', initials: 'AL', rating: 5.0, match_score: 85, offers: ['UI/UX', 'Figma'], needs: ['Web Development', 'Node.js'], location: 'Online', availability: 'Flexible', avatar: 'AL' },
    { id: 4, name: 'Jose Dela Cruz', initials: 'JD', rating: 4.2, match_score: 81, offers: ['Python', 'Machine Learning'], needs: ['React', 'Web Dev'], location: 'Cebu', availability: 'Weekends', avatar: 'JD' },
    { id: 5, name: 'Kim Villanueva', initials: 'KV', rating: 4.7, match_score: 78, offers: ['Video Editing', 'Photography'], needs: ['Graphic Design'], location: 'Online', availability: 'Flexible', avatar: 'KV' },
    { id: 6, name: 'Rina Torres', initials: 'RT', rating: 4.4, match_score: 74, offers: ['Mathematics', 'Physics'], needs: ['Video Editing', 'Photography'], location: 'Davao', availability: 'Weekdays', avatar: 'RT' }
];

// ============================================
// EXCHANGES
// ============================================
SkillSwap.exchanges = [
    { id: 1, with_user: 'Maria Santos', skill: 'Web Development', status: 'pending', date: 'May 2, 2026', time: '2:00 PM', mode: 'Online', initials: 'MS' },
    { id: 2, with_user: 'Carlo Reyes', skill: 'Graphic Design', status: 'accepted', date: 'May 5, 2026', time: '10:00 AM', mode: 'On-site', initials: 'CR' },
    { id: 3, with_user: 'Ana Lim', skill: 'UI/UX Design', status: 'completed', date: 'Apr 28, 2026', time: '1:00 PM', mode: 'Online', initials: 'AL' }
];

// ============================================
// MESSAGES
// ============================================
SkillSwap.messages = [
    { id: 1, from: 'Maria Santos', initials: 'MS', preview: 'Hey! Are you available this weekend?', time: '2 hours ago', unread: true, fullMessage: 'Hey! Are you available this weekend for our session? I have some questions about React hooks.' },
    { id: 2, from: 'Carlo Reyes', initials: 'CR', preview: 'Thanks for the session yesterday!', time: 'Yesterday', unread: true, fullMessage: 'Thanks for the session yesterday! I learned a lot about graphic design principles.' },
    { id: 3, from: 'Ana Lim', initials: 'AL', preview: 'Can we reschedule to Thursday?', time: '2 days ago', unread: false, fullMessage: 'Hi! Something came up. Can we reschedule our session to Thursday instead?' }
];

// ============================================
// FEATURED PROFILES
// ============================================
SkillSwap.featured = [
    { id: 1, name: 'Marco Bautista', initials: 'MB', experience: 'Intermediate', rating: 4.8, reviews: 24, skills: ['React', 'Node.js', 'UI/UX'], portfolio: 3 },
    { id: 2, name: 'Sofia Dela Rosa', initials: 'SR', experience: 'Advanced', rating: 4.9, reviews: 31, skills: ['Python', 'Data Science', 'ML'], portfolio: 5 },
    { id: 3, name: 'Luis Fernandez', initials: 'LF', experience: 'Beginner', rating: 4.2, reviews: 8, skills: ['Photoshop', 'Illustrator'], portfolio: 2 },
    { id: 4, name: 'Grace Aquino', initials: 'GA', experience: 'Intermediate', rating: 4.6, reviews: 17, skills: ['Math', 'Physics', 'Chemistry'], portfolio: 0 }
];

// ============================================
// UPCOMING SESSIONS
// ============================================
SkillSwap.sessions = [
    { date: 'May 2, 2026', time: '2:00 PM – 3:30 PM', skill: 'Web Development', with: 'Maria Santos', mode: 'Online' },
    { date: 'May 5, 2026', time: '10:00 AM – 11:00 AM', skill: 'Graphic Design', with: 'Carlo Reyes', mode: 'On-site' }
];

// ============================================
// REVIEWS
// ============================================
SkillSwap.reviews = [
    { from: 'Maria Santos', initials: 'MS', rating: 5, text: 'Great experience! Very knowledgeable and patient teacher. Highly recommend for anyone learning Web Dev.', time: '2 days ago' },
    { from: 'Carlo Reyes', initials: 'CR', rating: 5, text: 'Super helpful and flexible with schedule. Learned a lot from just 2 sessions. Highly recommended!', time: '5 days ago' },
    { from: 'Ana Lim', initials: 'AL', rating: 4, text: 'Very skilled and professional. Would love to have another session soon!', time: '1 week ago' }
];

// ============================================
// HELPER FUNCTIONS
// ============================================
SkillSwap.showToast = function (msg, duration = 3000) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
};

SkillSwap.updateUserAvatar = function () {
    const avatarEl = document.getElementById('userAvatar');
    if (avatarEl && SkillSwap.currentUser) {
        avatarEl.textContent = SkillSwap.currentUser.avatar;
    }
};

SkillSwap.updateStats = function () {
    const exchangesEl = document.getElementById('statExchanges');
    const skillsEl = document.getElementById('statSkills');
    const ratingEl = document.getElementById('statRating');

    if (exchangesEl) exchangesEl.textContent = SkillSwap.currentUser.exchanges;
    if (skillsEl) skillsEl.textContent = SkillSwap.currentUser.skills_count;
    if (ratingEl) ratingEl.textContent = SkillSwap.currentUser.rating;
};

SkillSwap.logout = function () {
    localStorage.removeItem('jwt_token');
    window.location.href = 'index.html';
};

// Send exchange request
SkillSwap.sendExchangeRequest = function (userId, userName, btnElement) {
    if (btnElement) {
        btnElement.textContent = '...';
        btnElement.disabled = true;
    }

    setTimeout(() => {
        SkillSwap.showToast(`✅ Exchange request sent to ${userName}!`);
        if (btnElement) {
            btnElement.textContent = '✓ Sent';
            btnElement.classList.add('sent');
        }
        // Update notification badge
        const badge = document.getElementById('notifBadge');
        if (badge) {
            badge.textContent = parseInt(badge.textContent) + 1;
        }
    }, 500);
};

// Update exchange status
SkillSwap.updateExchangeStatus = function (exchangeId, newStatus) {
    const exchange = SkillSwap.exchanges.find(e => e.id === exchangeId);
    if (exchange) {
        exchange.status = newStatus;
        SkillSwap.showToast(`Exchange ${newStatus}!`);
        setTimeout(() => window.location.reload(), 1000);
    }
};

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    SkillSwap.updateUserAvatar();
    SkillSwap.updateStats();

    // Highlight current page in sidebar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .sidebar a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});