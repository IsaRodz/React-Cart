import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './scss/Toast.scss';

class Toast extends Component {
    remove() {
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    render() {

        return (
            <div id="toast" className="toast" onClick={this.remove} >
                {this.props.text}!
            </div>
        )
    }
}
export default Toast;