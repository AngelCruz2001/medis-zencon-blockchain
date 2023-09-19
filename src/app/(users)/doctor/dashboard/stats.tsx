import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { PersonAddIcon } from './icons/person-add'
import { PeopleIcon } from './icons/people'
import { DocumentIcon } from './icons/document'


export default function Stats() {

    return (
        <section className='flex gap-3 w-full mb-5' >

            <Card className='w-72'>
                <CardBody>
                    <div className='flex items-start justify-start gap-3'>
                        <div className='aspect-square w-8 rounded-full fill-blue-700 bg-blue-200 p-2' >
                            <PersonAddIcon />
                        </div>
                        <div>
                            <h3 className='text-gray-500 font-medium'>New patients</h3>
                            <p className='text-4xl font-medium mt-2 mb-4'>83</p>
                            <p className='text-sm text-gray-600'>
                                <span className='text-success'>▲</span>
                                <span className='font-semibold'>46 patients</span> waiting
                            </p>

                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className='w-72'>
                <CardBody>
                    <div className='flex items-start justify-start gap-3'>
                        <div className='aspect-square w-8 rounded-full fill-yellow-600 bg-yellow-200 p-2' >
                            <PeopleIcon />
                        </div>
                        <div>
                            <h3 className='text-gray-500 font-medium'>Total patients</h3>
                            <p className='text-4xl font-medium mt-2 mb-4'>287</p>
                            <p className='text-sm text-gray-600'>
                                <span className='text-success'>▲</span>
                                <span className='font-semibold'>49</span> increase
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className='w-72'>
                <CardBody>
                    <div className='flex items-start justify-start gap-3'>
                        <div className='aspect-square w-8 rounded-full fill-danger-600 bg-danger-100 p-2' >
                            <DocumentIcon />
                        </div>
                        <div>
                            <h3 className='text-gray-500 font-medium'>Important tasks</h3>
                            <p className='text-4xl font-medium mt-2 mb-4'>12</p>
                            <p className='text-sm text-gray-600'>
                                <span className='text-danger'>▼</span>
                                <span className='font-semibold'>7 tasks</span> high priority
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </section>
    )
}