import {Button, FormInput, PhoneInput, PhoneNumber} from "@components/common";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import styles from "./styles/login.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {useRouter} from "next/router";

interface LoginData {
    mobile: PhoneNumber;
    password: string;
}

const schema = yup.object().shape({
    mobile: Validator.mobileSchema,
    password: Validator.passwordSchema
})


export function LoginForm() {
    const {
        register,
        control,
        handleSubmit,
        trigger,
        reset,
        formState: {errors},
    } = useForm<LoginData>({resolver: yupResolver(schema)});

    const submit = (data: LoginData) => console.log(data)

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
            <Button type="submit" className={styles.btn_submit}>Login</Button>
            <Button variant="text" className={styles.btn_create} onClick={() => router.push('auth/register')}>
                <span>Don't have an account?</span>
                <span className="ml-4 text-red-700">Create Now</span>
            </Button>
        </form>
    );
}
