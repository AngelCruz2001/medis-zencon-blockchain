

import { Tab, Input, Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { Address, Patient } from './interfaces';

export const PersonalInfo = ({ canEdit, patient }: { canEdit: boolean, patient: Patient }) => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            street: patient.address.street,
            street2: patient.address.street2,
            city: patient.address.city,
            zip: patient.address.zip, 
            urbanization: patient.address.urbanization
        }
    });

    return (
        <>
            <div className='flex flex-wrap gap-2'>
                <Input
                    isDisabled
                    type="text"
                    label="Full Name"
                    className="max-w-xs"
                    defaultValue={patient.fullname}
                />
                <Input
                    isDisabled
                    type="text"
                    label="ID"
                    className="max-w-xs"
                    defaultValue={patient.id}
                />
                <Input
                    isDisabled
                    type="text"
                    label="Gender"
                    className="max-w-xs"
                    defaultValue={patient.gender}
                />
                <Input
                    isDisabled
                    type="text"
                    label="Age"
                    className="max-w-xs"
                    defaultValue={patient.age}
                />
                <Input
                    isDisabled
                    type="text"
                    label="Birthdate"
                    className="max-w-xs"
                    defaultValue={patient.birthdate}
                />
            </div>
            <div className='mt-5'>
                <h3 className='font-semibold mb-2' >Address</h3>
                <form className='flex gap-2 flex-wrap'>
                    <Input
                        isDisabled={!canEdit}
                        isRequired
                        type="text"
                        label="Street Addres"
                        className="max-w-xs"
                        defaultValue={patient.address.street}
                        {...register('street')}
                    />
                    <Input
                        isDisabled={!canEdit}
                        type="text"
                        label="Street Addres line 2"
                        className="max-w-xs"
                        defaultValue={patient.address.street2}
                        {...register('street2')}
                    />
                    <Input
                        isDisabled={!canEdit}
                        isRequired
                        type="text"
                        label="City"
                        className="max-w-xs"
                        defaultValue={patient.address.city}
                        {...register('city')}
                    />
                    <Input
                        isDisabled={!canEdit}
                        isRequired
                        type="number"
                        label="ZIP Code"
                        className="max-w-xs"
                        defaultValue={patient.address.zip}
                        {...register('zip')}
                    />
                    <Input
                        isDisabled={!canEdit}
                        type="text"
                        label="Urbanization"
                        className="max-w-xs"
                        defaultValue={patient.address.urbanization}
                        {...register('urbanization')}
                    />
                </form>
                {canEdit && (
                    <Button className='mt-5 ml-auto' color="primary">Save</Button>
                )}
            </div>
        </>
    )
}
