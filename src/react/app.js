import React from "react";
import { render } from 'react-dom';

const stateLess = (props) => {
    return <div>{'Component'}</div>
};

class stateFull extends React.Component {
    render () {
        return (
            <div>{'Component'}</div>
        )
    }
}

class pureComponent extends React.PureComponent {
    render () {
        return (
            <div>{'Component'}</div>
        )
    }
}

export default class RenderComponent extends React.Component {
    render() {
        const dots = Array(500).fill(0).map(x => {
            if(this.props.kind === 'stateful') {
                return React.createElement(stateFull, {}, {});
            }
            else if(this.props.kind === 'stateless') {
                return stateLess()
            }
            else if(this.props.kind === 'stateless-element') {
                return React.createElement(stateLess, {}, {});
            }
            else if(this.props.kind === 'pure') {
                return React.createElement(pureComponent, {}, {});
            }
        });

        return React.createElement('div', {}, ...dots);
    }
}
