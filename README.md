# Code Server Boilerplate Docs

[![Build Status](https://build-status-ci-thepinsteam.vercel.app/api/code-server-boilerplates/docs?style=flat-square)](https://csb-docs.community-lores.gq)
[![GitHub](https://img.shields.io/github/license/code-server-boilerplates/docs?logo=github&style=flat-square)](/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues-raw/code-server-boilerplates/docs?logo=github&style=flat-square)](https://github.com/code-server-boilerplates/docs/issues)
[![Maintenance](https://img.shields.io/maintenance/yes/2021?label=Did%20Michael%20still%20maintains%20this%3F&style=flat-square)](https://rtapp.tk/bshq-abandon-the-children)

This repository hosts the documentation site for this community project in general, including both maintainer docs and user guide.

_Just an side note: we customized the badges, even the maintenance status. Don't press it or prepare to get rickrolled (not really tho)._

## Stack

* GitHub as the single source of truth for filing issues and PRs for contributors
  * On our side, it mostly Guilded + Discord + whatever you want to use (bridged through Matrix and will probably handled by Matterbridge soon), GitLab SaaS + GitHub and Notion.
* Gatsby with the [Rocket Docs theme](https://rocketdocs.netlify.app) for building great site
* Vercel as static page hosting on `csb-docs.community-lores.gq` (we lied in the repo description like Linus)

While both [Community Lores](https://community-lores.gq) and [Code Server Boilerplates](https://github.com/code-server-boilerplates) are seperate projects we're working on and lives on seperate GitHub organizations, we use Netlify DNS to manage the DNS records for `community-lores.gq` domain. If you wish to buy the `lores.community` yourself and handle the domain registration stuff, [let us know](https://madebythepins.tk/contact) so we can tell you what to do next. 

## License

Licensed under the MIT License, Copyright © 2021-present The Pins Team and docs contributors.

See [LICENSE](./LICENSE) for more information.
