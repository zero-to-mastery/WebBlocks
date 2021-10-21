import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'break-component',
  styleUrl: 'break-component.css',
  shadow: true,
})
export class BreakComponent {
  @Prop() type: string;
  render() {
    if (this.type === 'br' || this.type === 'break') {
      return (
        <Host>
          <br />
        </Host>
      );
    } else if (this.type === 'hr' || this.type === 'horizontal') {
      return (
        <Host>
          <hr />
        </Host>
      );
    }
  }
}
