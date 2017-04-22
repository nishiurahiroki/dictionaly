import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';
import SideMenu from './sideMenu';

import Register from './contents/register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMainContents : ''
    };
  }

  getMenus() {
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

  changeMainContents() {
    return (e) => {
      let screenName = e.target.getAttribute('data-screen');
      const SCREENS = {
        regist : (
          <Register />
        ),
        list : (
          <Register />
        )
      }

      this.setState({
        selectedMainContents : SCREENS[screenName]
      });
    };
  }

  render () {
    return (
      <div id="main">
        <Header text="辞書登録" />
        <SideMenu menus={this.getMenus()} onClick={this.changeMainContents()} />

        <div id="mainContents" style={{padding:'20px'}}>
          {this.state.selectedMainContents}
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
