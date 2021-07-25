/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    public: { url: '/', static: true, resolve: true },
    src: { url: '/dist' },
    assets: {
      url: '/assets',
    },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          style: 'compressed',
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    // out: '../build/app',
    // clean: true,
    // metaUrlPath: '/app/dist',
    // baseUrl: 'http://localhost:5000/app',
  },
};
