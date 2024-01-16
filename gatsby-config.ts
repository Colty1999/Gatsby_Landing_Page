import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Landing Page`,
    description: `Kick off your next, great Gatsby project with this TypeScript starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    copyright: "Mateusz Gietka 2023",
    // siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config
