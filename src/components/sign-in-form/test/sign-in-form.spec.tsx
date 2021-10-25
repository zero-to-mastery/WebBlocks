import { newSpecPage } from '@stencil/core/testing';
import { SignInForm } from '../sign-in-form';

describe('sign-in-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SignInForm],
      html: `<sign-in-form></sign-in-form>`,
    });
    expect(page.root).toEqualHtml(`
      <sign-in-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sign-in-form>
    `);
  });
});
