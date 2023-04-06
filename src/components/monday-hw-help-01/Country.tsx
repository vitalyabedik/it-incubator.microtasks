import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./MoneyApp";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filter: BanknotsType) => void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        // засетаем 'All'
        props.setFilterValue('All')
    }

    const setDollars = () => {
        // засетаем 'Dollars'
        props.setFilterValue('Dollars')
    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
        props.setFilterValue('RUBLS')
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

