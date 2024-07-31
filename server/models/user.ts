export interface User {
    id?: string
    username: string
    fullName: string
    email: string
    password: string
    role: string // "guest", "admin", "moderator", "voter", etc.
    age?: number
    isEmailVerified: boolean
    phoneNumber?: string
    isPhoneNumberVerified?: boolean
    createdAt?: Date
    updatedAt?: Date
    userPhoto?: string
    isAdmin: boolean,
}
