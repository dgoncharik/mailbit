;(() => {

  let toggle = document.querySelector('.burger');
  let htmlClassOpened = 'burger--opened';

  toggle.classList.remove('no-js');
  toggle.classList.remove(htmlClassOpened);

  toggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    this.classList.toggle(htmlClassOpened);
  })

})()