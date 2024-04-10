import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';

function Map() {
    const [location, setLocation] = useState(null); // Estado para almacenar la ubicación
    const [address, setAddress] = useState(''); // Estado para almacenar la dirección

    // Función para manejar el clic en el mapa y agregar un marcador en la ubicación
    const handleMapClick = async (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setLocation(newLocation); // Actualiza la ubicación con la nueva ubicación
        await getAddress(newLocation.lat, newLocation.lng); // Obtener la dirección
    };

    // Función para obtener la dirección a partir de las coordenadas
    const getAddress = async (latitude, longitude) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDfVj-Cnt4b0MzOoCGGFqCY3zhymkPEUSY`);
            const data = await response.json();
            if (data.status === 'OK' && data.results.length > 0) {
                const address = data.results[0].formatted_address;
                setAddress(address); // Actualiza el estado de la dirección
            } else {
                setAddress('No se pudo obtener la dirección'); // Si no se encuentran resultados válidos
            }
            console.log(data); // Imprime la respuesta en la consola
        } catch (error) {
            console.error('Error al obtener la dirección:', error);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LoadScript googleMapsApiKey="AIzaSyDfVj-Cnt4b0MzOoCGGFqCY3zhymkPEUSY">
                <GoogleMap
                    mapContainerStyle={{ height: '400px', width: '100%' }}
                    center={{ lat: 14.084818012234798, lng: -87.16664545886665 }} // Coordenadas de Tegucigalpa como centro del mapa
                    zoom={10}
                    onClick={handleMapClick} // Maneja el clic en el mapa
                >
                    {/* Renderiza el marcador solo si hay una ubicación */}
                    {location && <Marker position={location} />}
                </GoogleMap>
            </LoadScript>
            {/* Muestra las coordenadas y la dirección debajo del mapa */}
            {location && (
                <div>
                    <p>Latitud: {location.lat}</p>
                    <p>Longitud: {location.lng}</p>
                    <p>Dirección: {address}</p>
                </div>
            )}
        </div>
    );
}

export default Map;

