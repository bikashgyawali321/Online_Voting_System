export interface Voter {
    id: string //unique voter id
    userName: string  //username of the voter
    email: string //email address of the voter
    emailVerified: boolean, //check if the email address is a valid email address
    password: string // password created by the voter
    fullName: string // full name of the voter
    role?: string //role of the voter
    age: number  // age of the voter
    verifyVoterAge: boolean,//verify if the voter is a valid voter
    phoneNumber?: number //phone number of the voter
    phoneNumberVerified?: boolean // check if voter's phone number is valid
    voterPhoto?: string, //URL or path to photo of the voter
    votingCardPhotoUrl: string//URL or path to the voter's voting card photo.
    createdAt?: Date  // Timestamp of when the voter was created.
    updatedAt?: Date   // Timestamp of the last update.
}