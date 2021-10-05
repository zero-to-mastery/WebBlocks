import { newE2EPage } from '@stencil/core/testing';

describe('modal-window', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<modal-window></modal-window>');

    const element = await page.find('modal-window');
    expect(element).toHaveClass('hydrated');
  });
});
