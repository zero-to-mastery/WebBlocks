import { newSpecPage } from '@stencil/core/testing';
import { HamburgerMenu } from '../hamburger-menu';

describe('hamburger-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HamburgerMenu],
      html: `<hamburger-menu></hamburger-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <hamburger-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hamburger-menu>
    `);
  });
});
