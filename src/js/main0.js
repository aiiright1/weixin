/**
 * Created by Administrator on 2016/10/19.
 */
require.config({
  baseUrl:"js/",
  paths:{
      "swip":"swiper",
      "swipan":"swiper.animate1.0.2.min",
      "touch":"touch"
  },
  shim:{
      'swip':{
          exports:"swip"
      },
      'swipan':{
          deps:["swip"],
          exports:"swipan"
      },
      'touch':{
          exports:"touch"
      }
  }

});



require(["swip","swipan","touch"],function(s,v,c){

      var swiper=new s(".swiper-container",{
          direction:"vertical",
          autoplay:8000,
          loop:true,
          pagination:".swiper-pagination",
          effect:"slider",
          onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
              swiperAnimateCache(swiper); //隐藏动画元素
              swiperAnimate(swiper); //初始化完成开始动画
          },
          onSlideChangeEnd: function(swiper){
              swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          }
      })
});
