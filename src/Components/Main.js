import React, {Component} from 'react';
import PhotoGrid from './PhotoGrid';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {
  render() {
    return <div>
      <h1>
        <Link to="/">Photowall</Link>
      </h1>
      <Route exact path="/" render={() => (
        <div>
          <PhotoGrid {...this.props} />
        </div>
      )} />
      <Route path="/AddPhoto" render={({history}) => (
        <div>
          <AddPhoto {...this.props} onHistory={history} />
        </div>
      )} />
      <Route path="/single/:id" render={(params) => (
          <Single {...this.props} {...params} />
      )} />
    </div>
  }
}

export default Main;