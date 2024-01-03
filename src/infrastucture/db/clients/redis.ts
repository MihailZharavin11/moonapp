import {Redis} from "@upstash/redis";
import {UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN} from "$env/static/private";

export const redis = new Redis({
    url: UPSTASH_REDIS_REST_URL || '',
    token: UPSTASH_REDIS_REST_TOKEN || '',
});