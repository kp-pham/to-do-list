function loadTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    const root = document.documentElement;

    if (currentTheme !== null)
        root.className = currentTheme;

    else
        root.className = prefersDarkScheme ? "dark" : "light";
}

function changeTheme() {
    const root = document.documentElement;
    const theme = root.className === "dark" ? "light" : "dark";
    root.className = theme;

    localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", loadTheme);
document.getElementById("theme-toggle").addEventListener("click", changeTheme);