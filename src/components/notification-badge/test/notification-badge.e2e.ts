import { newE2EPage } from '@stencil/core/testing';

describe('notification-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<notification-badge></notification-badge>');

    const element = await page.find('notification-badge');
    expect(element).toHaveClass('hydrated');
  });
});
