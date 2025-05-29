$(function () {
    const $cursor = $('.custom-cursor');

    // 커스텀 커서 이동
    $(document).on('mousemove', function (e) {
        $cursor.css({
            top: e.clientY + 'px', // 💡 pageY가 아니라 clientY
            left: e.clientX + 'px',
        });
    });

    // 호버 시 커서 스타일
    $('.project')
        .on('mouseenter', function () {
            $cursor.addClass('hover-on-project');
        })
        .on('mouseleave', function () {
            $cursor.removeClass('hover-on-project');
        });
});
