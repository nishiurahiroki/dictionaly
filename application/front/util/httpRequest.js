export default class HttpRequest {
    static async get(url, params) {
	const param = this._createParam(params);
	return await this._doFetch(url, param, 'GET');
    }

    static async post(url, params) {
	const param = this._createParam(params);
	return await this._doFetch(url, param, 'POST');
    }

    // TODO putとdelete

    static async _doFetch(url, param, method) {
	const result = await fetch(url, {
	    method : method,
	    body : param
	});
	const datas = await result.json();
	return datas;
    }

    static _createParam(object) {
	const params = new URLSearchParams();
	if(!object) {
	    return {};
	}
	Object.keys(object).forEach((key) => {
	    params.set(key, object[key]);
	});
	return params;
    }
}
