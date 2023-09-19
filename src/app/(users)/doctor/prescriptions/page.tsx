'use client'

import { Logo } from '@/svg';
import { Card, CardHeader, CardBody, Input, Textarea, Button } from '@nextui-org/react';
import { Divider } from "@nextui-org/react";
import { useState } from 'react';

type patient = {
    date: string,
    doctorName: string,
    prescription: {
        medicineId: string,
        name: string,
        instructions: string,
    }[],
    medicalDiagnostic: {
        title: string,
        conlusions: string,
    },
    patient: {
        weight: number,
        height: number,
    },
    doctorWallet: string;
    patientWallet: string;
}


export default function Page() {

    const [patient, setPatient] = useState<patient>({
        date: '19 - September - 2023',
        doctorName: 'Dr Pablo Cordova Tapia',
        prescription: [
            {
                medicineId: '1',
                name: 'Aspirin',
                instructions: 'Take 1 pill every 8000 hours',
            },
            {
                medicineId: '2',
                name: 'Aspirin',
                instructions: 'Take 1 pill every 8 hours',
            },
            {
                medicineId: '3',
                name: 'Aspirin',
                instructions: 'Take 1 pill every 8 hours',
            }
        ],
        medicalDiagnostic: {
            title: 'Flu',
            conlusions: 'The patient has the flu',
        },
        patient: {
            weight: 70,
            height: 1.80,
        },
        doctorWallet: '0x123456789',
        patientWallet: '0x987654321',
    })

    const handleAddMedicine = () => {
        const newMedicine = { medicineId: Math.random().toString(), name: '', instructions: '' }

        setPatient({
            ...patient,
            prescription: [...patient.prescription, newMedicine]
        })

    }

    const handleRemoveMedicine = (medicineId: string) => {
        setPatient({
            ...patient,
            prescription: patient.prescription.filter((medicine) => medicine.medicineId !== medicineId)
        })
    }

    return (
        <Card className='h-full w-full max-h-full'>

            <CardBody className='relative h-full w-full flex flex-col items-start'>



                <div className='flex justify-between h-20 w-full'> {/* Prescription Header */}
                    <div>
                        <p className='text-xl text-semibold'>Dr Pablo Cordova Tapia</p>
                        <span className='text-primary'>General medic</span>
                    </div>

                    <div>
                        <p className='text-sm text-gray-400'>19 - September - 2023</p>
                        <p>No. <span className='text-semibold'>1565156496</span></p>
                    </div>
                </div>


                <Divider />

                <Button className='mt-4' onClick={handleAddMedicine} color="primary" aria-label="Add other medicine">
                    <p className='text-sm' >Add item</p>
                </Button>

                <div className='flex w-full flex-col py-4 relative max-h-[300px] '>
                    <div className='flex flex-col gap-2 overflow-auto '>
                        {
                            patient.prescription.map((prescription) => (
                                <div className='flex gap-4 items-center'>
                                    <Input type="text" label="Medicine name" placeholder="ex. paracetamol, aspirin, loratadine, etc" value={prescription.name} />
                                    <Input type="text" label="Instructions" placeholder="ex. Take 1 pill every 8 hours" value={prescription.instructions} />
                                    <Button onClick={() => handleRemoveMedicine(prescription.medicineId)} isIconOnly color='danger' aria-aria-label='delete medicines'>
                                        <span className='text-2xl'>-</span>
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </div>



                <Textarea
                    label="Medical diagnostic"
                    labelPlacement="outside"
                    placeholder="ex. The patient has the flu because he has a fever, cough, and headache..."
                    className="w-full h-[300px]"
                />


                <Button>
                    Crear
                </Button>

            </CardBody>




        </Card>
    )
}