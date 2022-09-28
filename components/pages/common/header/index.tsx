import {HTMLAttributes, useRef, useState} from "react";
import Image from "next/image";
import logo_img from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks";
import {useRouter} from "next/router";
import styles from './index.module.scss'
import {ClickAwayListener, PopperUnstyled} from "@mui/base";
import Link from "next/link";
import {UserModel} from "@core/models";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    page?: 'auth' | 'normal' | 'provider'
}

/**
 * Deals with components respective to provider dashboard
 * @param user
 * @constructor
 */
function ProviderDashboardDetails({user}: { user: UserModel }) {
    return <></>
}

/**
 * This shows the avatar and the navigation menu when the user is signed in
 * @param user
 * @param page
 * @constructor
 */
function SignedInDetails({user, page}: { user: UserModel, page: HeaderProps['page'] }): JSX.Element {
    const {removeUser} = useAuth()
    // This state opens the detail menu for avatar element
    const [open, setOpen] = useState<boolean>(false)

    // Ref for avatar component to enable popper to anchor to it
    const useDetailsRef = useRef(null)

    // This handles User feedback on signOut
    const signOut = () => {
        removeUser()
    }

    return <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div>
            {page === 'provider' ? <>
                <ProviderDashboardDetails user={user}/>
            </> : <></>}
            <div className={styles.avatar} ref={useDetailsRef} onClick={() => setOpen(!open)}>
                <Image src={`https://avatars.dicebear.com/api/adventurer/${user.userId}.svg`}
                       layout={"fill"}/>
            </div>
            <PopperUnstyled open={open} anchorEl={useDetailsRef.current}>
                <div className={styles.menu}>
                    <div className={styles.menuOption}>
                        {user.roles.includes('provider') ?
                            <Link href={'/provider/dashboard'}>Provider Dashboard</Link> :
                            <Link href={'/provider/register'}> Register as Provider</Link>
                        }
                    </div>
                    <div className={styles.menuOption}>
                        <Link href={'#'}>Profile</Link>
                    </div>
                    <Button onClick={signOut}>SignOut</Button>
                </div>
            </PopperUnstyled>
        </div>
    </ClickAwayListener>

}

/**
 * This is responsible toggle between signed in state and signed out state
 */
function Auth({page}: { page: HeaderProps['page'] }): JSX.Element {
    const {currentUser} = useAuth()
    const router = useRouter()

    // Navigate to Login Page
    const login = (): void => {
        router.push('/auth')
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
    </> : <SignedInDetails user={currentUser} page={page}/>
}

function Header({page, className, ...props}: HeaderProps): JSX.Element {
    const Logo = () => <>
        <Link href="/">
            <div className={styles.logo}>
                <Image src={logo_img} alt={"App Logo"} layout={'fill'}/>
            </div>
        </Link>
    </>
    
    return <nav className={[className, styles.header_root].join(' ')} {...props}>
        <Logo/>
        {page !== "auth" ? <Auth page={page}/> : <></>}
    </nav>
}

export {Header}
