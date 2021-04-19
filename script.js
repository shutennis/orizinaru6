$(function(){
  $('.fa-bars').click(function(){
    var $header=$('.header2-nav');
    if($header.hasClass('open')){
      $header.removeClass('open');
      $header.slideUp(500);
    }else{
      $header.addClass('open');
      $header.slideDown(500);
    }
  });

  $(window).scroll(function () {
    
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    
    $(".brand-item").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

           
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 250 * i);
        }
    });
});

$(window).scroll(function () {
    
  var scrollTop = $(this).scrollTop();
  var scrollBottom = scrollTop + $(this).height();
  var effectPos = scrollBottom - 50;
  
  
  $(".product-item").each(function (i) {
      if(effectPos > $(this).offset().top){
          var that = this;

         
          setTimeout(function () {
             $(that).addClass("fadein");
          }, 250 * i);
      }
  });
});

$('.sidebar a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;

  $('html,body').animate({
    "scrollTop":position
  },600);
});

$('.header-nav a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;

  $('html,body').animate({
    "scrollTop":position
  },600);
});

});
