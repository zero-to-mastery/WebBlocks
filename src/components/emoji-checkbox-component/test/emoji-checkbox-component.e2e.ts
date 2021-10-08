import { newE2EPage } from '@stencil/core/testing';

describe('emoji-checkbox-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emoji-checkbox-component></emoji-checkbox-component>');

    const element = await page.find('emoji-checkbox-component');
    expect(element).toHaveClass('hydrated');
  });
});
