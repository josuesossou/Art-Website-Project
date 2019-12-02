import React from 'react'
import SideMenu from '../side-menu/side-menu'
import './artistStatement.css'

class ArtistStatement extends React.Component {
    componentDidMount() {
        const content = this.props.data[0].node.content +""; 
        const arrayText = content.split(/-*\Page \([0-9]\) Break-*/)
        console.log(arrayText)
    }
    
    render() {
        return (
            <div id="wrapper">
                <SideMenu currentPage={'Artist Statement'} />
                <div>
                    <section>
                        
                    </section>
                </div>
            </div>
        );
    }
}

export default ArtistStatement;