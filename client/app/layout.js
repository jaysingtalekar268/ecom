"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import ReduxStoreProvider from "../store/provider"
import NavbarComponent from '@/components/navbar/navbar';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxStoreProvider>
          <NavbarComponent></NavbarComponent>
         
            {children}
          
        </ReduxStoreProvider>
      </body>
    </html>
  )
}
