import React from "react"
import './home.css'
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Home extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 1,
      three: 2,
      four: 3,
      shake: "shake-one",
    }
  }

  componentDidMount() {
    setInterval(() => this.changeId(), 5000);
  }
  
  data = [
    "first-image",
    "second-image",
    "third-image",
    "fourth-image",
  ];

  imgData = this.props.data.allFile.edges;

  changeId = () => {
    this.setState(prev => ({
      one: prev.one === 3 ? 0 : prev.one + 1,
      two: prev.two === 3 ? 0 : prev.two + 1,
      three: prev.three === 3 ? 0 : prev.three + 1,
      four: prev.four === 3 ? 0 : prev.four + 1,
      shake: prev.shake === "shake-one" ? "shake-two" : "shake-one",
    }))
  }

  render(){
    return (
      <div id="wrapper">
        <div id="bgImage" className="coverViewport"></div>
        <div id="overlay" className="coverViewport"></div>

        <div id="fancy-slide-show" className="coverViewport">
          <section>
            <span id ={this.data[this.state.one]} className="one">
              <Img
                fluid={this.imgData[0].node.childImageSharp.fluid}
                alt={this.imgData[0].node.base.split(".")[0]}
              />
            </span>
            <span id ={this.data[this.state.two]} className="two">
              <Img
                fluid={this.imgData[1].node.childImageSharp.fluid}
                alt={this.imgData[1].node.base.split(".")[0]}
              />
            </span>
            <span id ={this.data[this.state.three]} className="three">
              <Img
                fluid={this.imgData[2].node.childImageSharp.fluid}
                alt={this.imgData[2].node.base.split(".")[0]}
              />
            </span>
            <span id ={this.data[this.state.four]} className="four">
              <Img
                fluid={this.imgData[3].node.childImageSharp.fluid}
                alt={this.imgData[3].node.base.split(".")[0]}
              />
            </span>
          </section>
        </div>
        <div id="veiw-all-button">
          <AniLink paintDrip hex="#cfe8ff" to="/~jsossou/public/full-arts">
            <button id={this.state.shake}>
              <div className="bg-color-gradient"></div>
              <p>&rarr;</p>
              <span><small>VIEW ALL</small></span>
            </button>
          </AniLink>
        </div>
      </div>
    )
  }
}

export default Home;