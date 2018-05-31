import React from "react";

console.log(process.env.KEY);

export default class App extends React.Component {
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>
    )
  }
}