import $ from "jquery";
import slick from "slick-carousel";

export default () => {
  const speakersSlider = $(".js-speakers-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    accessibility: false,
    prevArrow: $(".js-speakers-prev"),
    nextArrow: $(".js-speakers-next"),
    dotsClass: 'speakers__dots-list',						      // как обозвать класс списка точек
    appendDots: $('.js-speakers-dots'),					      // куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {               // что вставить в каждый элемент списка точек (HTML-код)
      const $thumb = $(slider.$slides[i]).find(".speakers__image img").clone();
      $thumb.addClass("speakers__thumb");
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