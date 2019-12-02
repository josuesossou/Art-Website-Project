import React from 'react';
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './side-menu.css'

const SideMenu =  ({ currentPage }) => (
    <div id="full-arts-link">
        <AniLink 
            cover
            direction="bottom"
            to="/"
            bg="#ff7653"
            duration={1}
            className="link"
        >
            Home
        </AniLink>
        <AniLink 
            cover
            direction="right"
            to="about"
            bg="#ffffff"
            duration={1}
            className="link"
        >
            About
        </AniLink>
        {currentPage === 'Artist Statement' ? null :
            <AniLink 
                cover
                direction="right"
                to="artist-statement"
                bg="#ffffff"
                duration={1}
                className="link"
            >
                Artist Statement
            </AniLink>
        }
        {currentPage === 'All Arts' ? null :
            <AniLink 
                paintDrip
                to="full-arts"
                hex="#cfe8ff"
                bg="#ffffff"
                duration={1}
                className="link"
            >
                All Arts
            </AniLink>
        }
    </div>
)

SideMenu.propTypes = {
    currentPage: PropTypes.string && PropTypes.node.isRequired
}

export default SideMenu;