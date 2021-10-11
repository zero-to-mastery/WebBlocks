import { newE2EPage } from '@stencil/core/testing';

describe('data-fetcher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<data-fetcher></data-fetcher>');

    const element = await page.find('data-fetcher');
    expect(element).toHaveClass('hydrated');
  });
});
