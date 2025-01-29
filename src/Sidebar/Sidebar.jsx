import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import './style.css';

const Sidebar = () => (
    <section className='sidebar'>
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category />
        <Price />
        <Colors />
    </section>
);

export default Sidebar;
