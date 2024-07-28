export interface Candidate {
    cid: string  //unique candidate id
    eid: number //reference to election the candidate belongs to
    name: string //name of the candidate 
    description?: string// Brief discription or biography
    votes?: number //number of votes received
    createdAt?: Date // timestamp when the candidate was created
    updatedAt?: Date // timestamp of the last update

}