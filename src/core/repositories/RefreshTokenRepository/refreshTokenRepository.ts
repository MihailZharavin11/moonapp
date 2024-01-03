import {injectable} from "tsyringe";
import {redis} from "../../../infrastucture/db/clients/redis";


interface IRefreshTokenRepository {
    get(id: string): Promise<string>,

    set(refreshToken: string): Promise<string | null>
}


@injectable()
export default class RefreshTokenRepository implements IRefreshTokenRepository {

    async get(id: string) {
        return ''
    }

    async set(id: string) {
        return await redis.set(id, 'refresh', {
            ex: Number.parseInt(process.env.JWT_REFRESH_TOKEN_LIFETIME_MINS || '1440') * 60
        });
    }
}