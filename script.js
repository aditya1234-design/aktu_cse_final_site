document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menuBtn');
    var mobileNav = document.getElementById('mobileNav');

    // Check karte hain ki dono elements (Menu Button aur Mobile Nav) HTML mein hain ya nahi.
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            // Check karte hain ki menu abhi visible hai ya nahi (CSS styles ke through)
            var currentDisplay = window.getComputedStyle(mobileNav).display;
            
            if (currentDisplay === 'flex' || mobileNav.style.display === 'flex') {
                // Agar open hai toh band kar do (hide)
                mobileNav.style.display = 'none';
            } else {
                // Agar band hai toh open kar do (show as flex column)
                mobileNav.style.display = 'flex';
            }
        });
    }

    // Naye HTML structure ke liye aur koi JavaScript functionality add karne ki zaroorat nahi hai.
    // Download/View buttons aur Explore/Contact buttons pure HTML links hain (<a> tags).
});
