import { Component, Host, h, Prop, State, Watch } from '@stencil/core';

// this data is just a bunch of english words
import mockData from './data.json';

@Component({
  tag: 'search-box',
  styleUrl: 'search-box.css',
  shadow: true,
})
export class SearchBox {
  @Prop() width: string = '90%';
  @Prop() height: string = '44px';
  @Prop() queryURL: string = '/';
  @Prop() method: string = 'GET';
  @Prop() maxLength: number = 2048;
  @Prop() autocomplete: boolean = true;
  @Prop() placeholder: string = 'Enter your search';

  @State() query: string = '';
  @State() searchResult: string[] = [];

  timer: any = null; // not sure what the return type is when setTimeout is called in the browser

  @Watch('query')
  debounceSearch(newQuery: string) {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      if ((newQuery = this.query)) {
        this.search(this.query);
      }
    }, 500);
  }

  search(query: string) {
    // todo: make get request for real data
    let regex = new RegExp(query);

    let matches: string[] = [];
    for (let term in mockData) {
      if (regex.test(term)) {
        matches.push(term);
      }
    }

    this.searchResult = matches;
  }

  updateQueryState(e: Event) {
    this.query = (e.target as HTMLInputElement).value;
  }

  render() {
    return (
      <Host>
        <form action={this.queryURL} method={this.method} role="search">
          <div class="rounded-container">
            <div class="input-container">
              <div class="icon-container">
                <span class="icon"></span>
              </div>
              <label htmlFor="search-box">Search</label>
              <input
                placeholder={this.placeholder}
                type="text"
                name="search-box"
                id="search-box"
                maxLength={this.maxLength}
                autocomplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                role="search"
                spellcheck="false"
                title="Search Box"
                value={this.query}
                onInput={this.updateQueryState.bind(this)}
              />
            </div>
          </div>
          {this.searchResult.length > 0 && <div class="line"></div>}
          {this.searchResult.length > 0 ? (
            <div class="suggestions">
              <ul>
                {this.searchResult.map(r => (
                  <li>{r}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </form>
      </Host>
    );
  }
}
