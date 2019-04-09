import React, { Component } from "react";
import propTypes from 'prop-types';

class Button extends Component {
    static propTypes={
        email: propTypes.string.isRequired,
        formValues: propTypes.shape({
            name: propTypes.string.isRequired,
            email: propTypes.string.isRequired,
            message: propTypes.string.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log(this.props.formValues)
    }

    render() {
        const recipient=`mailto:${this.props.email}`;
        const subject=`?subject=Interested%20Client`;
        const body=`&body=${this.props.formValues.message}`;
        return (
            
            <a 
            href={`${recipient}${subject}${body}`}
            onClick={this.logFormDataToConsole}
            className="btn"
            >
            <button>
            Click to Send
            </button>
            </a>
            
        );
    }
}

export default Button;