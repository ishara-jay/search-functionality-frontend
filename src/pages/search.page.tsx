import { Grid } from "@mui/material";
import React from "react";
import { SearchBar } from "../components/searchBar/searchBar.component";
import { SearchResult } from "../components/searchResults/searchResult.component";
import { SearchCount } from "../components/searchCount/searchCount.component";

export const Search = () => {
    return (
        <>

        <SearchBar/>
        <Grid container rowSpacing={2} sx={{paddingLeft:'50px', paddingRight: '50px'}}>
            <Grid item xs={12}>
                <SearchCount total={300} offset={0}/>
            </Grid>
            <Grid item xs={12} sm={10}>
                <SearchResult
                    title='Choose a Child Care Centre'
                    titleHighlights={[]}
                    description='...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...'
                    descriptionHighlights={[]}
                    documentId='8f09d0d0898e5470189120415158f7b5'
                    documentURI='https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx'
                />
            </Grid>
            <Grid item xs={12} sm={10}>
                <SearchResult
                    title='Choose a Child Care Centre'
                    titleHighlights={[]}
                    description='...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...'
                    descriptionHighlights={[]}
                    documentId='8f09d0d0898e5470189120415158f7b5'
                    documentURI='https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx'
                />
            </Grid>
            <Grid item xs={12} sm={10}>
                <SearchResult
                    title='Choose a Child Care Centre'
                    titleHighlights={[]}
                    description='...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...'
                    descriptionHighlights={[]}
                    documentId='8f09d0d0898e5470189120415158f7b5'
                    documentURI='https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx'
                />
            </Grid>
        </Grid>
        </>
    )
}