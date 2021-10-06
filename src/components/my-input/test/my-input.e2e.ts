import { newE2EPage } from '@stencil/core/testing';

describe('my-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-input></my-input>');

    const element = await page.find('my-input');
    expect(element).toHaveClass('hydrated');
  });
});
