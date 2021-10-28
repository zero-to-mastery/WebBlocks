import { newE2EPage } from '@stencil/core/testing';

describe('search-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<search-box></search-box>');

    const element = await page.find('search-box');
    expect(element).toHaveClass('hydrated');
  });
});
