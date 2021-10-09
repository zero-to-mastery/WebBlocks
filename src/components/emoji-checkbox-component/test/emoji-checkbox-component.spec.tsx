import { EmojiCheckboxComponent } from '../emoji-checkbox-component';

describe('emoji-checkbox-component', () => {
  it('should toggle the checked property', () => {
    const toggle = new EmojiCheckboxComponent();

    expect(toggle.checked).toBe(false);

    toggle.handleClick();

    expect(toggle.checked).toBe(true);
  });
});
