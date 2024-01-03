import {UserController} from "../../../infrastucture/controllers/User/user.controller";
import {container} from "tsyringe";
import {type RequestEvent} from "@sveltejs/kit";


const userController = container.resolve<UserController>('UserController')

export async function POST({request}: RequestEvent) {
    return await userController.postUser(request)
}

