import { Component, Prop, h } from '@stencil/core';
import Helmet from '@stencil/helmet';
@Component({
  tag: 'google-tag-manager',
  shadow: false,
})
export class GoogleTagManager {
  /**
   * The google tag manage container ID
   */
  @Prop() containerId: string;

  render() {
    return (
      <Helmet>
        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j['async'] = true;
            j['src'] = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', this.containerId)}
        </script>
      </Helmet>
    );
  }
}
