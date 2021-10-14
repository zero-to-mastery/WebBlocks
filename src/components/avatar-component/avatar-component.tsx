import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'avatar-component',
  styleUrl: 'avatar-component.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AvatarComponent {
  /**
   * Alternate text when src image breaks
   * @type {string}
   * @memberof AvatarComponent
   */
  @Prop() alt: string;

  /**
   * Image source url
   * @type {string}
   * @memberof AvatarComponent
   */
  @Prop() src: string;

  /**
   * Custom class for the image
   * @type {string}
   * @memberof AvatarComponent
   */
  @Prop() customClass: string;

  /**
   * Show title of the image on hover
   * @type {string}
   * @memberof AvatarComponent
   */
  @Prop() tooltipTxt: string;

  /**
   * Avatar image size
   * @type {('small' | 'medium' | 'large')}
   * @memberof AvatarComponent
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Avatar image shape variants
   *
   * @type {('circular' | 'rounded' | 'square')}
   * @memberof AvatarComponent
   */
  @Prop() variant: 'circular' | 'rounded' | 'square' = 'rounded';

  render() {
    const customClass = `avatar${this.customClass ? ' ' + this.customClass : ''} ${this.size} ${this.variant}`;
    const avatar =
      this.src || (!this.src && !this.alt) ? (
        <img class={customClass} src={this.src ?? 'assets/img/user_fallback_img.svg'} alt={this.alt} title={this.tooltipTxt} />
      ) : (
        <div class={`${customClass} initials-text default-color`} title={this.tooltipTxt}>
          {this.alt[0].toUpperCase()}
        </div>
      );
    return <Host>{avatar}</Host>;
  }
}
