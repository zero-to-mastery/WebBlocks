import { Component, Host, h, Prop, Element } from '@stencil/core';

//add more breakpoints here
const breakpoints = ['mobile', 'tablet', 'desktop'];

@Component({
  tag: 'hero-component',
  styleUrl: 'hero-component.css',
  shadow: true,
})
export class HeroComponent {
  @Element() el: HTMLElement;

  //props
  @Prop() width: string;
  @Prop() height: string;
  @Prop() imgurl: string;
  @Prop() heading: string;
  @Prop() background: string;

  render() {
    var widthValue = this.width.split(' ');
    var heightValue = this.height.split(' ');
    console.log(heightValue);
    console.log(widthValue);

    breakpoints.forEach((value, ind) => {
      if (widthValue[ind] !== undefined) {
        this.el.style.setProperty(`--hero-width-${value}`, widthValue[ind]);
      }
      if (heightValue[ind] !== undefined) {
        this.el.style.setProperty(`--hero-height-${value}`, heightValue[ind]);
      }
    });
    this.el.style.setProperty('background', this.background);

    return (
      <Host>
        <div class="hero">
          <div class="hero-overlay">
            <h1>{this.heading}</h1>
            <p>
              <slot></slot>
            </p>
          </div>
          <img src={this.imgurl} alt="hero-image" id="hero-image" />
        </div>
      </Host>
    );
  }
}
