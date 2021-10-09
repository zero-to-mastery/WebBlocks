import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'alert-component',
  styleUrl: 'alert-component.scss',
})
export class Alert {
  @Prop() text: string;
  @Prop() icon: string;
  @Prop() variant: string;
  @Prop() width: string;
  @Prop() action: string;

  checkVariant(variant) {
    switch (variant) {
      case 'error':
        return variant;
      case 'success':
        return variant;
      case 'warning':
        return variant;
      case 'info':
        return variant;
      case 'error-outline':
        return variant;
      case 'success-outline':
        return variant;
      case 'warning-outline':
        return variant;
      case 'info-outline':
        return variant;
      default:
        return 'success';
    }
  }

  render() {
    const errorIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
        <line x1="32" x2="32" y1="18" y2="38" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
        <line x1="32" x2="32" y1="42" y2="46" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
      </svg>
    );

    const infoIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
        <line x1="32" x2="32" y1="42" y2="46" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
        <line x1="32" x2=" 32" y1="18" y2="38" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
      </svg>
    );

    const warningIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64">
        <polygon fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" points="5 59 59 59 32 5 5 59" />
        <line x1="32" x2="32" y1="25" y2="45" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
        <line x1="32" x2="32" y1="49" y2="53" fill="none" stroke="#010101" stroke-miterlimit="10" stroke-width="4" />
      </svg>
    );

    const successIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100" viewBox="0 0 100 100">
        <path
          d="M50,5C25.19,5,5,25.19,5,50c0,24.81,20.19,45,45,45c24.81,0,45-20.19,45-45C95,25.19,74.81,5,50,5z M50,91
          C27.39,91,9,72.61,9,50S27.39,9,50,9s41,18.39,41,41S72.61,91,50,91z M72.41,34.59c0.78,0.78,0.78,2.05,0,2.83l-28,28
          C44.02,65.8,43.51,66,43,66s-1.02-0.2-1.41-0.59l-14-14c-0.78-0.78-0.78-2.05,0-2.83c0.78-0.78,2.05-0.78,2.83,0L43,61.17
          l26.59-26.59C70.37,33.8,71.63,33.8,72.41,34.59z"
        />
      </svg>
    );

    function checkIcon(icon) {
      switch (icon) {
        case 'error':
          return errorIcon;
        case 'success':
          return successIcon;
        case 'warning':
          return warningIcon;
        case 'info':
          return infoIcon;
        case 'error-outline':
          return errorIcon;
        case 'success-outline':
          return successIcon;
        case 'warning-outline':
          return warningIcon;
        case 'info-outline':
          return infoIcon;
        default:
          return successIcon;
      }
    }

    const width = this.width ? this.width : '300px';

    const alert = (
      <Host>
        <div class={`alert ${this.checkVariant(this.variant)}`} style={{ maxWidth: width }}>
          <div>
            {this.icon ? <img src={this.icon} alt="" /> : checkIcon(this.variant)}
            {this.text}
          </div>
        </div>
      </Host>
    );

    return alert;
  }
}
