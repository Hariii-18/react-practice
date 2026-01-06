import './greeting.css'
import PropTypes from 'prop-types';


function greeting(props) {
    return (
        props.IsLoggedIn ?
            <h2 className="logged-in">Welcome  {props.userName}</h2> :
            <h2 className="not-loggedin"> Please Log in to continue !</h2>
    );
}
greeting = {
    userName: PropTypes.string,
    IsLoggedIn: PropTypes.bool,
}
export default greeting;