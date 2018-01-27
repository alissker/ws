$('.project-gallery').hide();

$('.gallery-link').click(function() {
  hide_projects();

  $($(this).attr('target')).fadeIn();
  $($(this).attr('target')).addClass('active-gallery');

  $($(this).attr('target')).slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="slider-prev slider-nav"><svg><use xlink:href="/assets/sprite.svg#chevron-left" /></svg>',
    nextArrow: '<button class="slider-next slider-nav"><svg><use xlink:href="/assets/sprite.svg#chevron-right" /></svg>'
  });
});

$('.tour-link').click(function() {
  hide_projects();

  $($(this).attr('target')).fadeIn();
  $($(this).attr('target')).addClass('active-tour');

  resizeVideos();
});

function hide_projects() {
  $('.active-gallery').fadeOut();
  $('.active-gallery').slick('unslick');
  $('.active-gallery').removeClass('active-gallery');
  $('.active-tour').fadeOut();
  $('.active-tour').removeClass('active-tour');
}
