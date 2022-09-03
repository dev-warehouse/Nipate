import {createRef, HTMLAttributes, useRef, useState} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {PopperUnstyled} from "@mui/base";
import Link from "next/link";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'auth' | 'page'
}

function Avatar({avatar}: { avatar: string }): JSX.Element {
    // This state opens the detail menu for avatar element
    const [open, setOpen] = useState<boolean>(false)

    // Ref for avatar component to enable popper to anchor to it
    const avatarRef = useRef(null)

    return <div>
        <div className={styles.avatar} ref={avatarRef} onClick={() => setOpen(!open)}>
            <Image src={avatar} layout={"fill"}/>
        </div>
        <PopperUnstyled open={open} anchorEl={avatarRef.current}>
            <div className={styles.menu}>
                <div className={styles.menuOption}>
                    <Link href={'#'}>Provider Dashboard</Link>
                </div>
                <div className={styles.menuOption}>
                    <Link href={'#'}>Profile</Link>
                </div>
                <Button onClick={signOut}>SignOut</Button>
            </div>
        </PopperUnstyled>
    </div>

}

/**
 * This is responsible toggle between signed in state and signed out state
 */
function Auth(): JSX.Element {
    const {currentUser} = useAuth()
    const router = useRouter()

    // Navigate to Login Page
    const login = (): void => {
        router.push('/auth/login')
    }
    // Navigate to user registration page
    const register = (): void => {
        router.push('/auth/register')
    }

    return currentUser === undefined ? <>
        <div className={"flex flex-row gap-1"}>
            <Button variant={"outline"} onClick={login}>Login</Button>
            <Button onClick={register}>Register</Button>
        </div>
        {/*    TODO Implement Automatic Avatars API*/}
    </> : <Avatar avatar={"https://avatars.dicebear.com/api/adventurer/sdjka01dflsds.svg"} logout={logout}/>
}

function Header(props: HeaderProps): JSX.Element {
    return <nav className={"flex flex-row items-center justify-between"}>
        <div className={styles.logo}>
            <Image src={Logo} alt={"App Logo"} layout={'fill'}/>
        </div>
        {props.variant !== "auth" ? <Auth/> : <></>}
    </nav>
}

export {Header}
