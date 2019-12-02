import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about"

const AboutPage = () => (
  <Layout bgColor={'#ff7653'}>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
