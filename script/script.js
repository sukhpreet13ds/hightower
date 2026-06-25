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
        trigger.addEventListener('click', function () {
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
            updateParentPanels(panel);
        });
    });

    // Mobile Sub-Accordions (e.g. About Us > Lawyers)
    const subAccordionTriggers = document.querySelectorAll('.sub-accordion-trigger');
    subAccordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            
            updateParentPanels(panel);
            setTimeout(() => {
                updateParentPanels(panel);
            }, 350);
        });
    });

    function updateParentPanels(element) {
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains('accordion-panel')) {
                if (parent.style.maxHeight) {
                    parent.style.maxHeight = parent.scrollHeight + "px";
                }
            }
            parent = parent.parentElement;
        }
    }

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

    // 5. Swipe Scroll helper for horizontal containers (Manual swipe/drag only)
    function initDragScroll(selector) {
        const container = document.querySelector(selector);
        if (!container) return;

        let isDown = false;
        let startX;
        let scrollLeft;

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

    initDragScroll('.law-cards-container');
    initDragScroll('.articles-grid');
    initDragScroll('.profiles-grid');

    // 7. Video Popout Modal Interactivity
    function initVideoModal() {
        const videoCards = document.querySelectorAll('.video-card');
        const videoModal = document.getElementById('video-modal');
        const modalVideo = document.getElementById('modal-video');
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('modal-overlay');

        if (!videoModal || !modalVideo) return;

        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoSrc = card.getAttribute('data-video-src');
                if (!videoSrc) return;

                modalVideo.src = videoSrc;
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Muted/Unmuted handling if auto-play fails
                modalVideo.muted = false;
                modalVideo.play().catch(err => {
                    console.log("Autoplay was blocked or failed: ", err);
                });
            });
        });

        function closeModal() {
            videoModal.classList.remove('active');
            modalVideo.pause();
            modalVideo.src = '';
            document.body.style.overflow = '';
        }

        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    initVideoModal();

    // 8. Question Section Scroll Triggered Animations
    const questionSection = document.getElementById('question-section');
    if (questionSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    questionSection.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });
        observer.observe(questionSection);
    }

    // 9. Infinite Timeline Scroll Interactivity
    const timelineContainer = document.querySelector('.timeline-scroll-container');
    if (timelineContainer) {
        let isPaused = false;
        let isDragging = false;
        let startX, scrollLeftVal;
        let speed = 0.5; // slow, smooth scrolling speed (pixels per frame)

        function scrollTimeline() {
            if (!isPaused && !isDragging) {
                timelineContainer.scrollLeft += speed;
                const maxScroll = timelineContainer.scrollWidth - timelineContainer.clientWidth;
                // Once reached the end, reset to the start
                if (timelineContainer.scrollLeft >= maxScroll - 1) {
                    timelineContainer.scrollLeft = 0;
                }
            }
            requestAnimationFrame(scrollTimeline);
        }
        
        // Start the infinite scrolling loop
        requestAnimationFrame(scrollTimeline);

        // Pause on hover
        timelineContainer.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        // Resume on mouse leave
        timelineContainer.addEventListener('mouseleave', () => {
            if (!isDragging) {
                isPaused = false;
            }
        });

        // Drag to scroll functionality
        timelineContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            isPaused = true;
            startX = e.pageX - timelineContainer.offsetLeft;
            scrollLeftVal = timelineContainer.scrollLeft;
            timelineContainer.style.cursor = 'grabbing';
            timelineContainer.style.userSelect = 'none';
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                timelineContainer.style.cursor = 'grab';
                timelineContainer.style.userSelect = 'auto';
                setTimeout(() => {
                    if (!timelineContainer.matches(':hover')) {
                        isPaused = false;
                    }
                }, 200);
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - timelineContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            timelineContainer.scrollLeft = scrollLeftVal - walk;
        });

        // Touch support for mobile devices
        timelineContainer.addEventListener('touchstart', (e) => {
            isPaused = true;
            startX = e.touches[0].pageX - timelineContainer.offsetLeft;
            scrollLeftVal = timelineContainer.scrollLeft;
        });

        timelineContainer.addEventListener('touchend', () => {
            setTimeout(() => {
                isPaused = false;
            }, 1000);
        });

        timelineContainer.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - timelineContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            timelineContainer.scrollLeft = scrollLeftVal - walk;
        });
    }
});
