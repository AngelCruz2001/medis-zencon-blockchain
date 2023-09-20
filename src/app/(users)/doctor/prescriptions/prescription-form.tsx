import { Input, Textarea, Button, Divider } from '@nextui-org/react';
import { useFieldArray, useForm } from 'react-hook-form';
import { PrescriptionFormType } from './interfaces';

export const PrescriptionForm = ({ patient }: {
    patient: {
        id: string,
        fullname: string,
        gender: string,
    }
}) => {
    const { handleSubmit, control, register, formState: { errors } } = useForm({
        defaultValues: {
            diagnostic: '',
            summary: '',
            aditionalNotes: '',
            followUp: '',
            weight: '',
            height: '',
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

    const onSubmit = (data: PrescriptionFormType) => {
        console.log({ data })
    }

    const { fullname, gender, id } = patient;
    return (
        <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
            <div className='w-full flex flex-wrap gap-3 mt-4'>
                <h4 className='font-semibold w-full'>Patient</h4>
                <div className='w-full'>
                    <p className="text-gray-400 text-xs">{id}</p>
                    <p className="text-sky-600 font-semibold">{fullname} </p>
                    <p className="text-gray-400 text-xs">{gender}</p>
                </div>
                <Input
                    label="height"
                    type="number"
                    placeholder=""
                    className='w-24 flex-1 md:flex-none md:w-32'
                    endContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-gray-400 text-small">cm</span>
                        </div>
                    }

                    {...register('height')}
                />
                <Input
                    label="weight"
                    type="number"
                    placeholder=""
                    className='w-24 flex-1 md:flex-none md:w-32'
                    endContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-gray-400 text-small">kg</span>
                        </div>
                    }
                    {...register('weight')}
                />

                <Divider />

                <h4 className='font-semibold w-full'>Medications</h4>
                <Button type='button' className='bg-sky-600'
                    onClick={() => {
                        prepend({
                            name: '',
                            instructions: '',
                        })
                    }} aria-label="Add other medicine">
                    <p className='text-sm text-white' >Add item</p>
                </Button>

                <div className='flex w-full flex-col max-h-[350px] mb-4 gap-2 overflow-y-auto overflow-x-hidden'>
                    {
                        fields.map((field, index) => (
                            <div key={field.id} className='flex gap-2 md:gap-4 items-center'>
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
                                    placeholder="ex. Take 1 pill every 8 hours for 5 days"
                                    {...register(`prescription.${index}.instructions`, { required: true })} />

                                <Button onClick={() => {
                                    remove(index)
                                }} isIconOnly color='danger' aria-label='delete medicines'>
                                    <span className='text-sm md:last:text-2xl'>-</span>
                                </Button>
                            </div>
                        ))
                    }
                </div>

                <Textarea
                    isRequired
                    label="Appointment summary"
                    labelPlacement="outside"
                    placeholder="ex. John Doe arrived at Anytown Medical Center on time for his appointment, He reported experiencing occasional headaches but no other significant symptoms..."
                    className="w-full"
                    {...register('summary', { required: true })}
                />
                <Textarea
                    isRequired
                    label="Medical diagnostic"
                    labelPlacement="outside"
                    placeholder="ex. Hypertension (High Blood Pressure)..."
                    className="w-full"
                    {...register('diagnostic', { required: true })}
                />
                <Textarea
                    label="Follow up instructions"
                    labelPlacement="outside"
                    placeholder="ex. Schedule a follow-up appointment for December, Monitor blood pressure at home regularly, etc..."
                    className="md:w-[50%]"
                    {...register('followUp')}
                />
                <Textarea
                    label="Aditional notes"
                    labelPlacement="outside"
                    placeholder="ex. Patient expressed understanding of the treatment plan and appeared motivated to make necessary lifestyle changes..."
                    className="flex-1"
                    {...register('aditionalNotes')}
                />
            </div>

            <Button type='submit' color='primary' className='mt-4'>
                Create prescription
            </Button>
        </form>
    )
}
