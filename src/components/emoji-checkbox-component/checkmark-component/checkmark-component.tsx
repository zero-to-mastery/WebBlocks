import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'checkmark-component',
  styleUrl: 'checkmark-component.css',
  shadow: true,
})
export class CheckmarkComponent {
  /**
   * Checked state emoji HEX code
   */
  @Prop() checkTrue: string;
  /**
   * Un-checked state emoji HEX code
   */
  @Prop() checkFalse: string;
  /**
   * Checkbox state
   */
  @Prop() checked: boolean = false;
  /**
   * Root element
   */
  @Element() el: HTMLElement;

  componentDidLoad() {
    // set emoji codes as css custom properties
    this.el.style.setProperty('--checkTrue', `"\\${this.checkTrue}"`);
    this.el.style.setProperty('--checkFalse', `"\\${this.checkFalse}"`);
  }

  render() {
    return (
      <Host>
        <span class={this.checked ? 'check-true' : 'check-false'} />
      </Host>
    );
  }
}
