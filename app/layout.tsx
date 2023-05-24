import { DOMAttributes } from 'react'
import './global.scss'

export default function Layout({ children }: DOMAttributes<never>) {
  return (
    <html>
      <body>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
