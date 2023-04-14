import {Button} from './Button';
import React from 'react';
import {filterKeyType} from './Filter';

export type CurrentMoney = Array<Money>

type Money = {
    banknote: string
    nominal: number
    number: string
}

export type NewComponentPropsType = {
    currentMoney: CurrentMoney
    onClickFilterHandler: (filterName: filterKeyType) => void
}

export const NewComponent: React.FC<NewComponentPropsType> = (props) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
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
                <Button name={'all'} callback={() => props.onClickFilterHandler('all')}/>
                <Button name={'rubles'} callback={() => props.onClickFilterHandler('rubles')}/>
                <Button name={'dollars'} callback={() => props.onClickFilterHandler('dollars')}/>
            </div>
        </>
    )
}