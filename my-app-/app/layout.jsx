import Navigation from "../components/Navigation"
import "../styles/globals.css"
import { font } from "./font"

export default function RootLayout({ children }) {
 //className={font.className}
 
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
