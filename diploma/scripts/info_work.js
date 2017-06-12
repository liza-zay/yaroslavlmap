function open_info (idName) {
	$(idName).find('.marker_btn').click(function() {
		$(idName).find('.info').animate({left: '0px'}, 400);
		var docHeight = $(document).height();
		$("body").append("<div id='overlay'></div>");
		$("#overlay").height(docHeight).css({
			'opacity' : 0.5,
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'display':'none',
			'background-color': 'black',
			'width': '1920px',
			'z-index': 5000
		});
		$("#overlay").fadeIn(400);
	});
};

function close_info (idName){ 
	$(idName).find('.close_btn').click(function() { 
		$("#overlay").fadeOut(200);
		$("#overlay").remove();
		$(idName).find('.info').animate({left: '-400px'}, 200);
	});
};
