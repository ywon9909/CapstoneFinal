import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import styled from "styled-components";


/*global kakao*/
class MapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            category: props.match.params.category,
            paging: {},
            boards: []

        }
    }
    listBoard(category) {
        this.props.history.push(`/category-board/${category}`);
    }

    componentDidMount() {
        BoardService.getBoards(this.state.category, this.state.p_num).then((res) => {
            this.setState({
                p_num: res.data.pagingData.currentPageNum,
                category: this.state.category,
                paging: res.data.pagingData,
                boards: res.data.list

            });
        })
        const script = document.createElement("script");

        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=ce0d9fa1eadff889de8694feaee21b52&&autoload=false&libraries=services";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("MyMap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7
                };
                const map = new window.kakao.maps.Map(container, options);

                const ps = new window.kakao.maps.services.Places();


                ps.keywordSearch(this.state.category, placesSearchCB);

                // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                function placesSearchCB(data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {

                        let bounds = new kakao.maps.LatLngBounds();

                        for (let i = 0; i < data.length; i++) {
                            displayMarkerKeyWord(data[i]);
                            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                        }

                        //map.setBounds(bounds);
                    }
                }
                //키워드 마커 표시 함수
                function displayMarkerKeyWord(place) {
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x)
                    });
                    var infowindow= new kakao.maps.InfoWindow({
                        content :"test"
                    });
                    kakao.maps.event.addListener(
                        marker,
                        "mouseover",
                        makeOverListener(map, marker, infowindow)
                    );
                    kakao.maps.event.addListener(
                        marker,
                        "mouseout",
                        makeOutListener(infowindow)
                    );
                }
                // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
                function makeOverListener(map, marker, infowindow) {
                    return function () {
                        infowindow.open(map, marker);
                    };
                }

                // 인포윈도우를 닫는 클로저를 만드는 함수입니다
                function makeOutListener(infowindow) {
                    return function () {
                        infowindow.close();
                    };
                }




                if (navigator.geolocation) {
                    // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
                    navigator.geolocation.getCurrentPosition(function (position) {

                        var lat = position.coords.latitude, // 위도
                            lon = position.coords.longitude; // 경도

                        var locPostion = new kakao.maps.LatLng(lat, lon), //마커가 표시될 위치를 geolocation 좌표로 생성합니다.
                            message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다.

                        // 마커와 인포윈도우를 표시합니다.
                        displayMarker(locPostion, message);
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
                        content: iwContent,
                        removable: iwRemoveable
                    });

                    // 인포윈도우를 마커위에 표시합니다.
                    infowindow.open(map, marker);

                    // 지도 중심좌표를 접속위치로 변경합니다.
                    map.setCenter(locPostion);
                }

            });
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-center"><a onClick={() => this.listBoard(this.state.category, 1)}>   {this.state.category}</a>  지도
               </h2>
                <MapComponents id="MyMap">
                    <div></div>
                </MapComponents>
            </div>

        );
    }
}
const MapComponents = styled.div`
  width: 1100px;
  height: 600px;
`;

export default MapComponent;