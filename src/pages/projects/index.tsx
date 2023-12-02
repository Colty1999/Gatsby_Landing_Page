import React from 'react';
import { HeadFC, PageProps } from "gatsby"
import Layout from "../../components/layout"

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
        <div>
            <h1>Projects</h1>
            <p>This is the projects page</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
        </div>
    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>About Page</title>
