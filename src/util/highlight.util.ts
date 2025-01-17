import { IHighlight, IHighlightText } from "../models/app.model";

export const boldText = (text: string, highlights: IHighlight[]) : IHighlightText[] => {
    const formattedTextArr: IHighlightText[] = [];
    let beginSliceIndex = 0;

    highlights.forEach(highlight => {

        const textSlice = {
            text: text.substring(beginSliceIndex,highlight.beginOffset),
            isBold: false
        }
        textSlice.text !== "" && formattedTextArr.push(textSlice);

        const boldTextSlice = {
            text: text.substring(highlight.beginOffset, highlight.endOffset),
            isBold: true
        }
        boldTextSlice.text !== "" && formattedTextArr.push(boldTextSlice);

        beginSliceIndex = highlight.endOffset;
    });

    if(beginSliceIndex !== text.length - 1) {
        const boldTextSlice = {
            text: text.substring(beginSliceIndex, text.length),
            isBold: false
        }
        boldTextSlice.text !== "" && formattedTextArr.push(boldTextSlice)
    }

    return formattedTextArr;
}
