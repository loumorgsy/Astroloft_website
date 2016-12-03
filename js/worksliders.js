$(".header-branding").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $(".work-images").addClass('hide').fadeOut();
    $(".branding").removeClass('hide').fadeIn();
});

$(".header-webdesign").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $(".work-images").addClass('hide');
    $(".web-design").removeClass('hide');
});

$(".header-appdesign").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $(".work-images").addClass('hide');
    $(".app-design").removeClass('hide');
});

$(".header-casestudy").click(function(){
    $(".work-header").removeClass("selected");
    $(this).addClass('selected');
    $(".work-images").addClass('hide');
    $(".case-studies").removeClass('hide');
});
