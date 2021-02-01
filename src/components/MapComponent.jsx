import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import styled from "styled-components";

/*global kakao*/
class MapComponent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         category:props.match.params.category
    //     }
    // }
    componentDidMount(){
        const script = document.createElement("script");
        
        script.async=true;
        script.src=  "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ce0d9fa1eadff889de8694feaee21b52&&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("MyMap");
                let options = {
                  center: new kakao.maps.LatLng(37.506502, 127.053617),
                  level: 7
                };
                const map = new window.kakao.maps.Map(container, options);
              });
        };
    }

    render() {
        return (
        
           <MapComponents id="MyMap">
               <div></div>
           </MapComponents>
       
           
        );
    }
}
const MapComponents = styled.div`
  width: 1100px;
  height: 600px;
`;

export default MapComponent;