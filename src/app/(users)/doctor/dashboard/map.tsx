
'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle } from 'react-leaflet';
import L from 'leaflet';
const locationIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/2838/2838912.png',
    iconSize: [30, 30],
    iconAnchor: [12, 31],
    popupAnchor: [0, -41]
});

export const Map = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold mt-3 mb-2">Appointments</h1>
            <Card className='w-full mb-4'>
                <CardBody>
                    <div className="flex flex-col gap-2">
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
        </div>
    )
}
