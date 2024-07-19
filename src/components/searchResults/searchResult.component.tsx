import React from "react";
import { Grid, Typography } from "@mui/material";
import { IResultPropType } from "./searchResult.type";
import Link from '@mui/material/Link';



export const SearchResult = (props: IResultPropType) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="left" sx={{color: '#1C76D5', fontWeight: 600, fontSize: '22px'}}>
                    <Link href={props.documentURI} color="inherit" sx={{textDecoration: 'none'}}  target="_blank">
                        {props.title}
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="left" sx={{fontSize: '16px'}}>
                    {props.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="left" sx={{color: '#686868', fontSize: '14px'}}>
                    <Link href={props.documentURI} color="inherit" sx={{textDecoration: 'none'}}  target="_blank">
                        {`${props.documentURI}`}
                    </Link> 
                </Typography>
            </Grid>
        </Grid>
    )
}