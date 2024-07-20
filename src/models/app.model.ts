export interface IResult{
    totalResults: number;
    pageNumber: number;
    pageSize: number;
    resultItems: IResultItem[]
}

export interface IResultItem{
    documentID:string;
    documentTitle: IDocument;
    documentExcerpt: IDocument;
    documentURI: string
}

export interface IDocument{
    text: string;
    highlights: IHighlight[]
}

export interface IHighlight {
    beginOffset: number,
    endOffset: number
}

export interface IHighlightText{
    text: string;
    isBold: boolean;
}

export interface ISuggestions {
    queries: string[]
}

interface SuggestionsQueryParams {
    inputText: string;
}

export type SuggestionsQueryKey = ['suggestions', SuggestionsQueryParams];

export type ResultsQueryKey = ['results', SuggestionsQueryParams];
