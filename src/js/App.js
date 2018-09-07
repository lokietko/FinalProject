import React from 'react'
import reactLogo from '../images/react-logo.png'

import Header from './Header.js';
import Map from "./Map";
import Animation from "./Animation";
import Menu from "./menu";
import Api from "./Api"

class App extends React.Component {
    constructor(props) {
        super(props),

            this.state = {searchCountry:" "};
    }

handleCountry=(country)=>{
       this.setState({searchCountry: country})
        console.log(country);
}



    render() {
        return (
            <div style={{width:"1600px",
                margin:" 0 auto",
            }}>
                <Header/>
                <Animation/>
                <Menu/>
                <Map data={this.handleCountry} />
                <Api search={this.state.searchCountry}/>

            </div>
        );
    }
}

export default App



