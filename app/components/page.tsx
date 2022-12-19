import { FormInput, Input } from '@design/input'

export default function Components() {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-lg font-bold text-center'>Components</p>
      <Input placeholder='Hello sample Input' />
      <Input placeholder='Success' dataValidity="success" />
      <Input placeholder='Warning' dataValidity="warning" />
      <Input placeholder='Error' dataValidity="error" />
      <FormInput
        label='Form Input'
      />
      <FormInput
        label='Success Form'
        feedback={{ message: 'success', variant: 'success' }}
      />
      <FormInput
        label='Warning Form'
        feedback={{ message: 'warning', variant: 'warning' }}
      />
      <FormInput
        label='Error Form'
        feedback={{ message: 'error', variant: 'error' }}
      />
    </div>
  )
}
