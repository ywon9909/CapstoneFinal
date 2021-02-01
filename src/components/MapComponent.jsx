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

                if (navigator.geolocation) {
                    // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
                    navigator.geolocation.getCurrentPosition(function(position){
                        
                        var lat = position.coords.latitude, // 위도
                            lon = position.coords.longitude; // 경도
                            
                        var locPostion = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치를 geolocation 좌표로 생성합니다.
                            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다.
            
                        // 마커와 인포윈도우를 표시합니다.
                        displayMarker(locPostion,message);
                    });
                } else {   
            
                }
                
                // 지도에 마커와 인포윈도우를 표시하는 함수입니다.
                function displayMarker(locPostion, message) {
                    
                    // 마커를 생성합니다.
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: locPostion
                    });
            
                    var iwContent = message, // 인포윈도우에 표시할 내용
                        iwRemoveable = true;
                    
                    // 인포윈도우를 생성합니다.
                    var infowindow = new kakao.maps.InfoWindow({
                        content : iwContent,
                        removable : iwRemoveable
                    });
            
                    // 인포윈도우를 마커위에 표시합니다.
                    infowindow.open(map,marker);
            
                    // 지도 중심좌표를 접속위치로 변경합니다.
                    map.setCenter(locPostion);
                }
            
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