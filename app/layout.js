import { Roboto } from '@next/font/google'

const font = Roboto({
  weight: ['400', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />

      {/* <header>
        <nav>

        </nav>
      </header> */}

      <body className={font.className}>

        {children}
      </body>

    </html>
  )
}
