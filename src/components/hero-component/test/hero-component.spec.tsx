import { newSpecPage } from '@stencil/core/testing';
import { HeroComponent } from '../hero-component';

describe('hero-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeroComponent],
      html: `<hero-component></hero-component>`,
    });
    expect(page.root).toEqualHtml(`
      <hero-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hero-component>
    `);
  });
});
