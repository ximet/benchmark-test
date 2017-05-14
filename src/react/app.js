import React from "react";
import { render } from 'react-dom';

const stateLess = (props) => {
  return <div>{'Component'}</div>
}

class stateFull extends React.Component {
    render () {
        <div>{'Component'}</div>
    }
}

class pureComponent extends React.PureComponent {
  render () {
      <div>{'Component'}</div>
  }
}
