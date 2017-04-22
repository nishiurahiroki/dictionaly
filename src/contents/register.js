import React from 'react';


export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <div>
          和名 : <input type="text" name="japanaseName" value="" />
        </div>
        <div>
          英名 : <input type="text" name="englishName" value="" />
        </div>
        <div>
          説明 : <textarea name="description"></textarea>
        </div>
      </form>
    )
  }
}
