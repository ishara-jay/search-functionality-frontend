import { mapDocument, mapHighlight, mapResultItems } from "../../models/mapper"

const highlightDTO = {
    BeginOffset: 0,
    EndOffset: 5
}

const documentDTO = {
    Text: "sample text",
    Highlights: [highlightDTO]
}

const resultItemDTO = {
    DocumentId: "12345",
    DocumentTitle: documentDTO,
    DocumentExcerpt: documentDTO,
    DocumentURI: "sampleURL"
}

test('mapHighlight works when IHighlightDTO is given', () => {
    expect(mapHighlight([highlightDTO])).toEqual([{
        beginOffset: 0,
        endOffset: 5
    }])
});

test('mapDocument works when IDocumentDTO is given', () => {
    expect(mapDocument(documentDTO)).toEqual({
        text: "sample text",
        highlights: [{
            beginOffset: 0,
            endOffset: 5
        }]
    })
});

test('mapResultItems works when IResultItemDTO[] is given', () => {
    expect(mapResultItems([resultItemDTO])).toEqual([{
        documentID: "12345",
        documentTitle: {
            text: "sample text",
            highlights: [{
                beginOffset: 0,
                endOffset: 5
            }]
        },
        documentExcerpt: {
            text: "sample text",
            highlights: [{
                beginOffset: 0,
                endOffset: 5
            }]
        },
        documentURI: "sampleURL"
    }])
});



