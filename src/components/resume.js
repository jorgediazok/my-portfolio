import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'left' }}>
              <img
                src="https://avatars1.githubusercontent.com/u/47897689?s=460&u=0bb395d093ce35cd806306d0c62b1d86aebfbaa1&v=4"
                alt="avatar"
                style={{
                  height: '210px',
                  width: '210px',
                  marginLeft: '120px',
                  borderRadius: '160px',
                }}
              />
              <h2 style={{ paddingTop: '0.4em', textAlign: 'center' }}>
                Jorge Díaz
              </h2>
              <h4 style={{ color: 'grey', marginTop: '20px' }}>Programmer</h4>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%',
                }}
              />
              <p>
                I am looking for a position as web developer. During the last
                year i had been studying different programming languages and
                building my own projects. I would like to work in a company that
                values the compromise but also the creativity
              </p>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%',
                }}
              />
              <h5>Address</h5>
              <p>Peru 1088, San Telmo, Buenos Aires</p>
              <h5>Phone</h5>
              <p>(+549) 1136494908</p>
              <h5>Email</h5>
              <p>jorgediazok@gmail.com</p>
              <h5>Web</h5>
              <p>www.jdwebdevelopment.com</p>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%',
                }}
              />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="UTN (National Technological University)"
              schoolDescription="Certification in advanced Web Development (HTML/CSS/JAVASCRIPT) and Certificacion in REACT JS"
            />

            <Education
              startYear={2009}
              endYear={2019}
              schoolName="University of Buenos Aires"
              schoolDescription="Social Communication Graduate. Journalism specialization"
            />
            <Education
              startYear={1997}
              endYear={2001}
              schoolName="Instituto San Román"
              schoolDescription="Commercial Bachelor"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2012}
              endYear={2018}
              jobName="Rec Hospi Agrupación"
              jobDescription="Processing into a database information from all the public hospitals in Buenos Aires."
            />
            <Experience
              startYear={2008}
              endYear={2011}
              jobName="IFR Monitoring Enterprise"
              jobDescription="Marketing research company."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill="HTML5" progress={100} />
            <Skills skill="CSS3" progress={100} />
            <Skills skill="Bootstrap" progress={100} />
            <Skills skill="Sass" progress={90} />
            <Skills skill="Javascript" progress={90} />
            <Skills skill="React JS" progress={80} />
            <Skills skill="Redux" progress={60} />
            <Skills skill="Node JS" progress={60} />
            <Skills skill="MongoDB" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
