'use strict';
document.addEventListener('DOMContentLoaded', function () {
    /* =====================================================
        TESTIMONIALS SLIDER
    ===================================================== */
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            720: {
                slidesPerView: 2,
            },
            970: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================================
        WORKS SLIDER
    ===================================================== */
    var worksSlider = new Swiper('.work-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================================
        INITALIZE TOOLTIPS
    ===================================================== */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /* =====================================================
        PARALLAX
    ===================================================== */
    new universalParallax().init();

    /* =====================================================
        STATISTICS COUNTER
    ===================================================== */
		function countup() {
		var options = {
			useEasing: true,
			useGrouping: true,
			duration: 10,
			prefix: '前者',
            suffix: '后者'
		};
		
		var percentageOptions = {
			useEasing: true,
			useGrouping: true,
			duration: 4,
			suffix: '%' 
		};
	
		var counter1 = new CountUp('counter1', 0, 5, 0, options);
		var counter2 = new CountUp('counter2', 0, 43725, 0, options);
		//var counter3 = new CountUp('counter3', 0, 57.34, 2, percentageOptions); // 精度0表示整数
		//var counter4 = new CountUp('counter4', 0, 13.22, 2, percentageOptions); // 精度0表示整数

        if (!counter1.error) {
            counter1.start();
            counter2.start();
            //counter3.start();
            //counter4.start();
        } else {
            console.error('error');
        }
    }
	// 确保在页面加载后调用 countup 函数
	window.onload = function() {
		countup();
	};

     /* =====================================================
       SCROLLING LINKS W/ OFFSET
    ===================================================== */

    document.querySelectorAll('.nav-item a[href^="#"]')
        .forEach(trigger => {
            trigger.onclick = function (e) {
                e.preventDefault();
                let hash = this.getAttribute('href');
                let target = document.querySelector(hash);
                let headerOffset = 90;
                let elementPosition = target.offsetTop;
                let offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            };
        });

    /* =====================================================
        TRIGGER COUNTERS WHEN REACHING THE TARGET SECTION
    ===================================================== */
    var waypoint = new Waypoint({
        element: document.getElementById('statistics'),
        handler: function (direction) {
            countup();
        },
        offset: '95%',
    });



    /* =====================================================
        MIXITUP FILTER
    ===================================================== */
    var mixer = mixitup('#content');

    /* =====================================================
        REVEAL ANIMATION
    ===================================================== */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();
});
