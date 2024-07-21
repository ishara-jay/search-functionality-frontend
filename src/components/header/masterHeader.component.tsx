import React from "react";
import { Box, Grid, Typography } from "@mui/material";


export const MasterHeader = () => {

    return (
        <Box sx={{backgroundColor: '#F0F0F0', display: "flex", paddingLeft: "4%", alignItems: "center"}}>
            <Box component="img" src={'/images/lion-sg.svg'} sx={{ display: 'flex', padding: "0.4%"}}/>
            <Typography sx={{fontSize: '9.89px'}} >An Official Website of the&nbsp;</Typography>
            <Typography sx={{fontWeight: 600, fontSize: '9.89px'}}>Singapore Government</Typography>
        </Box>
    )
}