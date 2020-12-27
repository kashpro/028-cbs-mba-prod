import $ from "jquery";
import slick from "slick-carousel";

export default () => {
  const feedbackSlider = $(".js-feedback-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    accessibility: false,
    prevArrow: $(".js-feedback-prev"),
    nextArrow: $(".js-feedback-next"),
    dotsClass: 'feedback__dots-list',						      // как обозвать класс списка точек
    appendDots: $('.js-feedback-dots'),					      // куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {               // что вставить в каждый элемент списка точек (HTML-код)
      const $thumb = $(slider.$slides[i]).find(".feedback__image1 img").clone();
      $thumb.addClass("feedback__thumb");
        return $thumb;
    },
    infinite: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: "unslick",
      },
      {
        breakpoint: 1366,
        settings: {},
      },
    ],
  });
}