import { newE2EPage } from '@stencil/core/testing';

describe('sign-in-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sign-in-form></sign-in-form>');

    const element = await page.find('sign-in-form');
    expect(element).toHaveClass('hydrated');
  });
});
