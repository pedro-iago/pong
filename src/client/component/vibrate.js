//sample code
require('aframe').registerComponent('vibrate', {
  schema: {
    dur: {
      default: 20
    },
    offset: {
      default: 0.01
    }
  },
  init: function () {
    this.animationEl = null;
  },
  update: function () {
    var anim = document.createElement('a-animation');
    var position = this.el.getAttribute('position');
    if (this.animationEl) {
      this.el.removeChild(this.animationEl);
    }
    anim.setAttribute('attribute', 'position');
    anim.setAttribute('direction', 'alternate');
    anim.setAttribute('dur', this.data.dur);
    anim.setAttribute('repeat', 'indefinite');
    anim.setAttribute('to', position.x + this.data.offset + ' ' +
                            position.y + this.data.offset +
                            position.z + this.data.offset);
    this.animationEl = anim;
  },
  remove: function () {
    if (this.animationEl) {
      this.el.removeChild(this.animationEl);
    }
  }
});
