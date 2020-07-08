import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photo extends Component {
    render() {
        const post = this.props.post;
        return <figure className="figure">
            <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link> 
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button onClick={() => {
                    this.props.removePost(this.props.index);
                    this.props.history.push('/');
                }}>Remove</button>
                <Link to={`/single/${post.id}`} className="button" >
                    <div className="comment-count">
                        <div className="speech-bubble"></div>&nbsp;
                        {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                    </div>
                </Link>
            </div>
        </figure>
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

// function Photo(props) {
//     const post = props.post;
//     return <figure className="figure">
//         <img className="photo" src={post.imageLink} alt={post.description} />
//         <figcaption><p>{post.description}</p></figcaption>
//         <div className="button-container"><button className="remove-button">Remove</button></div>
//     </figure>
// }

export default Photo;