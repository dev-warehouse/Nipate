import {useForm} from "react-hook-form";
import {CreateUserFormData, RegisterUserFormData} from "@core/models";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {Button, PhoneInput} from "@components/common";
import {Dispatch, SetStateAction, useState} from "react";
import styles from "./styles/register.module.scss";

type RegisterStage = 0 | 1

interface StageProps {
    setStage: Dispatch<SetStateAction<RegisterStage>>
}

export function RegisterForm() {
    const [stage, setStage] = useState<RegisterStage>(0)
    return <div className={styles.root}>
        {
            stage === 0 ? <CreateUserForm setStage={setStage}/> : <RegisterUserForm setStage={setStage}/>
        }
    </div>
}

function CreateUserForm({setStage}: StageProps) {

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        clearErrors,
        reset,
        formState: {errors},
    } = useForm<CreateUserFormData>({resolver: yupResolver(Validator.createUserSchema)});

    const submit = (data: CreateUserFormData) => {
    }

    return <form onSubmit={handleSubmit(submit)} className={styles.form_root}>
        <p className={styles.form_header}>Create your account</p>
        <PhoneInput control={control} trigger={trigger} label="Mobile Number" name={'mobile'} errors={errors}/>
        <Button type="submit" className={styles.form_submit}>Continue</Button>
    </form>
}

function RegisterUserForm({setStage}: StageProps) {

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        clearErrors,
        reset,
        formState: {errors},
    } = useForm<RegisterUserFormData>({resolver: yupResolver(Validator.registerUserSchema)});

    const submit = (data: RegisterUserFormData) => {
    }

    return <form onSubmit={handleSubmit(submit)} className={styles.form_root}>
        <p className={styles.form_header}>😊 Let's add some little details</p>
        <Button type="submit" className={styles.form_submit}>Register</Button>
    </form>
}