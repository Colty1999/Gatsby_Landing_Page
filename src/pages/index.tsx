import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"
import { header, btn } from "../styles/home.module.css"



const IndexPage: React.FC<PageProps> = () => {


  return (
    <Layout>
      <main className={header}>
        <div>
          <h2>Congratulations</h2>
          <h3>You just made a Gatsby site!</h3>
          <p>— you just made a Gatsby site! 🎉🎉🎉</p>
          <Link className={btn} to="/projects">Projects</Link>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
