import { DOMAttributes } from 'react'
export function FilterItem({
  label,
  children
}: { label: string } & DOMAttributes<HTMLDivElement>) {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-base font-medium'>{label}</p>
      {children}
    </div>
  )
}
