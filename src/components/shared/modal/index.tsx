import { MutableRefObject, RefObject, useState } from 'react'
import { ModalUnstyled } from '@mui/base'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import { Outlet, useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/all'
import RouteErrorHandling from '@global/errors/router'
import styles from './index.module.scss'

interface ModalProps {
  parentRef: RefObject<HTMLDivElement> | MutableRefObject<HTMLDivElement>
}

function Backdrop({ onClick }: { onClick: () => void }) {
  return (
    <ButtonUnstyled
      component='div'
      className={styles.modal_backdrop}
      onClick={onClick}
    />
  )
}

function Modal({ parentRef }: ModalProps) {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('..')
    setOpen(false)
  }

  return (
    <ModalUnstyled
      open={open}
      onClose={handleClose}
      container={parentRef.current}
      className={styles.modal_root}
      components={{ Backdrop }}
      componentsProps={{ backdrop: { onClick: handleClose } }}
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <ButtonUnstyled
            component='div'
            className={styles.modal_close}
            onClick={handleClose}
          >
            <MdClose />
          </ButtonUnstyled>
        </div>
        <main className={styles.modal_main}>
          <RouteErrorHandling>
            <Outlet />
          </RouteErrorHandling>
        </main>
      </div>
    </ModalUnstyled>
  )
}

export default Modal
