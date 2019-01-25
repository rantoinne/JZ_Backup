class Commons {
	basicAuth(username, password) {
		let token = username + ':' + password;
		let hash = btoa(token);
		return "Basic " + hash;
	}

	displayTime(time) {
		if (time>0) {
			return new Date(time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		} else {
			return "NA";
		}
	}
	groupBy(list, keyGetter) {
    let map = new Map();
    list.forEach((item) => {
        let key = keyGetter(item);
        let collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
    });
    return map;
	}
}

const instance = new Commons();
Object.freeze(instance);

export default instance;
