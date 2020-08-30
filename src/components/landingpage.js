import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://www.dreamingbytes.com/wp-content/uploads/2014/09/dott.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML5 | CSS | Bootstrap | Javascript | React | Redux | Sass |
                NodeJS | MongoDB
              </p>
              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/jorgediaz1984/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*Github*/}
                <a
                  href="http://github.com/jorgediazok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/*Freecodecamp*/}
                <a
                  href="https://www.freecodecamp.org/jorgediazok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
