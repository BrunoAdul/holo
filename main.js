document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu functionality
    const menuIcon = document.getElementById('menu-icon');
    const slideoutMenu = document.getElementById('slideout-menu');

    if (menuIcon && slideoutMenu) {
        menuIcon.addEventListener('click', function() {
            slideoutMenu.classList.toggle('active');
            slideoutMenu.setAttribute('aria-hidden', slideoutMenu.classList.contains('active') ? 'false' : 'true');
        });
    }

    // Responsive image loading
    function handleResponsiveImages() {
        const images = document.querySelectorAll('img[data-src-mobile]');
        const isMobile = window.innerWidth <= 768;

        images.forEach(img => {
            if (isMobile && img.getAttribute('data-src-mobile')) {
                img.src = img.getAttribute('data-src-mobile');
            } else if (img.getAttribute('data-src-desktop')) {
                img.src = img.getAttribute('data-src-desktop');
            }
        });
    }

    // Run on page load
    handleResponsiveImages();

    // Run on window resize
    window.addEventListener('resize', function() {
        handleResponsiveImages();
    });

    // Fix for multiple trackers issue
    const trackers = document.querySelectorAll('.tracker');
    if (trackers.length > 1) {
        // Keep only the first tracker and remove others
        for (let i = 1; i < trackers.length; i++) {
            trackers[i].remove();
        }
    }

    // Improve tracker functionality for touch devices
    const interactiveElements = document.querySelectorAll('[onmouseover]');
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            const trackerEvent = new MouseEvent('mouseover', {
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            });
            element.dispatchEvent(trackerEvent);
        });

        element.addEventListener('touchmove', function(e) {
            const trackerEvent = new MouseEvent('mousemove', {
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            });
            element.dispatchEvent(trackerEvent);
        });

        element.addEventListener('touchend', function() {
            element.dispatchEvent(new MouseEvent('mouseout'));
        });
    });
});