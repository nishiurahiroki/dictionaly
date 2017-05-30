import React from 'react';

import DictionalyRepository from '../repository/dictionalyRepository';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    const dictionalyRepository = new DictionalyRepository();
    this.dictionalys = dictionalyRepository.findAll();
    this.headers = [
      '和名',
      '英名',
      '説明',
      ' ' // 削除ボタン
    ];
  }

  showHeader() {
    return (
      <thead>
        <tr>
          {this.headers.map((name) => {
            return <th key={name}> {name} </th>
          })}
        </tr>
      </thead>
    )
  }

  showDatas() {
    const _this = this;
    const datas = this.dictionalys.map((data) => {
      return (
        <tr key={data.japanaseName}>
          <td>{data.japanaseName}</td>
          <td>{data.englishName}</td>
          <td>{data.description}</td>
          <td><button onClick={_this.del.bind(_this, data.japanaseName)}>削除</button></td>
        </tr>
      )
    });
    return (
      <tbody>
        {datas}
      </tbody>
    )
  }

  del(key) {
    const dictionalyRepository = new DictionalyRepository();
    dictionalyRepository.del(key);
  }

  render () {
    return (
      <div>
        <div>
          <table>
            {this.showHeader()}
            {this.showDatas()}
          </table>
        </div>
      </div>
    )
  }
}
