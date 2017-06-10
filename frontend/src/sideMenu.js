import React from 'react';

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus : props.menus,
      changeSideMenu : props.onClick
    };
  }

  getMenus() {
    let parent = this.state;
    return parent.menus.map((menu) => {
      return (
        <li key={menu.key}
            data-screen-key={menu.key}
            onClick={parent.changeSideMenu}>
          {menu.name}
        </li>
      )
    });
  }

  render() {
    return (
      <div className="left">
        <ul>
          {this.getMenus()}
        </ul>
      </div>
    )
  }
}
