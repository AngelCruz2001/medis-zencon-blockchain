'use client'
import { useState } from 'react';
import PatientTable from './patientTable';
import Stats from './stats';
import { MostPrescribed } from './MostPrescribed';
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

      <Stats />

      <div className='flex w-full h-[390px] gap-4'>
        <section className='flex w-3/4 h-full'>
          <PatientTable />
        </section>
        <section className='flex'>
          <MostPrescribed />
        </section>
      </div>



    </div>
  )
}