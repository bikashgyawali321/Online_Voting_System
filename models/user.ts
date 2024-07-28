export interface User{
    uid: string //unique user id
    username: string  //username
    email: string //email address of the user
    password: string // password created by the user
    role?: string //role of the user
    createdAt?: Date  // Timestamp of when the user was created.
    updatedAt?: Date   // Timestamp of the last update.
    age?: number  // age of the user
}