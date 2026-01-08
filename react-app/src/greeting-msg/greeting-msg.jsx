import './greeting.css';
import PropTypes from 'prop-types';

function Greeting({ isLoggedIn, userName }) {
    return (
        <h2>
            {isLoggedIn ? `Welcome back, ${userName}!` : `Hello, guest!`}
        </h2>
    );
}

Greeting.propTypes = {
    userName: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};

export default Greeting;