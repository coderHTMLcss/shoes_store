import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import products from "../db/data";
import Card from "../components/card";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: null,
        color: null,
        company: null,
        price: null,
        query: "",
    });

    const handleInputChange = (value) => {
        setFilters((prev) => ({ ...prev, query: value }));
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value !== "" ? value : null,
        }));
    };

    const filteredData = products
        .filter(({ title }) =>
            filters.query
                ? title.toLowerCase().includes(filters.query.toLowerCase())
                : true
        )
        .filter(({ category, color, company, newPrice }) =>
            (filters.category ? category === filters.category : true) &&
            (filters.color ? color === filters.color : true) &&
            (filters.company ? company === filters.company : true) &&
            (filters.price ? newPrice === parseFloat(filters.price) : true)
        )
        .map(({ img, title, star, reviews, prevPrice, newPrice }) => (
            <Card
                key={title}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
            />
        ));

    return (
        <FilterContext.Provider
            value={{
                filters,
                handleInputChange,
                handleFilterChange,
                filteredData
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

FilterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
