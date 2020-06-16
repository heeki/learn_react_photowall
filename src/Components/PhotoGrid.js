import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PhotoGrid extends Component {
    render() {
        return <div>
            <Link className="add-button" to="/AddPhoto"></Link>
            <div className="grid">
                {this.props.posts
                    .sort((x,y) => y.id - x.id)
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto} />)}
            </div>
        </div>
    }
}

PhotoGrid.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// function PhotoGrid(props) {
//     return <div className="grid">
//         {props.posts.map((post, index) => <Photo key={index} post={post} />)}
//     </div>
// }

export default PhotoGrid;