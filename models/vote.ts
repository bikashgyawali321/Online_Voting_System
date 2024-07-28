
export interface Vote{
    id: string //unique id of the vote
    eid: string // the election in which the vote was cast
    cid:string // the candidate or option voted for
    uid:string //  the user who cast the vote
    createdAt: Date // tumestamp of when the vote was cast
} 