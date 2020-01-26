import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jorge Díaz</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '2em' }}>
              I am a Full Stack Web Developer based in Buenos Aires, Argentina.
              I have been studying and working in personal projects during the
              last 2 years and now i am looking for a stable job in a company
              where i can develop myself both as a professional and as a creator
              of contents.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+549) 1136494908
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    (+549) 1136494908
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    jorgediazok@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    jorgediazok
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
