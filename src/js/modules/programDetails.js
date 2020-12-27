import $ from "jquery";

export default () => {
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
}