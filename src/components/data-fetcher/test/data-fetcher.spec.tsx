import { newSpecPage } from '@stencil/core/testing';
import { DataFetcher } from '../data-fetcher';

describe('data-fetcher', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DataFetcher],
      html: `<data-fetcher></data-fetcher>`,
    });
    expect(page.root).toEqualHtml(`
      <data-fetcher>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </data-fetcher>
    `);
  });
});
