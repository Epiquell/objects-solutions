import _ from "lodash";

//BEGIN
export const countWords = (words) => {
    if (words.length == 0) {
        return {};
    }
    let massivwords = _.words(words.toLowerCase());
    let objectwords = _.countBy(massivwords);
    return objectwords;
}
export default countWords;
//END