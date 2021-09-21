import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'webblocks',
  plugins: [sass()],
  globalStyle: 'src/global/base.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      /*
          This line is important in order to see changes in the index.html file immediately via hot reloading if changes happen in stylesheets
          without the need to re-build the entire thing
      */
      copy: [{ src: '../dist/webblocks/webblocks.css', dest: 'build/webblocks.css' }],
      serviceWorker: null, // disable service workers
    },
  ],
};
