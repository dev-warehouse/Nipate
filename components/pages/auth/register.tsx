import {useForm} from "react-hook-form";
import {CreateUserFormData, RegisterUserFormData} from "@core/models";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";
import {Button, FormInput, GenderInput, PhoneInput, SelectCountyInput} from "@components/common";
import {Dispatch, SetStateAction, useState} from "react";
import styles from "./styles/register.module.scss";
import {CreateUserResponseData} from "@core/api";
import {useCreateUser, useRegisterUser} from "@core/data";
import {useRouter} from "next/router";
import {RiSignalWifiErrorLine} from "react-icons/ri";
import {CgSpinner} from "react-icons/cg";
import {MdErrorOutline, MdOutlineCheckCircle} from "react-icons/md";
import {useAlertNotification} from "@core/hooks";

type RegisterStage = 0 | 1

interface StageProps {
    stage: RegisterStage
    setStage: Dispatch<SetStateAction<RegisterStage>>
    continueData: CreateUserResponseData
    setContinueData: Dispatch<SetStateAction<CreateUserResponseData>>
}

export function RegisterForm() {
    const [stage, setStage] = useState<RegisterStage>(0)
    const [continueData, setContinueData] = useState<CreateUserResponseData>({} as CreateUserResponseData)

    //TODO Add Swipe animation on state change
    return <div className={styles.root}>
        {
            stage === 0 ? <CreateUserForm stage={0} setStage={setStage} continueData={continueData}
                                          setContinueData={setContinueData}/> :
                <RegisterUserForm stage={1} setStage={setStage} continueData={continueData}
                                  setContinueData={setContinueData}/>
        }
    </div>
}

function FormSubmit({
                        label,
                        stage,
                        status: {isPaused, isLoading, isError, isSuccess}
                    }: { label: string, stage: RegisterStage, status: { isPaused: boolean, isLoading: boolean, isError: boolean, isSuccess: boolean } }) {
    return <div className={styles.form_submit}>
        <div className="px-1.5 py-2.5 flex flex-row items-center gap-2.5 justify-center">
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 0 ? "bg-brand" : "bg-gray-300"}`}/>
            <div className={`w-2.5 h-2.5 rounded-full ${stage === 1 ? "bg-brand" : "bg-gray-300"}`}/>
        </div>
        <Button type="submit" className={styles.btn_submit}>
            {label}
            {
                isPaused ? <RiSignalWifiErrorLine/> : isLoading ? <CgSpinner className="animate-spin"/> : isError ?
                    <MdErrorOutline/> : isSuccess ?
                        <MdOutlineCheckCircle/> : <></>
            }
        </Button>
    </div>
}

function CreateUserForm({stage, setStage, setContinueData}: StageProps) {

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

    const {alert} = useAlertNotification()


    const {mutate, isError, isSuccess, isLoading, isPaused} = useCreateUser({
        clearErrors,
        reset,
        setError,
        setContinueData
    })

    const submit = (data: CreateUserFormData) => {
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

    if (isSuccess) {
        setStage(1)
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
        <FormSubmit label="Continue" stage={stage} status={{isLoading, isError, isSuccess, isPaused}}/>
    </form>
}

function RegisterUserForm({stage, setStage, setContinueData, continueData}: StageProps) {

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


    const {mutate, isError, isSuccess, isLoading, isPaused} = useRegisterUser({
        clearErrors,
        reset,
        setError,
        setStage,
        setContinueData,
    })

    const submit = (data: RegisterUserFormData) => {
        mutate({createdID: continueData.id, payload: data})
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

    const router = useRouter()

    if (isSuccess) {
        router.push('/')
    }

    return <form onSubmit={handleSubmit(submit)} className={styles.form_root}>
        <SelectCountyInput
            label={"County"}
            name={'location'}
            control={control}
            register={register}
            errors={errors}
            trigger={trigger}
        />
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
        <FormSubmit label="Register" stage={stage} status={{isLoading, isError, isSuccess, isPaused}}/>
    </form>
}