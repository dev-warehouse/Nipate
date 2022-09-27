import {useForm} from "react-hook-form";
import {CreateUserFormData, RegisterUserFormData} from "@core/models";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {Button, FormInput, GenderInput, PhoneInput} from "@components/common";
import {Dispatch, SetStateAction, useState} from "react";
import styles from "./styles/register.module.scss";

type RegisterStage = 0 | 1

interface StageProps {
    stage: RegisterStage
    setStage: Dispatch<SetStateAction<RegisterStage>>
}

export function RegisterForm() {
    const [stage, setStage] = useState<RegisterStage>(1)

    //TODO Add Swipe animation on state change
    return <div className={styles.root}>
        {
            stage === 0 ? <CreateUserForm stage={0} setStage={setStage}/> :
                <RegisterUserForm stage={1} setStage={setStage}/>
        }
    </div>
}

function FormSubmit({label, stage}: { label: string, stage: RegisterStage }) {
    return <div className={styles.form_submit}>
        <div className="px-1.5 py-2.5 flex flex-row items-center gap-2.5 justify-center">
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 0 ? "bg-brand" : "bg-gray-300"}`}/>
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 1 ? "bg-brand" : "bg-gray-300"}`}/>
        </div>
        <Button type="submit" className={styles.btn_submit}>{label}</Button>
    </div>
}

function CreateUserForm({stage, setStage}: StageProps) {

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
        <PhoneInput control={control} trigger={trigger} label="Mobile Number" placeholder="eg 712345678" name={'mobile'}
                    errors={errors}/>
        <FormInput label="ID Number" placeholder="eg 31234567" name="idNumber"
                   className={styles.form_input}
                   register={register} errors={errors}/>
        <FormInput label="First Name" name="firstName" className={styles.form_input} register={register}
                   errors={errors}/>
        <FormInput label="Last Name" name="lastName" className={styles.form_input} register={register}
                   errors={errors}/>
        <FormSubmit label="Continue" stage={stage}/>
    </form>
}

function RegisterUserForm({stage, setStage}: StageProps) {

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
        <GenderInput
            label="Gender"
            name="gender"
            control={control}
            errors={errors}
            trigger={trigger}
        />
        <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••••"
            className={styles.form_input}
            register={register}
            errors={errors}
        />
        <FormInput
            label="Confirm  Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••••"
            className={styles.form_input}
            register={register}
            errors={errors}
        />
        <FormSubmit label="Register" stage={stage}/>
    </form>
}