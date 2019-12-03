$(document).ready(function() {
	$(window).scroll(function(){
		// lấy vị trí hiện tại của thanh scroll
		let pos_body = $("body,html").scrollTop();

		// add class
		if(pos_body < 500) {
			 $('div.top > i.fas').removeClass('xoay');
		}else if(pos_body > 1000) {
			 $('div.top > i.fas').addClass('xoay');
		}

	});
	
	// cuộn ra giữa trang
	$('div.top').click(function() {
		/* Act on the event */
		$('html,body').animate({
			scrollTop: 500
	    }, 600);
	});	
	
});
