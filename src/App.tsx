import React from 'react';

import './App.css';

import {Button} from './components/03-MyButton/Button';

function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const doSmthButton = () => {
        console.log('i cant do smth, im stupid button')
    }

    return (
        <>
            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}

            <Button name={'MyYouTubeChannel-1'} callback={() => Button1Foo('im Vasya!', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callback={() => Button2Foo('im Ivan!', 30)}/>
            <Button name={'Im stupid button'} callback={doSmthButton}/>
        </>

    );
}

export default App;
