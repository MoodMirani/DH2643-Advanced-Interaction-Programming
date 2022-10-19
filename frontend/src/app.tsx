import React, {useEffect, useState} from 'react';
<<<<<<< Updated upstream
import './App.css';
=======
//import './App.css';
>>>>>>> Stashed changes
import Map from './Map/';
import {loadMapApi} from "./utils/GoogleMapsUtils";

function App() {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceInKm, setDistanceInKm] = useState<number>(-1);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);


    return (
        <div className="App">
            {scriptLoaded && (
                <Map
                  mapType={google.maps.MapTypeId.ROADMAP}
                  mapTypeControl={true}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                />
            )}
        </div>
    );
}

export default App;
