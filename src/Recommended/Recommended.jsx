import Button from '../components/button';
import { useFilter } from '../context/productContext';
import './style.css';

const Recommended = () => {
  const { handleFilterChange } = useFilter();

  const tabs = [
    { value: "", title: "All Products" },
    { value: "Nike", title: "Nike" },
    { value: "Adidas", title: "Adidas" },
    { value: "Puma", title: "Puma" },
    { value: "Vans", title: "Vans" },
  ];

  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        {tabs.map(({ value, title }) => (
          <Button
            key={title}
            title={title}
            name='company'
            value={value}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
