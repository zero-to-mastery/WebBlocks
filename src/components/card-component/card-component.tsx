import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  // shadow: true,
})
export class CardComponent {
  @Prop() imageURL: string;
  @Prop() title: string;
  @Prop() text: string;

  render() {
    return (
      <Host>
        <div class="card">
          <div class="img_container">
            <img src={this.imageURL ?? 'https://source.unsplash.com/random'} alt="random image" />
          </div>
          <div class="card_body">
            <h3>{this.title}</h3>
            <p>{this.text}</p>
          </div>
        </div>
      </Host>
    );
  }
}
