import {ChangeEvent, useState} from 'react';

type InputPropsType = {
    title: string
    setTitle: (message: string) => void
}

export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement> ) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
}