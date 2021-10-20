import { newSpecPage } from '@stencil/core/testing';
import { NotificationBadge } from '../notification-badge';

describe('notification-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NotificationBadge],
      html: `<notification-badge></notification-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <notification-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </notification-badge>
    `);
  });
});
