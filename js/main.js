$( document ).ready(function() {
  $(".navbar-toggle").on("click", function () {
    $(".menu-toggle").toggleClass("open");
  })
		$(".menu-toggle li a").on('click', function(){
		$(".menu-toggle").removeClass("open");

	})
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
		}
	}
});
});
});
