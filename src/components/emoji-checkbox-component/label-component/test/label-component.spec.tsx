import { newSpecPage } from '@stencil/core/testing';
import { LabelComponent } from '../label-component';

describe('label-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LabelComponent],
      html: `<label-component>Hello World!</label-component>`,
    });
    expect(page.root).toEqualHtml(`
      <label-component>
        <mock:shadow-root>
          <label>
            <slot></slot>
          </label>
        </mock:shadow-root>
        Hello World!
      </label-component>
    `);
  });
});
