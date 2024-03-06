import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';


function Map() {
    const [markers, setMarkers] = useState([]); // Estado para almacenar las ubicaciones marcadas

    // Función para manejar el clic en el mapa y agregar un marcador en la ubicación
    const handleMapClick = (event) => {
        const newMarker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setMarkers([...markers, newMarker]); // Agrega el nuevo marcador a la lista de marcadores
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDfVj-Cnt4b0MzOoCGGFqCY3zhymkPEUSY">
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={{ lat: 14.084818012234798 , lng: -87.16664545886665 }} // Coordenadas de Tegucigalpa como centro del mapa
                zoom={10}
                onClick={handleMapClick} // Maneja el clic en el mapa
            >
                {/* Renderiza todos los marcadores en el mapa */}
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;

