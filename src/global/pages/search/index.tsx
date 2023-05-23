import { Button } from '@components/ui/buttons'
import { Input } from '@components/ui/input'
import { MdOutlineMyLocation } from 'react-icons/md'
import { useMediaQuery } from 'usehooks-ts'
import { searchGif } from '@assets/img'
import { TbFilter } from 'react-icons/tb'
import PopperUnstyled from '@mui/base/PopperUnstyled/PopperUnstyled'
import { useRef, useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener/ClickAwayListener'
import {
  AvailabilitySelect,
  CategorySelect,
  FilterItem,
  LocationSelect
} from './components'
import styles from './index.module.scss'

function FilterForm() {
  return (
    <div className='p-5 flex flex-col gap-7'>
      <p className='text-lg font-semibold'>Filter query</p>
      <FilterItem label='Services'>
        <CategorySelect />
        <AvailabilitySelect />
      </FilterItem>
      <FilterItem label='Location'>
        <LocationSelect />
      </FilterItem>
    </div>
  )
}

function FilterIcon() {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const useDetailsRef = useRef(null)

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpenNav(false)
      }}
    >
      <div ref={useDetailsRef}>
        <Button
          variant='outline'
          className=''
          onClick={() => {
            setOpenNav(prevState => !prevState)
          }}
        >
          <TbFilter className={styles.filter_icon_icon} />
        </Button>
        <PopperUnstyled
          open={openNav}
          anchorEl={useDetailsRef.current}
          disablePortal
        >
          <div className={styles.filter_icon_dropdown}>
            <FilterForm />
          </div>
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  )
}

function SearchInput() {
  return (
    <Input
      placeholder='Search by location, service or category'
      autoFocus
      className={styles.hero_input}
      endAdornment={
        <div className={styles.hero_search_actions}>
          <div className={styles.hero_location_pin}>
            <MdOutlineMyLocation />
          </div>
          <Button className={styles.hero_search_btn}>Search</Button>
        </div>
      }
    />
  )
}

function SearchNoData() {
  return (
    <div className={styles.no_data_root}>
      <img src={searchGif} alt='Searching' className={styles.no_data_img} />
      <p className={styles.no_data_text}>Get your service easily</p>
    </div>
  )
}

function SearchPage() {
  const matches = useMediaQuery('(min-width: 868px)')

  return (
    <div className={styles.page_root}>
      <div className={styles.search_root}>
        <div className={styles.search_box}>
          <SearchInput />
          {!matches && <FilterIcon />}
        </div>
        <div className={styles.search_values}>
          <SearchNoData />
        </div>
      </div>
      {matches && <FilterForm />}
    </div>
  )
}

export default SearchPage