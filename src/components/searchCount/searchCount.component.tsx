import React from "react";
import { Typography } from "@mui/material";
import { ISearchCountProps } from "../../models/props.model";


export const SearchCount = (props : ISearchCountProps) => {
    return (
        <Typography sx={{fontSize: '22px', fontWeight: 600, color: '#282828'}} align="left">
            {props.total ? `Showing 1-${props.total} of ${props.total} results` : ""}
        </Typography>
    );
}