import { QueryFunctionContext } from "react-query";
import { IResult, ResultsQueryKey, SuggestionsQueryKey } from "../models/app.model";
import { mapResults, mapSuggestions } from "../models/mapper";
import { fetch } from "./http.util"

export const fetchSuggestions = async ({queryKey} : QueryFunctionContext<SuggestionsQueryKey>) => {
    const [_key, {inputText} ] = queryKey;
    const response = await fetch(inputText, process.env.REACT_APP_SUGGESTION_ENDPOINT);
    return mapSuggestions(response.data);
}

export const fetchQueryResults = async ({queryKey} : QueryFunctionContext<ResultsQueryKey>) : Promise<IResult> => {
    const [_key, {inputText} ] = queryKey;
    const response = await fetch(inputText, process.env.REACT_APP_QUERY_ENDPOINT);
    return mapResults(response.data);
}