document.addEventListener('DOMContentLoaded', () => {
    initGreeting();
    initCopyrightYear();
});

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
