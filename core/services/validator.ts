import {LoginFormData, RegisterFormData, UserModel} from "@core/models";
import * as yup from "yup";

/**
 * This class deals with all containing validation
 *
 * It encompasses methods that do validation of text, form, objects etc
 */
class Validator {
    /**
     * This Validates one identification number, checks if it's in its correct format
     * @param id
     */
    static validateIdentification(id: UserModel["idNumber"]): boolean {
        return RegExp(/^\d{10}$/).test(id.toString());
    }

    /**
     * This validates ones mobile number according to the specified country code
     * @param mobile
     */
    static validateMobileNumber(mobile: UserModel["mobile"]): boolean {
        let isValid: boolean = false
        this.mobileSchema.isValid(mobile).then(res => isValid = res)
        return isValid
    }

    /**
     * This validates the password details given, for right now its basic with it
     * validating that the password should be a word and not less than 8 digits
     * @param password
     */
    static validatePassword(password: LoginFormData["password"]): boolean {
        return RegExp(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/).test(password);
    }

    /**
     * This validates the whole Login form data
     * @param model
     */
    static validateLoginDetails(model: LoginFormData): boolean {
        let isValid: boolean = false
        this.loginDetailsSchema.isValid(model).then(res => isValid = res)
        return isValid
    }

    /**
     * This validates the whole register form data
     * @param model
     */
    static validateRegisterDetails(model: RegisterFormData): boolean {
        return (model.firstName && model.lastName && model.location && model.gender) !== undefined && this.validatePassword(model.password) && this.validateIdentification(model.idNumber)
    }

    /**
     * Yup schema for mobile number validation
     */
    static mobileSchema = yup.object().shape({
        code: yup.string().required("Country Code is required").matches(/^\+\d{3}$/, "Please enter a valid country code"),
        number: yup.string().required("Phone number is required").matches(/^[71]\d{8}$/, "Phone number should start with 7 or 1 not 07 or 01 and should be of length 9")
    })

    /**
     * Yup schema for password validation
     */
    static passwordSchema = yup.string().required('Password is required').matches(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/, "Password should contain least a number, capital letter or a symbol ")

    /**
     * Yup schema for login details validation
     */
    static loginDetailsSchema = yup.object().shape({
        mobile: this.mobileSchema,
        password: this.passwordSchema
    })
}

export {Validator}