import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const [markerPosition, setMarkerPosition] = useState(null);
    const [address, setAddress] = useState('');

    const handleMapClick = async (event) => {
        const { latLng } = event;
        const newMarkerPosition = { lat: latLng.lat(), lng: latLng.lng() };
        setMarkerPosition(newMarkerPosition);
        await getAddress(newMarkerPosition);
    };

    const getAddress = async ({ lat, lng }) => {
        try {
            const geocoder = new window.google.maps.Geocoder();
            const latLng = new window.google.maps.LatLng(lat, lng);
            geocoder.geocode({ location: latLng }, (results, status) => {
                if (status === 'OK' && results.length > 0) {
                    setAddress(results[0].formatted_address);
                } else {
                    setAddress('No se pudo obtener la dirección');
                }
            });
        } catch (error) {
            console.error('Error al obtener la dirección:', error);
            setAddress('Error al obtener la dirección');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LoadScript googleMapsApiKey="AIzaSyDfVj-Cnt4b0MzOoCGGFqCY3zhymkPEUSY">
                <GoogleMap
                    mapContainerStyle={{ height: '400px', width: '100%' }}
                    center={{ lat: 14.084818012234798, lng: -87.16664545886665 }}
                    zoom={10}
                    onClick={handleMapClick}
                >
                    {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
            </LoadScript>
            {markerPosition && (
                <div>
                    <p>Latitud: {markerPosition.lat}</p>
                    <p>Longitud: {markerPosition.lng}</p>
                    <p>Dirección: {address}</p>
                </div>
            )}
        </div>
    );
};

export default Map;
