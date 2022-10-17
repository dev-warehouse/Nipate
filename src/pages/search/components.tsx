import { DOMAttributes, useRef, useState } from 'react'
import { CheckBox, MultiSelect, Option } from '@components/selectors'
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { SelectOption } from '@mui/base/SelectUnstyled/useSelect.types'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled/PopperUnstyled'
import ClickAwayListener from '@mui/base/ClickAwayListener/ClickAwayListener'
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
  <div className={styles.category_select_root}>
    <div className={styles.category_select_items_container}>
      <main>
        {options.length > 0 ? (
          options.map(option => (
            <div className={styles.category_select_item_selected}>
              <p>{option.label}</p>
            </div>
          ))
        ) : (
          <div className={styles.category_select_item}>
            <p>Category</p>
          </div>
        )}
      </main>
    </div>
    <TbChevronDown />
  </div>
)

export function CategorySelect() {
  // TODO  Fetch Categories from server
  return (
    <MultiSelect renderValue={renderCategorySelect}>
      <Option value='Hello' className={styles.select_option}>
        Housing
      </Option>
      <Option value='Hellos' className={styles.select_option}>
        Catering
      </Option>
    </MultiSelect>
  )
}

function AvailabilityItem({ label }: { label: string }) {
  return (
    <div className='flex flex-row gap-2.5 p-2.5 items-center'>
      <CheckBox id={label.toLowerCase()} />
      <label htmlFor={label.toLowerCase()} className='text-content-sm'>
        {label}
      </label>
    </div>
  )
}

export function AvailabilitySelect() {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div ref={ref}>
        <ButtonUnstyled
          className={styles.availability_root}
          onClick={() => setOpen(prevState => !prevState)}
        >
          <div className={styles.category_select_root}>
            <div className={styles.category_select_item}>
              <p>Availability</p>
            </div>
            {isOpen ? <TbChevronUp /> : <TbChevronDown />}
          </div>
        </ButtonUnstyled>
        <PopperUnstyled open={isOpen} anchorEl={ref.current}>
          <div className='px-2.5 py-5 m-2 rounded-lg shadow bg-white'>
            <div className='flex flex-row gap-1'>
              <div className='flex flex-col gap-1'>
                <AvailabilityItem label='Monday' />
                <AvailabilityItem label='Tuesday' />
                <AvailabilityItem label='Wednesday' />
                <AvailabilityItem label='Thursday' />
              </div>
              <div className='flex flex-col gap-1'>
                <AvailabilityItem label='Friday' />
                <AvailabilityItem label='Saturday' />
                <AvailabilityItem label='Sunday' />
              </div>
            </div>
          </div>
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  )
}
