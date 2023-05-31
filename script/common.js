$(function(){
    $('.gnb li').hover(
        function(){
            $(this).find('ul').stop().show()
        },
        function(){
            $(this).find('ul').stop().hide()
        }
    )
})