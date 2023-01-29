"use client"

import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react'

const ArchiveList = () => {
    let minYear = 2019;
    let years = [2019];

    const currentYear = new Date().getFullYear();
    while (currentYear > minYear) {
        minYear++;
        years.push(minYear);
    }

    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <Link
                            className={`${active && 'bg-blue-500'}`}
                            href="/archive/2022"
                        >
                            2022
                        </Link>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default ArchiveList