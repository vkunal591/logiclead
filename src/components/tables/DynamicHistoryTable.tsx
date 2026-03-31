"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { FaSearch, FaHistory } from "react-icons/fa";

interface Column {
    key: string;
    label: string;
}

interface DynamicHistoryTableProps<T> {
    title: string;
    icon?: React.ReactNode;
    data: T[];
    columns: Column[];
    pageSize?: number;
    showSearch?: boolean;
    searchKeys?: string[]; // keys in object to search
    dateKeys?: { from?: string; to?: string } | any; // optional keys for date filtering
}

function DynamicHistoryTable<T extends Record<string, any>>({
    title,
    icon,
    data,
    columns,
    pageSize = 5,
    showSearch = true,
    searchKeys = [],
    dateKeys,
}: DynamicHistoryTableProps<T>) {
    const [searchText,] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filtered data based on search & dates
    const filteredData = useMemo(() => {
        let tempData = [...data];

        // Text search
        if (searchText && searchKeys.length > 0) {
            const text = searchText.toLowerCase();
            tempData = tempData.filter((item) =>
                searchKeys.some((key) => String(item[key]).toLowerCase().includes(text))
            );
        }

        // Date filtering
        if (fromDate && dateKeys?.from) {
            tempData = tempData.filter((item) => item[dateKeys.from] >= fromDate);
        }
        if (toDate && dateKeys?.to) {
            tempData = tempData.filter((item) => item[dateKeys.to] <= toDate);
        }

        return tempData;
    }, [data, searchText, fromDate, toDate, searchKeys, dateKeys]);

    // Pagination
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    return (
        <section className="my-5 max-w-7xl mx-auto overflow-hidden rounded-xl p-0 lg:p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 bg-primary lg:bg-transparent p-4 lg:p-0">
                <h4 className="text-xl text-white lg:text-gray-700 font-semibold flex items-center gap-2">
                    {icon || <FaHistory />} {title}
                </h4>
                {/* <Image src={'/assets/images/logo/bharat.png'} className="w-24 h-14 object-contain" width={800} height={800} alt="bharat connect" /> */}
            </div>

            {/* Search & Date Filters */}
            {showSearch && (searchKeys.length > 0 || dateKeys) && (
                <div className="flex flex-wrap gap-4 mb-4 items-end px-4 lg:px-0">

                    {dateKeys?.from && (
                        <div className="flex flex-col w-full lg:w-76">
                            <label className="text-sm font-medium mb-1">From Date</label>
                            <input
                                type="date"
                                value={fromDate}
                                onChange={(e) => {
                                    setCurrentPage(1);
                                    setFromDate(e.target.value);
                                }}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    )}

                    {dateKeys?.to && (
                        <div className="flex flex-col w-full lg:w-76">
                            <label className="text-sm font-medium mb-1">To Date</label>
                            <input
                                type="date"
                                value={toDate}
                                onChange={(e) => {
                                    setCurrentPage(1);
                                    setToDate(e.target.value);
                                }}
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 mx-auto  rounded-lg hover:bg-primary/90 transition"
                    >
                        <FaSearch className="inline mr-2" /> Search
                    </button>
                </div>
            )}

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto rounded-none">
                <table className="w-full table-auto border-collapse">
                    <thead className="bg-gray-50 text-left">
                        <tr>
                            {columns.map((col) => (
                                <th key={col.key} className="px-4 py-2 border-b border-gray-300">
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length > 0 ? (
                            paginatedData.map((item: any, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-4 py-2 border-b border-gray-300">
                                            {item[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden flex flex-col gap-3 p-4">
                {paginatedData.length > 0 ? (
                    paginatedData.map((item: any, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-300 rounded-2xl p-4 bg-white shadow flex flex-col gap-2"
                        >
                            {columns.map((col) => (
                                <div key={col.key} className="flex justify-between">
                                    <span className="font-medium text-gray-600">{col.label}:</span>
                                    <span className="text-gray-800">{item[col.key]}</span>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 py-4">No records found</div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 rounded-lg border ${page === currentPage
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
}

export default DynamicHistoryTable;
