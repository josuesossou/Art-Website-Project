import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle, bgColor, isHome }) => (
  <header
    style={{
      background: bgColor, 
      margin: `0`,
      padding: 0,
      position: `absolute`,
      top: 0,
      width: '100%',
      zIndex: 100,
      height: `50px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }}
  >
    <span style={{ left: `10%`, position: 'absolute', fontSize: `1.8rem` }}>
      <AniLink
        cover
        direction="bottom"
        duration={1}
        to="/"
        bg="#ff7653"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontWeight: 900,
          fontFamily: 'Ubuntu, sans-serif',
        }}
      >
        {siteTitle}
      </AniLink>
    </span>
    <div
      style={{
        margin: `0 4rem`,
        maxWidth: `100%`,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      { isHome ? null : 
        <AniLink
          cover
          direction="bottom"
          duration={1}
          to="/"
          bg="#ff7653"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontWeight: 600,
            fontFamily: 'Quicksand, sans-serif',
          }}
          className="header-link"
        >
          Home
        </AniLink>
      }
      <AniLink 
        paintDrip
        to="full-arts"
        hex="#cfe8ff"
        duration={1}
        style={{
          margin: `0 1rem`,
          color: `white`,
          textDecoration: `none`,
          fontWeight: 600,
          fontFamily: 'Quicksand, sans-serif',
        }}
        className="header-link"
      >
        All Arts
      </AniLink>
      <AniLink 
        cover
        direction="right"
        to="/about"
        bg="#ffffff"
        duration={1}
        style={{
          margin: `0 1rem`,
          color: `white`,
          textDecoration: `none`,
          fontWeight: 600,
          fontFamily: 'Quicksand, sans-serif',
        }}
        className="header-link"
      >
        About
      </AniLink>

      <AniLink
        cover 
        direction="right"
        duration={1}
        bg="#ffffff"
        to="/artist-statement"
        style={{
          margin: `0 1rem`,
          color: `white`,
          textDecoration: `none`,
          fontWeight: 600,
          fontFamily: 'Quicksand, sans-serif',
        }}
        className="header-link"
      >
        Artist Statement
      </AniLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  bgColor: PropTypes.string,
  isHome: PropTypes.node.isRequired && PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
  bgColor: `transparent`,
}

export default Header
