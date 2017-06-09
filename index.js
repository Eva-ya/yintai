$(function(){
	
	
	
	$(".b_b_left").click(function(){
		$(this).prev().css("left",-$(".content_b_b li").eq(0).width()+"px");
	})
	$(".b_b_right").click(function(){
		$(this).prev().prev().css("left","0px");
	})
	var num=0;
	var t=setInterval(move,3000);
	function move(){
		if(num==$(".h_c_ua li").length){
			num=0;
		}
		$(".h_c_ua li").eq(num).fadeIn().siblings().fadeOut();
		$(".h_c_ub li").eq(num).css("background","#e5004f").siblings().css("background","#211616");
		num++;
		
		
	}
	function move2(){
		if(num==-1){
			num=$(".h_c_ua li").length-1;
		}
		$(".h_c_ua li").eq(num).fadeIn().siblings().fadeOut();
		$(".h_c_ub li").eq(num).css("background","#e5004f").siblings().css("background","#211616");
		num--;
		
		
	}
	
	$("#head_content").hover(function(){
		$(".on").css("display","block");
	},function(){
		$(".on").css("display","none");
	});
	$(".right").click(function(){
		clearInterval(t);
		move();
		t=setInterval(move,3000);
	})
	$(".left").click(function(){
		clearInterval(t);
		move2();
		t=setInterval(move2,3000);
	})
	$(".h_c_ub li").hover(function(){
		num=$(this).index();
		$(".h_c_ua li").eq($(this).index()).fadeIn().siblings().fadeOut();
		$(this).css("background","#e5004f").siblings().css("background","#211616");
	},function(){
	})
	$("#nav_a").hover(function(){
		$(".h_m_nav_b").css("display","block");
	},function(){
		$(".h_m_nav_b").css("display","none");
	})
	$("#nav_a").hover(function(){
		$("#h_m_nav_c").css("display","block");
	},function(){
		$("#h_m_nav_c").css("display","none");
	})
//	$("#nav_b").hover(function(){
//		$("#h_m_nav_d").css("display","block");
//	},function(){
//		$("#h_m_nav_d").css("display","none");
//	})
    $(".head_main_pic").hover(function(){
    	$(this).animate({
    		left:"1050px"
    	})
    },function(){
    	$(this).animate({
    		left:"1069px"
    	})
    });
    $(".head_content_a li").hover(function(){
    	$(".h_c_box_a").css("display","none");
    	$(".h_c_box_a").eq($(this).index()).css("display","block");
    	$(this).css("borderColor","#e5004f").siblings().css("borderColor","#211616");
    },function(){
    	
    });
    $(".a_nav li").hover(function(){
    	$(".right_main_b").css("display","none");
    	$(".right_main_b").eq($(this).index()).css("display","block");
    	$(this).css("borderColor","#e5004f").siblings().css("borderColor","#211616");
    },function(){
    	
    });
    
    $(".content_b_a_nav li").hover(function(){
    	$(this).css("background","#E5004F").siblings().css("background","white");
    },function(){
    	$(".content_b_a_nav li").css("background","white");
    })
    $(".h_t_ul_a li:nth-child(1)").hover(function(){
    	$(this).css({"backgroundImage":"url(images/header_a_b.png)",
    		"color":"#E5004F"})
    },function(){
    	$(this).css({"backgroundImage":"url(images/header_a_a.png)",
    		"color":"black"})
    })
    $(".h_t_ul_a li:nth-child(2)").hover(function(){
    	$(this).css({"backgroundImage":"url(images/header_a_d.png)",
    		"color":"#E5004F"});
    	$(".li_b").css("display","block");
    },function(){
    	$(this).css({"backgroundImage":"url(images/header_a_c.png)",
    		"color":"black"});
    	$(".li_b").css("display","none");
    })
    $(".h_t_ul_a li:nth-child(3)").hover(function(){
    	$(this).css({"backgroundImage":"url(images/header_a_f.png)",
    		"color":"#E5004F"});
    	$(".li_c").css("display","block");
    },function(){
    	$(this).css({"backgroundImage":"url(images/header_a_e.png)",
    		"color":"black"});
    	$(".li_c").css("display","none");
    })
    $("#yintai").hover(function(){
    	$(".li_d").css("display","block")
    },function(){
    	$(".li_d").css("display","none")
    })
    
    $(document).scroll(function(){
    	var t=$(this).scrollTop();
    	if(t>=$(".head_content_a").offset().top){
		    $(".nav").css("display","block");
		    
			console.log(t)
			console.log($('#aaaa').offset().top)
			
    		if(t>=$('#aaaa').offset().top){
				$(".one").removeClass("disappear_a").eq(0).addClass("disappear_a");
			}
	    	else if(t>=$('.content_c').offset().top){
				$(".one").removeClass("disappear_a").eq(1).addClass("disappear_a");
			}
	    	else if(t>=$('.content_d').offset().top){
	    		$(".one").removeClass("disappear_a").eq(2).addClass("disappear_a");
	    	}
	    	else{}
				
			
    	
    	}
    	else{
    		$(".nav").css("display","none");
    	}
    	
    })
//	$(".aa li").each(function(index,obj){
//		var h=$(this).offset().top;
//		if(t>=h){
//			$(".one").removeClass("disappear_a").eq(index).addClass("disappear_a");
//		}
//	})	
    	
	$(".nav li").eq(0).click(function(){
		$(this).find(".one").addClass("disappear_a");
			$(this).siblings().find(".one").removeClass("disappear_a");
		
		$("body").animate({
				scrollTop:$('#aaaa').offset().top,
		})
		
	})
	$(".nav li").eq(1).click(function(){
		$(this).find(".one").addClass("disappear_a");
		$(this).siblings().find(".one").removeClass("disappear_a");
	
		$("body").animate({
			
			scrollTop:$('.content_c').offset().top,
		})
		})
	$(".nav li").eq(2).click(function(){
		$(this).find(".one").addClass("disappear_a");
		$(this).siblings().find(".one").removeClass("disappear_a");
	
		$("body").animate({
			
			scrollTop:$('.content_d').offset().top,
		})
		})
	$(".nav li").eq(3).click(function(){
		$(this).find(".one").addClass("disappear_a");
		$(this).siblings().find(".one").removeClass("disappear_a");
	
		$("body").animate({
			
			scrollTop:0,
		})
		})
	
	
	$(".nav li").hover(function(){
		$(this).find(".one").addClass("disappear_b");
	},function(){
		$(this).find(".one").removeClass("disappear_b");
	})
	
	
})
	
    		
    		
    		
    	
    	
    
    
    
    

