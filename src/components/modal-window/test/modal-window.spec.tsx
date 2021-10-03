import { newSpecPage } from '@stencil/core/testing';
import { ModalWindow } from '../modal-window';

describe('modal-window', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalWindow],
      html: `<modal-window></modal-window>`,
    });
    expect(page.root).toEqualHtml(`
      <modal-window>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </modal-window>
    `);
  });
});
