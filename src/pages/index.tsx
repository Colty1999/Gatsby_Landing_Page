import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"


const IndexPage: React.FC<PageProps> = () => {

  console.log(typeof(Layout))
  return (
    <Layout>
      <main>
        <h1>
          Congratulations
          <br />
          <span>— you just made a Gatsby site! 🎉🎉🎉</span>
        </h1>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
