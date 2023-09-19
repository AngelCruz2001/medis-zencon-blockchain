

import { Tab, Input, Button } from '@nextui-org/react'

export const PersonalInfo = ({ canEdit }: { canEdit: boolean }) => {
    return (
        <>
            <div className='flex flex-wrap gap-2'>
                <Input
                    isDisabled
                    type="text"
                    label="Full Name"
                    defaultValue="Ángel Eduardo Cruz García"
                    className="max-w-xs"
                />
                <Input
                    isDisabled
                    type="text"
                    label="ID"
                    defaultValue="CRGA010603HJCNLCA4"
                    className="max-w-xs"
                />
                <Input
                    isDisabled
                    type="text"
                    label="Gender"
                    defaultValue="Male"
                    className="max-w-xs"
                />
                <Input
                    isDisabled
                    type="text"
                    label="Age"
                    defaultValue="22"
                    className="max-w-xs"
                />
                <Input
                    isDisabled
                    type="text"
                    label="Birthdate"
                    defaultValue="07/03/2001"
                    className="max-w-xs"
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
                        defaultValue="Calle de la Paz 154"
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled={!canEdit}
                        type="text"
                        label="Street Addres line 2"
                        defaultValue=""
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled={!canEdit}
                        isRequired
                        type="text"
                        label="City"
                        defaultValue="Durango"
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled={!canEdit}
                        isRequired
                        type="number"
                        label="ZIP Code"
                        defaultValue="34000"
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled={!canEdit}
                        type="text"
                        label="Urbanization"
                        defaultValue=""
                        className="max-w-xs"
                    />
                </form>
                {canEdit && (
                    <Button className='mt-5 ml-auto' color="primary">Save</Button>
                )}
            </div>
        </>
    )
}
