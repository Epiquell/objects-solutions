//BEGIN
export default function get(obj, svoystva) {
    let result = obj;
    for (let svoystvo of svoystva) {
        if (result && Object.hasOwn(result, svoystvo)) {
            result = result[svoystvo];
        } else {
            return null;
        }
    }
    return result;
}
//END