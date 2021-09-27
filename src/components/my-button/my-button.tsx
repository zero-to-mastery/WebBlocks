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

  render() {
    switch (this.typeButtton) {
      case 'primary':
        return (
          <Host>
            <button class="btn btn-primary" style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      case 'warning':
        return (
          <Host>
            <button class="btn btn-warning" style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      case 'black':
        return (
          <Host>
            <button class="btn btn-black" style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
      default:
        return (
          <Host>
            <button class="btn btn-default" style={{ width: this.width, height: 'auto' }} name={this.name} type={this.type}></button>
          </Host>
        );
    }
  }
}
