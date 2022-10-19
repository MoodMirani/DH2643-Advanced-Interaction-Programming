import React, {useEffect, useRef, useState} from 'react';
<<<<<<< Updated upstream
import './Map.scss';
=======
import './Map.css';
>>>>>>> Stashed changes

interface IMap {
    mapType: google.maps.MapTypeId;
    mapTypeControl?: boolean;
}


 // Info to be displayed in each pub's info window
 const data_media_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Data och Media</h1>' +
 '<div id="bodyContent">' +
 "<p><b>Data</b></p>" +
 "<p>Dag: Onsdag</p>" + "<p>Tid: 17-01</p>" +
 "<p><b>Media</b></p>" +
 "<p>Dag: Torsdag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const flyg_info = '<div id="content">' +
 '<div id="siteNotice">' +"</div>" +
 '<h1 id="firstHeading" class="firstHeading">Farkostteknik</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Fredag</p>" + "<p>Tid: 17-01</p>" +
 "</div>";

 const elektro_mit_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Elektro och MiT</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Torsdag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const clw_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Civilingenjör Lärare och Energi & Miljö</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Torsdag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const maskin_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Maskin</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Fredag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const fysik_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Fysik</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Tisdag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const kemi_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Kemi</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Fredag</p>" + "<p>Tid: 17-01</p>"
 "</div>";

 const sambygg_info = '<div id="content">' +
 '<div id="siteNotice">' +
 "</div>" +
 '<h1 id="firstHeading" class="firstHeading">Samhällsbyggnad</h1>' +
 '<div id="bodyContent">' +
 "<p>Dag: Torsdag</p>" + "<p>Tid: 17-01</p>"
 "</div>";


type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<IMap> = ({ mapType, mapTypeControl = false}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<GoogleMap>();
       
    // Coordinates of locations used in the map
    const data_media_pub = {lat: 59.3480884, lng: 18.0713536};
    const flyg_pub = {lat: 59.3481658, lng: 18.0680328};
    const elektro_mit_pub = {lat:59.3476666,lng:18.0731516};
    const clw_pub = {lat:59.3474004, lng:18.0728678};
    const bergs_open_pub = {lat: 59.3516346, lng:18.0665845};
    const arkitekt_bygg_pub = {lat: 59.3487139, lng:18.072406};
    const maskin_pub = {lat: 59.3510884, lng:18.0685239};
    const indek_pub = {lat: 59.3508087, lng: 18.0659411};
    const fysik_pub = {lat: 59.3539666, lng: 18.0635932};
    const kemi_pub = {lat: 59.3492201, lng: 18.07271};
    const sambygg_pub = {lat: 59.3500914, lng: 18.0695581};

    // Importing image that will be used for each markers' icon
    const image = {
    url:  "https://i.postimg.cc/nzqv76zx/iprogicon.png",
    scaledSize: new google.maps.Size(40,40),
  }

    const startMap = (): void => {
        if (!map) {
            defaultMapStart();
        } else {
            const location_center = new google.maps.LatLng(59.3498706, 18.0702566 );

            const data_media_marker = new google.maps.Marker({
                position: data_media_pub,
                map:map,
                icon: image,
            });
            const flyg_marker = new google.maps.Marker({
                position: flyg_pub,
                map:map,
                icon:image,
            });
            const elektro_mit_marker = new google.maps.Marker({
                position: elektro_mit_pub,
                map:map,
                icon:image,
            });
            const bergs_open_marker = new google.maps.Marker({
                position: bergs_open_pub,
                map:map,
                icon:image,
            });
            const clw_marker = new google.maps.Marker({
                position: clw_pub,
                map:map,
                icon:image,
            });
            const arkitekt_bygg_marker = new google.maps.Marker({
                position: arkitekt_bygg_pub,
                map:map,
                icon:image,
            });
            const maskin_marker = new google.maps.Marker({
                position: maskin_pub,
                map:map,
                icon:image,
            });
            const kemi_marker = new google.maps.Marker({
                position: kemi_pub,
                map:map,
                icon:image,
            });
            const indek_marker = new google.maps.Marker({
                position: indek_pub,
                map:map,
                icon:image,
            });
            const fysik_marker = new google.maps.Marker({
                position: fysik_pub,
                map:map,
                icon:image,
            });
            const sambygg_marker = new google.maps.Marker({
                position: sambygg_pub,
                map:map,
                icon:image,
            });
            // Info windows for all pubs, on click --> open info window
            const infowindow_data_media = new google.maps.InfoWindow({
                content: data_media_info,
            });
            
            const infowindow_flyg = new google.maps.InfoWindow({
                content: flyg_info,
            });
            
            const infowindow_elektro_mit = new google.maps.InfoWindow({
                content: elektro_mit_info,
            });
            
            const infowindow_clw = new google.maps.InfoWindow({
                content: clw_info,
            });
            
            const infowindow_maskin = new google.maps.InfoWindow({
                content: maskin_info,
            });
            
            const infowindow_fysik = new google.maps.InfoWindow({
                content: fysik_info,
            });
            
            const infowindow_kemi = new google.maps.InfoWindow({
                content: kemi_info,
            });
            
            const infowindow_sambygg = new google.maps.InfoWindow({
                content: sambygg_info,
            });
            
            data_media_marker.addListener("click", () => {
            infowindow_data_media.open({
                anchor: data_media_marker,
                map,
            });
            });

            flyg_marker.addListener("click", () => {
                infowindow_flyg.open({
                  anchor: flyg_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              elektro_mit_marker.addListener("click", () => {
                infowindow_elektro_mit.open({
                  anchor: elektro_mit_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              clw_marker.addListener("click", () => {
                infowindow_clw.open({
                  anchor: clw_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              maskin_marker.addListener("click", () => {
                infowindow_maskin.open({
                  anchor: maskin_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              fysik_marker.addListener("click", () => {
                infowindow_fysik.open({
                  anchor: fysik_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              kemi_marker.addListener("click", () => {
                infowindow_kemi.open({
                  anchor: kemi_marker,
                  map,
                  shouldFocus: false,
                });
              });
            
              sambygg_marker.addListener("click", () => {
                infowindow_sambygg.open({
                  anchor: sambygg_marker,
                  map,
                  shouldFocus: false,
                });
              });
        }
    };
    useEffect(startMap, [map]);

    const defaultMapStart = (): void => {
        const defaultAddress = new google.maps.LatLng(59.3498706, 18.0702566 );
        initMap(17, defaultAddress);
    };


    const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
        if (ref.current) {
            setMap(
                new google.maps.Map(ref.current, {
                    zoom: zoomLevel,
                    center: address,
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                })
            );
        }
    };

    return (
        <div className="map-container">
            <div ref={ref} className="map-container__map"></div>
        </div>
    );
};

export default Map;
