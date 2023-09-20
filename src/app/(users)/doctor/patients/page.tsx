'use client'
import { Chip, ChipProps, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import React from "react";
import { columns } from "./data";
import { patients } from "./data";
import Link from "next/link";

const genderColorMap: Record<string, ChipProps["color"]> = {
    male: "secondary",
    female: "danger",
};



export default function Page() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <Link href={'/doctor/patient-overview'}>
                        <User
                            avatarProps={{ radius: "lg", src: user.avatar }}
                            name={cellValue}
                        >
                            {user.phonenumber}
                        </User>
                    </Link>
                );
            case "age":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                    </div>
                );

            case 'phone':
                return (
                    <div className="flex flex-col">
                        <p className="font-semibold text-sm capitalize">{user.phonenumber}</p>
                    </div>
                )
            case 'email':
                return (
                    <div className="flex flex-col">
                        <p className="text-sm">{user.email}</p>
                    </div>
                )
            case "gender":
                return (
                    <Chip className="capitalize" color={genderColorMap[user.gender]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );

            default:
                return cellValue;
        }
    }, []);

    return (
        <>
            <div className="w-full flex flex-col gap-5 mb-5" >
                <h1 className="text-2xl font-semibold w-full">Patients</h1>
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={patients}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}