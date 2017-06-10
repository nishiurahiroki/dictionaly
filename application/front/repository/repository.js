import HttpRequest from '../util/httpRequest'

export default class Repository {
  constructor(props) {
    this.name = props.name;
  }

  save(data) {
    return HttpRequest.post('api/regist', data);
  }

  del(key) {
    return HttpRequest.post('api/delete', { key : key });
  }

  find(key) {
    return this._getTemporaly(this.name)[key]['entity'];
  }

  async findAll() {
    return await HttpRequest.get('api/search');
  }

  _getTemporaly(name) {
    const temporaly = JSON.parse(sessionStorage.getItem(name));
    if(temporaly) {
      return temporaly;
    }
    return {};
  }
}
