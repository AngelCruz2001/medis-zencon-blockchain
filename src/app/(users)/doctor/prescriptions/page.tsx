'use client'

import { Card, CardBody, } from '@nextui-org/react';
import { Divider } from "@nextui-org/react";
import { PrescriptionForm } from './prescription-form';

const wallets = {
    doctorWallet: '0x123456789',
    patientWallet: '0x987654321',
}

export default function Page() {

    return (
        <Card className='h-full w-full max-h-full'>

            <CardBody className='h-full w-full flex flex-col items-start justify-start'>
                <div className='flex justify-between min-h-20 w-full'>
                    <div>
                        <p className='text-xl text-semibold'>Dr Pablo Cordova Tapia</p>
                        <span className='block text-xs text-gray-400' >9876543210</span>
                        <span className='text-primary'>General medic</span>
                    </div>

                    <div className='text-right'>
                        {/* Change to todays date */}
                        <p className='text-sm text-gray-400'>{'September 20, 2023'}</p>
                        <p># <span className='text-semibold'>15696</span></p>
                    </div>
                </div>

                <Divider />

                <PrescriptionForm patient={{
                    fullname: 'Christian Pablo Cruz García',
                    gender: 'male',
                    id: 'CRGA010603HJCNLCA4',
                }} />

            </CardBody>




        </Card>
    )
}