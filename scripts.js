document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animatedBox = document.getElementById('animatedBox');
    const toggleBtn = document.getElementById('toggleAnimation');
    const colorBtn = document.getElementById('changeColor');
    const savePrefBtn = document.getElementById('savePref');
    const clearPrefBtn = document.getElementById('clearPref');
    const usernameInput = document.getElementById('username');
    const prefDisplay = document.getElementById('prefDisplay');

    // 1. Toggle CSS Animation
    toggleBtn.addEventListener('click', function() {
        animatedBox.classList.toggle('spin-animation');
    });

    // 2. Change Box Color
    colorBtn.addEventListener('click', function() {
        animatedBox.classList.toggle('color-change');
        
        // Store color preference
        const currentColor = animatedBox.classList.contains('color-change') ? 'green' : 'blue';
        localStorage.setItem('boxColor', currentColor);
    });

    // 3. Save User Preference
    savePrefBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);
            updatePrefDisplay();
            usernameInput.value = '';
        } else {
            alert('Please enter a name');
        }
    });

    // 4. Clear User Preference
    clearPrefBtn.addEventListener('click', function() {
        localStorage.removeItem('username');
        updatePrefDisplay();
    });

    // 5. Load Saved Preferences on Page Load
    function loadPreferences() {
        // Load box color
        const savedColor = localStorage.getItem('boxColor');
        if (savedColor === 'green') {
            animatedBox.classList.add('color-change');
        }
        
        // Load username
        updatePrefDisplay();
    }

    // Helper function to update preference display
    function updatePrefDisplay() {
        const savedName = localStorage.getItem('username');
        if (savedName) {
            prefDisplay.textContent = `Saved Name: ${savedName}`;
        } else {
            prefDisplay.textContent = 'No name saved';
        }
    }

    // Initialize
    loadPreferences();
});