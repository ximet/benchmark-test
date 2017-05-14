import React from "react";
import { render } from 'react-dom';

export const stateLess = (props) => {
    return <div>{'Component'}</div>
}

export class stateFull extends React.Component {
    render () {
        <div>{'Component'}</div>
    }
}

export class pureComponent extends React.PureComponent {
    render () {
        <div>{'Component'}</div>
    }
}
