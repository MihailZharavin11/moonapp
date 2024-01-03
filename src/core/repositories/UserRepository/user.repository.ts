import type {CreateUserDto} from "./dto/CreateUser.dto";
import {injectable} from "tsyringe";
import type {Users} from "../../../xata";
import {xata} from "../../../infrastucture/db/clients/xataClient";
import {v4 as uuidv4} from 'uuid';

interface IUserRepository {
    createUser(dto: CreateUserDto): Promise<Users>
    getUserByEmail(email: string): Promise<Users | null>
}

@injectable()
export default class UserRepository implements IUserRepository {
    createUser = async (dto: CreateUserDto): Promise<Users> =>
        await xata.db.Users.create({
            name: dto.name,
            email: dto.email,
            id: uuidv4(),
            password: dto.password
        });


    getUserByEmail = async (email: string): Promise<Users | null> => {
        const data = await xata.db.Users.filter({email}).getFirst();
        if (!data) {
            return null;
        }
        return data;
    }
}


