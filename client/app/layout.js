"use client";
import './globals.css'
import ReduxStoreProvider from "../store/provider"
import NavbarComponent from '@/components/navbar/navbar';
import FooterComponent from '@/components/footer/footer';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ReduxStoreProvider>
          <NavbarComponent></NavbarComponent>
         
            {children}
          <FooterComponent/>
        </ReduxStoreProvider>
      </body>
    </html>
  )
}
