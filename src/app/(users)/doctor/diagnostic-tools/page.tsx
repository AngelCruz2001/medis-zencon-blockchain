'use client'
import { Button, Card, CardBody } from "@nextui-org/react";
import { useState } from 'react';
import { DiagnosticForm } from './diagnostic-form';

interface Diagnostic {
    id: number,
    result: string
    symptoms: string
}

export default function Page() {

    const [diagnostics, setDiagnostics] = useState([
        {
            id: 3,
            result: 'Yellow Fever',
            symptoms: 'Fever, yellow skin, chills'
        },
        {
            id: 1,
            result: 'Diabetes',
            symptoms: 'high blood sugar'
        },
        {
            id: 2,
            result: 'High Blood Pressure',
            symptoms: 'high blood pressure'
        },
    ])

    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold">Diagnostic Tools</h1>
            <Card className="mt-7 min-h-[500px]" >
                <CardBody>
                    <div>
                        <DiagnosticForm />
                        <ul className="grid grid-cols-2 gap-3 mt-10" >
                            {
                                diagnostics.map(({ id, result, symptoms }) => (
                                    <li className="bg-primary-100 relative after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-primary py-5 px-4" key={id}>
                                        <h3 className="text-md" >{result}</h3>
                                        <p className="text-sm text-gray-400">{symptoms}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}