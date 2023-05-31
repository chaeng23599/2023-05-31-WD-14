$(function(){
    //메뉴
    // $('.gnb li').hover(
    //     function(){
    //         $(this).find('ul').stop().slideDown()
    //     },
    //     function(){
    //         $(this).find('ul').stop().slideUp()
    //     },
    // )
        //슬라이드
    // setInterval(function(){
    //     $('.slide').animate({ left: '-100%' }, function(){
    //         $('.slide a:first').appendTo('.slide')
    //         $('.slide').css('left',0)
    //     })
    // },3000)

    $('.gnb li').hover(
        function(){
            $(this).find('ul').stop().slideDown()
        },
        function(){
            $(this).find('ul').stop().slideUp()
        },
    )

    setInterval(function(){
        $('.slide').animate({ left: '-100%'}, function(){
            $('.slide a:first').appendTo('.slide')
            $('.slide').css('left',0)
        })
    },600000)
})