
import { ADD_PERSON_REPOSITORY } from "@/domain/models/contracts/add-person-repository";
import { ADD_PERSON_SERVICE } from "@/domain/use-cases/add-person-service";

import { AddPersonServiceImpl } from "@/domain/use-cases/impl/add-person-service-impl";
import { PersonMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/person-mongoose-repository-adapter";

export const providers = [
    {
        useClass: PersonMongooseRepositoryAdapter,
        provide: ADD_PERSON_REPOSITORY
    }
]

export const services = [
    {
        useClass: AddPersonServiceImpl,
        provide: ADD_PERSON_SERVICE
    }
]

export const adapters = [
    {
        useClass: PersonMongooseRepositoryAdapter,
        provide: ADD_PERSON_REPOSITORY,
    },
]