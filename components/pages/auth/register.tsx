import {useForm} from "react-hook-form";
import {CreateUserFormData, RegisterUserFormData} from "@core/models";
import {yupResolver} from "@hookform/resolvers/yup";
import {Validator} from "@core/services";

export function RegisterForm() {
    return <div>
        Register Form
    </div>
}

function CreateUserForm() {

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

    return <div>

    </div>
}

function RegisterUser() {

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
    return <div></div>
}