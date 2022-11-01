import { User } from '@api/models/user'
import { array, number, object, ref, string } from 'yup'
import { LoginFormData } from '../models'

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
  static validateIdentification(id: User['idNumber']): boolean {
    let isValid = false
    this.idNumberSchema.isValid(id).then(res => {
      isValid = res
    })
    return isValid
  }

  /**
   * This validates ones mobile number according to the specified country code
   * @param mobile
   */
  static validateMobileNumber(mobile: User['mobileNumber']): boolean {
    let isValid = false
    this.mobileSchema.isValid(mobile).then(res => {
      isValid = res
    })
    return isValid
  }

  /**
   * This validates the password details given, for right now its basic with it
   * validating that the password should be a word and not less than 8 digits
   * @param password
   */
  static validatePassword(password: LoginFormData['password']): boolean {
    return /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/.test(
      password
    )
  }

  /**
   * This validates the whole Login form data
   * @param model
   */
  static validateLoginDetails(model: LoginFormData): boolean {
    let isValid = false
    this.loginDetailsSchema.isValid(model).then(res => {
      isValid = res
    })
    return isValid
  }

  /**
   * Yup schema for mobile number validation
   */
  static mobileSchema = object().shape({
    code: string()
      .required('Country Code is required')
      .matches(/^\d{3}$/, 'Please enter a valid country code'),
    phone: string()
      .required('Phone number is required')
      .matches(
        /^\d{9,11}$/,
        'Phone number should have a minimum length of 9 and max of 12'
      )
  })

  /**
   * Yup schema for password validation
   */
  static passwordSchema = string()
    .required('Password is required')
    .matches(
      /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/,
      'Password should contain least a number, capital letter or a symbol '
    )

  /**
   * Yup Schema for id number validation
   */
  static idNumberSchema = string()
    .matches(/^\d+$/, 'Invalid ID number')
    .typeError('Invalid Id number')
    .required('Identification number is required')

  /**
   * Yup Schema for gender validation
   */
  static genderSchema = object().shape({
    id: number()
      .typeError('Runtime Error: Unable to assign id to gender')
      .required('Your gender is required'),
    name: string()
      .typeError('Runtime Error: Unable to assign name to gender')
      .required('Your gender is required')
  })

  static roleSchema = string()
    .oneOf(['provider', 'user', 'admin'], 'Serialization of role failed')
    .required('Your role is required')

  static rolesSchema = array()
    .of(this.roleSchema)
    .typeError('Serialization of roles failed')

  /**
   * Yup Schema for location validation
   */
  static geoLocationSchema = object()
    .optional()
    .shape({
      label: string().required('Please provide label for identification'),
      longitude: number().required('Longitude is required'),
      latitude: number().required('Latitude is required')
    })
    .typeError('Invalid Location')

  /**
   * Yup Schema for first name validation
   */
  static firstNameSchema = string().required('Please provide your first name')

  /**
   * Yup Schema for last name validation
   */
  static lastNameSchema = string().required('Please provide your last name')

  static countySchema = object()
    .shape({
      id: number().required('Required id'),
      Name: string().required('Required name')
    })
    .typeError('Your County is required')
    .required('Your County is required')

  /**
   * Yup schema for login details validation
   */
  static loginDetailsSchema = object().shape({
    mobileNumber: this.mobileSchema,
    password: this.passwordSchema
  })

  /**
   * Yup schema for create user details validation
   */
  static createUserSchema = object().shape({
    mobileNumber: this.mobileSchema,
    idNumber: this.idNumberSchema,
    firstName: this.firstNameSchema,
    surName: this.lastNameSchema
  })

  /**
   * Yup schema for register user details validation
   */
  static registerUserSchema = object().shape({
    gender: this.genderSchema,
    password: string()
      .required('Password is required')
      .matches(
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%? "]?).*$/,
        'Password should contain least a number, capital letter or a symbol '
      ),
    location: object()
      .typeError('Your County is required')
      .required('Your County is required'),
    confirmPassword: string().oneOf(
      [ref('password'), null],
      "Passwords don't match"
    )
  })
}

export default Validator
