import './globals.css'
import { Poppins } from 'next/font/google';
import Header from './components/Header';

// importing font family and applying it to the body below
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Code Ways',
  description: 'first next js hands on',
  keywords: 'Web development, web design, javascript, react, node, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className}>
        <Header />
        <main className="container">
        {children}          
        </main>
      </body>
    </html>
  )
}

// I want the <Header> to show on every page so thats why i brought it to the layout.jsx not the HomePage
// children passed in is basically any other page, route we create