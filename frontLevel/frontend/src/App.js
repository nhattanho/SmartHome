import React, {Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

class App extends Component {
    render() {
      return (
        <div className="demo-big-content">
          <Layout>
            <Header className="headerColor" title="Courses" scroll>
              <Navigation className="hoverLabel">                                   
                    <Link to="/home">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>

            <Drawer title="Courses">
              <Navigation className="drawer">
                  <Link to="/cmpr112"><a>CMPR112</a></Link>
                  <Link to="/cmpr120"><a>CMPR120</a></Link>
                  <Link to="/cmpr121"><a>CMPR121</a></Link>
                  <Link to="/cmpr131"><a>CMPR130</a></Link>
                  <Link to="/cmpr129"><a>CMPR129</a></Link>
              </Navigation>
            </Drawer>

            <Content>
              <div className="page-content" />
              <Main/>
            </Content>

          </Layout>
        </div>
      );
    }
}

export default App;
