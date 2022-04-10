import { IAddPersonRepository } from "@/domain/models/contracts/add-person-repository";
import {AddPersonParams, PersonModel} from "@/domain/models/person";
import {PersonModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/person";

export class PersonMongooseRepositoryAdapter implements IAddPersonRepository{
    
    async addUserRepository(data: AddPersonParams): Promise<PersonModel> {
        return await PersonModelSchema.create(data);
    }
}
