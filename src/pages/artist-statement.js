import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtistStatement from '../components/artist-statement/artistStatement'
import { useStaticQuery, graphql } from "gatsby"

const ArtistStatementPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPdf {
        edges {
          node {
            content
          }
        }
      }
    }
  `)

  return (
    <Layout bgColor={'#ff7653'} showHeader={false}>
      <SEO title="Artist Statement" />
      <ArtistStatement data={data.allPdf.edges} />
    </Layout>
  )
}

export default ArtistStatementPage
