const teamMembers = [
    {
        name: "Devansh",
        github: "https://github.com/devansh0005",
        avatar: "https://github.com/devansh0005.png",
        skills: ["HTML", "CSS", "Vanilla JS"]
    },
    {
        name: "Ashwin",
        github: "https://github.com/ashwinlal172-creator",
        avatar: "https://github.com/ashwinlal172-creator.png",
        skills: ["JavaScript", "DOM Manipulation", "Git"]
    },
    {
        name: "Piyush",
        github: "https://github.com/Piy404",
        avatar: "https://github.com/Piy404.png",
        skills: ["HTML5", "CSS Grid", "Responsive Design"]
    },
    {
        name: "Ganesh",
        github: "https://github.com/ganeeshchoudhary",
        avatar: "https://github.com/ganeeshchoudhary.png",
        skills: ["Advanced JS", "Async/Await", "Web APIs"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const teamGrid = document.getElementById("team-grid");
    if (!teamGrid) return;

    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-card-inner">
                <div class="avatar-container">
                    <img src="${member.avatar}" alt="${member.name}'s Avatar" class="team-avatar" loading="lazy">
                </div>
                <h3 class="team-name">${member.name}</h3>
                <div class="team-skills">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <svg class="github-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub Profile</span>
                </a>
            </div>
        </div>
    `).join('');
});

document.addEventListener('DOMContentLoaded', () => {
    initGreeting();
    initCopyrightYear();
    initContactForm();
});

/**
 * Handles contact form submission and validation.
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}

/**
 * Dynamically injects a time-based greeting into the hero section.
 * - "Good Morning" if time is between 5 AM and 11:59 AM.
 * - "Good Afternoon" if time is between 12 PM and 5:59 PM.
 * - "Good Evening" if time is between 6 PM and 4:59 AM.
 */
function initGreeting() {
    const greetingEl = document.getElementById('greeting');
    if (!greetingEl) return;

    const currentHour = new Date().getHours();
    let greetingText = '';

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'Good Afternoon';
    } else {
        greetingText = 'Good Evening';
    }

    greetingEl.textContent = greetingText;
}

/**
 * Dynamically gets the current Date and injects the current year into the footer.
 */
function initCopyrightYear() {
    const yearEl = document.getElementById('copyright-year');
    if (!yearEl) return;

    const currentYear = new Date().getFullYear();
    yearEl.textContent = currentYear;
}

