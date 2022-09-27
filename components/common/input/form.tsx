import {Input, InputProps} from ".";
import styles from "./index.module.scss";
import {Control, useController, UseFormRegister} from "react-hook-form";
import {CheckBox, Option, Radio, Select, SelectProps} from "@components/common";
import Image from "next/image";
import {ChangeEvent} from "react";
import {Country, County, Gender, MobileNumber} from "@core/models";
import {useCounties} from "@core/data";
import {CgSpinner} from "react-icons/cg";
import {IoCaretDown} from "react-icons/io5";
import {SelectOption} from "@mui/base";

/**
 * Form Input props, extends Input Props
 *
 * adds upon inputLabel for form label
 */
interface FormInputProps extends InputProps {
    /**
     * Form Input Label
     */
    label: string;
    /**
     *Identifier for input in form hook
     */
    name: string;
    /**
     * Attaches component to form hook
     */
    register: UseFormRegister<any>;
    /**
     * For Required indicator
     */
    required?: boolean
    /**
     * Triggers the form validation
     */
    trigger?: any
    /**
     * Feedback message
     */
    errors: any;
}

function FormCheckBox({label, name, required, dataValidity, register, errors}: FormInputProps) {
    return <div className="self-start">
        <div className="inline-flex gap-2 flex-row-reverse">
            <label
                htmlFor={name}
                className="text-sm font-medium"
                data-validity={
                    dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                }
            >
                {label}
                {
                    required ?
                        <span className="mx-1 text-red-500 align-super">*</span> : <></>
                }
            </label>
            <CheckBox id={name} {...register(name)}/>
        </div>
        {errors[name] ? (
            <p
                className={styles.form_message}
                data-validity={
                    dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                }
            >
                {errors[name].message}
            </p>
        ) : (
            <></>
        )}
    </div>
}

/**
 * Input for Forms with label and validation
 * @param inputLabel
 * @param children
 * @param props
 * @constructor
 */
function FormInput({
                       label,
                       required,
                       className = "",
                       name,
                       register,
                       trigger,
                       errors,
                       children,
                       dataValidity,
                       ...props
                   }: FormInputProps) {

    const {onChange, onBlur, name: inputName, ref} = register(name)

    return (
        <div className={[className, styles.form_root].join(" ")}>
            <label
                htmlFor={name}
                className={styles.form_label}
                data-validity={
                    dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                }
            >
                {label}
                {
                    required ?
                        <span className="mx-1 text-red-500 align-super">*</span> : <></>
                }
            </label>
            {children ?? (
                <Input
                    id={name}
                    className={styles.form_input}
                    name={inputName}
                    onBlur={onBlur}
                    onChange={(event) => {
                        onChange(event)
                        if (trigger) trigger(name)
                    }}
                    ref={ref}
                    dataValidity={
                        dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                    }
                    {...props}
                />
            )}
            {errors[name] ? (
                <p
                    className={styles.form_message}
                    data-validity={
                        dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                    }
                >
                    {errors[name].message}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
}

/**
 * Renders The Select section of the input
 * @param props
 * @constructor
 */
function SelectCountries(props: SelectProps) {
    // Specify for now but it will be fetched
    const countries: Country[] = [
        {
            flag: "https://flagcdn.com/ke.svg",
            name: "Kenya",
            callingCodes: 254,
        },
        {
            flag: "https://flagcdn.com/tz.svg",
            name: "Tanzania",
            callingCodes: 255,
        },
        {
            flag: "https://flagcdn.com/ug.svg",
            name: "Uganda",
            callingCodes: 256,
        },
    ];

    /**
     * Renders the Select Value
     * @param option
     */
    const renderValue = (option: any) => {
        if (option !== null) {
            return (
                <div className={styles.phone_option}>
                    <div className={styles.phone_option_img}>
                        <Image src={option.label} layout="fill"/>
                    </div>
                    <span>+{option.value}</span>
                </div>
            );
        }
        return (
            <div className={styles.phone_option} data-validity={props.dataValidity}>
                <div className={styles.phone_option_img}/>
                <p>+123</p>
            </div>
        );
    };

    return (
        <Select renderValue={renderValue} {...props}>
            {countries.map((country) => {
                return (
                    <Option
                        key={country.callingCodes}
                        value={country.callingCodes}
                        label={country.flag}
                    >
                        <div className={styles.phone_option}>
                            <div className={styles.phone_option_img}>
                                <Image src={country.flag} layout="fill"/>
                            </div>
                            <span>({country.callingCodes})</span>
                            <p>{country.name}</p>
                        </div>
                    </Option>
                );
            })}
        </Select>
    );
}

interface PhoneInputProps extends Omit<FormInputProps, "register"> {
    control: Control<MobileNumber | any>;
}

// TODO Document the forms

function PhoneInput({
                        label,
                        required,
                        name,
                        control,
                        trigger,
                        errors,
                        dataValidity,
                        placeholder,
                    }: PhoneInputProps) {
    const {
        field: {value, onChange},
    } = useController({
        control,
        name,
        defaultValue: {code: undefined, number: undefined},
    });

    const handleCodeChange = (data: string) => {
        onChange({code: data, number: value.number});
    };
    const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({code: value.code, number: event.target.value});
        if (trigger) trigger(`${name}.number`)
    };

    return (
        <div className={styles.form_root}>
            <label
                htmlFor={name}
                className={styles.form_label}
                data-validity={
                    dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                }
            >
                {label}
                {
                    required ?
                        <span className="mx-1 text-red-500 align-super">*</span> : <></>
                }
            </label>
            <div className={styles.phone_root}>
                <SelectCountries
                    onChange={handleCodeChange}
                    dataValidity={
                        dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                    }
                />
                <Input
                    placeholder={placeholder}
                    onChange={handleNumberChange}
                    dataValidity={
                        dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                    }
                />
            </div>
            {errors[name] ? (
                <p
                    className={styles.form_message}
                    data-validity={
                        dataValidity ? dataValidity : errors[name] ? "error" : "initial"
                    }
                >
                    {errors[name].code && errors[name].number ? "Please provide phone number" : errors[name].code ? errors[name].code.message : errors[name].number ? errors[name].number.message : ''}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
}

export interface GenderInputProps extends Omit<FormInputProps, 'register'> {
    control: Control<Gender | any>;
}

export function GenderInput({required, errors, control, label, name, dataValidity}: GenderInputProps) {

    const {field: {value, onChange}} = useController({control, name})

    const handleMale = () => onChange('male')
    const handleFemale = () => onChange('female')

    return (
        <div className={styles.gender_form_root}>
            <label htmlFor={name} className={styles.form_label}
                   data-validity={dataValidity ? dataValidity : errors[name] ? "error" : "initial"}
            >
                {label}
                {
                    required ?
                        <span className="mx-1 text-red-500 align-super">*</span> : <></>
                }
            </label>
            <div className={styles.gender_root}>
                <main>
                    <label htmlFor='male' className={styles.gender_label}>Male: </label>
                    <Radio id='male' name={name} value={value} checked={value === 'male'} onChange={handleMale}/>
                </main>
                <main>
                    <label htmlFor='female' className={styles.gender_label}>Female: </label>
                    <Radio id='female' name={name} value={value} checked={value === 'female'} onChange={handleFemale}/>
                </main>
            </div>
            {errors[name] ? (
                <p
                    className={styles.form_message}
                    data-validity={dataValidity ? dataValidity : errors[name] ? "error" : "initial"}
                >
                    {errors[name].message}
                </p>
            ) : (
                <></>
            )}
        </div>
    )
}

interface SelectCountyProps extends FormInputProps {
    control: Control<County | any>
}

export function SelectCountyInput({label, name, control, register, errors, trigger, ...props}: SelectCountyProps) {
    const {data, isLoading} = useCounties()

    function renderValue(option: SelectOption<County> | null): JSX.Element {
        return <div className="w-full h-[1.5rem] flex flex-row items-center justify-between">
            <span>{option?.label}</span>
            <IoCaretDown className="inline"/>
        </div>
    }


    return <FormInput className="w-full" label={label} name={name} register={register} errors={errors} {...props}>
        <Select renderValue={renderValue}>
            {
                isLoading ? <div className="inline-flex items-center p-2">
                    Fetching counties
                    <CgSpinner className="mx-1 animate-spin"/>
                </div> : data?.map((county, index) => <Option key={index} value={county}
                                                              label={county.Name}>{county.Name}</Option>)
            }
        </Select>
    </FormInput>
}

export {FormInput, PhoneInput, FormCheckBox};
