export interface Candidate {
    id: string, 
    eid: number, 
    fullName: string, 
    age: number, 
    verifyCandidateAge: boolean, 
    candidatePhotoUrl?: string,  
    description?: string,
    votes?: number,
    createdAt?: Date, 
    updatedAt?: Date,
    email? : string ,
    phoneNumber?: number,
    emailVerified?: boolean ,
    phoneNumberVerified?: boolean
}