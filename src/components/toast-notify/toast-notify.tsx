import { Component, h, Prop, State } from '@stencil/core';
import toastSvg from './toast-svg';

@Component({
  tag: 'toast-notify',
  styleUrl: 'toast-notify.css',
  shadow: false,
})
export class ToastNotify {
  @State() isToastOpen: boolean = true;
  @Prop() Heading: string;
  @Prop() indicationIcon: string;

  handleClose = () => {
    this.isToastOpen = false;
  };

  render() {
    const icons = toastSvg();

    const defaultIcon = 'success';

    if (this.isToastOpen) {
      return (
        <div class="toast">
          <div class={`end--div  ${this.indicationIcon ? this.indicationIcon : defaultIcon}`}></div>
          <div class="icon">{icons[this.indicationIcon ? this.indicationIcon : defaultIcon]}</div>

          <div class="toast--main">
            <h2 class="toast--heading">{this.Heading}</h2>
            <slot name="message"></slot>
          </div>

          <button class="toast--close" onClick={this.handleClose}>
            {icons.close}
          </button>
        </div>
      );
    }
  }
}
