import React from 'react';
import { Router , hashHistory } from 'react-router';



class BlogCard extends React.Component {
    // handleClick(){
    //     hashHistory.push(`blog/${this.props.url}`);
    // }
    handleClick(){
        this.context.router.push(`blog/${this.props.url}`);
    }
    render () {
        console.log(this.props.url)
        let smallBody={
            float:'left',
            textDecoration:'none',
            width:'100%',
            height:'90px',
            margin:'15px 0',
            color:'#777777',
            // boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
            cursor:'pointer',
        }
        let leftBar={
            float:'left',
            color: '#fff',
            width:'12%',
            height:'90px',
            backgroundColor: '#00bcd4',
            fontSize: '1.2em',
            lineHeight:'2.5em',
            textAlign:'center',
            verticalAlign: 'middle',
        }
        let centerBar={
            width:'85%',
            height:'90px',
            float:'right',
            paddingLeft:'10px',
            fontSize: '16px',
            lineHeight:'16px'
        }
        let title={
        }
        let date={
            paddingBottom:'20px',
        }
        return (
            <a className='card' style={smallBody} onClick={this.handleClick.bind(this)}>
                <div style={leftBar}>
                    <p>{this.props.index}</p>
                </div>
                <div style={centerBar}>
                    <h3 style={title}>{this.props.title}</h3>
                    <p style={date}>{this.props.date}</p>
                </div>
            </a>
        );
    }

}
BlogCard.contextTypes = {
    router:React.PropTypes.object.isRequired
}
export default BlogCard;
