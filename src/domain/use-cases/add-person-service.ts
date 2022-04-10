import {PersonModel, AddPersonParams} from "@/domain/models/person";

export const ADD_PERSON_SERVICE = "ADD_PERSON_SERVICE"

export interface IAddPersonService {
  addUserService: (data: AddPersonParams) => Promise<PersonModel>
}