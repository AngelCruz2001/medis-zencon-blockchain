'use client'

import { Card, CardHeader, CardBody } from '@nextui-org/react';

type patient =  { 
    date: string,
    doctorName: string,
    prescription: {
        medicineId: string,
        instructions: string,
    }[], 
    medicalDiagnostic: string,
    wayPoint: { 
        lat: number,
        lng: number,
    }, 
    patient: {
        weight: number,
        height: number,
        
    }
}


export default function Page() {

  return (
    <Card className='h-full w-full'>
        
        <CardHeader >
            <h1>Prescriptions</h1>
        </CardHeader>

        <CardBody>



        </CardBody>




    </Card>
  )
}