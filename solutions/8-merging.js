//BEGIN
import _ from 'lodash';

export default function fill(object, keys, data) {
    if (keys.length > 0) {
        let target = _.pick(data, keys);
        object = Object.assign(object, target);
    } else {
		object = Object.assign(object, data);
	}
    return object;
}
//END