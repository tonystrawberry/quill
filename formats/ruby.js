import Inline from '../blots/inline';

class Ruby extends Inline {
  static create(value) {
    const node = super.create(value);
    node.innerHTML = `${node.textContent}<rt>${value}</rt>`;
    return node;
  }

  static formats() {
    return true;
  }
}
Ruby.blotName = 'ruby';
Ruby.tagName = 'RUBY';

export { Ruby as default };
