import {useState} from 'react';

export const HookUseState = () => {

    // let a = 1
    let [a, setA] = useState(1)

    const onclickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClear = () => {
        setA(0)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onClear}>0</button>
        </div>
    )
}