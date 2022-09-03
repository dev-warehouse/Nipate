import {HTMLAttributes} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";
import { useAuth } from "@core/hooks";
import {useRouter} from "next/router";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'auth' | 'page'
}

function Avatar({avatar}: { avatar: string }): JSX.Element {
    return <>
        <div style={{height: "2rem", width: "2rem", position: "relative"}} className={"w-10 h-10 bg-gray-300 rounded-full"}>
            <Image src={avatar} layout={"fill"}/>
        </div>
    </>

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
    </> : <Avatar avatar={"https://avatars.dicebear.com/api/adventurer/sdjka01dflsds.svg"}/>
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
