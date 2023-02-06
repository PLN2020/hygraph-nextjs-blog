import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import './globals.css'
import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="bg-darkest text-lightest antialiased">
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
