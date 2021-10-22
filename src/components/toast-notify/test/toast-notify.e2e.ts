import { newE2EPage } from '@stencil/core/testing';

describe('toast-notify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<toast-notify></toast-notify>');

    const element = await page.find('toast-notify');
    expect(element).toHaveClass('hydrated');
  });
});
