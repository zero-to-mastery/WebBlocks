import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sign-in-form',
  styleUrl: 'sign-in-form.css',
  shadow: true,
})
export class SignInForm {
  @Prop() className: string;
  @Prop() maxLengthEmail: string;
  @Prop() maxLengthPassword: string;
  @Prop() minLengthEmail: string;
  @Prop() minLengthPassword: string;
  render() {
    return (
      <Host>
        <div class={`${this.className}`}>
          <div class="main">
            <input minLength={Number(this.minLengthEmail)} maxLength={Number(this.maxLengthEmail)} placeholder={'Enter Your Email'} type={'email'} />
            <input minLength={Number(this.minLengthPassword)} maxLength={Number(this.maxLengthPassword)} placeholder={'Enter Your Password'} type={'password'} />
            <button class="btn">Sign In</button>
          </div>
        </div>
      </Host>
    );
  }
}
