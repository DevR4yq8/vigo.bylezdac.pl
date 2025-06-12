document.addEventListener('DOMContentLoaded', () => {
    // Przełącznik menu mobilnego
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // Efekt przewijania nagłówka
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // Przycisk przewijania w dół
    const scrollDownBtn = document.querySelector('.scroll-down');
    scrollDownBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Renderowanie harmonogramu
    const scheduleGrid = document.getElementById('scheduleGrid');
    if (scheduleGrid) {
        scheduleGrid.innerHTML = scheduleData.map((stream, index) => {
            const displayTitle = stream.title || stream.game;
            const animationDelay = `${index * 0.12 + 0.1}s`;

            const animationStyle = `animation: entryAnimation 0.6s ${animationDelay} cubic-bezier(0.25, 0.8, 0.25, 1) forwards;`;

            if (stream.isOffline) {
                return `
                    <div class="schedule-entry schedule-entry-offline" style="${animationStyle}">
                        <div class="schedule-entry-time-day">
                            <span class="schedule-entry-day">${stream.shortDay}</span>
                        </div>
                        <div class="schedule-entry-game-title">${displayTitle}</div>
                    </div>
                `;
            }
            return `
                <div class="schedule-entry" style="${animationStyle}">
                    <div class="schedule-entry-time-day">
                        <span class="schedule-entry-time">${stream.startTime}</span>
                        <span class="schedule-entry-day">${stream.shortDay}</span>
                    </div>
                    <div class="schedule-entry-game-title">${displayTitle}</div>
                    ${stream.imageUrl ? `
                    <div class="schedule-entry-game-image">
                        <img src="${stream.imageUrl}" alt="${stream.game}">
                    </div>` : ''}
                </div>
            `;
        }).join('');
    }

    // Renderowanie gier
    const gamesGrid = document.getElementById('gamesGrid');
    if (gamesGrid) {
        gamesGrid.innerHTML = gamesData.map(game => `
            <div class="game-card">
                <img src="${game.imageUrl}" alt="${game.title}">
                <div class="game-card-content">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <a href="/games/${game.id}.html">
                        Dowiedz się więcej 
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Renderowanie linków społecznościowych
    const socialLinksContainer = document.getElementById('socialLinks');
    if (socialLinksContainer) {
        socialLinksContainer.innerHTML = socialLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="social-link" aria-label="${link.platform}">
                ${link.icon}
            </a>
        `).join('');
    }

    // Aktualizacja roku w prawach autorskich
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }
});