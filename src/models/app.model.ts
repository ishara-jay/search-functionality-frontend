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