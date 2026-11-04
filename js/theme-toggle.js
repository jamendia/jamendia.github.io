const html = document.documentElement;

function initThemeToggle() {
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  if (!button || !icon) return;

  const sun = `
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/>
    <path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/>
    <path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
  `;

  const moon = `
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
  `;

  function updateIcon() {
    icon.innerHTML = html.classList.contains("dark") ? sun : moon;
  }

  button.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  updateIcon();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}



// Set the icon once Lucide has loaded. document.addEventListener("DOMContentLoaded", updateIcon);