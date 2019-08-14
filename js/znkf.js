//组织机构跳转携id
$('.xiala_left ul li:nth-child(1)').click(function () {
	window.open('zzjg.html' +'?'+'1');	
});
$('.xiala_left ul li:nth-child(2)').click(function () {
	window.open('zzjg.html' +'?'+'2');	
});   
$('.xiala_left ul li:nth-child(3)').click(function () {
	window.open('zzjg.html' +'?'+'3');	
});
//服务大厅跳转家建设携id
$('.ng').click(function () {
	window.open('jjs.html' +'?'+'1');	
});
$('.ph').click(function () {
	window.open('jjs.html' +'?'+'2');	
});   
$('.nm').click(function () {
	window.open('jjs.html' +'?'+'3');	
});
$('.xx').click(function () {
	window.open('jjs.html' +'?'+'4');	
});
$('.matter_more').click(function () {
    window.open('xwzx.html' +'?'+'2');   
});
//服务大厅跳转家温暖携id
$('.gw').click(function () {
	window.open('jwn.html' +'?'+'1');	
});
$('.yl').click(function () {
	window.open('jwn.html' +'?'+'2');	
});   
$('.hz').click(function () {
	window.open('jwn.html' +'?'+'3');	
});
$('.bf').click(function () {
	window.open('jwn.html' +'?'+'4');	
});
//智能客服隐藏
$('.kf_right').click(function () {
    $('.customer-service').removeClass('nul')
    $('.customer-service').css('bottom','-465px')

    setTimeout(function () {
        $('.customer-service').hide()
    },500)

});

//智能客服显示
$('.kefu').click(function () {
    $('.customer-service').addClass('nul');

    $('.customer-service').show()

    setTimeout(function () {
        $('.customer-service').css({'position':'fixed','bottom':'2px'})
    },300)

})
//二维码显示与隐藏
$(function() {
    $('.slide ul li:nth-child(4)').hover(function() {
            $('.sina').stop(true,true).show(300);
        },
        function() {
            $('.sina').stop(true,true).hide()
        });
    $('.slide ul li:nth-child(5)').hover(function() {
            $('.ewm').stop(true,true).show(300);
        },
        function() {
            $('.ewm').stop(true,true).hide()
        });
    $('.slide ul li:nth-child(6)').hover(function() {
            $('.appDoload').stop(true,true).show(300);
        },
        function() {
            $('.appDoload').stop(true,true).hide()
        });
})

/*
*  .ewm  微信二维码框
*  .sina 微博二维码框
*  .appDoload   app下载
* */

//返回顶部
$('#top').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 500);
    return false;
});


$('.slide ul li').mouseenter(function(){
    $(this).find('i').css('transform','scale(1.2,1.2)')
})
$('.slide ul li').mouseleave(function(){
    $(this).find('i').css('transform','scale(1,1)')
})

/*导航列表切换样式*/
function  addactive(classdom,classname) {
    $(classdom).click(function () {
        $(classdom).removeClass(classname);
        $(this).addClass(classname)
    });
}

//右侧导航开机动画
setTimeout(function () {
    $('.slide').css('right','0px');
},500);


//服务大厅鼠标移入动画
$('.hall span').mouseenter(function(){
    $(this).css('transform','scale(1.1,1.1)')
})
$('.hall span').mouseleave(function(){
    $(this).css('transform','scale(1,1)')
})
addactive('.content_left ul li','active1');
$('.content_left ul li:first-child').addClass('active1')


/*组织机构 新闻资讯*/
$('.tissue-jg').mouseover(function () {

    $('.xiala').show();
    $('.content').hide()
});
$('.content').mouseleave(function () {
    $('.xiala').hide();
    $('.content').hide();
});
$('.news-zx').mouseover(function () {
    $('.content').show();
    $('.xiala').hide();
});
$('.xiala').mouseleave(function () {
    $('.content').hide();
    $('.xiala').hide();
});
$('.hideMask').mouseenter(function () {

    $('.xiala').hide();
    $('.content').hide()

});

//选项卡切换
function tabtogg(clicClass,togclass,clicClassa,clicClassi){
    $(clicClass).click(function () {
        $('.tab-togg').removeClass('on');
        $(togclass).addClass('on');
        var hei = $(togclass).height();

        $('.my_ghcontent').css('height',hei);

        $('.rh_list li p').removeClass('bordred');
        $(clicClassa).addClass('bordred');
        $('.rh_list li i').css('color','#000');
        $(clicClassi).css('color','#db2c28');
    })
    

}





var myDate = new Date();      //获取当前时间
var nowTime = myDate.getFullYear()+'-'+ (myDate.getMonth()+1)+'-'+
    myDate.getDate() +' '+ myDate.getHours()+':'+myDate.getMinutes();


//客服回复
function kfhuifu() {
    var chat = document.getElementById('chat');

    //用户输入
    var userText = vm.userinp;


    var myuserInp = $('<div class="chat_right">' +
        '<div class="chat_text">' +
        '<i>'+nowTime+'</i>'+
        '<span>我</span>'+
        '<img src="images/tx.png" style="margin-bottom: 5px;padding-left: 10px;">'+
        '</div>' +
        '<p>'+ userText +'</p>'+
        '</div>')

    var oWords =  $('#chat');
        if(userText == ''){
            // alert('输入为空')
        }else{
            oWords.append(myuserInp);
            vm.userinp = ''


            axios({
                method: 'post',
                url: "http://kefu.pro.puluodike.cn/site/userQuestion/userSetQuestion",
                data:Qs.stringify ({
                    "question":userText
                })
            })
                .then(function (result) {
                    console.log(result);


                    //客服回复
                    var kefuText = result.data.data;
                    console.log(kefuText);
                    if(kefuText == undefined){
                        kefuText = result.data.msg
                    }


                        var kefuInp =$('<div class="chat_left" style="margin-top: 20px;"> ' +
                            '<a href=""><img src="images/gh_l.png" style="margin-bottom: 5px;"></a> ' +
                            '<span>客服</span> ' +
                            '<i>'+nowTime+'</i> ' +
                            '<p>'+kefuText+'</p> '
                            + '</div>');

                        oWords.append(kefuInp)


                });


        }






}


//回车 发送消息

$(document).keydown(function(event){
    if(event.keyCode ==13){
        kfhuifu()
    }
});

// 判断是否登录
function hei(){
    // alert(111)
    if(userTok.token == null){
        // alert('请登录')
      
         $(".open-hyzx>a").html('请登录');
         $('.slide ul li:nth-child(2)').show();
          //跳转登录界面 去登录
         $('.open-hyzx').click(function () {
            window.location.href='denglu.html'
         });
    }else{
        // alert('会员中心')
         $(".open-hyzx>a").html('会员中心');
         $(".phoneUser").html(userTok.phone)
        $('.slide ul li:nth-child(2)').show();
        tuilogin()
        //登录成功 跳转会员中心
        $('.open-hyzx').click(function () {
            window.location.href = 'hyzx.html'
         });
        // 7天退出登录
       setTimeout(function(){
           localStorage.clear();
        },86400000)
    }
}

hei()

