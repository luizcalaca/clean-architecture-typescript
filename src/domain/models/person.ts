export type PersonModel = {
    id: string | number;
    username: string;
    email: string;
}

export type AddPersonParams = Omit<PersonModel, 'id'>
