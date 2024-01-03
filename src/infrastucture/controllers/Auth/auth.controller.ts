import {inject, injectable} from "tsyringe";
import {BaseApiController} from "../baseApi.controller";
import type {AuthService} from "../../../core/services/AuthService/auth.service";
import {type RequestEvent} from "@sveltejs/kit";

@injectable()
export class AuthController extends BaseApiController {
    constructor(
        @inject('AuthService') readonly authService: AuthService
    ) {
        super();
    }


    postAuth = async (request: RequestEvent, data: { email: string, password: string }) =>
        await this.wrapResponse(async () => {
            const {email, password} = data;

            const token = await this.authService.login({email, password});
            if (!token) {
                throw new Error('An error occurred, try again later')
            }

            request.cookies.set('Authorization', `Bearer ${token}`, {
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'strict',
                maxAge: Number.parseInt(process.env.JWT_REFRESH_TOKEN_LIFETIME || '1440') * 60
            });
            return {success: true}
        })

}