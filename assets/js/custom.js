$(document).ready(function(){
    $('.nav-item').on('click',function(){
        $(this).siblings().removeClass('onactive');
        $(this).siblings('a.link').addClass('collapsed');
        $(this).siblings().find('.header-sub-dropdown').removeClass('show');
        $(this).addClass('onactive');
    });
    $("#contact-form").validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message:"required"
			},
			messages: {
				name: "Please enter your name",
				email: "Please enter a valid email address",
				message:"Please fill you message here"
			}
		});
})