import { Component, h, Prop, Element, State } from '@stencil/core';
import { iconsList } from './icons-list';

@Component({
  tag: 'icon-component',
  styleUrl: 'icon-component.css',
  shadow: true,
})
export class IconComponent {
  @Element() el: HTMLElement;
  // State variable for indicating if svg for component is loaded
  @State() isLoaded: boolean = false;
  // Properties
  @Prop() label: string = '';
  @Prop() name: string = '';
  @Prop() size: string = 's';
  @Prop() background: string = 'none';
  @Prop() bordercolor: string = '';
  @Prop() bordersize: string = '';
  @Prop() bordertype: string = 'none';
  @Prop() primarycolor: string = '#000';
  @Prop() hovercolorbg: string = '';
  @Prop() hovercolorprimary: string = '';
  @Prop() tooltip: string = 'no';
  @Prop() tooltippos: string = 'top';

  // To load the svg after initial render
  componentDidLoad() {
    // Condition to avoid rerender the component
    if (!this.isLoaded) {
      const icon = this.el.shadowRoot.querySelector('.icon');
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const iconDetails = iconsList[this.name];
      for (let values of Object.entries(iconDetails.svg)) {
        svg.setAttribute(values[0], String(values[1]));
      }
      for (let values of Object.entries(iconDetails.path)) {
        path.setAttribute(values[0], String(values[1]));
      }
      svg.appendChild(path);
      icon.appendChild(svg);
      this.isLoaded = true;
    }
  }

  render() {
    // Object with necessary stylings
    const buttonStyle = {
      'backgroundColor': `${this.background}`,
      'color': `${this.primarycolor}`,
      'border': this.bordersize && this.bordercolor ? `${this.bordersize} solid ${this.bordercolor}` : `none`,
      '--hovercolorbg': `${this.hovercolorbg}`,
      '--hovercolorprimary': `${this.hovercolorprimary}`,
    };
    /* If there is no label we display it as a general icon with no cursor. Else it is displayed
        as a button with a cursor
    */
    if (this.label === '') {
      if (this.tooltip === 'no' || this.tooltip === '') {
        return <span style={buttonStyle} class={`icon ${this.size} ${this.bordertype}`}></span>;
      } else {
        return (
          <div class={`tooltip ${this.tooltippos}`}>
            <span style={buttonStyle} class={`icon ${this.size} ${this.bordertype} ${this.tooltippos}`}></span>
            <p class={`${this.tooltippos}`}>{this.name}</p>
          </div>
        );
      }
    } else {
      if (this.tooltip === 'no' || this.tooltip === '') {
        return <button style={buttonStyle} class={`icon icon-btn ${this.size} ${this.bordertype}`}></button>;
      } else {
        return (
          <div class={`tooltip ${this.tooltippos}`}>
            <button style={buttonStyle} class={`icon icon-btn ${this.size} ${this.bordertype}`}></button>
            <p class={`${this.tooltippos}`}>{this.name}</p>
          </div>
        );
      }
    }
  }
}
