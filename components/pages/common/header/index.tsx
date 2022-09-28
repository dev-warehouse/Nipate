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

    const {currentUser} = useAuth()
    const router = useRouter()

    // Navigate to Login Page
        router.push('/auth')
    }
    // Navigate to user registration page
        router.push('/auth/register')
    }

        <div className={"flex flex-row gap-1"}>
        </div>
}

function Header({page, className, ...props}: HeaderProps): JSX.Element {
    const Logo = () => <>
        <Link href="/">
            <div className={styles.logo}>
            </div>
        </Link>
    </>
    
    return <nav className={[className, styles.header_root].join(' ')} {...props}>
        <Logo/>
    </nav>
}

export {Header}
