import { 
    IDocument, 
    IHighlight, 
    IResult, 
    IResultItem 
} from "./app.model";
import { 
    IDocumentDTO, 
    IHighlightDTO, 
    IResultItemDTO, 
    IResultsDTO 
} from "./dto.model";

export const ResultMapper = (resultDTO: IResultsDTO):IResult => {
    const result: IResult = {
        totalResults: resultDTO.TotalNumberOfResults,
        pageNumber: resultDTO.Page,
        pageSize: resultDTO.PageSize,
        resultItems: resultItemMapper(resultDTO.ResultItems)
    }

    return result;
}

const resultItemMapper = (resultItemsDTO: IResultItemDTO[]):IResultItem[] => {

    return resultItemsDTO.map((itemDTO: IResultItemDTO)=>{
        return {
            documentID: itemDTO.DocumentId,
            documentURI: itemDTO.DocumentURI,
            documentTitle: documentMapper(itemDTO.DocumentTitle),
            documentExcerpt : documentMapper(itemDTO.DocumentExcerpt),
        }
    });
}

const documentMapper = (documentDTO: IDocumentDTO): IDocument => {
        return{
            text: documentDTO.Text,
            highlights: hightlightMapper(documentDTO.Highlights)
        }
}

const hightlightMapper = (hightlightsDTO: IHighlightDTO[]): IHighlight[] => {
    return hightlightsDTO.map((hightlightsDTO: IHighlightDTO)=>{
        return {
            beginOffset: hightlightsDTO.BeginOffset,
            endOffset: hightlightsDTO.EndOffset
        }
    })
}  