import React, { Component } from 'react';
import Search from './molecules/Search.jsx';

import Result from './molecules/Result.jsx'

export default class App extends Component {

  render() {
    const { requestPosts } = this.props.actions;
    return (
      <div className="appWrap">
        <h1>Github Repository Search</h1>
        <div className="search">
          <Search changeText={requestPosts} textValue={this.props.app.keyword} />
        </div>
        {(() => {
          if (this.props.app.repos.length > 0){
            return (
              <div className="result">
                <Result repos={this.props.app.repos} />
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
