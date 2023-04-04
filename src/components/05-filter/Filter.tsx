import {useState} from 'react';
import {Button} from './Button';

type filterKeyType = 'all' | 'rubles' | 'dollars'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a123456789'},
        {banknote: 'dollar', nominal: 50, number: 'b123456789'},
        {banknote: 'ruble', nominal: 100, number: 'c123456789'},
        {banknote: 'dollar', nominal: 100, number: 'd123456789'},
        {banknote: 'dollar', nominal: 50, number: 'e123456789'},
        {banknote: 'ruble', nominal: 100, number: 'f123456789'},
        {banknote: 'dollar', nominal: 50, number: 'j123456789'},
        {banknote: 'ruble', nominal: 50, number: 'h123456789'}
    ])
    const [filterName, setFilterName] = useState<filterKeyType>('all')

    const onClickFilterHandler = (filterKey: filterKeyType) => {
        setFilterName(filterKey)
    }

    let currentMoney = money

    if (filterName === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar')
    }
    if (filterName === 'rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')
    }


    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callback={() => onClickFilterHandler('all')}/>
                <Button name={'rubles'} callback={() => onClickFilterHandler('rubles')}/>
                <Button name={'dollars'} callback={() => onClickFilterHandler('dollars')}/>
            </div>
        </div>
    );
}