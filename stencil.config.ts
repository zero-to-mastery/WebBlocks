import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const dev: boolean = process.argv && process.argv.indexOf('--dev') > -1;
const apiEnv: string = dev ? 'dev' : 'prod';
const copyObj = {
  copy: [{ src: process.env.PWD + '/src/pages', dest: process.env.PWD + '/www/pages' }],
};

const shouldCopy =
  apiEnv === 'prod'
    ? { ...copyObj }
    : { copy: [{ ...copyObj.copy[0] }, { src: process.env.PWD + '/dist/webblocks/webblocks.css', dest: process.env.PWD + '/www/build/webblocks.css' }] };

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
      footer: '*Built with [StencilJS](https://stenciljs.com/) by the [ZTM](https://zerotomastery.io/) community*',
    },
    {
      type: 'www',
      /*
          This line is important in order to see changes in the index.html file immediately via hot reloading if changes happen in stylesheets
          without the need to re-build the entire thing
      */
      // ...shouldCopy,
      serviceWorker: null, // disable service workers
    },
  ],
};
