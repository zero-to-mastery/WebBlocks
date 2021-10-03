import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'tooltip-component',
  styleUrl: 'tooltip-component.css',
  shadow: true,
})
export class TooltipComponent {
  /**
   * Text to be displayed in the tooltip
   */
  @Prop() text: string;
  /**
   * Position of tooltip. left, right, top, bottom
   */
  @Prop() position: string = 'top';
  /**
   * Font size
   */
  @Prop() fontSize: string = 'inherit';
  /**
   * Background color
   */
  @Prop() backgroundColor: string = 'black';
  /**
   * Text color
   */
  @Prop() color: string = 'white';

  private styleUse = { 'color': this.color, 'font-size': this.fontSize };
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.element.style.setProperty('--tooltip-background-color', this.backgroundColor);
  }

  render() {
    return (
      <Host>
        <slot />
        <span role="Tooltip" style={this.styleUse} class={`tooltiptext ${this.position}`}>
          {this.text}
        </span>
      </Host>
    );
  }
}
