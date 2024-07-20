import { IHighlight, IHighlightText } from "../models/app.model";

export const boldText = (text: string, highlights: IHighlight[]) => {
    const formattedTextArr: IHighlightText[] = [];
    let beginSliceIndex = 0;

    highlights.forEach(highlight => {

        const textSlice = {
            text: text.substring(beginSliceIndex,highlight.beginOffset),
            isBold: false
        }
        textSlice.text !== "" ? formattedTextArr.push(textSlice) : 0;

        const boldTextSlice = {
            text: text.substring(highlight.beginOffset, highlight.endOffset),
            isBold: true
        }

        boldTextSlice.text !== "" ? formattedTextArr.push(boldTextSlice) : 0;

        beginSliceIndex = highlight.endOffset;
    });

    return formattedTextArr;
}
