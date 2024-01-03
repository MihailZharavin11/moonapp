import {json} from "@sveltejs/kit";


export class BaseApiController {

    protected async wrapResponse<T>(apiFunction: (...args: any[]) => Promise<T>, ...args: any[]) {
        try {
            const data = await apiFunction();
            return json({data, success: true});
        } catch (error) {

            return json({
                success: false,
                error: JSON.stringify(error)
            });
        }
    }
}