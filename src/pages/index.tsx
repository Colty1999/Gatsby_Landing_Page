import * as React from "react"
import { Link, StaticQueryDocument, graphql, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import { header, btn } from "../styles/home.module.css"

// interface HeaderProps {
//   className: string;
// }
// interface HeaderPropsWithData extends HeaderProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string,
//       },
//     },
//   };
// }

const IndexPage = () => {

  return (
    <Layout>
      <main className={header}>
        <div>
          <h2>Congratulations</h2>
          <h3>You just made a Gatsby site!</h3>
          <p>— you just made a Gatsby site! 🎉🎉🎉</p>
          <Link className={btn} to="/projects">Projects</Link>
        </div>
        <img src="/index-photo.jpg" alt="index photo" style={{ maxWidth: "85%" }} />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>