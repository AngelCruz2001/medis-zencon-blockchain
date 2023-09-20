'use client'
import { Avatar, Button, Card, CardBody, Tab, Tabs, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PersonalInfo } from './personal-info';
import { MedicalInfo } from './medical-info';
import { AppointmentsHistory } from './appointments-history';
import { appointments, patient } from './data';

export default function Page() {

  const [canEdit, setCanEdit] = useState(false);
  const [currentTab, setCurrentTab] = useState('personal');

  return (
    <div className='h-full w-full'>
      <h2 className="text-2xl font-semibold">Patient Overview</h2>

      <Card className="mt-7 min-h-[500px]" >
        <CardBody>
          <div className='flex gap-3 items-center' >
            <Avatar src="https://scontent.fsdu2-2.fna.fbcdn.net/v/t1.6435-1/117045249_1977291882402390_5907872103562619701_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH2EbO4lbNBb6ZeKbrIXb3b8T6EHDN1PmHxPoQcM3U-Yd4xpL6HOeslhtvkqpn-RXEhKwhMw0CRjxcCjexghlgg&_nc_ohc=ZMaoI3tJ0oQAX_xXcyO&_nc_ht=scontent.fsdu2-2.fna&oh=00_AfCke7_EJ4gvIU3mY3OKXGH7zBdTXD97_huMVkjt2nS5wg&oe=65325332" className="w-20 h-20 text-large" />
            <h1 className='text-2xl font-semibold w-72' >Ángel Cruz García</h1>
            {
              currentTab !== 'appointment-history' && (
                <Button className='ml-auto' color={canEdit ? 'danger' : 'primary'} disabled={!canEdit} onPress={() => setCanEdit(!canEdit)}>
                  {canEdit ? 'Cancel' : 'Edit'}
                </Button>
              )
            }
          </div>
          <div className="mt-8">
            <Tabs aria-label="Options" className='mb-3' onSelectionChange={(tabKey) => {
              setCanEdit(false);
              setCurrentTab(tabKey as string);
            }}>
              <Tab key="personal" title="Personal Info">
                <PersonalInfo patient={patient} canEdit={canEdit} />
              </Tab>
              <Tab key="medical" title="Medical Info">
                <MedicalInfo canEdit={canEdit} />
              </Tab>
              <Tab key="appointment-history" title="Appoinments history">
                <AppointmentsHistory appointments={appointments} patient={patient} />
              </Tab>
            </Tabs>
          </div>
        </CardBody>
      </Card>

    </div >
  )
}