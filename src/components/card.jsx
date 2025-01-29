import { BsFillBagFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
        <>
            <section className="card">
                <img src={img} alt={title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{title}</h3>
                    <section className="card-reviews">
                        {star} {star} {star} {star}
                        <span className="total-reviews">{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>${prevPrice}</del> ${newPrice}
                        </div>
                        <div className="bag">
                            <BsFillBagFill className="bag-icon" />
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    prevPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
};

export default Card;
