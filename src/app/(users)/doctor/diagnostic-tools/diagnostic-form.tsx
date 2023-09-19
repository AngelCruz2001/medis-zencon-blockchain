import { AddIcon } from '@/svg';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form';

export const DiagnosticForm = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <>
            <Button onPress={onOpen} color="primary" className="flex" startContent={<span className="apect-square w-6">
                <AddIcon />
            </span>} >
                Add diagnostic
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size='3xl'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">AI Diagnostic</ModalHeader>
                            <ModalBody>
                                <Input type="text" label="Symptoms" placeholder="ex. headache, fever, cough, etc" {...register("symptoms")} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Diagnostic
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}
