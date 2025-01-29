import PropTypes from 'prop-types';

const Button = ({ handleFilterChange, name, value, title }) => {
    return (
        <button
            onClick={() => handleFilterChange(name, value)}
            className="btns"
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Button;
