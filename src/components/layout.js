/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import "../styles/global.css"

const Layout = ({ children, bgColor, showHeader, isHome }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="layout">
        {showHeader ? <Header siteTitle={data.site.siteMetadata.title} bgColor={bgColor} isHome={isHome} /> : null}
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  showHeader: PropTypes.bool,
  isHome: PropTypes.bool
}

Layout.defaultProps = {
  showHeader: true,
  isHome: false
}

export default Layout
