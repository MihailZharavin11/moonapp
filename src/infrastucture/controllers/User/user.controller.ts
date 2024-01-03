import type {UserService} from "../../../core/services/UserService/user.service";
import type {CreateUserDto} from "../../../core/repositories/UserRepository/dto/CreateUser.dto";
import {inject, injectable} from "tsyringe";
import {BaseApiController} from "../baseApi.controller";
import bcrypt from "bcrypt";

@injectable()
export class UserController extends BaseApiController {
    constructor(
        @inject('UserService') readonly userService: UserService
    ) {
        super();
    }


    postUser = async (request: Request) =>
        await this.wrapResponse(async () => {
            const userDto = await request.json() as CreateUserDto;
            return await this.userService.createNewUser({
                ...userDto,
                password: await bcrypt.hash(userDto.password, 10)
            });
        });

}