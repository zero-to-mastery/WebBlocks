import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The text color
   */
  @Prop() color: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private returnJsx() {
    const shouldChangeColor = this.color !== undefined;

    return shouldChangeColor ? <h1 style={{ '--text-color': `${this.color}` }}>Hello, World! I'm {this.getText()}</h1> : <h1>Hello, World! I'm {this.getText()}</h1>;
  }

  render() {
    return this.returnJsx();
  }
}
