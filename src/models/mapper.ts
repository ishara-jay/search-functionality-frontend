import { 
    IDocument, 
    IHighlight, 
    IResult, 
    IResultItem, 
    ISuggestions
} from "./app.model";
import { 
    IDocumentDTO, 
    IHighlightDTO, 
    IResultItemDTO, 
    IResultsDTO, 
    ISuggestionsDTO
} from "./dto.model";

export const mapSuggestions = (suggestionsDTO: ISuggestionsDTO): ISuggestions => {
    return {
        queries: suggestionsDTO.suggestions
    }
}

export const mapResults = (resultDTO: IResultsDTO):IResult => {
    const result: IResult = {
        totalResults: resultDTO.TotalNumberOfResults,
        pageNumber: resultDTO.Page,
        pageSize: resultDTO.PageSize,
        resultItems: mapResultItems(resultDTO.ResultItems)
    }

    return result;
}

const mapResultItems = (resultItemsDTO: IResultItemDTO[]):IResultItem[] => {

    return resultItemsDTO.map((itemDTO: IResultItemDTO)=>{
        return {
            documentID: itemDTO.DocumentId,
            documentURI: itemDTO.DocumentURI,
            documentTitle: mapDocument(itemDTO.DocumentTitle),
            documentExcerpt : mapDocument(itemDTO.DocumentExcerpt),
        }
    });
}

const mapDocument = (documentDTO: IDocumentDTO): IDocument => {
        return{
            text: documentDTO.Text,
            highlights: mapHighlight(documentDTO.Highlights)
        }
}

const mapHighlight = (hightlightsDTO: IHighlightDTO[]): IHighlight[] => {
    return hightlightsDTO.map((hightlightsDTO: IHighlightDTO)=>{
        return {
            beginOffset: hightlightsDTO.BeginOffset,
            endOffset: hightlightsDTO.EndOffset
        }
    })
}  