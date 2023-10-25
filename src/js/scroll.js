$('.menu__list-link, .consultation-btn, .products-btn').click(function () {
	let id = '' + $(this).attr('href');
	$('html, body').animate({scrollTop: $(id).offset()?.top}, 500, 'linear');
	return false;
})
