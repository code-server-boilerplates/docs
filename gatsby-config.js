module.exports = {
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Code Server Boilerplates Docs",
        description: "Documentation website for the Code Server Boilerplates project.",
        siteUrl: "https://csb-docs.community-lores.gq",

        // for the GH icon at the top
        githubRepositoryURL: "https://github.com/code-server-boilerplates/starter-pack",
        // for the edit link in docs
        githubDocRepositoryURL: "https://github.com/code-server-boilerplates/docs",
        baseDirectory: __dirname,

        // navigation stuff
        navItems: [
          {
            name: "User Guide",
            url: "/user-guide/",
          },
          {
            name: "Maintainer's Handbook"
            url: "/maintainer-docs/"
          }
        ],
        sections: 
          "User Guide",
          "For Maintainers",
          "Reference",
          "Documentation Contributors Zone"
        ],
      },
    },
  ],
};