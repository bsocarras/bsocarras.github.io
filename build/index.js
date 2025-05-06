// index.js

const html = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

// Load saved preference or fallback to system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

// Set the initial theme based on saved or system preference
html.setAttribute('data-theme', initialTheme);

// Function to update the theme toggle icon
function updateIcon() {
    const currentTheme = html.getAttribute("data-theme");
    const icon = currentTheme === "dark"
        ? '<img src="icons/dark_mode.svg" alt="Dark Mode" class="icon" />'
        : '<img src="icons/light_mode.svg" alt="Light Mode" class="icon" />'; // Moon for dark, Sun for light

    toggleBtn.innerHTML = icon; // Use innerHTML to insert the image icon
}

// Function to handle theme toggle
toggleBtn.onclick = () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update the theme
    html.setAttribute("data-theme", newTheme);

    // Save the preference to localStorage
    localStorage.setItem('theme', newTheme);

    // Update the toggle icon
    updateIcon();
};

// Initialize icon based on current theme
updateIcon();