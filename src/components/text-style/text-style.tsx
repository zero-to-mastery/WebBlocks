import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'text-style',
  styleUrl: 'text-style.css',
  shadow: true,
})
export class TextStyle {
  @Prop() className: string;
  @Prop() bold: string;
  @Prop() italic: string;
  @Prop() fontWeight: string;

  render() {
    if (this.bold === 'true') {
      switch (this.fontWeight) {
        case '1':
          return (
            <Host>
              <div class={`boldCustom font-weight-1 ${this.className}`}></div>
            </Host>
          );
        case '2':
          return (
            <Host>
              <div class={`boldCustom font-weight-2 ${this.className}`}></div>
            </Host>
          );
        case '3':
          return (
            <Host>
              <div class={`boldCustom font-weight-3 ${this.className}`}></div>
            </Host>
          );
        case '4':
          return (
            <Host>
              <div class={`boldCustom font-weight-4 ${this.className}`}></div>
            </Host>
          );
        case '5':
          return (
            <Host>
              <div class={`boldCustom font-weight-5 ${this.className}`}></div>
            </Host>
          );
        case 'max':
          return (
            <Host>
              <div class={`boldCustom font-weight-max ${this.className}`}></div>
            </Host>
          );
        default:
          return (
            <Host>
              <div class={`boldCustom ${this.className}`}></div>
            </Host>
          );
      }
    } else if (this.italic === 'true') {
      switch (this.fontWeight) {
        case '1':
          return (
            <Host>
              <div class={`iCustom font-weight-1 ${this.className}`}></div>
            </Host>
          );
        case '2':
          return (
            <Host>
              <div class={`iCustom font-weight-2 ${this.className}`}></div>
            </Host>
          );
        case '3':
          return (
            <Host>
              <div class={`iCustom font-weight-3 ${this.className}`}></div>
            </Host>
          );
        case '4':
          return (
            <Host>
              <div class={`iCustom font-weight-4 ${this.className}`}></div>
            </Host>
          );
        case '5':
          return (
            <Host>
              <div class={`iCustom font-weight-5 ${this.className}`}></div>
            </Host>
          );
        case 'max':
          return (
            <Host>
              <div class={`boldCustom font-weight-max ${this.className}`}></div>
            </Host>
          );
        default:
          return (
            <Host>
              <div class={`iCustom ${this.className}`}></div>
            </Host>
          );
      }
    } else {
      <Host>
        <div class={`${this.className}`}></div>
      </Host>;
    }
  }
}
