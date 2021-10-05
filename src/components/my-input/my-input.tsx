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
  @Prop() pattern: string;

  onInputChange(target) {
    const regex = new RegExp(this.pattern, 'i');
    const inputValue = target.value;

    if (regex.test(inputValue)) {
      alert('Input match!');
    } else {
      alert('Input not match!');
    }
  }

  render() {
    const height = this.size ? (this.size === 'small' ? '20px' : '40px') : '30px';

    return (
      <Host>
        <input
          type="text"
          defaultValue={this.defaultValue}
          placeholder={this.placeholder}
          disabled={this.disabled || false}
          pattern={this.pattern}
          style={{ height, 'outline': 'none', 'border': 'none', 'background': 'lightgray', 'border-radius': ' 4px', 'padding': '2px 10px' }}
          onChange={e => this.onInputChange(e.target)}
        />
      </Host>
    );
  }
}
