$(function () {
  $('.photo-slider').slick({
    fade: true,
    prevArrow:  '<button type="button" class="slick-prev"><img src="./images/Arrow-left.svg" alt=""></button>'    ,
    nextArrow:  '<button type="button" class="slick-next"><img src="./images/Arrow-right.svg" alt=""></button>'    ,
    
  })

  $('.menu__btn').on('click', function(){
$('.menu__list').slideToggle()
  })
})
