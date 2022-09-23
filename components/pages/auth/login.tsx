import {Button, FormCheckBox, FormInput, PhoneInput} from "@components/common";
import {useForm} from "react-hook-form";
import styles from "./styles/login.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {LoginFormData} from "@core/models";
import {useAuth} from "@core/hooks";
import {useLogin} from "@core/data";
import Link from "next/link";

export function LoginForm() {

    const {login} = useAuth()

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
            <Button type="submit" className={styles.btn_submit}>Login</Button>
            <Link href={'auth/register'}>
                <Button variant="text" className={styles.btn_create}>
                    <span>Don't have an account?</span>
                    <span className="ml-4 text-red-700">Create Now</span>
                </Button>
            </Link>
        </form>
    );
}
