import {LoginFormData, UserModel,} from "@core/models";
import {array, number, object, ref, string} from "yup";

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
        let isValid: boolean = false;
        this.idNumberSchema.isValid(id).then((res) => (isValid = res));
        return isValid;
    }

    /**
     * This validates ones mobile number according to the specified country code
     * @param mobile
     */
    static validateMobileNumber(mobile: UserModel["mobile"]): boolean {
        let isValid: boolean = false;
        this.mobileSchema.isValid(mobile).then((res) => (isValid = res));
        return isValid;
    }

    /**
     * This validates the password details given, for right now its basic with it
     * validating that the password should be a word and not less than 8 digits
     * @param password
     */
    static validatePassword(password: LoginFormData["password"]): boolean {
        return RegExp(/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/).test(
            password
        );
    }

    /**
     * This validates the whole Login form data
     * @param model
     */
    static validateLoginDetails(model: LoginFormData): boolean {
        let isValid: boolean = false;
        this.loginDetailsSchema.isValid(model).then((res) => (isValid = res));
        return isValid;
    }

    /**
     * Yup schema for mobile number validation
     */
    static mobileSchema = object().shape({
        code: string()
            .required("Country Code is required")
            .matches(/^\d{3}$/, "Please enter a valid country code"),
        number: string()
            .required("Phone number is required")
            .matches(
                /^[71]\d{8}$/,
                "Phone number should start with 7 or 1 not 07 or 01 and should be of length 9"
            ),
    });

    /**
     * Yup schema for password validation
     */
    static passwordSchema = string()
        .required("Password is required")
        .matches(
            /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/,
            "Password should contain least a number, capital letter or a symbol "
        );

    /**
     * Yup Schema for id number validation
     */
    static idNumberSchema = number()
        .typeError("Invalid Id number")
        .required("Identification number is required")
        .min(10, "Identification has a minimum length of 10")
        .max(10, "Identification has a maximum length of 10");

    /**
     * Yup Schema for gender validation
     */
    static genderSchema = string()
        .oneOf(['male', 'female'], "Runtime error: Serialization of gender failed")
        .required("Your gender is required");

    static roleSchema = string()
        .oneOf(['provider', 'user', 'admin'], "Serialization of role failed")
        .required("Your role is required");

    static rolesSchema = array().of(this.roleSchema).typeError("Serialization of roles failed");

    /**
     * Yup Schema for location validation
     */
    static geoLocationSchema = object()
        .optional()
        .shape({
            label: string().required("Please provide label for identification"),
            longitude: number().required("Longitude is required"),
            latitude: number().required("Latitude is required"),
        })
        .typeError("Invalid Location");

    /**
     * Yup Schema for first name validation
     */
    static firstNameSchema = string()
        .required("Please provide your first name");

    /**
     * Yup Schema for last name validation
     */
    static lastNameSchema = string()
        .required("Please provide your last name");

    static countySchema = object().shape({
        id: string().required("Required id"),
        Name: string().required("Required name"),
    }).typeError("Your County is required").required("Your County is required")


    /**
     * Yup schema for login details validation
     */
    static loginDetailsSchema = object().shape({
        mobile: this.mobileSchema,
        password: this.passwordSchema,
    });

    /**
     * Yup schema for create user details validation
     */
    static createUserSchema = object().shape({
        mobile: this.mobileSchema,
        idNumber: this.idNumberSchema,
        firstName: this.firstNameSchema,
        lastName: this.lastNameSchema,
    });

    /**
     * Yup schema for register user details validation
     */
    static registerUserSchema = object().shape({
        gender: this.genderSchema,
        password: this.passwordSchema,
        location: object().typeError("Your County is required").required("Your County is required"),
        confirmPassword: string().oneOf([ref('password'), null], "Passwords don't match"),
    });
}

export {Validator};
