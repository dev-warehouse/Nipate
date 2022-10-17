import { DOMAttributes, useRef, useState } from 'react'
import { CheckBox, MultiSelect, Option } from '@components/selectors'
import { TbChevronDown, TbChevronUp } from 'react-icons/tb'
import { SelectOption } from '@mui/base/SelectUnstyled/useSelect.types'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled/PopperUnstyled'
import ClickAwayListener from '@mui/base/ClickAwayListener/ClickAwayListener'
import useSelect from '@mui/base/SelectUnstyled/useSelect'
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
            <div
              className={styles.category_select_item_selected}
              key={option.value}
            >
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

const availabilityDays: SelectOption<string>[] = [
  {
    value: 'monday',
    label: 'Monday'
  },
  {
    value: 'tuesday',
    label: 'Tuesday'
  },
  {
    value: 'wednesday',
    label: 'Wednesday'
  },
  {
    value: 'thursday',
    label: 'Thursday'
  },
  {
    value: 'friday',
    label: 'Friday'
  },
  {
    value: 'saturday',
    label: 'Saturday'
  },
  {
    value: 'sunday',
    label: 'Sunday'
  }
]

export function AvailabilitySelect() {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  const {
    getOptionState,
    getOptionProps,
    getListboxProps,
    getButtonProps,
    value
  } = useSelect<string>({
    options: availabilityDays,
    defaultValue: [],
    multiple: true
  })

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div ref={ref}>
        <ButtonUnstyled
          className={styles.availability_btn}
          {...getButtonProps()}
          onClick={() => setOpen(prevState => !prevState)}
        >
          <div className={styles.category_select_root}>
            <div className={styles.category_select_items_container}>
              <main>
                {value.length > 0 ? (
                  value.map(option => (
                    <div
                      className={styles.category_select_item_selected}
                      key={option}
                    >
                      <p>{option}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.category_select_item}>
                    <p>Availability</p>
                  </div>
                )}
              </main>
            </div>
            {isOpen ? <TbChevronUp /> : <TbChevronDown />}
          </div>
        </ButtonUnstyled>
        <PopperUnstyled open={isOpen} anchorEl={ref.current}>
          <div className='px-2.5 py-5 m-2 rounded-lg shadow bg-white'>
            <div className='grid grid-cols-2' {...getListboxProps()}>
              {availabilityDays.map(day => (
                <div
                  className='flex flex-row gap-2.5 p-2.5 items-center'
                  key={day.value}
                >
                  <CheckBox
                    id={day.value}
                    checked={getOptionState(day).selected}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onChange={() => {}}
                    {...getOptionProps(day)}
                  />
                  <label
                    htmlFor={day.value}
                    {...getOptionProps(day)}
                    className='text-content-sm'
                  >
                    {day.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  )
}
