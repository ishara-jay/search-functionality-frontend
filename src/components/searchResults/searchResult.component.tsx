import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { IResultItem } from "../../models/app.model";



export const SearchResult = (props: IResultItem) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="left" sx={{color: '#1C76D5', fontWeight: 600, fontSize: '22px'}}>
                    <Link href={props.documentURI} color="inherit" sx={{textDecoration: 'none'}}  target="_blank">
                        {props.documentTitle.text}
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="left" sx={{fontSize: '16px'}}>
                    {props.documentExcerpt.text}
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