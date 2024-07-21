import React, { useEffect, useState } from "react";
import { 
    Autocomplete, 
    Button, 
    Grid, 
    TextField 
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { ISearchBarProps } from "../../models/props.model";
import { ISuggestions } from "../../models/app.model";

export const SearchBar = (props: ISearchBarProps) => {

    const [suggestions, setSugesstions] = useState<ISuggestions>(props.suggestions);

    useEffect(() => {
        setSugesstions(props.suggestions);
    },[props.suggestions])

    const onKeyDown = (e : React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            props.onClick(props.inputText);
        }
    }

    const onChangeSearchText = (e: any) => {
        props.setInputText(e.target.value)
    } 

    return (
        <Grid container spacing={0} sx={{padding: '4%', boxShadow: '0px 4px 10px #E0E4E5', marginBottom: '3%'}}>
            <Grid item xs={8} sm={10}>
                <Autocomplete 
                    id="seach-text-field" 
                    options={props.inputText.length !== 0 ? suggestions.queries : ['no options...']}
                    freeSolo
                    disableClearable
                    renderInput={(params: any) => 
                        <TextField {...params} 
                            placeholder="Enter your text here...." 
                            onChange={onChangeSearchText}
                            onKeyDown={(e) => onKeyDown(e)}
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
                    onClick={(e) => props.onClick(e)}
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