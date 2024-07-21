import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { SearchBar } from "../components/searchBar/searchBar.component";
import { SearchResult } from "../components/searchResults/searchResult.component";
import { SearchCount } from "../components/searchCount/searchCount.component";
import { useQuery } from "react-query";
import { fetchQueryResults, fetchSuggestions } from "../util/query.util";
import { IResult, IResultItem, ISuggestions, ResultsQueryKey, SuggestionsQueryKey } from "../models/app.model";
import { MasterHeader } from "../components/header/masterHeader.component";
import { PlaceHolder } from "../components/placeHolder/placeHolder.component";

export const Search = () => {

    const [inputText, setInputText] = useState('');
    const [suggestions, setSugesstions] = useState<ISuggestions>({
        queries: []
    });

    const suggestionsQuery = useQuery<ISuggestions, Error, ISuggestions, SuggestionsQueryKey>(
        ['suggestions', { inputText }], 
        fetchSuggestions
    );

    const resultsQuery = useQuery<IResult, Error, IResult, ResultsQueryKey>(
        ['results', { inputText }], 
        fetchQueryResults, 
        { enabled : false}
    );

    const onClickSearch = () => {
        resultsQuery.refetch();
    }

    useEffect(() => {
        if (suggestionsQuery.error) {
            
        } else if (suggestionsQuery.data) {
            setSugesstions(suggestionsQuery.data)
        }
    }, [suggestionsQuery.data, suggestionsQuery.isError]);

    return (
        <>
        <MasterHeader/>
        <SearchBar 
            setInputText={setInputText} 
            suggestions={suggestions} 
            inputText={inputText}
            onClick={onClickSearch}

        />
        <Grid container rowSpacing={4} sx={{paddingLeft:'50px', paddingRight: '50px'}}>
            <Grid item xs={12}>
                <SearchCount total={resultsQuery.data?.totalResults} offset={0}/>
            </Grid>
            <PlaceHolder isError={resultsQuery.isError || suggestionsQuery.isError} message="Error retrieving results "/>
            {resultsQuery.data?.resultItems.map((result: IResultItem) => {
                    return (
                        <Grid item xs={12} sm={10} key={result.documentID}>
                            <SearchResult
                                documentTitle={result.documentTitle}
                                documentExcerpt={result.documentExcerpt}
                                documentID={result.documentID}
                                documentURI={result.documentURI}
                            />
                        </Grid>
                    )
                    })
            }
        </Grid>
        </>
    )
}