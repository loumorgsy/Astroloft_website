$(".header-branding").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.branding').fadeIn('slow');
});

$(".header-webdesign").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.web-design').removeClass('hide');
    $('.web-design').fadeIn('slow');
});

$(".header-appdesign").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.app-design').removeClass('hide');
    $('.app-design').fadeIn('slow');
});

$(".header-casestudy").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $('.work-images').hide();
    $('.case-studies').removeClass('hide');
    $('.case-studies').fadeIn('slow');
});
