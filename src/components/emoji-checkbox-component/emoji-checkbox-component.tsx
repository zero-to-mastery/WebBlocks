import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'emoji-checkbox-component',
  styleUrl: 'emoji-checkbox-component.css',
  shadow: true,
})
export class EmojiCheckboxComponent {
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() name: string;
  @Element() el: HTMLElement;

  handleClick = () => {
    this.checked = !this.checked;
    this.el.childNodes.forEach(element => {
      element['checked'] = this.checked;
    });
  };

  render() {
    return (
      <Host onClick={this.handleClick}>
        <slot />
      </Host>
    );
  }
}
