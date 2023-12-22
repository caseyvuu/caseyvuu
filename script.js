const toggleNav = () => {
    document.getElementById("navigation-items").classList.toggle("hidden");
    document.getElementById("mobile-placeholder").classList.remove("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}