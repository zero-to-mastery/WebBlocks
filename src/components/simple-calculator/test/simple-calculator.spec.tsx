import { newSpecPage } from '@stencil/core/testing';
import { SimpleCalculator } from '../simple-calculator';

describe('simple-calculator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleCalculator],
      html: `<simple-calculator></simple-calculator>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-calculator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-calculator>
    `);
  });
});
