import Input from '../../components/input';
import './style.css';

const Colors = () => {
    const colors = [
        { value: "", title: "All" },
        { value: "black", title: "Black", color: "black" },
        { value: "blue", title: "Blue", color: "blue" },
        { value: "red", title: "Red", color: "red" },
        { value: "green", title: "Green", color: "green" },
        { value: "white", title: "White", color: "white", border: "2px solid black" },
    ];

    return (
        <>
            <h2 className="sidebar-title color-title">Color</h2>
            {colors.map(({ value, title, color, border }) => (
                <Input
                    key={value}
                    title={title}
                    value={value}
                    name="color"
                    color={color}
                    style={border ? { border } : {}}
                />
            ))}
        </>
    );
};

export default Colors;
