//BEGIN
export const pick = (object, parametrs) => {
    let newobject = {};
    for (let svoystvo in object) {
        if (parametrs.includes(svoystvo)) {
            newobject[svoystvo] = object[svoystvo];
        }
    }
    return newobject;
}
export default pick;
//END