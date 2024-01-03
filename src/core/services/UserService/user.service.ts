import type {CreateUserDto} from "../../repositories/UserRepository/dto/CreateUser.dto";
import {inject, injectable} from "tsyringe";
import UserRepository from "../../repositories/UserRepository/user.repository";
import type {Users} from "../../../xata";


@injectable()
export class UserService {
    constructor(
        @inject('UserRepository') readonly userRepository: UserRepository
    ) {

    }


    async createNewUser(dto: CreateUserDto):Promise<Users> {
        return await this.userRepository.createUser(dto);
    }


}

