const themeSwitch = document.getElementById("themeSwitch");

// Check if user prefers dark mode initially
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Function to toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Function to set theme based on user preference
function setThemePreference() {
  if (prefersDarkMode) {
    toggleTheme();
  }
}

// Toggle theme when switch is clicked
themeSwitch.addEventListener("change", function () {
  toggleTheme();
});

// Set theme based on user preference
setThemePreference();
