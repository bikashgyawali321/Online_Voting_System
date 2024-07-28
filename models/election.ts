export interface Election {
    eid: string  //unique id of the election
    title: string  //title or name of the election
    description?: string // breif description of the election
    startDate?: Date  //start date and time for the election
    endDate?: Date //end date and time for election
    status: string //status of the election 

}