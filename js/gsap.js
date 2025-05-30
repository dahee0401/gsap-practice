$(function () {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ 1. homepage 가로 스크롤
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

    // ✅ 2. design
    $('.img-con li').each(function (index, el) {
        const delay = parseFloat($(el).data('delay') || 0);

        gsap.fromTo(
            el,
            {
                y: 100,
                opacity: 0,
                scale: 0.8,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: true,
                },
                delay: delay,
            }
        );
    });

    // Optional: 전체 .img-wrap도 약간 이동감을 줄 수 있음
    gsap.to('.img-wrap', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: 's.design',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        },
    });

    // shopping
    gsap.to('.shopping .con-list', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.shopping.section',
            start: 'top top', // 섹션 시작 시점
            end: '+=1500', // 애니메이션 길이
            scrub: true,
            pin: '.shopping .section-column:first-child', // 왼쪽 컬럼 고정
            anticipatePin: 1,
        },
    });

    // mobile
    const $list = $('.mobile-list');
    const totalWidth = $list[0].scrollWidth;
    const viewportWidth = $(window).width();
    const scrollDistance = totalWidth - viewportWidth;

    // 리스트 전체를 왼쪽으로 이동
    gsap.to($list, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
            trigger: '.mobile.section',
            start: 'top top',
            end: () => '+=' + scrollDistance,
            scrub: true,
            pin: true,
            anticipatePin: 1,
        },
    });

    // 각 이미지에 회전 효과 부여 (스크롤에 따라 반시계 방향)
    $('.mobile-list__item').each(function (i, el) {
        gsap.to(el, {
            rotate: -10,
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    });
});
