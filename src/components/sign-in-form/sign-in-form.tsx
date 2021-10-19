import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sign-in-form',
  styleUrl: 'sign-in-form.css',
  shadow: true,
})
export class SignInForm {
  @Prop() className: string;
  @Prop() maxLengthEmail: number;
  @Prop() maxLengthPassword: number;
  @Prop() minLengthEmail: number;
  @Prop() minLengthPassword: number;
  render() {
    return (
      <Host>
        <div class={`${this.className}`}>
          <div class="main">
            <input minLength={this.minLengthEmail} maxLength={this.maxLengthEmail} placeholder={'Enter Your Email'} type={'email'} />
            <input minLength={this.minLengthPassword} maxLength={this.maxLengthPassword} placeholder={'Enter Your Password'} type={'password'} />
            <button class="btn">Sign In</button>
          </div>
        </div>
      </Host>
    );
  }
}
