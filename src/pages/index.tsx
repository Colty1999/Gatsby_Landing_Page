import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
