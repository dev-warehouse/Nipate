import {HTMLAttributes, useRef, useState} from "react";
import Image from "next/image";
import logo_img from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {ClickAwayListener, PopperUnstyled} from "@mui/base";
import Link from "next/link";
import {TbExternalLink, TbNotification} from "react-icons/tb";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    page?: 'auth' | 'normal' | 'provider'
}

function NotificationSection({page}: HeaderProps) {
    return <div>
        <TbNotification className="w-6 h-6"/>
    </div>;
}

function MessagerSection({page}: HeaderProps) {
    return <div>
        <TbNotification className="w-6 h-6"/>
    </div>;
}

function UserSection({page}: HeaderProps) {

    const {currentUser, removeUser} = useAuth()

    // This state opens the detail menu for avatar element
    const [openNav, setOpenNav] = useState<boolean>(false)

    // Ref for avatar component to enable popper to anchor to it
    const useDetailsRef = useRef(null)

    // This handles User feedback on signOut
    const signOut = () => {
        removeUser()
    }

    const Nav = () => {
        return <ClickAwayListener onClickAway={() => setOpenNav(false)}>
            <PopperUnstyled open={openNav} anchorEl={useDetailsRef.current}>
                <div className={styles.section_nav_menu}>
                    <p className={styles.user_section_userName}>
                        {currentUser?.firstName} {currentUser?.lastName}
                    </p>
                    <div className={styles.menuOption}>
                        <span
                            className="inline-flex flex-row items-center gap-1">
                            {currentUser?.roles.includes('provider') ?
                                <Link href={'/provider/dashboard'}>Provider Dashboard</Link> :
                                <Link href={'/provider/register'}>Register as Provider</Link>
                            }
                            <TbExternalLink/>
                        </span>
                    </div>
                    <div className={styles.menuOption}>
                        <Link href={'#'}>Profile</Link>
                    </div>
                    <Button onClick={signOut}>LogOut</Button>
                </div>
            </PopperUnstyled>
        </ClickAwayListener>
    }

    return <div className={styles.user_section_root} ref={useDetailsRef}
                onClick={() => setOpenNav(!openNav)}>
        <p className={styles.user_section_name}>{currentUser?.firstName}</p>
        <div className={styles.avatar}>
            <Image src={`https://avatars.dicebear.com/api/adventurer/${currentUser?.userId}.svg`}
                   layout={"fill"}/>
        </div>
        <Nav/>
    </div>;
}

function Details({page}: HeaderProps) {
    const {currentUser} = useAuth()

    const router = useRouter()

    // Navigate to Login Page
    const handleLogin = (): void => {
        router.push('/auth')
    }

    // Navigate to user registration page
    const handleRegister = (): void => {
        router.push('/auth/register')
    }

    return currentUser === undefined ?
        <div className={styles.no_auth}>
            <Button variant={"outline"} onClick={handleLogin}>Login</Button>
            <Button onClick={handleRegister}>Register</Button>
        </div> : <div className={styles.authenticated}>
            <NotificationSection page={page}/>
            <MessagerSection page={page}/>
            <UserSection page={page}/>
        </div>
}


function Header({page, className, ...props}: HeaderProps): JSX.Element {
    const Logo = () => <>
        <Link href="/">
            <div className={styles.logo}>
                <Image src={logo_img} alt={"Nipate Logo"} layout={'fill'}/>
            </div>
        </Link>
    </>

    return <nav className={[className, styles.header_root].join(' ')} {...props}>
        <Logo/>
        {page !== "auth" ? <Details page={page}/> : <></>}
    </nav>
}

export {Header}
