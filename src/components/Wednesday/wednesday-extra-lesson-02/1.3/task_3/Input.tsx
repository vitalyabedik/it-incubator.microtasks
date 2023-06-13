import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
    console.log('Input  re-render...')

    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <input type="text" value={value} onChange={onChange} />
    );
};

