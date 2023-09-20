import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, Accordion, AccordionItem, Divider } from "@nextui-org/react";
import React, { useState } from 'react'
import { DisplayAppointment, Patient } from "./interfaces";

export const AppointmentsHistory = ({ appointments, patient }: { appointments: DisplayAppointment[], patient: Patient }) => {
    const [activeAppointment, setActiveAppointment] = useState<DisplayAppointment | null>(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const handleOpen = (index: number) => {
        setActiveAppointment(appointments[index]);
        onOpen();
    }

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
                        const { additionalNotes, date, diagnostic, doctorName, followUp, height, weight, patientAge, prescription, summary, clinic } = activeAppointment;
                        return (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    {/* <span className="text-sm text-gray-400" >{date}</span>
                                    <span className="text-lg font-medium">{doctorName}</span> */}
                                </ModalHeader>
                                <ModalBody>
                                    <div className="flex flex-wrap gap-3">
                                        <Card>
                                            <CardBody>
                                                <div className="flex flex-col gap-2">
                                                    <h3 className="text-lg font-medium mb-2">Medical Provider</h3>
                                                    <p className="text-sm text-primary font-semibold"><u>{doctorName}</u></p>
                                                    <p className="text-sm text-gray-400">{clinic.name}.</p>
                                                    <p className="text-sm text-gray-400">{clinic.address}.</p>
                                                    <p className="text-sm text-gray-400 font-semibold">{clinic.phone}</p>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-medium mt-5 mb-2">Patient</h3>
                                                    <p className="text-xs text-gray-400">age: <b className="font-semibold text-sm">{patientAge}</b>.</p>
                                                    <p className="text-xs text-gray-400">height: <b className="font-semibold text-sm">{height}</b>.</p>
                                                    <p className="text-xs text-gray-400">weight: <b className="font-semibold text-sm">{weight}</b>.</p>
                                                </div>
                                            </CardBody>
                                        </Card>

                                        <div className="flex-1">
                                            <div className="ml-4">
                                                <h2 className="text-xl font-semibold">Diagnostic</h2>
                                                <p className="text-gray-400" >{diagnostic}</p>
                                            </div>
                                            <div className="mt-5">
                                                <Accordion variant="splitted">
                                                    <AccordionItem key="1" aria-label="Summary" title="Summary">
                                                        <p className="text-gray-400" >{summary}.</p>
                                                    </AccordionItem>
                                                    <AccordionItem key="2" aria-label="Prescription" title="Prescription">
                                                        {
                                                            prescription.map((prescriptionItem, index) => {
                                                                const isLast = index === prescription.length - 1
                                                                return (
                                                                    <div>
                                                                        <p className="text-primary">{prescriptionItem.name}</p>
                                                                        <p className="text-gray-400">{prescriptionItem.instructions}
                                                                        </p>
                                                                        {
                                                                            !isLast && (
                                                                                <Divider className="my-2" />
                                                                            )
                                                                        }
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </AccordionItem>
                                                    <AccordionItem key="3" aria-label="Follow up instructions" title="Follow up instructions">
                                                        <p className="text-gray-400" >{followUp}.</p>
                                                    </AccordionItem>
                                                    <AccordionItem key="4" aria-label="Additional notes" title="Additional notes">
                                                        <p className="text-gray-400" >{additionalNotes}</p>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="bg-sky-600 text-white" variant="light" onPress={onClose}>
                                        Close
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
