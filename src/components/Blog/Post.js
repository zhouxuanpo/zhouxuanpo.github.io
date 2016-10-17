import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import Header from './Header';
import hljs from 'highlight.js';


class Post extends Component {
  constructor(){
    super();
    this.state={
      rawContent: ''
    }
  }

  componentDidMount(){
    // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/zhouxuanpo/Big-Demo/master/posts/${this.props.params.title}.md?v=${Math.random()}`
    axios.get(address).then((res) => {
      console.log(res);
      console.log(address);
      this.setState({
        rawContent: res.data
      });
    });
  }

  render(){
    let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
    let styles={
        post_content:{
            width:'60%',
            margin:'0 auto',

        }
    }

    // { this.props.params.title }
    return(
      <div>
        <Header />
        <div className="post-content" style={styles.post_content}>
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default Post;
