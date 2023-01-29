"use client"

import { Menu } from "@headlessui/react";

const DropdownMenu = () => {
    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/archive/2022"
                        >
                            2022
                        </a>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default DropdownMenu