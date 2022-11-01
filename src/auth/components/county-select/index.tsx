import { COUNTIES_LIST_URL } from '@/api/urls/location'
import { useAxios } from '@/core/hooks/axios'
import { County } from '@api/models/location'
import { Input } from '@components/ui/input'
import { Option, Select } from '@components/ui/selectors'
import ClickAwayListener from '@mui/base/ClickAwayListener/ClickAwayListener'
import { SelectOption } from '@mui/base/SelectUnstyled'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { CgSearch, CgSpinner } from 'react-icons/cg'
import { IoCaretDown, IoCaretUp } from 'react-icons/io5'
import styles from './index.module.scss'

interface SelectCountyProps {
  /**
   * Form Input Label
   */
  label: string
  /**
   *Identifier for input in form hook
   */
  name: string
  /**
   * Attaches component to form hook
   */
  control: Control<County | any>
  /**
   * Feedback message
   */
  errors: any
}

function SelectCountyInput({
  label,
  name,
  control,
  errors
}: SelectCountyProps) {
  const {
    field: { ref, onChange }
  } = useController({ control, name })

  const [open, setOpen] = useState<boolean>(false)

  const [results, setResults] = useState<County[]>([])

  const axios = useAxios()

  const { data, isLoading } = useQuery<County[]>(
    ['countries'],
    async () => {
      const { data: counties } = await axios.get(COUNTIES_LIST_URL)
      return counties
    },
    {
      suspense: false,
      onSuccess: res => {
        setResults(res)
      }
    }
  )

  function renderValue(option: SelectOption<County> | null): JSX.Element {
    return (
      <div className='w-full h-[1.5rem] flex flex-row items-center justify-between'>
        <span>{option?.label}</span>
        {open ? (
          <IoCaretUp className='inline' />
        ) : (
          <IoCaretDown className='inline' />
        )}
      </div>
    )
  }

  function handleChange(county: County) {
    onChange(county)
    setOpen(!open)
  }

  function closeSelect() {
    setResults(data ?? [])
    setOpen(!open)
  }

  return (
    <div className={styles.form_root}>
      <label
        htmlFor={name}
        className={styles.form_label}
        data-validity={errors[name] && 'error'}
      >
        {label}
      </label>
      <Select
        ref={ref}
        renderValue={option => renderValue(option)}
        onChange={(e, value) => handleChange(value)}
        listboxOpen={open}
        onClick={() => closeSelect()}
        dataValidity={errors[name] ? 'error' : undefined}
      >
        <ClickAwayListener onClickAway={() => closeSelect()}>
          <div>
            <div className='mb-3'>
              <Input
                placeholder='Filter counties'
                onChange={e => {
                  if (data) {
                    setResults(
                      data.filter(county =>
                        county.name.includes(e.target.value)
                      )
                    )
                  }
                }}
                endAdornment={<CgSearch className='w-5 h-5' />}
              />
            </div>
            <div className='h-40 overflow-hidden overflow-y-scroll'>
              {isLoading ? (
                <div className='inline-flex items-center p-2'>
                  Fetching counties
                  <CgSpinner className='mx-1 animate-spin' />
                </div>
              ) : (
                results?.map(county => (
                  <Option key={county.id} value={county} label={county.name}>
                    {county.name}
                  </Option>
                ))
              )}
            </div>
          </div>
        </ClickAwayListener>
      </Select>
      {errors[name] && (
        <p
          className={styles.form_message}
          data-validity={errors[name] && 'error'}
        >
          {errors[name].message}
        </p>
      )}
    </div>
  )
}

export default SelectCountyInput
