/*index*/
$(document).ready(function(){
	$(".ind_txt1").delay(500).fadeIn();
	$(".ind_txt2").delay(1500).fadeIn();
	$(".ind_txt3").delay(3000).fadeIn();
	$(".ind_txt4").delay(4500).fadeIn();
	$(".ind_txt5").delay(6000).fadeIn();
	$(".ind_txt6").delay(7500).fadeIn();
	$(".ind_txt7").delay(9000).fadeIn();
	$(".ind_txt8").delay(10500).fadeIn();
})
/*main1*/
$(function(){
	//录音按钮按下事件
	var dianji=1;
    $('.m1_ht_but').click(function () {
        if(dianji==1){
           $(".m1_ht_bg1").addClass("m1_ht_bg1_rota");
			$(".m1_ht_bg2").addClass("m1_ht_bg2_rota");
			dianji++;
        }else if(dianji==2) {
            $(".m1_ht_bg1").removeClass("m1_ht_bg1_rota");
			$(".m1_ht_bg2").removeClass("m1_ht_bg2_rota");
			$(".recording").fadeIn();
			setTimeout(function(){
				$(".recording_div_img img").attr("src","img/m1_txt1.png");
			},2000)
			$(".recording_but").delay(2000).fadeIn();
            dianji++;
        }else {
            return false;
        };

    });
	
})
//音乐播放暂停
var audio = document.getElementById('audio');
function playOrPaused(){
	if(audio.paused){
		audio.play();
		document.getElementById("music").className="music_img1";
		return;
	}
	audio.pause();
	document.getElementById("music").className="music_img2";
}