// 1. DYNAMIC GREETING
// This function runs immediately when the page loads
window.onload = function() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById("dynamic-greeting");
    
    if (hour < 12) {
        greetingElement.innerText = "Good Morning";
    } else if (hour < 18) {
        greetingElement.innerText = "Good Afternoon";
    } else {
        greetingElement.innerText = "Good Evening";
    }
};

// 2. DARK MODE TOGGLE
const themeButton = document.getElementById("theme-toggle");
const body = document.body;

themeButton.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    
    // Change button text based on mode
    if (body.classList.contains("dark-mode")) {
        themeButton.innerText = "☀️ Light Mode";
    } else {
        themeButton.innerText = "🌙 Dark Mode";
    }
});

// 3. CONTACT BUTTON ALERT
function showAlert() {
    alert("Thank you for visiting my profile! You can reach me at MSU-IIT.");
}
