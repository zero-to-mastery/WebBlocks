import { newE2EPage } from '@stencil/core/testing';

describe('hero-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hero-component></hero-component>');

    const element = await page.find('hero-component');
    expect(element).toHaveClass('hydrated');
  });
});
