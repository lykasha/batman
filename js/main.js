$(document).ready(function () {
  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function (event) {
    event.preventDefault(); // отменяет стандартное действие - ссылка при клике
    let activeContent = $(this).attr('href')
    $('.visible').toggleClass('visible');//убирать класс visible там, где он был
    $(activeContent).toggleClass('visible');//ставить класс visible при клике на таб
    $('.tabs-item-active').toggleClass('tabs-item-active');//выключать цвет на табе
    $(this).toggleClass('tabs-item-active');//включать там, где кликнули
  });
});         