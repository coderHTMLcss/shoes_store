import Input from '../../components/input';
import './style.css';

const Category = () => {
    const categories = ['All', 'Sneakers', 'Flats', 'Sandals', 'Heels',
        { value: '', title: 'All' },
        { value: 'sneakers', title: 'Sneakers' },
        { value: 'flats', title: 'Flats' },
        { value: 'sandals', title: 'Sandals' },
        { value: 'heels', title: 'Heels' },
    ];

    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            {categories.map(({ value, title }) => (
                <Input
                    key={title}
                    title={title}
                    value={value}
                    name="category"
                    type="radio"
                />
            ))}
        </div>
    );
};

export default Category;
