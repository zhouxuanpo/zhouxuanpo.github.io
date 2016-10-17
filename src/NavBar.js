import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle(){
      this.setState({open: !this.state.open});
  }
  handleClose(){
      this.setState({open:false});
  }

  render() {
    let styles = {
        draw : {
            textAlign:'center',
            // zIndex:'22',
        },
        menuItem:{
            color:'#fff',
            cursor:'pointer',
            marginTop:'5px',
        },
        top:{
            color:'rgb(0, 188, 212)',
            backgroundColor:'rgba(0, 0, 0, 0.5)',
            height:'80px',
            lineHeight:'80px',
            fontSize:'24px'
        },
        link:{
            display:'block',
            textDecoration:'none',
            color:'#000'
        },
        containerStyles:{
            background:'rgba(255,255,255,0.85) 0%',
            zIndex:'211112',
        }
    }

    // <AppBar title="ZhouXuan@"  onTouchTap={this.handleClose.bind(this)} />
    return (
      <div style={styles.draw}  >
        <Drawer
        className="aaa"
          docked={false}
          width={230}
          containerStyle={styles.containerStyles}
          style={styles.draw}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem style={styles.top}>ZhouXuan@</MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/" style={styles.link}>Home</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/githubInfo" style={styles.link}>Github Info</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/blog" style={styles.link}>Blog</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/skill" style={styles.link}>Skill</Link></MenuItem>
          <MenuItem style={styles.menuItem} onTouchTap={this.handleClose.bind(this)}><Link to="/about" style={styles.link}>About</Link></MenuItem>
        </Drawer>
      </div>
    );
  }
}
