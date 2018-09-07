import React from "react";

import search from "./Map";

class Api extends React.Component {
    constructor(props) {
        super(props),

            this.state = {value:false};
    }




componentDidMount(){
 this.getData();
}
componentDidUpdate(prevprops){
        if(prevprops.search!==this.props.search) {
            this.getData()
        }
}

getData=()=> {

    fetch(`https://restcountries.eu/rest/v2/name/${this.props.search}`).then(resp => {
        if (resp.ok)
            return resp.json();
        else
            throw new Error('Błąd sieci!');
    }).then(resp => {
        console.log(resp[0])
        this.setState({value: resp[0]})
    }).catch(err => {
        console.log('Błąd!', err);
    });


}

    render() {
        if (this.state.value!==false){//?
        return (
            <div style={{width:"400px",
                height:"447px",
                backgroundColor: "rgba(037,041,074,0.5)",


            position:"absolute",
                top:'107%',
            }}>

                <h2 style={{fontSize:"3em"}}>  Kraj: {this.props.search}</h2>

                <p > stolica:<span>{this.state.value.capital}</span></p>
                <p > populacja:<span>{this.state.value.population}</span></p>
                <p >  teren: <span>{this.state.value.area}</span></p>
                <p > waluta:<span>{this.state.value.currencies[0].name}</span></p>
                <p> flaga : <img  style={{height:"200px", width:"300px", bottom:"5%"}} src={this.state.value.flag}/></p>

                        </div>
        )
    }
    else{return null}
}}
export default Api