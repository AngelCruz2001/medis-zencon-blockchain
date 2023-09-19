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
        email: "+52 (618) 325 - 92 - 26"
    },
    {
        id: 2,
        name: "Lisa Johnson",
        appointmentDate: "Thu 21 Sep 3:00 PM",
        quickDate: "Tomorrow",
        status: "canceled",
        age: "35",
        avatar: "https://i.pravatar.cc/150?u=b042581f4e29026024e",
        email: "lisa.johnson@example.com"
    },
    {
        id: 3,
        name: "Michael Smith",
        appointmentDate: "Fri 22 Sep 2:15 PM",
        quickDate: "Tomorrow",
        status: "paid",
        age: "42",
        avatar: "https://i.pravatar.cc/150?u=c042581f4e29026024f",
        email: "michael.smith@example.com"
    },
    {
        id: 4,
        name: "Sarah Davis",
        appointmentDate: "Mon 25 Sep 9:45 AM",
        quickDate: "In 4 Days",
        status: "pending",
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=d042581f4e290260250",
        email: "sarah.davis@example.com"
    },
    {
        id: 5,
        name: "John Wilson",
        appointmentDate: "Tue 26 Sep 4:30 PM",
        quickDate: "In 5 Days",
        status: "pending",
        age: "37",
        avatar: "https://i.pravatar.cc/150?u=e042581f4e290260251",
        email: "john.wilson@example.com"
    },
    {
        id: 6,
        name: "Emily Rodriguez",
        appointmentDate: "Wed 27 Sep 11:00 AM",
        quickDate: "In 6 Days",
        status: "paid",
        age: "31",
        avatar: "https://i.pravatar.cc/150?u=f042581f4e290260252",
        email: "emily.rodriguez@example.com"
    }
];


export { columns, patientRecords };
