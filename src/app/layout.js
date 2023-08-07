import './globals.css'

export const metadata = {
  title: 'Pranav Chandra | My Portfolio',
  description: 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
