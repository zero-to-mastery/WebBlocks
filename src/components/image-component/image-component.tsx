import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-component',
  styleUrl: 'image-component.css',
  shadow: true,
})
export class ImageComponent {
  @Prop() srcImg: string;
  @Prop() srcNextGen: string;
  @Prop() srcImgName: string;

  render() {
    return (
      <Host>
        <picture>
          <source srcSet={this.srcNextGen} />
          <source srcSet={this.srcImg} type="image" />
          <img src={this.srcImg} alt={this.srcImgName} />
        </picture>
      </Host>
    );
  }
}
