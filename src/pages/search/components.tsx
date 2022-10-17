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
  <div className={styles.category_select_root}>
    <div className={styles.category_select_items_container}>
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
