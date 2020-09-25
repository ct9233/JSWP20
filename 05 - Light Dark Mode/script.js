const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    };
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);