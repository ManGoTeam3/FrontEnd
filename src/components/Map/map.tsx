import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

// @ts-ignore
const MapContainer = ({ x, y }:{x : Number | undefined, y: Number | undefined}) => {
    const addMarker = () => {
        if (x === undefined || y === undefined) {
          return null; // Return null if x or y is undefined
        }
    
        const markerPosition = new window.kakao.maps.LatLng(y, x);
    
        return new window.kakao.maps.Marker({
          position: markerPosition,
        });
      };
    
      useEffect(() => {
        let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    
        if (x !== undefined && y !== undefined) {
          let options = {
            center: new window.kakao.maps.LatLng(y, x), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
          };
    
          let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
          const marker = addMarker();
    
          if (marker) {
            marker.setMap(map);
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [x, y]);

    return (
        <div id="map" style={{ width: "100%", height: "400px" }} />
    );
}

// @ts-ignore
export default MapContainer;