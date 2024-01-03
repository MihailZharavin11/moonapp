import {superValidate} from 'sveltekit-superforms/server';
import {fail, redirect, type RequestEvent} from '@sveltejs/kit';
import {z} from 'zod';
import {container} from "tsyringe";
import type {AuthController} from "../../infrastucture/controllers/Auth/auth.controller";

const schemaLogin = z.object({
    email: z.string().email('Enter a valid e-mail address'),
    password: z.string().min(3, 'The password must contain at least 3 characters')
});

const authController = container.resolve<AuthController>('AuthController')


export const actions = {
    default: async (event: RequestEvent) => {
        const form = await superValidate(event, schemaLogin);

        if (!form.valid) return fail(400, {form});

        const result = await authController.postAuth(event, form.data);

        throw redirect(302, '/');
    }
};
