import React from "react";
import "../../../sass/houseItemStyle.sass";

const getNormalPrice = (housePrice) => {
    const price = housePrice.toString();
    return `${price.slice(0, 3)},${price.slice(3)}`
}

const getModificationStyle = (houseType) => {
    return houseType === "IndependentLiving" ? "house-item__type--IndependentLiving" :
        houseType === "SupportAvailable" ? "house-item__type--SupportAvailable"
            : ""
}

const HouseItem = ({houseItem}) => {
    const {id, title, price, address, type} = houseItem;
    const normalPrice = getNormalPrice(price);
    const modificationStyle = getModificationStyle(type);

    return (
        <div className="house-item">
            <a href={`/house/${id}`}>
                <div className="house-item__image-container">
                    <img
                        className="house-item__image"
                        src="https://source.unsplash.com/random/?house"
                        alt={`houseImage-${title}/${id}`}/>
                    <span className={`house-item__type ${modificationStyle}`}>{type}</span>
                </div>
                <div className="house-item__text">
                    <h4 className='house-item__title'>
                        {title}
                    </h4>
                    <p className="house-item__address">
                        {address}
                    </p>
                    <p className='house-item__price'>
                        New Properties for Sale from
                        <span className="house-item__price-number">
                            £{normalPrice}
                        </span>
                    </p>
                    <p className="house-item__servies">
                        Shared Ownership Available
                    </p>
                </div>
            </a>
        </div>
    );
};

export default React.memo(HouseItem);
