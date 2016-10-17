import React from 'react';
import Repos from './Repos';
import github from './github';
import isEmpty from 'lodash/isEmpty';
import {Card} from 'material-ui/Card';
import UserInfo from './UserInfo';


class AutoAxios extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user: {},
            repos: {},
            wait: true
        }
    }
    componentDidMount(){
        github.getGithubInfo('zhouxuanpo').then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos,
          wait: false
        });
      });
    }
    render () {
        let styles = {
            root:{

                 paddingTop: '20px',
                 width:'60vw',
                 margin:'0 auto',
                 marginTop:'40px',
                 textAlign:'center',
                 overflow:'hidden',
                 border:'2px solid #ccc',
                 borderRadius:'7px'
            },
            imgBox:{
                width:'10rem',
                height:'10rem',
                margin:'0 auto',
            },
            img:{
                width:'100%',
                borderRadius:'50%',
            },
            bigbox:{
                width:'45.2rem',
                margin:'0 auto',
                paddingTop:'30px',
                overflow:'hidden',
            },
            smallbox:{
                float:'left',
                width:'15rem',
                borderLeft:'1px solid #ddd'
            },
            smallbox_1:{
                float:'left',
                width:'15rem',
                borderLeft:'none',
            },
            smallbox_h3:{
                marginBottom:'8px',
                color:'#4078c0',
            }


        }

        let GitHubInfo;

            if(!isEmpty(this.state.user)) {
              GitHubInfo = (
                 <div>
                    <UserInfo userInfo={this.state.user} />
                    <Repos repos={this.state.repos} />
                 </div>
              );
            }

        return(
          <div className='account'>
            <Card className="content">
                {this.state.wait ? <p>Reading Data from Github...</p> : ''}
                { GitHubInfo }
            </Card>
          </div>
        )
    }
}




export default AutoAxios;
