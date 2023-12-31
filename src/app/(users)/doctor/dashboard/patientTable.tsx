import React from "react";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { EditIcon } from "./icons/EditIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { columns, patientRecords } from "./data";

const statusColorMap = {
    paid: "success",
    canceled: "danger",
    pending: "warning",
};

export default function PatientTable() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    // <User
                    //     avatarProps={{ radius: "lg", src: user.avatar }}
                    //     description={user.email}
                    //     name={cellValue}
                    // >
                    //     {user.email}
                    // </User>
                    <div>
                        <h3>{cellValue}</h3>
                        <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                );
            case "appointmentDate":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-xs capitalize text-gray-400">{user.quickDate}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-gray-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-gray-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold mt-3 mb-2">Appointments</h1>
            <Table aria-label="Appointments dates">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={patientRecords}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
