import {Component, HTMLAttributes} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import {useAuth} from "@core/hooks/auth";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'auth' | 'page'
}

/**
 * This is responsible toggle between signed in state and signed out state
 */
function Auth(): JSX.Element {
    const {currentUser} = useAuth()

    // Navigate to Login Page
    // TODO Navigate to Login url
    const login = (): void => {
    }
    // Navigate to user registration page
    // TODO Navigate to Register url
    const register = (): void => {
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
        <div style={{height: "1.8rem", width: "8rem", position: "relative"}}>
            <Image src={Logo} alt={"App Logo"} layout={'fill'}/>
        </div>
        {props.variant !== "auth" ? <Auth/> : <></>}
    </nav>
}

export {Header}
