import { newSpecPage } from '@stencil/core/testing';
import { AddBuffer } from '../add-buffer';

describe('add-buffer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AddBuffer],
      html: `<add-buffer></add-buffer>`,
    });
    expect(page.root).toEqualHtml(`
      <add-buffer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </add-buffer>
    `);
  });
});
