import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
})
export class MyInput {
  @Prop() size: string;
  @Prop() placeholder: string;
  @Prop() defaultValue: string;
  @Prop() bordered: boolean;
  @Prop() disabled: boolean;

  render() {
    const height = this.size ? (this.size === 'small' ? '20px' : '40px') : '30px';

    return (
      <Host>
        <input
          type="text"
          defaultValue={this.defaultValue}
          placeholder={this.placeholder}
          disabled={this.disabled || false}
          style={{ height, 'outline': 'none', 'border': 'none', 'background': 'lightgray', 'border-radius': ' 4px' }}
        />
      </Host>
    );
  }
}
