"use client";
import './globals.css'
import ReduxStoreProvider from "../store/provider"
import NavbarComponent from '@/components/navbar/navbar';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ReduxStoreProvider>
          <NavbarComponent></NavbarComponent>
         
            {children}
          
        </ReduxStoreProvider>
      </body>
    </html>
  )
}
