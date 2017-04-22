import React from 'react';

import Register from '../contents/register';
import List from '../contents/list';

export default class Screen {
  static _getMenuInfos(key) {
    const INFOS = {
      regist : {
        key    : 'regist',
        name   : '登録',
        screen : (
          <Register />
        )
      },
      list : {
        key    : 'list',
        name   : '一覧',
        screen : (
          <List />
        )
      }
    };
    return INFOS[key];
  }

  static getMenuInfos() {
    return [
      {
        key  : 'regist',
        name : '登録'
      },
      {
        key  : 'list',
        name : '一覧'
      }
    ];
  }

  static get(key) {
    return this._getMenuInfos(key).screen;
  }
}
