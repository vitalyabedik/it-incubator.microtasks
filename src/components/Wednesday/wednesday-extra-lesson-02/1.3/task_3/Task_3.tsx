import React, {ChangeEvent, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from './Input';
import {TextComponent} from './Text';


//find the problem and fix it as part of composition optimization, memo, children

type PropsType = {
    children: React.ReactNode
}

export const MemoizedTask: React.FC<PropsType> = ({children}) => {
    // const [value, setValue] = useState('');
    //
    // const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    console.log('Task_3  re-render...')

    return (
        <div>
            {/*<div>Lags when change value</div>*/}
            {/*<input type="text" value={value} onChange={onChange} />*/}
            {/*      <SlowComponent/>*/}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <TextComponent/>
            <Input/>

            {children}
        </div>
    );
};

export const Task_3 = () => <MemoizedTask><SlowComponent/></MemoizedTask>