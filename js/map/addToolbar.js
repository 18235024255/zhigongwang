/**
 * Created by 98194 on 2019/7/8.
 */
/**
 * Created with WebStorm && Sublime Text 3
 * Date: 2015/10/29 14:04
 */
window.onload = function() {
   map.plugin(["AMap.ToolBar"], function() {
      map.addControl(new AMap.ToolBar());
   });
   if(location.href.indexOf('&guide=1')!==-1){
      map.setStatus({scrollWheel:false})
   }
}