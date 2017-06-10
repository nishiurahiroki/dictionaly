import React from 'react';

import DictionalyRepository from '../repository/dictionalyRepository';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      japanaseName : '',
      englishName : '',
      descliption : ''
    }
  }

  syncValue(e) {
    const itemKey = e.target.name;
    const itemValue = e.target.value;
    const changedValue = {};
    changedValue[itemKey] = itemValue;
    this.setState(changedValue);
  }

  save() {
    const dictionalyRepository = new DictionalyRepository();
    dictionalyRepository.save({
	japanase_name : this.state.japanaseName,
	english_name : this.state.englishName,
	descliption : this.state.descliption
    }).then(() => {
	alert('登録しました。');
    });
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
          説明 : <textarea name="descliption" onChange={this.syncValue.bind(this)}>{this.descliption}</textarea>
        </div>
        <div>
          <button onClick={this.save.bind(this)}>登録</button>
        </div>
      </div>
    )
  }
}
