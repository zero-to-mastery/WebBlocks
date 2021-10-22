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
        <form action="/" method="GET" role="search">
        <div class="rounded-container">
          <div class="input-container">
            <div class="icon-container">
              <span class="icon"></span>
            </div>
            <label htmlFor="search-box">Search</label>
            <input
              placeholder="Enter your search"
              type="text"
              name="search-box"
              id="search-box"
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
