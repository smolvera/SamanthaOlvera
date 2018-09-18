import React, { Component } from 'react';
import Form from "../Form/Form";


export default class Contact extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
            <div className="ten columns">
              <p className="lead">Available for Hire! Just contact me!
              </p>
            </div>
          </div>
          <div className="row">
            {/* <aside className="eigth columns footer-widgets"> */}
              <div className="widget">
              <div className="form-container">
              <Form />
              </div>
              </div>
            {/* </aside> */}
          </div>
      </section>
    );
  }
}