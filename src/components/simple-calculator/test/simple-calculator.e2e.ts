import { newE2EPage } from '@stencil/core/testing';

describe('simple-calculator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-calculator></simple-calculator>');

    const element = await page.find('simple-calculator');
    expect(element).toHaveClass('hydrated');
  });
});
