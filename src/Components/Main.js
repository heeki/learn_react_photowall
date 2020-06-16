import React, {Component} from 'react';
import Title from './Title';
import PhotoGrid from './PhotoGrid';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';

function fetchPosts() {
  return [{
    id: 0,
    description: 'Waterfall',
    imageLink: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  },
  {
    id: 1,
    description: 'Canyon',
    imageLink: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&h=750&w=1260'
  },
  {
    id: 2,
    description: 'Galaxy Archway',
    imageLink: 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260'
  },
  {
    id: 3,
    description: 'Aurora Borealis',
    imageLink: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  }]
}

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.addPhoto = this.addPhoto.bind(this);
    this.removePhoto = this.removePhoto.bind(this);
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted])
    }));
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }));
  }

  componentDidMount() {
    const data = fetchPosts();
    this.setState({
      posts: data
    });
  }

  render() {
    console.log(this.state.posts);
    return <div>
      <Route exact path="/" render={() => (
        <div>
          <Title title={'Photowall'} />
          <PhotoGrid posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
        </div>
      )} />
      <Route path="/AddPhoto" render={({history}) => (
        <div>
          <AddPhoto onAddPhoto={(addedPost) => {
            this.addPhoto(addedPost);
            history.push('/');
          }} />
        </div>
      )} />
    </div>
  }
}

export default Main;