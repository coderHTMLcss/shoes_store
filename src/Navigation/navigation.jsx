import { FiHeart } from 'react-icons/fi';
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import { useFilter } from '../context/productContext';
import PropTypes from 'prop-types';
import './style.css';

const Navigation = ({ placeholder }) => {
    const { query, handleInputChange } = useFilter();

    const icons = [
        { icon: <FiHeart className="nav-icons" />, link: "#" },
        { icon: <AiOutlineShoppingCart className="nav-icons" />, link: "" },
        { icon: <AiOutlineUserAdd className="nav-icons" />, link: "" },
    ];

    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
            <ul className="profile-container">
                {icons.map(({ icon, link }, index) => (
                    <li key={index}>
                        <a href={link}>{icon}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default Navigation;
