import {HTMLAttributes} from "react";
import Image from "next/image";
import Logo from '/public/assets/logo_full.svg'
import {Button} from "@components/common";

const Header = (props: HTMLAttributes<HTMLDivElement>) => {
    return <div className={"flex flex-row items-center justify-between"}>
        <div style={{height: "1.8rem", width: "8rem", position: "relative"}}>
            <Image src={Logo} alt={"App Logo"} layout={'fill'}/>
        </div>
        <div className={"flex flex-row gap-1"}>
            <Button variant={'outline'}>Login</Button>
            <Button>SignUp</Button>
        </div>
    </div>
}
export {Header}