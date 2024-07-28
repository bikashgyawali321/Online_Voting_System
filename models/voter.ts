import { User } from "./user";

export interface Voter extends User {
    voterId: string; 
    voterCardPhotoUrl: string; 
    eligibleToVote: boolean; 
    
}
