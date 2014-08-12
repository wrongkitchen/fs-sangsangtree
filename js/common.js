var num1 = 0;
var _id = 5973;
var flashNum = 0;
var t = 0;
var t2 = 0;
var userInfo;

$(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	}
	var windowWidth = $(window).width();
	
	$('.cloud-1').css({right:Math.random()*$(window).width()});
	$('.cloud-2').css({right:Math.random()*$(window).width()});
	$('.cloud-3').css({right:Math.random()*$(window).width()});
	
	$('.ballon-1').css({right:Math.random()*($(window).width()/2)});
	$('.ballon-2').css({right:Math.random()*($(window).width()/2)});
	$('.ballon-3').css({right:Math.random()*($(window).width()/2)});
	$('.ballon-4').css({right:Math.random()*($(window).width()/2)});
	$('.ballon-5').css({right:Math.random()*($(window).width()/2)});
	
	$('.login-box .username').focus(function(){
		$(this).val('');
	});
	
	$('.login-box .password').focus(function(){
		$(this).prop('type', 'password').val('');
	});
	
	$('.login-box .password').blur(function(){
		if($(this).val() == ""){
			//$(this).prop('type', 'text').val('');
		}
	});
	
	cloudMove1();
	cloudMove2();
	cloudMove3();
	
	ballonMove1();
	ballonMove2();
	ballonMove3();
	ballonMove4();
	ballonMove5();
	
	butterflyMove1();
	butterflyMove2();
	
	rotation();
	rotation2();
	//rotation3();
	
	buttefly1 = setInterval(buttereffect1,30);
	
	$('.wrapper>.close').bind('click',commonClose);
	
	$('.login').bind('click',login);
	$('.instrustion .close, .instrustion .enter').bind('click',closeInstrustaion);
	$('.upload .close').bind('click',closeUpload);
	$('.upload .verfity').bind('click',verfityContent);
	$('.upload .back').bind('click',backToForm);
	$('.upload .crop .confirm-btn').bind('click',viewInfo);
	$('.upload .confirm .confirm-btn').bind('click',confirmInfo);
	$('.view-info .close, .view-info .back').bind('click',closeView);
	
	$('.select>p').bind('click',showOption);
	$('.select .option>p').bind('click',selectOption);
	
	$('.search-people .search1').bind('click',searchResult);
	$('.search-people .close').bind('click',closeSearch1);
	
	$('.search-department .close').bind('click',closeSearch2);
	$('.search-department .search1').bind('click',searchResult2);
	
	$('.tree-holder .intro1, .tree-holder .thanks').bind('click',hideIntro);
	
	$('.btn1').bind('click',upLoad);
	$('.btn2').bind('click',showSearch1);
	$('.btn3').bind('click',showSearch2);
	//$('.btn3').bind('click',uploadPhoto);
	$('.btn4').bind('click',viewProfile);
	$('.info').bind('click',showInstrustaion);
	
	
	$('#uploadPhoto').on('change',prepareUpload);
	
});
/*************** animation ***************/
function cloudMove1(){
	var windowWidth = $(window).width();
	$('.cloud-1').stop().animate({right:windowWidth},30000,"linear",function(){
		$(this).css({right:-1250});
		cloudMove1();
	})
}

function cloudMove2(){
	var windowWidth = $(window).width()*2;
	$('.cloud-2').stop().animate({right:windowWidth},60000,"linear",function(){
		$(this).css({right:-650});
		cloudMove2();
	})
}

function cloudMove3(){
	var windowWidth = $(window).width()*3;
	$('.cloud-3').stop().animate({right:windowWidth},90000,"linear",function(){
		$(this).css({right:-600});
		cloudMove3();
	})
}

function ballonMove1(){
	var windowWidth = $(window).width();
	var time = Math.round(Math.random()*30000)+60000;
	var xpos = windowWidth+ Math.round(Math.random()*(windowWidth/2));
	$('.ballon-1').stop().animate({right:xpos},time,"linear",function(){
		$(this).css({right:-Math.round(Math.random()*(windowWidth/2))});
		ballonMove1();
	})
}

function ballonMove2(){
	var windowWidth = $(window).width();
	var time = Math.round(Math.random()*30000)+60000;
	var xpos = windowWidth+ Math.round(Math.random()*(windowWidth/2));
	$('.ballon-2').stop().animate({right:xpos},time,"linear",function(){
		$(this).css({right:-Math.round(Math.random()*(windowWidth/2))});
		ballonMove2();
	})
}

function ballonMove3(){
	var windowWidth = $(window).width();
	var time = Math.round(Math.random()*30000)+60000;
	var xpos = windowWidth+ Math.round(Math.random()*(windowWidth/2));
	$('.ballon-3').stop().animate({right:xpos},time,"linear",function(){
		$(this).css({right:-Math.round(Math.random()*(windowWidth/2))});
		ballonMove3();
	})
}

function ballonMove4(){
	var windowWidth = $(window).width();
	var time = Math.round(Math.random()*30000)+60000;
	var xpos = windowWidth+ Math.round(Math.random()*(windowWidth/2));
	$('.ballon-4').stop().animate({right:xpos},time,"linear",function(){
		$(this).css({right:-Math.round(Math.random()*(windowWidth/2))});
		ballonMove4();
	})
}

function ballonMove5(){
	var windowWidth = $(window).width();
	var time = Math.round(Math.random()*30000)+60000;
	var xpos = windowWidth+ Math.round(Math.random()*(windowWidth/2));
	$('.ballon-5').stop().animate({right:xpos},time,"linear",function(){
		$(this).css({right:-Math.round(Math.random()*(windowWidth/2))});
		ballonMove5();
	})
}

function butterflyMove1(){
	t += 0.05;

    var r = 100;         // radius
    var xcenter = 300;   // center X position
    var ycenter = 300;   // center Y position

    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
	
	$('.butterfly').animate({
        bottom: newTop,
        right: newLeft,
    }, {
		duration:50,
		step:function(){
			if(newTop < 300){
				$(this).addClass('reverse');
			}else if(newTop >= 300){
				$(this).removeClass('reverse');
			};
		},
		complete:function(){
        	butterflyMove1();
		}
    });
}
function butterflyMove2(){
	t2 += 0.05;

    var r = 100;         // radius
    var xcenter = 800;   // center X position
    var ycenter = 300;   // center Y position

    var newLeft = Math.floor(xcenter - (r * Math.cos(t2)));
    var newTop = Math.floor(ycenter - (r * Math.sin(t2)));
	
	$('.butterfly2').animate({
        bottom: newTop,
        right: newLeft,
    }, {
		duration:200,
		step:function(){
			if(newTop > 300){
				$(this).addClass('reverse');
			}else if(newTop <= 300){
				$(this).removeClass('reverse');
			};
		},
		complete:function(){
        	butterflyMove2();
		}
    });
}

function buttereffect1(){
	num1++;
	$('.butterfly').css({'background-position':-num1*70+"px 0px"});
	$('.butterfly2').css({'background-position':-num1*50+"px 0px"});
}

function rotation(){
	$(".leaf-1").stop().animate({transform: 'rotate(3deg)'},3000,"linear",function(){
		rotation1_1();
	});
}

function rotation1_1(){
	$(".leaf-1").stop().animate({transform: 'rotate(0deg)'},3000,"linear",function(){
		rotation();
	});
}

function rotation2(){
	$(".leaf-3").stop().animate({transform: 'rotate(-8deg)'},4000,"linear",function(){
		rotation2_1();
	});
}

function rotation2_1(){
	$(".leaf-3").stop().animate({transform: 'rotate(0deg)'},4000,"linear",function(){
		rotation2();
	});
}


function rotation3(){
	$(".leaf-2").stop().animate({transform: 'rotate(-3deg)'},4000,"linear",function(){
		rotation2_1();
	});
}

function rotation3_1(){
	$(".leaf-2").stop().animate({transform: 'rotate(0deg)'},4000,"linear",function(){
		rotation3();
	});
}
function stopAnime(){
	$('.cloud-1').hide();
	$('.cloud-2').hide();
	//$('.cloud-3').hide();
	//$('.ballon-2').hide();
	$('.ballon-3').hide();
	$('.ballon-4').hide();
	$('.ballon-5').hide();
	$('.ballon-1').hide();
	$('.butterfly').hide();
	$('.butterfly2').hide();
}
function startAnime(){
	$('.cloud-1').show();
	$('.cloud-2').show();
	//$('.cloud-3').show();
	//$('.ballon-2').show();
	$('.ballon-3').show();
	$('.ballon-4').show();
	$('.ballon-5').show();
	$('.ballon-1').show();
	$('.butterfly').show();
	$('.butterfly2').show();
}
/*************** animation ***************/
/*************** btn-click ***************/
function onOver(){
	$(this).css({'background-color':'#ff7d0a'});
}
function onOut(){
	$(this).removeAttr('style');
}
function login() {
	var loginname = $('.login-box .username').val();
	var pw = $('.login-box .password').val();
	$.post( "../json/login_json.php", { txt_login: loginname, txt_password: pw } ).done(function( data ) {
		//console.log(data);
		userInfo = jQuery.parseJSON( data );
		if(userInfo.login_result == "S"){
			$('.login-box').fadeOut(500);
			$('header .menu, header .menu2').fadeIn(500);
			$('.tree-holder .tree').stop().animate({width:'70%',right:'15%',bottom:'-10%'},2000,"easeInOutQuart",function(){
			showInstrustaion();
			$('header .logo1').fadeIn(500);
			$('header .logo2').fadeIn(500);
			});
			$('.leaf-1').stop().animate({left:'-5%'},2000,"easeInOutQuart",function(){
				rotation();
			});
			$('.leaf-2').stop().animate({left:'-20%'},2000,"easeInOutQuart");
			$('.leaf-3').stop().animate({right:'-5%'},2000,"easeInOutQuart",function(){
				rotation2();
			});
			appendBox();
			
			$('.upload .form h1').eq(0).text(userInfo.staff_chinese_name);
			$('.upload .profile h1').eq(0).text(userInfo.staff_chinese_name);
			$('.upload .form h1').eq(1).text(userInfo.staff_english_name);
			$('.upload .profile h1').eq(1).text(userInfo.staff_english_name);
			$('.upload .form p').eq(0).text(userInfo.staff_region2_name+' - '+userInfo.staff_department_name);
			$('.upload .profile p').eq(1).text(userInfo.staff_region2_name+' - '+userInfo.staff_department_name);
			$('.upload .form p').eq(1).find('span').text(userInfo.staff_join_date);
			$('.upload .form p').eq(2).find('span').text(userInfo.staff_join_date);
		}else if(userInfo.login_result == "F"){
			alert("login fail");
		}
		//alert( "Data Loaded: " + obj.login_result );
	});
	/*$('.login-box').fadeOut(500);
	$('header .menu, header .menu2').fadeIn(500);
	$('.tree-holder .tree').stop().animate({width:'70%',right:'15%',bottom:'-10%'},2000,"easeInOutQuart",function(){
		showInstrustaion();
		$('header .logo1').fadeIn(500);
		$('header .logo2').fadeIn(500);
	});
	$('.leaf-1').stop().animate({left:'-5%'},2000,"easeInOutQuart",function(){
		rotation();
	});
	$('.leaf-2').stop().animate({left:'-20%'},2000,"easeInOutQuart");
	$('.leaf-3').stop().animate({right:'-5%'},2000,"easeInOutQuart",function(){
		rotation2();
	});
	appendBox();*/
	return false;
}
function commonClose(){
	$('#bg_mask').fadeOut(500);
	$('.tree-holder .tree').stop().animate({width:'70%',right:'15%','margin-right':0,bottom:'-10%'},2000,"easeInOutQuart",function(){
		$('.menu, .menu2').fadeIn(500);
	});
	$('.logo3').fadeOut(500);
	$(this).fadeOut(500);
	startAnime();
	return false;
}
function showInstrustaion(){
	$('.instrustion').fadeIn(500);
	$('.logo3').fadeIn(500);
	return false;
}
function closeInstrustaion(){
	$('.instrustion').fadeOut(500);
	$('.logo3').fadeOut(500);
	if($('.tree2').is(':hidden')){
		$('.tree').fadeOut(500);
		$('.tree2').fadeIn(500);
	}
	return false;
}
function closeUpload(){
	$('.logo3').fadeOut(500);
	$('.wrapper .upload .content:visible').fadeOut(500);
	$('.wrapper .upload .bg').stop().animate({width:'100%',left:'0%'},2000,"easeInOutQuart");
	$('.wrapper .upload').stop().delay(1000).animate({opacity:0},1000,function(){
		$(this).removeAttr('style');
	});
	$('.wrapper>.close').click();
	return false;
}
function upLoad(){
	stopAnime();
	$('.menu, .menu2').fadeOut(500);
	$('.wrapper>.close').fadeIn(500);
	$('.tree-holder .tree').stop().animate({width:1152,right:'50%','margin-right':-576,bottom:'-20%'},2000,"easeInOutQuart",function(){
		$('#bg_mask').fadeIn(2000);
		$('.tree-holder .intro1').fadeIn(500);
	});
	
	$('.cell').bind('click',uploadPhoto);
	$('.cell').bind('mouseenter',onOver);
	$('.cell').bind('mouseleave',onOut);
	
	$('.cell.ui-selected').unbind('click',uploadPhoto);
	$('.cell.ui-selected').unbind('mouseenter',onOver);
	$('.cell.ui-selected').unbind('mouseleave',onOut);
	return false;
}
function appendBox(){
		var divs = "";
		used_pos = userInfo.used_position;

		for(var i = 0; i < 87; i++) {
			for(var j = 0; j < 144; j++){
				var idx = i * 144 + j;
				divs += "<div id="+idx+" class='cell " + (used_pos.indexOf(idx) != -1 ? "ui-selected" : "") + "'></div>";
			}
		}
		$('#bg_mask').append(divs);
}
function uploadPhoto(){
	$('#bg_mask').fadeOut(500);
	$('.logo3').fadeIn(500);
	$('.tree-holder .tree').stop().animate({width:3000,right:'50%','margin-right':-1500,bottom:-1500},2000,"easeInOutQuart");
	$('.wrapper .upload').show().css({opacity:0}).delay(1000).animate({opacity:1},500);
	$('.wrapper .upload .bg').stop().delay(1000).animate({width:'150%',left:'-25%'},1000,"easeOutQuart",function(){
		$('.upload .form').fadeIn(500);
	});
}
function prepareUpload(e){
	var data = new FormData();
	jQuery.each($(this)[0].files, function(i, file) {
    	data.append('image', file);
	});
	$.ajax({
		url: '../json/temp_upload_json.php',
		data: data,
		cache: false,
		contentType: false,
		processData: false,
		type: 'POST',
		success: function(data){
			//console.log(data);
			var temp = jQuery.parseJSON( data );
			$('#cropPhoto').attr('src',temp.temp_url);
			$('.profile-pic img').attr('src',temp.temp_url);
		}
	});
}
function verfityContent(){
	var verfity = true;
	if(verfity){
		$('.upload .content:visible').fadeOut(500,function(){
			$('.upload .crop').fadeIn(500);
			var JcropAPI = $('#cropPhoto').data('Jcrop');
			if(JcropAPI){
				JcropAPI.destroy();
			}
			$('#cropPhoto').Jcrop({
				// start off with jcrop-light class
				bgOpacity: 0.5,
				bgColor: 'white',
				addClass: 'jcrop-light'
			},function(){
				api = this;
				api.setSelect([0,0,220,220]);
				api.setOptions({ bgFade: true, allowResize:false, allowSelect: false});
				//api.allowResize = false;
				api.ui.selection.addClass('jcrop-selection');
			});
		});
	}else{
		$('.upload .content:visible').fadeOut(500,function(){
			$('.upload .error').fadeIn(500);
		});
	}
}
function backToForm(){
	$('.upload .content:visible').fadeOut(500,function(){
		$('.upload .form').fadeIn(500);
	});
	return false;
}
function viewInfo(){
	$('.upload .content:visible').fadeOut(500,function(){
		$('.upload .confirm').fadeIn(500);
	});
	return false;
}

function confirmInfo(){
	$('.menu .btn1').hide();
	$('.menu .btn4').css({display:'block'});
	closeUpload();
	$('.thanks').show();
}
function viewProfile(){
	stopAnime();
	flashNum = 0;
	closeSearch1();
	$('#bg_mask .cell').empty();
	$('.menu, menu2').fadeOut(500);
	$('.tree-holder .tree').stop().animate({width:1152,right:'50%','margin-right':-576,bottom:'-20%'},2000,"easeInOutQuart",function(){
		var _result = '#'+_id;
		$('#bg_mask .cell').css({opacity:0});
		$(_result).append('<div class="result"></div>').css({opacity:1});
		$('#bg_mask').fadeIn(500,function(){
			resultFlash();
		});
	});
}
function resultFlash(){
	var _result = '#'+_id;
	flashNum++;
	if(flashNum > 4){
		$('.result',_result).remove();
		showResult();
		return false;
	}
	$('.result',_result).stop().animate({width:'200%',height:'200%',top:'-50%',left:'-50%',opacity:0.5},500,"easeInOutQuart",function(){
		$(this).stop().animate({width:'100%',height:'100%',top:'0%',left:'0%',opacity:0.8},500,"easeInOutQuart",function(){
			resultFlash();
		});
	});
}
function showResult(){
	$('.logo3').fadeIn(500);
	$('#bg_mask').fadeOut(500);
	$('.tree-holder .tree').stop().animate({width:3000,right:'50%','margin-right':-1500,bottom:-1500},2000,"easeInOutQuart");
	$('.wrapper .view-info').show().css({opacity:0}).delay(1000).animate({opacity:1},500);
	$('.wrapper .view-info .bg').stop().delay(1000).animate({width:'150%',left:'-25%'},1000,"easeOutQuart",function(){
		$('.view-info .content').fadeIn(500);
	});
}
function closeView(){
	$('.wrapper .view-info .content:visible').fadeOut(500);
	$('.wrapper .view-info .bg').stop().animate({width:'100%',left:'0%'},2000,"easeInOutQuart");
	$('.wrapper .view-info').stop().delay(1000).animate({opacity:0},1000,function(){
		$(this).removeAttr('style');
	});
	$('.wrapper>.close').click();
	return false;
}
function showSearch1(){
	$('.logo3').fadeIn(500);
	$('.wrapper .search-people').fadeIn(500);
	return false;
}
function showOption(){
	var p = $(this).parent();
	$('.option',p).show();
	return false;
}
function selectOption(){
	var p = $(this).parent().parent();
	$('.option',p).hide();
	$('>p',p).text($(this).text());
	if($(p).parent().parent().find('.department').is(':hidden')){
		$(p).parent().parent().find('.department').css({display:'inline-block'});
		$(p).parent().parent().find('.search1').show();
	}
	return false;
}
function closeSearch1(){
	$('.logo3').fadeOut(500);
	$('.search-people').fadeOut(500,function(){
		$('.search-people .content').children().each(function(){
			$(this).removeAttr('style');
		});
	});
	//startAnime();
	return false;
}
function searchResult(){
	//closeSearch1();
	$('.search-people .result-page').show('blind',500);
	$('.result-page .result-row').bind('click',viewProfile);
	return false;
}
function showSearch2(){
	//stopAnime();
	$('.logo3').fadeIn(500);
	$('.wrapper .search-department').fadeIn(500);
	return false;
}
function closeSearch2(){
	$('.logo3').fadeOut(500);
	$('.search-department').fadeOut(500,function(){
		$('.search-department .content').children().each(function(){
			$(this).removeAttr('style');
		});
	});
	startAnime();
	return false;
}
function searchResult2(){
	closeSearch2();
	stopAnime();
	$('#bg_mask .cell').empty();
	$('.tree-holder .tree').stop().animate({width:1152,right:'50%','margin-right':-576,bottom:'-20%'},2000,"easeInOutQuart",function(){
		var _result = '#'+_id;
		$(_result).append('<div class="result"></div>').css({opacity:1});
		$('#bg_mask .cell').css({opacity:0});
		$('#bg_mask').fadeIn(500,function(){
			resultFlash2();
		});
	});
	return false;
}

function resultFlash2(){
	//$('#bg_mask .cell').empty();
	for(var i=0;i<50;i++){
		var id2 = Math.round(Math.random()*$('.cell').length);
		if($('#'+id2).hasClass('select')){
			$('#'+id2).append('<div class="result2"></div>').css({opacity:1});
		}
	}
	$('.menu, .menu2').fadeOut(500);
	$('.wrapper>.close').fadeIn(500);
}

function hideIntro(){
	$(this).fadeOut(500);
}
/*************** btn-click ***************/

jQuery.event.add(window,"load",function() {
});