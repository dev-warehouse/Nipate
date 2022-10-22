import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { ModalUnstyled } from '@mui/base'
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import { Outlet, useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/all'
import RouteErrorHandling from '@global/errors/router'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.scss'

function Backdrop({
  setState,
  open
}: {
  setState: Dispatch<SetStateAction<boolean>>
  open: boolean
}) {
  return (
    <CSSTransition
      in={open}
      classNames={{
        enter: styles.fade_enter,
        enterActive: styles.fade_enter_active,
        exit: styles.fade_exit,
        exitActive: styles.fade_exit_active
      }}
      timeout={250}
      unmountOnExit
    >
      <ButtonUnstyled
        component='div'
        className={styles.modal_backdrop}
        onClick={() => setState(false)}
      />
    </CSSTransition>
  )
}

function ModalContent({
  open,
  setOpen,
  callback
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  callback: () => void
}) {
  useEffect(() => setOpen(true), [setOpen])
  const ref = useRef<HTMLDivElement>(null)

  return (
    <CSSTransition
      in={open}
      timeout={250}
      onExited={callback}
      nodeRef={ref}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.show_enter,
        enterActive: styles.show_enter_active,
        exit: styles.show_exit,
        exitActive: styles.show_exit_active
      }}
    >
      <div className={styles.modal_container} ref={ref}>
        <div className={styles.modal_header}>
          <ButtonUnstyled
            component='div'
            className={styles.modal_close}
            onClick={() => setOpen(false)}
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
    </CSSTransition>
  )
}

function Modal() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('..')
  }

  return (
    <ModalUnstyled open>
      <div className={styles.modal_root}>
        <Backdrop setState={setOpen} open={open} />
        <ModalContent open={open} setOpen={setOpen} callback={handleClose} />
      </div>
    </ModalUnstyled>
  )
}

export default Modal
