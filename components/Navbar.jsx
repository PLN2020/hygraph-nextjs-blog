import React from 'react'
import NavLink from '../app/nav-link'

const Navbar = () => {
    return (
        <header className='border-b p-4'>
            <nav className='space-x-4'>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about-me">About Me</NavLink>
                <NavLink href="/food-photography">Food Photography</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                <NavLink href="/blog">Blog</NavLink>
            </nav>
        </header>
    )
}

export default Navbar