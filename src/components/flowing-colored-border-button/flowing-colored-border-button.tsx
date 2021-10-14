import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'flowing-colored-border-button',
  styleUrl: 'flowing-colored-border-button.css',
  shadow: true,
})
export class FlowingColoredBorderButton {
  render() {
    return (
      <Host>
        <div class="outer-container">
          <div class="inner-container">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
