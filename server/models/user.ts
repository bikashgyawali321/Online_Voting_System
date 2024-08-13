import { Roles } from "./roles"

export interface User {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role: Roles
    age?: number
    isEmailVerified: boolean
    phoneNumber?: string
    isPhoneNumberVerified?: boolean
    createdAt?: Date
    updatedAt?: Date
    userPhoto?: string

}
