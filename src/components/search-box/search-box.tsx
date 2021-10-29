// todo: refactor code
// todo: add click on search icon then make search request function
// bug: autocomple does not update when deleting a pre-existing search string

import { Component, h, Prop, State, Watch } from '@stencil/core';

// this data is just a bunch of english words
import mockData from './data.json';

@Component({
  tag: 'search-box',
  styleUrl: 'search-box.css',
  shadow: true,
})
export class SearchBox {
  @Prop() queryURL: string = '/';
  @Prop() method: string = 'GET';
  @Prop() maxLength: number = 2048;
  @Prop() autocomplete: boolean = true;
  @Prop() placeholder: string = '';
  @Prop() rectangle: boolean = false;
  @Prop() dark: boolean = false;
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @State() query: string = '';
  @State() searchResult: string[] = [];
  @State() showSuggestions: boolean = false;

  /**
   * this state determines if the search box will have a
   */
  @State() active: boolean = false;

  timer: any = null; // not sure what the return type is when setTimeout is called in the browser

  newQuery: string = '';

  // in some cases where there were many hits of a search
  // then we want to break the results into parts
  // and display them when the user presses load more
  // searchResultParts: Array<string[]> = [];

  @Watch('query')
  debounceSearch(value: string) {
    // we do not want to do any autocomplete search
    // if the feature is disabled
    if (!this.autocomplete) return;

    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.newQuery = value;

    this.timer = setTimeout(() => {
      if ((this.newQuery = this.query)) {
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
    this.showSuggestions = matches.length > 0;
  }

  updateQueryState(e: Event) {
    this.query = (e.target as HTMLInputElement).value;
  }

  onFocusIn() {
    this.active = true;
  }

  onFocusOut() {
    this.active = false;
  }

  clearSuggestions() {
    this.searchResult = []; // clear the suggestions
    this.query = ''; // clear the input text
    this.showSuggestions = false; // close the suggestions box
  }

  render() {
    return (
      <form action={this.queryURL} method={this.method} role="search" class={`${this.size} ${this.dark ? 'dark' : 'light'}`}>
        <div
          class={`container ${this.rectangle ? 'rectangle' : 'rounded'} ${this.active || this.showSuggestions ? 'active' : ''} ${
            this.showSuggestions ? 'remove-bottom-radius' : ''
          }`}
        >
          <div class="icon-container">
            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div class="input-container">
            <input
              placeholder={this.placeholder}
              type="text"
              name="search-box"
              maxLength={this.maxLength}
              autocomplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              role="search"
              spellcheck="false"
              title="Search Box"
              value={this.query}
              onInput={this.updateQueryState.bind(this)}
              onFocusin={this.onFocusIn.bind(this)}
              onFocusout={this.onFocusOut.bind(this)}
            />
          </div>
          {this.showSuggestions && (
            <div class="icon-container" onClick={this.clearSuggestions.bind(this)}>
              <svg class="cancel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          )}
        </div>
        {/**
         * the suggestions container can be an independent component
         */}
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
    );
  }
}
