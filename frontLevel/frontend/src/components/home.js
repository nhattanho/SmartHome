import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Home extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="homeGrid">
                    <Cell col={12}>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatarImage"
                        />

                        <div className="bannerText">
                            <h1>Welcome to my website</h1>
                            <hr/>
                            <p>My name is Nhat Ho, who is passionate about computer science</p>
                            
                            <div className="socialLink">
                                <a href="https://www.linkedin.com/in/nhat-ho-7518a1a2/" target="_blank" rel="noopener noreterrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="https://github.com/nhattanho" target="_blank" rel="noopener noreterrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="https://www.youtube.com/channel/UC6SmN_XPGFO5Sum5n1EVZjQ?view_as=subscriber" target="_blank" rel="noopener noreterrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;