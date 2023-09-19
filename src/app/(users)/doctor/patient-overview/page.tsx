'use client'
import { Avatar, Button, Card, CardBody, Tab, Tabs, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PersonalInfo } from './personal-info';
import { MedicalInfo } from './medical-info';

export default function Page() {

  const [canEdit, setCanEdit] = useState(false);

  return (
    <div className='h-full w-full'>
      <h2 className="text-2xl font-semibold">Patient Overview</h2>

      <Card className="mt-7 min-h-[500px]" >
        <CardBody>
          <div className='flex gap-3 items-center' >
            <Avatar src="https://i.pravatar.cc/150?" className="w-20 h-20 text-large" />
            <h1 className='text-2xl font-semibold w-72' >Ángel Eduardo Cruz García</h1>
            <Button className='ml-auto' color={canEdit ? 'danger' : 'primary'} disabled={!canEdit} onPress={() => setCanEdit(!canEdit)}>
              {canEdit ? 'Cancel' : 'Edit'}
            </Button>
          </div>
          <div className="mt-8">
            <Tabs aria-label="Options" className='mb-3' onSelectionChange={(sectionTouched) => {
              setCanEdit(false);
            }}>
              <Tab key="personal" title="Personal Info">
                <PersonalInfo canEdit={canEdit} />
              </Tab>
              <Tab key="medical" title="Medical Info">
                <MedicalInfo canEdit={canEdit} />
              </Tab>
              <Tab key="appointment-history" title="Appoinment history">
                appoinments
              </Tab>
            </Tabs>
          </div>
        </CardBody>
      </Card>

    </div >
  )
}