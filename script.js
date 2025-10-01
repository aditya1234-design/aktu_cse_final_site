document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuBtn');
    var mobileNav = document.getElementById('mobileNav');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            // Check if the menu is currently visible (using computed style or inline style)
            var currentDisplay = window.getComputedStyle(mobileNav).display;
            
            if (currentDisplay === 'flex' || mobileNav.style.display === 'flex') {
                // Agar open hai toh band kar do
                mobileNav.style.display = 'none';
            } else {
                // Agar band hai toh open kar do (CSS mein flex-direction: column hai)
                mobileNav.style.display = 'flex';
            }
        });
    }

    // Aapke original contact form code ko hata diya gaya hai, 
    // kyunki naye HTML mein contact form ka structure nahi hai.
});
