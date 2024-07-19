export interface IResultPropType {
    documentId : string,
    title : string,
    titleHighlights : IHighlight[]
    description : string,
    descriptionHighlights : IHighlight[]
    documentURI : string
}

export interface IHighlight {
    beginOffset: number,
    endOffset: number
}