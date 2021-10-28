import { newSpecPage } from '@stencil/core/testing';
import { TextStyle } from '../text-style';

describe('text-style', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextStyle],
      html: `<text-style></text-style>`,
    });
    expect(page.root).toEqualHtml(`
      <text-style>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-style>
    `);
  });
});
