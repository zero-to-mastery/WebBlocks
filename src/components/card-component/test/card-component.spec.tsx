import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from '../card-component';

describe('card-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardComponent],
      html: `<card-component></card-component>`,
    });
    expect(page.root).toEqualHtml(`
      <card-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-component>
    `);
  });
});
