import {Button, FormCheckBox, FormInput, PhoneInput} from "@components/common";
import {useForm} from "react-hook-form";
import styles from "./styles/login.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {LoginFormData} from "@core/models";
import {useAlertNotification} from "@core/hooks";
import {useLogin} from "@core/data";
import {RiSignalWifiErrorLine} from 'react-icons/ri'
import {MdErrorOutline, MdOutlineCheckCircle} from "react-icons/md";
import {CgSpinner} from 'react-icons/cg'
import Link from "next/link";

export function LoginForm() {

    const {alert} = useAlertNotification()

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        clearErrors,
        reset,
        formState: {errors},
    } = useForm<LoginFormData>({resolver: yupResolver(Validator.loginDetailsSchema)});

    const {mutate, isPaused, isLoading, isError, isSuccess} = useLogin({clearErrors, reset, setError})

    const submit = (data: LoginFormData) => {
        mutate(data)
        if (isPaused) {
            alert([{
                id: 'no_internet',
                type: 'toast',
                props: {
                    message: 'Please Check your Network Connection',
                    status: 'warning',
                    icon: <RiSignalWifiErrorLine/>
                }
            }])
        }
    }

    return (
        <form className={styles.login_root} onSubmit={handleSubmit(submit)}>
            <p className={styles.login_header}>Login to your Account</p>
            <PhoneInput
                label="Mobile Number"
                name="mobile"
                placeholder="eg 712345678"
                control={control}
                trigger={trigger}
                errors={errors}
            />
            <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••••"
                className={styles.login_password}
                trigger={trigger}
                register={register}
                errors={errors}
            />
            <FormCheckBox label="Remember me" name="remember" register={register} errors={errors}/>
            <Button type="submit" className={styles.btn_submit}>
                Login
                {
                    isPaused ? <RiSignalWifiErrorLine/> : isLoading ? <CgSpinner className="animate-spin"/> : isError ?
                        <MdErrorOutline/> : isSuccess ?
                            <MdOutlineCheckCircle/> : <></>
                }
            </Button>
            {
                isPaused ?
                    <p className="mt-1 text-xs font-medium text-[#ef9400]">Unable to Login: Check your Network
                        connection
                        Connection</p> : <></>
            }
            <Link href={'auth/register'}>
                <Button variant="text" className={styles.btn_create}>
                    <span>Don't have an account?</span>
                    <span className="ml-4 text-red-700">Create Now</span>
                </Button>
            </Link>
        </form>
    );
}
