import { DOMAttributes } from 'react'
import { MultiSelect, Option } from '@components/selectors'
import { TbChevronDown } from 'react-icons/tb'
import { SelectOption } from '@mui/base/SelectUnstyled/useSelect.types'
import styles from './index.module.scss'

export function FilterItem({
  label,
  children
}: { label: string } & DOMAttributes<HTMLDivElement>) {
  return (
    <div className={styles.filter_item_container}>
      <p className={styles.filter_item_label}>{label}</p>
      {children}
    </div>
  )
}

const renderCategorySelect = (options: SelectOption<string>[]): JSX.Element => (
  <div className='flex flex-row items-center justify-between gap-2.5'>
    <div className='flex flex-row gap-1 items-center'>
      {options.length > 0 ? (
        options.map(option => (
          <div className='px-1.5 py-1 bg-gray-50 rounded-lg'>
            <p className='text-content-sm'>{option.label}</p>
          </div>
        ))
      ) : (
        <div className='px-1.5 py-1 rounded-lg'>
          <p className='text-content-sm'>Category</p>
        </div>
      )}
    </div>
    <TbChevronDown />
  </div>
)

export function CategorySelect() {
  // TODO  Fetch Categories from server
  return (
    <MultiSelect renderValue={renderCategorySelect}>
      <Option value='Hello' className='text-base'>
        Housing
      </Option>
      <Option value='Hellos' className='text-base'>
        Catering
      </Option>
    </MultiSelect>
  )
}
