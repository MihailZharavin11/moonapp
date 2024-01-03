import {XataClient} from "../../../xata";
import {XATA_API_KEY, XATA_BRANCH} from "$env/static/private";

export const xata = new XataClient({
    apiKey: XATA_API_KEY,
    branch: XATA_BRANCH
});