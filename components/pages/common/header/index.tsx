import {HTMLAttributes, useRef, useState} from "react";
import Image from "next/image";
import logo_img from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {ClickAwayListener, PopperUnstyled} from "@mui/base";
import Link from "next/link";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    page?: 'auth' | 'normal' | 'provider'
}

function NotificationSection({page}: HeaderProps) {
    return <div className="w-6 h-6 rounded-lg bg-gray-200"></div>;
}

function MessagerSection({page}: HeaderProps) {
    return <div className="w-6 h-6 rounded-lg bg-gray-200"></div>;
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
                <div className={styles.menu}>
                    <div className={styles.menuOption}>
                        {currentUser?.roles.includes('provider') ?
                            <Link href={'/provider/dashboard'}>Provider Dashboard</Link> :
                            <Link href={'/provider/register'}> Register as Provider</Link>
                        }
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
        <p>{currentUser?.firstName}</p>
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
        <div className={"flex flex-row gap-1"}>
            <Button variant={"outline"} onClick={handleLogin}>Login</Button>
            <Button onClick={handleRegister}>Register</Button>
        </div> : <div className="flex flex-row items-center justify-center gap-8">
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
