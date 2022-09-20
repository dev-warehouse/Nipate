import {Button, FormInput, PhoneInput, PhoneNumber} from "@components/common";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import styles from "./styles/login.module.scss";
import {yupResolver} from "@hookform/resolvers/yup";

interface LoginData {
    mobile: PhoneNumber;
    password: string;
}

const schema = yup.object().shape({
    mobile: yup.object().shape({
        code: yup.string().required("Country Code is required").matches(/^\+\d{3}$/, "Please enter a valid country code"),
        number: yup.string().required("Phone number is required").matches(/^[71]\d{8}$/, "Phone number should start with 7 or 1 not 07 or 01 and should be of length 9")
    }),
    password: yup.string().required('Password is required').matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/, "Password should contain least a number, capital letter or a symbol ")
})


export function LoginForm() {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<LoginData>({resolver: yupResolver(schema)});

    const submit = (data: LoginData) => console.log(data)

    return (
        <form className={styles.login_root} onSubmit={handleSubmit(submit)}>
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
