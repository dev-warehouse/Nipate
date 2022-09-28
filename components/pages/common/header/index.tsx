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

}


                <div className={styles.menu}>
                    <div className={styles.menuOption}>
                            <Link href={'/provider/dashboard'}>Provider Dashboard</Link> :
                            <Link href={'/provider/register'}> Register as Provider</Link>
                        }
                    </div>
                    <div className={styles.menuOption}>
                        <Link href={'#'}>Profile</Link>
                    </div>
                </div>
            </PopperUnstyled>
    </ClickAwayListener>

}

function Details({page}:HeaderProps) {
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
