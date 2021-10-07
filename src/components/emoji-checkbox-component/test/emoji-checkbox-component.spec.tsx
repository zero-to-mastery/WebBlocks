import { newSpecPage } from '@stencil/core/testing';
import { EmojiCheckboxComponent } from '../emoji-checkbox-component';

describe('emoji-checkbox-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EmojiCheckboxComponent],
      html: `<emoji-checkbox-component></emoji-checkbox-component>`,
    });
    expect(page.root).toEqualHtml(`
      <emoji-checkbox-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </emoji-checkbox-component>
    `);
  });
});
