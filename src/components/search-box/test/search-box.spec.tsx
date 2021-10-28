import { newSpecPage } from '@stencil/core/testing';
import { SearchBox } from '../search-box';

describe('search-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchBox],
      html: `<search-box></search-box>`,
    });
    expect(page.root).toEqualHtml(`
      <search-box>
        <mock:shadow-root>
        <form action="/" class="md" method="GET" role="search">
        <div class="container rounded">
          <div class="input-container">
            <div class="icon-container">
              <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </div>
            <input
              placeholder=""
              type="text"
              name="search-box"
              maxLength="2048"
              autocomplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              role="search"
              spellcheck="false"
              title="Search Box"
              value=""
            />
          </div>
        </div>
      </form>
        </mock:shadow-root>
      </search-box>
    `);
  });
});
