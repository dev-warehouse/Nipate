import {Component, HTMLAttributes} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks/auth";
import {useRouter} from "next/router";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'auth' | 'page'
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
    </> : <></>
}

function Header(props: HeaderProps): JSX.Element {
    return <nav className={"flex flex-row items-center justify-between"}>
        <div style={{height: "2rem", width: "8rem", position: "relative"}}>
            <Image src={Logo} alt={"App Logo"} layout={'fill'}/>
        </div>
        {props.variant !== "auth" ? <Auth/> : <></>}
    </nav>
}

export {Header}
