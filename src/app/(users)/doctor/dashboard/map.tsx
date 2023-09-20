
'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle } from 'react-leaflet';
import L from 'leaflet';
const icon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', // Cambia esta URL a la imagen que desees
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que se posicionará exactamente en la marca de ubicación
    popupAnchor: [0, -41] // Punto desde el que se abrirá el popup
});

const locationIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png',
    iconSize: [25, 30],
    iconAnchor: [12, 31],
    popupAnchor: [0, -41]
});
export const Map = () => {
    return (
        <Card className='w-full'>
            <CardBody>
                <CardHeader>
                    <h3 className='text-center text-lg font-medium text-gray-500 w-full'>Most prescribed medications</h3>
                </CardHeader>
                <div className="flex flex-col gap-2 mt-5">
                    <h1>Hola aquí va el mapa</h1>

                    <MapContainer center={[-22.9866, -43.1982]} zoom={13} style={{ height: "300px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            maxZoom={19}
                        />
                        <Circle
                            center={[-22.9866, -43.1982]}
                            pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }}
                            radius={500}>
                            <Popup>
                                I am a circle.
                            </Popup>
                        </Circle>
                        <Marker position={[-22.9866, -43.1982]} icon={locationIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>



                </div>
            </CardBody>
        </Card>
    )
}
