import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HouseItem from "../AnyPage/HouseItem/HouseItem";
import "../../sass/houseItemPageStyle.sass"

const HousePage = () => {
    const {id} = useParams();
    const [houseItem, setHouseItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleSuccessLoading = (houseItemResponse) => {
        setIsLoading(false);
        setHouseItem(houseItemResponse)
    }

    useEffect(() => {
        fetch(`https://603e38c548171b0017b2ecf7.mockapi.io/homes/${id}`)
            .then(response => response.json())
            .then(handleSuccessLoading)
            .catch(() => setIsLoading(false));
    }, []);

    console.log(houseItem);

    return (
        <section className="house">
            <div>
                {houseItem && (
                    <>
                        <h1>Текущий id дома: {id}</h1>
                        <HouseItem houseItem={houseItem}/>
                    </>
                )}
                {isLoading && <h1>Загрузка</h1>}
            </div>
        </section>
    );
};

export default React.memo(HousePage);
