import React from "react";
import { Grid, Typography } from "@mui/material";

interface IPlaceHolderMessage {
    isError: boolean;
    message: string;
}

export const PlaceHolder = (props: IPlaceHolderMessage) => {

    if (props.isError)
        return (
            <Grid item xs={12} sm={12}>
                <Typography sx={{fontWeight: 600}}>Error retrieving results </Typography>
            </Grid>
        );

    return (
        <></>
    )
}