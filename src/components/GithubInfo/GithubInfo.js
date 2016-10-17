import React from 'react'
import AutoAxios from './AutoAxios';
import Header from './Header';


class GithubInfo extends React.Component {
  render () {
    return(
        <div>
            <Header />
            <AutoAxios />
        </div>

    )
  }
}

export default GithubInfo;
