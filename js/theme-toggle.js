const html = document.documentElement;
const button = document.getElementById("theme-toggle");

function updateIcon() {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  icon.setAttribute(
    "data-lucide",
    html.classList.contains("dark") ? "sun" : "moon"
  );

  // Lucide is loaded separately with `defer`.
  if (window.lucide) {
    lucide.createIcons();
  }
}

button?.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcon();
});

// Set the icon once Lucide has loaded.
document.addEventListener("DOMContentLoaded", updateIcon);