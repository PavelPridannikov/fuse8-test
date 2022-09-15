import React from "react";
import Filter from "./Filter/Filter";
import {useMain} from "./useMain";
import Houses from "./Houses/Houses";

const Main = () => {
    const {
        isLoading,
        hasError,
        filterValue,
        filterHouseList,
        isVisibleHousesList,
        handleChangeFilterValue,
    } = useMain();
    return (
        <main>
            <Filter
                filterValue={filterValue}
                handleChangeFilterValue={handleChangeFilterValue}
            />
            <Houses
                housesList={filterHouseList}
                isLoading={isLoading}
                hasError={hasError}
                isVisibleHousesList={isVisibleHousesList}
            />
        </main>
    );
};

export default React.memo(Main);
