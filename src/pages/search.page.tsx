import React from "react";
import { Grid } from "@mui/material";
import { SearchBar } from "../components/searchBar/searchBar.component";
import { SearchResult } from "../components/searchResults/searchResult.component";
import { SearchCount } from "../components/searchCount/searchCount.component";
import { MasterHeader } from "../components/header/masterHeader.component";

export const Search = () => {
    return (
        <>
        <Grid container rowSpacing={6}>
            <Grid item xs={12}>
                <MasterHeader/>
            </Grid>
            <Grid item xs={12}>
                <SearchBar/>
            </Grid>
            <Grid item xs={12} sx={{paddingLeft:'4%', paddingRight: '4%'}}>
                <SearchCount total={300} offset={0}/>
            </Grid>
            <Grid item xs={12} sm={10} sx={{paddingLeft:'4%', paddingRight: '4%'}}>
                <SearchResult
                    title='Choose a Child Care Centre'
                    titleHighlights={[]}
                    description='...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...'
                    descriptionHighlights={[]}
                    documentId='8f09d0d0898e5470189120415158f7b5'
                    documentURI='https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx'
                />
            </Grid>
            <Grid item xs={12} sm={10} sx={{paddingLeft:'4%', paddingRight: '4%'}}>
                <SearchResult
                    title='Choose a Child Care Centre'
                    titleHighlights={[]}
                    description='...as partners to optimise the child physical, intellectual, emotional and social development. Choosing a Child Care Centre for Your Child In choosing the appropriate child care arrangement, the age and personality of your child are important factors for consideration...'
                    descriptionHighlights={[]}
                    documentId='8f09d0d0898e5470189120415158f7b5'
                    documentURI='https://www.ecda.gov.sg/Parents/Pages/ParentsChooseCCC.aspx'
                />
            </Grid>
            <Grid item xs={12} sm={10} sx={{paddingLeft:'4%', paddingRight: '4%'}}>
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