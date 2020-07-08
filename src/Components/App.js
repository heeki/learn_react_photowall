import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';

// allows you to access state as props
function mapStateToProps(state) {
    return {
        // each of these sub-elements of state is a reducer
        posts: state.posts,
        comments: state.comments
    }
}

// allows you to access action functions which are part of dispatch as props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

// withRouter() enables react router on the component
// connect() connects the redux store to the component
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;