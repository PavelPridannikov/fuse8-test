import {useEffect, useMemo, useState} from "react";

export const useMain = () => {
    const [hasError, setHasError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [housesList, setHousesList] = useState([]);
    const [filterValue, setFilterValue] = useState("");

    const isVisibleHousesList = useMemo(() => {
        return !isLoading && !hasError;
    }, [isLoading, hasError]);

    const filterHouseList = useMemo(() => {
        if (filterValue.length >= 3) {
            return housesList.filter(houseItem => houseItem.title.toLowerCase().includes(filterValue.toLowerCase()))
        }
        return housesList;
    }, [housesList, filterValue]);

    console.log(filterHouseList);

    const handleChangeFilterValue = (e) => {
        setFilterValue(e.target.value);
    }

    const handleErrorLoading = (error) => {
        setIsLoading(false);
        setHasError(error.message);
    }

    const handleSuccessLoading = (housesList) => {
        setHousesList(housesList)
        setIsLoading(false)
    }

    useEffect(() => {
        fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
            .then(response => response.json())
            .then(handleSuccessLoading)
            .catch(handleErrorLoading)
    }, []);

    return {
        hasError,
        isLoading,
        housesList,
        filterValue,
        filterHouseList,
        isVisibleHousesList,
        handleChangeFilterValue,
    };
};
