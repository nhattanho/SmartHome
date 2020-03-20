import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Card } from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projectGrid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/163149/0120-Stale-while-revalidate_Data_Fetching_with_React_Hooks-Waldek_Newsletter-5222468607946967fa1b0a4525326739.png) center / cover'}}>
                            React Project
                        </CardTitle>
                        <CardText>
                            Some of my first landing on React
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/nhattanho/firstReact' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" /> {/*show icon share on card*/}
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lycasoft.com/wp-content/uploads/2019/05/MeanStack-training-in-Coimbatore.png) center / cover'}}>
                            MeanStack Project
                        </CardTitle>
                        <CardText>
                            Some of my first landing on MeanStack
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/nhattanho/firstMeanstack' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" /> {/*show icon share on card*/}
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_Biweekly_Contest_Ad.85897f7dd.png) center / cover'}}>
                            LeetCode Practices
                        </CardTitle>
                        <CardText>
                            My solutions for some of LeetCode questions
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/nhattanho/LeetcodePractices' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" /> {/*show icon share on card*/}
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fscl01.fonpit.de/userfiles/7611461/image/smart-home_07.jpg) center / cover'}}>
                            SmartHome Project
                        </CardTitle>
                        <CardText>
                            I am trying to build a SmartHome system
                        </CardText>
                        <CardActions border>
                            <a href='https://github.com/nhattanho/SmartHome' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                            <Button colored>MainPage</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" /> {/*show icon share on card*/}
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/163149/0120-Stale-while-revalidate_Data_Fetching_with_React_Hooks-Waldek_Newsletter-5222468607946967fa1b0a4525326739.png) center / cover'}}>
                        React Project
                    </CardTitle>
                    <CardText>
                        Some of my first landing on React
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/nhattanho/firstReact' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" /> {/*show icon share on card*/}
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 2){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://lycasoft.com/wp-content/uploads/2019/05/MeanStack-training-in-Coimbatore.png) center / cover'}}>
                        MeanStack Project
                    </CardTitle>
                    <CardText>
                        Some of my first landing on MeanStack
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/nhattanho/firstMeanstack' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" /> {/*show icon share on card*/}
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 3){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_Biweekly_Contest_Ad.85897f7dd.png) center / cover'}}>
                        LeetCode Practices
                    </CardTitle>
                    <CardText>
                        My solutions for some of LeetCode questions
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/nhattanho/LeetcodePractices' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" /> {/*show icon share on card*/}
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 4){
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://fscl01.fonpit.de/userfiles/7611461/image/smart-home_07.jpg) center / cover'}}>
                        SmartHome Project
                    </CardTitle>
                    <CardText>
                        I am trying to build a SmartHome system
                    </CardText>
                    <CardActions border>
                        <a href='https://github.com/nhattanho/SmartHome' target="_blank"><button class="mdl-js-button mdl-js-ripple-effect mdl-button mdl-button--colored">GitHub</button></a>
                        <Button colored>MainPage</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" /> {/*show icon share on card*/}
                    </CardMenu>
                </Card>
            )
        }
    }
    render(){
        return(
            <div className="categoryTabs">
                <Tabs className="hoverLabel" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>All</Tab>
                    <Tab>React</Tab>
                    <Tab>MeanStack</Tab>
                    <Tab>LeetCodePractices</Tab>
                    <Tab>SmartHome</Tab>
                </Tabs> 

                {/*<section className="projectGrid">*/}
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>       
                {/*</section>  */}
            </div> 
        )
    }
}

export default Project;