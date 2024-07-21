import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { IDocument, IHighlightText, IResultItem } from "../../models/app.model";
import { boldText } from "../../util/highlight.util";



export const SearchResult = (props: IResultItem) => {

    const createText = (textWithHighlights: IDocument, title: boolean) => {
        const titleTextArr : IHighlightText[] = boldText(textWithHighlights.text, textWithHighlights.highlights);
        const titleDiv: any[] = [];
        if(titleTextArr.length === 0) {
            titleDiv.push(<span>{textWithHighlights.text}</span>);
        }
        if (title) {
            titleTextArr.forEach((text: IHighlightText) => {
                if (text.isBold) {
                    titleDiv.push(<span style={{fontWeight: '900'}}>{text.text}</span>)
                } else {
                    titleDiv.push(<span style={{fontWeight: '600'}}>{text.text}</span>)
                }
            })
        } else {
            titleTextArr.forEach((text: IHighlightText) => {
                if (text.isBold) {
                    titleDiv.push(<span style={{fontWeight: '700'}}>{text.text}</span>)
                } else {
                    titleDiv.push(<span>{text.text}</span>)
                }
            })
        }
        return titleDiv;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography 
                    component={Link} 
                    href={props.documentURI} 
                    sx={{
                        color: '#1C76D5', 
                        textDecoration: 'none',
                        fontWeight: '600', 
                        fontSize: '22px', 
                        '&.MuiLink-root': { display: 'block', textAlign: 'left' } 
                        }}
                >
                    {createText(props.documentTitle, true)}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align="left" sx={{fontSize: '16px'}}>
                    {createText(props.documentExcerpt, false)}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography 
                    component={Link} 
                    href={props.documentURI} 
                    align="left" 
                    sx={{
                        color: '#686868',  
                        textDecoration: 'none', 
                        fontSize: '14px', 
                        '&.MuiLink-root': { display: 'block', textAlign: 'left' } 
                        }}
                >
                    {`${props.documentURI}`}
                </Typography>
            </Grid>
        </Grid>
    )
}