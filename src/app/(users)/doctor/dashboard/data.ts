import React from "react";

const columns = [
    { name: "NAME", uid: "name" },
    { name: "DATE", uid: "appointmentDate" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
];

const patientRecords = [
    {
        id: 1,
        name: "Tony Reichert",
        appointmentDate: "Wed 20 Sep 10:30 AM",
        quickDate: "Tomorrow",
        status: "paid",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "+52 618 321 9226"
    },
    {
        id: 2,
        name: "Lisa Johnson",
        appointmentDate: "Thu 21 Sep 3:00 PM",
        quickDate: "Tomorrow",
        status: "canceled",
        age: "35",
        avatar: "https://i.pravatar.cc/150?u=b042581f4e29026024e",
        email: "+52 618 349 2444"
    },
    {
        id: 3,
        name: "Michael Smith",
        appointmentDate: "Fri 22 Sep 2:15 PM",
        quickDate: "Tomorrow",
        status: "paid",
        age: "42",
        avatar: "https://i.pravatar.cc/150?u=c042581f4e29026024f",
        email: "+1 424 349 2262"
    },
    {
        id: 4,
        name: "Sarah Davis",
        appointmentDate: "Mon 25 Sep 9:45 AM",
        quickDate: "In 4 Days",
        status: "pending",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=d042581f4e290260250",
        email: "+52 618 321 9226"
    },
    {
        id: 5,
        name: "John Wilson",
        appointmentDate: "Tue 26 Sep 4:30 PM",
        quickDate: "In 5 Days",
        status: "pending",
        age: "37",
        avatar: "https://i.pravatar.cc/150?u=e042581f4e290260251",
        email: "+1 114 395 2262"
    },
    {
        id: 6,
        name: "Emily Rodriguez",
        appointmentDate: "Wed 27 Sep 11:00 AM",
        quickDate: "In 6 Days",
        status: "paid",
        age: "31",
        avatar: "https://i.pravatar.cc/150?u=f042581f4e290260252",
        email: "+52 618 321 9226"
    }
];


export { columns, patientRecords };
