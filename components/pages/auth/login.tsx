import {Button, FormInput, PhoneInput, PhoneNumber} from "@components/common";
import {useForm} from "react-hook-form";
import styles from "./styles/login.module.scss";

interface LoginData {
    mobile: PhoneNumber;
    password: string;
}

export function LoginForm() {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<LoginData>();
    return (
        <form className={styles.login_root}>
            <p className={styles.login_header}>Login to your Account</p>
            <PhoneInput
                label="Mobile Number"
                name="mobile"
                placeholder="eg 712345678"
                control={control}
                errors={errors}
            />
            <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="••••••••••"
                className={styles.login_password}
                register={register}
                errors={errors}
            />
            <Button type="submit" className={styles.btn_submit}>Login</Button>
            <Button variant="text" className={styles.btn_create}>
                <span>Don't have an account?</span>
                <span className="ml-4 text-red-700">Create Now</span>
            </Button>
        </form>
    );
}
