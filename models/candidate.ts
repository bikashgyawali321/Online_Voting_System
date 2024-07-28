export interface Candidate {
    id: string, //unique candidate id
    eid: number, //reference to election the candidate belongs to
    fullName: string, //name of the candidate 
    age: number, //age of the candidate
    verifyCandidateAge: boolean, //verify if the candidate is valid by age
    candidatePhotoUrl?: string,  //URL or path to the candidate's photo.  
    description?: string,// Brief discription or biography
    votes?: number, //number of votes received
    createdAt?: Date, // timestamp when the candidate was created
    updatedAt?: Date // timestamp of the last update
    email? : string //email address of the candidate
    phoneNumber?: number// phone number of the candidate
    emailVerified?: boolean // check if the candidate's email id is a valid email id or not
    phoneNumberVerified?: boolean //check if the candidate's phone number is valid number
}