'use client'

import { MessagesIcon, NotificationsIcon } from '@/svg'
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react'
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

const messages: any = []

export const Navbar = () => {

    return (
        <nav className='h-16 w-full bg-white shadow-light text-black flex items-center px-4 justify-end gap-4 relative z-10' >

            <Dropdown>
                <DropdownTrigger>
                    <div className='aspect-square w-5 cursor-pointer transition-colors hover:text-primary-600' >
                        <MessagesIcon />
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key='empty' isReadOnly >
                        <p className='text-gray-500' >{'No new messages'}</p>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <DropdownTrigger>
                    <div className={`aspect-square w-5 cursor-pointer transition-colors hover:text-primary-600 relative`}
                    >
                        <NotificationsIcon />
                        {(notifications.length > 0) && (
                            <span className='absolute top-0 right-0 h-2 w-2 rounded-full bg-danger'></span>
                        )}
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    {
                        notifications.length ? (
                            notifications.map(({ label, text }, index) => {
                                return (
                                    <DropdownItem key={index}>
                                        <h4 className='font-semibold'>{label}</h4>
                                        <p className='text-gray-500' >{text}</p>
                                    </DropdownItem>
                                )
                            })
                        ) : (
                            <DropdownItem key='empty'>
                                <p className='text-gray-500' >{'No new messages'}</p>
                            </DropdownItem>
                        )
                    }
                </DropdownMenu>
            </Dropdown>

            <Dropdown>
                <DropdownTrigger>
                    <User
                        name="Andrew"
                        description="Admin account"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150"
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Change password</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Log out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </nav>
    )
}
