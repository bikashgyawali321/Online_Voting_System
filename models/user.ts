export interface User {
    uid: string //unique user id
    username: string  //username
    email: string //email address of the user
    password: string // password created by the user
    role?: string //role of the user
    age: number  // age of the user
    verifyUserAge: boolean,//verify if the user is a valid voter
    userPhoto?:string, //URL or path to photo of the user/voter
    votingCardPhotoUrl: string//URL or path to the user's voting card photo.
    createdAt?: Date  // Timestamp of when the user was created.
    updatedAt?: Date   // Timestamp of the last update.
}