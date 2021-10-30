import { Component, State, Method, h } from '@stencil/core';

@Component({
  tag: 'image-modal-component',
  styleUrl: 'image-modal-component.css',
  shadow: true,
})
export class ImageModalComponent {
  // State variable to display the modal and keep track of the image source
  @State() displaymodal: Boolean = false;
  @State() imgUrl: string;
  // A method to display the modal when an image is clicked
  @Method()
  open(url) {
    this.imgUrl = url;
    this.displaymodal = true;
  }

  render() {
    // If image is clicked state value changes and modal is displayed
    if (this.displaymodal) {
      return (
        <div style={{ zIndex: '1' }} class="image-modal">
          <img src={`${this.imgUrl}`} />
          <button onClick={() => (this.displaymodal = false)} class="close-btn">
            X
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}
