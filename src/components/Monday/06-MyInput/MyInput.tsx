import {useState} from 'react';

import {FullInput} from './FullInput';
import {Input} from './Input';
import {Button} from './Button';


export const MyInput = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([ newMessage, ...message])
    }

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={callbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}