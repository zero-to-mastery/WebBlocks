import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-component',
  shadow: true,
})
export class ImageComponent {
  @Prop() srcDirJpg: string;
  @Prop() srcDirWebp: string;
  @Prop() srcImgName: string;

  render() {
    return (
      <Host>
        <picture>
          <source srcSet={this.srcDirWebp} type="image/webp" />
          <source srcSet={this.srcDirJpg} type="image/jpeg" />
          <img src={this.srcDirJpg} alt={this.srcImgName} />
        </picture>
      </Host>
    );
  }
}
