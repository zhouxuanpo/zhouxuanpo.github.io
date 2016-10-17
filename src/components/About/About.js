import React from 'react'

class About extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
            //   background:'url("http://photo.enterdesk.com/2011-6-11/enterdesk.com-444FA91133B78903906517FD46FAC91C.jpg") no-repeat  fixed center center/cover'
          },
          h1:{
              color:'#fff',
              textAlign:'center',
              position:'absolute',
              top:'50%',
              marginTop:'-24px',
              left:'50%',
              marginLeft:'-64px',
          }
      }
    return(
        <div style={styles.root}>
          <h1 style={styles.h1}>about</h1>
        </div>
    )
  }
}

export default About;
