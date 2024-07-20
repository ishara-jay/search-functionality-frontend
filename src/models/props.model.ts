import { IHighlight, ISuggestions } from "./app.model"

export interface ISearchCountProps {
    total : number | undefined,
    offset : number
}

export interface IResultPropType {
    documentId : string,
    title : string,
    titleHighlights : IHighlight[]
    description : string,
    descriptionHighlights : IHighlight[]
    documentURI : string
}

export interface ISearchBarProps {
    setInputText : Function
    inputText : string
    suggestions : ISuggestions
    onClick : Function
}
