
export interface Admin {
    id: number,
    username: string,
    email: string,
    password: string,
    role: string,
    permissions?: string[],
    createdAt?: Date,
    updatedAt?: Date,
}
