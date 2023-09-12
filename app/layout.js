import '@styles/globals.css'

export const metadata = {
  title: 'Sonce .dwg',
  description: 'SONCE. DWG, CROSS-CREATIVE STUDIO WITH A MISSION',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
