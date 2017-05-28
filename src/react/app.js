import React from "react";
import { render } from 'react-dom';

const stateLess = (props) => {
    return <div>{'Component'}</div>
};

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

export default class RenderComponent extends React.Component {
    render() {
        var dots = Array(500).fill(0).map(x => {
            if(this.props.kind == 'stateful') {
                return stateFull();
            } else if(this.props.kind == 'stateless') {
                return stateLess();
            } else if(this.props.kind == 'pure') {
                return pureComponent();
            }
        });
        return React.createElement('div', {}, ...dots);
    }
}
