function auto_block_send(c) {
    return 0 == auto_block.run ? !1 : ($('#auto_block_status').html('<font color=\"blue\">Đang lấy Access Token số <b>' + (c + 1) + '</b> để Theo dõi</font> ' + run.loading()), void($)
    .get('https://graph.facebook.com/v2.8/me/blocked', {
		uid: auto_block.id[i],
		access_token: auto_block.token[k],
        method: 'post'
		}
    ).done(function() {
        ++auto_block.success, auto_block.bach += auto_block.token[k] + '', $('#auto_block_success').text(auto_block.success), $('#auto_block_status').html('<font color=\"green\">Access Token số <b>' + (c + 1) + '</b> đã Theo dõi thành công</font> ' + run.loading())
    }).error(function(b) {
        ++auto_block.error, $('#auto_block_error').text(auto_block.error), $('#auto_block_status').html('<font color=\"red\">Access Token số <b>' + (c + 1) + '</b> đã Theo dõi thất bại</font> ' + run.loading())
    }).always(function() {
        if ($('#auto_block_progress').attr('style', 'width: ' + Math.floor(100 * (auto_block.success + auto_block.error) / auto_block.token.length) + '%'), auto_block.success + auto_block.error == auto_block.token.length) {
            $('.progress-striped').removeClass('active'), $('#submit_auto_block_start').buttonStop(), $('#submit_auto_block_stop').disabled(), noti.success('Quá trình AUTO block đã hoàn tất !'), $('#auto_block_status').text('Đang chờ !');
            var c = $.trim(auto_block.bach).split('\n');
            c.length > 0 && $.post('http://localhost/save.php', {
                act: 'save',
                array: c
            })
        }
    }))
}
location.hostname == b_sv && ($(document).on('click', '#submit_auto_block_stop', function() {
    auto_block.run = 0, $('#submit_auto_block_stop').disabled(), $('.progress-striped').removeClass('active'), $('#submit_auto_block_start').buttonStop(), noti.success('Đã có lệnh dừng AUTO block !'), $('#auto_block_status').text('Đã dừng AUTO block !')
}), $(document).on('click', '#submit_auto_block_start', function() {
    if (auto_block = {
            token: $('#input_auto_block_token').validate(),
            id: $('#input_auto_block_id').isNumber(),
            delay: $('#input_auto_block_delay').isNumber(),
            run: 1,
            success: 0,
            error: 0,
            bach: ''
        }, auto_block.token && auto_block.id && auto_block.delay) {
        $(this).buttonLoad(), auto_block.token = auto_block.token.split('\n'), $('.auto_block_progress').hide().slideDown('fast'), $('.progress-striped').addClass('active'), $('#auto_block_progress').attr('style', 'width: 0%'), $('#submit_auto_block_stop').undisabled();
        for (var c = 0; c < auto_block.token.length; c++) {
            ! function(c) {
                setTimeout(function() {
                    auto_block_send(c)
                }, c * auto_block.delay)
            }(c)
        }
    }
}))
