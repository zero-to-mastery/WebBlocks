import { newE2EPage } from '@stencil/core/testing';

describe('text-style', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-style></text-style>');

    const element = await page.find('text-style');
    expect(element).toHaveClass('hydrated');
  });
});
