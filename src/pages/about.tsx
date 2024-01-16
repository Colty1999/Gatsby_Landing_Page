import React from 'react';
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p>This is the about page</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
