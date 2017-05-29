export default class Repository {
  constructor(props) {
    this.name = props.name;
  }

  save(data) {
    const temporaly = this._getTemporaly(this.name);
    temporaly[data.key] = data.entity;
    sessionStorage.setItem(
      this.name,
      JSON.stringify(temporaly)
    );
  }

  del(key) {
    const temporaly = this._getTemporaly(this.name);
    delete temporaly[key];
    sessionStorage.setItem(
      this.name,
      JSON.stringify(temporaly)
    );
  }

  find(key) {
    return this._getTemporaly(this.name)[key]['entity'];
  }

  findAll() {
    const temporaly = this._getTemporaly(this.name);
    return Object.keys(temporaly).map(function(key) {
      return temporaly[key];
    });
  }

  _getTemporaly(name) {
    const temporaly = JSON.parse(sessionStorage.getItem(name));
    if(temporaly) {
      return temporaly;
    }
    return {};
  }
}
