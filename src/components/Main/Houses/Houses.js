import React from "react";
import Loading from "../../AnyPage/Loading/Loading";
import Error from "../../AnyPage/Error/Error";
import HouseList from "../HouseList/HouseList";
import Empty from "../../AnyPage/Empty/Empty";

const Houses = ({housesList, isLoading, hasError, isVisibleHousesList, }) => {
    return (
        <section>
            {isLoading && <Loading/>}
            {hasError && <Error errorMessage={hasError}/>}
            {isVisibleHousesList ? housesList.length ? <HouseList housesList={housesList}/> : <Empty/> : null}
        </section>
    );
};

export default React.memo(Houses);
