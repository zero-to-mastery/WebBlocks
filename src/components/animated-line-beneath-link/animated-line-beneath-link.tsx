import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'animated-line-beneath-link',
  styleUrl: 'animated-line-beneath-link.css',
  scoped: true,
})
export class AnimatedLineBeneathLink {
  @Prop() text: string;

  render() {
    const html = (
      <Host>
        <div class="container">
          <a class="text">{this.text}</a>
        </div>
        
      </Host>
    );
    return html;
  }
}
