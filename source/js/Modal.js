class Modal {
  constructor(element, mainWindow, openBtn, closeBtn, htmlClassShow) {
    this.element = element;
    this.openBtn = openBtn;
    this.htmlClassShow = htmlClassShow;
    this.closeBtn = element.querySelector(closeBtn);
    this.mainWindow = element.querySelector(mainWindow);
    this._addListeners();
  }

  _modalIsOpened() {
    return this.element.classList.contains(this.htmlClassShow);
  }

  _showModal() {
    this.element.classList.add('modal--show');
  }

  _hideModal() {
    this.element.classList.remove('modal--show');
  }
  
  _addListeners() {
    this.openBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._showModal();
    });

    this.closeBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._hideModal();
    })

    this.element.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget && evt.which == 1) this._hideModal();
    })

    window.addEventListener('keydown', (evt) => {
      if (this._modalIsOpened() && evt.keyCode === 27) {
        this._hideModal();
      }
    })
  }
}