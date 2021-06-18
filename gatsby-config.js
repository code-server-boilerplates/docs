module.exports = {
  flags: {
    // Only enable experimental flags at your own risk.
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    siteTitle: `Code Server Boilerplates Docs | The Pins Team`,
    defaultTitle: `Code Server Boilerplates Docs | The Pins Team`,
    siteTitleShort: `Code Server Boilerplates Docs`,
    siteDescription: `Official docs for maintaining deploy-code-server-like templates for maintainers and usage for usual users.`,
    siteUrl: `https://csb-docs.community-lores.gq`, // will be csb-docs.lores.community soon
    siteAuthor: `The Pins Team and Docs contributors`,
    //siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        basePath: `/`,
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/code-server-boilerplates/docs`,
        //baseDir: `.`,
      },
    },
  ],
};
