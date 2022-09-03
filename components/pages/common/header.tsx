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
    return currentUser === undefined ? <>
        <div className={"flex flex-row gap-1"}>
            <Button>Login</Button>
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
