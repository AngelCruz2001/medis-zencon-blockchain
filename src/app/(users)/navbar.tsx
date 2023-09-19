'use client'

import { MessagesIcon, NotificationsIcon } from '@/svg'
import { Card, CardBody, User } from '@nextui-org/react'
import React, { useState } from 'react'


// idk how they're gonna look
const notifications = [
    {
        label: 'New message',
        text: 'you have a new message',
        href: '#',
        seen: false
    },
    {
        label: 'Angel Cruz',
        text: 'you have a new message',
        href: '#',
        seen: true
    },
    {
        label: 'New Appointment',
        text: 'yo have a new appointment',
        href: '#',
        seen: false
    },
]

export const Navbar = () => {

    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <nav className='h-16 w-full bg-white shadow-light text-black flex items-center px-4 justify-end gap-4 relative' >
            <div className='aspect-square w-5 cursor-pointer transition-colors hover:text-primary-600' >
                <MessagesIcon />
            </div>
            <div className={`aspect-square w-5 cursor-pointer transition-colors hover:text-primary-600 relative ${showNotifications ? '' : 'text-primary-600'}`}
                onClick={() => setShowNotifications(!showNotifications)}
            >
                <NotificationsIcon />
                {(notifications.length > 0 && showNotifications) && (
                    <span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600'></span>
                )}
            </div>

            {/* notifications */}
            <Card className={`absolute top-full right-0 z-20 transition-all ${showNotifications ? 'translate-x-full' : 'transalte-x-0'}`} >
                <CardBody className='gap-1'>
                    {
                        notifications.map(({ label, text }, index) => {
                            return (
                                <div className='px-3 py-2 rounded-md shadow-light' key={index}>
                                    <h4 className='text-sm'>{label}</h4>
                                    <p className='text-xs' >{text}</p>
                                </div>
                            )
                        })
                    }
                </CardBody>
            </Card>

            <User
                name="Andrew"
                description="Admin account"
                avatarProps={{
                    src: "https://i.pravatar.cc/150"
                }}
            />
        </nav>
    )
}
