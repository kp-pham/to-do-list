function changeTheme() {
    const root = document.documentElement;
    const theme = root.className === "dark" ? "light" : "dark";
    root.className = theme;
}

document.getElementById("theme-toggle").addEventListener("click", changeTheme);