import React from "react";
import propTypes from 'prop-types';


const Field = (props) => (
    <div>
        <label>{props.label}</label>
    
        <input type={props.textarea ? "textarea" : "text"}
        onChange={props.onChange}
        value={props.value}
        />
    </div>
    );

Field.propTypes = {
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
    textarea: propTypes.bool.isRequired,
};

Field.defaultProps = {
    textarea: false,
}
export default Field;