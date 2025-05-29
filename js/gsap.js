$(function () {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ 1. 가로 스크롤
    const $horizontal = $('.horizontal-scroll');
    const $wrapper = $('.horizontal-scroll__wrapper');
    const scrollLength = $wrapper[0].scrollWidth - window.innerWidth;

    gsap.to($wrapper, {
        x: () => `-${scrollLength}px`,
        ease: 'none',
        scrollTrigger: {
            trigger: $horizontal[0],
            start: 'top top',
            end: () => `+=${scrollLength}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        },
    });

    // ✅ 2. design-content 고정

    ScrollTrigger.create({
        trigger: '.design',
        start: 'top top',
        end: () => `+=${document.querySelector('.img-con').scrollHeight}`,
        pin: '.design-content',
        scrub: true,
        anticipatePin: 1,
    });

    // ✅ 3. .img-con li 애니메이션 (opacity + scale + y축 이동)
    $('.img-con li').each(function (index, el) {
        gsap.fromTo(
            el,
            {
                y: 0,
                opacity: 0,
                scale: 0.5,
            },
            {
                y: -100,
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 30%',
                    scrub: true,
                },
            }
        );
    });
});
