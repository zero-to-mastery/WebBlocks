import { newE2EPage } from '@stencil/core/testing';

describe('avatar-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avatar-component></avatar-component>');

    const element = await page.find('avatar-component');
    expect(element).toHaveClass('hydrated');
  });
});
