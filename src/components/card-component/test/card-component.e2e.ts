import { newE2EPage } from '@stencil/core/testing';

describe('card-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-component></card-component>');

    const element = await page.find('card-component');
    expect(element).toHaveClass('hydrated');
  });
});
