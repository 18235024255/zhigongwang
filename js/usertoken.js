
//新闻详情 孙毅
var baseUrl= "http://ftu.dev.puluodike.cn/zgfww";
//var baseUrl= "http://192.168.0.112:8012";
//短信验证 智能客服IP  王长伟
var jnUrl = "http://192.168.3.118:5003";
//登录 注册 入会    梁彩梅
//var unionUrl = "http://121.196.198.165";
var unionUrl = "http://ftu.dev.puluodike.cn";
// 信箱
var  email = "http://192.168.0.112:8012";
//
var  jinhui = "http://192.168.3.25:5557/mentalitycare"

//获取cookie 用户token
var userTok = {
    "token":'',
    "phone":'',
    "name":''
};
var userLogin;
var userInfo;
function setCookie(){
    userLogin = localStorage.getItem('tok');
   if(userLogin === null){
       userTok.token = null
   }else{
       userInfo = userLogin.split('-');
       userTok.token = userInfo[0];
       userTok.phone = userInfo[1];
       userTok.name = userInfo[2];
   }
}
setCookie();
if(userTok.token != null){
    console.log(userTok.name +'登录成功！')
}else{
    console.log('未登录')
}

//退出登录
function tuilogin() {
    $('.slide ul li:first-child').mouseenter(function () {
        $('.exit').fadeIn(1000);
        $('.showmask1').hide();
        $('.top-arrow1').hide();
        $('.top-arrow1ccc').hide();

        $('.showmask2').hide();
        $('.top-arrow2').hide();
        $('.top-arrow2ccc').hide();
    });

    $('.slide ul li:first-child').siblings().mouseenter(function () {
        $('.exit').fadeOut();
    });

    $('.exit').mouseleave( () => {
        $('.exit').fadeOut();
    });
}
//退出登录
function clear(){
      localStorage.clear();
      window.location.href="denglu.html"
}
//获取当前时间
var myDate = new Date();
var nowTime = myDate.getFullYear()+'-'+ (myDate.getMonth()+1)+'-'+
    myDate.getDate() +'-'+ myDate.getHours()+':'+myDate.getMinutes();

var nowTimeDay = myDate.getFullYear()+'年'+ (myDate.getMonth()+1)+'月'+
    myDate.getDate() +'日';

var nowDay = '星期'+ myDate.getDay();

function getDay() {
    if(nowDay == '星期1'){
        nowDay = '星期一'
    }else if(nowDay == '星期2'){
        nowDay = '星期二'
    }else if(nowDay == '星期3'){
        nowDay = '星期三'
    }else if(nowDay == '星期4'){
        nowDay = '星期四'
    }else if(nowDay == '星期5'){
        nowDay = '星期五'
    }else if(nowDay == '星期6'){
        nowDay = '星期六'
    }else if(nowDay == '星期0'){
        nowDay = '星期日'
    }
}



//返回顶部
$('#top').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 500);
    return false;
});


/*
//字体放大 缩小 正常
var  num = 16;
$('.sizeBig').click(function () {
    num += 2;
    if(num > 26){
        num = 26;
        alert('当前字体已经是最大');
    }
    $('.tt_text  p').css('font-size', num + 'px')
    $('.tt_text  p span').css('font-size', num + 'px')
    $('.tt_datails  p').css('font-size', num + 'px')
    $('.tt_datails  p span').css('font-size', num + 'px')


});

$('.sizeNormal').click(function () {
    num = 16;
    $('.tt_text  p').css('font-size',  num+ 'px');
    $('.tt_datails p').css('font-size',  num+ 'px');

});

$('.sizeSmall').click(function () {
    num-=2;
    if(num <=12){
        alert('当前已经是最小字体了');
                num = 12
    }
    $('.tt_text  p').css('font-size', num + 'px');
    $('.tt_datails  p').css('font-size', num + 'px');

});
*/
 window.onload=function(){

        var height=$(".ship-gh").height();
        $('.qiehuan').css('height',height);
        $(".cqiehuan li").on("click",function(){
        var height=$(this).parent().next().find(".in").height();
        $('.qiehuan').css('height',height);
        })
    }


