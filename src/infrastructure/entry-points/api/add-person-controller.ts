import {Mapping, Body, Post, Adapter} from "@tsclean/core";
import {PersonModel, AddPersonParams} from "@/domain/models/person";
import {ADD_PERSON_SERVICE, IAddPersonService} from "@/domain/use-cases/add-person-service";

@Mapping('api/v1/add-person')
export class AddUserController {

    constructor(
         @Adapter(ADD_PERSON_SERVICE) private readonly addUserService: IAddPersonService
    ) {
    }

    @Post()
    async addUserController(@Body() data: AddPersonParams): Promise<PersonModel> {
        return await this.addUserService.addUserService(data);
    }
}