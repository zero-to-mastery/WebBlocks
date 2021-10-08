import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { CheckmarkComponent } from '../checkmark-component';

describe('checkmark-component', () => {
  let page: SpecPage;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [CheckmarkComponent],
      html: `
        <checkmark-component></checkmark-component>
      `,
    });
  });
  it('renders', async () => {
    expect(page.root).toEqualHtml(`
      <checkmark-component>
        <mock:shadow-root>
          <slot></slot>
          <span class="check-false"></span>
        </mock:shadow-root>
      </checkmark-component>
    `);
  });
});
