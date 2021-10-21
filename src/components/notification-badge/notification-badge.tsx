import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'notification-badge',
  styleUrl: 'notification-badge.css',

})

export class NotificationBadge {

  @Prop() totalNotifications : string ;

  render() {
    return (
      <button id='badge'>
        <span>{this.totalNotifications}</span>
         <i class="far fa-bell"></i>
      </button>
    );
  }

}
