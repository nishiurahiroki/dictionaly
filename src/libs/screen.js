import React from 'react';

import Register from '../contents/register';
import List from '../contents/list';

export default class Screen {
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
    const SCREENS = {
      regist : (
        <Register />
      ),
      list : (
        <List />
      )
    };
    return SCREENS[key];
  }
}
