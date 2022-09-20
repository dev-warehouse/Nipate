import { Input, InputProps } from ".";
import styles from "./index.module.scss";
import { Control, useController, UseFormRegister } from "react-hook-form";
import { Option, Select, SelectProps } from "@components/common";
import Image from "next/image";
import { ChangeEvent } from "react";

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
   * Feedback message
   */
  errors: any;
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
  className = "",
  name,
  register,
  errors,
  children,
  dataValidity,
  ...props
}: FormInputProps) {
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
      </label>
      {children ?? (
        <Input
          id={name}
          className={styles.form_input}
          {...register(name)}
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
  const countries: { flag: string; name: string; callingCodes: string }[] = [
    {
      flag: "https://flagcdn.com/ke.svg",
      name: "Kenya",
      callingCodes: "+254",
    },
    {
      flag: "https://flagcdn.com/tz.svg",
      name: "Tanzania",
      callingCodes: "+255",
    },
    {
      flag: "https://flagcdn.com/ug.svg",
      name: "Uganda",
      callingCodes: "+256",
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
            <Image src={option.label} layout="fill" />
          </div>
          <span>{option.value}</span>
        </div>
      );
    }
    return (
      <div className={styles.phone_option} data-validity={props.dataValidity}>
        <div className={styles.phone_option_img} />
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
                <Image src={country.flag} layout="fill" />
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

export type PhoneNumber = {
  code?: string;
  number?: string;
};

interface PhoneInputProps extends Omit<FormInputProps, "register"> {
  control: Control<PhoneNumber | any>;
}

function PhoneInput({
  label,
  name,
  control,
  errors,
  dataValidity,
  placeholder,
}: PhoneInputProps) {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
    defaultValue: { code: null, number: undefined },
  });

  const handleCodeChange = (data: string) => {
    onChange({ code: data, number: value.number });
  };
  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ code: value.code, number: event.target.value });
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
          {errors[name].message}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export { FormInput, PhoneInput };
