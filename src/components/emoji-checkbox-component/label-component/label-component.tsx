import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'label-component',
  styleUrl: 'label-component.css',
  shadow: true,
})
export class LabelComponent {
  @Prop() checked: boolean = false;

  render() {
    return (
      <Host>
        <label>
          <slot />
        </label>
      </Host>
    );
  }
}
