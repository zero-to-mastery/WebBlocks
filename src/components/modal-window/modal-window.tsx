import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

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
  @Prop() handleConfirm: Function;
  @Prop() handleCancel: Function;
  @State() isOpen: boolean = true;
  @Listen('click', { capture: true })
  onCancel() {
    if (this.handleCancel) this.handleCancel();
    this.isOpen = false;
  }

  onConfirm() {
    if (this.handleConfirm) this.handleConfirm();
    this.isOpen = false;
  }

  render() {
    if (this.isOpen)
      return (
        <Host>
          <div class="modal-window">
            <div class="modal-title">{this.title}</div>
            <slot></slot>
            <div class="modal-btns">
              <button onClick={this.onCancel} class="modal-cancel-btn modal-btn">
                {this.cancelText}
              </button>
              <button onClick={this.onConfirm} class="modal-confirm-btn modal-btn">
                {this.confirmText}
              </button>
            </div>
          </div>
          <div id="overlay" style={{ 'pointer-events': this.pointerEvents ? 'all' : 'none' }}></div>
        </Host>
      );
  }
}
