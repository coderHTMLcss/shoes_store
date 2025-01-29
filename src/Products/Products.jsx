import { useFilter } from '../context/productContext';
import './style.css';

const Products = () => {
    const { filteredData } = useFilter();

    return (
        <>
            <section className='product'>
                <ul className='card-container'>
                    {filteredData}
                </ul>
            </section>
        </>
    )
}

export default Products;
