import React from 'react';

import Dictionaly from '../repository/DictionalyRepository';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      japanaseName : '',
      englishName : '',
      description : ''
    }
  }

  syncValue(e) {
    let itemKey = e.target.name;
    let itemValue = e.target.value;
    let changedValue = {};
    changedValue[itemKey] = itemValue;
    this.setState(changedValue);
  }

  save() {
    Dictionaly.save(this.state);
  }

  render() {
    return (
      <div>
        <div>
          和名 : <input type="text" name="japanaseName" onChange={this.syncValue.bind(this)} value={this.japanaseName} />
        </div>
        <div>
          英名 : <input type="text" name="englishName"  onChange={this.syncValue.bind(this)} value={this.englishName} />
        </div>
        <div>
          説明 : <textarea name="description"  onChange={this.syncValue.bind(this)}>{this.description}</textarea>
        </div>
        <div>
          <button onClick={this.save.bind(this)}>登録</button>
        </div>
      </div>
    )
  }
}
