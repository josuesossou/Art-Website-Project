import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FaEye } from 'react-icons/fa';
import Img from "gatsby-image"
import SideMenu from "../side-menu/side-menu"
import './fullArts.css'

const FullArts = () => {
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
                            fluid(maxWidth: 1920, quality: 75) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const [thumbnailImages, setThumbnailImages] = React.useState([0,1,2,3])
    const images = data.allFile.edges
    const filters = [
        {name: 'Normal', className:'normal', value: ''},
        {name: 'GrayScale', className:'filter-grayscale', value: 'grayscale()'},
        {name: 'Drop-Shadow', className:'filter-drop-shadow', value: 'drop-shadow(0px 2px 20px rgba(0,0,0,0.4))'},
        {name: 'Hue', className:'filter-hue', value: 'hue-rotate(90deg)'},
        {name: 'Invert', className:'filter-invert', value: 'invert()'},
        {name: 'Opacity', className:'filter-transparent', value: 'opacity(0.5)'}, 
        {name: 'Saturate', className: 'filter-saturate', value: 'saturate()'},
        {name: 'Sepia', className:'filter-sepia', value: 'sepia()'},
    ];
    const [index, setIndex] = React.useState(0);
    const [filterIndex, setFilterIndex] = React.useState(0);
    const [multiStyle, setMultiStyle] = React.useState({ filter: '' });
    const [textareaContent, setTextareaContent] = React.useState('');

    return (
        <div id="wrapper">
            <SideMenu currentPage={'All Arts'} />
            <div 
                id="large-image" 
                className={filters[filterIndex].className}
                style={multiStyle}
            >
                <Img
                    
                    fluid={{
                        ...data.allFile.edges[index].node.childImageSharp.fluid,
                        aspectRatio: 0.05
                    }}
                    alt={data.allFile.edges[1].node.base.split(".")[0]} // only use section of the file extension with the filename
                />
            </div>
            <div id="filters">
                <h3>Apply Filters</h3>
                {filters.map((filter, i) => (
                    <div className='filter-content'>
                        <button className="add" onClick={() => {
                            setMultiStyle({ filter: multiStyle.filter + filters[i].value })
                            setTextareaContent(multiStyle.filter + filters[i].value)
                        }}>+</button>
                        <button className="btn" onClick={() => {
                            setMultiStyle({ filter: filters[i].value })
                            setTextareaContent(filters[i].value)
                            setFilterIndex(i)
                        }}>
                            <span>{filter.name}</span>
                        </button>
                    </div>
                ))}
                <textarea
                    value={textareaContent}
                    onChange={(e) => {
                        setTextareaContent(e.target.value)
                    }}
                />
                <button id="apply-changes" onClick={() => {
                    setMultiStyle({ filter: textareaContent })
                }}>
                    Apply Changes
                </button>
            </div>
            <div id="image-icons">
                {images.length > 4 ? (
                    <button id="left-arrow" onClick={() => {
                        if (thumbnailImages[0] > 0) {
                            const newArr = thumbnailImages.map(val => val - 1)
                            setThumbnailImages(newArr)
                        }
                    }}>
                        &#8592;
                    </button>
                ) : null}

                {thumbnailImages.map(imageIndex => imageIndex < images.length ? (
                    <div className="thumbnail">
                        {index === imageIndex?  <small><FaEye size={20} /></small> : null}
                        <div className="overlay-thumbnail" onClick={() => setIndex(imageIndex)}></div>
                        <Img
                            fluid={images[imageIndex].node.childImageSharp.fluid}
                            alt={images[imageIndex].node.base.split(".")[0]} // only use section of the file extension with the filename
                        />
                    </div>
                ) : null)}

                {images.length > 4 ? (
                    <button id="right-arrow" onClick={() => {
                        if (thumbnailImages[3] + 1< images.length) {
                            const newArr = thumbnailImages.map(val => val + 1)
                            setThumbnailImages(newArr)
                        }
                    }}> 
                        &#8594;
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default FullArts;