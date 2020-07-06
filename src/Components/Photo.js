import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    render() {
        const post = this.props.post;
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container"><button onClick={() => {
                this.props.removePost(this.props.index)
            }}>Remove</button></div>
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