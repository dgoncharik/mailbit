$(function(){

  $("#phone").mask("+1 (999) 999-99-99"); /* Маска для ввода телефона в форму */

  new Modal(  document.querySelector('.modal'), 
                    '.modal__window',
                     document.querySelector('.promo__btn'), 
                     '.modal__close',
                     'modal--show');
});