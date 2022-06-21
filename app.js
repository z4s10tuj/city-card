var barcode = {
  value: localStorage.getItem('cityBonusCode'),

  get formattedBarcode() {
    return this.value.startsWith('BO') ? this.value.slice(2,8) : this.value;
  },

  init() {
    if (this.value) {
      this.draw();
    } else {
      this.update();
    }
  },

  draw() {
    JsBarcode("#barcode", this.value, {
      text: this.formattedBarcode,
      textMargin: 15
    });
  },

  update() {
    localStorage.setItem('cityBonusCode',
      this.value = prompt('Yerevan City Bonus Card code:') || 'ABCDEFG'
    );
    this.draw();
  }
};

['touchend', 'click'].forEach(eventName =>
  window.addEventListener(eventName, ({ target }) => {
    if (target.matches('[text-anchor]')) {
      barcode.update();
    }
  })
);

barcode.init();
