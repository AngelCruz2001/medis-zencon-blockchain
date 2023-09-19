'use client'
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
export default function Page() {

  const appointments = [
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

  return (
    <div className='h-full w-full'>
      <Card >
        <CardHeader>
          <p className='text-2xl text-gray-400'>Appointmets today</p>
        </CardHeader>
        <CardBody>
          <Table aria-label="Appointments for the day">
            <TableHeader>
              <TableColumn>Patient</TableColumn>
              <TableColumn>Hour</TableColumn>
              <TableColumn>Cost appointment</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}