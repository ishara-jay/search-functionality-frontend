import { boldText } from "../../util/highlight.util"


const text = "sample text"
const highlights = [{
        beginOffset: 0,
        endOffset: 6
    }]

const highlightsForEndBold = [{
        beginOffset: 7,
        endOffset: 11
    }]


const response = [ { text: 'sample', isBold: true }, { text: ' text', isBold: false } ]
const responseForEndBold = [ { text: 'sample ', isBold: false }, { text: 'text', isBold: true } ]

test('boldText should work when a string and a list of highlights is given', () => {
    console.log(boldText(text, highlights))
    expect(boldText(text, highlights)).toEqual(response);
})

test('boldText should work when a string and a list of highlights is given and ends with a bold text', () => {
    console.log(boldText(text, highlights))
    expect(boldText(text, highlights)).toEqual(response);
})