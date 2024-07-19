import React from "react";
import { Typography } from "@mui/material";
import { ISearchCountProps } from "./searchCount.type";


export const SearchCount = (props : ISearchCountProps) => {
    return (
        <Typography sx={{fontSize: '22px', fontWeight: 600, color: '#282828'}} align="left">
            {`Showing ${props.offset*10 + 1}-${(props.offset + 1) * 10} of ${props.total} results`}
        </Typography>
    );
}