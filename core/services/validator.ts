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
        return RegExp(/^\d{10}$/g).test(id.toString());
    }

    /**
     * This validates ones mobile number according to the specified country code
     * @param mobile
     */
    static validateMobileNumber(mobile: UserModel["mobileNumber"]): boolean {
        //TODO Get validation for the various country codes
        return false;
    }

    /**
     * This validates the password details given, for right now its basic with it
     * validating that the password should be a word and not less than 8 digits
     * @param password
     */
    static validatePassword(password: LoginFormData["password"]): boolean {
        return RegExp(/^\w{8,}$/g).test(password);
    }

    /**
     * This validates the whole Login form data
     * @param model
     */
    static validateLoginDetails(model: LoginFormData): boolean {
        return this.validateMobileNumber(model.mobileNumber) && this.validatePassword(model.password)
    }

    /**
     * This validates the whole register form data
     * @param model
     */
    static validateRegisterDetails(model: RegisterFormData): boolean {
        return (model.firstName && model.lastName && model.location && model.gender) !== undefined && this.validatePassword(model.password) && this.validateIdentification(model.idNumber)
    }
}

export {Validator}