/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CustomTable.tsx
import React from 'react'

export type Column<T> = {
    title: string
    dataIndex: keyof T | string
    key: string
    render?: (value: T[keyof T], record: T, index: number) => React.ReactNode
}

export interface CustomTableProps<T> {
    columns: Column<T>[]
    dataSource: T[]
    rowKey?: keyof T
    className?: string
}

export function CustomTable<T>({
    columns,
    dataSource,
    rowKey,
    className,
}: CustomTableProps<T>) {
    return (
        <div className="w-full overflow-x-auto overflow-y-auto ">
            <table className={`table table-hover w-full ${className || ''}`}>
                <thead className="sticky top-0 bg-white shadow-sm">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>{col.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((record, index) => {
                        const key = rowKey
                            ? (record as any)[rowKey as keyof T]
                            : index
                        return (
                            <tr key={String(key)} className="unread">
                                {columns.map((col) => (
                                    <td key={col.key}>
                                        {col.render
                                            ? col.render(
                                                (record as any)[col.dataIndex],
                                                record,
                                                index
                                            )
                                            : ((record as any)[col.dataIndex] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


