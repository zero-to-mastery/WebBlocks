import { newSpecPage } from '@stencil/core/testing';
import { ToastNotify } from '../toast-notify';

describe('toast-notify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToastNotify],
      html: `<toast-notify></toast-notify>`,
    });
    expect(page.root).toEqualHtml(`
      <toast-notify>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </toast-notify>
    `);
  });
});
