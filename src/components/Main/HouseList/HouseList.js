import React from "react";
import HouseItem from "../../AnyPage/HouseItem/HouseItem";
import "../../../sass/houseList.sass"

const HouseList = ({housesList}) => {
    return (
        <div className="house-list">
            {housesList.map(houseItem => (
                <HouseItem key={houseItem.id} houseItem={houseItem}/>
            ))}
        </div>
    );
};

export default React.memo(HouseList);
