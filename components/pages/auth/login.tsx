import {Button, FormCheckBox, FormInput, PhoneInput} from "@components/common";
import {useForm} from "react-hook-form";
import styles from "./styles/login.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {useRouter} from "next/router";
import {LoginFormData} from "@core/models";
import {useAuth} from "@core/hooks";

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

    const submit = ({remember, ...data}: LoginFormData | any) => {
        login(data, remember, setError, clearErrors, reset)
        console.log(data)
    }

    const router = useRouter()

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
            <Button variant="text" className={styles.btn_create} onClick={() => router.push('auth/register')}>
                <span>Don't have an account?</span>
                <span className="ml-4 text-red-700">Create Now</span>
            </Button>
        </form>
    );
}
