$(function(){
			var swiper = new Swiper('.swiper-container', {
		        loop: true,
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev'
		 }); 
		 
		$('.menu').click(function(){
			$('.box').show();
		})
		$('.close').click(function(){
			$('.box').hide();
		})
		
		var aLi=$(".list li");
				var box1=$("<div class='posiA'></div>");
				var box2=$("<div class='posiB'></div>");
				aLi.hover(function(){
					$(this).addClass("active")
					$(this).find("a").css("color","green");
					$(this).find("a").css("font-size","34px");	
					var top=$(this).offset().top;
					var left=$(this).offset().left;
					console.log(top,left)
					$(".move").css("top",top)
					$(".move").css("left",left);
				},function(){
					$(this).removeClass("active");
					$(this).find("a").css("color","#fff");
					$(this).find("a").css("font-size","30px");	
					$(".move").offset().top=0;
					$(".move").offset().left=0;

				})
				
		   
})