import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        {/* Skills Section */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          {/* add a row here to change skills layout */}
          <div className="nine columns main-col">

            <p>
            {resumeData.skillsDescription}
            </p>

          <div className="bars">

            <ul className="skills">
            {
              resumeData.skills && resumeData.skills.map((item, index) => {
                return(
                  <li key={index}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skillname}</em>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* Education Section */}
        <div className="row education">

          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item, index)=>{
                return(
                  <div className="row item" key={index}>
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                        {item.Achievements}
                        </p>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Work Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item, index) => {
                return(
                  <div className="row item" key={index}>
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                        <p>
                        {item.Achievements}
                        </p>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
   		</div>
      </div>
      </section>
    );
  }
}