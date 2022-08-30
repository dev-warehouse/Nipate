import {Component, HTMLAttributes} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'auth' | 'page'
}

class Header extends Component<HeaderProps> {

    Logo = (): JSX.Element => {
        return <div style={{height: "1.8rem", width: "8rem", position: "relative"}}>
            <Image src={Logo} alt={"App Logo"} layout={'fill'}/>
        </div>
    }

    Auth = (): JSX.Element => {
        // TODO: Implement Auto Render of appropriate component based on auth state
        return <div className={"flex flex-row gap-1"}>
            <this.SignOut/>
        </div>
    }

    SignOut = (): JSX.Element => {
        // TODO: Implement User SignIn Logic from Provider
        return <> <Button variant={'outline'}>Login</Button>
            <Button>SignUp</Button></>
    }
    SignIn = (): JSX.Element => {
        // TODO: Implement data fetch from user provider
        return <>
            Avatar
        </>
    }

    render() {
        return <div className={"flex flex-row items-center justify-between"}>
            <this.Logo/>
            {this.props.variant === "auth" ? <></> : <this.Auth/>}
        </div>
    }
}

export {Header}