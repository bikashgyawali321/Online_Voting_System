import { User } from "./user";

export interface Candidate extends User {
    candidateId: string;
    electionId: string;
    description?: string;
    votes?: number;
    candidatePhotoUrl?: string;
    // Additional fields specific to candidates can go here
}
