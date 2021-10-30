import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'review-component',
  styleUrl: 'review-component.css',
  shadow: false,
})
export class ReviewComponent {
  // Props for username , product name and rating
  @Prop() username: string;
  @Prop() productname: string;
  @Prop() rating: number;

  // When component is loaded the eventlisteners are registered and the rating
  // value is attached to the star elements on the HTML
  componentDidLoad() {
    const imageModal = document.querySelector('image-modal-component');
    const images = document.querySelectorAll('.review-image');
    const stars = document.querySelectorAll('.star-child');
    const fullWidthStars = Math.floor(this.rating);
    const actualValue = 22;

    images.forEach(image => {
      image.addEventListener('click', e => {
        const image = e.target as HTMLImageElement;
        imageModal.open(image.src);
      });
    });

    let starIndex;
    for (starIndex = 0; starIndex < fullWidthStars; starIndex++) {
      const element = stars[starIndex] as HTMLElement;
      element.style.width = `${actualValue}px`;
      element.style.height = `${actualValue}px`;
    }
    if (starIndex < 5) {
      const percentWidth = ((Number((this.rating - fullWidthStars).toFixed(2)) * 10) / 10) * actualValue;
      const element = stars[starIndex] as HTMLElement;
      element.style.width = `${percentWidth}px`;
      element.style.height = `${actualValue}px`;
    }
  }

  render() {
    // Getting current date
    let date = new Date();
    let presentDate = date.getDate();
    let presentMonth = date.getMonth();
    let presentYear = date.getFullYear();
    return (
      <div class="review">
        <div class="review-panel">
          <slot name="review-title" />
          <div class="stars">
            <div class="star star-bg">
              <div class="star-child"></div>
            </div>
            <div class="star star-bg">
              <div class="star-child"></div>
            </div>
            <div class="star star-bg">
              <div class="star-child"></div>
            </div>
            <div class="star star-bg">
              <div class="star-child"></div>
            </div>
            <div class="star star-bg">
              <div class="star-child"></div>
            </div>
          </div>
          <p class="review-product">
            Reviewed Product : <span class="product-name">{this.productname}</span>
          </p>
          <slot name="review-tags" />
          <slot name="review-content" />
          <slot name="review-images" />
        </div>
        <div class="user-details-panel">
          <div aria-label="user-image" class="img">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="user-circle"
              class="svg-inline--fa fa-user-circle fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"
              ></path>
            </svg>
          </div>
          <p>{this.username}</p>
          <time dateTime={`${presentYear}-${presentMonth}-${presentDate}`}>
            {presentDate}/{presentMonth}/{presentYear}
          </time>
        </div>
        {/* When image is clicked a modal opens the image in full screen mode for better viewing */}
        <image-modal-component />
      </div>
    );
  }
}
