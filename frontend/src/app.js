import React from 'react';
import ReactDom from 'react-dom';

import Header from './header';
import SideMenu from './sideMenu';

import Screen from './util/screen';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMainContents : ''
    };
  }

  changeMainContents() {
    return (e) => {
      let key = e.target.getAttribute('data-screen-key');
      this.setState({
        selectedMainContents : Screen.get(key)
      });
    };
  }

  render () {
    return (
      <div id="main">
        <Header text="辞書登録" />
        <SideMenu menus={Screen.getMenuInfos()} onClick={this.changeMainContents()} />

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
