import Inline from '../blots/inline';

class Ruby extends Inline {
  static create(value) {
    const node = super.create(value);
    return node;
  }

  static formats(domNode) {
    const rts = domNode.getElementsByTagName('rt');

    if (rts && rts.length > 0) {
      return rts[0].innerHTML;
    }
    return '';
  }

  format(name, value) {
    console.log('format', name, value);
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      this.domNode.innerHTML += `<rt>${value}</rt>`;
    }
  }
}

Ruby.blotName = 'ruby';
Ruby.tagName = 'RUBY';

export { Ruby as default };
