/* Development stats */
import Development from './development.js';
if (process.env.NODE_ENV === "development") {Development.addWindowStatsElement();}
/* App styles */
import "@/scss/main.scss";

import $ from "jquery";
window.jQuery = $;
require("@fancyapps/fancybox"); 
import slick from "slick-carousel";

/* program detail buttons */
{{
  const $detailButtons = document.querySelectorAll(".js-detail-btn");
  $detailButtons.forEach( (item) => {item.addEventListener("click", detailButtonClickHandler)} );

  const $programLists = document.querySelectorAll(".js-program-list");
  
  function detailButtonClickHandler(e) {
    const activeClass = "program__detail--active";
    const $target = $(e.target);
    const $detailButton = $target.closest(".js-detail-btn");
    const $programBox = $target.closest(".js-program-box");
    const $programList = $programBox.find(".js-program-list");
    if ($detailButton.hasClass(activeClass)) {
      $detailButton.removeClass(activeClass);
      $programList.slideUp(300);
    } else {
      $detailButton.addClass(activeClass);
      $programList.slideDown(300);
    }
  }
}}


// /* Show more speakers button */
{{
  let isOpened = false;
  let yOffset = null;
  const $speakersButton = $(".js-speakers-btn");
  // const $speakersBox = $(".js-speakers-box");
  const $speakersFirstList = $(".js-speakers-first-list");
  const $speakersSecondList = $(".js-speakers-second-list");
  $speakersButton.on("click", speakersButtonClickHandler);
  
  const $secondarySpeakers = document.querySelectorAll(".js-speakers-item");
  if (!$secondarySpeakers.length) {
    $speakersButton.classList.add("hide");
  }
  
  function speakersButtonClickHandler(e) {
     if (!isOpened) {
      yOffset = window.pageYOffset;
      isOpened = true;
      $speakersFirstList.addClass("speakers__list--margin");
      $speakersSecondList.slideDown(300);
      $speakersButton.text('Скрыть спикеров');
    } else {
      window.scrollTo(0, yOffset);
      isOpened = false;
      $speakersFirstList.removeClass("speakers__list--margin");
      $speakersSecondList.slideUp(300);
      $speakersButton.text('Показать больше спикеров');
    }
  }
  //заполняем мобильный лист
  const $mobileSpeakersList = $(".js-speakers-mobile-list");
  $speakersFirstList.children().each( (i, item) => {
    let $cloned = $(item).clone();
    $mobileSpeakersList.append($cloned);
  } );
  $speakersSecondList.children().each( (i, item) => {
    let $cloned = $(item).clone();
    $mobileSpeakersList.append($cloned);
  } );
}}

/* Reasons slider */
{{
  const reasonsSlider = $(".js-reasons-slider").slick({
    arrows: true,
    dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// dots: false,
		accessibility: false,
		prevArrow: $(".js-reasons-prev"),
    nextArrow: $(".js-reasons-next"),
    dotsClass: 'reasons__dots-list',						      //как обозвать класс списка точек
    appendDots: $('.js-reasons-dots'),					      //куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {return '';},		//что вставить в каждый элемент списка точек (HTML-код)
	  infinite: true,
  });
}}

/* Speakers block slider */
{{
  const speakersSlider = $(".js-speakers-slider").slick({
    arrows: true,
    dots: true,
		slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    accessibility: false,
    // centerMode: true,
		prevArrow: $(".js-speakers-prev"),
    nextArrow: $(".js-speakers-next"),
    dotsClass: 'speakers__dots-list',						      //как обозвать класс списка точек
    appendDots: $('.js-speakers-dots'),					      //куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {               //что вставить в каждый элемент списка точек (HTML-код)
      const $thumb = $(slider.$slides[i]).find(".speakers__image img").clone();
      $thumb/*.removeClass("speakers__image")*/.addClass("speakers__thumb");
      return $thumb;
    },
    // mobileFirst: true,	
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
}}

/* Feedback block slider */
{{
  const feedbackSlider = $(".js-feedback-slider").slick({
    arrows: true,
    dots: true,
		slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    accessibility: false,
		prevArrow: $(".js-feedback-prev"),
    nextArrow: $(".js-feedback-next"),
    dotsClass: 'feedback__dots-list',						      //как обозвать класс списка точек
    appendDots: $('.js-feedback-dots'),					      //куда добавить список точек (пустой контейнер)
    customPaging: function(slider, i) {               //что вставить в каждый элемент списка точек (HTML-код)
      const $thumb = $(slider.$slides[i]).find(".feedback__image1 img").clone();
      $thumb/*.removeClass("feedback__image1")*/.addClass("feedback__thumb");
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
}}

/* Countdown */
{{
  const $countdown = document.querySelector(".js-countdown");
  const targetDate = new Date($countdown.dataset.to).getTime();
  const $days = document.querySelector(".js-countdown-days");
  const $hours = document.querySelector(".js-countdown-hours");
  const $minutes = document.querySelector(".js-countdown-minutes");
  const $seconds = document.querySelector(".js-countdown-seconds");

  const $daysLabel = document.querySelector(".js-countdown-days-label");
  const $hoursLabel = document.querySelector(".js-countdown-hours-label");
  const $minutesLabel = document.querySelector(".js-countdown-minutes-label");
  const $secondsLabel = document.querySelector(".js-countdown-seconds-label");
  
  let timer = setInterval( () => {
    const now = Date.now();
    const diff = (targetDate - now)/1000;
    if (diff < 0) {
      clearInterval(timer);
      return;
    }
    let days = Math.floor(diff/3600/24);
    let hours = Math.floor(diff/3600%24);
    let minutes = Math.floor(diff/60%60);
    let seconds = Math.floor(diff%60);
    
    const daysLabel = declOfNum(days, ['День', 'Дня', 'Дней']);
    const hoursLabel = declOfNum(hours, ['Час', 'Часа', 'Часов']);
    const minutesLabel = declOfNum(minutes, ['Минута', 'Минуты', 'Минут']);
    const secondsLabel = declOfNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
    
    days = `${days}`;
    hours < 10 ? hours = `0${hours}` : hours = `${hours}`;
    minutes < 10 ? minutes = `0${minutes}` : minutes = `${minutes}`;
    seconds < 10 ? seconds = `0${seconds}` : seconds = `${seconds}`;
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = seconds;

    $daysLabel.innerHTML = daysLabel;
    $hoursLabel.innerHTML = hoursLabel;
    $minutesLabel.innerHTML = minutesLabel;
    $secondsLabel.innerHTML = secondsLabel;
  }, 1000 );

  function declOfNum(n, textForms) {  
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 == 1) { return textForms[0]; }
    return textForms[2];
  }
}}

/* fancybox */
{{
  /* закрывашки */
  $(".js-modal-close").on("click touchstart", () => {
    $.fancybox.close(true);
  })
  /* дипломы */
  $('[data-fancybox="diploms"]').fancybox({
    loop: true,
  });
  /* модалки */
  $('.js-modal-btn').fancybox({
    smallBtn: false,
    btnTpl: {
      close: "",
    }
  });
  /* видео - на атрибутах, без опций */

  /* для теста - попапы в зависимости от ответа сервера */
  const options = {
    smallBtn: false,
    btnTpl: {
      close: "",
    }
  };
  $(".js-action-btn").on("click", (e) => {
    e.preventDefault();
    const rnd = Math.random();
    if (rnd > 0.5) {
      $.fancybox.open({
        src: '#js-modal-success',
        ...options,
      });
    } else {
      $.fancybox.open({
        src: '#js-modal-error',
        ...options,
      });
    }
  });
}}
