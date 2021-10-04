import { newSpecPage } from '@stencil/core/testing';
import { AvatarComponent } from './avatar-component';

describe('avatar-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvatarComponent],
      html: `<avatar-component></avatar-component>`,
    });
    expect(page.root).toEqualHtml(`
      <avatar-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avatar-component>
    `);
  });
});
