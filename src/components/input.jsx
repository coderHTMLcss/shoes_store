import PropTypes from 'prop-types';
import { useFilter } from '../context/productContext';

const Input = ({ title, type = "radio", value, name, color, className = "", style = {} }) => {

    const { handleFilterChange } = useFilter();
    console.log(value);

    return (
        <label className={`sidebar-label-container ${className}`}>
            <input
                onChange={(e) => handleFilterChange(name, e.target.value)}
                type={type}
                value={value}
                name={name}
                aria-label={title}
            />
            <span
                style={{ backgroundColor: color, ...style }}
                className={`checkmark ${name === 'color' && value === '' ? ' all' : ''}`}>
            </span>
            {title}
        </label >
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Input;
