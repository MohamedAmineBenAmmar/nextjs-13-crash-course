// This font is going to be applied to everything in the app (we are inside the layout)
import { Poppins } from 'next/font/google'
// The Header component will be visible for every page so we bring it here
import Header from './components/Header'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

// Defining the global meta tags
// We can have custom meta tags for other page like (an other name for the page title)
// To configure the metadata in other pages you can put it in directly in the page or in a custom layout for that module where the page rezides.
export const metadata = {
  title: 'Super Sain App',
  description: 'Web Development with Next.js',
  keywords: 'nextjs, react, javascript, web development'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={poppins.className}>
        <Header />       
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
