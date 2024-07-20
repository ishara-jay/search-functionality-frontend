import React from "react";
import { 
    Autocomplete, 
    Button, 
    Grid, 
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
        <Grid container spacing={0} sx={{padding: '3%', paddingTop: 0, boxShadow: '0px 4px 10px #E0E4E5', marginBottom: '3%'}}>
            <Grid item xs={8} sm={10}>
                <Autocomplete 
                    id="seach-text-field" 
                    freeSolo 
                    options={options}
                    disableClearable
                    renderInput={(params: any) => 
                        <TextField {...params} 
                            placeholder="Enter your text here...." 
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    }
                />
            </Grid>
            <Grid item xs={4} sm={2}>
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