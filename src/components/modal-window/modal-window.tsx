import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'modal-window',
  styleUrl: 'modal-window.css',
  shadow: true,
})
export class ModalWindow {
  @Prop() title: string;
  @Prop() confirmText: string;
  @Prop() cancelText: string;
  @Prop() pointerEvents: boolean;

  render() {
    return (
      <Host>
        <div class="modal-window">
          <div class="modal-title">{this.title}</div>
          <slot></slot>
          <div class="modal-btns">
            <button class="modal-cancel-btn modal-btn">{this.cancelText}</button>
            <button class="modal-confirm-btn modal-btn">{this.confirmText}</button>
          </div>
        </div>
        <div id="overlay" style={{ 'pointer-events': this.pointerEvents ? 'all' : 'none' }}></div>
      </Host>
    );
  }
}
