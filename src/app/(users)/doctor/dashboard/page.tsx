'use client'
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader, Checkbox } from '@nextui-org/react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { useState } from 'react';
import PatientTable from './patientTable';
export default function Page() {

  const appointmentsData = [
    {
      id: 1,
      name: 'John Doe',
      hour: '10:30 AM',
      cost: '$49.99'
    },
    {
      id: 2,
      name: 'Tesco Market',
      hour: '12:30 PM',
      cost: '$49.99'
    },
    {
      id: 3,
      name: 'John Mathew Kayne',
      hour: '2:00 PM',
      cost: '$49.99'
    },
    {
      id: 4,
      name: "Fiorgio Restaurant",
      hour: '4:00 PM',
      cost: '$49.99'
    },
    {
      id: 5,
      name: 'Ann Marlin',
      hour: '5:00 PM',
      cost: '$49.99'
    },
    {
      id: 1,
      name: 'John Doe',
      hour: '10:30 AM',
      cost: '$49.99'
    },
    {
      id: 2,
      name: 'Tesco Market',
      hour: '12:30 PM',
      cost: '$49.99'
    },
    {
      id: 3,
      name: 'John Mathew Kayne',
      hour: '2:00 PM',
      cost: '$49.99'
    },
    {
      id: 4,
      name: "Fiorgio Restaurant",
      hour: '4:00 PM',
      cost: '$49.99'
    },
    {
      id: 5,
      name: 'Ann Marlin',
      hour: '5:00 PM',
      cost: '$49.99'
    }
  ];

  const [appointments, setAppointments] = useState(appointmentsData)

  const handleDelete = (id: number) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(newAppointments)
  }

  return (
    <div className='h-full w-full'>
      <div className='flex w-full h-[500px] overflow-hidden'>

      <section className='flex w-3/4 h-full overflow-y-auto'>
        <PatientTable />
      </section>
     
      <section className='flex w-1/2'>
        
        <PatientTable />

      </section>

      </div>


    </div>
  )
}