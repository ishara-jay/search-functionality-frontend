export interface IResultsDTO{
    TotalNumberOfResults: number;
    Page: number;
    PageSize: number;
    ResultItems: IResultItemDTO[]
}

export interface IResultItemDTO{
    DocumentId:string;
    DocumentTitle: IDocumentDTO;
    DocumentExcerpt: IDocumentDTO;
    DocumentURI: string
}

export interface IDocumentDTO{
    Text: string;
    Highlights:IHighlightDTO[]
}

export interface IHighlightDTO{
    BeginOffset: number;
    EndOffset: number;
}