import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="Page not found!">
      <SEO title="404: Not found" />
      <p>You just gone to the wrong route. Did we just broke something?</p>
      <p>
        If everything is fine and you&#39;d like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
      <p>
        But if you&#39;re still in doubt, <Link to="https://github.com/code-server-boilerplates/docs/issues">file an new GitHub issue here</Link>
        so we can fix the problem and redirect you to the right place in the future.
      </p>
    </Layout>
  );
}
