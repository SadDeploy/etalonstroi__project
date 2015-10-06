$(window).load(function () {

    // popup intime
    var myModal = function () {
        $('#myModal').modal('show');
    };
    //setTimeout(myModal, 5000);

    // count input
    $('.product_quantity_js .inc').click(function () {
        var $input = $(this).parents('.product_quantity_js').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.product_quantity_js .dec').click(function () {
        var $input = $(this).parents('.product_quantity_js').find('input');
        var count = parseInt($input.val()) + 1;
        count = count > 999 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    // input type ONLY number
    jQuery.fn.ForceNumericOnly =
    function()
    {
        return this.each(function()
        {
            $(this).keydown(function(e)
            {
                var key = e.charCode || e.keyCode || 0;
                // Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
                return (
                key == 8 ||
                key == 9 ||
                key == 46 ||
                key == 190 ||
                (key >= 37 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
            });
        });
    };
    $(".product_quantity_js input").ForceNumericOnly();


    // custom select
    if ($(".custom-select").length) {
        $(".custom-select").selectOrDie();
    }


    // input[type=file]
    $('.file_js').change(function() {
        $('.file_js').each(function() {
            var name = this.value;
            reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
            $('.name_js').val(fileTitle);
        });
    });


    // slider
    if ($(".flexslider").length) {
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: true,
            itemWidth: 145,
            maxItems: 5,
            minItems: 2,
            touch: true,
            asNavFor: '#slider'
        });
        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            animationLoop: true,
            slideshow: false,
            touch: true,
            sync: "#carousel"
        });
    }

    // fancybox
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({});
    }

    // animated blocks
    $(function() {
        $('.animated').each(function(i) {
            $(this).delay((i++) * 500).animate({left: "0"}, 500);
        })
    });



    // adaptive menu
    $('.userbar-toggler').click(function(){
        $('.userbar-toggle').slideToggle();
        $('.menu-toggle').hide();
        $('.search-toggle').hide();
    });
    $('.menu-toggler').click(function(){
        $('.menu-toggle').slideToggle();
        $('.userbar-toggle').hide();
        $('.search-toggle').hide();
    });
    $('.search-toggler').click(function(){
        $('.search-toggle').slideToggle();
        $('.menu-toggle').hide();
        $('.userbar-toggle').hide();
    });


    $('.sub_navbar_elements .navbar_link').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().find('.sub_navbar').slideToggle();
    });


    // show/hide
    $('.click_results_js').click(function(){
        $(this).parents().find('.action_results_js').show('slow');
        return false;
    });


    //busket delete function
    $('.busket__product__delete a').click(function(){
        $(this).parent().parent().fadeOut('slow');
        return false;
    });


    // adaptive menu animate
    $(function() {
        $('.navbar_element a').click(function() {
            var href = $(this).attr('href');
            $(".product_list").animate({'opacity': 0}, 1000, function() {
                location.href = href;
            });
            return false;
        });
    });


    //accordion
    $(".header__accordion-js").click(function() {
        $(this).parent().parent().find('.body__accordion-js').slideToggle();
        return false;
    });
    $(".link__accoddion-js").click(function() {
        $(this).parent().next('.body__link__accordion-js').slideToggle();
        $(this).toggleClass('activate');
        $(this).parent().parent('.body__link-js').toggleClass('active');
        return false;
    });
    $(".link__quest-js").click(function() {
       // $(this).parent().parent().find('.body__link__quest-js').slideToggle();
        //return false;
    });

   /* $(function() {
        $(".btn-radio").click(function(){
            $('.toHide').hide();
            $("#blk-"+$(this).val()).show('slow');
        });
    });*/
    (function($) {
        $(function() {
            $('.btn-checkbox').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.body__link__quests').find('div.body__link__quest').removeClass('active').eq($(this).index()).addClass('active');
            });
            $('.body__link__quest_last input').click( function (){
                $('.action_results_js').fadeIn('slow');
                $('.product_catalog div').addClass('item');
                return false;
            });
        });
    })(jQuery);

});