import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'add-buffer',
  styleUrl: 'add-buffer.css',
  shadow: true,
})
export class AddBuffer {
  @Prop() bufferness: Number = 10;
  @Prop() type: string;
  render() {
    if (this.type === 'margin') {
      return (
        <Host>
          <div style={{ margin: `${this.bufferness}px` }}></div>
        </Host>
      );
    } else {
      return (
        <Host>
          <div style={{ padding: `${this.bufferness}px` }}></div>
        </Host>
      );
    }
  }
}
