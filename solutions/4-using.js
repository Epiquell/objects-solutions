//BEGIN
export const getDomainInfo = (url) => {
    let scheme,
        nameulr;
    if (url.startsWith("https://")) {
        scheme = `https`
        nameulr = url.split("//")[1];
    } else {
        scheme = 'http';
		if (url.startsWith("http://"))
			nameulr = url.split("//")[1];
		else
			nameulr = url;
    }
    let obj = {
        scheme: scheme,
        name: nameulr,
    };
    return obj;
}
export default getDomainInfo;
//END