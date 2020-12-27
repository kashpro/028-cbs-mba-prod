import $ from "jquery";

export default () => {
  let isOpened = false;
  let yOffset = null;
  const $speakersButton = $(".js-speakers-btn");
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

  // заполняем мобильный лист
  const $mobileSpeakersList = $(".js-speakers-mobile-list");
  $speakersFirstList.children().each( (i, item) => {
    let $cloned = $(item).clone();
    $mobileSpeakersList.append($cloned);
  } );
  $speakersSecondList.children().each( (i, item) => {
    let $cloned = $(item).clone();
    $mobileSpeakersList.append($cloned);
  } );

}