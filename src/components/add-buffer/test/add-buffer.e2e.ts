import { newE2EPage } from '@stencil/core/testing';

describe('add-buffer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<add-buffer></add-buffer>');

    const element = await page.find('add-buffer');
    expect(element).toHaveClass('hydrated');
  });
});
