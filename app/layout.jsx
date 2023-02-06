import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import './globals.css'
import 'tailwindcss/tailwind.css'
import { Roboto_Mono, Open_Sans, Playfair_Display } from '@next/font/google'

const roboto_mono = Roboto_Mono({
    variable: '--font-roboto-mono',
    display: 'optional'
});

const playfair_display = Playfair_Display({
    variable: '--font-playfair-display',
    display: 'optional'
});

const open_sans = Open_Sans({
    variable: '--font-open-sans',
    display: 'optional'
});


export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`bg-darkest text-lightest antialiased ${roboto_mono.variable} ${playfair_display.variable} ${open_sans.variable}`}>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body>
                <Navbar />
                <div className='max-w-5xl mx-auto'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
