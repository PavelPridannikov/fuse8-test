import React from "react";
import "../../../sass/filterStyle.sass";

const Filter = ({filterValue, handleChangeFilterValue}) => {
    return (
        <section className="filter">
            <h3 className='filter__title'>
                Filter
            </h3>
            <input
                type="search"
                value={filterValue}
                onChange={handleChangeFilterValue}
                className="filter__search"
            />
        </section>
    );
};

export default React.memo(Filter);
