import { boldText } from "../../util/highlight.util"


const text = "sample text"
const highlights = [{
        beginOffset: 7,
        endOffset: 12
    }]


const response = [ { text: 'sample ', isBold: false }, { text: 'text', isBold: true } ]

test('boldText should work when a string and a list of highlights is given', () => {
    console.log(boldText(text, highlights))
    expect(boldText(text, highlights)).toEqual(response);
})