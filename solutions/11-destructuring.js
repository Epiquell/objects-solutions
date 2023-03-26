//BEGIN
export const getSortedNames = (object) => {
    let massiv = [];
    for (let svoystvo in object) {
        massiv.push(object[svoystvo].name);
    }
    return massiv.sort();
}
export default getSortedNames;
//END