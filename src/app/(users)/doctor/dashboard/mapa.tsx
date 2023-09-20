import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'

interface Medication {
    quantity: number,
    name: string
    image: string
}

const medications = [
    {
        quantity: 150,
        name: 'Ibuprofen',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
    },
    {
        quantity: 113,
        name: 'Paracetamol',
        image: 'https://i.pravatar.cc/150?u=b042581f4e29026024e'
    },
    {
        quantity: 96,
        name: 'Aspirin',
        image: 'https://i.pravatar.cc/150?u=c042581f4e29026024f'
    },
    {
        quantity: 48,
        name: 'Lisinopril',
        image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
    },
]

export const Mapa = () => {
    return (
        <Card className='w-full'>
            <CardBody>
                <CardHeader>
                    <h3 className='text-center text-lg font-medium text-gray-500 w-full'>Most prescribed medications</h3>
                </CardHeader>
                <div className="flex flex-col gap-2 mt-5">
                     <h1>Hola aqui va el mapa</h1>
                     <br /> <br /> <br /> <br /> <br /> <br /> <br />
                </div>
            </CardBody>
        </Card>
    )
}
