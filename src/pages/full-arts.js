import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullArts from "../components/full-arts/fullArts"

const FullArtsPage = () => (
  <Layout bgColor={'#ff7653'} showHeader={false}>
    <SEO title="Page two" />
    <FullArts />
  </Layout>
)

export default FullArtsPage
