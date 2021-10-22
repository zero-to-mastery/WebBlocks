import { newE2EPage } from '@stencil/core/testing';

describe('hamburger-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hamburger-menu></hamburger-menu>');

    const element = await page.find('hamburger-menu');
    expect(element).toHaveClass('hydrated');
  });
});
