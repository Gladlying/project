$(document).ready(function(){
	$(".kaishi").click(function(){
		$(".p1_but").fadeOut();
		$('.p2_txt').fadeIn();
		var click_number=1;
		$('.sponsorFlip').bind("click",function(){
			if(click_number>4){
				//alert("只能点击4次")
			}else{
				// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
				var imgs = ["<img src='img/p2_img1.png' />","<img src='img/p2_img2.png' />","<img src='img/p2_img3.png' />","<img src='img/p2_img4.png' />",
				"<img src='img/p2_img5.png' />","<img src='img/p2_img6.png' />","<img src='img/p2_img7.png' />","<img src='img/p2_img8.png' />",
				"<img src='img/p2_img9.png' />","<img src='img/p2_img10.png' />"]
				var numbers =  imgs[Math.floor(Math.random()*imgs.length)];
				//alert(numbers);
				//$(this).next(".sponsorData").html(numbers);
				click_number++;
				if(click_number === 2){
					//alert("1");
					$(this).next(".sponsorData").html("<img src='img/p2_img5.png' />");
				}else if(click_number === 3){
					$(this).next(".sponsorData").html("<img src='img/p2_img2.png' />");
				}
				else if(click_number === 4){
					$(this).next(".sponsorData").html("<img src='img/p2_img10.png' />");
				}
				else if(click_number === 5){
					//alert("第四次");
					$(this).next(".sponsorData").html(numbers);
					setTimeout(function(){
						$(".jiewawa").fadeIn();
					},1000)
				}
				
				var elem = $(this);
				// data('flipped') is a flag we set when we flip the element:
				if(elem.data('flipped'))
				{
					// If the element has already been flipped, use the revertFlip method
					// defined by the plug-in to revert to the default state automatically:
					elem.revertFlip();
					// Unsetting the flag:
					elem.data('flipped',false)
				}
				else
				{
					// Using the flip method defined by the plugin:
					elem.flip({
						direction:'lr',
						speed: 350,
						onBefore: function(){
							// Insert the contents of the .sponsorData div (hidden from view with display:none)
							// into the clicked .sponsorFlip div before the flipping animation starts:
							
							elem.html(elem.siblings('.sponsorData').html());
						}
					});
					// Setting the flag:
					elem.data('flipped',true);
				}
			}
			
		});
	})
	
	
});