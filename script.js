document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.winamp-content-panel');
    const winampContainer = document.getElementById('winamp-container'); // Optional: for future drag interactions

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Get the target panel ID from the data-target attribute
            const targetPanelId = tab.getAttribute('data-target');
            const targetPanel = document.getElementById(targetPanelId);

            // Remove active classes from all tabs and panels
            tabs.forEach(t => t.classList.remove('active-tab'));
            panels.forEach(p => p.classList.remove('active-panel'));

            // Add active class to the clicked tab and corresponding panel
            tab.classList.add('active-tab');
            if (targetPanel) {
                targetPanel.classList.add('active-panel');
                 // Optional: Scroll panel to top when switching
                targetPanel.scrollTop = 0;
            }
        });
    });

    // --- Optional: Basic Fake Window Controls ---
    const closeButton = document.querySelector('.control-btn.close');
    const minimizeButton = document.querySelector('.control-btn.minimize');
    const maximizeButton = document.querySelector('.control-btn.maximize');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // Just visually hide it for fun, doesn't actually close the page
            // winampContainer.style.display = 'none';
            alert('Alt+F4 still works better ;)'); // Playful alert
        });
    }
     if (minimizeButton) {
        minimizeButton.addEventListener('click', () => {
            // Could add a class to visually 'minimize' it later
             alert('Minimizing to the nostalgia tray...');
        });
    }
     if (maximizeButton) {
        maximizeButton.addEventListener('click', () => {
            // Could toggle a 'maximized' class later
             alert('Already fullscreen in its retro glory!');
        });
    }

});