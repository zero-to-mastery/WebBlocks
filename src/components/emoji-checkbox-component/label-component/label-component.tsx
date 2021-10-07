import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'label-component',
  styleUrl: 'label-component.css',
  shadow: true,
})
export class LabelComponent {
  /**
   * Checkbox state
   */
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
