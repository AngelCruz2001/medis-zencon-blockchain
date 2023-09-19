import { AddIcon } from '@/svg';
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface Illness {
    name: string;
    dateDiagnosed: string;
    note: string;
}

const illnesses = [
    {
        name: 'Diabetes Type 1',
        dateDiagnosed: '01 Jan 2022',
        note: '70/30 insulin (a mixture of 70% NPH insulin and 30% regular insulin) and 75/25 insulin (a mixture of 75% insulin lispro protamine and 25% insulin lispro).'
    },
    {
        name: 'Primary Hypertension',
        dateDiagnosed: '04 March 2022',
        note: 'Lisinopril (Prinivil, Zestril)'
    }
]

export const MedicalInfo = ({ canEdit }: { canEdit: boolean }) => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [allergies, setAllergies] = useState([
        'peanut',
        'milk',
        'egg',
        'shrimp',
    ])

    const onDelete = (allergy: string) => {
        setAllergies(allergies.filter(a => a !== allergy))
    }

    const hanldeSubmit = (data: { [key: string]: string }) => {
        const { allergy } = data;
        setAllergies([...allergies, allergy]);
        reset();
    }

    return (
        <>
            <h3 className='font-semibold mb-2' >Illnesses</h3>
            <ul className='flex flex-wrap gap-2'>
                {illnesses.map(({ dateDiagnosed, name, note }, index) => (
                    <Card key={index} className='max-w-sm'>
                        <CardBody>
                            <span className='text-xs text-gray-400'>{dateDiagnosed}</span>
                            <h3 className='text-md font-medium text-primary-600'>{name}</h3>
                            <p className='text-xs text-gray-400 mt-2' >{note}</p>
                        </CardBody>
                    </Card>
                ))}
            </ul>
            <h3 className='font-semibold mb-2 mt-5' >Allergies</h3>
            <ul className='flex flex-wrap items-center justify-start gap-2'>
                {allergies.map((allergy, index) => {

                    if (canEdit) {
                        return (
                            <Dropdown>
                                <DropdownTrigger>
                                    <Card shadow='sm' isPressable={canEdit}>
                                        <CardBody>
                                            <span className='text-xs text-gray-400'>{allergy}</span>
                                        </CardBody>
                                    </Card>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => onDelete(allergy)}>
                                        Delete allergie
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
                    }

                    return (
                        <li key={index} >
                            <Card shadow='sm' isPressable={canEdit}>
                                <CardBody>
                                    <span className='text-xs text-gray-400'>{allergy}</span>
                                </CardBody>
                            </Card>
                        </li>
                    )
                })}
                {canEdit && (

                    <Popover placement="right">
                        <PopoverTrigger>
                            <Button radius='full' size='sm' className='aspect-square h-full bg-sky-600 text-white' >
                                <AddIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <form
                                className='py-3 flex flex-col gap-2'
                                onSubmit={handleSubmit(hanldeSubmit)}>
                                <Input
                                    type="text"
                                    defaultValue=""
                                    className="max-w-xs"
                                    label="Allergie"
                                    {...register('allergy')} />
                                <Button type="submit" color="primary">Add Allergy</Button>
                            </form>
                        </PopoverContent>
                    </Popover>

                )}
            </ul >
        </>
    )
}
