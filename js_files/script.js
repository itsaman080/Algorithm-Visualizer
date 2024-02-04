document.addEventListener("DOMContentLoaded", function() {
    // After 2 seconds, hide the welcome page and show the main content
    setTimeout(function() {
        document.getElementById("welcome-page").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});