import { newSpecPage } from '@stencil/core/testing';
import { BreakComponent } from '../break-component';

describe('break-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BreakComponent],
      html: `<break-component></break-component>`,
    });
    expect(page.root).toEqualHtml(`
      <break-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </break-component>
    `);
  });
});
