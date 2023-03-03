import NavLink from './NavLink'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="sticky flex justify-between items-center top-0 h-[10vh] bg-lightest px-10 z-10 text-darkest">
            <div>
                <NavLink href='/'>Website Title</NavLink>
            </div>
            
            <div className="flex justify-center items-center">
                <div className="flex space-x-8 mr-10">
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/portfolio'>Portfolio</NavLink>
                    <NavLink href='/blog'>Blog</NavLink>
                    <NavLink href='/contact'>Contact</NavLink>  
                </div>

                <div className="border-l-2 border-gray-600 h-8" />

                <div className="flex space-x-4 ml-10">
                    <NavLink href="https://www.twitter.com" target="_blank">
                        <FaTwitter />
                    </NavLink>
                    <NavLink href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                    </NavLink>
                    <NavLink href="https://www.facebook.com" target="_blank">
                        <FaFacebook />
                    </NavLink>
                    <NavLink href="https://www.youtube.com" target="_blank">
                        <FaYoutube />
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar