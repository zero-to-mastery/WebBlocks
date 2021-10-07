import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'emoji-checkbox-component',
  styleUrl: 'emoji-checkbox-component.css',
  shadow: true,
})
export class EmojiCheckboxComponent {
  /**
   * The initial state of checkbox
   */
  @Prop({ mutable: true }) checked: boolean = false;
  /**
   * Checkbox name
   */
  @Prop() name: string;
  /**
   * Root element
   */
  @Element() el: HTMLElement;

  /**
   * Pass state to child components
   */
  passStateToChildren() {
    this.el.childNodes.forEach(element => {
      element['checked'] = this.checked;
    });
  }

  /**
   * Toggle the checkbox,
   * and pass the new state to child components
   */
  handleClick = () => {
    this.checked = !this.checked;
    this.passStateToChildren();
  };

  componentWillLoad() {
    // pass state to children on mount
    this.passStateToChildren();
  }

  render() {
    return (
      <Host onClick={this.handleClick}>
        <slot />
      </Host>
    );
  }
}
