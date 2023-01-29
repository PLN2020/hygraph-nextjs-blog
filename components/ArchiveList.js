import React from 'react'
import DropdownMenu from './DropdownMenu';

const ArchiveList = () => {
    let minYear = 2019;
    let years = [2019];

    const currentYear = new Date().getFullYear();
    while (currentYear > minYear) {
        minYear++;
        years.push(minYear);
    }

    return (
        <DropdownMenu />
    )
}

export default ArchiveList