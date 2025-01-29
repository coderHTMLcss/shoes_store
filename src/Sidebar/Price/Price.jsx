import Input from '../../components/input';
import './style.css';

const Price = () => {
    const priceRanges = [
        { value: "", title: "All" },
        { value: "50", title: "$0 - $50" },
        { value: "100", title: "$50 - $100" },
        { value: "150", title: "$100 - $150" },
        { value: "200", title: "Over $150" },
    ];

    return (
        <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>
            {priceRanges.map(({ value, title }) => (
                <Input
                    key={value}
                    title={title}
                    value={value}
                    name="price"
                    type="radio"
                />
            ))}
        </div>
    );
};

export default Price;
