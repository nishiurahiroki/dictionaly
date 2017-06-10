import React from 'react';

import DictionalyRepository from '../repository/dictionalyRepository';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.dictionalyRepository = new DictionalyRepository();
    this.state = {
	dictionalys : ''
    };
    this.headers = [
      '和名',
      '英名',
      '説明',
      '' // 削除ボタン
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

  async componentDidMount() {
    const _this = this;
    const query = await this.dictionalyRepository.findAll();
    const datas = query.map((data) => {
	return (<tr key={data.japanaseName}>
		<td>{data.japanaseName}</td>
		<td>{data.englishName}</td>
		<td>{data.descliption}</td>
		<td><button onClick={_this.del.bind(_this, data.japanaseName)}>削除</button></td>
		</tr>
	       )
    });
    this.setState({
	dictionalys : (<tbody>
		       {datas}
		       </tbody>
		      )
    });
  }

  del(key) {
    this.dictionalyRepository.del(key);
  }

   render () {
     return (
      <div>
        <div>
          <table>
            {this.showHeader()}
            {this.state.dictionalys}
          </table>
        </div>
      </div>
    )
  }
}
