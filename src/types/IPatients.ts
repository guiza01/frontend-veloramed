export interface IPatients {
    name: string,
    agreement: string,
    phone: string,
    email: string,
    cpf?: string,
    birthDate?: Date,
    observations?: string[]
}