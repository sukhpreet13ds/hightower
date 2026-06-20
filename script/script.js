document.addEventListener('DOMContentLoaded', () => {
    const floatingNavbar = document.getElementById('floating-navbar');
    const scrollThreshold = 180; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            floatingNavbar.classList.add('active');
        } else {
            floatingNavbar.classList.remove('active');
        }
    });

    // 2. Mobile Menu Drawer Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const menuTrigger = document.getElementById('mobile-menu-trigger');
    const menuClose = document.getElementById('mobile-menu-close');

    if (menuTrigger && mobileMenu) {
        menuTrigger.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = ''; 
        });
    }

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // 3. Mobile Menu Accordions (About Us, Practice Areas)
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Toggle active state on the button
            this.classList.toggle('active');
            
            const panel = this.nextElementSibling;
            
            // Toggle max-height for smooth transitions
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // Set to scrollHeight to animate correctly to full size
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // 4. Looping Odometer-Style Rolling Counter Animation
    const counters = document.querySelectorAll('.animate-counter');
    
    // Initialize columns for all counters
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target') || '0';
        counter.innerHTML = '';
        counter.style.display = 'inline-flex';
        counter.style.height = '1.15em';
        counter.style.overflow = 'hidden';
        counter.style.verticalAlign = 'bottom';
        
        [...target].forEach((char) => {
            const column = document.createElement('div');
            column.className = 'counter__column';
            column.style.display = 'flex';
            column.style.flexDirection = 'column';
            
            if (/\d/.test(char)) {
                const digit = parseInt(char);
                const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                
                // Add a sequence of numbers 0-9 followed by 0-digit to animate rolling up
                column.innerHTML += range.map(d => `<span class="counter__number" style="display:block; height:1.15em; line-height:1.15em; text-align:center;">${d}</span>`).join('');
                column.innerHTML += range.slice(0, digit + 1).map(d => `<span class="counter__number" style="display:block; height:1.15em; line-height:1.15em; text-align:center;">${d}</span>`).join('');
                
                column.style.setProperty('--items', 10 + digit + 1);
            } else {
                // Static character (like decimal point)
                column.innerHTML = `<span class="counter__number" style="display:block; height:1.15em; line-height:1.15em; text-align:center;">${char}</span>`;
                column.style.setProperty('--items', 1);
                column.className += ' is-static';
            }
            counter.appendChild(column);
        });
    });

    // Run the animation loop
    function runOdometerLoop() {
        const activeColumns = document.querySelectorAll('.counter__column:not(.is-static)');
        
        function animateToTarget() {
            activeColumns.forEach((col, index) => {
                const items = parseInt(col.style.getPropertyValue('--items'));
                // Stagger column animation slightly for odometer visual feel
                const delay = index * 80;
                
                setTimeout(() => {
                    col.style.transition = 'transform 1.8s cubic-bezier(0.25, -0.1, 0.25, 1.1)';
                    col.style.transform = `translateY(calc(-${items - 1} * 1.15em))`;
                }, delay);
            });
            
            // Hold at target value for 2.2 seconds (1.8s animation + 2.2s hold = 4s)
            setTimeout(resetToStart, 4000);
        }
        
        function resetToStart() {
            activeColumns.forEach(col => {
                // Roll back to 0 smoothly
                col.style.transition = 'transform 0.6s ease-in-out';
                col.style.transform = 'translateY(0)';
            });
            
            // Pause for 1 second at 0 before starting next roll
            setTimeout(animateToTarget, 1200);
        }
        
        animateToTarget();
    }
    
    // Start loop if counters exist
    if (counters.length > 0) {
        // Initial tiny delay to let CSS load properly
        setTimeout(runOdometerLoop, 200);
    }

    // 5. Mobile Law Cards Swipe Scroll (Manual swipe/drag only)
    function initLawSwipeScroll() {
        const container = document.querySelector('.law-cards-container');
        if (!container) return;
        
        let isDown = false;
        let startX;
        let scrollLeft;
        
        // Mouse drag scrolling support
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollLeft - walk;
        });
    }
    
    initLawSwipeScroll();
});
