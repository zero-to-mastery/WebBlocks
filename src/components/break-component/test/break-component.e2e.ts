import { newE2EPage } from '@stencil/core/testing';

describe('break-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<break-component></break-component>');

    const element = await page.find('break-component');
    expect(element).toHaveClass('hydrated');
  });
});
