import axios, { AxiosResponse } from "axios"

export const fetch = (query: string, endpoint: string | undefined) : Promise<AxiosResponse<any, any>> => { //inputText will not be utilised as the API is static
    try {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/${endpoint}`);
    } catch (e) {
        throw new Error();
    }
}