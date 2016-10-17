import React from 'react'
import Header from './Header';
import EchartSkill from './EchartSkill';


class About extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
          }
      }
    return(
        <div className="echartDiv" style={styles.root}>
            <Header />
            <EchartSkill />
        </div>
    )
  }
}

export default About;
