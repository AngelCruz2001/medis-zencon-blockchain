import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody } from "@nextui-org/react";
import React, { useState } from 'react'

export const AppointmentsHistory = ({ appointments }: { appointments: DisplayAppointment[] }) => {
    const [activeAppointment, setActiveAppointment] = useState<DisplayAppointment | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const handleOpen = (index: number) => {
        setActiveAppointment(appointments[index]);
        onOpen();
    }

    return (
        <>
            <ul className="flex gap-4 flex-wrap" >
                {
                    appointments.map(({ additionalNotes, date, diagnostic, doctorName, followUp, height, weight, patientAge, prescription, summary }, index) => {

                        return (
                            <li key={index} className="min-w-[250px] max-w-full">
                                <Card isPressable className="w-full hover:bg-primary-50" onClick={() => handleOpen(index)}>
                                    <CardBody>
                                        <span className="text-xs ml-auto mb-2 text-primary font-medium" >{date}
                                        </span>
                                        <span className="ml-auto text-xs text-gray-400" ><b>Age:</b> {patientAge}
                                        </span>
                                        <span className="ml-auto text-xs text-gray-400" ><b>Weight:</b> {weight}
                                        </span>
                                        <h3 className="mt-4 text-md font-medium">Diagnostic</h3>
                                        <p className="text-sm text-gray-400">{diagnostic}</p>
                                    </CardBody>
                                </Card>
                            </li>
                        )
                    })
                }
            </ul>
            <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => {
                        const { additionalNotes, date, diagnostic, doctorName, followUp, height, weight, patientAge, prescription, summary } = activeAppointment;
                        return (
                            <>
                                <ModalHeader className="flex flex-col gap-1">

                                </ModalHeader>
                                <ModalBody>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )
                    }}
                </ModalContent>
            </Modal>
        </>
    )
}
