'use client'
import PatientTable from './patientTable';
import Stats from './stats';
import { MostPrescribed } from './MostPrescribed';
import { Map } from './map';

export default function Page() {

  return (
    <div className='h-full w-full'>

      <Stats />

      <div className='flex w-full min-h-[436px] flex-wrap md:flex-nowrap gap-4 items-end'>
        <section className='flex flex-1 w-3/4 h-full'>
          <PatientTable />
        </section>
        <section className='flex flex-1 md:flex-none'>
          <MostPrescribed />
        </section>

      </div>

      <div className="flex w-full mt-3">

        <Map />

      </div>
    </div>
  )
}