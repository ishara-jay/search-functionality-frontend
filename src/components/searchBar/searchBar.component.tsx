import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { 
    Autocomplete, 
    Button, 
    Grid, 
    IconButton, 
    InputAdornment, 
    TextField 
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {

    //TODO : render this based on the API response
    const options: string[] = [
        "ABCD",
        "ABSD",
        "GFCR",
        "ALMO"
    ]

    return (
        <Grid container spacing={0} sx={{padding: '3%', boxShadow: '0px 4px 10px #E0E4E5', marginBottom: '3%'}}>
            <Grid item xs={10}>
                <Autocomplete 
                    id="seach-text-field" 
                    freeSolo 
                    options={options}
                    disableClearable
                    renderInput={(params: any) => 
                        <TextField {...params} 
                            placeholder="Enter your text here...." 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <CloseIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    }
                />
            </Grid>
            <Grid item xs={2}>
                <Button 
                    variant="contained" 
                    sx={{
                        width: "100%",
                        height: "100%"
                    }}
                    startIcon={<SearchIcon/>}
                >Search</Button>
            </Grid>
        </Grid>
    )
}