import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/home/home'
import { useStaticQuery, graphql } from "gatsby"


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "arts" }
      }
      ) {
          edges {
              node {
                  base
                  childImageSharp {
                      fluid (maxWidth: 1900, quality: 75){
                        ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
    }
  `)

  return (
    <Layout isHome={true}>
      <SEO title="Home" />
      <Home id={'fist-image'} data={data} />
    </Layout>
  )
}
export default IndexPage
