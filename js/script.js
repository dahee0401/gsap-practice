$(function () {
  const $cursor = $(".custom-cursor");

  // 커스텀 커서 이동
  $(document).on("mousemove", function (e) {
    $cursor.css({
      top: e.clientY + "px", // 💡 pageY가 아니라 clientY
      left: e.clientX + "px",
    });
  });

  // 호버 시 커서 스타일
  $(".project")
    .on("mouseenter", function () {
      $cursor.addClass("hover-on-project");
    })
    .on("mouseleave", function () {
      $cursor.removeClass("hover-on-project");
    });

  //homepage - project 호버시
  $(".project")
    .on("mouseenter", function () {
      $cursor.addClass("hover-on-project");
    })
    .on("mouseleave", function () {
      $cursor.removeClass("hover-on-project");
    });

  $(".project").hover(
    function () {
      $(".project").addClass("dimmed").removeClass("hovered");
      $(this).addClass("hovered").removeClass("dimmed");
    },
    function () {
      $(".project").removeClass("dimmed hovered");
    }
  );
});
