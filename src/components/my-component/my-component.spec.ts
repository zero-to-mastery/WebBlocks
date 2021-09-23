import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <h1>
            Hello, World! I'm
          </h1>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS" color="#ff0000"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS" color="#ff0000">
        <mock:shadow-root>
          <h1 style="--text-color:#ff0000">
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </h1>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
