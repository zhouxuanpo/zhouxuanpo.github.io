 import React from 'react';


class Header extends React.Component {

    render () {
        let styles={
            headerStyle:{
                height:'80px',
                backgroundColor:'#00bcd4',
                minWidth:'600px',
            },
            h1Style:{
                padding:'25px 0',
                color:'#fff',
                textAlign:'center',
                lineHeight:'0.8em',
                fontSize:'36px',
                margin:'0 auto',
            }
        }

        return(
            <div style={styles.headerStyle}>
                <h1 style={styles.h1Style}>My Blogs</h1>
            </div>
        )

    }

}

export default Header;
