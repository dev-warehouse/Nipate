import FormInput, { ControlledFormElement } from '.'

export default function PasswordInput({
  register,
  errors,
  ...props
}: ControlledFormElement<any>) {
  return <FormInput {...props} />
}
