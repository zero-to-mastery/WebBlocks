import { Component, h } from '@stencil/core';

@Component({
  tag: 'hamburger-menu',
  styleUrl: 'hamburger-menu.css',
  shadow: true,
})
export class HamburgerMenu {
  render() {
    return (
      <div>
        <input type="checkbox" id="check"></input>
        <nav id="nav-main">
          <label id="btns" htmlFor="check">
            <div>
              <svg width="1em" height="1em" id="cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ham-btns ui-svg-inline">
                <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path>
              </svg>
              <svg width="1em" height="1em" id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ham-btns ui-svg-inline">
                <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>
            </div>
          </label>

          <img src="./assets/img/logo_transparent.png" alt="Logo" width="150" height="100" />
          <ul>
            <li>
              <animated-line-beneath-link text="Home"></animated-line-beneath-link>
            </li>
            <li>
              <animated-line-beneath-link text="About"></animated-line-beneath-link>
            </li>
            <li>
              <animated-line-beneath-link text="Testimonial"></animated-line-beneath-link>
            </li>
            <li>
              <animated-line-beneath-link text="Contact Us"></animated-line-beneath-link>
            </li>
            <li>
              <animated-line-beneath-link text="Products"></animated-line-beneath-link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
