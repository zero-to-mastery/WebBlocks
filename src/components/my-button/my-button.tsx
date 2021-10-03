import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() name: string;
  @Prop() type: string;
  @Prop() width: string;
  @Prop() typeButtton: string;
  @Prop() color: string;
  @Prop() icon: string;
  // Render stuff
  render() {
    switch (this.typeButtton) {
      case 'primary':
        return (
          <Host>
            <button color={this.color} class={`btn btn-primary ${this.icon}`} style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      case 'warning':
        return (
          <Host>
            <button color={this.color} class={`btn btn-warning ${this.icon}`} style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      case 'black':
        return (
          <Host>
            <button color={this.color} class={`btn btn-black ${this.icon}`} style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      default:
        return (
          <Host>
            <button color={this.color} class={`btn btn-default ${this.icon}`} style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
    }
  }
}
