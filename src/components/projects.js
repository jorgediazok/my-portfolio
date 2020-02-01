import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con React y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              React Social - Proyecto realizado enteramente con React y
              Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Alberto Chatbot - Proyecto realizado enteramente con React y
              MongoDB.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/jorgediazok/todo-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'grey',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/angular-icon.svg) center / cover'
              }}
            >
              Angular Project #1
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con Angular y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'grey',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/angular-icon.svg) center / cover'
              }}
            >
              Angular Project #2
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con Angular y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'grey',
                height: '176px',
                background:
                  'url(https://cdn.worldvectorlogo.com/logos/angular-icon.svg) center / cover'
              }}
            >
              Angular Project #3
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con Angular y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/jorgediazok/todo-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#4d4dff',
                height: '176px',
                background:
                  'url(https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png) center / cover'
              }}
            >
              VueJS Project #1
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con VueJS y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#4d4dff',
                height: '176px',
                background:
                  'url(https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png) center / cover'
              }}
            >
              VueJS Project #2
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con VueJS y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#4d4dff ',
                height: '176px',
                background:
                  'url(https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png) center / cover'
              }}
            >
              VueJS Project #3
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con VueJS y Firebase.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/jorgediazok/todo-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/*Project 1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#662200',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1zVY7B77VnDrviTTriMeaXMt834xntk9m2ljKoExuw2LFQv58w&s) center / cover'
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con MongoDB.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 2*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#662200',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1zVY7B77VnDrviTTriMeaXMt834xntk9m2ljKoExuw2LFQv58w&s) center / cover'
              }}
            >
              MongoDB Project #2
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con MongoDB.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#662200',
                height: '176px',
                background:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1zVY7B77VnDrviTTriMeaXMt834xntk9m2ljKoExuw2LFQv58w&s) center / cover'
              }}
            >
              MongoDB Project #3
            </CardTitle>
            <CardText>
              ToDo List - Proyecto realizado enteramente con MongoDB.
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/jorgediazok/todo-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'blue' }}
                >
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
