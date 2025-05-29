$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // ✅ 1. 가로 스크롤
  const $horizontal = $(".horizontal-scroll");
  const $wrapper = $(".horizontal-scroll__wrapper");
  const scrollLength = $wrapper[0].scrollWidth - window.innerWidth;

  gsap.to($wrapper, {
    x: () => `-${scrollLength}px`,
    ease: "none",
    scrollTrigger: {
      trigger: $horizontal[0],
      start: "top top",
      end: () => `+=${scrollLength}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // ✅ 2. design-content 고정
  $(".img-con li").each(function (index, el) {
    const delay = parseFloat($(el).data("delay") || 0);

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
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        delay: delay,
      }
    );
  });

  // Optional: 전체 .img-wrap도 약간 이동감을 줄 수 있음
  gsap.to(".img-wrap", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".design",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
});
