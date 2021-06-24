/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    assets: { url: '/assets' },
    public: { url: '/' },
    src: { url: '/dist' },
    scss: { url: '/style' },
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          // style: 'compressed',
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    out: '../build',
  },
};
