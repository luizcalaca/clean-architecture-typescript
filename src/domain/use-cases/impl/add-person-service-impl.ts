import {Adapter, Service} from "@tsclean/core";
import {PersonModel} from "@/domain/models/person";
import {AddPersonParams} from "@/domain/models/person";
import {IAddPersonService} from "@/domain/use-cases/add-person-service";
import { ADD_PERSON_REPOSITORY, IAddPersonRepository } from "@/domain/models/contracts/add-person-repository";

@Service()
export class AddPersonServiceImpl implements IAddPersonService {
    constructor(
        @Adapter(ADD_PERSON_REPOSITORY) private readonly addPersonRepository: IAddPersonRepository
    ) {
    }
    addUserService: (data: AddPersonParams) => Promise<PersonModel>;

    async addPersonService(data: AddPersonParams): Promise<PersonModel> {
        return await this.addPersonRepository.addUserRepository(data);
    }
}