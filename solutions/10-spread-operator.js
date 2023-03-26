//BEGIN
export const make = (COmpany, data = {}) => {
    return {
        name: COmpany,
        state: "moderating",
        createdAt: Date.now(),
        ...data,
    };
}
export default make;
//END