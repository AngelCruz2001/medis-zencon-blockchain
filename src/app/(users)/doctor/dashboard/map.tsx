import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle } from 'react-leaflet';

export const Map = () => {
    return (
        <Card className='w-full'>
            <CardBody>
                <CardHeader>
                    <h3 className='text-center text-lg font-medium text-gray-500 w-full'>Most prescribed medications</h3>
                </CardHeader>
                <div className="flex flex-col gap-2 mt-5">
                    <h1>Hola aquí va el mapa</h1>

                    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "300px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            maxZoom={19}
                        />
                         <Circle 
        center={[51.508, -0.11]} 
        pathOptions={{ color: 'red', fillColor: '#f03', fillOpacity: 0.5 }} 
        radius={500}>
        <Popup>
            I am a circle.
        </Popup>
    </Circle>
                        <Marker position={[51.505, -0.09]}>
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
