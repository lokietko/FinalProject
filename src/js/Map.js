import React from 'react'
import reactLogo from '../images/react-logo.png'
import xxx from "../images/amCharts (1).svg"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"

const wrapperStyles = {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
}
const added={backgroundColor: "pink",
    stroke: "#607D8B",
    strokeWidth: 0.75,
    outline: "none",
}

const arr=[];
class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: [],name:" "}

    }
handleClick(name) {

    let arr = this.state.list.slice();
    arr.push(name);
    this.setState({list: arr, name:name});


    //console.log(arr);
}

handleOneClick(names){
    this.props.data(names);
}



    render() {

    return (
        <div className="MapConteiner">
        <div style={wrapperStyles}>
            <ComposableMap
                projectionConfig={{
                    scale: 205,
                    rotation: [-11,0,0],
                }}
                width={980}
                height={600}
                style={{
                    width: "100%",
                    height: "auto",
                }}
            >
                <ZoomableGroup center={[0,20]} disablePanning>
                    <Geographies geography="./static/world-50m.json" disableOptimization={true}>
                        {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                            <Geography
                                onDoubleClick={() => this.handleClick(geography.properties.name)}//przekazanie do tablicy liste kliknietych panstw
                                onClick={() => this.handleOneClick(geography.properties.name)}
                                key={i}
                                geography={geography}
                                projection={projection}
                               style={{
                                    default: {
                                        fill: this.state.list.includes(geography.properties.name)?"yellow":"black",//kolor mapy ogolny
                                        stroke: "orange",//obramowania
                                        strokeWidth: 1,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: "yellow",
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                    },
                                   pressed: {
                                        fill: "#FF5722",
                                       stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                   },


                                }}
                            />
                        ))}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
            <div style={{position:"absolute",top:"75%",left:"10%"}}>
                <h1>Odwiedzone kraje </h1>
                <div>
                <ul  style={{listStyleType:"circle",
                }}>
                    {
                        this.state.list.map(
                        countries => <li  key={countries}> {countries} </li>//key  unikalny na podsatwie czego  potrafi sie odniesc w liscie  jesli np usune to nie bedzie odnowa renderowany tylko usuniete
                    )}
                </ul>
                </div>
            </div>
        </div>

    )
    }
}

export default Map