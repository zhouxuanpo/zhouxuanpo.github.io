import React from 'react';
import BlogCard from './BlogCard';
import map from 'lodash/fp/map'
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';


//
// let blogs = [
//     {index:'1',title:'Hello World',date:'2016年7月8日'},
//     {index:'2',title:'React',date:'2016年7月1日'},
//     {index:'3',title:'Bootstrap',date:'2016年6月25日'},
//     {index:'4',title:'HTML5',date:'2016年6月16日'},
//     {index:'5',title:'CSS3',date:'2016年6月2日'},
//     {index:'6',title:'QQ',date:'2016年6月2日'},
//     {index:'7',title:'weChat',date:'2016年6月2日'},
//     {index:'8',title:'Good Job',date:'2016年6月2日'}
// ]


class List extends React.Component {
    constructor(){
        super();
        this.state={
          posts: '',
          wait: true
        }
      }

      componentDidMount(){
        // use math random to avoid browser cache
        let address = `https://raw.githubusercontent.com/zhouxuanpo/Big-Demo/master/posts/index.json?v=${Math.random()}`
        axios.get(address).then((res) => {
          this.setState({
            posts: res.data,
            wait: false
          });
        });
      }
    render () {
        console.log(this.props.search)
        let styles = {
            list:{
                width:'80%',
                margin:'0 auto',
                marginTop:'20px',
                overflow:'hidden',
                minWidth:'600px',
            },
            circle:{
              textAlign:'center',
              margin:'30px auto',
            }
        }
        var blogCards = [];
        map((b) =>  {
                      blogCards.push(
                        <BlogCard title={b.title} date={b.created_at } url={b.name} index={b.id} key={Math.random()}/>
                      );
                    },
            this.state.posts
        );
        return(
            <div className="cardList" style={styles.list}>
                {this.state.wait ? <div style={styles.circle}><CircularProgress size={1.5} /></div> : ''}
                {blogCards}
            </div>
        )
    }

}

export default List;
