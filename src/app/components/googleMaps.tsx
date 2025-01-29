import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "dotenv/config";

const containerStyle = {
    width: "250px",
    height: "250px",
};

const center = {
    lat: 51.049999,
    lng: -114.066666,
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.MY_GOOGLE_MAPS_API,
    });

    return isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default React.memo(MyComponent);
