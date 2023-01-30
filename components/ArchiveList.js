"use client"

import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react'

export default function ArchiveList({ years }) {

    return (
        <Menu>
            <Menu.Button>Select Year</Menu.Button>

            <Menu.Items>
                {years.map((year) => (
                    <Menu.Item key={year.id}>
                        {({ active }) => (
                            <Link
                                className={`${active && 'bg-blue-500'}`}
                                href={`/blog/archive/${year.slug}`}
                            >
                                {year.slug}
                            </Link>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}