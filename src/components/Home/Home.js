import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
            //   background:'url("http://g.hiphotos.baidu.com/image/pic/item/5882b2b7d0a20cf4c7e9bd9973094b36acaf997f.jpg") no-repeat  fixed center center/cover'
            //   background:'url("http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1402/12/c1/31189058_1392186616852.jpg") no-repeat  fixed center center/cover'
        //   },//车
              background:'url("https://raw.githubusercontent.com/zhouxuanpo/Big-Demo/master/src/images/xueshan.jpg") no-repeat  fixed center center/cover'
          },
          h1:{
              width:'100%',
              color:'#fff',
              opacity:'0.5',
              textAlign:'center',
              position:'absolute',
              top:'50%',
              marginTop:'-136px',
              fontSize:'72px',
              padding:'100px 0',
              zIndex:'1',
              background:'#000',
          }

      }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>WELCOME</h1>
      </div>
    )
  }
}

export default Home;
