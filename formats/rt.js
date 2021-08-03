import Inline from '../blots/inline';

class Rt extends Inline {
  static create(value) {
    const node = super.create(value);
    return node;
  }
}
Rt.blotName = 'rt';
Rt.tagName = 'RT';

export { Rt as default };
