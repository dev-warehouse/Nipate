import {LoginFormData, RegisterFormData, UserModel} from "@core/models";

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
        return false;
    }

    /**
     * This validates ones mobile number according to the specified country code
     * @param mobile
     */
    static validateMobileNumber(mobile: UserModel["mobileNumber"]): boolean {
        return false;
    }

    /**
     * This validates the password details given, for right now its basic with it
     * validating that the password should be a word and not less than 8 digits
     * @param password
     */
    static validatePassword(password: LoginFormData["password"]): boolean {
        return false;
    }

    /**
     * This validates the whole Login form data
     * @param model
     */
    static validateLoginDetails(model: LoginFormData): boolean {
        return false;
    }

    /**
     * This validates the whole register form data
     * @param model
     */
    static validateRegisterDetails(model: RegisterFormData): boolean {
        return false
    }
}

export {Validator}