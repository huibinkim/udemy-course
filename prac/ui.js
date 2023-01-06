$(function(){
  var firstmenu = $('nav > ul > li'),
      header = $('header');
   firstmenu.mouseenter(function(){
      header.stop().animate({height:'300px'},200);
   })
   .mouseleave(function(){
       header.stop().animate({height:'50px'},200);
   })
   
   
});