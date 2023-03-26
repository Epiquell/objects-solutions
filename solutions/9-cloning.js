//BEGIN
export const cloneShallow = (object) => {
    let newobject = {};
    for (let svoystvo in object) {
        newobject[svoystvo] = object[svoystvo];
    }
    return newobject;
}
export default cloneShallow;
//END