import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'checkmark-component',
  styleUrl: 'checkmark-component.css',
  shadow: true,
})
export class CheckmarkComponent {
  @Prop() checkTrue: string;
  @Prop() checkFalse: string;
  @Prop() checked: boolean = false;
  @Element() el: HTMLElement;

  componentDidLoad() {
    this.el.style.setProperty('--checkTrue', `"${this.checkTrue}"`);
    this.el.style.setProperty('--checkFalse', `"${this.checkFalse}"`);
  }

  render() {
    return (
      <Host>
        <span class={this.checked ? 'check-true' : 'check-false'} />
      </Host>
    );
  }
}
