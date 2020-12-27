import $ from "jquery";
import slick from "slick-carousel";

export default () => {
  const reasonsSlider = $(".js-reasons-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    prevArrow: $(".js-reasons-prev"),
    nextArrow: $(".js-reasons-next"),
    dotsClass: 'reasons__dots-list',						      // как обозвать класс списка точек
    appendDots: $('.js-reasons-dots'),					      // куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {return '';},		// что вставить в каждый элемент списка точек (HTML-код)
    infinite: true,
  });
}