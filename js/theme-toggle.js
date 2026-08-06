const button = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    html.classList.toggle("dark", savedTheme === "dark");
} else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.classList.toggle("dark", prefersDark);
}

updateIcon();

button.addEventListener("click", () => {
    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateIcon();
});

function updateIcon() {
    const isDark = html.classList.contains("dark");
    const icon = document.getElementById("theme-icon");

    icon.setAttribute("data-lucide", isDark ? "sun" : "moon");

    // Re-render Lucide icons
    lucide.createIcons();
}

// Render icons on page load
lucide.createIcons();