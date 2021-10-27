import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  // shadow: true,
})
export class CardComponent {
  @Prop() imageURL: string;
  @Prop() cardtitle: string;
  @Prop() text: string;
  @Prop() price: string;

  render() {
    return (
      <Host>
        <div class={this.price ? 'card product' : 'card'}>
          <div class="img_container">
            <img src={this.imageURL ?? 'https://source.unsplash.com/random'} alt="random image" />
          </div>
          <div class="card_body">
            <h3>{this.cardtitle}</h3>
            {this.price ? <p>{this.price}</p> : <p>{this.text}</p>}
          </div>
        </div>
      </Host>
    );
  }
}
