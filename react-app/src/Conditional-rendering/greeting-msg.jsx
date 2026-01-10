import './greeting.css';
import PropTypes from 'prop-types';

function Greeting({ isLoggedIn, userName }) {
    return (
        <h2 className={isLoggedIn ? "logged-in" : "not-loggedin"}>
            {isLoggedIn ? `Welcome, ${userName}!` : `Hello guest, Please Log-in`}
        </h2>
    );
}

Greeting.propTypes = {
    userName: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};

export default Greeting;