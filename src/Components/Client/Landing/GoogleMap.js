import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ center, zoom }) => {
  return (
    <div style={{ height: '370px', width: '370px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDPgg7FdHELAry2_XsuRfjztLCc7AkNIPU' }} // Replace with your Google Maps API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
     
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;