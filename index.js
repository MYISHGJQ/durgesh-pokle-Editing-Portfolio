/* ==========================================================================
   FORMSPREE CONTACT FORM CONFIGURATION
   ========================================================================== */
const FORMSPREE_CONFIG = {
    // When visitors submit the form, Formspree will deliver it directly to your Gmail.
    formId: "mrpgpqye"
};

/* ==========================================================================
   INSTAGRAM BUSINESS API CONFIGURATION
   ========================================================================== */
const INSTAGRAM_API_CONFIG = {
    accessToken: "", // Enter your Instagram Graph API Access Token here
    userId: ""      // Enter your Instagram Business/Creator Account ID here
};

/* ==========================================================================
   PORTFOLIO DATA SYSTEM
   ========================================================================== */
const portfolioData = [
    {
        id: "highest-quality-edit",
        title: "Highest Quality Edit",
        category: "movie-edits",
        instagramUrl: "https://www.instagram.com/reel/DY4cmE3yHLN/",
        driveUrl: "https://drive.google.com/file/d/1qtxq55Rt7GgEtQJhwEVaVM8FZSKg6OsU/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-moody-cinematic-shot-of-a-dramatic-waterfall-43282-large.mp4",
        thumbnailUrl: "images/Movies.png",
        caption: "Highest Quality Edit - An intensive movie edit study focusing on high-contrast lighting, dramatic shadows, and mood-centric grading. Directed & edited for emotional impact.",
        likes: "12.5K",
        comments: "430",
        views: "145K",
        description: "A deep-dive editorial film study focusing on intense shadows and high-contrast dramatic color scales."
    },
    {
        id: "dance-velocity-edit",
        title: "Dance Velocity Edit",
        category: "velocity-edits",
        instagramUrl: "https://www.instagram.com/reel/DM2i5JmynC3/",
        driveUrl: "https://drive.google.com/file/d/1ZlnVqOnRuhZpXfqFg5mAHnfxFG-WXh39/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-man-dancing-in-front-of-a-neon-43093-large.mp4",
        thumbnailUrl: "images/dance-velocity.png",
        caption: "Neon Velocity Run - Framing rate mapped synchronization beat sync edit. Experiencing fast frame velocity visual progression synced to industrial techno beats.",
        likes: "392K",
        comments: "1,040",
        views: "4.7M",
        description: "Framerate-mapped audio beat-matching visual speed ramp synchronization sequence."
    },
    {
        id: "bmw-m4-horizon",
        title: "BMW M4 Horizon",
        category: "Speed ramp Edit",
        instagramUrl: "https://www.instagram.com/reel/DKuiLvOS8Jw/",
        driveUrl: "https://drive.google.com/file/d/15EwjyX2Nd2CfoCJJcpMkk2kun9zgMnsg/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-car-drifting-on-a-wet-track-40292-large.mp4",
        thumbnailUrl: "images/BMW.png",
        caption: "BMW Speed ramp Edit - Cinematic vertical Reels cut. Showcasing exhaust sound syncs, dynamic masking, reflections color correction, and smooth drift sequences. @mythix_editz",
        likes: "32.1K",
        comments: "1,040",
        views: "340K",
        description: "Dynamic Instagram/TikTok vertical edit with heavy engine sound design, masking transitions, and neon color grades."
    },
    {
        id: "motion-graphics",
        title: "Motion Graphics",
        category: "motion-graphics",
        instagramUrl: "",
        driveUrl: "https://drive.google.com/file/d/1SmzByt2WaYT_RM0y3meqdlRc2MmxDYWo/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cinematic-shot-of-a-futuristic-city-at-night-42283-large.mp4",
        thumbnailUrl: "images/Motion Graphics.png",
        caption: "Motion Graphics - High-impact After Effects motion design project featuring dynamic kinetic typography, fluid shape animations, and custom visual effects.",
        likes: "18.9K",
        comments: "620",
        views: "210K",
        description: "High-impact After Effects motion design project featuring dynamic kinetic typography, fluid shape animations, and custom visual effects."
    },
    {
        id: "3d-tracking-edit",
        title: "3D Tracking Edit",
        category: "3d-tracking-edits",
        instagramUrl: "https://www.instagram.com/reel/DTS6JaKjVD5/",
        driveUrl: "https://drive.google.com/file/d/10Sx8t2jN4B_a0KXEmQvY5fQ4aQvsmML4/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-building-reflected-in-a-puddle-43309-large.mp4",
        thumbnailUrl: "images/3D tracking.png",
        caption: "3D Tracking Edit - 3D tracking video placing objects and 3D text into videos.",
        likes: "27.4K",
        comments: "945",
        views: "310K",
        description: "3D tracking video placing objects and 3D text into videos."
    },
    {
        id: "trending-instagram-reel",
        title: "Trending Instagram Reel",
        category: "trending-reels",
        instagramUrl: "https://www.instagram.com/reel/DYFQwzyTSqI/",
        driveUrl: "https://drive.google.com/file/d/1nYmhyeSCxM2jbevurs2jJkmcglUA4pOq/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-neon-lit-room-41563-large.mp4",
        thumbnailUrl: "images/Trending insta reel.png",
        caption: "Trending Instagram Reel - High-engagement viral Instagram Reel edit featuring dynamic transitions, trending audio sync, and fast-paced visual storytelling.",
        likes: "38.5K",
        comments: "1,120",
        views: "420K",
        description: "High-engagement viral Instagram Reel edit featuring dynamic transitions, trending audio sync, and fast-paced visual storytelling."
    },
    {
        id: "mograph-edit",
        title: "Mograph Edit",
        category: "motion-graphics",
        instagramUrl: "https://www.instagram.com/reel/DZH7I0KMNWm/",
        driveUrl: "https://drive.google.com/file/d/1z1aL6mN9bhtDraRapVSriJ_o9obRvb76/view?usp=sharing",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-in-motion-42862-large.mp4",
        thumbnailUrl: "images/Mograph edit.png",
        caption: "Mograph Edit - Creative motion graphics study featuring fluid shape animations, geometric transitions, kinetic typography, and visual effects.",
        likes: "21.3K",
        comments: "740",
        views: "260K",
        description: "Creative motion graphics study featuring fluid shape animations, geometric transitions, kinetic typography, and visual effects."
    }
];

const showreelData = {
    id: "showreel",
    title: "Durgesh Pokle - Master Showreel",
    category: "showreel",
    instagramUrl: "https://www.instagram.com/reel/DLwFUciTQsU/",
    driveUrl: "https://drive.google.com/file/d/1nb-G-CVFi55Ps6cJsEkrJIIDGo1NOzUV/view?usp=sharing",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-of-a-city-at-night-41865-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    caption: "Durgesh Pokle Master Showreel 2026 - A compilation of cinematic film editing and motion graphics projects. Created with passion.",
    likes: "48.2K",
    comments: "1,240",
    views: "520K"
};

/* Helper Functions */
function extractShortcode(url) {
    if (!url) return null;
    const match = url.match(/\/(?:reel|p)\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
}

function cleanInstagramUrl(url) {
    if (!url) return "";
    const shortcode = extractShortcode(url);
    return shortcode ? `https://www.instagram.com/reel/${shortcode}/` : url;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* Instagram Business API Stats Sync */
async function fetchInstagramBusinessData() {
    if (!INSTAGRAM_API_CONFIG.accessToken || !INSTAGRAM_API_CONFIG.userId) {
        console.log("Instagram Business API credentials not configured. Using local statistics.");
        return;
    }

    try {
        const url = `https://graph.facebook.com/v19.0/${INSTAGRAM_API_CONFIG.userId}/media?fields=id,shortcode,like_count,comments_count,media_type,media_product_type&access_token=${INSTAGRAM_API_CONFIG.accessToken}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.data) {
            for (const media of data.data) {
                const matchedItem = [...portfolioData, showreelData].find(item => {
                    const itemShortcode = extractShortcode(item.instagramUrl);
                    return itemShortcode && itemShortcode === media.shortcode;
                });

                if (matchedItem) {
                    if (media.like_count !== undefined) {
                        matchedItem.likes = formatNumber(media.like_count);
                    }
                    if (media.comments_count !== undefined) {
                        matchedItem.comments = formatNumber(media.comments_count);
                    }

                    if (media.media_type === "VIDEO" || media.media_product_type === "REELS") {
                        try {
                            const insightsUrl = `https://graph.facebook.com/v19.0/${media.id}/insights?metric=plays&access_token=${INSTAGRAM_API_CONFIG.accessToken}`;
                            const insightsRes = await fetch(insightsUrl);
                            const insightsData = await insightsRes.json();
                            if (insightsData && insightsData.data) {
                                const playsMetric = insightsData.data.find(m => m.name === 'plays');
                                if (playsMetric && playsMetric.values && playsMetric.values[0]) {
                                    matchedItem.views = formatNumber(playsMetric.values[0].value);
                                }
                            }
                        } catch (insightErr) {
                            console.warn(`Could not fetch insights for media ${media.id}:`, insightErr);
                        }
                    }
                }
            }
            console.log("Stats synced with Instagram Business API successfully.");
        } else if (data.error) {
            console.error("Instagram API error:", data.error);
        }
    } catch (err) {
        console.error("Failed to fetch Instagram Graph API metrics:", err);
    }
}

/* Render Portfolio Grid dynamically */
const renderPortfolio = () => {
    const grid = document.querySelector('.portfolio-grid');
    if (!grid) return;

    const countIndicator = document.querySelector('.project-count-indicator');
    if (countIndicator) {
        countIndicator.textContent = `${portfolioData.length} projects`;
    }

    grid.innerHTML = '';

    portfolioData.forEach(item => {
        const isVertical = ['movie-edits', 'velocity-edits', 'Speed ramp Edit', '3d-tracking-edits', 'trending-reels'].includes(item.category);
        const cardClass = `portfolio-card mix ${item.category}${isVertical ? ' vertical' : ''}`;

        let categoryDisplay = item.category;
        if (item.category === 'movie-edits') categoryDisplay = 'Movie Edits';
        else if (item.category === 'velocity-edits') categoryDisplay = 'Velocity Edits';
        else if (item.category === 'Speed ramp Edit') categoryDisplay = 'Speed ramp Edit';
        else if (item.category === 'motion-graphics') categoryDisplay = 'Motion Graphics';
        else if (item.category === 'commercial-ads') categoryDisplay = 'Commercial Ads';
        else if (item.category === '3d-tracking-edits') categoryDisplay = '3D tracking Edit';
        else if (item.category === 'trending-reels') categoryDisplay = 'Trending Reels';

        const description = item.description || (item.caption.includes(' - ') ? item.caption.split(' - ').slice(1).join(' - ') : item.caption);

        const cardHtml = `
            <div class="${cardClass}" data-portfolio-id="${item.id}">
                <div class="card-media-wrapper">
                    <img src="${item.thumbnailUrl}" alt="${item.title}" class="card-img">
                    <div class="card-gradient-overlay"></div>

                    <span class="card-category-badge">
                        <span class="badge-dot"></span>
                        ${categoryDisplay}
                    </span>

                    <button class="portfolio-play-btn" aria-label="Play Video"
                        data-video-src="${item.videoUrl}"
                        data-video-title="${item.title}">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </button>
                </div>
                <div class="card-details">
                    <h4 class="card-project-title">${item.title}</h4>
                    <p class="card-project-desc">${description}</p>
                    <div class="card-action-btns" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px;">
                        ${item.instagramUrl ? `
                            <a href="${item.instagramUrl}" target="_blank" rel="noopener" class="card-drive-btn card-insta-link" title="View Reel on Instagram" onclick="event.stopPropagation();" style="background: rgba(225, 48, 108, 0.12); color: #e1306c; border: 1px solid rgba(225, 48, 108, 0.25);">
                                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                Instagram Reel
                            </a>
                        ` : ''}
                        ${item.driveUrl ? `
                            <a href="${item.driveUrl}" target="_blank" rel="noopener" class="card-drive-btn" title="Watch HD on Google Drive" onclick="event.stopPropagation();">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                                </svg>
                                Drive HD Link
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHtml);
    });
};

/* ==========================================================================
   ISOLATED WELCOME INTRO CONTROLLER (#welcome-intro / .welcome-intro)
   ========================================================================== */
function initWelcomeIntro() {
    if (window.__welcomeIntroActive) return;
    window.__welcomeIntroActive = true;

    const introOverlay = document.getElementById('welcome-intro') || document.getElementById('cinematic-intro');
    if (!introOverlay) return;

    // Save initial body overflow and lock background scrolling while intro is active
    const savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Force scroll position to top/home section on load or refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const skipBtn = document.querySelector('.welcome-intro__skip') || document.getElementById('intro-skip-btn');
    const welcomeTextEl = document.querySelector('.welcome-intro__language') || document.getElementById('intro-welcome-text');
    const progressBlockEl = document.querySelector('.welcome-intro__progress') || document.querySelector('.intro-progress-block');
    const progressFillEl = document.querySelector('.welcome-intro__progress-fill') || document.getElementById('intro-progress-fill');
    const progressCounterEl = document.querySelector('.welcome-intro__progress-counter') || document.getElementById('intro-progress-counter');
    const statusTextEl = document.querySelector('.welcome-intro__status') || document.getElementById('intro-status-text');
    const finalMessageEl = document.querySelector('.welcome-intro__tagline') || document.getElementById('intro-final-message');
    const canvas = document.querySelector('.welcome-intro__particles') || document.getElementById('intro-particles-canvas');

    const languages = [
        { text: 'WELCOME' },
        { text: 'स्वागत है' },
        { text: 'स्वागत आहे' },
        { text: 'ようこそ' },
        { text: 'BIENVENIDO' }
    ];

    let animationFrameId = null;
    let particlesActive = true;
    let isFinished = false;

    // 1. Canvas Particle System
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);

        const particleCount = Math.min(Math.floor((width * height) / 20000), 50);
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.5 + 0.1,
                speedY: -(Math.random() * 0.4 + 0.15),
                speedX: (Math.random() - 0.5) * 0.25,
                pulse: Math.random() * 0.02 + 0.005
            });
        }

        function renderParticles() {
            if (!particlesActive) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.y += p.speedY;
                p.x += p.speedX;
                p.alpha += Math.sin(Date.now() * p.pulse) * 0.005;

                if (p.y < -10) {
                    p.y = height + 10;
                    p.x = Math.random() * width;
                }
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(243, 162, 24, ${Math.max(0.05, Math.min(0.6, p.alpha))})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(renderParticles);
        }
        renderParticles();
    }

    // 2. Finish & Transition Function
    const completeIntro = () => {
        if (isFinished) return;
        isFinished = true;
        particlesActive = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        // Fade out overlay
        introOverlay.classList.add('fade-out');

        setTimeout(() => {
            introOverlay.style.display = 'none';
            document.body.style.overflow = savedOverflow || '';

            // Strip hash from URL if present and smoothly scroll to HOME section
            if (window.location.hash) {
                history.replaceState(null, null, window.location.pathname + window.location.search);
            }

            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 650);
    };

    // 3. Skip Button Listener
    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.preventDefault();
            completeIntro();
        });
    }

    // 4. Reduced Motion Handling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        setTimeout(completeIntro, 800);
        return;
    }

    // 5. Sequential Intro Pipeline
    // Step 1: Multilingual Word Sequence
    let currentLangIdx = 0;
    const langInterval = 550;

    const updateWord = (idx) => {
        if (!welcomeTextEl || isFinished) return;
        welcomeTextEl.classList.remove('active');
        welcomeTextEl.classList.add('exit');

        setTimeout(() => {
            if (isFinished) return;
            welcomeTextEl.textContent = languages[idx].text;
            welcomeTextEl.classList.remove('exit');
            welcomeTextEl.classList.add('active');
        }, 160);
    };

    // Show initial word "WELCOME"
    setTimeout(() => {
        if (welcomeTextEl && !isFinished) {
            welcomeTextEl.textContent = languages[0].text;
            welcomeTextEl.classList.add('active');
        }
    }, 250);

    // Loop through remaining languages
    const wordTimer = setInterval(() => {
        if (isFinished) {
            clearInterval(wordTimer);
            return;
        }
        currentLangIdx++;
        if (currentLangIdx < languages.length) {
            updateWord(currentLangIdx);
        } else {
            clearInterval(wordTimer);

            // Step 2: Transition to "CRAFTING VISUAL STORIES"
            setTimeout(() => {
                if (isFinished) return;
                if (welcomeTextEl) {
                    welcomeTextEl.classList.remove('active');
                    welcomeTextEl.classList.add('exit');
                }

                setTimeout(() => {
                    if (isFinished) return;
                    if (finalMessageEl) finalMessageEl.classList.add('visible');

                    // Step 3: Reveal Loading Progress Bar & fill from 0% to 100%
                    setTimeout(() => {
                        if (isFinished) return;
                        if (progressBlockEl) progressBlockEl.classList.add('visible');

                        let startTime = null;
                        const fillDuration = 1800; // ms to fill loading bar

                        function animateProgress(timestamp) {
                            if (!startTime) startTime = timestamp;
                            const elapsed = timestamp - startTime;
                            const progress = Math.min(Math.floor((elapsed / fillDuration) * 100), 100);

                            if (progressFillEl) progressFillEl.style.width = `${progress}%`;
                            if (progressCounterEl) progressCounterEl.textContent = `${progress}%`;

                            if (progress < 100 && !isFinished) {
                                requestAnimationFrame(animateProgress);
                            } else if (progress >= 100 && !isFinished) {
                                if (statusTextEl) statusTextEl.textContent = "READY";
                                setTimeout(completeIntro, 450);
                            }
                        }

                        requestAnimationFrame(animateProgress);
                    }, 400);
                }, 300);
            }, 550);
        }
    }, langInterval + 160);
}

document.addEventListener('DOMContentLoaded', () => {

    // 0. Initialize Cinematic Game-Style Welcome Intro
    initWelcomeIntro();

    // 1. Render portfolio dynamically
    renderPortfolio();

    // 2. Fetch live stats from Instagram API if configured
    fetchInstagramBusinessData();

    /* ==========================================================================
       SCROLL INTERSECTION OBSERVER FOR FADE-IN EFFECTS
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in-up');

    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    /* ==========================================================================
       STATS COUNTER UP ANIMATION
       ========================================================================== */
    const statsSection = document.querySelector('.stats-grid');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    const startCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 2000; // 2 seconds
            const stepTime = 30; // 30ms updates
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    stat.textContent = target + suffix;
                } else {
                    stat.textContent = Math.floor(current) + suffix;
                }
            }, stepTime);
        });
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    startCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    /* ==========================================================================
       PORTFOLIO FILTER LOGIC
       ========================================================================== */
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active to current
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                // First apply transform out transition
                card.style.opacity = '0';
                card.style.transform = 'scale(0.92)';

                setTimeout(() => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.classList.remove('hidden');
                        // Trigger reflow for animation
                        void card.offsetWidth;
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.classList.add('hidden');
                    }
                }, 300);
            });
        });
    });

    /* ==========================================================================
       SKILLS PROGRESS BARS ANIMATION
       ========================================================================== */
    const skillsSection = document.querySelector('.skills-progress-grid');
    const progressBarFills = document.querySelectorAll('.progress-bar-fill');
    let skillsAnimated = false;

    const animateSkills = () => {
        progressBarFills.forEach(fill => {
            const progress = fill.getAttribute('data-progress');
            fill.style.width = progress;
        });
    };

    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !skillsAnimated) {
                    skillsAnimated = true;
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        skillsObserver.observe(skillsSection);
    }

    function getDriveEmbedUrl(driveUrl) {
        if (!driveUrl) return null;
        const match = driveUrl.match(/\/d\/([A-Za-z0-9_-]+)/);
        if (match && match[1]) {
            return `https://drive.google.com/file/d/${match[1]}/preview`;
        }
        return null;
    }

    /* ==========================================================================
       VIDEO PLAYER MODAL SYSTEM
       ========================================================================== */
    const videoModal = document.getElementById('videoModal');
    const modalVideoPlayer = document.getElementById('modalVideoPlayer');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const closeModalBtn = document.querySelector('.video-modal-close');
    const backdrop = document.querySelector('.video-modal-backdrop');

    /**
     * Apply dynamic sizing to a video element based on its natural dimensions.
     * Respects the current viewport so the video is as large as possible
     * without overflowing, always preserving the original aspect ratio.
     *
     * @param {HTMLVideoElement} videoEl   The video element
     * @param {boolean}          isPortrait  true = instagram split layout (right panel present)
     */
    function applyVideoDimensions(videoEl, isPortrait) {
        const vw = videoEl.videoWidth;
        const vh = videoEl.videoHeight;

        if (!vw || !vh) return; // metadata not yet ready

        const ratio = vw / vh; // e.g. 0.5625 for 9:16, 1 for 1:1, 1.778 for 16:9

        if (isPortrait) {
            // Instagram split-view layout:
            // Available height = 85dvh minus modal chrome (~60px for border/padding).
            // Available width  = whatever the .instagram-video-wrapper flex column gives.
            const isMobile = window.innerWidth <= 860;
            let maxH;
            if (isMobile) {
                // Stacked: video sits above the metadata panel.
                // Give it up to 55dvh.
                maxH = Math.floor(window.innerHeight * 0.55);
            } else {
                // Side-by-side: metadata panel is 380px wide.
                // Modal content max-width = 960px. Video wrapper = 960 - 380 - 2px border ≈ 578px.
                // But we must also respect height: cap at 85dvh - header(~60px).
                const headerH = 60;
                maxH = Math.floor(window.innerHeight * 0.85) - headerH;
                const wrapperEl = videoEl.closest('.instagram-video-wrapper');
                const wrapperW = wrapperEl ? (wrapperEl.offsetWidth - 40) : 560; // 40px = 2*20px padding
                const maxByWidth = Math.floor(wrapperW / ratio);
                maxH = Math.min(maxH, maxByWidth);
            }

            const idealW = Math.floor(maxH * ratio);
            const availW = isMobile
                ? window.innerWidth - 24  // mobile has no side panel, just padding
                : 540; // safe estimate for the video wrapper in side-by-side

            const finalH = idealW > availW ? Math.floor(availW / ratio) : maxH;
            const finalW = Math.floor(finalH * ratio);

            videoEl.style.width  = finalW + 'px';
            videoEl.style.height = finalH + 'px';
            videoEl.style.maxWidth  = '100%';
            videoEl.style.maxHeight = maxH + 'px';
        }
        // For the standard landscape player (isPortrait=false):
        // CSS handles sizing via width:100% + height:auto + max-height constraint.
        // No JS pixel-setting needed — the browser sizes from the video's natural ratio.
    }

    /** Remove all inline sizing applied by applyVideoDimensions */
    function clearVideoDimensions() {
        [modalVideoPlayer, document.getElementById('modalInstagramVideoPlayer')].forEach(el => {
            if (!el) return;
            el.style.width  = '';
            el.style.height = '';
            el.style.maxWidth  = '';
            el.style.maxHeight = '';
        });
        // Restore Drive button visibility on close
        const standardDriveBtn = document.getElementById('standardDriveBtn');
        if (standardDriveBtn) standardDriveBtn.style.display = '';
    }

    // Re-apply sizing when the window is resized while the modal is open
    let _resizePending = null;
    window.addEventListener('resize', () => {
        if (!videoModal.classList.contains('active')) return;
        clearTimeout(_resizePending);
        _resizePending = setTimeout(() => {
            const instagramPlayer = document.getElementById('modalInstagramVideoPlayer');
            const instagramShown  = document.getElementById('instagramPlayerContainer');
            if (instagramShown && instagramShown.style.display !== 'none' && instagramPlayer && instagramPlayer.readyState >= 1) {
                applyVideoDimensions(instagramPlayer, true);
            } else if (modalVideoPlayer && modalVideoPlayer.readyState >= 1) {
                applyVideoDimensions(modalVideoPlayer, false);
            }
        }, 100);
    });

    const openVideoModal = (itemId) => {
        let item = null;
        if (itemId === 'showreel') {
            item = showreelData;
        } else {
            item = portfolioData.find(p => p.id === itemId);
        }

        if (!item) return;

        videoModalTitle.textContent = item.title;

        const isLandscape = (item.category === 'commercial-ads' || item.category === 'showreel' || (item.category === 'motion-graphics' && !item.instagramUrl));
        const modalInstagramVideoPlayer = document.getElementById('modalInstagramVideoPlayer');
        const modalDriveIframe = document.getElementById('modalDriveIframe');
        const modalInstagramDriveIframe = document.getElementById('modalInstagramDriveIframe');
        const driveEmbedUrl = getDriveEmbedUrl(item.driveUrl);

        if (isLandscape) {
            // Show standard landscape player container, hide Instagram container
            document.getElementById('standardPlayerContainer').style.display = 'flex';
            document.getElementById('instagramPlayerContainer').style.display = 'none';

            if (driveEmbedUrl && modalDriveIframe) {
                modalDriveIframe.src = driveEmbedUrl;
                modalDriveIframe.style.display = 'block';
                if (modalVideoPlayer) modalVideoPlayer.style.display = 'none';
            } else if (modalVideoPlayer) {
                if (modalDriveIframe) modalDriveIframe.style.display = 'none';
                modalVideoPlayer.style.display = 'block';

                // Ensure cross-device inline playback (critical for iOS Safari)
                modalVideoPlayer.setAttribute('playsinline', '');
                modalVideoPlayer.setAttribute('webkit-playsinline', '');

                // CSS handles landscape sizing (width:100%; height:auto; max-height constraint).
                // Hide the Drive button when the video actually plays — it's not a fallback anymore.
                const standardDriveBtn = document.getElementById('standardDriveBtn');
                const onCanPlay = () => {
                    if (standardDriveBtn) standardDriveBtn.style.display = 'none';
                    modalVideoPlayer.removeEventListener('canplay', onCanPlay);
                };
                modalVideoPlayer.addEventListener('canplay', onCanPlay);

                modalVideoPlayer.src = item.videoUrl;
                modalVideoPlayer.load();
                modalVideoPlayer.play().catch(err => {
                    console.log("Autoplay blocked, waiting for interaction", err);
                });
            }

            if (modalInstagramDriveIframe) modalInstagramDriveIframe.src = "";
            if (modalInstagramVideoPlayer) {
                modalInstagramVideoPlayer.pause();
                modalInstagramVideoPlayer.src = "";
            }
        } else {
            // Show Instagram split view, hide standard player
            document.getElementById('standardPlayerContainer').style.display = 'none';
            document.getElementById('instagramPlayerContainer').style.display = 'flex';

            if (driveEmbedUrl && modalInstagramDriveIframe) {
                modalInstagramDriveIframe.src = driveEmbedUrl;
                modalInstagramDriveIframe.style.display = 'block';
                if (modalInstagramVideoPlayer) modalInstagramVideoPlayer.style.display = 'none';
            } else if (modalInstagramVideoPlayer) {
                if (modalInstagramDriveIframe) modalInstagramDriveIframe.style.display = 'none';
                modalInstagramVideoPlayer.style.display = 'block';

                // Ensure cross-device inline playback (critical for iOS Safari)
                modalInstagramVideoPlayer.setAttribute('playsinline', '');
                modalInstagramVideoPlayer.setAttribute('webkit-playsinline', '');

                // Listen for metadata to set exact dimensions
                const onMeta = () => {
                    applyVideoDimensions(modalInstagramVideoPlayer, true);
                    modalInstagramVideoPlayer.removeEventListener('loadedmetadata', onMeta);
                };
                modalInstagramVideoPlayer.addEventListener('loadedmetadata', onMeta);
                // If metadata already loaded (cached), apply immediately
                if (modalInstagramVideoPlayer.readyState >= 1) applyVideoDimensions(modalInstagramVideoPlayer, true);

                modalInstagramVideoPlayer.src = item.videoUrl;
                modalInstagramVideoPlayer.load();
                modalInstagramVideoPlayer.play().catch(err => {
                    console.log("Autoplay blocked, waiting for interaction", err);
                });
            }

            // Populate Instagram information panel
            document.getElementById('instagramReelCaption').textContent = item.caption;
            document.getElementById('instagramReelLikes').textContent = item.likes;
            document.getElementById('instagramReelComments').textContent = item.comments;
            document.getElementById('instagramReelViews').textContent = item.views;
            const viewInstaBtn = document.getElementById('viewOnInstagramBtn');
            if (viewInstaBtn) {
                if (item.instagramUrl) {
                    viewInstaBtn.href = item.instagramUrl;
                    viewInstaBtn.style.display = 'inline-flex';
                } else {
                    viewInstaBtn.style.display = 'none';
                }
            }

            const viewOnDriveBtn = document.getElementById('viewOnDriveBtn');
            if (viewOnDriveBtn && item.driveUrl) {
                viewOnDriveBtn.href = item.driveUrl;
            }

            if (modalDriveIframe) modalDriveIframe.src = "";
            if (modalVideoPlayer) {
                modalVideoPlayer.pause();
                modalVideoPlayer.src = "";
            }
        }

        const standardDriveBtn = document.getElementById('standardDriveBtn');
        if (standardDriveBtn && item.driveUrl) {
            standardDriveBtn.href = item.driveUrl;
        }

        const standardInstagramBtn = document.getElementById('standardInstagramBtn');
        if (standardInstagramBtn) {
            if (item.instagramUrl) {
                standardInstagramBtn.href = item.instagramUrl;
                standardInstagramBtn.style.display = 'inline-flex';
            } else {
                standardInstagramBtn.style.display = 'none';
            }
        }

        videoModal.classList.add('active');
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    };

    const closeVideoModal = () => {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock scrolling

        // Reset all inline dimensions added by applyVideoDimensions
        clearVideoDimensions();

        const modalDriveIframe = document.getElementById('modalDriveIframe');
        if (modalDriveIframe) modalDriveIframe.src = "";

        const modalInstagramDriveIframe = document.getElementById('modalInstagramDriveIframe');
        if (modalInstagramDriveIframe) modalInstagramDriveIframe.src = "";

        // Reset players to stop playback
        const modalInstagramVideoPlayer = document.getElementById('modalInstagramVideoPlayer');
        if (modalInstagramVideoPlayer) {
            modalInstagramVideoPlayer.pause();
            modalInstagramVideoPlayer.src = "";
        }

        if (modalVideoPlayer) {
            modalVideoPlayer.pause();
            modalVideoPlayer.src = "";
        }
    };


    // Click handlers for entire portfolio cards
    const portfolioCardsList = document.querySelectorAll('.portfolio-card');
    portfolioCardsList.forEach(card => {
        card.addEventListener('click', () => {
            const itemId = card.getAttribute('data-portfolio-id');
            if (itemId) {
                openVideoModal(itemId);
            }
        });
    });

    // Click handler for showreel portrait card
    const showreelCard = document.querySelector('.portrait-card');
    if (showreelCard) {
        showreelCard.addEventListener('click', (e) => {
            e.stopPropagation();
            openVideoModal('showreel');
        });
    }

    closeModalBtn.addEventListener('click', closeVideoModal);
    backdrop.addEventListener('click', closeVideoModal);

    // Escape key press to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    /* ==========================================================================
       FLOATING BOTTOM NAVIGATION ACTIVE SYNC ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    const scrollActiveSync = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 140; // offset header/padding
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-section') === sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', scrollActiveSync);
    // Trigger once on load
    scrollActiveSync();

    // Smooth click nav scrolling override (just in case browser default smooth scroll lacks offsets)
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('href');
            const targetSection = document.querySelector(sectionId);

            if (targetSection) {
                const targetOffset = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       CONTACT FORM CHAR COUNTER & FORMSPREE SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formName = document.getElementById('form_name');
    const formEmail = document.getElementById('form_email');
    const formSubject = document.getElementById('form_subject');
    const formMessage = document.getElementById('form_message');
    const charCount = document.getElementById('charCount');
    const toastContainer = document.getElementById('toastContainer');

    // Helper: Resolve Formspree endpoint URL
    const getFormspreeEndpoint = () => {
        const formId = FORMSPREE_CONFIG.formId ? FORMSPREE_CONFIG.formId.trim() : "";
        if (!formId || formId === "YOUR_FORM_ID") {
            return null;
        }
        if (formId.startsWith("http://") || formId.startsWith("https://")) {
            return formId;
        }
        return `https://formspree.io/f/${formId}`;
    };

    // Helper: Email format validation
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Char count update
    if (formMessage && charCount) {
        formMessage.addEventListener('input', () => {
            const length = formMessage.value.length;
            charCount.textContent = length;

            if (length >= 480) {
                charCount.style.color = '#ff4757';
            } else if (length >= 400) {
                charCount.style.color = 'var(--accent-gold)';
            } else {
                charCount.style.color = 'var(--text-muted)';
            }
        });
    }

    // Toast generator using site design language
    const showToast = (message, type = 'success') => {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const iconSVG = type === 'success'
            ? `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
            : `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

        toast.innerHTML = `
            ${iconSVG}
            <div class="toast-content">${message}</div>
        `;

        toastContainer.appendChild(toast);

        // Force reflow for transform animation
        void toast.offsetWidth;
        toast.classList.add('show');

        // Auto remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        }, 4500);
    };

    // Form submit listener with Formspree integration
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const submitBtnText = contactForm.querySelector('.submit-btn-text');
            const nameVal = formName ? formName.value.trim() : '';
            const emailVal = formEmail ? formEmail.value.trim() : '';
            const subjectVal = formSubject ? formSubject.value.trim() : '';
            const messageVal = formMessage ? formMessage.value.trim() : '';

            // 1. Validate required fields
            if (!nameVal || !emailVal || !subjectVal || !messageVal) {
                showToast("Please fill in all required fields.", "error");
                return;
            }

            // 2. Validate email format
            if (!isValidEmail(emailVal)) {
                showToast("Please enter a valid email address.", "error");
                if (formEmail) formEmail.focus();
                return;
            }

            // 3. Verify Formspree configuration
            const endpoint = getFormspreeEndpoint();
            if (!endpoint) {
                showToast("Please configure your Formspree Form ID in index.js to receive messages.", "error");
                return;
            }

            // 4. Disable submit button & show loading state to prevent duplicate submissions
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                submitBtn.style.cursor = 'not-allowed';
            }
            if (submitBtnText) {
                submitBtnText.textContent = "Sending...";
            }

            // 5. Send data securely via Formspree API (staying on same page without redirect)
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameVal,
                        email: emailVal,
                        subject: subjectVal,
                        message: messageVal,
                        _replyto: emailVal,
                        _subject: `New Portfolio Message: ${subjectVal} (from ${nameVal})`
                    })
                });

                if (response.ok) {
                    // 6. Show success confirmation message
                    showToast(`Thank you, ${nameVal}! Your message has been sent successfully.`, "success");
                    contactForm.reset();
                    if (charCount) {
                        charCount.textContent = '0';
                        charCount.style.color = 'var(--text-muted)';
                    }
                } else {
                    // 7. Handle Formspree error responses
                    const data = await response.json().catch(() => null);
                    let errorMessage = "Failed to send message. Please try again.";
                    if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
                        errorMessage = data.errors.map(err => err.message || err.field).join(', ');
                    } else if (data && data.error) {
                        errorMessage = data.error;
                    }
                    showToast(errorMessage, "error");
                }
            } catch (err) {
                console.error("Form submission error:", err);
                showToast("Network error. Please check your connection and try again.", "error");
            } finally {
                // Restore submit button state
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.cursor = 'pointer';
                }
                if (submitBtnText) {
                    submitBtnText.textContent = "Send Message";
                }
            }
        });
    }

});

