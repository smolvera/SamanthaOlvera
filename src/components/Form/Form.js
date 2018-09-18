import React, { Component } from "react";
import Field from "./Field";
import Button from "./Button";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return(
            <div className="contact form">
                {/* Name Field */}
                <Field 
                id="name"
                label="Name"
                onChange={(event) => this.updateField("name", event.target.value)} 
                value={this.state.name} />
                {/* Email Field */}
                <Field 
                id="email"
                label="Email"
                onChange={(event) => this.updateField("email", event.target.value)} 
                value={this.state.email} />
                {/* Message Field */}
                <Field 
                id="message"
                label="Message"
                onChange={(event) => this.updateField("message", event.target.value)} 
                textarea={true}
                value={this.state.message} />
                {/* Submit Button */}
                <Button formValues={this.state} email="smolvera2010.so@gmail.com" />
            </div>
        )
            
        
    }

}

export default Form;