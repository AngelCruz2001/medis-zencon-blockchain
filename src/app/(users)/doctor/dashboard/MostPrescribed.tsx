import { Avatar, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
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

export const MostPrescribed = () => {
    return (
        <Card className='w-full'>
            <CardBody>
                <CardHeader>
                    <h3 className='text-center text-lg font-medium text-gray-500 w-full'>Most prescribed medications</h3>
                </CardHeader>
                <div className="flex flex-col gap-2 mt-5">
                    {
                        medications.map((medication, index) => {
                            const last = index === medications.length - 1;
                            return (
                                <>
                                    <div className='flex items-center gap-3 py-2 text-sm'>
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" />
                                        <span>{medication.name}</span>
                                        <span className="text-xs ml-auto text-gray-400" >{medication.quantity} times</span>
                                    </div>
                                    {!last && (
                                        <Divider />
                                    )}
                                </>
                            )
                        })
                    }
                </div>
            </CardBody>
        </Card>
    )
}
