'use client'

import { Logo } from '@/svg';
import { Card, CardHeader, CardBody, Input, Textarea, Button } from '@nextui-org/react';
import { Divider } from "@nextui-org/react";
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

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

    const { handleSubmit, control, register, } = useForm({
        defaultValues: {
            date: '19 - September - 2023',
            doctorName: 'Dr Pablo Cordova Tapia',
            diagnostic: '',
            summary: '',
            aditionalNotes: '',
            followUp: '',
            weight: '70',
            height: '1.80',
            doctorWallet: '0x123456789',
            patientWallet: '0x987654321',
            prescription: [
                {
                    name: '',
                    instructions: '',
                },
            ],
        }
    })

    const { fields, prepend, remove } = useFieldArray({
        control,
        name: 'prescription'
    })

    const onSubmit = (data: any) => {
        console.log({ data })
    }


    return (
        <Card className='h-full w-full max-h-full'>

            <CardBody className='relative h-full w-full flex flex-col items-start justify-start'>

                <div className='flex justify-between h-20 w-full'>
                    <div>
                        <p className='text-xl text-semibold'>Dr Pablo Cordova Tapia</p>
                        <span className='block text-xs text-gray-400' >9876543210</span>
                        <span className='text-primary'>General medic</span>
                    </div>

                    <div className='text-right'>
                        <p className='text-sm text-gray-400'>19 - September - 2023</p>
                        <p># <span className='text-semibold'>1565156496</span></p>
                    </div>
                </div>

                <Divider />

                <Button className='mt-4'
                    onClick={() => {
                        prepend({
                            name: '',
                            instructions: '',
                        })
                    }} color="primary" aria-label="Add other medicine">
                    <p className='text-sm' >Add item</p>
                </Button>

                <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex w-full flex-col py-4 relative max-h-[300px] '>
                        <div className='flex flex-col gap-2 overflow-auto '>
                            {
                                fields.map((field, index) => (
                                    <div key={field.id} className='flex gap-4 items-center'>
                                        <Input
                                            isRequired
                                            type="text"
                                            label="Medicine name"
                                            placeholder="ex. paracetamol, aspirin, loratadine, etc"
                                            {...register(`prescription.${index}.name`, { required: true })} />
                                        <Input
                                            isRequired
                                            type="text"
                                            label="Instructions"
                                            placeholder="ex. Take 1 pill every 8 hours"
                                            {...register(`prescription.${index}.instructions`, { required: true })} />

                                        <Button onClick={() => {
                                            remove(index)
                                        }} isIconOnly color='danger' aria-aria-label='delete medicines'>
                                            <span className='text-2xl'>-</span>
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='w-full flex flex-wrap gap-3 mt-4'>
                        <Textarea
                            label="Appointment summary"
                            labelPlacement="outside"
                            placeholder="ex. John Doe arrived at Anytown Medical Center on time for his appointment, He reported experiencing occasional headaches but no other significant symptoms..."
                            className="w-full"
                        />
                        <Textarea
                            label="Medical diagnostic"
                            labelPlacement="outside"
                            placeholder="ex. Hypertension (High Blood Pressure)..."
                            className="w-full"
                        />
                        <Textarea
                            label="Follow up instructions"
                            labelPlacement="outside"
                            placeholder="ex. Schedule a follow-up appointment for December, Monitor blood pressure at home regularly, etc..."
                            className="w-[50%]"
                        />
                        <Textarea
                            label="Aditional notes"
                            labelPlacement="outside"
                            placeholder="ex. Patient expressed understanding of the treatment plan and appeared motivated to make necessary lifestyle changes..."
                            className="flex-1"
                        />
                    </div>

                    <Button type='submit' color='primary' className='mt-4'>
                        Create prescription
                    </Button>
                </form>

            </CardBody>




        </Card>
    )
}