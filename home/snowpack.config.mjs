/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    assets: { url: '/assets' },
    public: { url: '/' },
    src: { url: '/dist' },
  },
  plugins: [
    /* ... */
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
