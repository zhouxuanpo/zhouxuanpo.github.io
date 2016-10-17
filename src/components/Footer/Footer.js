import React from 'react';





class Footer extends React.Component {
    render () {
        let styles = {
            padding:'35px 0 135px 0',
            textAlign: 'center',
            backgroundColor: '#212121',
            color: '#fff',
            // marginTop:'30px',
            width:'100vw'

        }
        return(
            <div style={styles}>
                <h2>只要我们能梦想的，我们就能实现。</h2>
            </div>
        )
    }

}

export default Footer;
