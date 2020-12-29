//Comentários

$(function(){
	$('#azul').click(function(){
		$('p').css("color", "blue")
			.fadeOut(5000)
			.delay(1000)
			.fadeIn('fast');
	});
	$('#vermelho').click(function(){
		$('p').css("color", "red");
		$('#mensagem')
			.text("Cor alterada para vermelho")
			.css({color:'red', border:'1px solid red'})
			.delay(3000)
			.fadeOut()
			.addClass('green');
	});
});