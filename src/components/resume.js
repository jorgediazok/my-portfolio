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
                src="data:image/jpeg;base64,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"
                alt="avatar"
                style={{ height: '300px', marginLeft: '70px' }}
              />
              <h2 style={{ paddingTop: '0.4em', textAlign: 'center' }}>
                Jorge Díaz
              </h2>
              <h4 style={{ color: 'grey' }}>Programmer</h4>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%'
                }}
              />
              <p>
                I am looking for my first job as a web developer. During the
                last two years i had been studying hard different programming
                languages and building my own projects. I would like to work in
                a company that values the compromise but also the creativity
              </p>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%'
                }}
              />
              <h5>Address</h5>
              <p>Luis Braille 1764, Florencio Varela, Buenos Aires</p>
              <h5>Phone</h5>
              <p>(+549) 1136494908</p>
              <h5>Email</h5>
              <p>jorgediazok@gmail.com</p>
              <h5>Web</h5>
              <p>www.jdwebdevelopment.com</p>
              <hr
                style={{
                  borderTop: '3px solid #833fb2',
                  width: '50%'
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
              startYear={2018}
              endYear={2012}
              jobName="Rec Hospi Agrupación"
              jobDescription="Processing into a database information from all the public hospitals in Buenos Aires."
            />
            <Experience
              startYear={2011}
              endYear={2008}
              jobName="IFR Monitoring Enterprise"
              jobDescription="Marketing research company."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill="HTML5" progress={100} />
            <Skills skill="CSS3" progress={100} />
            <Skills skill="Javascript" progress={100} />
            <Skills skill="MySQL" progress={100} />
            <Skills skill="React JS" progress={80} />
            <Skills skill="Node JS" progress={60} />
            <Skills skill="MongoDB" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
