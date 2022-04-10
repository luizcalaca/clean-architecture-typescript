import {PersonModel, AddPersonParams} from "@/domain/models/person";

export const ADD_PERSON_REPOSITORY = "ADD_PERSON_REPOSITORY"

export interface IAddPersonRepository {
    addUserRepository: (data: AddPersonParams) => Promise<PersonModel>;
}